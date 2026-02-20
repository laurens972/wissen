import Layout, { useSEO } from '../components/Layout'
import {
  ArrowRight, MessageSquare, Map, BookOpen, Clock, FileText, BrainCircuit,
  Zap, Lightbulb, Target, Rocket,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    color: 'from-emerald-400 to-teal-500',
    title: 'Chat-Tutor',
    description: 'Wie ein Kumpel, der dir alles erklären kann — nur dass er nie genervt ist und immer Zeit hat.',
  },
  {
    icon: Map,
    color: 'from-blue-400 to-indigo-500',
    title: 'Mindmaps automatisch',
    description: 'Lad dein Skript hoch und bekomm in Sekunden eine Übersicht. Perfekt vor der Klausur.',
  },
  {
    icon: BookOpen,
    color: 'from-violet-400 to-purple-500',
    title: 'Karteikarten & Quiz',
    description: 'Klausurvorbereitung leicht gemacht — Wissn erstellt automatisch Lernkarten aus deinem Stoff.',
  },
  {
    icon: Clock,
    color: 'from-orange-400 to-amber-500',
    title: 'Eigenes Tempo',
    description: 'Kein Druck, kein Stress. Lern wann du willst, so lange du willst. 24/7 verfügbar.',
  },
  {
    icon: FileText,
    color: 'from-pink-400 to-rose-500',
    title: 'Dokumente hochladen',
    description: 'Schulstoff direkt verarbeiten — lade PDFs, Word-Dateien oder Texte hoch und arbeite damit.',
  },
  {
    icon: BrainCircuit,
    color: 'from-cyan-400 to-blue-500',
    title: 'Sokratische Dialoge',
    description: 'Verstehen statt Auswendiglernen. Die KI fragt zurück und hilft dir, Themen wirklich zu kapieren.',
  },
]

const tips = [
  {
    icon: FileText,
    color: 'from-blue-400 to-indigo-500',
    title: 'Lade dein Skript hoch',
    description: 'Je mehr Material du hochlädst, desto besser kann die KI dir helfen. Arbeitsblätter, Mitschriften, alles rein.',
  },
  {
    icon: Target,
    color: 'from-emerald-400 to-teal-500',
    title: 'Stell gezielte Fragen',
    description: 'Statt „Erklär mir Mathe" lieber „Wie löse ich quadratische Gleichungen mit der p-q-Formel?" — je konkreter, desto besser.',
  },
  {
    icon: Lightbulb,
    color: 'from-violet-400 to-purple-500',
    title: 'Nutz die Karteikarten',
    description: 'Erstelle Karteikarten aus deinem Stoff und wiederhole regelmäßig. Spaced Repetition ist wissenschaftlich belegt.',
  },
  {
    icon: Rocket,
    color: 'from-orange-400 to-amber-500',
    title: 'Bleib dran',
    description: 'Lieber jeden Tag 20 Minuten als einmal 5 Stunden vor der Klausur. Wissn hilft dir, dranzubleiben.',
  },
]

export default function ForStudentsPage() {
  useSEO({
    title: 'Für Schüler',
    description: 'Lern smarter mit Wissn — KI-Chat-Tutor, Mindmaps, Karteikarten und mehr. Kostenlos starten.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Für Schüler
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            Lern smarter, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">nicht härter</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Wissn ist dein persönlicher KI-Lernpartner. Egal ob Klausurvorbereitung,
            Hausaufgaben oder einfach Verstehen wollen — Wissn hilft dir.
          </p>
          <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all no-underline">
            Jetzt kostenlos starten
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Alles, was du zum Lernen brauchst</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Sechs Tools, eine Plattform — und alles checkt.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, color, title, description }) => (
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

      {/* Tipps */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">So holst du das Meiste raus</h2>
            <p className="text-lg text-slate-500">Vier Tipps, damit Wissn für dich richtig funktioniert.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tips.map(({ icon: Icon, color, title, description }, i) => (
              <div key={title} className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-md`}>
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Ready? Los geht's!</h2>
          <p className="text-lg text-slate-500 mb-8">Erstell dir kostenlos einen Account und leg direkt los.</p>
          <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all no-underline">
            Jetzt kostenlos starten
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  )
}
