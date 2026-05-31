/**
 * Copies images from the portfolio export folder to public/images/[slug]/
 * Run once with: npm run copy-images
 *
 * Source: /Users/ku/Downloads/portfolio_export/[folder]/images/
 * Destination: public/images/[slug]/
 */

import { cpSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')
const exportRoot = '/Users/ku/Downloads/portfolio_export'

const mapping = [
  { folder: '[品牌整合] 國際組織品牌與網站 APDI', slug: 'apdi' },
  { folder: '[品牌視覺] 軟體科技品牌視覺 Turing Space', slug: 'turing-space-brand' },
  { folder: '[品牌整合] 洗沐品牌塑造 évoke 醒沐', slug: 'evoke' },
  { folder: '[商業設計] 電商視覺與包裝 簡單 JANDAN', slug: 'jandan' },
  { folder: '[Design System] SaaS 產品設計系統建置', slug: 'design-system' },
  { folder: '[UI UX] SaaS 平台產品設計 Turing Certs', slug: 'turing-certs' },
  { folder: '[UI UX] 概念 App 設計 口袋旅行', slug: 'pocket-travel' },
  { folder: '[UI UX] Badger 徽章人', slug: 'badger' },
  { folder: '[UI UX] 北捷黑客松競賽', slug: 'mrt-hackathon' },
  { folder: '[動態影像] 雇主品牌形象影片', slug: 'employer-brand-video' },
  { folder: '[行銷設計] 品牌行銷素材集', slug: 'marketing-design' },
  { folder: '[插畫作品] 棉花糖駱駝 動畫繪製', slug: 'marshmallow-camel' },
  { folder: '[3D建模] 人森夾娃娃機', slug: 'claw-machine' },
  { folder: '[動態設計] 生活Life', slug: 'life-motion' },
  { folder: '[包裝設計] 滴雞精', slug: 'chicken-essence' },
  { folder: '[包裝設計] 禾全堂', slug: 'he-quan-tang' },
  {
    folder: '[包裝設計] 巛 chuān Taiwan incense sticks packaging design',
    slug: 'chuan-incense',
  },
  { folder: '[視覺設計] 太陽堂老店CIS更新', slug: 'taiyang-tang-cis' },
  { folder: '[視覺設計] NTUSTAA三十重聚', slug: 'ntustaa' },
]

let copied = 0
let skipped = 0

for (const { folder, slug } of mapping) {
  const src = join(exportRoot, folder, 'images')
  const dest = join(projectRoot, 'public', 'images', slug)

  if (!existsSync(src)) {
    console.log(`⚠️  Source not found: ${src}`)
    skipped++
    continue
  }

  mkdirSync(dest, { recursive: true })
  cpSync(src, dest, { recursive: true })
  console.log(`✓  ${slug} (${folder})`)
  copied++
}

console.log(`\nDone! Copied ${copied} projects, skipped ${skipped}.`)
console.log('Images are now in public/images/[slug]/')
