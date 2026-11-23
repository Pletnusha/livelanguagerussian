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
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC sensi figurati · 7 FC spirale pagine 1–5 (con spiegazioni) · Quiz (panel-pp-9, anche pagine 1–4)

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
        text: "Она {{1}} мимо меня и даже не заметила.",
        words: ["прошла", "перешла", "прашла"],
        correctAnswers: { 1: "прошла" },
        explanation: "Passare accanto = пройти мимо + genitivo (мимо меня)."
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
// PANEL 3 — DragDrop · paid
// Обойти ↔ пройти / перейти; n. 2–3 nuovi approvati dalla PM; n. 6 con le opzioni del quiz della PM; n. 8–9 originali con contesto *; mai «перейди лужу», «прошли дом», «вокруг / около нас» come distrattori
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Поиски начались. Мы {{1}} все базары.",
        words: ["перешли", "обошли", "обашли"],
        correctAnswers: { 1: "обошли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Осторожно, {{1}} лужу!",
        words: ["обойди", "выйди", "обайди"],
        correctAnswers: { 1: "обойди" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} дом и увидели вход во двор.",
        words: ["перешли", "обошлы", "обошли"],
        correctAnswers: { 1: "обошли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я {{1}} дом с правой стороны.",
        words: ["обхожу", "перехожу", "обхажу"],
        correctAnswers: { 1: "обхожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Они прошли {{1}} нас.",
        words: ["через", "мимо", "к"],
        correctAnswers: { 1: "мимо" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Путешественники {{1}} через пустыню пешком.",
        words: ["зашли", "ушли", "прошли"],
        correctAnswers: { 1: "прошли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} прямо ещё метров пятьдесят.",
        words: ["Пройдите", "Обойдите", "Пройдити"],
        correctAnswers: { 1: "Пройдите" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} мост и сразу поворачиваем налево.",
        words: ["выходим", "переходим", "переходем"],
        correctAnswers: { 1: "переходим" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Смотри, она {{1}} дорогу на красный свет!",
        words: ["переходит", "проходит", "переходет"],
        correctAnswers: { 1: "переходит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Туристы {{1}} мост утром.",
        words: ["вышли", "перешлы", "перешли"],
        correctAnswers: { 1: "перешли" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: aspetto — переходить / перейти, проходить / пройти, обходить / обойти: solo frasi con marcatori (всегда, каждый день, смотри!, sequenza, futuro), con spiegazioni; n. 10 nuova approvata dalla PM
// ============================================================
const p4cards = [
    { front: "Я каждый день ___ пешком пять километров.", back: "прохожу", distractors: ["пройду", "проходю"], explanation: "Каждый день → НСВ: прохожу. Пройти + quanto: пять километров." },
    { front: "Смотри, она ___ дорогу на красный свет!", back: "переходит", distractors: ["перейдёт", "переходет"], explanation: "Sta succedendo adesso («смотри!») → НСВ presente: переходит." },
    { front: "Вчера мы ___ через Казанский мост и повернули налево.", back: "перешли", distractors: ["переходили", "перешлы"], explanation: "Azioni in sequenza (перешли… и повернули) → СВ." },
    { front: "Мы ___ дом и увидели вход во двор.", back: "обошли", distractors: ["обходили", "обашли"], explanation: "Prima un'azione conclusa, poi il risultato (увидели) → СВ: обошли." },
    { front: "Мы ___ через сад и выйдем к Александровской колонне.", back: "пройдём", distractors: ["проходим", "прайдём"], explanation: "Futuro, un'azione sola (выйдем) → СВ: пройдём." },
    { front: "Я всегда ___ дом с правой стороны.", back: "обхожу", distractors: ["обойду", "обхажу"], explanation: "Всегда → НСВ: обхожу." },
    { front: "___ прямо ещё метров пятьдесят.", back: "Пройдите", distractors: ["Перейдите", "Пройдити"], explanation: "Per indicare la strada: пройдите (imperativo СВ, fino a un punto preciso)." },
    { front: "Мы всегда ___ дорогу очень осторожно.", back: "переходим", distractors: ["перейдём", "переходем"], explanation: "Всегда → НСВ: переходим." },
    { front: "Они ___ мимо нас.", back: "прошли", distractors: ["перешли", "прошлы"], explanation: "Passato di пройти: прошёл, прошла, прошли (мимо + genitivo)." },
    { front: "Простите, как ___ к метро?", back: "пройти", distractors: ["перейти", "пройтить"], explanation: "Per chiedere la strada: Как пройти к…?" }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Проходите! — frasi quotidiane; n. 2–3 nuove approvate; n. 5, 7, 9, 10 nella versione della PM («нужно пройти метров сто», «нельзя переходить», «мы уже все магазины обошли», «Она прошла мимо меня и даже не заметила»)
// ============================================================
const p5cards = [
    { front: "___, садитесь!", back: "Проходите", distractors: ["Переходите", "Праходите"] },
    { front: "Извините, разрешите ___!", back: "пройти", distractors: ["перейти", "пройтить"] },
    { front: "Давай ___ на другую сторону улицы, там тень.", back: "перейдём", distractors: ["обойдём", "перайдём"] },
    { front: "Вы ___ через парк?", back: "прошли", distractors: ["обошли", "прошлы"] },
    { front: "Нужно ___ метров сто.", back: "пройти", distractors: ["перейти", "пройтить"] },
    { front: "Вам нужно пройти прямо, дойти до магазина, повернуть направо и ___ дорогу на перекрёстке.", back: "перейти", distractors: ["обойти", "перейтить"] },
    { front: "Нельзя ___ дорогу на красный свет!", back: "переходить", distractors: ["проходить", "переходеть"] },
    { front: "Осторожно, ___ лужу!", back: "обойди", distractors: ["выйди", "обайди"] },
    { front: "Мы ищем маме подарок уже два дня, мы уже все магазины ___.", back: "обошли", distractors: ["перешли", "обашли"] },
    { front: "Она ___ мимо меня и даже не заметила.", back: "прошла", distractors: ["перешла", "прашла"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Sensi figurati frequenti (PM 22.11): как прошёл день, платёж не прошёл (testo «В банке»), всё пройдёт хорошо, прошло несколько лет, перейти на ты, обойти проблему, голова прошла, дождь прошёл, перейти на другую работу, проходить собеседование; mai «прошли несколько лет» né «пройду собеседование» come distrattori
// ============================================================
const p6cards = [
    { front: "— Как ___ день? — Отлично, спасибо!", back: "прошёл", distractors: ["перешёл", "прошол"] },
    { front: "У меня не ___ платёж, карта открыта для платежей в Северной Америке.", back: "прошёл", distractors: ["перешёл", "прашёл"] },
    { front: "Не волнуйся, всё ___ хорошо!", back: "пройдёт", distractors: ["перейдёт", "прайдёт"] },
    { front: "С тех пор ___ несколько лет.", back: "прошло", distractors: ["обошло", "прашло"] },
    { front: "Давай ___ на ты!", back: "перейдём", distractors: ["пройдём", "перайдём"] },
    { front: "Как нам ___ эту проблему?", back: "обойти", distractors: ["перейти", "обайти"] },
    { front: "Голова уже ___, спасибо.", back: "прошла", distractors: ["перешла", "прашла"] },
    { front: "Дождь ___, можно идти.", back: "прошёл", distractors: ["перешёл", "прашёл"] },
    { front: "Он ___ на другую работу.", back: "перешёл", distractors: ["прошёл", "перешол"] },
    { front: "Завтра я ___ собеседование.", back: "прохожу", distractors: ["перехожу", "проходю"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Spirale (PM): ripasso pagine 1–5 — 6 frasi della pagina 5 + 4 delle pagine 1–4 (дойти до банка, подошли к кабинету, выхожу из дома, зашли на чай); contrasti пройти мимо ↔ зайти, обойти ↔ войти, как пройти к ↔ дойти до; con spiegazioni
// ============================================================
const p7cards = [
    { front: "Мы ___ дорогу очень осторожно.", back: "переходим", distractors: ["проходим", "переходем"], explanation: "Attraversare la strada = перейти дорогу." },
    { front: "Она ___ мимо меня и даже не заметила.", back: "прошла", distractors: ["зашла", "прашла"], explanation: "Passare accanto senza entrare = пройти мимо (non зайти)." },
    { front: "Мы ___ дом и увидели вход во двор.", back: "обошли", distractors: ["вошли", "обашли"], explanation: "Girare intorno = обойти дом; entrare = войти в дом." },
    { front: "Вчера мы ___ через Казанский мост и повернули налево.", back: "перешли", distractors: ["вышли", "перешлы"], explanation: "Attraversare il ponte = перейти (через) мост." },
    { front: "Давай ___ на ты!", back: "перейдём", distractors: ["пройдём", "перайдём"], explanation: "Senso figurato: перейти на ты = darsi del tu." },
    { front: "Простите, как ___ к метро?", back: "пройти", distractors: ["дойти", "пройтить"], explanation: "Как пройти к… (к + dativo); дойти vuole до: как дойти до метро." },
    { front: "Нам нужно ___ до банка.", back: "дойти", distractors: ["подойти", "дайти"], explanation: "Arrivare fino a = дойти до. «Подойти до банка» non si dice: подойти к банку." },
    { front: "Мы ___ к кабинету, но входить не стали.", back: "подошли", distractors: ["зашли", "подошлы"], explanation: "Siamo arrivati vicino alla porta, ma non siamo entrati → подошли." },
    { front: "Обычно я ___ из дома в 8 часов.", back: "выхожу", distractors: ["прохожу", "выхажу"], explanation: "Uscire di casa = выйти из дома; обычно → НСВ." },
    { front: "Вчера мы ___ на чай, в итоге остались на ужин.", back: "зашли", distractors: ["прошли", "зашлы"], explanation: "Una visita breve = зайти (на чай)." }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelPp9() {
    const panel = document.getElementById('panel-pp-9');
    if (!panel) return;

    const container = panel.querySelector('#pp-9-cards-container');
    const prevBtn   = panel.querySelector('#pp-9-deck-prev');
    const nextBtn   = panel.querySelector('#pp-9-deck-next');
    const counterEl = panel.querySelector('#pp-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Мы ___ дорогу очень осторожно.", options: ["проходим", "переходим", "переходем"], answer: "переходим" },
        { question: "Нам нужно ___ до банка.", options: ["дойти", "зайти", "дайти"], answer: "дойти" },
        { question: "Вы прошли ___ парк?", options: ["через", "мимо", "около"], answer: "через" },
        { question: "Мы ищем маме подарок уже два дня, мы уже все магазины ___.", options: ["перешли", "обашли", "обошли"], answer: "обошли" },
        { question: "Мы ___ к кабинету, но входить не стали.", options: ["вошли", "подошли", "подошлы"], answer: "подошли" },
        { question: "Осторожно, ___ лужу!", options: ["обойди", "выйди", "обайди"], answer: "обойди" },
        { question: "— Как ___ день? — Отлично, спасибо!", options: ["перешёл", "прошол", "прошёл"], answer: "прошёл" },
        { question: "Наконец-то она ___ к нам в гости.", options: ["пришла", "ушла", "прийшла"], answer: "пришла" },
        { question: "Нельзя ___ дорогу на красный свет!", options: ["проходить", "переходить", "переходеть"], answer: "переходить" },
        { question: "Эдуардо открыл дверь и ___ в кабинет начальника таможни.", options: ["вышел", "вашёл", "вошёл"], answer: "вошёл" }
    ];
    const matchPairs = [
        { left: "Смотри, она ___ дорогу на красный свет!", right: "переходит" },
        { left: "Я каждый день ___ пешком пять километров.", right: "прохожу" },
        { left: "Мы ___ дом и увидели вход во двор.", right: "обошли" },
        { left: "Она ___ мимо меня и даже не заметила.", right: "прошла" },
        { left: "Давай ___ на ты!", right: "перейдём" },
        { left: "Не волнуйся, всё ___ хорошо!", right: "пройдёт" },
        { left: "Обычно я ___ из дома в 8 часов.", right: "выхожу" },
        { left: "Они ___ вчера с вечеринки первыми.", right: "ушли" },
        { left: "Я уже ___! Буду через пять минут.", right: "подхожу" },
        { left: "Вчера мы ___ на чай, в итоге остались на ужин.", right: "зашли" }
    ];
    const quizData = [
        { id: "pp9-w1", promptPrefix: "Мы ищем маме подарок уже два дня, мы уже все магазины ", promptSuffix: ".", answers: ["обошли", "объехали"] },
        { id: "pp9-w2", promptPrefix: "Простите, как ", promptSuffix: " к метро?", answers: ["пройти", "проехать"] },
        { id: "pp9-w3", promptPrefix: "Нельзя ", promptSuffix: " дорогу на красный свет!", answers: ["переходить", "перебегать"] },
        { id: "pp9-w4", promptPrefix: "Вчера мы ", promptSuffix: " через Казанский мост и повернули налево.", answers: ["перешли", "прошли", "переехали", "проехали"] },
        { id: "pp9-w5", promptPrefix: "Голова уже ", promptSuffix: ", спасибо.", answers: ["прошла"] },
        { id: "pp9-w6", promptPrefix: "Завтра я ", promptSuffix: " собеседование.", answers: ["прохожу", "пройду"] },
        { id: "pp9-w7", promptPrefix: "— Уже ", promptSuffix: "? — Да, мне пора, завтра рано вставать!", answers: ["уходишь", "уезжаешь"] },
        { id: "pp9-w8", promptPrefix: "Подожди, я сейчас ", promptSuffix: " к тебе и всё объясню.", answers: ["подойду", "подхожу", "приду", "подъеду"] },
        { id: "pp9-w9", promptPrefix: "По дороге домой я ", promptSuffix: " в аптеку.", answers: ["зайду", "захожу", "заеду", "заезжаю", "забегу"] },
        { id: "pp9-w10", promptPrefix: "Ты уже ", promptSuffix: " до дома? Напиши мне!", answers: ["дошла", "доехала", "добежала", "добралась"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

    // Typed answers: ignore case, ё/е, extra spaces and a final dot
    // (Italian keyboards usually have no ё).
    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ').replace(/[.!]+$/, '').toLowerCase().replace(/ё/g, 'е');
    }

    function ensureCardTitle(card, index) {
        const existingTitle = Array.from(card.children).find(child => child.tagName === 'H1');
        if (existingTitle) {
            if (index < MC_END) existingTitle.classList.add('exercise-counter');
            if (card.firstElementChild !== existingTitle) card.insertBefore(existingTitle, card.firstElementChild);
            return;
        }
        const title = document.createElement('h1');
        title.textContent = `Esercizio ${index + 1} di ${TOTAL_CARDS}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container pp-9-card';
            card.dataset.index = i;
            if (i === 0) card.classList.add('visible');
            card.hidden = (i !== 0);

            if (i < MC_END) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) => `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`).join('');
                const questionText = item.question.replace('___', `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`);
                card.innerHTML = `
                    <div class="instruction">Completa la frase scegliendo la forma corretta</div>
                    <div class="exercise-text">${questionText}</div>
                    <div class="word-options">${opts}</div>
                    <div class="controls">
                        <button class="btn btn-primary verify-btn">Verifica</button>
                        <button class="btn btn-secondary next-btn" style="display:none;">Prossimo</button>
                        <div class="feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);

            } else if (i < MATCH_END) {
                const pairIdx = i - MC_END;
                const pair = matchPairs[pairIdx];
                const otherPairs = matchPairs.filter((_, idx) => idx !== pairIdx);
                const shuffledOthers = otherPairs.sort(() => Math.random() - 0.5).slice(0, 2);
                const allPairs = [pair, ...shuffledOthers].sort(() => Math.random() - 0.5);

                let fronts = allPairs.map((p, idx) => ({ text: p.left,  type: 'front', id: idx }));
                let backs  = allPairs.map((p, idx) => ({ text: p.right, type: 'back',  id: idx }));
                fronts.sort(() => Math.random() - 0.5);
                backs.sort(() => Math.random() - 0.5);

                let selectedMatchCard = null;
                let isProcessingMatch = false;

                const matchContainer = document.createElement('div');
                matchContainer.className = 'fca01-match-container';
                const feedbackEl = document.createElement('p');
                feedbackEl.className = 'fca01-match-feedback';
                const matchGrid = document.createElement('div');
                matchGrid.className = 'fca01-match-grid';
                const colFronts = document.createElement('div');
                colFronts.className = 'fca01-match-col';
                const colBacks = document.createElement('div');
                colBacks.className = 'fca01-match-col';

                matchGrid.appendChild(colFronts);
                matchGrid.appendChild(colBacks);
                matchContainer.appendChild(feedbackEl);
                matchContainer.appendChild(matchGrid);
                card.appendChild(matchContainer);

                function handleMatchClick(clickedCard) {
                    if (isProcessingMatch || clickedCard.classList.contains('matched')) return;
                    if (clickedCard === selectedMatchCard) return;

                    if (!selectedMatchCard) {
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    if (selectedMatchCard.dataset.type === clickedCard.dataset.type) {
                        selectedMatchCard.classList.remove('selected');
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    const firstId    = selectedMatchCard.dataset.id;
                    const secondId   = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;

                    if (firstId === secondId) {
                        previousCard.classList.add('matched');
                        clickedCard.classList.add('matched');
                        feedbackEl.textContent = "✨ Отлично!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "🎉 ПОБЕДА! 🎉";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "Неверно";
                        feedbackEl.className = "fca01-match-feedback wrong";
                        setTimeout(() => {
                            clickedCard.classList.remove('selected', 'wrong');
                            previousCard.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = "";
                            isProcessingMatch = false;
                        }, 800);
                        selectedMatchCard = null;
                    }
                }

                function createMatchElement(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card';
                    div.textContent = item.text;
                    div.dataset.id   = item.id;
                    div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatchClick(div));
                    return div;
                }

                fronts.forEach(item => colFronts.appendChild(createMatchElement(item)));
                backs.forEach(item  => colBacks.appendChild(createMatchElement(item)));
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);

            } else {
                const item = quizData[i - MATCH_END];
                card.innerHTML = `
                    <h3 class="quiz-title">Write</h3>
                    <p class="quiz-instruction">Scrivete la forma corretta</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix}<input type="text" class="quiz-input" data-index="${i - MATCH_END}">${item.promptSuffix}</div>
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">Проверить</button></div>
                        <div class="quiz-feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);
            }

            container.appendChild(card);
        }

        attachHandlers();
    }

    function attachHandlers() {
        container.querySelectorAll('.pp-9-card').forEach(card => {
            const cardIndex = parseInt(card.dataset.index, 10);
            if (cardIndex >= MC_END) return;

            let checked = false;
            const gapElements  = Array.from(card.querySelectorAll('.gap'));
            const wordElements = Array.from(card.querySelectorAll('.word-option'));
            const verifyBtn    = card.querySelector('.verify-btn');
            const nextBtn      = card.querySelector('.next-btn');
            const feedback     = card.querySelector('.feedback');

            wordElements.forEach(wordElement => {
                wordElement.addEventListener('click', function() {
                    if (this.classList.contains('used') || checked) return;
                    const emptyGap = gapElements.find(gap => !gap.classList.contains('filled'));
                    if (!emptyGap) return;
                    const word = this.dataset.word;
                    emptyGap.textContent = word;
                    emptyGap.classList.add('filled');
                    emptyGap.dataset.word      = word;
                    emptyGap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });

            gapElements.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const wordIndex   = this.dataset.wordIndex;
                    const wordElement = wordElements.find(w => w.dataset.index === wordIndex);
                    this.textContent = '';
                    this.classList.remove('filled');
                    delete this.dataset.word;
                    delete this.dataset.wordIndex;
                    if (wordElement) wordElement.classList.remove('used');
                });
            });

            if (nextBtn) nextBtn.addEventListener('click', () => showCard(currentCard + 1));

            verifyBtn.addEventListener('click', function() {
                checked = true;
                const correctAnswer = multipleChoiceData[cardIndex].answer;
                let correct = 0;
                gapElements.forEach(gap => {
                    if (gap.dataset.word === correctAnswer) {
                        gap.classList.remove('filled');
                        gap.classList.add('correct');
                        correct = 1;
                    } else {
                        gap.classList.add('incorrect');
                    }
                });
                feedback.textContent = `Corretto: ${correct} / 1`;
                verifyBtn.style.display = 'none';
                nextBtn.style.display   = 'inline-block';
            });
        });

        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card    = this.closest('.pp-9-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === normalizeInput(ans));
                if (isCorrect) {
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                    input.disabled = true;
                    this.disabled  = true;
                    fb.textContent = 'Правильно!';
                    fb.className   = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.';
                    fb.className   = 'quiz-feedback incorrect';
                }
            });
        });

        container.querySelectorAll('.quiz-input').forEach(input => {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    const btn = this.closest('.quiz-item').querySelector('.quiz-check-btn');
                    if (btn && !btn.disabled) btn.click();
                }
            });
        });
    }

    function showCard(idx) {
        currentCard = idx;
        container.querySelectorAll('.pp-9-card').forEach((c, i) => {
            c.classList.toggle('visible', i === idx);
            c.hidden = (i !== idx);
        });
        counterEl.textContent = (idx + 1) + ' / ' + TOTAL_CARDS;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === TOTAL_CARDS - 1);
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0)               showCard(currentCard - 1); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL_CARDS - 1) showCard(currentCard + 1); });

    buildCards();
    showCard(0);
}

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-pp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-01', exercises: p1exercises }),
    'panel-pp-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-02', exercises: p2exercises }),
    'panel-pp-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-03', exercises: p3exercises }),
    'panel-pp-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-04', cards: p4cards }),
    'panel-pp-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-05', cards: p5cards }),
    'panel-pp-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-06', cards: p6cards }),
    'panel-pp-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-07', cards: p7cards }),
    'panel-pp-9': () => initPanelPp9()
};

initPanelManager({ initializers, enableAccessControl: true });
