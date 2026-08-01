# Jira — Tech Backlog: Architettura Generale
**Creato:** 24 luglio 2026
**Fonte:** Audit strutturale completo del sito (sessione 24.07.2026) — verificato file per file, non da documentazione precedente
**Responsabile:** Claude (Tech Specialist)
**Sostituisce:** `Jira_Dev_Tasks.md` (LLR-T01–T08 completati, vedi riepilogo in fondo) — questo file copre l'intera architettura, non solo verbi di moto

**Nota metodologica:** ogni voce è stata verificata leggendo il contenuto reale di `exercises.js` / HTML / link, non solo la presenza di file o cartelle. Vedi memoria di sessione `project_funnel_and_content_status.md` per il dettaglio dell'audit.

---

## 🔴 GRUPPO 1 — Blocker di lancio (rompono l'esperienza utente reale)

### LLR-T13 · Consolidare i due flussi di autenticazione
**Problema:** `courses.html` porta a `/register.html` → Stripe → `/login.html` (flusso reale, funzionante). `ISTRUZIONI.md` dichiara `register.html`/`login.html` "backup, non più usato" a favore di `auth.html`, ma `auth.html` non è collegato al checkout Stripe.
**Decisione necessaria (PM):** quale flusso è canonico?
**Task:** una volta deciso — reindirizzare/rimuovere il flusso non canonico, aggiornare `ISTRUZIONI.md`.
**Blocca:** rischio di confusione utente/supporto, testing pre-lancio inaffidabile.

### LLR-T14 · Creare `privacy-policy.html`
**Problema:** link nel footer di `index.html` porta a un file inesistente → 404 dalla landing page.
**Task:** creare la pagina (contenuto: Seller/PM — GDPR, Stripe/Supabase come sub-processor, reCAPTCHA).
**Blocca:** compliance legale, prima cosa che un utente scettico controlla.

### LLR-T15 · Rimuovere/correggere i link `/argomenti/*.html` in `principianti/index.html`
**Problema:** 3 card (`caratteristiche-una-caratteristica-particolare`, `forma-e-dimensione`, `tempo-che-tempo-fa`) puntano a un percorso `/argomenti/` che non esiste in nessuna forma sul sito. Noto da aprile 2026, mai risolto.
**Task:** rimuovere le card finché il contenuto non esiste, o ricollegarle a pagine reali se il contenuto è stato spostato altrove.

### LLR-T16 · Decidere sort/rimozione pagine orfane vuote
**Problema:** pagine raggiungibili (in nav o per URL diretto) con `exercises.js` vuoto o assente:
- `idti-usi-speciali` — `enableAccessControl: true` senza un solo initializer (si rompe silenziosamente se qualcuno ci entra)
- `passato/xodit-idiomi`, `passato/exat-ezdit-idiomi` — HTML presente, `exercises.js` assente (import fallirebbe, 404 in console)
- `passato/exat-ezdit-passato`, `passato/verbi-specifici-passato/nuotare`, `/volare` — tutti i pannelli commentati/array vuoti, ma linkate da pagine indice reali
**Decisione necessaria (PM/ID):** completare (Copywriter fornisce dati) o disconnettere temporaneamente dalla navigazione finché non sono pronte.
**Task tecnico:** se disconnessione → rimuovere il link dalla pagina indice padre. Se completamento → resta task Copywriter, non Tech.

---

## 🟡 GRUPPO 2 — Debito infrastrutturale (non rompe nulla oggi, ma blocca crescita)

### LLR-T17 · Nessuna CTA dalle pagine esercizi gratuite verso l'acquisto
**Problema:** verificato in `panel-manager.js`, `engines/*.js`, `access-control.css` e HTML delle pagine esercizi — zero riferimenti a `courses.html`/`register.html`. Le card student/paid bloccate sono solo visive (`grayscale`, `opacity`, `pointer-events: none`), senza click-through verso l'offerta.
**Task:** aggiungere un punto di conversione minimo — es. click su card bloccata → redirect a `courses.html` (o modale con link), non solo stato grigio passivo.
**Decisione necessaria (PM/Seller):** dove deve atterrare il click (courses.html generico o piano specifico?).

