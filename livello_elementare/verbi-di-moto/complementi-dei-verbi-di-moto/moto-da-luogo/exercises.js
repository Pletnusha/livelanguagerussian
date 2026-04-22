import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// MOTO DA LUOGO — ИЗ/С + genitivo · ОТ + genitivo
// Panel prefix: mdl  (moto-da-luogo)
// ============================================================

// ============================================================
// PANEL 1 — public · Drag & Drop · Mix ИЗ / С / ОТ
// ============================================================
const p1exercises = [
    // TODO: fill exercises
    // { instruction: "Scegli la preposizione corretta", text: "Он вернулся {{1}} университета.", words: ["из", "с", "от"], correctAnswers: { 1: "из" } },
];

// ============================================================
// PANEL 5 — student · Drag & Drop · Solo ИЗ
// ============================================================
const p5exercises = [
    // TODO: fill exercises
];

// ============================================================
// PANEL 6 — paid · Drag & Drop · Solo С / ОТ
// ============================================================
const p6exercises = [
    // TODO: fill exercises
];

// ============================================================
// PANEL 2 — public · Flashcard · Mix ИЗ / С / ОТ
// ============================================================
const p2cards = [
    // TODO: fill cards
    // { front: "Он вернулся из", back: "университета" },
];

// ============================================================
// PANEL 3 — public · Flashcard
// ============================================================
const p3cards = [
    // TODO: fill cards
];

// ============================================================
// PANEL 7 — student · Flashcard · Solo ИЗ
// ============================================================
const p7cards = [
    // TODO: fill cards
];

// ============================================================
// PANEL 8 — paid · Flashcard · Solo С
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
function initPanel4Mdl() {
    const panel = document.getElementById('panel-mdl-04');
    if (!panel) return;
    // TODO: implement quiz
}

// ============================================================
// INIT
// ============================================================
initPanelManager({
    initializers: {
        'panel-mdl-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mdl-01',    exercises: p1exercises }),
        'panel-mdl-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mdl-05',    exercises: p5exercises }),
        'panel-mdl-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mdl-06',    exercises: p6exercises }),
        'panel-mdl-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-02', cards: p2cards }),
        'panel-mdl-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-03', cards: p3cards }),
        'panel-mdl-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-07', cards: p7cards }),
        'panel-mdl-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-08', cards: p8cards }),
        'panel-mdl-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-09', cards: p9cards }),
        'panel-mdl-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-10', cards: p10cards }),
        'panel-mdl-04':  () => initPanel4Mdl(),
    },
    enableAccessControl: true,
});
