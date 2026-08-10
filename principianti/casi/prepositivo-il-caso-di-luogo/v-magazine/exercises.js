import QuizExercise from '/assets/js/engines/QuizExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — Scrivi · public
// Prepositivo — dove si trova l'oggetto in una libreria
// ============================================================
const p1questions = [
    { id: "neg-1-01", promptPrefix: "Книги ", promptSuffix: " (полка).", answers: ["на полке"] },
    { id: "neg-1-02", promptPrefix: "Журналы ", promptSuffix: " (стойка).", answers: ["на стойке"] },
    { id: "neg-1-03", promptPrefix: "Открытки ", promptSuffix: " (витрина).", answers: ["на витрине"] },
    { id: "neg-1-04", promptPrefix: "Пакеты ", promptSuffix: " (касса).", answers: ["на кассе"] },
    { id: "neg-1-05", promptPrefix: "Карандаши ", promptSuffix: " (коробка).", answers: ["в коробке"] },
    { id: "neg-1-06", promptPrefix: "Закладки ", promptSuffix: " (корзина).", answers: ["в корзине"] },
    { id: "neg-1-07", promptPrefix: "Карты ", promptSuffix: " (шкаф).", answers: ["в шкафу"] },
    { id: "neg-1-08", promptPrefix: "Ручки ", promptSuffix: " (отдел канцелярии).", answers: ["в отделе канцелярии"] },
    { id: "neg-1-09", promptPrefix: "Романы ", promptSuffix: " (отдел художественной литературы).", answers: ["в отделе художественной литературы"] },
    { id: "neg-1-10", promptPrefix: "Учебники ", promptSuffix: " (отдел учебной литературы).", answers: ["в отделе учебной литературы"] }
];

// ============================================================
// PANEL 2 — Scrivi · student
// Prepositivo — al supermercato
// ============================================================
const p2questions = [
    { id: "neg-2-01", promptPrefix: "Мы ", promptSuffix: " (молочный отдел).", answers: ["в молочном отделе"] },
    { id: "neg-2-02", promptPrefix: "Они ", promptSuffix: " в кассу (очередь).", answers: ["в очереди"] },
    { id: "neg-2-03", promptPrefix: "Женя ", promptSuffix: " (овощной отдел).", answers: ["в овощном отделе"] },
    { id: "neg-2-04", promptPrefix: "Йогурты ", promptSuffix: " в молочном отделе (полки).", answers: ["на полках"] },
    { id: "neg-2-05", promptPrefix: "Овощи ", promptSuffix: " в овощном отделе (прилавок).", answers: ["на прилавке"] },
    { id: "neg-2-06", promptPrefix: "Продукты ", promptSuffix: " (тележка).", answers: ["в тележке"] },
    { id: "neg-2-07", promptPrefix: "Хлеб ", promptSuffix: " (прилавок).", answers: ["на прилавке"] },
    { id: "neg-2-08", promptPrefix: "Товары ", promptSuffix: " (касса).", answers: ["на кассе"] },
    { id: "neg-2-09", promptPrefix: "Покупатели ", promptSuffix: " (очередь).", answers: ["в очереди"] },
    { id: "neg-2-10", promptPrefix: "", promptSuffix: " (какой отдел) находятся замороженные продукты и полуфабрикаты?", answers: ["В каком отделе", "в каком отделе"] }
];

// ============================================================
// PANEL 3 — Scrivi · paid
// Prepositivo — nel negozio di abbigliamento
// ============================================================
const p3questions = [
    { id: "neg-3-01", promptPrefix: "Платья ", promptSuffix: " (вешалки).", answers: ["на вешалках"] },
    { id: "neg-3-02", promptPrefix: "Она ", promptSuffix: " (примерочная).", answers: ["в примерочной"] },
    { id: "neg-3-03", promptPrefix: "Мы ", promptSuffix: " в кассу (очередь).", answers: ["в очереди"] },
    { id: "neg-3-04", promptPrefix: "Ценник ", promptSuffix: " (рубашка).", answers: ["на рубашке"] },
    { id: "neg-3-05", promptPrefix: "Продавец ", promptSuffix: " (зал).", answers: ["в зале"] },
    { id: "neg-3-06", promptPrefix: "Зеркало ", promptSuffix: " (примерочная).", answers: ["в примерочной"] },
    { id: "neg-3-07", promptPrefix: "Джинсы ", promptSuffix: " (полки).", answers: ["на полках"] },
    { id: "neg-3-08", promptPrefix: "Обувь ", promptSuffix: " (коробки).", answers: ["в коробках"] },
    { id: "neg-3-09", promptPrefix: "Новая коллекция ", promptSuffix: " (витрина).", answers: ["на витрине"] },
    { id: "neg-3-10", promptPrefix: "Носки ", promptSuffix: " (стойка).", answers: ["на стойке"] }
];

