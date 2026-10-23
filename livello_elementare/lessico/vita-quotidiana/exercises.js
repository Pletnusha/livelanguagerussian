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
        text: "Женя любит хорошо ___.",
        words: ["одеваться", "одеться"],
        correctAnswers: { 1: "одеваться" },
        explanation: "Dopo «любит» si usa l'imperfettivo: è un'attività abituale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Ему нравится ___ на шоппинг в Милан.",
        words: ["ездить", "поехать"],
        correctAnswers: { 1: "ездить" },
        explanation: "Dopo «нравится» si usa l'imperfettivo: andare a fare shopping come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя любит ___ книги.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" },
        explanation: "Dopo «любит» si usa l'imperfettivo: leggere come attività abituale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя любит ___ музыку на виниле.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" },
        explanation: "Dopo «любит» si usa l'imperfettivo: ascoltare come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Жене нравится ___ боксом.",
        words: ["заниматься", "заняться"],
        correctAnswers: { 1: "заниматься" },
        explanation: "Dopo «нравится» si usa l'imperfettivo: praticare come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он ненавидит ___ на метро.",
        words: ["ездить", "поехать"],
        correctAnswers: { 1: "ездить" },
        explanation: "Dopo «ненавидит» si usa l'imperfettivo: odia andare in generale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он ненавидит ___ сообщения в мессенджерах.",
        words: ["писать", "написать"],
        correctAnswers: { 1: "писать" },
        explanation: "Dopo «ненавидит» si usa l'imperfettivo: odia scrivere in generale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя хочет ___ в Лондон.",
        words: ["слетать", "летать"],
        correctAnswers: { 1: "слетать" },
        explanation: "Dopo «хочет» si usa il perfettivo: volare a Londra, azione concreta."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ свой гардероб.",
        words: ["обновить", "обновлять"],
        correctAnswers: { 1: "обновить" },
        explanation: "Dopo «хочет» si usa il perfettivo: rinnovare, risultato concreto."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя хотел ___ сырники.",
        words: ["заказать", "заказывать"],
        correctAnswers: { 1: "заказать" },
        explanation: "Dopo «хотел» si usa il perfettivo: ordinare, azione concreta."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя хотел ___ заказчику.",
        words: ["позвонить", "звонить"],
        correctAnswers: { 1: "позвонить" },
        explanation: "Dopo «хотел» si usa il perfettivo: telefonare, azione singola."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// НСВ или СВ — без explanation
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя обожает ___ хорошую одежду.",
        words: ["носить", "надеть"],
        correctAnswers: { 1: "носить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя хочет ___ новый проигрыватель.",
        words: ["покупать", "купить"],
        correctAnswers: { 1: "купить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя любит ___ боксом.",
        words: ["заниматься", "заняться"],
        correctAnswers: { 1: "заниматься" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хотел ___ встречу с заказчиками.",
        words: ["переносить", "перенести"],
        correctAnswers: { 1: "перенести" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Жене нравится ___ на шоппинг.",
        words: ["ездить", "поехать"],
        correctAnswers: { 1: "ездить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя хочет ___ свой завтрак в кафе.",
        words: ["заказать", "заказывать"],
        correctAnswers: { 1: "заказать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он ненавидит ___ сообщения.",
        words: ["писать", "написать"],
        correctAnswers: { 1: "писать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя хотел ___ заказчику, но его попросили написать.",
        words: ["звонить", "позвонить"],
        correctAnswers: { 1: "позвонить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя любит ___ музыку на виниле.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ проигрыватель.",
        words: ["чинить", "починить"],
        correctAnswers: { 1: "починить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Жене нравится ___ в бассейне.",
        words: ["плавать", "поплавать"],
        correctAnswers: { 1: "плавать" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// НСВ или СВ — микс, без подсказок
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя хочет ___ в Лондон.",
        words: ["слетать", "летать"],
        correctAnswers: { 1: "слетать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя любит ___ книги.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ свой гардероб.",
        words: ["обновить", "обновлять"],
        correctAnswers: { 1: "обновить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя ненавидит ___ на метро.",
        words: ["ездить", "поехать"],
        correctAnswers: { 1: "ездить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя хотел ___ сырники.",
        words: ["заказать", "заказывать"],
        correctAnswers: { 1: "заказать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Жене нравится ___ плаваньем.",
        words: ["заниматься", "заняться"],
        correctAnswers: { 1: "заниматься" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ встречу.",
        words: ["переносить", "перенести"],
        correctAnswers: { 1: "перенести" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя любит ___ музыку на виниле.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хотел ___ заказчику.",
        words: ["звонить", "позвонить"],
        correctAnswers: { 1: "позвонить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ проигрыватель.",
        words: ["чинить", "починить"],
        correctAnswers: { 1: "починить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Женя любит хорошо ___.",
        words: ["одеваться", "одеться"],
        correctAnswers: { 1: "одеваться" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Лексика: «Привычки Жени»
// ============================================================
const p4cards = [
    { front: "одеваться хорошо", back: "vestirsi bene", explanation: "НСВ: abitudine" },
    { front: "ездить на шоппинг", back: "andare a fare shopping", explanation: "НСВ: attività abituale" },
    { front: "виниловый проигрыватель", back: "giradischi in vinile", explanation: "Aggettivo + sostantivo" },
    { front: "заниматься боксом", back: "fare boxe", explanation: "НСВ + Т.п." },
    { front: "заниматься плаваньем", back: "fare nuoto", explanation: "НСВ + Т.п." },
    { front: "сырники", back: "frittelle di ricotta", explanation: "Sostantivo, plurale" },
    { front: "кофе с молоком", back: "caffè con latte", explanation: "Sostantivo + с + Т.п." },
    { front: "ненавидеть метро", back: "odiare la metropolitana", explanation: "НСВ: sentimento" },
    { front: "мессенджеры", back: "app di messaggistica", explanation: "Sostantivo, plurale" }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Лексика: «Ужасный день»
// ============================================================
const p5cards = [
    { front: "слетать в Лондон", back: "volare a Londra (andata e ritorno)" },
    { front: "обновить гардероб", back: "rinnovare il guardaroba" },
    { front: "перенести встречу", back: "spostare un appuntamento" },
    { front: "заказчики", back: "committenti, clienti" },
    { front: "попросили написать", back: "hanno chiesto di scrivere" },
    { front: "зал закрыт на ремонт", back: "palestra chiusa per lavori" },
    { front: "бассейн закрыт", back: "piscina chiusa" },
    { front: "проигрыватель сломался", back: "il giradischi si è rotto" },
    { front: "ужасный день", back: "giornata orribile" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Глаголы в ситуациях: НСВ / СВ
// ============================================================
const p6cards = [
    { front: "Женя любит одеваться", back: "A Ženja piace vestirsi" },
    { front: "Он хочет купить", back: "Lui vuole comprare" },
    { front: "Ему нравится ездить", back: "A lui piace andare" },
    { front: "Он хочет слетать", back: "Lui vuole volare (A/R)" },
    { front: "Женя любит слушать", back: "A Ženja piace ascoltare" },
    { front: "Он хочет обновить", back: "Lui vuole rinnovare" },
    { front: "Женя любит заниматься", back: "A Ženja piace praticare" },
    { front: "Он хотел заказать", back: "Lui voleva ordinare" },
    { front: "Женя ненавидит ездить", back: "Ženja odia andare" },
    { front: "Он хочет починить", back: "Lui vuole riparare" },
    { front: "Женя любит читать", back: "A Ženja piace leggere" },
    { front: "Он хотел позвонить", back: "Lui voleva telefonare" }
];

// ============================================================
// PANEL 7 — GapText · public
// Текст «Привычки Жени» — 10 пропусков
// ============================================================
const p7paragraphs = [
    "Женя любит {{1}} хорошую одежду. Ему нравится {{2}} на шоппинг в Милан. Женя любит {{3}} книги и {{4}} музыку на [[виниле::vinile]]. Ему нравится {{5}} [[боксом::boxe]] и {{6}}. Каждое утро Женя {{7}} [[сырники::frittelle di ricotta]] и {{8}} кофе с молоком. Он ненавидит {{9}} на [[метро::metropolitana]] и ненавидит {{10}} сообщения в [[мессенджерах::app di messaggistica]]."
];
const p7gaps = {
    1:  { answers: ["носить"] },
    2:  { answers: ["ездить"] },
    3:  { answers: ["читать"] },
    4:  { answers: ["слушать"] },
    5:  { answers: ["заниматься"] },
    6:  { answers: ["плавать"] },
    7:  { answers: ["ест"] },
    8:  { answers: ["пьёт"] },
    9:  { answers: ["ездить"] },
    10: { answers: ["писать"] }
};

// ============================================================
// PANEL 8 — GapText · student
// Текст «Ужасный день» — 10 пропусков
// ============================================================
const p8paragraphs = [
    "Женя хотел {{1}} [[сырники::frittelle di ricotta]] на завтрак, но их не было. Он хочет {{2}} в Лондон и {{3}} свой [[гардероб::guardaroba]]. Женя хотел {{4}} встречу с [[заказчиками::committenti]]. Он хотел {{5}} заказчику, но его попросили {{6}}. Женя хочет {{7}} боксом, но зал закрыт на ремонт. Он хочет {{8}} в бассейне, но бассейн тоже закрыт. Женя хочет {{9}} музыку, но [[проигрыватель::giradischi]] сломался. Какой {{10}} день!"
];
const p8gaps = {
    1:  { answers: ["заказать"] },
    2:  { answers: ["слетать"] },
    3:  { answers: ["обновить"] },
    4:  { answers: ["перенести"] },
    5:  { answers: ["позвонить"] },
    6:  { answers: ["написать"] },
    7:  { answers: ["заняться"] },
    8:  { answers: ["поплавать"] },
    9:  { answers: ["послушать"] },
    10: { answers: ["ужасный"] }
};

// ============================================================
// PANEL 9 — Flashcard · paid
// Глагольное управление — 15 карточек
// ============================================================
const p9cards = [
    { front: "одеваться (как?) —", back: "хорошо" },
    { front: "ездить на —", back: "шоппинг" },
    { front: "ездить (куда?) в —", back: "Милан" },
    { front: "слушать (В.п.) —", back: "музыку" },
    { front: "заниматься (Т.п.) —", back: "боксом" },
    { front: "ездить на —", back: "метро" },
    { front: "писать (В.п.) —", back: "сообщения" },
    { front: "слетать в —", back: "Лондон" },
    { front: "обновить (В.п.) —", back: "гардероб" },
    { front: "перенести (В.п.) —", back: "встречу" },
    { front: "позвонить (Д.п.) —", back: "заказчику" },
    { front: "заказать (В.п.) —", back: "сырники" },
    { front: "починить (В.п.) —", back: "проигрыватель" },
    { front: "читать (В.п.) —", back: "книги" },
    { front: "пить (В.п.) —", back: "кофе" }
];

// ============================================================
// PANEL 10 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelVq04() {
    const panel = document.getElementById('panel-vq-04');
    if (!panel) return;

    const container = panel.querySelector('#vq-04-cards-container');
    const prevBtn   = panel.querySelector('#vq-04-deck-prev');
    const nextBtn   = panel.querySelector('#vq-04-deck-next');
    const counterEl = panel.querySelector('#vq-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Dopo «любит» quale aspetto si usa?", options: ["perfettivo", "imperfettivo", "entrambi"], answer: "imperfettivo" },
        { question: "«Женя хочет ___ в Лондон» — quale verbo?", options: ["летать", "слетать", "лететь"], answer: "слетать" },
        { question: "Perché «ездить» nella frase «ему нравится ездить» è imperfettivo?", options: ["Perché è un risultato", "Perché è un'attività abituale", "Perché è un verbo di moto"], answer: "Perché è un'attività abituale" },
        { question: "«Женя хотел ___ встречу» — quale verbo?", options: ["переносить", "перенести", "переносил"], answer: "перенести" },
        { question: "Perché «заниматься» resta imperfettivo dopo «нравится»?", options: ["Perché è dopo «нравится» (abitudine = НСВ)", "Perché è un verbo di moto", "Perché è negativo"], answer: "Perché è dopo «нравится» (abitudine = НСВ)" }
    ];
    const matchPairs = [
        { left: "Женя любит", right: "одеваться" },
        { left: "Он хочет", right: "слетать в Лондон" },
        { left: "Ему нравится", right: "ездить на шоппинг" },
        { left: "Женя ненавидит", right: "писать сообщения" },
        { left: "Он хотел", right: "заказать сырники" },
        { left: "Женя любит", right: "слушать музыку" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Женя любит ", promptSuffix: " книги.", answers: ["читать"] },
        { id: "q2", promptPrefix: "Он хочет ", promptSuffix: " гардероб.", answers: ["обновить"] },
        { id: "q3", promptPrefix: "Женя хотел ", promptSuffix: " заказчику.", answers: ["позвонить"] },
        { id: "q4", promptPrefix: "Он хочет ", promptSuffix: " проигрыватель.", answers: ["починить"] },
        { id: "q5", promptPrefix: "Женя любит ", promptSuffix: " музыку на виниле.", answers: ["слушать"] }
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
            card.className = 'fca01-card-container vq-04-card';
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
        container.querySelectorAll('.vq-04-card').forEach(card => {
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
                const card    = this.closest('.vq-04-card');
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
        container.querySelectorAll('.vq-04-card').forEach((c, i) => {
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
    'panel-vq-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-vq-01', exercises: p1exercises }),
    'panel-vq-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-vq-05', exercises: p2exercises }),
    'panel-vq-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-vq-06', exercises: p3exercises }),
    'panel-vq-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-vq-02', cards: p4cards }),
    'panel-vq-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-vq-07', cards: p5cards }),
    'panel-vq-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-vq-08', cards: p6cards }),
    'panel-vq-03': () => new GapTextExercise({ rootId: 'ex-gaptext-vq-03', paragraphs: p7paragraphs, gaps: p7gaps, showHints: false }),
    'panel-vq-09': () => new GapTextExercise({ rootId: 'ex-gaptext-vq-09', paragraphs: p8paragraphs, gaps: p8gaps, showHints: false }),
    'panel-vq-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-vq-10', cards: p9cards }),
    'panel-vq-04': () => initPanelVq04()
};

initPanelManager({ initializers, enableAccessControl: true });
