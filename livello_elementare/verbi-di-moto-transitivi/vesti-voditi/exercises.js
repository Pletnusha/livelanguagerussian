import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix вести + водить
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Профессор {{1}} лекции по истории экономики.",
        words: ["водит", "ведёт", "водят"],         // correct: позиция 1
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты часто {{1}} дочь на занятия после школы?",
        words: ["водишь", "ведёшь", "ведёт"],       // correct: позиция 0
        correctAnswers: { 1: "водишь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Кто {{1}} расследование этого убийства?",
        words: ["ведём", "водишь", "ведёт"],        // correct: позиция 2
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Она уже год не {{1}} машину.",
        words: ["ведёт", "водит", "водишь"],        // correct: позиция 1
        correctAnswers: { 1: "водит" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Нашу программу {{1}} доктор медицинских наук.",
        words: ["водишь", "водит", "ведёт"],        // correct: позиция 2
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я {{1}} дочь на хор по понедельникам.",
        words: ["вожу", "веду", "водит"],           // correct: позиция 0
        correctAnswers: { 1: "вожу" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Счёт в матче {{1}} команда Динамо.",
        words: ["ведём", "ведёт", "водите"],        // correct: позиция 1
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Зачем ты {{1}} его за нос?",
        words: ["ведёшь", "веду", "водишь"],        // correct: позиция 2
        correctAnswers: { 1: "водишь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Дочь начала {{1}} дневник.",
        words: ["водить", "вести", "водит"],        // correct: позиция 1
        correctAnswers: { 1: "вести" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Девушка {{1}} кота на поводке.",
        words: ["ведут", "водит", "ведёт"],         // correct: позиция 2
        correctAnswers: { 1: "ведёт" }
    },
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-vv-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-vv-01', exercises: p1exercises }),
};

initPanelManager({ initializers, enableAccessControl: false });
