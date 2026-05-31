'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import type { Dict } from '@/lib/i18n'

interface HeaderProps {
  name: string
  lang: string
  nav: Dict['nav']
}

const DEFAULT_NAV = { mainWork: 'Main Work', creative: 'Creative Explorations', contact: 'Contact', allProjects: 'All Projects →', allWork: 'All Work', about: 'About', work: 'Work', resume: 'Resume' }

type NavLink = { href: string; label: string; external?: boolean }

export default function Header({ name, lang, nav }: HeaderProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const n = { ...DEFAULT_NAV, ...nav }

  const links: NavLink[] = [
    { href: '/all-work', label: n.work },
    { href: '/about', label: n.about },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href === '/all-work') return ['/all-work', '/main-work', '/other'].some(p => pathname === p || pathname.startsWith(p + '/'))
    return pathname === href || pathname.startsWith(href + '/')
  }

  const renderLink = (l: NavLink, cls: (active: boolean) => string) =>
    l.external ? (
      <a key={l.href} href={l.href} target={l.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className={cls(false)}>
        {l.label}
      </a>
    ) : (
      <Link key={l.href} href={l.href} className={cls(isActive(l.href))}>
        {l.label}
      </Link>
    )

  return (
    <>
      <header className="site-header">
        <Link href="/" className="header-logo" aria-label={name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/my-logo.svg" alt={name} className="header-logo-img" />
        </Link>

        <nav className="header-nav">
          {links.map(l => renderLink(l, active => `header-link ${active ? 'active' : ''}`))}
          <LanguageSwitcher currentLang={lang} />
        </nav>

        <button
          className="header-hamburger"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {open && (
        <div className="header-mobile-menu" onClick={() => setOpen(false)}>
          {links.map(l => renderLink(l, active => `header-mobile-link ${active ? 'active' : ''}`))}
          <div className="header-mobile-lang">
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      )}
    </>
  )
}
