import { useState } from 'react'
import Layout, { useSEO } from '../components/Layout'
import WissnLogo from '../components/WissnLogo'
import {
  ArrowRight, BrainCircuit, MessageSquare, FileText,
  Map, BookOpen, BarChart3, Users,
  GraduationCap, School,
} from 'lucide-react'

/* ── Video Hero ──────────────────────────────── */
function VideoHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <WissnLogo size={140} showText={false} withCircle={true} />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
            Weil du's{' '}
            <span className="bg-gradient-to-r from-wissn-green via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Wissn
            </span>{' '}
            willst.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Die KI-gestützte Lernplattform für Schulen. Intelligenter Chat-Tutor,
            automatische Mindmaps, Karteikarten und personalisierte Lernpläne.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/auth"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-wissn-green/30 transition-all no-underline"
            >
              <BrainCircuit className="w-5 h-5" />
              Jetzt kostenlos starten
            </a>
            <a
              href="/so-funktionierts"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all no-underline"
            >
              So funktioniert's
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Erklärvideo ────────────────────────────── */
function ExplainerVideo() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Wissn in 5 Minuten erklärt
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Schau dir an, wie Wissn das Lernen für Schüler verändert.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full aspect-video bg-black"
            poster="/wissn-logo-clean.png"
          >
            <source src="/wissn-erklaervideo.mp4" type="video/mp4" />
            Dein Browser unterstützt kein HTML5-Video.
          </video>
        </div>
      </div>
    </section>
  )
}

/* ── Animated Stats ──────────────────────────── */
function Stats() {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {[
            { value: 'KI-gestützt', label: 'Individuelle Betreuung', color: 'text-wissn-green' },
            { value: '24/7', label: 'Verfügbar zum Lernen', color: 'text-blue-500' },
            { value: 'Ab Klasse 5', label: 'Für alle Klassenstufen', color: 'text-violet-500' },
            { value: '100%', label: 'DSGVO-konform', color: 'text-emerald-500' },
          ].map(({ value, label, color }, i) => (
            <div key={label} className="flex items-center gap-8 sm:gap-16">
              <div className="text-center">
                <div className={`text-3xl font-bold ${color}`}>{value}</div>
                <div className="text-sm text-slate-500 mt-1">{label}</div>
              </div>
              {i < 3 && <div className="w-px h-10 bg-slate-200 hidden sm:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Problem Section ───────────────────────── */
function ProblemSection() {
  const problems = [
    { icon: Users, color: 'from-red-400 to-rose-500', bg: 'bg-red-50', title: 'Zu große Klassen', text: 'Lehrkräfte können bei 30+ Schülern nicht auf individuelle Fragen eingehen.' },
    { icon: GraduationCap, color: 'from-amber-400 to-orange-500', bg: 'bg-amber-50', title: 'Bulimielernen', text: 'Kurz vor der Prüfung reinpauken und schnell vergessen — kein nachhaltiges Lernen.' },
    { icon: School, color: 'from-blue-400 to-indigo-500', bg: 'bg-blue-50', title: 'Fehlende Materialien', text: 'Generische Materialien — keine Anpassung an den individuellen Lernstil.' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Das Problem im Bildungssystem
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Schüler brauchen individuelle Unterstützung — Lehrkräfte haben dafür nicht genug Zeit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, color, bg, title, text }) => (
            <div key={title} className="text-center p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Features Preview ────────────────────────── */
function FeaturesPreview() {
  const features = [
    { icon: MessageSquare, color: 'from-emerald-400 to-teal-500', title: 'Chat-Tutor', description: 'Sofort verständliche Antworten auf jede Frage.' },
    { icon: Map, color: 'from-blue-400 to-indigo-500', title: 'Mindmaps', description: 'Visuelle Zusammenfassungen aus deinen Dokumenten.' },
    { icon: BookOpen, color: 'from-violet-400 to-purple-500', title: 'Karteikarten & Quiz', description: 'Automatisch generierte Lernkarten und Quizfragen.' },
    { icon: FileText, color: 'from-orange-400 to-red-500', title: 'Dokumenten-Analyse', description: 'KI-gestützte Analyse deiner Skripte und Materialien.' },
    { icon: BrainCircuit, color: 'from-pink-400 to-rose-500', title: 'Sokratische Dialoge', description: 'Die KI fragt zurück und prüft dein Verständnis.' },
    { icon: BarChart3, color: 'from-cyan-400 to-blue-500', title: 'Analytics', description: 'Verfolge deinen Fortschritt und Lernstrategie.' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Alles, was Schüler zum Lernen brauchen
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Wissn vereint KI-Technologie mit bewährten Lernmethoden.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, color, title, description }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-wissn-green font-semibold hover:bg-wissn-green-50 transition-colors no-underline">
            Alle Features entdecken
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── How it works Preview ────────────────────── */
function HowItWorksPreview() {
  const steps = [
    { num: '01', color: 'from-blue-400 to-indigo-500', title: 'Dokument hochladen', text: 'Lade dein Skript oder Lehrbuch-Kapitel als PDF hoch.' },
    { num: '02', color: 'from-violet-400 to-purple-500', title: 'KI analysiert', text: 'Wissn erkennt Themen und erstellt deinen Lernplan.' },
    { num: '03', color: 'from-emerald-400 to-teal-500', title: 'Interaktiv lernen', text: 'Chat, Mindmaps, Karteikarten — alles in einer App.' },
    { num: '04', color: 'from-orange-400 to-red-500', title: 'Wissen festigen', text: 'Wiederholung und sokratische Dialoge verankern das Wissen.' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            In vier Schritten zum Lernerfolg
          </h2>
          <p className="text-lg text-slate-500">Von der Prüfungsvorbereitung zum tiefgreifenden Verständnis.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, color, title, text }) => (
            <div key={num} className="relative text-center p-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <span className="text-white font-bold text-lg">{num}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/so-funktionierts" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-violet-600 font-semibold hover:bg-violet-50 transition-colors no-underline">
            Mehr erfahren
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── CTA ───────────────────────────────────── */
function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl px-8 py-14 sm:px-16 sm:py-20 relative overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-wissn-green/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-wissn-green to-emerald-500 flex items-center justify-center shadow-lg shadow-wissn-green/30">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Bereit, intelligenter zu lernen?
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
              Starte jetzt mit Wissn und erlebe, wie KI-gestütztes Lernen
              deine Prüfungsvorbereitung transformiert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/auth"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-wissn-green/30 transition-all no-underline"
              >
                Kostenlos registrieren
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/fuer-schulen"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-slate-300 font-medium hover:text-white transition-colors no-underline"
              >
                Schulen & Bildungsträger
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Landing Page ──────────────────────────── */
export default function Landing() {
  useSEO({
    title: null,
    description: 'Wissn — Die KI-gestützte Lernplattform für Schulen. Chat-Tutor, Mindmaps, Karteikarten und personalisierte Lernpläne.',
  })

  return (
    <Layout>
      <VideoHero />
      <ExplainerVideo />
      <Stats />
      <ProblemSection />
      <FeaturesPreview />
      <HowItWorksPreview />
      <CTA />
    </Layout>
  )
}
