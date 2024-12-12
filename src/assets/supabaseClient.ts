import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kidgnuaeuhjdpconaiur.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZGdudWFldWhqZHBjb25haXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NjA4MTcsImV4cCI6MjA0OTUzNjgxN30.65KAFBKzn4q4EiC2DfsBiJ0evqiE5QoGcnQzabpuDt4'

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

export const supabase = createClient(supabaseUrl, supabaseAnonKey)