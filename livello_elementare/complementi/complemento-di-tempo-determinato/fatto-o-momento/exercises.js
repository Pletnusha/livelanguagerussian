import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Сколько времени? — riconosci l'orario (ora successiva)
// ============================================================
const p1exercises = [
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Сколько сейчас времени? — Половина седьмого. = {{1}}",
        words: ["7.30", "6.30", "19.30"],
        correctAnswers: { 1: "6.30" },
        explanation: "Половина седьмого = metà della settima ora, che va dalle 6 alle 7: sono le 6.30 (o le 18.30)."
    },
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Который час? — Четверть третьего. = {{1}}",
        words: ["14.15", "3.15", "15.15"],
        correctAnswers: { 1: "14.15" },
        explanation: "La terza ora va dalle 2 alle 3 (dalle 14 alle 15): четверть третьего = 14.15 (o 2.15)."
    },
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Сколько времени? — Двадцать минут девятого. = {{1}}",
        words: ["8.20", "9.20", "21.20"],
        correctAnswers: { 1: "8.20" },
        explanation: "La nona ora va dalle 8 alle 9: двадцать минут девятого = 8.20 (o 20.20)."
    },
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Который час? — Шесть часов. = {{1}}",
        words: ["5.00", "7.00", "6.00"],
        correctAnswers: { 1: "6.00" },
        explanation: "Con l'ora esatta non si passa all'ora successiva: шесть часов = 6.00."
    },
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Сколько сейчас времени? — Половина первого. = {{1}}",
        words: ["1.30", "12.30", "13.30"],
        correctAnswers: { 1: "12.30" },
        explanation: "La prima ora va da mezzogiorno all'una: половина первого = 12.30."
    },
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Который час? — Десять минут пятого. = {{1}}",
        words: ["17.10", "5.10", "16.10"],
        correctAnswers: { 1: "16.10" },
        explanation: "La quinta ora va dalle 4 alle 5 (dalle 16 alle 17): десять минут пятого = 16.10 (o 4.10)."
    },
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Сколько времени? — Двадцать пять минут одиннадцатого. = {{1}}",
        words: ["10.25", "11.25", "23.25"],
        correctAnswers: { 1: "10.25" },
        explanation: "L'undicesima ora va dalle 10 alle 11: двадцать пять минут одиннадцатого = 10.25 (o 22.25)."
    },
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Который час? — Четверть восьмого. = {{1}}",
        words: ["20.15", "8.15", "19.15"],
        correctAnswers: { 1: "19.15" },
        explanation: "L'ottava ora va dalle 7 alle 8 (dalle 19 alle 20): четверть восьмого = 19.15 (o 7.15)."
    },
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Сколько сейчас времени? — Пятнадцать минут четвёртого. = {{1}}",
        words: ["16.15", "15.15", "4.15"],
        correctAnswers: { 1: "15.15" },
        explanation: "La quarta ora va dalle 3 alle 4 (dalle 15 alle 16): пятнадцать минут четвёртого = 15.15 (o 3.15)."
    },
    {
        instruction: "Che ore sono? Trascina l'orario giusto.",
        text: "— Который час? — Половина десятого. = {{1}}",
        words: ["10.30", "9.30", "22.30"],
        correctAnswers: { 1: "9.30" },
        explanation: "La decima ora va dalle 9 alle 10: половина десятого = 9.30 (o 21.30)."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Во сколько? — в + accusativo / в половине
// ============================================================
const p2exercises = [
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(18.30) — Во сколько начинается фильм? — {{1}}.",
        words: ["В половину седьмого", "В половине седьмого", "В половине семь"],
        correctAnswers: { 1: "В половине седьмого" }
    },
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(7.15) — Во сколько ты встаёшь? — {{1}}.",
        words: ["В четверть восьмого", "Четверть восьмого", "В четверти восьмого"],
        correctAnswers: { 1: "В четверть восьмого" }
    },
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(13.00) — Во сколько у нас обед? — {{1}}.",
        words: ["В одном часу", "Час", "В час"],
        correctAnswers: { 1: "В час" }
    },
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(9.20) — Во сколько приходит автобус? — {{1}}.",
        words: ["Двадцать минут десятого", "В двадцать минут девятого", "В двадцать минут десятого"],
        correctAnswers: { 1: "В двадцать минут десятого" }
    },
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(11.00) — Во сколько открывается магазин? — {{1}}.",
        words: ["В одиннадцать часов", "В одиннадцати часах", "Одиннадцать часов"],
        correctAnswers: { 1: "В одиннадцать часов" }
    },
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(20.00) — Во сколько начинается концерт? — {{1}}.",
        words: ["В восемь часов", "Восемь часов", "В восьми часах"],
        correctAnswers: { 1: "В восемь часов" }
    },
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(12.30) — Во сколько встречаемся? — {{1}}.",
        words: ["В половине двенадцатого", "В половину первого", "В половине первого"],
        correctAnswers: { 1: "В половине первого" }
    },
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(16.10) — Во сколько придёт мастер? — {{1}}.",
        words: ["Десять минут пятого", "В десять минут пятого", "В десять минут четвёртого"],
        correctAnswers: { 1: "В десять минут пятого" }
    },
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(14.30) — Во сколько начинается урок? — {{1}}.",
        words: ["В половину третьего", "В половине третьего", "В половине второго"],
        correctAnswers: { 1: "В половине третьего" }
    },
    {
        instruction: "A che ora? Trascina la forma giusta.",
        text: "(18.15) — Во сколько мы встречаемся? — {{1}}.",
        words: ["В пятнадцать минут седьмого", "Пятнадцать минут седьмого", "В пятнадцать минут шестого"],
        correctAnswers: { 1: "В пятнадцать минут седьмого" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Solo date: когда? (con contrasto какое число?)
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma giusta.",
        text: "(12.06) — Когда День России? — {{1}} июня.",
        words: ["Двенадцатое", "Двенадцатого", "В двенадцатое"],
        correctAnswers: { 1: "Двенадцатого" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(07.01) — Когда в России празднуют Рождество? — Седьмого {{1}}.",
        words: ["январь", "январе", "января"],
        correctAnswers: { 1: "января" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(14.02) — Какое завтра число? — {{1}} февраля.",
        words: ["Четырнадцатое", "Четырнадцатого", "В четырнадцатое"],
        correctAnswers: { 1: "Четырнадцатое" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(01.04) — Когда все шутят? — {{1}} апреля.",
        words: ["Первое", "Первого", "В первое"],
        correctAnswers: { 1: "Первого" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(10.07) — Когда у тебя экзамен? — {{1}} июля.",
        words: ["Десятое", "В десятое", "Десятого"],
        correctAnswers: { 1: "Десятого" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(03.10) — Когда у вас свадьба? — Третьего {{1}}.",
        words: ["октября", "октябрь", "в октябре"],
        correctAnswers: { 1: "октября" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(25.05) — Какое сегодня число? — {{1}} мая.",
        words: ["Двадцать пятого", "Двадцать пятое", "В двадцать пятое"],
        correctAnswers: { 1: "Двадцать пятое" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(20.08) — Когда вы вернётесь с моря? — {{1}} августа.",
        words: ["Двадцатое", "В двадцатое", "Двадцатого"],
        correctAnswers: { 1: "Двадцатого" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(08.03) — Когда Женский день? — {{1}} марта.",
        words: ["Восьмого", "Восьмое", "В восьмое"],
        correctAnswers: { 1: "Восьмого" }
    },
    {
        instruction: "Scegli la forma giusta.",
        text: "(30.11) — Когда зарплата? — {{1}} ноября.",
        words: ["Тридцатое", "Тридцатого", "В тридцатое"],
        correctAnswers: { 1: "Тридцатого" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Misto: fatto → momento
// ============================================================
const p4cards = [
    { front: "Половина шестого", back: "У меня встреча в половине шестого.", explanation: "La mezz'ora come momento: в + prepositivo → в половине." },
    { front: "Пятое мая", back: "У меня день рождения пятого мая.", explanation: "«Когда?» con la data: genitivo senza preposizione." },
    { front: "Четверть восьмого", back: "Поезд отправляется в четверть восьмого.", explanation: "в + accusativo. Четверть non cambia forma." },
    { front: "Первое сентября", back: "Первого сентября дети идут в школу.", explanation: "Data come momento: genitivo senza preposizione." },
    { front: "Пять минут третьего", back: "Урок начался в пять минут третьего.", explanation: "в + accusativo. «Пять минут» non cambia forma." },
    { front: "Тридцать первое декабря", back: "Тридцать первого декабря мы едем к бабушке.", explanation: "Nei numeri composti cambia solo l'ultima parola: тридцать первого." },
    { front: "Двадцать минут пятого", back: "Автобус приходит в двадцать минут пятого.", explanation: "в + accusativo. «Двадцать минут» non cambia forma." },
    { front: "Восьмое марта", back: "Восьмого марта я всегда дарю маме цветы.", explanation: "Data come momento: genitivo senza preposizione." },
    { front: "Час дня", back: "Давай встретимся в час дня.", explanation: "в + accusativo. «Час» non cambia forma." },
    { front: "Двадцать пятое мая", back: "Двадцать пятого мая в школах последний звонок.", explanation: "Data come momento: двадцать пятое → двадцать пятого." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Solo ore: fatto → во сколько?
// ============================================================
const p5cards = [
    { front: "Пять минут двенадцатого", back: "Он позвонил в пять минут двенадцатого." },
    { front: "Десять минут десятого", back: "Урок начинается в десять минут десятого." },
    { front: "Пятнадцать минут девятого", back: "Я выхожу из дома в пятнадцать минут девятого." },
    { front: "Двадцать минут одиннадцатого", back: "Папа звонил в двадцать минут одиннадцатого." },
    { front: "Двадцать пять минут седьмого", back: "Поезд отправляется в двадцать пять минут седьмого." },
    { front: "Половина первого", back: "Обед в половине первого." },
    { front: "Два часа ночи", back: "Он вернулся домой в два часа ночи." },
    { front: "Семь часов утра", back: "Я встаю в семь часов утра." },
    { front: "Шесть часов вечера", back: "Я заканчиваю работу в шесть часов вечера." },
    { front: "Половина восьмого", back: "Фильм начинается в половине восьмого." }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Date e giorni: fatto → когда?
// ============================================================
const p6cards = [
    { front: "Седьмое января", back: "Седьмого января празднуют Рождество." },
    { front: "Сегодня вторник.", back: "Мы идём в кино во вторник." },
    { front: "Четырнадцатое февраля", back: "Четырнадцатого февраля мы идём в ресторан." },
    { front: "Двенадцатое июня", back: "Двенадцатого июня у нас выходной." },
    { front: "Сегодня среда.", back: "У нас урок в среду." },
    { front: "Третье октября", back: "Третьего октября у нас свадьба." },
    { front: "Сегодня воскресенье.", back: "Мы едем на дачу в воскресенье." },
    { front: "Первое апреля", back: "Первого апреля все шутят." },
    { front: "Сегодня пятница.", back: "Встречаемся в пятницу." },
    { front: "Пятнадцатое мая", back: "Пятнадцатого мая у Оли день рождения." }
];

// ============================================================
// PANEL 7 — Quiz misto (multiple choice + match + write) · public
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelFom7() {
    const panel = document.getElementById('panel-fom-7');
    if (!panel) return;

    const container = panel.querySelector('#fom-7-cards-container');
    const prevBtn   = panel.querySelector('#fom-7-deck-prev');
    const nextBtn   = panel.querySelector('#fom-7-deck-next');
    const counterEl = panel.querySelector('#fom-7-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(16:30) — Во сколько у тебя урок? — ___.", options: ["В половине пятого", "Половина пятого", "В половину пятого"], answer: "В половине пятого" },
        { question: "(15.05) — Когда у Оли день рождения? — ___ мая.", options: ["Пятнадцатое", "Пятнадцатого", "В пятнадцатое"], answer: "Пятнадцатого" },
        { question: "(19:00) — Во сколько вы ужинаете? — ___.", options: ["Семь часов вечера", "В семь часов утра", "В семь часов вечера"], answer: "В семь часов вечера" },
        { question: "(сб) — Когда вы едете на дачу? — ___.", options: ["В субботу", "Суббота", "В субботе"], answer: "В субботу" },
        { question: "(11:10) — Сколько времени? — ___.", options: ["В десять минут двенадцатого", "Десять минут двенадцатого", "Десять минут одиннадцатого"], answer: "Десять минут двенадцатого" },
        { question: "(01.07) — Когда начинается отпуск? — ___ июля.", options: ["Первое", "В первое", "Первого"], answer: "Первого" },
        { question: "(8:15) — Во сколько приходит поезд? — ___ девятого.", options: ["В четверть", "В четверти", "Четверть"], answer: "В четверть" },
        { question: "(09.05) — Какое сегодня число? — ___ мая.", options: ["Девятого", "Девятое", "В девятое"], answer: "Девятое" },
        { question: "(вт) — Когда у нас встреча? — ___.", options: ["Вторник", "В вторник", "Во вторник"], answer: "Во вторник" },
        { question: "(14:25) — Во сколько он позвонил? — ___.", options: ["В двадцать пять минут третьего", "Двадцать пять минут третьего", "В двадцать пять минут второго"], answer: "В двадцать пять минут третьего" }
    ];
    const matchPairs = [
        { left: "(17:30) Сколько времени?", right: "половина шестого" },
        { left: "(17:30) Во сколько?", right: "в половине шестого" },
        { left: "(7:15) Сколько времени?", right: "четверть восьмого" },
        { left: "(7:15) Во сколько?", right: "в четверть восьмого" },
        { left: "(05.05) Какое число?", right: "пятое мая" },
        { left: "(05.05) Когда?", right: "пятого мая" },
        { left: "(13:00) Во сколько?", right: "в час дня" },
        { left: "(31.12) Когда?", right: "тридцать первого декабря" },
        { left: "(ср) Когда?", right: "в среду" },
        { left: "(16:10) Во сколько?", right: "в десять минут пятого" }
    ];
    const quizData = [
        { id: "fom7-w1", promptPrefix: "У меня встреча ", promptSuffix: ". (17:30)", answers: ["в половине шестого"] },
        { id: "fom7-w2", promptPrefix: "Поезд отправляется ", promptSuffix: ". (7:15)", answers: ["в четверть восьмого", "в пятнадцать минут восьмого"] },
        { id: "fom7-w3", promptPrefix: "У меня день рождения ", promptSuffix: ". (05.05)", answers: ["пятого мая"] },
        { id: "fom7-w4", promptPrefix: "Урок начинается ", promptSuffix: ". (16:10)", answers: ["в десять минут пятого"] },
        { id: "fom7-w5", promptPrefix: "Мы идём в кино ", promptSuffix: ". (вт)", answers: ["во вторник"] },
        { id: "fom7-w6", promptPrefix: "Он вернулся домой ", promptSuffix: ". (2:00)", answers: ["в два часа ночи"] },
        { id: "fom7-w7", promptPrefix: "Мы едем к бабушке ", promptSuffix: ". (31.12)", answers: ["тридцать первого декабря"] },
        { id: "fom7-w8", promptPrefix: "Фильм начинается ", promptSuffix: ". (19:30)", answers: ["в половине восьмого"] },
        { id: "fom7-w9", promptPrefix: "Встречаемся ", promptSuffix: ". (пт)", answers: ["в пятницу"] },
        { id: "fom7-w10", promptPrefix: "Рождество празднуют ", promptSuffix: ". (07.01)", answers: ["седьмого января"] }
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
            card.className = 'fca01-card-container fom-7-card';
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
        container.querySelectorAll('.fom-7-card').forEach(card => {
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
                const card    = this.closest('.fom-7-card');
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
        container.querySelectorAll('.fom-7-card').forEach((c, i) => {
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
    'panel-fom-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-fom-01', exercises: p1exercises }),
    'panel-fom-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-fom-02', exercises: p2exercises }),
    'panel-fom-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-fom-03', exercises: p3exercises }),
    'panel-fom-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-fom-04', cards: p4cards }),
    'panel-fom-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-fom-05', cards: p5cards }),
    'panel-fom-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-fom-06', cards: p6cards }),
    'panel-fom-7': () => initPanelFom7()
};

initPanelManager({ initializers, enableAccessControl: true });
