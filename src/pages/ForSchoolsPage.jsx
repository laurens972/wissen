import Layout, { useSEO } from '../components/Layout'
import Reveal from '../components/Reveal'
import IpadFrame from '../components/IpadFrame'
import Lernhilfen from '../components/Lernhilfen'
import {
  CheckCircle, Check, ArrowRight, Shield, ShieldCheck, Server, GraduationCap, Users,
  ClipboardList, LineChart, MessageCircle, BellRing, Volume2, MonitorSmartphone,
  Layers, Network, ChevronDown, Mail, FileText, Map, BookOpen,
  School, ClipboardCheck, Eye, EyeOff,
} from 'lucide-react'

// Ehrliche Vertrauens-Leiste statt Fake-Stats-Band.
const trustItems = [
  { icon: Shield, label: 'DSGVO-konform' },
  { icon: Server, label: 'KI-Verarbeitung in der EU' },
  { icon: ShieldCheck, label: 'Eltern-Einwilligung nach Art. 8 DSGVO' },
  { icon: GraduationCap, label: 'Von Klasse 5 bis zum Abitur' },
]

// Redaktionelle Argument-Zeilen (Text links/rechts, echter Screenshot daneben).
// Reihenfolge mit Absicht: erst, was die Lehrkraft bekommt, dann die Lernwerkzeuge.
const argumentRows = [
  {
    eyebrow: 'Für Lehrkräfte',
    title: 'Lernanalyse zeigt, wo Schüler wirklich hängen',
    body: 'Wissn zeigt pro Schüler den Weg vom Fach über das Thema bis zum Verständnis einzelner Inhalte. Lehrkräfte sehen auf einen Blick, wer wo Unterstützung braucht, und gehen mit belastbaren Daten statt Vermutungen ins Gespräch.',
    image: '/screenshots/lehrer/analyse-schueler.webp',
    alt: 'Lernanalyse in Wissn mit Lernweg und Verständnis pro Schwerpunkt',
  },
  {
    eyebrow: 'Hilfe-Ruf',
    title: 'Ein Knopfdruck, und die Lehrkraft weiß Bescheid',
    body: 'Kommt ein Kind nicht weiter, ruft es per Knopfdruck die Lehrkraft oder fragt zuerst den KI-Tutor. Die Lehrkraft sieht die offenen Rufe und geht gezielt zu den Kindern, die gerade Hilfe brauchen. So fließt ihre Zeit dorthin, wo sie gebraucht wird.',
    image: '/screenshots/schueler/hilfe.webp',
    alt: 'Hilfe-Auswahl in Wissn: Lernende rufen per Knopfdruck die Lehrkraft oder reden erst mit dem Lern-Buddy, dem KI-Tutor',
  },
  {
    eyebrow: 'Sokratischer KI-Tutor',
    title: 'Ein Lernbegleiter, der fragt statt vorsagt',
    body: 'Der KI-Tutor führt Schülerinnen und Schüler im sokratischen Dialog zur Lösung, statt sie einfach zu liefern. Er zitiert dabei aus dem hinterlegten Unterrichtsmaterial. Die Antworten bleiben an Ihren Stoff gebunden, nicht an beliebiges Internetwissen.',
    image: '/screenshots/schueler/chat-tutor.webp',
    alt: 'Der KI-Tutor von Wissn startet im sokratischen Modus mit einem Überblick, belegt mit Quellenverweis aufs Unterrichtsmaterial',
  },
  {
    eyebrow: 'Weniger Aufwand',
    title: 'Aus einem Dokument werden Lernmaterialien',
    body: 'Aus einem PDF, Word- oder PowerPoint-Dokument erstellt Wissn Karteikarten, Quiz, Lückentexte und Mindmaps, und einen Lernplan mit Fortschritt. Das Material kommt in erster Linie von Ihren Lehrkräften. Schülerinnen und Schüler können zusätzlich eigene Unterlagen hochladen, die nur sie selbst sehen. Fachlehrkräfte gewinnen Zeit für fachliche Hilfe und individuelles Feedback.',
    image: '/screenshots/schueler/mindmap.webp',
    alt: 'Aus einem Unterrichtsdokument erstellte Mindmap in Wissn mit Kapitelverweisen',
  },
]

