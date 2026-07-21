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
  FileText,
  MessageSquare,
  Map,
} from 'lucide-react'

const APP_URL = 'https://app.wissn-ai.de'

export default function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="/" className="no-underline"><WissnLogo size={36} /></a>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-slate-500 hidden sm:block">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors bg-transparent border-none cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Abmelden</span>
                </button>
              </>
            ) : (
              <a
                href="/auth"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
              >
                Anmelden
              </a>
            )}
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
      title: 'Automatische Grafiken',
      description: 'Lade Dokumente hoch und erhalte visuelle Zusammenfassungen als Grafik.',
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
        <h2 className="text-xl font-bold text-slate-900 mb-3">Willkommen bei Wissn</h2>
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          Deine KI-gestützte Lernplattform. Nutze den <strong>Lern-App</strong> Tab oben,
          um direkt mit dem intelligenten Tutor zu arbeiten. Lade Dokumente hoch,
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
            Sokratische Dialoge: die KI fragt zurück, um Verständnis zu prüfen
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
  const [appUrl, setAppUrl] = useState(APP_URL)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        const params = new URLSearchParams({
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        })
        setAppUrl(`${APP_URL}/#${params.toString()}`)
      }
    })
  }, [])

  const externalUrl = appUrl || APP_URL

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Lern-App</h2>
          <p className="text-sm text-slate-500">Dein KI-Tutor direkt im Browser.</p>
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
