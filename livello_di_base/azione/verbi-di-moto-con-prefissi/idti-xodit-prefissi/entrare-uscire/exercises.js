import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Войти или выйти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// entrare ↔ uscire — в- (внутрь) ↔ вы- (наружу), con entrambe le coppie aspettuali: входить / войти ↔ выходить / выйти.
// в + acc. ↔ из / с + gen.; anche выйти на / в + acc. (выйти на улицу, выйти погулять).
// Trappole: scendere dall'autobus = выйти из автобуса; sto entrando / entra sempre = вхожу / входит (НСВ), è entrato = вошёл;
// вы́шел (non «вышёл»), вы́йду ma выходи́ть; «пошёл в магазин» è corretto — mai come distrattore.
// Solo frasi originali dei materiali «Курсы» (vedi «LLR — Оригиналы — глаголы движения с приставками (20.11).md»);
// frasi nuove solo con il permesso della PM.
// Schema: 1 D&D (vecchio + nuovo, con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC misto (идти / ходить, Elementare) · Quiz (panel-eu-9)
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: войти / выйти (nuovo) + в + acc. ↔ из + gen. (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} в театр, когда концерт уже начался.",
        words: ["вышли", "войшли", "вошли"],
        correctAnswers: { 1: "вошли" },
        explanation: "Entrare = войти в + accusativo (в театр). Passato: вошли."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как только дверь открылась, вся шумная группа {{1}} в банк и начала нажимать на кнопки автомата электронной очереди.",
        words: ["вошла", "вышла", "войшла"],
        correctAnswers: { 1: "вошла" },
        explanation: "Entrare in banca: войти в + acc. Passato femminile (группа): вошла."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы вышли {{1}} после лекции.",
        words: ["из аудитории", "в аудиторию", "из аудиторию"],
        correctAnswers: { 1: "из аудитории" },
        explanation: "Uscire da = выйти из + genitivo: аудитория → из аудитории."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Магазин открыли, и покупатели {{1}} в торговый зал.",
        words: ["вышли", "вошли", "войшли"],
        correctAnswers: { 1: "вошли" },
        explanation: "Entrare: вошли в + acc. (в зал). Non «войшли»: il passato è вошли."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Павел {{1}} из дома в 9 часов.",
        words: ["вошёл", "вышёл", "вышел"],
        correctAnswers: { 1: "вышел" },
        explanation: "Uscire di casa = выйти из дома. Passato: вы́шел (non «вышёл»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда я вошёл {{1}} к начальнику, он разговаривал по телефону.",
        words: ["из кабинета", "в кабинете", "в кабинет"],
        correctAnswers: { 1: "в кабинет" },
        explanation: "Moto a luogo: войти в + accusativo (в кабинет). «В кабинете» = stato in luogo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "В кабинет врача медленно {{1}} старик.",
        words: ["вышел", "вошёл", "войшёл"],
        correctAnswers: { 1: "вошёл" },
        explanation: "Вошёл: passato maschile di войти (non «войшёл»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сестра выйдет {{1}} через 5 минут.",
        words: ["из школы", "из школу", "в школу"],
        correctAnswers: { 1: "из школы" },
        explanation: "Uscire da scuola = выйти из + genitivo (из школы)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вам нужно {{1}} из дома, повернуть направо и пройти прямо.",
        words: ["войти", "выйти", "выйдти"],
        correctAnswers: { 1: "выйти" },
        explanation: "Uscire di casa: выйти (infinito, non «выйдти»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты {{1}} погулять?",
        words: ["войдёшь", "выйдешь", "выйдишь"],
        correctAnswers: { 1: "выйдешь" },
        explanation: "Uscire a fare qualcosa = выйти + infinito (выйти погулять). Futuro: выйду, выйдешь (non «выйдишь»)."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Nuovo: войти / выйти, входить / выходить — ufficio, banca, casa (senza spiegazioni)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Перед дверью стояла очередь — я подошла, подождала и {{1}} в банк.",
        words: ["вышла", "вошла", "войшла"],
        correctAnswers: { 1: "вошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как только дверь открылась, вся шумная группа {{1}} в банк и начала нажимать на кнопки автомата электронной очереди.",
        words: ["вышла", "вашла", "вошла"],
        correctAnswers: { 1: "вошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "В офис {{1}} Андрей, который оживлённо разговаривал с кем-то по телефону, и прошёл к себе в кабинет.",
        words: ["вошёл", "вышел", "вошол"],
        correctAnswers: { 1: "вошёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Эдуардо {{1}} в кабинет начальника таможни. В кабинете никого не было.",
        words: ["вошёл", "войшёл", "вышел"],
        correctAnswers: { 1: "вошёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда я {{1}} в кабинет к начальнику, он разговаривал по телефону.",
        words: ["вышел", "вашёл", "вошёл"],
        correctAnswers: { 1: "вошёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда мы уже {{1}} из офиса, шеф вспомнил, что нужно закончить документы к утру, и мы вернулись.",
        words: ["входили", "выходили", "выхадили"],
        correctAnswers: { 1: "выходили" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Она всегда {{1}} ко мне в комнату без стука.",
        words: ["выходит", "вхадит", "входит"],
        correctAnswers: { 1: "входит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда будешь {{1}} из дома, не забудь взять мусор, выкинешь по дороге.",
        words: ["выходить", "входить", "выхадить"],
        correctAnswers: { 1: "выходить" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно {{1}} сейчас, чтобы успеть на поезд.",
        words: ["войти", "выйти", "выйдти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно {{1}} из дома утром.",
        words: ["выйти", "выдти", "войти"],
        correctAnswers: { 1: "выйти" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Nuovo: выйти на / к (вы- + «куда?») — percorsi «Как добраться» e «Питер за один день» (senza spiegazioni; pronomi originali: его, по ней, вдоль него)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Затем нам нужно будет перейти мост и {{1}} на Кронверкскую набережную.",
        words: ["выйти", "войти", "выйдти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Повернуть налево к Биржевому мосту, перейти его, повернуть налево к Ростральной колонне и {{1}} на Стрелку Васильевского острова.",
        words: ["войти", "выдти", "выйти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Пройти через Биржевой сквер мимо второй Ростральной колонны, перейти дорогу и {{1}} к Зоологическому музею.",
        words: ["вытти", "выйти", "войти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Из Александровского сада мы {{1}} на Адмиралтейский проспект к Исаакиевскому собору.",
        words: ["войдём", "выйдем", "выйдим"],
        correctAnswers: { 1: "выйдем" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Затем перейти мост через реку Мойку и {{1}} к Летнему саду.",
        words: ["выйти", "выйдти", "войти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно повернуть на Малую Морскую улицу и пройти по ней прямо до Невского проспекта, {{1}} на Невский проспект и повернуть направо.",
        words: ["войти", "вытти", "выйти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно доехать до остановки Площадь мира, {{1}} из автобуса и сразу повернуть налево.",
        words: ["выйти", "войти", "выдти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Там будет детский сад, пройти вдоль него, никуда не сворачивая, {{1}} на улицу Горького и сразу повернуть налево.",
        words: ["войти", "выйти", "выйдти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Чтобы дойти до офиса, вам нужно {{1}} к площади Ленина: там будет киоск, за ним выход на набережную.",
        words: ["войти", "выдти", "выйти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Пройти через Михайловский сад и {{1}} на Садовую улицу.",
        words: ["войти", "выйти", "выйдти"],
        correctAnswers: { 1: "выйти" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: aspetto — входить / войти, выходить / выйти: solo frasi con marcatori (PM 21.11: niente carte con sole forme) — abitudine / processo / risultato, con spiegazioni
// ============================================================
const p4cards = [
    { front: "Подожди, я пока не могу сказать точно, я только ___ в магазин.", back: "вхожу", distractors: ["войду", "входю"], explanation: "Sta succedendo adesso → НСВ presente: вхожу («д» → «ж» alla 1ª persona)." },
    { front: "Обычно я ___ из дома в 8 часов.", back: "выхожу", distractors: ["выйду", "выходю"], explanation: "Обычно = abitudine → НСВ: выхожу." },
    { front: "Эдуардо открыл дверь и ___ в кабинет начальника таможни.", back: "вошёл", distractors: ["входил", "войшёл"], explanation: "Un'azione sola, conclusa, in sequenza → СВ: вошёл (senza «й»)." },
    { front: "Директор ___ из кабинета покурить и сейчас вернётся.", back: "вышел", distractors: ["выходил", "вышёл"], explanation: "È ancora fuori e tornerà → СВ: вышел. «Выходил» vorrebbe dire che è già tornato." },
    { front: "Сестра ___ из школы через 5 минут.", back: "выйдет", distractors: ["войдёт", "выйдит"], explanation: "Через 5 минут = un momento preciso nel futuro → СВ: выйдет." },
    { front: "Как только ___ в здание, поверните налево.", back: "войдёте", distractors: ["входите", "войдёти"], explanation: "Как только = appena: un'azione sola, nel futuro → СВ: войдёте." },
    { front: "Когда начальник ___ в офис, все замирают.", back: "входит", distractors: ["войдёт", "вхадит"], explanation: "Ogni volta (abitudine) → НСВ: входит." },
    { front: "Извини, не могу больше говорить, я ___ в магазин.", back: "вхожу", distractors: ["войду", "входю"], explanation: "Sto entrando adesso (processo) → НСВ: вхожу." },
    { front: "Каждый раз, когда мы ___ в ресторан, нас встречал один и тот же официант.", back: "входили", distractors: ["вошли", "вхадили"], explanation: "Каждый раз = azione ripetuta → НСВ: входили." },
    { front: "Она всегда ___ ко мне в комнату без стука.", back: "входит", distractors: ["вошла", "вхадит"], explanation: "Всегда = abitudine → НСВ: входит." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Nuovo: входить / войти, выходить / выйти — «Каждый день»: presente (5), passato (4), futuro (1); senza spiegazioni. * = tempo cambiato rispetto all'originale (3, 4, 5)
// ============================================================
const p5cards = [
    { front: "Обычно я ___ из дома в 8 часов, но завтра выйду в 7.", back: "выхожу", distractors: ["выйду", "выхажу"] },
    { front: "Когда ты обычно ___ из дома?", back: "выходишь", distractors: ["выйдешь", "выходешь"] },
    { front: "Павел каждый день ___ из дома в 9 часов.", back: "выходит", distractors: ["входит", "выходет"] },
    { front: "Каждый раз, когда мы ___ в ресторан, нас встречает один и тот же официант.", back: "входим", distractors: ["выходим", "входем"] },
    { front: "В кабинет врача медленно ___ старик.", back: "входит", distractors: ["выходит", "вхадит"] },
    { front: "Мы ___ из аудитории после лекции.", back: "вышли", distractors: ["вошли", "выйшли"] },
    { front: "Эдуардо ___ в кабинет начальника таможни. В кабинете никого не было.", back: "вошёл", distractors: ["вышел", "вашёл"] },
    { front: "Когда я ___ в кабинет к начальнику, он разговаривал по телефону.", back: "вошёл", distractors: ["вышел", "вошол"] },
    { front: "Перед дверью стояла очередь — я подошла, подождала и ___ в банк.", back: "вошла", distractors: ["вышла", "вашла"] },
    { front: "Сестра ___ из школы через 5 минут.", back: "выйдет", distractors: ["войдёт", "выйдит"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: войти / выйти ↔ идти senza prefisso (nuovo, 6) + идти / ходить (vecchio, Elementare, 4); presente 6, passato 2, futuro 2
// ============================================================
const p6cards = [
    { front: "Магазин открыли, и покупатели ___ в торговый зал.", back: "вошли", distractors: ["ходили", "войшли"] },
    { front: "Мы ___ из аудитории после лекции.", back: "вышли", distractors: ["шли", "выйшли"] },
    { front: "Павел каждый день ___ из дома в 9 часов.", back: "выходит", distractors: ["идёт", "выходет"] },
    { front: "Подожди, я пока не могу сказать точно, я только ___ в магазин.", back: "вхожу", distractors: ["войду", "входю"] },
    { front: "Сестра ___ из школы через 5 минут.", back: "выйдет", distractors: ["идёт", "выйдит"] },
    { front: "Ты ___ погулять?", back: "выйдешь", distractors: ["войдёшь", "выйдишь"] },
    { front: "Я ___ в магазин, тебе купить что-нибудь?", back: "иду", distractors: ["хожу", "идю"] },
    { front: "Бабушка ___ к врачу каждую неделю.", back: "ходит", distractors: ["идёт", "ходет"] },
    { front: "Ты куда ___? Я иду в гости к Кате, у неё день рождения сегодня.", back: "идёшь", distractors: ["ходишь", "идишь"] },
    { front: "Мы ___ в спортзал вместе по пятницам.", back: "ходим", distractors: ["идём", "ходем"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelEu9() {
    const panel = document.getElementById('panel-eu-9');
    if (!panel) return;

    const container = panel.querySelector('#eu-9-cards-container');
    const prevBtn   = panel.querySelector('#eu-9-deck-prev');
    const nextBtn   = panel.querySelector('#eu-9-deck-next');
    const counterEl = panel.querySelector('#eu-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Мы ___ в театр, когда концерт уже начался.", options: ["выходили", "вошли", "войшли"], answer: "вошли" },
        { question: "Павел ___ из дома в 9 часов.", options: ["вышел", "вошёл", "вышёл"], answer: "вышел" },
        { question: "Когда начальник ___ в офис, все замирают.", options: ["вхадит", "войдёт", "входит"], answer: "входит" },
        { question: "Вам нужно ___ из дома, повернуть направо и пройти прямо.", options: ["войти", "выдти", "выйти"], answer: "выйти" },
        { question: "Затем нам нужно будет перейти мост и ___ на Кронверкскую набережную.", options: ["выйти", "войти", "вытти"], answer: "выйти" },
        { question: "Обычно я ___ из дома в 8 часов, но завтра выйду в 7.", options: ["выйду", "выхожу", "выхажу"], answer: "выхожу" },
        { question: "Магазин открыли, и покупатели ___ в торговый зал.", options: ["вошли", "вышли", "войшли"], answer: "вошли" },
        { question: "Мне нужно доехать до остановки Площадь мира, ___ из автобуса и сразу повернуть налево.", options: ["войти", "выдти", "выйти"], answer: "выйти" },
        { question: "Ты ___ погулять?", options: ["войдёшь", "выйдешь", "выйдишь"], answer: "выйдешь" },
        { question: "Каждый раз, когда мы ___ в ресторан, нас встречал один и тот же официант.", options: ["входили", "вошли", "вхадили"], answer: "входили" }
    ];
    const matchPairs = [
        { left: "Обычно я ___ из дома в 8 часов.", right: "выхожу" },
        { left: "Когда ты обычно ___ из дома?", right: "выходишь" },
        { left: "Павел каждый день ___ из дома в 9 часов.", right: "выходит" },
        { left: "Когда начальник ___ в офис, все замирают.", right: "входит" },
        { left: "Затем нам нужно будет перейти мост и ___ на Кронверкскую набережную.", right: "выйти" },
        { left: "Эдуардо открыл дверь и ___ в кабинет начальника таможни.", right: "вошёл" },
        { left: "Как только дверь открылась, вся шумная группа ___ в банк.", right: "вошла" },
        { left: "Магазин открыли, и покупатели ___ в торговый зал.", right: "вошли" },
        { left: "Мы ___ из аудитории после лекции.", right: "вышли" },
        { left: "Как только ___ в здание, поверните налево.", right: "войдёте" }
    ];
    const quizData = [
        { id: "eu9-w1", promptPrefix: "Обычно я ", promptSuffix: " из дома в 8 часов.", answers: ["выхожу", "выезжаю"] },
        { id: "eu9-w2", promptPrefix: "Когда ты обычно ", promptSuffix: " из дома?", answers: ["выходишь", "выезжаешь"] },
        { id: "eu9-w3", promptPrefix: "Эдуардо открыл дверь и ", promptSuffix: " в кабинет начальника таможни.", answers: ["вошёл", "вошел", "зашёл", "зашел"] },
        { id: "eu9-w4", promptPrefix: "Она всегда ", promptSuffix: " ко мне в комнату без стука.", answers: ["входит", "заходит"] },
        { id: "eu9-w5", promptPrefix: "Сестра ", promptSuffix: " из школы через 5 минут.", answers: ["выйдет", "выходит"] },
        { id: "eu9-w6", promptPrefix: "Подожди, я пока не могу сказать точно — я прямо сейчас ", promptSuffix: " в магазин.", answers: ["вхожу", "захожу"] },
        { id: "eu9-w7", promptPrefix: "Каждый раз, когда мы ", promptSuffix: " в ресторан, нас встречал один и тот же официант.", answers: ["входили", "заходили", "приходили"] },
        { id: "eu9-w8", promptPrefix: "Затем нам нужно будет перейти мост и ", promptSuffix: " на Кронверкскую набережную.", answers: ["выйти"] },
        { id: "eu9-w9", promptPrefix: "Магазин открыли, и покупатели ", promptSuffix: " в торговый зал.", answers: ["вошли", "зашли", "пошли"] },
        { id: "eu9-w10", promptPrefix: "Из Александровского сада мы ", promptSuffix: " на Адмиралтейский проспект.", answers: ["выйдем", "вышли"] }
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
            card.className = 'fca01-card-container eu-9-card';
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
        container.querySelectorAll('.eu-9-card').forEach(card => {
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
                const card    = this.closest('.eu-9-card');
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
        container.querySelectorAll('.eu-9-card').forEach((c, i) => {
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
    'panel-eu-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-eu-01', exercises: p1exercises }),
    'panel-eu-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-eu-02', exercises: p2exercises }),
    'panel-eu-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-eu-03', exercises: p3exercises }),
    'panel-eu-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-eu-04', cards: p4cards }),
    'panel-eu-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-eu-05', cards: p5cards }),
    'panel-eu-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-eu-06', cards: p6cards }),
    'panel-eu-9': () => initPanelEu9()
};

initPanelManager({ initializers, enableAccessControl: true });
