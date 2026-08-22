# LiveLanguage Russian — Mappa Esercizi: Verbi di Moto

**Autore:** ID (Instructional Designer)
**Versione:** 2.0 · Agosto 2026
**Uso:** Riferimento per ID e Tech Specialist — struttura gerarchica completa

**Changelog v2.0:** Aggiunta struttura `passato/verbi-transitivi-passato/` e `passato/imperfettivo-vs-perfettivo/` (richiesta PM, 22.08.2026) — la sezione `passato/` ora rispecchia la struttura del presente (Идти/Ходить · Verbi specifici · Verbi transitivi), con l'aggiunta del contrasto imperfettivo vs perfettivo per tutte e tre le famiglie. Tutto il resto invariato rispetto a v1.0.

---

## Convenzioni

| Simbolo | Significato |
|---------|-------------|
| `DD` | DragDropExercise |
| `FC` | FlashcardExercise |
| `MX` | Mixed Quiz (MC + Match + Write) |
| ✅ | exercises.js completo |
| ⚠️ | HTML presente, exercises.js vuoto o assente |
| ❌ | Pagina non ancora creata |

**Access tiers:** `PUBLIC` · `STUDENT` · `PAID`

---

## Logica pannelli (standard per tutte le pagine)

```
PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX   (riconoscimento — scaffolding massimo)
STUDENT → —
PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC   (discriminazione attiva)
```

Eccezioni documentate per singola pagina dove applicabile.

---

## Struttura gerarchica

