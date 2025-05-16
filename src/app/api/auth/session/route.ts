import { supabase } from '@component/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data: { session }, error } = await supabase.auth.getSession()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ session })
}
 