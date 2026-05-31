import Link from 'next/link'
import { getProjects, getSettings } from '@/lib/content'
import { getLang, getDict } from '@/lib/i18n'
import { getProjectCover, getProjectCover2 } from '@/lib/images'
import WorkFilter from '@/components/WorkFilter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michelle Liu — Product & Visual Designer',
  description: 'Product & visual designer turning complex SaaS workflows, brand systems, and business goals into clear, usable, memorable experiences. Based in Taipei, Taiwan.',
}

export default async function HomePage() {
  const settings = await getSettings()
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
    <>
      {/* ─── Compact Hero ─── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <p className="home-hero-eyebrow hero-anim-1">{d.hero.eyebrow}</p>
          <h1 className="home-hero-heading hero-anim-2">{d.hero.sub}</h1>
          <div className="home-hero-roles hero-anim-3">
            {d.hero.roles.map((r, i) => (
              <p key={i} className="home-hero-role">{r}</p>
            ))}
          </div>
          <div className="home-hero-tags hero-anim-3">
            {d.hero.tags.map(t => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Work Wall ─── */}
      <section className="home-work" id="work">
        <WorkFilter
          projects={withCovers}
          label={d.work.label}
          heading={d.work.heading}
          subheading={d.work.subheading}
          tabs={d.work.tabs}
        />
      </section>

      {/* ─── Short About ─── */}
      <section className="home-about" id="about">
        <div className="home-about-inner" data-reveal>
          <p className="section-label">{d.homeAbout.label}</p>
          <p className="home-about-body">{d.homeAbout.body}</p>
          <Link href="/about" className="home-about-link">{d.homeAbout.link}</Link>
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="home-section contact-cta-section" id="contact">
        <div className="contact-cta-inner" data-reveal>
          <h2 className="contact-cta-heading">{d.contactCta.heading[0]}<br />{d.contactCta.heading[1]}</h2>
          <p className="contact-cta-sub">{d.contactCta.sub[0]}<br />{d.contactCta.sub[1]}</p>
          <div className="hero-actions contact-cta-actions">
            <Link href="/about" className="btn btn-ghost">{d.contactCta.btn3}</Link>
            <a href={`mailto:${settings.email}`} className="btn btn-primary">{d.contactCta.btn1}</a>
          </div>
        </div>
      </section>
    </>
  )
}
