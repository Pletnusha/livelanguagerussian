import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix шёл/шла/шли vs ходил/ходила/ходили
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Вчера вечером она {{1}} в кино с подругой.",
        words: ["ходила", "шла", "ходил"],
        correctAnswers: { 1: "ходила" }
        // ходила = andata e tornata (viaggio completato)
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Я {{1}} по парку, когда начался дождь.",
        words: ["шёл", "ходил", "шли"],
        correctAnswers: { 1: "шёл" }
        // шёл = в движении в конкретный момент
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Раньше мы каждое воскресенье {{1}} на рынок.",
        words: ["ходили", "шли", "шёл"],
        correctAnswers: { 1: "ходили" }
        // ходили = abitudine passata
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Они {{1}} к нам со стороны парка, когда мы их увидели.",
        words: ["шли", "ходили", "шла"],
        correctAnswers: { 1: "шли" }
        // шли = in movimento in quel momento
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Лена {{1}} на йогу каждое утро в прошлом году.",
        words: ["ходила", "шла", "ходил"],
        correctAnswers: { 1: "ходила" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Он {{1}} молча, ничего не говоря.",
        words: ["шёл", "ходил", "шла"],
        correctAnswers: { 1: "шёл" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Ты {{1}} вчера к врачу?",
        words: ["ходил", "шёл", "шла"],
        correctAnswers: { 1: "ходил" }
        // ходил = andata e ritorno completata
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Мы {{1}} по берегу моря и разговаривали.",
        words: ["шли", "ходили", "шёл"],
        correctAnswers: { 1: "шли" }
        // шли = in movimento direzionale
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "В детстве я часто {{1}} к бабушке.",
        words: ["ходил", "шёл", "шли"],
        correctAnswers: { 1: "ходил" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Она {{1}} в магазин и вдруг вспомнила, что забыла деньги.",
        words: ["шла", "ходила", "шли"],
        correctAnswers: { 1: "шла" }
        // шла = in movimento in quel momento
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Solo ИДТИ passato (шёл / шла / шло / шли)
// ============================================================
const p5exercises = [
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Я {{1}} в библиотеку, когда встретил Катю.",
        words: ["шёл", "шла", "шли"],
        correctAnswers: { 1: "шёл" }
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Она {{1}} по улице и улыбалась.",
        words: ["шла", "шёл", "шли"],
        correctAnswers: { 1: "шла" }
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Мы {{1}} домой после концерта пешком.",
        words: ["шли", "шёл", "шла"],
        correctAnswers: { 1: "шли" }
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Время {{1}} медленно.",
        words: ["шло", "шёл", "шли"],
        correctAnswers: { 1: "шло" }
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Он {{1}} к выходу, не оглядываясь.",
        words: ["шёл", "шла", "шли"],
        correctAnswers: { 1: "шёл" }
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Она {{1}} в магазин, когда я её заметил.",
        words: ["шла", "шёл", "шли"],
        correctAnswers: { 1: "шла" }
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Они {{1}} на вечеринку вместе.",
        words: ["шли", "шёл", "шла"],
        correctAnswers: { 1: "шли" }
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Собрание {{1}} уже два часа.",
        words: ["шло", "шёл", "шли"],
        correctAnswers: { 1: "шло" }
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Дождь {{1}} всю ночь.",
        words: ["шёл", "шла", "шли"],
        correctAnswers: { 1: "шёл" }
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Они уже {{1}}, когда мы их позвали.",
        words: ["шли", "шёл", "шла"],
        correctAnswers: { 1: "шли" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo ХОДИТЬ passato (ходил / ходила / ходило / ходили)
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Раньше он {{1}} в спортзал три раза в неделю.",
        words: ["ходил", "ходила", "ходили"],
        correctAnswers: { 1: "ходил" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Она всегда {{1}} на рынок по субботам.",
        words: ["ходила", "ходил", "ходили"],
        correctAnswers: { 1: "ходила" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "В детстве мы часто {{1}} к бабушке.",
        words: ["ходили", "ходил", "ходила"],
        correctAnswers: { 1: "ходили" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Он никогда не {{1}} к врачу.",
        words: ["ходил", "ходила", "ходили"],
        correctAnswers: { 1: "ходил" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Лена {{1}} на танцы каждую неделю.",
        words: ["ходила", "ходил", "ходили"],
        correctAnswers: { 1: "ходила" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Они {{1}} в один и тот же ресторан каждую пятницу.",
        words: ["ходили", "ходил", "ходила"],
        correctAnswers: { 1: "ходили" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Я {{1}} в театр ещё ребёнком.",
        words: ["ходил", "ходила", "ходили"],
        correctAnswers: { 1: "ходил" }
        // TODO: адаптировать под пол студента
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Бабушка {{1}} к врачу каждую неделю.",
        words: ["ходила", "ходил", "ходили"],
        correctAnswers: { 1: "ходила" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Дети {{1}} в школу пешком.",
        words: ["ходили", "ходил", "ходила"],
        correctAnswers: { 1: "ходили" }
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Он {{1}} на работу каждый день в одно и то же время.",
        words: ["ходил", "ходила", "ходили"],
        correctAnswers: { 1: "ходил" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Вчера вечером он", back: "ходил в кино" },
    { front: "Она шла по улице", back: "и думала о нём" },
    { front: "В детстве мы", back: "часто ходили к бабушке" },
    { front: "Когда он шёл домой", back: "встретил старого друга" },
    { front: "Мы шли по парку", back: "когда начался дождь" },
    { front: "Лена каждую неделю", back: "ходила на танцы" },
    { front: "Они шли молча", back: "не глядя друг на друга" },
    { front: "Раньше она никогда не", back: "ходила к стоматологу" },
    { front: "Я шёл домой после работы", back: "когда позвонил телефон" },
    { front: "Каждое лето мы", back: "ходили на море" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Она шла в магазин", back: "и вдруг вспомнила, что нет денег" },
    { front: "Раньше он", back: "ходил в спортзал три раза в неделю" },
    { front: "Мы шли по берегу моря", back: "и разговаривали" },
    { front: "В прошлом году она", back: "ходила на йогу каждое утро" },
    { front: "Он шёл к выходу", back: "не оглядываясь" },
    { front: "Дети каждый день", back: "ходили в школу пешком" },
    { front: "Дождь", back: "шёл всю ночь" },
    { front: "Они шли на вечеринку", back: "вместе" },
    { front: "Бабушка каждую неделю", back: "ходила к врачу" },
    { front: "Время", back: "шло медленно" },
];

// ============================================================
// PANEL 7 — Flashcard · student
// ============================================================
const p7cards = [
    { front: "Я шёл по центру города", back: "когда увидел её" },
    { front: "Она ходила на курсы русского языка", back: "три года" },
    { front: "Когда они шли к остановке", back: "пошёл снег" },
    { front: "Он ходил в библиотеку", back: "каждые выходные" },
    { front: "Мы шли через парк", back: "потому что так быстрее" },
    { front: "Лена ходила к подруге", back: "почти каждый вечер" },
    { front: "Они долго шли", back: "не зная куда идут" },
    { front: "Раньше я ходил в бассейн", back: "но потом бросил" },
    { front: "Она шла и пела", back: "под нос какую-то песню" },
    { front: "Мы ходили в этот кинотеатр", back: "ещё студентами" },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Пока она шла домой", back: "начался сильный дождь" },
    { front: "Он ходил к Кате", back: "почти каждый день" },
    { front: "Мы шли так долго", back: "что устали" },
    { front: "Она ходила на рынок", back: "как на работу" },
    { front: "Когда я шёл через парк", back: "было очень тихо" },
    { front: "В студенчестве они", back: "ходили в один и тот же бар" },
    { front: "Он шёл первым", back: "остальные — за ним" },
    { front: "Она никогда не ходила", back: "на такие мероприятия" },
    { front: "Мы шли пешком", back: "потому что метро не работало" },
    { front: "Раньше он ходил домой", back: "через этот переулок" },
];

// ============================================================
// PANEL 9 — Flashcard · student
// ============================================================
const p9cards = [
    { front: "Вчера она ходила к врачу", back: "и узнала хорошие новости" },
    { front: "Он шёл так быстро", back: "что я не успевал" },
    { front: "Мы часто ходили гулять", back: "в старый квартал" },
    { front: "Пока он шёл к машине", back: "вспомнил, что ключи дома" },
    { front: "Она ходила в школу", back: "через этот сквер" },
    { front: "Они шли к нам", back: "со стороны реки" },
    { front: "В детстве он ходил", back: "на рисование и плавание" },
    { front: "Она шла очень медленно", back: "потому что болела нога" },
    { front: "Мы ходили в кино", back: "каждое воскресенье" },
    { front: "Он шёл и думал", back: "что скажет ей" },
];

// ============================================================
// PANEL 10 — Flashcard · paid
// ============================================================
const p10cards = [
    { front: "Она шла по набережной", back: "и смотрела на закат" },
    { front: "Раньше он ходил за продуктами", back: "только в этот магазин" },
    { front: "Они шли долго", back: "почти два часа" },
    { front: "Она ходила на работу пешком", back: "даже зимой" },
    { front: "Мы шли по лесу", back: "и слушали птиц" },
    { front: "Он ходил к ней", back: "много лет" },
    { front: "Пока они шли", back: "успели поговорить обо всём" },
    { front: "Она ходила в этот театр", back: "с самого детства" },
    { front: "Он шёл не торопясь", back: "наслаждаясь тишиной" },
    { front: "Мы ходили на рынок", back: "каждую субботу утром" },
];


// ============================================================
// PANEL 4 — Mixed Quiz · public
// 0-(MC_END-1):         multiple choice
// MC_END-(MATCH_END-1): match game
// MATCH_END onwards:    text input (write-in)
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-past-ix-04');
    if (!panel) return;

    const container = panel.querySelector('#past-ix-04-cards-container');
    const prevBtn   = panel.querySelector('#past-ix-04-deck-prev');
    const nextBtn   = panel.querySelector('#past-ix-04-deck-next');
    const counterEl = panel.querySelector('#past-ix-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Вчера вечером она ___ в кино.", options: ["ходила", "шла", "ходил"], answer: "ходила" },
        { question: "Он ___ по улице и вдруг остановился.", options: ["шёл", "ходил", "шли"], answer: "шёл" },
        { question: "Раньше мы каждое воскресенье ___ на рынок.", options: ["ходили", "шли", "шёл"], answer: "ходили" },
        { question: "Она ___ в магазин, когда её увидели.", options: ["шла", "ходила", "шли"], answer: "шла" },
        { question: "Дождь ___ всю ночь.", options: ["шёл", "ходил", "шли"], answer: "шёл" },
        { question: "В детстве он часто ___ к бабушке.", options: ["ходил", "шёл", "шли"], answer: "ходил" },
        { question: "Они ___ к нам со стороны парка.", options: ["шли", "ходили", "шёл"], answer: "шли" },
        { question: "Лена ___ на йогу каждое утро в прошлом году.", options: ["ходила", "шла", "ходил"], answer: "ходила" },
        { question: "Время ___ медленно.", options: ["шло", "ходило", "шёл"], answer: "шло" },
        { question: "Мы ___ по берегу моря и разговаривали.", options: ["шли", "ходили", "шёл"], answer: "шли" },
    ];

    const matchPairs = [
        { left: "Вчера вечером он", right: "ходил в кино" },
        { left: "Она шла по улице", right: "и думала о нём" },
        { left: "В детстве мы", right: "часто ходили к бабушке" },
        { left: "Дождь", right: "шёл всю ночь" },
        { left: "Они шли молча", right: "не глядя друг на друга" },
        { left: "Лена каждую неделю", right: "ходила на танцы" },
        { left: "Он шёл домой", right: "когда позвонил телефон" },
        { left: "Время", right: "шло медленно" },
        { left: "Мы шли по парку", right: "когда начался дождь" },
        { left: "Раньше она", right: "ходила к стоматологу раз в год" },
    ];

    const quizData = [
        { id: "past-ix-001", promptPrefix: "Она", promptSuffix: "по улице и думала о работе.", answers: ["шла"] },
        { id: "past-ix-002", promptPrefix: "Раньше он каждое утро", promptSuffix: "на пробежку.", answers: ["ходил"] },
        { id: "past-ix-003", promptPrefix: "Мы", promptSuffix: "домой, когда нас застал дождь.", answers: ["шли"] },
        { id: "past-ix-004", promptPrefix: "В детстве она", promptSuffix: "на танцы каждую субботу.", answers: ["ходила"] },
        { id: "past-ix-005", promptPrefix: "Дождь", promptSuffix: "всю ночь.", answers: ["шёл"] },
        { id: "past-ix-006", promptPrefix: "Они", promptSuffix: "к нам вместе.", answers: ["шли"] },
        { id: "past-ix-007", promptPrefix: "Он никогда не", promptSuffix: "к врачу.", answers: ["ходил"] },
        { id: "past-ix-008", promptPrefix: "Она", promptSuffix: "в магазин и забыла кошелёк.", answers: ["шла", "ходила"] },
        { id: "past-ix-009", promptPrefix: "Время", promptSuffix: "быстро.", answers: ["шло"] },
        { id: "past-ix-010", promptPrefix: "Каждое лето мы", promptSuffix: "на море.", answers: ["ходили"] },
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
            card.className = 'fca01-card-container past-ix-04-card';
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
                    const firstId  = selectedMatchCard.dataset.id;
                    const secondId = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;
                    if (firstId === secondId) {
                        previousCard.classList.add('matched');
                        clickedCard.classList.add('matched');
                        feedbackEl.textContent = '✨ Отлично!';
                        feedbackEl.className = 'fca01-match-feedback correct';
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ''; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = '🎉 ПОБЕДА! 🎉';
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = 'Неверно';
                        feedbackEl.className = 'fca01-match-feedback wrong';
                        setTimeout(() => {
                            clickedCard.classList.remove('selected', 'wrong');
                            previousCard.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = '';
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
                    <h3 class="quiz-title">Scrivi</h3>
                    <p class="quiz-instruction">Scrivete la forma corretta del passato</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix} <input type="text" class="quiz-input" data-index="${i - MATCH_END}"> ${item.promptSuffix}</div>
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
        container.querySelectorAll('.past-ix-04-card').forEach(card => {
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
                const card       = this.closest('.past-ix-04-card');
                const idx        = parseInt(card.dataset.index) - MATCH_END;
                const item       = quizData[idx];
                const input      = card.querySelector('.quiz-input');
                const fb         = card.querySelector('.quiz-feedback');
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
        container.querySelectorAll('.past-ix-04-card').forEach((c, i) => {
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
    'panel-past-ix-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ix-01',    exercises: p1exercises }),
    'panel-past-ix-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ix-05',    exercises: p5exercises }),
    'panel-past-ix-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ix-06',    exercises: p6exercises }),
    'panel-past-ix-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ix-02', cards: p2cards }),
    'panel-past-ix-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ix-03', cards: p3cards }),
    'panel-past-ix-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ix-07', cards: p7cards }),
    'panel-past-ix-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ix-08', cards: p8cards }),
    'panel-past-ix-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ix-09', cards: p9cards }),
    'panel-past-ix-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ix-10', cards: p10cards }),
    'panel-past-ix-04':  () => initPanel4(),
};

initPanelManager({ initializers, enableAccessControl: false });
