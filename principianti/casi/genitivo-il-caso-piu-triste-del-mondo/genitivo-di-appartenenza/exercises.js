import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Pronome + sostantivo al genitivo — genitivo di appartenenza (чей?)
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) al genitivo.",
        text: "Кот {{1}}.",
        words: ["моего бабушки", "моя бабушка", "моей бабушки", "моя бабушки"],
        correctAnswers: { 1: "моей бабушки" },
        explanation: "моего (pronome maschile, genitivo) + бабушки (sostantivo femminile, genitivo) → genere del pronome sbagliato. моя (pronome femminile, nominativo) + бабушка (sostantivo femminile, nominativo) → genere giusto ma caso sbagliato. моей (pronome femminile, genitivo) + бабушки (sostantivo femminile, genitivo) → CORRETTO. моя (pronome femminile, nominativo) + бабушки (sostantivo femminile, genitivo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) al genitivo.",
        text: "Дом {{1}}.",
        words: ["твою дедушки", "твой дедушка", "твоего дедушки", "твой дедушки"],
        correctAnswers: { 1: "твоего дедушки" },
        explanation: "твою (pronome femminile, genitivo) + дедушки (sostantivo maschile, genitivo) → genere del pronome sbagliato. твой (pronome maschile, nominativo) + дедушка (sostantivo maschile, nominativo) → genere giusto ma caso sbagliato. твоего (pronome maschile, genitivo) + дедушки (sostantivo maschile, genere maschile nonostante la desinenza in -а, genitivo) → CORRETTO. твой (pronome maschile, nominativo) + дедушки (sostantivo maschile, genitivo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) al genitivo.",
        text: "Брат {{1}}.",
        words: ["нашу друга", "наш друг", "нашего друга", "наш друга"],
        correctAnswers: { 1: "нашего друга" },
        explanation: "нашу (pronome femminile, genitivo) + друга (sostantivo maschile animato, genitivo) → genere del pronome sbagliato. наш (pronome maschile, nominativo) + друг (sostantivo maschile, nominativo) → genere giusto ma caso sbagliato. нашего (pronome maschile, genitivo) + друга (sostantivo maschile animato, genitivo) → CORRETTO. наш (pronome maschile, nominativo) + друга (sostantivo maschile animato, genitivo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (sostantivo) al genitivo.",
        text: "Сестра её {{1}}.",
        words: ["парень", "парню", "парня", "парнем"],
        correctAnswers: { 1: "парня" },
        explanation: "Sostantivo maschile animato al genitivo: парня. (её è invariabile, non cambia forma)."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) al genitivo.",
        text: "Мотоцикл {{1}}.",
        words: ["вашу дяди", "ваш дядя", "вашего дяди", "ваш дяди"],
        correctAnswers: { 1: "вашего дяди" },
        explanation: "вашу (pronome femminile, genitivo) + дяди (sostantivo maschile, genitivo) → genere del pronome sbagliato. ваш (pronome maschile, nominativo) + дядя (sostantivo maschile, nominativo) → genere giusto ma caso sbagliato. вашего (pronome maschile, genitivo) + дяди (sostantivo maschile, genere maschile nonostante la desinenza in -я, genitivo) → CORRETTO. ваш (pronome maschile, nominativo) + дяди (sostantivo maschile, genitivo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) al genitivo.",
        text: "Подруга {{1}}.",
        words: ["твоего мамы", "твоя мама", "твоей мамы", "твоя мамы"],
        correctAnswers: { 1: "твоей мамы" },
        explanation: "твоего (pronome maschile, genitivo) + мамы (sostantivo femminile, genitivo) → genere del pronome sbagliato. твоя (pronome femminile, nominativo) + мама (sostantivo femminile, nominativo) → genere giusto ma caso sbagliato. твоей (pronome femminile, genitivo) + мамы (sostantivo femminile, genitivo) → CORRETTO. твоя (pronome femminile, nominativo) + мамы (sostantivo femminile, genitivo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) al genitivo.",
        text: "Собака {{1}}.",
        words: ["нашего бабушки", "наша бабушка", "нашей бабушки", "наша бабушки"],
        correctAnswers: { 1: "нашей бабушки" },
        explanation: "нашего (pronome maschile, genitivo) + бабушки (sostantivo femminile, genitivo) → genere del pronome sbagliato. наша (pronome femminile, nominativo) + бабушка (sostantivo femminile, nominativo) → genere giusto ma caso sbagliato. нашей (pronome femminile, genitivo) + бабушки (sostantivo femminile, genitivo) → CORRETTO. наша (pronome femminile, nominativo) + бабушки (sostantivo femminile, genitivo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) al genitivo.",
        text: "Машина {{1}}.",
        words: ["мою папы", "мой папа", "моего папы", "мой папы"],
        correctAnswers: { 1: "моего папы" },
        explanation: "мою (pronome femminile, genitivo) + папы (sostantivo maschile, genitivo) → genere del pronome sbagliato. мой (pronome maschile, nominativo) + папа (sostantivo maschile, nominativo) → genere giusto ma caso sbagliato. моего (pronome maschile, genitivo) + папы (sostantivo maschile, genere maschile nonostante la desinenza in -а, genitivo) → CORRETTO. мой (pronome maschile, nominativo) + папы (sostantivo maschile, genitivo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) al genitivo.",
        text: "Отец {{1}}.",
        words: ["моего девушки", "моя девушка", "моей девушки", "моя девушки"],
        correctAnswers: { 1: "моей девушки" },
        explanation: "моего (pronome maschile, genitivo) + девушки (sostantivo femminile, genitivo) → genere del pronome sbagliato. моя (pronome femminile, nominativo) + девушка (sostantivo femminile, nominativo) → genere giusto ma caso sbagliato. моей (pronome femminile, genitivo) + девушки (sostantivo femminile, genitivo) → CORRETTO. моя (pronome femminile, nominativo) + девушки (sostantivo femminile, genitivo) → i due elementi non concordano nel caso."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p2exercises = [];

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
// PANEL 10 — Quiz misto (multiple choice + match + write) · paid
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelGda10() {
    const panel = document.getElementById('panel-gda-10');
    if (!panel) return;

    const container = panel.querySelector('#gda-10-cards-container');
    const prevBtn   = panel.querySelector('#gda-10-deck-prev');
    const nextBtn   = panel.querySelector('#gda-10-deck-next');
    const counterEl = panel.querySelector('#gda-10-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [];
    const matchPairs = [];
    const quizData = [];

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
            card.className = 'fca01-card-container gda-10-card';
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
        container.querySelectorAll('.gda-10-card').forEach(card => {
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
                const card    = this.closest('.gda-10-card');
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
        container.querySelectorAll('.gda-10-card').forEach((c, i) => {
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
    'panel-gda-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-gda-01',    exercises: p1exercises }),
    'panel-gda-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-gda-02',    exercises: p2exercises }),
    'panel-gda-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-gda-03',    exercises: p3exercises }),
    'panel-gda-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-04', cards: p4cards }),
    'panel-gda-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-05', cards: p5cards }),
    'panel-gda-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-06', cards: p6cards }),
    'panel-gda-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-07', cards: p7cards }),
    'panel-gda-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-08', cards: p8cards }),
    'panel-gda-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-09', cards: p9cards }),
    'panel-gda-10': () => initPanelGda10()
};

initPanelManager({ initializers, enableAccessControl: true });
