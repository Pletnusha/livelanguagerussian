import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Preposizione (за/перед/над/под/рядом с/между) + sostantivo al strumentale
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Ключи лежат {{1}}.",
        words: ["над зеркалом", "за зеркало", "за зеркалом"],
        correctAnswers: { 1: "за зеркалом" },
        explanation: "Strumentale: зеркало → зеркалом (neutro)."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Кот спрятался {{1}}.",
        words: ["перед диваном", "за диваном", "за диван"],
        correctAnswers: { 1: "за диваном" },
        explanation: "Strumentale: диван → диваном."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Тумбочка стоит {{1}}.",
        words: ["рядом с кроватью", "за кроватью", "рядом с кровать"],
        correctAnswers: { 1: "рядом с кроватью" },
        explanation: "Strumentale: кровать → кроватью (3ª declinazione, femminile)."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Шкаф стоит {{1}}.",
        words: ["за дверью и окном", "между дверь и окно", "между дверью и окном"],
        correctAnswers: { 1: "между дверью и окном" },
        explanation: "Strumentale: дверь → дверью (3ª declinazione), окно → окном."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Картина висит {{1}}.",
        words: ["над полкой", "под полкой", "над полка"],
        correctAnswers: { 1: "над полкой" },
        explanation: "Strumentale: полка → полкой."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Диван стоит {{1}}.",
        words: ["за телевизором", "перед телевизором", "перед телевизор"],
        correctAnswers: { 1: "перед телевизором" },
        explanation: "Strumentale: телевизор → телевизором."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Ванная находится {{1}}.",
        words: ["за кухней", "рядом с кухня", "рядом с кухней"],
        correctAnswers: { 1: "рядом с кухней" },
        explanation: "Strumentale: кухня → кухней (tema morbido)."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Лампа висит {{1}}.",
        words: ["под столом", "над столом", "над стол"],
        correctAnswers: { 1: "над столом" },
        explanation: "Strumentale: стол → столом."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Коврик лежит {{1}}.",
        words: ["перед холодильником", "за холодильником", "перед холодильник"],
        correctAnswers: { 1: "перед холодильником" },
        explanation: "Strumentale: холодильник → холодильником."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Часы висят {{1}}.",
        words: ["над картиной", "рядом с картина", "рядом с картиной"],
        correctAnswers: { 1: "рядом с картиной" },
        explanation: "Strumentale: картина → картиной."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Preposizione + aggettivo + sostantivo al strumentale
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Полка висит {{1}}.",
        words: ["над квадратной картиной", "рядом с квадратной картиной", "рядом с квадратная картина"],
        correctAnswers: { 1: "рядом с квадратной картиной" },
        explanation: "Strumentale: квадратная картина → квадратной картиной (femminile)."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Ведро стоит {{1}}.",
        words: ["над круглой раковиной", "под круглая раковина", "под круглой раковиной"],
        correctAnswers: { 1: "под круглой раковиной" },
        explanation: "Strumentale: круглая раковина → круглой раковиной (femminile)."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Дети сидят {{1}}.",
        words: ["за кухонным столом", "перед кухонным столом", "за кухонный стол"],
        correctAnswers: { 1: "за кухонным столом" },
        explanation: "Strumentale: кухонный стол → кухонным столом (maschile); «сидеть за столом» = stare seduti a tavola."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Собака спит {{1}}.",
        words: ["перед синим диваном", "за синим диваном", "за синий диван"],
        correctAnswers: { 1: "за синим диваном" },
        explanation: "Strumentale: синий диван → синим диваном (maschile, aggettivo a tema morbido)."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Кладовая находится {{1}}.",
        words: ["за новой кухней", "рядом с новая кухня", "рядом с новой кухней"],
        correctAnswers: { 1: "рядом с новой кухней" },
        explanation: "Strumentale: новая кухня → новой кухней (femminile)."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Стул стоит {{1}}.",
        words: ["перед большим холодильником", "за большим холодильником", "перед большой холодильник"],
        correctAnswers: { 1: "перед большим холодильником" },
        explanation: "Strumentale: большой холодильник → большим холодильником (maschile)."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Часы висят {{1}}.",
        words: ["за старинным камином", "над старинным камином", "над старинный камин"],
        correctAnswers: { 1: "над старинным камином" },
        explanation: "Strumentale: старинный камин → старинным камином (maschile)."
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Зеркало висит {{1}}.",
        words: ["за входной дверью и большим окном", "между входная дверь и большое окно", "между входной дверью и большим окном"],
        correctAnswers: { 1: "между входной дверью и большим окном" },
        explanation: "Strumentale: входная дверь → входной дверью (femminile, 3ª declinazione), большое окно → большим окном (neutro)."
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Preposizione + aggettivo + sostantivo al strumentale
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Полотенце висит {{1}}.",
        words: ["за душевой кабиной", "перед душевой кабиной", "за душевая кабина"],
        correctAnswers: { 1: "за душевой кабиной" }
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Лампа висит {{1}}.",
        words: ["за старинным диваном", "над старинный диван", "над старинным диваном"],
        correctAnswers: { 1: "над старинным диваном" }
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Ковёр лежит {{1}}.",
        words: ["за книжным шкафом и обеденным столом", "между книжным шкафом и обеденным столом", "между книжный шкаф и обеденный стол"],
        correctAnswers: { 1: "между книжным шкафом и обеденным столом" }
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Коробки стоят {{1}}.",
        words: ["за белым шкафом", "перед белым шкафом", "за белый шкаф"],
        correctAnswers: { 1: "за белым шкафом" }
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Мусорное ведро стоит {{1}}.",
        words: ["за кухонным столом", "рядом с кухонный стол", "рядом с кухонным столом"],
        correctAnswers: { 1: "рядом с кухонным столом" }
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Кот спит {{1}}.",
        words: ["за письменным столом", "под письменным столом", "под письменный стол"],
        correctAnswers: { 1: "под письменным столом" }
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Коридор находится {{1}}.",
        words: ["между кухней и спальней", "за кухней и спальней", "между кухня и спальня"],
        correctAnswers: { 1: "между кухней и спальней" }
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Пульт лежит {{1}}.",
        words: ["за новым телевизором", "перед новый телевизор", "перед новым телевизором"],
        correctAnswers: { 1: "перед новым телевизором" }
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Кресло стоит {{1}}.",
        words: ["над книжной полкой", "рядом с книжной полкой", "рядом с книжная полка"],
        correctAnswers: { 1: "рядом с книжной полкой" }
    }
];

