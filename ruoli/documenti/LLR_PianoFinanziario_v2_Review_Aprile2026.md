# LiveLanguage — Revisione Piano Finanziario v2
## Analisi errori, imprecisioni e incongruenze

*Aprile 2026 · Uso interno co-fondatori · Riservato*

---

## Verdetto generale

L'aritmetica del piano è nel complesso corretta. Tutti gli EBITDA annuali, i cumulati, i ROI%, LTV e MOIC sono calcolati correttamente. Tuttavia sono state rilevate **tre incongruenze sostanziali** e diverse imprecisioni metodologiche che richiedono correzione prima della presentazione all'investitore.

---

## 1. Errori, imprecisioni e incongruenze

### CRITICI (richiedono correzione)

---

**1.1 Rapporto insegnante/studenti — incongruenza strutturale**

Metrica dichiarata §4: `1 insegnante ogni 50 studenti`

Rapporto effettivo nella struttura costi:

| Periodo | Studenti | Insegnanti Russian | Ratio reale |
|---|---|---|---|
| Luglio 2027 | 176 | 1 | **176:1** |
| 2028 (medio) | 316 | 2 | **158:1** |
| 2029 (medio) | 418 | 3 | **139:1** |
| 2030 (medio) | 565 | 4 | **141:1** |

Con il ratio 1:50 e 565 studenti nel 2030 sarebbero necessari **11 insegnanti**, non 4. La differenza di 7 insegnanti × €1.800 × 12 = **€151.200/anno** rappresenta un rischio finanziario non pianificato.

**Spiegazione plausibile:** il ratio 1:50 si applica solo alle **sessioni live in gruppo** (4/8 ore/mese), mentre la maggior parte degli studenti fruisce del contenuto in modo asincrono. Se è così, occorre esplicitarlo nel documento e specificare quale percentuale di studenti accede alle sessioni live.

---

**1.2 Exit Valuation — errore nella definizione di ARR**

§9.3: `Exit valuation (4× ARR): €7.543.200`

Il calcolo usa il Revenue totale Y5, non l'ARR:

- **Revenue totale Y5 utilizzato**: €1.885.800 × 4 = €7.543.200 ← 4× Total Revenue
- **ARR reale Y5** (solo abbonamenti ricorrenti): €1.650.600 × 4 = **€6.602.400**

**Differenza: €940.800 di sovrastima sull'exit valuation.**
Impatto sul ritorno Angel (14%): sovrastima di **€131.712**.

Maratone (€198.720), intensivi (€6.480) ed esercizi (€30.000) non sono revenue ricorrente e non devono rientrare nel moltiplicatore ARR.

---

**1.3 Doppio pagamento insegnante Arabic in Y2 — ambiguità**

§5.2 riporta contemporaneamente:
- `Insegnante Russian ×1: Lug-Dic × €1.800 = €10.800`
- `Didattica Arabic (stesso insegnante): Ott-Dic × €1.800 = €5.400`

La nota `stesso insegnante` indica la stessa persona. La domanda è: in ottobre–dicembre questa persona riceve **€3.600/mese** (€1.800 Russian + €1.800 Arabic) oppure €1.800 copre entrambi i carichi?

Il documento tratta i due importi come costi separati. Questa logica è:
- **corretta** se l'insegnante riceve una tariffa doppia per doppio carico → cambiare la dicitura in "insegnante bilingue, tariffa ×2 per doppio incarico"
- **un errore** se €1.800 è la tariffa fissa indipendentemente dal volume → i €5.400 sono una duplicazione

---

### SIGNIFICATIVI (richiedono chiarimento)

---

**1.4 Soglia assunzione insegnante vs. timing effettivo**

Metrica §4: `Soglia insegnante Russian: 100 studenti → Appare luglio 2027`

Dalle proiezioni mensili Y2: 100 studenti vengono raggiunti a **marzo 2027** (113 studenti). L'insegnante viene assunto solo a **luglio 2027** (176 studenti). Gap: **4 mesi** (marzo–giugno) con 100–176 studenti paganti senza insegnante dedicato.

**Spiegazione plausibile:** la soglia è collegata alla disponibilità della AI platform (luglio 2027), non al numero di studenti. Se è così, la formulazione in §4 va corretta: non "Soglia 100 studenti" ma "Post-lancio AI platform (luglio 2027)".

---

**1.5 IRR 73% — imprecisione metodologica nella sezione Angel**

L'IRR ~73% è matematicamente corretto come **project IRR** sull'insieme di flussi:
`{–245.000; –79.411; +54.362; +402.912; +852.162; +1.544.412}`

Verifica: NPV a r=73% ≈ 0 ✓

Tuttavia l'**IRR dell'investitore Angel** si calcola diversamente — sui suoi flussi specifici:
- Outflow: €80k mag'26 · €80k lug'27 · €85k ott'27
- Inflow: €1.056.048 all'exit 2030

IRR Angel su questi flussi: **~49%**, non 73%.

