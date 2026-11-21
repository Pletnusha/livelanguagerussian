import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Дойти или зайти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// arrivare fino a ↔ passare da — до- (punto finale del percorso: до + gen.) ↔ за- (visita breve, di passaggio: в / на + acc., к + dat., за + strum.; «по дороге»),
// con entrambe le coppie aspettuali: доходить / дойти ↔ заходить / зайти.
// Trappole (quiz della PM): «зайти до магазина» ✗ → зайти в магазин; «дойти до бабушки» = arrivarci a piedi, non farle visita; «Нам пора доходить!» ✗;
// зайти (visita breve) ≠ войти (attraversare la soglia); «Заходи!» = invito → НСВ.
// Esclusi: за- «dietro» (зашли за угол, солнце зашло) → «Обход и перемена»; доехать / заехать / забежать → pagine «Специальные».
// Frasi nuove solo con il permesso della PM: lessico utile e frequente (città, incontro), ogni carta comprensibile da sola. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC misto (pagine 1–3) · Quiz (panel-dz-9)

// ============================================================
// PANEL 1 — DragDrop · public
// Nuovo: дойти до + gen. ↔ зайти в / к / за (visita breve, scopo); trappole dei quiz della PM («зайти до банка» ✗); solo originali, con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно {{1}} до банка.",
        words: ["зайти", "дойти", "дайти"],
        correctAnswers: { 1: "дойти" },
        explanation: "Arrivare fino a = дойти до + genitivo. «Зайти до банка» non si dice: зайти в банк."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Им нужно дойти {{1}} и вернуться.",
        words: ["до магазина", "в магазин", "до магазин"],
        correctAnswers: { 1: "до магазина" },
        explanation: "Дойти vuole до + genitivo (до магазина), non «в»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Каждый раз, когда я {{1}} за мороженым, мы болтаем с продавщицей.",
        words: ["дохожу", "захажу", "захожу"],
        correctAnswers: { 1: "захожу" },
        explanation: "Каждый раз = abitudine → НСВ: захожу. Зайти за + strumentale = passare a prendere qualcosa."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно зайти {{1}} за кефиром.",
        words: ["в магазин", "до магазина", "в магазине"],
        correctAnswers: { 1: "в магазин" },
        explanation: "Passare in un posto = зайти в + accusativo. «До магазина» va con дойти."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} к бабушке на чай.",
        words: ["дошли", "зашли", "зашлы"],
        correctAnswers: { 1: "зашли" },
        explanation: "Una visita breve = зайти к + dativo. «Дошли» vorrebbe «до»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Начальник попросил {{1}} к нему на пару слов.",
        words: ["дойти", "зайтить", "зайти"],
        correctAnswers: { 1: "зайти" },
        explanation: "Passare da qualcuno = зайти к + dativo: зайти к нему."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "По дороге домой я {{1}} в аптеку.",
        words: ["дойду", "зайдю", "зайду"],
        correctAnswers: { 1: "зайду" },
        explanation: "По дороге = di passaggio → зайти. Futuro: зайду (non «зайдю»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как {{1}} до набережной, поверните налево.",
        words: ["дойдёте", "зайдёте", "дойдёти"],
        correctAnswers: { 1: "дойдёте" },
        explanation: "Arrivare fino al punto finale del percorso = дойти до: как дойдёте до набережной."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ей нужно зайти {{1}} к врачу.",
        words: ["за справку", "за справкой", "в справку"],
        correctAnswers: { 1: "за справкой" },
        explanation: "Lo scopo: зайти за + strumentale (за справкой = a prendere il certificato)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он часто {{1}} к соседям.",
        words: ["заходит", "доходит", "заходет"],
        correctAnswers: { 1: "заходит" },
        explanation: "Часто = abitudine → НСВ: заходит."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Как добраться до…? — testi-percorso della PM (дойти до + gen.); n. 6 e 8 adattati da ехать a идти; n. 7 e 10 nuovi approvati dalla PM; distrattori mai «идите» (anche giusto)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Чтобы добраться от работы до дома, мне нужно {{1}} до остановки автобуса.",
        words: ["дойти", "зайти", "дайти"],
        correctAnswers: { 1: "дойти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Чтобы {{1}} до супермаркета, вам нужно идти прямо по дороге метров двести.",
        words: ["зайти", "дойтить", "дойти"],
        correctAnswers: { 1: "дойти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Чтобы дойти {{1}}, вам нужно выйти к площади Ленина.",
        words: ["в офис", "до офиса", "до офис"],
        correctAnswers: { 1: "до офиса" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поверните налево и {{1}} до большого современного здания с вывеской «Гута-банк».",
        words: ["дойдите", "зайдите", "дойдити"],
        correctAnswers: { 1: "дойдите" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Чтобы {{1}} до почты, нужно пройти прямо до площади и перейти дорогу возле аптеки.",
        words: ["войти", "дойти", "дайти"],
        correctAnswers: { 1: "дойти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы ещё не {{1}} до вокзала, когда стало ясно, что мы опоздали на поезд.",
        words: ["зашли", "дашли", "дошли"],
        correctAnswers: { 1: "дошли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я {{1}} до остановки за пять минут.",
        words: ["захожу", "дохожу", "дахожу"],
        correctAnswers: { 1: "дохожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он всегда {{1}} пешком до станции «Автово».",
        words: ["доходит", "заходит", "доходет"],
        correctAnswers: { 1: "доходит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} до парка и идите вдоль велосипедной дорожки прямо до дома.",
        words: ["Зайдите", "Дойдити", "Дойдите"],
        correctAnswers: { 1: "Дойдите" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты уже {{1}} до дома? Напиши мне!",
        words: ["зашла", "дошла", "дашла"],
        correctAnswers: { 1: "дошла" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// По дороге: зайти в / на + acc., к + dat., за + strum.; n. 2 (orig. телеграф), 5 (orig. туда), 10 (orig. забежала) adattati; n. 7–8 nuovi approvati dalla PM; distrattori mai пошла / вошла / пришли (anche giusti)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "По дороге Нина {{1}} в обувной магазин.",
        words: ["дошла", "зашла", "зошла"],
        correctAnswers: { 1: "зашла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "По дороге он {{1}} на почту и отправил письмо.",
        words: ["зашёл", "дошёл", "зашол"],
        correctAnswers: { 1: "зашёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Утром зайди {{1}}, вместе пойдём в университет.",
        words: ["за меня", "за мне", "за мной"],
        correctAnswers: { 1: "за мной" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Ты идёшь в кино один? — Нет, с Олегом, он {{1}} за мной.",
        words: ["дойдёт", "зайдит", "зайдёт"],
        correctAnswers: { 1: "зайдёт" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда я шла в университет, я увидела красивый сад и {{1}} в него.",
        words: ["зашла", "дошла", "зашола"],
        correctAnswers: { 1: "зашла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} в магазин, чтобы купить хлеб.",
        words: ["дошли", "зашли", "зашлы"],
        correctAnswers: { 1: "зашли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "По дороге на работу я всегда {{1}} в кафе за кофе.",
        words: ["дохожу", "захажу", "захожу"],
        correctAnswers: { 1: "захожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я {{1}} в магазин, тебе что-нибудь купить?",
        words: ["захожу", "дохожу", "захожю"],
        correctAnswers: { 1: "захожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} к доктору за справкой.",
        words: ["дошли", "зашлы", "зашли"],
        correctAnswers: { 1: "зашли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Лена, как обычно, опаздывала, но по дороге на работу {{1}} за круассанами в свою любимую пекарню.",
        words: ["дошла", "зашла", "зошла"],
        correctAnswers: { 1: "зашла" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: aspetto — заходить / зайти, доходить / дойти: frasi con marcatori (PM: niente carte con sole forme) — abitudine / visita precisa / risultato / invito, con spiegazioni; n. 5 frase (PM), adattata da «Я ненадолго заеду к бабушке»; n. 10 dal dialogo «Можно? — Заходи, заходи!»
// ============================================================
const p4cards = [
    { front: "Каждое утро я ___ в кафе за кофе.", back: "захожу", distractors: ["зайду", "заходю"], explanation: "Каждое утро = abitudine → НСВ, presente: захожу («д» → «ж»)." },
    { front: "Ты всегда ___ до работы пешком?", back: "доходишь", distractors: ["дойдёшь", "доходешь"], explanation: "Всегда → НСВ: доходишь (дохожу, доходишь…)." },
    { front: "Он только что ___ в магазин, подожди его здесь.", back: "зашёл", distractors: ["заходил", "зашол"], explanation: "Только что, ed è ancora dentro → СВ: зашёл. «Заходил» vorrebbe dire che è già uscito." },
    { front: "Она наконец ___ до дома и сразу легла спать.", back: "дошла", distractors: ["доходила", "дашла"], explanation: "Наконец = il risultato è raggiunto → СВ: дошла." },
    { front: "Я ненадолго ___ к бабушке.", back: "зайду", distractors: ["дойду", "зайдю"], explanation: "Futuro di зайти: зайду (non «зайдю»). Passare da qualcuno = зайти к + dativo; «дойду» vorrebbe «до»." },
    { front: "Как ___ до набережной, поверните налево.", back: "дойдёте", distractors: ["доходите", "дойдёти"], explanation: "Как = quando: un'azione sola, nel futuro → СВ: дойдёте." },
    { front: "— Когда ___ к нам на кофе? Ты уже месяц обещаешь!", back: "зайдёшь", distractors: ["заходишь", "зайдишь"], explanation: "Una visita precisa nel futuro → СВ: зайдёшь." },
    { front: "Обычно я ___ до остановки за пять минут.", back: "дохожу", distractors: ["дойду", "дахожу"], explanation: "Обычно = abitudine → НСВ: дохожу." },
    { front: "Ты уже ___ до дома? Напиши мне!", back: "дошла", distractors: ["доходила", "дашла"], explanation: "Уже = il risultato è raggiunto → СВ: дошла." },
    { front: "— Можно? — ___!", back: "Заходи", distractors: ["Дойди", "Захади"], explanation: "Invitare a entrare = imperativo НСВ: заходи! Si usa per dire «prego, entra»." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Заходи! — dialoghi e quiz della PM + frasi dei pannelli 1–3 in formato carta; 5 до- + 5 за- (PM); n. 4 adattato da «добегу»
// ============================================================
const p5cards = [
    { front: "— Да ладно тебе, ___! Так и будешь на пороге стоять?", back: "заходи", distractors: ["доходи", "захади"] },
    { front: "Степан ___ за мной, и мы вместе поедем на работу.", back: "зайдёт", distractors: ["дойдёт", "зайдит"] },
    { front: "Тебе нужно ___ к бабушке?", back: "зайти", distractors: ["дойти", "заити"] },
    { front: "Я только ___ до супермаркета и обратно!", back: "дойду", distractors: ["зайду", "дойдю"] },
    { front: "Ты уже ___ до дома? Напиши мне!", back: "дошла", distractors: ["зашла", "дашла"] },
    { front: "Я ___ в магазин, тебе что-нибудь купить?", back: "захожу", distractors: ["дохожу", "захожю"] },
    { front: "Он всегда ___ пешком до станции «Автово».", back: "доходит", distractors: ["заходит", "доходет"] },
    { front: "Начальник попросил ___ к нему на пару слов.", back: "зайти", distractors: ["дойти", "зайтить"] },
    { front: "Обычно я ___ до остановки за пять минут.", back: "дохожу", distractors: ["захожу", "дахожу"] },
    { front: "Им нужно ___ до магазина и вернуться.", back: "дойти", distractors: ["зайти", "дайти"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto pagine 1–4: в- / вы-, при- / у-, под- / от-, до- / за-; n. 3 e 7 nella versione della PM; n. 4 dal quiz della PM («подойти до банка» ✗)
// ============================================================
const p6cards = [
    { front: "Мы ___ к кабинету, но входить не стали.", back: "подошли", distractors: ["зашли", "подошлы"] },
    { front: "Эдуардо открыл дверь и ___ в кабинет начальника таможни.", back: "вошёл", distractors: ["дошёл", "вашёл"] },
    { front: "Вчера мы ___ на чай, в итоге остались на ужин.", back: "зашли", distractors: ["подошли", "зашлы"] },
    { front: "Нам нужно ___ до банка.", back: "дойти", distractors: ["подойти", "дайти"] },
    { front: "Мне нужно доехать до остановки «Площадь мира», ___ из автобуса и сразу повернуть налево.", back: "выйти", distractors: ["уйти", "выдти"] },
    { front: "Каждый раз, когда я ___ за мороженым, мы болтаем с продавщицей.", back: "захожу", distractors: ["вхожу", "захажу"] },
    { front: "— Где Маша? — Она уже ___ домой, будет только завтра.", back: "ушла", distractors: ["зашла", "ушола"] },
    { front: "Обычно я ___ из дома в 8 часов.", back: "выхожу", distractors: ["захожу", "выхажу"] },
    { front: "Ты уже ___ до дома? Напиши мне!", back: "дошла", distractors: ["пришла", "дашла"] },
    { front: "Я уже ___! Буду через пять минут.", back: "подхожу", distractors: ["захожу", "подхажу"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelDz9() {
    const panel = document.getElementById('panel-dz-9');
    if (!panel) return;

    const container = panel.querySelector('#dz-9-cards-container');
    const prevBtn   = panel.querySelector('#dz-9-deck-prev');
    const nextBtn   = panel.querySelector('#dz-9-deck-next');
    const counterEl = panel.querySelector('#dz-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Нам нужно ___ до банка.", options: ["зайти", "дойти", "дайти"], answer: "дойти" },
        { question: "Мне нужно зайти ___ за кефиром.", options: ["в магазин", "до магазина", "в магазине"], answer: "в магазин" },
        { question: "По дороге домой я ___ в аптеку.", options: ["зайду", "дойду", "зайдю"], answer: "зайду" },
        { question: "Как ___ до набережной, поверните налево.", options: ["зайдёте", "дойдёти", "дойдёте"], answer: "дойдёте" },
        { question: "Он часто ___ к соседям.", options: ["доходит", "заходит", "заходет"], answer: "заходит" },
        { question: "Обычно я ___ до остановки за пять минут.", options: ["захожу", "дахожу", "дохожу"], answer: "дохожу" },
        { question: "Утром зайди ___, вместе пойдём в университет.", options: ["за мной", "за меня", "за мне"], answer: "за мной" },
        { question: "Ты уже ___ до дома? Напиши мне!", options: ["зашла", "дошла", "дашла"], answer: "дошла" },
        { question: "Вчера мы ___ на чай, в итоге остались на ужин.", options: ["дошли", "зашлы", "зашли"], answer: "зашли" },
        { question: "Им нужно дойти ___ и вернуться.", options: ["до магазина", "в магазин", "до магазин"], answer: "до магазина" }
    ];
    const matchPairs = [
        { left: "Каждый раз, когда я ___ за мороженым, мы болтаем с продавщицей.", right: "захожу" },
        { left: "Завтра по дороге домой я ___ в аптеку.", right: "зайду" },
        { left: "Обычно я ___ до остановки за пять минут.", right: "дохожу" },
        { left: "Подожди меня, я только ___ до супермаркета и обратно!", right: "дойду" },
        { left: "Вчера мы ___ на чай, в итоге остались на ужин.", right: "зашли" },
        { left: "Мы ещё не ___ до вокзала, когда стало ясно, что мы опоздали на поезд.", right: "дошли" },
        { left: "— Да ладно тебе, ___! Так и будешь на пороге стоять?", right: "заходи" },
        { left: "Как ___ до набережной, поверните налево.", right: "дойдёте" },
        { left: "Он часто ___ к соседям.", right: "заходит" },
        { left: "Им нужно ___ до магазина и вернуться.", right: "дойти" }
    ];
    const quizData = [
        { id: "dz9-w1", promptPrefix: "По дороге на работу я всегда ", promptSuffix: " в кафе за кофе.", answers: ["захожу", "заезжаю", "забегаю"] },
        { id: "dz9-w2", promptPrefix: "Обычно я ", promptSuffix: " до остановки за пять минут.", answers: ["дохожу", "доезжаю", "добегаю", "добираюсь"] },
        { id: "dz9-w3", promptPrefix: "По дороге домой я ", promptSuffix: " в аптеку.", answers: ["зайду", "захожу", "заеду", "заезжаю", "забегу"] },
        { id: "dz9-w4", promptPrefix: "Я только ", promptSuffix: " до супермаркета и обратно!", answers: ["дойду", "добегу", "доеду"] },
        { id: "dz9-w5", promptPrefix: "Вчера мы ", promptSuffix: " на чай, в итоге остались на ужин.", answers: ["зашли", "заехали", "забежали", "пришли", "приехали"] },
        { id: "dz9-w6", promptPrefix: "Ты уже ", promptSuffix: " до дома? Напиши мне!", answers: ["дошла", "доехала", "добежала", "добралась"] },
        { id: "dz9-w7", promptPrefix: "— Да ладно тебе, ", promptSuffix: "! Так и будешь на пороге стоять?", answers: ["заходи", "входи", "проходи"] },
        { id: "dz9-w8", promptPrefix: "Им нужно ", promptSuffix: " до магазина и вернуться.", answers: ["дойти", "доехать", "добежать"] },
        { id: "dz9-w9", promptPrefix: "Начальник попросил ", promptSuffix: " к нему на пару слов.", answers: ["зайти", "подойти", "прийти", "заглянуть"] },
        { id: "dz9-w10", promptPrefix: "Как ", promptSuffix: " до набережной, поверните налево.", answers: ["дойдёте", "дойдете", "доедете"] }
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
            card.className = 'fca01-card-container dz-9-card';
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
        container.querySelectorAll('.dz-9-card').forEach(card => {
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
                const card    = this.closest('.dz-9-card');
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
        container.querySelectorAll('.dz-9-card').forEach((c, i) => {
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
    'panel-dz-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dz-01', exercises: p1exercises }),
    'panel-dz-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dz-02', exercises: p2exercises }),
    'panel-dz-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dz-03', exercises: p3exercises }),
    'panel-dz-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-dz-04', cards: p4cards }),
    'panel-dz-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-dz-05', cards: p5cards }),
    'panel-dz-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-dz-06', cards: p6cards }),
    'panel-dz-9': () => initPanelDz9()
};

initPanelManager({ initializers, enableAccessControl: true });
