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
  AlertTriangle,
  Chrome,
} from 'lucide-react'

// Chrome-Erkennung
function isChromeBrowser() {
  const ua = navigator.userAgent
  return /Chrome/.test(ua) && !/Edg|OPR|Brave/.test(ua)
}

const FIREBASE_APP_URL = 'https://turbotutor-67e03.web.app'

export default function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
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

      {/* Tab Navigation */}
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

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'app' && <AppTab />}
      </main>
    </div>
  )
}

/* ── Übersicht ─────────────────────────────── */
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
      {/* Willkommen */}
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

      {/* Feature Cards */}
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

      {/* Zukunfts-Features Hinweis */}
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

/* ── Lern-App (iframe) ─────────────────────── */
function AppTab() {
  const [appUrl, setAppUrl] = useState(null)
  const chrome = isChromeBrowser()

  useEffect(() => {
    if (!chrome) return
    // Supabase-Session holen und Tokens an die iframe-URL hängen
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
  }, [chrome])

  // Nicht-Chrome: Hinweis anzeigen
  if (!chrome) {
    return (
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Lern-App</h2>
          <p className="text-sm text-slate-500">Dein KI-Tutor — direkt im Browser.</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden" style={{ height: 'calc(100vh - 240px)' }}>
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="max-w-md text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Chrome erforderlich
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Die Wissn Lern-App funktioniert aktuell nur in <strong>Google Chrome</strong>.
                Bitte öffne die App in Chrome, um alle Funktionen nutzen zu können.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://www.google.com/chrome/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-wissn-green text-white font-medium text-sm hover:bg-wissn-green-dark transition-colors no-underline"
                >
                  <Chrome className="w-4 h-4" />
                  Chrome herunterladen
                </a>
                <a
                  href={FIREBASE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-700 font-medium text-sm border border-slate-200 hover:border-slate-300 transition-colors no-underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Trotzdem in Chrome öffnen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
