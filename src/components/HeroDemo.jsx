import { useState, useEffect, useCallback, useRef } from 'react'
import {
  BrainCircuit, MessageSquare, Layers, Network, ListChecks, Check, BarChart3,
} from 'lucide-react'

/*
 * HeroDemo — die Live-Produkt-Session als Karussell.
 * Sokratischer Chat → Karteikarten → Mindmap → Quiz → Lernanalyse → Loop.
 * Alles zum selben Thema (Photosynthese), damit die Lern-Session zusammenhängt.
 * Rein dekorativ (aria-hidden); die semantische H1 lebt im Hero.
 */

/* --- Inhalte (eine zusammenhängende Session) --- */
const DIALOG = [
  { from: 'user', text: 'Ich versteh Photosynthese nicht 😩' },
  { from: 'bot', text: 'Kein Stress! Was brauchen Pflanzen denn, um zu wachsen?' },
  { from: 'user', text: 'Licht und Wasser?' },
  { from: 'bot', text: 'Genau 👍 Und welches Gas nehmen sie aus der Luft auf?' },
  { from: 'user', text: 'CO₂!' },
  { from: 'bot', text: 'Perfekt. Licht + CO₂ + Wasser → Glucose + O₂. Das ist Photosynthese 🌱' },
]

const CARDS = [
  { q: 'Was macht das Chlorophyll?', a: 'Es fängt das Sonnenlicht ein' },
  { q: 'Was sind die Produkte?', a: 'Glucose + Sauerstoff (O₂)' },
]

const MINDMAP = {
  root: 'Photosynthese',
  branches: ['Sonnenlicht', 'Chlorophyll', 'CO₂ + H₂O', '→ Glucose', '→ O₂'],
}

const MC = {
  q: 'Was entsteht bei der Photosynthese?',
  options: ['Glucose + O₂', 'CO₂ + Wärme', 'nur Wasser'],
  correct: 0,
}
const TXT = { q: 'Welches Gas nehmen Pflanzen auf?', answer: 'CO₂' }

const ANALYSIS = {
  student: 'Anna, Klasse 7b',
  topic: 'Photosynthese',
  rows: [
    { label: 'Grundprinzip', pct: 95 },
    { label: 'Chlorophyll & Licht', pct: 88 },
    { label: 'Reaktionsgleichung', pct: 76 },
    { label: 'Transfer & Anwendung', pct: 62 },
  ],
}

