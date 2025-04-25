// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dkhhkghyjkytlinqetca.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRraGhrZ2h5amt5dGxpbnFldGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NTI5MTksImV4cCI6MjA2MTEyODkxOX0.647wPm3eC9Lj_bN8zaZYQ4_qRCwbY1YtPb-lQiWG4TI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
