import { supabase } from '@component/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function POST() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ success: true })
}
 