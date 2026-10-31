# LiveLanguage Russian — Mappa Contenuti → Cluster

**Versione:** 1.0
**Data:** Ottobre 2026
**Uso:** Documentazione interna — Instructional Designer + Sviluppatore
**Riferimento:** `LiveLanguage_Architettura_Cluster.md`

> Questa mappa è **interna**. Lo studente non vede i cluster: la navigazione del sito resta per temi e situazioni. La mappa serve a vedere copertura, buchi e incoerenze tra architettura e contenuto pubblicato.

**Convenzioni**
- Livello: `principianti/` = **A1**, `livello_elementare/` = **A2** `[CHECK]` (corrispondenza non dichiarata da nessuna parte).
- `es.` = numero di pannelli esercizio (card) nella pagina.
- **STUB** = pagina esistente senza esercizi. **ORFANA** = pagina non raggiungibile dalla navigazione.
- Percorsi relativi alla radice del repo.

---

## 1. Cluster DESCRIZIONE

| Funzione | Pagina | Strumento | Liv. | es. | Note |
|---|---|---|---|---|---|
| Identificare persone | `principianti/casi/nominativo/lessico-famiglia` | Nominativo, copula zero | A1 | 7 | |
| Identificare persone | `principianti/casi/accusativo-il-caso-di-direzione/come-ti-chiami` | Как тебя зовут — pronome all'Accusativo | A1 | 10 | Accusativo come strumento di identità, non di direzione |
| Lessico nominale (base per copula zero) | `principianti/casi/nominativo/lessico-casa` | Nominativo | A1 | 8 | |
| | `principianti/casi/nominativo/lessico-cibo` | Nominativo | A1 | 8 | |
| | `principianti/casi/nominativo/lessico-citta` | Nominativo | A1 | 8 | |
| | `principianti/casi/nominativo/lessico-abbigliamento` | Nominativo | A1 | 5 | |
| | `principianti/lessico/casa` | Nominativo | A1 | 4 | **ORFANA**, sovrapposta a `lessico-casa` |
| Esprimere possesso | `principianti/casi/genitivo-il-caso-piu-triste-del-mondo/genitivo-est-vs-net` | у меня есть / нет + Genitivo | A1 | 10 | Nucleo della funzione |
| Esprimere possesso | `principianti/casi/genitivo-il-caso-piu-triste-del-mondo/genitivo-di-appartenenza` | Чей это? — Genitivo di appartenenza | A1 | 10 | |
| Possesso + famiglia | `principianti/casi/accusativo-il-caso-di-direzione/il-genitivo-e-laccusativo/albero-genealogico` | Genitivo + Accusativo | A1 | 10 | Due strumenti in contrasto — verificare regola «un esercizio = una connessione» |
| Possesso + famiglia | `.../il-genitivo-e-laccusativo/semya-antona` | Genitivo + Accusativo | A1 | 10 | Idem |
| Descrivere stati | `principianti/avverbi-vs-aggettivi/che-tempo-fa` | холодно vs холодный | A1 | 8 | Copre la regola 5 (contrasto avverbio/aggettivo) |
| Descrivere qualità | — | Aggettivi: colore, carattere, qualità | A1 | — | **BUCO.** Materiale pronto in `corsi/principianti/Modulo 1/ПРИЛАГАТЕЛЬНЫЕ/` (incl. `LiveLanguage_ClusterSemantico_CarattereEmozioni_A1.md`) |
| Descrivere stati (persona) | `principianti/casi/dativo-il-caso-di-forze-soprannaturali/come-stai` | Dativo: мне хорошо / плохо | A1 | — | **STUB** |
| Aggettivo declinato (spirale A2) | `principianti/casi/genitivo-.../quando-un-sostantivo-incontra-un-aggettivo` | Genitivo sost. + agg. | A2? | — | **STUB.** Per l'architettura è A2, ma sta sotto `principianti/` |
| Sostantivi al Genitivo | `principianti/casi/genitivo-.../sostantivi` | Genitivo | A1 | — | **STUB** |

**Copertura A1:** identità ✅ · possesso ✅ (forte) · stati ✅ (solo meteo) · qualità ❌
**A2–B2:** nessun contenuto (comparativo, participi, relative).

---

## 2. Cluster LUOGO E TEMPO

