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
    'panel-nvo-1': () => new QuizExercise({ panelId: 'panel-nvo-1', listId: 'quiz-nvo-1-list', questions: p1questions }),
    'panel-nvo-2': () => new QuizExercise({ panelId: 'panel-nvo-2', listId: 'quiz-nvo-2-list', questions: p2questions }),
    'panel-nvo-3': () => new QuizExercise({ panelId: 'panel-nvo-3', listId: 'quiz-nvo-3-list', questions: p3questions }),
    'panel-nvo-4': () => new QuizExercise({ panelId: 'panel-nvo-4', listId: 'quiz-nvo-4-list', questions: p4questions })
};

initPanelManager({ initializers, enableAccessControl: true });
