## Background & Project Goals

TCS (Turing Credential Service) provides enterprise-grade Verifiable Credentials infrastructure. Through API integration, it helps financial institutions, government agencies, and educational organizations establish digital credential issuance, management, and real-time verification mechanisms — enabling fraud prevention and cross-border digital trust.

```
img:1
```

### **TCS Users**

1. Issuers: FinTech companies, corporate banking, government agencies
   1. Issue KYB, employee, supplier, and license credentials
   1. Needs: view issuance volume, revoke credentials, review billing, demonstrate audit trails to compliance teams
1. Verifiers
   1. Banks conducting KYB on suppliers, government agencies reviewing applicants
   1. Consume credentials issued by others
   1. Needs: verify upon receipt (issuance features are irrelevant to them)

### **Problem Statement & Project Goals**

1. In the early stage, an AI-generated website was used for rapid launch; as adoption grew, a proper website was needed to convey international credibility and articulate product value
1. No Dashboard existed — customers had to contact support to retrieve data
1. No pricing strategy or pricing page — subscribing or renewing required manual communication with support

> The lack of self-serve subscription and data access, combined with a website that failed to communicate product value precisely, limited the product to a manual, conversation-driven model and created a scalability bottleneck

---

## Challenges

1. **Clearly articulating product value across documentation and the website**
1. **Pricing a product in a market with no established benchmarks**
1. **Creating content that is persuasive to two distinct buyer types (Issuers and Verifiers)**
1. **This is not a marketing page — the website must be concise, credible, and feel like a reliable international organization**

---

## Design Strategy & Key Decisions

### I. Building the Website from 0 to 1

> Goal: Enable B2B buyers to quickly absorb the concept, self-identify their use case, and enter the registration flow — while establishing trust as an international-grade infrastructure provider

```
img:2
```

**Site Navigation & Information Architecture**

- Home: Value proposition
- Pricing: Transparent tiered plans and comparison, eliminating friction at the inquiry stage
- Documentation: API documentation and guides
- (Feature launching) Trust Registry: Links to the existing Portal, reinforcing ecosystem trust
- (Feature launching) Login: Dashboard entry point for existing users

**Homepage Section Planning**

```
img:cover.gif
```

- Hero Section: Focused on the differentiators of "B2B Verifiable Credentials Infrastructure"
- Trust & Compliance: Highlights security standards and audit capabilities, establishing credibility for banks and government agencies
- WHERE IT FITS: Showcases applicable use cases for TCS as a new product, deepening the imagination of adoption

### II. Pricing Strategy

```
img:3
```

The plan I designed consists of three parts:

- **5-tier subscription: Free / Starter / Growth / Scale / Enterprise**
  - Cost per credential decreases as volume increases ($2.98 → $1.33 → $0.66 → $0.10–0.25 / VC)
  - Every buyer at every scale maps to a tier — no cliff-edge doubling upon upgrade
- **Standalone Verifier-only plan**
  - For buyers who only verify, not issue credentials (e.g., banks conducting KYB)
- **Trust Registry as an add-on purchase**
  - **Tier 0 (Listed)**: Free — any registered organization is listed, indicating "this organization exists in the system," but with **no** vetting performed
  - **Tier 1 (Verified)**: $250 one-time + $120/year — includes company registry checks, JCIC credit reports, ComplyAdvantage sanctions screening, and UBO (Ultimate Beneficial Owner) review; upon approval, grants a "Verified Issuer / Verified Verifier" badge

##### **The Initial Problem: The Original Single-Price Model Would Likely Fail at Scale**

> At the start of the project, the plan was $3,000/year for 1,000 VCs (= $3/VC). However, I identified that if we intended to scale, a Taiwan FinTech issuing 50,000 credentials per year would pay $150,000 — more than 3x the typical local SaaS procurement budget. This type of flat pricing would drive away exactly the customers we want to attract.

**Strategy: Break pricing into five tiers plus standalone plans, so the cost per credential decreases as volume increases.**

Free → Starter $2.98 → Growth $1.33 → Scale $0.66 → Enterprise $0.10–0.25 / VC (cost per issued credential)

Every buyer at every scale maps to a different tier.

##### **Four Key Decisions:**

```
img:4.gif
```

1. **Growth designed as the flagship plan**
   1. $1.33 sits just above the flexibility range Taiwan FinTechs have for per-credential cost ($0.50–$1.00)
   1. Also lower than all publicly priced competitors (Truvera $2.00, Certifier $1.36)
   1. Trust Registry Tier 1 (valued at $370) is bundled in, making upgrading to Growth a more compelling choice
1. **Free Plan is not for developers — it exists to make Trust Registry viable as a standalone product**
   1. The original version had no Free Plan; no one would pay $250 just to be listed on the Trust Registry without issuing any credentials
   1. I added a Free Plan with a 100 VC cap + Trust Registry Tier 1, enabling small independent issuers (individual professionals, small organizations) to pursue the Verified Issuer path on its own
   1. This allows Trust Registry to truly exist as an independent product and gives the ecosystem a foundation to grow from
1. **Verifier-only plan carves out the "verify-only" banking market**
   1. Most Taiwanese banks conducting KYB only verify — they do not issue credentials
   1. The original flat pricing forced them to pay for issuance features they would never use; the standalone Verifier plan is purpose-built for this segment
1. **Full public pricing and plan transparency**
   1. Competitors (Trinsic, Affinidi, walt.id, Mattr, Indicio, Procivis, SpruceID) all use a "contact sales" and hidden pricing model
   1. Taiwanese B2B buyers show clear distrust of hidden pricing, and procurement culture does not respond well to it
   1. Public pricing allows potential customers to self-qualify before booking a demo

### III. Dashboard

> Designed in alignment with the established visual style, organized around the needs of existing customers and anticipated functionality for future customers, with features prioritized accordingly.
>
> Each feature is given its own dedicated page to simplify interactions and reduce cognitive load.

```
img:7
```

---

## Outcomes

```
img:6
```

1. The design was executed end-to-end from a PM, design, and frontend support perspective, improving development efficiency
1. 3 existing clients can now independently use the Dashboard to monitor their data
1. Actively onboarding new users who subscribe through the Pricing Page
