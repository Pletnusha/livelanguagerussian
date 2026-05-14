import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix поехать vs съездить
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Летом она {{1}} в Италию на месяц.",
        words: ["поедет", "съездит", "поедут"],
        correctAnswers: { 1: "поедет" }
        // поедет = partenza lunga, senza ritorno immediato
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Я {{1}} на дачу и вернусь к вечеру.",
        words: ["съезжу", "поеду", "съездит"],
        correctAnswers: { 1: "съезжу" }
        // съезжу = gita breve in auto con ritorno
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Мы {{1}} в Москву на конференцию.",
        words: ["поедем", "съездим", "поедет"],
        correctAnswers: { 1: "поедем" }
        // поедем = viaggio con permanenza, senza ritorno immediato
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Он {{1}} в аэропорт и сразу вернётся.",
        words: ["съездит", "поедет", "съезжу"],
        correctAnswers: { 1: "съездит" }
        // съездит = gita rapida in auto
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Они {{1}} отдыхать на море этим летом.",
        words: ["поедут", "съездят", "поедем"],
        correctAnswers: { 1: "поедут" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Ты {{1}} за родителями на вокзал?",
        words: ["съездишь", "поедешь", "съездит"],
        correctAnswers: { 1: "съездишь" }
        // съездишь = commissione breve in auto
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Завтра я {{1}} работать в другой город.",
        words: ["поеду", "съезжу", "поедут"],
        correctAnswers: { 1: "поеду" }
        // поеду = trasferimento senza ritorno immediato
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Мы {{1}} в супермаркет и сразу назад.",
        words: ["съездим", "поедем", "съездишь"],
        correctAnswers: { 1: "съездим" }
        // съездим = gita breve con ritorno
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Лена {{1}} учиться в Европу на год.",
        words: ["поедет", "съездит", "поедут"],
        correctAnswers: { 1: "поедет" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "{{1}} в банк — это недалеко.",
        words: ["Съезди", "Поезжай", "Съездим"],
        correctAnswers: { 1: "Съезди" }
        // imperativo di съездить = commissione rapida
    },
];

