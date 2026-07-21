import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { supabase } from './lib/supabase'
import { trackPageView } from './lib/analytics'
import { useConsent } from './context/ConsentContext'
import CookieBanner from './components/CookieBanner'
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

/* -- Route Tracking -- *
 * Meldet Seitenaufrufe nur, wenn für "Statistik" eingewilligt wurde. Der
 * cookiefreie Dienst zählt Router-Wechsel selbst über die History-API und wird
 * hier absichtlich nicht zusätzlich angestoßen. */
function RouteTracker() {
  const location = useLocation()
  const { allows } = useConsent()

  useEffect(() => {
    if (!allows('statistics')) return
    trackPageView(location.pathname, document.title)
  }, [location, allows])

  return null
}

/* -- Protected Route -- */
function ProtectedRoute({ user, children }) {
  if (!user) return <Navigate to="/auth" replace />
  return children
}

/* -- ScrollToTop / Hash-Anker -- */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Anker-Ziel anspringen (nach Render, mit Offset via scroll-mt am Element)
      const id = hash.slice(1)
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return true
        }
        return false
      }
      if (!tryScroll()) {
        // Element evtl. noch nicht im DOM -> kurz später erneut
        const t = setTimeout(tryScroll, 100)
        return () => clearTimeout(t)
      }
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

/* -- App -- */
export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

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
          path="/app"
          element={user ? <Navigate to="/dashboard" replace /> : <Dashboard />}
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
      <CookieBanner />
    </BrowserRouter>
  )
}
