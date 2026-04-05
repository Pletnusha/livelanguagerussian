# LiveLanguage Russian — Architettura Didattica: Cluster Semantici

**Versione:** 1.0  
**Data:** Marzo 2026  
**Uso:** Documentazione interna — Instructional Designer + Sviluppatore

---

## 1. Principio Architetturale

Il contenuto didattico non è organizzato per parti del discorso (verbi, nomi, aggettivi), ma per **funzioni semantiche**: ciò che lo studente vuole *fare* con la lingua in un contesto reale.

Ogni funzione semantica è un **cluster**. I cluster si ripetono a ogni livello con crescente complessità — questo è il **modello a spirale**.

```
Livello (A1 / A2 / B1 / B2)
    └── Cluster (funzione semantica)
            └── Blocco (tema grammaticale specifico)
                    └── Esercizio (una connessione, un tipo di task)
```

---

## 2. I Tre Cluster Principali (A1)

### Cluster 1 — DESCRIZIONE
*Cosa è / com'è / chi è*

| Funzione | Strumento grammaticale | Contesto comunicativo |
|----------|------------------------|----------------------|
| Identificare persone | Фраза номинальная (copula zero) | Famiglia, professioni |
| Descrivere qualità | Aggettivi: colore, carattere, qualità | Aspetto fisico, personalità |
| Esprimere possesso | Родительный: у меня есть / нет | Casa, oggetti, animali |
| Descrivere stati | Прилагательные кратких форм / наречия | Tempo atmosferico, emozioni |

**Nota A1:** Nessuna declinazione degli aggettivi in questa fase. Solo forma base + contesto nominale.

---

### Cluster 2 — LUOGO E TEMPO
*Dove / quando / per quanto*

| Funzione | Strumento grammaticale | Contesto comunicativo |
|----------|------------------------|----------------------|
| Stato in luogo | Предложный падеж: дома, в городе | Casa, città, ambienti |
| Tempo determinato | Числа + ordinal + stagioni + наречия | Date, orari, calendario |
| Frequenza | Наречия: всегда, иногда, никогда | Routine quotidiana |

**Nota A1:** Moto a luogo (Винительный) introdotto solo con verbi di moto, non in questo cluster.

---

### Cluster 3 — AZIONE
*Cosa fa / come fa / con chi*

| Funzione | Strumento grammaticale | Contesto comunicativo |
|----------|------------------------|----------------------|
| Azione base | Глаголы движения: настоящее время | Spostamenti quotidiani |
| Transitività | Глаголы транзитивные: Винительный | Oggetti diretti |
| Modo e mezzo | Творительный: с кем, на чём | Trasporti, compagnia |

---

## 3. Macro-Temi e Cluster Attivati

I macro-temi della piattaforma non sono livelli di difficoltà — sono **punti di ingresso grammaticali** che attivano uno o più cluster.

| Macro-tema | Punto di ingresso | Cluster attivati |
|-----------|-------------------|-----------------|
| **Verbi di moto** | Глагол движения: presente + passato | Luogo e Tempo (stato/moto) + Azione (mezzo, compagnia) + Aspetto (СВ/НСВ via tempo) |
| **Verbi di moto con prefissi** | Prefisso = direzione / risultato | Luogo e Tempo + Azione (scopo, direzione) + Aspetto (prefisso = СВ) |
| **Date e gli orari** | Numeri + tempo determinato | Luogo e Tempo (det./cont./dist.) + Quantità + *senza aspetto* |
| **Casi e complementi** | Metastrumento trasversale | Tutti i cluster — ogni caso = strumento per più funzioni simultanee |

> **Casi** non è un macro-tema come gli altri: è la chiave che spiega gli strumenti di tutti gli altri temi. Va trattato come livello orizzontale che attraversa l'intera architettura.

---

## 4. Modello a Spirale

La stessa funzione semantica ritorna a ogni livello con complessità crescente.

### Esempio: *Stato in luogo*

| Livello | Funzione | Strumento | Nodi attivi |
|---------|----------|-----------|-------------|
| **A1** | Dove sono le cose / le persone | Предложный: дома, в школе | 1 caso, sostantivi |
| **A2** | Stato vs moto a luogo — contrasto | Предложный vs Винительный | 2 casi in opposizione + aggettivi |
| **B1** | Luogo + tempo + aspetto integrati | Tutti i complementi di luogo + подчинение | 3+ nodi attivi |
| **B2** | Tutte le valenze attive + subordinate | Sistema completo | Intera rete |

### Esempio: *Verbi transitivi*

| Livello | Funzione | Strumento |
|---------|----------|-----------|
| **A1** | Chiamare, vedere, amare — oggetto diretto | Глаголы transitivi + Винительный base |
| **A2** | Transitivi vs riflessivi — contrasto | Transitivi vs -ся + oggetto indiretto (Дательный) |
| **B1** | Oggetto diretto + indiretto simultanei | Accusativo + Dativo in un'unica frase |
| **B2** | Reggenza verbale complessa | Valenze multiple + subordinate |

---

## 5. Regole Operative per lo Sviluppatore

1. **Un esercizio = una connessione.** Non mescolare due funzioni semantiche in un singolo esercizio A1.

2. **Il contesto comunicativo è obbligatorio.** Ogni esercizio vive in una situazione reale (famiglia, meteo, casa, preferenze). Non esistono frasi decontestualizzate.

3. **L'aspetto verbale ad A1 è solo primo contatto.** La sistematizzazione СВ/НСВ avviene ad A2 — ad A1 si introduce attraverso il tempo (presente vs passato), non come categoria esplicita.

4. **Il Dativo compare in due contesti distinti:** piacere (нравится) e bisogno (нужно/нужен). Vanno trattati separatamente prima di essere unificati.

5. **Il contrasto avverbio/aggettivo** (холодно vs холодный) è la prima esperienza dello studente con la doppia espressione di una funzione semantica. Va evidenziato esplicitamente.

6. **La spirale non è ripetizione.** Ogni ritorno su un cluster aggiunge un nodo grammaticale, non riprende lo stesso contenuto.

7. **I casi sono strumenti, non categorie.** Non esiste un "blocco Дательный" — il Dativo appare dentro il cluster AZIONE (mezzo, compagnia) e dentro DESCRIZIONE (possesso indiretto) come strumento di funzioni diverse.

---

## 6. Mappa Cluster → Macro-tema → Livello

```
CLUSTER DESCRIZIONE
├── A1: qualità, possesso (у меня есть/нет), copula zero
├── A2: aggettivi declinati, comparativo
├── B1: participi attributivi, frase relativa
└── B2: valutazione + subordinate qualificative

CLUSTER LUOGO E TEMPO
├── A1: stato in luogo (Предложный), tempo determinato (числа, stagioni)
├── A2: stato vs moto (Предложный/Винительный), moto da (Родительный)
├── B1: moto attraverso (Творительный/по), tempo continuato e distributivo
└── B2: sistema completo dei complementi di luogo e tempo

CLUSTER AZIONE
├── A1: verbi di moto al presente, transitivi base (Винительный)
├── A2: aspetto СВ/НСВ sistematizzato, transitivi vs riflessivi
├── B1: prefissi di moto, gerundio, subordinate finali
└── B2: reggenza verbale complessa, participi verbali
```

---

*LiveLanguage Russian — Documento interno — Marzo 2026*
