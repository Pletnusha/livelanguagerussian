import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «В университете: нужно или обычно» — l'unica pagina del blocco (decisione PM 19.11.2026).
// Modello: scheda PDF «В университете нужно обычно — esercizi» (Desktop/LLR). Solo frasi originali dei PDF dell'università
// (iCloud Курсы: elemntare/А1 - А2, A_1_МОДУЛЬ_3/ОБЫЧНО ХОТЕТЬ НУЖНО), ripetute in formati diversi; niente frasi inventate.
// Prima il lessico (verbo + che cosa, parole, quando / ogni quanto / dove), poi l'aspetto: нужно + perfettivo ↔ обычно + imperfettivo.
// Errori di forma come nella scheda: «нам учим», «мы нужно» (dativo con нужно).
// Schema: 1 D&D lessico (+ vecchio: хочет / любит) · 2 D&D parole · 3 D&D quando / ogni quanto / dove
//         4 FC обычно o нужно (con spiegazioni) · 5 FC tre forme · 6 FC finisci la frase (misto) · 7 FC inizio e fine (con spiegazioni) · 8 FC sessione (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Lessico (scheda, es. 1 «Verbo + che cosa?»): quale verbo con quale oggetto — 8 frasi originali dei PDF dell'università + 2 vecchie (хочет / любит + aspetto, dalle pagine aspetto), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} к сессии.",
        words: ["выучить", "подготовить", "подготовиться"],
        correctAnswers: { 1: "подготовиться" },
        explanation: "Prepararsi a qualcosa: подготовиться к + dativo (к сессии)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "К пятнице нужно {{1}} доклад о социальных сетях в интернете.",
        words: ["подготовить", "подготовиться", "выполнить"],
        correctAnswers: { 1: "подготовить" },
        explanation: "Preparare qualcosa (una relazione): подготовить доклад, senza -ся."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно {{1}} спряжения глаголов к понедельнику.",
        words: ["выполнить", "выучить", "подготовиться"],
        correctAnswers: { 1: "выучить" },
        explanation: "Imparare a memoria: выучить слова, спряжения."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Андрей хочет {{1}} всю мировую классику.",
        words: ["прочитать", "читать", "прочитает"],
        correctAnswers: { 1: "прочитать" },
        explanation: "Dopo «хочет» + risultato (tutta la classica): perfettivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} задание к завтрашнему семинару.",
        words: ["выучить", "подготовиться", "выполнить"],
        correctAnswers: { 1: "выполнить" },
        explanation: "Fare un compito: выполнить задание."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты знаешь, что в эту сессию нам нужно {{1}} пять экзаменов?",
        words: ["выполнить", "сдать", "выучить"],
        correctAnswers: { 1: "сдать" },
        explanation: "Dare (e superare) un esame: сдать экзамен."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно написать доклад или просто {{1}} статьи?",
        words: ["подготовиться", "выполнить", "прочитать"],
        correctAnswers: { 1: "прочитать" },
        explanation: "Leggere fino alla fine: прочитать статьи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Женя любит {{1}} книги.",
        words: ["прочитать", "читать", "читает"],
        correctAnswers: { 1: "читать" },
        explanation: "Dopo «любит» si usa l'imperfettivo: un'attività che piace."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно подготовиться к последнему экзамену и {{1}} зимнюю сессию!",
        words: ["выучить", "закончить", "выполнить"],
        correctAnswers: { 1: "закончить" },
        explanation: "Finire qualcosa: закончить сессию."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я {{1}} конспект лекций у Ольги.",
        words: ["беру", "сдаю", "выполняю"],
        correctAnswers: { 1: "беру" },
        explanation: "Prendere (in prestito) gli appunti: брать конспект у кого-то. Обычно → imperfettivo: беру."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-vun-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-vun-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
