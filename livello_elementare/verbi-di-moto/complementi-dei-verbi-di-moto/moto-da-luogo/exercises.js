import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// MOTO DA LUOGO — ИЗ/С + genitivo · ОТ + genitivo
// Panel prefix: mdl
// ============================================================

// ============================================================
// PANEL 1 — public · Drag & Drop · Mix ИЗ / С / ОТ
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Он вернулся {{1}} университета.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Она пришла {{1}} работы поздно вечером.",
        words: ["с", "из", "от"],
        correctAnswers: { 1: "с" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Я получил посылку {{1}} брата.",
        words: ["от", "из", "с"],
        correctAnswers: { 1: "от" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Мы вернулись {{1}} Москвы вчера вечером.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Дети пришли {{1}} школы в три часа.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Они ушли {{1}} концерта в середине.",
        words: ["с", "из", "от"],
        correctAnswers: { 1: "с" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Она отошла {{1}} окна и присела на диван.",
        words: ["от", "из", "с"],
        correctAnswers: { 1: "от" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Он пришёл {{1}} врача и чувствует себя лучше.",
        words: ["от", "из", "с"],
        correctAnswers: { 1: "от" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Студенты вышли {{1}} аудитории после лекции.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Он вернулся {{1}} стадиона усталый.",
        words: ["со", "из", "от"],
        correctAnswers: { 1: "со" }
    },
];

// ============================================================
// PANEL 5 — student · Drag & Drop · Solo ИЗ
// ============================================================
const p5exercises = [
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Мама вышла {{1}} магазина с тяжёлыми сумками.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Он уехал {{1}} Санкт-Петербурга на следующий день.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Она вышла {{1}} комнаты, не сказав ни слова.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Туристы приехали {{1}} Италии.",
        words: ["из", "от", "с"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Он вышел {{1}} театра после спектакля.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Врач вышел {{1}} больницы и сел в машину.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Студенты вышли {{1}} библиотеки поздно вечером.",
        words: ["из", "от", "с"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Мы приехали {{1}} Японии две недели назад.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Кот выскочил {{1}} шкафа и потянулся.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Scegli la preposizione corretta (spazio chiuso → ИЗ).",
        text: "Он ушёл {{1}} офиса в полдень.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
];

// ============================================================
// PANEL 6 — paid · Drag & Drop · С vs ОТ
// ============================================================
const p6exercises = [
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Она вернулась {{1}} работы очень усталой.",
        words: ["с", "от", "из"],
        correctAnswers: { 1: "с" }
    },
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Он отошёл {{1}} двери и сел на диван.",
        words: ["от", "с", "из"],
        correctAnswers: { 1: "от" }
    },
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Мы вернулись {{1}} концерта в полночь.",
        words: ["с", "от", "из"],
        correctAnswers: { 1: "с" }
    },
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Я иду {{1}} врача — всё в порядке.",
        words: ["от", "с", "из"],
        correctAnswers: { 1: "от" }
    },
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Они вернулись {{1}} вокзала без билетов.",
        words: ["с", "от", "из"],
        correctAnswers: { 1: "с" }
    },
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Он отошёл {{1}} остановки и позвонил.",
        words: ["от", "с", "из"],
        correctAnswers: { 1: "от" }
    },
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Студенты пришли {{1}} лекции голодными.",
        words: ["с", "от", "из"],
        correctAnswers: { 1: "с" }
    },
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Я только что {{1}} подруги — она передаёт привет.",
        words: ["от", "с", "из"],
        correctAnswers: { 1: "от" }
    },
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Они вернулись {{1}} рынка с овощами.",
        words: ["с", "от", "из"],
        correctAnswers: { 1: "с" }
    },
    {
        instruction: "С (superficie/evento) o ОТ (persona/punto specifico)?",
        text: "Отойди {{1}} плиты — она горячая!",
        words: ["от", "с", "из"],
        correctAnswers: { 1: "от" }
    },
];

