
import { createClient } from '@supabase/supabase-js'

// Defining the Supabase URL and anonymous key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Creating a new Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey)
export default supabase