// ============================================================
// PANEL 5 — DragDrop · student · Solo ПОЕХАТЬ (coniugazione)
// ============================================================
const p5exercises = [
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Я {{1}} в командировку в понедельник.",
        words: ["поеду", "поедешь", "поедут"],
        correctAnswers: { 1: "поеду" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Ты {{1}} со мной на юг?",
        words: ["поедешь", "поеду", "поедем"],
        correctAnswers: { 1: "поедешь" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Он {{1}} на работу на машине.",
        words: ["поедет", "поеду", "поедут"],
        correctAnswers: { 1: "поедет" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Она {{1}} в Петербург на следующей неделе.",
        words: ["поедет", "поедем", "поедут"],
        correctAnswers: { 1: "поедет" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Мы {{1}} на море вместе.",
        words: ["поедем", "поедет", "поедут"],
        correctAnswers: { 1: "поедем" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Вы {{1}} на экскурсию в воскресенье?",
        words: ["поедете", "поедем", "поедут"],
        correctAnswers: { 1: "поедете" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Они {{1}} за границу на каникулы.",
        words: ["поедут", "поедет", "поедем"],
        correctAnswers: { 1: "поедут" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Поезд {{1}} в шесть утра.",
        words: ["поедет", "поедут", "поедем"],
        correctAnswers: { 1: "поедет" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Ты {{1}} в Москву на поезде или на машине?",
        words: ["поедешь", "поедет", "поедем"],
        correctAnswers: { 1: "поедешь" }
    },
    {
        instruction: "Completa con la forma corretta di ПОЕХАТЬ.",
        text: "Мы {{1}} ужинать в ресторан на такси.",
        words: ["поедем", "поедут", "поедет"],
        correctAnswers: { 1: "поедем" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo СЪЕЗДИТЬ (coniugazione)
// ============================================================
const p6exercises = [
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Я {{1}} на дачу и куплю овощей.",
        words: ["съезжу", "съездишь", "съездят"],
        correctAnswers: { 1: "съезжу" }
    },
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Ты {{1}} в аэропорт встретить маму?",
        words: ["съездишь", "съезжу", "съездим"],
        correctAnswers: { 1: "съездишь" }
    },
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Он {{1}} в банк и вернётся через полчаса.",
        words: ["съездит", "съезжу", "съездят"],
        correctAnswers: { 1: "съездит" }
    },
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Она {{1}} к родителям на выходные.",
        words: ["съездит", "съезжу", "съездите"],
        correctAnswers: { 1: "съездит" }
    },
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Мы {{1}} в супермаркет и сразу вернёмся.",
        words: ["съездим", "съездит", "съездят"],
        correctAnswers: { 1: "съездим" }
    },
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Вы {{1}} за вещами до отъезда?",
        words: ["съездите", "съездим", "съездят"],
        correctAnswers: { 1: "съездите" }
    },
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Они {{1}} на рынок и расскажут нам.",
        words: ["съездят", "съездим", "съездит"],
        correctAnswers: { 1: "съездят" }
    },
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Я {{1}} за документами — это рядом.",
        words: ["съезжу", "съездит", "съездим"],
        correctAnswers: { 1: "съезжу" }
    },
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Ты {{1}} на вокзал сам или тебя подвезти?",
        words: ["съездишь", "съезжу", "съездят"],
        correctAnswers: { 1: "съездишь" }
    },
    {
        instruction: "Completa con la forma corretta di СЪЕЗДИТЬ.",
        text: "Он {{1}} за билетами и вернётся.",
        words: ["съездит", "съездим", "съездишь"],
        correctAnswers: { 1: "съездит" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Летом она поедет", back: "в Италию на месяц" },
    { front: "Я съезжу на дачу", back: "и вернусь к вечеру" },
    { front: "Мы поедем", back: "в Москву на конференцию" },
    { front: "Он съездит в аэропорт", back: "и сразу вернётся" },
    { front: "Они поедут", back: "отдыхать на море этим летом" },
    { front: "Ты съездишь за родителями", back: "на вокзал?" },
    { front: "Завтра я поеду", back: "работать в другой город" },
    { front: "Мы съездим в супермаркет", back: "и сразу назад" },
    { front: "Лена поедет", back: "учиться в Европу на год" },
    { front: "Съезди в банк", back: "это недалеко" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Поедет в отпуск", back: "длительная поездка, возврат не скоро" },
    { front: "Съездит на дачу", back: "короткая поездка, вернётся сегодня" },
    { front: "Я поеду работать за рубеж", back: "долгосрочно, без быстрого возврата" },
    { front: "Съезжу за продуктами", back: "быстрая поездка на машине" },
    { front: "Они поедут в горы", back: "на следующей неделе, туристический маршрут" },
    { front: "Съезди к врачу", back: "совет: короткая поездка с возвратом" },
    { front: "Поедем на море?", back: "предложение совместного отъезда" },
    { front: "Она съездит к подруге", back: "на несколько часов, вернётся" },
    { front: "Куда ты поедешь?", back: "вопрос о будущем путешествии" },
    { front: "Куда ты съездишь?", back: "вопрос о краткой поездке" },
];

// ============================================================
// PANEL 7 — Flashcard · student
// ============================================================
const p7cards = [
    { front: "Я поеду в университет", back: "с нового семестра" },
    { front: "Она поедет работать", back: "в другую страну" },
    { front: "Мы поедем на выставку", back: "в эти выходные на машине" },
    { front: "Он поедет к другу", back: "в другой город" },
    { front: "Ты поедешь на вечеринку?", back: "на машине или на метро?" },
    { front: "Они поедут в горы", back: "на следующей неделе" },
    { front: "Поезд поедет", back: "в шесть утра" },
    { front: "Вы поедете на матч?", back: "билеты ещё есть" },
    { front: "Она поедет домой на такси", back: "уже поздно" },
    { front: "Мы поедем пораньше", back: "чтобы не опоздать" },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Съезжу на дачу", back: "нужно полить огород" },
    { front: "Съезди за молоком", back: "магазин за углом, на машине быстро" },
    { front: "Он съездит в аэропорт", back: "и вернётся через час" },
    { front: "Мы съездим за пиццей", back: "хочешь что-нибудь?" },
    { front: "Она съездит к родителям", back: "на выходные и вернётся" },
    { front: "Ты съездишь на вокзал?", back: "я подожду здесь" },
    { front: "Съездите за кофе", back: "пока я готовлю" },
    { front: "Они съездят на рынок", back: "и расскажут нам потом" },
    { front: "Съезжу за документами", back: "это рядом, недолго" },
    { front: "Съезди к врачу", back: "это важно, скоро вернёшься" },
];

// ============================================================
// PANEL 9 — Flashcard · student
// ============================================================
const p9cards = [
    { front: "Завтра поеду в командировку", back: "на три дня" },
    { front: "Сейчас съезжу за ключами", back: "я их забыл на работе" },
    { front: "Они поедут на концерт", back: "поехать = длительное мероприятие без скорого возврата" },
    { front: "Ты съездишь в банк?", back: "это рядом, недолго" },
    { front: "Мы поедем в отпуск", back: "поехать = начало путешествия" },
    { front: "Съезжу узнаю расписание", back: "быстрая поездка на машине" },
    { front: "Она поедет учиться за рубеж", back: "поехать = отъезд на долгий срок" },
    { front: "Он съездит к начальнику", back: "в другой офис и вернётся" },
    { front: "Вы поедете на фестиваль?", back: "крупное мероприятие, поехать" },
    { front: "Съезди проверь машину", back: "небольшая поездка в сервис" },
];

// ============================================================
// PANEL 10 — Flashcard · paid
// ============================================================
const p10cards = [
    { front: "Поедем на Байкал летом?", back: "предложение: поехать вместе" },
    { front: "Съезжу за запчастями", back: "быстро, скоро вернусь" },
    { front: "Она поедет на свидание", back: "важное событие, поехать" },
    { front: "Съезди в библиотеку сдать книги", back: "короткое дело на машине" },
    { front: "Мы поедем в поход на три дня", back: "поехать = отъезд, несколько дней" },
    { front: "Он съездит на рынок", back: "за овощами, скоро вернётся" },
    { front: "Поезжай сюда", back: "imperativo di поехать: avvicinarsi in veicolo" },
    { front: "Съезди туда и обратно", back: "imperativo di съездить: andata e ritorno in veicolo" },
    { front: "Куда поедет автобус?", back: "domanda sul percorso del mezzo" },
    { front: "Съезжу за зонтом", back: "veloce, ritorno immediato" },
];


// ============================================================
// PANEL 4 — Mixed Quiz · public
// 0-(MC_END-1):         multiple choice
// MC_END-(MATCH_END-1): match game
// MATCH_END onwards:    text input (write-in)
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-fut-vs-04');
    if (!panel) return;

    const container = panel.querySelector('#fut-vs-04-cards-container');
    const prevBtn   = panel.querySelector('#fut-vs-04-deck-prev');
    const nextBtn   = panel.querySelector('#fut-vs-04-deck-next');
    const counterEl = panel.querySelector('#fut-vs-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Летом она ___ в Италию на месяц.", options: ["поедет", "съездит", "поедут"], answer: "поедет" },
        { question: "Я ___ на дачу и вернусь к вечеру.", options: ["съезжу", "поеду", "съездит"], answer: "съезжу" },
        { question: "Мы ___ в Москву на конференцию.", options: ["поедем", "съездим", "поедет"], answer: "поедем" },
        { question: "Он ___ в аэропорт и сразу вернётся.", options: ["съездит", "поедет", "съезжу"], answer: "съездит" },
        { question: "Поезд ___ в шесть утра.", options: ["поедет", "съездит", "поедут"], answer: "поедет" },
        { question: "Ты ___ за родителями на вокзал?", options: ["съездишь", "поедешь", "съездит"], answer: "съездишь" },
        { question: "Они ___ отдыхать на море этим летом.", options: ["поедут", "съездят", "поедем"], answer: "поедут" },
        { question: "Мы ___ в супермаркет и сразу вернёмся.", options: ["съездим", "поедем", "съездишь"], answer: "съездим" },
        { question: "Лена ___ учиться в Европу на год.", options: ["поедет", "съездит", "поедут"], answer: "поедет" },
        { question: "___ в банк — это недалеко.", options: ["Съезди", "Поезжай", "Съездим"], answer: "Съезди" },
    ];

    const matchPairs = [
        { left: "Летом она поедет", right: "в Италию на месяц" },
        { left: "Я съезжу на дачу", right: "и вернусь к вечеру" },
        { left: "Мы поедем", right: "в Москву на конференцию" },
        { left: "Поезд", right: "поедет в шесть утра" },
        { left: "Они поедут", right: "отдыхать на море" },
        { left: "Ты съездишь", right: "за родителями на вокзал" },
        { left: "Он съездит в аэропорт", right: "и сразу вернётся" },
        { left: "Мы съездим в супермаркет", right: "и сразу вернёмся" },
        { left: "Лена поедет", right: "учиться в Европу на год" },
        { left: "Съезди в банк", right: "это недалеко" },
    ];

    const quizData = [
        { id: "fut-vs-001", promptPrefix: "Летом она", promptSuffix: "в Италию на месяц.", answers: ["поедет"] },
        { id: "fut-vs-002", promptPrefix: "Я", promptSuffix: "на дачу и вернусь к вечеру.", answers: ["съезжу"] },
        { id: "fut-vs-003", promptPrefix: "Мы", promptSuffix: "в Москву на конференцию.", answers: ["поедем"] },
        { id: "fut-vs-004", promptPrefix: "Он", promptSuffix: "в аэропорт и сразу вернётся.", answers: ["съездит"] },
        { id: "fut-vs-005", promptPrefix: "Поезд", promptSuffix: "в шесть утра.", answers: ["поедет"] },
        { id: "fut-vs-006", promptPrefix: "Ты", promptSuffix: "за родителями на вокзал?", answers: ["съездишь"] },
        { id: "fut-vs-007", promptPrefix: "Они", promptSuffix: "отдыхать на море этим летом.", answers: ["поедут"] },
        { id: "fut-vs-008", promptPrefix: "Мы", promptSuffix: "в супермаркет и сразу вернёмся.", answers: ["съездим"] },
        { id: "fut-vs-009", promptPrefix: "Лена", promptSuffix: "учиться в Европу на год.", answers: ["поедет"] },
        { id: "fut-vs-010", promptPrefix: "", promptSuffix: "в банк — это недалеко.", answers: ["Съезди"] },
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
            card.className = 'fca01-card-container fut-vs-04-card';
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
        container.querySelectorAll('.fut-vs-04-card').forEach(card => {
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
                const card       = this.closest('.fut-vs-04-card');
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
        container.querySelectorAll('.fut-vs-04-card').forEach((c, i) => {
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
    'panel-fut-vs-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-vs-01',    exercises: p1exercises }),
    'panel-fut-vs-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-vs-05',    exercises: p5exercises }),
    'panel-fut-vs-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-vs-06',    exercises: p6exercises }),
    'panel-fut-vs-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-vs-02', cards: p2cards }),
    'panel-fut-vs-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-vs-03', cards: p3cards }),
    'panel-fut-vs-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-vs-07', cards: p7cards }),
    'panel-fut-vs-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-vs-08', cards: p8cards }),
    'panel-fut-vs-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-vs-09', cards: p9cards }),
    'panel-fut-vs-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-vs-10', cards: p10cards }),
    'panel-fut-vs-04':  () => initPanel4(),
};

initPanelManager({ initializers, enableAccessControl: true });
