import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// Struttura della pagina (identica a vezti-voziti-passato) —
// contenuti in sviluppo, riempiti panel per panel.
//
// PANEL 1 — DragDrop · public  · Spряжение ВЕСТИ passato
// PANEL 2 — DragDrop · student · Spряжение ВОДИТЬ passato
// PANEL 3 — GapText  · public  · Testo con lacune + glossario + spiegazioni
// PANEL 4 — GapText  · student · Testo con lacune + glossario (no spiegazioni)
// PANEL 5 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 6 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 7 — Mixed Quiz · public · задания собираются из блоков 1-6
// ============================================================

// ============================================================
// PANEL 1 — DragDrop · public · Spряжение ВЕСТИ passato
// (вёл / вела / вело / вели) — condurre, direzione unica
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Вчера он {{1}} делегацию по музею два часа.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вёл" },
        explanation: "вёл = condurre in corso in una direzione, in quel momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Она {{1}} ребёнка за руку через дорогу.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вела" },
        explanation: "вела = un tragitto specifico, non un'abitudine ripetuta."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Собрание {{1}} к конфликту, это все чувствовали.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вело" },
        explanation: "вело = neutro (собрание), uso esteso di вести — 'portare a' un esito, non un movimento fisico."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Мы {{1}} туристов по узким улочкам старого города.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вели" },
        explanation: "вели = plurale, movimento in corso in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Катя {{1}} переговоры с поставщиком весь день.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вела" },
        explanation: "вела переговоры = espressione idiomatica (condurre trattative), femminile singolare."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Он {{1}} машину очень аккуратно по гололёду.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вёл" },
        explanation: "вёл машину = guidare (in quel momento specifico), maschile singolare."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Он {{1}} дневник каждый день в путешествии.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вёл" },
        explanation: "вёл дневник = espressione idiomatica (tenere un diario), maschile singolare."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Мы {{1}} детей в парк на праздник.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вели" },
        explanation: "вели = plurale, tragitto specifico in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Она {{1}} совещание, когда отключили свет.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вела" },
        explanation: "вела совещание = condurre una riunione, in corso quando è successo un evento."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Он {{1}} слепого дедушку через оживлённый перекрёсток.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вёл" },
        explanation: "вёл = condurre per mano in corso in una direzione, in quell'occasione."
    },
];

// ============================================================
// PANEL 2 — DragDrop · student · Spряжение ВОДИТЬ passato
// (водил / водила / водили) — abitudine ripetuta
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Раньше он всегда {{1}} экскурсии по городу.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водил" },
        explanation: "водил = abitudine ripetuta nel passato, non un tragitto specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Она много лет {{1}} детей в художественную школу.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водила" },
        explanation: "водила = abitudine protratta nel tempo (per molti anni)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Мы {{1}} гостей по всем главным достопримечательностям.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водили" },
        explanation: "водили = abitudine ripetuta (ogni volta con nuovi ospiti)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Он {{1}} машину десять лет без единой аварии.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водил" },
        explanation: "водил = abitudine/capacità protratta nel tempo (per dieci anni)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Она {{1}} группы туристов каждое лето.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водила" },
        explanation: "водила = abitudine ripetuta (ogni estate)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Раньше мы {{1}} собаку в парк каждое утро.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водили" },
        explanation: "водили = abitudine ripetuta (ogni mattina)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Он никогда не {{1}} собаку без поводка.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водил" },
        explanation: "водил = abitudine/fatto generale (mai, in generale), non un'azione in corso."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Она {{1}} внуков в зоопарк по выходным.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водила" },
        explanation: "водила = abitudine ripetuta (nei weekend)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Мы {{1}} делегации на завод каждый месяц.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водили" },
        explanation: "водили = abitudine ripetuta (ogni mese)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Он {{1}} дружбу с очень странными людьми.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водил" },
        explanation: "водил дружбу = espressione idiomatica (frequentare, essere amico di), maschile singolare."
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
    const panel = document.getElementById('panel-past-vd-07');
    if (!panel) return;

    const container = panel.querySelector('#past-vd-07-cards-container');
    const prevBtn   = panel.querySelector('#past-vd-07-deck-prev');
    const nextBtn   = panel.querySelector('#past-vd-07-deck-next');
    const counterEl = panel.querySelector('#past-vd-07-deck-counter');

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
            card.className = 'fca01-card-container past-vd-07-card';
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
        container.querySelectorAll('.past-vd-07-card').forEach(card => {
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
                const card    = this.closest('.past-vd-07-card');
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
        container.querySelectorAll('.past-vd-07-card').forEach((c, i) => {
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
    'panel-past-vd-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-vd-01', exercises: p1exercises }),
    'panel-past-vd-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-vd-02', exercises: p2exercises }),
    'panel-past-vd-03': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vd-03', instruction: p3instruction, paragraphs: p3paragraphs, gaps: p3gaps, showHints: false }),
    'panel-past-vd-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vd-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-vd-05': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vd-05', instruction: p5instruction, paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    'panel-past-vd-06': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vd-06', instruction: p6instruction, paragraphs: p6paragraphs, gaps: p6gaps, showHints: false }),
    'panel-past-vd-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: false });
