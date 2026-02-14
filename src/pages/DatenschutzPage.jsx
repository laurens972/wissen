import Layout, { useSEO } from '../components/Layout'

export default function DatenschutzPage() {
  useSEO({
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung der Wissn UG i.G. — Informationen zur Verarbeitung personenbezogener Daten.',
  })

  return (
    <Layout>
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Datenschutzerklärung</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Verantwortlicher</h2>
              <p>
                Wissn UG (haftungsbeschränkt) i.G.<br />
                Laurens Samberg, Felix Maurer<br />
                Eugen-d'Albert-Straße 11<br />
                01640 Coswig<br />
                E-Mail: <a href="mailto:laurens.samberg@wissn-ai.de" className="text-wissn-green hover:text-wissn-green-dark no-underline">laurens.samberg@wissn-ai.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Beim Besuch unserer Website werden automatisch Informationen an den Server unserer Website gesendet.
                Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen
                werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Registrierung und Nutzerkonto</h2>
              <p>
                Für die Nutzung der Wissn-Lernplattform ist eine Registrierung erforderlich. Dabei werden folgende
                Daten erhoben:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>E-Mail-Adresse</li>
                <li>Passwort (verschlüsselt gespeichert)</li>
              </ul>
              <p className="mt-3">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Erfüllung des
                Nutzungsvertrags. Ihre Daten werden bei unserem Authentifizierungsdienstleister <strong>Supabase</strong>{' '}
                (Server in der EU) gespeichert.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Nutzung der Lernplattform</h2>
              <p>
                Bei der Nutzung der Wissn-Lernplattform werden folgende Daten verarbeitet:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Hochgeladene Dokumente (Skripte, PDFs)</li>
                <li>Chat-Verläufe mit dem KI-Tutor</li>
                <li>Erstellte Lernmaterialien (Mindmaps, Karteikarten)</li>
                <li>Lernfortschrittsdaten</li>
              </ul>
              <p className="mt-3">
                Diese Daten werden ausschließlich zur Bereitstellung der Lernfunktionen verarbeitet und nicht an
                Dritte weitergegeben. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Webanalyse mit Google Analytics 4</h2>
              <p>
                Wir nutzen Google Analytics 4 (GA4) zur Analyse der Websitenutzung. GA4 verwendet Cookies und
                ähnliche Technologien, um Informationen über die Nutzung der Website zu sammeln. Die gesammelten
                Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
              </p>
              <p className="mt-3">
                Wir haben die IP-Anonymisierung aktiviert. Ihre IP-Adresse wird von Google innerhalb der EU/des EWR
                vor der Übermittlung gekürzt. Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der Analyse des Nutzerverhaltens).
              </p>
              <p className="mt-3">
                Sie können die Erfassung durch Google Analytics verhindern, indem Sie ein Browser-Add-on installieren:{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-wissn-green hover:text-wissn-green-dark no-underline">
                  Browser-Add-on zur Deaktivierung von Google Analytics
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Hosting</h2>
              <p>
                Unsere Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
                werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
                und sonstige Daten handeln, die über eine Website generiert werden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Auskunft</strong> über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
                <li><strong>Berichtigung</strong> unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li><strong>Löschung</strong> Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li><strong>Einschränkung</strong> der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> zu verlangen (Art. 20 DSGVO)</li>
                <li><strong>Widerspruch</strong> gegen die Verarbeitung einzulegen (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
                <a href="mailto:laurens.samberg@wissn-ai.de" className="text-wissn-green hover:text-wissn-green-dark no-underline">laurens.samberg@wissn-ai.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das
                Recht auf Beschwerde bei einer Aufsichtsbehörde zu. Die für uns zuständige Aufsichtsbehörde ist:
              </p>
              <p className="mt-3">
                Sächsischer Datenschutzbeauftragter<br />
                Devrientstraße 5<br />
                01067 Dresden<br />
                <a href="https://www.saechsdsb.de" target="_blank" rel="noopener noreferrer" className="text-wissn-green hover:text-wissn-green-dark no-underline">www.saechsdsb.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Aktualität dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
