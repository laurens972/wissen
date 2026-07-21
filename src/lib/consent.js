/**
 * Consent-Verwaltung — § 25 TDDDG i.V.m. Art. 6 Abs. 1 lit. a, Art. 7 DSGVO
 *
 * Kernidee: Die Registry unten ist die einzige Wahrheit darüber, welche
 * einwilligungspflichtigen Dienste eingebunden sind. Sie steuert, WAS im Banner
 * abwählbar ist. Ein Dienst darf NIEMALS an der Registry vorbei geladen werden.
 *
 * Produktentscheidung (2026-07-20, Gründer): Der Banner erscheint jetzt bei
 * JEDEM Erstbesuch (siehe BANNER_ALWAYS weiter unten), also immer, wenn kein
 * gültiger gespeicherter Consent-Datensatz vorliegt — unabhängig davon, ob
 * gerade ein einwilligungspflichtiger Dienst aktiv ist. Bislang blieb der Banner
 * ohne aktiven Dienst bewusst verborgen. Solange nur technisch notwendige
 * Speicherung stattfindet, holt der Banner keine echte Einwilligung ein, sondern
 * informiert transparent und hält die Wahl für künftige Dienste fest.
 *
 * Umgekehrt gilt: Wer hier einen Dienst einträgt, bekommt die abwählbare
 * Kategorie im Banner automatisch mit.
 *
 * Bei jedem neuen Dienst zusätzlich:
 *   1. CONSENT_VERSION erhöhen (erzwingt erneute Abfrage bei allen Nutzern)
 *   2. Host in die CSP in index.html eintragen
 *   3. Datenschutzerklärung ergänzen
 */

/* ------------------------------------------------------------------ *
 * Dienst-Konfiguration                                               *
 * ------------------------------------------------------------------ */

/**
 * Cookieless Analytics (Plausible, EU-gehostet).
 * Setzt keine Cookies und schreibt nichts auf das Endgerät → § 25 TDDDG greift
 * nicht → einwilligungsfrei (Art. 6 Abs. 1 lit. f DSGVO, AVV mit Plausible nötig).
 * Leerer String = aus. Zum Aktivieren die Domain eintragen, z. B. 'wissn-ai.de'.
 */
export const PLAUSIBLE_DOMAIN = ''

/**
 * Google Analytics 4 — EINWILLIGUNGSPFLICHTIG.
 * Leerer String = aus, kein Banner. Wird hier eine echte Mess-ID eingetragen,
 * schaltet sich die Kategorie "Statistik" und damit der Banner automatisch scharf.
 *
 * Vorher zwingend klären: AVV/Data Processing Terms mit Google akzeptiert,
 * Google-Signale aus, Aufbewahrung auf 2 Monate. Und: Art. 8 DSGVO — von
 * Schülern unter 16 ist ohne Verifikation der Eltern keine wirksame Einwilligung
 * zu bekommen. Cookiefreie Alternative ist der sicherere Weg.
 */
export const GA4_ID = ''

/* ------------------------------------------------------------------ *
 * Kategorien                                                          *
 * ------------------------------------------------------------------ */

export const CATEGORIES = [
  {
    key: 'necessary',
    always: true,
    title: 'Notwendig',
    description:
      'Diese Speicherungen brauchen wir, damit die Seite überhaupt funktioniert. ' +
      'Sie werden ohne Einwilligung gespeichert (§ 25 Abs. 2 Nr. 2 TDDDG) und lassen sich nicht abwählen.',
    services: () => [
      {
        name: 'Einwilligungs-Speicher',
        provider: 'Wissn',
        purpose: 'Merkt sich genau diese Entscheidung, damit wir dich nicht erneut fragen.',
        storage: 'wissn_consent (localStorage)',
        duration: '6 Monate',
      },
      {
        name: 'Anmelde-Sitzung',
        provider: 'Supabase',
        purpose: 'Hält dich nach dem Login eingeloggt. Entsteht erst, wenn du dich anmeldest.',
        storage: 'sb-*-auth-token (localStorage)',
        duration: 'bis zum Logout',
      },
    ],
  },
  {
    key: 'statistics',
    always: false,
    title: 'Statistik',
    description:
      'Hilft uns zu verstehen, welche Seiten genutzt werden, damit wir Wissn verbessern können. ' +
      'Rein optional. Die Seite funktioniert ohne diese Auswahl genauso.',
    services: () =>
      GA4_ID
        ? [
            {
              name: 'Google Analytics 4',
              provider: 'Google Ireland Ltd.',
              purpose: 'Misst anonymisiert, welche Seiten aufgerufen werden.',
              storage: '_ga, _ga_* (Cookies)',
              duration: 'bis zu 2 Jahre',
              thirdCountry: 'USA (EU-US Data Privacy Framework)',
            },
          ]
        : [],
  },
]

/** Alle Kategorien, die tatsächlich einen aktiven Dienst haben und abwählbar sind. */
export function optionalCategories() {
  return CATEGORIES.filter((c) => !c.always && c.services().length > 0)
}

/**
 * Braucht diese Seite überhaupt eine einwilligungspflichtige Kategorie?
 * Steuert, ob es im Banner echte Wahlmöglichkeiten (abwählbare Dienste) gibt.
 * Ob der Banner ERSCHEINT, entscheidet zusätzlich BANNER_ALWAYS.
 */
export function consentRequired() {
  return optionalCategories().length > 0
}

