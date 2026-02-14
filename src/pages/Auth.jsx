import { useState } from 'react'
import { supabase } from '../lib/supabase'
import WissnLogo from '../components/WissnLogo'
import { Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setLoading(true)

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      } else {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setSuccess('Bestätigungs-E-Mail gesendet! Bitte überprüfe dein Postfach.')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <a href="/" className="no-underline">
            <WissnLogo size={56} />
          </a>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
            {isLogin ? 'Willkommen zurück' : 'Konto erstellen'}
          </h1>
          <p className="text-sm text-slate-500 text-center mb-8">
            {isLogin
              ? 'Melde dich an, um auf deine Lernplattform zuzugreifen.'
              : 'Registriere dich, um mit dem Lernen zu beginnen.'}
          </p>

          {/* Fehler / Erfolg */}
          {error && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm mb-6">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-wissn-green-50 border border-wissn-green-100 text-wissn-green-dark text-sm mb-6">
              <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* Formular */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@schule.de"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-wissn-green focus:ring-2 focus:ring-wissn-green-50 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                Passwort
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mindestens 6 Zeichen"
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-wissn-green focus:ring-2 focus:ring-wissn-green-50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-0 bg-transparent border-none cursor-pointer text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-wissn-green text-white font-medium text-sm hover:bg-wissn-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Anmelden' : 'Registrieren'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Wechsel Login/Register */}
        <p className="text-center text-sm text-slate-500 mt-6">
          {isLogin ? 'Noch kein Konto?' : 'Bereits registriert?'}{' '}
          <button
            onClick={() => {
              setIsLogin(!isLogin)
              setError(null)
              setSuccess(null)
            }}
            className="text-wissn-green font-medium hover:text-wissn-green-dark bg-transparent border-none cursor-pointer p-0 text-sm"
          >
            {isLogin ? 'Jetzt registrieren' : 'Zur Anmeldung'}
          </button>
        </p>

        {/* Zurück zur Homepage */}
        <p className="text-center text-sm text-slate-400 mt-3">
          <a href="/" className="hover:text-slate-600 transition-colors no-underline">
            &larr; Zurück zur Startseite
          </a>
        </p>
      </div>
    </div>
  )
}
