import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Подойти или отойти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// avvicinarsi ↔ allontanarsi — под- + к + dat. ↔ от- + от + gen. (anche отойти в сторону), coppie подходить / подойти ↔ отходить / отойти.
// Trappole: подошёл к Анне (vicino a lei) ≠ пришёл к Анне (a casa sua); под- vuole «к», non «под»; подойти к телефону = rispondere;
// подойти ≠ войти («подошли к кабинету, но входить не стали»); «Я уже подхожу!» = sto arrivando (НСВ, in corso).
// Niente treni: per la PM il lessico giusto è поезд отправляется / прибывает, non подходит / отходит. Frasi nuove: lessico città / incontro (PM).
// Gramota.ru (БТС): подойти к начальнику, к телефону; отойти от прилавка, в сторону; отойти = отлучиться.
// Esclusi i sensi figurati: подойдёт тебе, отойти от дел, отошёл (si è ripreso), отойти ко сну. «Отойти» mai come distrattore di «выйти на минутку».
// Pochi originali (11): 4 pannelli + quiz, approvato dalla PM. Frasi nuove solo con il permesso della PM. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2 D&D · 3 FC misto (pagine 1–2) · 4 FC (forme + aspetto, con spiegazioni) · Quiz (panel-po-9)

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: подойти / отойти (nuovo, 7) + к + dat., от + gen., в сторону (vecchio, 3), con spiegazioni; frasi 7–10 nuove approvate dalla PM (n. 10 della PM: «Она отошла в сторону, чтобы ответить на звонок», niente treni)
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
        text: "Она {{1}} в сторону, чтобы ответить на звонок.",
        words: ["отошла", "подошла", "атошла"],
        correctAnswers: { 1: "отошла" },
        explanation: "Spostarsi di lato = отойти в сторону. Подойти vuole «к»: подошла к двери, non «подошла в сторону»."
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
// PANEL 3 — Flashcard · paid
// Misto: под- / от- (pagina 3) ↔ в- / вы- (pagina 1) ↔ при- / у- (pagina 2); подошли к кабинету (davanti alla porta) ≠ пришла ко мне домой (PM: пришёл = punto di vista di chi riceve); n. 2 presente * (orig. входили… встречал)
// ============================================================
const p3cards = [
    { front: "Мы ___ к кабинету, но входить не стали.", back: "подошли", distractors: ["вошли", "подошлы"] },
    { front: "Каждый раз, когда мы ___ в ресторан, нас встречает один и тот же официант.", back: "входим", distractors: ["подходим", "входем"] },
    { front: "Наконец-то она ___ к нам в гости.", back: "пришла", distractors: ["подошла", "прийшла"] },
    { front: "Когда звонит телефон, бабушка всегда первая ___ к нему.", back: "подходит", distractors: ["входит", "подходет"] },
    { front: "Вы ___ от машины?", back: "отошли", distractors: ["вышли", "отошлы"] },
    { front: "Я ___, нужно купить что-нибудь?", back: "ухожу", distractors: ["подхожу", "ухажу"] },
    { front: "Вчера вечером Анна ___ ко мне, чтобы посмотреть фильм.", back: "пришла", distractors: ["подошла", "пришола"] },
    { front: "Обычно я ___ из дома в 8 часов.", back: "выхожу", distractors: ["подхожу", "выхажу"] },
    { front: "Я ___ на минутку, сейчас вернусь.", back: "выйду", distractors: ["подойду", "выйдю"] },
    { front: "___ от меня!", back: "Отойди", distractors: ["Подойди", "Отайди"] }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: aspetto — подходить / подойти, отходить / отойти: forme (tabelle СПРЯЖЕНИЯ) + abitudine / azione in corso / risultato, con spiegazioni; n. 9 della PM (lessico città / incontro); niente treni (PM: поезд отправляется / прибывает)
// ============================================================
const p4cards = [
    { front: "подходить → я …", back: "подхожу", distractors: ["подойду", "подходю"], explanation: "Подходить (НСВ), presente: подхожу, подходишь… «д» → «ж» alla 1ª persona." },
    { front: "отходить → ты …", back: "отходишь", distractors: ["отойдёшь", "отходешь"], explanation: "Отходить: отхожу, отходишь… come подходить." },
    { front: "подойти → он, прошедшее время …", back: "подошёл", distractors: ["подходил", "подошол"], explanation: "Passato di подойти: подошёл, подошла, подошли." },
    { front: "отойти → она, прошедшее время …", back: "отошла", distractors: ["отходила", "отошола"], explanation: "Passato di отойти: отошёл, отошла, отошли." },
    { front: "подойти → я, будущее время …", back: "подойду", distractors: ["подхожу", "подойдю"], explanation: "Futuro di подойти: подойду, подойдёшь (non «подойдю»)." },
    { front: "отойти → мы, будущее время …", back: "отойдём", distractors: ["отходим", "отойдим"], explanation: "Futuro di отойти: отойду, отойдёшь, отойдём." },
    { front: "Когда звонит телефон, бабушка всегда первая ___ к нему.", back: "подходит", distractors: ["подойдёт", "подходет"], explanation: "Всегда = abitudine → НСВ: подходит." },
    { front: "Я дождалась, когда все получат свои номера, и ___ к автомату.", back: "подошла", distractors: ["подходила", "падашла"], explanation: "Un'azione unica e conclusa, in sequenza → СВ: подошла." },
    { front: "Я уже ___! Буду через пять минут.", back: "подхожу", distractors: ["подойду", "подхажу"], explanation: "Sto arrivando: azione in corso adesso → НСВ presente: подхожу. Con «уже» non va il futuro «подойду»." },
    { front: "Я купила билет и сразу ___ от автомата.", back: "отошла", distractors: ["отходила", "атошла"], explanation: "Un'azione unica e conclusa («сразу») → СВ: отошла." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-po-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-po-01', exercises: p1exercises }),
    'panel-po-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-po-02', exercises: p2exercises }),
    'panel-po-3': () => new FlashcardExercise({ rootId: 'ex-flashcards-po-03', cards: p3cards }),
    'panel-po-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-po-04', cards: p4cards })
};

initPanelManager({ initializers, enableAccessControl: true });
