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
        text: "Он идёт {{1}} университета домой.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" },
        explanation: "L'università è un edificio (spazio chiuso): si esce da uno spazio chiuso con «из»."
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Она возвращается {{1}} работы поздно.",
        words: ["с", "из", "от"],
        correctAnswers: { 1: "с" },
        explanation: "Il lavoro è un'attività: si va «на» работу, quindi si torna «с» работы."
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Я иду {{1}} брата.",
        words: ["от", "из", "с"],
        correctAnswers: { 1: "от" },
        explanation: "Il fratello è una persona: ci si allontana da una persona con «от»."
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Мы возвращаемся {{1}} Москвы сегодня вечером.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" },
        explanation: "Mosca è una città (spazio chiuso): si usa «из» per indicare da dove si viene."
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Дети возвращаются {{1}} школы в три часа.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" },
        explanation: "La scuola è un edificio (spazio chiuso): si usa «из» per indicare da dove si viene."
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Они возвращаются {{1}} концерта.",
        words: ["с", "из", "от"],
        correctAnswers: { 1: "с" },
        explanation: "Il concerto è un evento: si va «на» концерт, quindi si torna «с» концерта."
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Он идёт {{1}} врача — чувствует себя лучше.",
        words: ["от", "из", "с"],
        correctAnswers: { 1: "от" },
        explanation: "Il medico è una persona: ci si allontana da una persona con «от»."
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Мы идём {{1}} театра — спектакль только что закончился.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" },
        explanation: "Il teatro è un edificio (spazio chiuso): si usa «из» per indicare da dove si viene."
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Она возвращается {{1}} рынка с тяжёлыми сумками.",
        words: ["с", "из", "от"],
        correctAnswers: { 1: "с" },
        explanation: "Il mercato è un luogo aperto: si va «на» рынок, quindi si torna «с» рынка."
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Он идёт {{1}} стадиона усталый.",
        words: ["со", "из", "от"],
        correctAnswers: { 1: "со" },
        explanation: "Lo stadio è un luogo aperto: si va «на» стадион, quindi si torna «со» стадиона."
    },
];

