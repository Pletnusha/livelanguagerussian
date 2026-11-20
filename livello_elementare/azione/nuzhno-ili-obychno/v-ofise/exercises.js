import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «В офисе: нужно или обычно» — terza pagina del blocco «Нужно или обычно» (piano approvato dalla PM 20.11.2026).
// Modello: scheda PDF «В офисе — нужно обычно — esercizi» (Desktop/LLR). Solo frasi originali: «нужно обычно в офисе» (Всё успеть),
// «в офисе — срочно нужно» (dialoghi), «чем ты занимаешься на работе», MICRO «в офисе»; vecchio materiale = pagina «В университете».
// Coppie nuove: начинать / начать, встречаться / встретиться (с + strumentale), назначать / назначить встречу (кому? dativo).
// Dopo «нужно» mai l'infinito imperfettivo come sbagliata («нужно начинать подготовку» è corretto): sbagliate = forme coniugate.
// Niente domande tra parentesi (regola 7.1). Niente «как обычно встретишься…» (futuro perfettivo ironico).
// Errore nell'originale: «Я обычно заканчивают» → заканчиваю.
// Schema: 1 D&D verbo + che cosa (+ vecchio, con spiegazioni) · 2 D&D parole · 3 D&D quando / ogni quanto
//         4 FC обычно o нужно (con spiegazioni) · 5 FC tre forme · 6 FC finisci la frase (misto) · 7 FC inizio e fine (con spiegazioni) · 8 FC chi fa che cosa (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Lessico (scheda, es. 1 «Verbo + che cosa?»): quale verbo con quale oggetto — 7 frasi originali di «нужно обычно в офисе» + «Мне нужно позвонить коллеге после обеда» («чем ты занимаешься на работе») + 2 vecchie dalla pagina «В университете»; con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} отчёт к понедельнику.",
        words: ["подготовить", "назначить", "встретиться"],
        correctAnswers: { 1: "подготовить" },
        explanation: "Preparare un rapporto: подготовить отчёт."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам сегодня нужно {{1}} договоры.",
        words: ["начать", "назначить", "составить"],
        correctAnswers: { 1: "составить" },
        explanation: "Redigere un contratto: составить договор, i contratti → договоры."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} эти документы.",
        words: ["назначить", "проверить", "встретиться"],
        correctAnswers: { 1: "проверить" },
        explanation: "Controllare: проверить документы."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Коллеге нужно {{1}} встречу заказчику.",
        words: ["составить", "закончить", "назначить"],
        correctAnswers: { 1: "назначить" },
        explanation: "Fissare un appuntamento: назначить встречу; a chi? dativo — заказчику."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно {{1}} отчёт до обеда.",
        words: ["закончить", "назначить", "встретиться"],
        correctAnswers: { 1: "закончить" },
        explanation: "Finire: закончить отчёт."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} подготовку к презентации.",
        words: ["начать", "назначить", "составить"],
        correctAnswers: { 1: "начать" },
        explanation: "Cominciare qualcosa: начать подготовку."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вам нужно {{1}} с заказчиком в понедельник.",
        words: ["назначить", "встретиться", "составить"],
        correctAnswers: { 1: "встретиться" },
        explanation: "Incontrarsi con qualcuno: встретиться с + strumentale (с заказчиком)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно {{1}} коллеге после обеда.",
        words: ["проверить", "назначить", "позвонить"],
        correctAnswers: { 1: "позвонить" },
        explanation: "Telefonare a qualcuno: позвонить + dativo (коллеге)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} задание к завтрашнему семинару.",
        words: ["выучить", "выполнить", "подготовиться"],
        correctAnswers: { 1: "выполнить" },
        explanation: "Dalla pagina «В университете»: fare un compito — выполнить задание."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты знаешь, что в эту сессию нам нужно {{1}} пять экзаменов?",
        words: ["сдать", "выполнить", "выучить"],
        correctAnswers: { 1: "сдать" },
        explanation: "Dalla pagina «В университете»: dare (e superare) un esame — сдать экзамен."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Lessico (scheda, es. 2 «Le parole dell'ufficio» + es. 8): il nome giusto nella forma giusta — 10 frasi originali; sbagliate = stessa parola in un altro caso + parola che non può stare lì (mai una che sia anche corretta); senza spiegazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно подготовить {{1}} к понедельнику.",
        words: ["отчёта", "отчёт", "отчётом"],
        correctAnswers: { 1: "отчёт" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы редко составляем {{1}}.",
        words: ["договоры", "договоров", "встречи"],
        correctAnswers: { 1: "договоры" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы всегда проверяем {{1}} заранее.",
        words: ["обеда", "документов", "документы"],
        correctAnswers: { 1: "документы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно директор назначает {{1}} в первой половине дня.",
        words: ["встреч", "договоры", "встречи"],
        correctAnswers: { 1: "встречи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы редко начинаем {{1}} к презентации перед выходными.",
        words: ["подготовка", "подготовку", "заказчика"],
        correctAnswers: { 1: "подготовку" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вам нужно встретиться с {{1}} в понедельник.",
        words: ["заказчиком", "заказчик", "отчётом"],
        correctAnswers: { 1: "заказчиком" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Им нужно прочитать отчёт до {{1}}.",
        words: ["обеда", "обед", "обедом"],
        correctAnswers: { 1: "обеда" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Тебе нужно проверить эти договоры. — Я не успею, у меня три {{1}} сегодня.",
        words: ["встреча", "встреч", "встречи"],
        correctAnswers: { 1: "встречи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Директор редко встречается с {{1}}.",
        words: ["клиенты", "клиентами", "договорами"],
        correctAnswers: { 1: "клиентами" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Коллеге нужно назначить встречу {{1}}.",
        words: ["заказчик", "отчёту", "заказчику"],
        correctAnswers: { 1: "заказчику" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-vof-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-vof-01', exercises: p1exercises }),
    'panel-vof-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-vof-02', exercises: p2exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
