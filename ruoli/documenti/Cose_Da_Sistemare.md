# Le cose da sistemare — un giro completo del sito

Ho passato il sito al setaccio, pagina per pagina, file per file — non per sentito dire, ma leggendo davvero cosa c'è dentro ogni `exercises.js`. Ecco cosa ho trovato. Niente ticket, niente gergo da sviluppatore — solo le cose così come sono, con quanto urgono.

---

## 🔴 Queste rompono l'esperienza — le vede l'utente, oggi

**Due porte d'ingresso che non si parlano.** `courses.html` manda l'utente su `register.html`, che lo porta a Stripe e poi a `login.html`. Nel frattempo `ISTRUZIONI.md` dice che quelle due pagine sono «backup, non più usate» — peccato che l'unico flusso di pagamento reale passi proprio da lì. Non è un errore di codice, è un disallineamento: bisogna decidere una volta per tutte quale porta è quella vera, e chiudere l'altra.

**Manca la privacy policy.** Fisicamente. Il link nel footer della home porta a una pagina che non esiste — 404 secco, la prima cosa che un utente diffidente prova a controllare.

**Tre card che portano al nulla.** Nella pagina Principianti, tre link puntano a `/argomenti/` — un percorso che non esiste da nessuna parte sul sito. Lo sapevamo già da aprile, e non l'abbiamo mai tolto.

**Pagine che sembrano pronte e non lo sono.** Chi clicca su `idti-usi-speciali`, `passato/xodit-idiomi` o `passato/exat-ezdit-idiomi` trova il vuoto — letteralmente, l'exercises.js non c'è o non contiene un solo esercizio, eppure sono linkate come se fossero complete. E qui c'è un dettaglio strano: `exat-ezdit-passato` e le pagine passato di nuotare/volare — nella memoria di aprile risultavano finite, undici pannelli. Oggi sono scheletri con «// TODO» ovunque. O il contenuto è sparito per strada, o quella nota di aprile era sbagliata — vale la pena capire quale delle due.

---

## 🟠 Debito importante — non si vede subito, ma frena la crescita

**Dalle pagine gratuite non si arriva mai all'acquisto.** Ho controllato ogni riga di `panel-manager.js`, dei motori esercizi, del CSS — zero riferimenti a `courses.html` o `register.html`. I pannelli student/paid si vedono grigi, non cliccabili, e basta. Nessun invito a comprare, nessun punto di conversione. Uno studente potrebbe fare tutti gli esercizi gratuiti del mondo e non trovare mai la strada verso l'acquisto, a meno di cercarsela da solo.

**Una sola maratona ha davvero un'infrastruttura.** Sette cartelle in `corsi/MARATONE/`, sei sono vuote — solo `VERBI_DI_MOTO` ha contenuto. `courses.html` vende tre piani, tutti riconducibili a quella. Il giorno in cui deciderai la prossima maratona, mancherà anche l'impalcatura tecnica per venderla — non solo il contenuto.

**Il presente dei verbi di moto non esiste.** Né HTML né esercizi. C'è il passato, c'è il futuro — manca proprio il punto di partenza.

**Tre pagine caso sono gusci vuoti.** Prepositivo, Accusativo, Strumentale hanno solo il titolo — nessuna card dentro. Il Genitivo ne ha due, ma non corrispondono a nessuno dei complementi della nuova mappa Casi→Complementi — sembrano un resto di un'architettura precedente, forse legata al genitivo plurale della maratona. Da capire se tenerle, spostarle, o lasciarle andare.

---

## 🟡 Documentazione da riallineare — non urgente, ma disorienta chi lavora sul sito

`ISTRUZIONI.md` descrive una struttura di cartelle che non esiste più e dà informazioni sbagliate su quale pagina di login sia quella attiva. Il vecchio `Jira_Dev_Tasks.md` elenca otto task che in realtà sono già tutti finiti — tienilo pure come archivio, ma non è più la lista da guardare.

---

## 💭 Per non perdere il filo — RAG e cluster semantici

Questo non è per ora — è per non dimenticarlo. C'era l'idea di un tutor IA che scegliesse gli esercizi giusti per ogni studente, appoggiandosi ai cluster semantici (Descrizione, Luogo e Tempo, Azione) come struttura per organizzare e recuperare i contenuti — quello che tecnicamente si chiama RAG. Oggi non esiste nulla di tutto questo nel codice — né database vettoriale, né logica di recupero. È un pezzo di architettura futura, non un buco da colmare adesso. Lo lascio scritto qui perché quando arriverà il momento, la struttura a cluster che già usiamo per organizzare i contenuti è esattamente la base su cui costruirlo.

---

*Ho lasciato fuori tutto quello che riguarda accessi ai pannelli (public/student/paid) — quelli restano come li ha già mappati l'audit precedente, e lì non tocco niente senza un tuo sì esplicito.*
