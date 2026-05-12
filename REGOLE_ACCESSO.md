# Regole di Accesso — LiveLanguageRussian
**Data estrazione:** 2026-05-12  
**Scopo:** Documento per audit del comportamento della piattaforma da parte di un sistema IA.

---

## 1. Gerarchia dei Livelli Utente

| Livello | Valore numerico | Condizione |
|---------|----------------|------------|
| `none` | 0 | Utente non loggato |
| `public` | 1 | Utente loggato (account gratuito) |
| `student` | 2 | Profilo con `access_level = 'student'` su Supabase |
| `paid` | 3 | Profilo con `access_level = 'paid'` su Supabase |

**Regola di sblocco:** un pannello è accessibile se `livello_utente >= livello_pannello`.

---

## 2. Logica di Controllo Accessi (panel-manager.js)

- Autenticazione tramite **Supabase** (`supabase-js@2.46.1`)
- Al caricamento pagina, `initPanelManager({ enableAccessControl: true })` chiama `getUserLevel()`
- `getUserLevel()` controlla la sessione attiva e legge `profiles.access_level` da Supabase
- `applyAccessControl()` imposta `data-state="open"` o `data-state="blocked"` su ogni pannello
- Le **exercise-card** con target bloccato ricevono `data-card-state="blocked"` → appaiono grigie (`grayscale(1)`, `opacity: 0.5`, non cliccabili)
- I pannelli bloccati non vengono mai inizializzati (lazy init solo al primo click su pannello aperto)

---

## 3. Pagine con Auth-Guard (redirect a /login.html se non loggato)

Queste pagine verificano la sessione Supabase al caricamento e reindirizzano a `/login.html` se l'utente non è autenticato. La pagina rimane invisibile (`visibility: hidden`) fino alla conferma della sessione.

| Pagina | URL |
|--------|-----|
| Идти / Ходить (pluridirezionali) | `/livello_elementare/verbi-di-moto/pluridirezionali-vs-monodirezionali/` |
| Moto a luogo | `/livello_elementare/verbi-di-moto/complementi-dei-verbi-di-moto/moto-a-luogo/` |
| Moto per luogo | `/livello_elementare/verbi-di-moto/complementi-dei-verbi-di-moto/moto-per-luogo/` |
| Moto da luogo | `/livello_elementare/verbi-di-moto/complementi-dei-verbi-di-moto/moto-da-luogo/` |

**Tutte le altre pagine di esercizi NON hanno auth-guard** — sono accessibili senza login, ma i pannelli `student` e `paid` risultano bloccati visivamente.

---

## 4. Mappa Completa Accessi per Pagina

### Schema tipo (usato dalla maggior parte delle pagine)
Pattern: `public → student → paid → public → student → paid → public → student → paid → public`

| Posizione | Tipo esercizio | Livello accesso |
|-----------|---------------|----------------|
| 1 (panel-XX-01) | Drag & Drop | public |
| 2 (panel-XX-05) | Drag & Drop | student |
| 3 (panel-XX-06) | Drag & Drop | paid |
| 4 (panel-XX-02) | Flashcard | public |
| 5 (panel-XX-07 o 03) | Flashcard | student |
| 6 (panel-XX-08 o 07) | Flashcard | paid |
| 7 (panel-XX-03 o 08) | Flashcard | public |
| 8 (panel-XX-09) | Flashcard | student |
| 9 (panel-XX-10) | Flashcard | paid |
| 10 (panel-XX-04) | Quiz misto | public |

---

### 4.1 Complementi dei Verbi di Moto

#### Moto a luogo — `/complementi-dei-verbi-di-moto/moto-a-luogo/` ⚠️ AUTH-GUARD
| Pannello | Tipo | Accesso |
|----------|------|---------|
| panel-mal-open-1 | Drag & Drop | public |
| panel-mal-open-5 | Drag & Drop | student |
| panel-mal-open-6 | Drag & Drop | paid |
| panel-mal-open-2 | Flashcard | public |
| panel-mal-open-7 | Flashcard | student |
| panel-mal-open-8 | Flashcard | paid |
| panel-mal-open-3 | Flashcard | public |
| panel-mal-open-9 | Flashcard | student |
| panel-mal-open-10 | Flashcard | paid |
| panel-mal-open-4 | Quiz | public |

