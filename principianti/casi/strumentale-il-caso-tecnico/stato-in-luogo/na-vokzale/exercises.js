import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — GapText · student
// TODO: testo in attesa di materiale da PM
// ============================================================
const p1paragraphs = [];
const p1gaps = {};

// ============================================================
// PANEL 2 — GapText · paid
// TODO: testo in attesa di materiale da PM
// ============================================================
const p2paragraphs = [];
const p2gaps = {};

// ============================================================
// PANEL 3 — GapText · student
// TODO: testo in attesa di materiale da PM
// ============================================================
const p3paragraphs = [];
const p3gaps = {};

// ============================================================
// PANEL 4 — GapText · paid
// TODO: testo in attesa di materiale da PM
// ============================================================
const p4paragraphs = [];
const p4gaps = {};

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-nvo-1': () => new GapTextExercise({ rootId: 'ex-gaptext-nvo-1', paragraphs: p1paragraphs, gaps: p1gaps, showHints: true }),
    'panel-nvo-2': () => new GapTextExercise({ rootId: 'ex-gaptext-nvo-2', paragraphs: p2paragraphs, gaps: p2gaps, showHints: true }),
    'panel-nvo-3': () => new GapTextExercise({ rootId: 'ex-gaptext-nvo-3', paragraphs: p3paragraphs, gaps: p3gaps, showHints: true }),
    'panel-nvo-4': () => new GapTextExercise({ rootId: 'ex-gaptext-nvo-4', paragraphs: p4paragraphs, gaps: p4gaps, showHints: true })
};

initPanelManager({ initializers, enableAccessControl: true });
