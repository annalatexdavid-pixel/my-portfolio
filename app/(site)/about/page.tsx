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
    <div className="about-page">
      <div className="about-layout">
        <div className="about-content">
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
            <a href={`mailto:${settings.email || 'michelle2000723@gmail.com'}`} className="btn btn-primary">
              {d.emailBtn}
            </a>
            <a
              href={settings.resumeUrl || 'https://drive.google.com/file/d/1bFIUlP9eztlB5QFBleSVTWf9zq-LGb6K/view?usp=drive_link'}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.resumeBtn}
            </a>
          </div>
        </div>

        <div className="about-photo-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-photo.webp"
            alt="Michelle Liu"
            className="about-photo"
            onError={undefined}
          />
        </div>
      </div>
    </div>
  )
}
