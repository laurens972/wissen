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
              <div key={number}>
                <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-10 hover:shadow-lg hover:border-slate-300 transition-all">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    {/* Icon + Number */}
                    <div className="shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
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

                {/* Arrow between steps */}
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
