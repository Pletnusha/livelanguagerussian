# Istruzioni — LIVE LANGUAGE_RUSSIAN

## Avvio del server locale

Il sito è statico (solo HTML, CSS, JS) e non richiede Node, npm o build.
Per testarlo in locale è sufficiente un server HTTP elementare.

### Con Python (consigliato)

```bash
# dalla cartella radice del progetto:
cd /home/frank/Scaricati/TestGitNadia
python3 -m http.server 8002
```

Il sito è raggiungibile all'indirizzo: **http://localhost:8002**

> Perché non aprire i file direttamente nel browser?
> I file JS usano ES Modules (`import`/`export`): i browser bloccano i moduli
> se la pagina viene aperta da file system (`file://`). Il server HTTP è obbligatorio.

---

## Pagine principali da testare

| URL | Descrizione |
|-----|-------------|
| `http://localhost:8002/` | Landing page |
| `http://localhost:8002/auth.html` | Login (default) |
| `http://localhost:8002/auth.html?mode=register` | Registrazione |
| `http://localhost:8002/principianti/casi/accusativo-come-ti-chiami/` | Esercizi accusativo |
| `http://localhost:8002/livello_elementare/verbi-di-moto/pluridirezionali-vs-monodirezionali/` | Esercizi pluridirezionali |

### Parametri URL utili

- `?access=student` — attiva livello studente (sblocca contenuti student nella pagina accusativo)
- `?access=paid` — attiva livello paid (sblocca tutti i contenuti)
- `?mode=login` / `?mode=register` — seleziona sezione in `auth.html`
- `?redirect=percorso` — dopo il login reindirizza a `/percorso/`
- `?topic=percorso` — registra il topic di provenienza nella registrazione

---

## Struttura del progetto

```
TestGitNadia/
│
├── index.html                          # Landing page (home)
├── auth.html                           # Login + Registrazione (unificato)
├── login.html                          # (backup, non più usato)
├── register.html                       # (backup, non più usato)
├── CNAME                               # Dominio GitHub Pages: livelanguagerussian.com
│
├── assets/
│   ├── css/
│   │   ├── main.css                    # Stili globali condivisi
│   │   ├── landing.css                 # Stili della landing page
│   │   └── access-control.css          # Stili per pannelli bloccati/sbloccati
│   │
│   └── js/
│       ├── panel-manager.js            # Gestione pannelli: click, toggle, lazy init, access control
│       ├── engines/
│       │   ├── DragDropExercise.js     # Motore esercizi trascina/componi frasi
│       │   ├── FlashcardExercise.js    # Motore flashcard (studio, quiz, abbinamento)
│       │   └── QuizExercise.js         # Motore quiz a risposta aperta
│       └── utils/
│           └── speech.js               # Text-to-speech (voce russa Web Speech API)
│
├── principianti/
│   ├── index.html                      # Pagina livello principianti
│   └── casi/
│       └── accusativo-come-ti-chiami/
│           ├── index.html              # Struttura HTML degli esercizi (scaffold)
│           └── exercises.js            # Dati degli esercizi + collegamento ai motori
│
└── livello_elementare/
    ├── index.html
    ├── aspetto/index.html
    ├── complementi/index.html
    ├── verbi-di-moto/
    │   ├── index.html
    │   ├── pluridirezionali-vs-monodirezionali/
    │   │   ├── index.html              # Struttura HTML degli esercizi
    │   │   └── exercises.js            # Dati degli esercizi + collegamento ai motori
    │   ├── andare-con-un-mezzo/index.html
    │   ├── verbi-di-moto-specifici/index.html
    │   └── complementi-dei-verbi-di-moto/index.html
    └── verbi-di-moto-transitivi/
        ├── index.html
        ├── nesti-nositi/index.html
        ├── vesti-voditi/index.html
        └── vezti-voziti/index.html
```

---

## Come funziona il codice

### Separazione dei ruoli

| Livello | File | Responsabilità |
|---------|------|----------------|
| **Struttura** | `index.html` | Solo HTML: scaffold pannelli, card esercizi, sezioni flashcard |
| **Dati** | `exercises.js` | Array con testo, parole, risposte corrette per ogni esercizio |
| **Logica** | `engines/*.js` | Classi riutilizzabili che gestiscono interazione e stato |
| **Navigazione** | `panel-manager.js` | Apre/chiude pannelli, inizializza motori al primo click |
| **Stile** | `assets/css/*.css` | Presentazione visiva |

### Lazy loading degli esercizi

Gli esercizi **non si inizializzano al caricamento della pagina**, ma solo quando
l'utente clicca sulla card corrispondente (al primo click). Questo evita di
eseguire codice per pannelli che l'utente non apre mai.

Il meccanismo è in `panel-manager.js`: ogni `exercises.js` registra una funzione
factory per pannello; al primo click il panel-manager la esegue una sola volta
(marcando il pannello con `data-initialized`).

### Access control

La pagina accusativo supporta tre livelli di accesso:
- `public` — visibile a tutti
- `student` — visibile con `?access=student` o valore in localStorage
- `paid` — visibile solo con `?access=paid`

I pannelli bloccati appaiono semi-trasparenti e non sono cliccabili (CSS in
`access-control.css`, logica in `panel-manager.js`).

### Autenticazione (Supabase)

`auth.html` gestisce login e registrazione tramite Supabase Auth.
- **Login**: `supabaseClient.auth.signInWithPassword()`
- **Registrazione**: `supabaseClient.auth.signUp()` con metadati utente
- La registrazione genera automaticamente una password casuale e la include
  nei metadati (n8n la invia all'utente via email)
- reCAPTCHA v3 protegge il form di registrazione

---

## Aggiungere un nuovo esercizio

1. Aprire `exercises.js` della pagina corrispondente
2. Aggiungere un initializer nell'oggetto `initializers`:
   ```js
   'id-del-pannello': () => new DragDropExercise({
       rootId: 'id-del-pannello',
       exercises: [ /* dati */ ]
   })
   ```
3. Verificare che nell'HTML esista una `<div class="exercise-card">` con
   `data-panel="id-del-pannello"` e il pannello corrispondente con `id="id-del-pannello"`

## Aggiungere una nuova pagina esercizi

1. Creare la cartella e i file `index.html` + `exercises.js`
2. Copiare la struttura HTML scaffold da una pagina esistente
3. In `exercises.js` importare i motori necessari e chiamare `initPanelManager()`
4. Collegare il CSS: `<link rel="stylesheet" href="/assets/css/access-control.css">`
   (se la pagina usa access control)