#### Moto da luogo — `/complementi-dei-verbi-di-moto/moto-da-luogo/` ⚠️ AUTH-GUARD
| Pannello | Tipo | Accesso |
|----------|------|---------|
| panel-mdl-01 | Drag & Drop | public |
| panel-mdl-05 | Drag & Drop | student |
| panel-mdl-06 | Drag & Drop | paid |
| panel-mdl-02 | Flashcard | public |
| panel-mdl-03 | Flashcard | student |
| panel-mdl-07 | Flashcard | paid |
| panel-mdl-08 | Flashcard | public |
| panel-mdl-09 | Flashcard | student |
| panel-mdl-10 | Flashcard | paid |
| panel-mdl-04 | Quiz | public |

#### Moto per luogo — `/complementi-dei-verbi-di-moto/moto-per-luogo/` ⚠️ AUTH-GUARD
| Pannello | Tipo | Accesso |
|----------|------|---------|
| panel-mpl-01 | Drag & Drop | public |
| panel-mpl-05 | Drag & Drop | student |
| panel-mpl-06 | Drag & Drop | paid |
| panel-mpl-02 | Flashcard | public |
| panel-mpl-03 | Flashcard | student |
| panel-mpl-07 | Flashcard | paid |
| panel-mpl-08 | Flashcard | public |
| panel-mpl-09 | Flashcard | student |
| panel-mpl-10 | Flashcard | paid |
| panel-mpl-04 | Quiz | public |

---

### 4.2 Pluridirezionali vs Monodirezionali — ⚠️ AUTH-GUARD
`/livello_elementare/verbi-di-moto/pluridirezionali-vs-monodirezionali/`

| Pannello | Tipo | Accesso |
|----------|------|---------|
| panel-acc-open-1 | Drag & Drop | public |
| panel-acc-open-5 | Drag & Drop | student |
| panel-acc-open-6 | Drag & Drop | paid |
| panel-acc-open-2 | Flashcard | public |
| panel-acc-open-7 | Flashcard | student |
| panel-acc-open-8 | Flashcard | paid |
| panel-acc-open-3 | Flashcard | public |
| panel-acc-open-9 | Flashcard | student |
| panel-acc-open-10 | Flashcard | paid |
| panel-acc-open-4 | Quiz | public |

---

### 4.3 Verbi Specifici

#### Andare con un mezzo — `/verbi-specifici/andare-con-un-mezzo/`
| Pannello | Tipo | Accesso |
|----------|------|---------|
| panel-mezzo-01 | Drag & Drop | public |
| panel-mezzo-05 | Drag & Drop | student |
| panel-mezzo-06 | Drag & Drop | paid |
| panel-mezzo-02 | Flashcard | public |
| panel-mezzo-07 | Flashcard | student |
| panel-mezzo-08 | Flashcard | paid |
| panel-mezzo-03 | Flashcard | public |
| panel-mezzo-09 | Flashcard | student |
| panel-mezzo-10 | Flashcard | paid |
| panel-mezzo-04 | Quiz | public |

#### Verbi di moto specifici — `/verbi-specifici/verbi-di-moto-specifici/`
> ⚠️ 11 pannelli (pannello extra paid)

| Pannello | Tipo | Accesso |
|----------|------|---------|
| panel-spec-01 | Drag & Drop | public |
| panel-spec-05 | Drag & Drop | student |
| panel-spec-06 | Drag & Drop | paid |
| panel-spec-11 | Drag & Drop | paid |
| panel-spec-02 | Flashcard | public |
| panel-spec-07 | Flashcard | student |
| panel-spec-08 | Flashcard | paid |
| panel-spec-03 | Flashcard | public |
| panel-spec-09 | Flashcard | student |
| panel-spec-10 | Flashcard | paid |
| panel-spec-04 | Quiz | public |

---

### 4.4 Verbi di Moto Transitivi
> ⚠️ Nessun livello `student` — salto diretto da `public` a `paid`

#### Нести / Носити — `/verbi-di-moto-transitivi/nesti-nositi/`
| Pannello | Tipo | Accesso |
|----------|------|---------|
| panel-nn-01 | Drag & Drop | public |
| panel-nn-05 | Drag & Drop | **paid** |
| panel-nn-06 | Drag & Drop | **paid** |
| panel-nn-02 | Flashcard | public |
| panel-nn-07 | Flashcard | **paid** |
| panel-nn-08 | Flashcard | **paid** |
| panel-nn-03 | Flashcard | public |
| panel-nn-09 | Flashcard | **paid** |
| panel-nn-10 | Flashcard | **paid** |
| panel-nn-04 | Quiz | public |

