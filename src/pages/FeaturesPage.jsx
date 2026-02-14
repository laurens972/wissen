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
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className={`${bg} rounded-3xl p-10 lg:p-14 flex items-center justify-center`}>
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Text */}
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
