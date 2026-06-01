# Copywriter Brief — Blocco 2 · Mini-storie · Giorni 6–8

**Delegato da:** Instructional Designer
**Progetto:** Marathon Verbi di Moto · LiveLanguage Russian
**Destinatari del materiale:** italofoni, livello B1, partecipanti al marathon

---

## Contesto

Il Giorno 5 (шёл/ходил) è già completato e serve da template.
**File di riferimento:** `Maratona_Verbi_di_Moto_Giorno_5.csv`

Devi produrre i file CSV per i Giorni 6, 7 e 8 seguendo esattamente lo stesso formato.

---

## I 7 personaggi

Usare **sempre e solo** questi nomi. Non inventare nuovi personaggi.

| Nome | Note |
|------|------|
| Женя | maschile |
| Лена | femminile |
| Анна | femminile |
| Катя | femminile |
| Андрей | maschile |
| Дима | maschile |
| Тимур | maschile |

**Глюк** — il gatto di Dima. Può apparire come elemento narrativo (es. Дима бежал за Глюком).

---

## Formato CSV — colonne obbligatorie

```
ID, Type, Scenario, Sentence, Options, Correct, PHD_Feedback
```

| Colonna | Formato | Esempio |
|---------|---------|---------|
| `ID` | Numero progressivo | `1` |
| `Type` | Forma corretta + icona | `Бежал (➡️)` oppure `Бегал (↔️)` |
| `Scenario` | Nome dello scenario | `Emergenza` |
| `Sentence` | Frase russa con gap `{{n}}` | `"Дима: Я {{1}} к остановке, но автобус уже уехал."` |
| `Options` | Due forme separate da `/` | `бежал / бегал` |
| `Correct` | Forma corretta | `бежал` |
| `PHD_Feedback` | Spiegazione in italiano con icona | `Vettore urgente ➡️: correva verso la fermata.` |

---

## Regole di scrittura

**1. Ogni gap deve avere due segnali nel testo:**

| Tipo | Esempi |
|------|--------|
| Temporale | сейчас, вчера, каждый день, в тот момент когда, раньше, тогда, по утрам |
| Direzionalità | destinazione specifica → mono ➡️ · abitudine → multi ↔️ · processo con когда/пока → mono ➡️ · attività generica → multi ↔️ |

**2. Linguaggio autentico, non semplificato.**
La piattaforma ha tooltip di traduzione su ogni parola. Non abbassare il registro. Usare collocazioni reali.

**3. I testi formano dialoghi narrativi coerenti.**
Le frasi di uno stesso scenario sono collegate — i personaggi si parlano, si contraddicono, ricordano eventi. Non sono frasi isolate.

**4. La risposta sbagliata deve essere plausibile.**
Il gap deve richiedere un'analisi del contesto, non essere risolvibile dalla morfologia sola.

**5. Opzioni: presente e passato possono mescolarsi.**
Non limitare le opzioni al solo passato NSV. Es. `бежал / бегает` è una opzione valida se il contesto lo richiede.

**6. PHD_Feedback sempre in italiano.**
Formato: `Categoria ➡️/↔️: breve spiegazione.`
Esempi: `Abitudine ↔️: 'Correva ogni mattina'.` · `Urgenza ➡️: Si è messo a correre verso l'uscita.`

---

## Giorno 6 — БЕЖАЛ/БЕГАЛ · ЕХАЛ/ЕЗДИЛ

**Coppie target:**
- бежал ↔ бегал ↔ бегу ↔ бегает
- ехал ↔ ездил ↔ едет ↔ ездит

**Nota:** шёл/ходил può apparire nei testi come contesto narrativo — **non gappare**, lasciare pieno.

**Scenari suggeriti (3–4):**
- Emergenza / Corsa dell'ultimo minuto (бежал urgenza vs бегал sport)
- Viaggi (ехал processo vs ездил abitudine/esperienza)
- Mattina di corsa (mix бежал + ехал in uno stesso racconto)
- Conjugation (frasi di controllo grammaticale)

**Volume:** 30–40 item

**Errori tipici dell'italofono da coprire:**
- бежал в магазин (urgenza, non sport) — plausibilmente confuso con бегал
- каждое лето ездил → non ехал
- ехал три часа (processo in corso, durata) — confuso con ездил

---

## Giorno 7 — ЛЕТЕЛ/ЛЕТАЛ · ПЛЫЛ/ПЛАВАЛ

**Coppie target:**
- летел ↔ летал ↔ летит ↔ летает
- плыл ↔ плавал ↔ плывёт ↔ плавает

**⚠️ Attenzione — forma irregolare:** плыл (non *плавал* per NSV uni-)
Dedicare **almeno uno scenario intero** alla discriminazione плыл/плавал — è il punto di errore più frequente per l'italofono.

**Scenari suggeriti (3–4):**
- Vacanze / Viaggio aereo (летел singolo vs летал abitudine)
- Mare / Lago (плыл direzione precisa vs плавал nuotare in generale)
- Animali in movimento — самолёт летит/летает, рыба плывёт/плавает
- Conjugation

**Volume:** 30–40 item

**Errori tipici da coprire:**
- плавал invece di плыл per processo unidirezionale
- летел vs летал: самолёт над городом (processo in corso vs abitudine del velivolo)

---

## Giorno 8 — ВЁЛ/ВОДИЛ · ВЁЗ/ВОЗИЛ · НЁС/НОСИЛ

**Coppie target:**
- вёл ↔ водил ↔ ведёт ↔ водит
- вёз ↔ возил ↔ везёт ↔ возит
- нёс ↔ носил ↔ несёт ↔ носит

**⚠️ Morfologia irregolare:** вести→вёл / везти→вёз / нести→нёс
Le frasi devono rendere **espliciti** l'oggetto e il modo di trasporto — è quello che permette di scegliere tra i tre verbi transitivi.

| Verbo | Cosa / Chi | Come |
|-------|-----------|------|
| вести/вёл | persone | a piedi |
| везти/вёз | cose o persone | in mezzo di trasporto |
| нести/нёс | oggetti | a mano / in braccio |

**Scenari suggeriti (3–4):**
- Bambini / Anziani (вёл a piedi vs вёз in macchina)
- Trasloco / Borse pesanti (нёс vs вёз)
- Quotidiano: Дима che porta Глюк dal veterinario
- Conjugation

**Volume:** 30–40 item

**Errori tipici da coprire:**
- *везал* / *несал* / *ведал* — non esistono: gli errori morfologici sono prevedibili
- везу bambini (in macchina) ≠ веду bambini (a piedi)

---

## Checklist prima di consegnare

- [ ] 7 personaggi usati correttamente (genere grammaticale rispettato)
- [ ] Ogni gap ha segnale temporale + segnale di direzionalità
- [ ] PHD_Feedback per ogni item, in italiano, con icona ➡️ o ↔️
- [ ] Nessun item risolvibile dalla morfologia sola
- [ ] Scenari coerenti — le frasi di uno stesso scenario si leggono come un racconto
- [ ] File CSV con separatore `,` e testo tra virgolette `"` dove contiene virgole
