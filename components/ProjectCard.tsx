'use client'

import Link from 'next/link'

interface ProjectCardProps {
  slug: string
  title: string
  year: string
  outcome: string
  tags?: string[]
  coverImage: string | null
  coverImage2?: string | null
}

// Strip all bracket tags except [AI Builder]
function cleanTitle(title: string): string {
  return title.replace(/^\s*\[([^\]]*)\]\s*/, (match, tag) =>
    tag.trim() === 'AI Builder' ? match : ''
  ).trim()
}

export default function ProjectCard({ slug, title, year, outcome, tags = [], coverImage, coverImage2 }: ProjectCardProps) {
  return (
    <Link href={`/${slug}`} className="project-card" target="_blank" rel="noopener noreferrer">
      <div className="project-card-image-wrap">
        {coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={coverImage} alt={title} className="project-card-image" />
        ) : (
          <div className="project-card-image project-card-image--empty" />
        )}
        {coverImage2 && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={coverImage2} alt="" aria-hidden="true" className="project-card-image project-card-image-2" />
        )}
      </div>
      <div className="project-card-info">
        {tags.length > 0 && (
          <div className="project-card-tags">{tags.join(' / ')}</div>
        )}
        <div className="project-card-title">{cleanTitle(title)}</div>
        {outcome && <div className="project-card-desc">{outcome}</div>}
      </div>
    </Link>
  )
}
