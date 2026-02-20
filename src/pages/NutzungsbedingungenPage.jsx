import Layout, { useSEO } from '../components/Layout'

export default function NutzungsbedingungenPage() {
  useSEO({
    title: 'Nutzungsbedingungen',
    description: 'Allgemeine Nutzungsbedingungen der Wissn Lernplattform.',
  })

  return (
    <Layout>
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Nutzungsbedingungen</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Geltungsbereich</h2>
              <p>
                Diese Nutzungsbedingungen gelten für die Nutzung der Lernplattform Wissn (nachfolgend „Plattform"),
                betrieben von der Wissn UG (haftungsbeschränkt) i.G., Eugen-d'Albert-Straße 11, 01640 Coswig
                (nachfolgend „Anbieter").
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Registrierung und Nutzerkonto</h2>
              <p>
                Für die Nutzung der Plattform ist eine Registrierung erforderlich. Der Nutzer verpflichtet sich,
                wahrheitsgemäße Angaben zu machen und seine Zugangsdaten vertraulich zu behandeln. Bei Minderjährigen
                ist die Zustimmung eines Erziehungsberechtigten erforderlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Leistungen der Plattform</h2>
              <p>
                Die Plattform bietet KI-gestützte Lernwerkzeuge, darunter einen Chat-Tutor, Mindmaps und
                personalisierte Lernpläne. Der Anbieter bemüht sich um eine hohe Verfügbarkeit, übernimmt
                jedoch keine Garantie für ununterbrochenen Zugang.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Pflichten des Nutzers</h2>
              <p>
                Der Nutzer verpflichtet sich, die Plattform nicht missbräuchlich zu nutzen, insbesondere keine
                rechtswidrigen Inhalte zu erstellen oder zu verbreiten. Der Nutzer ist für alle Aktivitäten
                unter seinem Konto verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Datenschutz</h2>
              <p>
                Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
                <a href="/datenschutz" className="text-wissn-green hover:text-wissn-green-dark no-underline">
                  Datenschutzerklärung
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Haftungsbeschränkung</h2>
              <p>
                Der Anbieter haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.
                Die Haftung für leichte Fahrlässigkeit ist, soweit gesetzlich zulässig, ausgeschlossen.
                Insbesondere übernimmt der Anbieter keine Haftung für die inhaltliche Richtigkeit der KI-generierten
                Lerninhalte.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Kündigung</h2>
              <p>
                Der Nutzer kann sein Konto jederzeit löschen. Der Anbieter behält sich das Recht vor, Nutzerkonten
                bei Verstoß gegen diese Nutzungsbedingungen zu sperren oder zu löschen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Änderungen der Nutzungsbedingungen</h2>
              <p>
                Der Anbieter behält sich vor, diese Nutzungsbedingungen jederzeit zu ändern. Über wesentliche
                Änderungen werden registrierte Nutzer per E-Mail informiert.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Schlussbestimmungen</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser
                Nutzungsbedingungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </div>

            <p className="text-sm text-slate-400 mt-12">
              Stand: Februar 2026
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
