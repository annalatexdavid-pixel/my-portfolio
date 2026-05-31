'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollRevealProvider() {
  const pathname = usePathname()

  useEffect(() => {
    // ── 1. Stagger children of [data-stagger] ──────────────────
    document.querySelectorAll('[data-stagger]').forEach(parent => {
      const children = parent.querySelectorAll(':scope > *')
      children.forEach((child, i) => {
        ;(child as HTMLElement).style.transitionDelay = `${i * 80}ms`
        child.setAttribute('data-reveal', '')
      })
    })

    // ── 2. Immediately reveal elements already in viewport ─────
    document.querySelectorAll('[data-reveal]').forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        el.setAttribute('data-revealed', '')
      }
    })

    // ── 3. Observe elements below the fold ────────────────────
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', '')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -48px 0px' }
    )

    document.querySelectorAll('[data-reveal]').forEach(el => {
      if (!el.hasAttribute('data-revealed')) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