const TABS = [
  { icon: MessageSquare, label: 'Tutor' },
  { icon: Layers, label: 'Karten' },
  { icon: Network, label: 'Grafik' },
  { icon: ListChecks, label: 'Quiz' },
  { icon: BarChart3, label: 'Analyse' },
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = () => setReduced(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

/* ---------- Stage 0: Sokratischer Chat ---------- */
function StageChat({ reduced, onDone }) {
  const [count, setCount] = useState(reduced ? DIALOG.length : 0)
  useEffect(() => {
    if (reduced) {
      const t = setTimeout(onDone, 5000)
      return () => clearTimeout(t)
    }
    if (count >= DIALOG.length) {
      const t = setTimeout(onDone, 2600)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 700 : 1450)
    return () => clearTimeout(t)
  }, [count, reduced, onDone])

  return (
    <div className="flex h-full flex-col justify-end gap-2.5 overflow-hidden">
      {DIALOG.slice(0, count).map((m, i) =>
        m.from === 'user' ? (
          <div key={i} className="msg-in flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-wissn-green px-3.5 py-2 text-sm text-white">
              {m.text}
            </div>
          </div>
        ) : (
          <div key={i} className="msg-in flex gap-2">
            <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-wissn-green to-emerald-500">
              <BrainCircuit className="h-4 w-4 text-white" />
            </div>
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-100 px-3.5 py-2 text-sm text-slate-700">
              {m.text}
            </div>
          </div>
        )
      )}
    </div>
  )
}

/* ---------- Stage 1: Karteikarten (flippen) ---------- */
function StageFlashcards({ reduced, onDone }) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(reduced)
  useEffect(() => {
    if (reduced) {
      const t = setTimeout(onDone, 5000)
      return () => clearTimeout(t)
    }
    setFlipped(false)
    const t1 = setTimeout(() => setFlipped(true), 1500)
    const t2 = setTimeout(() => {
      if (idx < CARDS.length - 1) setIdx((i) => i + 1)
      else onDone()
    }, 3600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [idx, reduced, onDone])

  const card = CARDS[idx]
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="text-[11px] font-medium text-slate-400">
        Karteikarte {idx + 1} / {CARDS.length}
      </div>
      <div className="flip-card h-44 w-80" data-flipped={flipped}>
        <div className="flip-inner">
          <div className="flip-face flip-front border-2 border-wissn-green-100 bg-white">
            <span className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-wissn-green">
              Frage
            </span>
            <span className="px-4 text-center text-sm font-medium text-slate-700">
              {card.q}
            </span>
          </div>
          <div className="flip-face flip-back bg-gradient-to-br from-wissn-green to-emerald-500 text-white">
            <span className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-white/80">
              Antwort
            </span>
            <span className="px-4 text-center text-sm font-semibold">{card.a}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Stage 2: Mindmap ---------- */
function Mindmap({ data, reduced }) {
  const { root, branches } = data
  const cx = 50
  const cy = 50
  const rx = 37
  const ry = 34
  const pos = branches.map((_, i) => {
    const angle = ((-90 + (360 / branches.length) * i) * Math.PI) / 180
    return { x: cx + rx * Math.cos(angle), y: cy + ry * Math.sin(angle) }
  })
  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient
            id="mm-grad"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
          >
            <stop offset="0%" stopColor="#6B9B37" />
            <stop offset="100%" stopColor="#7FB344" />
          </linearGradient>
        </defs>
        {pos.map((p, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="url(#mm-grad)"
            strokeWidth="0.6"
            strokeLinecap="round"
            pathLength="1"
            className="mm-line"
            style={{ animationDelay: reduced ? '0s' : `${0.2 + i * 0.2}s` }}
          />
        ))}
      </svg>
      <div className="mm-node z-10" style={{ left: `${cx}%`, top: `${cy}%` }}>
        <span className="whitespace-nowrap rounded-xl bg-gradient-to-br from-wissn-green to-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-wissn-green/30">
          {root}
        </span>
      </div>
      {branches.map((b, i) => (
        <div
          key={b + i}
          className="mm-node"
          style={{
            left: `${pos[i].x}%`,
            top: `${pos[i].y}%`,
            animationDelay: reduced ? '0s' : `${0.5 + i * 0.2}s`,
          }}
        >
          <span className="whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm">
            {b}
          </span>
        </div>
      ))}
    </div>
  )
}

function StageMindmap({ reduced, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, reduced ? 5000 : 4400)
    return () => clearTimeout(t)
  }, [reduced, onDone])
  return (
    <div className="relative h-full">
      <Mindmap data={MINDMAP} reduced={reduced} />
    </div>
  )
}

/* ---------- Stage 3: Quiz (Multiple-Choice + Textantwort) ---------- */
function StageQuiz({ reduced, onDone }) {
  const [step, setStep] = useState(0) // 0 MC → 1 reveal → 2 text → 3 done
  const [typed, setTyped] = useState(reduced ? TXT.answer.length : 0)

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(onDone, 5600)
      return () => clearTimeout(t)
    }
    if (step >= 3) {
      const t = setTimeout(onDone, 2600)
      return () => clearTimeout(t)
    }
    const delays = [2000, 2200, 3400]
    const t = setTimeout(() => setStep((s) => s + 1), delays[step])
    return () => clearTimeout(t)
  }, [step, reduced, onDone])

  const revealed = reduced || step >= 1
  const showText = reduced || step >= 2

  useEffect(() => {
    if (reduced || !showText) return
    if (typed >= TXT.answer.length) return
    const t = setTimeout(() => setTyped((n) => n + 1), 180)
    return () => clearTimeout(t)
  }, [showText, typed, reduced])

  const textDone = typed >= TXT.answer.length

  return (
    <div className="flex h-full flex-col gap-3">
      {/* Multiple-Choice */}
      <div>
        <p className="mb-2 text-sm font-semibold text-slate-700">{MC.q}</p>
        <div className="space-y-1.5">
          {MC.options.map((opt, i) => {
            const isCorrect = i === MC.correct
            const active = revealed && isCorrect
            return (
              <div
                key={opt}
                className={`msg-in flex items-center justify-between rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? 'border-wissn-green bg-wissn-green-50 font-medium text-wissn-green-dark'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {opt}
                {active && <Check className="h-4 w-4 text-wissn-green" />}
              </div>
            )
          })}
        </div>
      </div>

      {/* Textantwort */}
      {showText && (
        <div className="msg-in mt-auto border-t border-slate-100 pt-3">
          <p className="mb-2 text-sm font-semibold text-slate-700">{TXT.q}</p>
          <div
            className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm ${
              textDone
                ? 'border-wissn-green bg-wissn-green-50'
                : 'border-slate-200 bg-white'
            }`}
          >
            <span className="text-slate-700">
              {reduced ? TXT.answer : TXT.answer.slice(0, typed)}
              {!textDone && <span className="type-cursor">▍</span>}
            </span>
            {textDone && <Check className="h-4 w-4 text-wissn-green" />}
          </div>
        </div>
      )}
    </div>
  )
}

/* ---------- Stage 4: Lernanalyse ---------- */
function StageAnalysis({ reduced, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5000)
    return () => clearTimeout(t)
  }, [onDone])

  const avg = Math.round(
    ANALYSIS.rows.reduce((sum, r) => sum + r.pct, 0) / ANALYSIS.rows.length
  )

  return (
    <div className="flex h-full flex-col justify-center gap-4">
      {/* Kopf */}
      <div className="msg-in flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-700">
            Lernanalyse · {ANALYSIS.topic}
          </p>
          <p className="text-xs text-slate-400">{ANALYSIS.student}</p>
        </div>
        <span className="rounded-full bg-wissn-green-50 px-2.5 py-1 text-xs font-semibold text-wissn-green-dark">
          {avg} % verstanden
        </span>
      </div>

      {/* Balken pro Thema */}
      <div className="space-y-3">
        {ANALYSIS.rows.map((row, i) => (
          <div
            key={row.label}
            className="msg-in"
            style={{ animationDelay: reduced ? '0s' : `${0.3 + i * 0.5}s` }}
          >
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-600">{row.label}</span>
              <span className="font-semibold text-wissn-green-dark">{row.pct} %</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="bar-fill h-full rounded-full bg-gradient-to-r from-wissn-green to-emerald-500"
                style={{
                  width: `${row.pct}%`,
                  animationDelay: reduced ? '0s' : `${0.4 + i * 0.5}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Fazit */}
      <div
        className="msg-in flex items-center gap-2 rounded-lg border border-wissn-green-100 bg-wissn-green-50 px-3 py-2 text-xs font-medium text-wissn-green-dark"
        style={{ animationDelay: reduced ? '0s' : '2.6s' }}
      >
        <Check className="h-4 w-4 flex-none" />
        Basiswissen sicher. Nächster Schwerpunkt: Transfer & Anwendung
      </div>
    </div>
  )
}

/* ---------- Karussell ---------- */
export default function HeroDemo() {
  const reduced = usePrefersReducedMotion()
  const [stage, setStage] = useState(0)
  // Klick auf einen Tab pausiert das Auto-Durchlaufen (bleibt stehen).
  // Reload setzt den State zurück → läuft wieder ganz normal durch.
  const pausedRef = useRef(false)
  const [tick, setTick] = useState(0) // erzwingt Replay bei Klick auf denselben Tab

  const onDone = useCallback(() => {
    if (pausedRef.current) return
    setStage((s) => (s + 1) % TABS.length)
  }, [])

  const goToStage = (i) => {
    pausedRef.current = true
    setStage(i)
    setTick((n) => n + 1)
  }

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl lg:mx-0">
      {/* dezenter Glow hinter der Karte */}
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-wissn-green/20 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/40">
        {/* App-Chrome */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <div className="ml-2 flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <BrainCircuit className="h-3.5 w-3.5 text-wissn-green" />
            Wissn KI-Tutor
          </div>
          <span className="ml-auto rounded-full bg-wissn-green-50 px-2 py-0.5 text-[11px] font-medium text-wissn-green-dark">
            Demo
          </span>
        </div>

        {/* Bühne (Karussell) */}
        <div className="relative h-[420px] overflow-hidden">
          <div key={`${stage}-${tick}`} className="stage-enter absolute inset-0 px-4 py-4">
            {stage === 0 && <StageChat reduced={reduced} onDone={onDone} />}
            {stage === 1 && <StageFlashcards reduced={reduced} onDone={onDone} />}
            {stage === 2 && <StageMindmap reduced={reduced} onDone={onDone} />}
            {stage === 3 && <StageQuiz reduced={reduced} onDone={onDone} />}
            {stage === 4 && <StageAnalysis reduced={reduced} onDone={onDone} />}
          </div>
        </div>

        {/* Fortschritt / Feature-Leiste — klickbar */}
        <div className="flex items-center justify-around border-t border-slate-100 bg-slate-50 px-1 py-1.5">
          {TABS.map((t, i) => {
            const Icon = t.icon
            const active = i === stage
            return (
              <button
                key={t.label}
                type="button"
                onClick={() => goToStage(i)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                  active
                    ? 'bg-wissn-green-50 text-wissn-green-dark'
                    : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {t.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
