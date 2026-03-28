 # CLAUDE.md
## LiveLanguage Russian — Claude Code Configuration

---

## PROJECT OVERVIEW

LiveLanguage Russian is a static educational website for Italian speakers learning Russian.

- **Hosting:** GitHub Pages
- **Stack:** HTML, CSS, vanilla JavaScript only — no frameworks, no build tools, no backend
- **Database:** Supabase
- **Automation:** n8n (self-hosted at n8n.pletnusha.xyz)
- **Payments:** Stripe
- **Structure:** Level → Macro Area → Argomento → Exercises
- **Access tiers:** Free and paid

**PM / Product Owner:** Nadezhda Pletneva
**Agile framework:** 2-week sprints

---

## STRICT CONSTRAINTS

- Do NOT introduce frameworks (React, Vue, Angular, Next.js)
- Do NOT introduce build tools (npm, webpack, vite, parcel)
- Do NOT introduce package.json, node_modules, or CI/CD complexity
- Do NOT refactor files unless explicitly asked
- Do NOT add backend logic — GitHub Pages is static only

---

## PROJECT STRUCTURE

```
LIVELANGUAGERUSSIAN/
├── livello_elementare/     # Course content — Level A1
│   └── verbi-di-moto/      # Topic: verbs of motion
├── principianti/           # Course content — beginner level
├── ruoli/                  # Agent roles and reference documents
│   ├── documenti/          # Shared reference documents (brand DNA, matrices, etc.)
│   ├── id.md               # Instructional Designer role
│   ├── copywriter.md       # Copywriter role
│   ├── seller.md           # Seller role
│   ├── smm.md              # SMM role
│   ├── tech_specialist.md  # Tech Specialist role (in development)
│   └── role_index.md       # Agile workflow and role activation guide
├── CLAUDE.md               # This file
├── ISTRUZIONI.md           # Project operational notes
├── index.html              # Homepage
├── courses.html            # Courses page
├── auth.html               # Authentication page
└── login.html              # Login page
```

---

## ROLE SYSTEM

All roles are defined in `/ruoli/`. Read the relevant role file before starting any task.

| File | Role | When to use |
|---|---|---|
| `ruoli/id.md` | Instructional Designer | Course architecture, blueprints, new topics |
| `ruoli/copywriter.md` | Copywriter | Exercise texts, emails, landing copy, posts |
| `ruoli/seller.md` | Seller | Sales copy, funnels, B2B proposals |
| `ruoli/smm.md` | SMM | Channel strategy, analytics, performance |
| `ruoli/tech_specialist.md` | Tech Specialist | Code, Supabase, n8n, Stripe, GitHub Pages |

**How to activate a role:**
- Explicit: "Act as Instructional Designer" / "Switch to Seller"
- Contextual: Claude reads the task and activates the right role
- When unclear: Claude asks one short question, then proceeds

**Hierarchy:** ID is the lead architect — opens every sprint and produces the blueprint. All other roles work in parallel within the sprint.

---

## REFERENCE DOCUMENTS

All shared documents live in `/ruoli/documenti/`. Every role has access.

| Document | Used by |
|---|---|
| `personal_brand_dna_EN.md` | Copywriter, SMM, Seller |
| `LiveLanguage_Cheatsheet_Sviluppatore` | ID, Copywriter |
| `style_guide_copywriter.md` | Copywriter |

**Rule:** Always check `/ruoli/documenti/` for relevant reference material before starting a task. If a referenced document is missing — flag to PM before proceeding.

---

## MARKETING SKILLS

Marketing skills from `coreyhaines31/marketingskills` are available in `/ruoli/documenti/marketing_skills/`.

Relevant skills for this project:
- `copywriting` — marketing page copy
- `email-sequence` — automated email flows
- `cold-email` — B2B outreach
- `page-cro` — conversion optimization
- `social-content` — social media content
- `sales-enablement` — sales decks, one-pagers
- `pricing-strategy` — pricing and packaging
- `lead-magnets` — lead generation
- `launch-strategy` — product launches
- `marketing-psychology` — behavioral principles

---

## LANGUAGE MATRIX

| Context | Language |
|---|---|
| Internal reasoning `<thinking>` | English |
| Communication with PM | Russian (default) |
| Blueprint and delegation output | English |
| Exercise texts (LLR) | Russian |
| Exercise instructions | Italian |
| Email sequences, landing copy | Italian |
| Social media posts | Italian + Russian |
| B2B proposals | Italian (English for international) |
| Academic / thought leadership | Italian (English for international) |

---

## AGILE WORKFLOW

See `/ruoli/role_index.md` for full sprint structure.

**Sprint:** 2 weeks
**Ceremonies:** Sprint Planning → Daily Check-in → Weekly Review → Retrospective

**PM reminder system:** Claude flags when:
- A role has no output in 24h
- A HITL was triggered but not resolved
- A weekly report is overdue (SMM / Seller)
- An email sequence stage is due
- A sprint ceremony is approaching

---

## GLOBAL HITL RULE

All roles are **advisory only.** No external action without PM confirmation.

Stop and ask PM when:
1. Any external action (posting, sending, publishing, deploying)
2. Any CERT market-facing content
3. Any pricing decision
4. Any new channel, tool, or partner not in project context
5. Ambiguous task scope — one short question, then proceed

---

## ACTIVE PROJECT

**LiveLanguage Russian only.**

When reading role files in `/ruoli/`, apply only the `LiveLanguage_Russian` project context.
Ignore Workshop and CERT context blocks unless explicitly instructed by PM.

| Project | Status in this repo |
|---|---|
| LiveLanguage Russian | ✅ Active |
| Prompt Engineering Workshop | ⛔ Separate project — ignore |
| CERT | ⛔ Separate project — ignore |

---

## ACTIVE PROJECTS

| Project | Status | Notes |
|---|---|---|
| LiveLanguage Russian | Active | All roles |
| Prompt Engineering Workshop | Active | Seller, SMM, Copywriter |
| CERT | In development | All output needs PM approval |