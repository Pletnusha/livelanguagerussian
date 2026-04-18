# LiveLanguage Russian - Project Gaps & Roadmap

**Document Purpose:** Comprehensive analysis of missing information across all project roles, with prioritized roadmap for filling gaps.

**Date Created:** March 15, 2026
**Last Updated:** April 16, 2026
**Project Status:** Pre-launch — platform built, no revenue yet

---

## 🎯 EXECUTIVE SUMMARY

**Current State (April 16, 2026):**
- ✅ Technical infrastructure: COMPLETE (GitHub Pages, Supabase, n8n, Stripe)
- ✅ Platform structure: COMPLETE (auth, admin dashboard, 3 access tiers: public / student / paid)
- ✅ Exercise content: PARTIAL (verbi di moto + transitivi + complementi + passato + aspetto + падежи)
- ✅ Role documentation: COMPLETE (ID, Copywriter, Tech Specialist, Seller, SMM)
- ❌ Marathon #1: NOT LAUNCHED (was planned March 20 — postponed)
- ❌ Email list: ZERO subscribers
- ❌ Paying students: ZERO
- ❌ Advertising / SMM: NOT STARTED

**Critical Bottleneck:** No traffic, no list, no revenue. Platform is ready but invisible.

**Funnel Logic:**
```
Регистрация (бесплатно)
    │
    ▼
Public panels + Доп. материалы (бесплатно после регистрации)
    │
    ▼
Приглашение на бесплатный вебинар
    │
    ▼
Марафон (платно — продажа с вебинара → статус Student)
    │
    ▼
Следующий блок (paid panels — upsell)
```

**Access tiers (реализованы на уровне панелей внутри каждого топика):**
- **public** — базовые панели + доп. материалы: доступны всем зарегистрированным (бесплатно)
- **student** — панели для студентов: открываются после покупки марафона или пакета лекций
- **paid** — продвинутые панели: отдельная покупка (следующий блок, upsell)

**Immediate Priority:** Запустить трафик → регистрация → вебинар → продать марафон → upsell на paid блок.

---

## 📋 GAP ANALYSIS BY ROLE

### **1. INSTRUCTIONAL DESIGNER**

#### **RESOLVED:**
- ✅ Marathon curriculum: documented (verbi di moto)
- ✅ 3 access tiers defined (public / student / paid)
- ✅ Tier assignment: mappato nel codice a livello di pannello

#### **CONTENT STATUS — esercizi esistenti (exercises.js presente):**
- ✅ verbi di moto: pluridirezionali-vs-monodirezionali, verbi-di-moto-specifici, andare-con-un-mezzo, idti-usi-speciali
- ✅ verbi di moto: passato (idti-xodit, exat-ezdit, specifici)
- ✅ verbi di moto: complementi-dei-verbi-di-moto, moto-a-luogo
- ✅ verbi di moto transitivi: nesti-nositi, vesti-voditi, vezti-voziti
- ✅ principianti / casi: accusativo, genitivo

#### **OPEN GAPS:**

**Webinar (nuovo step — blocca il lancio della maratona):**
- ❌ Piattaforma webinar scelta: Zoom? StreamYard? Google Meet?
- ❌ Data webinar fissata
- ❌ Contenuto webinar: struttura, durata, pitch finale per la maratona
- ❌ Soglia minima iscritti webinar per procedere

**Marathon:**
- ❌ Session 1 materials: slides, handouts ready?
- ❌ Duration confirmed: how many weeks, how many sessions/week?
- ❌ Participant minimum: 3? 5? (threshold to run or cancel)
- ❌ Platform: Zoom / Google Meet?

**Platform content:**
- ✅ Tier assignment: mappato nel codice a livello di pannello (exercises.js)
- ❌ Difficulty progression between blocks: defined?
- ❌ Assessment / milestone tests: planned?

**Missing macro-themes:**
- ❌ Priority order for next content blocks after existing ones
- ❌ Time estimate per new macro-theme

---

### **2. TECH SPECIALIST**

#### **RESOLVED:**
- ✅ Platform pages: built
- ✅ Auth / login / register: working
- ✅ Admin dashboard: built
- ✅ 3 access tiers: implemented

#### **OPEN GAPS:**
- ❌ Stripe → Supabase webhook: tested end-to-end?
- ❌ Student dashboard: what does user see after login?
- ❌ Progress tracking: implemented or planned?
- ❌ Mobile optimization: drag-and-drop exercises tested on mobile?
- ❌ Analytics: Google Analytics installed? Custom events?
- ❌ Email capture form: where does subscriber go? (n8n → what list?)

---

### **3. COPYWRITER**

#### **RESOLVED:**
- ✅ Role documentation: written

#### **RESOLVED:**
- ✅ Email funnel Day 0–16: scritto