| Funzione | Pagina | Strumento | Liv. | es. | Note |
|---|---|---|---|---|---|
| Stato in luogo | `principianti/casi/prepositivo-il-caso-di-luogo/doma` | Prepositivo | A1 | 8 | |
| Stato in luogo | `principianti/casi/prepositivo-il-caso-di-luogo/in-citta` | Prepositivo | A1 | 10 | |
| Stato in luogo | `principianti/casi/prepositivo-il-caso-di-luogo/v-magazine` | Prepositivo | A1 | 3 | |
| Stato in luogo (vicino a) | `principianti/casi/genitivo-.../stato-in-luogo/okolo-tebya` | около, рядом с… + Genitivo | A1 | 10 | Vedi nota ① |
| | `.../genitivo-.../stato-in-luogo/na-vokzale` | Genitivo | A1 | 4 | |
| | `.../genitivo-.../stato-in-luogo/v-aeroportu` | Genitivo | A1 | 4 | |
| | `.../genitivo-.../stato-in-luogo/v-gorode` | Genitivo | A1 | 4 | |
| Stato in luogo (за / перед) | `principianti/casi/strumentale-il-caso-tecnico/stato-in-luogo/doma` | Strumentale | A1 | 10 | Vedi nota ① |
| | `.../strumentale-.../stato-in-luogo/na-vokzale` | Strumentale | A1 | 4 | |
| | `.../strumentale-.../stato-in-luogo/v-aeroportu` | Strumentale | A1 | 4 | |
| | `.../strumentale-.../stato-in-luogo/v-gorode` | Strumentale | A1 | 4 | |
| Tempo determinato | `livello_elementare/complementi/complemento-di-tempo-determinato/che-ore-sono-che-giorno-e` | Числа, orari, date | A2 | 7 | Architettura: **A1**. Vedi nota ② |
| Tempo determinato | `livello_elementare/complementi/complemento-di-tempo-determinato/fatto-o-momento` | Во сколько? | A2 | 7 | Idem |
| Frequenza | — | всегда, иногда, никогда | A1 | — | **BUCO.** Compare solo come innesco dell'aspetto in `aspetto/di-solito-o-voglio` |
| Moto a luogo | `livello_elementare/verbi-di-moto/complementi-dei-verbi-di-moto/moto-a-luogo` | Accusativo (куда) | A2 | 10 | Coerente con la spirale |
| Moto da luogo | `.../complementi-dei-verbi-di-moto/moto-da-luogo` | Genitivo (откуда) | A2 | 10 | Coerente |
| Moto per luogo | `.../complementi-dei-verbi-di-moto/moto-per-luogo` | по + Dativo / Strumentale | A2 | 10 | Architettura: **B1**. Vedi nota ② |

**Note**
① L'architettura A1 prevede per lo stato in luogo **solo il Prepositivo**. Il sito a A1 usa già tre casi (Prepositivo, Genitivo, Strumentale). O si aggiorna l'architettura (stato in luogo A1 = 3 strumenti), o Genitivo/Strumentale di luogo passano ad A2. Decisione PM.
② Contenuti collocati a un livello diverso da quello dell'architettura. Non è per forza un errore del sito: può essere l'architettura da correggere.

**Copertura A1:** stato in luogo ✅ (sovra-coperto) · tempo determinato ⚠️ (esiste, ma ad A2) · frequenza ❌
**A2:** moto a/da/per ✅ · tempo continuato/distributivo ❌

---

## 3. Cluster AZIONE

### 3a. Verbi di moto (macro-tema principale)

