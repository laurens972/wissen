import Layout, { useSEO } from '../components/Layout'
import Reveal from '../components/Reveal'
import { ArrowRight, MessageSquare, Map, BookOpen, Target, PenTool, Clock, Check } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Dein Lernplan, dein Tempo',
    description: 'Die KI erstellt dir einen Lernplan zu den Schwerpunkten deiner Lehrkraft. Du hakst ab, was du schon kannst, und siehst sofort, was als Nächstes ansteht.',
    href: '/features#lernplaene',
  },
  {
    icon: MessageSquare,
    title: 'Der Chat-Tutor sagt dir nichts vor',
    description: 'Er hilft dir mit gezielten Rückfragen, verweist auf Quellen aus deinem Unterrichtsmaterial und wird dabei nie ungeduldig, so oft du auch fragst.',
    href: '/features#chat-tutor',
  },
  {
    icon: BookOpen,
    title: 'Karteikarten, Quiz und Lückentexte',
    description: 'Automatisch erstellt aus deinem Unterrichtsstoff, ideal zum gezielten Üben vor der nächsten Arbeit.',
    href: '/features#karteikarten-quiz',
  },
  {
    icon: Map,
    title: 'Grafiken für den Überblick',
    description: 'Lass dir komplexe Themen als Grafik visualisieren und behalte den Zusammenhang im Blick.',
    href: '/features#grafiken',
  },
  {
    icon: PenTool,
    title: 'Handschrift und Mathe-Formeln',
    description: 'Fotografiere deine Notizen oder gib Formeln handschriftlich ein. Der Tutor versteht sie direkt.',
    href: '/features#chat-tutor',
  },
  {
    icon: Clock,
    title: 'Rund um die Uhr verfügbar',
    description: 'Ob abends oder am Wochenende: Frag den Tutor, wann es für dich passt.',
    href: '/so-funktionierts',
  },
]

export default function ForStudentsPage() {
  useSEO({
    title: 'Für Schüler',
    description: 'Wissn unterstützt dich beim Lernen: dein Lernplan, ein Chat-Tutor, der nicht vorsagt, sondern hilft, sowie Karteikarten, Quiz und Grafiken aus deinem Unterrichtsstoff.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-wissn-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">Für Schüler</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                Lern in deinem <br className="hidden sm:block" />
                <span className="marker">eigenen Tempo</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Mit deinem persönlichen Lernplan lernst du in deinem Tempo, hakst ab, was du schon kannst, und siehst, was als Nächstes drankommt. Der Chat-Tutor hilft dir mit Rückfragen statt fertigen Lösungen, rund um die Uhr.
              </p>
            </Reveal>
            {/* Schlagwort-Zusammenfassung der Seite */}
            <Reveal
              direction="up"
              delay={100}
              as="ul"
              className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10"
            >
              {[
                'Eigener Lernplan, eigenes Tempo',
                'Chat-Tutor, der nicht vorsagt',
                'Karteikarten, Quiz und Lückentexte',
                'Grafiken für den Überblick',
                'Rund um die Uhr verfügbar',
              ].map((tag) => (
                <li
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full bg-wissn-green-50 border border-wissn-green-100 px-5 py-2.5 text-base font-semibold text-wissn-green-dark"
                >
                  <Check className="w-4.5 h-4.5 text-wissn-green shrink-0" aria-hidden="true" />
                  {tag}
                </li>
              ))}
            </Reveal>
            <Reveal direction="up" delay={150}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/app"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-wissn-green-btn text-white font-semibold text-lg hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
                >
                  Kostenlos starten
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/so-funktionierts"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
                >
                  So funktioniert&apos;s
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Wie Wissn dich beim Lernen unterstützt</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Werkzeuge und Struktur für dein selbstständiges Lernen.</p>
            </div>
          </Reveal>
          <ul className="divide-y divide-slate-200">
            {benefits.map(({ icon: Icon, title, description, href }, i) => (
              <Reveal key={title} direction="up" delay={i * 60} as="li" className="py-6 first:pt-0">
                <a href={href} className="group flex items-start gap-4 no-underline">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-wissn-green-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-wissn-green" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold text-slate-900 mb-1">{title}</span>
                    <span className="block text-slate-600 leading-relaxed">{description}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-wissn-green-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Bereit für dein eigenes Lerntempo?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">Starte jetzt kostenlos und probiere Wissn direkt aus.</p>
            <a
              href="/app"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-wissn-green-btn text-white font-semibold text-lg hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
            >
              Jetzt kostenlos starten
              <ArrowRight className="w-5 h-5" />
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