#### **OPEN GAPS (blocking launch):**
- ❌ Marathon promotional emails: da verificare (annuncio / countdown / last chance)
- ❌ Webinar landing page: titolo, benefici, form iscrizione
- ❌ Webinar script / presentazione: struttura + pitch finale maratona
- ❌ Marathon landing page copy: headline, benefits, CTA
- ❌ Brand positioning statement: not defined
- ❌ Student personas: not documented
- ❌ Exercise feedback messages (correct / incorrect): tone defined?

---

### **4. SELLER**

#### **OPEN GAPS:**
- ❌ Marathon pricing confirmed: €79 / €70 early bird still valid?
- ❌ Refund policy: defined?
- ❌ Platform block pricing: €3.99 confirmed?
- ❌ Post-marathon upsell offer: how is platform presented to marathon students?
- ❌ Student onboarding sequence (post-purchase): email flow defined?

#### **🔴 INVESTOR TRACK — URGENTE:**
- ❌ Pitch deck: **scadenza 20 aprile 2026** (4 giorni)
  - Problema da risolvere + mercato
  - Prodotto + funnel (public → webinar → maratona → paid)
  - Traction attuale (piattaforma pronta, contenuti, architettura)
  - Modello di revenue + proiezioni
  - Ask: quanto, per cosa, con quale ritorno
- ❌ Tipo di investitore target: angel? grant edtech? acceleratore?
- ❌ Lista contatti investitori: da compilare

---

### **5. SMM**

#### **OPEN GAPS:**
- ❌ Primary platform chosen: Instagram? TikTok? YouTube?
- ❌ First post published: no
- ❌ Hashtag strategy: not researched
- ❌ Content calendar: not created
- ❌ Visual style guide / Canva templates: not created
- ❌ Marathon promotion plan: when to start, what formats

---

## 🗺️ UPDATED ROADMAP

### **FASE 0 — IMMEDIATA (aprile 2026)**
**Obiettivo:** Attivare la funnel + pitch deck investitori

**🔴 INVESTOR TRACK (scadenza 20 aprile 2026):**
- [ ] Pitch deck completo — Seller
- [ ] Definire tipo investitore target — PM
- [ ] Compilare lista primi contatti — PM

**Instructional Designer:**
- [ ] Confermare la struttura della maratona (settimane, sessioni, durata)
- [ ] Preparare i materiali della Sessione 1 (slide, handout)
- [ ] Definire il minimo di partecipanti (soglia go/no-go)
- [ ] Strutturare il contenuto del webinar gratuito (argomento, durata, pitch finale)

**Tech Specialist:**
- [ ] Testare il flusso completo: Stripe pagamento → Supabase → accesso contenuto
- [ ] Verificare il form di registrazione (dove vanno i subscriber in n8n?)
- [ ] Test mobile su esercizi principali

**Copywriter:**
- [ ] Welcome email (Day 0): benvenuto dopo registrazione
- [ ] Email invito webinar: da inviare agli iscritti
- [ ] Landing page webinar: titolo + benefici + form iscrizione
- [ ] Landing page maratona: headline + benefits + CTA + link Stripe

**SMM:**
- [ ] Scegliere piattaforma primaria
- [ ] Creare 3 Canva template base
- [ ] Pubblicare primo post (presentazione / teaser contenuto gratuito)

**Seller:**
- [ ] Confermare pricing maratona
- [ ] Definire la policy di rimborso
- [ ] Preparare il pitch upsell paid panels (da usare alla fine della maratona)

---

### **FASE 1 — MAGGIO 2026**
**Obiettivo:** Webinar #1 → Maratona #1 → prime testimonianze + outreach investitori

**🔴 INVESTOR TRACK:**
- [ ] Primi outreach inviati (min. 5 contatti)
- [ ] Feedback raccolto sul pitch deck
- [ ] Pitch deck aggiornato con dati reali (iscritti webinar, partecipanti maratona)

**Milestones:**
- [ ] Webinar #1 erogato (min. 10 iscritti)
- [ ] Maratona #1 venduta dal webinar (min. 3 partecipanti)
- [ ] Maratona #1 erogata
- [ ] Testimonianze raccolte (almeno 2 scritte, 1 video se possibile)
- [ ] Offerta upsell paid panels presentata ai partecipanti maratona

**Instructional Designer:**
- [ ] Erogare il webinar gratuito
- [ ] Erogare tutte le sessioni maratona
- [ ] Raccogliere feedback strutturato dai partecipanti
- [ ] Definire Macro-tema #1 prioritario per i paid panels

**Copywriter:**
- [ ] Scrivere email funnel Day 0–16 (completo)
- [ ] Creare 2 student personas dal feedback del webinar e della maratona

**SMM:**
- [ ] Postare 3x/settimana (promozione webinar + maratona)
- [ ] Pubblicare le testimonianze dei partecipanti
- [ ] Crescita follower: obiettivo 50

