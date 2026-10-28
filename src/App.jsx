import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { trackPageView } from './lib/analytics'
import { useConsent } from './context/ConsentContext'
import CookieBanner from './components/CookieBanner'
import { APP_URL } from './components/Layout'
import Landing from './pages/Landing'
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

/* -- Weiter zur App --
 * Die Website hat keinen eigenen Login: Anmelden und Registrieren laufen nur
 * in der App. Alte Links und Lesezeichen (/app, /auth, /dashboard) landen
 * dort direkt. */
function ToApp() {
  useEffect(() => {
    window.location.replace(APP_URL)
  }, [])
  return null
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
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteTracker />
      <Routes>
        <Route path="/" element={<Landing />} />
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
        <Route path="/app" element={<ToApp />} />
        <Route path="/auth" element={<ToApp />} />
        <Route path="/dashboard" element={<ToApp />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}
