import Layout, { useSEO } from '../components/Layout'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function KontaktPage() {
  useSEO({
    title: 'Kontakt',
    description: 'Kontaktiere das Wissn-Team — wir freuen uns auf deine Nachricht.',
  })

  const contacts = [
    {
      name: 'Laurens Samberg',
      role: 'Geschäftsführer',
      email: 'laurens.samberg@wissn-ai.de',
      phone: '+49 157 75210572',
    },
    {
      name: 'Felix Maurer',
      role: 'Geschäftsführer',
      email: 'felix.maurer@wissn-ai.de',
      phone: '+49 160 90910550',
    },
  ]

  return (
    <Layout>
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Kontakt</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Du hast Fragen zu Wissn oder möchtest ein Angebot für deine Schule?<br />
              Wir freuen uns auf deine Nachricht.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {contacts.map(({ name, role, email, phone }) => (
              <div key={name} className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg hover:border-slate-300 transition-all">
                <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
                <p className="text-sm text-slate-500 mb-5">{role}</p>
                <div className="space-y-3">
                  {email && (
                    <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-wissn-green transition-colors no-underline">
                      <Mail className="w-4 h-4 text-wissn-green shrink-0" />
                      {email}
                    </a>
                  )}
                  {phone && (
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-wissn-green transition-colors no-underline">
                      <Phone className="w-4 h-4 text-wissn-green shrink-0" />
                      {phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-7">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-wissn-green shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Adresse</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Wissn UG (haftungsbeschränkt) i.G.<br />
                  Eugen-d'Albert-Straße 11<br />
                  01640 Coswig
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
