import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Список дел студента: нужно было или обычно» — seconda pagina del blocco «Нужно или обычно» (piano approvato dalla PM 19.11.2026).
// Al passato: (кому) нужно было + infinito perfettivo (una cosa da fare) ↔ обычно / всегда / редко / часто + passato imperfettivo (abitudine).
// Nuova difficoltà: genere e numero al passato (он читал, она учила, мы писали, я — Лена — брала); «нужно было», mai «нужна была / нужен был».
// Fonti: PDF «список дел студента», «учиться прошедшее» (solo domande senza учиться / заниматься), testo su Тимур; frasi della pagina 1 portate al passato (permesso PM).
// Mai l'infinito imperfettivo come sbagliata dopo «нужно было» (rimprovero: «Нужно было готовиться заранее!» è corretto). Perfettivo al passato solo come sbagliata.
// Errore nell'originale: «Обычно я беру конспект…» nella lista al passato → брал / брала.
// Schema: 1 D&D lista (+ vecchio, con spiegazioni) · 2 D&D он / она / мы · 3 D&D quando / ogni quanto
//         4 FC нужно было o обычно (con spiegazioni) · 5 FC tre forme · 6 FC allora e adesso (misto) · 7 FC domande → risposte (con spiegazioni) · 8 FC Тимур (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Lessico al passato (PDF «список дел студента»): нужно было + quale verbo — 5 cose della lista + 2 frasi della pagina 1 portate al passato; 3 vecchie dalla pagina «В университете» (presente); con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно было {{1}} доклад к экзамену.",
        words: ["написать", "выполнить", "подготовиться"],
        correctAnswers: { 1: "написать" },
        explanation: "Scrivere una relazione: написать доклад. Al passato: нужно было (sempre «было»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно было {{1}} новые слова к следующей лекции.",
        words: ["взять", "подготовиться", "выучить"],
        correctAnswers: { 1: "выучить" },
        explanation: "Imparare a memoria: выучить слова."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно было {{1}} к экзамену.",
        words: ["подготовить", "подготовиться", "сдать"],
        correctAnswers: { 1: "подготовиться" },
        explanation: "Prepararsi a qualcosa: подготовиться к + dativo. Senza oggetto ci vuole -ся."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ему нужно было {{1}} статьи к экзамену.",
        words: ["выполнить", "прочитать", "подготовиться"],
        correctAnswers: { 1: "прочитать" },
        explanation: "Leggere fino alla fine: прочитать статьи. A lui serviva → ему нужно было."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно было {{1}} конспект лекций у Ольги.",
        words: ["взять", "выполнить", "подготовиться"],
        correctAnswers: { 1: "взять" },
        explanation: "Prendere in prestito gli appunti: взять конспект у кого-то."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно было {{1}} задание к семинару.",
        words: ["подготовиться", "выучить", "выполнить"],
        correctAnswers: { 1: "выполнить" },
        explanation: "Fare un compito: выполнить задание."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "В прошлую сессию нам нужно было {{1}} пять экзаменов.",
        words: ["выполнить", "прочитать", "сдать"],
        correctAnswers: { 1: "сдать" },
        explanation: "Dare (e superare) un esame: сдать экзамен. Пять → экзаменов (genitivo plurale)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы {{1}} десять–двадцать новых слов к каждому занятию.",
        words: ["учим", "выучить", "учить"],
        correctAnswers: { 1: "учим" },
        explanation: "Presente: обычно = abitudine → imperfettivo (учим)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно {{1}} спряжения глаголов к понедельнику.",
        words: ["учим", "выучить", "выучим"],
        correctAnswers: { 1: "выучить" },
        explanation: "Presente: нам нужно + infinito perfettivo (un risultato entro lunedì)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "К каждому семинару мы {{1}} доклад или читаем статьи.",
        words: ["пишем", "написать", "писать"],
        correctAnswers: { 1: "пишем" },
        explanation: "Presente: «к каждому семинару» = ogni volta → imperfettivo (пишем)."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-sds-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-sds-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
