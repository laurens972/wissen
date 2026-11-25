import { Volume2, Mic, Languages, ListOrdered, Type, LifeBuoy } from 'lucide-react'
import Reveal from './Reveal'

// Lernhilfen für Inklusion: EINE Quelle für Startseite und „Für Schulen“.
// Hier steht nur, was in der App heute schon geht. Eine neue Lernhilfe erst
// eintragen, wenn sie live ist. Funktionen beschreiben, keine Wirkung
// versprechen („hilft bei LRS“ gehört nicht hierher).
const lernhilfen = [
  {
    icon: Volume2,
    title: 'Vorlesen im eigenen Tempo',
    text: 'Antworten des Tutors, Material und die Aufgaben der Probeklausur lassen sich vorlesen. Tempo und Stimme stellt jedes Kind selbst ein.',
  },
  {
    icon: Mic,
    title: 'Sprechen statt Tippen',
    text: 'Fragen an den Tutor gehen auch als Sprachnachricht. Wer ungern schreibt, kommt trotzdem ins Gespräch.',
  },
  {
    icon: Languages,
    title: 'Antworten in der eigenen Sprache',
    text: 'Der Tutor antwortet in der Sprache, die im Profil eingestellt ist. Gedacht für Kinder, die Deutsch als zweite Sprache lernen.',
  },
  {
    icon: ListOrdered,
    title: 'Kleine Abschnitte statt Textblock',
    text: 'Der Lernplan teilt einen Lernbaustein in einzelne Schwerpunkte. Bearbeitet und abgehakt wird einer nach dem anderen.',
  },
  {
    icon: Type,
    title: 'Kurze Sätze, erklärte Fachwörter',
    text: 'Der Tutor ist darauf ausgelegt, in kurzen Sätzen zu antworten und Fachwörter zu erklären.',
  },
  {
    icon: LifeBuoy,
    title: 'Hilfe in Stufen',
    text: 'Der Tutor hilft zuerst mit einer Rückfrage oder einem Hinweis. Reicht das nicht, ruft das Kind per Knopfdruck die Lehrkraft.',
  },
]

export default function Lernhilfen() {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {lernhilfen.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            key={title}
            as="li"
            direction="up"
            delay={(i % 3) * 80}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-wissn-green-50 mb-4">
              <Icon className="w-5 h-5 text-wissn-green" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
          </Reveal>
        ))}
      </ul>
      <p className="mt-8 text-sm text-slate-500 leading-relaxed max-w-2xl">
        Die Lernhilfen stehen allen offen. Kein Kind wird in der App als
        Förderkind markiert. Vorlesetempo und Stimme bleiben auf dem eigenen
        Gerät gespeichert.
      </p>
    </>
  )
}