// ============================================================
// PANEL 2 — public · Flashcard · Mix ИЗ / С / ОТ
// ============================================================
const p2cards = [
    { front: "из университета", back: "dall'università (edificio = spazio chiuso)" },
    { front: "с работы", back: "dal lavoro (attività — НА работу → С работы)" },
    { front: "от врача", back: "dal dottore (persona)" },
    { front: "из Москвы", back: "da Mosca (città = spazio chiuso)" },
    { front: "с концерта", back: "dal concerto (evento — НА концерт → С концерта)" },
    { front: "от друга", back: "dall'amico (persona)" },
    { front: "из комнаты", back: "dalla stanza (spazio chiuso)" },
    { front: "с вокзала", back: "dalla stazione (НА вокзал → С вокзала)" },
    { front: "от остановки", back: "dalla fermata (punto specifico)" },
    { front: "из театра", back: "dal teatro (edificio = spazio chiuso)" },
];

// ============================================================
// PANEL 3 — public · Flashcard · Regola В→ИЗ / НА→С
// ============================================================
const p3cards = [
    { front: "В/НА → regola del ritorno", back: "В → ИЗ | НА → С" },
    { front: "Он идёт В магазин", back: "→ возвращается ИЗ магазина" },
    { front: "Она идёт НА работу", back: "→ возвращается С работы" },
    { front: "Они идут В театр", back: "→ возвращаются ИЗ театра" },
    { front: "Мы идём НА стадион", back: "→ возвращаемся СО стадиона" },
    { front: "Он идёт В университет", back: "→ возвращается ИЗ университета" },
    { front: "Она идёт НА урок", back: "→ возвращается С урока" },
    { front: "ОТ — quando si usa?", back: "da una persona o da un punto fisico specifico" },
    { front: "от мамы", back: "dalla mamma (persona → ОТ)" },
    { front: "от входа", back: "dall'ingresso (punto specifico → ОТ)" },
];

// ============================================================
// PANEL 7 — student · Flashcard · ИЗ + genitivo
// ============================================================
const p7cards = [
    { front: "из + комната", back: "из комнаты" },
    { front: "из + Россия", back: "из России" },
    { front: "из + университет", back: "из университета" },
    { front: "из + магазин", back: "из магазина" },
    { front: "из + библиотека", back: "из библиотеки" },
    { front: "из + Италия", back: "из Италии" },
    { front: "из + больница", back: "из больницы" },
    { front: "из + театр", back: "из театра" },
    { front: "из + офис", back: "из офиса" },
    { front: "из + Япония", back: "из Японии" },
];

// ============================================================
// PANEL 8 — paid · Flashcard · С + genitivo
// ============================================================
const p8cards = [
    { front: "с + работа", back: "с работы" },
    { front: "с + урок", back: "с урока" },
    { front: "с + концерт", back: "с концерта" },
    { front: "с + вокзал", back: "с вокзала" },
    { front: "с + рынок", back: "с рынка" },
    { front: "с + стадион", back: "со стадиона" },
    { front: "с + собрание", back: "с собрания" },
    { front: "с + лекция", back: "с лекции" },
    { front: "с + юг", back: "с юга" },
    { front: "с + север", back: "с севера" },
];

// ============================================================
// PANEL 9 — student · Flashcard · ОТ + genitivo
// ============================================================
const p9cards = [
    { front: "от + врач", back: "от врача" },
    { front: "от + друг", back: "от друга" },
    { front: "от + дверь", back: "от двери" },
    { front: "от + стол", back: "от стола" },
    { front: "от + окно", back: "от окна" },
    { front: "от + остановка", back: "от остановки" },
    { front: "от + банк", back: "от банка" },
    { front: "от + вход", back: "от входа" },
    { front: "от + выход", back: "от выхода" },
    { front: "от + мама", back: "от мамы" },
];

// ============================================================
// PANEL 10 — paid · Flashcard · Consolidamento mix
// ============================================================
const p10cards = [
    { front: "Вернулся из России", back: "из (paese = spazio chiuso)" },
    { front: "Пришёл с работы", back: "с (attività — НА работу → С работы)" },
    { front: "Пришёл от врача", back: "от (persona)" },
    { front: "Вышла из библиотеки", back: "из (edificio = spazio chiuso)" },
    { front: "Вернулась с концерта", back: "с (evento — НА концерт → С концерта)" },
    { front: "Отошёл от двери", back: "от (punto fisico specifico)" },
    { front: "Приехали из Японии", back: "из (paese = spazio chiuso)" },
    { front: "Вернулись со стадиона", back: "со (НА стадион → СО стадиона)" },
    { front: "Получил письмо от друга", back: "от (persona)" },
    { front: "Вышел из офиса", back: "из (edificio = spazio chiuso)" },
];

