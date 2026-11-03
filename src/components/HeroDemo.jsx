import { useState, useEffect, useCallback, useRef } from 'react'
import {
  BrainCircuit, MessageSquare, Layers, Network, ClipboardCheck, Check, BarChart3,
} from 'lucide-react'

/*
 * HeroDemo — die Live-Produkt-Session als Karussell.
 * Sokratischer Chat → Karteikarten → Mindmap → Probeklausur → Lernanalyse → Loop.
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

const GRAPHIC = {
  root: 'Photosynthese',
  branches: ['Sonnenlicht', 'Chlorophyll', 'CO₂ + H₂O', '→ Glucose', '→ O₂'],
}

// Begriffe wie in der App: Teile I–III, Aufgabentypen, BE, Ergebnis nur in BE und
// Prozent (keine Note). Leistungskontrolle = Teil I Anforderungsbereich I, Teil II/III
// Anforderungsbereich II (AFB III gibt es erst beim Niveau Klausur).
// Gezeigt wird ein Ausschnitt (Aufgaben 1, 2, 4, 6); punkte/max je Teil sind die Summen
// einer vollen Leistungskontrolle mit 6 Aufgaben und 16 BE (App-Spanne 12–18 BE).
const PK = {
  niveau: 'Leistungskontrolle',
  fach: 'Biologie · Photosynthese',
  dauer: 'ca. 20 min',
  teile: [
    { nr: 'I', name: 'Wiedergeben', punkte: 5, max: 5 },
    { nr: 'II', name: 'Anwenden', punkte: 4, max: 5 },
    { nr: 'III', name: 'Sachaufgabe', punkte: 3, max: 6 },
  ],
  // teil = Index in teile. satz: gerade Stellen Text, ungerade Stellen Lücken.
  aufgaben: [
    {
      teil: 0, nr: 1, be: 1, art: 'Ankreuzen',
      frage: 'Wo in der Pflanzenzelle findet die Photosynthese statt?',
      optionen: ['In den Mitochondrien', 'In den Chloroplasten', 'Im Zellkern'],
      richtig: 1,
    },
    {
      teil: 0, nr: 2, be: 2, art: 'Lückentext',
      frage: 'Ergänze die Lücken.',
      satz: ['Pflanzen bilden aus ', 'Kohlenstoffdioxid', ' und ', 'Wasser', ' mit Lichtenergie Glucose und Sauerstoff.'],
    },
    {
      teil: 1, nr: 4, be: 3, art: 'Ankreuzen und begründen',
      frage: 'Was passiert mit einer Pflanze im dunklen Keller?',
      optionen: ['Wächst normal weiter', 'Geht nach Wochen ein', 'Bildet mehr Glucose'], // kurz: kein Umbruch auf Handys
      richtig: 1,
      antwort: 'Ohne Licht keine Photosynthese, also keine Glucose mehr.',
    },
    {
      teil: 2, nr: 6, be: 6, art: 'Erklären und begründen',
      situation: 'Eine Wasserpest unter einer Lampe gibt Bläschen ab. Je näher die Lampe, desto mehr.',
      frage: 'Erkläre die Beobachtung.',
      antwort: 'Die Bläschen sind Sauerstoff. Mehr Licht → mehr Photosynthese.',
    },
  ],
  // Wie in der App: geprüftes Konzept + „Aufgabe N · X BE verloren“ (hier die letzte Aufgabe)
  ueben: 'Lichtabhängigkeit der Photosynthese',
}

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
  { icon: Network, label: 'Mindmap' },
  { icon: ClipboardCheck, label: 'Probeklausur' },
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
function Graphic({ data, reduced }) {
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

function StageGraphic({ reduced, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, reduced ? 5000 : 4400)
    return () => clearTimeout(t)
  }, [reduced, onDone])
  return (
    <div className="relative h-full">
      <Graphic data={GRAPHIC} reduced={reduced} />
    </div>
  )
}

/* ---------- Stage 3: Probeklausur (Teile I–III → Bewertung in BE) ---------- */
// Tempo bewusst ruhig (PO-Wunsch): Besucher sollen Aufgabe und Antwort mitlesen können.
const PK_TEMPO = {
  lesen: 2000, // bevor angekreuzt/gefüllt/getippt wird
  lesenSituation: 2800,
  kreuzZuText: 900, // nach dem Kreuz, bevor die Begründung beginnt
  luecke: 1200, // zwischen zwei Lücken
  zeichen: 50, // je getipptem Zeichen
  halten: 1500, // fertige Aufgabe stehen lassen
}

