import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · "В КОМНАТЕ"
// Frasi da strumentale doma (pannelli 1 e 3). Distrattori: senso (genere/numero) + forma
// senza н- (за им, над ей, между ими). Plurale: между X и Y → между ними. Approvato PM 23.11.2026.
// ============================================================
const P1_INSTR = "Sostituisci il nome con il pronome.";
const P1_RULE = "Dopo за / перед / над / под / рядом с / между il pronome prende н-: за ним, над ней, между ними.";
const p1exercises = [
    {
        instruction: P1_INSTR,
        text: "Ключи лежат за&nbsp;зеркалом. → Ключи лежат {{1}}.",
        words: ["за ней", "за ним", "за им"],
        correctAnswers: { 1: "за ним" },
        explanation: "зеркало (n.) → за ним. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Тумбочка стоит рядом с&nbsp;кроватью. → Тумбочка стоит {{1}}.",
        words: ["рядом с ним", "рядом с ей", "рядом с ней"],
        correctAnswers: { 1: "рядом с ней" },
        explanation: "кровать (f.) → рядом с ней. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Шкаф стоит между дверью и&nbsp;окном. → Шкаф стоит {{1}}.",
        words: ["между ними", "между ним", "между ими"],
        correctAnswers: { 1: "между ними" },
        explanation: "дверь и окно (due oggetti) → между ними. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Картина висит над&nbsp;полкой. → Картина висит {{1}}.",
        words: ["над ней", "над ним", "над ей"],
        correctAnswers: { 1: "над ней" },
        explanation: "полка (f.) → над ней. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Диван стоит перед&nbsp;телевизором. → Диван стоит {{1}}.",
        words: ["перед ней", "перед им", "перед ним"],
        correctAnswers: { 1: "перед ним" },
        explanation: "телевизор (m.) → перед ним. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Ванная находится рядом с&nbsp;кухней. → Ванная находится {{1}}.",
        words: ["рядом с ними", "рядом с ней", "рядом с ей"],
        correctAnswers: { 1: "рядом с ней" },
        explanation: "кухня (f.) → рядом с ней. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Коридор находится между кухней и&nbsp;спальней. → Коридор находится {{1}}.",
        words: ["между ней", "между ними", "между ими"],
        correctAnswers: { 1: "между ними" },
        explanation: "кухня e спальня (due stanze) → между ними. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Лампа висит над&nbsp;столом. → Лампа висит {{1}}.",
        words: ["над ним", "над ней", "над им"],
        correctAnswers: { 1: "над ним" },
        explanation: "стол (m.) → над ним. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Коврик лежит перед&nbsp;холодильником. → Коврик лежит {{1}}.",
        words: ["перед ними", "перед им", "перед ним"],
        correctAnswers: { 1: "перед ним" },
        explanation: "холодильник (m.) → перед ним. " + P1_RULE
    },
    {
        instruction: P1_INSTR,
        text: "Часы висят рядом с&nbsp;картиной. → Часы висят {{1}}.",
        words: ["рядом с ним", "рядом с ней", "рядом с ей"],
        correctAnswers: { 1: "рядом с ней" },
        explanation: "картина (f.) → рядом с ней. " + P1_RULE
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · "В КВАРТИРЕ"
// Frasi con aggettivo da strumentale doma (pannelli 2 e 3). Nessuna spiegazione (student).
// Approvato PM 24.11.2026.
// ============================================================
const p2exercises = [
    {
        instruction: P1_INSTR,
        text: "Полка висит рядом с&nbsp;квадратной картиной. → Полка висит {{1}}.",
        words: ["рядом с ним", "рядом с ней", "рядом с ей"],
        correctAnswers: { 1: "рядом с ней" }
    },
    {
        instruction: P1_INSTR,
        text: "Ведро стоит под&nbsp;круглой раковиной. → Ведро стоит {{1}}.",
        words: ["под ним", "под ей", "под ней"],
        correctAnswers: { 1: "под ней" }
    },
    {
        instruction: P1_INSTR,
        text: "Зеркало висит между входной дверью и&nbsp;большим окном. → Зеркало висит {{1}}.",
        words: ["между ними", "между ней", "между ими"],
        correctAnswers: { 1: "между ними" }
    },
    {
        instruction: P1_INSTR,
        text: "Стул стоит перед&nbsp;большим холодильником. → Стул стоит {{1}}.",
        words: ["перед ним", "перед ней", "перед им"],
        correctAnswers: { 1: "перед ним" }
    },
    {
        instruction: P1_INSTR,
        text: "Часы висят над&nbsp;старинным камином. → Часы висят {{1}}.",
        words: ["над ними", "над им", "над ним"],
        correctAnswers: { 1: "над ним" }
    },
    {
        instruction: P1_INSTR,
        text: "Кладовая находится рядом с&nbsp;новой кухней. → Кладовая находится {{1}}.",
        words: ["рядом с ним", "рядом с ней", "рядом с ей"],
        correctAnswers: { 1: "рядом с ней" }
    },
    {
        instruction: P1_INSTR,
        text: "Полотенце висит за&nbsp;душевой кабиной. → Полотенце висит {{1}}.",
        words: ["за ним", "за ей", "за ней"],
        correctAnswers: { 1: "за ней" }
    },
    {
        instruction: P1_INSTR,
        text: "Ковёр лежит между книжным шкафом и&nbsp;обеденным столом. → Ковёр лежит {{1}}.",
        words: ["между ним", "между ними", "между ими"],
        correctAnswers: { 1: "между ними" }
    },
    {
        instruction: P1_INSTR,
        text: "Коробки стоят за&nbsp;белым шкафом. → Коробки стоят {{1}}.",
        words: ["за ним", "за ними", "за им"],
        correctAnswers: { 1: "за ним" }
    },
    {
        instruction: P1_INSTR,
        text: "Пульт лежит перед&nbsp;новым телевизором. → Пульт лежит {{1}}.",
        words: ["перед ней", "перед ним", "перед им"],
        correctAnswers: { 1: "перед ним" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid · "ВСЁ НА МЕСТЕ"
// Frasi nuove da strumentale doma p3 (лампа, мусорное ведро, кресло) + ripetizioni dai pannelli 1–2.
// Nessuna spiegazione (paid). Approvato PM 24.11.2026.
// ============================================================
const p3exercises = [
    {
        instruction: P1_INSTR,
        text: "Лампа висит над&nbsp;старинным диваном. → Лампа висит {{1}}.",
        words: ["над ней", "над им", "над ним"],
        correctAnswers: { 1: "над ним" }
    },
    {
        instruction: P1_INSTR,
        text: "Мусорное ведро стоит рядом с&nbsp;кухонным столом. → Мусорное ведро стоит {{1}}.",
        words: ["рядом с ним", "рядом с ними", "рядом с им"],
        correctAnswers: { 1: "рядом с ним" }
    },
    {
        instruction: P1_INSTR,
        text: "Коридор находится между кухней и&nbsp;спальней. → Коридор находится {{1}}.",
        words: ["между ней", "между ними", "между ими"],
        correctAnswers: { 1: "между ними" }
    },
    {
        instruction: P1_INSTR,
        text: "Кресло стоит рядом с&nbsp;книжной полкой. → Кресло стоит {{1}}.",
        words: ["рядом с ним", "рядом с ней", "рядом с ей"],
        correctAnswers: { 1: "рядом с ней" }
    },
    {
        instruction: P1_INSTR,
        text: "Ведро стоит под&nbsp;круглой раковиной. → Ведро стоит {{1}}.",
        words: ["под ней", "под ними", "под ей"],
        correctAnswers: { 1: "под ней" }
    },
    {
        instruction: P1_INSTR,
        text: "Тумбочка стоит рядом с&nbsp;кроватью. → Тумбочка стоит {{1}}.",
        words: ["рядом с ним", "рядом с ей", "рядом с ней"],
        correctAnswers: { 1: "рядом с ней" }
    },
    {
        instruction: P1_INSTR,
        text: "Шкаф стоит между дверью и&nbsp;окном. → Шкаф стоит {{1}}.",
        words: ["между ними", "между ним", "между ими"],
        correctAnswers: { 1: "между ними" }
    },
    {
        instruction: P1_INSTR,
        text: "Полотенце висит за&nbsp;душевой кабиной. → Полотенце висит {{1}}.",
        words: ["за ним", "за ей", "за ней"],
        correctAnswers: { 1: "за ней" }
    },
    {
        instruction: P1_INSTR,
        text: "Коврик лежит перед&nbsp;холодильником. → Коврик лежит {{1}}.",
        words: ["перед ней", "перед ним", "перед им"],
        correctAnswers: { 1: "перед ним" }
    },
    {
        instruction: P1_INSTR,
        text: "Зеркало висит между входной дверью и&nbsp;большим окном. → Зеркало висит {{1}}.",
        words: ["между ней", "между ими", "между ними"],
        correctAnswers: { 1: "между ними" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public · "ПОРЯДОК В ДОМЕ"
// Fronte = frase dai pannelli 1–3 senza verbo; retro = frase con pronome.
// Distrattori: genere/numero + forma senza н-. Approvato PM 24.11.2026.
// ============================================================
const P4_RULE = " Dopo за / перед / над / под / рядом с / между il pronome prende н-: за ним, над ней, между ними.";
const p4cards = [
    { front: "Ключи за зеркалом", back: "Ключи за ним", distractors: ["Ключи за ней", "Ключи за им"], explanation: "зеркало (n.) → за ним." + P4_RULE },
    { front: "Шкаф между дверью и окном", back: "Шкаф между ними", distractors: ["Шкаф между ним", "Шкаф между ими"], explanation: "дверь и окно (due oggetti) → между ними." + P4_RULE },
    { front: "Картина над полкой", back: "Картина над ней", distractors: ["Картина над ним", "Картина над ей"], explanation: "полка (f.) → над ней." + P4_RULE },
    { front: "Ведро под круглой раковиной", back: "Ведро под ней", distractors: ["Ведро под ним", "Ведро под ей"], explanation: "раковина (f.) → под ней." + P4_RULE },
    { front: "Стул перед большим холодильником", back: "Стул перед ним", distractors: ["Стул перед ней", "Стул перед им"], explanation: "холодильник (m.) → перед ним." + P4_RULE },
    { front: "Ковёр между книжным шкафом и обеденным столом", back: "Ковёр между ними", distractors: ["Ковёр между ним", "Ковёр между ими"], explanation: "шкаф e стол (due oggetti) → между ними." + P4_RULE },
    { front: "Часы рядом с картиной", back: "Часы рядом с ней", distractors: ["Часы рядом с ним", "Часы рядом с ей"], explanation: "картина (f.) → рядом с ней." + P4_RULE },
    { front: "Коробки за белым шкафом", back: "Коробки за ним", distractors: ["Коробки за ними", "Коробки за им"], explanation: "шкаф (m.) → за ним." + P4_RULE },
    { front: "Коридор между кухней и спальней", back: "Коридор между ними", distractors: ["Коридор между ней", "Коридор между ими"], explanation: "кухня e спальня (due stanze) → между ними." + P4_RULE },
    { front: "Кресло рядом с книжной полкой", back: "Кресло рядом с ней", distractors: ["Кресло рядом с ним", "Кресло рядом с ей"], explanation: "полка (f.) → рядом с ней." + P4_RULE }
];

// ============================================================
// PANEL 5 — Flashcard · student
// TODO: contenuto da approvare con PM (tabella → «да» → scrivere)
// ============================================================
const p5cards = [];

// ============================================================
// PANEL 6 — Flashcard · paid
// TODO: contenuto da approvare con PM (tabella → «да» → scrivere)
// ============================================================
const p6cards = [];

// ============================================================
// PANEL 7 — Quiz misto (multiple choice + match + write) · public
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelPronStr7() {
    const panel = document.getElementById('panel-pron-str-7');
    if (!panel) return;

    const container = panel.querySelector('#pron-str-7-cards-container');
    const prevBtn   = panel.querySelector('#pron-str-7-deck-prev');
    const nextBtn   = panel.querySelector('#pron-str-7-deck-next');
    const counterEl = panel.querySelector('#pron-str-7-deck-counter');

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
            card.className = 'fca01-card-container pron-str-7-card';
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
        container.querySelectorAll('.pron-str-7-card').forEach(card => {
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
                const card    = this.closest('.pron-str-7-card');
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
        container.querySelectorAll('.pron-str-7-card').forEach((c, i) => {
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
    'panel-pron-str-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pron-str-01', exercises: p1exercises }),
    'panel-pron-str-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pron-str-02', exercises: p2exercises }),
    'panel-pron-str-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-pron-str-03', exercises: p3exercises }),
    'panel-pron-str-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-pron-str-04', cards: p4cards }),
    'panel-pron-str-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-pron-str-05', cards: p5cards }),
    'panel-pron-str-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-pron-str-06', cards: p6cards }),
    'panel-pron-str-7': () => initPanelPronStr7()
};

initPanelManager({ initializers, enableAccessControl: true });
