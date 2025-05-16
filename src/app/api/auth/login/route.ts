import { supabase } from '@component/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.log('error triggered');
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
  return NextResponse.json({ session: data.session, user: data.user })
}
