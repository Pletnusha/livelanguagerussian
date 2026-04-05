import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix нести + носить
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Куда ты {{1}} нашего кота?",
        words: ["несёшь", "носишь", "несут"],
        correctAnswers: { 1: "несёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} бельё стирать в прачечную.",
        words: ["носим", "несём", "носят"],
        correctAnswers: { 1: "носим" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Тебе нужно {{1}} очки — ты ничего не видишь!",
        words: ["нести", "носить", "носит"],
        correctAnswers: { 1: "носить" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Зачем ты {{1}} тарелки в комнату?",
        words: ["несёшь", "носишь", "несут"],
        correctAnswers: { 1: "несёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Она никогда не {{1}} платья.",
        words: ["несёт", "носит", "носим"],
        correctAnswers: { 1: "носит" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "У меня компьютер сломался — {{1}} его в ремонт.",
        words: ["ношу", "несу", "несёт"],
        correctAnswers: { 1: "несу" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Почему ты не {{1}} джинсы, которые я тебе купила?",
        words: ["несёшь", "носишь", "носит"],
        correctAnswers: { 1: "носишь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Куда ты {{1}} все эти книги?",
        words: ["носишь", "несёшь", "несут"],
        correctAnswers: { 1: "несёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я ненавижу {{1}} часы!",
        words: ["нести", "носить", "несёт"],
        correctAnswers: { 1: "носить" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я {{1}} подарок Кате — у неё был день рождения.",
        words: ["ношу", "несу", "несёт"],
        correctAnswers: { 1: "несу" }
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Solo НОСИТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Мы {{1}} бельё стирать в прачечную.",
        words: ["носим", "носят", "носите"],
        correctAnswers: { 1: "носим" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Тебе нужно {{1}} очки — ты ничего не видишь!",
        words: ["носить", "носит", "ношу"],
        correctAnswers: { 1: "носить" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Она никогда не {{1}} платья.",
        words: ["носит", "носим", "носят"],
        correctAnswers: { 1: "носит" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Почему ты не {{1}} джинсы, которые я тебе купила?",
        words: ["носишь", "носит", "ношу"],
        correctAnswers: { 1: "носишь" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Я ненавижу {{1}} часы!",
        words: ["носить", "носит", "ношу"],
        correctAnswers: { 1: "носить" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Я {{1}} шапку только в сильный мороз.",
        words: ["ношу", "носит", "носим"],
        correctAnswers: { 1: "ношу" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Вы {{1}} форму на работе?",
        words: ["носите", "носим", "носят"],
        correctAnswers: { 1: "носите" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "В этой школе все ученики {{1}} форму.",
        words: ["носят", "носит", "носите"],
        correctAnswers: { 1: "носят" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Антон всегда {{1}} костюм в офис.",
        words: ["носит", "ношу", "носят"],
        correctAnswers: { 1: "носит" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Мы {{1}} продукты домой в эко-сумках.",
        words: ["носим", "носят", "носите"],
        correctAnswers: { 1: "носим" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo НЕСТИ
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Куда ты {{1}} нашего кота?",
        words: ["несёшь", "несёт", "несут"],
        correctAnswers: { 1: "несёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Зачем ты {{1}} тарелки в комнату?",
        words: ["несёшь", "несу", "несём"],
        correctAnswers: { 1: "несёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "У меня компьютер сломался — {{1}} его в ремонт.",
        words: ["несу", "несёшь", "несут"],
        correctAnswers: { 1: "несу" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Куда ты {{1}} все эти книги?",
        words: ["несёшь", "несёт", "несёте"],
        correctAnswers: { 1: "несёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Я {{1}} подарок Кате — у неё был день рождения.",
        words: ["несу", "несём", "несёт"],
        correctAnswers: { 1: "несу" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Она {{1}} горячий суп в комнату.",
        words: ["несёт", "несу", "несёшь"],
        correctAnswers: { 1: "несёт" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Мы {{1}} цветы на свадьбу.",
        words: ["несём", "несут", "несёте"],
        correctAnswers: { 1: "несём" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Куда вы {{1}} эти коробки?",
        words: ["несёте", "несём", "несут"],
        correctAnswers: { 1: "несёте" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Они {{1}} диван на четвёртый этаж.",
        words: ["несут", "несёт", "несёте"],
        correctAnswers: { 1: "несут" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Курьер {{1}} посылку прямо сейчас.",
        words: ["несёт", "несут", "несём"],
        correctAnswers: { 1: "несёт" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public · Mix нести + носить
// ============================================================
const p2cards = [
    { front: "Она никогда", back: "не носит каблуки" },
    { front: "Куда ты сейчас", back: "несёшь эти пакеты?" },
    { front: "Смотри — она", back: "несёт торт. Осторожно!" },
    { front: "Мы каждую неделю", back: "носим продукты маме" },
    { front: "Куда они", back: "несут эти коробки?" },
    { front: "Зимой она всегда", back: "носит шапку и шарф" },
    { front: "Он на работу каждый день", back: "носит галстук" },
    { front: "Куда вы", back: "несёте все эти папки?" },
    { front: "Мы прямо сейчас", back: "несём вещи в машину" },
    { front: "Каждое утро он", back: "носит кофе в переговорку — традиция" },
];

// ============================================================
// PANEL 7 — Flashcard · paid · Mix нести + носить
// ============================================================
const p7cards = [
    { front: "Куда ты сейчас", back: "несёшь эти пакеты?" },
    { front: "Она никогда", back: "не носит каблуки" },
    { front: "Почтальон каждый день", back: "носит письма по домам" },
    { front: "Мы прямо сейчас", back: "несём вещи в машину" },
    { front: "Он на работу каждый день", back: "носит галстук" },
    { front: "Куда они", back: "несут эти коробки?" },
    { front: "Подожди — я сейчас", back: "несу горячий поднос, не толкай" },
    { front: "Ты вообще когда-нибудь", back: "носишь серьги?" },
    { front: "Куда ты", back: "несёшь этот стул?" },
    { front: "Он летом всегда", back: "носит кепку — не любит солнце" },
];

// ============================================================
// PANEL 8 — Flashcard · paid · Mix нести + носить
// ============================================================
const p8cards = [
    { front: "Мама сейчас", back: "несёт ребёнка в кроватку" },
    { front: "Погоди — я", back: "несу твой ноутбук" },
    { front: "Зимой она всегда", back: "носит шапку и шарф" },
    { front: "Смотри — она", back: "несёт торт. Осторожно!" },
    { front: "Ты всегда", back: "носишь этот браслет — на удачу?" },
    { front: "Каждое утро он", back: "носит кофе в переговорку — традиция" },
    { front: "Куда вы", back: "несёте все эти папки?" },
    { front: "Волонтёры каждую неделю", back: "носят еду пожилым людям" },
    { front: "Смотри, он", back: "несёт чемодан — наверное, уезжает" },
    { front: "Мы каждую неделю", back: "носим продукты маме" },
];

// ============================================================
// PANEL 3 — Flashcard · public · Mix нести + носить (повторение)
// ============================================================
const p3cards = [
    { front: "Ты вообще когда-нибудь", back: "носишь серьги?" },
    { front: "Куда ты", back: "несёшь этот стул?" },
    { front: "Волонтёры каждую неделю", back: "носят еду пожилым людям" },
    { front: "Мама сейчас", back: "несёт ребёнка в кроватку" },
    { front: "Погоди — я", back: "несу твой ноутбук" },
    { front: "Он летом всегда", back: "носит кепку — не любит солнце" },
    { front: "Смотри, он", back: "несёт чемодан — наверное, уезжает" },
    { front: "Почтальон каждый день", back: "носит письма по домам" },
    { front: "Ты всегда", back: "носишь этот браслет — на удачу?" },
    { front: "Подожди — я сейчас", back: "несу горячий поднос, не толкай" },
];

// ============================================================
// PANEL 9 — Flashcard · paid · Consolidamento
// ============================================================
const p9cards = [
    { front: "Смотри — она", back: "несёт торт. Осторожно!" },
    { front: "Куда ты сейчас", back: "несёшь эти пакеты?" },
    { front: "Она никогда", back: "не носит каблуки" },
    { front: "Зимой она всегда", back: "носит шапку и шарф" },
    { front: "Куда они", back: "несут эти коробки?" },
    { front: "Он на работу каждый день", back: "носит галстук" },
    { front: "Мы прямо сейчас", back: "несём вещи в машину" },
    { front: "Каждое утро он", back: "носит кофе в переговорку — традиция" },
    { front: "Мы каждую неделю", back: "носим продукты маме" },
    { front: "Куда вы", back: "несёте все эти папки?" },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Consolidamento 2
// ============================================================
const p10cards = [
    { front: "Она никогда", back: "не носит каблуки" },
    { front: "Мама сейчас", back: "несёт ребёнка в кроватку" },
    { front: "Куда ты сейчас", back: "несёшь эти пакеты?" },
    { front: "Почтальон каждый день", back: "носит письма по домам" },
    { front: "Смотри, он", back: "несёт чемодан — наверное, уезжает" },
    { front: "Мы каждую неделю", back: "носим продукты маме" },
    { front: "Подожди — я сейчас", back: "несу горячий поднос, не толкай" },
    { front: "Он летом всегда", back: "носит кепку — не любит солнце" },
    { front: "Каждое утро он", back: "носит кофе в переговорку — традиция" },
    { front: "Куда они", back: "несут эти коробки?" },
];

// ============================================================
// PANEL 4 — Mixed Quiz · public · НЕСТИ/НОСИТЬ
// ============================================================
function initPanel4NN() {
    const panel = document.getElementById('panel-nn-04');
    if (!panel) return;

    const container = panel.querySelector('#nn-04-cards-container');
    const prevBtn   = panel.querySelector('#nn-04-deck-prev');
    const nextBtn   = panel.querySelector('#nn-04-deck-next');
    const counterEl = panel.querySelector('#nn-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Осторожно — Лена ___ горячую кастрюлю.",              options: ["несёт",  "носит",  "несут"],  answer: "несёт"  },
        { question: "Мы ___ вещи к лифту.",                                options: ["несём",  "носим",  "несут"],  answer: "несём"  },
        { question: "Я ___ зонт — на улице дождь.",                        options: ["несу",   "ношу",   "несёт"],  answer: "несу"   },
        { question: "Смотри — дети ___ рюкзаки на гору.",                  options: ["несут",  "носят",  "несёт"],  answer: "несут"  },
        { question: "Ты ___ мне что-то? — Да, пиццу!",                     options: ["несёшь", "носишь", "несёт"],  answer: "несёшь" },
        { question: "Дед всегда ___ берет — даже дома.",                   options: ["носит",  "несёт",  "носят"],  answer: "носит"  },
        { question: "Мы с сестрой ___ один и тот же размер.",              options: ["носим",  "несём",  "носят"],  answer: "носим"  },
        { question: "Ты ___ линзы или очки?",                              options: ["носишь", "несёшь", "носит"],  answer: "носишь" },
        { question: "В этом ресторане официанты ___ белые перчатки.",      options: ["носят",  "несут",  "носит"],  answer: "носят"  },
        { question: "Я не ___ кольца — неудобно.",                         options: ["ношу",   "несу",   "носит"],  answer: "ношу"   },
    ];

    const matchPairs = [
        { left: "Антон, осторожно —",          right: "несёшь ведро с водой, не разлей"          },
        { left: "Они вдвоём",                   right: "несут тяжёлый ящик"                       },
        { left: "Я сейчас",                     right: "несу лекарство бабушке — она больна"      },
        { left: "Куда она",                     right: "несёт корзину с грибами — в лес ходила"   },
        { left: "Мы",                           right: "несём гитару на репетицию"                },
        { left: "Он уже год",                   right: "носит бороду — ей нравится"               },
        { left: "После операции врач сказал",   right: "носить маску две недели"                  },
        { left: "В нашей компании все",         right: "носят бейджи с именем"                    },
        { left: "Дочка обожает",                right: "носить наушники — даже за столом"         },
        { left: "Он никогда не",                right: "носит шляпу — говорит, не его стиль"      },
    ];

    const quizData = [
        { id: "nn-001", promptPrefix: "Я",                      promptSuffix: "мусор — давно пора.",                    answers: ["несу"]   },
        { id: "nn-002", promptPrefix: "Бабушка всегда",         promptSuffix: "платок.",                                answers: ["носит"]  },
        { id: "nn-003", promptPrefix: "Смотри, он",             promptSuffix: "арбуз прямо в руках — без пакета.",      answers: ["несёт"]  },
        { id: "nn-004", promptPrefix: "Ты",                     promptSuffix: "каску на стройке?",                      answers: ["носишь"] },
        { id: "nn-005", promptPrefix: "Доктор запретил ему",    promptSuffix: "тяжёлое.",                               answers: ["носить"] },
        { id: "nn-006", promptPrefix: "Ты",                     promptSuffix: "коляску или мне помочь?",                answers: ["несёшь"] },
        { id: "nn-007", promptPrefix: "Мы",                     promptSuffix: "значки на конференциях.",                answers: ["носим"]  },
        { id: "nn-008", promptPrefix: "Он отказался",           promptSuffix: "чужие сумки.",                           answers: ["нести"]  },
        { id: "nn-009", promptPrefix: "Мы",                     promptSuffix: "аппаратуру на сцену.",                   answers: ["несём"]  },
        { id: "nn-010", promptPrefix: "На кухне все повара",    promptSuffix: "колпаки.",                               answers: ["носят"]  },
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
            card.className = 'fca01-card-container nn-04-card';
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
        container.querySelectorAll('.nn-04-card').forEach(card => {
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
                const card       = this.closest('.nn-04-card');
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
        container.querySelectorAll('.nn-04-card').forEach((c, i) => {
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
    'panel-nn-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-nn-01', exercises: p1exercises }),
    'panel-nn-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-nn-05', exercises: p5exercises }),
    'panel-nn-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-nn-06', exercises: p6exercises }),
    'panel-nn-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-02', cards: p2cards }),
    'panel-nn-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-07', cards: p7cards }),
    'panel-nn-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-08', cards: p8cards }),
    'panel-nn-03': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-03', cards: p3cards }),
    'panel-nn-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-09', cards: p9cards }),
    'panel-nn-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-10', cards: p10cards }),
    'panel-nn-04': () => initPanel4NN(),
};

initPanelManager({ initializers, enableAccessControl: false });