// Was die Lehrkraft sieht und was nicht. Jede Zeile ist im App-Code belegt
// (Lernanalyse ohne Zugriff auf Chats); nichts ergänzen, was dort nicht stimmt.
const lehrkraftSieht = [
  'Den Lernstand je Thema in Prozent',
  'Den Lernweg je Schwerpunkt',
  'Die Ergebnisse aus dem Quiz',
  'Offene Hilfe-Rufe aus der Klasse',
]
const lehrkraftSiehtNicht = [
  'Die Gespräche mit dem KI-Tutor, weder Text noch Sprachnachrichten',
  'Welches Vorlesetempo und welche Stimme ein Kind eingestellt hat',
  'Noten. Wissn vergibt keine Zeugnisnoten und ersetzt keine Prüfung',
]

// Kompakte Feature-Liste, zwei Spalten, einfarbige Icons.
const included = [
  { icon: LineChart, label: 'Lernanalyse für Lehrkräfte' },
  { icon: BellRing, label: 'Hilfe-Ruf an die Lehrkraft' },
  { icon: MessageCircle, label: 'Sokratischer KI-Tutor mit Quellen-Zitaten' },
  { icon: Map, label: 'KI-Lernpläne mit Fortschritt' },
  { icon: ClipboardList, label: 'Probeklausur, Quiz und Lückentexte' },
  { icon: Layers, label: 'KI-Karteikarten' },
  { icon: Network, label: 'Mindmaps aus Dokumenten' },
  { icon: FileText, label: 'Material als PDF, Word, PowerPoint oder Foto' },
  { icon: Volume2, label: 'Vorlesen, Sprachnachrichten und Sprachwahl' },
  { icon: ClipboardCheck, label: 'Tests ankündigen mit KI-Voranalyse' },
  { icon: Users, label: 'Klassenverwaltung für die ganze Schule' },
  { icon: BookOpen, label: 'Materialien- und Fächerverwaltung' },
  { icon: School, label: 'Schulverwaltung mit Warteraum-Freigabe' },
  { icon: MonitorSmartphone, label: 'Im Browser, auf iPad, iPhone und Android' },
]

// Prüfliste für die Auswahl: Fragen, die eine Schule jedem Anbieter stellen
// kann, mit unseren Antworten. Nur eigene Fakten, kein Anbieter wird genannt.
const prueffragen = [
  { q: 'Sieht die Lehrkraft, wo die Klasse steht?', a: 'Ja. Die Lernanalyse zeigt je Thema und Schwerpunkt den Lernstand der Klasse und einzelner Kinder.' },
  { q: 'Kann ein Kind im Unterricht Hilfe holen?', a: 'Ja. Mit dem Hilfe-Ruf meldet es sich per Knopfdruck bei der Lehrkraft.' },
  { q: 'Brauchen wir dafür eine weitere Lernplattform?', a: 'Nein. Lehrkräfte laden ihr Material direkt in Wissn hoch, als PDF, Word, PowerPoint oder Foto. Schülerinnen und Schüler können eigene Unterlagen ergänzen.' },
  { q: 'Auf welchen Geräten läuft es?', a: 'Im Browser, auf iPad und iPhone und auf Android.' },
  { q: 'Bleibt der Lernstand erhalten, wenn das Gerät wechselt?', a: 'Ja. Lernpläne und Lernstand liegen im Konto und sind auf jedem Gerät da.' },
  { q: 'Gibt es Lernhilfen für Kinder mit Förderbedarf?', a: 'Ja. Vorlesen im eigenen Tempo, Sprachnachrichten und Antworten in der eigenen Sprache stehen allen offen.' },
]

