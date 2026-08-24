import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Местоимения и существительные (все склонения) после "у" + genitivo
// ============================================================
const p1exercises = [
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть сестра.",
        words: ["я", "мне", "меня"],
        correctAnswers: { 1: "меня" },
        explanation: "Genitivo del pronome personale: я → меня."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть друг.",
        words: ["моя старшая сестра", "моей старшей сестре", "моей старшей сестры"],
        correctAnswers: { 1: "моей старшей сестры" },
        explanation: "Genitivo: сестра (femminile) → сестры; l'aggettivo concorda: моя старшая → моей старшей."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть машина?",
        words: ["тебе", "ты", "тебя"],
        correctAnswers: { 1: "тебя" },
        explanation: "Genitivo del pronome personale: ты → тебя."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть собака.",
        words: ["наш сосед", "нашему соседу", "нашего соседа"],
        correctAnswers: { 1: "нашего соседа" },
        explanation: "Genitivo: сосед (maschile) → соседа; l'aggettivo concorda: наш → нашего."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть работа.",
        words: ["она", "ей", "неё"],
        correctAnswers: { 1: "неё" },
        explanation: "Genitivo del pronome personale: она → неё (con -н- dopo la preposizione «у»)."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть квартира.",
        words: ["мать", "матерью", "матери"],
        correctAnswers: { 1: "матери" },
        explanation: "Genitivo irregolare di мать (3ª declinazione): мать → матери."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть время.",
        words: ["мы", "нам", "нас"],
        correctAnswers: { 1: "нас" },
        explanation: "Genitivo del pronome personale: мы → нас."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть велосипед.",
        words: ["мой младший брат", "моему младшему брату", "моего младшего брата"],
        correctAnswers: { 1: "моего младшего брата" },
        explanation: "Genitivo: брат (maschile) → брата; l'aggettivo concorda: мой младший → моего младшего."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть дети.",
        words: ["они", "им", "них"],
        correctAnswers: { 1: "них" },
        explanation: "Genitivo del pronome personale: они → них (con -н- dopo la preposizione «у»)."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть дача.",
        words: ["наш дядя", "нашей дяди", "нашего дяди"],
        correctAnswers: { 1: "нашего дяди" },
        explanation: "дядя è maschile ma si declina come i sostantivi femminili in -я: genitivo дяди. L'aggettivo concorda però al maschile: наш → нашего."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// "У X нет Y" — genitivo su entrambi i lati, tutte le declinazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["я", "меня", "кошка", "кошки"],
        correctAnswers: { 1: "меня", 2: "кошки" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} брата нет {{2}}.",
        words: ["мой старший", "моего старшего", "чёрная куртка", "чёрной куртки"],
        correctAnswers: { 1: "моего старшего", 2: "чёрной куртки" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["ты", "тебя", "заграничный паспорт", "заграничного паспорта"],
        correctAnswers: { 1: "тебя", 2: "заграничного паспорта" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} сестры нет {{2}}.",
        words: ["моя младшая", "моей младшей", "мобильный телефон", "мобильного телефона"],
        correctAnswers: { 1: "моей младшей", 2: "мобильного телефона" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["он", "него", "русский словарь", "русского словаря"],
        correctAnswers: { 1: "него", 2: "русского словаря" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} соседа нет {{2}}.",
        words: ["наш", "нашего", "большая терраса", "большой террасы"],
        correctAnswers: { 1: "нашего", 2: "большой террасы" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["моя соседка", "моей соседки", "большое зеркало", "большого зеркала"],
        correctAnswers: { 1: "моей соседки", 2: "большого зеркала" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["моя лучшая подруга", "моей лучшей подруги", "парень", "парня"],
        correctAnswers: { 1: "моей лучшей подруги", 2: "парня" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["мы", "нас", "время", "времени"],
        correctAnswers: { 1: "нас", 2: "времени" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["твой лучший друг", "твоего лучшего друга", "девушка", "девушки"],
        correctAnswers: { 1: "твоего лучшего друга", 2: "девушки" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p3exercises = [];

// ============================================================
// PANEL 4 — Flashcard · public
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p4cards = [];

// ============================================================
// PANEL 5 — Flashcard · student
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p5cards = [];

// ============================================================
// PANEL 6 — Flashcard · paid
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p6cards = [];

// ============================================================
// PANEL 7 — Flashcard · public
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p7cards = [];

// ============================================================
// PANEL 8 — Flashcard · student
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p8cards = [];

// ============================================================
// PANEL 9 — Flashcard · paid
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p9cards = [];

// ============================================================
// PANEL 10 — Quiz misto (multiple choice + match + write) · public
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelEvn10() {
    const panel = document.getElementById('panel-evn-10');
    if (!panel) return;

    const container = panel.querySelector('#evn-10-cards-container');
    const prevBtn   = panel.querySelector('#evn-10-deck-prev');
    const nextBtn   = panel.querySelector('#evn-10-deck-next');
    const counterEl = panel.querySelector('#evn-10-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [];
    const matchPairs = [];
    const quizData = [];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

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
            card.className = 'fca01-card-container evn-10-card';
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
        container.querySelectorAll('.evn-10-card').forEach(card => {
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
                const card    = this.closest('.evn-10-card');
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
        container.querySelectorAll('.evn-10-card').forEach((c, i) => {
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
    'panel-evn-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-evn-01', exercises: p1exercises }),
    'panel-evn-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-evn-02', exercises: p2exercises }),
    'panel-evn-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-evn-03', exercises: p3exercises }),
    'panel-evn-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-04', cards: p4cards }),
    'panel-evn-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-05', cards: p5cards }),
    'panel-evn-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-06', cards: p6cards }),
    'panel-evn-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-07', cards: p7cards }),
    'panel-evn-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-08', cards: p8cards }),
    'panel-evn-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-09', cards: p9cards }),
    'panel-evn-10': () => initPanelEvn10()
};

initPanelManager({ initializers, enableAccessControl: true });
