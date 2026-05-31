'use server'

import { cookies } from 'next/headers'

export async function setLang(lang: string) {
  const store = await cookies()
  store.set('lang', lang, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  })
}