// ============================================================
// PANEL 4 — public · Mixed Quiz (MC + Match + Write)
// ============================================================
function initPanel4Mdl() {
    const panel = document.getElementById('panel-mdl-04');
    if (!panel) return;

    const container = panel.querySelector('#mdl-04-cards-container');
    const prevBtn   = panel.querySelector('#mdl-04-deck-prev');
    const nextBtn   = panel.querySelector('#mdl-04-deck-next');
    const counterEl = panel.querySelector('#mdl-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Он вернулся ___ университета.", options: ["из", "с", "от"], answer: "из" },
        { question: "Она пришла ___ работы поздно.", options: ["с", "из", "от"], answer: "с" },
        { question: "Я получил письмо ___ друга.", options: ["от", "из", "с"], answer: "от" },
        { question: "Мы вернулись ___ Москвы вчера.", options: ["из", "с", "от"], answer: "из" },
        { question: "Дети пришли ___ школы в три часа.", options: ["из", "с", "от"], answer: "из" },
        { question: "Они ушли ___ концерта в середине.", options: ["с", "из", "от"], answer: "с" },
        { question: "Она отошла ___ окна и присела.", options: ["от", "из", "с"], answer: "от" },
        { question: "Он пришёл ___ врача и чувствует себя лучше.", options: ["от", "из", "с"], answer: "от" },
        { question: "Студенты вышли ___ аудитории.", options: ["из", "с", "от"], answer: "из" },
        { question: "Он вернулся ___ стадиона усталый.", options: ["со", "из", "от"], answer: "со" },
    ];

    const matchPairs = [
        { left: "В магазин →", right: "из магазина" },
        { left: "НА работу →", right: "с работы" },
        { left: "К врачу →", right: "от врача" },
        { left: "В Москву →", right: "из Москвы" },
        { left: "НА концерт →", right: "с концерта" },
        { left: "К другу →", right: "от друга" },
        { left: "В театр →", right: "из театра" },
        { left: "НА стадион →", right: "со стадиона" },
        { left: "К остановке →", right: "от остановки" },
        { left: "В библиотеку →", right: "из библиотеки" },
    ];

    const quizData = [
        { id: "mdl-001", promptPrefix: "Мама вышла", promptSuffix: "магазина с тяжёлыми сумками.", answers: ["из"] },
        { id: "mdl-002", promptPrefix: "Она вернулась", promptSuffix: "работы очень усталой.", answers: ["с"] },
        { id: "mdl-003", promptPrefix: "Он отошёл", promptSuffix: "двери и сел на диван.", answers: ["от"] },
        { id: "mdl-004", promptPrefix: "Туристы приехали", promptSuffix: "Италии.", answers: ["из"] },
        { id: "mdl-005", promptPrefix: "Мы вернулись", promptSuffix: "концерта в полночь.", answers: ["с"] },
        { id: "mdl-006", promptPrefix: "Я иду", promptSuffix: "врача — всё в порядке.", answers: ["от"] },
        { id: "mdl-007", promptPrefix: "Они вернулись", promptSuffix: "вокзала без билетов.", answers: ["с"] },
        { id: "mdl-008", promptPrefix: "Студенты вышли", promptSuffix: "библиотеки поздно.", answers: ["из"] },
        { id: "mdl-009", promptPrefix: "Отойди", promptSuffix: "плиты — она горячая!", answers: ["от"] },
        { id: "mdl-010", promptPrefix: "Он ушёл", promptSuffix: "офиса в полдень.", answers: ["из"] },
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    function normalizeInput(str) { return str.trim().replace(/\s+/g, ' '); }

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
            card.className = 'fca01-card-container mdl-04-card';
            card.dataset.index = i;
            if (i === 0) card.classList.add('visible');
            card.hidden = (i !== 0);

            if (i < MC_END) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) => `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`).join('');
                const questionText = item.question.replace('___', `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`);
                card.innerHTML = `
                    <div class="instruction">Completa la frase scegliendo la preposizione corretta</div>
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
                    if (!selectedMatchCard) { selectedMatchCard = clickedCard; clickedCard.classList.add('selected'); return; }
                    if (selectedMatchCard.dataset.type === clickedCard.dataset.type) {
                        selectedMatchCard.classList.remove('selected'); selectedMatchCard = clickedCard; clickedCard.classList.add('selected'); return;
                    }
                    const firstId = selectedMatchCard.dataset.id;
                    const secondId = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;
                    if (firstId === secondId) {
                        previousCard.classList.add('matched'); clickedCard.classList.add('matched');
                        feedbackEl.textContent = '✨ Отлично!'; feedbackEl.className = 'fca01-match-feedback correct';
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ''; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = '🎉 ПОБЕДА! 🎉';
                    } else {
                        isProcessingMatch = true; clickedCard.classList.add('wrong'); previousCard.classList.add('wrong');
                        feedbackEl.textContent = 'Неверно'; feedbackEl.className = 'fca01-match-feedback wrong';
                        setTimeout(() => { clickedCard.classList.remove('selected', 'wrong'); previousCard.classList.remove('selected', 'wrong'); feedbackEl.textContent = ''; isProcessingMatch = false; }, 800);
                        selectedMatchCard = null;
                    }
                }
                function createMatchElement(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card'; div.textContent = item.text;
                    div.dataset.id = item.id; div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatchClick(div)); return div;
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
                    <h3 class="quiz-title">Scrivi</h3>
                    <p class="quiz-instruction">Scrivi la preposizione corretta</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix} <input type="text" class="quiz-input" data-index="${i - MATCH_END}"> ${item.promptSuffix}</div>
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
        container.querySelectorAll('.mdl-04-card').forEach(card => {
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
                    emptyGap.textContent = word; emptyGap.classList.add('filled');
                    emptyGap.dataset.word = word; emptyGap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });
            gapElements.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const wordIndex = this.dataset.wordIndex;
                    const wordElement = wordElements.find(w => w.dataset.index === wordIndex);
                    this.textContent = ''; this.classList.remove('filled');
                    delete this.dataset.word; delete this.dataset.wordIndex;
                    if (wordElement) wordElement.classList.remove('used');
                });
            });
            if (nextBtn) nextBtn.addEventListener('click', () => showCard(currentCard + 1));
            verifyBtn.addEventListener('click', function() {
                checked = true;
                const correctAnswer = multipleChoiceData[cardIndex].answer;
                let correct = 0;
                gapElements.forEach(gap => {
                    if (gap.dataset.word === correctAnswer) { gap.classList.remove('filled'); gap.classList.add('correct'); correct = 1; }
                    else { gap.classList.add('incorrect'); }
                });
                feedback.textContent = `Corretto: ${correct} / 1`;
                verifyBtn.style.display = 'none'; nextBtn.style.display = 'inline-block';
            });
        });
        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.mdl-04-card');
                const idx = parseInt(card.dataset.index) - MATCH_END;
                const item = quizData[idx];
                const input = card.querySelector('.quiz-input');
                const fb = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect = item.answers.some(ans => userAnswer.toLowerCase() === ans.toLowerCase());
                if (isCorrect) {
                    input.classList.remove('incorrect'); input.classList.add('correct');
                    input.disabled = true; this.disabled = true;
                    fb.textContent = 'Правильно!'; fb.className = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct'); input.classList.add('incorrect');
                    fb.textContent = `Неправильно. Risposta: ${item.answers[0]}`; fb.className = 'quiz-feedback incorrect';
                }
            });
        });
        container.querySelectorAll('.quiz-input').forEach(input => {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') { const btn = this.closest('.quiz-item').querySelector('.quiz-check-btn'); if (btn && !btn.disabled) btn.click(); }
            });
        });
    }

    function showCard(idx) {
        currentCard = idx;
        container.querySelectorAll('.mdl-04-card').forEach((c, i) => { c.classList.toggle('visible', i === idx); c.hidden = (i !== idx); });
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
// INIT
// ============================================================
initPanelManager({
    initializers: {
        'panel-mdl-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mdl-01',    exercises: p1exercises }),
        'panel-mdl-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mdl-05',    exercises: p5exercises }),
        'panel-mdl-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mdl-06',    exercises: p6exercises }),
        'panel-mdl-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-02', cards: p2cards }),
        'panel-mdl-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-03', cards: p3cards }),
        'panel-mdl-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-07', cards: p7cards }),
        'panel-mdl-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-08', cards: p8cards }),
        'panel-mdl-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-09', cards: p9cards }),
        'panel-mdl-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mdl-10', cards: p10cards }),
        'panel-mdl-04':  () => initPanel4Mdl(),
    },
    enableAccessControl: true,
});
