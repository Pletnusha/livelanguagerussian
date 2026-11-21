import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Подойти или отойти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// avvicinarsi ↔ allontanarsi — под- + к + dat. ↔ от- + от + gen. (anche отойти в сторону), coppie подходить / подойти ↔ отходить / отойти.
// Trappole: подошёл к Анне (vicino a lei) ≠ пришёл к Анне (a casa sua); под- vuole «к», non «под»; подойти к телефону = rispondere;
// поезд подходит (arriva al binario) ↔ отходит (parte); подойти ≠ войти («подошли к кабинету, но входить не стали»).
// Gramota.ru (БТС): подойти к начальнику, к телефону; подошёл поезд; отойти от прилавка, в сторону; отойти = отлучиться; поезд должен отойти.
// Esclusi i sensi figurati: подойдёт тебе, отойти от дел, отошёл (si è ripreso), отойти ко сну. «Отойти» mai come distrattore di «выйти на минутку».
// Pochi originali (11): 4 pannelli + quiz, approvato dalla PM. Frasi nuove solo con il permesso della PM. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2 D&D · 3 FC misto (pagine 1–2) · 4 FC (forme + aspetto, con spiegazioni) · Quiz (panel-po-9)

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: подойти / отойти (nuovo, 7) + к + dat., от + gen., в сторону (vecchio, 3), con spiegazioni; frasi 7–10 nuove approvate dalla PM
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} к зданию банка.",
        words: ["отошли", "подошли", "подошлы"],
        correctAnswers: { 1: "подошли" },
        explanation: "Avvicinarsi a = подойти к + dativo. Passato: подошли."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы подошли {{1}}, она выглядела очень расстроенной.",
        words: ["к Анне", "от Анны", "к Анну"],
        correctAnswers: { 1: "к Анне" },
        explanation: "Verso una persona: к + dativo (Анна → к Анне)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Анна {{1}} ко мне и заговорила первой.",
        words: ["отошла", "подашла", "подошла"],
        correctAnswers: { 1: "подошла" },
        explanation: "Подошла ко мне = si è avvicinata a me. Si scrive con «о»: подошла."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вы {{1}} от машины?",
        words: ["отошли", "подошли", "отошлы"],
        correctAnswers: { 1: "отошли" },
        explanation: "Allontanarsi da = отойти от + genitivo: il prefisso ripete la preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты уже отошла далеко {{1}}?",
        words: ["к дому", "от дом", "от дома"],
        correctAnswers: { 1: "от дома" },
        explanation: "От + genitivo: дом → от дома."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} от меня!",
        words: ["Подойди", "Отойди", "Отойды"],
        correctAnswers: { 1: "Отойди" },
        explanation: "Imperativo di отойти: отойди (allontanati!)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда звонит телефон, бабушка всегда первая {{1}} к нему.",
        words: ["отходит", "подходит", "подходет"],
        correctAnswers: { 1: "подходит" },
        explanation: "Rispondere al telefono = подойти к телефону. Всегда → НСВ: подходит."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Подожди, я сейчас {{1}} к тебе и всё объясню.",
        words: ["подойду", "отойду", "подойдю"],
        correctAnswers: { 1: "подойду" },
        explanation: "Futuro di подойти: подойду (non «подойдю»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Отойдите, пожалуйста, {{1}}: здесь проезжают машины.",
        words: ["на сторону", "в стороне", "в сторону"],
        correctAnswers: { 1: "в сторону" },
        explanation: "Spostarsi di lato = отойти в сторону (в + accusativo). «В стороне» = stato in luogo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поезд {{1}} от платформы ровно в восемь.",
        words: ["отходит", "подходит", "отходет"],
        correctAnswers: { 1: "отходит" },
        explanation: "Il treno parte = поезд отходит (от + genitivo). Подходит = arriva al binario."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// В банке: testo della PM «В банке» (7) + frasi nuove approvate (3: подхожу, отошла от автомата — versione PM, подходят); ripasso войти (n. 1, 7)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Как только дверь открылась, вся шумная группа {{1}} в банк и начала нажимать на кнопки автомата электронной очереди.",
        words: ["подошла", "вашла", "вошла"],
        correctAnswers: { 1: "вошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "К ним на помощь уже {{1}} администратор.",
        words: ["отошла", "подошла", "подашла"],
        correctAnswers: { 1: "подошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я дождалась, когда все получат свои номера, и {{1}} к автомату.",
        words: ["подошла", "отошла", "подошёл"],
        correctAnswers: { 1: "подошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Только тогда я поняла, зачем был нужен администратор: она {{1}} и вежливо спросила: «Доброе утро, чем я могу вам помочь?»",
        words: ["отошла", "подошла", "падашла"],
        correctAnswers: { 1: "подошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Противный голос объявлял номер и окно, к которому нужно было {{1}}.",
        words: ["подойти", "отойти", "подойтить"],
        correctAnswers: { 1: "подойти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Бабушки шумно обсуждали новости, пока не {{1}} к автомату.",
        words: ["отошли", "подошлы", "подошли"],
        correctAnswers: { 1: "подошли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Перед дверью стояла очередь — я подошла, подождала и {{1}} в банк.",
        words: ["подошла", "войшла", "вошла"],
        correctAnswers: { 1: "вошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "В банке я всегда сначала {{1}} к администратору, а потом беру талон.",
        words: ["подхожу", "отхожу", "подхажу"],
        correctAnswers: { 1: "подхожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я купила билет и сразу {{1}} от автомата.",
        words: ["подошла", "отошла", "атошла"],
        correctAnswers: { 1: "отошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Посетители {{1}} к окну, только когда слышат свой номер.",
        words: ["подходят", "отходят", "подходют"],
        correctAnswers: { 1: "подходят" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-po-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-po-01', exercises: p1exercises }),
    'panel-po-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-po-02', exercises: p2exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
