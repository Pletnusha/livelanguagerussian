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
        text: "Лена обожает {{1}} современных писателей.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" },
        explanation: "Dopo «обожает» si usa l'imperfettivo: leggere come passione abituale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она любит {{1}} и ходит на курсы живописи.",
        words: ["рисовать", "нарисовать"],
        correctAnswers: { 1: "рисовать" },
        explanation: "Dopo «любит» si usa l'imperfettivo: disegnare come attività abituale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена любит {{1}} поездки в горы.",
        words: ["организовывать", "организовать"],
        correctAnswers: { 1: "организовывать" },
        explanation: "Dopo «любит» si usa l'imperfettivo: organizzare come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она обожает {{1}} чаи.",
        words: ["травяные", "травяные"],
        correctAnswers: { 1: "травяные" },
        explanation: "«Обожает» + объект: passione abituale → imperfettivo del verbo principale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена {{1}} фитнесом каждый день.",
        words: ["занимается", "займётся"],
        correctAnswers: { 1: "занимается" },
        explanation: "«Каждый день» indica abitudine → imperfettivo."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена хочет {{1}} собственную марку травяных смесей.",
        words: ["создавать", "создать"],
        correctAnswers: { 1: "создать" },
        explanation: "Dopo «хочет» si usa il perfettivo: creare un risultato concreto."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} литературный клуб для детей.",
        words: ["организовывать", "организовать"],
        correctAnswers: { 1: "организовать" },
        explanation: "Dopo «хочет» si usa il perfettivo: un'azione concreta una tantum."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена хочет {{1}} рисовать.",
        words: ["учиться", "научиться"],
        correctAnswers: { 1: "научиться" },
        explanation: "Dopo «хочет» si usa il perfettivo: raggiungere un risultato."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} в новый спортзал.",
        words: ["записываться", "записаться"],
        correctAnswers: { 1: "записаться" },
        explanation: "Dopo «хочет» si usa il perfettivo: iscriversi come azione concreta."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} с друзьями поездку в горы.",
        words: ["организовывать", "организовать"],
        correctAnswers: { 1: "организовать" },
        explanation: "Dopo «хочет» si usa il perfettivo: organizzare un viaggio concreto."
    }
];