| Funzione | Pagina | Strumento | Liv. | es. | Note |
|---|---|---|---|---|---|
| Azione base, presente | `livello_elementare/verbi-di-moto/pluridirezionali-vs-monodirezionali/idti-ili-xodit` | идти / ходить | A2 | 10 | Architettura: **A1** |
| | `livello_elementare/verbi-di-moto/verbi-specifici/verbi-di-moto-specifici` | verbi specifici | A2 | 10 | |
| | `.../verbi-specifici/nuotare` | плыть / плавать | A2 | 10 | |
| | `.../verbi-specifici/volare` | лететь / летать | A2 | 10 | |
| Modo e mezzo | `.../verbi-specifici/andare-con-un-mezzo` | ехать / ездить на + **Prepositivo** | A2 | 10 | Vedi nota ③ |
| Usi speciali | `livello_elementare/verbi-di-moto/idti-usi-speciali` | идти: дождь идёт, фильм идёт… | A2 | guida | Non linkata da `verbi-di-moto/index.html` `[CHECK]` |
| Transitività (moto) | `livello_elementare/verbi-di-moto/verbi-di-moto-transitivi/nesti-nositi` | нести / носить + Accusativo | A2 | 10 | |
| | `.../verbi-di-moto-transitivi/vesti-voditi` | вести / водить + Accusativo | A2 | 10 | |
| | `.../verbi-di-moto-transitivi/vezti-voziti` | везти / возить + Accusativo | A2 | 10 | |
| Passato (aspetto via tempo) | `livello_elementare/verbi-di-moto/passato/idti-xodit-passato` | шёл vs ходил | A2 | 7 | Coerente con regola 3 |
| | `.../passato/exat-ezdit-passato` | ехал vs ездил | A2 | 7 | |
| | `.../passato/verbi-specifici-passato/correre` | бежал vs бегал | A2 | 7 | |
| | `.../passato/verbi-specifici-passato/nuotare` | плыл vs плавал | A2 | 7 | |
| | `.../passato/verbi-specifici-passato/volare` | летел vs летал | A2 | 7 | |
| | `.../passato/verbi-transitivi-passato/nesti-nositi-passato` | нёс vs носил | A2 | 7 | |
| | `.../passato/verbi-transitivi-passato/vesti-voditi-passato` | вёл vs водил | A2 | 7 | |
| | `.../passato/verbi-transitivi-passato/vezti-voziti-passato` | вёз vs возил | A2 | 7 | |
| Idiomi | `.../passato/xodit-idiomi` | ходить — usi speciali | A2 | guida | Nessun esercizio |
| Idiomi | `.../passato/exat-ezdit-idiomi` | ехать / ездить — idiomi | A2 | guida | Nessun esercizio |
| Futuro (prefisso = СВ) | `livello_elementare/verbi-di-moto/futuro/poyti-skhodit` | пойти vs сходить | A2 | 10 | Architettura: prefissi di moto = **B1** |
| | `.../futuro/verbi-specifici-futuro/poekhat-sezdit` | поехать vs съездить | A2 | 10 | Idem |
| | `.../futuro/verbi-specifici-futuro/sbegat-pobezhat` | сбегать vs побежать | A2 | 10 | Idem |
| | `.../futuro/verbi-specifici-futuro/splavat-poplavat` | сплавать vs поплавать | A2 | 10 | Idem |

### 3b. Aspetto СВ / НСВ

| Funzione | Pagina | Innesco | Liv. | es. | Note |
|---|---|---|---|---|---|
| Aspetto sistematizzato | `livello_elementare/aspetto/mne-nravitsya-ya-hochu` | нравится / люблю → НСВ, хочу → СВ | A2 | 10 | Usa il Dativo «piacere» come innesco (regola 4) |
| | `livello_elementare/aspetto/piace-o-voglio-anna` | idem, personaggio Anna | A2 | 10 | |
| | `livello_elementare/aspetto/piace-o-voglio-katya` | idem, Katya | A2 | 10 | |
| | `livello_elementare/aspetto/piace-o-voglio-lena` | idem, Lena | A2 | 10 | |
| | `livello_elementare/aspetto/piace-o-voglio-timur` | idem, Timur | A2 | 10 | |
| | `livello_elementare/aspetto/piace-o-voglio-zhenya` | idem, Zhenya | A2 | 10 | |
| | `livello_elementare/lessico/vita-quotidiana` | — | A2 | 10 | **ORFANA, duplicato identico** di `piace-o-voglio-zhenya` |
| Aspetto + frequenza | `livello_elementare/aspetto/di-solito-o-voglio` | обычно / всегда → НСВ, хочу → СВ | A2 | 10 | Unico punto in cui vive la «frequenza» |
| Aspetto in testo B1 | `livello_elementare/aspetto/kak-slomat-zamok-aspekt` | НСВ или СВ | B1 | 10 | Titolo «ЛЕКСИКА B1» sotto `livello_elementare` |
| Prefissi | `livello_elementare/aspetto/kak-slomat-zamok-pristavki` | приставочные глаголы | B1 | 10 | |
| Lessico | `livello_elementare/aspetto/kak-slomat-zamok-lessico` | — | B1 | 10 | |
| (duplicati) | `livello_elementare/azione/zamok/{aspetto-scelta, aspetto-prefissi, lessico}` | — | B1 | 10 ×3 | **ORFANI.** `lessico` identico all'originale; gli altri due differiscono → probabile versione nuova non pubblicata `[CHECK]` |

### 3c. Altre funzioni AZIONE

| Funzione | Pagina | Stato |
|---|---|---|
| Transitivi base (видеть, любить, звать + Accusativo) | — | **BUCO** a A1. Toccato solo di lato in `semya-antona` / `come-ti-chiami` |
| Compagnia (с кем + Strumentale) | — | **BUCO** |
| Bisogno (нужно / нужен + Dativo) | `principianti/casi/dativo-.../se-hai-bisogno-di-qualcosa` | **STUB.** Materiale pronto in `corsi/principianti/Modulo 1/Нужно-нужна-нужны/` |

