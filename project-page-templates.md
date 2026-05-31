# Portfolio Project Page Templates

## Goal

Create clearer, more scannable project detail pages for Michelle Liu's portfolio.

The user likes the structure of Cherry Hu's product design page:

https://www.cherryhu.com/notestaboptimization

The desired direction:

- Every project page should start with a full-width / full-bleed hero image.
- Then a short project introduction.
- Then a four-column info row: `ROLE`, `TIME`, `TEAM`, `SKILL`.
- Then `Impact` and `Background`.
- Product design pages continue with `Problem`, `What I Found`, and `Key Solutions`.
- Visual design pages share the same opening structure, then become more flexible depending on the project.

Core idea:

> Standardize the opening for fast scanning, then allow each project type to tell the right story.

## Shared Opening Structure

All project pages, both product and visual, should begin with:

```text
1. Full Hero Image
2. Project Intro
3. ROLE / TIME / TEAM / SKILL
4. Impact
5. Background
```

This opening must be consistent across projects so HR and clients can quickly understand:

- What the project is
- What Michelle did
- Who she worked with
- What skills were involved
- Why the project mattered

## 1. Full Hero Image

The first screen should be visual and memorable.

### Product Design Projects

Use:

- Final UI mockups
- Dashboard screens
- Mobile app screens
- Product flow visuals
- Before / after product visuals

Avoid:

- Gray placeholder covers
- Abstract decorative images
- Screens that are too small to understand

### Visual Design Projects

Use:

- Strongest brand/application image
- Packaging hero
- Website mockup
- Campaign key visual
- Event visual system
- Brand identity spread

The visual projects should feel more image-led than product projects.

## 2. Project Intro

Keep this short: ideally 3-5 lines.

It should answer:

- What is this project?
- What problem, goal, or context did it address?
- What did Michelle own?
- What was the result, deliverable, or value?

### Product Intro Example

```md
TCS 是一套 B2B 可驗證憑證基礎設施。在這個專案中，我負責將原本依賴人工詢價與手動管理的服務，轉化為可自助購買、查看用量與管理憑證的 SaaS Dashboard。

我參與定價策略、官網訊息架構與 Dashboard UI/UX 設計，協助產品從「對話型服務」走向可規模化的自助產品。
```

### Visual Intro Example

```md
APDI 是一個新成立的亞太數位身份國際組織。我從 0 到 1 建立其品牌識別系統、官方網站與線下活動應用，讓組織能以一致且專業的形象對外溝通。

此專案涵蓋 Logo、CIS、Webflow 官網、白皮書、名片與活動識別，並入圍 2025 GOOD DESIGN AWARD。
```

## 3. Four-Column Info Row

Fixed labels:

```text
ROLE / TIME / TEAM / SKILL
```

### Product Project Example

```text
ROLE
Product Designer

TIME
2025 / 6 weeks

TEAM
PM, Frontend, Backend

SKILL
Product Strategy, User Flow, UI Design, QA
```

### Visual Project Example

```text
ROLE
Brand / Visual Designer

TIME
2024

TEAM
Solo / Marketing Team

SKILL
Brand Identity, Webflow, Packaging, Art Direction
```

### Implementation Note

These fields should ideally live in each project YAML file.

Suggested YAML fields:

```yaml
role: Product Designer
time: 2025 / 6 weeks
team: PM, Frontend, Backend
skill: Product Strategy, User Flow, UI Design, QA
```

If multiple skills need better formatting, use an array:

```yaml
skills:
  - Product Strategy
  - User Flow
  - UI Design
  - QA
```

## 4. Impact

Impact should appear before long background text.

This is important because HR and clients often scan for outcomes first.

### Product Design Impact

Use measurable outcomes if available.

If there are no exact metrics, use concrete shipped outcomes or decision outcomes.

Examples:

```md
## Impact

- Reframed a manual B2B sales/service process into a self-service SaaS flow.
- Designed dashboard structure for usage, billing, audit, and credential management.
- Defined pricing tiers and website information architecture.
- Created a scalable product structure for both issuer and verifier users.
```

```md
## Impact

- Defined KPI hierarchy from customer interviews and survey results.
- Separated monitoring and management tasks into clearer dashboard levels.
- Helped B2B clients understand issuing performance through trend and contribution views.
```

### Visual Design Impact

Visual design projects still need impact. Do not let them become only image galleries.

Examples:

```md
## Impact

- Built the brand identity system from 0 to 1.
- Designed official website, business cards, white paper, and event applications.
- Created a consistent visual system across digital and physical touchpoints.
- Nominated for 2025 GOOD DESIGN AWARD.
```

```md
## Impact

- Established a scalable visual language for Turing Space's digital trust brand.
- Extended the system across social content, pitch decks, event visuals, print materials, and merchandise.
- Improved visual consistency across marketing and offline brand touchpoints.
```

## 5. Background

Background explains the context behind the project.

Keep it useful and concise. Avoid writing too much before the reader has seen the design value.

Background should answer:

