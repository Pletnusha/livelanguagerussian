import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix ехал/ехала/ехали vs ездил/ездила/ездили
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Вчера она {{1}} в командировку на поезде.",
        words: ["ехала", "ездила", "ехал"],
        correctAnswers: { 1: "ехала" }
        // ехала = in viaggio in quel momento
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Раньше он каждое лето {{1}} на море.",
        words: ["ездил", "ехал", "ездили"],
        correctAnswers: { 1: "ездил" }
        // ездил = abitudine passata
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Мы {{1}} по шоссе, когда увидели аварию.",
        words: ["ехали", "ездили", "ехал"],
        correctAnswers: { 1: "ехали" }
        // ехали = in movimento in quel momento
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Ты {{1}} вчера на работу на метро?",
        words: ["ездил", "ехал", "ездила"],
        correctAnswers: { 1: "ездил" }
        // ездил = completato, andata e ritorno
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Она {{1}} в Москву на конференцию и вернулась вечером.",
        words: ["ездила", "ехала", "ездил"],
        correctAnswers: { 1: "ездила" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Он {{1}} на велосипеде и пел.",
        words: ["ехал", "ездил", "ехали"],
        correctAnswers: { 1: "ехал" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Они никогда не {{1}} на поезде.",
        words: ["ездили", "ехали", "ездил"],
        correctAnswers: { 1: "ездили" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Автобус {{1}} очень медленно.",
        words: ["ехал", "ездил", "ехали"],
        correctAnswers: { 1: "ехал" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "В прошлом году они часто {{1}} за город.",
        words: ["ездили", "ехали", "ездил"],
        correctAnswers: { 1: "ездили" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Мы {{1}} через горы три часа.",
        words: ["ехали", "ездили", "ехал"],
        correctAnswers: { 1: "ехали" }
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Solo ЕХАТЬ passato (ехал / ехала / ехало / ехали)
// ============================================================
const p5exercises = [
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Я {{1}} на работу на метро, когда сломался поезд.",
        words: ["ехал", "ехала", "ехали"],
        correctAnswers: { 1: "ехал" }
    },
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Она {{1}} на такси и слушала музыку.",
        words: ["ехала", "ехал", "ехали"],
        correctAnswers: { 1: "ехала" }
    },
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Мы {{1}} через весь город два часа.",
        words: ["ехали", "ехал", "ехала"],
        correctAnswers: { 1: "ехали" }
    },
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Такси {{1}} слишком быстро.",
        words: ["ехало", "ехал", "ехали"],
        correctAnswers: { 1: "ехало" }
    },
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Он {{1}} на велосипеде вниз с горы.",
        words: ["ехал", "ехала", "ехали"],
        correctAnswers: { 1: "ехал" }
    },
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Она {{1}} в аэропорт и опаздывала.",
        words: ["ехала", "ехал", "ехали"],
        correctAnswers: { 1: "ехала" }
    },
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Они {{1}} молча всю дорогу.",
        words: ["ехали", "ехал", "ехала"],
        correctAnswers: { 1: "ехали" }
    },
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Поезд {{1}} без остановок.",
        words: ["ехал", "ехало", "ехали"],
        correctAnswers: { 1: "ехал" }
    },
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Она {{1}} на автобусе и читала книгу.",
        words: ["ехала", "ехал", "ехали"],
        correctAnswers: { 1: "ехала" }
    },
    {
        instruction: "Completa con la forma corretta di ЕХАТЬ al passato.",
        text: "Мы {{1}} так долго, что уснули в машине.",
        words: ["ехали", "ехал", "ехала"],
        correctAnswers: { 1: "ехали" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo ЕЗДИТЬ passato (ездил / ездила / ездило / ездили)
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Раньше он {{1}} на работу на велосипеде.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Она каждое лето {{1}} к родителям.",
        words: ["ездила", "ездил", "ездили"],
        correctAnswers: { 1: "ездила" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "В детстве мы часто {{1}} на дачу.",
        words: ["ездили", "ездил", "ездила"],
        correctAnswers: { 1: "ездили" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Он никогда не {{1}} за границу.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Лена {{1}} в командировки почти каждый месяц.",
        words: ["ездила", "ездил", "ездили"],
        correctAnswers: { 1: "ездила" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Они {{1}} на машине, пока не купили квартиру в центре.",
        words: ["ездили", "ездил", "ездила"],
        correctAnswers: { 1: "ездили" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Он {{1}} на работу на трамвае много лет.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Бабушка редко {{1}} на метро.",
        words: ["ездила", "ездил", "ездили"],
        correctAnswers: { 1: "ездила" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Студенты {{1}} в архив каждую неделю.",
        words: ["ездили", "ездил", "ездила"],
        correctAnswers: { 1: "ездили" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Он {{1}} в Петербург несколько раз.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Вчера он", back: "ездил в командировку" },
    { front: "Она ехала на такси", back: "и слушала музыку" },
    { front: "Каждое лето мы", back: "ездили на море" },
    { front: "Когда он ехал домой", back: "попал в пробку" },
    { front: "Мы ехали через горы", back: "три часа" },
    { front: "Лена часто", back: "ездила в командировки" },
    { front: "Автобус ехал", back: "очень медленно" },
    { front: "Раньше она никогда не", back: "ездила за границу" },
    { front: "Он ехал на работу", back: "когда сломался поезд" },
    { front: "В детстве мы", back: "ездили на дачу каждые выходные" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Она ехала в аэропорт", back: "и опаздывала" },
    { front: "Раньше он", back: "ездил на работу на велосипеде" },
    { front: "Мы ехали молча", back: "всю дорогу" },
    { front: "В прошлом году она", back: "ездила в Москву несколько раз" },
    { front: "Поезд ехал", back: "без остановок" },
    { front: "Они никогда не", back: "ездили на поезде" },
    { front: "Такси ехало", back: "слишком быстро" },
    { front: "Они ехали на вечеринку", back: "на другой конец города" },
    { front: "Бабушка редко", back: "ездила на метро" },
    { front: "Мы ехали так долго", back: "что уснули в машине" },
];

// ============================================================
// PANEL 7 — Flashcard · student
// ============================================================
const p7cards = [
    { front: "Я ехал на работу", back: "и думал о встрече" },
    { front: "Она ездила к подруге", back: "на другой конец города" },
    { front: "Когда они ехали к остановке", back: "начался снег" },
    { front: "Он ездил в библиотеку", back: "каждые выходные" },
    { front: "Мы ехали через парк", back: "потому что так быстрее" },
    { front: "Лена ездила к маме", back: "почти каждые выходные" },
    { front: "Они долго ехали", back: "не зная куда" },
    { front: "Раньше я ездил на работу на метро", back: "но потом купил машину" },
    { front: "Она ехала и пела", back: "любимую песню" },
    { front: "Мы ездили в этот город", back: "ещё студентами" },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Пока она ехала домой", back: "начался сильный дождь" },
    { front: "Он ездил к Кате", back: "каждую неделю" },
    { front: "Мы ехали так долго", back: "что устали" },
    { front: "Она ездила на работу", back: "на трамвае много лет" },
    { front: "Когда я ехал через центр", back: "попал в пробку" },
    { front: "В студенчестве они", back: "ездили в один и тот же лагерь" },
    { front: "Он ехал первым", back: "остальные — за ним" },
    { front: "Она никогда не ездила", back: "в такие дальние места" },
    { front: "Мы ехали на автобусе", back: "потому что метро не работало" },
    { front: "Раньше он ездил домой", back: "через этот мост" },
];

// ============================================================
// PANEL 9 — Flashcard · student
// ============================================================
const p9cards = [
    { front: "Вчера она ездила в Москву", back: "на конференцию" },
    { front: "Он ехал так быстро", back: "что я не успевал" },
    { front: "Мы часто ездили отдыхать", back: "на юг" },
    { front: "Пока он ехал к машине", back: "вспомнил, что забыл ключи" },
    { front: "Она ездила в школу", back: "на автобусе" },
    { front: "Они ехали к нам", back: "из другого города" },
    { front: "В детстве он ездил", back: "на море каждое лето" },
    { front: "Она ехала очень медленно", back: "потому что шёл снег" },
    { front: "Мы ездили в горы", back: "каждую зиму" },
    { front: "Он ехал и думал", back: "что скажет ей" },
];

// ============================================================
// PANEL 10 — Flashcard · paid
// ============================================================
const p10cards = [
    { front: "Она ехала по шоссе", back: "и смотрела на закат" },
    { front: "Раньше он ездил за продуктами", back: "только в этот супермаркет" },
    { front: "Они ехали долго", back: "почти пять часов" },
    { front: "Она ездила на работу", back: "на велосипеде даже зимой" },
    { front: "Мы ехали по горной дороге", back: "и любовались видами" },
    { front: "Он ездил к ней", back: "несколько лет подряд" },
    { front: "Пока они ехали", back: "успели обо всём поговорить" },
    { front: "Она ездила в этот город", back: "с детства" },
    { front: "Он ехал не торопясь", back: "наслаждаясь дорогой" },
    { front: "Мы ездили на дачу", back: "каждое воскресенье летом" },
];


// ============================================================
// PANEL 4 — Mixed Quiz · public
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-past-ez-04');
    if (!panel) return;

    const container = panel.querySelector('#past-ez-04-cards-container');
    const prevBtn   = panel.querySelector('#past-ez-04-deck-prev');
    const nextBtn   = panel.querySelector('#past-ez-04-deck-next');
    const counterEl = panel.querySelector('#past-ez-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Вчера он ___ в командировку на поезде.", options: ["ездил", "ехал", "ездили"], answer: "ездил" },
        { question: "Автобус ___ очень медленно.", options: ["ехал", "ездил", "ехали"], answer: "ехал" },
        { question: "Раньше мы каждое лето ___ на море.", options: ["ездили", "ехали", "ехал"], answer: "ездили" },
        { question: "Она ___ в аэропорт и опаздывала.", options: ["ехала", "ездила", "ехали"], answer: "ехала" },
        { question: "Поезд ___ без остановок.", options: ["ехал", "ездил", "ехали"], answer: "ехал" },
        { question: "В детстве он часто ___ на дачу.", options: ["ездил", "ехал", "ехали"], answer: "ездил" },
        { question: "Они ___ через горы три часа.", options: ["ехали", "ездили", "ехал"], answer: "ехали" },
        { question: "Лена ___ в командировки каждый месяц.", options: ["ездила", "ехала", "ездил"], answer: "ездила" },
        { question: "Такси ___ слишком быстро.", options: ["ехало", "ездило", "ехал"], answer: "ехало" },
        { question: "Мы ___ молча всю дорогу.", options: ["ехали", "ездили", "ехал"], answer: "ехали" },
    ];

    const matchPairs = [
        { left: "Вчера он", right: "ездил в командировку" },
        { left: "Она ехала на такси", right: "и слушала музыку" },
        { left: "Каждое лето мы", right: "ездили на море" },
        { left: "Поезд", right: "ехал без остановок" },
        { left: "Они ехали молча", right: "всю дорогу" },
        { left: "Лена часто", right: "ездила в командировки" },
        { left: "Он ехал домой", right: "и попал в пробку" },
        { left: "Такси", right: "ехало слишком быстро" },
        { left: "Мы ехали через горы", right: "три часа" },
        { left: "Раньше она", right: "никогда не ездила за границу" },
    ];

    const quizData = [
        { id: "past-ez-001", promptPrefix: "Она", promptSuffix: "на такси и слушала музыку.", answers: ["ехала"] },
        { id: "past-ez-002", promptPrefix: "Раньше он каждое лето", promptSuffix: "на море.", answers: ["ездил"] },
        { id: "past-ez-003", promptPrefix: "Мы", promptSuffix: "через горы, когда сломалась машина.", answers: ["ехали"] },
        { id: "past-ez-004", promptPrefix: "В детстве она", promptSuffix: "к бабушке каждое лето.", answers: ["ездила"] },
        { id: "past-ez-005", promptPrefix: "Поезд", promptSuffix: "без остановок.", answers: ["ехал"] },
        { id: "past-ez-006", promptPrefix: "Они", promptSuffix: "к нам из другого города.", answers: ["ехали"] },
        { id: "past-ez-007", promptPrefix: "Он никогда не", promptSuffix: "за границу.", answers: ["ездил"] },
        { id: "past-ez-008", promptPrefix: "Такси", promptSuffix: "слишком быстро.", answers: ["ехало"] },
        { id: "past-ez-009", promptPrefix: "Мы", promptSuffix: "молча всю дорогу домой.", answers: ["ехали"] },
        { id: "past-ez-010", promptPrefix: "Каждое лето мы", promptSuffix: "на дачу.", answers: ["ездили"] },
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
            card.className = 'fca01-card-container past-ez-04-card';
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
        container.querySelectorAll('.past-ez-04-card').forEach(card => {
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
                const card       = this.closest('.past-ez-04-card');
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
        container.querySelectorAll('.past-ez-04-card').forEach((c, i) => {
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
    'panel-past-ez-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ez-01',    exercises: p1exercises }),
    'panel-past-ez-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ez-05',    exercises: p5exercises }),
    'panel-past-ez-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ez-06',    exercises: p6exercises }),
    'panel-past-ez-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ez-02', cards: p2cards }),
    'panel-past-ez-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ez-03', cards: p3cards }),
    'panel-past-ez-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ez-07', cards: p7cards }),
    'panel-past-ez-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ez-08', cards: p8cards }),
    'panel-past-ez-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ez-09', cards: p9cards }),
    'panel-past-ez-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-ez-10', cards: p10cards }),
    'panel-past-ez-04':  () => initPanel4(),
};

initPanelManager({ initializers, enableAccessControl: false });
