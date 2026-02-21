const ACCESS_LEVELS = { public: 1, student: 2, paid: 3 };
const STORAGE_KEY = 'accessLevel';

function getUserLevel() {
    const params = new URLSearchParams(window.location.search);
    const accessParam = params.get('access');

    if (accessParam === 'reset') {
        localStorage.removeItem(STORAGE_KEY);
        return 'public';
    }

    if (accessParam && ACCESS_LEVELS.hasOwnProperty(accessParam)) {
        localStorage.setItem(STORAGE_KEY, accessParam);
        return accessParam;
    }

    return localStorage.getItem(STORAGE_KEY) || 'public';
}

function applyAccessControl(userLevel) {
    const userLevelNum = ACCESS_LEVELS[userLevel] || 1;
    const panels = document.querySelectorAll('.exercise-panel[data-access]');

    panels.forEach(panel => {
        const panelAccess = panel.getAttribute('data-access') || 'public';
        const panelLevelNum = ACCESS_LEVELS[panelAccess] || 1;

        if (userLevelNum >= panelLevelNum) {
            panel.setAttribute('data-state', 'open');
        } else {
            panel.setAttribute('data-state', 'blocked');
        }
    });

    const cards = document.querySelectorAll('.exercise-card[data-target]');
    cards.forEach(card => {
        const targetId = card.getAttribute('data-target');
        const panel = document.getElementById(targetId);
        if (panel && panel.getAttribute('data-state') === 'blocked') {
            card.setAttribute('data-card-state', 'blocked');
        } else {
            card.removeAttribute('data-card-state');
        }
    });
}

export function initPanelManager({ initializers = {}, enableAccessControl = false } = {}) {
    if (enableAccessControl) {
        const userLevel = getUserLevel();
        applyAccessControl(userLevel);
    }

    const cards = document.querySelectorAll('.exercise-card[data-status]');

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;

            const targetId = card.getAttribute('data-target');
            const panel = document.getElementById(targetId);
            if (!panel) return;

            if (panel.getAttribute('data-state') === 'blocked') return;

            const isCurrentlyOpen = !panel.hidden;

            // Close all other panels
            document.querySelectorAll('.exercise-panel').forEach(p => {
                if (p !== panel) {
                    p.hidden = true;
                    const otherCard = document.querySelector(`[data-target="${p.id}"]`);
                    if (otherCard) otherCard.setAttribute('data-status', 'closed');
                }
            });

            // Toggle current panel
            if (isCurrentlyOpen) {
                panel.hidden = true;
                card.setAttribute('data-status', 'closed');
            } else {
                panel.hidden = false;
                card.setAttribute('data-status', 'open');

                if (!panel.hasAttribute('data-initialized') && initializers[targetId]) {
                    initializers[targetId]();
                    panel.setAttribute('data-initialized', 'true');
                }
            }
        });
    });
}
