import { useState } from 'react'
import Layout, { useSEO } from '../components/Layout'
import HeroDemo from '../components/HeroDemo'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import {
  ArrowRight, BrainCircuit, MessageSquare, FileText,
  Map, BookOpen, BarChart3, Users,
  GraduationCap, School, ChevronLeft, ChevronRight,
  ShieldCheck, Server, ListChecks,
} from 'lucide-react'

/* Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />

      {/* Subtle radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-wissn-green/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-28 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Links: Value-Prop + CTA. min-w-0: Grid-Kinder dürfen die Spalte
              nicht über den Viewport hinaus aufweiten (Mobile-Zentrierung). */}
          <div className="min-w-0 text-center lg:text-left">
            <img
              src="/wissn-logo-icon.png"
              alt="Wissn Logo"
              className="hero-animate w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto lg:mx-0 mb-6"
              style={{ animationDelay: '0s' }}
            />

            <h1 className="hero-animate text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6" style={{ animationDelay: '0.3s' }}>
              Vom Frontalunterricht zu{' '}
              <span className="marker-green">freiem Lernen</span>.
            </h1>

            <p className="hero-animate text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0" style={{ animationDelay: '0.45s' }}>
              Wissn begleitet Schulen und Unternehmen beim Übergang zu freien
              Lernformen, mit KI-Werkzeugen für selbstständiges Lernen und
              echter Übersicht für Lernbegleiter.
            </p>

            <div className="hero-animate flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" style={{ animationDelay: '0.6s' }}>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-wissn-green-btn text-white font-semibold text-lg hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <School className="w-5 h-5" />
                Gespräch vereinbaren
              </a>
              <a
                href="/so-funktionierts"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                So funktioniert's
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Rechts: Live-Produkt-Demo (Chat → Mindmap) */}
          <div className="hero-animate min-w-0" style={{ animationDelay: '0.5s' }}>
            <HeroDemo />
          </div>
        </div>
      </div>
    </section>
  )
}

/* Vertrauens-Leiste */
function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: 'DSGVO-konform' },
    { icon: Server, label: 'Server in der EU' },
    { icon: GraduationCap, label: 'Ab Klasse 5 einsetzbar' },
    { icon: Users, label: 'Für Schüler, Lehrkräfte und Schulleitung' },
  ]
  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {items.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} as="li" direction="up" delay={i * 80} className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
              <Icon className="w-5 h-5 text-wissn-green shrink-0" />
              {label}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* Partner / Förderer Logo-Wall */
