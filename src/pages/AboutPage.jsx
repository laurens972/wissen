import Layout, { useSEO } from '../components/Layout'
import { ArrowRight, Linkedin, Cloud, Brain, Shield } from 'lucide-react'
import Reveal from '../components/Reveal'

const team = [
  {
    photo: '/team/laurens-samberg.png',
    name: 'Laurens Samberg',
    role: 'Co-Founder & CTO',
    bio: '18 Jahre, Schüler am BSZ Meißen mit Leistungskurs Informations- und Kommunikationstechnik. Fundierte Programmiererfahrung durch eigene Softwareprojekte sowie Einblicke in SAP-Systeme und IT-Infrastrukturen öffentlicher Verwaltungen am Landratsamt Meißen. Aktiv im YFN Chapter Sachsen. Verantwortlich für die technische Entwicklung der Plattform.',
    linkedin: 'https://linkedin.com/in/laurens-jacob-samberg-2bb464373',
  },
  {
    photo: '/team/felix-maurer.png',
    name: 'Felix Maurer',
    role: 'Co-Founder & CMO',
    bio: '18 Jahre, Schüler am BSZ Meißen mit Leistungskurs Informations- und Kommunikationstechnik. Erfahrung im Social-Media-Management und ein großes Netzwerk durch sportliches und soziales Engagement. Aktiv im YFN Chapter Sachsen. Verantwortlich für Marketing und Community.',
    linkedin: 'https://linkedin.com/in/felix-maurer-431562373',
  },
  {
    photo: '/team/anton-schoepe.png',
    name: 'Anton Schoepe',
    role: 'Advisor & Gesellschafter',
    bio: 'Gründer von Intojob und YFN Chapter Lead Sachsen. Bringt Startup-Erfahrung und ein starkes Gründernetzwerk ein. Unterstützt Wissn als Mentor und strategischer Berater.',
    linkedin: 'https://linkedin.com/in/anton-schoepe-bb0654238',
  },
]

export default function AboutPage() {
  useSEO({
    title: 'Über uns',
    description: 'Das Team hinter Wissn, unsere Mission und die Technologie, mit der wir Schulen beim Wandel vom Frontalunterricht zu freien Lernformen begleiten.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4">
                Erste Pilotprojekte an Schulen
              </p>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                Wir sind <span className="marker">Wissn</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                Wir begleiten Schulen auf dem Weg vom Frontalunterricht zu freien Lernformen,
                mit KI-Werkzeugen für Lernen und Lernanalyse, die im Schulalltag wirklich ankommen, und einem
                Lernbüro-Modul, das wir gemeinsam mit unseren Pilotschulen entwickeln.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Geschäftsmodell */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Reveal direction="up">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6 text-center">Unsere Mission</h2>
            </Reveal>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <Reveal direction="left">
                <p>
                  <strong className="text-slate-900">Das Problem:</strong> Viele Schulen wollen vom klassischen Frontalunterricht zu freieren
                  Lernformen wie dem Lernbüro-Konzept wechseln, doch der Übergang ist aufwendig: Lernbausteine müssen entstehen, Logbücher
                  geführt, Coaching-Gespräche vorbereitet und der Überblick über 30 Schüler pro Klasse behalten werden.
                </p>
              </Reveal>
              <Reveal direction="right">
                <p>
                  <strong className="text-slate-900">Unsere Lösung:</strong> Wissn begleitet Schulen bei genau diesem Übergang. Fachlehrkräfte
                  laden ihr Unterrichtsmaterial hoch, ein KI-Tutor unterstützt Schülerinnen und Schüler mit sokratischen Dialogen,
                  Quellenangaben, Karteikarten, Quiz und Mindmaps, und KI-Lernpläne begleiten den individuellen Fortschritt. Die Lernanalyse
                  gibt Lehrkräften die Grundlage für Feedback und Förderung. Das dedizierte Lernbüro-Modul mit Logbuch, Lernbausteinen und
                  Freiheitsgraden entsteht aktuell gemeinsam mit unseren Pilotschulen.
                </p>
              </Reveal>
              <Reveal direction="left">
                <p>
                  <strong className="text-slate-900">Geschäftsmodell:</strong> Wissn ist ein SaaS-Produkt mit Schullizenzen.
                  Schulen erhalten eine zentrale Verwaltung für Klassen, Fächer, Materialien und Lernanalyse, von der ersten
                  Pilotphase bis zur ganzen Schule. Einzelne Schüler können Wissn kostenlos mit Basisfunktionen nutzen.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Das Team</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Zwei Gründer aus Meißen und ein Advisor mit Gründererfahrung.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map(({ photo, name, role, bio, linkedin }, i) => (
              <Reveal key={name} direction={i % 2 === 0 ? 'left' : 'right'} delay={(i % 3) * 100} className="text-center p-8 rounded-2xl border border-slate-200 bg-white">
                <img src={photo} alt={`Portrait von ${name}`} className="w-20 h-20 rounded-full object-cover mx-auto mb-5" />
                <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
                <p className="text-sm text-wissn-green font-medium mb-3">{role}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{bio}</p>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 rounded" aria-label={`LinkedIn Profil von ${name}`}>
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & Vision */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Technologie & Vision</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Gebaut auf skalierbarer Cloud-Infrastruktur, bereit für viele Schulen gleichzeitig.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Brain, title: 'KI-Modelle', text: 'Moderne Sprachmodelle für kontextbezogenes, sicheres Lernen.' },
              { icon: Cloud, title: 'Cloud-nativ', text: 'Skalierbare Infrastruktur, zuverlässig und performant.' },
              { icon: Shield, title: 'DSGVO-konform', text: 'Datenschutz von Anfang an. Alle Daten in der EU. Volle Transparenz.' },
            ].map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} direction={i % 2 === 0 ? 'left' : 'right'} delay={(i % 3) * 100} className="text-center p-7 rounded-2xl border border-slate-200 bg-white">
                <div className="w-12 h-12 rounded-xl bg-wissn-green-50 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-wissn-green" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={300}>
            <p className="text-sm text-slate-500 leading-relaxed text-center max-w-2xl mx-auto mt-10">
              Das dedizierte Lernbüro-Modul mit Logbuch, Lernbausteinen, Lerncoaching und Freiheitsgraden ist unsere
              nächste große Ausbaustufe. Wir entwickeln es gemeinsam mit unseren Pilotschulen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Klingt spannend?
            </h2>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Probier Wissn kostenlos aus oder kontaktiere uns für eine Schullizenz.
            </p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/app" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-wissn-green-btn text-white font-semibold text-lg hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2">
                Kostenlos starten
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-50 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2">
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
