import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// Struttura della pagina (identica a idti-xodit-passato) —
// contenuti in sviluppo, riempiti panel per panel.
//
// PANEL 1 — DragDrop · public  · Spряжение ЕЗДИТЬ passato
// PANEL 2 — DragDrop · student · Spряжение ЕХАТЬ passato
// PANEL 3 — GapText  · public  · Testo con lacune + glossario + spiegazioni
// PANEL 4 — GapText  · student · Testo con lacune + glossario (no spiegazioni)
// PANEL 5 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 6 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 7 — Mixed Quiz · public · задания собираются из блоков 1-3
// ============================================================

// TODO: p1exercises (ЕЗДИТЬ D&D)
// TODO: p2exercises (ЕХАТЬ D&D)
// TODO: p3instruction / p3paragraphs / p3gaps
// TODO: p4instruction / p4paragraphs / p4gaps
// TODO: p5instruction / p5paragraphs / p5gaps
// TODO: p6instruction / p6paragraphs / p6gaps
// TODO: Panel 7 — costruita da p1exercises (MC) + p2exercises (match) + selezione write-in

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    // 'panel-past-ez-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ez-01', exercises: p1exercises }),
    // 'panel-past-ez-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ez-02', exercises: p2exercises }),
    // 'panel-past-ez-03': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-03', instruction: p3instruction, paragraphs: p3paragraphs, gaps: p3gaps, showHints: false }),
    // 'panel-past-ez-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    // 'panel-past-ez-05': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-05', instruction: p5instruction, paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    // 'panel-past-ez-06': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-06', instruction: p6instruction, paragraphs: p6paragraphs, gaps: p6gaps, showHints: false }),
    // 'panel-past-ez-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: false });
