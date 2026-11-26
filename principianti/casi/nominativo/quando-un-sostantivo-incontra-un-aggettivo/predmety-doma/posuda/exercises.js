import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import QuizExercise from '/assets/js/engines/QuizExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — Flashcards · ПОСУДА
// белые керамические тарелки, маленькие красные кофейные чашки,
// большая белая керамическая ваза, стеклянная чайная чашка,
// белая керамическая салатница, новые вилки и ножи
// ============================================================
const p1cards = [
    { front: "piatti bianchi di ceramica", back: "белые керамические тарелки", frontImg: "/assets/img/principianti/vocaboli/predmety-doma/belye-tarelki.png" },
    { front: "piccole tazze rosse da caffè", back: "маленькие красные кофейные чашки", frontImg: "/assets/img/principianti/vocaboli/predmety-doma/krasnye-chashki.png" },
    { front: "un grande vaso bianco di ceramica", back: "большая белая керамическая ваза", frontImg: "/assets/img/principianti/vocaboli/predmety-doma/belaya-vaza.png" },
    { front: "una tazza da tè di vetro", back: "стеклянная чайная чашка", frontImg: "/assets/img/principianti/vocaboli/predmety-doma/steklyannaya-chashka.png" },
    { front: "un'insalatiera bianca di ceramica", back: "белая керамическая салатница", frontImg: "/assets/img/principianti/vocaboli/predmety-doma/salatnitsa.png" },
    { front: "forchette e coltelli nuovi", back: "новые вилки и ножи", frontImg: "/assets/img/principianti/vocaboli/predmety-doma/vilki-i-nozhi.png" }
];

// ============================================================
// PANEL 2 — DragDrop · Соедини прилагательное + существительное
// ============================================================
const p2exercises = [
    {
        instruction: "Соедини прилагательное с существительным.",
        text: "{{1}} тарелки, {{2}} чашки, {{3}} ваза",
        words: ["белые керамические", "маленькие красные кофейные", "большая белая керамическая", "новые стеклянные"],
        correctAnswers: { 1: "белые керамические", 2: "маленькие красные кофейные", 3: "большая белая керамическая" }
    },
    {
        instruction: "Соедини прилагательное с существительным.",
        text: "{{1}} чашка, {{2}} салатница, {{3}} вилки и ножи",
        words: ["стеклянная чайная", "белая керамическая", "новые", "маленькие красные"],
        correctAnswers: { 1: "стеклянная чайная", 2: "белая керамическая", 3: "новые" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · Выбери правильную форму
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильную форму прилагательного.",
        text: "{{1}} тарелки стоят на столе.",
        words: ["белые керамические", "белая керамическая", "белый керамический", "белое керамическое"],
        correctAnswers: { 1: "белые керамические" },
        explanation: "тарелки (мн.ч.) → белые керамические"
    },
    {
        instruction: "Выбери правильную форму прилагательного.",
        text: "На полке стоит {{1}} ваза.",
        words: ["большая белая керамическая", "большие белые керамические", "большой белый керамический", "большое белое керамическое"],
        correctAnswers: { 1: "большая белая керамическая" },
        explanation: "ваза (ж.р.) → большая белая керамическая"
    },
    {
        instruction: "Выбери правильную форму прилагательного.",
        text: "Это {{1}} чашка.",
        words: ["стеклянная чайная", "стеклянный чайный", "стеклянные чайные", "стеклянное чайное"],
        correctAnswers: { 1: "стеклянная чайная" },
        explanation: "чашка (ж.р.) → стеклянная чайная"
    },
    {
        instruction: "Выбери правильную форму прилагательного.",
        text: "В ящике лежат {{1}} вилки и ножи.",
        words: ["новые", "новая", "новый", "новое"],
        correctAnswers: { 1: "новые" },
        explanation: "вилки и ножи (мн.ч.) → новые"
    },
    {
        instruction: "Выбери правильную форму прилагательного.",
        text: "На столе стоят {{1}} чашки.",
        words: ["маленькие красные кофейные", "маленькая красная кофейная", "маленький красный кофейный", "маленькое красное кофейное"],
        correctAnswers: { 1: "маленькие красные кофейные" },
        explanation: "чашки (мн.ч.) → маленькие красные кофейные"
    },
    {
        instruction: "Выбери правильную форму прилагательного.",
        text: "Мне нравится эта {{1}} салатница.",
        words: ["белая керамическая", "белые керамические", "белый керамический", "белое керамическое"],
        correctAnswers: { 1: "белая керамическая" },
        explanation: "салатница (ж.р.) → белая керамическая"
    }
];

// ============================================================
// PANEL 4 — Scrivi · Напиши словосочетание
// ============================================================
const p4questions = [
    { id: "pos-01", promptPrefix: "piatti bianchi di ceramica = ", promptSuffix: "", answers: ["белые керамические тарелки"] },
    { id: "pos-02", promptPrefix: "piccole tazze rosse da caffè = ", promptSuffix: "", answers: ["маленькие красные кофейные чашки"] },
    { id: "pos-03", promptPrefix: "un grande vaso bianco di ceramica = ", promptSuffix: "", answers: ["большая белая керамическая ваза"] },
    { id: "pos-04", promptPrefix: "una tazza da tè di vetro = ", promptSuffix: "", answers: ["стеклянная чайная чашка"] },
    { id: "pos-05", promptPrefix: "un'insalatiera bianca di ceramica = ", promptSuffix: "", answers: ["белая керамическая салатница"] },
    { id: "pos-06", promptPrefix: "forchette e coltelli nuovi = ", promptSuffix: "", answers: ["новые вилки и ножи"] }
];

// ============================================================
// INIT
// ============================================================
const initializers = {
    'panel-pos-1': () => new FlashcardExercise({ rootId: 'ex-flashcards-pos-01', cards: p1cards }),
    'panel-pos-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pos-02', exercises: p2exercises }),
    'panel-pos-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-pos-03', exercises: p3exercises }),
    'panel-pos-4': () => new QuizExercise({ panelId: 'panel-pos-4', listId: 'quiz-pos-4-list', questions: p4questions }),
};

initPanelManager({ initializers, enableAccessControl: true });