Entrambe le cifre sono corrette per finalità diverse, ma nel contesto "Metriche per investitore Angel" l'IRR 73% senza nota metodologica può generare aspettative errate.

---

### MINORI (da chiarire)

---

**1.6 Revenue intensivi — €720/lancio = 3 studenti per lancio**

Per novembre 2026 (50+ studenti) e novembre 2027 (226 studenti), 3 partecipanti per intensivo risulta estremamente conservativo senza spiegazione. Non è un errore, ma sarà la prima domanda dell'investitore.

**1.7 Payback period 14 mesi — definizione ambigua**

"Da break-even Y2 a break-even cumulativo":
- Se il conteggio parte dal primo mese EBITDA positivo (maggio 2027) → fino a Q1 2028 = **~9 mesi**
- Se il conteggio parte da gennaio 2027 (inizio Y2) → fino a Q1 2028 = **13–14 mesi**

Il punto di partenza deve essere esplicitato.

**1.8 Salto gennaio 2027: +22 studenti (+42%) in un mese**

Dicembre 2026: 52 studenti → gennaio 2027: 74 studenti. Con churn ~6% = 3 uscite → necessari 25 nuovi studenti in un solo mese. Tecnicamente possibile con budget marketing €800 e CAC blended €12 (~67 lead, ~37% conversione) più organico, ma il meccanismo (es. effetto buoni propositi di gennaio, pipeline in attesa) deve essere esplicitato nel documento.

---

## 2. Analisi della sostenibilità finanziaria

**Liquidità:** Il fabbisogno di cassa è massimo a cavallo Y1/Y2. Con EBITDA cumulato –€79.411 e investimento totale €245.000, il buffer residuo all'avvio della AI platform è €165.589. Sufficiente se la struttura a tranche è rispettata: Tranche 2 (€80k) deve arrivare entro luglio 2027.

**Finestra critica:** Gennaio–aprile 2027 — AI platform in sviluppo (€15k/mese), nessun insegnante, EBITDA mensile ancora negativo. Qualsiasi slittamento della AI platform di 2+ mesi genera un fabbisogno aggiuntivo non coperto dal contingency buffer (€30.589).

**Struttura costi:** I costi founder (€84.865 Y1, €92.580 Y2–Y5) sono stabili e prevedibili. La AI platform (€135.000) è un costo una tantum correttamente delimitato nel tempo. La scalabilità dei costi insegnanti è lineare rispetto alla crescita studenti — modello corretto, a condizione che il ratio operativo reale venga chiarito (v. §1.1).

---

## 3. Valutazione delle proiezioni

**Coerenza interna verificata:**

| Elemento verificato | Risultato |
|---|---|
| Totali revenue mensili Y1 | ✓ |
| Totali revenue mensili Y2 | ✓ |
| Totali revenue Y3–Y5 | ✓ |
| Totali costi Y1–Y5 | ✓ |
| EBITDA e cumulati Y1–Y5 | ✓ |
| LTV €180 e €130 | ✓ |
| LTV/CAC ratios | ✓ |
| Totale investimento tranche | ✓ |
| MOIC 4.3× | ✓ |
| ROI% Y3–Y5 | ✓ |
| IRR 73% (project) | ✓ |

**Stagionalità:** corretta nei dati mensili Y2 — picchi maratone marzo/maggio/novembre, calo estivo luglio–agosto. Da verificare se il calo estivo delle maratone in luglio 2027 (3 partecipanti su 176 studenti = 1,7%) non sia eccessivamente conservativo.

**Non linearità della crescita:** il profilo di crescita Y1 è correttamente a forma di S — avvio lento, accelerazione con il lancio del marketing paid in ottobre 2026.

---

## 4. Metriche critiche — Stato verifica

| Metrica | Valore | Stato |
|---|---|---|
| LTV piano €180 | €2.250 | ✓ |
| LTV piano €130 | €2.600 | ✓ |
| LTV/CAC blended €180 | 187× | ✓ |
| LTV/CAC blended €130 | 216× | ✓ |
| Ticket medio esercizi | ~€18 | ✓ |
| MOIC Angel | 4.31× | ✓ |
| Exit valuation 4× ARR | €7.543.200 | ⚠️ Usa Total Revenue, non ARR |
| IRR ~73% | Corretto come project IRR | ⚠️ Non è l'IRR dell'investitore |
| Break-even cumulativo Q1 2028 | Confermato: –€25.049 ÷ (€402.912/12) ≈ 0,7 mesi in Y3 | ✓ |
| Studenti Russian Y5 medio | 565 | ✓ |
| Insegnanti Russian Y5 | 4 | ⚠️ Insufficienti se ratio 1:50 è operativo |

---

## 5. Rischi finanziari principali

**Rischio 1 — Ratio insegnante/studenti (probabilità: alta)**
Se 1:50 è il limite operativo reale per le sessioni live, il costo del personale docente in Y4–Y5 va rivisto al rialzo di €100k–€150k/anno. Impatto: EBITDA Y4 da €852k a ~€700k, Y5 da €1.544k a ~€1.394k.

