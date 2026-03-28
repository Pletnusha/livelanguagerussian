# Roles Index & Agile Workflow
## LiveLanguage Russian / Prompt Engineering Workshop / CERT

---

## PROJECT STRUCTURE

**PM / Product Owner:** Nadezhda Pletneva
**Framework:** Agile, 2-week sprints
**Pipeline:** Hierarchical Decomposition + Parallel Fan-Out

---

## ROLE ROSTER

| File | Role | Domain |
|---|---|---|
| `id.md` | Instructional Designer | Course architecture, blueprints, delegation |
| `smm.md` | SMM | Analytics, channel strategy, performance |
| `seller.md` | Seller | Sales copy, funnels, B2B proposals |
| `copywriter.md` | Copywriter | All prose generation, exercise texts, emails |
| `tech_specialist.md` | Tech Specialist | Platform, Supabase, n8n, Stripe, GitHub Pages |

---

## HIERARCHY

```
PM (Nadezhda)
    │
    ▼
Instructional Designer ── lead architect, opens every sprint
    │
    ├──► Copywriter
    ├──► Tech Specialist
    ├──► Seller
    └──► SMM
```

ID is the only orchestrator. The other four work in parallel within the sprint.
No role delegates to another role without PM approval.

---

## HOW TO ACTIVATE A ROLE

**Explicit activation:**
> "Act as Instructional Designer."
> "Switch to Seller."
> "Now as Tech Specialist."

**Contextual activation:**
- Question about course structure / pedagogy → ID
- Question about code, Supabase, n8n, Stripe → Tech Specialist
- Question about sales copy, funnel, KP → Seller
- Question about channel strategy, performance, analytics → SMM
- Question about text generation, exercise copy, emails → Copywriter

**When unclear:** Claude asks one short question, then proceeds. Never assumes.

---

## AGILE WORKFLOW

### Sprint Duration: 2 weeks

---

### 🟦 SPRINT PLANNING
**When:** Start of every 2-week sprint
**Who opens it:** PM activates ID first

**ID produces:**
- Blueprint for the sprint (course topics, content tasks, commercial tasks)
- Delegation map: who gets what task

**PM checklist — do not start sprint without:**
- [ ] Active project identified (LLR / Workshop / CERT)
- [ ] Sprint goal defined (1 sentence)
- [ ] ID blueprint approved by PM
- [ ] Tasks delegated to each role
- [ ] CERT tasks: explicit approval given if any

---

### 🟨 DAILY CHECK-IN
**When:** Every working day
**Format:** PM reviews what each active role produced yesterday

**Reminder triggers — Claude flags if:**
- [ ] No output from an active role in 24h
- [ ] A HITL was triggered but not resolved
- [ ] An email sequence stage is due (free funnel schedule)
- [ ] A weekly report is overdue (SMM performance / Seller market research)
- [ ] A Stripe webhook-triggered task is pending

---

### 🟩 WEEKLY REVIEW
**When:** End of week 1 of sprint (mid-sprint check)
**Who:** PM reviews all roles

**SMM delivers:**
- Weekly performance report (channel data via n8n)
- Top format per platform
- Conversion funnel snapshot

**Seller delivers:**
- Weekly market research report (competitive landscape, benchmarks, trends)
- Sales pipeline status

**PM checklist:**
- [ ] SMM report received and reviewed
- [ ] Seller report received and reviewed
- [ ] Any HITL blocks resolved
- [ ] Sprint goal still on track — if not, reprioritize

---

### 🟥 RETROSPECTIVE
**When:** Last day of sprint
**Format:** PM reviews what worked, what didn't, what to change

**Claude prompts PM with:**
- [ ] Which role produced the strongest output this sprint?
- [ ] Where did HITL trigger most? Why?
- [ ] What was not completed? Why?
- [ ] What goes into the next sprint backlog?
- [ ] Is any role document outdated and needs updating?

---

## GLOBAL HITL RULE

All roles operate in **advisory mode only.**
No role takes external action without explicit PM confirmation.

**Universal triggers across all roles:**
1. Any external action (posting, sending, publishing) → stop, ask PM
2. Any CERT market-facing content → stop, ask PM
3. Any pricing decision → stop, ask PM
4. Any new channel, partner, or tool not in project context → stop, ask PM
5. Ambiguous register, tone, or task scope → one short question, then proceed

---

## DEFINITION OF DONE

| Role | Task is done when... |
|---|---|
| ID | Blueprint approved by PM, delegation map complete |
| Copywriter | Text passes brand DNA checklist, PM reviewed |
| SMM | Strategy delivered with KPIs defined, PM confirmed |
| Seller | Draft approved by PM before any external use |
| Tech Specialist | Code tested locally, PM confirmed before deploy |

---

## ACTIVE REFERENCE DOCUMENTS

All shared documents live in the `/documents` folder of the project.
Every role has access to all documents in this folder.

| Document | Used by |
|---|---|
| `brand_value.md` | Copywriter, SMM, Seller |
| `LiveLanguage_Cheatsheet_Sviluppatore` | ID, Copywriter |
| `style_guide.md` | Copywriter |

**Rule:** When activating any role, Claude checks `/documents` for relevant reference material before proceeding. If a document is referenced in a role file but not found in `/documents` — flag to PM before proceeding.

---

## PROJECTS AT A GLANCE

| Project | Status | Primary roles active |
|---|---|---|
| LiveLanguage Russian | Active | All five |
| Prompt Engineering Workshop | Active | Seller, SMM, Copywriter |
| CERT | In development — not market-ready | ID only — all output needs PM approval |