export const APP_STORE_URL = 'https://apps.apple.com/de/app/wissn/id6759627994'

/*
 * AppStoreBadge — offizielles Apple-Badge „Laden im App Store“ (Apple Marketing
 * Tools, de-DE, schwarz), verlinkt auf die Wissn-App im App Store.
 * Apple-Vorgaben: Badge nicht verändern, auf dem Bildschirm mindestens 40 px hoch,
 * rundherum Freiraum lassen.
 *
 * Props:
 *   className: Klassen fürs Bild, steuert die Höhe (Default h-12 = 48 px)
 */
export default function AppStoreBadge({ className = 'h-12' }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-[10px] transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
    >
      <img
        src="/app-store-badge.svg"
        alt="Laden im App Store"
        width="120"
        height="40"
        className={`block w-auto ${className}`}
      />
    </a>
  )
}
