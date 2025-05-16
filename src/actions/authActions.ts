'use server'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';;

export async function loginAction({ email, password }: { email: string, password: string }) {
  const res = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.error)
  return data
}

export async function signupAction({ email, password, name }: { email: string, password: string, name: string }) {
  const res = await fetch(`${baseUrl}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.error)
  return data
}

export async function getSessionAction() {
  const res = await fetch(`${baseUrl}/api/auth/session`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.error)
  return data
}

export async function logoutAction() {
  const res = await fetch(`${baseUrl}/api/auth/logout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.error)
  return data
}
