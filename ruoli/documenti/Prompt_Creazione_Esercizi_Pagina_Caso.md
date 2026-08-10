# Prompt — Creazione esercizi per una pagina caso (10 pannelli)

**Scopo:** template riutilizzabile per generare il contenuto (`exercises.js`) di una nuova sottopagina caso, basato sulla struttura tecnica già implementata in `come-ti-chiami` (accusativo), `genitivo-di-appartenenza` (genitivo) e `doma`/`v-magazine`/`in-citta` (prepositivo).

---

## 1. Struttura tecnica della pagina (fissa, non cambia)

10 pannelli, in quest'ordine e con questi tier di accesso:

| Pannello | Motore | Tier |
|---|---|---|
| 1 | Drag & Drop | public |
| 2 | Drag & Drop | student |
| 3 | Drag & Drop | paid |
| 4 | Flashcard | public |
| 5 | Flashcard | student |
| 6 | Flashcard | paid |
| 7 | Flashcard | public |
| 8 | Flashcard | student |
| 9 | Flashcard | paid |
| 10 | Quiz misto (multiple choice + match + write-in) | **public** — eccezione: non segue lo schema paid del resto della tripletta |

**Regola sulle spiegazioni (`explanation`):** presenti SOLO nei pannelli `public` (1, 4, 7). Nei pannelli `student`/`paid` (2, 3, 5, 6, 8, 9) — mai, nessuna eccezione confermata finora.

---

## 2. Formato dati per motore

### Drag & Drop (pannelli 1-3)
```js
{
    instruction: "Scegli la forma corretta ... .",
    text: "Frase con {{1}} al posto della forma da indovinare.",
    words: ["opzione1", "opzione2", "opzione3", "opzione4"],
    correctAnswers: { 1: "opzione corretta" },
    explanation: "..." // solo se public
}
```

### Flashcard (pannelli 4-9)
```js
{ front: "...", back: "...", explanation: "..." } // explanation solo se public
```

### Quiz misto (pannello 10)
Tre array separati, ognuno testa una modalità diversa:
- `multipleChoiceData`: `{ question: "___ frase.", options: [...], answer: "..." }`
- `matchPairs`: `{ left: "...", right: "..." }`
- `quizData`: `{ id: "...", promptPrefix: "...", promptSuffix: "...", answers: [...] }`

**Regola critica per `matchPairs`:** tutti i `left` della stessa decina devono essere **testualmente unici** — se due pair condividono lo stesso `left` (es. due "нашего младшего" con nomi diversi a destra), il gioco di abbinamento diventa ambiguo quando entrambe le card compaiono nello stesso round. Questa regola vale **solo** per i pannelli match — nei pannelli Drag&Drop/Flashcard i duplicati fra pannelli diversi sono accettabili.

---

## 3. Logica dei distrattori (Drag & Drop, pattern principale)

Per un target del tipo **pronome (+ aggettivo) + sostantivo**, con un solo gap che copre l'intera catena di parole, i 4 distrattori standard sono:

1. **Genere del pronome sbagliato** — pronome nella forma dell'altro genere, resto corretto
2. **Tutto al nominativo** — pronome e sostantivo entrambi al nominativo (caso sbagliato, genere giusto)
3. **CORRETTO** — pronome e sostantivo entrambi al caso target, genere giusto
4. **Disaccordo di caso** — pronome al nominativo, sostantivo al caso target (i due elementi non concordano)

Esempio reale (accusativo, мою маму):
`["моего маму", "моя мама", "мою маму", "моя маму"]` → corretto: `"мою маму"`

### Eccezione — pronomi invariabili (его / её / их)
Non hanno declinazione propria: il distrattore deve venire dall'**aggettivo** (se presente) o dal **sostantivo** (se il pronome è l'unico modificatore). In quel caso si varia direttamente la forma del sostantivo:
`["его отец", "его отцу", "его отца", "его отцом"]` → corretto: `"его отца"` (nominativo / dativo / CORRETTO / strumentale)

### Casi grammaticali speciali da segnalare sempre
- **Sostantivi maschili di 1ª declinazione** (дядя, дедушка, папа): concordano come maschili (наш**его**, любим**ого**) ma si declinano come i femminili in -а/-я (dя**ди**, дедуш**ки**, па**пы**)
- **3ª declinazione in -ь** (дочь, мать, кровать): genitivo e prepositivo coincidono — se serve un terzo distrattore diverso dal corretto, usare lo strumentale (кроватью) invece del genitivo
- **Locativo irregolare in -у́** (пол→полу́, шкаф→шкафу́, угол→углу́): il distrattore "naturale" è la forma regolare in -е che uno studente italiano si aspetterebbe (поле, шкафе, угле) ma che è sbagliata — va sempre inclusa per evidenziare l'eccezione

---

## 4. Logica dei distrattori (Quiz misto, pannello 10)

- **Multiple choice**: 2 opzioni, la corretta + il nominativo della stessa catena di parole
- **Match**: coppie `left` (frammento da abbinare, univoco nel set) / `right` (completamento + nome proprio)
- **Write-in**: nessun distrattore, l'utente scrive la risposta libera; `answers` può contenere più varianti accettate

---

## 5. Processo di lavoro (come procediamo in pratica)

1. PM detta un set di frasi grezze per un pannello (di solito 7-10)
2. Verifico la grammatica di ogni forma e segnalo errori di battitura o forme scorrette
3. Costruisco la tabella con distrattori secondo lo schema sopra e la mostro per approvazione **prima** di scrivere nel file
4. Se il numero di frasi non è 10, chiedo se completare o lasciare così
5. Controllo sempre sovrapposizioni con pannelli già scritti (duplicati esatti) e le segnalo — ma **solo i pannelli match richiedono unicità stretta**
6. Scrivo nel file solo dopo conferma esplicita ("да" / "записывай")
7. Non genero mai frasi da zero: le parole/temi vengono sempre da PM; il mio contributo è la coniugazione/declinazione corretta, il layout dei distrattori e la coerenza con lo schema tecnico

---

## 6. Pagine già costruite con questo schema (riferimento)

- `principianti/casi/accusativo-il-caso-di-direzione/come-ti-chiami/` — complemento oggetto, pronomi possessivi + sostantivi
- `principianti/casi/genitivo-il-caso-piu-triste-del-mondo/genitivo-di-appartenenza/` — genitivo di appartenenza (чей?)
- `principianti/casi/prepositivo-il-caso-di-luogo/doma/` — prepositivo, luoghi in casa
- `principianti/casi/prepositivo-il-caso-di-luogo/v-magazine/` — caricamento in corso
- `principianti/casi/prepositivo-il-caso-di-luogo/in-citta/` — caricamento in corso
