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
              <div key={title} className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md`}>
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
