import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Подойти или отойти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// avvicinarsi ↔ allontanarsi — под- + к + dat. ↔ от- + от + gen. (anche отойти в сторону), coppie подходить / подойти ↔ отходить / отойти.
// Trappole: подошёл к Анне (vicino a lei) ≠ пришёл к Анне (a casa sua); под- vuole «к», non «под»; подойти к телефону = rispondere;
// подойти ≠ войти («подошли к кабинету, но входить не стали»); «Я уже подхожу!» = sto arrivando (НСВ, in corso).
// Niente treni: per la PM il lessico giusto è поезд отправляется / прибывает, non подходит / отходит. Frasi nuove: lessico città / incontro (PM).
// Gramota.ru (БТС): подойти к начальнику, к телефону; отойти от прилавка, в сторону; отойти = отлучиться.
// Esclusi i sensi figurati: подойдёт тебе, отойти от дел, отошёл (si è ripreso), отойти ко сну. «Отойти» mai come distrattore di «выйти на минутку».
// Pochi originali (11): 4 pannelli + quiz, approvato dalla PM. Frasi nuove solo con il permesso della PM. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2 D&D · 3 FC misto (pagine 1–2) · 4 FC (forme + aspetto, con spiegazioni) · Quiz (panel-po-9)

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: подойти / отойти (nuovo, 7) + к + dat., от + gen., в сторону (vecchio, 3), con spiegazioni; frasi 7–10 nuove approvate dalla PM (n. 10 della PM: «Она отошла в сторону, чтобы ответить на звонок», niente treni)
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} к зданию банка.",
        words: ["отошли", "подошли", "подошлы"],
        correctAnswers: { 1: "подошли" },
        explanation: "Avvicinarsi a = подойти к + dativo. Passato: подошли."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы подошли {{1}}, она выглядела очень расстроенной.",
        words: ["к Анне", "от Анны", "к Анну"],
        correctAnswers: { 1: "к Анне" },
        explanation: "Verso una persona: к + dativo (Анна → к Анне)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Анна {{1}} ко мне и заговорила первой.",
        words: ["отошла", "подашла", "подошла"],
        correctAnswers: { 1: "подошла" },
        explanation: "Подошла ко мне = si è avvicinata a me. Si scrive con «о»: подошла."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вы {{1}} от машины?",
        words: ["отошли", "подошли", "отошлы"],
        correctAnswers: { 1: "отошли" },
        explanation: "Allontanarsi da = отойти от + genitivo: il prefisso ripete la preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты уже отошла далеко {{1}}?",
        words: ["к дому", "от дом", "от дома"],
        correctAnswers: { 1: "от дома" },
        explanation: "От + genitivo: дом → от дома."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} от меня!",
        words: ["Подойди", "Отойди", "Отойды"],
        correctAnswers: { 1: "Отойди" },
        explanation: "Imperativo di отойти: отойди (allontanati!)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда звонит телефон, бабушка всегда первая {{1}} к нему.",
        words: ["отходит", "подходит", "подходет"],
        correctAnswers: { 1: "подходит" },
        explanation: "Rispondere al telefono = подойти к телефону. Всегда → НСВ: подходит."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Подожди, я сейчас {{1}} к тебе и всё объясню.",
        words: ["подойду", "отойду", "подойдю"],
        correctAnswers: { 1: "подойду" },
        explanation: "Futuro di подойти: подойду (non «подойдю»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Отойдите, пожалуйста, {{1}}: здесь проезжают машины.",
        words: ["на сторону", "в стороне", "в сторону"],
        correctAnswers: { 1: "в сторону" },
        explanation: "Spostarsi di lato = отойти в сторону (в + accusativo). «В стороне» = stato in luogo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Она {{1}} в сторону, чтобы ответить на звонок.",
        words: ["отошла", "подошла", "атошла"],
        correctAnswers: { 1: "отошла" },
        explanation: "Spostarsi di lato = отойти в сторону. Подойти vuole «к»: подошла к двери, non «подошла в сторону»."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// В банке: testo della PM «В банке» (7) + frasi nuove approvate (3: подхожу, отошла от автомата — versione PM, подходят); ripasso войти (n. 1, 7)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Как только дверь открылась, вся шумная группа {{1}} в банк и начала нажимать на кнопки автомата электронной очереди.",
        words: ["подошла", "вашла", "вошла"],
        correctAnswers: { 1: "вошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "К ним на помощь уже {{1}} администратор.",
        words: ["отошла", "подошла", "подашла"],
        correctAnswers: { 1: "подошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я дождалась, когда все получат свои номера, и {{1}} к автомату.",
        words: ["подошла", "отошла", "подошёл"],
        correctAnswers: { 1: "подошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Только тогда я поняла, зачем был нужен администратор: она {{1}} и вежливо спросила: «Доброе утро, чем я могу вам помочь?»",
        words: ["отошла", "подошла", "падашла"],
        correctAnswers: { 1: "подошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Противный голос объявлял номер и окно, к которому нужно было {{1}}.",
        words: ["подойти", "отойти", "подойтить"],
        correctAnswers: { 1: "подойти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Бабушки шумно обсуждали новости, пока не {{1}} к автомату.",
        words: ["отошли", "подошлы", "подошли"],
        correctAnswers: { 1: "подошли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Перед дверью стояла очередь — я подошла, подождала и {{1}} в банк.",
        words: ["подошла", "войшла", "вошла"],
        correctAnswers: { 1: "вошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "В банке я всегда сначала {{1}} к администратору, а потом беру талон.",
        words: ["подхожу", "отхожу", "подхажу"],
        correctAnswers: { 1: "подхожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я купила билет и сразу {{1}} от автомата.",
        words: ["подошла", "отошла", "атошла"],
        correctAnswers: { 1: "отошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Посетители {{1}} к окну, только когда слышат свой номер.",
        words: ["подходят", "отходят", "подходют"],
        correctAnswers: { 1: "подходят" }
    }
];

// ============================================================
// PANEL 3 — Flashcard · paid
// Misto: под- / от- (pagina 3) ↔ в- / вы- (pagina 1) ↔ при- / у- (pagina 2); подошли к кабинету (davanti alla porta) ≠ пришла ко мне домой (PM: пришёл = punto di vista di chi riceve); n. 2 presente * (orig. входили… встречал)
// ============================================================
const p3cards = [
    { front: "Мы ___ к кабинету, но входить не стали.", back: "подошли", distractors: ["вошли", "подошлы"] },
    { front: "Каждый раз, когда мы ___ в ресторан, нас встречает один и тот же официант.", back: "входим", distractors: ["подходим", "входем"] },
    { front: "Наконец-то она ___ к нам в гости.", back: "пришла", distractors: ["подошла", "прийшла"] },
    { front: "Когда звонит телефон, бабушка всегда первая ___ к нему.", back: "подходит", distractors: ["входит", "подходет"] },
    { front: "Вы ___ от машины?", back: "отошли", distractors: ["вышли", "отошлы"] },
    { front: "Я ___, нужно купить что-нибудь?", back: "ухожу", distractors: ["подхожу", "ухажу"] },
    { front: "Вчера вечером Анна ___ ко мне, чтобы посмотреть фильм.", back: "пришла", distractors: ["подошла", "пришола"] },
    { front: "Обычно я ___ из дома в 8 часов.", back: "выхожу", distractors: ["подхожу", "выхажу"] },
    { front: "Я ___ на минутку, сейчас вернусь.", back: "выйду", distractors: ["подойду", "выйдю"] },
    { front: "___ от меня!", back: "Отойди", distractors: ["Подойди", "Отайди"] }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: aspetto — подходить / подойти, отходить / отойти: solo frasi con marcatori (PM 21.11: niente carte con sole forme) — abitudine / azione in corso / risultato, con spiegazioni; n. 9 della PM (lessico città / incontro); niente treni (PM: поезд отправляется / прибывает)
// ============================================================
const p4cards = [
    { front: "Подожди, я сейчас ___ к тебе и всё объясню.", back: "подойду", distractors: ["отойду", "подойдю"], explanation: "Futuro di подойти: подойду (non «подойдю»). Подойти к = avvicinarsi a." },
    { front: "Не ___ от кассы, пока не проверите сдачу.", back: "отходите", distractors: ["отойдите", "отходити"], explanation: "Imperativo negativo → НСВ: не отходите (non «не отойдите»)." },
    { front: "Мы ___ к кабинету, но входить не стали.", back: "подошли", distractors: ["вошли", "подошлы"], explanation: "Siamo arrivati alla porta, ma non siamo entrati → подошли, non вошли." },
    { front: "Она ___ в сторону, чтобы ответить на звонок.", back: "отошла", distractors: ["подошла", "атошла"], explanation: "Spostarsi di lato = отойти в сторону. Passato: отошёл, отошла, отошли." },
    { front: "___ от меня!", back: "Отойди", distractors: ["Подойди", "Отайди"], explanation: "Imperativo di отойти: отойди! (allontanati!)." },
    { front: "Они ___ от края платформы.", back: "отошли", distractors: ["подошли", "отошлы"], explanation: "Allontanarsi da = отойти от + genitivo (от края платформы)." },
    { front: "Когда звонит телефон, бабушка всегда первая ___ к нему.", back: "подходит", distractors: ["подойдёт", "подходет"], explanation: "Всегда = abitudine → НСВ: подходит." },
    { front: "Я дождалась, когда все получат свои номера, и ___ к автомату.", back: "подошла", distractors: ["подходила", "падашла"], explanation: "Un'azione unica e conclusa, in sequenza → СВ: подошла." },
    { front: "Я уже ___! Буду через пять минут.", back: "подхожу", distractors: ["подойду", "подхажу"], explanation: "Sto arrivando: azione in corso adesso → НСВ presente: подхожу. Con «уже» non va il futuro «подойду»." },
    { front: "Я купила билет и сразу ___ от автомата.", back: "отошла", distractors: ["отходила", "атошла"], explanation: "Un'azione unica e conclusa («сразу») → СВ: отошла." }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelPo9() {
    const panel = document.getElementById('panel-po-9');
    if (!panel) return;

    const container = panel.querySelector('#po-9-cards-container');
    const prevBtn   = panel.querySelector('#po-9-deck-prev');
    const nextBtn   = panel.querySelector('#po-9-deck-next');
    const counterEl = panel.querySelector('#po-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Мы ___ к зданию банка.", options: ["отошли", "подошли", "подошлы"], answer: "подошли" },
        { question: "Вы ___ от машины?", options: ["отошли", "подошли", "отошлы"], answer: "отошли" },
        { question: "Анна ___ ко мне и заговорила первой.", options: ["отошла", "подашла", "подошла"], answer: "подошла" },
        { question: "Отойдите, пожалуйста, ___: здесь проезжают машины.", options: ["в стороне", "на сторону", "в сторону"], answer: "в сторону" },
        { question: "Когда звонит телефон, бабушка всегда первая ___ к нему.", options: ["подходит", "подойдёт", "подходет"], answer: "подходит" },
        { question: "Я уже ___! Буду через пять минут.", options: ["подойду", "подхожу", "подхажу"], answer: "подхожу" },
        { question: "Мы ___ к кабинету, но входить не стали.", options: ["подошли", "вошли", "подошлы"], answer: "подошли" },
        { question: "Она ___ в сторону, чтобы ответить на звонок.", options: ["подошла", "атошла", "отошла"], answer: "отошла" },
        { question: "Подожди, я сейчас ___ к тебе и всё объясню.", options: ["отойду", "подойду", "подойдю"], answer: "подойду" },
        { question: "Вчера вечером Анна ___ ко мне, чтобы посмотреть фильм.", options: ["пришла", "подошла", "пришола"], answer: "пришла" }
    ];
    const matchPairs = [
        { left: "Когда звонит телефон, бабушка всегда первая ___ к нему.", right: "подходит" },
        { left: "Я уже ___! Буду через пять минут.", right: "подхожу" },
        { left: "Встречаемся у метро. Я ___ к семи, хорошо?", right: "подойду" },
        { left: "Не ___ от кассы, пока не проверите сдачу.", right: "отходите" },
        { left: "___ от меня!", right: "Отойди" },
        { left: "Мы ___ к кабинету, но входить не стали.", right: "подошли" },
        { left: "Они ___ от края платформы.", right: "отошли" },
        { left: "Анна ___ ко мне и заговорила первой.", right: "подошла" },
        { left: "Она ___ в сторону, чтобы ответить на звонок.", right: "отошла" },
        { left: "Вчера вечером Анна ___ ко мне, чтобы посмотреть фильм.", right: "пришла" }
    ];
    const quizData = [
        { id: "po9-w1", promptPrefix: "Когда звонит телефон, бабушка всегда первая ", promptSuffix: " к нему.", answers: ["подходит"] },
        { id: "po9-w2", promptPrefix: "Я уже ", promptSuffix: "! Буду через пять минут.", answers: ["подхожу", "подъезжаю"] },
        { id: "po9-w3", promptPrefix: "Подожди, я сейчас ", promptSuffix: " к тебе и всё объясню.", answers: ["подойду", "подхожу", "приду", "подъеду"] },
        { id: "po9-w4", promptPrefix: "Не ", promptSuffix: " от кассы, пока не проверите сдачу.", answers: ["отходите"] },
        { id: "po9-w5", promptPrefix: "Я купила билет и сразу ", promptSuffix: " от автомата.", answers: ["отошла"] },
        { id: "po9-w6", promptPrefix: "", promptSuffix: " от меня!", answers: ["Отойди", "отойди", "Уйди", "уйди"] },
        { id: "po9-w7", promptPrefix: "Вы ", promptSuffix: " от машины?", answers: ["отошли", "отходили", "ушли", "отъехали"] },
        { id: "po9-w8", promptPrefix: "Мы ", promptSuffix: " к кабинету, но входить не стали.", answers: ["подошли", "подходили"] },
        { id: "po9-w9", promptPrefix: "Они ", promptSuffix: " от края платформы.", answers: ["отошли"] },
        { id: "po9-w10", promptPrefix: "Встречаемся у метро. Я ", promptSuffix: " к семи, хорошо?", answers: ["подойду", "приду", "подъеду"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

    // Typed answers: ignore case, ё/е, extra spaces and a final dot
    // (Italian keyboards usually have no ё).
    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ').replace(/[.!]+$/, '').toLowerCase().replace(/ё/g, 'е');
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
            card.className = 'fca01-card-container po-9-card';
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
        container.querySelectorAll('.po-9-card').forEach(card => {
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
                const card    = this.closest('.po-9-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === normalizeInput(ans));
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
        container.querySelectorAll('.po-9-card').forEach((c, i) => {
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
    'panel-po-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-po-01', exercises: p1exercises }),
    'panel-po-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-po-02', exercises: p2exercises }),
    'panel-po-3': () => new FlashcardExercise({ rootId: 'ex-flashcards-po-03', cards: p3cards }),
    'panel-po-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-po-04', cards: p4cards }),
    'panel-po-9': () => initPanelPo9()
};

initPanelManager({ initializers, enableAccessControl: true });
