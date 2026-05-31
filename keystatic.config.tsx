import { config, collection, singleton, fields } from '@keystatic/core'

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Michelle Liu Portfolio' },
    navigation: {
      Pages: ['settings'],
      Content: ['projects'],
    },
  },
  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'content/settings',
      format: { data: 'yaml' },
      schema: {
        name: fields.text({ label: 'Your Name', defaultValue: 'Michelle Liu' }),
        tagline: fields.text({ label: 'Tagline' }),
        footerText: fields.text({ label: 'Footer Text' }),
        email: fields.text({ label: 'Email' }),
        resumeUrl: fields.text({ label: 'Resume URL' }),
      },
    }),
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'slug',
      path: 'content/projects/*',
      format: { data: 'yaml', contentField: 'content' },
      columns: ['title', 'order'],
      schema: {
        slug: fields.slug({ name: { label: 'Slug (URL path)' } }),
        title: fields.text({ label: '標題 Title' }),
        year: fields.text({ label: '年份 Year' }),
        description: fields.text({ label: '卡片短描述 Card description', multiline: true }),

        section: fields.select({
          label: '區段 Section',
          options: [
            { label: 'Main work', value: 'main' },
            { label: 'Creative (只在「全部」)', value: 'other' },
          ],
          defaultValue: 'main',
        }),
        order: fields.number({ label: '排序 Order（數字越小越前面）', defaultValue: 99 }),
        category: fields.select({
          label: '分類 Category',
          options: [
            { label: 'Product (UI/UX)', value: 'product' },
            { label: 'Brand', value: 'brand' },
            { label: 'Visual', value: 'visual' },
            { label: 'Motion', value: 'motion' },
          ],
          defaultValue: 'product',
        }),
        template: fields.select({
          label: '內頁模板 Template',
          options: [
            { label: 'Product case study', value: 'product' },
            { label: 'Visual / brand case study', value: 'visual' },
          ],
          defaultValue: 'product',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: '卡片類型標籤 Tags（2–3 個）',
          itemLabel: p => p.value || 'Tag',
        }),

        outcome: fields.text({ label: '卡片成果句（中）Outcome', multiline: true }),
        outcomeEn: fields.text({ label: '卡片成果句（英）Outcome EN', multiline: true }),
        titleEn: fields.text({ label: '英文標題 Title EN' }),

        intro: fields.text({ label: '內頁開場 Intro', multiline: true }),
        role: fields.text({ label: 'ROLE' }),
        time: fields.text({ label: 'TIME' }),
        team: fields.text({ label: 'TEAM' }),
        skills: fields.array(fields.text({ label: 'Skill' }), {
          label: 'SKILL（逐項）',
          itemLabel: p => p.value || 'Skill',
        }),
        impact: fields.array(fields.text({ label: 'Impact（中）', multiline: true }), {
          label: 'Impact 成果（中）',
          itemLabel: p => p.value || 'Impact',
        }),
        impactEn: fields.array(fields.text({ label: 'Impact (EN)', multiline: true }), {
          label: 'Impact 成果（英，可留空）',
          itemLabel: p => p.value || 'Impact',
        }),

        imageCount: fields.number({ label: '圖片數量（資料夾內）', defaultValue: 0 }),

        // ── Visual body editor ──
        content: fields.document({
          label: '內文 Body',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
})
