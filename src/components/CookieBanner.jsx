import { useEffect, useRef, useState } from 'react'
import { Cookie, X } from 'lucide-react'
import { useConsent } from '../context/ConsentContext'
import { CATEGORIES } from '../lib/consent'

/* ------------------------------------------------------------------ *
 * Schalter                                                            *
 * ------------------------------------------------------------------ */

function Switch({ checked, disabled, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative shrink-0 w-11 h-6 rounded-full border-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 ${
        // slate-300 als Aus-Zustand ergäbe nur 1,48:1 gegen den weißen Knopf —
        // der Zustand wäre kaum erkennbar (WCAG 1.4.11 verlangt 3:1).
        checked ? 'bg-wissn-green-btn' : 'bg-slate-500'
      } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow ring-1 ring-black/20 transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

/* ------------------------------------------------------------------ *
 * Ebene 2 — Einstellungen                                             *
 * ------------------------------------------------------------------ */

function SettingsDialog({ initialChoices, onSave, onRejectAll, onAcceptAll, onClose }) {
  const [choices, setChoices] = useState(initialChoices)
  const dialogRef = useRef(null)
  const headingRef = useRef(null)

  // Solange der Dialog offen ist, scrollt nur der Dialog selbst. Ohne die
  // Sperre fängt die Seite dahinter das Mausrad ab und der Dialog wirkt
  // eingefroren.
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  useEffect(() => {
    // Wer den Dialog geöffnet hat, soll den Fokus danach zurückbekommen —
    // sonst landet er beim Weg über den Footer-Link am Seitenanfang.
    const opener = document.activeElement

    headingRef.current?.focus()

    // Fokus im Dialog halten, solange er offen ist. Escape schließt ihn — und
    // zählt dabei ausdrücklich NICHT als Zustimmung: es wird nichts gespeichert.
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      // Steht der Fokus gar nicht im Dialog — etwa noch auf der Überschrift, die
      // per tabindex="-1" nicht in der Liste auftaucht —, holt ihn der Vergleich
      // mit first/last allein nicht zurück. Deshalb zuerst diesen Fall abfangen.
      if (!dialogRef.current?.contains(active) || active === headingRef.current) {
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
        return
      }

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (opener instanceof HTMLElement && document.contains(opener)) opener.focus()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Nur abdunkeln, nicht wegklickbar: Ein Klick daneben darf weder als
          Zustimmung noch als Ablehnung gewertet werden. */}
      <div className="absolute inset-0 bg-slate-900/50" aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-settings-title"
        className="settings-in relative w-full sm:max-w-2xl max-h-[85dvh] overflow-y-auto overscroll-contain bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl"
      >
        <div className="sticky top-0 flex items-start justify-between gap-4 px-6 pt-6 pb-4 bg-white border-b border-slate-100">
          <div>
            <h2
              id="consent-settings-title"
              ref={headingRef}
              tabIndex={-1}
              className="text-lg font-semibold text-slate-900 focus:outline-none"
            >
              Datenschutz-Einstellungen
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Du entscheidest, was gespeichert werden darf. Ohne deine Auswahl passiert nichts.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Einstellungen schließen, ohne etwas zu speichern"
            className="shrink-0 p-2 -mr-2 -mt-2 rounded-lg bg-transparent border-none cursor-pointer text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-wissn-green"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          {CATEGORIES.map((category) => {
            const services = category.services()
            if (!category.always && services.length === 0) return null

            return (
              <div
                key={category.key}
                className="rounded-xl border border-slate-200 bg-gray-50 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {category.title}
                      {category.always && (
                        <span className="ml-2 text-xs font-medium text-slate-500">
                          (immer aktiv)
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <Switch
                    checked={category.always ? true : Boolean(choices[category.key])}
                    disabled={category.always}
                    label={`${category.title} erlauben`}
                    onChange={(next) =>
                      setChoices((current) => ({ ...current, [category.key]: next }))
                    }
                  />
                </div>

                <ul className="mt-4 space-y-3 border-t border-slate-200 pt-3">
                  {services.map((service) => (
                    <li key={service.name} className="text-xs text-slate-500 leading-relaxed">
                      <span className="font-semibold text-slate-700">{service.name}</span>
                      {': '}
                      {service.purpose}
                      <br />
                      Anbieter: {service.provider} · Speicherung: {service.storage} · Dauer:{' '}
                      {service.duration}
                      {service.thirdCountry && (
                        <>
                          <br />
                          Übermittlung in ein Drittland: {service.thirdCountry}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onRejectAll}
              className="flex-1 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold border-none cursor-pointer hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={() => onSave(choices)}
              className="flex-1 px-5 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-semibold border border-slate-300 cursor-pointer hover:bg-gray-50 transition-colors focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
            >
              Auswahl speichern
            </button>
            <button
              type="button"
              onClick={onAcceptAll}
              className="flex-1 px-5 py-2.5 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold border-none cursor-pointer hover:bg-wissn-green-dark transition-colors focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Ebene 1 — Leiste                                                    *
 * ------------------------------------------------------------------ */

function Bar({ onAcceptAll, onRejectAll, onOpenSettings }) {
  const headingRef = useRef(null)
  const barRef = useRef(null)

  // Fokus auf die Leiste holen, damit Tastatur- und Screenreader-Nutzer sie
  // finden. Bewusst nicht-modal: Impressum und Datenschutz bleiben erreichbar,
  // ohne dass vorher irgendetwas geklickt werden muss.
  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  // Die Leiste liegt fest über dem Seitenende und würde sonst dauerhaft den
  // Footer verdecken — darunter auch die Links zu Impressum und Datenschutz,
  // die ohne Einwilligung erreichbar bleiben müssen.
  useEffect(() => {
    const height = barRef.current?.offsetHeight ?? 0
    document.body.style.paddingBottom = `${height}px`
    return () => {
      document.body.style.paddingBottom = ''
    }
  }, [])

  return (
    <div
      ref={barRef}
      role="region"
      aria-label="Hinweis zum Datenschutz"
      className="banner-in fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-2xl p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-xl bg-wissn-green-50 items-center justify-center">
            <Cookie className="w-5 h-5 text-wissn-green" />
          </div>

          <div className="flex-1">
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="text-base font-semibold text-slate-900 focus:outline-none"
            >
              Wie Wissn mit deinen Daten umgeht
            </h2>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              Wissn speichert aktuell nur, was technisch notwendig ist. Das sind deine
              Datenschutz-Entscheidung und, sobald du dich anmeldest, deine Login-Sitzung. Eine
              optionale Statistik gibt es derzeit nicht. Deine Wahl merken wir uns für den Fall,
              dass später Dienste dazukommen. Du kannst sie jederzeit über „Cookie-Einstellungen“ im
              Fußbereich ändern.{' '}
              <a
                href="/datenschutz"
                className="font-medium text-wissn-green hover:text-wissn-green-dark underline"
              >
                Datenschutzerklärung
              </a>{' '}
              ·{' '}
              <a
                href="/impressum"
                className="font-medium text-wissn-green hover:text-wissn-green-dark underline"
              >
                Impressum
              </a>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              {/* Akzeptieren und Nur notwendige: gleiche Größe, gleiches Gewicht,
                  je ein Klick. Kein Dark Pattern, kein Verstecken der Ablehnung
                  hinter „Einstellungen“. */}
              <button
                type="button"
                onClick={onAcceptAll}
                className="flex-1 px-5 py-2.5 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold border-none cursor-pointer hover:bg-wissn-green-dark transition-colors active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
              >
                Alle akzeptieren
              </button>
              <button
                type="button"
                onClick={onRejectAll}
                className="flex-1 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold border-none cursor-pointer hover:bg-slate-700 transition-colors active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={onOpenSettings}
                className="sm:flex-none px-5 py-2.5 rounded-xl bg-transparent text-slate-600 text-sm font-semibold border border-slate-300 cursor-pointer hover:bg-gray-50 hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
              >
                Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Einstieg                                                            *
 * ------------------------------------------------------------------ */

export default function CookieBanner() {
  const {
    required,
    showBanner,
    settingsOpen,
    choices,
    acceptAll,
    rejectAll,
    saveCustom,
    openSettings,
    closeSettings,
  } = useConsent()

  // Banner deaktiviert (weder ein abwählbarer Dienst aktiv noch BANNER_ALWAYS
  // gesetzt) → nichts anzuzeigen. Seit der Produktentscheidung vom 2026-07-20
  // ist BANNER_ALWAYS true, der Banner erscheint also bei jedem Erstbesuch.
  if (!required) return null

  return (
    <>
      {showBanner && !settingsOpen && (
        <Bar onAcceptAll={acceptAll} onRejectAll={rejectAll} onOpenSettings={openSettings} />
      )}
      {settingsOpen && (
        <SettingsDialog
          initialChoices={choices}
          onSave={saveCustom}
          onRejectAll={rejectAll}
          onAcceptAll={acceptAll}
          onClose={closeSettings}
        />
      )}
    </>
  )
}
