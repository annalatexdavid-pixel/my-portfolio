'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { setLang } from '@/app/actions'

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  const toggle = () => {
    const next = currentLang === 'zh' ? 'en' : 'zh'
    startTransition(async () => {
      await setLang(next)
      router.refresh()
    })
  }

  return (
    <button
      onClick={toggle}
      disabled={pending}
      className="lang-switch"
      aria-label="Switch language"
    >
      {currentLang === 'zh' ? 'EN' : '中文'}
    </button>
  )
}
