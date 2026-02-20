import { useState, useRef, useEffect, useCallback } from 'react'
import Layout, { useSEO } from '../components/Layout'
import WissnLogo from '../components/WissnLogo'
import {
  ArrowRight, BrainCircuit, MessageSquare, FileText,
  Map, BookOpen, BarChart3, Users,
  GraduationCap, School, Play, Sparkles,
} from 'lucide-react'

/* ── Video Hero ──────────────────────────────── */
function VideoHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 min-h-[90vh] flex items-center">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wissn-green/15 rounded-full blur-3xl animate-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-3xl animate-float" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-32 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo with glow */}
          <div className="flex justify-center mb-10 animate-fade-in-scale">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-wissn-green/20 blur-2xl scale-150 animate-pulse-glow" />
              <img
                src="/wissn-logo-clean.png"
                alt="Wissn Logo"
                className="relative w-[160px] h-[160px] block"
                draggable={false}
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6 animate-fade-in-up delay-200">
            Weil du's{' '}
            <span className="bg-gradient-to-r from-wissn-green via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient-shift inline-block" style={{ backgroundSize: '200% auto' }}>
              Wissn
            </span>{' '}
            willst.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in-up delay-400">
            Die KI-gestützte Lernplattform für Schulen. Intelligenter Chat-Tutor,
            automatische Mindmaps, Karteikarten und personalisierte Lernpläne.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-500">
            <a
              href="/auth"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-wissn-green to-emerald-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-wissn-green/30 hover:scale-105 transition-all duration-300 no-underline"
            >
              <BrainCircuit className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Jetzt kostenlos starten
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="/so-funktionierts"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 no-underline"
            >
              So funktioniert's
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Floating badges */}
          <div className="hidden lg:block">
            {/* Links — 3 Badges */}
            <div className="absolute left-8 top-[35%] animate-float delay-200">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                KI-gestützt
              </div>
            </div>
            <div className="absolute left-14 top-[52%] animate-float-reverse delay-500">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-sm">
                <BrainCircuit className="w-4 h-4 text-cyan-400" />
                Sokratische Dialoge
              </div>
            </div>
            <div className="absolute left-6 top-[68%] animate-float delay-700">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-sm">
                <Map className="w-4 h-4 text-blue-400" />
                Auto-Mindmaps
              </div>
            </div>
            {/* Rechts — 3 Badges */}
            <div className="absolute right-10 top-[33%] animate-float-reverse delay-300">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-sm">
                <BookOpen className="w-4 h-4 text-violet-400" />
                Alle Fächer
              </div>
            </div>
            <div className="absolute right-6 top-[50%] animate-float delay-500">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-sm">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                Made in Sachsen
              </div>
            </div>
            <div className="absolute right-14 top-[67%] animate-float-reverse delay-700">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-sm">
                <Users className="w-4 h-4 text-wissn-green" />
                DSGVO-konform
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to video section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}

/* ── Erklärvideo ────────────────────────────── */
function ExplainerVideo() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    setTimeout(() => {
      videoRef.current?.play()
    }, 50)
  }

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
          {!playing && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 cursor-pointer border-none group"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-wissn-green/10 rounded-full blur-3xl animate-pulse-glow" />
              </div>
              {/* Logo + Play */}
              <div className="relative flex flex-col items-center gap-6">
                <img src="/wissn-logo-clean.png" alt="Wissn Logo" className="w-[100px] h-[100px] block" draggable={false} />
                <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-7 h-7 text-white ml-1" fill="white" />
                </div>
                <span className="text-white/60 text-sm font-medium">Video abspielen</span>
              </div>
            </button>
          )}
          <video
            ref={videoRef}
            controls={playing}
            playsInline
            preload="metadata"
            className="w-full aspect-video bg-black"
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
    { num: '01', color: 'from-white/30 to-white/10', bg: 'from-blue-500 to-indigo-600', title: 'Dokument hochladen', text: 'Lade dein Skript oder Lehrbuch-Kapitel als PDF hoch.' },
    { num: '02', color: 'from-white/30 to-white/10', bg: 'from-violet-500 to-purple-600', title: 'KI analysiert', text: 'Wissn erkennt Themen und erstellt deinen Lernplan.' },
    { num: '03', color: 'from-white/30 to-white/10', bg: 'from-emerald-500 to-teal-600', title: 'Interaktiv lernen', text: 'Chat, Mindmaps, Karteikarten — alles in einer App.' },
    { num: '04', color: 'from-white/30 to-white/10', bg: 'from-orange-500 to-red-600', title: 'Wissen festigen', text: 'Wiederholung und sokratische Dialoge verankern das Wissen.' },
  ]

  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const rafRef = useRef(null)
  const setWidthRef = useRef(0)
  const speed = 0.5 // px per frame

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Measure exact pixel distance from set 1 start to set 2 start
    const firstOfSet2 = track.children[steps.length]
    if (firstOfSet2) {
      setWidthRef.current = firstOfSet2.offsetLeft
    }

    const tick = () => {
      offsetRef.current -= speed
      const sw = setWidthRef.current
      if (sw > 0 && Math.abs(offsetRef.current) >= sw) {
        offsetRef.current += sw
      }
      track.style.transform = `translateX(${offsetRef.current}px)`
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const StepCard = ({ num, color, bg, title, text }) => (
    <div className={`flex-shrink-0 w-[400px] text-center p-8 rounded-2xl bg-gradient-to-br ${bg} border border-white/20 shadow-lg`}>
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
        <span className="text-white font-bold text-lg">{num}</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/75 leading-relaxed">{text}</p>
    </div>
  )

  // Two identical sets for seamless loop
  const allCards = [...steps, ...steps]

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            In vier Schritten zum Lernerfolg
          </h2>
          <p className="text-lg text-slate-500">Von der Prüfungsvorbereitung zum tiefgreifenden Verständnis.</p>
        </div>
      </div>
      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div ref={trackRef} className="flex gap-8 will-change-transform">
          {allCards.map(({ num, color, bg, title, text }, i) => (
            <StepCard key={`${num}-${i}`} num={num} color={color} bg={bg} title={title} text={text} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
