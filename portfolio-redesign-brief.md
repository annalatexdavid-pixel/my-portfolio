# Portfolio Redesign Brief for Claude

## Goal

Redesign Michelle Liu's portfolio website so it immediately attracts both HR/recruiters and potential clients looking for a product designer / visual designer.

The user especially wants:

- The homepage to show as many portfolio works as possible.
- The homepage to feel high-density and visual, closer to a portfolio wall.
- Project detail pages to follow a clearer case-study structure inspired by Cherry Hu's product design pages.
- Product design and visual design project pages should share a consistent opening structure, then diverge based on project type.

Reference sites:

- Hubao Design: https://hubaodesign.com/
- Cherry Hu homepage: https://www.cherryhu.com/
- Cherry Hu case page: https://www.cherryhu.com/notestaboptimization

## Current Site Context

Repo: `/Users/ku/Downloads/portfolio-site`

Important files:

- Homepage: `app/(site)/page.tsx`
- Project page: `app/(site)/[slug]/page.tsx`
- All work page: `app/(site)/all-work/page.tsx`
- Content loader: `lib/content.ts`
- Images loader: `lib/images.ts`
- Copy/i18n: `lib/i18n.ts`
- Project cards: `components/ProjectCard.tsx`
- Work filter: `components/WorkFilter.tsx`
- Global styles: `app/globals.css`
- Settings: `content/settings/index.yaml`
- Project content: `content/projects/*.yaml` and `content/projects/*.mdoc`

## High-Level Direction

Use:

- Hubao's homepage density and visual-first portfolio-wall feeling.
- Cherry Hu's product case study structure and scannability.

One-line strategy:

> Homepage like a portfolio wall, project pages like case-study presentations.

The homepage should make people stop and click. The project pages should make people believe Michelle can solve real product and brand problems.

## Homepage Direction

### Current Issue

The current homepage uses a large full-screen hero and a long About section before the portfolio grid. This slows down discovery. Since attention spans are short, the user's work should appear much earlier.

Also, the strongest product projects currently have gray placeholder covers, which makes the site look unfinished:

- `cc-dashboard`
- `dnp-hotel`
- `tcs-dashboard`

These need proper cover images.

### Recommended Homepage Structure

1. Header
2. Short positioning intro
3. Quick proof points
4. Dense portfolio grid
5. Short About
6. Contact / Resume CTA

### Header

Suggested nav:

- Work
- About
- Resume
- Contact
- EN / 中文

The current `resumeUrl` is empty in `content/settings/index.yaml`; add resume URL when available.

### Hero

Do not use a full-screen hero. Keep it compact so the first row of projects is visible without much scrolling.

Suggested Chinese copy:

> 我是 Michelle Liu，產品設計師與視覺設計師。擅長把複雜的 SaaS 流程、品牌系統與商業需求，轉化為清楚、好用、具記憶點的設計。

Shorter Chinese option:

> 以產品思維做視覺，以視覺能力推進產品體驗。

Suggested English copy:

> Product and visual designer turning complex SaaS workflows, brand systems, and business goals into clear, usable, memorable experiences.

Alternative English:

> Product and visual designer building SaaS experiences, brand systems, and launch-ready visuals from strategy to execution.

### Quick Proof Points

Add 3-4 compact proof chips or text facts below the intro:

- B2B SaaS Product Design
- 3 Major Feature Redesigns
- 2 Products Built from 0 to 1
- Brand / Webflow / Packaging / Motion

### Portfolio Grid

The user wants the homepage to be as filled with work as possible.

Recommendation:

- Default to showing all selected works, not only UI/UX.
- Keep filters, but do not hide work by default.
- Use tabs or filters: `All`, `Product`, `Brand`, `Visual`, `Motion`.
- Use a dense grid.
- Desktop: 3 columns or mixed-size masonry.
- Mobile: 1 column or 2 compact columns depending readability.
- First 6 works should be strongest/highest-value.

Recommended first order:

1. TCS Dashboard
2. DNP Hotel Check-in
3. CC Data Dashboard
4. APDI Brand & Website
5. Turing Space Brand
6. Design System
7. JANDAN
8. Turing Certs
9. evoke
10. Badger
11. Marketing Design
12. Employer Brand Video

### Project Card Format

Cards should be more informative like Cherry Hu, not just image + title.

Suggested card content:

```text
Project Title
Category / Scope / Context
One-sentence value or outcome
```

Example cards:

```text
TCS Dashboard
Product Strategy / SaaS Dashboard / Pricing
把靠人工詢價的 B2B 服務，轉成可自助購買與管理的產品。
```

```text
DNP Hotel Check-in
Product Design / Identity Verification / Usability Study
設計日本飯店 Kiosk 的數位護照入住體驗，並主導上線前易用性研究。
```

