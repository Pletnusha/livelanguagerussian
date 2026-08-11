import QuizExercise from '/assets/js/engines/QuizExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — Scrivi · student
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p1questions = [];

// ============================================================
// PANEL 2 — Scrivi · paid
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p2questions = [];

// ============================================================
// PANEL 3 — Scrivi · student
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p3questions = [];

// ============================================================
// PANEL 4 — Scrivi · paid
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p4questions = [];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-vae-1': () => new QuizExercise({ panelId: 'panel-vae-1', listId: 'quiz-vae-1-list', questions: p1questions }),
    'panel-vae-2': () => new QuizExercise({ panelId: 'panel-vae-2', listId: 'quiz-vae-2-list', questions: p2questions }),
    'panel-vae-3': () => new QuizExercise({ panelId: 'panel-vae-3', listId: 'quiz-vae-3-list', questions: p3questions }),
    'panel-vae-4': () => new QuizExercise({ panelId: 'panel-vae-4', listId: 'quiz-vae-4-list', questions: p4questions })
};

initPanelManager({ initializers, enableAccessControl: true });
