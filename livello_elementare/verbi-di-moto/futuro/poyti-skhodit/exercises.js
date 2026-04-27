import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix пойти vs сходить
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Завтра вечером она {{1}} в кино с подругой.",
        words: ["пойдёт", "сходит", "пойдут"],
        correctAnswers: { 1: "пойдёт" }
        // пойдёт = azione futura senza ritorno immediato previsto
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Я быстро {{1}} в аптеку и вернусь.",
        words: ["схожу", "пойду", "сходит"],
        correctAnswers: { 1: "схожу" }
        // схожу = gita rapida con ritorno
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Мы {{1}} на концерт в субботу.",
        words: ["пойдём", "сходим", "пойдёт"],
        correctAnswers: { 1: "пойдём" }
        // пойдём = uscita pianificata senza ritorno immediato
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Он {{1}} за хлебом, это займёт пять минут.",
        words: ["сходит", "пойдёт", "схожу"],
        correctAnswers: { 1: "сходит" }
        // сходит = commissione rapida con ritorno
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Они {{1}} в театр на премьеру.",
        words: ["пойдут", "сходят", "пойдём"],
        correctAnswers: { 1: "пойдут" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Ты {{1}} к врачу сегодня?",
        words: ["сходишь", "пойдёшь", "сходим"],
        correctAnswers: { 1: "сходишь" }
        // сходишь = commissione breve con ritorno
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Завтра я {{1}} работать в новый офис.",
        words: ["пойду", "схожу", "пойдут"],
        correctAnswers: { 1: "пойду" }
        // пойду = azione futura con direzione, senza implicazione di ritorno immediato
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Мы {{1}} в магазин и сразу вернёмся.",
        words: ["сходим", "пойдём", "сходишь"],
        correctAnswers: { 1: "сходим" }
        // сходим = gita breve con ritorno esplicito
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Лена {{1}} на курсы русского языка с сентября.",
        words: ["пойдёт", "сходит", "пойдут"],
        correctAnswers: { 1: "пойдёт" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Сходи {{1}} за газетой, я тебя подожду.",
        words: ["сходи", "пойди", "схожу"],
        correctAnswers: { 1: "сходи" }
        // imperativo di сходить = commissione rapida
    },
];

