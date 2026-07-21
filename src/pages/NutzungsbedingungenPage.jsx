import Layout, { useSEO } from '../components/Layout'

export default function NutzungsbedingungenPage() {
  useSEO({
    title: 'Nutzungsbedingungen',
    description: 'Allgemeine Nutzungsbedingungen der Lernplattform Wissn.',
  })

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Nutzungsbedingungen</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Geltungsbereich</h2>
              <p>
                Diese Nutzungsbedingungen gelten für die Nutzung der Lernplattform Wissn, betrieben von der Wissn UG (haftungsbeschränkt) i.G., Eugen-d'Albert-Straße 11, 01640 Coswig.
                Mit der Registrierung erkennen Sie diese Bedingungen an.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Registrierung</h2>
              <p>
                Für die Nutzung von Wissn ist eine Registrierung mit einer gültigen E-Mail-Adresse erforderlich.
                Sie sind verpflichtet, Ihre Zugangsdaten vertraulich zu behandeln und für alle Aktivitäten unter Ihrem Konto verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Nutzungsrechte und Pflichten</h2>
              <p>
                Wissn gewährt Ihnen ein einfaches, nicht übertragbares Recht zur Nutzung der Plattform für persönliche Bildungszwecke.
                Es ist untersagt, die Plattform für rechtswidrige Zwecke zu verwenden, automatisierte Zugriffe durchzuführen
                oder die Plattform in einer Weise zu nutzen, die den Betrieb beeinträchtigt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Haftungsbeschränkung</h2>
              <p>
                Wissn stellt Lerninhalte KI-gestützt bereit. Die generierten Inhalte dienen als Lernhilfe und ersetzen nicht die professionelle pädagogische Betreuung.
                Wissn haftet nicht für die inhaltliche Richtigkeit der KI-generierten Antworten.
                Die Haftung beschränkt sich auf Fälle von Vorsatz und grober Fahrlässigkeit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Kündigung</h2>
              <p>
                Sie können Ihr Konto jederzeit ohne Angabe von Gründen löschen.
                Wissn behält sich vor, Konten bei Verstößen gegen diese Nutzungsbedingungen zu sperren.
                Bei Kündigung werden Ihre personenbezogenen Daten gemäß der Datenschutzerklärung gelöscht.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Änderungen</h2>
              <p>
                Wissn behält sich vor, diese Nutzungsbedingungen jederzeit zu ändern.
                Über wesentliche Änderungen werden registrierte Nutzer per E-Mail informiert.
                Die fortgesetzte Nutzung nach Änderung gilt als Zustimmung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Anwendbares Recht</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Coswig (Sachsen), sofern gesetzlich zulässig.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
