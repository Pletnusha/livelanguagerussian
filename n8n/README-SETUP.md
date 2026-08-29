# n8n Workflow Setup — LiveLanguage Russian

## Prerequisiti

- n8n installato e raggiungibile su `https://n8n.pletnusha.xyz`
- Credenziali SMTP per inviare email (es. Gmail App Password, Brevo, Mailgun)
- Supabase service role key (non la anon key)

## 1. Configurare le variabili d'ambiente n8n

Sul server Vultr, aggiungi queste variabili d'ambiente a n8n:

```bash
# Nel file .env di n8n o come variabili di sistema:
SUPABASE_URL=https://itjjgblqdpopzoxqeufd.supabase.co
SUPABASE_SERVICE_KEY=<la tua service_role key da Supabase Dashboard → Settings → API>
```

Se usi Docker:
```bash
docker exec -it n8n sh
# Oppure modifica il docker-compose.yml e aggiungi:
# environment:
#   - SUPABASE_URL=https://itjjgblqdpopzoxqeufd.supabase.co
#   - SUPABASE_SERVICE_KEY=<service_role_key>
```

## 2. Configurare le credenziali SMTP in n8n

1. Apri n8n → **Settings → Credentials → Create New**
2. Tipo: **SMTP**
3. Nome: `SMTP — LiveLanguage`
4. Compila:
   - **Host:** il tuo server SMTP (es. `smtp.gmail.com`)
   - **Port:** `587` (TLS) o `465` (SSL)
   - **User:** l'email mittente (es. `info@livelanguagerussian.com`)
   - **Password:** la password dell'app o API key
   - **SSL/TLS:** Attiva

## 3. Importare il workflow

1. Apri n8n → **Workflows → Import from File**
2. Seleziona `workflow-new-user-welcome.json`
3. Dopo l'import:
   - Apri il nodo **"Send Welcome Email"**
   - Collega le credenziali SMTP create al passo 2
   - Verifica che `fromEmail` sia corretto
4. **Attiva il workflow** (toggle in alto a destra)

## 4. Testare

1. Vai su `https://www.livelanguagerussian.com/auth.html?mode=register`
2. Registra un utente di test
3. Verifica:
   - Il profilo viene creato in Supabase (`profiles` table)
   - n8n riceve il webhook e invia l'email
   - Il campo `n8n_stage` nel profilo passa da `new` a `welcome_sent`

## Flusso del workflow

```
Registrazione (sito) 
  → Webhook POST /webhook/new-user
    → Validazione (email presente + n8n_stage = 'new')
      → Estrazione dati utente
        → Invio email con credenziali
          → Aggiornamento profilo Supabase (n8n_stage = 'welcome_sent')
            → Risposta OK
```

## Troubleshooting

- **Email non arriva:** Controlla le credenziali SMTP e i log di n8n
- **Webhook non risponde:** Verifica che il workflow sia attivo e che l'URL sia `https://n8n.pletnusha.xyz/webhook/new-user`
- **Errore Supabase:** Verifica la `SUPABASE_SERVICE_KEY` (deve essere la service role, non la anon key)
