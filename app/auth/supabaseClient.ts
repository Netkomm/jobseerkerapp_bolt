import { createClient } from '@supabase/supabase-js'

    // Ensure environment variables are defined
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        'Supabase URL and Anon Key must be provided in environment variables'
      )
    }

    // Validate URL format
    try {
      new URL(supabaseUrl)
    } catch (error) {
      throw new Error('Invalid Supabase URL format')
    }

    export const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
