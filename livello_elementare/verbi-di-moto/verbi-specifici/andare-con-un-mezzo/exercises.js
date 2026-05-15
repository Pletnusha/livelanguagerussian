import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Misto (ехать + ездить)
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Машина сломалась, вот я {{1}} на метро!",
        words: ["едет", "езжу", "еду"],
        correctAnswers: { 1: "еду" },
        wrongFeedback: {
            "едет": "Verbo giusto, ma persona sbagliata: chi parla è «я» → 1ª pers. sg., non 3ª.",
            "езжу": "La macchina è rotta — è un viaggio specifico di adesso, non un'abitudine → ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Она {{1}} в Верону на поезде — сейчас уже в поезде.",
        words: ["едет", "едем", "ездит"],
        correctAnswers: { 1: "едет" },
        wrongFeedback: {
            "едем": "Verbo giusto, ma persona sbagliata: soggetto «она» → 3ª pers. sg., non 1ª pl.",
            "ездит": "«Сейчас уже в поезде» — è in viaggio adesso, destinazione precisa → ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Мы на выходные {{1}} к родителям.",
        words: ["едут", "едем", "ездим"],
        correctAnswers: { 1: "едем" },
        wrongFeedback: {
            "едут": "Verbo giusto, ma persona sbagliata: soggetto «мы» → 1ª pers. pl., non 3ª pl.",
            "ездим": "«На выходные» — viaggio specifico programmato, non un'abitudine → ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Ты только сейчас {{1}} в супермаркет?!",
        words: ["еду", "ездишь", "едешь"],
        correctAnswers: { 1: "едешь" },
        wrongFeedback: {
            "еду": "Verbo giusto, ma persona sbagliata: soggetto «ты» → 2ª pers. sg., non 1ª sg.",
            "ездишь": "«Только сейчас» — sta andando al supermercato in questo momento → ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Мне до офиса {{1}} 25 минут.",
        words: ["едем", "ехать", "ездить"],
        correctAnswers: { 1: "ехать" },
        wrongFeedback: {
            "едем": "Verbo giusto, ma «мне... минут» esprime durata: serve l'infinito, non la forma personale.",
            "ездить": "Si tratta del tempo di un singolo tragitto verso l'ufficio → ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Ты же на машине {{1}} на работу — что ты здесь делаешь?",
        words: ["ездишь", "ездит", "едешь"],
        correctAnswers: { 1: "ездишь" },
        wrongFeedback: {
            "ездит": "Verbo giusto, ma persona sbagliata: soggetto «ты» → 2ª pers. sg., non 3ª sg.",
            "едешь": "«Же» — è la tua abitudine consolidata, non un viaggio specifico → ездить."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Наш сын научился {{1}} на велосипеде.",
        words: ["ездит", "ехать", "ездить"],
        correctAnswers: { 1: "ездить" },
        wrongFeedback: {
            "ездит": "Verbo giusto, ma dopo «научиться» serve l'infinito, non la forma personale.",
            "ехать": "«Научился» — ha imparato un'abilità per uso ripetuto → ездить."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Ненавижу {{1}} на метро — там постоянно толпа!",
        words: ["ездишь", "ездить", "ехать"],
        correctAnswers: { 1: "ездить" },
        wrongFeedback: {
            "ездишь": "Verbo giusto, ma dopo «ненавижу» serve l'infinito, non la forma personale.",
            "ехать": "«Ненавижу» + «постоянно» — odio abituale per la metro → ездить."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Я обычно в городе на машине не {{1}} — постоянно пробки!",
        words: ["езжу", "ездит", "еду"],
        correctAnswers: { 1: "езжу" },
        wrongFeedback: {
            "ездит": "Verbo giusto, ma soggetto «я» → 1ª pers. sg.: езжу (forma irregolare!), non ездит.",
            "еду": "«Обычно» — non guida mai in città per abitudine, non un caso specifico → ездить."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Обычно ты {{1}} на трамвае?",
        words: ["ездит", "едешь", "ездишь"],
        correctAnswers: { 1: "ездишь" },
        wrongFeedback: {
            "ездит": "Verbo giusto, ma soggetto «ты» → 2ª pers. sg., non 3ª sg.",
            "едешь": "«Обычно» — si chiede un'abitudine regolare, non un viaggio specifico → ездить."
        }
    },
];

// ============================================================
// PANEL 5 — DragDrop · student · Спряжение ЕХАТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "Машина сломалась, вот я {{1}} на метро!",
        words: ["едет", "езжу", "еду"],
        correctAnswers: { 1: "еду" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "Ты только сейчас {{1}} в супермаркет?!",
        words: ["едешь", "еду", "ездишь"],
        correctAnswers: { 1: "едешь" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "Она {{1}} в Верону на поезде — сейчас уже в поезде.",
        words: ["едем", "едет", "ездит"],
        correctAnswers: { 1: "едет" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "Он после обеда {{1}} в ИКЕА.",
        words: ["едут", "ездит", "едет"],
        correctAnswers: { 1: "едет" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "Мы на выходные {{1}} к родителям.",
        words: ["едут", "едем", "ездим"],
        correctAnswers: { 1: "едем" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "Куда вы {{1}} в отпуск в этом году?",
        words: ["едете", "едем", "ездите"],
        correctAnswers: { 1: "едете" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "В субботу они {{1}} к бабушке на электричке.",
        words: ["едем", "ездят", "едут"],
        correctAnswers: { 1: "едут" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "На работу {{1}} на метро или на велике — зависит от погоды.",
        words: ["едет", "еду", "езжу"],
        correctAnswers: { 1: "еду" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "— Куда в этом году? — Как обычно, {{1}} на Бали на пару месяцев.",
        words: ["едут", "ездим", "едем"],
        correctAnswers: { 1: "едем" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ.",
        text: "Женя уже {{1}} за мной.",
        words: ["едет", "едешь", "ездит"],
        correctAnswers: { 1: "едет" }
    }
];

// ============================================================
// PANEL 6 — DragDrop · paid · Спряжение ЕЗДИТЬ
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Я обычно на машине в городе не {{1}} — постоянно пробки!",
        words: ["ездит", "езжу", "еду"],
        correctAnswers: { 1: "езжу" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Как часто ты {{1}} в гости к бабушке?",
        words: ["ездишь", "ездит", "едешь"],
        correctAnswers: { 1: "ездишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Каждое утро он {{1}} на работу на велосипеде.",
        words: ["ездим", "ездит", "едет"],
        correctAnswers: { 1: "ездит" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Лена {{1}} только на такси — не любит метро.",
        words: ["едет", "ездим", "ездит"],
        correctAnswers: { 1: "ездит" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Мы {{1}} к родителям на машине каждые выходные.",
        words: ["ездим", "ездят", "едем"],
        correctAnswers: { 1: "ездим" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Вы часто {{1}} на дачу в выходные?",
        words: ["ездим", "едете", "ездите"],
        correctAnswers: { 1: "ездите" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Они всегда {{1}} на велосипедах в воскресенье.",
        words: ["ездит", "ездят", "едут"],
        correctAnswers: { 1: "ездят" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Я редко {{1}} на такси — дорого!",
        words: ["езжу", "ездит", "еду"],
        correctAnswers: { 1: "езжу" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Катя {{1}} к нам раз в месяц — всегда с подарками.",
        words: ["едет", "ездишь", "ездит"],
        correctAnswers: { 1: "ездит" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Мы обычно {{1}} на дачу, на шашлыки.",
        words: ["ездят", "ездим", "едем"],
        correctAnswers: { 1: "ездим" }
    }
];

// ============================================================
// PANEL 2 — Flashcard · public · Mix ехать + ездить
// ============================================================
const p2cards = [
    { front: "Мы на выходные едем к родителям.",         back: "Мы ездим к родителям на машине каждые выходные.",       explanation: "Cerca il segnale: «на выходные» = viaggio specifico → ехать. Il suo contrario abituale è «каждые выходные» → ездить." },
    { front: "Куда вы в этом году едете в отпуск?",      back: "Вы каждый год ездите в отпуск на Сардинию?",           explanation: "«В этом году» = questo viaggio → ехать. Il contrario abituale usa «каждый год» → ездить. Il segnale temporale cambia tutto." },
    { front: "Сейчас я еду на работу на метро.",          back: "Я обычно на машине в городе не езжу — постоянно пробки!", explanation: "«Сейчас» = adesso, in questo momento → ехать. Il contrario abituale usa «обычно» → ездить." },
    { front: "В субботу мы едем в горы!",                 back: "Мне нравится ездить в горы.",                          explanation: "«В субботу» = viaggio pianificato → ехать. Il contrario è «нравится ездить»: infinito per un'azione ripetuta → ездить." },
    { front: "Машина сломалась, вот я еду на метро!",     back: "Ненавижу ездить на метро — там постоянно толпа!",      explanation: "La macchina è rotta: viaggio forzato adesso → ехать. Il contrario è «ненавижу ездить»: infinito per un'attitudine abituale → ездить." },
];

// ============================================================
// PANEL 7 — Flashcard · student · Mix ехать + ездить
// ============================================================
const p7cards = [
    { front: "Я еду в супермаркет за вином.",                              back: "Мы ездим в супермаркет по субботам." },
    { front: "На работу еду на метро или на велике — смотря какая погода.", back: "Я никогда не езжу на работу на велике." },
    { front: "Завтра утром я еду кататься на велике с друзьями.",           back: "Каждое утро мы ездим на велосипедах по парку." },
    { front: "Она едет в Верону на поезде — сейчас уже в поезде.",         back: "Она всегда ездит в Верону на поезде." },
    { front: "На выходные мы едем на шашлыки!",                            back: "На выходные мы обычно ездим на дачу." },
];

// ============================================================
// PANEL 8 — Flashcard · paid · Mix ехать + ездить
// ============================================================
const p8cards = [
    { front: "Машина сломалась, вот я еду на метро!",              back: "Ненавижу ездить на метро — там постоянно толпа!" },
    { front: "Она едет в Верону на поезде — сейчас уже в поезде.", back: "Она всегда ездит в Верону на поезде." },
    { front: "Утром она едет к родителям.",                        back: "Как часто ты ездишь в гости к бабушке?" },
    { front: "Он после обеда едет в ИКЕА.",                        back: "Обычно мы ездим в ИКЕА, чтобы забрать мебель." },
    { front: "Женя уже едет за мной.",                             back: "Мне очень нравится ездить на самокате." },
];

// ============================================================
// PANEL 3 — Flashcard · public · Mix ехать + ездить + идти + ходить
// ============================================================
const p3cards = [
    { front: "Дети сами на автобусе",              back: "ездят в бассейн",                          explanation: "«Сами» = i bambini lo fanno regolarmente → ездить, non ехать. «На автобусе» = trasporto → ездить, non ходить." },
    { front: "Лена",                               back: "идёт в библиотеку",                        explanation: "Direzione precisa, azione in corso → идти, non ходить. Nessun mezzo di trasporto → идти, non ехать." },
    { front: "В понедельник мы за город к родителям", back: "едем",                                  explanation: "«В понедельник» = viaggio specifico → ехать, non ездить. «За город» = distanza implica trasporto → ехать, non идти." },
    { front: "По пятницам они вместе",             back: "ходят в спортзал",                         explanation: "«По пятницам» = abitudine settimanale → ходить, non идти. Nessun mezzo di trasporto → ходить, non ездить." },
    { front: "Они взяли такси и",                  back: "едут на вокзал",                           explanation: "«Взяли такси» = azione già avviata, viaggio in corso → ехать, non ездить. «Такси» = trasporto → ехать, non идти." },
    { front: "Тихо — учитель уже",                 back: "идёт!",                                    explanation: "«Уже» = movimento diretto percepibile adesso → идти, non ходить. Nessun mezzo → идти, non ехать." },
    { front: "Раз в полгода он в Рим к дедушке —", back: "ездит",                                   explanation: "«Раз в полгода» = frequenza → ездить, non ехать. Roma è lontana, si usa trasporto → ездить, non ходить." },
    { front: "По утрам Андрей",                    back: "ходит на йогу",                            explanation: "«По утрам» = abitudine quotidiana → ходить, non идти. Nessun mezzo di trasporto → ходить, non ездить." },
    { front: "Не нужно на лифте",                  back: "ехать, он все время застревает",           explanation: "«На лифте» = trasporto → ехать, non идти. «Не нужно» + infinito → forma base del verbo di moto con mezzo." },
    { front: "В пятницу мы на дачу к друзьям",     back: "едем",                                     explanation: "«В пятницу» = viaggio specifico pianificato → ехать, non ездить. La dacia è fuori città → ехать, non идти." },
];

// ============================================================
// PANEL 9 — Flashcard · student · Mix ехать + ездить + идти + ходить
// ============================================================
const p9cards = [
    { front: "По выходным он на велосипеде",  back: "ездит в парк" },
    { front: "Завтра утром она",              back: "идёт к врачу" },
    { front: "Сегодня вечером мы на поезде",  back: "едем в Москву" },
    { front: "По средам Нина",                back: "ходит на курсы итальянского" },
    { front: "Каждые каникулы она на автобусе", back: "ездит к родителям" },
    { front: "Уже завтра он на такси",        back: "едет в аэропорт" },
    { front: "Смотри — Вася уже",             back: "идёт сюда!" },
    { front: "Два раза в год они",            back: "ездят к морю" },
    { front: "Иногда по вечерам они",         back: "ходят гулять в парк" },
    { front: "В воскресенье они",             back: "едут к бабушке в деревню" },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Mix ехать + ездить + идти + ходить
// ============================================================
const p10cards = [
    { front: "По воскресеньям они всегда на великах", back: "ездят кататься в парк" },
    { front: "Сегодня вечером они",                   back: "идут к Рудневым" },
    { front: "Сейчас я на метро",                     back: "еду на работу" },
    { front: "Нина по вторникам",                     back: "ходит на курсы итальянского" },
    { front: "Ты же на машине на работу",             back: "ездишь?" },
    { front: "В понедельник я к врачу",               back: "иду" },
    { front: "Ты часто на трамвае",                   back: "ездишь?" },
    { front: "Вы каждые выходные в этот ресторан",   back: "ходите?" },
    { front: "Она в Верону на поезде",                back: "едет?" },
    { front: "Куда вы в отпуск",                      back: "едете?" },
];

// ============================================================
// PANEL 4 — Mixed Quiz · public
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-mezzo-04');
    if (!panel) return;

    const container = panel.querySelector('#mezzo-04-cards-container');
    const prevBtn   = panel.querySelector('#mezzo-04-deck-prev');
    const nextBtn   = panel.querySelector('#mezzo-04-deck-next');
    const counterEl = panel.querySelector('#mezzo-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Сейчас я ___ на работу на метро.",               options: ["еду", "езжу", "едет"],         answer: "еду" },
        { question: "По понедельникам Катя ___ на йогу.",             options: ["ходит", "идёт"],               answer: "ходит" },
        { question: "Обычно ты ___ на трамвае?",                      options: ["ездишь", "едешь"],             answer: "ездишь" },
        { question: "Сегодня вечером мы ___ в ресторан.",             options: ["идём", "ходим"],               answer: "идём" },
        { question: "Я редко ___ в аптеку.",                          options: ["хожу", "иду"],                 answer: "хожу" },
        { question: "Мы на выходные ___ к родителям.",                options: ["едем", "ездим"],               answer: "едем" },
        { question: "Завтра бабушка ___ к врачу.",                    options: ["идёт", "ходит"],               answer: "идёт" },
        { question: "Мне нравится ___ в горы.",                       options: ["ездить", "ехать"],             answer: "ездить" },
        { question: "Ненавижу ___ на групповые экскурсии!",           options: ["ходить", "идти"],              answer: "ходить" },
        { question: "Они всегда ___ на велосипедах в воскресенье.",   options: ["ездят", "едут"],               answer: "ездят" },
    ];

    const matchPairs = [
        { left: "Утром она",                right: "едет к родителям" },
        { left: "Бабушка каждую неделю",    right: "ходит к врачу" },
        { left: "Машина сломалась, вот я",  right: "еду на метро!" },
        { left: "Лена обычно",              right: "ходит на работу пешком" },
        { left: "Ты же на машине",          right: "ездишь на работу" },
        { left: "Сегодня Лена",             right: "идёт на работу пешком" },
        { left: "Наш сын научился",         right: "ездить на велосипеде" },
        { left: "В субботу вечером они",    right: "идут на свадьбу к другу" },
        { left: "Как часто ты",             right: "ездишь в гости к бабушке?" },
        { left: "Андрей по утрам",          right: "ходит на йогу" },
    ];

    const quizData = [
        { id: "mezzo-001", promptPrefix: "Ненавижу",                          promptSuffix: "на метро — там постоянно толпа!", answers: ["ездить"] },
        { id: "mezzo-002", promptPrefix: "По пятницам они",                   promptSuffix: "в кино.",                        answers: ["ходят"] },
        { id: "mezzo-003", promptPrefix: "На работу",                         promptSuffix: "на метро или на велике.",         answers: ["еду"] },
        { id: "mezzo-004", promptPrefix: "Ты опять",                          promptSuffix: "в салон красоты?!",               answers: ["идёшь"] },
        { id: "mezzo-005", promptPrefix: "Я обычно на машине в городе не",    promptSuffix: ".",                               answers: ["езжу"] },
        { id: "mezzo-006", promptPrefix: "Мне нравится",                      promptSuffix: "на работу пешком.",               answers: ["ходить"] },
        { id: "mezzo-007", promptPrefix: "Как обычно,",                       promptSuffix: "на Бали на пару месяцев.",        answers: ["едем"] },
        { id: "mezzo-008", promptPrefix: "Она",                               promptSuffix: "по берегу моря и слушает звуки его волн.", answers: ["идёт"] },
        { id: "mezzo-009", promptPrefix: "Она любит",                         promptSuffix: "на рынок.",                       answers: ["ходить"] },
        { id: "mezzo-010", promptPrefix: "Я",                                 promptSuffix: "в супермаркет за вином.",         answers: ["еду"] },
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ');
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
            card.className = 'fca01-card-container mezzo-04-card';
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
        container.querySelectorAll('.mezzo-04-card').forEach(card => {
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
                const card    = this.closest('.mezzo-04-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === ans);
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
        container.querySelectorAll('.mezzo-04-card').forEach((c, i) => {
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
    'panel-mezzo-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mezzo-01',    exercises: p1exercises }),
    'panel-mezzo-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mezzo-05',    exercises: p5exercises }),
    'panel-mezzo-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mezzo-06',    exercises: p6exercises }),
    'panel-mezzo-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mezzo-02', cards: p2cards }),
    'panel-mezzo-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mezzo-07', cards: p7cards }),
    'panel-mezzo-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mezzo-08', cards: p8cards }),
    'panel-mezzo-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mezzo-03', cards: p3cards }),
    'panel-mezzo-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mezzo-09', cards: p9cards }),
    'panel-mezzo-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mezzo-10', cards: p10cards }),
    'panel-mezzo-04':  () => initPanel4()
};

initPanelManager({ initializers, enableAccessControl: false });
