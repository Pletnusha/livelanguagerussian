import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · "В МАГАЗИНЕ"
// Frasi da v-magazine (pannelli 1–3). Distrattori: senso (genere/numero) + forma
// (accusativo на него / на неё; per il plurale «на их» senza н-). Approvato PM 23.11.2026.
// ============================================================
const P1_INSTR = "Sostituisci il nome con il pronome.";
const P1_RULE = "Dopo в / на il pronome prende н-: на нём, на ней, на них.";
const p1exercises = [
    {
        instruction: P1_INSTR,
        text: "Платья на&nbsp;вешалках. → Платья {{1}}.",
        words: ["на нём", "на их", "на них"],
        correctAnswers: { 1: "на них" },
        explanation: "вешалки (pl.) → на них. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Продукты в&nbsp;тележке. → Продукты {{1}}.",
        words: ["в ней", "в нём", "в неё"],
        correctAnswers: { 1: "в ней" },
        explanation: "тележка (f.) → в ней. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Ценник на&nbsp;рубашке. → Ценник {{1}}.",
        words: ["на нём", "на ней", "на неё"],
        correctAnswers: { 1: "на ней" },
        explanation: "рубашка (f.) → на ней. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Джинсы на&nbsp;полках. → Джинсы {{1}}.",
        words: ["на них", "на ней", "на их"],
        correctAnswers: { 1: "на них" },
        explanation: "полки (pl.) → на них. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Карты в&nbsp;шкафу. → Карты {{1}}.",
        words: ["в ней", "в него", "в нём"],
        correctAnswers: { 1: "в нём" },
        explanation: "шкаф (m.) → в нём. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Новая коллекция на&nbsp;витрине. → Новая коллекция {{1}}.",
        words: ["на неё", "на ней", "на нём"],
        correctAnswers: { 1: "на ней" },
        explanation: "витрина (f.) → на ней. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Обувь в&nbsp;коробках. → Обувь {{1}}.",
        words: ["в нём", "в их", "в них"],
        correctAnswers: { 1: "в них" },
        explanation: "коробки (pl.) → в них. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Зеркало в&nbsp;примерочной. → Зеркало {{1}}.",
        words: ["в ней", "в нём", "в неё"],
        correctAnswers: { 1: "в ней" },
        explanation: "примерочная (f.) → в ней. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Хлеб на&nbsp;прилавке. → Хлеб {{1}}.",
        words: ["на нём", "на ней", "на него"],
        correctAnswers: { 1: "на нём" },
        explanation: "прилавок (m.) → на нём. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Носки на&nbsp;стойке. → Носки {{1}}.",
        words: ["на нём", "на неё", "на ней"],
        correctAnswers: { 1: "на ней" },
        explanation: "стойка (f.) → на ней. " + P1_RULE
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · "ГДЕ ЧТО?"
// Solo posizione di oggetti. Frasi da doma (7) + plurale da in-citta / v-magazine (3).
// Nessuna explanation (student). Approvato PM 23.11.2026.
// ============================================================
const P2_INSTR = "Sostituisci il nome con il pronome.";
const p2exercises = [
    {
        instruction: P2_INSTR,
        text: "Зубная паста на&nbsp;раковине. → Зубная паста {{1}}.",
        words: ["на нём", "на ней", "на неё"],
        correctAnswers: { 1: "на ней" }
    },
    {
        instruction: P2_INSTR,
        text: "Машины на&nbsp;подземных парковках. → Машины {{1}}.",
        words: ["на них", "на их", "на нём"],
        correctAnswers: { 1: "на них" }
    },
    {
        instruction: P2_INSTR,
        text: "Ваза на&nbsp;столе. → Ваза {{1}}.",
        words: ["на ней", "на него", "на нём"],
        correctAnswers: { 1: "на нём" }
    },
    {
        instruction: P2_INSTR,
        text: "Бутылка воды в&nbsp;холодильнике. → Бутылка воды {{1}}.",
        words: ["в нём", "в ней", "в него"],
        correctAnswers: { 1: "в нём" }
    },
    {
        instruction: P2_INSTR,
        text: "Вода в&nbsp;старинных фонтанах. → Вода {{1}}.",
        words: ["в нём", "в их", "в них"],
        correctAnswers: { 1: "в них" }
    },
    {
        instruction: P2_INSTR,
        text: "Ключи в&nbsp;сумке. → Ключи {{1}}.",
        words: ["в нём", "в ней", "в неё"],
        correctAnswers: { 1: "в ней" }
    },
    {
        instruction: P2_INSTR,
        text: "Занавеска на&nbsp;окне. → Занавеска {{1}}.",
        words: ["на нём", "на него", "на ней"],
        correctAnswers: { 1: "на нём" }
    },
    {
        instruction: P2_INSTR,
        text: "Йогурты на&nbsp;полках в&nbsp;молочном отделе. → Йогурты {{1}} в&nbsp;молочном отделе.",
        words: ["на их", "на них", "на ней"],
        correctAnswers: { 1: "на них" }
    },
    {
        instruction: P2_INSTR,
        text: "Кастрюля на&nbsp;плите. → Кастрюля {{1}}.",
        words: ["на ней", "на неё", "на нём"],
        correctAnswers: { 1: "на ней" }
    },
    {
        instruction: P2_INSTR,
        text: "Подушка в&nbsp;кресле. → Подушка {{1}}.",
        words: ["в ней", "в него", "в нём"],
        correctAnswers: { 1: "в нём" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid · "ВСЁ НА МЕСТЕ"
// Solo posizione di oggetti. Frasi da doma (7) + plurale da in-citta (1) e ripetuti
// «Обувь в коробках» (p1), «Машины на подземных парковках» (p2). Nessuna explanation (paid).
// Approvato PM 23.11.2026.
// ============================================================
const P3_INSTR = "Sostituisci il nome con il pronome.";
const p3exercises = [
    {
        instruction: P3_INSTR,
        text: "Ковёр на&nbsp;полу. → Ковёр {{1}}.",
        words: ["на него", "на нём", "на ней"],
        correctAnswers: { 1: "на нём" }
    },
    {
        instruction: P3_INSTR,
        text: "Квартиры в&nbsp;современных домах. → Квартиры {{1}}.",
        words: ["в нём", "в них", "в их"],
        correctAnswers: { 1: "в них" }
    },
    {
        instruction: P3_INSTR,
        text: "Картина на&nbsp;стене. → Картина {{1}}.",
        words: ["на неё", "на нём", "на ней"],
        correctAnswers: { 1: "на ней" }
    },
    {
        instruction: P3_INSTR,
        text: "Лампа на&nbsp;столе. → Лампа {{1}}.",
        words: ["на ней", "на нём", "на него"],
        correctAnswers: { 1: "на нём" }
    },
    {
        instruction: P3_INSTR,
        text: "Обувь в&nbsp;коробках. → Обувь {{1}}.",
        words: ["в них", "в их", "в ней"],
        correctAnswers: { 1: "в них" }
    },
    {
        instruction: P3_INSTR,
        text: "Полотенца на&nbsp;двери. → Полотенца {{1}}.",
        words: ["на нём", "на неё", "на ней"],
        correctAnswers: { 1: "на ней" }
    },
    {
        instruction: P3_INSTR,
        text: "Ботинки в&nbsp;тёмном коридоре. → Ботинки {{1}}.",
        words: ["в нём", "в ней", "в него"],
        correctAnswers: { 1: "в нём" }
    },
    {
        instruction: P3_INSTR,
        text: "Машины на&nbsp;подземных парковках. → Машины {{1}}.",
        words: ["на их", "на нём", "на них"],
        correctAnswers: { 1: "на них" }
    },
    {
        instruction: P3_INSTR,
        text: "Подушки на&nbsp;широкой кровати. → Подушки {{1}}.",
        words: ["на ней", "на неё", "на нём"],
        correctAnswers: { 1: "на ней" }
    },
    {
        instruction: P3_INSTR,
        text: "Ножи в&nbsp;ящике. → Ножи {{1}}.",
        words: ["в нём", "в ней", "в него"],
        correctAnswers: { 1: "в нём" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public · "ПОРЯДОК В ДОМЕ"
// front = frase originale, back = stessa frase con il pronome; distractors: genere/numero + forma.
// 5 frasi nuove da doma + 5 ripetute dai pannelli 1–3. Approvato PM 23.11.2026.
// ============================================================
const P4_RULE = " Dopo в / на il pronome prende н-: на нём, на ней, на них.";
const p4cards = [
    { front: "Ваза на столе", back: "Ваза на нём", distractors: ["Ваза на ней", "Ваза на него"], explanation: "стол (m.) → на нём." + P4_RULE },
    { front: "Платья на вешалках", back: "Платья на них", distractors: ["Платья на нём", "Платья на их"], explanation: "вешалки (pl.) → на них." + P4_RULE },
    { front: "Ключи в сумке", back: "Ключи в ней", distractors: ["Ключи в нём", "Ключи в неё"], explanation: "сумка (f.) → в ней." + P4_RULE },
    { front: "Пульт на диване", back: "Пульт на нём", distractors: ["Пульт на ней", "Пульт на него"], explanation: "диван (m.) → на нём." + P4_RULE },
    { front: "Вода в старинных фонтанах", back: "Вода в них", distractors: ["Вода в нём", "Вода в их"], explanation: "фонтаны (pl.) → в них." + P4_RULE },
    { front: "Книги на полке", back: "Книги на ней", distractors: ["Книги на нём", "Книги на неё"], explanation: "полка (f.) → на ней." + P4_RULE },
    { front: "Мясо в холодильнике", back: "Мясо в нём", distractors: ["Мясо в ней", "Мясо в него"], explanation: "холодильник (m.) → в нём." + P4_RULE },
    { front: "Обувь в коробках", back: "Обувь в них", distractors: ["Обувь в ней", "Обувь в их"], explanation: "коробки (pl.) → в них." + P4_RULE },
    { front: "Суп в кастрюле", back: "Суп в ней", distractors: ["Суп в нём", "Суп в неё"], explanation: "кастрюля (f.) → в ней." + P4_RULE },
    { front: "Кофе в шкафу", back: "Кофе в нём", distractors: ["Кофе в ней", "Кофе в него"], explanation: "шкаф (m.) → в нём." + P4_RULE }
];

// ============================================================
// PANEL 5 — Flashcard · student · "ГДЕ ЭТО?"
// 7 frasi nuove da doma + 3 plurali ripetuti. Nessuna explanation (student). Approvato PM 23.11.2026.
// ============================================================
const p5cards = [
    { front: "Курица в духовке", back: "Курица в ней", distractors: ["Курица в нём", "Курица в неё"] },
    { front: "Лампа на высоком потолке", back: "Лампа на нём", distractors: ["Лампа на ней", "Лампа на него"] },
    { front: "Джинсы на полках", back: "Джинсы на них", distractors: ["Джинсы на ней", "Джинсы на их"] },
    { front: "Чай в чашке", back: "Чай в ней", distractors: ["Чай в нём", "Чай в неё"] },
    { front: "Бокалы в шкафу", back: "Бокалы в нём", distractors: ["Бокалы в ней", "Бокалы в него"] },
    { front: "Машины на подземных парковках", back: "Машины на них", distractors: ["Машины на нём", "Машины на их"] },
    { front: "Посуда в раковине", back: "Посуда в ней", distractors: ["Посуда в нём", "Посуда в неё"] },
    { front: "Кресло в этом углу", back: "Кресло в нём", distractors: ["Кресло в ней", "Кресло в него"] },
    { front: "Квартиры в современных домах", back: "Квартиры в них", distractors: ["Квартиры в нём", "Квартиры в их"] },
    { front: "Шампунь на полке", back: "Шампунь на ней", distractors: ["Шампунь на нём", "Шампунь на неё"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid · "ВСЁ НА ВИДУ"
// 6 ultime frasi nuove da doma + 1 singolare e 3 plurali ripetuti. Nessuna explanation (paid).
// Approvato PM 23.11.2026.
// ============================================================
const p6cards = [
    { front: "Тарелки на полке", back: "Тарелки на ней", distractors: ["Тарелки на нём", "Тарелки на неё"] },
    { front: "Платья на вешалках", back: "Платья на них", distractors: ["Платья на нём", "Платья на их"] },
    { front: "Салатница на столе", back: "Салатница на нём", distractors: ["Салатница на ней", "Салатница на него"] },
    { front: "Туалетная бумага в коробке", back: "Туалетная бумага в ней", distractors: ["Туалетная бумага в нём", "Туалетная бумага в неё"] },
    { front: "Йогурты на полках в молочном отделе", back: "Йогурты на них в молочном отделе", distractors: ["Йогурты на ней в молочном отделе", "Йогурты на их в молочном отделе"] },
    { front: "Платье в шкафу", back: "Платье в нём", distractors: ["Платье в ней", "Платье в него"] },
    { front: "Тарелки в раковине", back: "Тарелки в ней", distractors: ["Тарелки в нём", "Тарелки в неё"] },
    { front: "Подушки на диване", back: "Подушки на нём", distractors: ["Подушки на ней", "Подушки на него"] },
    { front: "Вода в старинных фонтанах", back: "Вода в них", distractors: ["Вода в нём", "Вода в их"] },
    { front: "Картина на стене", back: "Картина на ней", distractors: ["Картина на нём", "Картина на неё"] }
];

// ============================================================
// PANEL 7 — Quiz misto (multiple choice + match + write) · public
// «ТЕСТ»: 10 scelta multipla + 10 abbinamento + 10 da scrivere; solo frasi ripetute dai pannelli 1–6.
// Verifica scrittura indulgente (maiuscole, ё/е, punto finale) come anno-nascita. Approvato PM 23.11.2026.
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelPronPrep7() {
    const panel = document.getElementById('panel-pron-prep-7');
    if (!panel) return;

    const container = panel.querySelector('#pron-prep-7-cards-container');
    const prevBtn   = panel.querySelector('#pron-prep-7-deck-prev');
    const nextBtn   = panel.querySelector('#pron-prep-7-deck-next');
    const counterEl = panel.querySelector('#pron-prep-7-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Зубная паста на раковине. → Зубная паста ___.", options: ["на нём",  "на ней",  "на неё"], answer: "на ней" },
        { question: "Джинсы на полках. → Джинсы ___.", options: ["на их",  "на них",  "на ней"], answer: "на них" },
        { question: "Бутылка воды в холодильнике. → Бутылка воды ___.", options: ["в ней",  "в него",  "в нём"], answer: "в нём" },
        { question: "Ценник на рубашке. → Ценник ___.", options: ["на нём",  "на ней",  "на неё"], answer: "на ней" },
        { question: "Обувь в коробках. → Обувь ___.", options: ["в них",  "в нём",  "в их"], answer: "в них" },
        { question: "Пульт на диване. → Пульт ___.", options: ["на него",  "на ней",  "на нём"], answer: "на нём" },
        { question: "Ключи в сумке. → Ключи ___.", options: ["в ней",  "в неё",  "в нём"], answer: "в ней" },
        { question: "Машины на подземных парковках. → Машины ___.", options: ["на нём",  "на их",  "на них"], answer: "на них" },
        { question: "Занавеска на окне. → Занавеска ___.", options: ["на ней",  "на нём",  "на него"], answer: "на нём" },
        { question: "Курица в духовке. → Курица ___.", options: ["в нём",  "в неё",  "в ней"], answer: "в ней" }
    ];
    const matchPairs = [
        { left: "Ваза на столе", right: "Ваза на нём" },
        { left: "Платья на вешалках", right: "Платья на них" },
        { left: "Картина на стене", right: "Картина на ней" },
        { left: "Мясо в холодильнике", right: "Мясо в нём" },
        { left: "Вода в старинных фонтанах", right: "Вода в них" },
        { left: "Книги на полке", right: "Книги на ней" },
        { left: "Ковёр на полу", right: "Ковёр на нём" },
        { left: "Квартиры в современных домах", right: "Квартиры в них" },
        { left: "Суп в кастрюле", right: "Суп в ней" },
        { left: "Хлеб на прилавке", right: "Хлеб на нём" }
    ];
    const quizData = [
        { id: "pron-prep-001", promptPrefix: "Кофе в шкафу. → Кофе ", promptSuffix: ".", answers: ["в нём"] },
        { id: "pron-prep-002", promptPrefix: "Йогурты на полках в молочном отделе. → Йогурты ", promptSuffix: " в молочном отделе.", answers: ["на них"] },
        { id: "pron-prep-003", promptPrefix: "Кастрюля на плите. → Кастрюля ", promptSuffix: ".", answers: ["на ней"] },
        { id: "pron-prep-004", promptPrefix: "Подушка в кресле. → Подушка ", promptSuffix: ".", answers: ["в нём"] },
        { id: "pron-prep-005", promptPrefix: "Новая коллекция на витрине. → Новая коллекция ", promptSuffix: ".", answers: ["на ней"] },
        { id: "pron-prep-006", promptPrefix: "Квартиры в современных домах. → Квартиры ", promptSuffix: ".", answers: ["в них"] },
        { id: "pron-prep-007", promptPrefix: "Лампа на столе. → Лампа ", promptSuffix: ".", answers: ["на нём"] },
        { id: "pron-prep-008", promptPrefix: "Тарелки в раковине. → Тарелки ", promptSuffix: ".", answers: ["в ней"] },
        { id: "pron-prep-009", promptPrefix: "Джинсы на полках. → Джинсы ", promptSuffix: ".", answers: ["на них"] },
        { id: "pron-prep-010", promptPrefix: "Ботинки в тёмном коридоре. → Ботинки ", promptSuffix: ".", answers: ["в нём"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ').replace(/[.!]+$/, '').toLowerCase().replace(/ё/g, 'е');
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
            card.className = 'fca01-card-container pron-prep-7-card';
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
                        feedbackEl.textContent = "✨ Отлично!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "🎉 ПОБЕДА! 🎉";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "Неверно";
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
        container.querySelectorAll('.pron-prep-7-card').forEach(card => {
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
                const card    = this.closest('.pron-prep-7-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === normalizeInput(ans));
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
        container.querySelectorAll('.pron-prep-7-card').forEach((c, i) => {
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
    'panel-pron-prep-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pron-prep-01', exercises: p1exercises }),
    'panel-pron-prep-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pron-prep-02', exercises: p2exercises }),
    'panel-pron-prep-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-pron-prep-03', exercises: p3exercises }),
    'panel-pron-prep-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-pron-prep-04', cards: p4cards }),
    'panel-pron-prep-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-pron-prep-05', cards: p5cards }),
    'panel-pron-prep-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-pron-prep-06', cards: p6cards }),
    'panel-pron-prep-7': () => initPanelPronPrep7()
};

initPanelManager({ initializers, enableAccessControl: true });
