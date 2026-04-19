# LiveLanguage Russian — ID Blueprint: A2 Didactic Gaps
**Creato:** April 19, 2026
**Ruolo:** Instructional Designer
**Sprint:** Gap A2 — Futuro + Passato (priorità critica)

---

## Sprint prioritization

| Priorità | Modulo | Path |
|---|---|---|
| 🔴 SPRINT 1 | futuro/sv-piano | `futuro/poyti-skhodit/` |
| 🔴 SPRINT 1 | futuro/nsv-processo | `futuro/nsv-processo/` |
| 🔴 SPRINT 1 | passato/senza-verbi-di-moto | `passato/senza-verbi-di-moto/` |
| 🟡 SPRINT 2 | passato/passato-e-tempo | `passato/passato-e-tempo/` |
| 🟡 SPRINT 2 | futuro/sv-vs-nsv contrasto | `futuro/sv-vs-nsv/novyy-god-plany/` |

---

## MODULE 1 — futuro/sv-piano

**Path:** `livello_elementare/verbi-di-moto/futuro/poyti-skhodit/`
**Cluster:** MOVIMENTO (A2)
**Funzione semantica:** INTENZIONE — piano concreto, decisione singola
**Strumento grammaticale:** Futuro SV monodirezionale — пойду / поеду / полечу / побегу / поплыву

**Obiettivo di apprendimento:**
Lo studente esprime un piano concreto di andare da qualche parte (una direzione, una volta) usando il futuro perfettivo dei verbi monodirezionali. Distingue пойду (decisione/risultato) da буду идти (processo).

**Prerequisiti:** идти/ходить, ехать/ездить al presente e passato (già completati).

**Struttura pannelli:**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

| Pannello | Tipo | Descrizione |
|---|---|---|
| P1 | DD | Match infinitivo → futuro SV (идти→пойду, ехать→поеду, лететь→полечу, бежать→побегу, плыть→поплыву, нести→понесу) |
| P2 | FC | Situazione → forma. "Завтра я ___ в кино" → пойду |
| P3 | FC | Frase italiana → traduzione russa (solo пойду) |
| P4 | MX | Quiz — scegli la forma corretta nel dialogo (3 opzioni) |
| P5 | DD | Ricostruisci frase con verbo corretto + destinazione |
| P6 | DD | Ordina: пойду vs поеду (distinzione mezzo di trasporto) |
| P7 | FC | Dialogo esteso — piano fine settimana di Natasha (6 frasi, tutto SV futuro) |
| P8 | FC | Error correction — trova la forma sbagliata, scegli quella corretta |
| P9 | FC | Produzione — data la situazione, lo studente produce la frase completa |
| P10 | FC | Mini-sprint traduzione (8 frasi italiane → пойду/поеду/полечу) |

**Lessico:** город, парк, магазин, аэропорт, университет, друг, кино, ресторан

**Rischi:**
- Non introdurre схожу (pluri SV) in questo modulo — modulo separato
- Non mescolare con буду идти — contrasto solo in M5
- Situazioni devono essere concrete e temporalmente ancorate (Завтра в 10)

**Copywriter task:** Scrivi contenuto per 10 pannelli. Contesti: piani weekend, appuntamenti, decisioni annunciate. Nessuna metalinguistica.
**Tech task:** Jira LLR-T05 — scaffold già in lista. Creare HTML + exercises.js shell prima che il Copywriter riempia gli array.

---

## MODULE 2 — futuro/nsv-processo

**Path:** `livello_elementare/verbi-di-moto/futuro/nsv-processo/`
**Cluster:** MOVIMENTO (A2) + AZIONE (A2)
**Funzione semantica:** PROCESSO — azione in corso nel futuro, abitudine futura
**Strumento grammaticale:** буду + infinitivo NSV (буду идти / буду ходить / буду читать)

**Obiettivo di apprendimento:**
Lo studente usa буду + inf. NSV per descrivere un processo futuro in corso o un'abitudine futura. Distingue da пойду (risultato) tramite marcatori temporali: весь день, каждый день, долго.

**Struttura pannelli:**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