```text
APDI Brand & Website
Brand System / Webflow / International Organization
從 0 到 1 建立國際組織品牌識別、網站與線下應用系統。
```

```text
CC Data Dashboard
B2B SaaS / Data Dashboard / User Research
以研究定錨 KPI，將發證後台從資料列表升級為監控儀表板。
```

## Project Detail Page Direction

The user likes Cherry Hu's product page structure:

- Full-bleed / full-width hero image first.
- Short project intro.
- One row with four columns: `ROLE`, `TIME`, `TEAM`, `SKILL`.
- Then sections such as Impact, Background, Problem, What I Found, Key Solutions.

Use this as the foundation.

## Shared Project Page Opening

All project pages, both product and visual, should begin with:

1. Full hero image
2. Short project intro
3. Four-column meta row
4. Impact
5. Background

This gives all projects a consistent, recruiter-friendly structure.

### Full Hero Image

First viewport should show a strong image.

For product projects:

- Use final UI screens, dashboard mockups, or product flow visuals.
- Avoid gray placeholders.

For visual projects:

- Use strongest brand/application image.
- Prioritize beautiful, memorable visuals.

### Short Project Intro

Keep it short: 3-5 lines max.

Must answer:

- What is this project?
- What problem or goal did it address?
- What did Michelle own?
- What was the outcome or deliverable?

### Four-Column Meta Row

Fixed labels:

```text
ROLE / TIME / TEAM / SKILL
```

Examples:

Product project:

```text
ROLE
Product Designer

TIME
2025 / 6 weeks

TEAM
PM, Frontend, Backend

SKILL
User Flow, UI Design, Research, QA
```

Visual project:

```text
ROLE
Brand / Visual Designer

TIME
2024

TEAM
Solo / Marketing / Founder

SKILL
Brand Identity, Webflow, Packaging, Art Direction
```

### Impact Section

Impact should appear before long background text.

For product design projects, use metrics if available. If no metrics, use concrete shipped outcomes:

- Rebuilt dashboard information architecture
- Defined KPI hierarchy from user research
- Shipped v1 with engineering team
- Supported B2B customer self-service flow
- Reduced ambiguity in user flow
- Created reusable design system components

For visual design projects, use:

- Award nomination
- Brand system created
- Website launched
- Packaging system completed
- Campaign/event visuals shipped
- Applied across digital and physical touchpoints

## Product Design Page Template

Use for:

- `tcs-dashboard`
- `dnp-hotel`
- `cc-dashboard`
- `turing-certs`
- `design-system`
- `badger`
- `pocket-travel`
- `mrt-hackathon`

Recommended structure:

```text
Hero Image
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

### Product Page Section Notes

#### Problem

Make this concise. One clear problem statement is better than long exposition.

Example:

> 發證機構登入後只能看到零散數據，無法快速判斷發證成效，也無法用資料支撐續約與決策。

#### What I Found

This is important for product designer credibility.

Include:

- User research findings
- Data observations
- Stakeholder constraints
- Competitive patterns
- Usability issues

#### Key Solutions

Each solution should follow:

```text
Decision title
Why this decision mattered
Image / flow / before-after
Impact or expected impact
```

#### Final Design / Screens

Use large images with short captions.

#### Takeaways

Keep to 2-3 points.

## Visual Design Page Template

Use for:

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
Hero Image
Project Intro
ROLE / TIME / TEAM / SKILL
Impact
Background
Then flexible content depending on project:
  Visual Direction
  Logo / Identity System
  Color & Typography
  Packaging
  Website
  Campaign
  Motion
  Applications
  Gallery
```

The user specifically wants freedom after the shared opening sections. Do not over-standardize visual design pages after Impact and Background.

## Specific Content Suggestions

### TCS Dashboard

Positioning:

> 把「打電話才能買」的 B2B 服務，轉成可自助購買、自助管理的 SaaS 產品。

Impact ideas:

- Reframed a manual sales/service process into a self-service product.
- Defined pricing tiers and website IA.
- Designed dashboard for usage, billing, audit, and credential management.
- Created a scalable structure for both issuer and verifier users.

### DNP Hotel Check-in

Positioning:

> 讓旅客用數位護照完成日本飯店 Kiosk 自助入住，減少實體護照與人工查驗依賴。

Impact ideas:

- Designed pre-check-in and on-site check-in journey.
- Led qualitative usability study before launch.
- Reduced uncertainty in a high-pressure kiosk scenario.
- Clarified trust and privacy around passport VC.

### CC Data Dashboard

Positioning:

> 以使用者研究定義 KPI，將發證後台從資料列表升級為監控儀表板。

Impact ideas:

- Interviewed / surveyed issuing institutions.
- Prioritized KPI hierarchy.
- Separated monitoring and management tasks.
- Improved data visibility for B2B clients.

