import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Куда ты идёшь? Мы обычно ходим...
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Она {{1}} гулять три раза в день.",
        words: ["ходит", "идёт", "идут"],
        correctAnswers: { 1: "ходит" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Когда она {{1}} гулять, она звонит подруге.",
        words: ["идёт", "ходит", "ходят"],
        correctAnswers: { 1: "идёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты {{1}} в банк? — Да, уже {{2}}!",
        words: ["идёшь", "ходишь", "иду", "хожу"],
        correctAnswers: { 1: "идёшь", 2: "иду" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я редко {{1}} в аптеку.",
        words: ["хожу", "иду", "идёт"],
        correctAnswers: { 1: "хожу" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты {{1}} смотреть кино сегодня вечером?",
        words: ["идёшь", "ходишь", "идут"],
        correctAnswers: { 1: "идёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты же знаешь, я не {{1}} в кинотеатры.",
        words: ["хожу", "иду", "идёт"],
        correctAnswers: { 1: "хожу" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты опять {{1}} в салон красоты?!",
        words: ["идёшь", "ходишь", "ходят"],
        correctAnswers: { 1: "идёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мне нравится {{1}} на работу пешком.",
        words: ["ходить", "идти", "ходит"],
        correctAnswers: { 1: "ходить" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Она любит {{1}} на рынок.",
        words: ["ходить", "идти", "ходит"],
        correctAnswers: { 1: "ходить" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ненавижу {{1}} на групповые экскурсии!",
        words: ["ходить", "идти", "идёт"],
        correctAnswers: { 1: "ходить" }
    },
];

// ============================================================
// PANEL 5 — DragDrop · public · Я хожу по магазинам / Она идет за покупками
// ============================================================
const p5exercises = [
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Сегодня вечером мы {{1}} в кино, а вы {{2}} куда-нибудь?",
        words: ["идём", "идёте", "иду", "идёт"],
        correctAnswers: { 1: "идём", 2: "идёте" }
    },
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Ты куда {{1}}? Я {{2}} в гости к Кате, у неё день рождения сегодня.",
        words: ["идёшь", "иду", "идёт", "идём"],
        correctAnswers: { 1: "идёшь", 2: "иду" }
    },
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Она {{1}} по берегу моря и слушает звуки его волн.",
        words: ["идёт", "иду", "идёшь", "идём"],
        correctAnswers: { 1: "идёт" }
    },
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Я {{1}} в магазин, тебе купить что-нибудь?",
        words: ["иду", "идёт", "идёшь", "идём"],
        correctAnswers: { 1: "иду" }
    },
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Вы {{1}} в понедельник на презентацию нашего проекта?",
        words: ["идёте", "иду", "идёшь", "идёт"],
        correctAnswers: { 1: "идёте" }
    },
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Они {{1}} в субботу вечером на день рождения к родителям.",
        words: ["идут", "иду", "идёт", "идём"],
        correctAnswers: { 1: "идут" }
    },
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Ты куда {{1}}? {{2}} в спортзал, опаздываю.",
        words: ["идёшь", "иду", "идёт", "идём"],
        correctAnswers: { 1: "идёшь", 2: "иду" }
    },
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Вы {{1}} с нами к Андрею сегодня? А Рудневы {{2}}? Да, они {{3}}. Ну тогда и мы {{4}}.",
        words: ["идёте", "идут", "идут", "идём", "иду", "идёшь"],
        correctAnswers: { 1: "идёте", 2: "идут", 3: "идут", 4: "идём" }
    },
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Ты {{1}} сегодня вечером на концерт? Нет, я не {{2}}, но Лена {{3}}.",
        words: ["идёшь", "иду", "идёт", "идём"],
        correctAnswers: { 1: "идёшь", 2: "иду", 3: "идёт" }
    },
    {
        instruction: "Completa la frase con la forma corretta del verbo ИДТИ (Ходить vs Идти)",
        text: "Ты {{1}} или нет?!",
        words: ["идёшь", "иду", "идёт", "идём"],
        correctAnswers: { 1: "идёшь" }
    }
];

