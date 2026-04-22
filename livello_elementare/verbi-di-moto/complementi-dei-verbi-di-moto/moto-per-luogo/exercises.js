import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// MOTO PER LUOGO — ЧЕРЕЗ + accusativo · ПО + dativo
// Panel prefix: mpl  (moto-per-luogo)
// ============================================================

// ============================================================
// PANEL 1 — public · Drag & Drop · Mix ЧЕРЕЗ / ПО
// ============================================================
const p1exercises = [
    // TODO: fill exercises
    // { instruction: "Scegli la preposizione corretta", text: "Мы шли {{1}} лесу.", words: ["по", "через", "в"], correctAnswers: { 1: "по" } },
];

// ============================================================
// PANEL 5 — student · Drag & Drop · Solo ЧЕРЕЗ
// ============================================================
const p5exercises = [
    // TODO: fill exercises
];

// ============================================================
// PANEL 6 — paid · Drag & Drop · Solo ПО
// ============================================================
const p6exercises = [
    // TODO: fill exercises
];

// ============================================================
// PANEL 2 — public · Flashcard · Mix ЧЕРЕЗ / ПО
// ============================================================
const p2cards = [
    // TODO: fill cards
    // { front: "Мы шли по", back: "лесу" },
];

// ============================================================
// PANEL 3 — public · Flashcard
// ============================================================
const p3cards = [
    // TODO: fill cards
];

// ============================================================
// PANEL 7 — student · Flashcard · Solo ЧЕРЕЗ
// ============================================================
const p7cards = [
    // TODO: fill cards
];

// ============================================================
// PANEL 8 — paid · Flashcard · Solo ПО
// ============================================================
const p8cards = [
    // TODO: fill cards
];

// ============================================================
// PANEL 9 — student · Flashcard
// ============================================================
const p9cards = [
    // TODO: fill cards
];

// ============================================================
// PANEL 10 — paid · Flashcard
// ============================================================
const p10cards = [
    // TODO: fill cards
];

// ============================================================
// PANEL 4 — public · Mixed Quiz (MC + Match + Write)
// ============================================================
function initPanel4Mpl() {
    const panel = document.getElementById('panel-mpl-04');
    if (!panel) return;
    // TODO: implement quiz
}

// ============================================================
// INIT
// ============================================================
initPanelManager({
    initializers: {
        'panel-mpl-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mpl-01',    exercises: p1exercises }),
        'panel-mpl-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mpl-05',    exercises: p5exercises }),
        'panel-mpl-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mpl-06',    exercises: p6exercises }),
        'panel-mpl-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-02', cards: p2cards }),
        'panel-mpl-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-03', cards: p3cards }),
        'panel-mpl-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-07', cards: p7cards }),
        'panel-mpl-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-08', cards: p8cards }),
        'panel-mpl-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-09', cards: p9cards }),
        'panel-mpl-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-10', cards: p10cards }),
        'panel-mpl-04':  () => initPanel4Mpl(),
    },
    enableAccessControl: true,
});
