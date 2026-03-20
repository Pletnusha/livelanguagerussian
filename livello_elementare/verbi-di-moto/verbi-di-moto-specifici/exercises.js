import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Misto (бегать/бежать + плавать/плыть + летать/лететь)
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Я часто {{1}} в парке по утрам.",
        words: ["бегу", "бегаю", "бежит"],
        correctAnswers: { 1: "бегаю" }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Рыбы {{1}} в аквариуме.",
        words: ["плывут", "плавают", "летают"],
        correctAnswers: { 1: "плавают" }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Осенью птицы {{1}} на юг.",
        words: ["летают", "летят", "плывут"],
        correctAnswers: { 1: "летят" }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Все птицы {{1}}.",
        words: ["летят", "летают", "плавают"],
        correctAnswers: { 1: "летают" }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Куда {{1}}?",
        words: ["бегаешь", "бежишь", "летишь"],
        correctAnswers: { 1: "бежишь" }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Видишь, там {{1}} орёл.",
        words: ["летает", "летит", "плывёт"],
        correctAnswers: { 1: "летит" }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Куда вы {{1}} в отпуск?",
        words: ["летаете", "летите", "плывёте"],
        correctAnswers: { 1: "летите" }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Корабль {{1}} в кругосветный круиз.",
        words: ["плавает", "плывёт", "летит"],
        correctAnswers: { 1: "плывёт" }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Ты умеешь {{1}}?",
        words: ["плыть", "плавать", "бегать"],
        correctAnswers: { 1: "плавать" }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Обычно зимой мы {{1}} в Таиланд.",
        words: ["летим", "летаем", "плаваем"],
        correctAnswers: { 1: "летаем" }
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Спряжение бегать / бежать
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я {{1}} на работу, опаздываю!",
        words: ["бегаю", "бегу", "бежит"],
        correctAnswers: { 1: "бегу" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Где ты обычно {{1}}?",
        words: ["бежишь", "бегаешь", "бегает"],
        correctAnswers: { 1: "бегаешь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Обычно я {{1}} в парке.",
        words: ["бегу", "бегаю", "бежит"],
        correctAnswers: { 1: "бегаю" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Они {{1}} марафон в понедельник.",
        words: ["бегают", "бегут", "бежит"],
        correctAnswers: { 1: "бегут" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Он {{1}} на автобус.",
        words: ["бегает", "бежит", "бегут"],
        correctAnswers: { 1: "бежит" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Зачем она за ним {{1}}?",
        words: ["бежит", "бегает", "бегут"],
        correctAnswers: { 1: "бегает" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Вы {{1}} по утрам?",
        words: ["бежите", "бегаете", "бегут"],
        correctAnswers: { 1: "бегаете" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Куда вы {{1}}?",
        words: ["бегаете", "бежите", "бегут"],
        correctAnswers: { 1: "бежите" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Они {{1}} по пляжу каждые выходные.",
        words: ["бегут", "бегают", "бежит"],
        correctAnswers: { 1: "бегают" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} на самолёт, прости, нет времени!",
        words: ["бегаем", "бежим", "бегут"],
        correctAnswers: { 1: "бежим" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Куда ты {{1}}?",
        words: ["бегаешь", "бежишь", "бежит"],
        correctAnswers: { 1: "бежишь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} каждое утро по пляжу.",
        words: ["бежим", "бегаем", "бегают"],
        correctAnswers: { 1: "бегаем" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Спряжение плавать / плыть
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Рыбы {{1}} в море.",
        words: ["плывут", "плавают", "плавает"],
        correctAnswers: { 1: "плавают" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Дельфины {{1}} за лодкой.",
        words: ["плавают", "плывут", "плывёт"],
        correctAnswers: { 1: "плывут" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я хорошо {{1}}.",
        words: ["плыву", "плаваю", "плывёт"],
        correctAnswers: { 1: "плаваю" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Он {{1}} на другой берег.",
        words: ["плавает", "плывёт", "плывут"],
        correctAnswers: { 1: "плывёт" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты часто {{1}} в бассейне?",
        words: ["плывёшь", "плаваешь", "плавает"],
        correctAnswers: { 1: "плаваешь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Вы {{1}} в круиз по Средиземному морю?",
        words: ["плаваете", "плывёте", "плывут"],
        correctAnswers: { 1: "плывёте" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы каждый год {{1}} в круиз.",
        words: ["плывём", "плаваем", "плывут"],
        correctAnswers: { 1: "плаваем" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} по озеру, но вас не видим.",
        words: ["плаваем", "плывём", "плывут"],
        correctAnswers: { 1: "плывём" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Так она {{1}} каждое утро.",
        words: ["плывёт", "плавает", "плаваешь"],
        correctAnswers: { 1: "плавает" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я {{1}} на яхте в эти выходные.",
        words: ["плаваю", "плыву", "плывёт"],
        correctAnswers: { 1: "плыву" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Вы {{1}} только в море?!",
        words: ["плывёте", "плаваете", "плавают"],
        correctAnswers: { 1: "плаваете" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "На чём ты {{1}}?!",
        words: ["плаваешь", "плывёшь", "плывёт"],
        correctAnswers: { 1: "плывёшь" }
    },
];

// ============================================================
// PANEL 11 — DragDrop · paid · летать / лететь
// ============================================================
const p11exercises = [
    // TODO
];

// ============================================================
// PANEL 2 — Flashcard · public · Misto 10 frasi
// ============================================================
const p2cards = [
    // TODO
];

// ============================================================
// PANEL 7 — Flashcard · paid · Misto 10 frasi
// ============================================================
const p7cards = [
    // TODO
];

// ============================================================
// PANEL 8 — Flashcard · paid · Misto 10 frasi
// ============================================================
const p8cards = [
    // TODO
];

// ============================================================
// PANEL 3 — Flashcard · public · Misto 10 frasi
// ============================================================
const p3cards = [
    // TODO
];

// ============================================================
// PANEL 9 — Flashcard · paid · Misto 10 frasi
// ============================================================
const p9cards = [
    // TODO
];

// ============================================================
// PANEL 10 — Flashcard · paid · Misto 10 frasi
// ============================================================
const p10cards = [
    // TODO
];

// ============================================================
// PANEL 4 — Mixed Quiz · public
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-spec-04');
    if (!panel) return;

    const container = panel.querySelector('#spec-04-cards-container');
    const prevBtn   = panel.querySelector('#spec-04-deck-prev');
    const nextBtn   = panel.querySelector('#spec-04-deck-next');
    const counterEl = panel.querySelector('#spec-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        // TODO
    ];

    const matchPairs = [
        // TODO
    ];

    const quizData = [
        // TODO
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
            card.className = 'fca01-card-container spec-04-card';
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
        container.querySelectorAll('.spec-04-card').forEach(card => {
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
                const card    = this.closest('.spec-04-card');
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
        container.querySelectorAll('.spec-04-card').forEach((c, i) => {
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
    'panel-spec-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-spec-01',    exercises: p1exercises }),
    'panel-spec-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-spec-05', exercises: p5exercises }),
    'panel-spec-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-spec-06', exercises: p6exercises }),
    'panel-spec-11':  () => new DragDropExercise({ rootId: 'ex-dragdrop-spec-11',    exercises: p11exercises }),
    'panel-spec-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-02', cards: p2cards }),
    'panel-spec-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-07', cards: p7cards }),
    'panel-spec-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-08', cards: p8cards }),
    'panel-spec-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-03', cards: p3cards }),
    'panel-spec-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-09', cards: p9cards }),
    'panel-spec-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-10', cards: p10cards }),
    'panel-spec-04':  () => initPanel4()
};

initPanelManager({ initializers, enableAccessControl: false });
