import Layout, { useSEO } from '../components/Layout'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import {
  MessageSquare, BookOpen, BrainCircuit, FileText, ListChecks, BarChart3,
  ArrowRight, Check,
  CalendarDays, Milestone, ClipboardList, SlidersHorizontal,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    slug: 'chat-tutor',
    eyebrow: 'Chat-Tutor',
    title: 'Ein Tutor, der Fragen stellt statt Lösungen zu verraten',
    image: '/screenshots/schueler/chat-tutor.png',
    alt: 'Der Chat-Tutor beantwortet eine Schülerfrage im Wissn-Lernbereich',
    description: 'Der Chat-Tutor arbeitet auf Wunsch im sokratischen Modus: Statt die Lösung vorzusagen, stellt er gezielte Rückfragen und begleitet dich, bis du selbst darauf kommst. Und wenn deine Lehrkraft gerade eine andere Gruppe betreut, ist er sofort für dich da.',
    details: [
      'Sokratischer Modus: gezielte Rückfragen führen dich zur eigenen Lösung, statt sie vorzusagen',
      'Antworten mit Quellen-Zitaten aus deinem Unterrichtsmaterial, verlässlich statt frei erfunden',
      'Sprachnachrichten und Vorlesefunktion sowie Eingabe von Handschrift und Mathe-Formeln',
    ],
  },
  {
    icon: BookOpen,
    slug: 'karteikarten-quiz',
    eyebrow: 'Üben',
    title: 'Karteikarten, Quiz und Lückentexte automatisch aus deinen Materialien',
    image: '/screenshots/schueler/karteikarten.png',
    alt: 'Automatisch erstellte Karteikarten und Quizfragen zum Üben',
    description: 'Aus den Materialien deines Fachs erstellt die KI passende Übungen. So wiederholst du aktiv, statt nur zu lesen, und siehst sofort, was schon sitzt und was du noch üben solltest.',
    details: [
      'Karteikarten entstehen automatisch aus den Inhalten deines Fachs',
      'Quiz- und Lückentext-Übungen zum aktiven Wiederholen',
      'Übe in deinem Tempo und behalte deinen Lernstand im Blick',
    ],
  },
  {
    icon: BrainCircuit,
    slug: 'grafiken',
    eyebrow: 'Grafiken',
    title: 'Zusammenhänge sehen mit interaktiven Grafiken',
    image: '/screenshots/schueler/grafik.png',
    alt: 'Eine automatisch erstellte, interaktive Grafik gibt einen Überblick über ein Thema',
    description: 'Die KI verwandelt deine Inhalte in interaktive Grafiken. So verschaffst du dir schnell einen Überblick über ein ganzes Thema und erkennst, wie die einzelnen Punkte zusammenhängen.',
    details: [
      'KI erstellt interaktive Grafiken aus deinen Inhalten',
      'Verschaffe dir schnell einen Überblick über ein ganzes Thema',
      'Klick dich durch Zusammenhänge, statt lange Texte zu wälzen',
    ],
  },
  {
    icon: FileText,
    slug: 'dokumenten-analyse',
    eyebrow: 'Dokumenten-Analyse',
    title: 'Dokumente hochladen, die KI strukturiert die Inhalte',
    image: '/screenshots/lehrer/materialien.png',
    alt: 'Hochgeladene Materialien werden nach Klassen und Fächern verwaltet',
    description: 'Lade PDF-, Word- oder PowerPoint-Dateien hoch. Die KI analysiert sie, strukturiert die Inhalte und macht sie durchsuchbar, die Grundlage für Karteikarten, Quiz und alle weiteren Lernwerkzeuge.',
    details: [
      'Unterstützt PDF-, Word- und PowerPoint-Dateien',
      'Die KI strukturiert die Inhalte und macht sie durchsuchbar',
      'Aus den analysierten Dokumenten entstehen direkt Übungen und Lernmaterial',
    ],
  },
  {
    icon: ListChecks,
    slug: 'lernplaene',
    eyebrow: 'Lernpläne',
    title: 'Personalisierte Lernpläne mit abhakbarem Fortschritt',
    image: '/screenshots/schueler/lernplan.png',
    alt: 'Ein personalisierter Lernplan zeigt die nächsten Schritte mit abhakbarem Fortschritt',
    description: 'Die KI erstellt einen Lernplan, der zu deinem Ziel und deinem Tempo passt. Du hakst erledigte Schritte ab und behältst so jederzeit den Überblick, wo du stehst und was als Nächstes ansteht.',
    details: [
      'KI-generierter Lernplan, abgestimmt auf dein Ziel und dein Tempo',
      'Erledigte Schritte abhaken und den Fortschritt im Blick behalten',
      'Kündigt die Lehrkraft eine Arbeit mit Schwerpunkten an, erstellst du dir daraus direkt einen Lernplan',
    ],
  },
  {
    icon: BarChart3,
    slug: 'analytics',
    eyebrow: 'Lernanalyse',
    title: 'Lernanalyse für Lehrkräfte, bis auf die Verständnis-Ebene',
    image: '/screenshots/lehrer/analyse.png',
    alt: 'Die Lernanalyse zeigt den Lernstand im Drill-down von Fach über Thema bis zum einzelnen Schüler',
    description: 'Lehrkräfte behalten den Überblick, ohne Zettelwirtschaft. Im Drill-down geht es vom Fach über das Thema bis zum Verständnis einzelner Schülerinnen und Schüler, die Datengrundlage für Lehrkräfte als Lernbegleiter.',
    details: [
      'Drill-down von Fach über Thema bis zum Verständnis einzelner Schülerinnen und Schüler',
      'Erkenne früh, wo eine Gruppe hakt, und setze deine Zeit gezielt ein',
      'Fundierte Gesprächsgrundlage, statt sich auf ein Bauchgefühl zu verlassen',
    ],
  },
]