// ============================================================
// PANEL 5 — DragDrop · student
// НСВ или СВ — без подсказок
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена {{1}} хорошие продукты.",
        words: ["покупает", "купит"],
        correctAnswers: { 1: "покупает" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она {{1}} с собой обед из дома.",
        words: ["берёт", "возьмёт"],
        correctAnswers: { 1: "берёт" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена {{1}} много воды каждый день.",
        words: ["пьёт", "выпьет"],
        correctAnswers: { 1: "пьёт" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она {{1}} семинары по литературе постмодерна.",
        words: ["ведёт", "проведёт"],
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена {{1}} рано каждый день.",
        words: ["встаёт", "встанет"],
        correctAnswers: { 1: "встаёт" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Потом она {{1}} на работу.",
        words: ["едет", "поедет"],
        correctAnswers: { 1: "едет" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена хочет {{1}} марку травяных смесей.",
        words: ["создавать", "создать"],
        correctAnswers: { 1: "создать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} клуб для детей.",
        words: ["организовывать", "организовать"],
        correctAnswers: { 1: "организовать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Ей нужно {{1}} машину.",
        words: ["покупать", "купить"],
        correctAnswers: { 1: "купить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена хочет {{1}} рисовать.",
        words: ["учиться", "научиться"],
        correctAnswers: { 1: "научиться" }
    }
];

// ============================================================
// PANEL 6 — DragDrop · paid
// НСВ или СВ — микс
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена обожает {{1}} современных писателей.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} собственную марку.",
        words: ["создавать", "создать"],
        correctAnswers: { 1: "создать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена любит {{1}} поездки в горы.",
        words: ["организовывать", "организовать"],
        correctAnswers: { 1: "организовывать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} в новый спортзал.",
        words: ["записываться", "записаться"],
        correctAnswers: { 1: "записаться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена {{1}} фитнесом каждый день.",
        words: ["занимается", "займётся"],
        correctAnswers: { 1: "занимается" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} литературный клуб для детей.",
        words: ["организовывать", "организовать"],
        correctAnswers: { 1: "организовать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она любит {{1}} и ходит на курсы живописи.",
        words: ["рисовать", "нарисовать"],
        correctAnswers: { 1: "рисовать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Ей нужно {{1}} машину.",
        words: ["покупать", "купить"],
        correctAnswers: { 1: "купить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Лена {{1}} семинары по литературе.",
        words: ["ведёт", "проведёт"],
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} рисовать.",
        words: ["учиться", "научиться"],
        correctAnswers: { 1: "научиться" }
    }
];

// ============================================================
// PANEL 2 — Flashcard · public
// Лексика: «Привычки Лены»
// ============================================================
const p4cards = [
    { front: "заниматься фитнесом", back: "fare fitness / allenarsi", explanation: "НСВ: abitudine" },
    { front: "курсы живописи", back: "corsi di pittura", explanation: "Sostantivo + genitivo" },
    { front: "литература постмодерна", back: "letteratura postmoderna", explanation: "Sostantivo + genitivo" },
    { front: "нутрициолог", back: "nutrizionista", explanation: "Professione" },
    { front: "турпоход", back: "escursione / trekking", explanation: "Sostantivo composto" },
    { front: "травяные чаи", back: "tisane / tè alle erbe", explanation: "Aggettivo + sostantivo" },
    { front: "кардио тренировка", back: "allenamento cardio", explanation: "Sostantivo + sostantivo" },
    { front: "разбираться в травах", back: "intendersi di erbe", explanation: "НСВ: competenza" },
    { front: "вести семинары", back: "condurre seminari", explanation: "НСВ: attività professionale" }
];

// ============================================================
// PANEL 7 — Flashcard · student
// Лексика: «Желания»
// ============================================================
const p5cards = [
    { front: "создать марку", back: "creare un marchio" },
    { front: "травяные смеси", back: "miscele di erbe" },
    { front: "организовать клуб", back: "organizzare un club" },
    { front: "научиться рисовать", back: "imparare a disegnare" },
    { front: "организовать поездку", back: "organizzare un viaggio" },
    { front: "экстремальное восхождение", back: "arrampicata estrema" },
    { front: "пляжный отдых", back: "vacanza al mare" },
    { front: "записаться в спортзал", back: "iscriversi in palestra" },
    { front: "купить машину", back: "comprare un'auto" }
];

// ============================================================
// PANEL 8 — Flashcard · paid
// Глаголы в ситуациях: НСВ / СВ
// ============================================================
const p6cards = [
    { front: "Лена обожает читать", back: "Lena adora leggere" },
    { front: "Она хочет создать марку", back: "Lei vuole creare un marchio" },
    { front: "Она любит рисовать", back: "Lei ama disegnare" },
    { front: "Она хочет научиться рисовать", back: "Lei vuole imparare a disegnare" },
    { front: "Лена любит организовывать", back: "Lena ama organizzare" },
    { front: "Она хочет организовать поездку", back: "Lei vuole organizzare un viaggio" },
    { front: "Она занимается фитнесом", back: "Lei fa fitness" },
    { front: "Она хочет записаться", back: "Lei vuole iscriversi" },
    { front: "Лена ведёт семинары", back: "Lena conduce seminari" },
    { front: "Она хочет организовать клуб", back: "Lei vuole organizzare un club" },
    { front: "Она обожает травяные чаи", back: "Lei adora le tisane" },
    { front: "Ей нужно купить машину", back: "Lei deve comprare un'auto" }
];

// ============================================================
// PANEL 3 — GapText · public
// Текст «Привычки Лены» — 10 пропусков
// ============================================================
const p7paragraphs = [
    "Лена покупает хорошие [[продукты::prodotti]] и {{1}} с собой обед из дома. Она пьёт много воды и {{2}} фитнесом. Она обожает книги современных [[писателей::scrittori]]. Она любит {{3}} и ходит на курсы [[живописи::pittura]] в Академию Искусств. Лена много {{4}} и {{5}} семинары по [[литературе::letteratura]] постмодерна. Она {{6}} нутрициологом в Центре [[здоровья::salute]]. Лена любит {{7}} поездки в горы. Она {{8}} в травах и обожает {{9}} чаи. Она {{10}} рано и идёт в спортзал."
];
const p7gaps = {
    1:  { answers: ["берёт"] },
    2:  { answers: ["занимается"] },
    3:  { answers: ["рисовать"] },
    4:  { answers: ["читает"] },
    5:  { answers: ["ведёт"] },
    6:  { answers: ["работает"] },
    7:  { answers: ["организовывать"] },
    8:  { answers: ["разбирается"] },
    9:  { answers: ["травяные"] },
    10: { answers: ["встаёт"] }
};

// ============================================================
// PANEL 9 — GapText · student
// Текст «Желания» — 10 пропусков
// ============================================================
const p8paragraphs = [
    "Лена хочет {{1}} собственную [[марку::marchio]] травяных [[смесей::miscele]]. Она хочет {{2}} литературный клуб для детей и [[подростков::adolescenti]]. Она хочет {{3}} рисовать и поэтому она ходит на уроки [[живописи::pittura]]. Она хочет {{4}} с друзьями поездку в горы или [[турпоход::escursione]] на несколько дней. Катя и Женя хотят {{5}} в СПА. Тимур хочет [[экстремальное::estremo]] восхождение. Анна хочет [[пляжный::balneare]] отдых. Лена хочет {{6}} в новый [[спортзал::palestra]], поэтому ей нужно {{7}} машину."
];
const p8gaps = {
    1:  { answers: ["создать"] },
    2:  { answers: ["организовать"] },
    3:  { answers: ["научиться"] },
    4:  { answers: ["организовать"] },
    5:  { answers: ["отдохнуть"] },
    6:  { answers: ["записаться"] },
    7:  { answers: ["купить"] }
};

// ============================================================
// PANEL 10 — Flashcard · paid
// Глагольное управление — 15 карточек
// ============================================================
const p9cards = [
    { front: "заниматься (Т.п.) —", back: "фитнесом" },
    { front: "ходить на (В.п.) —", back: "курсы живописи" },
    { front: "вести (В.п.) —", back: "семинары" },
    { front: "работать (Т.п.) —", back: "нутрициологом" },
    { front: "организовывать (В.п.) —", back: "поездки" },
    { front: "разбираться в (П.п.) —", back: "травах" },
    { front: "обожать (В.п.) —", back: "травяные чаи" },
    { front: "идти в (В.п.) —", back: "спортзал" },
    { front: "ехать на (В.п.) —", back: "работу" },
    { front: "создать (В.п.) —", back: "марку" },
    { front: "организовать (В.п.) —", back: "клуб" },
    { front: "научиться (+ инф.) —", back: "рисовать" },
    { front: "записаться в (В.п.) —", back: "спортзал" },
    { front: "купить (В.п.) —", back: "машину" },
    { front: "встречаться с (Т.п.) —", back: "клиентами" }
];

// ============================================================
// PANEL 4 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelLq04() {
    const panel = document.getElementById('panel-lq-04');
    if (!panel) return;

    const container = panel.querySelector('#lq-04-cards-container');
    const prevBtn   = panel.querySelector('#lq-04-deck-prev');
    const nextBtn   = panel.querySelector('#lq-04-deck-next');
    const counterEl = panel.querySelector('#lq-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Dopo «обожает» quale aspetto si usa?", options: ["perfettivo", "imperfettivo", "entrambi"], answer: "imperfettivo" },
        { question: "«Лена хочет ___ собственную марку» — quale verbo?", options: ["создавать", "создать", "создаёт"], answer: "создать" },
        { question: "Perché «ведёт» nella frase «ведёт семинары» è imperfettivo?", options: ["Perché è un risultato", "Perché è un'attività abituale regolare", "Perché è un verbo di moto"], answer: "Perché è un'attività abituale regolare" },
        { question: "«Она хочет ___ в новый спортзал» — quale verbo?", options: ["записываться", "записаться", "записывается"], answer: "записаться" },
        { question: "Perché «организовывать» resta imperfettivo dopo «любит»?", options: ["Perché è dopo «любит» (passione = НСВ)", "Perché è un verbo di moto", "Perché è negativo"], answer: "Perché è dopo «любит» (passione = НСВ)" }
    ];
    const matchPairs = [
        { left: "Лена обожает", right: "читать современных писателей" },
        { left: "Она хочет", right: "создать марку травяных смесей" },
        { left: "Лена любит", right: "организовывать поездки в горы" },
        { left: "Она хочет", right: "научиться рисовать" },
        { left: "Лена любит", right: "рисовать" },
        { left: "Она хочет", right: "записаться в спортзал" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Лена обожает ", promptSuffix: " современных писателей.", answers: ["читать"] },
        { id: "q2", promptPrefix: "Она хочет ", promptSuffix: " собственную марку.", answers: ["создать"] },
        { id: "q3", promptPrefix: "Лена любит ", promptSuffix: " поездки в горы.", answers: ["организовывать"] },
        { id: "q4", promptPrefix: "Она хочет ", promptSuffix: " рисовать.", answers: ["научиться"] },
        { id: "q5", promptPrefix: "Ей нужно ", promptSuffix: " машину.", answers: ["купить"] }
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
            card.className = 'fca01-card-container lq-04-card';
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
        container.querySelectorAll('.lq-04-card').forEach(card => {
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
                const card    = this.closest('.lq-04-card');
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
        container.querySelectorAll('.lq-04-card').forEach((c, i) => {
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
    'panel-lq-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-lq-01', exercises: p1exercises }),
    'panel-lq-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-lq-05', exercises: p2exercises }),
    'panel-lq-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-lq-06', exercises: p3exercises }),
    'panel-lq-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-lq-02', cards: p4cards }),
    'panel-lq-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-lq-07', cards: p5cards }),
    'panel-lq-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-lq-08', cards: p6cards }),
    'panel-lq-03': () => new GapTextExercise({ rootId: 'ex-gaptext-lq-03', paragraphs: p7paragraphs, gaps: p7gaps, showHints: false }),
    'panel-lq-09': () => new GapTextExercise({ rootId: 'ex-gaptext-lq-09', paragraphs: p8paragraphs, gaps: p8gaps, showHints: false }),
    'panel-lq-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-lq-10', cards: p9cards }),
    'panel-lq-04': () => initPanelLq04()
};

initPanelManager({ initializers, enableAccessControl: true });
