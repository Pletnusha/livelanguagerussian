import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// НСВ или СВ? — с пояснениями
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Слесарь долго {{1}} замок, но не мог открыть.",
        words: ["чинил", "починил"],
        correctAnswers: { 1: "чинил" },
        explanation: "Imperfettivo: processo in corso, senza risultato (долго + не мог)."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Наконец слесарь {{1}} замок.",
        words: ["чинил", "починил"],
        correctAnswers: { 1: "починил" },
        explanation: "Perfettivo: azione completata con risultato (наконец = finalmente)."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он каждый день {{1}} двери в этом доме.",
        words: ["открывал", "открыл"],
        correctAnswers: { 1: "открывал" },
        explanation: "Imperfettivo: azione ripetuta abitualmente (каждый день)."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Сосед {{1}} дверь и вошёл.",
        words: ["открывал", "открыл"],
        correctAnswers: { 1: "открыл" },
        explanation: "Perfettivo: azione singola completata, parte di una catena di eventi."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// НСВ или СВ? — без подсказок
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Гидравлик {{1}} номер телефона слесаря.",
        words: ["набирал", "набрал"],
        correctAnswers: { 1: "набрал" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он долго {{1}} номер, но линия была занята.",
        words: ["набирал", "набрал"],
        correctAnswers: { 1: "набирал" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Заказчик {{1}} трубку после разговора.",
        words: ["вешал", "повесил"],
        correctAnswers: { 1: "повесил" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Мастер {{1}} замки каждый день — это его работа.",
        words: ["ломал", "сломал"],
        correctAnswers: { 1: "ломал" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// НСВ или СВ? — микс
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он {{1}} дверь ключом и вошёл в квартиру.",
        words: ["открывал", "открыл"],
        correctAnswers: { 1: "открыл" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Пока слесарь {{1}} замок, мы пили чай.",
        words: ["чинил", "починил"],
        correctAnswers: { 1: "чинил" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Кто {{1}} этот замок? Он не работает!",
        words: ["ломал", "сломал"],
        correctAnswers: { 1: "сломал" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она всегда {{1}} дверь на два замка.",
        words: ["закрывала", "закрыла"],
        correctAnswers: { 1: "закрывала" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Аспектуальные пары
// ============================================================
const p4cards = [
    { front: "ломать / сломать", back: "rompere (НСВ / СВ)", explanation: "НСВ: processo. СВ: risultato — rotto." },
    { front: "чинить / починить", back: "riparare (НСВ / СВ)", explanation: "НСВ: processo. СВ: risultato — riparato." },
    { front: "открывать / открыть", back: "aprire (НСВ / СВ)", explanation: "НСВ: ripetutamente. СВ: una volta." },
    { front: "закрывать / закрыть", back: "chiudere (НСВ / СВ)", explanation: "НСВ: ripetutamente. СВ: risultato." },
    { front: "звонить / позвонить", back: "telefonare (НСВ / СВ)", explanation: "НСВ: processo. СВ: una telefonata." },
    { front: "набирать / набрать", back: "comporre (НСВ / СВ)", explanation: "НСВ: provare più volte. СВ: composto." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Когда НСВ?
// ============================================================
const p5cards = [
    { front: "Когда НСВ: процесс", back: "Он долго чинил замок. (processo in corso)" },
    { front: "Когда НСВ: привычка", back: "Он каждый день открывал двери. (abitudine)" },
    { front: "Когда НСВ: фон", back: "Пока он чинил замок, мы ждали. (sfondo)" },
    { front: "Когда НСВ: повторение", back: "Она всегда закрывала на два замка. (ripetizione)" },
    { front: "Когда НСВ: одновременность", back: "Он звонил и стучал одновременно. (contemporaneità)" },
    { front: "Когда НСВ: факт", back: "Ты когда-нибудь ломал замок? (il fatto in sé)" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Когда СВ?
// ============================================================
const p6cards = [
    { front: "Когда СВ: результат", back: "Он починил замок. (risultato raggiunto)" },
    { front: "Когда СВ: однократность", back: "Он открыл дверь и вошёл. (azione singola)" },
    { front: "Когда СВ: цепь событий", back: "Набрал номер, позвонил, повесил трубку. (catena)" },
    { front: "Когда СВ: наконец", back: "Наконец сломал замок. (finalmente = risultato)" },
    { front: "Когда СВ: начало", back: "Вдруг зазвонил телефон. (inizio improvviso)" },
    { front: "Когда СВ: быстро", back: "Он быстро открыл дверь. (completato in fretta)" }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Пары с переводом
// ============================================================
const p7cards = [
    { front: "ломать (НСВ)", back: "rompere (processo)", explanation: "Imperfettivo: l'azione di rompere senza enfasi sul risultato." },
    { front: "сломать (СВ)", back: "rompere (risultato)", explanation: "Perfettivo: l'azione è completata, l'oggetto è rotto." },
    { front: "вешать (НСВ)", back: "appendere / riattaccare", explanation: "Imperfettivo del verbo повесить." },
    { front: "повесить (СВ)", back: "appendere / riattaccare", explanation: "Perfettivo: azione completata. «Повесил трубку»." },
    { front: "стучать (НСВ)", back: "bussare", explanation: "Solo imperfettivo (senza pari perfettivo comune)." },
    { front: "предоставлять / предоставить", back: "fornire (НСВ / СВ)", explanation: "НСВ: regolarmente. СВ: una volta, formalmente." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Аспект в контексте
// ============================================================
const p8cards = [
    { front: "Он ___ (чинить) замок. [процесс]", back: "чинил (НСВ — processo)" },
    { front: "Он ___ (починить) замок. [результат]", back: "починил (СВ — risultato)" },
    { front: "Она ___ (звонить) целый час. [долго]", back: "звонила (НСВ — durata)" },
    { front: "Она ___ (позвонить) и сообщила. [цепь]", back: "позвонила (СВ — catena)" },
    { front: "Дети ___ (ломать) игрушки. [привычка]", back: "ломали (НСВ — abitudine)" },
    { front: "Ребёнок ___ (сломать) замок. [результат]", back: "сломал (СВ — risultato)" }
];

// ============================================================
// PANEL 9 — Flashcard · paid
// Маркеры аспекта
// ============================================================
const p9cards = [
    { front: "долго → ...", back: "НСВ (durata)" },
    { front: "каждый день → ...", back: "НСВ (ripetizione)" },
    { front: "всегда → ...", back: "НСВ (abitudine)" },
    { front: "наконец → ...", back: "СВ (risultato raggiunto)" },
    { front: "вдруг → ...", back: "СВ (azione improvvisa)" },
    { front: "уже → ...", back: "СВ (azione completata)" }
];

// ============================================================
// PANEL 10 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelAsp10() {
    const panel = document.getElementById('panel-asp-10');
    if (!panel) return;

    const container = panel.querySelector('#asp-10-cards-container');
    const prevBtn   = panel.querySelector('#asp-10-deck-prev');
    const nextBtn   = panel.querySelector('#asp-10-deck-next');
    const counterEl = panel.querySelector('#asp-10-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "«Он долго ___ замок» — какой вид?", options: ["СВ", "НСВ", "оба"], answer: "НСВ" },
        { question: "«Наконец починил» — почему СВ?", options: ["Процесс в ходе", "Результат достигнут", "Повторяющееся действие"], answer: "Результат достигнут" },
        { question: "После «каждый день» используется...", options: ["СВ", "НСВ", "оба"], answer: "НСВ" },
        { question: "«Открыл дверь и вошёл» — это...", options: ["фон", "цепь событий", "привычка"], answer: "цепь событий" },
        { question: "«Вдруг зазвонил телефон» — какой вид?", options: ["НСВ", "СВ", "оба"], answer: "СВ" }
    ];
    const matchPairs = [
        { left: "ломать", right: "сломать" },
        { left: "чинить", right: "починить" },
        { left: "открывать", right: "открыть" },
        { left: "закрывать", right: "закрыть" },
        { left: "звонить", right: "позвонить" },
        { left: "набирать", right: "набрать" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Он долго ", promptSuffix: " замок. (чинить, НСВ прошедшее)", answers: ["чинил"] },
        { id: "q2", promptPrefix: "Наконец он ", promptSuffix: " дверь. (открыть, СВ прошедшее)", answers: ["открыл"] },
        { id: "q3", promptPrefix: "Кто ", promptSuffix: " этот замок? (сломать, СВ прошедшее)", answers: ["сломал"] },
        { id: "q4", promptPrefix: "Она всегда ", promptSuffix: " дверь на ключ. (закрывать, НСВ прошедшее)", answers: ["закрывала"] },
        { id: "q5", promptPrefix: "Он ", promptSuffix: " номер и позвонил. (набрать, СВ прошедшее)", answers: ["набрал"] }
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
            card.className = 'fca01-card-container asp-10-card';
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
        container.querySelectorAll('.asp-10-card').forEach(card => {
            const cardIndex = parseInt(card.dataset.index, 10);
            if (cardIndex >= MC_END) return;

            let checked = false;
            const gapElements  = Array.from(card.querySelectorAll('.gap'));
            const wordElements = Array.from(card.querySelectorAll('.word-option'));
            const verifyBtn    = card.querySelector('.verify-btn');
            const nextBtnEl    = card.querySelector('.next-btn');
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

            if (nextBtnEl) nextBtnEl.addEventListener('click', () => showCard(currentCard + 1));

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
                nextBtnEl.style.display = 'inline-block';
            });
        });

        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card    = this.closest('.asp-10-card');
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
        container.querySelectorAll('.asp-10-card').forEach((c, i) => {
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
    'panel-asp-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-asp-01', exercises: p1exercises }),
    'panel-asp-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-asp-02', exercises: p2exercises }),
    'panel-asp-03': () => new DragDropExercise({ rootId: 'ex-dragdrop-asp-03', exercises: p3exercises }),
    'panel-asp-04': () => new FlashcardExercise({ rootId: 'ex-flashcards-asp-04', cards: p4cards }),
    'panel-asp-05': () => new FlashcardExercise({ rootId: 'ex-flashcards-asp-05', cards: p5cards }),
    'panel-asp-06': () => new FlashcardExercise({ rootId: 'ex-flashcards-asp-06', cards: p6cards }),
    'panel-asp-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-asp-07', cards: p7cards }),
    'panel-asp-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-asp-08', cards: p8cards }),
    'panel-asp-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-asp-09', cards: p9cards }),
    'panel-asp-10': () => initPanelAsp10()
};

initPanelManager({ initializers, enableAccessControl: true });
