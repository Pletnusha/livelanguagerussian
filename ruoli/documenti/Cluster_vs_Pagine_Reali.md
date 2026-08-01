# Cluster semantici vs pagine reali — nota a parte

Il sito è pagine statiche su GitHub Pages, collegate a mano una all'altra. La struttura a cluster semantici (Descrizione, Luogo e Tempo, Azione) definita in `LiveLanguage_Architettura_Cluster.md` regge tutta l'impalcatura didattica sulla carta — ma nella realtà del sito si traduce quasi soltanto in verbi di moto.

## I tre livelli, uno per uno

- **Livello di base** — è un'opzione vera nel form di registrazione (`index.html`, select livello: `livello_di_base`). Uno studente può selezionarla oggi stesso. Sul sito non esiste: nessuna cartella, nessuna pagina, niente. Zero — non «in costruzione», proprio assente.

- **Livello elementare** — l'unico macro-tema costruito per davvero è verbi di moto. `aspetto/` e `complementi/` sono contenitori vuoti: un titolo e basta, nessun figlio dentro.

- **Livello principianti** — esiste più come intenzione che come sito. Dentro `principianti/index.html` ci sono tre sezioni: Casi, Aggettivi, Avverbi.
  - **Casi** — cartelle reali, ma per lo più vuote (vedi `Cose_Da_Sistemare.md`).
  - **Aggettivi** — nessuna cartella dietro. I link vanno dritti su `/argomenti/*.html`, che non esiste.
  - **Avverbi** — la cartella `avverbi/` esiste, ma è vuota: non c'è nemmeno un `index.html` dentro. I link, come per Aggettivi, puntano ad `/argomenti/*.html`.

## Il punto

Del cluster **Descrizione** (qualità, possesso, aggettivi — tutto ciò che dovrebbe vivere in Principianti) non c'è traccia costruita da nessuna parte sul sito. Il cluster **Azione** è rappresentato solo da verbi di moto. **Luogo e Tempo** idem.

Le singole pagine rotte elencate in `Cose_Da_Sistemare.md` sono sintomi. Questo è la causa: la mappa dei cluster e la mappa reale delle pagine sono due documenti diversi, e non collimano.