| Pannello | Tipo | Descrizione |
|---|---|---|
| P1 | DD | Match situazione → forma (весь день буду идти vs завтра пойду) |
| P2 | FC | FC con marcatori durativi come scaffolding (весь день, долго, каждое утро) |
| P3 | FC | FC con marcatori abitudinali (каждый день, по утрам) |
| P4 | MX | Quiz — scegli пойду vs буду идти nel contesto |
| P5 | DD | Ricostruisci frase con буду + inf. corretto |
| P6 | DD | Ordina: пойду vs буду идти (distinzione aspettuale in contesto) |
| P7 | FC | Dialogo — piano di una giornata (mix SV/NSV futuro) |
| P8 | FC | Error correction — forma aspettualmente sbagliata |
| P9 | FC | Produzione guidata — data situazione, produrre forma corretta |
| P10 | FC | Mini-sprint (8 frasi: processo vs risultato futuro) |

**Marcatori chiave:** весь день / каждый день / каждое утро / долго / по вечерам

**Rischi:**
- Non introdurre схожу qui — aspect overload. Un contrasto per modulo.
- Mantenere contesti chiari: durata vs puntualità

**Copywriter task:** Contesti durata e routine futura. Nessuna metalinguistica aspettuale — solo marcatori temporali come scaffolding.
**Tech task:** Nuovo Jira task — creare HTML + exercises.js shell per `futuro/nsv-processo/`

---

## MODULE 3 — passato/senza-verbi-di-moto

**Path:** `livello_elementare/passato/senza-verbi-di-moto/`
**Cluster:** AZIONE (A2)
**Funzione semantica:** EVENTO PASSATO — azione quotidiana conclusa
**Strumento grammaticale:** Passato NSV (imperfettivo) — accordo per genere

**Obiettivo di apprendimento:**
Lo studente usa il passato di verbi comuni non-di-moto in contesto autobiografico e narrativo. Produce l'accordo corretto per genere (работал / работала).

**Struttura pannelli:**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

| Pannello | Tipo | Descrizione |
|---|---|---|
| P1 | DD | Match infinitivo → forma passato m/f (6 verbi: работать, читать, говорить, смотреть, слушать, писать) |
| P2 | FC | FC — ieri con verbi quotidiani (accordo genere) |
| P3 | FC | FC — la settimana scorsa, contesto narrativo |
| P4 | MX | Quiz — scegli forma corretta (accordo genere m/f/n/pl) |
| P5 | DD | Ricostruisci frase al passato |
| P6 | DD | Ordina: NSV passato in cronologia di giornata |
| P7 | FC | Mini-racconto autobiografico (8 frasi, solo NSV passato) |
| P8 | FC | Error correction — forma di genere sbagliata |
| P9 | FC | Produzione — data situazione italiana, produrre frase russa |
| P10 | FC | Sprint traduzione (8 frasi, mix m/f) |

**Lessico:** работать, читать, говорить, смотреть, слушать, писать, учить, готовить, отдыхать, думать, помогать

**Rischi:**
- Solo NSV imperfettivo — azioni durative/abitudinali. SV passato = modulo separato futuro.
- Non mescolare con verbi di moto — quelli hanno già i loro moduli.
- Accordo genere è lo scaffold principale — non sovraccaricare con aspetto.

**Copywriter task:** Contesti: giornata tipo, fine settimana, vacanza passata. Tono narrativo semplice. Prima persona singolare (m e f alternati).
**Tech task:** Nuovo Jira task — creare HTML + exercises.js shell per `passato/senza-verbi-di-moto/`

---

## MODULE 4 — passato/passato-e-tempo

**Path:** `livello_elementare/passato/passato-e-tempo/`
**Cluster:** LUOGO E TEMPO (A2)
**Funzione semantica:** ANCORAGGIO TEMPORALE nel passato
**Strumento grammaticale:** Marcatori temporali retrospettivi + passato NSV

**Obiettivo di apprendimento:**
Lo studente ancora le azioni al passato usando marcatori temporali standard: вчера / на прошлой неделе / в прошлом месяце / в прошлом году / в 2023 году.