#### Вести / Водити — `/verbi-di-moto-transitivi/vesti-voditi/`
_(identico a nesti-nositi: public × 4, paid × 6)_

#### Везти / Возити — `/verbi-di-moto-transitivi/vezti-voziti/`
> ⚠️ Solo 3 pannelli public (panel-vz-03 è paid anziché public)

| Pannello | Tipo | Accesso |
|----------|------|---------|
| panel-vz-01 | Drag & Drop | public |
| panel-vz-05 | Drag & Drop | paid |
| panel-vz-06 | Drag & Drop | paid |
| panel-vz-02 | Flashcard | public |
| panel-vz-07 | Flashcard | paid |
| panel-vz-08 | Flashcard | paid |
| panel-vz-03 | Flashcard | **paid** ← anomalia |
| panel-vz-09 | Flashcard | paid |
| panel-vz-10 | Flashcard | paid |
| panel-vz-04 | Quiz | public |

---

### 4.5 Passato

#### Идти / Ходить al passato — `/passato/idti-xodit-passato/`
_(schema standard: public × 4, student × 3, paid × 3)_

#### Ехать / Ездить al passato — `/passato/exat-ezdit-passato/`
_(schema standard)_

#### Verbi specifici al passato — `/passato/specifici-passato/`
> ⚠️ 11 pannelli (panel-past-sp-11 extra paid)

_(schema standard + panel-past-sp-11: paid)_

---

### 4.6 Futuro

#### Пойти / Сходить — `/futuro/poyti-skhodit/`
_(schema standard: public × 4, student × 3, paid × 3)_

#### Поехать / Съездить — `/futuro/verbi-specifici-futuro/poekhat-sezdit/`
_(schema standard)_

#### Сбегать / Побежать — `/futuro/verbi-specifici-futuro/sbegat-pobezhat/`
_(schema standard)_

#### Сплавать / Поплавать — `/futuro/verbi-specifici-futuro/splavat-poplavat/`
_(schema standard)_

---

### 4.7 Sezione Principianti

#### Accusativo — `/principianti/casi/accusativo-come-ti-chiami/`
_(schema standard: public × 4, student × 3, paid × 3)_

#### Genitivo — `/principianti/casi/genitivo-di-chi-e/`
> ⚠️ Solo 9 pannelli (manca panel-acc-open-3)

| Pannello | Accesso |
|----------|---------|
| panel-acc-open-1 | public |
| panel-acc-open-5 | student |
| panel-acc-open-6 | paid |
| panel-acc-open-2 | public |
| panel-acc-open-7 | student |
| panel-acc-open-8 | paid |
| panel-acc-open-9 | student |
| panel-acc-open-10 | paid |
| panel-acc-open-4 | public |

---

## 5. Comportamento Visivo dei Contenuti Bloccati

| Elemento | Comportamento |
|----------|--------------|
| `exercise-card[data-card-state="blocked"]` | `opacity: 0.5`, `filter: grayscale(1)`, `pointer-events: none` — carta grigia, non cliccabile |
| `exercise-panel[data-state="blocked"]` | `opacity: 0.5`, `filter: grayscale(0.3)`, `pointer-events: none` |
| Pagine con auth-guard (non loggato) | Pagina invisibile (`visibility: hidden`) → redirect immediato a `/login.html` |

---

## 6. Anomalie Rilevate

| Anomalia | Pagina | Dettaglio |
|----------|--------|-----------|
| Nessun livello `student` | nesti-nositi, vesti-voditi | Salto diretto public → paid |
| Solo 3 pannelli public | vezti-voziti | panel-vz-03 è `paid` invece di `public` |
| 11 pannelli | specifici-passato, verbi-di-moto-specifici | Pannello extra `paid` (panel-11) |
| 9 pannelli | genitivo-di-chi-e | Manca panel-acc-open-3 |
| Auth-guard assente | tutte le pagine tranne le 4 elencate | Le altre pagine di esercizi sono accessibili senza login |

---

## 7. Riepilogo Numerico

| Livello | Totale pannelli | % |
|---------|----------------|---|
| public | 78 | 39% |
| student | 49 | 25% |
| paid | 71 | 36% |
| **Totale** | **198** | **100%** |

**Pagine con auth-guard:** 4  
**Pagine senza auth-guard:** 15  
**Pagine con anomalie nei livelli:** 4