const roadmap = [
  {
    icon: CalendarDays,
    title: 'Logbuch mit Wochenplanung',
    text: 'Ein digitales Logbuch, in dem Schülerinnen und Schüler ihre Woche planen und ihren Lernprozess festhalten.',
  },
  {
    icon: Milestone,
    title: 'Lernbausteine mit Etappen',
    text: 'Fachinhalte als selbstständig bearbeitbare Bausteine, unterteilt in Etappen mit Materialien und Zielen.',
  },
  {
    icon: ClipboardList,
    title: 'Coaching-Dokumentation',
    text: 'Werkzeuge, um wöchentliche Reflexionsgespräche vorzubereiten, zu dokumentieren und Vereinbarungen festzuhalten.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Freiheitsgrade',
    text: 'Abgestufte Entscheidungsspielräume, die sich an der wachsenden Selbstständigkeit der Lernenden orientieren.',
  },
]

export default function FeaturesPage() {
  useSEO({
    title: 'Features',
    description: 'Die Funktionen von Wissn: Chat-Tutor mit sokratischem Modus und Quellen-Zitaten, KI-Karteikarten, Quiz und Lückentexte, interaktive Grafiken, Dokumenten-Analyse, personalisierte Lernpläne und Lernanalyse für Lehrkräfte.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-wissn-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up" as="p" className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
            Alle Funktionen im Überblick
          </Reveal>
          <Reveal direction="up" delay={100} as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            Werkzeuge, die <span className="marker">selbstständiges Lernen</span> möglich machen
          </Reveal>
          <Reveal direction="up" delay={200} as="p" className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Wissn gibt Schülerinnen und Schülern KI-gestützte Werkzeuge an die Hand, um in ihrem Tempo selbstständig zu arbeiten, und Lehrkräften als Lernbegleitern den Überblick, den freie Lernformen wie das Lernbüro brauchen.
          </Reveal>

          {/* Schlagwort-Zusammenfassung der Seite */}
          <Reveal
            direction="up"
            delay={250}
            as="ul"
            className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-8"
          >
            {[
              'Sokratischer Chat-Tutor mit Quellen',
              'Karteikarten, Quiz und Lückentexte',
              'Interaktive Grafiken',
              'KI-Lernpläne mit Fortschritt',
              'Lernanalyse für Lehrkräfte',
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

      {/* Feature Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {features.map(({ icon: Icon, slug, eyebrow, title, image, alt, description, details }, i) => (
              <div
                key={title}
                id={slug}
                className={`scroll-mt-28 flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Media */}
                <Reveal direction={i % 2 === 0 ? 'left' : 'right'} className="order-2 lg:order-none flex-1 w-full">
                  {image ? (
                    <Lightbox
                      src={image}
                      alt={alt}
                      loading="lazy"
                      imgClassName="w-full rounded-2xl border border-slate-200 shadow-sm"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] rounded-2xl bg-wissn-green-50 border border-wissn-green-100 flex items-center justify-center">
                      <Icon className="w-20 h-20 text-wissn-green" strokeWidth={1.5} />
                    </div>
                  )}
                </Reveal>

                {/* Text */}
                <Reveal direction={i % 2 === 0 ? 'right' : 'left'} delay={150} className="order-1 lg:order-none flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-wissn-green-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-wissn-green" />
                    </span>
                    <span className="text-xs uppercase tracking-widest text-wissn-green font-semibold">{eyebrow}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">{title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">{description}</p>
                  <ul className="space-y-3">
                    {details.map((d, di) => (
                      <Reveal key={d} as="li" direction="up" delay={(di % 3) * 100} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-wissn-green shrink-0 mt-0.5" />
                        <span className="text-slate-600 leading-relaxed">{d}</span>
                      </Reveal>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap: Lernbüro-Modul in Entwicklung */}
      <section className="py-16 lg:py-24 bg-wissn-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-3">In Entwicklung</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Das Lernbüro-Modul entsteht
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Gemeinsam mit unseren Pilotschulen bauen wir die Werkzeuge, die freies Lernen im Lernbüro Schritt für Schritt vollständig abbilden. Diese Bausteine sind noch nicht Teil der App, sondern zeigen, woran wir arbeiten.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roadmap.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} direction="up" delay={(i % 2) * 100}>
                <div className="h-full rounded-2xl bg-white border border-wissn-green-100 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-wissn-green-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-wissn-green" />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal direction="up" as="h2" className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Bereit für den nächsten Schritt?
          </Reveal>
          <Reveal direction="up" delay={100} as="p" className="text-lg text-slate-300 leading-relaxed mb-8">
            Wir zeigen Ihnen in einem unverbindlichen Gespräch, wie Wissn Ihre Schule beim selbstständigen Lernen unterstützt.
          </Reveal>
          <Reveal direction="up" delay={200}>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-wissn-green-btn text-white text-base font-semibold no-underline hover:bg-wissn-green-dark active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Gespräch vereinbaren
              <ArrowRight className="w-5 h-5" />
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
