import { useState } from 'react'
import Layout, { useSEO } from '../components/Layout'
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react'

const faqCategories = [
  {
    category: 'Allgemein',
    questions: [
      {
        q: 'Was ist Wissn?',
        a: 'Wissn ist eine KI-gestützte Lernplattform für Schüler. Mit einem intelligenten Chat-Tutor, automatischen Mindmaps, Karteikarten und Quiz-Funktionen hilft Wissn, Schulstoff wirklich zu verstehen — statt nur auswendig zu lernen.',
      },
      {
        q: 'Ab welcher Klasse ist Wissn geeignet?',
        a: 'Wissn ist für Schüler ab der 5. Klasse geeignet. Die KI passt sich automatisch an das Niveau an und erklärt Inhalte altersgerecht.',
      },
      {
        q: 'Für welche Fächer funktioniert Wissn?',
        a: 'Wissn funktioniert für alle Fächer — von Mathe über Deutsch und Englisch bis hin zu Biologie, Geschichte und mehr. Lade einfach dein Lernmaterial hoch und leg los.',
      },
    ],
  },
  {
    category: 'Für Schüler',
    questions: [
      {
        q: 'Wie starte ich mit Wissn?',
        a: 'Erstelle kostenlos einen Account, lade dein erstes Dokument hoch und starte den Chat-Tutor. In wenigen Minuten bist du startklar.',
      },
      {
        q: 'Brauche ich eine App?',
        a: 'Nein, Wissn läuft komplett im Browser — auf dem Computer, Tablet oder Smartphone. Keine Installation nötig.',
      },
      {
        q: 'Funktioniert Wissn auf dem Handy?',
        a: 'Ja! Wissn ist vollständig responsiv und funktioniert auf allen Geräten — Smartphone, Tablet und Desktop.',
      },
      {
        q: 'Macht die KI meine Hausaufgaben?',
        a: 'Nein — und das ist Absicht. Wissn nutzt sokratische Dialoge: Die KI stellt dir Gegenfragen und hilft dir, selbst auf die Lösung zu kommen. So lernst du wirklich.',
      },
    ],
  },
  {
    category: 'Für Eltern',
    questions: [
      {
        q: 'Ist Wissn sicher für mein Kind?',
        a: 'Ja. Wissn ist DSGVO-konform, Server stehen in der EU, und es werden keine Daten an Dritte weitergegeben. Die Inhalte sind altersgerecht und werbefrei.',
      },
      {
        q: 'Kann ich den Lernfortschritt meines Kindes sehen?',
        a: 'Wissn bietet Einblick in den Lernfortschritt — so können Sie sehen, welche Themen Ihr Kind bearbeitet und wo es steht.',
      },
      {
        q: 'Was kostet Wissn?',
        a: 'Wissn kann kostenlos getestet werden. Schullizenzen sind auf Anfrage verfügbar — schreiben Sie uns einfach über die Kontaktseite.',
      },
    ],
  },
  {
    category: 'Für Schulen',
    questions: [
      {
        q: 'Wie funktioniert die Integration in unsere Schule?',
        a: 'Wissn lässt sich einfach in bestehende Schul-IT integrieren. Wir unterstützen Sie beim Setup und bieten Schulungen für Lehrkräfte an.',
      },
      {
        q: 'Gibt es Support für Schulen?',
        a: 'Ja — Schulen erhalten einen persönlichen Ansprechpartner, Onboarding-Unterstützung und laufenden Support.',
      },
      {
        q: 'Ist Wissn DSGVO-konform?',
        a: '100%. Server in der EU, keine Weitergabe an Dritte, Auftragsverarbeitungsvertrag (AVV) auf Wunsch. Wissn erfüllt alle Anforderungen für den Einsatz an Schulen.',
      },
    ],
  },
  {
    category: 'Technik',
    questions: [
      {
        q: 'Welche Browser werden unterstützt?',
        a: 'Wissn funktioniert in allen modernen Browsern — Chrome, Firefox, Safari und Edge. Wir empfehlen die jeweils aktuelle Version.',
      },
      {
        q: 'Brauche ich eine Internetverbindung?',
        a: 'Ja, Wissn ist eine Web-Anwendung und benötigt eine aktive Internetverbindung. Eine stabile Verbindung sorgt für das beste Erlebnis.',
      },
      {
        q: 'Wie werden meine Daten geschützt?',
        a: 'Alle Daten werden verschlüsselt übertragen und auf Servern in der EU gespeichert. Wir speichern nur, was fürs Lernen nötig ist, und geben keine Daten an Dritte weiter.',
      },
    ],
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer border-none"
      >
        <span className="text-[15px] font-medium text-slate-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-sm text-slate-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  useSEO({
    title: 'FAQ',
    description: 'Häufig gestellte Fragen zu Wissn — für Schüler, Eltern und Schulen.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-600 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            Häufig gestellte <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Fragen</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Alles, was Sie über Wissn wissen möchten — übersichtlich und ehrlich beantwortet.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map(({ category, questions }) => (
              <div key={category}>
                <h2 className="text-xl font-bold text-slate-900 mb-4">{category}</h2>
                <div className="space-y-3">
                  {questions.map(({ q, a }) => (
                    <FAQItem key={q} question={q} answer={a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Noch Fragen?</h2>
          <p className="text-lg text-slate-500 mb-8">Schreiben Sie uns — oder probieren Sie Wissn einfach selbst aus.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg hover:shadow-xl transition-all no-underline">
              Kostenlos starten
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 transition-colors no-underline">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