// Animationsschritte je Aufgabe: ein Kreuz, dann je Lücke einer, dann je Zeichen einer.
const lueckenZahl = (a) => (a.satz ? (a.satz.length - 1) / 2 : 0)
const schritte = (a) => (a.optionen ? 1 : 0) + lueckenZahl(a) + (a.antwort?.length ?? 0)

function pkPause(a, n) {
  if (n === 0) return a.situation ? PK_TEMPO.lesenSituation : PK_TEMPO.lesen
  if (a.satz) return PK_TEMPO.luecke
  if (a.optionen && n === 1) return PK_TEMPO.kreuzZuText
  return PK_TEMPO.zeichen
}

function StageProbeklausur({ reduced, onDone }) {
  // step 0–3 = Aufgabe wird bearbeitet (n = erledigte Schritte), 4 = Abgabe, 5 = Ergebnis
  const [step, setStep] = useState(reduced ? 5 : 0)
  const [n, setN] = useState(0)

  useEffect(() => {
    let t
    if (step === 5) t = setTimeout(onDone, reduced ? 5600 : 5000)
    else if (step === 4) t = setTimeout(() => (n === 0 ? setN(1) : setStep(5)), n === 0 ? 800 : 1400)
    else if (n < schritte(PK.aufgaben[step])) t = setTimeout(() => setN(n + 1), pkPause(PK.aufgaben[step], n))
    else
      t = setTimeout(() => {
        setN(0)
        setStep(step + 1)
      }, PK_TEMPO.halten)
    return () => clearTimeout(t)
  }, [step, n, reduced, onDone])

  if (step === 5) return <PkErgebnis reduced={reduced} />

  const a = PK.aufgaben[Math.min(step, 3)]
  const k = step === 4 ? schritte(a) : n // bei der Abgabe ist die letzte Aufgabe fertig
  const vorText = (a.optionen ? 1 : 0) + lueckenZahl(a)
  const gekreuzt = Boolean(a.optionen) && k >= 1
  const gefuellt = Math.max(0, k - (a.optionen ? 1 : 0))
  const getippt = Math.max(0, k - vorText)
  const tippt = a.antwort && step < 4 && k >= vorText && getippt < a.antwort.length

  return (
    <div className="flex h-full flex-col gap-3">
      {/* Blatt-Kopf (Dauer in der Unterzeile: als Pille bricht der Titel auf Handys um) */}
      <div>
        <p className="text-sm font-semibold text-slate-700">Probeklausur · {PK.niveau}</p>
        <p className="text-xs text-slate-400">
          {PK.fach} · {PK.dauer}
        </p>
      </div>

      {/* Teile I–III */}
      <div className="grid grid-cols-3 gap-2">
        {PK.teile.map((x, i) => {
          const aktiv = step < 4 && i === a.teil
          return (
            <div key={x.nr}>
              <div
                className={`h-1 rounded-full transition-colors duration-500 ${
                  i <= a.teil ? 'bg-wissn-green' : 'bg-slate-200'
                }`}
              />
              <p
                className={`mt-1.5 text-[10px] font-semibold uppercase tracking-wide ${
                  aktiv ? 'text-wissn-green-dark' : 'text-slate-400'
                }`}
              >
                Teil {x.nr}
              </p>
              <p className={`text-[11px] font-medium ${aktiv ? 'text-slate-700' : 'text-slate-400'}`}>{x.name}</p>
            </div>
          )
        })}
      </div>

      {/* Aufgabe — langsamer Einflug, damit der Wechsel mitzulesen ist. min-h-0 +
          overflow-hidden: auf sehr schmalen Handys wird eher die Karte gekappt als
          der Abgabe-Knopf aus der festen Bühne geschoben */}
      <div
        key={a.nr}
        className="msg-in min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3"
        style={{ animationDuration: '0.7s' }}
      >
        <div className="mb-1.5 flex items-center justify-between gap-2 text-[11px] font-medium text-slate-400">
          <span>
            Aufgabe {a.nr} · {a.art}
          </span>
          <span className="flex-none rounded-full bg-wissn-green-50 px-2 py-0.5 font-semibold text-wissn-green-dark">
            {a.be} BE
          </span>
        </div>
        {a.situation && (
          <p className="mb-2 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-slate-500">
            <span className="font-semibold text-slate-600">Situation: </span>
            {a.situation}
          </p>
        )}
        <p className="text-sm font-medium text-slate-700">{a.frage}</p>

        {a.optionen && (
          <div className="mt-2 space-y-1 sm:space-y-1.5">
            {a.optionen.map((o, i) => {
              const an = gekreuzt && i === a.richtig
              return (
                <div
                  key={o}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-1 text-sm transition-colors duration-500 sm:py-1.5 ${
                    an ? 'border-wissn-green bg-wissn-green-50 font-medium text-wissn-green-dark' : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 flex-none items-center justify-center rounded border transition-colors duration-500 ${
                      an ? 'border-wissn-green bg-wissn-green' : 'border-slate-300 bg-white'
                    }`}
                  >
                    {an && <Check className="h-3 w-3 text-white" />}
                  </span>
                  {o}
                </div>
              )
            })}
          </div>
        )}

        {/* Lückentext: Marken (1), (2) wie in der App, werden nacheinander gefüllt */}
        {a.satz && (
          <p className="mt-2 text-sm leading-8 text-slate-700">
            {a.satz.map((s, i) => {
              if (i % 2 === 0) return <span key={i}>{s}</span>
              const nr = (i + 1) / 2
              return nr <= gefuellt ? (
                <span
                  key={i}
                  className="msg-in mx-0.5 inline-block rounded-md bg-wissn-green-50 px-2 font-semibold leading-6 text-wissn-green-dark ring-1 ring-wissn-green"
                >
                  {s}
                </span>
              ) : (
                <span
                  key={i}
                  className="mx-0.5 inline-block min-w-[4.5rem] rounded-md border border-dashed border-slate-300 px-2 text-center leading-6 text-slate-400"
                >
                  ({nr})
                </span>
              )
            })}
          </p>
        )}

        {a.antwort && (
          <>
            {a.optionen && <p className="mb-1 mt-2.5 text-[11px] font-medium text-slate-400">Begründung</p>}
            <div
              className={`min-h-[38px] rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 ${
                a.optionen ? '' : 'mt-2'
              }`}
            >
              {a.antwort.slice(0, getippt)}
              {tippt && <span className="type-cursor">▍</span>}
            </div>
          </>
        )}
      </div>

      {/* Abgabe erst am Ende: während der Aufgaben braucht die Karte den Platz */}
      {step === 4 && (
        <div className="msg-in mt-auto flex items-center justify-center gap-2 rounded-xl bg-wissn-green-btn py-2.5 text-sm font-semibold text-white">
          {n === 0 ? (
            'Fertig & prüfen'
          ) : (
            <>
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Wird geprüft …
            </>
          )}
        </div>
      )}
    </div>
  )
}

function PkErgebnis({ reduced }) {
  const max = PK.teile.reduce((s, t) => s + t.max, 0)
  const punkte = PK.teile.reduce((s, t) => s + t.punkte, 0)
  const delay = (s) => ({ animationDelay: reduced ? '0s' : `${s}s` })
  // Letzte Aufgabe = einzige Aufgabe in Teil III → verlorene BE = Teil-Differenz
  const letzte = PK.aufgaben[PK.aufgaben.length - 1]
  const verloren = PK.teile[letzte.teil].max - PK.teile[letzte.teil].punkte

  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <div className="msg-in">
        <p className="text-xs text-slate-400">Dein Ergebnis · {PK.niveau}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-800">
            {punkte} von {max} BE
          </span>
          <span className="rounded-full bg-wissn-green-50 px-2.5 py-0.5 text-sm font-semibold text-wissn-green-dark">
            {Math.round((punkte / max) * 100)} %
          </span>
        </div>
      </div>

      {/* So lief es: ein Balken je Teil */}
      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">So lief es</p>
        {PK.teile.map((t, i) => {
          const voll = t.punkte === t.max
          return (
            <div key={t.nr} className="msg-in" style={delay(0.3 + i * 0.4)}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-600">
                  Teil {t.nr} · {t.name}
                </span>
                <span className={`font-semibold ${voll ? 'text-wissn-green-dark' : 'text-amber-600'}`}>
                  {t.punkte} / {t.max} BE
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`bar-fill h-full rounded-full ${
                    voll ? 'bg-gradient-to-r from-wissn-green to-emerald-500' : 'bg-amber-400'
                  }`}
                  style={{ width: `${(t.punkte / t.max) * 100}%`, ...delay(0.4 + i * 0.4) }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Übungs-Empfehlung → Chat */}
      <div
        className="msg-in flex items-center justify-between gap-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2"
        style={delay(1.8)}
      >
        <div className="min-w-0">
          <p className="text-[11px] font-medium text-amber-700">Das solltest du noch üben</p>
          <p className="text-xs font-semibold text-slate-700">{PK.ueben}</p>
          <p className="text-[11px] text-slate-500">
            Aufgabe {letzte.nr} · {verloren} BE verloren
          </p>
        </div>
        <span className="flex flex-none items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-wissn-green-dark shadow-sm">
          <MessageSquare className="h-3.5 w-3.5" />
          Im Chat üben
        </span>
      </div>
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

        {/* Bühne (Karussell) — auf Handys 40 px höher, sonst passt die Probeklausur-Aufgabe
            „Ankreuzen und begründen“ (umbrechender Text) nicht in die feste Höhe */}
        <div className="relative h-[460px] overflow-hidden sm:h-[420px]">
          <div key={`${stage}-${tick}`} className="stage-enter absolute inset-0 px-4 py-4">
            {stage === 0 && <StageChat reduced={reduced} onDone={onDone} />}
            {stage === 1 && <StageFlashcards reduced={reduced} onDone={onDone} />}
            {stage === 2 && <StageGraphic reduced={reduced} onDone={onDone} />}
            {stage === 3 && <StageProbeklausur reduced={reduced} onDone={onDone} />}
            {stage === 4 && <StageAnalysis reduced={reduced} onDone={onDone} />}
          </div>
        </div>

        {/* Fortschritt / Feature-Leiste — klickbar.
            min-w-0 + kompakte Abstände: 5 Tabs dürfen auf schmalen Screens
            die Karte nicht breiter als den Viewport machen. */}
        <div className="flex min-w-0 items-center justify-around border-t border-slate-100 bg-slate-50 px-1 py-1.5">
          {TABS.map((t, i) => {
            const Icon = t.icon
            const active = i === stage
            return (
              <button
                key={t.label}
                type="button"
                onClick={() => goToStage(i)}
                className={`flex min-w-0 shrink items-center gap-1 rounded-lg px-1.5 py-1.5 text-[11px] font-medium transition-colors sm:gap-1.5 sm:px-2.5 ${
                  active
                    ? 'bg-wissn-green-50 text-wissn-green-dark'
                    : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                }`}
              >
                {/* Symbole erst ab sm: „Probeklausur“ braucht auf Handys den Platz */}
                <Icon className="hidden h-3.5 w-3.5 flex-none sm:block" />
                {t.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
