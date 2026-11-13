/* ToolBox500 — Conçu et maintenu par AYI AYITE ARYUS OBATOBY. */
import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined

export const supabaseConfigured = Boolean(url && key && !key.includes('your_supabase_publishable_key'))
export const supabase = supabaseConfigured && url && key ? createClient(url, key, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
}) : null
