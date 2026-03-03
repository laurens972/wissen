// ============================================================
// WISSN — Vollständiger Quellcode der Website
// Projekt: /Users/laurens/wissn
// Stack: React 19 + Vite 7 + Tailwind CSS 4 + Supabase + Lucide Icons
// URL: http://localhost:5173/
// ============================================================


// ────────────────────────────────────────────────────────────
// Datei: index.html
// ────────────────────────────────────────────────────────────
/*
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- SEO -->
    <title>Wissn — Weil du's Wissn willst | KI-Lernplattform für Schulen</title>
    <meta name="description" content="Wissn — Die KI-gestützte Lernplattform für Schulen. Intelligenter Chat-Tutor, automatische Mindmaps, Karteikarten und personalisierte Lernpläne." />
    <meta name="keywords" content="KI Lernplattform, Schule, Lernen, Chat-Tutor, Mindmaps, Karteikarten, Quiz, DSGVO, Bildung" />
    <meta name="author" content="Wissn" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://wissn.de/" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Wissn — KI-gestützte Lernplattform für Schulen" />
    <meta property="og:description" content="Intelligenter Chat-Tutor, automatische Mindmaps, Karteikarten und personalisierte Lernpläne — individuelle Förderung für jeden Schüler." />
    <meta property="og:image" content="/wissn-logo-clean.png" />
    <meta property="og:url" content="https://wissn.de/" />
    <meta property="og:locale" content="de_DE" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Wissn — KI-gestützte Lernplattform" />
    <meta name="twitter:description" content="Die intelligente Lernplattform für Schulen mit KI Chat-Tutor, Mindmaps und personalisierten Lernplänen." />
    <meta name="twitter:image" content="/wissn-logo-clean.png" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/wissn-logo-clean.png" />
    <link rel="apple-touch-icon" href="/wissn-logo-clean.png" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Wissn",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "description": "KI-gestützte Lernplattform für Schulen mit Chat-Tutor, Mindmaps, Karteikarten und personalisierten Lernplänen.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "Kostenlos starten"
      },
      "author": {
        "@type": "Organization",
        "name": "Wissn",
        "url": "https://wissn.de"
      }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
*/


// ────────────────────────────────────────────────────────────
// Datei: vite.config.js
// ────────────────────────────────────────────────────────────
/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
*/


// ────────────────────────────────────────────────────────────
// Datei: package.json
// ────────────────────────────────────────────────────────────
/*
{
  "name": "wissn",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.95.3",
    "lucide-react": "^0.564.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "tailwindcss": "^4.1.18",
    "vite": "^7.3.1"
  }
}
*/


// ────────────────────────────────────────────────────────────
// Datei: src/index.css
// ────────────────────────────────────────────────────────────
/*
@import "tailwindcss";

@theme {
  --color-wissn-green: #6B9B37;
  --color-wissn-green-dark: #5A8530;
  --color-wissn-green-light: #7FB344;
  --color-wissn-green-50: #F0F7E8;
  --color-wissn-green-100: #DCE9CC;

  --color-slate-900: #1E293B;
  --color-slate-700: #334155;
  --color-slate-500: #64748B;
  --color-slate-400: #94A3B8;
  --color-slate-300: #CBD5E1;
  --color-slate-200: #E2E8F0;
  --color-slate-100: #F1F5F9;
  --color-gray-50: #F8F9FA;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1E293B;
  background-color: #FFFFFF;
}
*/


// ────────────────────────────────────────────────────────────
// Datei: src/main.jsx
// ────────────────────────────────────────────────────────────

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// ────────────────────────────────────────────────────────────
// Datei: src/lib/supabase.js
// ────────────────────────────────────────────────────────────

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xsuiumhdakdmvsqbnnvh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzdWl1bWhkYWtkbXZzcWJubnZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MDMwMTMsImV4cCI6MjA3NjQ3OTAxM30.Lp5pQ2XhoKCipP9q-Dkyt92ztNDw60M3rtrfSxLBIRE'

const safariSafeStorage = (() => {
  try {
    const test = '__storage_test__'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return localStorage
  } catch {
    const store = {}
    return {
      getItem: (key) => store[key] ?? null,
      setItem: (key, value) => { store[key] = value },
      removeItem: (key) => { delete store[key] },
    }
  }
})()

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'implicit',
    storage: safariSafeStorage,
  },
})


// ────────────────────────────────────────────────────────────
// Datei: src/lib/analytics.js
// ────────────────────────────────────────────────────────────

const GA4_ID = 'G-XXXXXXXXXX'

let initialized = false

export function initGA4() {
  if (initialized || GA4_ID === 'G-XXXXXXXXXX') return
  initialized = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA4_ID, { send_page_view: false })
}

export function trackPageView(path, title) {
  if (!window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  })
}


// ────────────────────────────────────────────────────────────
// Datei: src/components/WissnLogo.jsx
// ────────────────────────────────────────────────────────────

