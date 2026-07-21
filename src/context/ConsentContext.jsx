import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  BANNER_ALWAYS,
  CATEGORIES,
  clearStatisticsStorage,
  consentRequired,
  defaultChoices,
  hasConsent,
  readConsent,
  writeConsent,
} from '../lib/consent'
import { syncAnalytics } from '../lib/analytics'

const ConsentContext = createContext(null)

/**
 * Hält die Einwilligungs-Entscheidung und ist die einzige Stelle, an der sie
 * geändert wird. Jede Änderung zieht sofort syncAnalytics() nach — dadurch kann
 * ein Dienst nicht in einem Zustand laufen, der nicht der Entscheidung entspricht.
 */
export function ConsentProvider({ children }) {
  // consentRequired() sagt, ob es abwählbare Dienste gibt. BANNER_ALWAYS ist die
  // Produktentscheidung, den Banner bei jedem Erstbesuch zu zeigen (auch ohne
  // solchen Dienst). Beides zusammen bestimmt, ob der Banner überhaupt aktiv ist
  // und ob der Footer-Link „Cookie-Einstellungen“ funktioniert.
  const required = consentRequired() || BANNER_ALWAYS

  const [record, setRecord] = useState(() => (required ? readConsent() : null))
  const [settingsOpen, setSettingsOpen] = useState(false)

  // Beim Start: Messdienste auf den gespeicherten Stand bringen.
  // Ohne Entscheidung passiert hier nichts Einwilligungspflichtiges — nur der
  // cookiefreie Dienst startet, weil er keine Einwilligung braucht.
  useEffect(() => {
    syncAnalytics()
  }, [])

  const apply = useCallback((choices, action) => {
    const saved = writeConsent(choices, action)
    setRecord(saved)

    // Widerruf muss die bereits gesetzten Cookies auch wirklich entfernen,
    // sonst ist es kein Widerruf (Art. 7 Abs. 3 DSGVO).
    if (!hasConsent('statistics', saved)) clearStatisticsStorage()

    syncAnalytics()
    setSettingsOpen(false)
  }, [])

  const acceptAll = useCallback(() => {
    const choices = {}
    for (const category of CATEGORIES) choices[category.key] = true
    apply(choices, 'accept_all')
  }, [apply])

  const rejectAll = useCallback(() => {
    const choices = {}
    for (const category of CATEGORIES) choices[category.key] = Boolean(category.always)
    apply(choices, 'reject_all')
  }, [apply])

  const saveCustom = useCallback((choices) => apply(choices, 'save_custom'), [apply])

  const openSettings = useCallback(() => setSettingsOpen(true), [])
  const closeSettings = useCallback(() => setSettingsOpen(false), [])

  // Muss an `record` hängen und sonst nichts. Wäre die Funktion bei jedem Render
  // neu, würde der RouteTracker-Effekt erneut feuern und denselben Seitenaufruf
  // doppelt zählen — etwa jedes Mal, wenn der Einstellungs-Dialog auf- oder zugeht.
  const allows = useCallback((key) => hasConsent(key, record), [record])

  const value = useMemo(
    () => ({
      /** Ist der Banner aktiv? True, sobald es abwählbare Dienste gibt oder BANNER_ALWAYS gilt. */
      required,
      /** Liegt eine gültige Entscheidung vor? Eine Ablehnung zählt als Entscheidung. */
      decided: record !== null,
      /** Erste Ebene des Banners anzeigen. */
      showBanner: required && record === null,
      settingsOpen,
      choices: defaultChoices(record),
      allows,
      acceptAll,
      rejectAll,
      saveCustom,
      openSettings,
      closeSettings,
    }),
    [required, record, settingsOpen, allows, acceptAll, rejectAll, saveCustom, openSettings, closeSettings],
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
  const context = useContext(ConsentContext)
  if (!context) throw new Error('useConsent muss innerhalb von <ConsentProvider> verwendet werden')
  return context
}
