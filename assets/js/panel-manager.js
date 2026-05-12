// ============================================================
// SUPABASE CONFIGURATION
// ============================================================
const SUPABASE_URL      = 'https://itjjgblqdpopzoxqeufd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ampnYmxxZHBvcHpveHFldWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MTY5OTUsImV4cCI6MjA4NjE5Mjk5NX0.hIcwr45dq4ApcAWH6dP_ZyE9UA7XXQ2jvuEAD1YR5Mc';

const ACCESS_LEVELS = { none: 0, public: 1, student: 2, paid: 3 };

// ============================================================
// LOAD SUPABASE DYNAMICALLY IF NOT ALREADY PRESENT
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

// ============================================================
// GET USER ACCESS LEVEL FROM SUPABASE
// - not logged in           → 'none'
// - logged in               → 'public'
// - access_level='student'  → 'student'  (data-access="student")
// - access_level='paid'     → 'paid'     (data-access="paid")
// ============================================================
async function getUserLevel() {
    try {
        const lib    = await loadSupabase();
        const client = lib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        const { data: { session } } = await client.auth.getSession();
        if (!session) return 'none';

        const { data: profile } = await client
            .from('profiles')
            .select('access_level')
            .eq('user_id', session.user.id)
            .single();

        return profile?.access_level ?? 'public';

    } catch (e) {
        console.error('Access control error:', e);
        return 'none';
    }
}

// ============================================================
// APPLY ACCESS CONTROL TO PANELS AND CARDS
// ============================================================
function applyAccessControl(userLevel) {
    const userLevelNum = ACCESS_LEVELS[userLevel] ?? 0;

    document.querySelectorAll('.exercise-panel[data-access]').forEach(panel => {
        const panelLevelNum = ACCESS_LEVELS[panel.getAttribute('data-access')] ?? 1;
        panel.setAttribute('data-state', userLevelNum >= panelLevelNum ? 'open' : 'blocked');
    });

    document.querySelectorAll('.exercise-card[data-target]').forEach(card => {
        const panel = document.getElementById(card.getAttribute('data-target'));
        if (panel && panel.getAttribute('data-state') === 'blocked') {
            card.setAttribute('data-card-state', 'blocked');
        } else {
            card.removeAttribute('data-card-state');
        }
    });
}

// ============================================================
// INIT PANEL MANAGER
// ============================================================
export async function initPanelManager({ initializers = {}, enableAccessControl = false, ctaAfterPanel2 = null } = {}) {
    if (enableAccessControl) {
        const userLevel = await getUserLevel();
        applyAccessControl(userLevel);
    }

    function injectCta() {
        if (!ctaAfterPanel2) return;
        const sessionKey = `cta_panel2_shown_${ctaAfterPanel2.panelId}`;
        if (sessionStorage.getItem(sessionKey)) return;

        const panel = document.getElementById(ctaAfterPanel2.panelId);
        if (!panel) return;

        const cta = document.createElement('section');
        cta.className = 'cta-section';
        cta.setAttribute('data-cta-inline', 'true');
        cta.innerHTML = ctaAfterPanel2.html;
        panel.insertAdjacentElement('afterend', cta);

        sessionStorage.setItem(sessionKey, '1');
    }

    document.querySelectorAll('.exercise-card[data-status]').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;

            const targetId = card.getAttribute('data-target');
            const panel    = document.getElementById(targetId);
            if (!panel) return;
            if (panel.getAttribute('data-state') === 'blocked') return;

            const isOpen = !panel.hidden;

            document.querySelectorAll('.exercise-panel').forEach(p => {
                if (p !== panel) {
                    p.hidden = true;
                    const other = document.querySelector(`[data-target="${p.id}"]`);
                    if (other) other.setAttribute('data-status', 'closed');
                }
            });

            if (isOpen) {
                panel.hidden = true;
                card.setAttribute('data-status', 'closed');
            } else {
                panel.hidden = false;
                card.setAttribute('data-status', 'open');

                const cardTitle = card.querySelector('.exercise-title');
                const flashcardHeader = panel.querySelector('.fca01-header h2');
                if (cardTitle && flashcardHeader) {
                    flashcardHeader.textContent = cardTitle.textContent;
                }

                if (!panel.hasAttribute('data-initialized') && initializers[targetId]) {
                    initializers[targetId]();
                    panel.setAttribute('data-initialized', 'true');
                }
                if (ctaAfterPanel2 && targetId === ctaAfterPanel2.panelId) {
                    injectCta();
                }
            }
        });
    });
}
