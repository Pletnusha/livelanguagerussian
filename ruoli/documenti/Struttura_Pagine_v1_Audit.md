# Struttura Pagine v1 — audit vs realtà (26 luglio 2026)

**Documento verificato:** `LLR_Principianti_Struttura_Pagine_v1_IT` (38 pagine, sezioni: basi, casi, aggettivi, avverbi-vs-aggettivi, numeri, luoghi)
**Metodo:** ogni path della colonna "Path completo" controllato sul filesystem reale (non sulla documentazione precedente). Nessuna modifica fatta — solo verifica.

**Risultato in una riga:** nessuna delle 38 pagine del documento esiste al path indicato — incluse tutte le 22 marcate come già esistenti. Il documento descrive una convenzione di slug (traslitterazione tipo `genitivo-partitivo`, `dativo-nuzhno-sostantivo`) che non è mai stata implementata sul sito.

---

## 1. Cosa dice il documento vs cosa c'è davvero

| # | Path proposto nel documento | Stato nel documento | Esiste sul sito? |
|---|---|---|---|
| 1 | `principianti/basi/sushchestvitelnye/` | NUOVA | ❌ Non esiste (corretto, è nuova) |
| 2 | `principianti/basi/spryazhenie/` | NUOVA | ❌ Non esiste (corretto) |
| 3 | `principianti/basi/pronomi-lichnye/` | NUOVA | ❌ Non esiste (corretto) |
| 4 | `principianti/casi/accusativo-come-ti-chiami/` | ✅ Esistente (spirale acc. 1/4) | ❌ **Non esiste a questo path** |
| 5 | `principianti/casi/genitivo-partitivo/` | ✅ Esistente (spirale gen. 1/3) | ❌ **Non esiste a questo path** |
| 6 | `principianti/casi/accusativo-genitivo-partitivo/` | NUOVA | ❌ Non esiste (corretto) |
| 7 | `principianti/casi/accusativo-lyubit-nenavidet/` | NUOVA | ❌ Non esiste (corretto) |
| 8 | `principianti/casi/genitivo-est-vs-net/` | ✅ Esistente | ❌ **Non esiste a questo path** |
| 9 | `principianti/casi/prepositivo-stato-in-luogo/` | ✅ Esistente (spirale 1/3) | ❌ **Non esiste a questo path** |
| 10 | `principianti/casi/genitivo-stato-in-luogo/` | ✅ Esistente (spirale 1/3) | ❌ **Non esiste a questo path** |
| 11 | `principianti/casi/strumentale-stato-in-luogo/` | ✅ Esistente (spirale 1/3) | ❌ **Non esiste a questo path** |
| 12 | `principianti/casi/dativo-nuzhno-sostantivo/` | ✅ Esistente (spirale dat. 1/5) | ❌ **Non esiste a questo path** |
| 13 | `principianti/casi/dativo-pronomi-necessita/` | ✅ Esistente (spirale dat. 2/5) | ❌ **Non esiste a questo path** |
| 14–18, 20–21, 27, 30, 38 | vari (dativo-nuzhno-infinitivo, dativo-piacere-nravitsya, genitivo-plurale-mnogo-malo, famiglia-comparativi, gusto-e-freschezza, forma-vs-di-che-forma, materiale, narechiya-kachestva-vs-kolichestvo, famiglia-uno-altro, dove-sei-dove-vai) | NUOVA | ❌ Non esistono (corretto) |
| 19 | `principianti/aggettivi/colore-vs-di-che-colore/` | →unire (unificazione di 2 pagine esistenti) | ❌ Nessuna delle due pagine di origine esiste |
| 22 | `principianti/aggettivi/bello-vs-buono/` | ✅ Esistente | ❌ **Non esiste** |
| 23 | `principianti/aggettivi/carattere-vs-emozioni/` | ✅ Esistente | ❌ **Non esiste** |
| 24 | `principianti/aggettivi/capita/` | ✅ Esistente (творительный) | ❌ **Non esiste** |
| 25 | `principianti/avverbi-vs-aggettivi/che-tempo-fa/` | ✅ Esistente | ❌ **Non esiste** |
| 26 | `principianti/avverbi-vs-aggettivi/come-mi-sento/` | trasf. (da aggettivi/) | ❌ Non esiste in nessuna delle due posizioni |
| 28–29, 31 | `principianti/scolco/...` (quanto-vs-quando, quantita-v-magazine, orari/che-ore-sono) | ✅ Esistente ("path mantenuto") | ❌ **Cartella `scolco/` non esiste** |
| 32 | `principianti/descrizione/eta/` | ✅ Esistente ("path mantenuto") | ❌ **Cartella `descrizione/` non esiste** |
| 33–37 | `principianti/luoghi/...` (doma, v-magazine, v-aptece, na-pochte, in-citta) | ✅ Esistente | ❌ **Cartella `luoghi/` non esiste** |

