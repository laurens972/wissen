import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import WissnLogo from './WissnLogo'
import { Search, Menu, X, ArrowRight } from 'lucide-react'

/* ── SEO Hook ────────────────────────────────── */
export function useSEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Wissn` : 'Wissn — Weil du\'s Wissn willst'
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])
}

/* ── Header ────────────────────────────────── */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/so-funktionierts', label: "So funktioniert's" },
    { href: '/fuer-schulen', label: 'Für Schulen' },
    { href: '/fuer-eltern', label: 'Für Eltern' },
    { href: '/fuer-schueler', label: 'Für Schüler' },
    { href: '/faq', label: 'FAQ' },
  ]

  const isActive = (href) => location.pathname === href

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          <a href="/" className="no-underline">
            <WissnLogo size={40} showText={true} />
          </a>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`px-5 py-2.5 rounded-lg text-[15px] font-medium transition-colors no-underline ${
                  isActive(href)
                    ? 'text-wissn-green bg-wissn-green-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="/auth" className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-wissn-green to-wissn-green-light text-white text-sm font-semibold hover:shadow-lg hover:shadow-wissn-green/25 transition-all no-underline">
              Kostenlos starten
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-transparent border-none cursor-pointer text-slate-500 hover:text-slate-900 hover:bg-gray-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 space-y-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium no-underline ${
                  isActive(href)
                    ? 'text-wissn-green bg-wissn-green-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </a>
            ))}
            <div className="pt-2">
              <a href="/auth" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-wissn-green to-wissn-green-light text-white text-sm font-semibold no-underline">
                Kostenlos starten
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

/* ── Footer ────────────────────────────────── */
export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <WissnLogo size={36} />
            <p className="text-slate-400 mt-4 max-w-sm leading-relaxed text-sm">
              Die KI-gestützte Lernplattform für Schulen. Intelligenter lernen
              mit Chat-Tutor, Mindmaps und personalisierten Lernplänen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300 uppercase tracking-wider">Produkt</h4>
            <nav className="space-y-2.5">
              <a href="/features" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Features</a>
              <a href="/so-funktionierts" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">So funktioniert's</a>
              <a href="/fuer-schulen" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Für Schulen</a>
              <a href="/fuer-eltern" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Für Eltern</a>
              <a href="/fuer-schueler" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Für Schüler</a>
              <a href="/faq" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">FAQ</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300 uppercase tracking-wider">Rechtliches</h4>
            <nav className="space-y-2.5">
              <a href="/ueber-uns" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Über uns</a>
              <a href="/impressum" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Impressum</a>
              <a href="/datenschutz" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Datenschutz</a>
              <a href="/nutzungsbedingungen" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Nutzungsbedingungen</a>
              <a href="/kontakt" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Kontakt</a>
            </nav>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Wissn. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}

/* ── Page Layout ─────────────────────────────── */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
