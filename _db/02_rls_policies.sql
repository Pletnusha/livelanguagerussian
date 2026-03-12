-- ============================================================
-- ROW LEVEL SECURITY — tabella profiles
-- Esegui nell'SQL Editor di Supabase
-- NOTA: la PK della tabella è "id" (uuid), la FK verso
--       auth.users è "user_id" (uuid unique)
-- ============================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own profile"   ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Lettura: l'utente vede solo il proprio profilo
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

-- Modifica: l'utente modifica solo il proprio profilo
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Insert: solo con il proprio user_id
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Verifica:
-- SELECT policyname, cmd FROM pg_policies WHERE tablename = 'profiles';
