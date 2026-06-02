'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import ProjectCard from './ProjectCard'

type Tab = 'uiux' | 'visual' | 'all'

interface ProjectItem {
  slug: string
  title: string
  year: string
  outcome: string
  outcomeEn?: string
  tags?: string[]
  category: 'product' | 'brand' | 'visual' | 'motion'
  section: 'main' | 'other'
  coverImage: string | null
  coverImage2?: string | null
}

interface WorkFilterProps {
  projects: ProjectItem[]
  label: string
  heading: string
  subheading?: string
  tabs: { uiux: string; visual: string; all: string }
}

// UI/UX  → product work
// 視覺設計 → non-product work that's strong enough to feature (section: main)
// 全部    → everything, including the hard-to-classify smaller creative pieces
function matchTab(p: ProjectItem, tab: Tab): boolean {
  if (tab === 'all') return true
  if (tab === 'uiux') return p.category === 'product'
  // visual
  return p.category !== 'product' && p.section === 'main'
}

export default function WorkFilter({ projects, label, heading, subheading, tabs }: WorkFilterProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const initialTab = (['uiux', 'visual', 'all'].includes(searchParams.get('tab') ?? '') ? searchParams.get('tab') : 'uiux') as Tab
  const [tab, setTab] = useState<Tab>(initialTab)

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (tab === 'uiux') {
      params.delete('tab')
    } else {
      params.set('tab', tab)
    }
    const qs = params.toString()
    router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false })
  }, [tab])

  const filtered = projects.filter(p => matchTab(p, tab))

  const tabList: [Tab, string][] = [
    ['uiux', tabs.uiux],
    ['visual', tabs.visual],
    ['all', tabs.all],
  ]

  return (
    <>
      <div className="work-header" data-reveal>
        <div className="work-header-top">
          <p className="section-label">{label}</p>
          {subheading && <p className="work-subheading">{subheading}</p>}
        </div>
        <div className="work-tabs" role="tablist">
          {tabList.map(([t, lbl]) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={`work-tab${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {lbl}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid work-grid-filtered" key={tab}>
        {filtered.map(project => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            year={project.year}
            outcome={project.outcome}
            tags={project.tags}
            coverImage={project.coverImage}
            coverImage2={project.coverImage2}
          />
        ))}
      </div>
    </>
  )
}
