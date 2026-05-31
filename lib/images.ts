import { readdir } from 'fs/promises'
import { join } from 'path'

async function listFiles(slug: string): Promise<string[]> {
  try {
    const dir = join(process.cwd(), 'public/images', slug)
    const files = await readdir(dir)
    return files
      .filter(f => /\.(png|jpg|jpeg|webp|gif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  } catch {
    return []
  }
}

async function findCover(slug: string, prefix: string): Promise<string | null> {
  const files = await listFiles(slug)
  const match = files.find(f => f.toLowerCase().replace(/\.[^.]+$/, '') === prefix)
  return match ? `/images/${slug}/${match}` : null
}

export async function getProjectImages(slug: string): Promise<string[]> {
  const files = await listFiles(slug)
  // Exclude cover/cover2 files — those are card-only
  return files
    .filter(f => !/^cover\d*\./i.test(f))
    .map(f => `/images/${slug}/${f}`)
}

export async function getProjectCover(slug: string): Promise<string | null> {
  const explicit = await findCover(slug, 'cover')
  if (explicit) return explicit
  const images = await getProjectImages(slug)
  return images[0] ?? null
}

export async function getProjectCover2(slug: string): Promise<string | null> {
  return findCover(slug, 'cover2')
}

// Hero image for the detail page: prefer hero.* → cover.* → first image
export async function getProjectHero(slug: string): Promise<string | null> {
  const hero = await findCover(slug, 'hero')
  if (hero) return hero
  return getProjectCover(slug)
}
