import { getProject, getProjects, getProjectContent, documentHasMermaid } from '@/lib/content'
import { getProjectHero, getProjectCover, getProjectCover2 } from '@/lib/images'
import { getLang, getDict } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { DocumentRenderer } from '@keystatic/core/renderer'
import ProjectCard from '@/components/ProjectCard'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return (await getProjects()).map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) return {}
  return { title: `Michelle Liu — ${project.title}` }
}

function cleanTitle(title: string): string {
  return title.replace(/^\s*\[[^\]]*\]\s*/, '').trim()
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) notFound()

  const lang = await getLang()
  const d = getDict(lang)

  const [hero, doc] = await Promise.all([
    getProjectHero(project.slug),
    getProjectContent(project.slug),
  ])

  const showMermaid = documentHasMermaid(doc)

  const displayTitle = lang === 'en' && project.titleEn ? project.titleEn : cleanTitle(project.title)
  const intro = project.intro || project.description
  const impact = lang === 'en' && project.impactEn.length ? project.impactEn : project.impact
  const infoRow = [
    ['ROLE', project.role],
    ['TIME', project.time],
    ['SKILL', project.skills.join(' · ')],
  ].filter(([, v]) => v)

  // ── Related projects: same category first, then nearest by order ──
  const others = (await getProjects()).filter(p => p.slug !== project.slug)
  const ranked = others
    .map(p => ({
      p,
      score:
        (p.category === project.category ? 0 : 10) +
        (p.template === project.template ? 0 : 2) +
        Math.abs(p.order - project.order) / 100,
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map(r => r.p)

  const related = await Promise.all(
    ranked.map(async p => ({
      slug: p.slug,
      title: lang === 'en' && p.titleEn ? p.titleEn : p.title,
      tags: p.tags,
      outcome: lang === 'en' && p.outcomeEn ? p.outcomeEn : p.outcome,
      coverImage: await getProjectCover(p.slug),
      coverImage2: await getProjectCover2(p.slug),
    }))
  )

  return (
    <>
      {/* ── Full-bleed hero ── */}
      <div className={`project-hero${hero ? '' : ' project-hero--empty'}`}>
        {hero ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={hero} alt={project.title} className="project-hero-img" />
        ) : (
          <div className="project-hero-fallback">
            <span>{cleanTitle(project.title)}</span>
          </div>
        )}
      </div>

      <article className="project-detail">
        <header className="project-header">
          <p className="project-header-tags">{project.tags.join(' / ')}</p>
          <h1 className="project-header-title">{displayTitle}</h1>
          {intro && <p className="project-header-desc">{intro}</p>}
        </header>

        {infoRow.length > 0 && (
          <div className="project-inforow">
            {infoRow.map(([label, value]) => (
              <div key={label} className="project-info-col">
                <span className="project-info-label">{label}</span>
                <span className="project-info-value">{value}</span>
              </div>
            ))}
          </div>
        )}

        {impact.length > 0 && (
          <div className="project-impact">
            <h2 className="project-impact-title">{d.project.impact}</h2>
            <ul>
              {impact.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
        )}

        {doc && (
          <div className="project-content">
            <DocumentRenderer
              document={doc}
              renderers={{
                block: {
                  image: ({ src, alt }) => (
                    <div className="content-images">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={alt || ''} loading="lazy" />
                    </div>
                  ),
                  code: ({ children, language }) => {
                    if (language === 'mermaid') return <div className="mermaid">{children}</div>
                    const imgMatch = children.trim().match(/^img:([\d,.\w]+)$/)
                    if (imgMatch) {
                      const parts = imgMatch[1].split(',').map(n => n.trim())
                      return (
                        <div className={`content-images content-images--${parts.length > 1 ? 'row' : 'single'}`}>
                          {parts.map(part => {
                            const hasExt = /\.\w+$/.test(part)
                            const num = hasExt ? part.replace(/\.\w+$/, '') : part
                            const ext = hasExt ? part.match(/\.(\w+)$/)?.[1] : 'png'
                            const padded = num.padStart(3, '0')
                            const src = `/images/${project.slug}/image-${padded}.${ext}`
                            // eslint-disable-next-line @next/next/no-img-element
                            return <img key={part} src={src} alt={`${cleanTitle(project.title)} ${num}`} loading="lazy" />
                          })}
                        </div>
                      )
                    }
                    return <pre><code>{children}</code></pre>
                  },
                },
              }}
            />
          </div>
        )}
      </article>

      {/* ── You may also like ── */}
      {related.length > 0 && (
        <section className="project-related">
          <h2 className="project-related-title">{d.project.related}</h2>
          <div className="project-related-grid">
            {related.map(p => (
              <ProjectCard
                key={p.slug}
                slug={p.slug}
                title={p.title}
                year=""
                outcome={p.outcome}
                tags={p.tags}
                coverImage={p.coverImage}
                coverImage2={p.coverImage2}
              />
            ))}
          </div>
        </section>
      )}

      {showMermaid && (
        <Script
          id="mermaid-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs')
                .then(m => {
                  m.default.initialize({ startOnLoad: false, theme: 'base',
                    themeVariables: {
                      primaryColor: '#f2f2f0',
                      primaryBorderColor: '#d1d5db',
                      primaryTextColor: '#111',
                      secondaryColor: '#f2f2f0',
                      secondaryBorderColor: '#d1d5db',
                      tertiaryColor: '#f2f2f0',
                      tertiaryBorderColor: '#d1d5db',
                      lineColor: '#9CA3AF',
                      edgeLabelBackground: '#ffffff',
                    }
                  });
                  m.default.run({ querySelector: '.mermaid' });
                  setTimeout(() => {
                    document.querySelectorAll('.mermaid .node rect').forEach(el => {
                      el.setAttribute('rx', '6');
                      el.setAttribute('ry', '6');
                      el.style.fill = '#f2f2f0';
                      el.style.stroke = '#d1d5db';
                    });
                    document.querySelectorAll('.mermaid .cluster rect').forEach(el => {
                      el.setAttribute('rx', '6');
                      el.setAttribute('ry', '6');
                      el.style.fill = '#f7f7f6';
                      el.style.stroke = '#d1d5db';
                    });
                  }, 500);
                });
            `,
          }}
        />
      )}
    </>
  )
}