// ============================================================
// PANEL 5 — DragDrop · student · Solo ПОЙТИ (coniugazione completa)
// ============================================================
const p5exercises = [
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Я {{1}} в университет пешком.",
        words: ["пойду", "пойдёшь", "пойдут"],
        correctAnswers: { 1: "пойду" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Ты {{1}} со мной или останешься дома?",
        words: ["пойдёшь", "пойду", "пойдём"],
        correctAnswers: { 1: "пойдёшь" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Он {{1}} на работу в восемь утра.",
        words: ["пойдёт", "пойду", "пойдут"],
        correctAnswers: { 1: "пойдёт" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Она {{1}} в библиотеку после обеда.",
        words: ["пойдёт", "пойдём", "пойдут"],
        correctAnswers: { 1: "пойдёт" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Мы {{1}} в парк вместе.",
        words: ["пойдём", "пойдёт", "пойдут"],
        correctAnswers: { 1: "пойдём" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Вы {{1}} на выставку в воскресенье?",
        words: ["пойдёте", "пойдём", "пойдут"],
        correctAnswers: { 1: "пойдёте" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Они {{1}} на стадион смотреть матч.",
        words: ["пойдут", "пойдёт", "пойдём"],
        correctAnswers: { 1: "пойдут" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Дождь {{1}} сегодня вечером.",
        words: ["пойдёт", "пойдут", "пойдём"],
        correctAnswers: { 1: "пойдёт" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Ты {{1}} к врачу завтра?",
        words: ["пойдёшь", "пойдёт", "пойдём"],
        correctAnswers: { 1: "пойдёшь" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЙТИ.",
        text: "Мы {{1}} ужинать в ресторан.",
        words: ["пойдём", "пойдут", "пойдёт"],
        correctAnswers: { 1: "пойдём" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo СХОДИТЬ (coniugazione completa)
// ============================================================
const p6exercises = [
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Я {{1}} в аптеку и куплю лекарство.",
        words: ["схожу", "сходишь", "сходят"],
        correctAnswers: { 1: "схожу" }
    },
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Ты {{1}} за молоком? Я жду тебя.",
        words: ["сходишь", "схожу", "сходим"],
        correctAnswers: { 1: "сходишь" }
    },
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Он {{1}} на почту и вернётся через десять минут.",
        words: ["сходит", "схожу", "сходят"],
        correctAnswers: { 1: "сходит" }
    },
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Она {{1}} к соседке и скоро будет.",
        words: ["сходит", "схожу", "сходите"],
        correctAnswers: { 1: "сходит" }
    },
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Мы {{1}} в магазин и сразу вернёмся.",
        words: ["сходим", "сходит", "сходят"],
        correctAnswers: { 1: "сходим" }
    },
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Вы {{1}} за газетой? Я вас подожду.",
        words: ["сходите", "сходим", "сходят"],
        correctAnswers: { 1: "сходите" }
    },
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Они {{1}} в кино и расскажут нам потом.",
        words: ["сходят", "сходим", "сходит"],
        correctAnswers: { 1: "сходят" }
    },
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Я {{1}} за хлебом — это рядом.",
        words: ["схожу", "сходит", "сходим"],
        correctAnswers: { 1: "схожу" }
    },
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Ты {{1}} к врачу сам или тебя проводить?",
        words: ["сходишь", "схожу", "сходят"],
        correctAnswers: { 1: "сходишь" }
    },
    {
        instruction: "Completa con la forma corretta di СХОДИТЬ.",
        text: "Он {{1}} за билетами и вернётся.",
        words: ["сходит", "сходим", "сходишь"],
        correctAnswers: { 1: "сходит" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Завтра вечером она", back: "пойдёт в кино" },
    { front: "Я быстро схожу в аптеку", back: "и сразу вернусь" },
    { front: "Мы пойдём", back: "на концерт в субботу" },
    { front: "Он сходит за хлебом", back: "это займёт пять минут" },
    { front: "Они пойдут", back: "в театр на премьеру" },
    { front: "Ты сходишь к врачу", back: "сегодня?" },
    { front: "Завтра я пойду", back: "работать в новый офис" },
    { front: "Мы сходим в магазин", back: "и сразу вернёмся" },
    { front: "Лена пойдёт", back: "на курсы с сентября" },
    { front: "Сходи за газетой", back: "я тебя подожду" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Пойдёт в театр", back: "событие, возврат не подразумевается сразу" },
    { front: "Сходит в магазин", back: "короткая поездка, возврат подразумевается" },
    { front: "Я пойду учиться", back: "долгосрочное намерение без быстрого возврата" },
    { front: "Схожу за кофе", back: "быстрое дело, скоро вернусь" },
    { front: "Они пойдут гулять", back: "прогулка без конкретного времени возврата" },
    { front: "Сходи к врачу", back: "совет: сделать и вернуться" },
    { front: "Пойдём в ресторан?", back: "предложение совместного выхода" },
    { front: "Она сходит к подруге", back: "зайдёт и вернётся" },
    { front: "Куда ты пойдёшь?", back: "вопрос о будущем направлении" },
    { front: "Куда ты сходишь?", back: "вопрос о краткой вылазке" },
];

// ============================================================
// PANEL 7 — Flashcard · student
// ============================================================
const p7cards = [
    { front: "Я пойду в университет", back: "с понедельника" },
    { front: "Она пойдёт работать", back: "в новую компанию" },
    { front: "Мы пойдём на выставку", back: "в эти выходные" },
    { front: "Он пойдёт к другу", back: "после ужина" },
    { front: "Ты пойдёшь на вечеринку?", back: "я тоже туда собираюсь" },
    { front: "Они пойдут в горы", back: "на следующей неделе" },
    { front: "Дождь пойдёт", back: "завтра вечером" },
    { front: "Вы пойдёте на матч?", back: "билеты ещё есть" },
    { front: "Она пойдёт домой пешком", back: "погода хорошая" },
    { front: "Мы пойдём пораньше", back: "чтобы занять места" },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Схожу в аптеку", back: "нужно купить лекарство" },
    { front: "Сходи за молоком", back: "магазин за углом" },
    { front: "Он сходит на почту", back: "и вернётся через десять минут" },
    { front: "Мы сходим за пиццей", back: "хочешь что-нибудь?" },
    { front: "Она сходит к соседке", back: "вернётся скоро" },
    { front: "Ты сходишь за газетой?", back: "я подожду здесь" },
    { front: "Сходите за кофе", back: "пока я готовлю" },
    { front: "Они сходят в кино", back: "и расскажут нам потом" },
    { front: "Схожу за хлебом", back: "булочная в двух шагах" },
    { front: "Сходи к врачу", back: "это недолго" },
];

// ============================================================
// PANEL 9 — Flashcard · student
// ============================================================
const p9cards = [
    { front: "Завтра пойду на работу", back: "первый рабочий день" },
    { front: "Сейчас схожу за ключами", back: "я их оставил наверху" },
    { front: "Они пойдут на концерт", back: "пойти = выход без немедленного возврата" },
    { front: "Ты сходишь в банк?", back: "это рядом, недолго" },
    { front: "Мы пойдём в отпуск", back: "пойти = начало длительного события" },
    { front: "Схожу узнаю расписание", back: "быстрая задача" },
    { front: "Она пойдёт учиться за рубеж", back: "пойти = отъезд, долгосрочно" },
    { front: "Он сходит к начальнику", back: "поговорит и вернётся" },
    { front: "Вы пойдёте на митинг?", back: "крупное мероприятие, пойти" },
    { front: "Сходи проверь почту", back: "небольшое поручение" },
];

// ============================================================
// PANEL 10 — Flashcard · paid
// ============================================================
const p10cards = [
    { front: "Пойдём гулять после ужина?", back: "предложение: пойти вместе" },
    { front: "Схожу за сигаретами", back: "быстро, скоро вернусь" },
    { front: "Она пойдёт на свидание", back: "важное событие, пойти" },
    { front: "Сходи в библиотеку сдать книги", back: "короткое дело, сходить" },
    { front: "Мы пойдём в поход на три дня", back: "пойти = отъезд, несколько дней" },
    { front: "Он сходит на рынок", back: "за овощами, скоро вернётся" },
    { front: "Пойди сюда", back: "imperativo di пойти: avvicinarsi" },
    { front: "Сходи туда и обратно", back: "imperativo di сходить: andata e ritorno" },
    { front: "Куда пойдёт дождь?", back: "метафорически: дождь пойдёт" },
    { front: "Схожу за зонтом", back: "veloce, ritorno immediato" },
];


// ============================================================
// PANEL 4 — Mixed Quiz · public
// 0-(MC_END-1):         multiple choice
// MC_END-(MATCH_END-1): match game
// MATCH_END onwards:    text input (write-in)
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-fut-ps-04');
    if (!panel) return;

    const container = panel.querySelector('#fut-ps-04-cards-container');
    const prevBtn   = panel.querySelector('#fut-ps-04-deck-prev');
    const nextBtn   = panel.querySelector('#fut-ps-04-deck-next');
    const counterEl = panel.querySelector('#fut-ps-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Завтра вечером она ___ в кино.", options: ["пойдёт", "сходит", "пойдут"], answer: "пойдёт" },
        { question: "Я быстро ___ в аптеку и вернусь.", options: ["схожу", "пойду", "сходит"], answer: "схожу" },
        { question: "Мы ___ на концерт в субботу.", options: ["пойдём", "сходим", "пойдёт"], answer: "пойдём" },
        { question: "Он ___ за хлебом — это пять минут.", options: ["сходит", "пойдёт", "схожу"], answer: "сходит" },
        { question: "Дождь ___ сегодня вечером.", options: ["пойдёт", "сходит", "пойдут"], answer: "пойдёт" },
        { question: "Ты ___ к врачу сегодня?", options: ["сходишь", "пойдёшь", "сходим"], answer: "сходишь" },
        { question: "Они ___ в театр на премьеру.", options: ["пойдут", "сходят", "пойдём"], answer: "пойдут" },
        { question: "Мы ___ в магазин и сразу вернёмся.", options: ["сходим", "пойдём", "сходишь"], answer: "сходим" },
        { question: "Лена ___ на курсы с сентября.", options: ["пойдёт", "сходит", "пойдут"], answer: "пойдёт" },
        { question: "___ за газетой — я подожду.", options: ["Сходи", "Пойди", "Схожу"], answer: "Сходи" },
    ];

    const matchPairs = [
        { left: "Завтра вечером она", right: "пойдёт в кино" },
        { left: "Я быстро схожу в аптеку", right: "и сразу вернусь" },
        { left: "Мы пойдём", right: "на концерт в субботу" },
        { left: "Дождь", right: "пойдёт вечером" },
        { left: "Они пойдут", right: "в театр на премьеру" },
        { left: "Ты сходишь к врачу", right: "сегодня?" },
        { left: "Он сходит за хлебом", right: "это займёт пять минут" },
        { left: "Мы сходим в магазин", right: "и сразу вернёмся" },
        { left: "Лена пойдёт", right: "на курсы с сентября" },
        { left: "Сходи за газетой", right: "я тебя подожду" },
    ];

    const quizData = [
        { id: "fut-ps-001", promptPrefix: "Завтра она", promptSuffix: "в кино с подругой.", answers: ["пойдёт"] },
        { id: "fut-ps-002", promptPrefix: "Я быстро", promptSuffix: "в аптеку и вернусь.", answers: ["схожу"] },
        { id: "fut-ps-003", promptPrefix: "Мы", promptSuffix: "на концерт в субботу.", answers: ["пойдём"] },
        { id: "fut-ps-004", promptPrefix: "Он", promptSuffix: "за хлебом — это пять минут.", answers: ["сходит"] },
        { id: "fut-ps-005", promptPrefix: "Дождь", promptSuffix: "сегодня вечером.", answers: ["пойдёт"] },
        { id: "fut-ps-006", promptPrefix: "Ты", promptSuffix: "к врачу сегодня?", answers: ["сходишь"] },
        { id: "fut-ps-007", promptPrefix: "Они", promptSuffix: "в театр на премьеру.", answers: ["пойдут"] },
        { id: "fut-ps-008", promptPrefix: "Мы", promptSuffix: "в магазин и сразу вернёмся.", answers: ["сходим"] },
        { id: "fut-ps-009", promptPrefix: "Лена", promptSuffix: "на курсы с сентября.", answers: ["пойдёт"] },
        { id: "fut-ps-010", promptPrefix: "", promptSuffix: "за газетой — я подожду.", answers: ["Сходи"] },
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
            card.className = 'fca01-card-container fut-ps-04-card';
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
                    <p class="quiz-instruction">Scrivi la forma corretta del futuro</p>
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
        container.querySelectorAll('.fut-ps-04-card').forEach(card => {
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
                const card       = this.closest('.fut-ps-04-card');
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
        container.querySelectorAll('.fut-ps-04-card').forEach((c, i) => {
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
    'panel-fut-ps-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-ps-01',    exercises: p1exercises }),
    'panel-fut-ps-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-ps-05',    exercises: p5exercises }),
    'panel-fut-ps-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-ps-06',    exercises: p6exercises }),
    'panel-fut-ps-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-ps-02', cards: p2cards }),
    'panel-fut-ps-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-ps-03', cards: p3cards }),
    'panel-fut-ps-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-ps-07', cards: p7cards }),
    'panel-fut-ps-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-ps-08', cards: p8cards }),
    'panel-fut-ps-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-ps-09', cards: p9cards }),
    'panel-fut-ps-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-ps-10', cards: p10cards }),
    'panel-fut-ps-04':  () => initPanel4(),
};

initPanelManager({ initializers, enableAccessControl: true });
