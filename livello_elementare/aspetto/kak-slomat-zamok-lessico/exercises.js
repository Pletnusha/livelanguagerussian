import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильное слово.",
        text: "Слесарь пришёл ___ дверной замок.",
        words: ["чинить", "сломать"],
        correctAnswers: { 1: "чинить" },
        explanation: "Il fabbro è venuto per riparare, non rompere. «Чинить» = riparare."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Сосед позвонил в дверь и попросил ___ воды.",
        words: ["бокал", "стакан"],
        correctAnswers: { 1: "стакан" },
        explanation: "Per l'acqua si usa «стакан» (bicchiere), non «бокал» (calice per vino)."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "После ___ мы решили пойти домой.",
        words: ["вечеринки", "тренировки"],
        correctAnswers: { 1: "вечеринки" },
        explanation: "«Вечеринка» = festa, party. Dopo la festa siamo andati a casa."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он ___ позвонил в дверь.",
        words: ["внезапно", "печально"],
        correctAnswers: { 1: "внезапно" },
        explanation: "«Внезапно» = all'improvviso. Ha suonato all'improvviso."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильное слово.",
        text: "___ предоставляет услуги по ремонту замков.",
        words: ["Слесарь", "Заказчик"],
        correctAnswers: { 1: "Слесарь" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Гидравлик ___ номер телефона слесаря.",
        words: ["набрал", "повесил"],
        correctAnswers: { 1: "набрал" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Заказчик ___ трубку после разговора.",
        words: ["повесил", "набрал"],
        correctAnswers: { 1: "повесил" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он попросил ___ услуги в течение суток.",
        words: ["предоставить", "набрать"],
        correctAnswers: { 1: "предоставить" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильное слово.",
        text: "Он ___ посмотрел на сломанный замок.",
        words: ["печально", "настойчиво"],
        correctAnswers: { 1: "печально" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Сосед ___ стучал в дверь.",
        words: ["настойчиво", "внезапно"],
        correctAnswers: { 1: "настойчиво" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "___ все замки были сломаны, кроме одного.",
        words: ["В общем", "Внезапно"],
        correctAnswers: { 1: "В общем" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он не мог открыть ___ дверь.",
        words: ["входную", "печальную"],
        correctAnswers: { 1: "входную" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// ============================================================
const p4cards = [
    { front: "замок", back: "serratura / lucchetto", explanation: "Sostantivo maschile. Anche: castello (замок con accento diverso)." },
    { front: "слесарь", back: "fabbro", explanation: "Specialista che ripara serrature e meccanismi." },
    { front: "сосед", back: "vicino (di casa)", explanation: "Sostantivo maschile. Femminile: соседка." },
    { front: "бокал", back: "calice (per vino)", explanation: "Bicchiere con lo stelo, per bevande alcoliche." },
    { front: "тренировка", back: "allenamento", explanation: "Sostantivo femminile. Dal verbo тренироваться." },
    { front: "вечеринка", back: "festa, party", explanation: "Sostantivo femminile. Da «вечер» (sera)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// ============================================================
const p5cards = [
    { front: "гидравлик", back: "idraulico" },
    { front: "заказчик", back: "committente, cliente" },
    { front: "предоставлять услуги", back: "fornire servizi" },
    { front: "сутки", back: "24 ore, giorno intero" },
    { front: "повесить трубку", back: "riattaccare il telefono" },
    { front: "набрать (номер)", back: "comporre (un numero)" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// ============================================================
const p6cards = [
    { front: "внезапно", back: "all'improvviso" },
    { front: "настойчиво", back: "insistentemente" },
    { front: "печально", back: "tristemente" },
    { front: "кроме", back: "tranne, eccetto" },
    { front: "в общем", back: "in generale, insomma" },
    { front: "входная дверь", back: "porta d'ingresso" }
];

// ============================================================
// PANEL 7 — Flashcard · public
// ============================================================
const p7cards = [
    { front: "в течение суток", back: "nell'arco di 24 ore", explanation: "Espressione di tempo con genitivo." },
    { front: "предоставлять услуги", back: "fornire servizi", explanation: "Verbo НСВ + В.п. Uso formale/ufficiale." },
    { front: "позвонить в дверь", back: "suonare alla porta", explanation: "Perfettivo. Azione singola: ha suonato." },
    { front: "повесить трубку", back: "riattaccare (il telefono)", explanation: "Espressione fissa. «Трубку» in accusativo." },
    { front: "набрать номер", back: "comporre il numero", explanation: "Perfettivo. «Номер» in accusativo." },
    { front: "стучать в дверь", back: "bussare alla porta", explanation: "Imperfettivo. «В дверь» = alla porta." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// ============================================================
const p8cards = [
    { front: "замок (на двери)", back: "serratura (sulla porta)" },
    { front: "замок (средневековый)", back: "castello (medievale)" },
    { front: "ключ", back: "chiave" },
    { front: "дверь", back: "porta" },
    { front: "ремонт", back: "riparazione / ristrutturazione" },
    { front: "мастер", back: "maestro / artigiano / tecnico" }
];

// ============================================================
// PANEL 9 — Flashcard · paid
// ============================================================
const p9cards = [
    { front: "чинить = ремонтировать", back: "riparare = aggiustare" },
    { front: "слесарь = мастер", back: "fabbro = artigiano" },
    { front: "заказчик = клиент", back: "committente = cliente" },
    { front: "внезапно = вдруг", back: "all'improvviso = di colpo" },
    { front: "печально = грустно", back: "tristemente = con tristezza" },
    { front: "набрать = позвонить", back: "comporre = telefonare" }
];

// ============================================================
// PANEL 10 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelLes10() {
    const panel = document.getElementById('panel-les-10');
    if (!panel) return;

    const container = panel.querySelector('#les-10-cards-container');
    const prevBtn   = panel.querySelector('#les-10-deck-prev');
    const nextBtn   = panel.querySelector('#les-10-deck-next');
    const counterEl = panel.querySelector('#les-10-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Как называется специалист по замкам?", options: ["гидравлик", "слесарь", "заказчик"], answer: "слесарь" },
        { question: "«Бокал» — это...", options: ["стакан для воды", "калице для вина", "чашка для чая"], answer: "калице для вина" },
        { question: "«Внезапно» означает...", options: ["tristemente", "all'improvviso", "insistentemente"], answer: "all'improvviso" },
        { question: "«Повесить трубку» significa...", options: ["rispondere al telefono", "riattaccare il telefono", "comporre un numero"], answer: "riattaccare il telefono" },
        { question: "«В течение суток» significa...", options: ["durante la notte", "nell'arco di 24 ore", "alla mattina"], answer: "nell'arco di 24 ore" }
    ];
    const matchPairs = [
        { left: "замок", right: "serratura" },
        { left: "слесарь", right: "fabbro" },
        { left: "заказчик", right: "committente" },
        { left: "вечеринка", right: "festa" },
        { left: "сутки", right: "24 ore" },
        { left: "входная дверь", right: "porta d'ingresso" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Специалист по ремонту замков — это ", promptSuffix: ".", answers: ["слесарь"] },
        { id: "q2", promptPrefix: "Стакан для вина — это ", promptSuffix: ".", answers: ["бокал"] },
        { id: "q3", promptPrefix: "Клиент, который заказывает работу — это ", promptSuffix: ".", answers: ["заказчик"] },
        { id: "q4", promptPrefix: "Porta d'ingresso по-русски — ", promptSuffix: ".", answers: ["входная дверь"] },
        { id: "q5", promptPrefix: "All'improvviso по-русски — ", promptSuffix: ".", answers: ["внезапно"] }
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
            card.className = 'fca01-card-container les-10-card';
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
                    <p class="quiz-instruction">Напишите правильное слово</p>
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
        container.querySelectorAll('.les-10-card').forEach(card => {
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
                const card    = this.closest('.les-10-card');
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
        container.querySelectorAll('.les-10-card').forEach((c, i) => {
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
    'panel-les-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-les-01', exercises: p1exercises }),
    'panel-les-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-les-02', exercises: p2exercises }),
    'panel-les-03': () => new DragDropExercise({ rootId: 'ex-dragdrop-les-03', exercises: p3exercises }),
    'panel-les-04': () => new FlashcardExercise({ rootId: 'ex-flashcards-les-04', cards: p4cards }),
    'panel-les-05': () => new FlashcardExercise({ rootId: 'ex-flashcards-les-05', cards: p5cards }),
    'panel-les-06': () => new FlashcardExercise({ rootId: 'ex-flashcards-les-06', cards: p6cards }),
    'panel-les-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-les-07', cards: p7cards }),
    'panel-les-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-les-08', cards: p8cards }),
    'panel-les-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-les-09', cards: p9cards }),
    'panel-les-10': () => initPanelLes10()
};

initPanelManager({ initializers, enableAccessControl: true });
