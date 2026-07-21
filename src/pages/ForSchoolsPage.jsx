import Layout, { useSEO } from '../components/Layout'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import {
  CheckCircle, ArrowRight, Shield, Server, GraduationCap, Users,
  ClipboardList, LineChart, MessageCircle, MessagesSquare,
  Layers, Network, ChevronDown, Mail, FileText, Map, BookOpen,
  School, KeyRound, ClipboardCheck, CalendarDays, Waypoints, Compass, Sparkles,
} from 'lucide-react'

// Ehrliche Vertrauens-Leiste statt Fake-Stats-Band.
const trustItems = [
  { icon: Shield, label: 'DSGVO-konform' },
  { icon: Server, label: 'KI über EU-Server' },
  { icon: KeyRound, label: 'VIDIS-SSO für Schulen' },
  { icon: GraduationCap, label: 'Von Klasse 5 bis zum Abitur' },
]

// Redaktionelle Argument-Zeilen (Text links/rechts, echter Screenshot daneben).
const argumentRows = [
  {
    eyebrow: 'Sokratischer KI-Tutor',
    title: 'Ein Lernbegleiter, der fragt statt vorsagt',
    body: 'Der KI-Tutor führt Schülerinnen und Schüler im sokratischen Dialog zur Lösung, statt sie einfach zu liefern. Er zitiert dabei aus dem hinterlegten Unterrichtsmaterial. Die Antworten bleiben an Ihren Stoff gebunden, nicht an beliebiges Internetwissen.',
    image: '/screenshots/schueler/sokratischer-dialog.png',
    alt: 'Sokratischer Dialog mit dem KI-Tutor von Wissn mit Quellen aus dem Unterrichtsmaterial',
  },
  {
    eyebrow: 'Weniger Aufwand',
    title: 'Aus einem Dokument werden Lernmaterialien',
    body: 'Aus einem PDF, Word- oder PowerPoint-Dokument erstellt Wissn Karteikarten, Quiz, Lückentexte und Mindmaps, und einen Lernplan mit Fortschritt. Fachlehrkräfte gewinnen Zeit für fachliche Hilfe und individuelles Feedback.',
    image: '/screenshots/schueler/karteikarten.png',
    alt: 'Automatisch erzeugte KI-Karteikarten in Wissn',
  },
  {
    eyebrow: 'Für Lehrkräfte',
    title: 'Lernanalyse zeigt, wo Schüler wirklich hängen',
    body: 'Wissn zeigt pro Schüler den Weg vom Fach über das Thema bis zum Verständnis einzelner Inhalte. Lehrkräfte sehen auf einen Blick, wer wo Unterstützung braucht, und gehen mit belastbaren Daten statt Vermutungen ins Gespräch.',
    image: '/screenshots/lehrer/analyse.png',
    alt: 'Lernanalyse in Wissn mit Verständnis pro Schüler nach Fach und Thema',
  },
  {
    eyebrow: 'Resilient gegen Lehrermangel',
    title: 'Lehrkraftzeit dorthin, wo sie wirklich zählt',
    body: 'Freie Lernformen und eine klare Lernanalyse machen Ihre Schule widerstandsfähiger: Lehrkraftzeit fließt gezielt zu den Schülern, die gerade hängen. Fällt eine Stunde aus, arbeiten die Lernenden mit Tutor, Materialien und Lernplan selbstständig weiter.',
    image: '/screenshots/lehrer/klassen.png',
    alt: 'Klassenverwaltung in Wissn mit Überblick über die Lerngruppen',
  },
]

// Kompakte Feature-Liste, zwei Spalten, einfarbige Icons.
const included = [
  { icon: MessageCircle, label: 'Sokratischer KI-Tutor mit Quellen-Zitaten' },
  { icon: MessagesSquare, label: 'Dialoge statt Fertiglösungen' },
  { icon: Layers, label: 'KI-Karteikarten' },
  { icon: ClipboardList, label: 'Quiz und Lückentexte' },
  { icon: Network, label: 'Mindmaps aus Dokumenten' },
  { icon: FileText, label: 'Dokumenten-Analyse (PDF, DOCX, PPTX)' },
  { icon: Map, label: 'KI-Lernpläne mit Fortschritt' },
  { icon: LineChart, label: 'Lernanalyse für Lehrkräfte' },
  { icon: Users, label: 'Klassenverwaltung mit Join-Code und QR' },
  { icon: BookOpen, label: 'Materialien- und Fächerverwaltung' },
  { icon: School, label: 'Schulverwaltung mit Warteraum-Freigabe' },
  { icon: ClipboardCheck, label: 'Tests ankündigen mit KI-Voranalyse' },
]

// Roadmap: das Lernbüro-Modul, ehrlich als in Entwicklung markiert.
const roadmap = [
  {
    icon: CalendarDays,
    title: 'Logbuch mit Wochenplanung',
    body: 'Schülerinnen und Schüler planen ihre Woche, halten fest, woran sie arbeiten, und reflektieren: die Grundlage für das wöchentliche Coaching-Gespräch.',
  },
  {
    icon: Waypoints,
    title: 'Lernbausteine mit Etappen',
    body: 'Stoff in klar aufgebauten Bausteinen mit einzelnen Etappen, an denen sich Fortschritt und offene Schritte ablesen lassen.',
  },
  {
    icon: MessagesSquare,
    title: 'Coaching-Dokumentation',
    body: 'Lerncoaches dokumentieren Gespräche und Vereinbarungen strukturiert, damit jede Begleitung an die letzte anknüpft.',
  },
  {
    icon: Compass,
    title: 'Freiheitsgrade 1 bis 3',
    body: 'Ein Modell, das abgestuft mehr Selbststeuerung ermöglicht, so viel Freiheit, wie die einzelne Lernende schon tragen kann.',
  },
]