// ============================================================
// PANEL 5 — student · Drag & Drop · Solo ИЗ
// ============================================================
const p5exercises = [
    // 5 из panel 1
    { instruction: "Scegli la preposizione corretta.", text: "Он идёт {{1}} университета домой.", words: ["из", "с"], correctAnswers: { 1: "из" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она возвращается {{1}} работы поздно.", words: ["с", "из"], correctAnswers: { 1: "с" } },
    { instruction: "Scegli la preposizione corretta.", text: "Дети возвращаются {{1}} школы в три часа.", words: ["из", "с"], correctAnswers: { 1: "из" } },
    { instruction: "Scegli la preposizione corretta.", text: "Они возвращаются {{1}} концерта.", words: ["с", "из"], correctAnswers: { 1: "с" } },
    { instruction: "Scegli la preposizione corretta.", text: "Мы идём {{1}} театра — спектакль только что закончился.", words: ["из", "с"], correctAnswers: { 1: "из" } },
    // 5 новых (solo ИЗ/С)
    { instruction: "Scegli la preposizione corretta.", text: "Мы идём {{1}} бассейна.", words: ["из", "с"], correctAnswers: { 1: "из" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она идёт {{1}} дискотеки — уже светло.", words: ["с", "из"], correctAnswers: { 1: "с" } },
    { instruction: "Scegli la preposizione corretta.", text: "Он возвращается {{1}} спортзала.", words: ["из", "с"], correctAnswers: { 1: "из" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она идёт {{1}} вокзала.", words: ["с", "из"], correctAnswers: { 1: "с" } },
    { instruction: "Scegli la preposizione corretta.", text: "Мы возвращаемся {{1}} ночного клуба уставшие.", words: ["из", "с"], correctAnswers: { 1: "из" } },
];

// ============================================================
// PANEL 6 — paid · Drag & Drop · ИЗ / С / ОТ
// 10 repeated from p5 + 5 new ОТ
// ============================================================
const p6exercises = [
    // 5 new from p5 (with all three options)
    { instruction: "Scegli la preposizione corretta.", text: "Мы идём {{1}} бассейна.", words: ["из", "от", "с"], correctAnswers: { 1: "из" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она идёт {{1}} дискотеки — уже светло.", words: ["с", "из", "от"], correctAnswers: { 1: "с" } },
    { instruction: "Scegli la preposizione corretta.", text: "Он возвращается {{1}} спортзала.", words: ["из", "с", "от"], correctAnswers: { 1: "из" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она идёт {{1}} вокзала.", words: ["с", "от", "из"], correctAnswers: { 1: "с" } },
    { instruction: "Scegli la preposizione corretta.", text: "Мы возвращаемся {{1}} ночного клуба уставшие.", words: ["из", "с", "от"], correctAnswers: { 1: "из" } },
    // 5 new — ОТ focus
    { instruction: "Scegli la preposizione corretta.", text: "Она идёт {{1}} сестры с подарком.", words: ["от", "из", "с"], correctAnswers: { 1: "от" } },
    { instruction: "Scegli la preposizione corretta.", text: "Он идёт {{1}} родителей.", words: ["от", "с", "из"], correctAnswers: { 1: "от" } },
    { instruction: "Scegli la preposizione corretta.", text: "Они идут {{1}} друзей.", words: ["от", "из", "с"], correctAnswers: { 1: "от" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она возвращается {{1}} подруги.", words: ["от", "с", "из"], correctAnswers: { 1: "от" } },
    { instruction: "Scegli la preposizione corretta.", text: "Он возвращается {{1}} бара после встречи с друзьями.", words: ["из", "от", "с"], correctAnswers: { 1: "из" } },
];

// ============================================================
// PANEL 2 — public · Flashcard · Mix ИЗ / С / ОТ
// ============================================================
const p2cards = [
    { front: "из + университет", back: "из университета", explanation: "«Университет» = università. 2a declinazione → genitivo: университет → университета." },
    { front: "с + работа",       back: "с работы",        explanation: "«Работа» = lavoro. 1a declinazione → genitivo: работа → работы." },
    { front: "от + врач",        back: "от врача",         explanation: "«Врач» = medico. 2a declinazione → genitivo: врач → врача." },
    { front: "из + школа",       back: "из школы",         explanation: "«Школа» = scuola. 1a declinazione → genitivo: школа → школы." },
    { front: "с + концерт",      back: "с концерта",       explanation: "«Концерт» = concerto. 2a declinazione → genitivo: концерт → концерта." },
    { front: "из + театр",       back: "из театра",        explanation: "«Театр» = teatro. 2a declinazione → genitivo: театр → театра." },
    { front: "с + вокзал",       back: "с вокзала",        explanation: "«Вокзал» = stazione. 2a declinazione → genitivo: вокзал → вокзала." },
    { front: "от + друзья",      back: "от друзей",        explanation: "«Друзья» = amici. Plurale → genitivo plurale: друзья → друзей." },
    { front: "из + дом",         back: "из дома",          explanation: "«Дом» = casa. 2a declinazione → genitivo: дом → дома." },
    { front: "с + остановка",    back: "с остановки",      explanation: "«Остановка» = fermata. 1a declinazione → genitivo: остановка → остановки." },
];

// ============================================================
// PANEL 3 — public · Flashcard · Regola В→ИЗ / НА→С
// ============================================================
const p3cards = [
    { front: "Анна идёт в магазин", back: "Анна идёт из магазина", explanation: "В → ИЗ" },
    { front: "Друзья идут в театр", back: "Друзья идут из театра", explanation: "В → ИЗ" },
    { front: "Мой парень идёт в бассейн", back: "Мой парень идёт из бассейна", explanation: "В → ИЗ" },
    { front: "Он идёт в университет", back: "Он идёт из университета", explanation: "В → ИЗ" },
    { front: "Анна идёт на работу", back: "Анна идёт с работы", explanation: "НА → С" },
    { front: "Мой парень идёт на концерт", back: "Мой парень идёт с концерта", explanation: "НА → С" },
    { front: "Друзья идут на рынок", back: "Друзья идут с рынка", explanation: "НА → С" },
    { front: "Она идёт на урок", back: "Она идёт с урока", explanation: "НА → С" },
    { front: "Он идёт к врачу", back: "Он идёт от врача", explanation: "К → ОТ" },
    { front: "Анна идёт к сестре", back: "Анна идёт от сестры", explanation: "К → ОТ" },
];

// ============================================================
// PANEL 7 — student · Flashcard · ИЗ + genitivo
// ============================================================
const p7cards = [
    { front: "из + университет", back: "из университета" },
    { front: "из + Москва", back: "из Москвы" },
    { front: "из + школа", back: "из школы" },
    { front: "из + театр", back: "из театра" },
    { front: "из + бассейн", back: "из бассейна" },
    { front: "из + спортзал", back: "из спортзала" },
    { front: "из + ночной клуб", back: "из ночного клуба" },
    { front: "из + бар", back: "из бара" },
    { front: "из + дом", back: "из дома" },
    { front: "из + ресторан", back: "из ресторана" },
];

// ============================================================
// PANEL 8 — paid · Flashcard · С + genitivo
// ============================================================
const p8cards = [
    { front: "из + университет", back: "из университета" },
    { front: "из + школа", back: "из школы" },
    { front: "из + бассейн", back: "из бассейна" },
    { front: "с + работа", back: "с работы" },
    { front: "с + концерт", back: "с концерта" },
    { front: "с + рынок", back: "с рынка" },
    { front: "с + дискотека", back: "с дискотеки" },
    { front: "от + врач", back: "от врача" },
    { front: "от + сестра", back: "от сестры" },
    { front: "с + почта", back: "с почты" },
];

// ============================================================
// PANEL 9 — student · Flashcard · ОТ + genitivo
// ============================================================
const p9cards = [
    { front: "Дети идут в школу", back: "Дети идут из школы" },
    { front: "Саша идёт в ресторан", back: "Саша идёт из ресторана" },
    { front: "Она идёт в спортзал", back: "Она идёт из спортзала" },
    { front: "Он идёт в ночной клуб", back: "Он идёт из ночного клуба" },
    { front: "Она идёт на дискотеку", back: "Она идёт с дискотеки" },
    { front: "Саша идёт на вокзал", back: "Саша идёт с вокзала" },
    { front: "Он идёт к родителям", back: "Он идёт от родителей" },
    { front: "Она идёт к подруге", back: "Она идёт от подруги" },
    { front: "Он идёт в офис", back: "Он идёт из офиса" },
    { front: "Она идёт в больницу", back: "Она идёт из больницы" },
];

// ============================================================
// PANEL 10 — paid · Flashcard · Consolidamento mix
// ============================================================
const p10cards = [
    { front: "Коля идёт в бар", back: "Коля идёт из бара" },
    { front: "Лена идёт в театр", back: "Лена идёт из театра" },
    { front: "Болельщики идут на стадион", back: "Болельщики идут со стадиона" },
    { front: "Папа идёт на почту", back: "Папа идёт с почты" },
    { front: "Наш сосед идёт на остановку", back: "Наш сосед идёт с остановки" },
    { front: "Бабушка идёт к друзьям", back: "Бабушка идёт от друзей" },
    { front: "Дима идёт к брату", back: "Дима идёт от брата" },
    { front: "Моя подруга идёт на работу", back: "Моя подруга идёт с работы" },
    { front: "Лена идёт в кино", back: "Лена идёт из кино" },
    { front: "Коля идёт в гости", back: "Коля идёт из гостей" },
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
        { question: "Он идёт ___ университета домой.", options: ["из", "с", "от"], answer: "из" },
        { question: "Она возвращается ___ работы поздно.", options: ["с", "из", "от"], answer: "с" },
        { question: "Я иду ___ брата.", options: ["от", "из", "с"], answer: "от" },
        { question: "Мы возвращаемся ___ Москвы сегодня вечером.", options: ["из", "с", "от"], answer: "из" },
        { question: "Дети возвращаются ___ школы в три часа.", options: ["из", "с", "от"], answer: "из" },
        { question: "Они возвращаются ___ концерта.", options: ["с", "из", "от"], answer: "с" },
        { question: "Он идёт ___ врача — чувствует себя лучше.", options: ["от", "из", "с"], answer: "от" },
        { question: "Мы идём ___ театра — спектакль только что закончился.", options: ["из", "с", "от"], answer: "из" },
        { question: "Она возвращается ___ рынка с тяжёлыми сумками.", options: ["с", "из", "от"], answer: "с" },
        { question: "Он идёт ___ стадиона усталый.", options: ["со", "из", "от"], answer: "со" },
    ];

    const matchPairs = [
        { left: "В бассейн →", right: "из бассейна" },
        { left: "На дискотеку →", right: "с дискотеки" },
        { left: "В спортзал →", right: "из спортзала" },
        { left: "На вокзал →", right: "с вокзала" },
        { left: "В ночной клуб →", right: "из ночного клуба" },
        { left: "К сестре →", right: "от сестры" },
        { left: "К родителям →", right: "от родителей" },
        { left: "К друзьям →", right: "от друзей" },
        { left: "К подруге →", right: "от подруги" },
        { left: "В бар →", right: "из бара" },
    ];

    const quizData = [
        { id: "mdl-021", promptPrefix: "Дима идёт", promptSuffix: "(дом)", answers: ["из дома"] },
        { id: "mdl-022", promptPrefix: "Наш сосед идёт", promptSuffix: "(остановка)", answers: ["с остановки"] },
        { id: "mdl-023", promptPrefix: "Саша идёт", promptSuffix: "(ресторан)", answers: ["из ресторана"] },
        { id: "mdl-024", promptPrefix: "Папа идёт", promptSuffix: "(почта)", answers: ["с почты"] },
        { id: "mdl-025", promptPrefix: "Анна идёт", promptSuffix: "(магазин)", answers: ["из магазина"] },
        { id: "mdl-026", promptPrefix: "Она идёт", promptSuffix: "(урок)", answers: ["с урока"] },
        { id: "mdl-027", promptPrefix: "Он идёт", promptSuffix: "(офис)", answers: ["из офиса"] },
        { id: "mdl-028", promptPrefix: "Моя подруга идёт", promptSuffix: "(больница)", answers: ["из больницы"] },
        { id: "mdl-029", promptPrefix: "Лена идёт", promptSuffix: "(кино)", answers: ["из кино"] },
        { id: "mdl-030", promptPrefix: "Коля идёт", promptSuffix: "(гости)", answers: ["из гостей"] },
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
        'panel-mdl-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mdl-05',    exercises: [...p5exercises].sort(() => Math.random() - 0.5) }),
        'panel-mdl-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mdl-06',    exercises: [...p6exercises].sort(() => Math.random() - 0.5) }),
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
