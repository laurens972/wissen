import Layout, { useSEO } from '../components/Layout'
import WissnLogo from '../components/WissnLogo'
import Reveal from '../components/Reveal'
import {
  Upload, Sparkles, Compass, LineChart,
  ArrowRight, CheckCircle, Check,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Materialien hochladen',
    description: 'Die Lehrkraft lädt vorhandenes Unterrichtsmaterial hoch. Die KI analysiert und strukturiert es automatisch.',
    details: [
      'PDF, DOCX und PPTX werden direkt verarbeitet',
      'KI erkennt Inhalte, Struktur und zentrale Themen',
      'Fachliche Verantwortung bleibt bei der Lehrkraft',
    ],
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'KI erstellt Lernwerkzeuge',
    description: 'Aus dem hochgeladenen Material erstellt die KI passende Lernwerkzeuge, abgestimmt auf Inhalt und Niveau der Klasse.',
    details: [
      'Lernpläne, Karteikarten, Quiz und Lückentexte',
      'Grafiken zur Visualisierung von Zusammenhängen',
      'Alles basiert auf dem Material der Lehrkraft, nicht auf generischem Wissen',
    ],
  },
  {
    number: '03',
    icon: Compass,
    title: 'Selbstständig arbeiten',
    description: 'Schüler arbeiten in ihrem eigenen Tempo mit den erstellten Lernwerkzeugen. Der Chat-Tutor hilft sokratisch, mit Zitaten aus dem Unterrichtsmaterial statt fertigen Lösungen.',
    details: [
      'Eigenes Tempo statt starrem Klassentakt',
      'Chat-Tutor mit Quellenbezug, Spracheingabe und Mathe-Eingabe',
      'Fortschritt jederzeit im eigenen Dashboard sichtbar',
    ],
  },
  {
    number: '04',
    icon: LineChart,
    title: 'Begleiten statt dozieren',
    description: 'Die Lernanalyse zeigt der Lehrkraft, wer bei welchem Thema wo steht. So wird gezielte Unterstützung möglich statt Frontalunterricht für alle.',
    details: [
      'Verständnis pro Fach, Thema und Schüler auf einen Blick',
      'Lehrkraft unterstützt gezielt dort, wo es hakt',
      'Mehr Zeit für Begleitung statt für Wiederholung vor der Klasse',
    ],
  },
]

export default function HowItWorksPage() {
  useSEO({
    title: "So funktioniert's",
    description: 'In vier Schritten zu eigenständigem Lernen: Materialien hochladen, KI erstellt Lernwerkzeuge, selbstständig arbeiten, begleiten statt dozieren. So unterstützt Wissn Lehrkräfte und Schüler beim Übergang zu freien Lernformen.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
              Einfach erklärt
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              In vier Schritten zu <br className="hidden sm:block" />
              <span className="marker">eigenständigem Lernen</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Vom Frontalunterricht zu freien Lernformen: Wissn unterstützt Lehrkräfte und Schüler mit KI-gestützten Werkzeugen, Schritt für Schritt.
            </p>
          </Reveal>
          {/* Schlagwort-Zusammenfassung der Seite */}
          <Reveal
            direction="up"
            delay={250}
            as="ul"
            className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-8"
          >
            {[
              'Material hochladen',
              'KI erstellt Lernwerkzeuge',
              'Im eigenen Tempo arbeiten',
              'Begleiten statt dozieren',
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
        </div>
      </section>

      {/* Steps als Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map(({ number, icon: Icon, title, description, details }, i) => (
            <Reveal key={number} direction="up" delay={(i % 3) * 100}>
              <div
                id={`step-${number}`}
                className={`relative flex gap-6 sm:gap-8 scroll-mt-28 ${i < steps.length - 1 ? 'pb-24 sm:pb-32' : ''}`}
              >
                {/* Verbindungslinie */}
                {i < steps.length - 1 && (
                  <span
                    className="absolute left-6 top-14 bottom-0 w-px bg-slate-200"
                    aria-hidden="true"
                  />
                )}
                {/* Nummer */}
                <div className="shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-wissn-green-50 border border-wissn-green-100 flex items-center justify-center">
                    <span className="text-wissn-green font-bold">{number}</span>
                  </div>
                </div>
                {/* Inhalt */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 text-wissn-green mb-2">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-widest font-semibold">
                      Schritt {number}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">{title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5 max-w-xl">{description}</p>
                  <ul className="space-y-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4.5 h-4.5 text-wissn-green shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-slate-600">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-wissn-green-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal direction="up">
            <WissnLogo size={64} className="justify-center mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Lassen Sie uns besprechen, wie Wissn den Übergang zu freien Lernformen an Ihrer Schule begleiten kann.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-wissn-green-btn text-white font-semibold text-lg no-underline hover:bg-wissn-green-dark active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
            >
              Gespräch vereinbaren
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