// ============================================================
// PANEL 6 — DragDrop · paid · Спряжение ходить
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Я редко {{1}} в аптеку, не люблю лекарства.",
        words: ["хожу", "ходишь", "ходит"],
        correctAnswers: { 1: "хожу" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Ты {{1}} в магазин как на работу!",
        words: ["ходишь", "хожу", "ходят"],
        correctAnswers: { 1: "ходишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Бабушка {{1}} к врачу каждую неделю.",
        words: ["ходит", "хожу", "ходим"],
        correctAnswers: { 1: "ходит" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Мы обычно {{1}} завтракать в бар рядом с домом.",
        words: ["ходим", "ходите", "ходят"],
        correctAnswers: { 1: "ходим" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Вы часто сюда {{1}}?",
        words: ["ходите", "ходим", "ходят"],
        correctAnswers: { 1: "ходите" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Они {{1}} в одни и те же рестораны.",
        words: ["ходят", "ходим", "ходите"],
        correctAnswers: { 1: "ходят" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Я {{1}} на рынок по воскресеньям.",
        words: ["хожу", "ходит", "ходим"],
        correctAnswers: { 1: "хожу" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Куда ты {{1}} каждый вечер, тебя дома не застать?",
        words: ["ходишь", "хожу", "ходят"],
        correctAnswers: { 1: "ходишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Лена {{1}} только на распродажи.",
        words: ["ходит", "хожу", "ходишь"],
        correctAnswers: { 1: "ходит" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ.",
        text: "Мы {{1}} в спортзал вместе по пятницам.",
        words: ["ходим", "ходите", "ходят"],
        correctAnswers: { 1: "ходим" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Нам нравится",                        back: "много ходить" },
    { front: "Мы всегда по воскресеньям",           back: "ходим на рынок" },
    { front: "Ты часто",                            back: "ходишь в спортзал?" },
    { front: "Если я",                              back: "иду на работу пешком" },
    { front: "Мы",                                  back: "идём гулять в парк или в центр" },
    { front: "Хорошая погода или плохая — Женя",    back: "идёт на улицу" },
    { front: "По пятницам вы",                      back: "ходите в спортзал" },
    { front: "Сейчас он",                           back: "идёт в банк" },
    { front: "Ты куда",                             back: "идёшь?" },
    { front: "Зачем так много",                     back: "ходить в спортзал?" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Ты же ненавидишь",       back: "ходить к стоматологам!" },
    { front: "Анна ненавидит",         back: "ходить" },
    { front: "Лена предпочитает",      back: "ходить в спортзал" },
    { front: "Ты ходишь в магазин",    back: "как на работу!" },
    { front: "Я",                      back: "хожу в спортзал" },
    { front: "Мы",                     back: "идём к Кате смотреть фильм" },
    { front: "Куда вы",                back: "идёте в субботу вечером?" },
    { front: "Сегодня вечером она",    back: "идёт на лекцию по истории искусства" },
    { front: "Когда я иду в гости",    back: "всегда покупаю что-нибудь к чаю" },
    { front: "Ходить пешком",          back: "очень полезно" },
];

// ============================================================
// PANEL 7 — Flashcard · student
// ============================================================
const p7cards = [
    { front: "Андрею очень нравится",      back: "ходить пешком" },
    { front: "Сегодня вечером мы",         back: "идём в кино" },
    { front: "Ты же обычно по понедельникам", back: "ходишь в спортзал" },
    { front: "Сейчас я",                   back: "иду в гости к Кате" },
    { front: "По пятницам мы",             back: "ходим в спортзал" },
    { front: "В субботу они",              back: "идут на день рождения к родителям" },
    { front: "Он очень любит",             back: "ходить пешком" },
    { front: "Завтра вечером вы",          back: "идёте куда-нибудь" },
    { front: "Анна редко",                 back: "ходит пешком" },
    { front: "Женя",                       back: "идёт на улицу" },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Мы по утрам всегда",              back: "ходим на пробежку" },
    { front: "Женя",                            back: "идёт на улицу" },
    { front: "Я уже час",                       back: "хожу по магазинам" },
    { front: "Когда на улице солнце, мы",       back: "всегда идём на пляж" },
    { front: "Андрей",                          back: "ходит на работу пешком" },
    { front: "Прямо сейчас они",               back: "идут в спортзал" },
    { front: "Вы каждые выходные",             back: "ходите в этот ресторан?" },
    { front: "Иду",                             back: "Катю встречать" },
    { front: "Тимур практически никогда не",   back: "ходит пешком" },
    { front: "Они часто",                       back: "ходят в лес за грибами" },
];

// ============================================================
// PANEL 9 — Flashcard · student
// ============================================================
const p9cards = [
    { front: "Мне не нравится",         back: "ходить за продуктами" },
    { front: "Если регулярно",          back: "ходить на танцы — меняется всё" },
    { front: "Мы с Катей договорились", back: "вместе ходить по пятницам" },
    { front: "Ты что каждый день",      back: "ходишь в бассейн?" },
    { front: "Я уже пять лет",          back: "хожу на рынок к одной и той же женщине" },
    { front: "Идёшь на обед? — Да",     back: "иду с коллегами пообедать" },
    { front: "Женю не заставить",       back: "ни ходить пешком, ни ездить на велосипеде" },
    { front: "Андрей",                  back: "ходит на работу пешком" },
    { front: "Мы",                      back: "идём на рынок, покупать липовый мед" },
    { front: "Когда она идёт в библиотеку", back: "всегда заходит к бабушке на чай" },
];

// ============================================================
// PANEL 10 — Flashcard · paid
// ============================================================
const p10cards = [
    { front: "Мне нравится",                            back: "ходить пешком" },
    { front: "Ходить на танцы",                         back: "гораздо полезнее" },
    { front: "Из бассейна",                             back: "иду" },
    { front: "Я же не просто",                          back: "хожу по гипермаркету!" },
    { front: "Тимур практически никогда не",            back: "ходит пешком" },
    { front: "Женя",                                    back: "идёт на улицу" },
    { front: "Зачем так много",                         back: "ходить в спортзал?" },
    { front: "В какую сторону",                         back: "ты идёшь?" },
    { front: "Обычно она в кино",                       back: "не ходит" },
    { front: "Когда мы собираемся с друзьями, мы всегда", back: "идём гулять в центр" },
];


// ============================================================
// PANEL 4 — Mixed Quiz · public
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-acc-open-4');
    if (!panel) return;

    const container = panel.querySelector('#plur-04-cards-container');
    const prevBtn   = panel.querySelector('#plur-04-deck-prev');
    const nextBtn   = panel.querySelector('#plur-04-deck-next');
    const counterEl = panel.querySelector('#plur-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Нам нравится много ___ пешком.",                       options: ["ходить", "идти", "ездить"],  answer: "ходить" },
        { question: "Ты ___ в банк? — Да, уже иду!",                       options: ["идёшь", "ходишь", "идут"],   answer: "идёшь" },
        { question: "Мне нравится ___ на работу пешком.",                   options: ["ходить", "идти", "ездить"],  answer: "ходить" },
        { question: "Мы ___ гулять в парк или в центр.",                    options: ["идём", "ходим", "идут"],     answer: "идём" },
        { question: "Тимур практически никогда не ___ пешком.",             options: ["ходит", "идёт", "ходят"],    answer: "ходит" },
        { question: "Завтра Катя ___ в кино со своим новым парнем.",        options: ["идёт", "ходит", "идут"],     answer: "идёт" },
        { question: "По пятницам вы ___ в спортзал.",                       options: ["ходите", "идёте", "ходят"],  answer: "ходите" },
        { question: "Женя ___ на улицу — погода неважна.",                  options: ["идёт", "ходит", "идут"],     answer: "идёт" },
        { question: "Ты же ненавидишь ___ к стоматологам!",                options: ["ходить", "идти", "ездить"],  answer: "ходить" },
        { question: "Когда она ___ в библиотеку, всегда заходит к бабушке.", options: ["идёт", "ходит", "идут"],   answer: "идёт" },
    ];

    const matchPairs = [
        { left: "Мне нравится",             right: "ходить на работу пешком" },
        { left: "Женя",                     right: "идёт на улицу" },
        { left: "Анна ненавидит",           right: "ходить" },
        { left: "Мы",                       right: "идём гулять в парк или в центр" },
        { left: "Ты часто",                 right: "ходишь в спортзал?" },
        { left: "Иду",                      right: "Катю встречать" },
        { left: "Андрею очень нравится",    right: "ходить пешком" },
        { left: "В субботу они",            right: "идут на день рождения к родителям" },
        { left: "Боюсь",                    right: "ходить к стоматологу" },
        { left: "Куда вы",                  right: "идёте в субботу вечером?" },
    ];

    const quizData = [
        { id: "plur-001", promptPrefix: "Андрей",                       promptSuffix: "на работу пешком.",                              answers: ["ходит"] },
        { id: "plur-002", promptPrefix: "Я",                            promptSuffix: "в спортзал.",                                     answers: ["хожу"] },
        { id: "plur-003", promptPrefix: "Зачем так много",              promptSuffix: "в спортзал?",                                     answers: ["ходить"] },
        { id: "plur-004", promptPrefix: "Тимур практически никогда не", promptSuffix: "пешком.",                                         answers: ["ходит"] },
        { id: "plur-005", promptPrefix: "Нам нравится много",           promptSuffix: ".",                                               answers: ["ходить"] },
        { id: "plur-006", promptPrefix: "Если я",                       promptSuffix: "на работу пешком, я трачу калории.",              answers: ["иду"] },
        { id: "plur-007", promptPrefix: "Женю не заставить ни",         promptSuffix: "пешком, ни ездить на велосипеде.",                answers: ["ходить"] },
        { id: "plur-008", promptPrefix: "Когда я",                      promptSuffix: "в гости, всегда покупаю что-нибудь к чаю.",      answers: ["иду"] },
        { id: "plur-009", promptPrefix: "Анна редко",                   promptSuffix: "пешком.",                                         answers: ["ходит"] },
        { id: "plur-010", promptPrefix: "Мы",                           promptSuffix: "гулять в парк или в центр.",                     answers: ["идём"] },
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
        title.textContent = `Exercise ${index + 1} of ${TOTAL_CARDS}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container plur-04-card';
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
                        feedbackEl.textContent = "\u2728 \u041e\u0442\u043b\u0438\u0447\u043d\u043e!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "\ud83c\udf89 \u041f\u041e\u0411\u0415\u0414\u0410! \ud83c\udf89";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "\u041d\u0435\u0432\u0435\u0440\u043d\u043e";
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
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c</button></div>
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
        container.querySelectorAll('.plur-04-card').forEach(card => {
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
                const card    = this.closest('.plur-04-card');
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
                    fb.textContent = '\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e!';
                    fb.className   = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = '\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.';
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
        container.querySelectorAll('.plur-04-card').forEach((c, i) => {
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
    'panel-acc-open-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-plur-01',    exercises: p1exercises }),
    'panel-acc-open-5':  () => new DragDropExercise({ rootId: 'ex-dragdrop-plur-05',    exercises: p5exercises }),
    'panel-acc-open-6':  () => new DragDropExercise({ rootId: 'ex-dragdrop-plur-06',    exercises: p6exercises }),
    'panel-acc-open-2':  () => new FlashcardExercise({ rootId: 'ex-flashcards-plur-02', cards: p2cards }),
    'panel-acc-open-3':  () => new FlashcardExercise({ rootId: 'ex-flashcards-plur-03', cards: p3cards }),
    'panel-acc-open-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-plur-07', cards: p7cards }),
    'panel-acc-open-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-plur-08', cards: p8cards }),
    'panel-acc-open-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-plur-09', cards: p9cards }),
    'panel-acc-open-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-plur-10', cards: p10cards }),
    'panel-acc-open-4':  () => initPanel4()
};

initPanelManager({ initializers, enableAccessControl: false });
