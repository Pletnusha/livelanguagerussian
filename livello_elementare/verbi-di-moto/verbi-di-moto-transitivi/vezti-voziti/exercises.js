import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix везти + возить
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} грузы через Эстонию, так быстрее выходит.",
        words: ["везём", "возим", "возят"],
        correctAnswers: { 1: "возим" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "В следующие выходные я {{1}} сына в горы кататься на лыжах!",
        words: ["везу", "вожу", "везёт"],
        correctAnswers: { 1: "везу" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Димин класс теперь {{1}} на экскурсии каждые выходные!",
        words: ["везут", "возят", "возит"],
        correctAnswers: { 1: "возят" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Откуда он {{1}} все эти коробки в такую рань?",
        words: ["возит", "везёт", "везут"],
        correctAnswers: { 1: "везёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты каждый день {{1}} детей в школу сама?",
        words: ["возишь", "везёшь", "возит"],
        correctAnswers: { 1: "возишь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Что я, лошадь? Хватит на мне воду {{1}}!",
        words: ["везти", "возить", "везёт"],
        correctAnswers: { 1: "возить" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Она {{1}} маму в больницу каждую неделю.",
        words: ["возит", "везёт", "возим"],
        correctAnswers: { 1: "возит" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Куда они {{1}} все эти коробки?",
        words: ["возят", "везут", "везёт"],
        correctAnswers: { 1: "везут" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Вы {{1}} туристов этой дорогой уже несколько лет?",
        words: ["везёте", "возите", "возят"],
        correctAnswers: { 1: "возите" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты куда {{1}} кота? Он явно недоволен!",
        words: ["возишь", "везёшь", "везут"],
        correctAnswers: { 1: "везёшь" }
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Solo ВОЗИТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Я {{1}} детей на тренировку по средам.",
        words: ["возим", "возит", "вожу"],
        correctAnswers: { 1: "вожу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Ты {{1}} маму в больницу каждую неделю?",
        words: ["вожу", "возишь", "возят"],
        correctAnswers: { 1: "возишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Она {{1}} Петю гулять в парк каждые выходные.",
        words: ["возим", "вожу", "возит"],
        correctAnswers: { 1: "возит" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Мы {{1}} грузы через Эстонию, так быстрее выходит.",
        words: ["возят", "возим", "возит"],
        correctAnswers: { 1: "возим" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Вы {{1}} туристов этой дорогой уже несколько лет?",
        words: ["возите", "возят", "возим"],
        correctAnswers: { 1: "возите" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Димин класс {{1}} на экскурсии каждые выходные!",
        words: ["возит", "возите", "возят"],
        correctAnswers: { 1: "возят" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Я {{1}} продукты в офис каждую пятницу.",
        words: ["возит", "вожу", "возим"],
        correctAnswers: { 1: "вожу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Антон {{1}} коллег на работу на своей машине.",
        words: ["вожу", "возите", "возит"],
        correctAnswers: { 1: "возит" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Мы раньше {{1}} товары на юг, теперь только на север.",
        words: ["возит", "возите", "возим"],
        correctAnswers: { 1: "возим" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Ты {{1}} внуков в школу каждое утро?",
        words: ["возит", "возишь", "возят"],
        correctAnswers: { 1: "возишь" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo ВЕЗТИ
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Куда ты {{1}} все эти коробки в такую рань?",
        words: ["везёшь", "везут", "везём"],
        correctAnswers: { 1: "везёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Я {{1}} маму в аэропорт — она улетает вечером.",
        words: ["везём", "везёшь", "везу"],
        correctAnswers: { 1: "везу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Он {{1}} детей на дачу, пробки жуткие.",
        words: ["везёшь", "везёт", "везут"],
        correctAnswers: { 1: "везёт" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Мы {{1}} гостей на экскурсию по старому городу.",
        words: ["везут", "везёте", "везём"],
        correctAnswers: { 1: "везём" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Вы {{1}} груз через таможню? Документы готовы?",
        words: ["везём", "везёшь", "везёте"],
        correctAnswers: { 1: "везёте" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Они {{1}} оборудование прямо сейчас — ждите к обеду.",
        words: ["везёт", "везём", "везут"],
        correctAnswers: { 1: "везут" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Куда ты {{1}} кота? Он явно недоволен!",
        words: ["везут", "везёшь", "везёт"],
        correctAnswers: { 1: "везёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Я {{1}} документы в офис — успею до закрытия.",
        words: ["везёт", "везу", "везём"],
        correctAnswers: { 1: "везу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Они {{1}} продукты из деревни каждое воскресенье.",
        words: ["везёт", "везёте", "везут"],
        correctAnswers: { 1: "везут" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Она {{1}} внучку к врачу — запись была на утро.",
        words: ["везут", "везёт", "везём"],
        correctAnswers: { 1: "везёт" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public · Mix ВЕЗТИ + ВОЗИТЬ
// ============================================================
const p2cards = [
    { front: "Я опаздываю —",                back: "везу документы в офис" },
    { front: "Осторожно! Грузовик сейчас",   back: "везёт кирпичи на стройку" },
    { front: "По понедельникам мама",         back: "возит Катю на танцы" },
    { front: "Такси уже здесь —",            back: "везёт меня домой" },
    { front: "Коля каждую пятницу",          back: "возит маму в больницу" },
    { front: "По субботам они",              back: "возят товар на рынок" },
    { front: "Машина тронулась — папа",      back: "везёт нас на дачу" },
    { front: "Дедушка всегда",               back: "возит нас на рыбалку летом" },
    { front: "Они уже в дороге —",           back: "везут детей к бабушке" },
    { front: "Ты каждый вечер",              back: "возишь его с тренировки?" },
];

// ============================================================
// PANEL 3 — Flashcard · paid · Mix ВЕЗТИ + ВОЗИТЬ
// ============================================================
const p3cards = [
    { front: "Прямо сейчас я",              back: "везу маму в аэропорт — она улетает вечером" },
    { front: "Смотри — они уже едут,",      back: "везут оборудование прямо к нам" },
    { front: "Мне",                         back: "везёт — уже третий раз нахожу деньги на улице!" },
    { front: "Ты каждую неделю",            back: "возишь сына на тренировки?" },
    { front: "Она каждую неделю",           back: "возит маму в больницу" },
    { front: "Вы уже несколько лет",        back: "возите туристов этой дорогой?" },
    { front: "Хватит на мне воду",          back: "возить! Я тебе не лошадь." },
    { front: "Куда ты сейчас",              back: "везёшь кота? Он явно недоволен!" },
    { front: "Каждое утро он",              back: "возит детей в школу" },
    { front: "Мы сейчас",                   back: "везём гостей на экскурсию по старому городу" },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Consolidamento 2
// ============================================================
const p10cards = [
    { front: "Они сейчас",                  back: "везут мебель на новую квартиру" },
    { front: "Раз в неделю курьер",         back: "возит документы между офисами" },
    { front: "Каждое утро муж",             back: "возит меня на работу" },
    { front: "Подожди — я сейчас",          back: "везу контракт на подпись" },
    { front: "По договору они",             back: "возят грузы только в пределах города" },
    { front: "Андрей сейчас",               back: "везёт жену в аэропорт" },
    { front: "Смотри, курьер сейчас",       back: "везёт твой заказ — уже на улице" },
    { front: "Каждое лето родители",        back: "возят его к бабушке в деревню" },
    { front: "Ты каждый год",               back: "возишь семью на море?" },
    { front: "Сегодня я",                   back: "везу детей к врачу — звонила час назад" },
];

// ============================================================
// PANEL 9 — Flashcard · paid · Consolidamento
// ============================================================
const p9cards = [
    { front: "Папа сейчас",             back: "везёт нас на вокзал — поезд через час" },
    { front: "Они каждое лето",         back: "возят детей на море" },
    { front: "Он сейчас",               back: "везёт договор в банк — ждите звонка" },
    { front: "Два раза в неделю она",   back: "возит дочь на танцы" },
    { front: "Ей всегда",               back: "везёт в картах — выигрывает каждый раз" },
    { front: "Раз в месяц мы",          back: "возим документы в головной офис" },
    { front: "Нам сегодня",             back: "везёт — все переговоры прошли гладко" },
    { front: "Вы каждый день",          back: "возите детей в садик сами?" },
    { front: "По воскресеньям я",       back: "вожу бабушку на рынок" },
    { front: "Каждый вечер я",          back: "вожу собаку на прогулку в парк" },
];

// ============================================================
// PANEL 8 — Flashcard · paid · Mix ВЕЗТИ + ВОЗИТЬ
// ============================================================
const p8cards = [
    { front: "Прямо сейчас я",              back: "везу маму в аэропорт — она улетает вечером" },
    { front: "Смотри — они уже едут,",      back: "везут оборудование прямо к нам" },
    { front: "Она каждую неделю",           back: "возит маму в больницу" },
    { front: "Вы уже несколько лет",        back: "возите туристов этой дорогой?" },
    { front: "Каждое утро он",              back: "возит детей в школу" },
    { front: "Два раза в неделю она",       back: "возит дочь на танцы" },
    { front: "Он сейчас",                   back: "везёт договор в банк — ждите звонка" },
    { front: "Нам сегодня",                 back: "везёт — все переговоры прошли гладко" },
    { front: "Вы каждый день",              back: "возите детей в садик сами?" },
    { front: "Каждый вечер я",              back: "вожу собаку на прогулку в парк" },
];

// ============================================================
// PANEL 7 — Flashcard · paid · Mix ВЕЗТИ + ВОЗИТЬ
// ============================================================
const p7cards = [
    { front: "Мне",                         back: "везёт — уже третий раз нахожу деньги на улице!" },
    { front: "Ты каждую неделю",            back: "возишь сына на тренировки?" },
    { front: "Хватит на мне воду",          back: "возить! Я тебе не лошадь." },
    { front: "Куда ты сейчас",              back: "везёшь кота? Он явно недоволен!" },
    { front: "Мы сейчас",                   back: "везём гостей на экскурсию по старому городу" },
    { front: "Папа сейчас",                 back: "везёт нас на вокзал — поезд через час" },
    { front: "По воскресеньям я",           back: "вожу бабушку на рынок" },
    { front: "Они каждое лето",             back: "возят детей на море" },
    { front: "Ей всегда",                   back: "везёт в картах — выигрывает каждый раз" },
    { front: "Раз в месяц мы",              back: "возим документы в головной офис" },
];

// ============================================================
// PANEL 4 — Mixed Quiz · paid · ВЕЗТИ/ВОЗИТЬ
// ============================================================
function initPanel4VZ() {
    const panel = document.getElementById('panel-vz-04');
    if (!panel) return;

    const container = panel.querySelector('#vz-04-cards-container');
    const prevBtn   = panel.querySelector('#vz-04-deck-prev');
    const nextBtn   = panel.querySelector('#vz-04-deck-next');
    const counterEl = panel.querySelector('#vz-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Ты каждый день ___ детей в школу сама?",              options: ["возишь",  "везёшь", "возит"],  answer: "возишь"  },
        { question: "Откуда он ___ все эти коробки в такую рань?",          options: ["возит",   "везёт",  "везут"],  answer: "везёт"   },
        { question: "Она ___ маму в больницу каждую неделю.",               options: ["везёт",   "возит",  "возим"],  answer: "возит"   },
        { question: "Куда они ___ все эти коробки?",                        options: ["возят",   "везут",  "везёт"],  answer: "везут"   },
        { question: "Я ___ детей на тренировку по средам.",                 options: ["везу",    "вожу",   "возит"],  answer: "вожу"    },
        { question: "Ты ___ внуков в школу каждое утро?",                   options: ["везёшь",  "возишь", "возит"],  answer: "возишь"  },
        { question: "Антон ___ коллег на работу на своей машине.",          options: ["везёт",   "вожу",   "возит"],  answer: "возит"   },
        { question: "Он ___ детей на дачу, пробки жуткие.",                 options: ["возит",   "везёт",  "везём"],  answer: "везёт"   },
        { question: "Мы ___ гостей на экскурсию по старому городу.",        options: ["возим",   "везём",  "везут"],  answer: "везём"   },
        { question: "Они ___ оборудование прямо сейчас — ждите к обеду.",   options: ["возят",   "везёт",  "везут"],  answer: "везут"   },
    ];

    const matchPairs = [
        { left: "Я опаздываю —",           right: "везу документы в офис"                        },
        { left: "По понедельникам мама",    right: "возит Катю на танцы"                          },
        { left: "Машина тронулась — папа",  right: "везёт нас на дачу"                           },
        { left: "Они уже в дороге —",       right: "везут детей к бабушке"                       },
        { left: "Ты каждый вечер",          right: "возишь его с тренировки?"                    },
        { left: "Прямо сейчас я",           right: "везу маму в аэропорт — она улетает вечером"  },
        { left: "Ты каждую неделю",         right: "возишь сына на тренировки?"                  },
        { left: "Вы уже несколько лет",     right: "возите туристов этой дорогой?"               },
        { left: "Мы сейчас",                right: "везём гостей на экскурсию по старому городу" },
        { left: "Хватит на мне воду",       right: "возить! Я тебе не лошадь."                   },
    ];

    const quizData = [
        { id: "vz-001", promptPrefix: "Мне",               promptSuffix: "— уже третий раз нахожу деньги на улице!", answers: ["везёт"]  },
        { id: "vz-002", promptPrefix: "Ей всегда",          promptSuffix: "в картах — выигрывает каждый раз.",       answers: ["везёт"]  },
        { id: "vz-003", promptPrefix: "Хватит на мне воду", promptSuffix: "! Я тебе не лошадь.",                     answers: ["возить"] },
        { id: "vz-004", promptPrefix: "Папа сейчас",        promptSuffix: "нас на вокзал — поезд через час.",        answers: ["везёт"]  },
        { id: "vz-005", promptPrefix: "По воскресеньям я",  promptSuffix: "бабушку на рынок.",                       answers: ["вожу"]   },
        { id: "vz-006", promptPrefix: "Прямо сейчас я",     promptSuffix: "маму в аэропорт — она улетает вечером.",  answers: ["везу"]   },
        { id: "vz-007", promptPrefix: "Она каждую неделю",  promptSuffix: "маму в больницу.",                        answers: ["возит"]  },
        { id: "vz-008", promptPrefix: "Он сейчас",          promptSuffix: "договор в банк — ждите звонка.",          answers: ["везёт"]  },
        { id: "vz-009", promptPrefix: "Вы каждый день",     promptSuffix: "детей в садик сами?",                     answers: ["возите"] },
        { id: "vz-010", promptPrefix: "Каждый вечер я",     promptSuffix: "собаку на прогулку в парк.",              answers: ["вожу"]   },
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
            card.className = 'fca01-card-container vz-04-card';
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
        container.querySelectorAll('.vz-04-card').forEach(card => {
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
                const card       = this.closest('.vz-04-card');
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
        container.querySelectorAll('.vz-04-card').forEach((c, i) => {
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
    'panel-vz-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-vz-01', exercises: p1exercises }),
    'panel-vz-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-02', cards: p2cards }),
    'panel-vz-03': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-03', cards: p3cards }),
    'panel-vz-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-vz-05', exercises: p5exercises }),
    'panel-vz-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-vz-06', exercises: p6exercises }),
    'panel-vz-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-07', cards: p7cards }),
    'panel-vz-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-08', cards: p8cards }),
    'panel-vz-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-09', cards: p9cards }),
    'panel-vz-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-10', cards: p10cards }),
    'panel-vz-04': () => initPanel4VZ(),
};

initPanelManager({ initializers, enableAccessControl: true });
