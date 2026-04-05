-- ============================================================
-- MIGRATION: profiles — add access_level (Option B)
-- ============================================================
-- Run once on an existing database.
-- exercisepaid is kept for safety during transition; can be
-- dropped after verifying access_level works in production.

ALTER TABLE profiles
    ADD COLUMN IF NOT EXISTS access_level text NOT NULL DEFAULT 'public'
        CHECK (access_level IN ('public', 'student', 'paid'));

-- Backfill from existing exercisepaid flag
UPDATE profiles
SET access_level = 'paid'
WHERE exercisepaid = true AND access_level = 'public';


-- ============================================================
-- TABLE: panel_results
-- One row per (user × panel × lesson). Tracks completion state
-- and running answer counts.
-- ============================================================
CREATE TABLE IF NOT EXISTS panel_results (
    id            bigserial PRIMARY KEY,
    user_id       uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    panel_id      text        NOT NULL,   -- e.g. 'panel-acc-open-5'
    lesson_id     text        NOT NULL,   -- last URL segment, e.g. 'accusativo-come-ti-chiami'
    status        text        NOT NULL DEFAULT 'in_progress'
                                  CHECK (status IN ('in_progress', 'completed')),
    correct_count int         NOT NULL DEFAULT 0,
    error_count   int         NOT NULL DEFAULT 0,
    completed_at  timestamptz,
    updated_at    timestamptz NOT NULL DEFAULT now(),
    UNIQUE (user_id, panel_id, lesson_id)
);

-- Indexes for PM aggregate queries
CREATE INDEX IF NOT EXISTS panel_results_panel_id_idx  ON panel_results (panel_id);
CREATE INDEX IF NOT EXISTS panel_results_lesson_id_idx ON panel_results (lesson_id);
CREATE INDEX IF NOT EXISTS panel_results_status_idx    ON panel_results (status);

-- RLS
ALTER TABLE panel_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_own_panel_results"
    ON panel_results FOR ALL
    USING  (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);


-- ============================================================
-- TABLE: answer_log
-- One row per individual answer attempt. Immutable insert-only.
-- ============================================================
CREATE TABLE IF NOT EXISTS answer_log (
    id             bigserial PRIMARY KEY,
    user_id        uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    panel_id       text        NOT NULL,
    lesson_id      text        NOT NULL,
    question_id    text        NOT NULL,   -- engine-scoped identifier
    user_answer    text        NOT NULL,
    correct_answer text        NOT NULL,
    is_correct     boolean     NOT NULL,
    answered_at    timestamptz NOT NULL DEFAULT now(),
    attempt        int         NOT NULL DEFAULT 1  -- reserved for milestone tests
);

-- Indexes for per-question and per-panel error analysis
CREATE INDEX IF NOT EXISTS answer_log_user_panel_idx   ON answer_log (user_id, panel_id, lesson_id);
CREATE INDEX IF NOT EXISTS answer_log_question_idx     ON answer_log (question_id);
CREATE INDEX IF NOT EXISTS answer_log_is_correct_idx   ON answer_log (is_correct);

-- RLS: users can insert and read their own rows
ALTER TABLE answer_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_insert_own_answers"
    ON answer_log FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_read_own_answers"
    ON answer_log FOR SELECT
    USING (auth.uid() = user_id);


-- ============================================================
-- VIEWS for PM dashboard (accessible via service role or a
-- future pm_role policy)
-- ============================================================

-- Panels blocking most students (in_progress with high error rate)
CREATE OR REPLACE VIEW pm_panel_summary AS
SELECT
    lesson_id,
    panel_id,
    count(*)                                             AS total_students,
    count(*) FILTER (WHERE status = 'completed')         AS completed,
    count(*) FILTER (WHERE status = 'in_progress')       AS in_progress,
    round(avg(error_count)::numeric, 1)                  AS avg_errors,
    round(avg(correct_count)::numeric, 1)                AS avg_correct
FROM panel_results
GROUP BY lesson_id, panel_id
ORDER BY in_progress DESC, avg_errors DESC;

-- Most-missed questions across all students
CREATE OR REPLACE VIEW pm_question_errors AS
SELECT
    lesson_id,
    panel_id,
    question_id,
    count(*)                                             AS total_attempts,
    count(*) FILTER (WHERE NOT is_correct)               AS errors,
    round(
        100.0 * count(*) FILTER (WHERE NOT is_correct)
        / nullif(count(*), 0)
    , 1)                                                 AS error_rate_pct
FROM answer_log
GROUP BY lesson_id, panel_id, question_id
ORDER BY error_rate_pct DESC, errors DESC;

-- Students blocked on a specific panel (in_progress, non-zero errors)
CREATE OR REPLACE VIEW pm_blocked_students AS
SELECT
    pr.lesson_id,
    pr.panel_id,
    pr.user_id,
    pr.correct_count,
    pr.error_count,
    pr.updated_at
FROM panel_results pr
WHERE pr.status = 'in_progress'
  AND pr.error_count > 0
ORDER BY pr.error_count DESC, pr.updated_at ASC;