### APDI

Positioning:

> 從 0 到 1 為國際組織建立品牌識別、官方網站與跨國應用系統。

Impact ideas:

- Built full CIS.
- Designed official website in Webflow.
- Extended identity to business cards, white paper, event assets.
- Mention GOOD DESIGN AWARD nomination.

### Turing Space Brand

Positioning:

> 將抽象的 Web3 數位信任服務，轉化為一致、專業、可延展的科技品牌視覺系統。

Impact ideas:

- Built scalable visual system.
- Created marketing, presentation, event, and print applications.
- Improved consistency across digital and physical touchpoints.

## Current Technical Issues to Fix

### 1. Strong Product Projects Need Covers

Add cover images for:

- `public/images/cc-dashboard/cover.png`
- `public/images/dnp-hotel/cover.png`
- `public/images/tcs-dashboard/cover.png`

These projects currently show gray placeholders in the grid, which harms first impression.

### 2. Mermaid Rendering Issue

`content/projects/tcs-dashboard.mdoc` uses fenced Mermaid syntax:

```md
```mermaid
...
```
```

But project page currently only detects:

```ts
project.content?.includes('class="mermaid"')
```

in `app/(site)/[slug]/page.tsx`.

Fix options:

- Convert fenced Mermaid to `<div class="mermaid">...</div>` during markdown rendering.
- Or update `hasMermaid` to detect both `class="mermaid"` and ```` ```mermaid ````.

### 3. Image Marker Mismatches

Some `.mdoc` files reference more images than exist:

- `apdi`: has 15 images, marker up to 17
- `badger`: has 13 images, marker up to 14
- `design-system`: has 13 images, marker up to 14
- `employer-brand-video`: has 14 images, marker up to 15
- `evoke`: has 13 images, marker up to 15
- `jandan`: has 89 images, marker up to 91
- `marketing-design`: has 48 images, marker up to 49
- `pocket-travel`: has 7 images, marker up to 9
- `turing-space-brand`: has 42 images, marker up to 44

Review and correct these markers or add missing images.

### 4. WorkFilter Classification

`components/WorkFilter.tsx` currently determines category from title:

```ts
function getCategory(title: string): 'uiux' | 'visual' {
  return /\[UI\/UX\]|\[Design System\]/.test(title) ? 'uiux' : 'visual'
}
```

This is fragile.

Better:

- Add `category`, `tags`, or `type` to project YAML.
- Use structured project metadata for filtering.

Potential fields:

```yaml
category: product
tags:
  - SaaS
  - Dashboard
  - User Research
featured: true
template: product
```

For visual:

```yaml
category: visual
tags:
  - Brand Identity
  - Packaging
  - Webflow
template: visual
```

### 5. Resume URL

`content/settings/index.yaml` has:

```yaml
resumeUrl: ""
```

Add a resume link when available and expose it in header/footer/contact.

## Implementation Suggestions

### Data Model

Extend project YAML to support project page templates:

```yaml
slug: tcs-dashboard
title: ...
year: "2025"
description: ...
section: main
order: 2
category: product
template: product
role: Product Designer
time: 2025 / 6 weeks
team: PM, Frontend, Backend
skill: Product Strategy, UI/UX, Dashboard Design, Pricing Strategy
impact:
  - Reframed manual sales into self-service SaaS flow
  - Designed pricing, website IA, and dashboard v1
  - Supported issuer and verifier user needs
```

For visual:

```yaml
category: visual
template: visual
role: Brand / Visual Designer
time: 2024
team: Solo / Marketing Team
skill: Brand Identity, Webflow, Editorial Design
impact:
  - Built brand identity system from 0 to 1
  - Designed official website and event applications
  - Nominated for 2025 GOOD DESIGN AWARD
```

### Project Page Rendering

In `app/(site)/[slug]/page.tsx`, render the shared opening sections from YAML metadata:

- Hero cover image
- Project title
- Intro/description
- Meta row
- Impact
- Background/content

Then render the markdown content below.

If this is too large for one pass, first implement layout changes using current `description` and `content`, then migrate metadata gradually.

## Priority Order

1. Add/fix cover images for top product projects.
2. Redesign homepage to compact intro + dense portfolio grid.
3. Add structured metadata fields to project YAML.
4. Redesign project detail page with hero image, intro, meta row, impact.
5. Fix Mermaid rendering.
6. Correct missing image marker references.
7. Refine copy for top 6 projects first.

## Tone and Positioning

Michelle's strongest positioning:

> A designer who combines product thinking and visual craft.

Avoid making the site feel like only a visual gallery. The homepage can be image-heavy, but the cards and project pages must still show:

- Role
- Problem
- Decision-making
- Impact
- Delivery ability

This is what makes the portfolio attractive to both HR and clients.

