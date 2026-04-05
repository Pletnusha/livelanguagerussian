import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix вести + водить
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Профессор {{1}} лекции по истории экономики.",
        words: ["водит", "ведёт", "водят"],         // correct: позиция 1
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты часто {{1}} дочь на занятия после школы?",
        words: ["водишь", "ведёшь", "ведёт"],       // correct: позиция 0
        correctAnswers: { 1: "водишь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Кто {{1}} расследование этого убийства?",
        words: ["ведём", "водишь", "ведёт"],        // correct: позиция 2
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Она уже год не {{1}} машину.",
        words: ["ведёт", "водит", "водишь"],        // correct: позиция 1
        correctAnswers: { 1: "водит" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Нашу программу {{1}} доктор медицинских наук.",
        words: ["водишь", "водит", "ведёт"],        // correct: позиция 2
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я {{1}} дочь на хор по понедельникам.",
        words: ["вожу", "веду", "водит"],           // correct: позиция 0
        correctAnswers: { 1: "вожу" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Счёт в матче {{1}} команда Динамо.",
        words: ["ведём", "ведёт", "водите"],        // correct: позиция 1
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Зачем ты {{1}} его за нос?",
        words: ["ведёшь", "веду", "водишь"],        // correct: позиция 2
        correctAnswers: { 1: "водишь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Дочь начала {{1}} дневник.",
        words: ["водить", "вести", "водит"],        // correct: позиция 1
        correctAnswers: { 1: "вести" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Девушка {{1}} кота на поводке.",
        words: ["ведут", "водит", "ведёт"],         // correct: позиция 2
        correctAnswers: { 1: "ведёт" }
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Спряжение ВЕСТИ (только формы ВЕСТИ)
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Они {{1}} переговоры уже два часа.",
        words: ["ведёшь", "ведут", "ведёт"],
        correctAnswers: { 1: "ведут" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Ты {{1}} колонку в газете уже год?",
        words: ["ведёшь", "ведут", "ведём"],
        correctAnswers: { 1: "ведёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Мы {{1}} этот проект вместе.",
        words: ["ведёт", "веду", "ведём"],
        correctAnswers: { 1: "ведём" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Я {{1}} дневник с детства.",
        words: ["ведёт", "веду", "ведут"],
        correctAnswers: { 1: "веду" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Вы {{1}} приём пациентов каждый день?",
        words: ["ведёте", "ведёшь", "ведут"],
        correctAnswers: { 1: "ведёте" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Он {{1}} нас к выходу.",
        words: ["ведём", "ведёт", "веду"],
        correctAnswers: { 1: "ведёт" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Спряжение ВОДИТЬ (только формы ВОДИТЬ)
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Я {{1}} детей на тренировку по средам.",
        words: ["водим", "водит", "вожу"],
        correctAnswers: { 1: "вожу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Они {{1}} экскурсии по старому городу.",
        words: ["водят", "водим", "водите"],
        correctAnswers: { 1: "водят" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Ты {{1}} машину уже десять лет?",
        words: ["водит", "водишь", "вожу"],
        correctAnswers: { 1: "водишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Вы {{1}} детей в школу сами?",
        words: ["водим", "водят", "водите"],
        correctAnswers: { 1: "водите" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Она {{1}} его за нос уже месяц.",
        words: ["водит", "вожу", "водишь"],
        correctAnswers: { 1: "водит" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Мы не {{1}} с ними дружбу.",
        words: ["водите", "водим", "водят"],
        correctAnswers: { 1: "водим" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public · Mix вести + водить
// ============================================================
const p2cards = [
    { front: "Он ведёт колонку в газете", back: "уже три года" },
    { front: "Каждое утро она", back: "водит сына в садик" },
    { front: "Расследование ведут", back: "лучшие следователи города" },
    { front: "Раньше мы не водили", back: "дружбу с соседями" },
    { front: "Доктор ведёт", back: "приём с девяти до часу" },
    { front: "Она водит", back: "машину спокойно, даже в пробках" },
    { front: "Девушка ведёт его", back: "на поводке — он кот" },
    { front: "Ты водишь дочь", back: "на французский каждый вторник?" },
    { front: "Она вела", back: "дневник и прятала под матрас" },
    { front: "Ты водишь его", back: "за нос — он же всё понимает" },
];

// ============================================================
// PANEL 7 — Flashcard · paid · Solo ВЕСТИ
// ============================================================
const p7cards = [
    { front: "Уже два часа они",              back: "ведут переговоры" },
    { front: "Ты уже год",                    back: "ведёшь колонку в газете" },
    { front: "Каждый день вы",                back: "ведёте приём пациентов" },
    { front: "Когда мы потерялись, он",       back: "ведёт нас к выходу" },
    { front: "С детства я",                   back: "веду дневник" },
    { front: "Три раза в неделю мы",          back: "ведём занятия онлайн" },
    { front: "Она всегда",                    back: "ведёт детей за руку через дорогу" },
    { front: "Ты всегда",                     back: "ведёшь себя так, будто всё знаешь" },
    { front: "Саша и Миша уже два года",      back: "ведут блог о путешествиях" },
    { front: "Новый экскурсовод",             back: "ведёт группу по маршруту впервые" },
];

// ============================================================
// PANEL 8 — Flashcard · paid · Solo ВОДИТЬ
// ============================================================
const p8cards = [
    { front: "По субботам я",                       back: "вожу бабушку на рынок" },
    { front: "Ты иногда",                           back: "водишь хоровод с детьми на каждом занятии" },
    { front: "Артём каждое утро",                   back: "водит сына на тренировку по плаванию" },
    { front: "По вечерам мы",                       back: "водим собаку в парк" },
    { front: "Вы уже давно",                        back: "водите туристов по этому маршруту уже несколько лет" },
    { front: "Местные гиды",                        back: "водят группы через старый квартал" },
    { front: "С тех пор как получила права, я",     back: "вожу сама — без инструктора" },
    { front: "Говорят, ты отлично",                 back: "водишь — ни одной аварии за десять лет" },
    { front: "Новая воспитательница",               back: "водит детей на прогулку дважды в день" },
    { front: "Молодые родители в нашем районе",     back: "водят детей в один и тот же садик" },
];

// ============================================================
// PANEL 3 — Flashcard · paid · Mix вести + водить
// ============================================================
const p3cards = [
    { front: "Директор",                                    back: "ведёт переговоры с инвесторами" },
    { front: "Ты говорила, что хорошо знаешь дорогу —",    back: "водишь нас кругами уже целый час" },
    { front: "После того случая они больше не",             back: "водят дружбу с соседями" },
    { front: "Подожди, я",                                  back: "веду сюда нашего нового коллегу" },
    { front: "Вы правда",                                   back: "водите группы пешком весь день?" },
    { front: "Андрей злится и",                             back: "ведёт машину молча" },
    { front: "Мы",                                          back: "ведём ребёнка на рисование в субботу" },
    { front: "Говорят, он давно",                           back: "водит своих партнёров за нос" },
    { front: "Этот гид работает здесь двадцать лет —",      back: "водит туристов по одним и тем же улицам" },
    { front: "Ты",                                          back: "ведёшь себя так, будто ничего не случилось" },
];

// ============================================================
// PANEL 9 — Flashcard · paid · Consolidamento Mix
// ============================================================
const p9cards = [
    { front: "Андрей злится и",                             back: "ведёт машину молча" },
    { front: "По субботам я",                               back: "вожу бабушку на рынок" },
    { front: "После того случая они больше не",              back: "водят дружбу с соседями" },
    { front: "Уже два часа они",                            back: "ведут переговоры" },
    { front: "Мы",                                          back: "ведём ребёнка на рисование в субботу" },
    { front: "Говорят, ты отлично",                         back: "водишь — ни одной аварии за десять лет" },
    { front: "Ты всегда",                                   back: "ведёшь себя так, будто всё знаешь" },
    { front: "Говорят, он давно",                           back: "водит своих партнёров за нос" },
    { front: "По вечерам мы",                               back: "водим собаку в парк" },
    { front: "С детства я",                                 back: "веду дневник" },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Consolidamento Mix 2
// ============================================================
const p10cards = [
    { front: "С тех пор как получила права, я",     back: "вожу сама — без инструктора" },
    { front: "Директор",                            back: "ведёт переговоры с инвесторами" },
    { front: "Саша и Миша уже два года",            back: "ведут блог о путешествиях" },
    { front: "Ты говорила, что хорошо знаешь дорогу —", back: "водишь нас кругами уже целый час" },
    { front: "Ты уже год",                          back: "ведёшь колонку в газете" },
    { front: "Местные гиды",                        back: "водят группы через старый квартал" },
    { front: "Каждый день вы",                      back: "ведёте приём пациентов" },
    { front: "Подожди, я",                          back: "веду сюда нашего нового коллегу" },
    { front: "Артём каждое утро",                   back: "водит сына на тренировку по плаванию" },
    { front: "Вы правда",                           back: "водите группы пешком весь день?" },
];

// ============================================================
// PANEL 4 — Mixed Quiz · paid · ВЕСТИ/ВОДИТЬ
// ============================================================
function initPanel4VV() {
    const panel = document.getElementById('panel-vv-04');
    if (!panel) return;

    const container = panel.querySelector('#vv-04-cards-container');
    const prevBtn   = panel.querySelector('#vv-04-deck-prev');
    const nextBtn   = panel.querySelector('#vv-04-deck-next');
    const counterEl = panel.querySelector('#vv-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Профессор ___ лекции по истории экономики.",             options: ["водит",   "ведёт",   "ведут"],   answer: "ведёт"  },
        { question: "Расследование ___ лучшие следователи города.",           options: ["ведут",   "водят",   "ведёт"],   answer: "ведут"  },
        { question: "Вы ___ переговоры от имени компании?",                   options: ["водите",  "ведёт",   "ведёте"],  answer: "ведёте" },
        { question: "Ты ___ себя так, будто всё знаешь.",                     options: ["ведёт",   "ведёшь",  "водишь"],  answer: "ведёшь" },
        { question: "Новый экскурсовод ___ группу по маршруту впервые.",      options: ["водит",   "ведут",   "ведёт"],   answer: "ведёт"  },
        { question: "Вы ___ туристов по одним и тем же улицам уже много лет.",options: ["водите",  "водит",   "ведёте"],  answer: "водите" },
        { question: "После того случая они больше не ___ дружбу.",            options: ["водят",   "ведут",   "водит"],   answer: "водят"  },
        { question: "Артём каждое утро ___ сына на тренировку по плаванию.",  options: ["ведёт",   "водят",   "водит"],   answer: "водит"  },
        { question: "По вечерам мы ___ собаку в парк.",                       options: ["водим",   "ведём",   "водят"],   answer: "водим"  },
        { question: "Говорят, ты отлично ___.",                               options: ["ведёшь",  "водит",   "водишь"],  answer: "водишь" },
    ];

    const matchPairs = [
        { left: "С детства я",                              right: "веду дневник" },
        { left: "Саша и Миша уже два года",                 right: "ведут блог о путешествиях" },
        { left: "Три раза в неделю мы",                     right: "ведём занятия онлайн" },
        { left: "Каждый день вы",                           right: "ведёте приём пациентов" },
        { left: "Андрей злится и",                          right: "ведёт машину молча" },
        { left: "По субботам я",                            right: "вожу бабушку на рынок" },
        { left: "Ты говорила, что хорошо знаешь дорогу —", right: "водишь нас кругами уже целый час" },
        { left: "Новая воспитательница",                    right: "водит детей на прогулку дважды в день" },
        { left: "Вы правда",                                right: "водите группы пешком весь день?" },
        { left: "Говорят, он давно",                        right: "водит своих партнёров за нос" },
    ];

    const quizData = [
        { id: "vv-001", promptPrefix: "Я",                        promptSuffix: "аккаунт в соцсетях уже три года.",   answers: ["веду"]   },
        { id: "vv-002", promptPrefix: "Вы",                       promptSuffix: "этот проект с самого начала.",       answers: ["ведёте"] },
        { id: "vv-003", promptPrefix: "Мы с партнёром",           promptSuffix: "общий бизнес уже пять лет.",         answers: ["ведём"]  },
        { id: "vv-004", promptPrefix: "Они",                      promptSuffix: "активный образ жизни.",              answers: ["ведут"]  },
        { id: "vv-005", promptPrefix: "Ты давно",                 promptSuffix: "переписку с ней?",                   answers: ["ведёшь"] },
        { id: "vv-006", promptPrefix: "По воскресеньям я",        promptSuffix: "маму в церковь.",                    answers: ["вожу"]   },
        { id: "vv-007", promptPrefix: "Ты",                       promptSuffix: "детей на кружки каждую неделю?",     answers: ["водишь"] },
        { id: "vv-008", promptPrefix: "Куда вы",                  promptSuffix: "клиентов после встречи?",            answers: ["водите"] },
        { id: "vv-009", promptPrefix: "По выходным мы",           promptSuffix: "детей в кино или театр.",            answers: ["водим"]  },
        { id: "vv-010", promptPrefix: "В этом квартале родители", promptSuffix: "детей в школу сами.",                answers: ["водят"]  },
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
            card.className = 'fca01-card-container vv-04-card';
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
        container.querySelectorAll('.vv-04-card').forEach(card => {
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
                const card       = this.closest('.vv-04-card');
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
        container.querySelectorAll('.vv-04-card').forEach((c, i) => {
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
    'panel-vv-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-vv-01', exercises: p1exercises }),
    'panel-vv-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-vv-05', exercises: p5exercises }),
    'panel-vv-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-vv-06', exercises: p6exercises }),
    'panel-vv-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-02', cards: p2cards }),
    'panel-vv-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-07', cards: p7cards }),
    'panel-vv-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-08', cards: p8cards }),
    'panel-vv-03': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-03', cards: p3cards }),
    'panel-vv-04': () => initPanel4VV(),
    'panel-vv-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-09', cards: p9cards }),
    'panel-vv-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-10', cards: p10cards }),
};

initPanelManager({ initializers, enableAccessControl: false });