Nessuna cartella `basi/`, `aggettivi/`, `avverbi-vs-aggettivi/`, `numeri/`, `luoghi/`, `scolco/`, `descrizione/` esiste sotto `principianti/` — a nessun livello, con nessun nome.

## 2. Cosa esiste davvero sotto `principianti/`

```
principianti/
├── index.html                                          (pagina di livello — orfana, non linkata da index.html/courses.html)
├── avverbi/                                             (cartella vuota, nessun index.html dentro)
└── casi/
    ├── genitivo-il-caso-piu-triste-del-mondo/           (contenuto reale)
    │   ├── sostantivi/
    │   └── quando-un-sostantivo-incontra-un-aggettivo/
    ├── dativo-il-caso-di-forze-soprannaturali/          (contenuto reale)
    │   ├── come-stai/
    │   └── se-hai-bisogno-di-qualcosa/
    ├── accusativo-il-caso-del-tempo-perduto/            (guscio vuoto — solo <h1>)
    ├── strumentale-il-caso-del-modo/                    (guscio vuoto)
    └── prepositivo-il-caso-dello-spazio/                (guscio vuoto)
```

`principianti/index.html` linka anche 3 card verso `/argomenti/*.html` (Aggettivi ×2, Avverbi ×1) — percorso che non esiste da nessuna parte nel repo.

Esiste inoltre una terza struttura parallela, `corsi/principianti/` (Modulo 1, cartelle in cirillico tipo "СЕМЬЯ АЛЬБЕРТА", "ЕСТЬ vs НЕТ") — non collegata né a `principianti/` né alla home, verosimilmente una bozza precedente mai ripulita.

## 3. Relazione con il backlog tecnico esistente

Parte di questo audit coincide con voci già aperte in `Jira_Tech_Backlog_Architettura.md` (24 luglio 2026):

- **LLR-T15** copre già i 3 link morti verso `/argomenti/*.html`.
- **LLR-T20** copre già le 3 pagine caso vuote (accusativo, strumentale, prepositivo).
- **LLR-T21** copre già il disallineamento delle 2 card del Genitivo rispetto alla mappa contenuti.

**Non ancora tracciato in nessun documento:** il fatto che l'intero documento `Struttura Pagine v1` (38 pagine, convenzione di slug nuova) non corrisponde a *nessun* path reale — non solo le pagine "da correggere" già note, ma anche le 22 marcate come "già esistenti". Questo è un problema a monte: chi ha compilato la tabella ID ha marcato come ✅ pagine che, sul sito, semplicemente non ci sono con quel nome.

## 4. Correzioni necessarie

1. **Riconciliare la convenzione di naming prima di procedere.** ID e PM devono decidere: si rinominano le pagine esistenti (`genitivo-il-caso-piu-triste-del-mondo` → `genitivo-partitivo`, ecc.) per allinearle al nuovo piano, oppure si riscrive il piano usando gli slug reali già in produzione? Finché questo non è deciso, ogni nuova pagina "NUOVA" rischia di nascere già disallineata da quelle esistenti.
2. **Chiudere LLR-T15** (link morti `/argomenti/*.html`) — indipendente dalla decisione sopra, è un problema visibile oggi.
3. **Decidere il destino dei 3 gusci vuoti** (accusativo, strumentale, prepositivo, + `avverbi/` senza index) — LLR-T20 già lo traccia, ma va fatto prima di aggiungere le pagine "spirale" previste dal nuovo piano su quegli stessi casi.
4. **Chiarire se `principianti/` deve restare orfana** (non linkata da home/courses) o se va ricollegata — se il piano da 38 pagine deve andare in produzione, la sezione deve diventare raggiungibile.
5. **Decidere cosa fare di `corsi/principianti/`** (bozza legacy in cirillico) — se non serve più, va archiviata per evitare confusione con la nuova struttura pianificata.

*Nessuna azione eseguita — solo verifica. In attesa di indicazioni PM su come procedere (rinomina, nuova creazione, o aggiornamento del documento di piano).*
