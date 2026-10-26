import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// НСВ или СВ — с пояснениями
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей любит {{1}} на компьютерной приставке.",
        words: ["играть", "поиграть"],
        correctAnswers: { 1: "играть" },
        explanation: "Dopo «любит» si usa l'imperfettivo: è un'attività abituale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} работу.",
        words: ["искать", "найти"],
        correctAnswers: { 1: "найти" },
        explanation: "Dopo «хочет» si usa il perfettivo: trovare un lavoro concreto, risultato."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрею нравится {{1}} Достоевского.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" },
        explanation: "Dopo «нравится» si usa l'imperfettivo: leggere come attività abituale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} всю мировую классику.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "прочитать" },
        explanation: "Dopo «хочет» si usa il perfettivo: leggere tutto, risultato concreto."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей ненавидит {{1}} документальные фильмы.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "смотреть" },
        explanation: "Dopo «ненавидит» si usa l'imperfettivo: odia guardare in generale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} серию документальных фильмов.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "посмотреть" },
        explanation: "Dopo «хочет» si usa il perfettivo: guardare una serie specifica."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей любит {{1}} о Достоевском с Женей.",
        words: ["спорить", "поспорить"],
        correctAnswers: { 1: "спорить" },
        explanation: "Dopo «любит» si usa l'imperfettivo: discutere come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} спорить с Женей.",
        words: ["переставать", "перестать"],
        correctAnswers: { 1: "перестать" },
        explanation: "Dopo «хочет» si usa il perfettivo: smettere una volta per tutte."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} на диету.",
        words: ["садиться", "сесть"],
        correctAnswers: { 1: "сесть" },
        explanation: "Dopo «хочет» si usa il perfettivo: mettersi a dieta, decisione concreta."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} курить.",
        words: ["бросать", "бросить"],
        correctAnswers: { 1: "бросить" },
        explanation: "Dopo «хочет» si usa il perfettivo: smettere di fumare definitivamente."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей любит {{1}} чай с бутербродами.",
        words: ["пить", "выпить"],
        correctAnswers: { 1: "пить" },
        explanation: "Dopo «любит» si usa l'imperfettivo: bere come abitudine quotidiana."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// НСВ или СВ — без explanation
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей обожает {{1}} русский рок.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} заниматься спортом.",
        words: ["начинать", "начать"],
        correctAnswers: { 1: "начать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей любит {{1}} себе яичницу на завтрак.",
        words: ["готовить", "приготовить"],
        correctAnswers: { 1: "готовить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} в музыкальных направлениях.",
        words: ["разбираться", "разобраться"],
        correctAnswers: { 1: "разобраться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей любит {{1}} с Тимуром на приставке.",
        words: ["играть", "поиграть"],
        correctAnswers: { 1: "играть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Жене не нравится {{1}} Достоевского.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей обожает {{1}} фильмы о войне.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "смотреть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} игры на работе.",
        words: ["тестировать", "протестировать"],
        correctAnswers: { 1: "протестировать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей любит {{1}} чай по утрам.",
        words: ["пить", "выпить"],
        correctAnswers: { 1: "пить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Иногда они все {{1}} с Женей.",
        words: ["собираются", "соберутся"],
        correctAnswers: { 1: "собираются" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} пить кофе.",
        words: ["начинать", "начать"],
        correctAnswers: { 1: "начать" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// НСВ или СВ — микс, без подсказок
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} курить.",
        words: ["бросать", "бросить"],
        correctAnswers: { 1: "бросить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей любит {{1}} о Достоевском с Женей.",
        words: ["спорить", "поспорить"],
        correctAnswers: { 1: "спорить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} всю мировую классику.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "прочитать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей обожает {{1}} русский рок.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} спорить с Женей.",
        words: ["переставать", "перестать"],
        correctAnswers: { 1: "перестать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей любит {{1}} себе яичницу.",
        words: ["готовить", "приготовить"],
        correctAnswers: { 1: "готовить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} серию фильмов о роке.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "посмотреть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей ненавидит {{1}} документальные фильмы.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "смотреть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} на диету.",
        words: ["садиться", "сесть"],
        correctAnswers: { 1: "сесть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей любит {{1}} чай с бутербродами.",
        words: ["пить", "выпить"],
        correctAnswers: { 1: "пить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Андрей хочет {{1}} работу в игровой компании.",
        words: ["искать", "найти"],
        correctAnswers: { 1: "найти" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Лексика: «Мне нравится»
// ============================================================
const p4cards = [
    { front: "компьютерная приставка", back: "console per videogiochi", explanation: "Aggettivo + sostantivo" },
    { front: "собираться с друзьями", back: "ritrovarsi con gli amici", explanation: "НСВ: azione abituale" },
    { front: "спорить о книгах", back: "discutere di libri", explanation: "НСВ: attività ripetuta" },
    { front: "документальные фильмы", back: "film documentari", explanation: "Aggettivo + sostantivo, plurale" },
    { front: "фильмы о войне", back: "film di guerra", explanation: "Sostantivo + предлог о + предложный падеж" },
    { front: "русский рок", back: "rock russo", explanation: "Aggettivo + sostantivo" },
    { front: "бутерброды", back: "panini, tramezzini", explanation: "Sostantivo, plurale" },
    { front: "яичница", back: "uova strapazzate / frittata", explanation: "Sostantivo, femminile" },
    { front: "по утрам", back: "di mattina, ogni mattina", explanation: "Выражение времени: abitudine" }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Лексика: «Странный день»
// ============================================================
const p5cards = [
    { front: "бросить курить", back: "smettere di fumare" },
    { front: "найти работу", back: "trovare lavoro" },
    { front: "сесть на диету", back: "mettersi a dieta" },
    { front: "заниматься спортом", back: "fare sport" },
    { front: "мировая классика", back: "classici della letteratura mondiale" },
    { front: "музыкальные направления", back: "generi musicali" },
    { front: "тестировать игры", back: "testare videogiochi" },
    { front: "перестать спорить", back: "smettere di discutere" },
    { front: "начать разбираться", back: "iniziare a capirci" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Глаголы в ситуациях: НСВ / СВ (6 пар × 2, перемешанные)
// ============================================================
const p6cards = [
    { front: "Мы любим смотреть", back: "Ci piace guardare" },
    { front: "Он хочет прочитать", back: "Lui vuole leggere (fino in fondo)" },
    { front: "Друзья любят играть", back: "Agli amici piace giocare" },
    { front: "Она хочет выпить кофе", back: "Lei vuole bere un caffè" },
    { front: "Андрей любит читать", back: "Ad Andrej piace leggere" },
    { front: "Я хочу послушать", back: "Voglio ascoltare" },
    { front: "Ты любишь готовить", back: "Ti piace preparare" },
    { front: "Они хотят поиграть", back: "Loro vogliono giocare" },
    { front: "Я люблю слушать", back: "Mi piace ascoltare" },
    { front: "Мы хотим посмотреть", back: "Vogliamo guardare" },
    { front: "Она любит пить чай", back: "A lei piace bere il tè" },
    { front: "Ты хочешь приготовить", back: "Vuoi preparare" }
];

// ============================================================
// PANEL 7 — GapText · public
// Текст «Мне нравится» — 10 пропусков
// ============================================================
const p7paragraphs = [
    "Андрей любит {{1}} на компьютерной приставке. Обычно они {{2}} с Тимуром, иногда они все {{3}} с Женей. Андрею нравится {{4}} Достоевского. Никто не знает, читал ли он что-нибудь ещё. Он любит {{5}} о Достоевском с Женей. Жене книги Достоевского не нравятся. Андрей ненавидит {{6}} [[документальные::documentari]] фильмы, но обожает фильмы о войне. Он любит {{7}} русский рок, и ещё он много {{8}}. По утрам он любит {{9}} чай с [[бутербродами::panini]], иногда он на завтрак {{10}} себе [[яичницу::uova strapazzate]]."
];
const p7gaps = {
    1:  { answers: ["играть"] },
    2:  { answers: ["играют"] },
    3:  { answers: ["собираются"] },
    4:  { answers: ["читать"] },
    5:  { answers: ["спорить"] },
    6:  { answers: ["смотреть"] },
    7:  { answers: ["слушать"] },
    8:  { answers: ["курит"] },
    9:  { answers: ["пить"] },
    10: { answers: ["готовит"] }
};

// ============================================================
// PANEL 8 — GapText · student
// Текст «Странный день» — 10 пропусков
// ============================================================
const p8paragraphs = [
    "Андрей хочет {{1}} курить и {{2}} кофе. Он хочет {{3}} работу, где нужно {{4}} игры. Андрей хочет {{5}} на [[диету::dieta]] и {{6}} заниматься спортом и {{7}} спорить с Женей. Он хочет {{8}} всю [[мировую классику::classici della letteratura mondiale]] и {{9}} [[разбираться::capirci]] в [[музыкальных направлениях::generi musicali]]. Поэтому он хочет {{10}} серию [[документальных::documentari]] фильмов о мировом роке, о джазе и других музыкальных направлениях."
];
const p8gaps = {
    1:  { answers: ["бросить"] },
    2:  { answers: ["пить"] },
    3:  { answers: ["найти"] },
    4:  { answers: ["тестировать"] },
    5:  { answers: ["сесть"] },
    6:  { answers: ["начать"] },
    7:  { answers: ["перестать"] },
    8:  { answers: ["прочитать"] },
    9:  { answers: ["начать"] },
    10: { answers: ["посмотреть"] }
};

// ============================================================
// PANEL 9 — Flashcard · paid
// Глагольное управление — 15 карточек
// ============================================================
const p9cards = [
    { front: "играть на —", back: "приставке" },
    { front: "играть с —", back: "Тимуром" },
    { front: "собираться с —", back: "Женей" },
    { front: "читать (В.п.) —", back: "Достоевского" },
    { front: "спорить о —", back: "Достоевском" },
    { front: "смотреть (В.п.) —", back: "фильмы" },
    { front: "слушать (В.п.) —", back: "рок" },
    { front: "пить (В.п.) —", back: "чай" },
    { front: "сесть на —", back: "диету" },
    { front: "заниматься (Т.п.) —", back: "спортом" },
    { front: "разбираться в —", back: "направлениях" },
    { front: "найти (В.п.) —", back: "работу" },
    { front: "бросить (В.п.) —", back: "курить" },
    { front: "готовить (В.п.) —", back: "яичницу" },
    { front: "спорить с —", back: "Женей" }
];

// ============================================================
// PANEL 10 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelDv04() {
    const panel = document.getElementById('panel-dv-04');
    if (!panel) return;

    const container = panel.querySelector('#dv-04-cards-container');
    const prevBtn   = panel.querySelector('#dv-04-deck-prev');
    const nextBtn   = panel.querySelector('#dv-04-deck-next');
    const counterEl = panel.querySelector('#dv-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Dopo «любит» quale aspetto si usa?", options: ["perfettivo", "imperfettivo", "entrambi"], answer: "imperfettivo" },
        { question: "«Андрей хочет ___ курить» — quale verbo?", options: ["бросать", "бросить", "бросал"], answer: "бросить" },
        { question: "Perché «тестировать» nella frase «где нужно тестировать игры» è imperfettivo?", options: ["Perché è dopo «хочет»", "Perché è un'attività abituale sul lavoro", "Perché è un verbo di moto"], answer: "Perché è un'attività abituale sul lavoro" },
        { question: "«Андрей хочет ___ на диету» — quale verbo?", options: ["садиться", "сесть", "сидеть"], answer: "сесть" },
        { question: "Perché «разбираться» resta imperfettivo anche dopo «хочет начать»?", options: ["Perché è dopo «начать» (fase = НСВ)", "Perché è un verbo di moto", "Perché è negativo"], answer: "Perché è dopo «начать» (fase = НСВ)" }
    ];
    const matchPairs = [
        { left: "Андрей много", right: "курит" },
        { left: "Он любит", right: "играть" },
        { left: "Андрей хочет бросить", right: "курить" },
        { left: "Ему нравится", right: "читать" },
        { left: "Андрей хочет", right: "найти работу" },
        { left: "Он обожает", right: "слушать" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Андрей любит ", promptSuffix: ".", answers: ["играть"] },
        { id: "q2", promptPrefix: "Андрей хочет ", promptSuffix: " работу.", answers: ["найти"] },
        { id: "q3", promptPrefix: "Он хочет ", promptSuffix: " курить.", answers: ["бросить"] },
        { id: "q4", promptPrefix: "Он хочет ", promptSuffix: " серию фильмов.", answers: ["посмотреть"] },
        { id: "q5", promptPrefix: "Андрей любит ", promptSuffix: " чай.", answers: ["пить"] }
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
            card.className = 'fca01-card-container dv-04-card';
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
                    <p class="quiz-instruction">Напишите правильную форму глагола</p>
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
        container.querySelectorAll('.dv-04-card').forEach(card => {
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
                const card    = this.closest('.dv-04-card');
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
        container.querySelectorAll('.dv-04-card').forEach((c, i) => {
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
    'panel-dv-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-dv-01', exercises: p1exercises }),
    'panel-dv-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-dv-05', exercises: p2exercises }),
    'panel-dv-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-dv-06', exercises: p3exercises }),
    'panel-dv-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-dv-02', cards: p4cards }),
    'panel-dv-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-dv-07', cards: p5cards }),
    'panel-dv-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-dv-08', cards: p6cards }),
    'panel-dv-03': () => new GapTextExercise({ rootId: 'ex-gaptext-dv-03', paragraphs: p7paragraphs, gaps: p7gaps, showHints: false }),
    'panel-dv-09': () => new GapTextExercise({ rootId: 'ex-gaptext-dv-09', paragraphs: p8paragraphs, gaps: p8gaps, showHints: false }),
    'panel-dv-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-dv-10', cards: p9cards }),
    'panel-dv-04': () => initPanelDv04()
};

initPanelManager({ initializers, enableAccessControl: true });
