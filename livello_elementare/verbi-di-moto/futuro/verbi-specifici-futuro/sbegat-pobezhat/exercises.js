import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix сбегать vs побежать
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Я быстро {{1}} за кофе и вернусь.",
        words: ["сбегаю", "побегу", "сбегает"],
        correctAnswers: { 1: "сбегаю" }
        // сбегаю = commissione veloce A/R di corsa
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Он {{1}} на тренировку сразу после работы.",
        words: ["побежит", "сбегает", "побегу"],
        correctAnswers: { 1: "побежит" }
        // побежит = partenza di corsa in una direzione
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Мы {{1}} за билетами и скоро вернёмся.",
        words: ["сбегаем", "побежим", "сбегает"],
        correctAnswers: { 1: "сбегаем" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Она {{1}} к финишу первой.",
        words: ["побежит", "сбегает", "побегу"],
        correctAnswers: { 1: "побежит" }
        // побежит = correre verso la meta
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Они {{1}} в магазин и принесут воды.",
        words: ["сбегают", "побегут", "сбегаем"],
        correctAnswers: { 1: "сбегают" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Ты {{1}} за мячом или нет?",
        words: ["сбегаешь", "побежишь", "сбегает"],
        correctAnswers: { 1: "сбегаешь" }
        // сбегаешь = recuperare di corsa e tornare
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Завтра он {{1}} марафон.",
        words: ["побежит", "сбегает", "побегу"],
        correctAnswers: { 1: "побежит" }
        // побежит = partenza in una gara
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Я {{1}} на почту и обратно — это пять минут.",
        words: ["сбегаю", "побегу", "сбегают"],
        correctAnswers: { 1: "сбегаю" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Лена {{1}} к врачу и вернётся к обеду.",
        words: ["сбегает", "побежит", "сбегаем"],
        correctAnswers: { 1: "сбегает" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "{{1}} за газетой — киоск рядом.",
        words: ["Сбегай", "Побеги", "Сбегаем"],
        correctAnswers: { 1: "Сбегай" }
        // imperativo di сбегать = commissione rapida A/R
    },
];

// ============================================================
// PANEL 5 — DragDrop · student · Solo СБЕГАТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Я {{1}} за хлебом и скоро вернусь.",
        words: ["сбегаю", "сбегаешь", "сбегают"],
        correctAnswers: { 1: "сбегаю" }
    },
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Ты {{1}} за ключами?",
        words: ["сбегаешь", "сбегаю", "сбегаем"],
        correctAnswers: { 1: "сбегаешь" }
    },
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Он {{1}} в аптеку и вернётся через пятнадцать минут.",
        words: ["сбегает", "сбегаю", "сбегают"],
        correctAnswers: { 1: "сбегает" }
    },
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Она {{1}} к подруге за книгой.",
        words: ["сбегает", "сбегаем", "сбегают"],
        correctAnswers: { 1: "сбегает" }
    },
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Мы {{1}} на вокзал и возьмём расписание.",
        words: ["сбегаем", "сбегает", "сбегают"],
        correctAnswers: { 1: "сбегаем" }
    },
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Вы {{1}} за кофе для всех?",
        words: ["сбегаете", "сбегаем", "сбегают"],
        correctAnswers: { 1: "сбегаете" }
    },
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Они {{1}} в магазин и принесут воды.",
        words: ["сбегают", "сбегает", "сбегаем"],
        correctAnswers: { 1: "сбегают" }
    },
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Я {{1}} за мячом — он там, за углом.",
        words: ["сбегаю", "сбегает", "сбегаем"],
        correctAnswers: { 1: "сбегаю" }
    },
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Ты {{1}} на почту за посылкой?",
        words: ["сбегаешь", "сбегает", "сбегаем"],
        correctAnswers: { 1: "сбегаешь" }
    },
    {
        instruction: "Completa con la forma corretta di СБЕГАТЬ.",
        text: "Мы {{1}} за билетами и скоро вернёмся.",
        words: ["сбегаем", "сбегают", "сбегает"],
        correctAnswers: { 1: "сбегаем" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo ПОБЕЖАТЬ
// ============================================================
const p6exercises = [
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Я {{1}} на тренировку в шесть утра.",
        words: ["побегу", "побежишь", "побегут"],
        correctAnswers: { 1: "побегу" }
    },
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Ты {{1}} со мной на пробежку?",
        words: ["побежишь", "побегу", "побежим"],
        correctAnswers: { 1: "побежишь" }
    },
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Он {{1}} к финишу первым.",
        words: ["побежит", "побегу", "побегут"],
        correctAnswers: { 1: "побежит" }
    },
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Она {{1}} к автобусу — он уже отходит.",
        words: ["побежит", "побежим", "побегут"],
        correctAnswers: { 1: "побежит" }
    },
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Мы {{1}} вместе на старт.",
        words: ["побежим", "побежит", "побегут"],
        correctAnswers: { 1: "побежим" }
    },
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Вы {{1}} марафон в эти выходные?",
        words: ["побежите", "побежим", "побегут"],
        correctAnswers: { 1: "побежите" }
    },
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Они {{1}} по стадиону круг за кругом.",
        words: ["побегут", "побежит", "побежим"],
        correctAnswers: { 1: "побегут" }
    },
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Я {{1}} к врачу, мне плохо.",
        words: ["побегу", "побежит", "побежим"],
        correctAnswers: { 1: "побегу" }
    },
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Ты {{1}} первым или подождёшь команды?",
        words: ["побежишь", "побежит", "побежим"],
        correctAnswers: { 1: "побежишь" }
    },
    {
        instruction: "Completa con la forma corretta di ПОБЕЖАТЬ.",
        text: "Мы {{1}} наперегонки до забора.",
        words: ["побежим", "побегут", "побежит"],
        correctAnswers: { 1: "побежим" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Я сбегаю за кофе", back: "и сразу вернусь" },
    { front: "Он побежит на тренировку", back: "сразу после работы" },
    { front: "Мы сбегаем за билетами", back: "и скоро вернёмся" },
    { front: "Она побежит к финишу", back: "первой" },
    { front: "Они сбегают в магазин", back: "и принесут воды" },
    { front: "Ты сбегаешь за мячом?", back: "он там, за углом" },
    { front: "Завтра он побежит", back: "марафон" },
    { front: "Я сбегаю на почту", back: "это пять минут" },
    { front: "Лена сбегает к врачу", back: "и вернётся к обеду" },
    { front: "Сбегай за газетой", back: "киоск рядом" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Сбегает в магазин", back: "commissione di corsa A/R" },
    { front: "Побежит к финишу", back: "partenza di corsa in una direzione" },
    { front: "Я сбегаю за хлебом", back: "andare e tornare di corsa" },
    { front: "Побегу на тренировку", back: "partire di corsa per allenarsi" },
    { front: "Они сбегают вместе", back: "commissione rapida in due" },
    { front: "Сбегай за ключами", back: "imperativo: recupera e torna" },
    { front: "Побежим наперегонки?", back: "correre insieme in gara" },
    { front: "Она сбегает к подруге", back: "via di corsa, torna presto" },
    { front: "Куда ты сбегаешь?", back: "domanda sulla commissione A/R" },
    { front: "Куда ты побежишь?", back: "domanda sulla direzione di corsa" },
];

// ============================================================
// PANEL 7 — Flashcard · student
// ============================================================
const p7cards = [
    { front: "Я сбегаю за хлебом", back: "булочная за углом, скоро вернусь" },
    { front: "Он сбегает в аптеку", back: "и вернётся через четверть часа" },
    { front: "Мы сбегаем за билетами", back: "касса открыта" },
    { front: "Ты сбегаешь за ключами?", back: "я жду у выхода" },
    { front: "Они сбегают за едой", back: "заказали на вынос" },
    { front: "Сбегай за мячом", back: "он укатился туда" },
    { front: "Она сбегает за документами", back: "и вернётся через минуту" },
    { front: "Вы сбегаете за кофе?", back: "для всех" },
    { front: "Сбегаем вместе?", back: "предложение: commissione in due" },
    { front: "Он сбегает и расскажет", back: "что там происходит" },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Побегу на тренировку", back: "в шесть утра" },
    { front: "Побеги к врачу", back: "это срочно" },
    { front: "Он побежит к финишу", back: "с максимальной скоростью" },
    { front: "Мы побежим вместе на старт", back: "после сигнала" },
    { front: "Она побежит к автобусу", back: "он уже отходит" },
    { front: "Ты побежишь со мной?", back: "на утреннюю пробежку" },
    { front: "Они побегут марафон", back: "в воскресенье" },
    { front: "Побежим наперегонки", back: "до того дерева" },
    { front: "Вы побежите первыми?", back: "или подождёте команды?" },
    { front: "Побеги скорее", back: "не опоздай на поезд" },
];

// ============================================================
// PANEL 9 — Flashcard · student
// ============================================================
const p9cards = [
    { front: "Сбегаю и вернусь", back: "сбегать = commissione rapida A/R" },
    { front: "Побегу вперёд", back: "побежать = partenza di corsa" },
    { front: "Они сбегают в магазин", back: "torneranno subito" },
    { front: "Ты побежишь завтра?", back: "на пробежку?" },
    { front: "Мы сбегаем вместе", back: "за билетами и обратно" },
    { front: "Побеги, пока не поздно", back: "imperativo urgente di побежать" },
    { front: "Она сбегает за ключами", back: "e tornerà" },
    { front: "Он побежит час", back: "потом душ и завтрак" },
    { front: "Куда ты сбегаешь?", back: "domanda sulla commissione A/R" },
    { front: "Куда ты побежишь?", back: "domanda sulla direzione di corsa" },
];

// ============================================================
// PANEL 10 — Flashcard · paid
// ============================================================
const p10cards = [
    { front: "Сбегаем за пиццей?", back: "предложение: commissione veloce in due" },
    { front: "Побежим вместе?", back: "предложение: correre insieme" },
    { front: "Она сбегает за зонтом", back: "veloce, andata e ritorno" },
    { front: "Он побежит и не остановится", back: "partenza di corsa senza fermarsi" },
    { front: "Сбегай за справкой", back: "imperativo: vai e torna" },
    { front: "Побеги скорее", back: "imperativo urgente: corri!" },
    { front: "Я сбегаю туда и обратно", back: "нужно взять папку" },
    { front: "Я побегу для здоровья", back: "corsa mattutina" },
    { front: "Сбегают по очереди", back: "a turno A/R" },
    { front: "Побегут и вернутся позже", back: "lunghissima corsa" },
];


// ============================================================
// PANEL 4 — Mixed Quiz · public
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-fut-sb-04');
    if (!panel) return;

    const container = panel.querySelector('#fut-sb-04-cards-container');
    const prevBtn   = panel.querySelector('#fut-sb-04-deck-prev');
    const nextBtn   = panel.querySelector('#fut-sb-04-deck-next');
    const counterEl = panel.querySelector('#fut-sb-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Я быстро ___ за кофе и вернусь.", options: ["сбегаю", "побегу", "сбегает"], answer: "сбегаю" },
        { question: "Он ___ на тренировку сразу после работы.", options: ["побежит", "сбегает", "побегу"], answer: "побежит" },
        { question: "Мы ___ за билетами и скоро вернёмся.", options: ["сбегаем", "побежим", "сбегает"], answer: "сбегаем" },
        { question: "Она ___ к финишу первой.", options: ["побежит", "сбегает", "побегу"], answer: "побежит" },
        { question: "Они ___ в магазин и принесут воды.", options: ["сбегают", "побегут", "сбегаем"], answer: "сбегают" },
        { question: "Ты ___ за мячом или нет?", options: ["сбегаешь", "побежишь", "сбегает"], answer: "сбегаешь" },
        { question: "Завтра он ___ марафон.", options: ["побежит", "сбегает", "побегу"], answer: "побежит" },
        { question: "Я ___ на почту и обратно — пять минут.", options: ["сбегаю", "побегу", "сбегают"], answer: "сбегаю" },
        { question: "Лена ___ к врачу и вернётся к обеду.", options: ["сбегает", "побежит", "сбегаем"], answer: "сбегает" },
        { question: "___ за газетой — киоск рядом.", options: ["Сбегай", "Побеги", "Сбегаем"], answer: "Сбегай" },
    ];

    const matchPairs = [
        { left: "Я сбегаю за кофе", right: "и сразу вернусь" },
        { left: "Он побежит на тренировку", right: "сразу после работы" },
        { left: "Мы сбегаем за билетами", right: "и скоро вернёмся" },
        { left: "Она побежит к финишу", right: "первой" },
        { left: "Они сбегают в магазин", right: "и принесут воды" },
        { left: "Ты сбегаешь за мячом", right: "он там, за углом" },
        { left: "Завтра он побежит", right: "марафон" },
        { left: "Я сбегаю на почту", right: "это пять минут" },
        { left: "Лена сбегает к врачу", right: "и вернётся к обеду" },
        { left: "Сбегай за газетой", right: "киоск рядом" },
    ];

    const quizData = [
        { id: "fut-sb-001", promptPrefix: "Я быстро", promptSuffix: "за кофе и вернусь.", answers: ["сбегаю"] },
        { id: "fut-sb-002", promptPrefix: "Он", promptSuffix: "на тренировку после работы.", answers: ["побежит"] },
        { id: "fut-sb-003", promptPrefix: "Мы", promptSuffix: "за билетами и скоро вернёмся.", answers: ["сбегаем"] },
        { id: "fut-sb-004", promptPrefix: "Она", promptSuffix: "к финишу первой.", answers: ["побежит"] },
        { id: "fut-sb-005", promptPrefix: "Они", promptSuffix: "в магазин и принесут воды.", answers: ["сбегают"] },
        { id: "fut-sb-006", promptPrefix: "Ты", promptSuffix: "за мячом или нет?", answers: ["сбегаешь"] },
        { id: "fut-sb-007", promptPrefix: "Завтра он", promptSuffix: "марафон.", answers: ["побежит"] },
        { id: "fut-sb-008", promptPrefix: "Я", promptSuffix: "на почту и обратно — пять минут.", answers: ["сбегаю"] },
        { id: "fut-sb-009", promptPrefix: "Лена", promptSuffix: "к врачу и вернётся к обеду.", answers: ["сбегает"] },
        { id: "fut-sb-010", promptPrefix: "", promptSuffix: "за газетой — киоск рядом.", answers: ["Сбегай"] },
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    function normalizeInput(str) { return str.trim().replace(/\s+/g, ' '); }

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
            card.className = 'fca01-card-container fut-sb-04-card';
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
                    if (!selectedMatchCard) { selectedMatchCard = clickedCard; clickedCard.classList.add('selected'); return; }
                    if (selectedMatchCard.dataset.type === clickedCard.dataset.type) {
                        selectedMatchCard.classList.remove('selected'); selectedMatchCard = clickedCard; clickedCard.classList.add('selected'); return;
                    }
                    const firstId = selectedMatchCard.dataset.id;
                    const secondId = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;
                    if (firstId === secondId) {
                        previousCard.classList.add('matched'); clickedCard.classList.add('matched');
                        feedbackEl.textContent = '✨ Отлично!'; feedbackEl.className = 'fca01-match-feedback correct';
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ''; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = '🎉 ПОБЕДА! 🎉';
                    } else {
                        isProcessingMatch = true; clickedCard.classList.add('wrong'); previousCard.classList.add('wrong');
                        feedbackEl.textContent = 'Неверно'; feedbackEl.className = 'fca01-match-feedback wrong';
                        setTimeout(() => { clickedCard.classList.remove('selected', 'wrong'); previousCard.classList.remove('selected', 'wrong'); feedbackEl.textContent = ''; isProcessingMatch = false; }, 800);
                        selectedMatchCard = null;
                    }
                }
                function createMatchElement(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card'; div.textContent = item.text;
                    div.dataset.id = item.id; div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatchClick(div)); return div;
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
                    <p class="quiz-instruction">Scrivi la forma corretta del futuro</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix} <input type="text" class="quiz-input" data-index="${i - MATCH_END}"> ${item.promptSuffix}</div>
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">VERIFICA</button></div>
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
        container.querySelectorAll('.fut-sb-04-card').forEach(card => {
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
                    emptyGap.textContent = word; emptyGap.classList.add('filled');
                    emptyGap.dataset.word = word; emptyGap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });
            gapElements.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const wordIndex = this.dataset.wordIndex;
                    const wordElement = wordElements.find(w => w.dataset.index === wordIndex);
                    this.textContent = ''; this.classList.remove('filled');
                    delete this.dataset.word; delete this.dataset.wordIndex;
                    if (wordElement) wordElement.classList.remove('used');
                });
            });
            if (nextBtn) nextBtn.addEventListener('click', () => showCard(currentCard + 1));
            verifyBtn.addEventListener('click', function() {
                checked = true;
                const correctAnswer = multipleChoiceData[cardIndex].answer;
                let correct = 0;
                gapElements.forEach(gap => {
                    if (gap.dataset.word === correctAnswer) { gap.classList.remove('filled'); gap.classList.add('correct'); correct = 1; }
                    else { gap.classList.add('incorrect'); }
                });
                feedback.textContent = `Corretto: ${correct} / 1`;
                verifyBtn.style.display = 'none'; nextBtn.style.display = 'inline-block';
            });
        });
        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.fut-sb-04-card');
                const idx = parseInt(card.dataset.index) - MATCH_END;
                const item = quizData[idx];
                const input = card.querySelector('.quiz-input');
                const fb = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect = item.answers.some(ans => userAnswer === ans);
                if (isCorrect) {
                    input.classList.remove('incorrect'); input.classList.add('correct');
                    input.disabled = true; this.disabled = true;
                    fb.textContent = 'Правильно!'; fb.className = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct'); input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.'; fb.className = 'quiz-feedback incorrect';
                }
            });
        });
        container.querySelectorAll('.quiz-input').forEach(input => {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') { const btn = this.closest('.quiz-item').querySelector('.quiz-check-btn'); if (btn && !btn.disabled) btn.click(); }
            });
        });
    }

    function showCard(idx) {
        currentCard = idx;
        container.querySelectorAll('.fut-sb-04-card').forEach((c, i) => { c.classList.toggle('visible', i === idx); c.hidden = (i !== idx); });
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
    'panel-fut-sb-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-sb-01',    exercises: p1exercises }),
    'panel-fut-sb-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-sb-05',    exercises: p5exercises }),
    'panel-fut-sb-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-sb-06',    exercises: p6exercises }),
    'panel-fut-sb-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sb-02', cards: p2cards }),
    'panel-fut-sb-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sb-03', cards: p3cards }),
    'panel-fut-sb-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sb-07', cards: p7cards }),
    'panel-fut-sb-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sb-08', cards: p8cards }),
    'panel-fut-sb-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sb-09', cards: p9cards }),
    'panel-fut-sb-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sb-10', cards: p10cards }),
    'panel-fut-sb-04':  () => initPanel4(),
};

initPanelManager({ initializers, enableAccessControl: true });
