import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// Struttura della pagina (identica a nesti-nositi-passato) —
// contenuti in sviluppo, riempiti panel per panel.
//
// PANEL 1 — DragDrop · public  · Spряжение ВЕЗТИ passato
// PANEL 2 — DragDrop · student · Spряжение ВОЗИТЬ passato
// PANEL 3 — GapText  · public  · Testo con lacune + glossario + spiegazioni
// PANEL 4 — GapText  · student · Testo con lacune + glossario (no spiegazioni)
// PANEL 5 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 6 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 7 — Mixed Quiz · public · задания собираются из блоков 1-6
// ============================================================

// ============================================================
// PANEL 1 — DragDrop · public · Spряжение ВЕЗТИ passato
// (вёз / везла / везло / везли) — trasportare con un mezzo, direzione unica
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Вчера он {{1}} тяжёлую мебель на грузовике.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "вёз" },
        explanation: "вёз = movimento con un mezzo in corso in una direzione, in quel momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Она {{1}} подругу в аэропорт рано утром.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везла" },
        explanation: "везла = un tragitto specifico con un mezzo, non un'abitudine ripetuta."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Такси {{1}} нас через весь город в час пик.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везло" },
        explanation: "везло = neutro (такси), movimento con un mezzo in corso in quel momento."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Мы {{1}} оборудование на выставку всю ночь.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везли" },
        explanation: "везли = plurale, movimento con un mezzo in corso in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Катя {{1}} торт на праздник очень аккуратно.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везла" },
        explanation: "везла = movimento femminile con un mezzo, in corso in quel momento."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Он {{1}} коллегу на важную встречу и опаздывал.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "вёз" },
        explanation: "вёз = movimento con un mezzo in corso, sullo sfondo di un altro fatto (era in ritardo)."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Курьер {{1}} посылку через весь город под дождём.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "вёз" },
        explanation: "вёз = movimento con un mezzo in corso in una direzione, in quell'occasione."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Мы {{1}} мебель в новую квартиру на арендованном фургоне.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везли" },
        explanation: "везли = plurale, tragitto specifico con un mezzo."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Она {{1}} ребёнка в школу, когда машина заглохла.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везла" },
        explanation: "везла = movimento in corso in una direzione, interrotto da un evento (l'auto si è spenta)."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Он {{1}} важные документы в офис, когда его остановила полиция.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "вёз" },
        explanation: "вёз = movimento con un mezzo in corso, interrotto da un evento (l'ha fermato la polizia)."
    },
];

// ============================================================
// PANEL 2 — DragDrop · student · Spряжение ВОЗИТЬ passato
// (возил / возила / возили) — abitudine ripetuta
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Раньше он всегда {{1}} детей в школу сам.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возил" },
        explanation: "возил = abitudine ripetuta nel passato, non un tragitto specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Она много лет {{1}} туристов по городу.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возила" },
        explanation: "возила = abitudine protratta nel tempo (per molti anni)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Мы {{1}} оборудование на все выставки в том году.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возили" },
        explanation: "возили = abitudine ripetuta durante un periodo (quell'anno)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Если было нужно, он всегда {{1}} коллег на работу.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возил" },
        explanation: "возил = abitudine/disponibilità ripetuta (ogni volta che serviva)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Раньше она всегда {{1}} молоко и мясо с рынка.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возила" },
        explanation: "возила = abitudine ripetuta nel passato."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Мы {{1}} мебель для клиентов весь прошлый год.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возили" },
        explanation: "возили = abitudine ripetuta durante un periodo definito (tutto l'anno scorso)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Он всегда {{1}} друзей за город.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возил" },
        explanation: "возил = abitudine ripetuta (sempre, in generale)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Она {{1}} бабушку к врачу каждый месяц.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возила" },
        explanation: "возила = abitudine ripetuta (ogni mese)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Мы {{1}} гостей по городу на экскурсии всё лето.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возили" },
        explanation: "возили = abitudine ripetuta durante un periodo (tutta l'estate)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Он {{1}} стройматериалы на объект каждый день.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возил" },
        explanation: "возил = abitudine ripetuta (ogni giorno)."
    },
];

// ============================================================
// PANEL 3 — GapText · public · Testo con lacune + glossario
// TODO: in attesa del testo autentico da PM
// ============================================================
const p3instruction = "";
const p3paragraphs = [];
const p3gaps = {};

// ============================================================
// PANEL 4 — GapText · student · Testo con lacune + glossario
// TODO: in attesa del testo autentico da PM
// ============================================================
const p4instruction = "";
const p4paragraphs = [];
const p4gaps = {};

// ============================================================
// PANEL 5 — GapText · paid · Testo con lacune + glossario
// TODO: in attesa del testo autentico da PM
// ============================================================
const p5instruction = "";
const p5paragraphs = [];
const p5gaps = {};

// ============================================================
// PANEL 6 — GapText · paid · Testo con lacune + glossario
// TODO: in attesa del testo autentico da PM
// ============================================================
const p6instruction = "";
const p6paragraphs = [];
const p6gaps = {};

// ============================================================
// PANEL 7 — Quiz misto (multiple choice + match + write) · public
// TODO: 30 frasi da raccogliere dai panel 1-6 quando saranno pronti
// ============================================================
function initPanel7() {
    const panel = document.getElementById('panel-past-vv-07');
    if (!panel) return;

    const container = panel.querySelector('#past-vv-07-cards-container');
    const prevBtn   = panel.querySelector('#past-vv-07-deck-prev');
    const nextBtn   = panel.querySelector('#past-vv-07-deck-next');
    const counterEl = panel.querySelector('#past-vv-07-deck-counter');

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
            card.className = 'fca01-card-container past-vv-07-card';
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
                        feedbackEl.textContent = "✨ Esatto!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "🎉 Tutto abbinato! 🎉";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "Sbagliato";
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
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">VERIFICA</button></div>
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
        container.querySelectorAll('.past-vv-07-card').forEach(card => {
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
                const card    = this.closest('.past-vv-07-card');
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
                    fb.textContent = 'Corretto!';
                    fb.className   = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = 'Sbagliato. Riprova.';
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
        container.querySelectorAll('.past-vv-07-card').forEach((c, i) => {
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
    'panel-past-vv-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-vv-01', exercises: p1exercises }),
    'panel-past-vv-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-vv-02', exercises: p2exercises }),
    'panel-past-vv-03': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vv-03', instruction: p3instruction, paragraphs: p3paragraphs, gaps: p3gaps, showHints: false }),
    'panel-past-vv-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vv-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-vv-05': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vv-05', instruction: p5instruction, paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    'panel-past-vv-06': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vv-06', instruction: p6instruction, paragraphs: p6paragraphs, gaps: p6gaps, showHints: false }),
    'panel-past-vv-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: false });
