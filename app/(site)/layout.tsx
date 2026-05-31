import { getSettings } from '@/lib/content'
import { getLang, getDict } from '@/lib/i18n'
import Header from '@/components/Header'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings()
  const lang = await getLang()
  const d = getDict(lang)

  return (
    <div className="site-wrap">
      <Header name={settings.name} lang={lang} nav={d.nav} />
      <ScrollRevealProvider />
      <main className="main-content">
        {children}
      </main>
      <footer className="site-footer">{settings.footerText}</footer>
    </div>
  )
}
