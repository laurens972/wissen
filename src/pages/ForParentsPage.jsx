import Layout, { useSEO } from '../components/Layout'
import { ArrowRight, ShieldCheck, Clock, LineChart, Lock } from 'lucide-react'
import Reveal from '../components/Reveal'

const points = [
  {
    icon: Clock,
    title: 'Im eigenen Tempo lernen',
    description: 'Mit einem KI-Lernplan bearbeitet Ihr Kind seine Themen selbstständig. Der Chat-Tutor hilft bei Verständnisfragen, ohne Lösungen vorzusagen, jederzeit, auch abends oder am Wochenende.',
  },
  {
    icon: LineChart,
    title: 'Lernfortschritt sichtbar für Sie und die Lehrkraft',
    description: 'Im Lernplan hakt Ihr Kind ab, was es schon geschafft hat. Die Lehrkraft erhält zusätzlich eine Lernanalyse, die zeigt, wo noch Übung nötig ist.',
  },
  {
    icon: ShieldCheck,
    title: 'Eltern behalten die Kontrolle',
    description: 'Vor der Nutzung holen wir Ihre Einwilligung nach Art. 8 DSGVO ein. Jugendschutz-Mechanismen und eine Meldefunktion für unangemessene Inhalte sorgen dafür, dass die App für Ihr Kind sicher bleibt.',
  },
  {
    icon: Lock,
    title: 'KI-Anfragen laufen über einen EU-Proxy',
    description: 'Die Daten Ihres Kindes werden DSGVO-konform in der EU verarbeitet und nicht an Dritte weitergegeben.',
  },
]

export default function ForParentsPage() {
  useSEO({
    title: 'Für Eltern',
    description: 'Wissn unterstützt Ihr Kind beim selbstständigen Lernen mit einem KI-Lernplan und Chat-Tutor. Für Eltern transparent, sicher und DSGVO-konform.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-wissn-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">Für Eltern</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                Ihr Kind lernt <span className="marker">selbstständiger</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Immer mehr Schulen setzen auf selbstständiges Lernen, zum Beispiel im Lernbüro. Wissn begleitet Ihr Kind dabei mit einem KI-Lernplan und einem Chat-Tutor, der nicht vorsagt, sondern gezielt nachfragt, und macht den Lernfortschritt für Sie und die Lehrkraft nachvollziehbar. Sicher und DSGVO-konform.
              </p>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <a
                href="/app"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-wissn-green-btn text-white font-semibold text-lg hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
              >
                Kostenlos ausprobieren
                <ArrowRight className="w-5 h-5" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vertrauen / Sicherheit */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Wie Wissn Ihr Kind beim Lernen unterstützt</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Digitale Werkzeuge, die den Lernfortschritt nachvollziehbar machen.</p>
            </div>
          </Reveal>
          <ul className="divide-y divide-slate-200">
            {points.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} direction="up" delay={i * 60} as="li" className="py-6 first:pt-0">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-wissn-green-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-wissn-green" />
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-slate-900 mb-1">{title}</p>
                    <p className="text-slate-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Vertrauens-Leiste */}
      <section className="py-10 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-wissn-green" aria-hidden="true" />
              DSGVO-konform
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-wissn-green" aria-hidden="true" />
              Server in der EU
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-wissn-green" aria-hidden="true" />
              Von Klasse 5 bis zum Abitur
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-wissn-green" aria-hidden="true" />
              Jugendschutz integriert
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-wissn-green-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Erleben Sie, wie Ihr Kind mit Wissn lernt</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">Kostenlos starten, ohne Verpflichtung.</p>
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