```
livello_elementare/
│
└── verbi-di-moto/
      │
      ├── pluridirezionali-vs-monodirezionali/          ✅
      │     PUBLIC  → P1 DD · P5 DD · P2 FC · P3 FC · P4 MX
      │     STUDENT → —
      │     PAID    → P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
      │
      ├── idti-usi-speciali/                             ⚠️ exercises.js vuoto
      │
      ├── complementi-dei-verbi-di-moto/
      │     ├── moto-a-luogo/                            ✅
      │     │     PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
      │     │     STUDENT → —
      │     │     PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
      │     │
      │     ├── moto-per-luogo/                          ⚠️ no exercises.js
      │     └── moto-da-luogo/                            ⚠️ no exercises.js
      │
      ├── verbi-specifici/
      │     ├── andare-con-un-mezzo/                     ✅
      │     │     PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
      │     │     STUDENT → —
      │     │     PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
      │     │
      │     └── verbi-di-moto-specifici/                 ✅
      │           PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
      │           STUDENT → —
      │           PAID    → P5 DD · P6 DD · P11 DD · P7 FC · P8 FC · P9 FC · P10 FC
      │
      ├── verbi-di-moto-transitivi/
      │     ├── vesti-voditi/                            ✅
      │     │     PUBLIC  → P1 DD · P2 FC
      │     │     STUDENT → —
      │     │     PAID    → P5 DD · P6 DD · P3 FC · P7 FC · P8 FC · P9 FC · P10 FC · P4 MX
      │     │
      │     ├── vezti-voziti/                            ✅
      │     │     PUBLIC  → P1 DD · P2 FC
      │     │     STUDENT → —
      │     │     PAID    → P5 DD · P6 DD · P3 FC · P7 FC · P8 FC · P9 FC · P10 FC · P4 MX
      │     │
      │     └── nesti-nositi/                            ✅
      │           PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
      │           STUDENT → —
      │           PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
      │
      ├── passato/
      │     ├── idti-xodit-passato/                      ✅
      │     │     PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
      │     │     STUDENT → —
      │     │     PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
      │     │
      │     ├── exat-ezdit-passato/                      ✅
      │     │     PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
      │     │     STUDENT → —
      │     │     PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
      │     │
      │     ├── specifici-passato/                       ✅
      │     │     PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
      │     │     STUDENT → —
      │     │     PAID    → P5 DD · P6 DD · P11 DD · P7 FC · P8 FC · P9 FC · P10 FC
      │     │
      │     ├── xodit-idiomi/                            ⚠️ no exercises.js
      │     ├── exat-ezdit-idiomi/                        ⚠️ no exercises.js
      │     │
      │     ├── verbi-transitivi-passato/                ❌ NUOVO v2.0 — специфика: нёс/носил, вёз/возил, вёл/водил
      │     │     ├── nesti-nositi-passato/               ❌
      │     │     │     PUBLIC  → P1 DD · P2 FC · P3 FC · P4 MX
      │     │     │     STUDENT → —
      │     │     │     PAID    → P5 DD · P6 DD · P7 FC · P8 FC · P9 FC · P10 FC
      │     │     │
      │     │     ├── vezti-voziti-passato/               ❌
      │     │     │     PUBLIC  → P1 DD · P2 FC
      │     │     │     STUDENT → —
      │     │     │     PAID    → P5 DD · P6 DD · P3 FC · P7 FC · P8 FC · P9 FC · P10 FC · P4 MX
      │     │     │
      │     │     └── vesti-voditi-passato/               ❌
      │     │           PUBLIC  → P1 DD · P2 FC
      │     │           STUDENT → —
      │     │           PAID    → P5 DD · P6 DD · P3 FC · P7 FC · P8 FC · P9 FC · P10 FC · P4 MX
      │     │
      │     └── imperfettivo-vs-perfettivo/               ❌ NUOVO v2.0 — шёл/ходил vs пошёл, ехал/ездил vs поехал/съездил, нёс/носил vs принёс/отнёс ecc.
      │           ├── idti-xodit-passato-perfettivo/      ❌
      │           │     Логика внутри страницы — контраст:
      │           │     · шёл    mono imperfettivo (идти)
      │           │     · ходил  pluri imperfettivo (ходить)
      │           │     · пошёл  perfettivo (пойти) — inizio del movimento / partenza
      │           │     + контраст всех трёх форм
      │           │
      │           ├── verbi-specifici-passato-perfettivo/ ❌
      │           │     ├── exat-ezdit-passato-perfettivo/    ❌  ехал/ездил vs поехал/съездил
      │           │     ├── splavat-poplavat-passato/         ❌  плыл/плавал vs поплыл/сплавал
      │           │     └── sbegat-pobezhat-passato/          ❌  бежал/бегал vs побежал/сбегал
      │           │
      │           └── verbi-transitivi-passato-perfettivo/  ❌
      │                 ├── nesti-nositi-passato-perfettivo/   ❌  нёс/носил vs принёс/отнёс
      │                 ├── vezti-voziti-passato-perfettivo/   ❌  вёз/возил vs привёз/отвёз
      │                 └── vesti-voditi-passato-perfettivo/   ❌  вёл/водил vs привёл/отвёл
      │
      └── futuro/
            │
            ├── poyti-skhodit/                           ❌
            │     Логика внутри страницы — 4 формы будущего:
            │     · пойду        mono perfettivo  (идти)
            │     · схожу        pluri perfettivo (ходить) — andata e ritorno
            │     · буду идти    mono imperfettivo
            │     · буду ходить  pluri imperfettivo — abitudine
            │     + контраст всех четырёх форм
            │
            └── verbi-specifici-futuro/
                  │
                  ├── poekhat-sezdit/                    ❌
                  │     · поеду        mono perfettivo  (ехать)
                  │     · съезжу       pluri perfettivo (ездить)
                  │     · буду ехать   mono imperfettivo
                  │     · буду ездить  pluri imperfettivo
                  │     + контраст всех четырёх форм
                  │
                  ├── splavat-poplavat/                  ❌
                  │     · поплыву       mono perfettivo  (плыть)
                  │     · сплаваю       pluri perfettivo (плавать)
                  │     · буду плыть    mono imperfettivo
                  │     · буду плавать  pluri imperfettivo
                  │     + контраст всех четырёх форм
                  │
                  └── sbegat-pobezhat/                   ❌
                        · побегу        mono perfettivo  (бежать)
                        · сбегаю        pluri perfettivo (бегать)
                        · буду бежать   mono imperfettivo
                        · буду бегать   pluri imperfettivo
                        + контраст всех четырёх форм
```

---

## Riepilogo stato

| Stato | Pagine |
|-------|--------|
| ✅ Completo | pluridirezionali, moto-a-luogo, andare-con-un-mezzo, verbi-specifici, vesti-voditi, vezti-voziti, nesti-nositi, idti-xodit-passato, exat-ezdit-passato, specifici-passato |
| ⚠️ Scheletro senza esercizi | idti-usi-speciali, moto-per-luogo, moto-da-luogo, xodit-idiomi, exat-ezdit-idiomi |
| ❌ Da creare | futuro/ (5 pagine) · passato/verbi-transitivi-passato/ (3 pagine) · passato/imperfettivo-vs-perfettivo/ (7 pagine) |

**Totale:** 10 completo · 5 scheletro · 15 da creare