- What is the product / brand / organization?
- What was happening before this project?
- Why did the project need to happen?
- What constraints or business context mattered?

## Product Design Page Template

Use this template for:

- `tcs-dashboard`
- `dnp-hotel`
- `cc-dashboard`
- `turing-certs`
- `design-system`
- `badger`
- `pocket-travel`
- `mrt-hackathon`

Recommended full structure:

```text
Full Hero Image
Project Intro
ROLE / TIME / TEAM / SKILL
Impact
Background
Problem
What I Found
Key Solutions
Final Design / Screens
Takeaways
```

### Product Section Details

#### Problem

Use one clear problem statement.

Example:

```md
## Problem

發證機構登入後只能看到零散數據，無法快速判斷發證成效，也無法用資料支撐續約與決策。
```

Avoid burying the problem in long paragraphs.

#### What I Found

This section proves product thinking.

Can include:

- User research findings
- Customer interview insights
- Survey results
- Product analytics
- Stakeholder constraints
- Competitive analysis
- Usability issues
- Information architecture findings

Example:

```md
## What I Found

- 發證機構最在意的不是單一發證數字，而是「發出後有沒有被看見、被領取、被驗證」。
- 舊版首頁混合了監控與管理任務，導致使用者不知道該從哪裡判斷成效。
- 高頻客戶需要快速看趨勢，低頻客戶則需要更明確的下一步提示。
```

#### Key Solutions

This is the main body of the product case study.

Each solution should follow this structure:

```text
Solution title
Why this decision mattered
Design image / flow / before-after
Impact or expected impact
```

Example:

```md
## Key Solutions

### 01. Separate monitoring from management

The old homepage mixed high-level monitoring with detailed certificate management. I separated these into two levels: a dashboard for performance monitoring and a management center for operational tasks.

This helped users understand whether their issuing activity was healthy before diving into individual certificate groups.

### 02. Prioritize KPI hierarchy

Based on customer interviews and survey results, I moved the most important metrics to the top of the page: issued certificates, views, verifications, and carbon reduction equivalent.

This turned the dashboard from passive lookup into active monitoring.
```

#### Final Design / Screens

Use large screens with short captions.

Do not over-explain every screen. Let visuals carry part of the story.

#### Takeaways

Keep to 2-3 points.

Example:

```md
## Takeaways

- Good dashboard design starts with deciding what not to show.
- Data hierarchy needs research input, not only internal assumptions.
- Separating monitoring and management made the product easier to scale.
```

## Visual Design Page Template

Use this template for:

- `apdi`
- `turing-space-brand`
- `jandan`
- `evoke`
- `marketing-design`
- `employer-brand-video`
- `chicken-essence`
- `chuan-incense`
- `he-quan-tang`
- `taiyang-tang-cis`
- `claw-machine`
- `life-motion`
- `ntustaa`

Recommended structure:

```text
Full Hero Image
Project Intro
ROLE / TIME / TEAM / SKILL
Impact
Background
Flexible visual design sections
Gallery
```

After the shared opening, the user wants freedom to adjust content based on each visual project.

Possible flexible sections:

```text
Visual Direction
Brand Concept
Logo System
Color & Typography
Identity System
Packaging
Website
Campaign
Motion
Applications
Print Materials
Event Visuals
Gallery
```

### Visual Section Example

```md
## Visual Direction

The visual language was built around clarity, trust, and international professionalism. I used a restrained color palette, structured layout system, and geometric identity elements to help APDI communicate credibility across digital and physical touchpoints.
```

```md
## Applications

The identity system was extended across the official website, business cards, white paper layout, event agenda, name badges, and offline forum visuals.
```

## Suggested Project Metadata

To support these templates, add structured metadata to project YAML files.

### Product YAML Example

```yaml
slug: tcs-dashboard
title: "[UI/UX] TCS 官網・定價・Dashboard｜把靠電話的生意變成可自助的產品"
year: "2025"
description: 為 TuringCerts Service 重寫定價策略、規劃官網訊息架構，並設計讓客戶不需打電話就能上手的自助 Dashboard。
section: main
order: 2
category: product
template: product
role: Product Designer
time: 2025 / 6 weeks
team: PM, Frontend, Backend
skills:
  - Product Strategy
  - Information Architecture
  - UI/UX Design
  - Pricing Strategy
impact:
  - Reframed manual sales into a self-service SaaS flow.
  - Designed pricing, website IA, and dashboard v1.
  - Supported issuer and verifier user needs.
```

### Visual YAML Example

```yaml
slug: apdi
title: "[品牌整合] 國際組織品牌與網站｜APDI"
year: "2024"
description: 建立品牌識別、官方網站與跨國應用系統。
section: main
order: 4
category: visual
template: visual
role: Brand / Visual Designer
time: 2024
team: Solo
skills:
  - Brand Identity
  - Webflow
  - Editorial Design
  - Event Visuals
impact:
  - Built the brand identity system from 0 to 1.
  - Designed official website and cross-touchpoint applications.
  - Nominated for 2025 GOOD DESIGN AWARD.
```