**Prerequisito:** M3 (passato senza movimento) completato.

**Struttura pannelli:**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

| Pannello | Tipo | Descrizione |
|---|---|---|
| P1 | DD | Match marcatore → equivalente italiano (вчера→ieri, на прошлой неделе→la settimana scorsa) |
| P2 | FC | Frase con lacuna — inserire marcatore corretto |
| P3 | FC | FC — scegli il marcatore giusto per il contesto |
| P4 | MX | Quiz — seleziona marcatore corretto tra 3 opzioni |
| P5 | DD | Ricostruisci frase con verbo al passato + marcatore |
| P6 | DD | Ordina cronologicamente (ieri → la settimana scorsa → l'anno scorso) |
| P7 | FC | Mini-dialogo — racconto di vacanza con marcatori |
| P8 | FC | Error correction — marcatore sbagliato |
| P9 | FC | Produzione — data situazione, costruire frase con marcatore |
| P10 | FC | Sprint — 8 frasi italiane → russo con marcatore corretto |

**Marcatori:** вчера / позавчера / на прошлой неделе / в прошлом месяце / в прошлом году / в [anno] году

**Rischi:**
- Non introdurre на + accusativo futuro (на следующей неделе) — solo retrospettivo
- Non introdurre недавно / давно in questo modulo — troppa variazione semantica

**Copywriter task:** Contesti racconto vacanza, cosa ho fatto ieri/la settimana scorsa. Lessico da M3.
**Tech task:** Nuovo Jira task — creare HTML + exercises.js shell per `passato/passato-e-tempo/`

---

## MODULE 5 — futuro/sv-vs-nsv/novyy-god-plany

**Path:** `livello_elementare/futuro/sv-vs-nsv/novyy-god-plany/`
**Cluster:** MOVIMENTO + AZIONE (A2)
**Funzione semantica:** CONTRASTO ASPETTUALE in contesto narrativo esteso
**Strumento grammaticale:** пойду vs буду идти — consolidamento

**Obiettivo di apprendimento:**
Lo studente distingue i due futuri in un contesto reale e narrativo (piani di Capodanno). Modulo di consolidamento — non introduce forme nuove, le mette in relazione.

**⚠️ Nota ID:** Creare SOLO dopo che M1 e M2 sono completati e assorbiti. Non anticipare.

**Struttura pannelli:**
```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
```

P1–P4 (PUBLIC): recognition — scegli la forma giusta nel dialogo
P5–P10 (PAID): produzione libera, costruisci dialogo, errore da correggere

**Contesto narrativo:** pianificazione Capodanno in famiglia — un solo contesto esteso per tutti i pannelli. Nessun esercizio decontestualizzato.

**Copywriter task:** Un unico scenario narrativo (famiglia che pianifica Capodanno). Tutti gli esercizi derivano da quello scenario. Mix naturale пойду / буду идти in dialogo.
**Tech task:** Nuovo Jira task — creare HTML + exercises.js shell per `futuro/sv-vs-nsv/novyy-god-plany/`

---

## Riepilogo task

| ID Jira | Modulo | Path | Tipo | Stato |
|---|---|---|---|---|
| LLR-T05 | futuro/sv-piano | `futuro/poyti-skhodit/` | HTML + shell | ✅ già in Jira |
| LLR-T09 | futuro/nsv-processo | `futuro/nsv-processo/` | HTML + shell | ❌ nuovo |
| LLR-T10 | passato/senza-verbi-di-moto | `passato/senza-verbi-di-moto/` | HTML + shell | ❌ nuovo |
| LLR-T11 | passato/passato-e-tempo | `passato/passato-e-tempo/` | HTML + shell | ❌ nuovo |
| LLR-T12 | futuro/sv-vs-nsv contrasto | `futuro/sv-vs-nsv/novyy-god-plany/` | HTML + shell | ❌ nuovo (dopo M1+M2) |

**Responsabile Tech:** Claude (Tech Specialist) — crea scaffold
**Responsabile Copywriter:** riempie array dopo scaffold pronto

---

*LiveLanguage Russian — ID Blueprint — April 19, 2026*
