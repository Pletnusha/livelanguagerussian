// ============================================================
// TRACKER — records every answer and panel completion state
// to Supabase (answer_log + panel_results tables).
// Fire-and-forget: errors are logged but never thrown to callers.
// ============================================================
const SUPABASE_URL      = 'https://itjjgblqdpopzoxqeufd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ampnYmxxZHBvcHpveHFldWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MTY5OTUsImV4cCI6MjA4NjE5Mjk5NX0.hIcwr45dq4ApcAWH6dP_ZyE9UA7XXQ2jvuEAD1YR5Mc';

// ============================================================
// INTERNAL HELPERS
// ============================================================
async function loadSupabase() {
    if (window.supabase) return window.supabase;
    return new Promise((resolve, reject) => {
        const script    = document.createElement('script');
        script.src      = 'https://unpkg.com/@supabase/supabase-js@2.46.1/dist/umd/supabase.js';
        script.onload   = () => resolve(window.supabase);
        script.onerror  = () => reject(new Error('Failed to load Supabase'));
        document.head.appendChild(script);
    });
}

async function getContext() {
    const lib    = await loadSupabase();
    const client = lib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data: { session } } = await client.auth.getSession();
    if (!session) return null;
    return { client, userId: session.user.id };
}

// Derives lesson_id from the URL path.
// e.g. /principianti/casi/accusativo-come-ti-chiami/ → 'accusativo-come-ti-chiami'
function getLessonId() {
    const parts = window.location.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || 'unknown';
}

// ============================================================
// PUBLIC API
// ============================================================

/**
 * Log a single answer attempt.
 *
 * @param {object} params
 * @param {string} params.panelId       - DOM id of the exercise-panel, e.g. 'panel-acc-open-5'
 * @param {string|number} params.questionId  - engine-scoped question identifier
 * @param {string} params.userAnswer    - what the student submitted
 * @param {string} params.correctAnswer - the expected correct answer
 * @param {boolean} params.isCorrect
 */
export async function logAnswer({ panelId, questionId, userAnswer, correctAnswer, isCorrect }) {
    try {
        const ctx = await getContext();
        if (!ctx) return;
        const { client, userId } = ctx;

        await client.from('answer_log').insert({
            user_id:        userId,
            panel_id:       panelId,
            lesson_id:      getLessonId(),
            question_id:    String(questionId),
            user_answer:    String(userAnswer  ?? ''),
            correct_answer: String(correctAnswer ?? ''),
            is_correct:     isCorrect,
            answered_at:    new Date().toISOString()
        });
    } catch (e) {
        console.warn('tracker.logAnswer error:', e);
    }
}

/**
 * Update (or create) the panel_results row for the current user + panel.
 * Uses a read-then-upsert to increment running counters.
 *
 * @param {object} params
 * @param {string} params.panelId
 * @param {'in_progress'|'completed'} params.status
 * @param {number} [params.correctDelta=0]  - answers to add to correct_count
 * @param {number} [params.errorDelta=0]    - answers to add to error_count
 */
export async function updatePanelStatus({ panelId, status, correctDelta = 0, errorDelta = 0 }) {
    try {
        const ctx = await getContext();
        if (!ctx) return;
        const { client, userId } = ctx;
        const lessonId = getLessonId();

        const { data: existing } = await client
            .from('panel_results')
            .select('correct_count, error_count')
            .eq('user_id',   userId)
            .eq('panel_id',  panelId)
            .eq('lesson_id', lessonId)
            .maybeSingle();

        const row = {
            user_id:       userId,
            panel_id:      panelId,
            lesson_id:     lessonId,
            status,
            correct_count: (existing?.correct_count ?? 0) + correctDelta,
            error_count:   (existing?.error_count   ?? 0) + errorDelta,
            updated_at:    new Date().toISOString()
        };
        if (status === 'completed') row.completed_at = new Date().toISOString();

        await client.from('panel_results').upsert(row, {
            onConflict: 'user_id,panel_id,lesson_id'
        });
    } catch (e) {
        console.warn('tracker.updatePanelStatus error:', e);
    }
}
