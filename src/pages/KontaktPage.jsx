import Layout, { useSEO } from '../components/Layout'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function KontaktPage() {
  useSEO({
    title: 'Kontakt',
    description: 'Kontaktiere das Wissn-Team. Wir freuen uns auf deine Nachricht.',
  })

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Kontakt
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-16">
              Hast du Fragen, Feedback oder möchtest eine Schullizenz anfragen? Wir freuen uns auf deine Nachricht.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <Reveal direction="left" delay={0} className="text-center p-8 rounded-2xl border border-slate-200 bg-white">
              <div className="w-12 h-12 rounded-xl bg-wissn-green-50 flex items-center justify-center mx-auto mb-5">
                <Mail className="w-6 h-6 text-wissn-green" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">E-Mail</h3>
              <a href="mailto:laurens.samberg@wissn-ai.de" className="text-wissn-green hover:underline no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 rounded">laurens.samberg@wissn-ai.de</a>
            </Reveal>
            <Reveal direction="right" delay={100} className="text-center p-8 rounded-2xl border border-slate-200 bg-white">
              <div className="w-12 h-12 rounded-xl bg-wissn-green-50 flex items-center justify-center mx-auto mb-5">
                <Phone className="w-6 h-6 text-wissn-green" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Telefon</h3>
              <a href="tel:+4915775210572" className="text-slate-500 hover:text-slate-700 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2 rounded">+49 157 75210572</a>
            </Reveal>
          </div>

          <Reveal direction="right" className="max-w-xl mx-auto text-center">
            <a
              href="mailto:laurens.samberg@wissn-ai.de"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-wissn-green-btn text-white font-semibold text-lg hover:bg-wissn-green-dark active:scale-[0.98] transition-all no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2"
            >
              Schreib uns
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a href="https://instagram.com/wissn.de" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2" aria-label="Wissn auf Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://tiktok.com/@wissn.de" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wissn-green focus-visible:ring-offset-2" aria-label="Wissn auf TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
