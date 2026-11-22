import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Перейти, пройти, обойти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// attraversare = перейти (дорогу, мост, через дорогу) · passare = пройти (через парк, мимо, вдоль, прямо, N метров) · girare intorno / evitare = обойти (дом, лужу; обошли все магазины),
// con le coppie aspettuali переходить / перейти, проходить / пройти, обходить / обойти.
// Trappole: перейти дорогу (da un lato all'altro) ≠ пройти через парк (attraverso l'interno); пройти мимо ≠ зайти; «Как пройти к…?»; «Проходите!» = invito.
// Sensi figurati frequenti (PM 22.11): платёж не прошёл, всё прошло хорошо, прошло несколько лет, как прошёл день, голова прошла, перейти на ты, перейти на другую работу, пройти собеседование, обойти проблему.
// Esclusi: переехать / перебежать / проехать… → «Специальные»; «проходили по парку целый час» (проходить СВ di durata); figurati rari (обойти закон); за- «dietro».
// Regola PM: solo frasi con contesto o marcatore; niente carte con sole forme; test «match» frase ↔ forma; ввод senza parentesi, tutte le risposte giuste. Lessico utile e frequente.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC sensi figurati · Quiz (panel-pp-9)

// ============================================================
// PANEL 1 — DragDrop · public
// Nuovo: перейти (дорогу, мост, через) ↔ пройти (через, мимо, вдоль, прямо) ↔ обойти (дом, все магазины), senso fisico, con spiegazioni; n. 6 (seconda parte) e 10 nuovi approvati dalla PM
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} дорогу очень осторожно.",
        words: ["проходим", "переходим", "переходем"],
        correctAnswers: { 1: "переходим" },
        explanation: "Attraversare la strada = перейти дорогу (accusativo; anche через дорогу). Presente: переходим."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Они {{1}} мимо нас.",
        words: ["перешли", "прошлы", "прошли"],
        correctAnswers: { 1: "прошли" },
        explanation: "Passare accanto = пройти мимо + genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вы прошли {{1}} парк?",
        words: ["через", "мимо", "около"],
        correctAnswers: { 1: "через" },
        explanation: "Attraverso l'interno = пройти через + accusativo (через парк)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Туристы {{1}} мост утром.",
        words: ["перешли", "вышли", "перешлы"],
        correctAnswers: { 1: "перешли" },
        explanation: "Attraversare il ponte = перейти мост (accusativo senza preposizione)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я {{1}} дом с правой стороны.",
        words: ["перехожу", "обхажу", "обхожу"],
        correctAnswers: { 1: "обхожу" },
        explanation: "Girare intorno = обойти + accusativo (дом). Presente: обхожу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} все магазины, но так и не нашли подарок.",
        words: ["перешли", "обошли", "обашли"],
        correctAnswers: { 1: "обошли" },
        explanation: "Обойти все магазины = fare il giro di tutti i negozi."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} прямо ещё метров пятьдесят.",
        words: ["Перейдите", "Пройдити", "Пройдите"],
        correctAnswers: { 1: "Пройдите" },
        explanation: "Per indicare la strada: пройдите прямо (imperativo di пройти)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно пройти {{1}} велосипедной дорожки около ста метров.",
        words: ["вдоль", "через", "по"],
        correctAnswers: { 1: "вдоль" },
        explanation: "Lungo = вдоль + genitivo (вдоль дорожки)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вам нужно {{1}} через дорогу на перекрёстке.",
        words: ["обойти", "перейти", "перейтить"],
        correctAnswers: { 1: "перейти" },
        explanation: "Attraversare = перейти (через) дорогу; all'incrocio = на перекрёстке."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я каждый день {{1}} мимо этого кафе.",
        words: ["прохожу", "перехожу", "проходю"],
        correctAnswers: { 1: "прохожу" },
        explanation: "Каждый день → НСВ: прохожу мимо (passo davanti)."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Как пройти к…? — testo della PM «Питер за один день»; n. 8 e 10 con marcatore (каждое утро / вчера) *; pronomi его / по ней; mai «пройти мост» o «вдоль набережной» come distrattori
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Затем нам нужно будет {{1}} мост и выйти на Кронверкскую набережную.",
        words: ["выйти", "перейти", "перейтить"],
        correctAnswers: { 1: "перейти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} до площади Академика Лихачёва и повернуть налево к Биржевому мосту.",
        words: ["Пройти", "Перейти", "Пройдти"],
        correctAnswers: { 1: "Пройти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Повернуть налево к Биржевому мосту, перейти {{1}} и выйти на Стрелку Васильевского острова.",
        words: ["его", "ему", "им"],
        correctAnswers: { 1: "его" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Пройти {{1}} Биржевой сквер мимо второй Ростральной колонны.",
        words: ["мимо", "вдоль", "через"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Пройти через Биржевой сквер {{1}} второй Ростральной колонны, перейти дорогу и выйти к Зоологическому музею.",
        words: ["через", "мимо", "к"],
        correctAnswers: { 1: "мимо" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Затем мы повернём на Дворцовый мост, {{1}} его и выйдем к Саду Зимнего дворца.",
        words: ["перешли", "перейдёте", "перейдём"],
        correctAnswers: { 1: "перейдём" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} через него и выйдем к Александровской колонне на Дворцовой площади.",
        words: ["пройдём", "перейдём", "прайдём"],
        correctAnswers: { 1: "пройдём" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Каждое утро я {{1}} через Михайловский сад и выхожу на Садовую улицу.",
        words: ["перехожу", "прохожу", "проходю"],
        correctAnswers: { 1: "прохожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "От него нам нужно повернуть на Малую Морскую улицу и пройти {{1}} ней прямо до Невского проспекта.",
        words: ["через", "вдоль", "по"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вчера мы {{1}} через Казанский мост и повернули налево на Грибоедовскую набережную.",
        words: ["перешли", "вышли", "перешлы"],
        correctAnswers: { 1: "перешли" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-pp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-01', exercises: p1exercises }),
    'panel-pp-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-02', exercises: p2exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
