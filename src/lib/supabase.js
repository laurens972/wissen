import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xsuiumhdakdmvsqbnnvh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzdWl1bWhkYWtkbXZzcWJubnZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MDMwMTMsImV4cCI6MjA3NjQ3OTAxM30.Lp5pQ2XhoKCipP9q-Dkyt92ztNDw60M3rtrfSxLBIRE'

/**
 * localStorage, mit Rückfall auf einen Speicher im Arbeitsspeicher, wenn der
 * Browser ihn sperrt (Safari im privaten Modus wirft beim Schreiben).
 *
 * Die Verfügbarkeitsprobe läuft bewusst erst beim ersten echten Zugriff, nicht
 * schon beim Import des Moduls: Sonst würde auf JEDER Seite — auch auf
 * Impressum und Datenschutz, auch ohne Login — in den lokalen Speicher
 * geschrieben. Ohne Anmeldung fasst Wissn das Endgerät jetzt gar nicht an.
 */
const safariSafeStorage = (() => {
  // Auffangnetz für Browser, die das Schreiben sperren (Safari im privaten Modus
  // wirft bei setItem). Erst dann wird darauf umgeschaltet.
  const memory = new Map()
  let blocked = false

  return {
    getItem(key) {
      if (blocked) return memory.get(key) ?? null
      try {
        return localStorage.getItem(key)
      } catch {
        return memory.get(key) ?? null
      }
    },
    setItem(key, value) {
      memory.set(key, value)
      if (blocked) return
      try {
        localStorage.setItem(key, value)
      } catch {
        blocked = true
      }
    },
    removeItem(key) {
      memory.delete(key)
      try {
        localStorage.removeItem(key)
      } catch {
        /* nichts zu entfernen */
      }
    },
  }
})()

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'implicit',
    storage: safariSafeStorage,
  },
})
