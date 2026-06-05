import WriteDialogueExercise from '/assets/js/engines/WriteDialogueExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ── Panel 1 — public ────────────────────────────────────────────────────────
const p1exercises = [
    // TODO: add dialogue exercises (бежал/бегал)
];

// ── Panel 2 — public ────────────────────────────────────────────────────────
const p2exercises = [
    // TODO
];

// ── Panel 3 — public ────────────────────────────────────────────────────────
const p3exercises = [
    // TODO
];

// ── Panel 4 — student ───────────────────────────────────────────────────────
const p4exercises = [
    // TODO
];

// ── Panel 5 — paid ──────────────────────────────────────────────────────────
const p5exercises = [
    // TODO
];

// ── Panel 6 — paid ──────────────────────────────────────────────────────────
const p6exercises = [
    // TODO
];

// ── Panel 7 — paid ──────────────────────────────────────────────────────────
const p7exercises = [
    // TODO
];

initPanelManager([
    { rootId: 'ex-write-past-cor-01', Engine: WriteDialogueExercise, exercises: p1exercises },
    { rootId: 'ex-write-past-cor-02', Engine: WriteDialogueExercise, exercises: p2exercises },
    { rootId: 'ex-write-past-cor-03', Engine: WriteDialogueExercise, exercises: p3exercises },
    { rootId: 'ex-write-past-cor-04', Engine: WriteDialogueExercise, exercises: p4exercises },
    { rootId: 'ex-write-past-cor-05', Engine: WriteDialogueExercise, exercises: p5exercises },
    { rootId: 'ex-write-past-cor-06', Engine: WriteDialogueExercise, exercises: p6exercises },
    { rootId: 'ex-write-past-cor-07', Engine: WriteDialogueExercise, exercises: p7exercises },
]);
