import { getProjects } from '@/lib/content'
import { getProjectCover, getProjectCover2 } from '@/lib/images'
import { getLang, getDict } from '@/lib/i18n'
import WorkFilter from '@/components/WorkFilter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michelle Liu — All Work',
}

export default async function AllWorkPage() {
  const lang = await getLang()
  const d = getDict(lang)

  const withCovers = await Promise.all(
    (await getProjects()).map(async p => ({
      slug: p.slug,
      title: p.title,
      year: p.year,
      category: p.category,
      section: p.section,
      tags: p.tags,
      outcome: lang === 'en' && p.outcomeEn ? p.outcomeEn : p.outcome,
      coverImage: await getProjectCover(p.slug),
      coverImage2: await getProjectCover2(p.slug),
    }))
  )

  return (
    <section className="home-work all-work-page">
      <WorkFilter
        projects={withCovers}
        label={d.work.label}
        heading={d.work.heading}
        subheading={d.work.subheading}
        tabs={d.work.tabs}
      />
    </section>
  )
}