// ============================================================
// PANEL 4 — Scrivi · public
// Prepositivo — alla stazione
// ============================================================
const p4questions = [
    { id: "neg-4-01", promptPrefix: "Мы ", promptSuffix: " (перрон).", answers: ["на перроне"] },
    { id: "neg-4-02", promptPrefix: "Поезд ", promptSuffix: " (платформа).", answers: ["на платформе"] },
    { id: "neg-4-03", promptPrefix: "Мы ", promptSuffix: " в кассу (очередь).", answers: ["в очереди"] },
    { id: "neg-4-04", promptPrefix: "Она ", promptSuffix: " (бар).", answers: ["в баре"] },
    { id: "neg-4-05", promptPrefix: "Расписание ", promptSuffix: " (табло).", answers: ["на табло"] },
    { id: "neg-4-06", promptPrefix: "Чемоданы ", promptSuffix: " (камера хранения).", answers: ["в камере хранения"] },
    { id: "neg-4-07", promptPrefix: "Билеты ", promptSuffix: " (касса).", answers: ["в кассе"] },
    { id: "neg-4-08", promptPrefix: "Андрей ", promptSuffix: " (журнальный киоск).", answers: ["в журнальном киоске"] },
    { id: "neg-4-09", promptPrefix: "Носильщик ", promptSuffix: " (эскалатор).", answers: ["на эскалаторе"] },
    { id: "neg-4-10", promptPrefix: "Билетный автомат ", promptSuffix: " (вокзал).", answers: ["на вокзале"] }
];

// ============================================================
// PANEL 5 — Scrivi · student
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p5questions = [];

// ============================================================
// PANEL 6 — Scrivi · paid
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p6questions = [];

// ============================================================
// PANEL 7 — Scrivi · public
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p7questions = [];

// ============================================================
// PANEL 8 — Scrivi · student
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p8questions = [];

// ============================================================
// PANEL 9 — Scrivi · paid
// TODO: contenuto in attesa di materiale da PM
// ============================================================
const p9questions = [];

// ============================================================
// PANEL 10 — Quiz misto (multiple choice + match + write) · public
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelNeg10() {
    const panel = document.getElementById('panel-neg-10');
    if (!panel) return;

    const container = panel.querySelector('#neg-10-cards-container');
    const prevBtn   = panel.querySelector('#neg-10-deck-prev');
    const nextBtn   = panel.querySelector('#neg-10-deck-next');
    const counterEl = panel.querySelector('#neg-10-deck-counter');

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
            card.className = 'fca01-card-container neg-10-card';
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
        container.querySelectorAll('.neg-10-card').forEach(card => {
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
                const card    = this.closest('.neg-10-card');
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
        container.querySelectorAll('.neg-10-card').forEach((c, i) => {
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
    'panel-neg-1': () => new QuizExercise({ panelId: 'panel-neg-1', listId: 'quiz-neg-1-list', questions: p1questions }),
    'panel-neg-2': () => new QuizExercise({ panelId: 'panel-neg-2', listId: 'quiz-neg-2-list', questions: p2questions }),
    'panel-neg-3': () => new QuizExercise({ panelId: 'panel-neg-3', listId: 'quiz-neg-3-list', questions: p3questions }),
    'panel-neg-4': () => new QuizExercise({ panelId: 'panel-neg-4', listId: 'quiz-neg-4-list', questions: p4questions }),
    'panel-neg-5': () => new QuizExercise({ panelId: 'panel-neg-5', listId: 'quiz-neg-5-list', questions: p5questions }),
    'panel-neg-6': () => new QuizExercise({ panelId: 'panel-neg-6', listId: 'quiz-neg-6-list', questions: p6questions }),
    'panel-neg-7': () => new QuizExercise({ panelId: 'panel-neg-7', listId: 'quiz-neg-7-list', questions: p7questions }),
    'panel-neg-8': () => new QuizExercise({ panelId: 'panel-neg-8', listId: 'quiz-neg-8-list', questions: p8questions }),
    'panel-neg-9': () => new QuizExercise({ panelId: 'panel-neg-9', listId: 'quiz-neg-9-list', questions: p9questions }),
    'panel-neg-10': () => initPanelNeg10()
};

initPanelManager({ initializers, enableAccessControl: true });
