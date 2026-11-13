/// <reference types="vite/client" />

/* ToolBox500 — Conçu et maintenu par AYI AYITE ARYUS OBATOBY. */

import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

// Vérification de la configuration Supabase
export const supabaseConfigured = Boolean(
  url &&
  key &&
  !key.includes('your_supabase_publishable_key')
)

// Initialisation sécurisée du client Supabase
export const supabase = supabaseConfigured
  ? createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null