// Ablauf einer Einführung als echte Sequenz.
const steps = [
  { title: 'Erstgespräch', body: 'Wir klären gemeinsam, wo Ihre Schule steht, welches Fach oder welche Stufe sich für den Einstieg eignet, und beantworten alle Fragen zum Datenschutz. Unverbindlich und ohne Vertrag.' },
  { title: 'Pilotphase', body: 'Ein Fach oder eine Klasse startet. Wir richten Klassen und Zugänge mit Ihnen ein, die Lehrkraft lädt ihr erstes Material hoch, und die Klasse arbeitet damit im Unterricht. Kollegium und Schulleitung erleben Wissn im echten Schulalltag, bevor mehr folgt.' },
  { title: 'Ausweitung', body: 'Nach der Pilotphase weiten Sie Wissn auf weitere Fächer, Stufen oder die ganze Schule aus, in dem Tempo, das zu Ihrem Kollegium passt.' },
  { title: 'Begleitung', body: 'Ein fester Ansprechpartner unterstützt Lehrkräfte und Schulleitung dauerhaft, auch nach dem Rollout, bei der Einführung neuer Fächer und bei Fragen aus dem Alltag.' },
]

const faqs = [
  {
    q: 'Was kostet Wissn für unsere Schule?',
    a: 'Wir arbeiten mit planbaren Jahreslizenzen pro Schüler. Keine versteckten Kosten und keine Einrichtungsgebühr. Ein Angebot erstellen wir passend zu Ihrer Schulgröße und dem Umfang, in dem Sie starten möchten.',
  },
  {
    q: 'Wie steht es um den Datenschutz?',
    a: 'Wissn ist DSGVO-konform. Die Daten liegen in Frankfurt. Die KI stammt von Google und läuft über Google Cloud innerhalb der EU. Name, E-Mail-Adresse und Schule eines Kindes gehen nicht an die KI, und Google nutzt die Eingaben nicht zum Training seiner Modelle. Für Minderjährige holen wir die Eltern-Einwilligung nach Art. 8 DSGVO ein. Für die Prüfung durch Ihren Datenschutzbeauftragten stellen wir alle Unterlagen bereit.',
  },
  {
    q: 'Können Lehrkräfte mit Wissn Tests erstellen?',
    a: 'Lehrkräfte können Tests ankündigen, Schwerpunkte und das zugrundeliegende Material festlegen: die KI bereitet dazu passende Übungen und eine Voranalyse vor. Die Durchführung, Benotung und Auswertung von Prüfungen findet nicht in der App statt.',
  },
  {
    q: 'Passt Wissn zu unserem Lernbüro-Konzept?',
    a: 'Ja. Logbuch, Coaching-Gespräche und Freiheitsgrade bleiben bei Ihnen, so wie Ihre Schule sie führt. Wissn liefert die Lernwerkzeuge für die Arbeit am Lernbaustein: Lernplan, KI-Tutor, Übungen und die Lernanalyse für die Lehrkraft. Läuft an Ihrer Schule schon ein Lernbüro-Konzept, richten wir Wissn im Erstgespräch daran aus.',
  },
  {
    q: 'Wie läuft der Übergang vom Frontalunterricht ab?',
    a: 'Sie starten mit einer Pilotphase in einem Fach oder einer Stufe. Kollegium und Schulleitung sammeln erste Erfahrungen, bevor Sie auf weitere Fächer oder die ganze Schule ausweiten, in Ihrem Tempo.',
  },
  {
    q: 'Wer unterstützt uns bei der Einführung?',
    a: 'Sie bekommen einen festen Ansprechpartner. Wir begleiten die Pilotphase, führen das Kollegium in die Plattform und in freie Lernformen ein und bleiben auch bei der Ausweitung erreichbar.',
  },
]

