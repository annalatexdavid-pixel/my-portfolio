import { cookies } from 'next/headers'

export type Lang = 'zh' | 'en'

export async function getLang(): Promise<Lang> {
  try {
    const store = await cookies()
    return store.get('lang')?.value === 'en' ? 'en' : 'zh'
  } catch {
    return 'zh'
  }
}

// ─────────────────────────────────────────────
// Dictionaries
// ─────────────────────────────────────────────
const dict = {
  zh: {
    nav: {
      mainWork: '主要作品',
      creative: '創意探索',
      contact: '聯絡',
      allProjects: '所有作品 →',
      allWork: '所有作品',
      about: '關於我',
      work: '所有作品',
      resume: '履歷',
    },
    hero: {
      eyebrow: '我是 Michelle Liu，從品牌識別到產品體驗的視覺全端設計師。',
      heading: ['用設計，', '連結品牌、產品與人。'],
      sub: '喜歡接觸多元領域，享受在品牌、產品與商業之間切換\n做設計時，我習慣先好奇「為什麼這樣做」，再動手！',
      roles: [
        'Designing + vibe coding @ Turing Space',
        'Studying interaction design @ NTUST',
      ],
      cta1: '查看作品',
      cta2: '與我聯繫',
      tags: ['產品設計', '視覺設計', 'B2B2C SaaS'],
    },
    about: {
      label: '關於我',
      heading: ['我的優勢，', '是能把設計做到完整。'],
      p1: '我的設計經歷橫跨品牌識別、UI/UX、數位行銷、包裝與動態設計。比起只專精單一領域，我更擅長在不同設計類型之間靈活切換——而我相信，正是這份跨域的廣度，讓我能把一個專案從頭到尾做得完整。',
      p2: '我目前在美商 B2B SaaS 公司圖靈空間（Turing Space）擔任產品設計師，負責兩款 SaaS 產品的完整使用者體驗：從使用者研究、易用性測試，到設計系統的建立與維護，並在敏捷開發流程中與 PM、工程師密切協作。至今累積了 3 次大型功能改版，以及 2 次從零打造新產品的經驗。',
      skills: ['UI / UX 設計', '產品設計', '品牌識別', '設計系統', 'Figma', '使用者研究', '包裝設計', '動態設計', '數位行銷', 'HTML / CSS'],
    },
    work: {
      label: '精選作品',
      heading: '精選作品',
      subheading: '我參與打造的產品體驗、品牌系統與商業視覺。',
      tabs: { uiux: 'UI/UX', visual: '視覺設計', all: '全部' },
    },
    homeAbout: {
      label: '關於我',
      body: '我是 Michelle Liu，目前在 Turing Space 擔任產品設計師\n我的經驗領域橫跨 SaaS 產品、電商保養及洗沐品牌、國際組織、線上課程\n比起分工精細的產出，我更擅長也喜歡把一個專案從問題、策略、介面到視覺完整地串起來！',
      link: '更認識我 →',
    },
    project: {
      impact: 'Impact',
      prev: '上一個',
      next: '下一個',
      allWork: '回作品牆',
      related: 'You may also like',
    },
    services: {
      label: '我能做什麼',
      heading: ['從需求到上線，', '我能一個人扛起全程。'],
      items: [
        {
          num: '01',
          title: '產品與 UI/UX 設計',
          desc: '橫跨 Web、iOS、Android 與後台儀表板的產品設計。從使用者研究、易用性測試、線框稿、互動原型，一路做到高保真交付——並且始終把開發的可行性放在心上。',
        },
        {
          num: '02',
          title: '品牌識別與視覺設計',
          desc: '從 Logo 系統、品牌規範到整體視覺語言，幫品牌建立鮮明而一致的形象，並延伸應用到數位、印刷與各種實體接觸點。',
        },
        {
          num: '03',
          title: '包裝設計與印刷',
          desc: '從概念發想到量產落地的零售包裝設計，涵蓋盒型結構、標籤、禮盒與吊牌。我會直接和廠商溝通、確認刀模、挑選材質、控管成本，在品牌質感與預算之間找到平衡。',
        },
        {
          num: '04',
          title: '數位行銷與動態設計',
          desc: '社群素材、數位廣告、EDM 與活動主視覺，並依據 A/B 測試的成效持續優化。也包含動態圖像、影片剪輯，以及讓介面和行銷內容動起來的動畫設計。',
        },
      ],
    },
    contactCta: {
      label: '聯絡我',
      heading: ['如果你也正在', '找尋一位彈性、開放的多元設計師'],
      sub: ['我目前正在尋找全職產品設計職缺，以及部分接案合作。', '⋯⋯如果貴團隊重視設計、成長步調快速，也擁有多元開放的工作職能，\n希望我能有機會與您聊聊：）！'],
      btn1: '聯絡方式',
      btn2: '下載履歷',
      btn3: '看更多關於我',
    },
    contact: {
      title: '關於我',
      bio: [
        '我是劉于瑄 Michelle Liu，目前在美商 B2B SaaS 公司（Turing Space）擔任產品設計師，負責兩款數位信任產品的完整使用者體驗——從使用者研究、易用性測試，到設計系統的維護，並在敏捷開發流程中與 PM 和工程師緊密合作。',
        '到目前為止，我累積了 3 次大型功能改版，以及 2 次從零打造新產品的完整經驗。我最大的優勢是廣度：多數設計師會專注在單一領域，而我能在品牌識別、UI/UX、數位行銷、零售包裝與動態設計之間自在切換，把一個專案完整地串起來。',
        '我畢業於國立台灣科技大學設計系，職涯走過電商、SaaS 科技、國際組織（APDI）、醫美與線上教育等不同產業，這些經歷讓我擁有一般設計師比較少見的跨領域視角。我對前端也不陌生，具備 HTML/CSS 基礎，並會用 Vibe Coding 直接做出原型、驗證介面。',
        '我是個主動、抗壓、重視執行的人，始終相信好設計的標準是「有沒有真的解決問題」，而不只是畫面漂不漂亮。我也習慣跨部門溝通，能向 PM 和 RD 清楚說明設計背後的考量，也能和品牌端討論策略方向。',
      ],
      meta: {
        basedIn: ['所在地', '台灣・台北'],
        role: ['現職', '產品設計師 ＠ Turing Space'],
        edu: ['學歷', '國立台灣科技大學 設計系'],
        lang: ['語言', '中文（母語）・英文（流利）'],
      },
      emailBtn: '寄信給我',
      resumeBtn: '個人簡歷',
    },
  },

  en: {
    nav: {
      mainWork: 'Main Work',
      creative: 'Creative Explorations',
      contact: 'Contact',
      allProjects: 'All Projects →',
      allWork: 'All Work',
      about: 'About',
      work: 'Work',
      resume: 'Resume',
    },
    hero: {
      eyebrow: 'Michelle Liu, From brand identity to product experience — a full-stack visual designer.',
      heading: ['Design that connects', 'brand, product, and people.'],
      sub: 'I turn complex SaaS workflows, brand systems, and business goals into clear, usable, memorable experiences.',
      roles: [
        'Designing + vibe coding @ Turing Space',
        'Studying interaction design @ NTUST',
      ],
      cta1: 'View Work',
      cta2: 'Get in Touch',
      tags: ['Product Design', 'Visual Design', 'B2B2C SaaS'],
    },
    about: {
      label: 'About',
      heading: ['My strength is', 'making design complete.'],
      p1: "My experience spans brand identity, UI/UX, digital marketing, packaging, and motion design. Rather than specialising in a single area, I'm better at moving between different kinds of design — and I believe it's that breadth that lets me take a project all the way through, start to finish.",
      p2: "I'm currently a Product Designer at Turing Space, a US-founded B2B SaaS company, where I own the full experience for two SaaS products: from user research and usability testing to building and maintaining the design system, working closely with PMs and engineers in an agile process. So far I've led 3 major feature redesigns and built 2 products from the ground up.",
      skills: ['UI / UX Design', 'Product Design', 'Brand Identity', 'Design System', 'Figma', 'User Research', 'Packaging Design', 'Motion Design', 'Digital Marketing', 'HTML / CSS'],
    },
    work: {
      label: 'Selected Work',
      heading: 'Selected Work',
      subheading: "Product, brand, and visual systems I've built.",
      tabs: { uiux: 'UI/UX', visual: 'Visual', all: 'All' },
    },
    homeAbout: {
      label: 'About',
      body: "I'm Michelle Liu, currently a Product Designer at Turing Space. My experience spans SaaS products, e-commerce skincare and bath-care brands, international organizations, and online education. More than narrowly-scoped deliverables, I'm better at — and genuinely enjoy — carrying a project all the way through: from problem and strategy to interface and final visuals.",
      link: 'Get to know me →',
    },
    project: {
      impact: 'Impact',
      prev: 'Previous',
      next: 'Next',
      allWork: 'All Work',
      related: 'You may also like',
    },
    services: {
      label: 'What I Do',
      heading: ['From the first brief to launch,', 'I can carry it all.'],
      items: [
        {
          num: '01',
          title: 'Product & UI/UX Design',
          desc: 'Product design across web, iOS, Android, and admin dashboards — from user research, usability testing, wireframes, and interactive prototypes all the way to high-fidelity handoff, always with an eye on what engineering can realistically build.',
        },
        {
          num: '02',
          title: 'Brand Identity & Visual Design',
          desc: 'From logo systems and brand guidelines to a complete visual language, I help brands build a clear, consistent identity — and extend it across digital, print, and physical touchpoints.',
        },
        {
          num: '03',
          title: 'Packaging & Print',
          desc: 'Retail packaging from concept to mass production, covering box structures, labels, gift sets, and hang tags. I talk to vendors directly, check die-lines, choose materials, and manage costs — finding the balance between brand quality and budget.',
        },
        {
          num: '04',
          title: 'Digital Marketing & Motion',
          desc: 'Social content, digital ads, EDMs, and event key visuals, refined through A/B testing. Also motion graphics, video editing, and the animation that brings interfaces and campaigns to life.',
        },
      ],
    },
    contactCta: {
      label: 'Contact',
      heading: ["If you're looking for", 'a versatile, open-minded designer'],
      sub: ["I'm currently looking for a full-time product design role, along with select freelance collaborations.", 'If your team values design, grows at a fast pace, and works with an open, multidisciplinary mindset, I’d love the chance to join.'],
      btn1: 'Contact Me',
      btn2: 'Download Resume',
      btn3: 'More About Me',
    },
    contact: {
      title: 'About Me',
      bio: [
        "I'm Michelle Liu (劉于瑄), currently a Product Designer at Turing Space, a US-founded B2B SaaS company, where I own the full experience for two digital-trust products — from user research and usability testing to maintaining the design system, working closely with PMs and engineers in an agile process.",
        "So far I've led 3 major feature redesigns and built 2 products from the ground up. My biggest strength is breadth: where most designers focus on a single area, I move comfortably across brand identity, UI/UX, digital marketing, retail packaging, and motion design — and pull a whole project together.",
        "I graduated from the Department of Design at NTUST. My career has run through e-commerce, SaaS tech, an international organisation (APDI), medical aesthetics, and online education — giving me a cross-disciplinary perspective most designers don't get to build. I'm comfortable with front-end too: HTML/CSS basics, and I use Vibe Coding to prototype and validate interfaces directly.",
        "I'm proactive, calm under pressure, and focused on execution. I believe good design is measured by whether it actually solves the problem — not just how it looks. I'm used to working across teams: I can explain design decisions clearly to PMs and engineers, and discuss strategy with brand stakeholders.",
      ],
      meta: {
        basedIn: ['Based in', 'Taipei, Taiwan'],
        role: ['Current role', 'Product Designer @ Turing Space'],
        edu: ['Education', 'NTUST, Department of Design'],
        lang: ['Languages', 'Mandarin (native) · English (fluent)'],
      },
      emailBtn: 'Send an Email',
      resumeBtn: 'Download Resume',
    },
  },
}

export type Dict = typeof dict.zh
export function getDict(lang: Lang): Dict {
  return dict[lang]
}