## Suggested Copy for Top Projects

### TCS Dashboard

Intro:

```md
TCS 是一套 B2B 可驗證憑證基礎設施。在這個專案中，我負責將原本依賴人工詢價與手動管理的服務，轉化為可自助購買、查看用量與管理憑證的 SaaS Dashboard。

我參與定價策略、官網訊息架構與 Dashboard UI/UX 設計，協助產品從「對話型服務」走向可規模化的自助產品。
```

Impact:

```md
- Reframed a manual B2B sales process into a self-service SaaS product flow.
- Designed dashboard structure for usage, billing, audit, and credential management.
- Defined pricing tiers and website information architecture.
- Created a scalable structure for both issuer and verifier users.
```

### DNP Hotel Check-in

Intro:

```md
這是 TC 與大日本印刷 DNP 合作的數位身份驗證場景。我設計旅客以「護照 VC」完成日本飯店 Kiosk 自助入住的體驗，讓入住流程不再依賴實體護照與櫃檯人工查驗。

我負責情境 Landing Page、兩階段入住流程設計，並主導上線前的質化易用性研究。
```

Impact:

```md
- Designed the pre-check-in and on-site check-in journey.
- Led qualitative usability testing before launch.
- Reduced uncertainty in a high-pressure kiosk scenario.
- Clarified trust and privacy communication around passport VC.
```

### CC Data Dashboard

Intro:

```md
Turing Certs 的發證機構後台原本只能看到零散基礎數據，難以判斷發證成效。我重新設計首頁資訊架構，將後台升級為以 KPI 為核心的監控儀表板。

這套指標優先級來自重點客戶訪談與發證機構問卷，讓設計決策不只是介面整理，而是回應客戶真正關心的營運問題。
```

Impact:

```md
- Defined KPI hierarchy from customer interviews and survey results.
- Separated monitoring and management tasks into clearer dashboard levels.
- Helped B2B clients understand issuing performance through trend and contribution views.
- Shifted the homepage from passive data lookup to active performance monitoring.
```

### APDI

Intro:

```md
APDI 是一個新成立的亞太數位身份國際組織。我從 0 到 1 建立其品牌識別系統、官方網站與線下活動應用，讓組織能以一致且專業的形象對外溝通。

此專案涵蓋 Logo、CIS、Webflow 官網、白皮書、名片與活動識別，並入圍 2025 GOOD DESIGN AWARD。
```

Impact:

```md
- Built the brand identity system from 0 to 1.
- Designed official website, business cards, white paper, and event applications.
- Created a consistent visual system across digital and physical touchpoints.
- Nominated for 2025 GOOD DESIGN AWARD.
```

### Turing Space Brand

Intro:

```md
Turing Space 是一間專注於去中心化身份與數位信任的 Web3 科技公司。我負責將抽象的信任技術轉化為一致、專業且可延展的品牌視覺系統。

設計範圍涵蓋品牌視覺系統、社群行銷素材、簡報模板、線下活動主視覺、印刷品與周邊應用。
```

Impact:

```md
- Established a scalable visual language for a digital trust brand.
- Extended the system across social content, pitch decks, event visuals, print materials, and merchandise.
- Improved visual consistency across marketing and offline brand touchpoints.
```

## Technical Notes

### Hero Image

Use project cover or a dedicated hero image.

Potential file naming:

```text
public/images/{slug}/hero.png
public/images/{slug}/cover.png
```

Fallback order:

1. `hero.*`
2. `cover.*`
3. first project image

### Mermaid Rendering

Fix Mermaid rendering for product pages.

Current problem:

- Some pages use fenced Mermaid syntax: ```` ```mermaid ````
- Existing detection only checks for `class="mermaid"`.

Fix:

- Convert fenced Mermaid blocks to `<div class="mermaid">...</div>` during markdown rendering.
- Or detect both forms when deciding whether to load Mermaid.

### Image Marker Mismatches

Some `.mdoc` files reference more images than exist. Correct these to avoid missing visual sections.

Known examples:

- `apdi`: marker up to 17, images 15
- `badger`: marker up to 14, images 13
- `design-system`: marker up to 14, images 13
- `employer-brand-video`: marker up to 15, images 14
- `evoke`: marker up to 15, images 13
- `jandan`: marker up to 91, images 89
- `marketing-design`: marker up to 49, images 48
- `pocket-travel`: marker up to 9, images 7
- `turing-space-brand`: marker up to 44, images 42

## Implementation Priority

1. Build shared project page opening layout:
   - Hero image
   - Intro
   - ROLE / TIME / TEAM / SKILL
   - Impact
   - Background

2. Add YAML metadata fields for top projects first:
   - `tcs-dashboard`
   - `dnp-hotel`
   - `cc-dashboard`
   - `apdi`
   - `turing-space-brand`

3. Add hero/cover images for top product projects.

4. Convert top project pages to the new structure.

5. Fix Mermaid and image marker issues.

