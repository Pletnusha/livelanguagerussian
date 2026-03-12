-- ============================================================
-- MIGRATION: aggiungi colonne mancanti a profiles
-- Esegui nell'SQL Editor di Supabase
-- Sicuro: IF NOT EXISTS non tocca i dati esistenti
-- ============================================================

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS bio                    TEXT,
  ADD COLUMN IF NOT EXISTS stripe_customer_id     TEXT,
  ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT;

-- Verifica risultato:
-- SELECT column_name, data_type
-- FROM information_schema.columns
-- WHERE table_name = 'profiles'
-- ORDER BY ordinal_position;