### LLR-T18 · Wiring tecnico assente per le altre 6 maratone
**Problema:** in `corsi/MARATONE/` solo `VERBI_DI_MOTO` ha contenuto; le altre 6 cartelle sono vuote (`.gitkeep`). `courses.html` vende solo 3 piani, tutti riconducibili a un'unica maratona. Non è un gap di contenuto soltanto — manca anche l'infrastruttura tecnica (link Stripe, sezione in courses.html, plan param routing) per quando il contenuto sarà pronto.
**Task:** predisporre lo scaffold tecnico riutilizzabile (sezione corso in courses.html + STRIPE_LINKS map in register.html) così che aggiungere una nuova maratona sia un'operazione di dati, non di codice.
**Priorità:** dopo decisione PM/Seller su quale maratona sviluppare dopo verbi di moto.

### LLR-T19 · Scaffold mancante — Presente (verbi di moto)
**Problema:** nessun HTML, nessun exercises.js. Per l'architettura a cluster (`LiveLanguage_Architettura_Cluster.md`) è il punto d'ingresso del cluster AZIONE — la sequenza passato→futuro esiste ma presente no.
**Task:** creare cartella + index.html scaffold + exercises.js shell (schema standard, come da `ISTRUZIONI.md` § "Aggiungere una nuova pagina esercizi"), poi collegare in `verbi-di-moto/index.html`.

### LLR-T20 · Scaffold mancante — 3 pagine caso vuote
**Problema:** `prepositivo-il-caso-dello-spazio`, `accusativo-il-caso-del-tempo-perduto`, `strumentale-il-caso-del-modo` esistono come contenitori (`<h1>` + `<section>` vuota) senza una sola card.
**Riferimento contenuto:** `Mappa Casi → Complementi` (v1.0, luglio 2026) — vedi memoria `project_mappa_casi_complementi.md` per la risoluzione dei link reali vs quelli nel documento.
**Task:** creare le card-scaffold per i complementi con livello A1 già definito nella mappa (es. Prepositivo: stato in luogo, mezzo di trasporto — gli altri sono "in arrivo 🔒" nella mappa stessa, non richiedono scaffold ora).
**Blocca su:** decisione PM sul punto 3 della mia domanda precedente (chi scrive l'HTML, quando iniziare).

### LLR-T21 · Genitivo — card disallineate dalla mappa
**Problema:** le 2 card esistenti (`sostantivi`, `quando-un-sostantivo-incontra-un-aggettivo`) non corrispondono a nessuno dei 13 complementi della `Mappa Casi → Complementi`. Sembrano residuo di un'architettura precedente (genitivo plurale, cfr. `corsi/MARATONE/GENITIVO_PLERALE/`).
**Decisione necessaria (PM/ID):** rimuovere, rinominare, o integrare nella mappa come voci aggiuntive.

### LLR-T22 · Scaffold mancante — `aspetto/` e `complementi/` (livello elementare)
**Problema:** due macro-aree di primo livello, entrambe contenitori vuoti senza figli — stesso pattern delle pagine caso.
**Task:** in attesa di contenuto ID prima di scaffoldare (non ha senso creare card senza sapere cosa contengono).

---

## 📄 GRUPPO 3 — Debito documentale (non blocca il sito, ma disallinea chi lavora sul repo)

### LLR-T23 · `ISTRUZIONI.md` obsoleto
Riferisce una struttura di cartelle vecchia (`verbi-di-moto-transitivi/` a livello root, non sotto `verbi-di-moto/`), dichiara register.html/login.html "non più usati" mentre sono nel flusso di pagamento reale. Da riscrivere dopo LLR-T13.

### LLR-T24 · `Jira_Dev_Tasks.md` da archiviare
Tutti i task elencati (T01–T08) sono completati e verificati. Questo file (`Jira_Tech_Backlog_Architettura.md`) lo sostituisce come backlog attivo — proporrei di lasciare il vecchio file come storico o cancellarlo, a scelta PM.

---

## ✅ Riepilogo — cosa NON è nel backlog perché già fatto (verificato 24.07.2026)
LLR-T01, T02, T05, T06, T07, T08 (moto-da/per-luogo, tutto il blocco futuro) — completati, exercises.js pieno e collegato in navigazione.

## ⏸️ Fuori scope Tech — richiede prima input di altri ruoli
- Anomalie `data-access` sui pannelli (moto-da-luogo, moto-per-luogo, nesti-nositi, vesti-voditi, vezti-voziti) — documentate in `REGOLE_ACCESSO.md` e memoria `project_access_control_audit.md`. **Non toccare senza comando esplicito PM.**
- Contenuto testuale di qualunque pagina — sempre Copywriter, mai Tech.
- Priorità fra T17/T18/T19/T20 — decisione PM in base a roadmap business.
