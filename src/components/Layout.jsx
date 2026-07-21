import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useConsent } from '../context/ConsentContext'
import WissnLogo from './WissnLogo'
import { Search, Menu, X, ArrowRight } from 'lucide-react'

/* SEO Hook */
export function useSEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Wissn` : 'Wissn. Weil du\'s Wissn willst'
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])
}

/* Header */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const location = useLocation()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null))
    return () => subscription.unsubscribe()
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/so-funktionierts', label: "So funktioniert's" },
    { href: '/fuer-schulen', label: 'Für Schulen' },
    { href: '/fuer-schueler', label: 'Für Schüler' },
    { href: '/ueber-uns', label: 'Über uns' },
  ]

  const isActive = (href) => href === '/' ? location.pathname === '/' : location.pathname === href

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <a href="/" className="no-underline">
            <WissnLogo size={56} />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                  isActive(href)
                    ? 'text-wissn-green bg-wissn-green-50'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={user ? "/dashboard" : "/app"} className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2">
              {user ? 'Zur Lernapp' : 'Kostenlos starten'}
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg bg-transparent border-none cursor-pointer text-slate-500 hover:text-slate-900 hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
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
              <a href={user ? "/dashboard" : "/app"} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2">
                {user ? 'Zur Lernapp' : 'Kostenlos starten'}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

/* Footer */
export function Footer() {
  const { openSettings } = useConsent()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <WissnLogo size={36} />
            <p className="text-slate-400 mt-4 max-w-sm leading-relaxed text-sm">
              Die KI-gestützte Lernplattform für Schulen. Chat-Tutor, Grafiken
              und Karteikarten, gemacht für Schüler und Lehrkräfte.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="https://instagram.com/wissn.de" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://tiktok.com/@wissn.de" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300 uppercase tracking-wider">Produkt</h4>
            <nav className="space-y-2.5">
              <a href="/features" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Features</a>
              <a href="/so-funktionierts" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">So funktioniert's</a>
              <a href="/fuer-schulen" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Für Schulen</a>
              <a href="/fuer-schueler" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Für Schüler</a>
              <a href="/fuer-eltern" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Für Eltern</a>
              <a href="/faq" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">FAQ</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300 uppercase tracking-wider">Rechtliches</h4>
            <nav className="space-y-2.5">
              <a href="/impressum" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Impressum</a>
              <a href="/datenschutz" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Datenschutz</a>
              <a href="/nutzungsbedingungen" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Nutzungsbedingungen</a>
              <a href="/kontakt" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Kontakt</a>
              <button
                type="button"
                onClick={openSettings}
                className="block text-left text-sm text-slate-400 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
              >
                Cookie-Einstellungen
              </button>
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

/* Page Layout */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
