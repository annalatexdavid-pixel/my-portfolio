import fs from 'fs'
import path from 'path'
import { parse as parseYaml } from 'yaml'

export type ProjectCategory = 'product' | 'brand' | 'visual' | 'motion'
export type ProjectTemplate = 'product' | 'visual'

export interface Project {
  slug: string
  title: string
  titleEn: string
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
  introEn: string
  company: string
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

// ── Parse YAML frontmatter from .mdoc file ──────────────────────────────────
function parseFrontmatter(fileContent: string): { data: any; body: string } {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: fileContent }
  const data = parseYaml(match[1]) as any
  return { data: data || {}, body: match[2] }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function toProject(slug: string, e: any): Project {
  return {
    slug,
    title: e.title || slug,
    titleEn: e.titleEn || '',
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
    introEn: e.introEn || '',
    company: e.company || '',
    role: e.role || '',
    time: e.time || e.year || '',
    team: e.team || '',
    skills: Array.isArray(e.skills) ? e.skills : [],
    impact: Array.isArray(e.impact) ? e.impact : [],
    impactEn: Array.isArray(e.impactEn) ? e.impactEn : [],
  }
}

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')

export async function getProjects(): Promise<Project[]> {
  const files = fs.readdirSync(PROJECTS_DIR).filter(f => f.endsWith('.mdoc'))
  const projects = files.map(file => {
    const slug = file.replace(/\.mdoc$/, '')
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf8')
    const { data } = parseFrontmatter(raw)
    return toProject(slug, data)
  })
  return projects.sort((a, b) => {
    if (a.section !== b.section) return a.section === 'main' ? -1 : 1
    return a.order - b.order
  })
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const file = path.join(PROJECTS_DIR, `${slug}.mdoc`)
  if (!fs.existsSync(file)) return undefined
  const raw = fs.readFileSync(file, 'utf8')
  const { data } = parseFrontmatter(raw)
  return toProject(slug, data)
}

export async function getMainProjects(): Promise<Project[]> {
  return (await getProjects()).filter(p => p.section === 'main')
}

export async function getOtherProjects(): Promise<Project[]> {
  return (await getProjects()).filter(p => p.section === 'other')
}

// ── Rich-text content: still use Keystatic reader (only needed at build time) ─
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../keystatic.config'
const reader = createReader(process.cwd(), keystaticConfig)

export async function getProjectContent(slug: string): Promise<any> {
  try {
    const entry = await reader.collections.projects.read(slug)
    if (!entry) return null
    return entry.content()
  } catch {
    return null
  }
}

export async function getProjectContentEn(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(PROJECTS_DIR, slug, 'content-en.md')
    if (!fs.existsSync(filePath)) return null
    return fs.readFileSync(filePath, 'utf8')
  } catch {
    return null
  }
}

// ── Settings ────────────────────────────────────────────────────────────────
const SETTINGS_FILE = path.join(process.cwd(), 'content', 'settings', 'index.yaml')

export async function getSettings(): Promise<SiteSettings> {
  try {
    const raw = fs.readFileSync(SETTINGS_FILE, 'utf8')
    const s = parseYaml(raw) as any
    return {
      name: s?.name || 'Michelle Liu',
      tagline: s?.tagline || '',
      footerText: s?.footerText || '',
      email: s?.email || '',
      resumeUrl: s?.resumeUrl || '',
    }
  } catch {
    return { name: 'Michelle Liu', tagline: '', footerText: '', email: '', resumeUrl: '' }
  }
}

// ── Mermaid detection ───────────────────────────────────────────────────────
export function documentHasMermaid(doc: any): boolean {
  if (!Array.isArray(doc)) return false
  const walk = (nodes: any[]): boolean =>
    nodes.some(n => {
      if (n?.type === 'code' && n?.language === 'mermaid') return true
      return Array.isArray(n?.children) ? walk(n.children) : false
    })
  return walk(doc)
}
