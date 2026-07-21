import { useState } from 'react'
import Layout, { useSEO } from '../components/Layout'
import { Plus } from 'lucide-react'
import Reveal from '../components/Reveal'

const faqs = [
  {
    question: 'Was ist Wissn?',
    answer: 'Wissn ist eine Plattform, die Schulen beim Übergang vom Frontalunterricht zu freien Lernformen wie dem Lernbüro-Konzept begleitet. Schülerinnen und Schüler nutzen schon heute einen sokratischen KI-Tutor mit Quellenangaben aus dem Unterrichtsmaterial, KI-Karteikarten, Quiz, Lückentexte, Mindmaps und individuelle KI-Lernpläne. Lehrkräfte erhalten eine Lernanalyse zum Fortschritt ihrer Klassen. Das dedizierte Lernbüro-Modul mit Logbuch, Lernbausteinen und Lerncoaching entsteht aktuell gemeinsam mit unseren Pilotschulen.',
  },
  {
    question: 'Was ist ein Lernbüro?',
    answer: 'Im Lernbüro lösen sich starre Unterrichtsstunden zugunsten von selbstständiger Arbeit an Lernbausteinen. Fachlehrkräfte verantworten weiterhin Inhalte, Inputs und Bewertung, begleiten die Schüler dabei aber stärker als Lernbegleiter statt als zentrale Wissensvermittler. Am Ende eines Lernbausteins steht meist ein authentisches Lernprodukt. Wissn unterstützt diesen Ansatz schon heute mit KI-Werkzeugen wie Chat-Tutor, Karteikarten und Lernanalyse. Das dedizierte Lernbüro-Modul mit Logbuch, Lernbausteinen und Freiheitsgraden befindet sich in Entwicklung.',
  },
  {
    question: 'Ersetzt Wissn die Lehrkraft?',
    answer: 'Nein. Die Lehrkraft bleibt für Inhalte, fachliche Hilfe, Bewertung und Feedback verantwortlich. Sie wird zum Lernbegleiter beziehungsweise Lerncoach statt zum zentralen Wissensvermittler. Wissn unterstützt dabei mit einem KI-Tutor für individuelle Fragen und mit einer Lernanalyse, die Lehrkräften Einblick in den Lernfortschritt ihrer Klasse gibt.',
  },
  {
    question: 'Müssen wir sofort den ganzen Unterricht umstellen?',
    answer: 'Nein. Viele Schulen starten mit einer Pilotphase in einem einzelnen Fach oder einer Jahrgangsstufe und weiten das Lernbüro-Konzept schrittweise aus, sobald sich das Modell bewährt hat.',
  },
  {
    question: 'Was ist das Logbuch?',
    answer: 'Im Logbuch-Konzept dokumentieren Schülerinnen und Schüler ihren Lernfortschritt: welche Lernbausteine bearbeitet wurden, welche Etappen abgeschlossen sind und wie die Reflexion mit dem Lerncoach verlaufen ist. Bei Wissn liefert heute die Lernanalyse für Lehrkräfte einen vergleichbaren Überblick über den Fortschritt einzelner Schüler und Klassen. Ein dediziertes Logbuch für Schülerinnen und Schüler ist Teil des Lernbüro-Moduls, das wir aktuell mit unseren Pilotschulen entwickeln.',
  },
  {
    question: 'Was sind Freiheitsgrade?',
    answer: 'Freiheitsgrade regeln, wie viel Entscheidungsspielraum ein Schüler beim Lernen hat, etwa bei Reihenfolge, Tempo oder Arbeitsort. Sie werden zwischen Schüler und Lerncoach vereinbart und wachsen mit zunehmender Selbstständigkeit von Stufe 1 bis 3. Dieses Konzept ist Teil des Lernbüro-Moduls, das wir gemeinsam mit Pilotschulen entwickeln. Heute unterstützt Wissn selbstständiges Arbeiten bereits mit KI-Lernplänen, die individuelles Tempo und Fortschritt berücksichtigen.',
  },
  {
    question: 'Wie unterstützt Wissn bei Tests und Klassenarbeiten?',
    answer: 'Lehrkräfte können Tests in Wissn ankündigen und dabei die inhaltlichen Schwerpunkte festlegen. Schülerinnen und Schüler bereiten sich mit einer KI-gestützten Voranalyse gezielt auf diese Schwerpunkte vor. Durchführung und Benotung laufen weiterhin klassisch über die Lehrkraft. Wissn ersetzt keine Prüfungssituation, sondern unterstützt die Vorbereitung darauf. Ein Modul für selbstständige Etappen-Tests im Lernbüro-Format befindet sich in Entwicklung.',
  },
  {
    question: 'Für welche Klassenstufen ist Wissn geeignet?',
    answer: 'Wissn richtet sich an Schülerinnen und Schüler ab Klasse 5 bis zum Abitur. Der KI-Tutor, die Übungsformate und die Lernpläne passen sich dem jeweiligen Lernstand an.',
  },
  {
    question: 'Ist Wissn kostenlos?',
    answer: 'Einzelne Schülerinnen und Schüler können Wissn kostenlos mit Basisfunktionen nutzen. Schulen, die Wissn einführen möchten, schließen eine Schullizenz mit zentraler Klassen-, Fächer- und Materialverwaltung sowie Lernanalyse für Lehrkräfte ab.',
  },
  {
    question: 'Wie sieht es mit Datenschutz aus?',
    answer: 'Wissn ist DSGVO-konform gebaut: KI-Anfragen laufen über einen EU-Proxy, alle Daten werden auf Servern in der EU gespeichert. Die Anmeldung erfolgt wahlweise über VIDIS-SSO, für minderjährige Schülerinnen und Schüler holen wir die Einwilligung der Eltern nach Art. 8 DSGVO ein. Details findest du in unserer Datenschutzerklärung.',
  },
  {
    question: 'Welche Fächer und Inhalte deckt Wissn ab?',
    answer: 'Der KI-Tutor unterstützt bei den gängigen Schulfächern und arbeitet mit den Unterrichtsmaterialien, die Fachlehrkräfte hochladen, etwa als PDF, Word- oder PowerPoint-Datei. Aus diesen Materialien erstellt die KI Karteikarten, Quiz, Lückentexte und Mindmaps und zitiert bei Antworten die passenden Quellen.',
  },
  {
    question: 'Wie starte ich mit Wissn an meiner Schule?',
    answer: 'Schreib uns über die Kontaktseite. Wir vereinbaren ein Gespräch und richten gemeinsam ein Pilotprojekt für deine Schule ein.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 rounded"
      >
        <span className="text-base sm:text-lg font-semibold text-slate-900">{question}</span>
        <Plus
          className={`w-5 h-5 flex-shrink-0 text-wissn-green transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-slate-600 leading-relaxed pr-8">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  useSEO({
    title: 'FAQ',
    description: 'Häufig gestellte Fragen zu Wissn, der Plattform für Schulen auf dem Weg zum Lernbüro.',
  })

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-widest text-wissn-green font-semibold mb-4 text-center">
              FAQ
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-center">
              Häufig gestellte Fragen
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed text-center mb-14">
              Antworten auf die Fragen, die uns am häufigsten erreichen.
            </p>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <div className="border-t border-slate-200">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="text-center text-slate-500 leading-relaxed mt-14">
              Deine Frage war nicht dabei? <a href="/kontakt" className="text-wissn-green font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 rounded">Schreib uns</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