---

### **FASE 2 — GIUGNO–LUGLIO 2026**
**Obiettivo:** Soft launch piattaforma + Maratona #2

**Milestones:**
- [ ] Piattaforma aperta agli iscritti alla lista (soft launch)
- [ ] Primi blocchi venduti
- [ ] Maratona #2 annunciata e promossa

**Tech Specialist:**
- [ ] Progress tracking implementato (base)
- [ ] Dashboard studente: MVP visibile dopo login
- [ ] Analytics: Google Analytics + eventi custom (exercise_completed, block_purchased)

**Seller:**
- [ ] Sequenza onboarding post-acquisto scritta e attivata
- [ ] Upsell maratona → piattaforma (e viceversa) definito
- [ ] Primo A/B test pricing se dati sufficienti

**SMM:**
- [ ] Crescita follower: obiettivo 100
- [ ] Contenuti testimonianze + educational mix
- [ ] Lanciare challenge settimanale

---

### **FASE 3 — AGOSTO–SETTEMBRE 2026**
**Obiettivo:** Lancio pubblico piattaforma + scala contenuti

**Milestones:**
- [ ] Piattaforma lanciata pubblicamente
- [ ] 2 macro-temi completi (200 esercizi live)
- [ ] Maratona #2 erogata
- [ ] Revenue: obiettivo €1.000 cumulato

**Instructional Designer:**
- [ ] Macro-tema #2 completo (100 esercizi)
- [ ] Placement test / assessment: bozza

**Tech Specialist:**
- [ ] Ottimizzazione mobile completa
- [ ] Caching e performance
- [ ] Inizio documentazione requisiti AI tutor (2027)

**Copywriter:**
- [ ] 3+ blog post SEO
- [ ] Email re-engagement per utenti inattivi
- [ ] Copy pagina pubblica piattaforma

**SMM:**
- [ ] Crescita follower: obiettivo 150
- [ ] Primo Reel / video breve
- [ ] 1–2 collaborazioni esplorate

---

### **FASE 4 — OTTOBRE–DICEMBRE 2026**
**Obiettivo:** Lezioni di gruppo + scala + pianificazione 2027

**Milestones:**
- [ ] Lezioni di gruppo lanciate (1–2 gruppi)
- [ ] 3 macro-temi completi sulla piattaforma
- [ ] Maratona #3 erogata
- [ ] Revenue: obiettivo €2.500 cumulato

**Tutto come da roadmap originale — rivalutare a settembre 2026.**

---

## 📊 METRICS DASHBOARD (aggiornato)

| Metrica | Aprile | Maggio | Giugno | Luglio | Agosto | Sett | Ott | Nov | Dic |
|---------|--------|--------|--------|--------|--------|------|-----|-----|-----|
| Email subscribers | 0 | 20 | 50 | 80 | 100 | 150 | | | 200 |
| Follower Instagram | 0 | 50 | 80 | 100 | 130 | 150 | | | 200 |
| Partecipanti maratona | — | 5 | — | 8 | — | 10 | | | |
| Studenti paganti (piatt.) | 0 | 0 | 5 | 15 | 25 | 40 | | | |
| Blocchi venduti | 0 | 0 | 10 | 30 | 60 | 100 | | | |
| Revenue (€) | 0 | 350 | 400 | 600 | 900 | 1.200 | | | 2.500 |
| Esercizi live | ~200 | ~200 | 300 | 400 | 500 | 500 | | | 700 |

---

## ⚠️ RED FLAGS

- ⚠️ Maratona #1 non si riempie (< 3 iscritti): rivalutare canale di promozione
- ⚠️ Lista email a zero dopo 30 giorni di SMM: problema di traffico o di offerta
- ⚠️ Studenti acquistano ma non completano (completion < 30%): problema di UX o contenuto
- ⚠️ Creazione contenuti > 6 settimane per macro-tema: ridurre scope o semplificare formato

---

## 💡 QUICK WINS (aprile 2026)

- [ ] Pubblicare il primo post Instagram oggi (presentazione / "chi sono")
- [ ] Creare una landing page maratona minima (anche semplice) con link Stripe
- [ ] Attivare un form di cattura email sul sito (anche un solo campo)
- [ ] Scrivere l'email Day 0 (benvenuto) — la più importante della sequenza

---

## 🔗 DIPENDENZE CRITICHE

| Deliverable | Dipende da |
|---|---|
| Vendita maratona | Landing page + promozione SMM |
| Lista email | Form attivo + traffico |
| Upsell piattaforma | Maratona erogata + testimonianze |
| Soft launch piattaforma | Lista email + acquisto flow testato |
| Lancio pubblico | 2 macro-temi completi + analytics |

---

**Document Version:** 2.0
**Last Updated:** April 16, 2026
**Next Review:** May 31, 2026 (dopo Maratona #1)