function PartnerLogos() {
  // Logo-Dateien in public/partners/ ablegen (siehe Dateinamen unten).
  // href optional — bei Klick öffnet die jeweilige Seite in neuem Tab.
  const partners = [
    { name: 'Google for Startups', logo: '/partners/google-for-startups.png', href: 'https://startup.google.com/' },
    { name: 'Medienzentren', logo: '/partners/medienzentrum.png', href: null },
    { name: 'Wirtschaftsförderung', logo: '/partners/wirtschaftsfoerderung.png', href: null },
  ]

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {partners.map(({ name, logo, href }) => {
            const inner = (
              <img
                src={logo}
                alt={name}
                title={name}
                className="h-10 sm:h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            )
            return href ? (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} (öffnet in neuem Tab)`}
                className="group block no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 rounded-lg"
              >
                {inner}
              </a>
            ) : (
              <div key={name} className="group">{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* Problem Section */
function ProblemSection() {
  const problems = [
    { icon: Users, title: 'Ein Tempo für alle', text: 'Im Frontalunterricht lernen 30 Schüler im gleichen Takt. Individuelle Lernwege bleiben auf der Strecke.', href: '/fuer-schulen' },
    { icon: School, title: 'Organisation frisst die Idee auf', text: 'Wochenpläne, Logbücher und Materialverwaltung auf Papier: Freie Lernformen scheitern selten am Konzept, sondern an der Organisation.', href: '/so-funktionierts' },
    { icon: GraduationCap, title: 'Resilient gegen Lehrermangel', text: 'Frontalunterricht steht und fällt mit der Lehrkraft vor der Klasse. Freie Lernformen und eine digitale Lernstands-Übersicht machen Schulen resilienter. Lehrkraftzeit fließt gezielt dorthin, wo sie gebraucht wird.', href: '/features' },
  ]

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mb-12">
          <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-3">Warum Wissn</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Warum der Übergang so schwer ist
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Immer mehr Schulen wollen weg vom reinen Frontalunterricht, hin zu
            Lernbüros, Wochenplänen und Projektarbeit. Der Wille ist da. Was fehlt,
            ist die Infrastruktur.
          </p>
        </Reveal>
        <ul className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {problems.map(({ icon: Icon, title, text, href }, i) => (
            <Reveal key={title} as="li" direction="up" delay={i * 100}>
              <a
                href={href}
                aria-label={`${title}. So lösen wir das`}
                className="group flex items-start gap-4 py-6 no-underline cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 rounded-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wissn-green-50">
                  <Icon className="w-5 h-5 text-wissn-green" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <ArrowRight className="w-4 h-4 text-wissn-green opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* Features Preview */
function FeaturesPreview() {
  const features = [
    { icon: MessageSquare, title: 'Chat-Tutor', description: 'Sokratischer KI-Tutor, der mit Quellen-Zitaten aus dem eigenen Unterrichtsmaterial antwortet.', slug: 'chat-tutor' },
    { icon: BookOpen, title: 'Karteikarten & Quiz', description: 'KI-generiert aus den eigenen Materialien, inklusive Lückentexten für den Selbstcheck.', slug: 'karteikarten-quiz' },
    { icon: Map, title: 'Mindmaps & Grafiken', description: 'Visuelle Zusammenfassungen, die komplexe Themen auf einen Blick begreifbar machen.', slug: 'mindmaps' },
    { icon: FileText, title: 'Dokumenten-Analyse', description: 'PDF, Word oder PowerPoint hochladen. Die KI strukturiert die Inhalte automatisch.', slug: 'dokumenten-analyse' },
    { icon: ListChecks, title: 'KI-Lernpläne', description: 'Personalisierte Lernpläne mit abhakbarem Fortschritt: die Grundlage für selbstständiges Arbeiten.', slug: 'lernplaene' },
    { icon: BarChart3, title: 'Lernanalyse', description: 'Lehrkräfte sehen pro Thema und Schüler, wo es hakt: die Grundlage für gezielte Begleitung.', slug: 'analytics' },
  ]

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-3">Funktionen</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            KI-Werkzeuge für selbstständiges Lernen
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Wissn liefert die digitalen Werkzeuge, mit denen Lernende eigenständig
            arbeiten, und Lehrkräfte den Überblick behalten.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
          {features.map(({ icon: Icon, title, description, slug }, i) => (
            <Reveal key={title} direction="up" delay={(i % 2) * 80}>
              <a
                href={`/features#${slug}`}
                aria-label={`Mehr über ${title} erfahren`}
                className="group flex items-start gap-4 py-5 border-b border-slate-200 no-underline cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 rounded-lg"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wissn-green-50">
                  <Icon className="w-5 h-5 text-wissn-green" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <ArrowRight className="w-4 h-4 text-wissn-green opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <p className="text-sm text-slate-500 leading-relaxed mt-0.5">{description}</p>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <a href="/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-wissn-green font-semibold hover:bg-wissn-green-50 transition-colors no-underline">
            Alle Features entdecken
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* How it works Preview */
function HowItWorksPreview() {
  const steps = [
    { num: '01', title: 'Materialien hochladen', text: 'Die Lehrkraft lädt ihre Materialien hoch. Die KI analysiert Inhalte automatisch.' },
    { num: '02', title: 'KI erstellt Lernwerkzeuge', text: 'Aus den Materialien entstehen Lernpläne, Karteikarten, Quiz und Mindmaps.' },
    { num: '03', title: 'Selbstständig arbeiten', text: 'Lernende arbeiten im eigenen Tempo, der Chat-Tutor hilft mit Quellen, der Fortschritt bleibt sichtbar.' },
    { num: '04', title: 'Begleiten statt dozieren', text: 'Die Lernanalyse zeigt, wer Unterstützung braucht. Die Lehrkraft wird zum Lernbegleiter.' },
  ]

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            So gelingt der Übergang
          </h2>
          <p className="text-lg text-slate-500">Von den ersten Materialien bis zum selbstständigen Lernen.</p>
        </Reveal>
        <div className="relative">
          {/* Verbindungslinie */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-slate-200" aria-hidden="true" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 relative">
            {steps.map(({ num, title, text }, i) => (
              <Reveal key={num} as="li" direction="up" delay={i * 100}>
                <a href={`/so-funktionierts#step-${num}`} className="group block text-center no-underline cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 rounded-lg">
                  <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-wissn-green-100 bg-white text-lg font-bold text-wissn-green group-hover:border-wissn-green transition-colors">
                    {num}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
                </a>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="text-center mt-14">
          <a href="/so-funktionierts" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-wissn-green font-semibold hover:bg-wissn-green-50 transition-colors no-underline">
            Mehr erfahren
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* Product Showcase */
function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('schueler')
  const [activeIndex, setActiveIndex] = useState(0)

  const schuelerScreens = [
    { title: 'Schüler-Dashboard', description: 'Lernpläne, Fortschritt und Materialien auf einen Blick.', image: '/screenshots/schueler/dashboard.png' },
    { title: 'Meine Fächer', description: 'Alle Fächer mit Themen und Materialien an einem Ort.', image: '/screenshots/schueler/faecher.png' },
    { title: 'Chat-Tutor', description: 'Fachliche Hilfe sofort, mit Quellen-Zitaten aus dem eigenen Material.', image: '/screenshots/schueler/chat-tutor.png' },
    { title: 'Karteikarten', description: 'Automatisch generierte Lernkarten aus den eigenen Materialien.', image: '/screenshots/schueler/karteikarten.png' },
    { title: 'Grafik', description: 'Visuelle Zusammenfassungen für komplexe Themen.', image: '/screenshots/schueler/mindmap.png' },
    { title: 'Quiz', description: 'Selbstcheck mit Quiz und Lückentexten: Sitzt der Stoff schon?', image: '/screenshots/schueler/quiz.png' },
  ]

  const lehrerScreens = [
    { title: 'Lehrer-Dashboard', description: 'Klassen, Materialien und Lernstände im Überblick.', image: '/screenshots/lehrer/dashboard.png' },
    { title: 'Klassenverwaltung', description: 'Lerngruppen per Join-Code oder QR erstellen und verwalten.', image: '/screenshots/lehrer/klassen.png' },
    { title: 'Materialien', description: 'Themen mit Materialien bestücken und nach Gruppen organisieren.', image: '/screenshots/lehrer/materialien.png' },
    { title: 'Tests', description: 'Tests ankündigen und Schwerpunkte festlegen. Die KI bereitet die Materialien auf.', image: '/screenshots/lehrer/tests.png' },
    { title: 'Test erstellen', description: 'Neue Tests mit Schwerpunkten und Dateien anlegen.', image: '/screenshots/lehrer/test-erstellen.png' },
    { title: 'Schulverwaltung', description: 'Übersicht über die gesamte Schule mit Lerngruppen, Lehrkräften und Lernenden.', image: '/screenshots/lehrer/schulverwaltung.png' },
    { title: 'Lernanalyse', description: 'Pro Thema und Schüler sichtbar, wo es hakt: die Grundlage für gezielte Begleitung.', image: '/screenshots/lehrer/analyse.png' },
  ]

  const screens = activeTab === 'schueler' ? schuelerScreens : lehrerScreens
  const current = screens[activeIndex]

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setActiveIndex(0)
  }

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            So sieht Wissn in Aktion aus
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Erste Pilotschulen arbeiten bereits mit Wissn.
          </p>
        </Reveal>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => handleTabChange('schueler')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 ${
              activeTab === 'schueler'
                ? 'bg-wissn-green-btn text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            <GraduationCap className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            Für Lernende
          </button>
          <button
            onClick={() => handleTabChange('lehrer')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 ${
              activeTab === 'lehrer'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            <School className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            Für Lehrkräfte
          </button>
        </div>

        {/* Main Screenshot */}
        <Reveal direction="up" className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
            <div className="bg-slate-50 p-4 sm:p-6">
              <Lightbox src={current.image} alt={current.title} imgClassName="w-full rounded-lg shadow-sm" />
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{current.title}</h3>
                <p className="text-sm text-slate-500">{current.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <button
                  onClick={() => setActiveIndex((activeIndex - 1 + screens.length) % screens.length)}
                  aria-label="Vorheriger Screenshot"
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                </button>
                <span className="text-sm text-slate-400 min-w-[3rem] text-center">{activeIndex + 1} / {screens.length}</span>
                <button
                  onClick={() => setActiveIndex((activeIndex + 1) % screens.length)}
                  aria-label="Nächster Screenshot"
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
                >
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Nav */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2 justify-center flex-wrap">
            {screens.map((screen, i) => (
              <button
                key={screen.title}
                onClick={() => setActiveIndex(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 ${
                  i === activeIndex
                    ? activeTab === 'schueler'
                      ? 'bg-wissn-green-100 text-wissn-green-dark border border-wissn-green/30'
                      : 'bg-slate-100 text-slate-900 border border-slate-300'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {screen.title}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* Team Preview */
function TeamPreview() {
  return (
    <section className="py-14 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Das Team hinter Wissn
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Zwei Gründer und ein Advisor. Gemeinsam begleiten wir Schulen
            auf dem Weg zu freiem Lernen.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { photo: '/team/laurens-samberg.png', name: 'Laurens Samberg', role: 'Co-Founder & CTO' },
            { photo: '/team/felix-maurer.png', name: 'Felix Maurer', role: 'Co-Founder & CMO' },
            { photo: '/team/anton-schoepe.png', name: 'Anton Schoepe', role: 'Advisor & Gesellschafter' },
          ].map(({ photo, name, role }, i) => (
            <Reveal key={name} direction={i % 2 === 0 ? 'left' : 'right'} delay={(i % 3) * 100}>
              <a
                href="/ueber-uns"
                aria-label={`Mehr über ${name} und das Team erfahren`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-wissn-green/40 hover:shadow-md transition-all no-underline cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
              >
                <img src={photo} alt={name} className="w-14 h-14 rounded-full object-cover shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900">{name}</h3>
                  <p className="text-sm text-slate-500">{role}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/ueber-uns" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-wissn-green font-semibold hover:bg-wissn-green-50 transition-colors no-underline">
            Mehr über uns
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* CTA */
function CTA() {
  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-slate-900 rounded-3xl px-8 py-14 sm:px-16 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-80 h-80 bg-wissn-green/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <Reveal direction="up" className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-wissn-green-btn flex items-center justify-center">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={100} as="h2" className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Bereit für den nächsten Schritt?
            </Reveal>
            <Reveal direction="up" delay={200} as="p" className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
              Ob einzelne Klasse oder ganze Organisation: Wir begleiten Schulen
              und Unternehmen beim Übergang zu freien Lernformen, Schritt für Schritt.
            </Reveal>
            <Reveal direction="up" delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-wissn-green-btn text-white font-semibold text-lg hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Gespräch vereinbaren
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/fuer-schulen"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-slate-300 font-medium hover:text-white transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Mehr für Schulen
                <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Landing Page */
export default function Landing() {
  useSEO({
    title: null,
    description: 'Wissn begleitet Schulen und Unternehmen beim Übergang vom Frontalunterricht zu freien Lernformen. Chat-Tutor mit Quellen, KI-Lernpläne, Karteikarten, Quiz, Mindmaps und Lernanalyse, auf einer Plattform.',
  })

  return (
    <Layout>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <FeaturesPreview />
      <HowItWorksPreview />
      <ProductShowcase />
      <TeamPreview />
      <CTA />
    </Layout>
  )
}
