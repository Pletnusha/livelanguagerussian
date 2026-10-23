import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// НСВ или СВ — с пояснениями
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Мне нравится ___ рано утром.",
        words: ["вставать", "встать"],
        correctAnswers: { 1: "вставать" },
        explanation: "Dopo «нравится» si usa l'imperfettivo: è un'abitudine, non un'azione singola."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ на Бали зимой.",
        words: ["ехать", "поехать"],
        correctAnswers: { 1: "поехать" },
        explanation: "Dopo «хочу» si usa il perfettivo: è un piano concreto, un'azione unica."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я люблю ___ иностранные языки.",
        words: ["изучать", "изучить"],
        correctAnswers: { 1: "изучать" },
        explanation: "Dopo «люблю» si usa l'imperfettivo: è un'attività che piace in generale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ местные блюда.",
        words: ["пробовать", "попробовать"],
        correctAnswers: { 1: "попробовать" },
        explanation: "Dopo «хочу» si usa il perfettivo: voglio provarli (risultato concreto)."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Мне нравится ___ с друзьями.",
        words: ["гулять", "погулять"],
        correctAnswers: { 1: "гулять" },
        explanation: "Dopo «нравится» si usa l'imperfettivo: passeggiare in generale, come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ набор тарелок.",
        words: ["покупать", "купить"],
        correctAnswers: { 1: "купить" },
        explanation: "Dopo «хочу» si usa il perfettivo: comprare un oggetto specifico."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я обожаю ___ на море зимой.",
        words: ["ездить", "поехать"],
        correctAnswers: { 1: "ездить" },
        explanation: "Dopo «обожаю» si usa l'imperfettivo: è un'attività ripetuta che amo fare."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ настоящий лимончелло.",
        words: ["готовить", "приготовить"],
        correctAnswers: { 1: "приготовить" },
        explanation: "Dopo «хочу» si usa il perfettivo: preparare una volta, ottenere un risultato."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я ненавижу ___ на встречи.",
        words: ["опаздывать", "опоздать"],
        correctAnswers: { 1: "опаздывать" },
        explanation: "Dopo «ненавижу» si usa l'imperfettivo: odio fare tardi in generale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ подарок родителям.",
        words: ["дарить", "подарить"],
        correctAnswers: { 1: "подарить" },
        explanation: "Dopo «хочу» si usa il perfettivo: regalare una cosa concreta, una volta."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я люблю ___ научно-популярные фильмы.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "смотреть" },
        explanation: "Dopo «люблю» si usa l'imperfettivo: guardare come attività abituale."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// НСВ или СВ — без explanation
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я боюсь ___ машину.",
        words: ["водить", "повести"],
        correctAnswers: { 1: "водить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ в бухтах.",
        words: ["нырять", "понырять"],
        correctAnswers: { 1: "понырять" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Мне нравится ___ горячий крепкий кофе.",
        words: ["пить", "выпить"],
        correctAnswers: { 1: "пить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ на Амальфитанское побережье.",
        words: ["ехать", "поехать"],
        correctAnswers: { 1: "поехать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я люблю ___ и загорать.",
        words: ["купаться", "искупаться"],
        correctAnswers: { 1: "купаться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ маленькие городки.",
        words: ["посещать", "посетить"],
        correctAnswers: { 1: "посетить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Мне нравится ___ на курсы онлайн.",
        words: ["записываться", "записаться"],
        correctAnswers: { 1: "записываться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ его с собой на Бали.",
        words: ["брать", "взять"],
        correctAnswers: { 1: "взять" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я люблю ___ плотно.",
        words: ["завтракать", "позавтракать"],
        correctAnswers: { 1: "завтракать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я не хочу ___ время на пробки.",
        words: ["тратить", "потратить"],
        correctAnswers: { 1: "потратить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Мне нравится ___ закаты и архитектуру.",
        words: ["фотографировать", "сфотографировать"],
        correctAnswers: { 1: "фотографировать" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// НСВ или СВ — микс, без подсказок
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ на яхте.",
        words: ["кататься", "покататься"],
        correctAnswers: { 1: "покататься" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Мне нравится ___ красное вино.",
        words: ["пить", "выпить"],
        correctAnswers: { 1: "пить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ в Рим.",
        words: ["ездить", "съездить"],
        correctAnswers: { 1: "съездить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я боюсь ___ на встречи.",
        words: ["опаздывать", "опоздать"],
        correctAnswers: { 1: "опаздывать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ оттуда на Бали.",
        words: ["летать", "улететь"],
        correctAnswers: { 1: "улететь" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я люблю ___ на дождь.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "смотреть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я не хочу ___ за парковки.",
        words: ["платить", "заплатить"],
        correctAnswers: { 1: "заплатить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я обожаю ___ закаты.",
        words: ["фотографировать", "сфотографировать"],
        correctAnswers: { 1: "фотографировать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ там на полгода.",
        words: ["оставаться", "остаться"],
        correctAnswers: { 1: "остаться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я ненавижу ___ в плохие рестораны.",
        words: ["ходить", "сходить"],
        correctAnswers: { 1: "ходить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Я хочу ___ горячий шоколад.",
        words: ["пить", "выпить"],
        correctAnswers: { 1: "выпить" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Лексика: «Мне нравится»
// ============================================================
const p4cards = [
    { front: "вставать рано", back: "alzarsi presto", explanation: "НСВ: azione abituale" },
    { front: "плотно завтракать", back: "fare una colazione abbondante", explanation: "НСВ: abitudine quotidiana" },
    { front: "крепкий кофе", back: "caffè forte", explanation: "Aggettivo + sostantivo" },
    { front: "иностранные языки", back: "lingue straniere", explanation: "Aggettivo + sostantivo, plurale" },
    { front: "гулять с друзьями", back: "passeggiare con gli amici", explanation: "НСВ: attività generale" },
    { front: "красное вино", back: "vino rosso", explanation: "Aggettivo + sostantivo" },
    { front: "закаты", back: "tramonti", explanation: "Sostantivo, plurale" },
    { front: "научно-популярные фильмы", back: "film divulgativi", explanation: "Aggettivo composto + sostantivo" },
    { front: "горячий шоколад", back: "cioccolata calda", explanation: "Aggettivo + sostantivo" }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Лексика: «Желания»
// ============================================================
const p5cards = [
    { front: "побережье", back: "costa, litorale" },
    { front: "бухта", back: "baia" },
    { front: "местные блюда", back: "piatti locali" },
    { front: "пробки", back: "ingorghi, traffico" },
    { front: "набор тарелок", back: "set di piatti" },
    { front: "подарить на юбилей", back: "regalare per l'anniversario" },
    { front: "остаться на полгода", back: "restare per sei mesi" },
    { front: "арендовать яхту", back: "noleggiare uno yacht" },
    { front: "съездить в Рим", back: "fare un viaggio a Roma" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Глаголы в ситуациях: НСВ / СВ (6 пар × 2, разные лица)
// ============================================================
const p6cards = [
    { front: "Мне нравится пробовать", back: "Mi piace provare" },
    { front: "Я хочу попробовать", back: "Voglio provare" },
    { front: "Подруга любит покупать", back: "Alla mia amica piace comprare" },
    { front: "Она хочет купить", back: "Lei vuole comprare" },
    { front: "Мы любим готовить", back: "Ci piace preparare" },
    { front: "Мы хотим приготовить", back: "Vogliamo preparare" },
    { front: "Дети любят смотреть", back: "Ai bambini piace guardare" },
    { front: "Они хотят посмотреть", back: "Loro vogliono guardare" },
    { front: "Ты ненавидишь брать", back: "Odi prendere" },
    { front: "Ты хочешь взять", back: "Vuoi prendere" },
    { front: "Я люблю дарить", back: "Mi piace regalare" },
    { front: "Мы хотим подарить", back: "Vogliamo regalare" }
];

// ============================================================
// PANEL 7 — GapText · public
// Текст «Мне нравится» — 20 пропусков
// ============================================================
const p7paragraphs = [
    "Мне нравится {{1}} рано утром, {{2}} горячий крепкий кофе и [[плотно::abbondantemente]] {{3}}. Я люблю {{4}} и {{5}} иностранные языки. Мне нравится {{6}} с друзьями и {{7}} красное вино. Я люблю {{8}} закаты и [[архитектуру::l'architettura]]. Обожаю {{9}} на море зимой и в горы летом. Нет, [[не подумайте::non pensate]], я люблю {{10}} и {{11}}! Но зимой море [[особенное::speciale]]. Какие фильмы я люблю {{12}}? Разные, [[главное::l'importante è]] чтобы была хорошая история, лучший [[режиссёр::regista]] и хорошие [[актёры::attori]]. Мне нравится {{13}}, и я часто {{14}} на курсы онлайн. Ещё я люблю {{15}} [[научно-популярные::divulgativi]] фильмы. Мне нравится {{16}} горячий шоколад и {{17}} на дождь. Я ненавижу {{18}} в плохие рестораны и {{19}} на встречи. Очень боюсь {{20}} машину."
];
const p7gaps = {
    1:  { answers: ["вставать"] },
    2:  { answers: ["пить"] },
    3:  { answers: ["завтракать"] },
    4:  { answers: ["читать"] },
    5:  { answers: ["изучать"] },
    6:  { answers: ["гулять"] },
    7:  { answers: ["пить"] },
    8:  { answers: ["фотографировать"] },
    9:  { answers: ["ездить"] },
    10: { answers: ["купаться"] },
    11: { answers: ["загорать"] },
    12: { answers: ["смотреть"] },
    13: { answers: ["учиться"] },
    14: { answers: ["записываюсь"] },
    15: { answers: ["смотреть"] },
    16: { answers: ["пить"] },
    17: { answers: ["смотреть"] },
    18: { answers: ["ходить"] },
    19: { answers: ["опаздывать"] },
    20: { answers: ["водить"] }
};

// ============================================================
// PANEL 8 — GapText · student
// Текст «Желания» — 15 пропусков
// ============================================================
const p8paragraphs = [
    "Я очень хочу {{1}} зимой на Бали и {{2}} там на полгода. Но перед этим летом я хочу {{3}} на [[Амальфитанское побережье::la Costiera Amalfitana]], {{4}} на яхте, {{5}} в [[бухтах::baie]] и {{6}} [[местные блюда::piatti locali]]. Я не хочу {{7}} на машине. Хочу [[арендовать::noleggiare]] яхту. [[Потому что::Perché]] я не хочу {{8}} время на [[пробки::ingorghi]], [[поиск парковки::ricerca del parcheggio]] и не хочу {{9}} за неё. Я хочу {{10}} [[набор тарелок::set di piatti]] с [[традиционным рисунком::disegno tradizionale]] и {{11}} его родителям на [[юбилей::anniversario]]. Ещё я хочу {{12}} [[настоящий::vero, autentico]] [[лимончелло::limoncello]] и {{13}} его с собой на Бали. Потом я хочу {{14}} в Рим и оттуда {{15}} на Бали."
];
const p8gaps = {
    1:  { answers: ["поехать"] },
    2:  { answers: ["остаться"] },
    3:  { answers: ["поехать"] },
    4:  { answers: ["покататься"] },
    5:  { answers: ["понырять"] },
    6:  { answers: ["попробовать"] },
    7:  { answers: ["ехать"] },
    8:  { answers: ["тратить"] },
    9:  { answers: ["платить"] },
    10: { answers: ["купить"] },
    11: { answers: ["подарить"] },
    12: { answers: ["приготовить"] },
    13: { answers: ["взять"] },
    14: { answers: ["съездить"] },
    15: { answers: ["улететь"] }
};

// ============================================================
// PANEL 9 — Flashcard · paid
// Глагольное управление — 15 карточек
// ============================================================
const p9cards = [
    { front: "поехать на —", back: "Бали" },
    { front: "ездить на —", back: "море" },
    { front: "съездить в —", back: "Рим" },
    { front: "ходить в —", back: "рестораны" },
    { front: "покататься на —", back: "яхте" },
    { front: "записываться на —", back: "курсы" },
    { front: "тратить время на —", back: "пробки" },
    { front: "платить за —", back: "парковки" },
    { front: "подарить его —", back: "родителям" },
    { front: "смотреть на —", back: "дождь" },
    { front: "опаздывать на —", back: "встречи" },
    { front: "улететь на —", back: "Бали" },
    { front: "смотреть (В.п.) —", back: "фильмы" },
    { front: "пробовать (В.п.) —", back: "блюда" },
    { front: "фотографировать (В.п.) —", back: "закаты" }
];

// ============================================================
// PANEL 10 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelPv04() {
    const panel = document.getElementById('panel-pv-04');
    if (!panel) return;

    const container = panel.querySelector('#pv-04-cards-container');
    const prevBtn   = panel.querySelector('#pv-04-deck-prev');
    const nextBtn   = panel.querySelector('#pv-04-deck-next');
    const counterEl = panel.querySelector('#pv-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Мне нравится ___ рано утром.", options: ["встать", "вставать", "вставаю"], answer: "вставать" },
        { question: "Я хочу ___ на Бали зимой.", options: ["ехать", "поехать", "еду"], answer: "поехать" },
        { question: "Я люблю ___ с друзьями.", options: ["погулять", "гуляю", "гулять"], answer: "гулять" },
        { question: "Я хочу ___ набор тарелок.", options: ["покупать", "купить", "покупаю"], answer: "купить" },
        { question: "Я ненавижу ___ на встречи.", options: ["опоздать", "опаздываю", "опаздывать"], answer: "опаздывать" }
    ];
    const matchPairs = [
        { left: "Мне нравится", right: "пробовать" },
        { left: "Я хочу", right: "попробовать" },
        { left: "Люблю", right: "смотреть" },
        { left: "Хочу", right: "посмотреть" },
        { left: "Обожаю", right: "готовить" },
        { left: "Хочу", right: "приготовить" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Я хочу ", promptSuffix: " настоящий лимончелло.", answers: ["приготовить"] },
        { id: "q2", promptPrefix: "Мне нравится ", promptSuffix: " горячий шоколад.", answers: ["пить"] },
        { id: "q3", promptPrefix: "Я хочу ", promptSuffix: " его с собой на Бали.", answers: ["взять"] },
        { id: "q4", promptPrefix: "Я боюсь ", promptSuffix: " машину.", answers: ["водить"] },
        { id: "q5", promptPrefix: "Я хочу ", promptSuffix: " там на полгода.", answers: ["остаться"] }
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
            card.className = 'fca01-card-container pv-04-card';
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
                    <p class="quiz-instruction">Напишите правильную форму глагола</p>
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
        container.querySelectorAll('.pv-04-card').forEach(card => {
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
                const card    = this.closest('.pv-04-card');
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
        container.querySelectorAll('.pv-04-card').forEach((c, i) => {
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
    'panel-pv-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-pv-01', exercises: p1exercises }),
    'panel-pv-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-pv-05', exercises: p2exercises }),
    'panel-pv-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-pv-06', exercises: p3exercises }),
    'panel-pv-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-pv-02', cards: p4cards }),
    'panel-pv-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-pv-07', cards: p5cards }),
    'panel-pv-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-pv-08', cards: p6cards }),
    'panel-pv-03': () => new GapTextExercise({ rootId: 'ex-gaptext-pv-03', paragraphs: p7paragraphs, gaps: p7gaps, showHints: false }),
    'panel-pv-09': () => new GapTextExercise({ rootId: 'ex-gaptext-pv-09', paragraphs: p8paragraphs, gaps: p8gaps, showHints: false }),
    'panel-pv-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-pv-10', cards: p9cards }),
    'panel-pv-04': () => initPanelPv04()
};

initPanelManager({ initializers, enableAccessControl: true });