// Ablauf einer Einführung als echte Sequenz.
const steps = [
  { title: 'Erstgespräch', body: 'Wir klären gemeinsam, wo Ihre Schule steht, welches Fach oder welche Stufe sich für den Einstieg eignet, und beantworten alle Fragen zum Datenschutz. Unverbindlich und ohne Vertrag.' },
  { title: 'Pilotphase', body: 'Ein Fach oder eine Klasse startet mit KI-Tutor, Lernmaterialien und Lernanalyse. Kollegium und Schulleitung erleben das Konzept im echten Schulalltag, bevor mehr folgt.' },
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
    a: 'Wissn ist DSGVO-konform, unsere Server stehen in der EU und KI-Anfragen laufen über einen EU-Proxy. Die Anmeldung ist über VIDIS-SSO möglich, für Minderjährige holen wir die Eltern-Einwilligung nach Art. 8 DSGVO ein. Schülerdaten geben wir nicht an Dritte weiter. Für die Prüfung durch Ihren Datenschutzbeauftragten stellen wir alle Unterlagen bereit.',
  },
  {
    q: 'Können Lehrkräfte mit Wissn Tests erstellen?',
    a: 'Lehrkräfte können Tests ankündigen, Schwerpunkte und das zugrundeliegende Material festlegen: die KI bereitet dazu passende Übungen und eine Voranalyse vor. Die Durchführung, Benotung und Auswertung von Prüfungen findet nicht in der App statt.',
  },
  {
    q: 'Passt Wissn zu unserem Lernbüro-Konzept?',
    a: 'Heute liefert Wissn die KI-Lernwerkzeuge und die Lernanalyse, die freie Lernformen im Alltag tragen. Das eigene Lernbüro-Modul (Logbuch, Lernbausteine mit Etappen und Freiheitsgrade) entwickeln wir gerade gemeinsam mit unseren Pilotschulen. Läuft an Ihrer Schule schon ein Lernbüro-Konzept, richten wir Wissn im Erstgespräch daran aus.',
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
    description: 'Wissn begleitet Schulen beim Übergang vom Frontalunterricht zu freien Lernformen: sokratischer KI-Tutor, KI-Lernmaterialien und eine Lernanalyse für Lehrkräfte. DSGVO-konform, KI über EU-Server, VIDIS-SSO.',
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
                Wissn begleitet Ihre Schule Schritt für Schritt beim Übergang zu freien Lernformen: mit einem sokratischen KI-Tutor, KI-Lernmaterialien und einer Lernanalyse, die Lehrkräfte entlasten, und einem Lernbüro-Modul, das gemeinsam mit unseren Pilotschulen entsteht.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold no-underline hover:bg-wissn-green-dark active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
                >
                  Gespräch vereinbaren
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
              <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl bg-white">
                <Lightbox
                  src="/screenshots/lehrer/dashboard.png"
                  alt="Lehrer-Dashboard von Wissn"
                  imgClassName="w-full h-auto block"
                  loading="eager"
                />
              </div>
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
                    <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-lg bg-white">
                      <Lightbox
                        src={row.image}
                        alt={row.alt}
                        imgClassName="w-full h-auto block"
                        loading="lazy"
                      />
                    </div>
                  </Reveal>
                </div>
              )
            })}
          </div>
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

      {/* Roadmap: das Lernbüro-Modul */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="max-w-2xl mb-12 lg:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-wissn-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-wissn-green mb-4">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              In Entwicklung
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-5">
              Roadmap: das Lernbüro-Modul
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Über die heutigen Werkzeuge hinaus bauen wir ein eigenes Lernbüro-Modul. Es entsteht nicht am Reißbrett, sondern gemeinsam mit unseren Pilotschulen im echten Schulalltag. Wer jetzt einsteigt, gestaltet mit, wie diese Funktionen aussehen.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {roadmap.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                direction="up"
                delay={(i % 2) * 80}
                className="rounded-2xl border border-dashed border-slate-300 bg-white p-6"
              >
                <span className="inline-flex w-11 h-11 rounded-xl bg-wissn-green-50 items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-wissn-green" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{body}</p>
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
              In vier Schritten zum Lernbüro an Ihrer Schule
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

      {/* Datenschutz */}
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
              Lernfortschritte und Analysedaten sind sensibel. Wissn speichert alles auf Servern in der EU, führt KI-Anfragen über einen EU-Proxy und gibt nichts an Dritte weiter. Für die Prüfung durch Ihren Datenschutzbeauftragten legen wir alle Unterlagen offen.
            </p>
            <ul className="space-y-3">
              {[
                'Server ausschließlich in der EU',
                'KI-Anfragen über EU-Proxy',
                'Anmeldung über VIDIS-SSO Ihrer Schule',
                'Eltern-Einwilligung nach Art. 8 DSGVO für Minderjährige',
                'Jugendschutz mit Content-Reporting',
                'Keine Weitergabe von Schülerdaten',
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
              Schreiben Sie uns kurz, wo Ihre Schule beim Übergang zum Lernbüro steht. Wir melden uns mit einem passenden Vorschlag für die Pilotphase und beantworten alle offenen Fragen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold no-underline hover:bg-wissn-green-dark active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
              >
                Gespräch vereinbaren
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
