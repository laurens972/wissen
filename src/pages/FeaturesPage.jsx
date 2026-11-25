import Layout, { useSEO } from '../components/Layout'
import Reveal from '../components/Reveal'
import IpadFrame from '../components/IpadFrame'
import {
  MessageSquare, BookOpen, BrainCircuit, FileText, ListChecks, BarChart3,
  ArrowRight, Check, BellRing, Volume2,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    slug: 'chat-tutor',
    eyebrow: 'Chat-Tutor',
    title: 'Ein Tutor, der Fragen stellt statt Lösungen zu verraten',
    image: '/screenshots/schueler/chat-tutor.webp',
    alt: 'Der Chat-Tutor im sokratischen Modus erklärt die Kernkonzepte eines Themas mit Quellenverweis aufs Unterrichtsmaterial',
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
    title: 'Karteikarten, Quiz und Probeklausur automatisch aus deinen Materialien',
    image: '/screenshots/schueler/karteikarten.webp',
    alt: 'Eine KI-Karteikarte mit Quellenhinweis aufs Dokument und dem Hinweis, wie viele Karten die KI ergänzt hat',
    description: 'Aus den Materialien deines Fachs erstellt die KI passende Übungen. So wiederholst du aktiv, statt nur zu lesen, und siehst sofort, was schon sitzt und was du noch üben solltest.',
    details: [
      'Karteikarten entstehen automatisch aus den Inhalten deines Fachs. Ergänzt die KI etwas, steht das offen dabei',
      'Quiz- und Lückentext-Übungen zum aktiven Wiederholen',
      'Probeklausur über die Schwerpunkte deines Lernplans, mit Rückmeldung zu jeder Antwort. Die Aufgaben lassen sich vorlesen',
    ],
  },
  {
    icon: BrainCircuit,
    slug: 'mindmaps',
    eyebrow: 'Mindmaps',
    title: 'Zusammenhänge sehen mit interaktiven Mindmaps',
    image: '/screenshots/schueler/mindmap.webp',
    alt: 'Eine automatisch erstellte, interaktive Mindmap gibt einen Überblick über ein Thema',
    description: 'Die KI fasst deine Inhalte als interaktive Mindmap zusammen. So verschaffst du dir schnell einen Überblick über ein ganzes Thema und erkennst, wie die einzelnen Punkte zusammenhängen.',
    details: [
      'KI erstellt interaktive Mindmaps aus deinen Inhalten',
      'Verschaffe dir schnell einen Überblick über ein ganzes Thema',
      'Klick dich durch Zusammenhänge, statt lange Texte zu wälzen',
    ],
  },
  {
    icon: FileText,
    slug: 'dokumenten-analyse',
    eyebrow: 'Dokumenten-Analyse',
    title: 'Dokumente hochladen, die KI strukturiert die Inhalte',
    image: '/screenshots/lehrer/materialien.webp',
    alt: 'Hochgeladene Materialien werden nach Klasse und Fach verwaltet, mit Status und Sichtbarkeit',
    description: 'Lade PDF-, Word- oder PowerPoint-Dateien hoch oder fotografiere ein Arbeitsblatt. Die KI analysiert das Material, strukturiert die Inhalte und macht sie durchsuchbar, die Grundlage für Karteikarten, Quiz und alle weiteren Lernwerkzeuge.',
    details: [
      'Das meiste Material stellt deine Lehrkraft bereit, eigene Unterlagen lädst du zusätzlich hoch',
      'Unterstützt PDF-, Word- und PowerPoint-Dateien sowie Fotos',
      'Die KI strukturiert die Inhalte und macht sie durchsuchbar',
      'Aus den analysierten Dokumenten entstehen direkt Übungen und Lernmaterial',
    ],
  },
  {
    icon: ListChecks,
    slug: 'lernplaene',
    eyebrow: 'Lernpläne',
    title: 'Personalisierte Lernpläne mit abhakbarem Fortschritt',
    image: '/screenshots/schueler/lernplan.webp',
    alt: 'Die Lernplan-Übersicht zeigt, was heute dran ist, mit Kalender und Fortschritt',
    description: 'Die KI erstellt einen Lernplan, der zu deinem Ziel und deinem Tempo passt. Du hakst erledigte Schritte ab und behältst so jederzeit den Überblick, wo du stehst und was als Nächstes ansteht.',
    details: [
      'KI-generierter Lernplan, abgestimmt auf dein Ziel und dein Tempo',
      'Erledigte Schritte abhaken und den Fortschritt im Blick behalten',
      'Kündigt die Lehrkraft eine Arbeit mit Schwerpunkten an, erstellst du dir daraus direkt einen Lernplan',
    ],
  },
  {
    // Inklusion. Ausführliche Liste: src/components/Lernhilfen.jsx (Startseite, Für Schulen).
    icon: Volume2,
    slug: 'lernhilfen',
    eyebrow: 'Lernhilfen',
    title: 'Vorlesen, Sprechen und die eigene Sprache',
    description: 'Nicht jeder liest und schreibt gleich schnell. Deshalb lässt sich in Wissn vieles anhören und einsprechen. Die Lernhilfen stehen allen offen, jede und jeder schaltet sie selbst ein.',
    details: [
      'Antworten, Material und Aufgaben vorlesen lassen, Tempo und Stimme stellst du selbst ein',
      'Fragen an den Tutor als Sprachnachricht stellen statt zu tippen',
      'Der Tutor antwortet in der Sprache, die du im Profil einstellst',
    ],
  },
  {
    icon: BellRing,
    slug: 'hilfe-ruf',
    eyebrow: 'Hilfe-Ruf',
    title: 'Per Knopfdruck die Lehrkraft rufen',
    image: '/screenshots/schueler/hilfe.webp',
    alt: 'Auswahl „Wie möchtest du Hilfe bekommen?“ mit Lehrkraft rufen oder erst mit dem Lern-Buddy reden',
    description: 'Kommst du nicht weiter, holst du dir Hilfe: zuerst beim KI-Tutor oder direkt bei deiner Lehrkraft. Sie sieht deinen Ruf und kommt zu dir, ohne dass du dich vor der Klasse melden musst.',
    details: [
      'Ein Knopfdruck reicht, um die Lehrkraft zu rufen',
      'Oder erst mit dem Lern-Buddy reden, dem KI-Tutor',
      'Die Lehrkraft sieht alle offenen Rufe ihrer Klasse auf einen Blick',
    ],
  },
  {
    icon: BarChart3,
    slug: 'analytics',
    eyebrow: 'Lernanalyse',
    title: 'Lernanalyse für Lehrkräfte, bis auf die Verständnis-Ebene',
    image: '/screenshots/lehrer/analyse-klasse.webp',
    alt: 'Die Lernanalyse zeigt pro Schwerpunkt, wie weit die Klasse beim Verständnis ist',
    description: 'Lehrkräfte behalten den Überblick, ohne Zettelwirtschaft. Im Drill-down geht es vom Fach über das Thema bis zum Verständnis einzelner Schülerinnen und Schüler, die Datengrundlage für Lehrkräfte als Lernbegleiter.',
    details: [
      'Drill-down von Fach über Thema bis zum Verständnis einzelner Schülerinnen und Schüler',
      'Erkenne früh, wo eine Gruppe hakt, und setze deine Zeit gezielt ein',
      'Fundierte Gesprächsgrundlage, statt sich auf ein Bauchgefühl zu verlassen',
      'Die Gespräche mit dem KI-Tutor liest die Lehrkraft nicht',
    ],
  },
]

export default function FeaturesPage() {
  useSEO({
    title: 'Features',
    description: 'Die Funktionen von Wissn: Chat-Tutor mit sokratischem Modus und Quellen-Zitaten, KI-Karteikarten, Quiz und Probeklausur, interaktive Mindmaps, personalisierte Lernpläne, Vorlesen und Sprachnachrichten, Hilfe-Ruf und Lernanalyse für Lehrkräfte.',
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
              'Interaktive Mindmaps',
              'KI-Lernpläne mit Fortschritt',
              'Vorlesen und Sprachnachrichten',
              'Lernanalyse und Hilfe-Ruf für Lehrkräfte',
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
                    <IpadFrame src={image} alt={alt} loading="lazy" />
                  ) : (
                    <IpadFrame>
                      <div className="h-full w-full bg-wissn-green-50 flex items-center justify-center">
                        <Icon className="w-20 h-20 text-wissn-green" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                    </IpadFrame>
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
              Pilot anfragen
              <ArrowRight className="w-5 h-5" />
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
