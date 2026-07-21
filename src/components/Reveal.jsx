import { useRef, useEffect, useState } from 'react'

/*
 * Reveal — blendet Inhalt beim Scrollen ein (von unten/links/rechts).
 * Nutzung:
 *   <Reveal direction="left" delay={100}>...</Reveal>
 * Props:
 *   direction: 'up' | 'left' | 'right'  (Default 'up')
 *   delay:     ms Verzögerung (für gestaffeltes Nacheinander-Erscheinen)
 *   className: zusätzliche Klassen (z. B. Grid-/Spalten-Klassen), werden gemerged
 *   as:        Tag-Name (Default 'div')
 * Respektiert prefers-reduced-motion (zeigt sofort, keine Bewegung).
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
