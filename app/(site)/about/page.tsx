import { getSettings } from '@/lib/content'
import { getLang, getDict } from '@/lib/i18n'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michelle Liu — 關於我',
}

export default async function AboutPage() {
  const settings = await getSettings()
  const lang = await getLang()
  const d = getDict(lang).contact

  return (
    <div className="contact-page">
      <h1>{d.title}</h1>

      <div className="contact-bio">
        {d.bio.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      <div className="contact-meta">
        {[d.meta.basedIn, d.meta.role, d.meta.edu, d.meta.lang].map(([label, val]) => (
          <div key={label} className="contact-meta-row">
            <span className="contact-meta-label">{label}</span>
            <span>{val}</span>
          </div>
        ))}
      </div>

      <div className="contact-actions">
        {settings.email && (
          <a href={`mailto:${settings.email}`} className="btn btn-primary">
            {d.emailBtn}
          </a>
        )}
        {settings.resumeUrl && (
          <a href={settings.resumeUrl} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            {d.resumeBtn}
          </a>
        )}
      </div>
    </div>
  )
}
