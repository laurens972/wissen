import Layout, { useSEO } from '../components/Layout'

export default function ImpressumPage() {
  useSEO({
    title: 'Impressum',
    description: 'Impressum von Wissn: Angaben gemäß § 5 DDG.',
  })

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Impressum</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Angaben gemäß § 5 DDG</h2>
              <p>Wissn-AI GbR<br />Eugen-d'Albert-Straße 11<br />01640 Coswig</p>
              <p className="mt-2"><strong>Vertreten durch:</strong><br />Laurens Samberg<br />Felix Maurer</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Kontakt</h2>
              <p>E-Mail: laurens.samberg@wissn-ai.de<br />Telefon: +49 157 75210572</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>Laurens Samberg<br />Eugen-d'Albert-Straße 11<br />01640 Coswig</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Verbraucherstreitbeilegung</h2>
              {/* Die EU-Plattform zur Online-Streitbeilegung (OS-Plattform) wurde zum
                  20. Juli 2025 eingestellt (Verordnung (EU) 2024/3228). Der Link dorthin
                  ist entfallen. Die Informationspflicht nach § 36 VSBG bleibt bestehen:
                  Es muss gesagt werden, ob wir an einem Schlichtungsverfahren teilnehmen. */}
              <p>
                Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
