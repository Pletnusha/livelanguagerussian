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
        text: "Обычно ты {{1}} на трамвае?",
        words: ["ездишь", "едешь", "ездит"],
        correctAnswers: { 1: "ездишь" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Он после обеда {{1}} в ИКЕА.",
        words: ["ездит", "едет", "едут"],
        correctAnswers: { 1: "едет" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Мы {{1}} к родителям на машине каждые выходные.",
        words: ["едем", "ездим", "едут"],
        correctAnswers: { 1: "ездим" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Вы {{1}} в отпуск в этом году?",
        words: ["едете", "ездите", "едут"],
        correctAnswers: { 1: "едете" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Они всегда {{1}} на велосипедах в воскресенье.",
        words: ["едут", "ездят", "едет"],
        correctAnswers: { 1: "ездят" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Ты же на машине {{1}} на работу!",
        words: ["ездишь", "едешь", "ездит"],
        correctAnswers: { 1: "ездишь" }
    },
    {
        instruction: "Выбери правильную форму глагола движения с транспортом.",
        text: "Машина сломалась, вот {{1}} на метро!",
        words: ["еду", "езжу", "едет"],
        correctAnswers: { 1: "еду" }
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
    { front: "Я каждый день",        back: "езжу на работу на метро" },
    { front: "Ты часто",             back: "ездишь в центр на велосипеде?" },
    { front: "Сейчас она",           back: "едет в аэропорт на такси" },
    { front: "Она всегда",           back: "ездит на работу на автобусе" },
    { front: "Я прямо сейчас",       back: "еду домой на автобусе" },
    { front: "Завтра утром мы",      back: "едем на море на машине" },
    { front: "Мы обычно",            back: "ездим на дачу на машине" },
    { front: "Ты сегодня",           back: "едешь на работу на метро?" },
    { front: "В эту субботу они",    back: "едут к бабушке на электричке" },
    { front: "Они каждое лето",      back: "ездят на море на поезде" },
];

// ============================================================
// PANEL 7 — Flashcard · paid · Mix panel 5 + panel 6 (остатки)
// ============================================================
const p7cards = [
    { front: "Вы всегда",              back: "ездите домой на метро?" },
    { front: "Раз в месяц он",         back: "ездит к бабушке на электричке" },
    { front: "Вы завтра",              back: "едете на конференцию на поезде?" },
    { front: "По воскресеньям я",      back: "езжу на рынок на велосипеде" },
    { front: "Мы иногда",              back: "ездим в соседний город на поезде" },
    { front: "В понедельник он",       back: "едет в Рим на машине" },
    { front: "По субботам они",        back: "ездят на рынок на велосипедах" },
    { front: "Мы сейчас",              back: "едем по шоссе" },
    { front: "Она сегодня вечером",    back: "едет к подруге на такси" },
    { front: "Катя всегда",            back: "ездит на общественном транспорте" },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Наши друзья никогда не",          back: "ездят на электричках" },
    { front: "Мой брат на следующей неделе",    back: "едет в Люксембург" },
    { front: "Один знакомый никогда не",        back: "ездит в центр на машине" },
    { front: "Наша подруга всегда",             back: "ездит на работу на велосипеде" },
    { front: "Они",                             back: "едут в Питер на поезде в следующий понедельник" },
    { front: "На чём она",                      back: "едет в Москву?" },
    { front: "Мы",                              back: "едем с родителями на их машине?!" },
    { front: "Вы",                              back: "едете на море этим летом?" },
    { front: "Во сколько они",                  back: "едут в парк кататься на великах?" },
    { front: "Ты",                              back: "едешь с нами на озеро в выходные?" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "На чём вы обычно",       back: "ездите за город?" },
    { front: "Куда вы",                back: "едете на выходные?" },
    { front: "Она часто",              back: "ездит в деревню" },
    { front: "Когда он",               back: "едет в командировку?" },
    { front: "Мы",                     back: "едем в отпуск во Францию в этом году" },
    { front: "Я сейчас в поезде,",     back: "еду к маме" },
    { front: "Ты никогда не",          back: "ездишь на общественном транспорте?" },
    { front: "Мы обычно",              back: "ездим в Милан на распродажи" },
    { front: "Я каждый год",           back: "езжу зимовать на Бали" },
    { front: "Ты",                     back: "едешь с нами?" },
];

// ============================================================
// PANEL 9 — Flashcard · paid · Mix panel 8 + panel 3
// ============================================================
const p9cards = [
    { front: "Наши друзья никогда не",       back: "ездят на электричках" },
    { front: "Один знакомый никогда не",     back: "ездит в центр на машине" },
    { front: "Куда вы",                      back: "едете на выходные?" },
    { front: "Когда он",                     back: "едет в командировку?" },
    { front: "На чём она",                   back: "едет в Москву?" },
    { front: "Я сейчас в поезде,",           back: "еду к маме" },
    { front: "Мы обычно",                    back: "ездим в Милан на распродажи" },
    { front: "Вы",                           back: "едете на море этим летом?" },
    { front: "Я каждый год",                 back: "езжу зимовать на Бали" },
    { front: "Ты",                           back: "едешь с нами на озеро в выходные?" },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Mix panel 8 + panel 3 (остатки)
// ============================================================
const p10cards = [
    { front: "Мой брат на следующей неделе",  back: "едет в Люксембург" },
    { front: "На чём вы обычно",              back: "ездите за город?" },
    { front: "Наша подруга всегда",           back: "ездит на работу на велосипеде" },
    { front: "Она часто",                     back: "ездит в деревню" },
    { front: "Они",                           back: "едут в Питер на поезде в следующий понедельник" },
    { front: "Ты никогда не",                 back: "ездишь на общественном транспорте?" },
    { front: "Мы",                            back: "едем с родителями на их машине?!" },
    { front: "Мы",                            back: "едем в отпуск во Францию в этом году" },
    { front: "Во сколько они",                back: "едут в парк кататься на великах?" },
    { front: "Ты",                            back: "едешь с нами?" },
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
        { question: "Сейчас она ___ в аэропорт на такси.",              options: ["едет", "ездит", "едут"],    answer: "едет" },
        { question: "Каждое утро я ___ на работу на метро.",            options: ["еду", "езжу", "ездит"],    answer: "езжу" },
        { question: "Завтра они ___ к бабушке на электричке.",          options: ["ездят", "едут", "едем"],   answer: "едут" },
        { question: "Ты часто ___ в центр на велосипеде?",              options: ["едешь", "ездишь", "ездит"], answer: "ездишь" },
        { question: "Мы в эту субботу ___ на море на машине.",          options: ["ездим", "едем", "едут"],   answer: "едем" },
        { question: "По выходным мы ___ на электричке на дачу.",        options: ["едем", "ездим", "едут"],   answer: "ездим" },
        { question: "Вы завтра ___ на конференцию на поезде?",          options: ["ездите", "едете", "едем"], answer: "едете" },
        { question: "Она всегда ___ на работу на автобусе.",            options: ["едет", "ездит", "ездишь"], answer: "ездит" },
        { question: "Вы всегда ___ домой на метро?",                    options: ["едете", "ездите", "ездим"], answer: "ездите" },
        { question: "Он каждые выходные ___ в парк на велосипеде.",     options: ["едет", "ездит", "едут"],   answer: "ездит" },
    ];

    const matchPairs = [
        { left: "Я каждый день",              right: "езжу на работу на метро" },
        { left: "Наша подруга всегда",         right: "ездит на работу на велосипеде" },
        { left: "В эту субботу она",           right: "едет к подруге на метро" },
        { left: "Она часто",                   right: "ездит в деревню" },
        { left: "Сейчас он",                   right: "едет в аэропорт на такси" },
        { left: "В понедельник он",            right: "едет в Рим на машине" },
        { left: "Мой брат на следующей неделе", right: "едет в Люксембург" },
        { left: "На чём вы обычно",            right: "ездите за город?" },
        { left: "Катя всегда",                 right: "ездит на общественном транспорте" },
        { left: "Сегодня вечером он",          right: "едет к родителям на электричке" },
    ];

    const quizData = [
        { id: "mezzo-001", promptPrefix: "Наши друзья никогда не",   promptSuffix: "на электричках.",                          answers: ["ездят"] },
        { id: "mezzo-002", promptPrefix: "Куда вы",                  promptSuffix: "на выходные?",                             answers: ["едете"] },
        { id: "mezzo-003", promptPrefix: "Когда он",                 promptSuffix: "в командировку?",                          answers: ["едет"] },
        { id: "mezzo-004", promptPrefix: "Мы обычно",                promptSuffix: "в Милан на распродажи.",                   answers: ["ездим"] },
        { id: "mezzo-005", promptPrefix: "Я сейчас в поезде,",       promptSuffix: "к маме.",                                  answers: ["еду"] },
        { id: "mezzo-006", promptPrefix: "Они",                      promptSuffix: "в Питер на поезде в следующий понедельник.", answers: ["едут"] },
        { id: "mezzo-007", promptPrefix: "Ты никогда не",            promptSuffix: "на общественном транспорте?",               answers: ["ездишь"] },
        { id: "mezzo-008", promptPrefix: "Мы",                       promptSuffix: "с родителями на их машине?!",               answers: ["едем"] },
        { id: "mezzo-009", promptPrefix: "Ты",                       promptSuffix: "с нами на озеро в выходные?",               answers: ["едешь"] },
        { id: "mezzo-010", promptPrefix: "Во сколько они",           promptSuffix: "в парк кататься на великах?",               answers: ["едут"] },
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