**Nota ③ — possibile errore nell'architettura.** Il documento attribuisce *на чём* allo Strumentale (sezione 2, Cluster 3: «Творительный: с кем, на чём»). Ma «ехать на автобусе» è **Prepositivo**; lo Strumentale vale per *с кем* (e per *чем*: «ехать автобусом», raro). La pagina `andare-con-un-mezzo` è corretta, l'architettura va sistemata `[CHECK]` dal PM.

**Copertura:** verbi di moto ✅ (il blocco più denso del sito, ~25 pagine) · aspetto A2 ✅ · transitivi base A1 ❌ · compagnia ❌ · bisogno ❌

---

## 4. Asse orizzontale: CASI

Ogni caso come strumento, per cluster (solo contenuto con esercizi):

| Caso | DESCRIZIONE | LUOGO E TEMPO | AZIONE |
|---|---|---|---|
| Nominativo | identità, lessico | — | — |
| Genitivo | possesso, appartenenza | stato in luogo (около), moto da | — |
| Dativo | stati (STUB) | moto per (по) | bisogno (STUB), innesco «нравится» per l'aspetto |
| Accusativo | identità (как зовут), famiglia | moto a | transitivi di moto |
| Strumentale | — | stato in luogo (за / перед), moto per | compagnia ❌ |
| Prepositivo | — | stato in luogo | mezzo (на + Prep.) |

Il Dativo è il caso più debole: due pagine su tre sono stub.

---

## 5. Sintesi

### Quadro per cluster × livello

| | A1 | A2 | B1 | B2 |
|---|---|---|---|---|
| **DESCRIZIONE** | ⚠️ manca «qualità» | ❌ | ❌ | ❌ |
| **LUOGO E TEMPO** | ✅ luogo / ❌ frequenza | ✅ moto a/da/per | ❌ | ❌ |
| **AZIONE** | ❌ transitivi base | ✅ verbi di moto, aspetto | ⚠️ solo «zamok» | ❌ |

Il sito oggi è **sbilanciato su AZIONE / verbi di moto**: è il prodotto della maratona, e lì c'è il valore commerciale. DESCRIZIONE è il cluster meno coperto, ed è anche il più semplice da riempire perché il materiale esiste già in `corsi/`.

### Buchi con materiale già pronto in `corsi/` (costo minimo)
1. **Qualità / aggettivi** — `corsi/principianti/Modulo 1/ПРИЛАГАТЕЛЬНЫЕ/`
2. **Bisogno (нужно)** — `corsi/principianti/Modulo 1/Нужно-нужна-нужны/` → riempie lo stub `se-hai-bisogno-di-qualcosa`
3. **Meteo / tempo** — `corsi/principianti/Modulo 1/ПОГОДА/` (ОБСТОЯТЕЛЬСТВА ВРЕМЕНИ) → può coprire tempo determinato A1 e frequenza

### Buchi senza materiale
- Frequenza (всегда / иногда / никогда) come funzione propria
- Transitivi base A1
- Compagnia (с кем)
- Tempo continuato e distributivo (A2–B1)

### Pulizia tecnica
- **5 stub** da riempire o nascondere: `dativo/come-stai`, `dativo/se-hai-bisogno-di-qualcosa`, `genitivo/sostantivi`, `genitivo/quando-un-sostantivo-incontra-un-aggettivo`; più le pagine-indice vuote.
- **Orfane / duplicati:** `livello_elementare/lessico/vita-quotidiana` (duplicato di Zhenya), `livello_elementare/azione/zamok/*` (duplicato di `aspetto/kak-slomat-zamok-*`, due file differiscono), `principianti/lessico/casa`.
- `idti-usi-speciali` non linkata dall'indice dei verbi di moto `[CHECK]`.

### Decisioni aperte per il PM
1. Corrispondenza livelli: `principianti` = A1 e `livello_elementare` = A2? Lo «zamok» B1 dove vive?
2. Stato in luogo A1: un caso (architettura) o tre (sito)?
3. Verbi di moto al presente e prefissi: architettura (A1 / B1) o sito (A2 / A2)? Il sito riflette come la maratona funziona davvero — probabilmente va aggiornata l'architettura.
4. Correggere *на чём* → Prepositivo nell'architettura (nota ③).

---

*LiveLanguage Russian — Documento interno — Ottobre 2026*
