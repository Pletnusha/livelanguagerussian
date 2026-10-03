import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Ore e date misti: сколько времени? / какое число?
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma giusta.",
        text: "(5:30) — Маша, сколько времени? — Половина {{1}}. Автобус через десять минут.",
        words: ["пятого", "шестого", "шесть"],
        correctAnswers: { 1: "шестого" },
        explanation: "Alle 5:30 sta passando la sesta ora (dalle 5 alle 6). La mezz'ora appartiene a quest'ora: половина шестого (genitivo)."
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое сегодня число? — {{1}} марта. С праздником, мама!",
        words: ["Восьмой", "Восьмое", "Восьмого"],
        correctAnswers: { 1: "Восьмое" },
        explanation: "«Число» è neutro, quindi anche la risposta è al neutro: восьмое. Il mese è al genitivo: марта."
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(7:10) — Уже десять минут {{1}}, а Антона всё нет!",
        words: ["седьмого", "восьмого", "семь"],
        correctAnswers: { 1: "восьмого" },
        explanation: "Alle 7:10 sta passando l'ottava ora (dalle 7 alle 8): десять минут восьмого."
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(13:00) — Который час? — Ровно {{1}}. Пойдём обедать?",
        words: ["один час", "час", "первого"],
        correctAnswers: { 1: "час" },
        explanation: "All'una in punto si dice solo «час», senza «один»."
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какой сегодня день? — {{1}}. Завтра выходной!",
        words: ["Пятница", "В пятницу", "Пятницы"],
        correctAnswers: { 1: "Пятница" },
        explanation: "Alla domanda «какой день?» si risponde con il nominativo: пятница."
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(12:30) — Который час? — Половина {{1}}. Пора обедать!",
        words: ["двенадцатого", "первого", "двенадцать"],
        correctAnswers: { 1: "первого" },
        explanation: "Dopo le 12 inizia la prima ora (dalle 12 all'1): половина первого."
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое сегодня число? — Пятнадцатое {{1}}. У Оли завтра день рождения!",
        words: ["май", "мая", "мае"],
        correctAnswers: { 1: "мая" },
        explanation: "Nella data il mese va al genitivo: пятнадцатое мая."
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(9:15) — Ты где? Уже четверть {{1}}!",
        words: ["девятого", "десятого", "девять"],
        correctAnswers: { 1: "десятого" },
        explanation: "Alle 9:15 sta passando la decima ora (dalle 9 alle 10): четверть десятого."
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(17:00) — Сколько времени? — Пять {{1}}. Я иду домой.",
        words: ["час", "часа", "часов"],
        correctAnswers: { 1: "часов" },
        explanation: "Dopo 5, 6, 7… si usa il genitivo plurale: пять часов."
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое сегодня число? — Тридцать первое {{1}}. Завтра Новый год!",
        words: ["декабрь", "декабря", "декабре"],
        correctAnswers: { 1: "декабря" },
        explanation: "Il mese nella data va al genitivo: тридцать первое декабря."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Solo ore: minuti, утра / дня / вечера / ночи
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma giusta.",
        text: "(14:05) — Сколько времени? — Пять минут {{1}}. Урок уже начался!",
        words: ["второго", "третьего", "два"],
        correctAnswers: { 1: "третьего" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(16:10) — Который час? — Десять минут {{1}}. Скоро папа придёт.",
        words: ["четвёртого", "пятого", "четыре"],
        correctAnswers: { 1: "пятого" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(7:15) — Вставай! Уже четверть {{1}}!",
        words: ["седьмого", "восьмого", "семь"],
        correctAnswers: { 1: "восьмого" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(10:20) — Сколько времени? — Двадцать минут {{1}}. Кофе будешь?",
        words: ["десятого", "одиннадцатого", "десять"],
        correctAnswers: { 1: "одиннадцатого" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(18:25) — Сколько времени? — Двадцать пять минут {{1}}. Фильм скоро начнётся.",
        words: ["шестого", "седьмого", "шесть"],
        correctAnswers: { 1: "седьмого" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(13:00) — Час {{1}}, а ты ещё в пижаме?",
        words: ["утра", "дня", "ночи"],
        correctAnswers: { 1: "дня" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(2:00) — Сколько времени? — Два {{1}} ночи. Почему ты не спишь?",
        words: ["час", "часа", "часов"],
        correctAnswers: { 1: "часа" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(7:00) — Который час? — Семь часов {{1}}. Будильник уже звонил.",
        words: ["утра", "дня", "утром"],
        correctAnswers: { 1: "утра" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(18:00) — Сколько времени? — Шесть {{1}} вечера. Я ещё на работе.",
        words: ["час", "часа", "часов"],
        correctAnswers: { 1: "часов" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(21:00) — Девять часов {{1}}, а дети ещё не спят!",
        words: ["вечера", "вечером", "вечер"],
        correctAnswers: { 1: "вечера" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Date e giorni: какое число? / какой день?
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое сегодня число? — Двенадцатое {{1}}. День России, выходной!",
        words: ["июнь", "июня", "июне"],
        correctAnswers: { 1: "июня" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое сегодня число? — {{1}} января. Рождество!",
        words: ["Седьмой", "Седьмое", "Седьмого"],
        correctAnswers: { 1: "Седьмое" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое завтра число? — Четырнадцатое {{1}}. День святого Валентина!",
        words: ["февраль", "февраля", "феврале"],
        correctAnswers: { 1: "февраля" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое сегодня число? — {{1}} апреля. Осторожно, сегодня все шутят!",
        words: ["Первый", "Первое", "Первого"],
        correctAnswers: { 1: "Первое" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое сегодня число? — Первое {{1}}. Дети идут в школу.",
        words: ["сентябрь", "сентября", "сентябре"],
        correctAnswers: { 1: "сентября" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое сегодня число? — {{1}} июля. У меня день рождения!",
        words: ["Десятый", "Десятое", "Десятого"],
        correctAnswers: { 1: "Десятое" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какой сегодня день? — {{1}}. Начинается рабочая неделя.",
        words: ["Понедельник", "В понедельник", "Понедельника"],
        correctAnswers: { 1: "Понедельник" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое вчера было число? — Тридцатое {{1}}. Конец месяца — зарплата!",
        words: ["октябрь", "октября", "октябре"],
        correctAnswers: { 1: "октября" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какой завтра день? — {{1}}. Можно поспать подольше!",
        words: ["Воскресенье", "В воскресенье", "Воскресенья"],
        correctAnswers: { 1: "Воскресенье" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "— Какое сегодня число? — {{1}} марта. Уже весна, а снег идёт!",
        words: ["Третий", "Третье", "Третьего"],
        correctAnswers: { 1: "Третье" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Misto: domanda → fatto
// ============================================================
const p4cards = [
    { front: "Сколько времени? (17:05)", back: "Пять минут шестого.", explanation: "Alle 17:05 sta passando la sesta ora: пять минут шестого." },
    { front: "Какое сегодня число? (05.05)", back: "Пятое мая.", explanation: "«Число» è neutro → пятое; il mese al genitivo: мая." },
    { front: "Который час? (16:10)", back: "Десять минут пятого.", explanation: "Alle 16:10 sta passando la quinta ora: десять минут пятого." },
    { front: "Какой сегодня день? (вт)", back: "Вторник.", explanation: "«Какой день?» → nominativo: вторник." },
    { front: "Сколько времени? (7:15)", back: "Четверть восьмого.", explanation: "15 minuti = четверть (un quarto). Si può dire anche: пятнадцать минут восьмого." },
    { front: "Какое сегодня число? (31.12)", back: "Тридцать первое декабря.", explanation: "Nei numeri composti solo l'ultima parola è ordinale: тридцать первое." },
    { front: "Который час? (14:20)", back: "Двадцать минут третьего.", explanation: "Alle 14:20 sta passando la terza ora: двадцать минут третьего." },
    { front: "Какой завтра день? (вс)", back: "Воскресенье.", explanation: "Nominativo: воскресенье (neutro)." },
    { front: "Сколько времени? (17:30)", back: "Половина шестого.", explanation: "Alle 17:30 sta passando la sesta ora: половина шестого." },
    { front: "Какое завтра число? (01.09)", back: "Первое сентября.", explanation: "Neutro + mese al genitivo." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Solo ore: 5, 10, 15, 20, 25 minuti, mezz'ora, ore intere
// ============================================================
const p5cards = [
    { front: "Сколько времени? (11:05)", back: "Пять минут двенадцатого." },
    { front: "Который час? (13:00)", back: "Час дня." },
    { front: "Сколько времени? (9:10)", back: "Десять минут десятого." },
    { front: "Который час? (8:15)", back: "Пятнадцать минут девятого." },
    { front: "Сколько времени? (10:20)", back: "Двадцать минут одиннадцатого." },
    { front: "Который час? (2:00)", back: "Два часа ночи." },
    { front: "Сколько времени? (18:25)", back: "Двадцать пять минут седьмого." },
    { front: "Который час? (12:30)", back: "Половина первого." },
    { front: "Сколько времени? (7:00)", back: "Семь часов утра." },
    { front: "Который час? (18:00)", back: "Шесть часов вечера." }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Date e giorni
// ============================================================
const p6cards = [
    { front: "Какое сегодня число? (07.01)", back: "Седьмое января." },
    { front: "Какой сегодня день? (пн)", back: "Понедельник." },
    { front: "Какое завтра число? (14.02)", back: "Четырнадцатое февраля." },
    { front: "Какой сегодня день? (сб)", back: "Суббота." },
    { front: "Какое сегодня число? (03.10)", back: "Третье октября." },
    { front: "Какой завтра день? (ср)", back: "Среда." },
    { front: "Какое сегодня число? (01.01)", back: "Первое января." },
    { front: "Какое сегодня число? (25.05)", back: "Двадцать пятое мая." },
    { front: "Какой вчера был день? (чт)", back: "Четверг." },
    { front: "Какое сегодня число? (10.07)", back: "Десятое июля." }
];

// ============================================================
// PANEL 7 — Quiz misto (multiple choice + match + write) · public
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelCos7() {
    const panel = document.getElementById('panel-cos-7');
    if (!panel) return;

    const container = panel.querySelector('#cos-7-cards-container');
    const prevBtn   = panel.querySelector('#cos-7-deck-prev');
    const nextBtn   = panel.querySelector('#cos-7-deck-next');
    const counterEl = panel.querySelector('#cos-7-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(16:30) — Сколько времени? — ___.", options: ["Половина четвёртого", "Половина пятого", "Половина шестого"], answer: "Половина пятого" },
        { question: "(09.05) — Какое сегодня число? — ___ мая.", options: ["Девятое", "Девятого", "Девятый"], answer: "Девятое" },
        { question: "(11:10) — Который час? — Десять минут ___.", options: ["одиннадцатого", "двенадцатого", "одиннадцать"], answer: "двенадцатого" },
        { question: "(ср) — Какой сегодня день? — ___.", options: ["Среда", "В среду", "Среды"], answer: "Среда" },
        { question: "(3:00) — Сколько времени? — Три ___ ночи.", options: ["час", "часа", "часов"], answer: "часа" },
        { question: "(6:25) — Который час? — Двадцать пять минут ___.", options: ["шестого", "седьмого", "шесть"], answer: "седьмого" },
        { question: "(23.02) — Какое завтра число? — Двадцать третье ___.", options: ["февраль", "февраля", "феврале"], answer: "февраля" },
        { question: "(8:15) — Сколько времени? — ___ девятого.", options: ["Четверть", "Четверти", "Пятнадцать"], answer: "Четверть" },
        { question: "(19:00) — Который час? — Семь часов ___.", options: ["утра", "вечера", "вечером"], answer: "вечера" },
        { question: "(чт) — Какой завтра день? — ___.", options: ["Четверг", "В четверг", "Четверга"], answer: "Четверг" }
    ];
    const matchPairs = [
        { left: "(17:05)", right: "пять минут шестого" },
        { left: "(16:10)", right: "десять минут пятого" },
        { left: "(7:15)", right: "четверть восьмого" },
        { left: "(14:20)", right: "двадцать минут третьего" },
        { left: "(18:25)", right: "двадцать пять минут седьмого" },
        { left: "(12:30)", right: "половина первого" },
        { left: "(13:00)", right: "час дня" },
        { left: "(05.05)", right: "пятое мая" },
        { left: "(31.12)", right: "тридцать первое декабря" },
        { left: "(пн)", right: "понедельник" }
    ];
    const quizData = [
        { id: "cos7-w1", promptPrefix: "Сейчас ", promptSuffix: ". (17:30)", answers: ["половина шестого"] },
        { id: "cos7-w2", promptPrefix: "Сегодня ", promptSuffix: ". (01.09)", answers: ["первое сентября"] },
        { id: "cos7-w3", promptPrefix: "Сейчас ", promptSuffix: ". (11:05)", answers: ["пять минут двенадцатого"] },
        { id: "cos7-w4", promptPrefix: "Сегодня ", promptSuffix: ". (пт)", answers: ["пятница"] },
        { id: "cos7-w5", promptPrefix: "Сейчас ", promptSuffix: ". (9:15)", answers: ["четверть десятого", "пятнадцать минут десятого"] },
        { id: "cos7-w6", promptPrefix: "Завтра ", promptSuffix: ". (08.03)", answers: ["восьмое марта"] },
        { id: "cos7-w7", promptPrefix: "Сейчас ", promptSuffix: ". (10:20)", answers: ["двадцать минут одиннадцатого"] },
        { id: "cos7-w8", promptPrefix: "Сейчас ", promptSuffix: ". (2:00)", answers: ["два часа ночи", "два часа"] },
        { id: "cos7-w9", promptPrefix: "Вчера было ", promptSuffix: ". (07.01)", answers: ["седьмое января"] },
        { id: "cos7-w10", promptPrefix: "Сейчас ", promptSuffix: ". (18:25)", answers: ["двадцать пять минут седьмого"] }
    ];

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
            card.className = 'fca01-card-container cos-7-card';
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
        container.querySelectorAll('.cos-7-card').forEach(card => {
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
                const card    = this.closest('.cos-7-card');
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
        container.querySelectorAll('.cos-7-card').forEach((c, i) => {
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
    'panel-cos-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-cos-01', exercises: p1exercises }),
    'panel-cos-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-cos-02', exercises: p2exercises }),
    'panel-cos-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-cos-03', exercises: p3exercises }),
    'panel-cos-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-cos-04', cards: p4cards }),
    'panel-cos-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-cos-05', cards: p5cards }),
    'panel-cos-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-cos-06', cards: p6cards }),
    'panel-cos-7': () => initPanelCos7()
};

initPanelManager({ initializers, enableAccessControl: true });