// ============================================================
// PANEL 4 — GapText · public
// Descrizione della stanza (gatto e vecchio divano) — genitivo/prepositivo/strumentale, agg.+sost.
// ============================================================
const p4paragraphs = [
    "В {{1}} у окна между {{2}} на {{3}} лежит старый кот. Над {{4}} — картина в {{5}}. Справа от {{6}} — огромное в полный рост зеркало. Рядом с ним чёрный высокий стеллаж с книгами. По середине комнаты антикварный круглый обеденный стол. Вокруг него — деревянные стулья. На {{7}} — восточный разноцветный ковёр."
];
const p4gaps = {
    1: { hint: "большая светлая комната", answers: ["большой светлой комнате"] },
    2: { hint: "разноцветные подушки", answers: ["разноцветными подушками"] },
    3: { hint: "старинный диван", answers: ["старинном диване"] },
    4: { hint: "диван", answers: ["диваном"] },
    5: { hint: "тяжёлая золочёная рама", answers: ["тяжёлой золочёной раме"] },
    6: { hint: "диван", answers: ["дивана"] },
    7: { hint: "пол", answers: ["полу"] }
};

// ============================================================
// PANEL 5 — GapText · student
// TODO: testo in attesa di materiale da PM
// ============================================================
const p5paragraphs = [];
const p5gaps = {};

// ============================================================
// PANEL 6 — GapText · paid
// TODO: testo in attesa di materiale da PM
// ============================================================
const p6paragraphs = [];
const p6gaps = {};

// ============================================================
// PANEL 7 — GapText · public
// TODO: testo in attesa di materiale da PM
// ============================================================
const p7paragraphs = [];
const p7gaps = {};

// ============================================================
// PANEL 8 — GapText · student
// TODO: testo in attesa di materiale da PM
// ============================================================
const p8paragraphs = [];
const p8gaps = {};

// ============================================================
// PANEL 9 — GapText · paid
// TODO: testo in attesa di materiale da PM
// ============================================================
const p9paragraphs = [];
const p9gaps = {};

// ============================================================
// PANEL 10 — Quiz misto (multiple choice + match + write) · public
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelDom10() {
    const panel = document.getElementById('panel-dom-10');
    if (!panel) return;

    const container = panel.querySelector('#dom-10-cards-container');
    const prevBtn   = panel.querySelector('#dom-10-deck-prev');
    const nextBtn   = panel.querySelector('#dom-10-deck-next');
    const counterEl = panel.querySelector('#dom-10-deck-counter');

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
            card.className = 'fca01-card-container dom-10-card';
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
        container.querySelectorAll('.dom-10-card').forEach(card => {
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
                const card    = this.closest('.dom-10-card');
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
        container.querySelectorAll('.dom-10-card').forEach((c, i) => {
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
    'panel-dom-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-dom-01', exercises: p1exercises }),
    'panel-dom-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-dom-02', exercises: p2exercises }),
    'panel-dom-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-dom-03', exercises: p3exercises }),
    'panel-dom-4':  () => new GapTextExercise({ rootId: 'ex-gaptext-dom-4', paragraphs: p4paragraphs, gaps: p4gaps, showHints: true }),
    'panel-dom-5':  () => new GapTextExercise({ rootId: 'ex-gaptext-dom-5', paragraphs: p5paragraphs, gaps: p5gaps, showHints: true }),
    'panel-dom-6':  () => new GapTextExercise({ rootId: 'ex-gaptext-dom-6', paragraphs: p6paragraphs, gaps: p6gaps, showHints: true }),
    'panel-dom-7':  () => new GapTextExercise({ rootId: 'ex-gaptext-dom-7', paragraphs: p7paragraphs, gaps: p7gaps, showHints: true }),
    'panel-dom-8':  () => new GapTextExercise({ rootId: 'ex-gaptext-dom-8', paragraphs: p8paragraphs, gaps: p8gaps, showHints: true }),
    'panel-dom-9':  () => new GapTextExercise({ rootId: 'ex-gaptext-dom-9', paragraphs: p9paragraphs, gaps: p9gaps, showHints: true }),
    'panel-dom-10': () => initPanelDom10()
};

initPanelManager({ initializers, enableAccessControl: true });
