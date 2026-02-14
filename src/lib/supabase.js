import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xsuiumhdakdmvsqbnnvh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzdWl1bWhkYWtkbXZzcWJubnZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MDMwMTMsImV4cCI6MjA3NjQ3OTAxM30.Lp5pQ2XhoKCipP9q-Dkyt92ztNDw60M3rtrfSxLBIRE'

// Safari-sicherer Storage-Wrapper (privater Modus blockiert localStorage)
const safariSafeStorage = (() => {
  try {
    const test = '__storage_test__'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return localStorage
  } catch {
    // Fallback: In-Memory-Storage wenn localStorage blockiert ist
    const store = {}
    return {
      getItem: (key) => store[key] ?? null,
      setItem: (key, value) => { store[key] = value },
      removeItem: (key) => { delete store[key] },
    }
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