export default function WissnLogo({ size = 48, showText = false, className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <img
        src="/wissn-logo-clean.png"
        alt="Wissn Logo"
        width={size}
        height={size}
        className="object-contain block"
      />
      {showText && (
        <span className="text-2xl font-bold tracking-tight text-slate-900">
          WISSN<span className="text-wissn-green">.</span>
        </span>
      )}
    </div>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/components/Layout.jsx
// ────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import WissnLogo from './WissnLogo'
import { Search, Menu, X, ArrowRight } from 'lucide-react'

/* SEO Hook */
export function useSEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Wissn` : 'Wissn — Weil du\'s Wissn willst'
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
            <a href={user ? "/dashboard" : "/auth"} className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-wissn-green to-wissn-green-light text-white text-sm font-semibold hover:shadow-lg hover:shadow-wissn-green/25 transition-all no-underline">
              {user ? 'Zur Lernapp' : 'Kostenlos starten'}
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
              <a href={user ? "/dashboard" : "/auth"} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-wissn-green to-wissn-green-light text-white text-sm font-semibold no-underline">
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
              <a href="/fuer-schueler" className="block text-sm text-slate-400 hover:text-white transition-colors no-underline">Für Schüler</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300 uppercase tracking-wider">Rechtliches</h4>
            <nav className="space-y-2.5">
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


// ────────────────────────────────────────────────────────────
// Datei: src/App.jsx
// ────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { supabase } from './lib/supabase'
import { initGA4, trackPageView } from './lib/analytics'
import Landing from './pages/Landing'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import FeaturesPage from './pages/FeaturesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import ForSchoolsPage from './pages/ForSchoolsPage'
import ForParentsPage from './pages/ForParentsPage'
import ForStudentsPage from './pages/ForStudentsPage'
import FAQPage from './pages/FAQPage'
import AboutPage from './pages/AboutPage'
import ImpressumPage from './pages/ImpressumPage'
import DatenschutzPage from './pages/DatenschutzPage'
import NutzungsbedingungenPage from './pages/NutzungsbedingungenPage'
import KontaktPage from './pages/KontaktPage'

/* ── GA4 Route Tracking ────────────────────── */
function RouteTracker() {
  const location = useLocation()
  useEffect(() => {
    trackPageView(location.pathname, document.title)
  }, [location])
  return null
}

/* ── Protected Route ───────────────────────── */
function ProtectedRoute({ user, children }) {
  if (!user) return <Navigate to="/auth" replace />
  return children
}

/* ── ScrollToTop ───────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/* ── App ───────────────────────────────────── */
export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // GA4 initialisieren
  useEffect(() => { initGA4() }, [])

  useEffect(() => {
    let mounted = true

    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        if (mounted) {
          setUser(session?.user ?? null)
          setLoading(false)
        }
      })
      .catch(() => {
        if (mounted) setLoading(false)
      })

    // Fallback-Timeout falls getSession in Safari hängt
    const timeout = setTimeout(() => {
      if (mounted) setLoading(false)
    }, 3000)

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    })

    return () => {
      mounted = false
      clearTimeout(timeout)
      subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-slate-200 border-t-wissn-green rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteTracker />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Landing />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/so-funktionierts" element={<HowItWorksPage />} />
        <Route path="/fuer-schulen" element={<ForSchoolsPage />} />
        <Route path="/fuer-eltern" element={<ForParentsPage />} />
        <Route path="/fuer-schueler" element={<ForStudentsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/ueber-uns" element={<AboutPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="/nutzungsbedingungen" element={<NutzungsbedingungenPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route
          path="/auth"
          element={user ? <Navigate to="/dashboard" replace /> : <Auth />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/Landing.jsx
// ────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from 'react'
import Layout, { useSEO } from '../components/Layout'
import WissnLogo from '../components/WissnLogo'
import {
  ArrowRight, BrainCircuit, MessageSquare, FileText,
  Map, BookOpen, BarChart3, CheckCircle, Users,
  GraduationCap, School, Play, Pause, Volume2, VolumeX,
} from 'lucide-react'

/* Video Hero */
function VideoHero() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) videoRef.current.pause()
      else videoRef.current.play()
      setPlaying(!playing)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="/video-poster.jpg"
        >
          <source src="/wissn-demo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <WissnLogo size={140} showText={false} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Public Beta
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
            Weil du's{' '}
            <span className="bg-gradient-to-r from-wissn-green via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Wissn
            </span>{' '}
            willst.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Die KI-gestützte Lernplattform für Schulen. Intelligenter Chat-Tutor,
            automatische Mindmaps, Karteikarten und personalisierte Lernpläne.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/auth"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-wissn-green/30 transition-all no-underline"
            >
              <BrainCircuit className="w-5 h-5" />
              Jetzt kostenlos starten
            </a>
            <a
              href="/so-funktionierts"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all no-underline"
            >
              So funktioniert's
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 flex gap-2">
          <button
            onClick={togglePlay}
            className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  )
}

/* Stats */
function Stats() {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {[
            { value: 'KI-gestützt', label: 'Individuelle Betreuung', color: 'text-wissn-green' },
            { value: '24/7', label: 'Verfügbar zum Lernen', color: 'text-blue-500' },
            { value: 'Ab Klasse 5', label: 'Für alle Klassenstufen', color: 'text-violet-500' },
            { value: '100%', label: 'DSGVO-konform', color: 'text-emerald-500' },
          ].map(({ value, label, color }, i) => (
            <div key={label} className="flex items-center gap-8 sm:gap-16">
              <div className="text-center">
                <div className={`text-3xl font-bold ${color}`}>{value}</div>
                <div className="text-sm text-slate-500 mt-1">{label}</div>
              </div>
              {i < 3 && <div className="w-px h-10 bg-slate-200 hidden sm:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Problem Section */
function ProblemSection() {
  const problems = [
    { icon: Users, color: 'from-red-400 to-rose-500', bg: 'bg-red-50', title: 'Zu große Klassen', text: 'Lehrkräfte können bei 30+ Schülern nicht auf individuelle Fragen eingehen.' },
    { icon: GraduationCap, color: 'from-amber-400 to-orange-500', bg: 'bg-amber-50', title: 'Bulimielernen', text: 'Kurz vor der Prüfung reinpauken und schnell vergessen — kein nachhaltiges Lernen.' },
    { icon: School, color: 'from-blue-400 to-indigo-500', bg: 'bg-blue-50', title: 'Fehlende Materialien', text: 'Generische Materialien — keine Anpassung an den individuellen Lernstil.' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Das Problem im Bildungssystem
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Schüler brauchen individuelle Unterstützung — Lehrkräfte haben dafür nicht genug Zeit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, color, bg, title, text }) => (
            <div key={title} className="text-center p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Features Preview */
function FeaturesPreview() {
  const features = [
    { icon: MessageSquare, color: 'from-emerald-400 to-teal-500', title: 'Chat-Tutor', description: 'Sofort verständliche Antworten auf jede Frage.' },
    { icon: Map, color: 'from-blue-400 to-indigo-500', title: 'Mindmaps', description: 'Visuelle Zusammenfassungen aus deinen Dokumenten.' },
    { icon: BookOpen, color: 'from-violet-400 to-purple-500', title: 'Karteikarten & Quiz', description: 'Automatisch generierte Lernkarten und Quizfragen.' },
    { icon: FileText, color: 'from-orange-400 to-red-500', title: 'Dokumenten-Analyse', description: 'KI-gestützte Analyse deiner Skripte und Materialien.' },
    { icon: BrainCircuit, color: 'from-pink-400 to-rose-500', title: 'Sokratische Dialoge', description: 'Die KI fragt zurück und prüft dein Verständnis.' },
    { icon: BarChart3, color: 'from-cyan-400 to-blue-500', title: 'Analytics', description: 'Verfolge deinen Fortschritt und Lernstrategie.' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Alles, was Schüler zum Lernen brauchen
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Wissn vereint KI-Technologie mit bewährten Lernmethoden.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, color, title, description }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-wissn-green font-semibold hover:bg-wissn-green-50 transition-colors no-underline">
            Alle Features entdecken
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* How it works Preview */
function HowItWorksPreview() {
  const steps = [
    { num: '01', color: 'from-blue-400 to-indigo-500', title: 'Dokument hochladen', text: 'Lade dein Skript oder Lehrbuch-Kapitel als PDF hoch.' },
    { num: '02', color: 'from-violet-400 to-purple-500', title: 'KI analysiert', text: 'Wissn erkennt Themen und erstellt deinen Lernplan.' },
    { num: '03', color: 'from-emerald-400 to-teal-500', title: 'Interaktiv lernen', text: 'Chat, Mindmaps, Karteikarten — alles in einer App.' },
    { num: '04', color: 'from-orange-400 to-red-500', title: 'Wissen festigen', text: 'Wiederholung und sokratische Dialoge verankern das Wissen.' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            In vier Schritten zum Lernerfolg
          </h2>
          <p className="text-lg text-slate-500">Von der Prüfungsvorbereitung zum tiefgreifenden Verständnis.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, color, title, text }) => (
            <a key={num} href={`/so-funktionierts#step-${num}`} className="relative text-center p-6 rounded-2xl no-underline cursor-pointer hover:bg-slate-50 transition-colors block">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <span className="text-white font-bold text-lg">{num}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/so-funktionierts" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-violet-600 font-semibold hover:bg-violet-50 transition-colors no-underline">
            Mehr erfahren
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* Product Showcase */
function ProductShowcase() {
  const screenshots = [
    { title: 'Chat-Tutor', description: 'KI-gestützter Dialog, der Fragen versteht und verständlich erklärt.', color: 'from-emerald-100 to-teal-100' },
    { title: 'Mindmap-Generator', description: 'Automatische visuelle Zusammenfassungen aus hochgeladenen Dokumenten.', color: 'from-blue-100 to-indigo-100' },
    { title: 'Karteikarten & Quiz', description: 'Intelligente Lernkarten und Quizfragen — automatisch generiert.', color: 'from-violet-100 to-purple-100' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            So sieht Wissn in Aktion aus
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Ein Blick in die Lernplattform — von Chat-Tutor bis Karteikarten.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {screenshots.map(({ title, description, color }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all">
              <div className={`h-48 bg-gradient-to-br ${color} flex items-center justify-center`}>
                <span className="text-sm font-medium text-slate-400">Screenshot: {title}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Team Preview */
function TeamPreview() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Das Team hinter Wissn
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Zwei Gründer mit einer gemeinsamen Vision: Lernen grundlegend verbessern.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          {[
            { initials: 'LH', color: 'from-wissn-green to-emerald-500', name: '[NAME]', role: '[ROLLE]' },
            { initials: 'MK', color: 'from-blue-400 to-indigo-500', name: '[NAME]', role: '[ROLLE]' },
          ].map(({ initials, color, name, role }) => (
            <div key={initials} className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                {initials}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{name}</h3>
                <p className="text-sm text-slate-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/ueber-uns" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-wissn-green font-semibold hover:bg-wissn-green-50 transition-colors no-underline">
            Mehr über uns
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* CTA */
function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl px-8 py-14 sm:px-16 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-wissn-green/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-wissn-green to-emerald-500 flex items-center justify-center shadow-lg shadow-wissn-green/30">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Bereit, intelligenter zu lernen?
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
              Starte jetzt mit Wissn und erlebe, wie KI-gestütztes Lernen
              deine Prüfungsvorbereitung transformiert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/auth"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-wissn-green/30 transition-all no-underline"
              >
                Kostenlos registrieren
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/fuer-schulen"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-slate-300 font-medium hover:text-white transition-colors no-underline"
              >
                Schulen & Bildungsträger
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Landing Page */
export default function Landing() {
  useSEO({
    title: null,
    description: 'Wissn — Die KI-gestützte Lernplattform für Schulen. Chat-Tutor, Mindmaps, Karteikarten und personalisierte Lernpläne.',
  })

  return (
    <Layout>
      <VideoHero />
      <Stats />
      <ProblemSection />
      <FeaturesPreview />
      <HowItWorksPreview />
      <ProductShowcase />
      <TeamPreview />
      <CTA />
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/FeaturesPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'
import {
  MessageSquare, Map, BookOpen, FileText, BrainCircuit, BarChart3,
  ArrowRight, Sparkles, Zap, Shield,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-50',
    title: 'Intelligenter Chat-Tutor',
    description: 'Stelle jederzeit Fragen und erhalte sofort verständliche, auf dich zugeschnittene Antworten.',
    details: [
      'Verschiedene Erklärungsansätze — visuell, praktisch oder abstrakt',
      'Kontextbezogene Antworten basierend auf deinen Dokumenten',
      'Erkennt Wissenslücken und erklärt Schritt für Schritt',
    ],
  },
  {
    icon: Map,
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50',
    title: 'Automatische Mindmaps',
    description: 'Lade dein Skript hoch und erhalte eine visuelle Zusammenfassung als Mindmap.',
    details: [
      'Komplexe Zusammenhänge werden visuell greifbar',
      'Interaktive Mindmaps zum Zoomen und Navigieren',
      'Export als Bild oder PDF',
    ],
  },
  {
    icon: BookOpen,
    color: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-50',
    title: 'Karteikarten & Quiz',
    description: 'Generiere aus deinen Dokumenten automatisch Lernkarten und Quizfragen.',
    details: [
      'Multiple-Choice, Lückentext und offene Fragen',
      'Spaced Repetition für nachhaltiges Lernen',
      'Adaptive Schwierigkeit basierend auf deinem Fortschritt',
    ],
  },
  {
    icon: FileText,
    color: 'from-orange-400 to-red-500',
    bg: 'bg-orange-50',
    title: 'Dokumenten-Analyse',
    description: 'Die KI analysiert hochgeladene Skripte und erstellt personalisierte Lernpläne.',
    details: [
      'Erkennt Schwerpunkte und Prüfungsrelevanz',
      'Erstellt Zusammenfassungen in verschiedenen Längen',
      'Unterstützt PDF, Word und Textdateien',
    ],
  },
  {
    icon: BrainCircuit,
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
    title: 'Sokratische Dialoge',
    description: 'Die KI fragt gezielt zurück, um dein Verständnis zu prüfen und zu vertiefen.',
    details: [
      'Fördert kritisches Denken statt passives Lesen',
      'Deckt Verständnislücken auf, die dir nicht bewusst waren',
      'Wie ein persönlicher Tutor, der dich herausfordert',
    ],
  },
  {
    icon: BarChart3,
    color: 'from-cyan-400 to-blue-500',
    bg: 'bg-cyan-50',
    title: 'Lernfortschritt-Analytics',
    description: 'Verfolge deinen Fortschritt und optimiere deine Lernstrategie.',
    details: [
      'Übersichtliches Dashboard mit Statistiken',
      'Erkennung von Stärken und Schwächen',
      'Empfehlungen für die nächsten Lernschritte',
    ],
  },
]

export default function FeaturesPage() {
  useSEO({
    title: 'Features',
    description: 'Alle Features von Wissn: KI Chat-Tutor, automatische Mindmaps, Karteikarten, Quiz, Dokumenten-Analyse und mehr.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-wissn-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wissn-green/10 text-wissn-green text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Alle Features im Überblick
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            Werkzeuge, die das <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-wissn-green to-emerald-500 bg-clip-text text-transparent">Lernen revolutionieren</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Wissn vereint KI-Technologie mit bewährten Lernmethoden — alles in einer Plattform.
          </p>
        </div>
      </section>

      {/* Feature Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map(({ icon: Icon, color, bg, title, description, details }, i) => (
              <div
                key={title}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className={`${bg} rounded-3xl p-10 lg:p-14 flex items-center justify-center`}>
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{title}</h2>
                  <p className="text-lg text-slate-500 leading-relaxed mb-6">{description}</p>
                  <ul className="space-y-3">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-wissn-green shrink-0 mt-0.5" />
                        <span className="text-slate-600">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-wissn-green-50 to-emerald-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Bereit loszulegen?</h2>
          <p className="text-lg text-slate-500 mb-8">Teste alle Features kostenlos — keine Kreditkarte nötig.</p>
          <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-wissn-green/25 transition-all no-underline">
            Jetzt kostenlos starten
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/HowItWorksPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'
import WissnLogo from '../components/WissnLogo'
import {
  Upload, BrainCircuit, Layers, RotateCcw,
  ArrowRight, ArrowDown, CheckCircle, Sparkles,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    color: 'from-blue-400 to-indigo-500',
    title: 'Dokument hochladen',
    description: 'Lade dein Skript, deine Mitschrift oder ein Lehrbuch-Kapitel als PDF hoch. Die KI verarbeitet sofort deine Inhalte.',
    details: [
      'PDF, Word und Textdateien werden unterstützt',
      'Mehrere Dokumente gleichzeitig hochladen',
      'Automatische Texterkennung (OCR) für gescannte Dokumente',
    ],
  },
  {
    number: '02',
    icon: BrainCircuit,
    color: 'from-violet-400 to-purple-500',
    title: 'KI analysiert Inhalte',
    description: 'Wissn erkennt automatisch Themen, Schwerpunkte und erstellt einen personalisierten Lernplan mit Prioritäten.',
    details: [
      'Identifiziert Kernthemen und Zusammenhänge',
      'Erstellt automatische Zusammenfassungen',
      'Generiert Mindmaps für visuelle Übersicht',
    ],
  },
  {
    number: '03',
    icon: Layers,
    color: 'from-emerald-400 to-teal-500',
    title: 'Interaktiv lernen',
    description: 'Nutze Chat-Tutor, Mindmaps, Karteikarten und Quizfragen — die KI passt sich deinem Tempo an.',
    details: [
      'Stelle Fragen zu deinen Dokumenten im Chat',
      'Lerne mit automatisch generierten Karteikarten',
      'Teste dein Wissen mit adaptiven Quizfragen',
    ],
  },
  {
    number: '04',
    icon: RotateCcw,
    color: 'from-orange-400 to-red-500',
    title: 'Wissen festigen',
    description: 'Durch gezielte Wiederholung und sokratische Dialoge bleibt das Wissen dauerhaft verankert.',
    details: [
      'Spaced Repetition für langfristiges Behalten',
      'Die KI erkennt deine Schwächen und trainiert gezielt',
      'Fortschritts-Tracking zeigt deinen Lernfortschritt',
    ],
  },
]

export default function HowItWorksPage() {
  useSEO({
    title: "So funktioniert's",
    description: 'In vier Schritten zum Lernerfolg mit Wissn: Dokument hochladen, KI-Analyse, interaktiv lernen, Wissen festigen.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-violet-50 via-white to-wissn-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Einfach erklärt
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            In vier Schritten zum <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-violet-500 to-wissn-green bg-clip-text text-transparent">Lernerfolg</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Von der Prüfungsvorbereitung bis zum tiefgreifenden Verständnis —
            Wissn macht es einfach.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map(({ number, icon: Icon, color, title, description, details }, i) => (
              <div key={number} id={`step-${number}`}>
                <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-10 hover:shadow-lg hover:border-slate-300 transition-all">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Schritt {number}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-3">{title}</h2>
                      <p className="text-slate-500 leading-relaxed mb-5">{description}</p>
                      <ul className="space-y-2">
                        {details.map((d) => (
                          <li key={d} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4.5 h-4.5 text-wissn-green shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-violet-50 to-wissn-green-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <WissnLogo size={64} className="justify-center mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Bereit es auszuprobieren?</h2>
          <p className="text-lg text-slate-500 mb-8">Starte jetzt und erlebe, wie einfach intelligentes Lernen sein kann.</p>
          <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-wissn-green text-white font-semibold text-lg hover:shadow-xl transition-all no-underline">
            Jetzt loslegen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/ForSchoolsPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'
import WissnLogo from '../components/WissnLogo'
import {
  CheckCircle, ArrowRight, School, Users, Shield,
  Clock, Headphones, Settings, Sparkles, X,
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    color: 'from-blue-400 to-indigo-500',
    title: 'Individuelle Förderung für jeden Schüler',
    description: 'Jeder Schüler lernt in seinem eigenen Tempo. Die KI erkennt Stärken und Schwächen und passt sich automatisch an.',
  },
  {
    icon: Clock,
    color: 'from-emerald-400 to-teal-500',
    title: 'Entlastung der Lehrkräfte',
    description: 'Weniger Korrekturaufwand, automatische Lernstandserhebung und mehr Zeit für persönliche Betreuung im Unterricht.',
  },
  {
    icon: Shield,
    color: 'from-violet-400 to-purple-500',
    title: '100% DSGVO-konform',
    description: 'Server in der EU, keine Weitergabe an Dritte, volle Transparenz. Höchste Datenschutzstandards für Bildungseinrichtungen.',
  },
  {
    icon: Settings,
    color: 'from-orange-400 to-red-500',
    title: 'Einfache Integration',
    description: 'Nahtlose Anbindung an bestehende Schul-IT-Systeme. Kein aufwendiges Setup, einfache Verwaltung über Admin-Dashboard.',
  },
  {
    icon: Headphones,
    color: 'from-pink-400 to-rose-500',
    title: 'Dedizierter Support',
    description: 'Persönlicher Ansprechpartner für Schulen, Onboarding-Unterstützung und Schulungen für Lehrkräfte.',
  },
  {
    icon: School,
    color: 'from-cyan-400 to-blue-500',
    title: 'Planbare Jahreslizenzen',
    description: 'Transparente Preisstruktur pro Schüler/Jahr. Keine versteckten Kosten, keine Überraschungen.',
  },
]

const comparisonRows = [
  { feature: 'KI Chat-Tutor mit Rückfragen', wissn: true, others: false },
  { feature: 'Automatische Mindmaps aus Dokumenten', wissn: true, others: false },
  { feature: 'Personalisierte Lernpläne', wissn: true, others: 'Teilweise' },
  { feature: 'Karteikarten & Quiz-Generator', wissn: true, others: 'Teilweise' },
  { feature: 'Sokratische Dialoge', wissn: true, others: false },
  { feature: 'Unbegrenzte Dokumentenverarbeitung', wissn: true, others: false },
  { feature: 'Schul-Lizenzmodell', wissn: true, others: 'Teilweise' },
  { feature: 'DSGVO-konform, Server in EU', wissn: true, others: 'Teilweise' },
]

export default function ForSchoolsPage() {
  useSEO({
    title: 'Für Schulen & Bildungsträger',
    description: 'Wissn bietet Jahreslizenzen für Schulen: KI-gestütztes Lernen, DSGVO-konform, individuelle Förderung.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-wissn-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <School className="w-4 h-4" />
              Für Bildungseinrichtungen
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              KI-Lernplattform für <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-500 to-wissn-green bg-clip-text text-transparent">Ihre Schule</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Kosteneffiziente Jahreslizenzen pro Schüler — individuelle Förderung durch KI,
              Entlastung für Lehrkräfte, volle DSGVO-Konformität.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:kontakt@wissn.de" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-wissn-green text-white font-semibold text-lg hover:shadow-xl transition-all no-underline">
                Angebot anfragen
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/features" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 transition-colors no-underline">
                Alle Features ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Warum Schulen Wissn wählen</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Entwickelt für die Anforderungen von Bildungseinrichtungen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, color, title, description }) => (
              <div key={title} className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all text-center">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md mx-auto`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vergleich */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Was Wissn anders macht
            </h2>
            <p className="text-lg text-slate-500">Im Vergleich zu simpleclub, Sofatutor und Co.</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 text-sm font-semibold bg-slate-50 border-b border-slate-200">
              <div className="p-4 text-slate-500">Feature</div>
              <div className="p-4 text-center text-wissn-green">Wissn</div>
              <div className="p-4 text-center text-slate-400">Andere</div>
            </div>
            {comparisonRows.map(({ feature, wissn, others }, i) => (
              <div key={feature} className={`grid grid-cols-3 text-sm ${i < comparisonRows.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 transition-colors`}>
                <div className="p-4 text-slate-700">{feature}</div>
                <div className="p-4 flex justify-center">
                  {wissn === true ? <CheckCircle className="w-5 h-5 text-wissn-green" /> : <span className="text-slate-400">{wissn}</span>}
                </div>
                <div className="p-4 flex justify-center">
                  {others === true ? (
                    <CheckCircle className="w-5 h-5 text-slate-400" />
                  ) : others === false ? (
                    <X className="w-5 h-5 text-slate-300" />
                  ) : (
                    <span className="text-slate-400 text-xs">{others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-wissn-green-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <WissnLogo size={56} className="justify-center mb-6" />
          <blockquote className="text-xl sm:text-2xl text-slate-700 italic leading-relaxed mb-6">
            "Schüler brauchen individuelle Unterstützung — die KI kann so viele
            Erklärungsansätze bieten, wie ein einzelner Lehrer zeitlich nicht leisten kann."
          </blockquote>
          <p className="text-sm text-slate-500 mb-10">— Wissn Gründerteam</p>
          <a href="mailto:kontakt@wissn.de" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-wissn-green text-white font-semibold text-lg hover:shadow-xl transition-all no-underline">
            Jetzt Angebot anfragen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/ForStudentsPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'
import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react'

export default function ForStudentsPage() {
  useSEO({
    title: 'Für Schüler',
    description: 'Wissn hilft Schülern, effizienter zu lernen — mit KI-Chat-Tutor, Mindmaps, Karteikarten und personalisierten Lernplänen.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-emerald-50 via-white to-wissn-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Für Schüler
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Dein persönlicher <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-500 to-wissn-green bg-clip-text text-transparent">KI-Lernbegleiter</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Lade deine Unterlagen hoch und lerne mit einem intelligenten Tutor,
              der sich an dein Tempo anpasst — rund um die Uhr verfügbar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-wissn-green/25 transition-all no-underline">
                Kostenlos starten
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/so-funktionierts" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 transition-colors no-underline">
                So funktioniert's
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Warum Schüler Wissn lieben</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Alles, was du für bessere Noten brauchst — in einer App.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Fragen jederzeit stellen', description: 'Der KI-Tutor erklärt dir Themen so oft du willst — ohne genervt zu sein.' },
              { title: 'Automatische Zusammenfassungen', description: 'Lade dein Skript hoch und erhalte Zusammenfassungen, Mindmaps und Karteikarten.' },
              { title: 'Quiz & Karteikarten', description: 'Teste dein Wissen mit automatisch generierten Quizfragen und Lernkarten.' },
              { title: 'Lerne in deinem Tempo', description: 'Die KI passt sich deinem Wissensstand an und wiederholt, was du noch nicht kannst.' },
              { title: 'Prüfungsvorbereitung', description: 'Gezieltes Training für anstehende Klausuren — effektiv und stressfrei.' },
              { title: 'Kostenlos starten', description: 'Registriere dich kostenlos und entdecke, wie KI dein Lernen verbessert.' },
            ].map(({ title, description }) => (
              <div key={title} className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-5 shadow-md mx-auto">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-wissn-green-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Bereit, smarter zu lernen?</h2>
          <p className="text-lg text-slate-500 mb-8">Starte jetzt kostenlos und erlebe den Unterschied.</p>
          <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-wissn-green/25 transition-all no-underline">
            Jetzt kostenlos starten
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/ForParentsPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'
import { ArrowRight, Heart, Sparkles } from 'lucide-react'

export default function ForParentsPage() {
  useSEO({
    title: 'Für Eltern',
    description: 'Wissn unterstützt Ihr Kind beim Lernen — KI-gestützt, sicher und DSGVO-konform.',
  })

  return (
    <Layout>
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-rose-50 via-white to-wissn-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Für Eltern
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Ihr Kind lernt <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-rose-500 to-wissn-green bg-clip-text text-transparent">intelligenter</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Wissn bietet Ihrem Kind einen persönlichen KI-Tutor, der geduldig erklärt,
              gezielt fördert und rund um die Uhr verfügbar ist — sicher und DSGVO-konform.
            </p>
            <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-wissn-green/25 transition-all no-underline">
              Kostenlos ausprobieren
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/AboutPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'
import { ArrowRight, Linkedin, Cloud, Brain, Shield, Rocket } from 'lucide-react'

const team = [
  {
    initials: 'LH',
    color: 'from-wissn-green to-emerald-500',
    name: '[NAME]',
    role: '[ROLLE]',
    bio: '[BIO — 2-3 Sätze über Hintergrund, Motivation und Expertise]',
    linkedin: '[LINKEDIN-URL]',
  },
  {
    initials: 'MK',
    color: 'from-blue-400 to-indigo-500',
    name: '[NAME]',
    role: '[ROLLE]',
    bio: '[BIO — 2-3 Sätze über Hintergrund, Motivation und Expertise]',
    linkedin: '[LINKEDIN-URL]',
  },
]

export default function AboutPage() {
  useSEO({
    title: 'Über uns',
    description: 'Erfahre mehr über das Team hinter Wissn, unsere Mission und die Technologie, die individuelles Lernen für jeden Schüler ermöglicht.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wissn-green-100 text-wissn-green text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Public Beta — seit 2025
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Wir sind{' '}
              <span className="bg-gradient-to-r from-wissn-green to-emerald-500 bg-clip-text text-transparent">Wissn</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Wir bauen die KI-gestützte Lernplattform, die jedem Schüler einen persönlichen Tutor gibt —
              individuell, geduldig und rund um die Uhr verfügbar.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Geschäftsmodell */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6 text-center">Unsere Mission</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">Das Problem:</strong> In deutschen Klassenzimmern sitzen durchschnittlich 30 Schüler.
                Lehrkräfte können unmöglich auf jede individuelle Frage eingehen. Viele Schüler bleiben mit Lücken zurück
                und greifen kurz vor der Prüfung zum Bulimielernen — ohne nachhaltiges Verständnis.
              </p>
              <p>
                <strong className="text-slate-900">Unsere Lösung:</strong> Wissn gibt jedem Schüler einen KI-Tutor, der geduldig erklärt,
                gezielt nachfragt und den Lernstoff mit Mindmaps, Karteikarten und sokratischen Dialogen verankert.
                Lehrkräfte erhalten Einblicke in den Lernfortschritt und können gezielt unterstützen.
              </p>
              <p>
                <strong className="text-slate-900">Geschäftsmodell:</strong> Wissn ist ein SaaS-Produkt mit Schullizenzen.
                Schulen und Bildungsträger erhalten eine zentrale Verwaltung, Klassenräume und Analytics.
                Einzelne Schüler können Wissn kostenlos mit Basisfunktionen nutzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Das Team</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Wir verbinden Bildungserfahrung mit technischer Expertise, um Lernen grundlegend zu verbessern.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map(({ initials, color, name, role, bio, linkedin }) => (
              <div key={initials} className="text-center p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-lg text-white text-2xl font-bold`}>
                  {initials}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
                <p className="text-sm text-wissn-green font-medium mb-3">{role}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{bio}</p>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-600 transition-colors no-underline">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & Vision */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Technologie & Vision</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Built on scalable cloud infrastructure — bereit für tausende Schulen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Brain, color: 'from-violet-400 to-purple-500', title: 'KI-Modelle', text: 'State-of-the-art LLMs für kontextbezogenes, sicheres Lernen.' },
              { icon: Cloud, color: 'from-blue-400 to-cyan-500', title: 'Cloud-native', text: 'Skalierbare Infrastruktur auf Google Cloud — zuverlässig und performant.' },
              { icon: Shield, color: 'from-emerald-400 to-teal-500', title: 'DSGVO-konform', text: 'Datenschutz by Design. Alle Daten in der EU. Volle Transparenz.' },
            ].map(({ icon: Icon, color, title, text }) => (
              <div key={title} className="text-center p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Klingt spannend?
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            Wissn ist in der Public Beta — probier es kostenlos aus oder kontaktiere uns für eine Schullizenz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-wissn-green/25 transition-all no-underline">
              Kostenlos starten
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-50 transition-colors no-underline">
              Kontakt aufnehmen
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/ImpressumPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'

export default function ImpressumPage() {
  useSEO({
    title: 'Impressum',
    description: 'Impressum von Wissn — Angaben gemäß § 5 TMG.',
  })

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Impressum</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Angaben gemäß § 5 TMG</h2>
              <p>[Vor- und Nachname]<br />[Straße Nr.]<br />[PLZ Ort]</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Kontakt</h2>
              <p>E-Mail: [E-Mail]<br />Telefon: [Telefon]</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>[Vor- und Nachname]<br />[Straße Nr.]<br />[PLZ Ort]</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-wissn-green hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/DatenschutzPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'

export default function DatenschutzPage() {
  useSEO({
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung von Wissn — Informationen zur Verarbeitung personenbezogener Daten.',
  })

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Datenschutzerklärung</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Verantwortlicher</h2>
              <p>[Vor- und Nachname]<br />[Straße Nr.]<br />[PLZ Ort]<br />E-Mail: [E-Mail]</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Hosting</h2>
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet. Personenbezogene Daten, die auf dieser Website erfasst werden,
                werden auf den Servern des Hosters gespeichert. Hierbei kann es sich um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln, die über eine Website generiert werden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Datenerhebung auf dieser Website</h2>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Registrierung & Authentifizierung</h3>
              <p>
                Für die Nutzung von Wissn ist eine Registrierung erforderlich. Die Authentifizierung erfolgt über Supabase Auth.
                Dabei werden E-Mail-Adresse und ein verschlüsseltes Passwort gespeichert.
                Die Daten werden ausschließlich zur Bereitstellung des Dienstes verwendet.
              </p>
              <h3 className="text-lg font-medium text-slate-800 mb-2 mt-4">Analytics</h3>
              <p>
                Wir verwenden Google Analytics 4 (GA4) zur Analyse der Websitenutzung. GA4 verwendet Cookies und ähnliche Technologien,
                um anonymisierte Nutzungsdaten zu erfassen. Die IP-Adresse wird anonymisiert.
                Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Cookies</h2>
              <p>
                Diese Website verwendet Cookies. Dabei handelt es sich um technisch notwendige Cookies für die Authentifizierung
                sowie Analytics-Cookies. Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Rechte der betroffenen Personen</h2>
              <p>Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: [E-Mail]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/NutzungsbedingungenPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'

export default function NutzungsbedingungenPage() {
  useSEO({
    title: 'Nutzungsbedingungen',
    description: 'Allgemeine Nutzungsbedingungen der Lernplattform Wissn.',
  })

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Nutzungsbedingungen</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Geltungsbereich</h2>
              <p>
                Diese Nutzungsbedingungen gelten für die Nutzung der Lernplattform Wissn, betrieben von [Vor- und Nachname], [Straße Nr.], [PLZ Ort].
                Mit der Registrierung erkennen Sie diese Bedingungen an.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Registrierung</h2>
              <p>
                Für die Nutzung von Wissn ist eine Registrierung mit einer gültigen E-Mail-Adresse erforderlich.
                Sie sind verpflichtet, Ihre Zugangsdaten vertraulich zu behandeln und für alle Aktivitäten unter Ihrem Konto verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Nutzungsrechte und Pflichten</h2>
              <p>
                Wissn gewährt Ihnen ein einfaches, nicht übertragbares Recht zur Nutzung der Plattform für persönliche Bildungszwecke.
                Es ist untersagt, die Plattform für rechtswidrige Zwecke zu verwenden, automatisierte Zugriffe durchzuführen
                oder die Plattform in einer Weise zu nutzen, die den Betrieb beeinträchtigt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Haftungsbeschränkung</h2>
              <p>
                Wissn stellt Lerninhalte KI-gestützt bereit. Die generierten Inhalte dienen als Lernhilfe und ersetzen nicht die professionelle pädagogische Betreuung.
                Wissn haftet nicht für die inhaltliche Richtigkeit der KI-generierten Antworten.
                Die Haftung beschränkt sich auf Fälle von Vorsatz und grober Fahrlässigkeit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Kündigung</h2>
              <p>
                Sie können Ihr Konto jederzeit ohne Angabe von Gründen löschen.
                Wissn behält sich vor, Konten bei Verstößen gegen diese Nutzungsbedingungen zu sperren.
                Bei Kündigung werden Ihre personenbezogenen Daten gemäß der Datenschutzerklärung gelöscht.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Änderungen</h2>
              <p>
                Wissn behält sich vor, diese Nutzungsbedingungen jederzeit zu ändern.
                Über wesentliche Änderungen werden registrierte Nutzer per E-Mail informiert.
                Die fortgesetzte Nutzung nach Änderung gilt als Zustimmung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Anwendbares Recht</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist [PLZ Ort], sofern gesetzlich zulässig.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/KontaktPage.jsx
// ────────────────────────────────────────────────────────────

import Layout, { useSEO } from '../components/Layout'
import { Mail, MapPin, ArrowRight, Linkedin, Twitter } from 'lucide-react'

export default function KontaktPage() {
  useSEO({
    title: 'Kontakt',
    description: 'Kontaktiere das Wissn-Team — wir freuen uns auf deine Nachricht.',
  })

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Kontakt
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-16">
              Hast du Fragen, Feedback oder möchtest eine Schullizenz anfragen? Wir freuen uns auf deine Nachricht.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <div className="text-center p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-wissn-green to-emerald-500 flex items-center justify-center mx-auto mb-5 shadow-md">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">E-Mail</h3>
              <a href="mailto:kontakt@wissn.de" className="text-wissn-green hover:underline no-underline">kontakt@wissn.de</a>
            </div>
            <div className="text-center p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mx-auto mb-5 shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Adresse</h3>
              <p className="text-sm text-slate-500">[Straße Nr.]<br />[PLZ Ort]</p>
            </div>
          </div>

          <div className="max-w-xl mx-auto text-center">
            <a
              href="mailto:kontakt@wissn.de"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-wissn-green/25 transition-all no-underline"
            >
              Schreib uns
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a href="[LINKEDIN-URL]" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors no-underline">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="[TWITTER-URL]" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-colors no-underline">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/Auth.jsx
// ────────────────────────────────────────────────────────────

import { useState } from 'react'
import { supabase } from '../lib/supabase'
import WissnLogo from '../components/WissnLogo'
import { Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle, CheckCircle, User } from 'lucide-react'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (password.length < 8) {
      setError('Das Passwort muss mindestens 8 Zeichen lang sein.')
      return
    }

    if (!isLogin) {
      if (password !== passwordConfirm) {
        setError('Die Passwörter stimmen nicht überein.')
        return
      }
      if (!termsAccepted) {
        setError('Bitte akzeptiere die Nutzungsbedingungen.')
        return
      }
    }

    setLoading(true)

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { first_name: firstName, last_name: lastName },
          },
        })
        if (error) throw error

        if (data.user) {
          await supabase
            .from('users')
            .update({
              first_name: firstName,
              last_name: lastName,
              full_name: `${firstName} ${lastName}`.trim(),
              terms_accepted_at: new Date().toISOString(),
            })
            .eq('id', data.user.id)
        }

        setSuccess('Bestätigungs-E-Mail gesendet! Bitte überprüfe dein Postfach.')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <a href="/" className="no-underline">
            <WissnLogo size={56} />
          </a>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
            {isLogin ? 'Willkommen zurück' : 'Konto erstellen'}
          </h1>
          <p className="text-sm text-slate-500 text-center mb-8">
            {isLogin
              ? 'Melde dich an, um auf deine Lernplattform zuzugreifen.'
              : 'Registriere dich, um mit dem Lernen zu beginnen.'}
          </p>

          {/* Fehler / Erfolg */}
          {error && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm mb-6">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-wissn-green-50 border border-wissn-green-100 text-wissn-green-dark text-sm mb-6">
              <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* Formular */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Vorname + Nachname (nur Register) */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Vorname
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Max"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-wissn-green focus:ring-2 focus:ring-wissn-green-50 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Nachname
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Mustermann"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-wissn-green focus:ring-2 focus:ring-wissn-green-50 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@schule.de"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-wissn-green focus:ring-2 focus:ring-wissn-green-50 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                Passwort
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mindestens 8 Zeichen"
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-wissn-green focus:ring-2 focus:ring-wissn-green-50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-0 bg-transparent border-none cursor-pointer text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Passwort bestätigen (nur Register) */}
            {!isLogin && (
              <div>
                <label htmlFor="passwordConfirm" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Passwort bestätigen
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="passwordConfirm"
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="Passwort wiederholen"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-wissn-green focus:ring-2 focus:ring-wissn-green-50 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Nutzungsbedingungen Checkbox (nur Register) */}
            {!isLogin && (
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-wissn-green focus:ring-wissn-green cursor-pointer accent-wissn-green"
                />
                <span className="text-sm text-slate-600">
                  Ich akzeptiere die{' '}
                  <a
                    href="/nutzungsbedingungen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wissn-green hover:text-wissn-green-dark no-underline font-medium"
                  >
                    Nutzungsbedingungen
                  </a>
                </span>
              </label>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-wissn-green text-white font-medium text-sm hover:bg-wissn-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Anmelden' : 'Registrieren'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Wechsel Login/Register */}
        <p className="text-center text-sm text-slate-500 mt-6">
          {isLogin ? 'Noch kein Konto?' : 'Bereits registriert?'}{' '}
          <button
            onClick={() => {
              setIsLogin(!isLogin)
              setError(null)
              setSuccess(null)
            }}
            className="text-wissn-green font-medium hover:text-wissn-green-dark bg-transparent border-none cursor-pointer p-0 text-sm"
          >
            {isLogin ? 'Jetzt registrieren' : 'Zur Anmeldung'}
          </button>
        </p>

        {/* Zurück zur Homepage */}
        <p className="text-center text-sm text-slate-400 mt-3">
          <a href="/" className="hover:text-slate-600 transition-colors no-underline">
            &larr; Zurück zur Startseite
          </a>
        </p>
      </div>
    </div>
  )
}


// ────────────────────────────────────────────────────────────
// Datei: src/pages/Dashboard.jsx
// ────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import WissnLogo from '../components/WissnLogo'
import {
  LogOut,
  ExternalLink,
  BookOpen,
  BrainCircuit,
  LayoutDashboard,
  ChevronRight,
  Sparkles,
  FileText,
  MessageSquare,
  Map,
} from 'lucide-react'

const FIREBASE_APP_URL = 'https://turbotutor-67e03.web.app'

export default function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <WissnLogo size={36} />
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 hidden sm:block">{user.email}</span>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors bg-transparent border-none cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Abmelden</span>
            </button>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 -mb-px">
            {[
              { id: 'overview', label: 'Übersicht', icon: LayoutDashboard },
              { id: 'app', label: 'Lern-App', icon: BrainCircuit },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors bg-transparent cursor-pointer ${
                  activeTab === id
                    ? 'border-wissn-green text-wissn-green'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'app' && <AppTab />}
      </main>
    </div>
  )
}

function OverviewTab() {
  const features = [
    {
      icon: MessageSquare,
      title: 'KI Chat-Tutor',
      description: 'Stelle Fragen zu jedem Thema und erhalte sofort verständliche Erklärungen.',
    },
    {
      icon: Map,
      title: 'Automatische Mindmaps',
      description: 'Lade Dokumente hoch und erhalte visuelle Zusammenfassungen als Mindmap.',
    },
    {
      icon: BookOpen,
      title: 'Karteikarten & Quiz',
      description: 'Generiere Lernkarten und Quizfragen automatisch aus deinen Unterlagen.',
    },
    {
      icon: FileText,
      title: 'Dokumenten-Analyse',
      description: 'Die KI analysiert Skripte und erstellt personalisierte Lernpläne.',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="w-6 h-6 text-wissn-green" />
          <h2 className="text-xl font-bold text-slate-900">Willkommen bei Wissn</h2>
        </div>
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          Deine KI-gestützte Lernplattform. Nutze den <strong>Lern-App</strong> Tab oben,
          um direkt mit dem intelligenten Tutor zu arbeiten — lade Dokumente hoch,
          stelle Fragen und erstelle Lernmaterialien.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:border-wissn-green-100 hover:shadow-sm transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-wissn-green-50 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-wissn-green" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <div className="bg-wissn-green-50 rounded-2xl border border-wissn-green-100 p-6">
        <h3 className="font-semibold text-slate-900 mb-2">Bald verfügbar</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-wissn-green" />
            Lernfortschritts-Dashboard mit Statistiken
          </li>
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-wissn-green" />
            Spaced Repetition Algorithmus für optimale Wiederholung
          </li>
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-wissn-green" />
            Sokratische Dialoge — die KI fragt zurück, um Verständnis zu prüfen
          </li>
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-wissn-green" />
            Klassen-Verwaltung für Lehrkräfte
          </li>
        </ul>
      </div>
    </div>
  )
}

function AppTab() {
  const [appUrl, setAppUrl] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        const params = new URLSearchParams({
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        })
        setAppUrl(`${FIREBASE_APP_URL}/#${params.toString()}`)
      } else {
        setAppUrl(FIREBASE_APP_URL)
      }
    })
  }, [])

  const externalUrl = appUrl || FIREBASE_APP_URL

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Lern-App</h2>
          <p className="text-sm text-slate-500">Dein KI-Tutor — direkt im Browser.</p>
        </div>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-colors no-underline"
        >
          <ExternalLink className="w-4 h-4" />
          Im neuen Tab öffnen
        </a>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden" style={{ height: 'calc(100vh - 240px)' }}>
        {appUrl ? (
          <iframe
            src={appUrl}
            title="Wissn Lern-App"
            className="w-full h-full border-none"
            allow="clipboard-write; clipboard-read"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-slate-200 border-t-wissn-green rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  )
}
