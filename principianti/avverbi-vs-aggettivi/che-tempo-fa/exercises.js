import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Avverbio predicativo / Aggettivo / Sostantivo — famiglie lessicali meteo
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["облачный", "облака", "облачно"],
        correctAnswers: { 1: "облачный" },
        explanation: "Aggettivo: concorda con день (maschile) — облачный день."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "На улице ___.",
        words: ["солнце", "солнечный", "солнечно"],
        correctAnswers: { 1: "солнце" },
        explanation: "Sostantivo: soggetto della frase — на улице солнце."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["ветер", "ветреный", "ветрено"],
        correctAnswers: { 1: "ветреный" },
        explanation: "Aggettivo: concorda con день (maschile) — ветреный день."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["холодно", "холодный", "холод"],
        correctAnswers: { 1: "холодный" },
        explanation: "Aggettivo: concorda con день (maschile) — холодный день."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["солнечный", "солнечно", "солнце"],
        correctAnswers: { 1: "солнечно" },
        explanation: "Avverbio predicativo invariabile: descrive lo stato del tempo."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["пасмурный", "пасмурно"],
        correctAnswers: { 1: "пасмурный" },
        explanation: "Aggettivo: concorda con день (maschile) — пасмурный день."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["дождливо", "дождливый", "дождь"],
        correctAnswers: { 1: "дождливо" },
        explanation: "Avverbio predicativo invariabile: descrive lo stato del tempo."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "На улице ___.",
        words: ["ясный", "ясно"],
        correctAnswers: { 1: "ясно" },
        explanation: "Avverbio predicativo invariabile: descrive lo stato del tempo."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "На улице ___.",
        words: ["жарко", "жаркий", "жара"],
        correctAnswers: { 1: "жара" },
        explanation: "Sostantivo: soggetto della frase — на улице жара."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["дождливо", "дождь", "дождливый"],
        correctAnswers: { 1: "дождливый" },
        explanation: "Aggettivo: concorda con день (maschile) — дождливый день."
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["солнце", "солнечно", "солнечный"],
        correctAnswers: { 1: "солнечный" },
        explanation: "Aggettivo: concorda con день (maschile) — солнечный день."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Avverbio predicativo / Aggettivo / Sostantivo — famiglie lessicali meteo
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma corretta.",
        text: "На улице ___.",
        words: ["холод", "холодный", "холодно"],
        correctAnswers: { 1: "холод" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["ветреный", "ветрено", "ветер"],
        correctAnswers: { 1: "ветрено" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["жара", "жарко", "жаркий"],
        correctAnswers: { 1: "жарко" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["облачный", "облачно", "облака"],
        correctAnswers: { 1: "облачно" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["пасмурный", "пасмурно"],
        correctAnswers: { 1: "пасмурно" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["ясный", "ясно"],
        correctAnswers: { 1: "ясный" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["холодный", "холод", "холодно"],
        correctAnswers: { 1: "холодно" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "На улице ___.",
        words: ["дождливый", "дождь", "дождливо"],
        correctAnswers: { 1: "дождь" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "На улице ___.",
        words: ["ветрено", "ветреный", "ветер"],
        correctAnswers: { 1: "ветер" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "На небе ___.",
        words: ["облачно", "облака", "облачный"],
        correctAnswers: { 1: "облака" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["жаркий", "жара", "жарко"],
        correctAnswers: { 1: "жаркий" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// 5 frasi dal panel 1 + 5 dal panel 2, ordine misto
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["пасмурный", "пасмурно"],
        correctAnswers: { 1: "пасмурно" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["холодно", "холодный", "холод"],
        correctAnswers: { 1: "холодный" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["жаркий", "жара", "жарко"],
        correctAnswers: { 1: "жаркий" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["дождливо", "дождливый", "дождь"],
        correctAnswers: { 1: "дождливо" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___.",
        words: ["ветреный", "ветрено", "ветер"],
        correctAnswers: { 1: "ветрено" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "На улице ___.",
        words: ["жарко", "жаркий", "жара"],
        correctAnswers: { 1: "жара" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "На улице ___.",
        words: ["дождливый", "дождь", "дождливо"],
        correctAnswers: { 1: "дождь" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["облачный", "облака", "облачно"],
        correctAnswers: { 1: "облачный" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "На небе ___.",
        words: ["облачно", "облака", "облачный"],
        correctAnswers: { 1: "облака" }
    },
    {
        instruction: "Scegli la forma corretta.",
        text: "Сегодня ___ день.",
        words: ["ветер", "ветреный", "ветрено"],
        correctAnswers: { 1: "ветреный" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// 5 coppie Paese+stagione: avverbio (Когда?) vs aggettivo strumentale (бывает)
// ============================================================
const p4cards = [
    { front: "Весна в Италии", back: "бывает тёплой", explanation: "Aggettivo al strumentale: тёплой concorda con весна (femminile)." },
    { front: "Зимой в России", back: "бывает холодно", explanation: "Avverbio predicativo invariabile dopo бывает." },
    { front: "Зимой в Таиланде", back: "бывает дождливо", explanation: "Avverbio predicativo invariabile dopo бывает." },
    { front: "Лето в Таиланде", back: "бывает жарким", explanation: "Aggettivo al strumentale: жарким concorda con лето (neutro)." },
    { front: "Осенью в России", back: "бывает дождливо", explanation: "Avverbio predicativo invariabile dopo бывает." },
    { front: "Зима в России", back: "бывает холодной", explanation: "Aggettivo al strumentale: холодной concorda con зима (femminile)." },
    { front: "Зима в Таиланде", back: "бывает дождливой", explanation: "Aggettivo al strumentale: дождливой concorda con зима (femminile)." },
    { front: "Весной в Италии", back: "бывает тепло", explanation: "Avverbio predicativo invariabile dopo бывает." },
    { front: "Летом в Таиланде", back: "бывает жарко", explanation: "Avverbio predicativo invariabile dopo бывает." },
    { front: "Осень в России", back: "бывает дождливой", explanation: "Aggettivo al strumentale: дождливой concorda con осень (femminile)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// 5 coppie Paese+stagione (diverse dal panel 4): avverbio vs aggettivo strumentale
// ============================================================
const p5cards = [
    { front: "Летом в России", back: "бывает тепло" },
    { front: "Лето в Италии", back: "бывает жарким" },
    { front: "Весной в Таиланде", back: "бывает жарко" },
    { front: "Зима в Италии", back: "бывает дождливой" },
    { front: "Лето в России", back: "бывает тёплым" },
    { front: "Зимой в Италии", back: "бывает дождливо" },
    { front: "Осенью в Италии", back: "бывает тепло" },
    { front: "Весна в Таиланде", back: "бывает жаркой" },
    { front: "Осень в Италии", back: "бывает тёплой" },
    { front: "Летом в Италии", back: "бывает жарко" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// 5 frasi dal panel 4 + 5 dal panel 5, ordine misto
// ============================================================
const p6cards = [
    { front: "Зима в Италии", back: "бывает дождливой" },
    { front: "Зимой в России", back: "бывает холодно" },
    { front: "Весна в Таиланде", back: "бывает жаркой" },
    { front: "Осенью в России", back: "бывает дождливо" },
    { front: "Летом в России", back: "бывает тепло" },
    { front: "Зима в Таиланде", back: "бывает дождливой" },
    { front: "Осень в Италии", back: "бывает тёплой" },
    { front: "Летом в Таиланде", back: "бывает жарко" },
    { front: "Зимой в Италии", back: "бывает дождливо" },
    { front: "Лето в Таиланде", back: "бывает жарким" }
];

// ============================================================
// PANEL 7 — GapText · public
// Блоки 1-4 (fonte: LLR_Esercizio_Meteo_Avverbi_Aggettivi_v1)
// ============================================================
const p7paragraphs = [
    "Блок 1 — Москва, февраль",
    "Привет, Марта! Пишу тебе из Москвы.",
    "Сегодня на улице {{1}} — [[минус двадцать пять::meno venticinque (gradi)]].",
    "Зима в России {{2}} и {{3}}: снег лежит [[с ноября до апреля::da novembre ad aprile]].",
    "Днём {{4}} бывает {{5}}, и тогда небо совсем синее.",
    "Но зима здесь {{6}} не бывает {{7}} — дождь в феврале я видела [[только один раз в жизни::solo una volta nella vita]].",

    "Блок 2 — Токио, июнь",
    "Июнь в Токио — это [[сезон дождей::stagione delle piogge]].",
    "Сегодня на улице снова {{8}}, и я уже неделю не выхожу [[без зонта::senza ombrello]].",
    "Лето в Японии {{9}} и очень {{10}}.",
    "{{11}} бывает {{12}}, и тогда весь город идёт в парк.",
    "Зима в Токио короткая, снег {{13}} бывает.",

    "Блок 3 — Марракеш, август",
    "Дорогая бабушка, пишу тебе из Марракеша!",
    "Здесь {{14}} — [[сорок градусов::quaranta gradi]], и я не выхожу из отеля [[до вечера::fino a sera]].",
    "Лето в Марокко {{15}} бывает очень {{16}}, а на улице {{17}} [[с утра до ночи::dalla mattina alla notte]].",
    "Дождь здесь {{18}} бывает летом.",
    "Зима в Марокко {{19}} и {{20}}, но {{21}} не бывает {{22}}.",

    "Блок 4 — Стокгольм, ноябрь",
    "Ноябрь в Стокгольме — [[самый тёмный месяц в году::il mese più buio dell'anno]].",
    "Сегодня весь день {{23}}, солнца не было совсем.",
    "Осенью здесь {{24}} бывает {{25}}, и ветер с моря очень сильный.",
    "Зима в Швеции {{26}} и {{27}}, но не такая холодная, как в России.",
    "Летом {{28}} бывает {{29}} — [[плюс двадцать пять::più venticinque (gradi)]], и все [[едут на острова::vanno alle isole]]."
];
const p7gaps = {
    1: { answers: ["холодно"] },
    2: { answers: ["холодная"] },
    3: { answers: ["снежная"] },
    4: { answers: ["иногда", "часто"] },
    5: { answers: ["солнечно", "ясно"] },
    6: { answers: ["никогда"] },
    7: { answers: ["дождливой"] },
    8: { answers: ["дождливо", "дождь"] },
    9: { answers: ["жаркое"] },
    10: { answers: ["дождливое"] },
    11: { answers: ["иногда"] },
    12: { answers: ["ясно", "солнечно"] },
    13: { answers: ["редко"] },
    14: { answers: ["жарко"] },
    15: { answers: ["часто", "обычно"] },
    16: { answers: ["жарким"] },
    17: { answers: ["солнечно", "ясно"] },
    18: { answers: ["редко", "никогда не"] },
    19: { answers: ["тёплая"] },
    20: { answers: ["дождливая"] },
    21: { answers: ["никогда"] },
    22: { answers: ["холодной"] },
    23: { answers: ["пасмурно", "облачно"] },
    24: { answers: ["часто"] },
    25: { answers: ["дождливо", "ветрено"] },
    26: { answers: ["холодная"] },
    27: { answers: ["снежная"] },
    28: { answers: ["иногда"] },
    29: { answers: ["жарко", "тепло"] }
};

// ============================================================
// PANEL 8 — Quiz misto (multiple choice + match + write) · public
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelMet8() {
    const panel = document.getElementById('panel-met-8');
    if (!panel) return;

    const container = panel.querySelector('#met-8-cards-container');
    const prevBtn   = panel.querySelector('#met-8-deck-prev');
    const nextBtn   = panel.querySelector('#met-8-deck-next');
    const counterEl = panel.querySelector('#met-8-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Сегодня ___ день.", options: ["ясный", "ясно"], answer: "ясный" },
        { question: "На небе ___.", options: ["облачно", "облака", "облачный"], answer: "облака" },
        { question: "Сегодня ___ день.", options: ["облачный", "облака", "облачно"], answer: "облачный" },
        { question: "На улице ___.", options: ["жарко", "жаркий", "жара"], answer: "жара" },
        { question: "Сегодня ___ день.", options: ["ветер", "ветреный", "ветрено"], answer: "ветреный" },
        { question: "Сегодня ___.", options: ["солнечный", "солнечно", "солнце"], answer: "солнечно" },
        { question: "На улице ___.", options: ["дождливый", "дождь", "дождливо"], answer: "дождь" },
        { question: "На улице ___.", options: ["холод", "холодный", "холодно"], answer: "холод" },
        { question: "Сегодня ___.", options: ["дождливо", "дождливый", "дождь"], answer: "дождливо" },
        { question: "Сегодня ___.", options: ["пасмурный", "пасмурно"], answer: "пасмурно" }
    ];
    const matchPairs = [
        { left: "Зима в Италии", right: "бывает дождливой" },
        { left: "Зимой в России", right: "бывает холодно" },
        { left: "Весна в Таиланде", right: "бывает жаркой" },
        { left: "Зима в России", right: "бывает холодной" },
        { left: "Весна в Италии", right: "бывает тёплой" },
        { left: "Зимой в Италии", right: "бывает дождливо" },
        { left: "Летом в Таиланде", right: "бывает жарко" },
        { left: "Осень в Италии", right: "бывает тёплой" },
        { left: "Лето в Таиланде", right: "бывает жарким" },
        { left: "Летом в России", right: "бывает тепло" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Здесь редко бывает ", promptSuffix: " летом.", answers: ["дождь"] },
        { id: "q2", promptPrefix: "Сегодня на улице ", promptSuffix: " — минус двадцать пять.", answers: ["холодно"] },
        { id: "q3", promptPrefix: "Зима в Швеции холодная и ", promptSuffix: ".", answers: ["снежная"] },
        { id: "q4", promptPrefix: "Зима в Токио короткая, редко бывает ", promptSuffix: ".", answers: ["снег"] },
        { id: "q5", promptPrefix: "…но никогда не бывает ", promptSuffix: ".", answers: ["холодной"] },
        { id: "q6", promptPrefix: "Сегодня на улице снова ", promptSuffix: ", и я уже неделю не выхожу без зонта.", answers: ["дождливо", "дождь"] },
        { id: "q7", promptPrefix: "Летом иногда бывает ", promptSuffix: " — плюс двадцать пять.", answers: ["жарко", "тепло"] },
        { id: "q8", promptPrefix: "Здесь ", promptSuffix: " — сорок градусов.", answers: ["жарко"] },
        { id: "q9", promptPrefix: "Сегодня весь день ", promptSuffix: ", солнца не было совсем.", answers: ["пасмурно", "облачно"] },
        { id: "q10", promptPrefix: "а на улице ", promptSuffix: " с утра до ночи.", answers: ["солнце"] }
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
            card.className = 'fca01-card-container met-8-card';
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
        container.querySelectorAll('.met-8-card').forEach(card => {
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
                const card    = this.closest('.met-8-card');
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
        container.querySelectorAll('.met-8-card').forEach((c, i) => {
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
    'panel-met-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-met-01', exercises: p1exercises }),
    'panel-met-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-met-02', exercises: p2exercises }),
    'panel-met-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-met-03', exercises: p3exercises }),
    'panel-met-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-met-04', cards: p4cards }),
    'panel-met-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-met-05', cards: p5cards }),
    'panel-met-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-met-06', cards: p6cards }),
    'panel-met-7':  () => new GapTextExercise({ rootId: 'ex-gaptext-met-7', paragraphs: p7paragraphs, gaps: p7gaps, showHints: false }),
    'panel-met-8':  () => initPanelMet8()
};

initPanelManager({ initializers, enableAccessControl: true });
