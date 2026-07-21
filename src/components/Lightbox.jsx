import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ZoomIn } from 'lucide-react'

/*
 * Lightbox — macht ein Bild klickbar und zeigt es bei Klick als Vollbild-Overlay.
 * Nur Tailwind-Klassen, keine globalen CSS-Abhängigkeiten.
 *
 * Nutzung:
 *   <Lightbox src="/bild.png" alt="Beschreibung" imgClassName="w-full rounded-2xl shadow-sm" />
 *
 * Props:
 *   src:          Bildquelle
 *   alt:          Alt-Text (auch für aria-label des Triggers und Overlays)
 *   className:    Klassen für den Wrapper-Button (Layout, z. B. flex-1)
 *   imgClassName: Klassen fürs Bild (bestehende Styles wie rounded/shadow 1:1 übernehmen)
 *   loading:      optional 'lazy' | 'eager' (wird an <img> durchgereicht)
 *
 * Schließen per Klick auf Backdrop, X-Button und Escape-Taste.
 * Während offen: Body-Scroll gesperrt. Barrierefrei: Trigger als <button>,
 * Overlay als role="dialog" aria-modal="true".
 */
export default function Lightbox({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  loading,
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Bild vergrößern: ${alt}`}
        className={`group relative block w-full cursor-zoom-in border-0 bg-transparent p-0 leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 ${className}`}
      >
        <img src={src} alt={alt} loading={loading} className={imgClassName} />
        {/* Dezenter Zoom-Hinweis beim Hover */}
        <span className="pointer-events-none absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          <ZoomIn className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>

      {/* Portal an document.body: Vorfahren mit transform/will-change (Reveal-
          Animationen) würden das fixed-Overlay sonst einfangen und es bliebe
          klein in der Karte statt den Viewport zu füllen. */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt || 'Bildansicht'}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/85 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <img
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
            />
          </div>,
          document.body
        )}
    </>
  )
}
