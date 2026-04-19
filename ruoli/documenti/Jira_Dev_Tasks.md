# Jira — Dev Tasks: LiveLanguage Russian
**Creato:** April 18, 2026  
**Aggiornato:** April 18, 2026  
**Fonte:** LiveLanguage_Mappa_Esercizi_Verbi_Moto.md  
**Responsabile:** Claude (Tech Specialist) — segue istruzioni ISTRUZIONI.md  
**Copywriter:** fornisce i dati (array) dopo che il scaffold è pronto

---

## Responsabilità

| Ruolo | Compito |
|---|---|
| **Claude (Tech)** | Crea HTML scaffold + exercises.js shell (struttura senza dati) |
| **Copywriter** | Riempie gli array di dati in exercises.js |

---

## ⚠️ GRUPPO 1 — Scheletro: aggiungere exercises.js

HTML già presente. Manca exercises.js.

---

### LLR-T01 · moto-per-luogo — creare exercises.js shell

**Path:** `livello_elementare/verbi-di-moto/complementi-dei-verbi-di-moto/moto-per-luogo/`  
**Stato attuale:** HTML presente, exercises.js assente  
**Task:** Creare exercises.js con struttura shell

**Struttura pannelli (standard):**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

**Acceptance criteria:**
- [ ] exercises.js creato con import motori + initializers + initPanelManager
- [ ] Array placeholder vuoti `[]` per ogni pannello
- [ ] Pagina si carica senza errori JS

---

### LLR-T02 · moto-da-luogo — creare exercises.js shell

**Path:** `livello_elementare/verbi-di-moto/complementi-dei-verbi-di-moto/moto-da-luogo/`  
**Stato attuale:** HTML presente, exercises.js assente  
**Task:** Creare exercises.js con struttura shell

**Struttura pannelli (standard):**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

**Acceptance criteria:**
- [ ] exercises.js creato con import motori + initializers + initPanelManager
- [ ] Array placeholder vuoti `[]` per ogni pannello
- [ ] Pagina si carica senza errori JS

---

### LLR-T03 · xodit-idiomi — creare exercises.js shell

**Path:** `livello_elementare/verbi-di-moto/passato/xodit-idiomi/`  
**Stato attuale:** HTML presente, exercises.js assente  
**Task:** Creare exercises.js con struttura shell

**Struttura pannelli (standard):**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

**Acceptance criteria:**
- [ ] exercises.js creato con import motori + initializers + initPanelManager
- [ ] Array placeholder vuoti `[]` per ogni pannello
- [ ] Pagina si carica senza errori JS

---

### LLR-T04 · exat-ezdit-idiomi — creare exercises.js shell

**Path:** `livello_elementare/verbi-di-moto/passato/exat-ezdit-idiomi/`  
**Stato attuale:** HTML presente, exercises.js assente  
**Task:** Creare exercises.js con struttura shell

**Struttura pannelli (standard):**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

**Acceptance criteria:**
- [ ] exercises.js creato con import motori + initializers + initPanelManager
- [ ] Array placeholder vuoti `[]` per ogni pannello
- [ ] Pagina si carica senza errori JS

---

## ❌ GRUPPO 2 — Da creare: HTML + exercises.js

Pagine non ancora esistenti. Creare da zero seguendo ISTRUZIONI.md § "Aggiungere una nuova pagina esercizi".

---

### LLR-T05 · poyti-skhodit — futuro monodirezionali

**Path:** `livello_elementare/verbi-di-moto/futuro/poyti-skhodit/`  
**Task:** Creare index.html + exercises.js shell

**Contenuto didattico (da mappa):**
- пойду — mono perfettivo (идти)
- схожу — pluri perfettivo (ходить) andata e ritorno
- буду идти — mono imperfettivo
- буду ходить — pluri imperfettivo, abitudine
- Contrasto tra tutte e quattro le forme

**Struttura pannelli (standard):**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

**Acceptance criteria:**
- [ ] Cartella `futuro/poyti-skhodit/` creata
- [ ] index.html: scaffold pannelli con data-access corretto (public/paid)
- [ ] exercises.js: import motori + initializers + placeholder + initPanelManager
- [ ] Link aggiunto in `verbi-di-moto/index.html` nella sezione FUTURO
- [ ] Pagina si carica senza errori JS

---

### LLR-T06 · poekhat-sezdit — futuro ехать/ездить

**Path:** `livello_elementare/verbi-di-moto/futuro/verbi-specifici-futuro/poekhat-sezdit/`  
**Task:** Creare index.html + exercises.js shell

**Contenuto didattico (da mappa):**
- поеду — mono perfettivo (ехать)
- съезжу — pluri perfettivo (ездить)
- буду ехать — mono imperfettivo
- буду ездить — pluri imperfettivo
- Contrasto tra tutte e quattro le forme

**Struttura pannelli:** standard (vedi LLR-T05)

**Acceptance criteria:**
- [ ] Cartella e file creati
- [ ] Scaffold HTML + exercises.js shell
- [ ] Link aggiunto nell'indice futuro
- [ ] Nessun errore JS

---

### LLR-T07 · splavat-poplavat — futuro плыть/плавать

**Path:** `livello_elementare/verbi-di-moto/futuro/verbi-specifici-futuro/splavat-poplavat/`  
**Task:** Creare index.html + exercises.js shell

**Contenuto didattico (da mappa):**
- поплыву — mono perfettivo (плыть)
- сплаваю — pluri perfettivo (плавать)
- буду плыть — mono imperfettivo
- буду плавать — pluri imperfettivo
- Contrasto tra tutte e quattro le forme

**Struttura pannelli:** standard (vedi LLR-T05)

**Acceptance criteria:**
- [ ] Cartella e file creati
- [ ] Scaffold HTML + exercises.js shell
- [ ] Link aggiunto nell'indice futuro
- [ ] Nessun errore JS

---

### LLR-T08 · sbegat-pobezhat — futuro бежать/бегать

**Path:** `livello_elementare/verbi-di-moto/futuro/verbi-specifici-futuro/sbegat-pobezhat/`  
**Task:** Creare index.html + exercises.js shell

**Contenuto didattico (da mappa):**
- побегу — mono perfettivo (бежать)
- сбегаю — pluri perfettivo (бегать)
- буду бежать — mono imperfettivo
- буду бегать — pluri imperfettivo
- Contrasto tra tutte e quattro le forme

**Struttura pannelli:** standard (vedi LLR-T05)

**Acceptance criteria:**
- [ ] Cartella e file creati
- [ ] Scaffold HTML + exercises.js shell
- [ ] Link aggiunto nell'indice futuro
- [ ] Nessun errore JS

---

## Riepilogo

| ID | Pagina | Tipo |
|---|---|---|
| LLR-T01 | moto-per-luogo | ⚠️ no exercises.js → shell |
| LLR-T02 | moto-da-luogo | ⚠️ no exercises.js → shell |
| LLR-T03 | passato/xodit-idiomi | ⚠️ no exercises.js → shell |
| LLR-T04 | passato/exat-ezdit-idiomi | ⚠️ no exercises.js → shell |
| LLR-T05 | futuro/poyti-skhodit | ❌ da creare |
| LLR-T06 | futuro/poekhat-sezdit | ❌ da creare |
| LLR-T07 | futuro/splavat-poplavat | ❌ da creare |
| LLR-T08 | futuro/sbegat-pobezhat | ❌ da creare |
