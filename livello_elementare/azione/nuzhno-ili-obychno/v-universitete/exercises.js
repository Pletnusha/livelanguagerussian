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
// PANEL 2 — DragDrop · student
// Lessico (scheda, es. 2 «Le parole dell'università»): il nome giusto nella forma giusta — 10 frasi originali dei PDF dell'università; sbagliate: stessa parola in un altro caso + parola sbagliata; senza spiegazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы учим десять–двадцать новых {{1}} к каждому занятию.",
        words: ["слова", "слов", "экзаменов"],
        correctAnswers: { 1: "слов" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} проходит два раза в год.",
        words: ["Доклад", "Сессию", "Сессия"],
        correctAnswers: { 1: "Сессия" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Экзамены проходят в {{1}} 23 на втором этаже.",
        words: ["сессии", "аудиторию", "аудитории"],
        correctAnswers: { 1: "аудитории" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Привет! Сколько {{1}} у нас в эту сессию? — Привет! Обычно мы сдаём три, но в эту сессию их пять!",
        words: ["экзаменов", "экзамены", "слов"],
        correctAnswers: { 1: "экзаменов" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "К каждому {{1}} мы пишем доклад или читаем статьи.",
        words: ["семинара", "семинару", "этажу"],
        correctAnswers: { 1: "семинару" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы готовим {{1}} один раз в месяц, но доклад о социальных сетях нужно подготовить к пятнице.",
        words: ["доклад", "сессию", "доклада"],
        correctAnswers: { 1: "доклад" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно выполнить {{1}} к завтрашнему семинару.",
        words: ["задание", "заданию", "экзамен"],
        correctAnswers: { 1: "задание" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Тебе нужно прочитать эту {{1}} к семинару.",
        words: ["сессию", "статья", "статью"],
        correctAnswers: { 1: "статью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я беру {{1}} лекций у Ольги.",
        words: ["экзамен", "конспект", "конспекта"],
        correctAnswers: { 1: "конспект" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Сколько глаголов? — Много {{1}}.",
        words: ["глаголы", "экзаменов", "глаголов"],
        correctAnswers: { 1: "глаголов" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Lessico (scheda, es. 3 «Quando? Ogni quanto? Dove?»): l'espressione di tempo / frequenza / luogo giusta — 10 frasi originali; senza «(как часто?)» tra parentesi (regola 7.1), sbagliate scelte in modo che non siano corrette anche loro; senza spiegazioni
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Сессия проходит {{1}}.",
        words: ["на прошлой неделе", "два раза в год", "к пятнице"],
        correctAnswers: { 1: "два раза в год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Я уже два сдала. — Когда? — {{1}}.",
        words: ["Два раза в год", "К каждому занятию", "На прошлой неделе"],
        correctAnswers: { 1: "На прошлой неделе" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно выучить спряжения глаголов {{1}}.",
        words: ["к понедельнику", "на прошлой неделе", "к понедельника"],
        correctAnswers: { 1: "к понедельнику" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Экзамены проходят {{1}} на втором этаже.",
        words: ["в аудитории 23", "на прошлой неделе", "к пятнице"],
        correctAnswers: { 1: "в аудитории 23" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы готовим доклад {{1}}, но доклад о социальных сетях нужно подготовить к пятнице.",
        words: ["на прошлой неделе", "один раз в месяце", "один раз в месяц"],
        correctAnswers: { 1: "один раз в месяц" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно в зимнюю сессию мы сдаём экзамены {{1}}.",
        words: ["к каждому семинару", "до середины февраля", "на прошлой неделе"],
        correctAnswers: { 1: "до середины февраля" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вам нужно подготовить доклад {{1}}.",
        words: ["на прошлой неделе", "к следующей среде", "к следующей среды"],
        correctAnswers: { 1: "к следующей среде" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я готовлюсь к сессии {{1}}.",
        words: ["около месяца", "к пятнице", "около месяц"],
        correctAnswers: { 1: "около месяца" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Нужно сдать экзамен {{1}}?",
        words: ["в четверга", "к каждому занятию", "в четверг"],
        correctAnswers: { 1: "в четверг" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы заканчиваем сдавать сессию {{1}}.",
        words: ["к Новый год", "на прошлой неделе", "к Новому году"],
        correctAnswers: { 1: "к Новому году" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Aspetto (scheda, es. 4 «Di solito o bisogna?»): 10 frasi originali. Обычно → imperfettivo al presente (sbagliate: infinito perfettivo, infinito imperfettivo). Нужно → infinito perfettivo (sbagliate: presente imperfettivo, presente perfettivo — come nella scheda, mai l'infinito imperfettivo, che a volte è corretto); con spiegazioni
// ============================================================
const p4cards = [
    { front: "Обычно мы ___ десять–двадцать новых слов к каждому занятию.", back: "учим", distractors: ["выучить", "учить"], explanation: "Обычно = abitudine: imperfettivo al presente (мы учим)." },
    { front: "Нам нужно ___ спряжения глаголов к понедельнику.", back: "выучить", distractors: ["учим", "выучим"], explanation: "Нам нужно + infinito perfettivo: un risultato entro lunedì." },
    { front: "Обычно в зимнюю сессию мы ___ экзамены до середины февраля.", back: "сдаём", distractors: ["сдать", "сдавать"], explanation: "Обычно = ogni anno: imperfettivo al presente (мы сдаём)." },
    { front: "Ты знаешь, что в эту сессию нам нужно ___ пять экзаменов?", back: "сдать", distractors: ["сдаём", "сдадим"], explanation: "Questa sessione, cinque esami da superare: нужно + infinito perfettivo (сдать)." },
    { front: "Обычно мы ___ доклад один раз в месяц.", back: "готовим", distractors: ["подготовить", "готовить"], explanation: "Обычно, один раз в месяц = abitudine: imperfettivo al presente (мы готовим)." },
    { front: "К пятнице нужно ___ доклад о социальных сетях в интернете.", back: "подготовить", distractors: ["готовим", "подготовим"], explanation: "Un risultato entro venerdì: нужно + infinito perfettivo (подготовить)." },
    { front: "К каждому семинару мы ___ доклад или читаем статьи.", back: "пишем", distractors: ["написать", "писать"], explanation: "«К каждому семинару» = ogni volta: imperfettivo al presente (мы пишем)." },
    { front: "Мы обычно ___ несколько статей к семинару.", back: "читаем", distractors: ["прочитать", "читать"], explanation: "Обычно = abitudine: imperfettivo al presente (мы читаем)." },
    { front: "Тебе нужно ___ эту статью к семинару.", back: "прочитать", distractors: ["читаешь", "прочитаешь"], explanation: "Questo articolo, entro il seminario: тебе нужно + infinito perfettivo (прочитать)." },
    { front: "Студентам нужно ___ задание к следующему занятию.", back: "выполнить", distractors: ["выполняют", "выполнят"], explanation: "Agli studenti serve finire il compito: студентам нужно + infinito perfettivo (выполнить)." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-vun-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-vun-01', exercises: p1exercises }),
    'panel-vun-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-vun-02', exercises: p2exercises }),
    'panel-vun-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-vun-03', exercises: p3exercises }),
    'panel-vun-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-vun-04', cards: p4cards })
};

initPanelManager({ initializers, enableAccessControl: true });
