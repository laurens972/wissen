import Layout, { useSEO } from '../components/Layout'

export default function ImpressumPage() {
  useSEO({
    title: 'Impressum',
    description: 'Impressum der Wissn UG i.G. — Angaben gemäß § 5 TMG.',
  })

  return (
    <Layout>
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Impressum</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                Wissn UG (haftungsbeschränkt) i.G.<br />
                Eugen-d'Albert-Straße 11<br />
                01640 Coswig
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Vertreten durch</h2>
              <p>
                Laurens Samberg<br />
                Felix Maurer
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:laurens.samberg@wissn-ai.de" className="text-wissn-green hover:text-wissn-green-dark no-underline">laurens.samberg@wissn-ai.de</a><br />
                Telefon: <a href="tel:+4915775210572" className="text-wissn-green hover:text-wissn-green-dark no-underline">+49 157 75210572</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Laurens Samberg<br />
                Eugen-d'Albert-Straße 11<br />
                01640 Coswig
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-wissn-green hover:text-wissn-green-dark no-underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
