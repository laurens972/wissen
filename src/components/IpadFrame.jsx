import Lightbox from './Lightbox'

/*
 * IpadFrame — zeigt einen App-Screenshot im iPad-Rahmen (Querformat).
 * Die Screenshots stammen aus dem iPad-Simulator (2360×1640, Seitenverhältnis 59:41)
 * und liegen ohne eingebrannten Rahmen vor. Rahmen, Ecken und Kamera kommen per CSS,
 * Klick öffnet den rohen Screenshot in der Lightbox.
 *
 * Rahmenstärke und Radien skalieren über Container-Einheiten (cqw) mit der Breite,
 * damit das Gerät auf dem Handy genauso proportioniert aussieht wie auf dem Desktop.
 *
 * Props:
 *   src, alt, loading: wie bei Lightbox
 *   className:         Klassen für den äußeren Wrapper (Layout)
 *   children:          ohne src wird stattdessen dieser Inhalt auf dem Bildschirm
 *                      gezeigt (z. B. Icon-Platzhalter), ohne Lightbox
 */
export default function IpadFrame({ src, alt = '', loading, className = '', children }) {
  return (
    <div className={`@container ${className}`}>
      <div className="relative rounded-[4.2cqw] bg-slate-900 p-[3cqw] shadow-xl ring-1 ring-slate-900/10">
        {/* Frontkamera am oberen Rand (Querformat) */}
        <span
          aria-hidden="true"
          className="absolute top-[1.5cqw] left-1/2 h-[0.7cqw] w-[0.7cqw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-700"
        />
        {src ? (
          <Lightbox
            src={src}
            alt={alt}
            loading={loading}
            className="overflow-hidden rounded-[1.6cqw]"
            imgClassName="block w-full aspect-[59/41] object-cover object-top bg-slate-100"
          />
        ) : (
          <div className="aspect-[59/41] overflow-hidden rounded-[1.6cqw]">{children}</div>
        )}
      </div>
    </div>
  )
}
