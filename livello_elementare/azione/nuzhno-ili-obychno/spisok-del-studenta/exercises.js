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
// PANEL 2 — DragDrop · student
// Nuovo: il passato secondo genere e numero (он читал, она учила, мы писали, сессия проходила, экзамены проходили, ему было) — 6 frasi originali al passato + 4 frasi della pagina 1 portate al passato; sbagliate = stesso verbo in altro genere / numero; senza spiegazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Она всегда {{1}} новые слова к следующей лекции.",
        words: ["учил", "учили", "учила"],
        correctAnswers: { 1: "учила" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы {{1}} доклад к экзамену.",
        words: ["писали", "писал", "писала"],
        correctAnswers: { 1: "писали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он всегда {{1}} статьи к экзамену.",
        words: ["читала", "читал", "читали"],
        correctAnswers: { 1: "читал" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы редко {{1}} к экзамену за месяц!",
        words: ["готовился", "готовились", "готовилась"],
        correctAnswers: { 1: "готовились" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Лекции по истории экологии Тимур практически не {{1}}.",
        words: ["посещал", "посещала", "посещали"],
        correctAnswers: { 1: "посещал" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Лена говорит: «Обычно я {{1}} конспект лекций у Ольги».",
        words: ["брал", "брали", "брала"],
        correctAnswers: { 1: "брала" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сессия {{1}} два раза в год.",
        words: ["проходил", "проходила", "проходили"],
        correctAnswers: { 1: "проходила" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Экзамены {{1}} в аудитории 23 на втором этаже.",
        words: ["проходила", "проходило", "проходили"],
        correctAnswers: { 1: "проходили" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно в зимнюю сессию мы {{1}} экзамены до середины февраля.",
        words: ["сдавали", "сдавал", "сдавала"],
        correctAnswers: { 1: "сдавали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Тимуру {{1}} очень сложно писать доклады.",
        words: ["было", "был", "была"],
        correctAnswers: { 1: "было" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Quando? Ogni quanto? al passato: всегда / редко / часто / два раза в год / один раз в месяц ↔ на прошлой неделе / к понедельнику / … лет назад — 4 frasi originali al passato + 6 della pagina 1 portate al passato; «на прошлой неделе» sbagliato solo dove è davvero sbagliato (con обычно o in frasi impossibili); senza spiegazioni
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "— Я уже два сдала. — Когда? — {{1}}.",
        words: ["Два раза в год", "На прошлой неделе", "К каждому занятию"],
        correctAnswers: { 1: "На прошлой неделе" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сессия проходила {{1}}.",
        words: ["два раза в год", "к пятнице", "к каждому занятию"],
        correctAnswers: { 1: "два раза в год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы готовили доклад {{1}}.",
        words: ["один раз в месяц", "на прошлой неделе", "один раз в месяце"],
        correctAnswers: { 1: "один раз в месяц" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно было выучить спряжения глаголов {{1}}.",
        words: ["к понедельника", "на понедельнике", "к понедельнику"],
        correctAnswers: { 1: "к понедельнику" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} готовились к экзамену за месяц!",
        words: ["на прошлой неделе", "редко", "редкий"],
        correctAnswers: { 1: "редко" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно в зимнюю сессию мы сдавали экзамены {{1}}.",
        words: ["к каждому семинару", "до середина февраля", "до середины февраля"],
        correctAnswers: { 1: "до середины февраля" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я готовилась к сессии {{1}}.",
        words: ["около месяца", "около месяц", "к пятнице"],
        correctAnswers: { 1: "около месяца" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Ты {{1}} брал конспекты лекций?",
        words: ["частый", "часто", "к пятнице"],
        correctAnswers: { 1: "часто" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы заканчивали сдавать сессию {{1}}.",
        words: ["к Новому году", "к Новый год", "на прошлой неделе"],
        correctAnswers: { 1: "к Новому году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сколько лет {{1}} ты закончил университет?",
        words: ["через", "после", "назад"],
        correctAnswers: { 1: "назад" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Aspetto al passato, 5 coppie dalla lista originale: обычно / всегда / редко + passato imperfettivo (sbagliate: passato perfettivo, infinito perfettivo) ↔ нужно было + infinito perfettivo (sbagliate: passato imperfettivo, passato perfettivo — mai l'infinito imperfettivo); con spiegazioni
// ============================================================
const p4cards = [
    { front: "Обычно мы ___ доклад к экзамену.", back: "писали", distractors: ["написали", "написать"], explanation: "Обычно = abitudine al passato: imperfettivo (мы писали)." },
    { front: "Нам нужно было ___ доклад к экзамену.", back: "написать", distractors: ["писали", "написали"], explanation: "Нужно было + infinito perfettivo: una cosa da finire. Dopo «нужно было» mai il passato." },
    { front: "Она всегда ___ новые слова к следующей лекции.", back: "учила", distractors: ["выучила", "выучить"], explanation: "Всегда = ogni volta: imperfettivo al passato (она учила)." },
    { front: "Ей нужно было ___ новые слова к следующей лекции.", back: "выучить", distractors: ["учила", "выучила"], explanation: "A lei serviva un risultato: ей нужно было + infinito perfettivo (выучить)." },
    { front: "Мы редко ___ к экзамену за месяц!", back: "готовились", distractors: ["подготовились", "подготовиться"], explanation: "Редко = poche volte: anche così è un'abitudine → imperfettivo (мы готовились)." },
    { front: "Нам нужно было ___ к последнему экзамену.", back: "подготовиться", distractors: ["готовились", "подготовились"], explanation: "Un esame preciso, un risultato: нужно было + infinito perfettivo (подготовиться)." },
    { front: "Он всегда ___ статьи к экзамену.", back: "читал", distractors: ["прочитал", "прочитать"], explanation: "Всегда = abitudine: imperfettivo al passato (он читал)." },
    { front: "Ему нужно было ___ статьи к экзамену.", back: "прочитать", distractors: ["читал", "прочитал"], explanation: "A lui serviva leggerli tutti: ему нужно было + infinito perfettivo (прочитать)." },
    { front: "Лена: «Обычно я ___ конспект лекций у Ольги».", back: "брала", distractors: ["взяла", "взять"], explanation: "Обычно = abitudine: imperfettivo al passato. Parla Lena → я брала (femminile)." },
    { front: "Мне нужно было ___ конспект лекций у Ольги.", back: "взять", distractors: ["брала", "взяла"], explanation: "Una volta, un risultato: мне нужно было + infinito perfettivo (взять)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Tre forme al passato: infinito perfettivo / passato imperfettivo / passato perfettivo (написать / писали / написали). 10 frasi originali della pagina 1 e del testo su Тимур portate al passato, diverse da quelle del pannello 4; senza spiegazioni
// ============================================================
const p5cards = [
    { front: "Обычно мы ___ десять–двадцать новых слов к каждому занятию.", back: "учили", distractors: ["выучить", "выучили"] },
    { front: "Нам нужно было ___ спряжения глаголов к понедельнику.", back: "выучить", distractors: ["учили", "выучили"] },
    { front: "Обычно в зимнюю сессию мы ___ экзамены до середины февраля.", back: "сдавали", distractors: ["сдать", "сдали"] },
    { front: "В прошлую сессию нам нужно было ___ пять экзаменов.", back: "сдать", distractors: ["сдавали", "сдали"] },
    { front: "Обычно мы ___ доклад один раз в месяц.", back: "готовили", distractors: ["подготовить", "подготовили"] },
    { front: "Доклад о социальных сетях нужно было ___ к пятнице.", back: "подготовить", distractors: ["готовили", "подготовили"] },
    { front: "К каждому семинару мы ___ доклад или читали статьи.", back: "писали", distractors: ["написать", "написали"] },
    { front: "Студентам нужно было ___ задание к следующему занятию.", back: "выполнить", distractors: ["выполняли", "выполнили"] },
    { front: "Студенты редко ___ задания к занятиям!", back: "выполняли", distractors: ["выполнить", "выполнили"] },
    { front: "Тимуру нужно было ___ два доклада к экзамену.", back: "написать", distractors: ["писал", "написал"] }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-sds-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-sds-01', exercises: p1exercises }),
    'panel-sds-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-sds-02', exercises: p2exercises }),
    'panel-sds-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-sds-03', exercises: p3exercises }),
    'panel-sds-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-sds-04', cards: p4cards }),
    'panel-sds-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-sds-05', cards: p5cards })
};

initPanelManager({ initializers, enableAccessControl: true });