**Rischio 2 — Slittamento AI platform oltre luglio 2027 (probabilità: media)**
Ogni mese aggiuntivo di sviluppo = €15.000 di costi non pianificati. Uno slittamento di 3 mesi: €45.000 — coperto solo parzialmente dal buffer contingency (€30.589).

**Rischio 3 — Costi docenti Arabic/Japanese in Y5 (probabilità: media)**
In Y5 sono pianificati 2 insegnanti Arabic per 234 studenti medi = 117:1. Se il ratio 1:50 si applica, servono 5 insegnanti, non 2. Costi aggiuntivi: €54.000/anno.

**Rischio 4 — Exit al multiplo 4× su ARR (probabilità: dipende da mercato)**
Applicando il multiplo 4× all'ARR corretto (soli abbonamenti €1.650.600) invece del revenue totale: exit €6.602.400 → ritorno Angel = €924.336 → MOIC = 3,77×, non 4,3×.

**Rischi già presenti nel documento (confermati):**

| # | Rischio | Valutazione |
|---|---|---|
| 1 | Revenue Y1 €48k non copre burn €127k | Corretto — coperto da struttura tranches |
| 2 | AI platform non pronta luglio 2027 | Corretto — Tranche 2 condizionata |
| 3 | Churn 8%/mese piano €180 | Corretto — mitigazione AI retention |
| 4 | Costo didattica Arabic/Japanese superiore | Corretto — contratto fisso €1.800 |
| 5 | B2B primo contratto ritardato | Corretto — Tranche 3 condizionata |

---

## 6. Raccomandazioni prioritarie

**Priorità 1 — Da correggere prima della presentazione all'investitore:**

1. **Exit valuation**: sostituire `Exit valuation (4× ARR): €7.543.200` con una delle due opzioni:
   - `Exit valuation (4× ARR abbonamenti): €6.602.400`
   - oppure `Exit valuation (4× Revenue totale): €7.543.200` con nota esplicativa
2. **IRR**: aggiungere nota a piè di pagina: *"IRR di progetto sul flusso netto aziendale. IRR effettivo dell'Angel investor (tranche → exit 14%): ~49%"*

**Priorità 2 — Da chiarire nella logica operativa:**

3. **Ratio 1:50**: specificare esplicitamente se si applica alle sessioni live o all'intera base studenti
4. **Soglia insegnante**: correggere da "100 studenti" a "post-lancio AI platform (luglio 2027)"
5. **Arabic stesso insegnante**: chiarire se la tariffa in ott–dic 2027 è €1.800 o €3.600/mese totale

**Priorità 3 — Da aggiungere alla sezione "Rischi principali":**

6. **Rischio 7**: ratio insegnante/studenti — se applicato alla base totale invece che alle sole sessioni live, impatto costi Y4–Y5 da quantificare

---

## Checklist dati — Fonti numeriche utilizzate

Tutti i dati sono tratti esclusivamente dal documento `LLR_PianoFinanziario_v2_Aprile2026.md`.

| Dato | Valore | Sezione fonte |
|---|---|---|
| Churn piano €180 | 8%/mese | §4 |
| Churn piano €130 | 5%/mese | §4 |
| LTV piano €180 | €2.250 | §4 |
| LTV piano €130 | €2.600 | §4 |
| CAC blended | €12/studente | §4 |
| Ratio insegnante/studenti | 1:50 | §4 |
| Soglia insegnante Russian | 100 studenti | §4 |
| Costo insegnante P.IVA | €1.800/mese netti | §4 |
| TAM Russian Italia | ~110.000 | §4 |
| Costo AI platform | €15.000/mese × 9 mesi = €135.000 | §3, §5.1–5.2 |
| Investimento totale | €245.000 | §9.1 |
| Quota equity Angel | ~14% | §9.3 |
| Pre-money valuation | €1,75M (punto medio €1,5–2M) | §9.3 |
| EBITDA Y1 | –€79.411 | §8 |
| EBITDA Y2 | +€54.362 | §8 |
| EBITDA Y3 | +€402.912 | §8 |
| EBITDA Y4 | +€852.162 | §8 |
| EBITDA Y5 | +€1.544.412 | §8 |
| Revenue totale Y5 | €1.885.800 | §7.3 |
| ARR Y5 (soli abbonamenti) | €1.650.600 | §7.3 (calcolato) |
| Exit valuation dichiarata | €7.543.200 | §9.3 |
| Ritorno Angel all'exit | €1.056.048 | §9.3 |
| MOIC base | 4,3× | §9.3 |
| IRR dichiarato | ~73% | §9.3 |
| Studenti Russian Y5 medio | 565 | §6 |
| Insegnanti Russian Y5 | 4 | §5.5 |
| Cumulato EBITDA fine Y2 | –€25.049 | §8 |
| Break-even cumulativo | Q1 2028 | §9.3 |

---

*LiveLanguage · Revisione Piano Finanziario v2 · Aprile 2026 · Documento riservato — uso interno co-fondatori*
