import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · "ГДЕ У ТЕБЯ..."
// Предложный падеж — дистракторы: родительный + винительный
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Зубная паста на {{1}}.",
        words: ["раковине", "раковины", "раковину"],
        correctAnswers: { 1: "раковине" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Шампунь на {{1}}.",
        words: ["полке", "полки", "полку"],
        correctAnswers: { 1: "полке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Туалетная бумага в {{1}}.",
        words: ["коробке", "коробки", "коробку"],
        correctAnswers: { 1: "коробке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Бутылка воды в {{1}}.",
        words: ["холодильнике", "холодильника", "холодильник"],
        correctAnswers: { 1: "холодильнике" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ваза на {{1}}.",
        words: ["столе", "стола", "стол"],
        correctAnswers: { 1: "столе" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Кофе в {{1}}.",
        words: ["шкафу", "шкафа", "шкаф"],
        correctAnswers: { 1: "шкафу" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Компьютер в {{1}}.",
        words: ["ремонте", "ремонта", "ремонт"],
        correctAnswers: { 1: "ремонте" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Полотенца на {{1}}.",
        words: ["двери", "двери", "дверь"],
        correctAnswers: { 1: "двери" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ключи в {{1}}.",
        words: ["сумке", "сумки", "сумку"],
        correctAnswers: { 1: "сумке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Пульт на {{1}}.",
        words: ["диване", "дивана", "диван"],
        correctAnswers: { 1: "диване" }
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · "В ГОСТИНОЙ"
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Пульт на {{1}}.",
        words: ["столике", "столика", "столик"],
        correctAnswers: { 1: "столике" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Подушки на {{1}}.",
        words: ["диване", "дивана", "диван"],
        correctAnswers: { 1: "диване" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Книги на {{1}}.",
        words: ["полке", "полки", "полку"],
        correctAnswers: { 1: "полке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Лампа на {{1}}.",
        words: ["столе", "стола", "стол"],
        correctAnswers: { 1: "столе" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ковёр на {{1}}.",
        words: ["полу", "пола", "пол"],
        correctAnswers: { 1: "полу" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ваза на {{1}}.",
        words: ["окне", "окна", "окно"],
        correctAnswers: { 1: "окне" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Занавеска на {{1}}.",
        words: ["окне", "окна", "окно"],
        correctAnswers: { 1: "окне" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Картина на {{1}}.",
        words: ["стене", "стены", "стену"],
        correctAnswers: { 1: "стене" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Кот на {{1}}.",
        words: ["подоконнике", "подоконника", "подоконник"],
        correctAnswers: { 1: "подоконнике" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Подушка на {{1}}.",
        words: ["кресле", "кресла", "кресло"],
        correctAnswers: { 1: "кресле" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid · "НА КУХНЕ"
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Курица в {{1}}.",
        words: ["духовке", "духовки", "духовку"],
        correctAnswers: { 1: "духовке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Тарелки на {{1}}.",
        words: ["полке", "полки", "полку"],
        correctAnswers: { 1: "полке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Кастрюля на {{1}}.",
        words: ["плите", "плиты", "плиту"],
        correctAnswers: { 1: "плите" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Салатница на {{1}}.",
        words: ["столе", "стола", "стол"],
        correctAnswers: { 1: "столе" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Бокалы в {{1}}.",
        words: ["шкафу", "шкафа", "шкаф"],
        correctAnswers: { 1: "шкафу" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Мясо в {{1}}.",
        words: ["холодильнике", "холодильника", "холодильник"],
        correctAnswers: { 1: "холодильнике" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Чай в {{1}}.",
        words: ["чашке", "чашки", "чашку"],
        correctAnswers: { 1: "чашке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Посуда в {{1}}.",
        words: ["раковине", "раковины", "раковину"],
        correctAnswers: { 1: "раковине" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Суп в {{1}}.",
        words: ["кастрюле", "кастрюли", "кастрюлю"],
        correctAnswers: { 1: "кастрюле" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ножи в {{1}}.",
        words: ["ящике", "ящика", "ящик"],
        correctAnswers: { 1: "ящике" }
    }
];

// ============================================================
// PANEL 4 — GapText · public · ПРЕДЛОГ В/НА (1)
// ============================================================
const p4paragraphs = [
    "Зубная паста {{0}} раковине.",
    "Шампунь {{1}} полке.",
    "Бутылка воды {{2}} холодильнике.",
    "Кофе {{3}} шкафу.",
    "Ковёр {{4}} полу.",
    "Книги {{5}} полке.",
    "Подушки {{6}} диване.",
    "Занавеска {{7}} окне.",
    "Картина {{8}} стене.",
    "Кастрюля {{9}} плите."
];

const p4gaps = {
    0: { answers: ["на"] },
    1: { answers: ["на"] },
    2: { answers: ["в"] },
    3: { answers: ["в"] },
    4: { answers: ["на"] },
    5: { answers: ["на"] },
    6: { answers: ["на"] },
    7: { answers: ["на"] },
    8: { answers: ["на"] },
    9: { answers: ["на"] }
};

// ============================================================
// PANEL 5 — GapText · student · ПРЕДЛОГ В/НА (2)
// ============================================================
const p5paragraphs = [
    "Тарелки {{0}} раковине.",
    "Курица {{1}} духовке.",
    "Ваза {{2}} столе.",
    "Мясо {{3}} холодильнике.",
    "Суп {{4}} кастрюле.",
    "Ключи {{5}} сумке.",
    "Пульт {{6}} диване.",
    "Лампа {{7}} столе.",
    "Платье {{8}} шкафу.",
    "Полотенца {{9}} двери."
];

const p5gaps = {
    0: { answers: ["в"] },
    1: { answers: ["в"] },
    2: { answers: ["на"] },
    3: { answers: ["в"] },
    4: { answers: ["в"] },
    5: { answers: ["в"] },
    6: { answers: ["на"] },
    7: { answers: ["на"] },
    8: { answers: ["в"] },
    9: { answers: ["на"] }
};

// ============================================================
// PANEL 6 — Flashcard · paid · ИМЕНИТЕЛЬНЫЙ → ПРЕДЛОЖНЫЙ (1)
// ============================================================
const p6cards = [
    { front: "старый диван", back: "на старом диване" },
    { front: "новая духовка", back: "в новой духовке" },
    { front: "обеденный стол", back: "на обеденном столе" },
    { front: "чёрная сумка", back: "в чёрной сумке" },
    { front: "высокий потолок", back: "на высоком потолке" },
    { front: "широкая кровать", back: "на широкой кровати" },
    { front: "деревянный шкаф", back: "в деревянном шкафу" },
    { front: "большая кастрюля", back: "в большой кастрюле" },
    { front: "белая стена", back: "на белой стене" },
    { front: "паркетный пол", back: "на паркетном полу" }
];

// ============================================================
// PANEL 7 — Flashcard · public · ИМЕНИТЕЛЬНЫЙ → ПРЕДЛОЖНЫЙ (2)
// ============================================================
const p7cards = [
    { front: "кухонная раковина", back: "в кухонной раковине" },
    { front: "книжная полка", back: "на книжной полке" },
    { front: "большой холодильник", back: "в большом холодильнике" },
    { front: "журнальный столик", back: "на журнальном столике" },
    { front: "мягкое кресло", back: "в мягком кресле" },
    { front: "входная дверь", back: "на входной двери" },
    { front: "большое окно", back: "на большом окне" },
    { front: "верхний ящик", back: "в верхнем ящике" },
    { front: "горячая плита", back: "на горячей плите" },
    { front: "тёмный коридор", back: "в тёмном коридоре" },
    { front: "маленькая коробка", back: "в маленькой коробке" }
];

// ============================================================
// PANEL 8 — Quiz misto · public
// MC (10) + Match (10) + Scrivi (10) = 30 карточек
// ============================================================
function initPanelDom8() {
    const panel = document.getElementById('panel-dom-8');
    if (!panel) return;

    const container = panel.querySelector('#dom-8-cards-container');
    const prevBtn   = panel.querySelector('#dom-8-deck-prev');
    const nextBtn   = panel.querySelector('#dom-8-deck-next');
    const counterEl = panel.querySelector('#dom-8-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Суп в ___.", options: ["большой кастрюле", "большая кастрюля"], answer: "большой кастрюле" },
        { question: "Тарелки в ___.", options: ["кухонной раковине", "кухонная раковина"], answer: "кухонной раковине" },
        { question: "Лампа на ___.", options: ["высоком потолке", "высокий потолок"], answer: "высоком потолке" },
        { question: "Платье в ___.", options: ["деревянном шкафу", "деревянный шкаф"], answer: "деревянном шкафу" },
        { question: "Мясо в ___.", options: ["большом холодильнике", "большой холодильник"], answer: "большом холодильнике" },
        { question: "Подушки на ___.", options: ["широкой кровати", "широкая кровать"], answer: "широкой кровати" },
        { question: "Ковёр на ___.", options: ["паркетном полу", "паркетный пол"], answer: "паркетном полу" },
        { question: "Картина на ___.", options: ["белой стене", "белая стена"], answer: "белой стене" },
        { question: "Ключи в ___.", options: ["чёрной сумке", "чёрная сумка"], answer: "чёрной сумке" },
        { question: "Курица в ___.", options: ["новой духовке", "новая духовка"], answer: "новой духовке" }
    ];

    const matchPairs = [
        { left: "Курица в новой", right: "духовке" },
        { left: "Ключи в чёрной", right: "сумке" },
        { left: "Кот на старом", right: "диване" },
        { left: "Ваза на обеденном", right: "столе" },
        { left: "Ножи в верхнем", right: "ящике" },
        { left: "Подушки на широкой", right: "кровати" },
        { left: "Книги на книжной", right: "полке" },
        { left: "Картина на белой", right: "стене" },
        { left: "Ковёр на паркетном", right: "полу" },
        { left: "Занавеска на большом", right: "окне" }
    ];

    const quizData = [
        { id: "dom-001", promptPrefix: "Чай ", promptSuffix: " (белая чашка).", answers: ["в белой чашке"] },
        { id: "dom-002", promptPrefix: "Кресло ", promptSuffix: " (этот угол).", answers: ["в этом углу"] },
        { id: "dom-003", promptPrefix: "Ковёр ", promptSuffix: " (паркетный пол).", answers: ["на паркетном полу"] },
        { id: "dom-004", promptPrefix: "Кошка ", promptSuffix: " (мягкое кресло).", answers: ["в мягком кресле"] },
        { id: "dom-005", promptPrefix: "Ботинки ", promptSuffix: " (тёмный коридор).", answers: ["в тёмном коридоре"] },
        { id: "dom-006", promptPrefix: "Подушки ", promptSuffix: " (широкая кровать).", answers: ["на широкой кровати"] },
        { id: "dom-007", promptPrefix: "Занавеска ", promptSuffix: " (большое окно).", answers: ["на большом окне"] },
        { id: "dom-008", promptPrefix: "Суп ", promptSuffix: " (большая кастрюля).", answers: ["в большой кастрюле"] },
        { id: "dom-009", promptPrefix: "Платье ", promptSuffix: " (деревянный шкаф).", answers: ["в деревянном шкафу"] },
        { id: "dom-010", promptPrefix: "Картина ", promptSuffix: " (белая стена).", answers: ["на белой стене"] }
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
            card.className = 'fca01-card-container dom-8-card';
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
        container.querySelectorAll('.dom-8-card').forEach(card => {
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
                const card    = this.closest('.dom-8-card');
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
        container.querySelectorAll('.dom-8-card').forEach((c, i) => {
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
    'panel-dom-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dom-01', exercises: p1exercises }),
    'panel-dom-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dom-02', exercises: p2exercises }),
    'panel-dom-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dom-03', exercises: p3exercises }),
    'panel-dom-4': () => new GapTextExercise({ rootId: 'ex-gaptext-dom-04', paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-dom-5': () => new GapTextExercise({ rootId: 'ex-gaptext-dom-05', paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    'panel-dom-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-dom-06', cards: p6cards }),
    'panel-dom-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-dom-07', cards: p7cards }),
    'panel-dom-8': () => initPanelDom8()
};

initPanelManager({ initializers, enableAccessControl: true });
