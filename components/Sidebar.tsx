'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

interface Project {
  slug: string
  title: string
  section: 'main' | 'other'
}

interface SidebarProps {
  settings: { name: string; tagline: string }
  mainProjects: Project[]
  otherProjects: Project[]
}

const GALLERY_PATHS = new Set(['/', '/main-work', '/other', '/contact'])

export default function Sidebar({ settings, mainProjects, otherProjects }: SidebarProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const autoHide = !GALLERY_PATHS.has(pathname)

  // Add body class so main-content can go full-width on project pages
  useEffect(() => {
    document.body.classList.toggle('project-page', autoHide)
    return () => document.body.classList.remove('project-page')
  }, [autoHide])

  // Close sidebar when navigating away
  useEffect(() => {
    setSidebarVisible(false)
    setMobileOpen(false)
  }, [pathname])

  const isActive = (slug: string) =>
    pathname === `/${slug}` || pathname === `/${slug}/`

  const close = () => setMobileOpen(false)

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="hamburger-btn"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={close}
      />

      {/* Hover trigger strip — only on project pages (desktop) */}
      {autoHide && (
        <div
          className="sidebar-trigger"
          onMouseEnter={() => setSidebarVisible(true)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`sidebar ${autoHide && !sidebarVisible ? 'sidebar-auto-hidden' : ''} ${mobileOpen ? 'open' : ''}`}
        onMouseEnter={() => autoHide && setSidebarVisible(true)}
        onMouseLeave={() => autoHide && setSidebarVisible(false)}
      >
        <div className="mb-4">
          <Link href="/main-work" onClick={close} className="sidebar-logo-text block">
            YU HSUAN
          </Link>
          {settings.tagline && (
            <p className="sidebar-tagline">{settings.tagline}</p>
          )}
        </div>

        <div className="sidebar-nav">
          <div className="nav-group">
            <Link
              href="/main-work"
              onClick={close}
              className={`nav-group-label block hover:text-black transition-colors ${pathname === '/main-work' ? 'text-black' : ''}`}
            >
              Main Work
            </Link>
            {mainProjects.map(p => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                onClick={close}
                className={`nav-item ${isActive(p.slug) ? 'active' : ''}`}
              >
                {p.title}
              </Link>
            ))}
          </div>

          <div className="nav-group">
            <Link
              href="/other"
              onClick={close}
              className={`nav-group-label block hover:text-black transition-colors ${pathname === '/other' ? 'text-black' : ''}`}
            >
              Creative Explorations
            </Link>
            {otherProjects.map(p => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                onClick={close}
                className={`nav-item ${isActive(p.slug) ? 'active' : ''}`}
              >
                {p.title}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={close}
            className={`nav-contact ${pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  )
}
