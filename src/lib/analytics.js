/**
 * Reichweitenmessung.
 *
 * Zwei getrennte Wege, weil sie rechtlich nicht dasselbe sind:
 *
 *   Plausible  — cookiefrei, schreibt nichts auf das Endgerät, EU-gehostet.
 *                § 25 TDDDG greift nicht → lädt ohne Einwilligung.
 *   GA4        — setzt Cookies → § 25 Abs. 1 TDDDG → lädt AUSSCHLIESSLICH nach
 *                aktiver Einwilligung, und zwar erst dann, wenn der Nutzer
 *                geklickt hat. Nicht vorher, auch kein "cookieless Ping".
 *
 * Beide Einstiegspunkte sind absichtlich hier gebündelt: Kein Modul darf einen
 * Messdienst an der Consent-Registry vorbei laden.
 */

import { GA4_ID, PLAUSIBLE_DOMAIN, hasConsent, readConsent } from './consent'

/* ------------------------------------------------------------------ *
 * Plausible — einwilligungsfrei                                       *
 * ------------------------------------------------------------------ */

let plausibleLoaded = false

/**
 * Lädt Plausible. Kein Consent nötig, aber ein AVV mit Plausible schon —
 * und die Datenschutzerklärung muss den Dienst nennen.
 *
 * Seitenaufrufe bei Router-Wechseln erfasst das Skript selbst über die
 * History-API. Deshalb wird hier bewusst kein zusätzliches Pageview-Event
 * gefeuert — sonst zählt jeder Aufruf doppelt.
 */
export function initPlausible() {
  if (plausibleLoaded || !PLAUSIBLE_DOMAIN) return
  plausibleLoaded = true

  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://plausible.io/js/script.js'
  script.setAttribute('data-domain', PLAUSIBLE_DOMAIN)
  document.head.appendChild(script)
}

/* ------------------------------------------------------------------ *
 * Google Analytics 4 — nur nach Einwilligung                          *
 * ------------------------------------------------------------------ */

let ga4Loaded = false

function gtag() {
  window.dataLayer.push(arguments)
}

/**
 * Lädt GA4 — aber nur, wenn eine Einwilligung für "Statistik" vorliegt.
 *
 * Die Consent-Prüfung steht hier als zweite Verteidigungslinie, obwohl der
 * Aufrufer sie ohnehin macht: Ein künftiger Aufruf von woanders darf GA nicht
 * versehentlich ungefragt starten können.
 */
export function initGA4() {
  if (!GA4_ID) return
  if (!hasConsent('statistics')) return

  // Ein früherer Widerruf hat gtag.js über dieses Flag stillgelegt. Ohne das
  // Zurücksetzen würde das Skript zwar geladen, aber keinen einzigen Hit senden.
  window[`ga-disable-${GA4_ID}`] = false

  // Nach Widerruf und erneuter Zustimmung in derselben Sitzung hängt das Skript
  // schon im DOM — dann nur wieder scharfschalten, nicht ein zweites Mal laden.
  if (ga4Loaded) {
    gtag('consent', 'update', { analytics_storage: 'granted' })
    return
  }

  ga4Loaded = true
  window.dataLayer = window.dataLayer || []
  // gtag.js bringt window.gtag nicht selbst mit — das muss das Snippet setzen.
  window.gtag = gtag

  // Consent Mode v2, "Basic": Erst Default auf denied, dann gezielt das
  // freigeben, wofür tatsächlich eingewilligt wurde. Werbe-Signale bleiben aus —
  // wir schalten keine Werbung und tun das auch nicht heimlich.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  })
  gtag('consent', 'update', { analytics_storage: 'granted' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
  document.head.appendChild(script)

  gtag('js', new Date())
  gtag('config', GA4_ID, {
    send_page_view: false,
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
}

/**
 * Widerruf. Stoppt jede weitere Messung und räumt auf.
 *
 * Ein bereits geladenes gtag.js lässt sich nicht mehr aus der Seite entfernen —
 * deshalb wird es über das ga-disable-Flag stillgelegt und der Consent-Modus auf
 * denied zurückgesetzt. Das Löschen der Cookies übernimmt der Aufrufer über
 * clearStatisticsStorage(); ein Reload danach stellt sicher, dass wirklich
 * nichts mehr im Speicher hängt.
 */
export function disableGA4() {
  if (!GA4_ID) return

  window[`ga-disable-${GA4_ID}`] = true

  if (window.dataLayer) {
    gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
  }
}

/** Seitenaufruf melden. Tut nichts, solange GA4 nicht eingewilligt und geladen ist. */
export function trackPageView(path, title) {
  if (!ga4Loaded || !window.gtag) return
  window.gtag('event', 'page_view', { page_path: path, page_title: title })
}

/* ------------------------------------------------------------------ *
 * Gemeinsamer Einstiegspunkt                                          *
 * ------------------------------------------------------------------ */

/**
 * Bringt die Messdienste in den Zustand, der zur aktuellen Einwilligung passt.
 * Wird beim Start und nach jeder Consent-Änderung aufgerufen.
 */
export function syncAnalytics() {
  initPlausible()

  if (hasConsent('statistics')) {
    initGA4()
    return
  }

  // Nur bei einer echten Ablehnung stilllegen. Liegt noch gar keine Entscheidung
  // vor, ist nichts geladen, was man stilllegen müsste — und ein gesetztes
  // ga-disable-Flag würde eine später erteilte Einwilligung wirkungslos machen.
  if (readConsent()) disableGA4()
}
