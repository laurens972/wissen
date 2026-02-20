import Layout, { useSEO } from '../components/Layout'
import {
  ArrowRight, Heart, Shield, Brain, Clock, BookOpen, LayoutGrid,
  Eye, Smartphone, Lock,
} from 'lucide-react'

const benefits = [
  {
    icon: Eye,
    color: 'from-blue-400 to-indigo-500',
    title: 'Lernfortschritt im Blick',
    description: 'Sehen Sie in Echtzeit, wo Ihr Kind steht — welche Themen sitzen, wo es noch hakt.',
  },
  {
    icon: Shield,
    color: 'from-emerald-400 to-teal-500',
    title: 'Sicheres Lernen',
    description: 'DSGVO-konform, keine Weitergabe an Dritte, altersgerechte Inhalte. Ihre Daten bleiben in der EU.',
  },
  {
    icon: Brain,
    color: 'from-violet-400 to-purple-500',
    title: 'Kein Bulimielernen mehr',
    description: 'Wissn setzt auf nachhaltiges Verstehen statt stupides Auswendiglernen vor der Klausur.',
  },
  {
    icon: Heart,
    color: 'from-pink-400 to-rose-500',
    title: 'KI als Ergänzung, nicht Ersatz',
    description: 'Wissn fördert eigenständiges Denken — die KI gibt Impulse, statt fertige Antworten zu liefern.',
  },
  {
    icon: Clock,
    color: 'from-orange-400 to-amber-500',
    title: 'Flexible Lernzeiten',
    description: '24/7 verfügbar, im eigenen Tempo. Kein Terminstress, kein Nachhilfe-Shuttle.',
  },
  {
    icon: LayoutGrid,
    color: 'from-cyan-400 to-blue-500',
    title: 'Alle Fächer, eine Plattform',
    description: 'Mathe, Deutsch, Englisch, Bio — alles an einem Ort. Schluss mit dem Nachhilfe-Chaos.',
  },
]

const concerns = [
  {
    icon: Smartphone,
    question: '„Mein Kind hängt doch eh schon zu viel am Bildschirm."',
    answer: 'Verständlich. Aber bei Wissn ist Bildschirmzeit = Lernzeit. Keine Werbung, keine Ablenkung, kein Doomscrolling. Und: Wer aktiv lernt, braucht weniger Zeit als beim passiven Durchlesen von Heften.',
  },
  {
    icon: Brain,
    question: '„Wird mein Kind nicht abhängig von der KI?"',
    answer: 'Wissn nutzt sokratische Dialoge — die KI gibt keine fertigen Antworten, sondern stellt Gegenfragen. So lernt Ihr Kind selbstständig zu denken, statt nur abzuschreiben.',
  },
  {
    icon: Lock,
    question: '„Was passiert mit den Daten meines Kindes?"',
    answer: 'Server in der EU, DSGVO-konform, keine Weitergabe an Dritte. Wir speichern nur, was fürs Lernen nötig ist. Sie können jederzeit alle Daten einsehen oder löschen lassen.',
  },
  {
    icon: BookOpen,
    question: '„Ersetzt das den normalen Unterricht?"',
    answer: 'Nein — Wissn ergänzt den Schulunterricht. Ihr Kind kann den Schulstoff hochladen und gezielt vertiefen, was im Unterricht zu kurz kam.',
  },
]

export default function ForParentsPage() {
  useSEO({
    title: 'Für Eltern',
    description: 'Wissn unterstützt Ihr Kind beim Lernen — sicher, nachhaltig und in seinem eigenen Tempo.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-pink-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Für Eltern
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            Ihr Kind lernt <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">smarter</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Wissn ist die KI-Lernplattform, die Ihr Kind zu Hause unterstützt — sicher,
            nachhaltig und ohne Druck. Für echtes Verstehen statt Auswendiglernen.
          </p>
          <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/25 transition-all no-underline">
            Kostenlos testen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Warum Eltern Wissn vertrauen</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">So unterstützt Wissn Ihr Kind — und entlastet Sie.</p>
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

      {/* Häufige Eltern-Sorgen */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Häufige Eltern-Sorgen</h2>
            <p className="text-lg text-slate-500">Wir nehmen Ihre Bedenken ernst — und haben Antworten.</p>
          </div>
          <div className="space-y-6">
            {concerns.map(({ icon: Icon, question, answer }) => (
              <div key={question} className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-violet-500 flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{question}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-violet-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Überzeugen Sie sich selbst</h2>
          <p className="text-lg text-slate-500 mb-8">Testen Sie Wissn kostenlos — und sehen Sie, wie Ihr Kind smarter lernt.</p>
          <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/25 transition-all no-underline">
            Kostenlos testen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  )
}
