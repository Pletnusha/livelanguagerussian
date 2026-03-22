import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Misto (ехать + ездить)
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Сейчас я {{1}} на работу на метро.",
        words: ["еду", "езжу", "едет"],
        correctAnswers: { 1: "еду" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "На работу она {{1}} на машине.",
        words: ["ездит", "едет", "ездишь"],
        correctAnswers: { 1: "ездит" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Ему нравится {{1}} на велике.",
        words: ["ездить", "ехать", "ездит"],
        correctAnswers: { 1: "ездить" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "По выходным он обычно {{1}} кататься в парк.",
        words: ["ездит", "едет", "ездишь"],
        correctAnswers: { 1: "ездит" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Зимой он {{1}} на лыжах два-три раза в неделю.",
        words: ["ездит", "едет", "ездят"],
        correctAnswers: { 1: "ездит" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "На эту сумму можно {{1}} в Мексику два раза в год!",
        words: ["ездить", "ехать", "ездит"],
        correctAnswers: { 1: "ездить" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Мы {{1}} каждые выходные.",
        words: ["ездим", "едем", "ездят"],
        correctAnswers: { 1: "ездим" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Мне до офиса {{1}} 25 минут.",
        words: ["ехать", "ездить", "едет"],
        correctAnswers: { 1: "ехать" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Ненавижу {{1}} на метро — там постоянно толпа!",
        words: ["ездить", "ехать", "ездит"],
        correctAnswers: { 1: "ездить" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Мне очень нравится {{1}} на самокате.",
        words: ["ездить", "ехать", "ездит"],
        correctAnswers: { 1: "ездить" }
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Ехать (viaggio specifico)
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Сейчас она {{1}} в аэропорт на такси.",
        words: ["едет", "ездит", "едут"],
        correctAnswers: { 1: "едет" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Завтра утром мы {{1}} на море на машине.",
        words: ["едем", "ездим", "едет"],
        correctAnswers: { 1: "едем" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Ты сегодня {{1}} на работу на метро?",
        words: ["едешь", "ездишь", "едет"],
        correctAnswers: { 1: "едешь" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "В эту субботу они {{1}} к бабушке на электричке.",
        words: ["едут", "ездят", "едем"],
        correctAnswers: { 1: "едут" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Я прямо сейчас {{1}} домой на автобусе.",
        words: ["еду", "езжу", "едет"],
        correctAnswers: { 1: "еду" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Вы завтра {{1}} на конференцию на поезде?",
        words: ["едете", "ездите", "едем"],
        correctAnswers: { 1: "едете" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "В понедельник он {{1}} в Рим на машине.",
        words: ["едет", "ездит", "едут"],
        correctAnswers: { 1: "едет" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Мы сейчас {{1}} по шоссе.",
        words: ["едем", "ездим", "едут"],
        correctAnswers: { 1: "едем" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Она сегодня вечером {{1}} к подруге на такси.",
        words: ["едет", "ездит", "едем"],
        correctAnswers: { 1: "едет" }
    }
];

// ============================================================
// PANEL 6 — DragDrop · paid · Спряжение ЕЗДИТЬ
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Я каждый день {{1}} на работу на метро.",
        words: ["еду", "езжу", "ездит"],
        correctAnswers: { 1: "езжу" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Ты часто {{1}} в центр на велосипеде?",
        words: ["едешь", "ездишь", "ездит"],
        correctAnswers: { 1: "ездишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Она всегда {{1}} на работу на автобусе.",
        words: ["едет", "ездит", "ездишь"],
        correctAnswers: { 1: "ездит" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Мы обычно {{1}} на дачу на машине.",
        words: ["едем", "ездим", "ездят"],
        correctAnswers: { 1: "ездим" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Вы всегда {{1}} домой на метро?",
        words: ["едете", "ездите", "ездим"],
        correctAnswers: { 1: "ездите" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Они каждое лето {{1}} на море на поезде.",
        words: ["едут", "ездят", "ездим"],
        correctAnswers: { 1: "ездят" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Раз в месяц он {{1}} к бабушке на электричке.",
        words: ["едет", "ездит", "езжу"],
        correctAnswers: { 1: "ездит" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "По воскресеньям я {{1}} на рынок на велосипеде.",
        words: ["еду", "езжу", "ездит"],
        correctAnswers: { 1: "езжу" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "Мы иногда {{1}} в соседний город на поезде.",
        words: ["едем", "ездим", "едут"],
        correctAnswers: { 1: "ездим" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ.",
        text: "По субботам они {{1}} на рынок на велосипедах.",
        words: ["едут", "ездят", "ездим"],
        correctAnswers: { 1: "ездят" }
    }
];

// ============================================================
// PANEL 2 — Flashcard · public · Mix panel 5 + panel 6
// ============================================================
const p2cards = [
    { front: "Каждый день я",           back: "езжу на работу на метро" },
    { front: "Как часто ты",            back: "ездишь в горы?" },
    { front: "На работу она",           back: "ездит на машине" },
    { front: "Мы",                      back: "ездим каждые выходные" },
    { front: "Зимой они",               back: "ездят на лыжах два-три раза в неделю" },
    { front: "Сейчас я",                back: "еду на работу на метро" },
    { front: "Ты",                      back: "едешь с нами на озеро?" },
    { front: "Сегодня она",             back: "едет в Верону на поезде" },
    { front: "Мы на выходные",          back: "едем к родителям" },
    { front: "Они",                     back: "едут в парк кататься на великах" },
];

// ============================================================
// PANEL 7 — Flashcard · paid · Mix panel 5 + panel 6 (остатки)
// ============================================================
const p7cards = [
    { front: "Ему",                    back: "нравится ездить на велике" },
    { front: "Раз в месяц он",         back: "ездит к бабушке на электричке" },
    { front: "Она",                    back: "едет в Верону на поезде" },
    { front: "Тимур предпочитает",     back: "ездить на велосипеде" },
    { front: "Мне до офиса",           back: "ехать 25 минут" },
    { front: "В понедельник он",       back: "едет в Рим на машине" },
    { front: "Ты только сейчас",       back: "едешь в супермаркет?!" },
    { front: "Мы на выходные",         back: "едем к родителям" },
    { front: "На работу",              back: "еду на метро или на велике" },
    { front: "Моя дочь боится",        back: "ездить на велосипеде" },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Сейчас я",            back: "еду на работу на метро" },
    { front: "По выходным он",      back: "обычно ездит кататься в парк" },
    { front: "Зимой он",            back: "ездит на лыжах два-три раза в неделю" },
    { front: "Мне нравится",        back: "ездить в горы" },
    { front: "На работу она",       back: "ездит на машине" },
    { front: "На чём она",          back: "едет в Москву?" },
    { front: "Ненавижу",            back: "ездить на метро" },
    { front: "На эту сумму можно",  back: "ездить в Мексику два раза в год!" },
    { front: "Во сколько они",      back: "едут в парк кататься на великах?" },
    { front: "Ты",                  back: "едешь с нами на озеро в выходные?" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Летом он",               back: "ездит на самокате или на роликах" },
    { front: "Не хочешь ходить —",     back: "можешь ездить на велике" },
    { front: "Мы",                     back: "ездим каждые выходные" },
    { front: "Тимур предпочитает",     back: "ездить на велосипеде" },
    { front: "Мне до офиса",           back: "ехать 25 минут" },
    { front: "Я сейчас в поезде,",     back: "еду к маме" },
    { front: "Мне очень нравится",     back: "ездить на самокате" },
    { front: "Мы на выходные",         back: "едем к родителям" },
    { front: "В понедельник он",       back: "едет в Рим на машине" },
    { front: "Ты",                     back: "едешь с нами?" },
];

// ============================================================
// PANEL 9 — Flashcard · paid · Mix panel 8 + panel 3
// ============================================================
const p9cards = [
    { front: "По выходным он",      back: "обычно ездит кататься в парк" },
    { front: "Мы на выходные",      back: "едем к родителям" },
    { front: "На работу она",       back: "ездит на машине" },
    { front: "Сегодня она",         back: "едет в Верону на поезде" },
    { front: "На чём она",          back: "едет в Москву?" },
    { front: "Ненавижу",            back: "ездить на метро" },
    { front: "На эту сумму можно",  back: "ездить в Мексику два раза в год!" },
    { front: "Ему",                 back: "нравится ездить на велике" },
    { front: "Наш сын научился",    back: "ездить на велосипеде" },
    { front: "Ты",                  back: "едешь с нами на озеро в выходные?" },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Mix panel 8 + panel 3 (остатки)
// ============================================================
const p10cards = [
    { front: "Зимой он",            back: "ездит на лыжах два-три раза в неделю" },
    { front: "Мне до офиса",        back: "ехать 25 минут" },
    { front: "Не хочешь ходить —",  back: "можешь ездить на велике" },
    { front: "Ты только сейчас",    back: "едешь в супермаркет?!" },
    { front: "Тимур предпочитает",  back: "ездить на велосипеде" },
    { front: "Мы",                  back: "ездим каждые выходные" },
    { front: "Она",                 back: "едет в Верону на поезде" },
    { front: "На работу",           back: "еду на метро или на велике" },
    { front: "Во сколько они",      back: "едут в парк кататься на великах?" },
    { front: "Мой сын любит",       back: "ездить на поездах" },
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
        { question: "Мне нравится ___ в горы.",                       options: ["ездить", "ехать", "едем"],      answer: "ездить" },
        { question: "Наш сын научился ___ на велосипеде.",            options: ["ездить", "ехать", "ездит"],     answer: "ездить" },
        { question: "Сейчас я ___ на работу на метро.",               options: ["еду", "езжу", "едет"],          answer: "еду" },
        { question: "Она ___ в Верону на поезде?",                    options: ["едет", "ездит", "едут"],        answer: "едет" },
        { question: "Обычно ты ___ на трамвае?",                      options: ["ездишь", "едешь", "ездит"],     answer: "ездишь" },
        { question: "Мы на выходные ___ к родителям.",                options: ["едем", "ездим", "едут"],        answer: "едем" },
        { question: "На чём она ___ в Москву?",                       options: ["едет", "ездит", "едем"],        answer: "едет" },
        { question: "Вы всегда ___ домой на метро?",                  options: ["ездите", "едете", "ездим"],     answer: "ездите" },
        { question: "Куда вы ___ в отпуск в этом году?",             options: ["едете", "ездите", "едут"],      answer: "едете" },
        { question: "Ты ___ с нами на озеро в выходные?",             options: ["едешь", "ездишь", "едет"],      answer: "едешь" },
    ];

    const matchPairs = [
        { left: "Ненавижу",                     right: "ездить на метро — там постоянно толпа!" },
        { left: "Моя дочь боится",              right: "ездить на велосипеде" },
        { left: "Каждый день он",               right: "ездит на велосипеде на работу" },
        { left: "Завтра мы",                    right: "едем к родителям на машине" },
        { left: "Мне до офиса",                 right: "ехать 25 минут" },
        { left: "Летом он",                     right: "ездит на самокате или на роликах" },
        { left: "Тимур предпочитает",           right: "ездить на велосипеде" },
        { left: "Он всегда",                    right: "ездит на работу на велосипеде" },
        { left: "Мы",                           right: "ездим каждые выходные" },
        { left: "На эту сумму можно",           right: "ездить в Мексику два раза в год!" },
    ];

    const quizData = [
        { id: "mezzo-001", promptPrefix: "Мне очень нравится",         promptSuffix: "на самокате.",                             answers: ["ездить"] },
        { id: "mezzo-002", promptPrefix: "Мой сын любит",              promptSuffix: "на поездах.",                              answers: ["ездить"] },
        { id: "mezzo-003", promptPrefix: "Мы",                         promptSuffix: "каждые выходные.",                         answers: ["ездим"] },
        { id: "mezzo-004", promptPrefix: "Мне до офиса",               promptSuffix: "25 минут.",                                answers: ["ехать"] },
        { id: "mezzo-005", promptPrefix: "Летом он",                   promptSuffix: "на самокате или на роликах.",              answers: ["ездит"] },
        { id: "mezzo-006", promptPrefix: "По выходным он обычно",      promptSuffix: "кататься в парк.",                         answers: ["ездит"] },
        { id: "mezzo-007", promptPrefix: "Зимой он",                   promptSuffix: "на лыжах два-три раза в неделю.",          answers: ["ездит"] },
        { id: "mezzo-008", promptPrefix: "Тимур предпочитает",         promptSuffix: "на велосипеде.",                           answers: ["ездить"] },
        { id: "mezzo-009", promptPrefix: "На эту сумму можно",         promptSuffix: "в Мексику два раза в год!",                answers: ["ездить"] },
        { id: "mezzo-010", promptPrefix: "Не хочешь ходить — можешь", promptSuffix: "на велике.",                               answers: ["ездить"] },
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