export default function ForSchoolsPage() {
  useSEO({
    title: 'Für Schulen im Wandel zum Lernbüro',
    description: 'Wissn begleitet Schulen beim Übergang vom Frontalunterricht zu freien Lernformen: Lernanalyse und Hilfe-Ruf für Lehrkräfte, sokratischer KI-Tutor, KI-Lernmaterialien und Lernhilfen für Inklusion. DSGVO-konform, KI-Verarbeitung in der EU.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-wissn-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-5">
                Für Schulen im Übergang
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                Vom Frontalunterricht zum{' '}
                <span className="marker">Lernbüro</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                Wissn begleitet Ihre Schule Schritt für Schritt beim Übergang zu freien Lernformen. Ihre Schülerinnen und Schüler arbeiten mit einem sokratischen KI-Tutor und Lernmaterial aus dem eigenen Unterricht. Ihre Lehrkräfte sehen den Lernstand je Thema und werden gerufen, wenn jemand Hilfe braucht.
              </p>
              {/* Schlagwort-Zusammenfassung der Seite */}
              <Reveal
                direction="up"
                delay={250}
                as="ul"
                className="flex flex-wrap justify-start gap-2.5 sm:gap-3 mb-8"
              >
                {[
                  'Lernanalyse und Hilfe-Ruf für Lehrkräfte',
                  'KI-Lernmaterialien aus eigenem Stoff',
                  'Lernhilfen für Inklusion',
                  'DSGVO-konform, Daten in der EU',
                  'Einstieg über Pilotphase',
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold no-underline hover:bg-wissn-green-dark active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
                >
                  Pilot anfragen
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:kontakt@wissn-ai.de"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-700 text-sm font-semibold border border-slate-200 no-underline hover:border-slate-300 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
                >
                  Angebot anfragen
                </a>
              </div>
            </Reveal>
            <Reveal direction="right" delay={100}>
              <IpadFrame
                src="/screenshots/lehrer/dashboard.webp"
                alt="Lehrer-Dashboard von Wissn mit Klassen, Materialien und dem Einstieg in die Lernanalyse"
                loading="eager"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vertrauens-Leiste */}
      <section className="border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustItems.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <Icon className="w-5 h-5 text-wissn-green shrink-0" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Argument-Zeilen */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="max-w-2xl mb-14 lg:mb-20">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
              Was Wissn Ihrer Schule bringt
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Digitale Werkzeuge für den Weg zum Lernbüro
            </h2>
          </Reveal>

          <div className="space-y-16 lg:space-y-28">
            {argumentRows.map((row, i) => {
              const flip = i % 2 === 1
              return (
                <div key={row.title} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <Reveal
                    direction={flip ? 'right' : 'left'}
                    className={flip ? 'lg:order-2' : ''}
                  >
                    <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
                      {row.eyebrow}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                      {row.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                      {row.body}
                    </p>
                  </Reveal>
                  <Reveal
                    direction={flip ? 'left' : 'right'}
                    delay={100}
                    className={flip ? 'lg:order-1' : ''}
                  >
                    <IpadFrame src={row.image} alt={row.alt} loading="lazy" />
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Was die Lehrkraft sieht und was nicht */}
      <section id="lehrkraft" className="scroll-mt-28 py-16 lg:py-24 bg-gray-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
              Überblick mit klaren Grenzen
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-5">
              Was die Lehrkraft sieht und was nicht
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Die Lernanalyse ist für die Förderung gedacht. Sie zeigt, wo ein Kind beim Stoff steht. Was es den Tutor fragt, liest die Lehrkraft nicht.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Eye, title: 'Das sieht die Lehrkraft', items: lehrkraftSieht, mark: Check },
              { icon: EyeOff, title: 'Das sieht sie nicht', items: lehrkraftSiehtNicht, mark: EyeOff },
            ].map(({ icon: Icon, title, items, mark: Mark }, i) => (
              <Reveal key={title} direction="up" delay={i * 80} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex w-11 h-11 rounded-xl bg-wissn-green-50 items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-wissn-green" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <Mark className="w-5 h-5 text-wissn-green shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inklusion */}
      <section id="inklusion" className="scroll-mt-28 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
              Inklusion
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-5">
              Lernhilfen für Kinder, die mehr Unterstützung brauchen
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              In jeder Klasse lernen Kinder unterschiedlich. Manche lesen langsamer, schreiben ungern oder lernen Deutsch als zweite Sprache. Für sie ist ein langer Textblock eine Hürde, bevor das eigentliche Lernen beginnt.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Deshalb bauen wir Lernhilfen gemeinsam mit Schulen ein, die Kinder mit Lese-Rechtschreib-Schwäche oder Lernschwierigkeiten unterrichten. Rückmeldungen aus dem Unterricht fließen direkt in die nächste Fassung.
            </p>
          </Reveal>
          <Lernhilfen />
        </div>
      </section>

      {/* Im Lizenzumfang enthalten */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="mb-12">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
              Im Lizenzumfang enthalten
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Alles in einer Plattform
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {included.map(({ icon: Icon, label }, i) => (
              <Reveal
                key={label}
                direction="up"
                delay={(i % 2) * 80}
                className="flex items-center gap-4"
              >
                <span className="w-10 h-10 rounded-xl bg-wissn-green-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-wissn-green" aria-hidden="true" />
                </span>
                <span className="text-base text-slate-700 font-medium">{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prüfliste für die Auswahl */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="max-w-2xl mb-12 lg:mb-16">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
              Prüfliste
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-5">
              Worauf Schulen bei KI zum Lernen achten sollten
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Sechs Fragen, die Sie jedem Anbieter stellen können. Hier stehen unsere Antworten.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {prueffragen.map(({ q, a }, i) => (
              <Reveal
                key={q}
                direction="up"
                delay={(i % 2) * 80}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-600 leading-relaxed">{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf einer Einführung */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="mb-14">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
              So gelingt der Übergang
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              In vier Schritten zum Start an Ihrer Schule
            </h2>
          </Reveal>

          <ol className="relative border-l border-slate-200 ml-4 space-y-10">
            {steps.map((step, i) => (
              <Reveal key={step.title} as="li" direction="left" delay={i * 80} className="relative pl-8">
                <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-wissn-green">
                  {i + 1}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Datenschutz. Dieselben Zusagen stehen in der FAQ dieser Seite, in
          FAQPage und in ForParentsPage: bei einer Änderung alle vier Stellen
          nachziehen. Beleg für jede Zeile: docs/legal/dsfa.md Abschnitt 1.4
          im App-Repo. */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <span className="inline-flex w-12 h-12 rounded-xl bg-wissn-green-50 items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-wissn-green" aria-hidden="true" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-5">
              Datenschutz, den Sie prüfen können
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              Lernfortschritte und Analysedaten sind sensibel. Wissn speichert sie in Frankfurt. Die KI stammt von Google, einem der führenden KI-Anbieter, und läuft über Google Cloud innerhalb der EU. Für die Prüfung durch Ihren Datenschutzbeauftragten legen wir alle Unterlagen offen.
            </p>
            <ul className="space-y-3">
              {[
                'Daten gespeichert in Frankfurt',
                'KI von Google (Gemini), Verarbeitung innerhalb der EU',
                'Name, E-Mail-Adresse und Schule eines Kindes gehen nicht an die KI',
                'Google nutzt die Eingaben nicht zum Training seiner Modelle',
                'Lehrkräfte lesen keine Gespräche mit dem KI-Tutor',
                'Eltern-Einwilligung nach Art. 8 DSGVO für Minderjährige',
                'Jugendschutz-Filter auf dem Server und eine Meldefunktion',
                'Transparente Verträge zur Auftragsverarbeitung',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-wissn-green shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Gründer-Zitat */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-slate-100">
        <Reveal direction="up" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 leading-snug">
            „Der Wandel vom Frontalunterricht zum Lernbüro gelingt nicht über Nacht. Wir wollen Schulen genau dabei begleiten, mit Werkzeugen, die Lehrkräfte wirklich entlasten, statt zusätzliche Arbeit zu schaffen."
          </blockquote>
          <p className="mt-6 text-sm text-slate-500 font-medium">Das Wissn Gründerteam</p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="mb-12">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
              Häufige Fragen
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Was Schulen uns fragen
            </h2>
          </Reveal>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-left rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2">
                  <span className="text-lg font-semibold text-slate-900">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt-CTA */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="rounded-3xl bg-slate-900 px-6 py-14 sm:px-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
              Begleiten Sie den Wandel an <span className="marker-green">Ihrer Schule</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-9">
              Schreiben Sie uns kurz, wo Ihre Schule steht und mit welchem Fach oder welcher Klasse Sie starten möchten. Wir melden uns mit einem passenden Vorschlag für die Pilotphase und beantworten alle offenen Fragen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold no-underline hover:bg-wissn-green-dark active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
              >
                Pilot anfragen
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:kontakt@wissn-ai.de"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white text-sm font-semibold no-underline hover:bg-white/15 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4" />
                Angebot anfragen
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
