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

export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=de.turbotutor.lernapp'

/*
 * GooglePlayBadge — offizielles Google-Badge „Jetzt bei Google Play“ (deutsch),
 * transparenter Rand der Originaldatei abgeschnitten, damit es bei gleicher
 * Klassen-Höhe genauso hoch ist wie das Apple-Badge.
 * Google-Vorgaben: Badge nicht verändern, mindestens so groß wie andere
 * Store-Badges, rundherum ein Viertel der Badge-Höhe Freiraum (gap-3 reicht).
 */
export function GooglePlayBadge({ className = 'h-12' }) {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-[10px] transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
    >
      <img
        src="/google-play-badge.png"
        alt="Jetzt bei Google Play"
        width="135"
        height="40"
        className={`block w-auto ${className}`}
      />
    </a>
  )
}