/**
 * Produktentscheidung (2026-07-20, Gründer): Der Banner soll bei jedem
 * Erstbesuch erscheinen, also immer, wenn kein gültiger gespeicherter
 * Consent-Datensatz vorliegt — auch dann, wenn gerade nur technisch notwendige
 * Speicherung stattfindet und es nichts abzuwählen gibt. So erfahren Nutzer von
 * Anfang an transparent, was gespeichert wird, und ihre Wahl wird für künftige
 * Dienste festgehalten. Auf false setzen, um zum reinen Dienst-gesteuerten
 * Verhalten zurückzukehren (Banner nur bei aktivem einwilligungspflichtigem
 * Dienst).
 */
export const BANNER_ALWAYS = true

/* ------------------------------------------------------------------ *
 * Gespeicherter Zustand                                               *
 * ------------------------------------------------------------------ */

export const CONSENT_KEY = 'wissn_consent'

/**
 * Bei jeder Änderung an Diensten, Zwecken oder Bannertext erhöhen.
 * Eine ältere Version gilt als "nicht entschieden" → es wird erneut gefragt,
 * weil die Einwilligung sich auf eine andere Informationsgrundlage bezog.
 */
export const CONSENT_VERSION = 2

/** Nach 6 Monaten erneut fragen (Aufsichtspraxis, u. a. CNIL). */
export const CONSENT_MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000

function safeGet(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* Privater Modus o. Ä. — Entscheidung gilt dann nur für diese Sitzung. */
  }
}

/**
 * Liefert den gespeicherten Einwilligungs-Datensatz, oder null wenn noch keine
 * gültige Entscheidung vorliegt (nie gefragt, veraltete Version, abgelaufen).
 *
 * null heißt: Banner zeigen. Eine ABLEHNUNG ist eine gültige Entscheidung und
 * liefert einen Datensatz — sie wird genauso lange respektiert wie eine
 * Zustimmung. Wer ablehnt, wird nicht bei jedem Seitenaufruf erneut gefragt
 * (EDPB: "continuous prompting").
 */
export function readConsent() {
  const raw = safeGet(CONSENT_KEY)
  if (!raw) return null

  try {
    const record = JSON.parse(raw)
    if (!record || record.v !== CONSENT_VERSION) return null
    if (Date.now() - new Date(record.ts).getTime() > CONSENT_MAX_AGE_MS) return null
    return record
  } catch {
    return null
  }
}

/**
 * Schreibt die Entscheidung fest.
 *
 * Der Datensatz hält fest, WER (pseudonyme ID), WANN, WORIN eingewilligt wurde
 * und auf welcher Informationsgrundlage (Version) — das ist die Grundlage für
 * den Nachweis nach Art. 7 Abs. 1 DSGVO. Ein rein lokaler Eintrag genügt als
 * Nachweis vor Gericht allerdings nicht; sobald ein einwilligungspflichtiger
 * Dienst live geht, muss dieser Datensatz zusätzlich serverseitig protokolliert
 * werden (bewusst ohne IP und User-Agent).
 */
export function writeConsent(choices, action) {
  const record = {
    v: CONSENT_VERSION,
    id: randomId(),
    ts: new Date().toISOString(),
    action,
    choices: { necessary: true, ...choices },
  }
  safeSet(CONSENT_KEY, JSON.stringify(record))
  return record
}

function randomId() {
  try {
    return crypto.randomUUID()
  } catch {
    return `c-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
  }
}

/** Einwilligung für eine Kategorie erteilt? Notwendiges ist immer true. */
export function hasConsent(key, record = readConsent()) {
  const category = CATEGORIES.find((c) => c.key === key)
  if (category?.always) return true
  return record?.choices?.[key] === true
}

/** Ausgangszustand des Einstellungs-Dialogs: alles Optionale aus (Art. 25 Abs. 2 DSGVO). */
export function defaultChoices(record = readConsent()) {
  const choices = {}
  for (const category of CATEGORIES) {
    choices[category.key] = category.always ? true : hasConsent(category.key, record)
  }
  return choices
}

/* ------------------------------------------------------------------ *
 * Aufräumen beim Widerruf                                             *
 * ------------------------------------------------------------------ */

/**
 * Löscht die Cookies der abgewählten Kategorien. Ein Widerruf, der die bereits
 * gesetzten Cookies liegen lässt, ist keiner (Art. 7 Abs. 3 DSGVO).
 *
 * Cookies müssen mit demselben Domain/Path-Paar gelöscht werden, mit dem sie
 * gesetzt wurden — welches das war, sieht man ihnen nicht an. Deshalb werden
 * alle plausiblen Varianten durchprobiert.
 */
export function clearStatisticsStorage() {
  const names = readCookieNames().filter(
    (name) => name.startsWith('_ga') || name === '_gid' || name.startsWith('_gat'),
  )
  for (const name of names) deleteCookie(name)
}

function readCookieNames() {
  if (typeof document === 'undefined' || !document.cookie) return []
  return document.cookie
    .split(';')
    .map((entry) => entry.split('=')[0].trim())
    .filter(Boolean)
}

function deleteCookie(name) {
  const host = window.location.hostname
  const labels = host.split('.')
  const domains = [null, host, `.${host}`]

  // Auch die registrierbare Domain abdecken (GA setzt auf .wissn-ai.de, nicht auf www.…)
  for (let i = 1; i < labels.length - 1; i++) {
    domains.push(`.${labels.slice(i).join('.')}`)
  }

  const expired = 'Thu, 01 Jan 1970 00:00:00 GMT'
  for (const domain of domains) {
    for (const path of ['/', window.location.pathname]) {
      document.cookie =
        `${name}=; expires=${expired}; path=${path}` + (domain ? `; domain=${domain}` : '')
    }
  }
}
