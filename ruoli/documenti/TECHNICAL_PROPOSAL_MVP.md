# Proposta Tecnica: MVP Maratona "Verbi di Moto" (14 Giorni)

**Destinatario:** Francesco  
**Autore:** Hermes Agent (per conto di Nadia)  
**Obiettivo:** Lanciare il modulo B2C in 14 giorni minimizzando il debito tecnico e il consumo di token.

---

## 1. Architettura "Zero-Token Runtime"
L'idea cardine è non utilizzare LLM in tempo reale per ogni studente. Questo abbatte i costi e garantisce velocità.

*   **Content Factory:** Utilizziamo il Prompt Engineering (LiveModul) per generare una tantum un database di 500+ micro-esercizi basati sulla logica delle "Frecce" di Nadia.
*   **Storage:** Il contenuto viene salvato in un file JSON statico o in una tabella Supabase dedicata (`exercises`).
*   **Runtime:** Il sito (GitHub Pages) legge il file JSON/API e visualizza l'esercizio. Costo token: **0$** durante lo svolgimento del corso.

---

## 2. Supabase / Database Structure
Nadia ha già previsto `supabase/schema.sql`. Suggerisco di aggiungere la tabella `exercises` per gestire il Loop di apprendimento:

```sql
CREATE TABLE exercises (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  block_id int, -- 1-4 (da Curriculum v2)
  day int, -- 1-14
  context_it text, -- Scenario situazionale (es: "In banca")
  logic_arrow text, -- Il tipo di freccia (es: "Direzione Unica")
  question_ru text, -- La frase russa da completare
  correct_answer text,
  explanation_it text, -- Perché questa freccia e non l'altra
  tier text -- 'PUBLIC' o 'PAID' (per la conversione)
);
```

---

## 3. n8n Workflow (Frictionless Automation)
Hermes può gestire la creazione dei workflow. La logica proposta:

1.  **Lead Capture:** Instagram (Webhook) -> n8n -> Supabase (Crea profilo con email).
2.  **Diagnostic Test:** n8n invia il link unico per il test su GitHub Pages.
3.  **Conversion:** Dopo l'acquisto su Stripe -> n8n sblocca il `tier: 'PAID'` in Supabase e invia l'email di benvenuto tramite Gmail.
4.  **Daily Loop:** Ogni mattina n8n invia un reminder Telegram/Email con il link al giorno specifico del maratona.

---

## 4. Integrazione GitHub Pages
Non serve una Web App complessa. Basta un JavaScript leggero che:
1. Legge lo stato dell'utente da Supabase.
2. Recupera i relativi esercizi.
3. Rendering dei componenti Drag & Drop o Quiz come previsto nel `role_index.md`.

---

## Prossimi Passi
*   **Francesco:** Validazione di questa architettura.
*   **Hermes:** Generazione del batch di esercizi (JSON) tramite LiveModul.
*   **Nadia:** Dashboard di monitoraggio via Google Sheets.

*Nota: Questo documento è un invito alla discussione tecnica per allineare la visione di Nadia con l'implementazione di Francesco.*
