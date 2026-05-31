import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../keystatic.config'

export type ProjectCategory = 'product' | 'brand' | 'visual' | 'motion'
export type ProjectTemplate = 'product' | 'visual'

export interface Project {
  slug: string
  title: string
  year: string
  description: string
  section: 'main' | 'other'
  order: number
  imageCount: number
  category: ProjectCategory
  template: ProjectTemplate
  tags: string[]
  outcome: string
  outcomeEn: string
  intro: string
  role: string
  time: string
  team: string
  skills: string[]
  impact: string[]
  impactEn: string[]
}

export interface SiteSettings {
  name: string
  tagline: string
  footerText: string
  email: string
  resumeUrl: string
}

const reader = createReader(process.cwd(), keystaticConfig)

/* eslint-disable @typescript-eslint/no-explicit-any */
function toProject(slug: string, e: any): Project {
  return {
    slug,
    title: e.title || slug,
    year: e.year || '',
    description: e.description || '',
    section: (e.section || 'main') as 'main' | 'other',
    order: typeof e.order === 'number' ? e.order : 99,
    imageCount: typeof e.imageCount === 'number' ? e.imageCount : 0,
    category: (e.category || 'visual') as ProjectCategory,
    template: (e.template || 'visual') as ProjectTemplate,
    tags: Array.isArray(e.tags) ? e.tags : [],
    outcome: e.outcome || e.description || '',
    outcomeEn: e.outcomeEn || '',
    intro: e.intro || '',
    role: e.role || '',
    time: e.time || e.year || '',
    team: e.team || '',
    skills: Array.isArray(e.skills) ? e.skills : [],
    impact: Array.isArray(e.impact) ? e.impact : [],
    impactEn: Array.isArray(e.impactEn) ? e.impactEn : [],
  }
}

export async function getProjects(): Promise<Project[]> {
  const all = await reader.collections.projects.all()
  return all
    .map(({ slug, entry }) => toProject(slug, entry))
    .sort((a, b) => {
      if (a.section !== b.section) return a.section === 'main' ? -1 : 1
      return a.order - b.order
    })
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const entry = await reader.collections.projects.read(slug)
  return entry ? toProject(slug, entry) : undefined
}

export async function getMainProjects(): Promise<Project[]> {
  return (await getProjects()).filter(p => p.section === 'main')
}

export async function getOtherProjects(): Promise<Project[]> {
  return (await getProjects()).filter(p => p.section === 'other')
}

// Resolved rich-text document for the detail page body
export async function getProjectContent(slug: string): Promise<any> {
  const entry = await reader.collections.projects.read(slug)
  if (!entry) return null
  return entry.content()
}

export async function getSettings(): Promise<SiteSettings> {
  const s = await reader.singletons.settings.read()
  return {
    name: s?.name || 'Michelle Liu',
    tagline: s?.tagline || '',
    footerText: s?.footerText || '',
    email: s?.email || '',
    resumeUrl: s?.resumeUrl || '',
  }
}

// Does a resolved document contain a mermaid code block?
export function documentHasMermaid(doc: any): boolean {
  if (!Array.isArray(doc)) return false
  const walk = (nodes: any[]): boolean =>
    nodes.some(n => {
      if (n?.type === 'code' && (n?.language === 'mermaid')) return true
      return Array.isArray(n?.children) ? walk(n.children) : false
    })
  return walk(doc)
}
