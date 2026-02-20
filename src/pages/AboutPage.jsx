import Layout, { useSEO } from '../components/Layout'
import {
  ArrowRight, MapPin, Rocket, GraduationCap, Users, Heart, Lightbulb,
} from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    color: 'from-amber-400 to-orange-500',
    title: 'Verstehen statt Auswendiglernen',
    description: 'Wir glauben, dass echtes Lernen bedeutet, Zusammenhänge zu begreifen — nicht Fakten kurz vor der Klausur reinzuprügeln.',
  },
  {
    icon: GraduationCap,
    color: 'from-blue-400 to-indigo-500',
    title: 'Direkt für Schulen gebaut',
    description: 'Wissn ist keine Consumer-App, die irgendwann auch Schulen bedient. Wir haben von Tag 1 an für den Schulkontext entwickelt.',
  },
  {
    icon: Heart,
    color: 'from-pink-400 to-rose-500',
    title: 'Aus eigener Erfahrung',
    description: 'Wir kennen das Problem selbst — deswegen bauen wir die Lösung, die wir uns damals gewünscht hätten.',
  },
]

export default function AboutPage() {
  useSEO({
    title: 'Über uns',
    description: 'Wissn ist ein junges Startup aus Sachsen — unterstützt vom YFN und der Entrepreneurship Talent Academy.',
  })

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Über uns
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            Wir machen Schluss <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-500 to-wissn-green bg-clip-text text-transparent">mit Bulimielernen</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Wissn ist ein junges Startup aus Sachsen mit einer Mission: Lernen so zu verändern,
            dass Schüler Stoff wirklich verstehen — statt ihn nur für die nächste Klausur auswendig zu lernen.
          </p>
        </div>
      </section>

      {/* Unsere Geschichte */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Unsere Geschichte</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Wir kennen das alle: Vor der Klausur wird tagelang gepaukt, alles irgendwie ins
              Kurzzeitgedächtnis geprügelt — und zwei Wochen später ist alles wieder weg.
              <strong className="text-slate-900"> Bulimielernen.</strong> Das war bei uns nicht anders.
            </p>
            <p>
              Irgendwann haben wir uns gefragt: Warum gibt es keine Plattform, die Schülern wirklich
              hilft, Stoff zu verstehen? Eine, die nicht nur Erklärvideos abspielt, sondern aktiv mit
              dir arbeitet. Die nachfragt, herausfordert und sich an dich anpasst.
            </p>
            <p>
              So entstand Wissn — eine universelle KI-Lernplattform, gebaut direkt für Schulen.
              Mit einem Chat-Tutor, der sokratische Dialoge führt, automatischen Mindmaps,
              Karteikarten und allem, was nachhaltiges Lernen braucht.
            </p>
          </div>
        </div>
      </section>

      {/* Unterstützer */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Wer hinter uns steht</h2>
            <p className="text-lg text-slate-500">Wissn wird von starken Partnern aus dem sächsischen Gründer-Ökosystem unterstützt.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shrink-0 shadow-md">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">YFN — Young Founders Network</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Das Young Founders Network ist deutschlandweit tätig und unterstützt junge Gründer
                    auf ihrem Weg. Als Teil des Netzwerks profitieren wir von einer starken Community
                    und wertvollen Ressourcen.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Entrepreneurship Talent Academy</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Die Entrepreneurship Talent Academy hat uns geholfen, die erste Idee für Wissn
                    zu entwickeln — von der groben Vision zur konkreten Geschäftsidee.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-md">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <p className="text-slate-500 font-medium">Gegründet in Sachsen</p>
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Was uns antreibt</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, color, title, description }) => (
              <div key={title} className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Lust, Wissn auszuprobieren?</h2>
          <p className="text-lg text-slate-500 mb-8">Teste unsere Plattform kostenlos — und erlebe, wie Lernen anders geht.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/auth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-wissn-green text-white font-semibold text-lg hover:shadow-xl transition-all no-underline">
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
