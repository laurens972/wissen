import Layout, { useSEO } from '../components/Layout'
import { useConsent } from '../context/ConsentContext'

/* Alles, was Wissn auf dem Endgerät speichert. Diese Tabelle muss mit der
   Registry in src/lib/consent.js übereinstimmen — wer dort einen Dienst
   ergänzt, ergänzt ihn auch hier. */
const STORAGE_ROWS = [
  {
    name: 'wissn_consent',
    provider: 'Wissn',
    purpose: 'Speichert deine Datenschutz-Entscheidung, damit wir nicht erneut fragen.',
    category: 'Notwendig',
    duration: '6 Monate',
  },
  {
    name: 'sb-<projekt>-auth-token',
    provider: 'Supabase',
    purpose: 'Hält dich nach dem Login angemeldet. Wird erst gesetzt, wenn du dich anmeldest.',
    category: 'Notwendig',
    duration: 'bis zum Logout',
  },
]

export default function DatenschutzPage() {
  useSEO({
    title: 'Datenschutzerklärung',
    description:
      'Datenschutzerklärung von Wissn: welche Daten wir verarbeiten, was auf deinem Gerät gespeichert wird und welche Rechte du hast.',
  })

  const { required: consentRequired, openSettings } = useConsent()

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-sm text-slate-500 mb-10">Stand: Juli 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            {/* Art. 12 Abs. 1 DSGVO verlangt gerade gegenüber Kindern eine klare,
                einfache Sprache. Deshalb steht die Kurzfassung vorne. */}
            <div className="rounded-2xl border border-wissn-green-100 bg-wissn-green-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Kurz gesagt</h2>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>Wir verfolgen dich nicht über das Internet und verkaufen keine Daten.</li>
                <li>
                  Auf deinem Gerät speichern wir nur das, was die Seite zum Funktionieren braucht.
                </li>
                <li>Die Schriftarten liegen auf unserem Server, nicht bei Google.</li>
                <li>Du kannst diese Seite lesen, ohne dich anzumelden und ohne zuzustimmen.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Verantwortlicher</h2>
              <p>
                Wissn UG (haftungsbeschränkt) i.G.
                <br />
                Laurens Samberg
                <br />
                Eugen-d'Albert-Straße 11
                <br />
                01640 Coswig
                <br />
                E-Mail: laurens.samberg@wissn-ai.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                2. Speicherung auf deinem Endgerät
              </h2>
              <p>
                Wir speichern nur Informationen auf deinem Gerät, die für den von dir gewünschten
                Dienst <strong>unbedingt erforderlich</strong> sind. Dafür ist nach{' '}
                <strong>§ 25 Abs. 2 Nr. 2 TDDDG</strong> keine Einwilligung nötig. Die Verarbeitung
                stützt sich auf Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
              </p>
              <p className="mt-3">
                Für Analyse-, Werbe- oder Tracking-Zwecke setzen wir derzeit{' '}
                <strong>keine Cookies und keine vergleichbaren Techniken</strong> ein. Sollte sich
                das ändern, holen wir vorher deine ausdrückliche Einwilligung ein (§ 25 Abs. 1 TDDDG
                i.V.m. Art. 6 Abs. 1 lit. a DSGVO). Der Dienst wird dann erst nach deiner
                Zustimmung geladen, nicht vorher.
              </p>

              <div className="overflow-x-auto mt-5 -mx-4 sm:mx-0">
                <table className="min-w-full text-sm border border-slate-200 rounded-xl">
                  <thead className="bg-gray-50">
                    <tr className="text-left text-slate-700">
                      <th className="px-4 py-3 font-semibold">Eintrag</th>
                      <th className="px-4 py-3 font-semibold">Anbieter</th>
                      <th className="px-4 py-3 font-semibold">Zweck</th>
                      <th className="px-4 py-3 font-semibold">Kategorie</th>
                      <th className="px-4 py-3 font-semibold">Dauer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {STORAGE_ROWS.map((row) => (
                      <tr key={row.name} className="border-t border-slate-200 align-top">
                        <td className="px-4 py-3 font-mono text-xs text-slate-700">{row.name}</td>
                        <td className="px-4 py-3">{row.provider}</td>
                        <td className="px-4 py-3">{row.purpose}</td>
                        <td className="px-4 py-3">{row.category}</td>
                        <td className="px-4 py-3">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Beide Einträge liegen im lokalen Speicher (localStorage) deines Browsers. Du kannst
                sie jederzeit über die Einstellungen deines Browsers löschen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                3. Hosting und Server-Logfiles
              </h2>
              <p>
                Diese Website wird auf GitHub Pages gehostet (GitHub, Inc., 88 Colin P. Kelly Jr.
                Street, San Francisco, CA 94107, USA). Beim Aufruf der Seite verarbeitet der Hoster
                automatisch Daten, die dein Browser übermittelt: IP-Adresse, Datum und Uhrzeit des
                Zugriffs, aufgerufene Datei, Referrer-URL und User-Agent.
              </p>
              <p className="mt-3">
                Diese Verarbeitung ist technisch notwendig, um die Seite überhaupt ausliefern zu
                können, und erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an einem sicheren und stabilen Betrieb). Es findet dabei eine Übermittlung
                in die USA statt. GitHub, Inc. ist unter dem EU-US Data Privacy Framework
                zertifiziert (Art. 45 DSGVO). Auf deinem Endgerät wird dabei nichts gespeichert.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Schriftarten</h2>
              <p>
                Die Schriftart „Inter“ wird <strong>lokal von unserem Server</strong> ausgeliefert.
                Es besteht <strong>keine Verbindung zu Google Fonts</strong>. Beim Aufruf der Seite
                wird deine IP-Adresse nicht an Google übermittelt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                5. Registrierung und Anmeldung
              </h2>
              <p>
                Für die Nutzung der Lernplattform ist eine Registrierung erforderlich. Die
                Authentifizierung erfolgt über Supabase (Supabase, Inc.). Dabei verarbeiten wir
                deine E-Mail-Adresse und ein verschlüsselt gespeichertes Passwort, ausschließlich
                zur Bereitstellung des Dienstes. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (Erfüllung des Nutzungsvertrags).
              </p>
              <p className="mt-3">
                Nach der Anmeldung wird ein Anmelde-Token im lokalen Speicher deines Browsers
                abgelegt, damit du eingeloggt bleibst. Das ist für den von dir angeforderten Dienst
                unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Mit Supabase besteht ein Vertrag
                zur Auftragsverarbeitung nach Art. 28 DSGVO. Soweit dabei Daten in die USA
                übermittelt werden, geschieht dies auf Grundlage der Standardvertragsklauseln
                (Art. 46 DSGVO).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                6. Eingebettete Lern-App
              </h2>
              <p>
                Im Bereich „Lern-App“ binden wir unsere Lernanwendung unter der Adresse
                app.wissn-ai.de in einem Rahmen (iframe) ein. Diese Anwendung wird von uns selbst
                betrieben. Es handelt sich nicht um einen fremden Anbieter. Sie ist technisch
                jedoch eine eigenständige Anwendung mit eigenem Speicher. Die dortige Verarbeitung
                (insbesondere deine Eingaben im KI-Tutor) richtet sich nach den Angaben in dieser
                Erklärung und den Nutzungsbedingungen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Reichweitenmessung</h2>
              <p>
                Wir setzen <strong>kein Google Analytics</strong> und keine vergleichbaren
                Tracking-Dienste ein. Falls wir künftig Nutzungszahlen erheben, verwenden wir dafür
                ein cookiefreies, in der EU gehostetes Verfahren, das keine Informationen auf deinem
                Endgerät speichert oder ausliest und keine geräteübergreifenden Profile bildet.
              </p>
              <p className="mt-3">
                Sollten wir jemals einen einwilligungspflichtigen Dienst einbinden, wird dieser{' '}
                <strong>erst nach deiner ausdrücklichen Zustimmung</strong> geladen, und du wirst
                vorher über einen Hinweis-Banner gefragt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                8. Einwilligung und Widerruf
              </h2>
              <p>
                Eine Einwilligung ist immer freiwillig. Die Nutzung dieser Website ist auch ohne
                Einwilligung uneingeschränkt möglich. Dir entstehen dadurch keine Nachteile
                (Art. 7 Abs. 4 DSGVO). Eine erteilte Einwilligung kannst du jederzeit mit Wirkung
                für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Der Widerruf ist genauso einfach
                wie die Erteilung. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
                bleibt unberührt.
              </p>
              {consentRequired ? (
                <p className="mt-4">
                  <button
                    type="button"
                    onClick={openSettings}
                    className="inline-flex items-center px-5 py-2.5 rounded-xl bg-wissn-green-btn text-white text-sm font-semibold border-none cursor-pointer hover:bg-wissn-green-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
                  >
                    Cookie-Einstellungen ändern
                  </button>
                </p>
              ) : (
                <p className="mt-3 text-sm text-slate-500">
                  Aktuell ist auf dieser Website kein einwilligungspflichtiger Dienst eingebunden.
                  Es gibt daher derzeit nichts, wozu du zustimmen oder was du widerrufen müsstest.
                </p>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                9. Kinder und Jugendliche
              </h2>
              <p>
                Wissn richtet sich auch an Schülerinnen und Schüler. In Deutschland ist eine
                datenschutzrechtliche Einwilligung erst ab <strong>16 Jahren</strong> ohne
                Zustimmung der Eltern wirksam (Art. 8 DSGVO). Deshalb setzen wir gegenüber Kindern
                und Jugendlichen <strong>kein Werbe-Tracking und kein Profiling</strong> ein und
                stützen die Verarbeitung nicht auf eine Einwilligung Minderjähriger.
              </p>
              <p className="mt-3">
                Wenn du unter 16 bist und dich registrieren möchtest, sprich bitte vorher mit deinen
                Eltern oder Erziehungsberechtigten. Bei Nutzung über eine Schule erfolgt die
                Verarbeitung im Rahmen der Vereinbarung mit dem jeweiligen Schulträger.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                10. Rechte der betroffenen Personen
              </h2>
              <p>Du hast hinsichtlich deiner personenbezogenen Daten folgende Rechte:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                <li>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung deiner Rechte wende dich bitte an: laurens.samberg@wissn-ai.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Beschwerderecht</h2>
              <p>
                Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
                deiner personenbezogenen Daten zu beschweren (Art. 77 DSGVO). Für uns zuständig ist
                die Sächsische Datenschutz- und Transparenzbeauftragte in Dresden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                12. Änderungen dieser Erklärung
              </h2>
              <p>
                Wir passen diese Datenschutzerklärung an, wenn sich die verarbeiteten Daten oder die
                eingesetzten Dienste ändern. Wird dabei ein einwilligungspflichtiger Dienst
                ergänzt, fragen wir dich erneut, bevor er geladen wird.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
