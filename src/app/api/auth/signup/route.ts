import { supabase } from '@component/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, password, name } = await req.json()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ session: data.session, user: data.user })
}
