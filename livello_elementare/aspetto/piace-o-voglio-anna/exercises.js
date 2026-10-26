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
        text: "Анна обожает {{1}}.",
        words: ["танцевать", "станцевать"],
        correctAnswers: { 1: "танцевать" },
        explanation: "Dopo «обожает» si usa l'imperfettivo: ballare come passione abituale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она обожает {{1}} английскую литературу.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" },
        explanation: "Dopo «обожает» si usa l'imperfettivo: leggere come attività abituale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна часто {{1}} в театр на мюзиклы.",
        words: ["ходит", "пойдёт"],
        correctAnswers: { 1: "ходит" },
        explanation: "«Часто» indica abitudine → imperfettivo."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она обожает {{1}} мексиканские блюда.",
        words: ["готовить", "приготовить"],
        correctAnswers: { 1: "готовить" },
        explanation: "Dopo «обожает» si usa l'imperfettivo: cucinare come passione."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Ей нравятся арабские узоры и {{1}} масла.",
        words: ["эфирные", "эфирное"],
        correctAnswers: { 1: "эфирные" },
        explanation: "Plurale: узоры и масла — entrambi al plurale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "По утрам она {{1}} смузи.",
        words: ["пьёт", "выпьет"],
        correctAnswers: { 1: "пьёт" },
        explanation: "«По утрам» indica abitudine regolare → imperfettivo."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна хочет {{1}} на фестивале танцев.",
        words: ["выступить", "выступать"],
        correctAnswers: { 1: "выступить" },
        explanation: "Dopo «хочет» si usa il perfettivo: esibirsi, azione concreta."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} романы Бронте в оригинале.",
        words: ["прочитать", "читать"],
        correctAnswers: { 1: "прочитать" },
        explanation: "Dopo «хочет» si usa il perfettivo: leggere fino in fondo, risultato."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна хочет {{1}} в Лондон.",
        words: ["съездить", "ездить"],
        correctAnswers: { 1: "съездить" },
        explanation: "Dopo «хочет» si usa il perfettivo: andare a Londra, viaggio concreto."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} в Бразилию на карнавал.",
        words: ["слетать", "летать"],
        correctAnswers: { 1: "слетать" },
        explanation: "Dopo «хочет» si usa il perfettivo: volare in Brasile, azione concreta."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна хочет {{1}} свои духи.",
        words: ["создать", "создавать"],
        correctAnswers: { 1: "создать" },
        explanation: "Dopo «хочет» si usa il perfettivo: creare, risultato concreto."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// НСВ или СВ — без explanation
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна обожает {{1}} на танцы.",
        words: ["ходить", "пойти"],
        correctAnswers: { 1: "ходить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} на курсы продвинутого английского.",
        words: ["записаться", "записываться"],
        correctAnswers: { 1: "записаться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна обожает {{1}} мексиканские блюда.",
        words: ["готовить", "приготовить"],
        correctAnswers: { 1: "готовить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} мюзикл «Кошки».",
        words: ["посмотреть", "смотреть"],
        correctAnswers: { 1: "посмотреть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна обожает {{1}} английскую литературу.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} традиционную местную кухню.",
        words: ["попробовать", "пробовать"],
        correctAnswers: { 1: "попробовать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} есть фрукты и овощи.",
        words: ["начать", "начинать"],
        correctAnswers: { 1: "начать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна обожает Южно-Американские карнавалы и {{1}} танцевать.",
        words: ["обожает", "полюбит"],
        correctAnswers: { 1: "обожает" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} рисовать арабские узоры.",
        words: ["научиться", "учиться"],
        correctAnswers: { 1: "научиться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "По утрам она {{1}} смузи, который сама готовит.",
        words: ["пьёт", "выпьет"],
        correctAnswers: { 1: "пьёт" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} свои духи.",
        words: ["создать", "создавать"],
        correctAnswers: { 1: "создать" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// НСВ или СВ — микс, без подсказок
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна хочет {{1}} на фестивале танцев.",
        words: ["выступить", "выступать"],
        correctAnswers: { 1: "выступить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она обожает {{1}} мексиканские блюда.",
        words: ["готовить", "приготовить"],
        correctAnswers: { 1: "готовить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна хочет {{1}} в Лондон.",
        words: ["съездить", "ездить"],
        correctAnswers: { 1: "съездить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она обожает {{1}}.",
        words: ["танцевать", "станцевать"],
        correctAnswers: { 1: "танцевать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна хочет {{1}} романы Бронте в оригинале.",
        words: ["прочитать", "читать"],
        correctAnswers: { 1: "прочитать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она часто {{1}} в театр на мюзиклы.",
        words: ["ходит", "пойдёт"],
        correctAnswers: { 1: "ходит" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} в Бразилию на карнавал.",
        words: ["слетать", "летать"],
        correctAnswers: { 1: "слетать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "По утрам она {{1}} смузи.",
        words: ["пьёт", "выпьет"],
        correctAnswers: { 1: "пьёт" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} рисовать арабские узоры.",
        words: ["научиться", "учиться"],
        correctAnswers: { 1: "научиться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Анна хочет {{1}} традиционную местную кухню.",
        words: ["попробовать", "пробовать"],
        correctAnswers: { 1: "попробовать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет {{1}} свои духи.",
        words: ["создать", "создавать"],
        correctAnswers: { 1: "создать" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Лексика: «Анне нравится»
// ============================================================
const p4cards = [
    { front: "обожать танцевать", back: "adorare ballare", explanation: "НСВ: passione" },
    { front: "ходить на танцы", back: "andare a lezione di ballo", explanation: "НСВ: abitudine" },
    { front: "латино-американские танцы", back: "balli latino-americani", explanation: "Aggettivo + sostantivo" },
    { front: "мюзиклы", back: "musical", explanation: "Sostantivo, plurale" },
    { front: "мексиканские блюда", back: "piatti messicani", explanation: "Aggettivo + sostantivo" },
    { front: "смузи", back: "frullato / smoothie", explanation: "Sostantivo indeclinabile" },
    { front: "арабские узоры", back: "motivi arabi", explanation: "Aggettivo + sostantivo" },
    { front: "эфирные масла", back: "oli essenziali", explanation: "Aggettivo + sostantivo" },
    { front: "супы-пюре", back: "vellutate / zuppe cremose", explanation: "Sostantivo composto" }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Лексика: «Желания»
// ============================================================
const p5cards = [
    { front: "выступить на фестивале", back: "esibirsi al festival" },
    { front: "прочитать в оригинале", back: "leggere in originale" },
    { front: "записаться на курсы", back: "iscriversi ai corsi" },
    { front: "съездить в Лондон", back: "andare a Londra (andata e ritorno)" },
    { front: "посмотреть мюзикл", back: "guardare un musical" },
    { front: "слетать в Бразилию", back: "volare in Brasile (andata e ritorno)" },
    { front: "попробовать местную кухню", back: "provare la cucina locale" },
    { front: "научиться рисовать", back: "imparare a disegnare" },
    { front: "создать свои духи", back: "creare il proprio profumo" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Глаголы в ситуациях: НСВ / СВ
// ============================================================
const p6cards = [
    { front: "Анна обожает танцевать", back: "Anna adora ballare" },
    { front: "Она хочет выступить", back: "Lei vuole esibirsi" },
    { front: "Она обожает читать", back: "Lei adora leggere" },
    { front: "Она хочет прочитать", back: "Lei vuole leggere (fino in fondo)" },
    { front: "Анна часто ходит", back: "Anna spesso va" },
    { front: "Она хочет съездить", back: "Lei vuole andare (A/R)" },
    { front: "Она обожает готовить", back: "Lei adora cucinare" },
    { front: "Она хочет попробовать", back: "Lei vuole provare" },
    { front: "Ей нравятся узоры", back: "A lei piacciono i motivi" },
    { front: "Она хочет научиться", back: "Lei vuole imparare" },
    { front: "Она хочет слетать", back: "Lei vuole volare (A/R)" },
    { front: "Она хочет создать", back: "Lei vuole creare" }
];

// ============================================================
// PANEL 7 — GapText · public
// Текст «Анне нравится» — 10 пропусков
// ============================================================
const p7paragraphs = [
    "Анна обожает {{1}}, поэтому несколько раз в неделю она {{2}} на танцы. Она обожает английскую [[литературу::letteratura]], особенно романы Бронте и Джейн Остин. Она часто {{3}} в театр на [[мюзиклы::musical]]. Она обожает {{4}} мексиканские блюда. По утрам она {{5}} [[смузи::frullato]], который сама {{6}}. Она {{7}} только мясо и иногда картофель и [[супы-пюре::vellutate]]. Она обожает Южно-Американские {{8}}. Ей {{9}} арабские узоры и {{10}} масла."
];
const p7gaps = {
    1:  { answers: ["танцевать"] },
    2:  { answers: ["ходит"] },
    3:  { answers: ["ходит"] },
    4:  { answers: ["готовить"] },
    5:  { answers: ["пьёт"] },
    6:  { answers: ["готовит"] },
    7:  { answers: ["ест"] },
    8:  { answers: ["карнавалы"] },
    9:  { answers: ["нравятся"] },
    10: { answers: ["эфирные"] }
};

// ============================================================
// PANEL 8 — GapText · student
// Текст «Желания» — 10 пропусков
// ============================================================
const p8paragraphs = [
    "Анна хочет {{1}} на [[фестивале::festival]] танцев. Она хочет {{2}} романы Бронте и Джейн Остин в [[оригинале::originale]], поэтому она хочет {{3}} на курсы продвинутого [[английского::inglese]]. Она хочет {{4}} в Лондон и {{5}} мюзикл «Кошки» и «Призрак оперы». Она хочет {{6}} в Бразилию на [[карнавал::carnevale]] и {{7}} настоящую традиционную местную кухню. Она хочет {{8}} есть фрукты и овощи. Она хочет {{9}} рисовать арабские [[узоры::motivi]]. Она хочет {{10}} свои духи."
];
const p8gaps = {
    1:  { answers: ["выступить"] },
    2:  { answers: ["прочитать"] },
    3:  { answers: ["записаться"] },
    4:  { answers: ["съездить"] },
    5:  { answers: ["посмотреть"] },
    6:  { answers: ["слетать"] },
    7:  { answers: ["попробовать"] },
    8:  { answers: ["начать"] },
    9:  { answers: ["научиться"] },
    10: { answers: ["создать"] }
};

// ============================================================
// PANEL 9 — Flashcard · paid
// Глагольное управление — 15 карточек
// ============================================================
const p9cards = [
    { front: "ходить на (В.п.) —", back: "танцы" },
    { front: "ходить в (В.п.) —", back: "театр" },
    { front: "готовить (В.п.) —", back: "мексиканские блюда" },
    { front: "пить (В.п.) —", back: "смузи" },
    { front: "есть (В.п.) —", back: "мясо" },
    { front: "выступить на (П.п.) —", back: "фестивале" },
    { front: "прочитать (В.п.) —", back: "романы" },
    { front: "записаться на (В.п.) —", back: "курсы" },
    { front: "съездить в (В.п.) —", back: "Лондон" },
    { front: "посмотреть (В.п.) —", back: "мюзикл" },
    { front: "слетать в (В.п.) —", back: "Бразилию" },
    { front: "попробовать (В.п.) —", back: "местную кухню" },
    { front: "научиться (+ инф.) —", back: "рисовать" },
    { front: "создать (В.п.) —", back: "духи" },
    { front: "обожать (+ инф.) —", back: "танцевать" }
];

// ============================================================
// PANEL 10 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelAq04() {
    const panel = document.getElementById('panel-aq-04');
    if (!panel) return;

    const container = panel.querySelector('#aq-04-cards-container');
    const prevBtn   = panel.querySelector('#aq-04-deck-prev');
    const nextBtn   = panel.querySelector('#aq-04-deck-next');
    const counterEl = panel.querySelector('#aq-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Dopo «обожает» quale aspetto si usa?", options: ["perfettivo", "imperfettivo", "entrambi"], answer: "imperfettivo" },
        { question: "«Анна хочет ___ на фестивале» — quale verbo?", options: ["выступать", "выступить", "выступает"], answer: "выступить" },
        { question: "Perché «ходит» nella frase «часто ходит в театр» è imperfettivo?", options: ["Perché è un risultato", "Perché è un'azione abituale ripetuta", "Perché è un verbo di moto"], answer: "Perché è un'azione abituale ripetuta" },
        { question: "«Она хочет ___ в Бразилию» — quale verbo?", options: ["летать", "слетать", "лететь"], answer: "слетать" },
        { question: "Perché «готовить» resta imperfettivo dopo «обожает»?", options: ["Perché è dopo «обожает» (passione = НСВ)", "Perché è un verbo di moto", "Perché è negativo"], answer: "Perché è dopo «обожает» (passione = НСВ)" }
    ];
    const matchPairs = [
        { left: "Анна обожает", right: "танцевать" },
        { left: "Она хочет", right: "выступить на фестивале" },
        { left: "Ей нравятся", right: "арабские узоры" },
        { left: "Она хочет", right: "слетать в Бразилию" },
        { left: "Анна обожает", right: "готовить мексиканские блюда" },
        { left: "Она хочет", right: "создать свои духи" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Анна обожает ", promptSuffix: ".", answers: ["танцевать"] },
        { id: "q2", promptPrefix: "Она хочет ", promptSuffix: " романы Бронте в оригинале.", answers: ["прочитать"] },
        { id: "q3", promptPrefix: "Анна хочет ", promptSuffix: " в Лондон.", answers: ["съездить"] },
        { id: "q4", promptPrefix: "Она хочет ", promptSuffix: " рисовать арабские узоры.", answers: ["научиться"] },
        { id: "q5", promptPrefix: "Она обожает ", promptSuffix: " мексиканские блюда.", answers: ["готовить"] }
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
            card.className = 'fca01-card-container aq-04-card';
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
        container.querySelectorAll('.aq-04-card').forEach(card => {
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
                const card    = this.closest('.aq-04-card');
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
        container.querySelectorAll('.aq-04-card').forEach((c, i) => {
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
    'panel-aq-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-aq-01', exercises: p1exercises }),
    'panel-aq-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-aq-05', exercises: p2exercises }),
    'panel-aq-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-aq-06', exercises: p3exercises }),
    'panel-aq-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-aq-02', cards: p4cards }),
    'panel-aq-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-aq-07', cards: p5cards }),
    'panel-aq-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-aq-08', cards: p6cards }),
    'panel-aq-03': () => new GapTextExercise({ rootId: 'ex-gaptext-aq-03', paragraphs: p7paragraphs, gaps: p7gaps, showHints: false }),
    'panel-aq-09': () => new GapTextExercise({ rootId: 'ex-gaptext-aq-09', paragraphs: p8paragraphs, gaps: p8gaps, showHints: false }),
    'panel-aq-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-aq-10', cards: p9cards }),
    'panel-aq-04': () => initPanelAq04()
};

initPanelManager({ initializers, enableAccessControl: true });
