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
        text: "Тимур обожает ___ электронную музыку.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" },
        explanation: "Dopo «обожает» si usa l'imperfettivo: ascoltare come passione abituale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он часто ___ на фестивали.",
        words: ["ездит", "поедет"],
        correctAnswers: { 1: "ездит" },
        explanation: "«Часто» indica abitudine → imperfettivo."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур обожает ___ и всегда находит интересные рецепты.",
        words: ["готовить", "приготовить"],
        correctAnswers: { 1: "готовить" },
        explanation: "Dopo «обожает» si usa l'imperfettivo: cucinare come passione."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он любит ___ автобиографические романы.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" },
        explanation: "Dopo «любит» si usa l'imperfettivo: leggere come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимуру ___ экстремальные испытания.",
        words: ["нравятся", "понравятся"],
        correctAnswers: { 1: "нравятся" },
        explanation: "«Нравятся» indica gusto abituale → imperfettivo."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур хочет ___ участие в ультрамарафоне.",
        words: ["принимать", "принять"],
        correctAnswers: { 1: "принять" },
        explanation: "Dopo «хочет» si usa il perfettivo: un'azione concreta una tantum."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ летом на фестиваль электронной музыки.",
        words: ["ездить", "съездить"],
        correctAnswers: { 1: "съездить" },
        explanation: "Dopo «хочет» si usa il perfettivo: un viaggio concreto (andata e ritorno)."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур хочет ___ книгу рецептов веганской кухни.",
        words: ["создавать", "создать"],
        correctAnswers: { 1: "создать" },
        explanation: "Dopo «хочет» si usa il perfettivo: creare un risultato concreto."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ читать современных писателей.",
        words: ["начинать", "начать"],
        correctAnswers: { 1: "начать" },
        explanation: "Dopo «хочет» si usa il perfettivo: iniziare un'azione nuova."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур хочет ___ подкаст об Абстракционизме.",
        words: ["создавать", "создать"],
        correctAnswers: { 1: "создать" },
        explanation: "Dopo «хочет» si usa il perfettivo: creare un risultato concreto."
    }
];

// ============================================================
// PANEL 5 — DragDrop · student
// НСВ или СВ — без подсказок
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур ___ очень рано.",
        words: ["встаёт", "встанет"],
        correctAnswers: { 1: "встаёт" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он ___ на пробежку каждый день.",
        words: ["идёт", "пойдёт"],
        correctAnswers: { 1: "идёт" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур точно ___ каждый грамм продуктов.",
        words: ["считает", "посчитает"],
        correctAnswers: { 1: "считает" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он ___ рецепт до совершенства.",
        words: ["доводит", "доведёт"],
        correctAnswers: { 1: "доводит" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур часто ___ с Женей о веганстве.",
        words: ["спорит", "поспорит"],
        correctAnswers: { 1: "спорит" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ в ночной клуб.",
        words: ["ходить", "пойти"],
        correctAnswers: { 1: "пойти" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур не хочет ___ утреннюю тренировку.",
        words: ["пропускать", "пропустить"],
        correctAnswers: { 1: "пропустить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ там несколько дней.",
        words: ["тусоваться", "потусоваться"],
        correctAnswers: { 1: "потусоваться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур хочет ___ подкаст.",
        words: ["создавать", "создать"],
        correctAnswers: { 1: "создать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он любит ___ Абстракционизм тридцатых годов.",
        words: ["изучать", "изучить"],
        correctAnswers: { 1: "изучать" }
    }
];

// ============================================================
// PANEL 6 — DragDrop · paid
// НСВ или СВ — микс
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур обожает ___ электронную музыку.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ участие в ультрамарафоне.",
        words: ["принимать", "принять"],
        correctAnswers: { 1: "принять" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он любит ___ автобиографические романы.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур хочет ___ книгу рецептов.",
        words: ["создавать", "создать"],
        correctAnswers: { 1: "создать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимуру ___ экстремальные испытания.",
        words: ["нравятся", "понравятся"],
        correctAnswers: { 1: "нравятся" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ на фестиваль электронной музыки.",
        words: ["ездить", "съездить"],
        correctAnswers: { 1: "съездить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Тимур обожает ___ интересные рецепты.",
        words: ["готовить", "приготовить"],
        correctAnswers: { 1: "готовить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ читать современных писателей.",
        words: ["начинать", "начать"],
        correctAnswers: { 1: "начать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он часто ___ на фестивали.",
        words: ["ездит", "поедет"],
        correctAnswers: { 1: "ездит" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Он хочет ___ в ночной клуб.",
        words: ["ходить", "пойти"],
        correctAnswers: { 1: "пойти" }
    }
];

// ============================================================
// PANEL 2 — Flashcard · public
// Лексика: «Привычки Тимура»
// ============================================================
const p4cards = [
    { front: "обожать электронную музыку", back: "adorare la musica elettronica", explanation: "НСВ: passione" },
    { front: "ездить на фестивали", back: "andare ai festival", explanation: "НСВ: abitudine" },
    { front: "экстремальные испытания", back: "sfide estreme", explanation: "Aggettivo + sostantivo" },
    { front: "автобиографические романы", back: "romanzi autobiografici", explanation: "Aggettivo + sostantivo" },
    { front: "переписка деятелей культуры", back: "carteggio di personaggi della cultura", explanation: "Sostantivo + genitivo" },
    { front: "доводить до совершенства", back: "portare alla perfezione", explanation: "НСВ: azione abituale" },
    { front: "юридическая компания", back: "studio legale", explanation: "Aggettivo + sostantivo" },
    { front: "веганская кухня", back: "cucina vegana", explanation: "Aggettivo + sostantivo" },
    { front: "Абстракционизм тридцатых годов", back: "Astrattismo degli anni Trenta", explanation: "Arte + periodo" }
];

// ============================================================
// PANEL 7 — Flashcard · student
// Лексика: «Желания»
// ============================================================
const p5cards = [
    { front: "принять участие", back: "partecipare" },
    { front: "ультрамарафон", back: "ultramaratona" },
    { front: "пойти в ночной клуб", back: "andare in un club notturno" },
    { front: "пропустить тренировку", back: "saltare l'allenamento" },
    { front: "съездить на фестиваль", back: "andare al festival (andata e ritorno)" },
    { front: "потусоваться", back: "stare in compagnia / fare festa" },
    { front: "создать книгу рецептов", back: "creare un libro di ricette" },
    { front: "начать читать", back: "iniziare a leggere" },
    { front: "создать подкаст", back: "creare un podcast" }
];

// ============================================================
// PANEL 8 — Flashcard · paid
// Глаголы в ситуациях: НСВ / СВ
// ============================================================
const p6cards = [
    { front: "Тимур обожает слушать", back: "Timur adora ascoltare" },
    { front: "Он хочет принять участие", back: "Lui vuole partecipare" },
    { front: "Он часто ездит", back: "Lui spesso va" },
    { front: "Он хочет съездить", back: "Lui vuole andare (A/R)" },
    { front: "Тимур обожает готовить", back: "Timur adora cucinare" },
    { front: "Он хочет создать книгу", back: "Lui vuole creare un libro" },
    { front: "Он любит читать", back: "Lui ama leggere" },
    { front: "Он хочет начать читать", back: "Lui vuole iniziare a leggere" },
    { front: "Тимуру нравятся испытания", back: "A Timur piacciono le sfide" },
    { front: "Он хочет пойти в клуб", back: "Lui vuole andare in un club" },
    { front: "Он хочет потусоваться", back: "Lui vuole fare festa" },
    { front: "Он хочет создать подкаст", back: "Lui vuole creare un podcast" }
];

// ============================================================
// PANEL 3 — GapText · public
// Текст «Привычки Тимура» — 10 пропусков
// ============================================================
const p7paragraphs = [
    "Тимур работает {{1}} в крупной [[юридической::giuridica]] компании. Он {{2}} очень рано и идёт на [[пробежку::corsa]]. Он обожает {{3}} музыку и часто {{4}} на фестивали. Тимуру {{5}} экстремальные [[испытания::sfide]]. Тимур обожает {{6}} и всегда находит интересные [[рецепты::ricette]]. Он точно {{7}} каждый грамм продуктов и {{8}} рецепт до [[совершенства::perfezione]]. Он любит {{9}} автобиографические романы и [[переписку::carteggio]] деятелей культуры. Он любит {{10}} тридцатых годов."
];
const p7gaps = {
    1:  { answers: ["адвокатом"] },
    2:  { answers: ["встаёт"] },
    3:  { answers: ["электронную"] },
    4:  { answers: ["ездит"] },
    5:  { answers: ["нравятся"] },
    6:  { answers: ["готовить"] },
    7:  { answers: ["считает"] },
    8:  { answers: ["доводит"] },
    9:  { answers: ["читать"] },
    10: { answers: ["Абстракционизм"] }
};

// ============================================================
// PANEL 9 — GapText · student
// Текст «Желания» — 10 пропусков
// ============================================================
const p8paragraphs = [
    "Тимур хочет {{1}} участие в [[ультрамарафоне::ultramaratona]] в какой-то [[экзотической::esotica]] стране. Он хочет {{2}} в ночной клуб, но у него никогда нет [[времени::tempo]]. Он не хочет {{3}} утреннюю [[тренировку::allenamento]]. Тимур хочет {{4}} летом на фестиваль [[электронной::elettronica]] музыки и {{5}} там несколько дней. Тимур хочет {{6}} книгу [[рецептов::ricette]] веганской кухни. Он хочет {{7}} читать современных [[писателей::scrittori]] и {{8}} подкаст об [[Русском::Russo]] Абстракционизме {{9}} годов."
];
const p8gaps = {
    1:  { answers: ["принять"] },
    2:  { answers: ["пойти"] },
    3:  { answers: ["пропустить"] },
    4:  { answers: ["съездить"] },
    5:  { answers: ["потусоваться"] },
    6:  { answers: ["создать"] },
    7:  { answers: ["начать"] },
    8:  { answers: ["создать"] },
    9:  { answers: ["30-х", "тридцатых"] }
};

// ============================================================
// PANEL 10 — Flashcard · paid
// Глагольное управление — 15 карточек
// ============================================================
const p9cards = [
    { front: "работать (Т.п.) —", back: "адвокатом" },
    { front: "идти на (В.п.) —", back: "пробежку" },
    { front: "ездить на (В.п.) —", back: "фестивали" },
    { front: "спорить с (Т.п.) о (П.п.) —", back: "с Женей о веганстве" },
    { front: "готовить (В.п.) —", back: "рецепты" },
    { front: "считать (В.п.) —", back: "каждый грамм" },
    { front: "доводить до (Р.п.) —", back: "совершенства" },
    { front: "читать (В.п.) —", back: "романы" },
    { front: "принять участие в (П.п.) —", back: "ультрамарафоне" },
    { front: "пойти в (В.п.) —", back: "ночной клуб" },
    { front: "пропустить (В.п.) —", back: "тренировку" },
    { front: "съездить на (В.п.) —", back: "фестиваль" },
    { front: "создать (В.п.) —", back: "книгу рецептов" },
    { front: "начать (+ инф.) —", back: "читать" },
    { front: "создать (В.п.) —", back: "подкаст" }
];

// ============================================================
// PANEL 4 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelTq04() {
    const panel = document.getElementById('panel-tq-04');
    if (!panel) return;

    const container = panel.querySelector('#tq-04-cards-container');
    const prevBtn   = panel.querySelector('#tq-04-deck-prev');
    const nextBtn   = panel.querySelector('#tq-04-deck-next');
    const counterEl = panel.querySelector('#tq-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Dopo «обожает» quale aspetto si usa?", options: ["perfettivo", "imperfettivo", "entrambi"], answer: "imperfettivo" },
        { question: "«Тимур хочет ___ участие в ультрамарафоне» — quale verbo?", options: ["принимать", "принять", "принимает"], answer: "принять" },
        { question: "Perché «ездит» nella frase «часто ездит на фестивали» è imperfettivo?", options: ["Perché è un risultato", "Perché è un'azione abituale ripetuta", "Perché è un verbo di moto"], answer: "Perché è un'azione abituale ripetuta" },
        { question: "«Он хочет ___ в ночной клуб» — quale verbo?", options: ["ходить", "пойти", "идти"], answer: "пойти" },
        { question: "Perché «готовить» resta imperfettivo dopo «обожает»?", options: ["Perché è dopo «обожает» (passione = НСВ)", "Perché è un verbo di moto", "Perché è negativo"], answer: "Perché è dopo «обожает» (passione = НСВ)" }
    ];
    const matchPairs = [
        { left: "Тимур обожает", right: "слушать электронную музыку" },
        { left: "Он хочет", right: "принять участие в ультрамарафоне" },
        { left: "Тимуру нравятся", right: "экстремальные испытания" },
        { left: "Он хочет", right: "съездить на фестиваль" },
        { left: "Тимур обожает", right: "готовить веганские рецепты" },
        { left: "Он хочет", right: "создать подкаст" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Тимур обожает ", promptSuffix: " электронную музыку.", answers: ["слушать"] },
        { id: "q2", promptPrefix: "Он хочет ", promptSuffix: " участие в ультрамарафоне.", answers: ["принять"] },
        { id: "q3", promptPrefix: "Тимур хочет ", promptSuffix: " летом на фестиваль.", answers: ["съездить"] },
        { id: "q4", promptPrefix: "Он хочет ", promptSuffix: " книгу рецептов.", answers: ["создать"] },
        { id: "q5", promptPrefix: "Он любит ", promptSuffix: " автобиографические романы.", answers: ["читать"] }
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
            card.className = 'fca01-card-container tq-04-card';
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
        container.querySelectorAll('.tq-04-card').forEach(card => {
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
                const card    = this.closest('.tq-04-card');
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
        container.querySelectorAll('.tq-04-card').forEach((c, i) => {
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
    'panel-tq-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-tq-01', exercises: p1exercises }),
    'panel-tq-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-tq-05', exercises: p2exercises }),
    'panel-tq-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-tq-06', exercises: p3exercises }),
    'panel-tq-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-tq-02', cards: p4cards }),
    'panel-tq-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-tq-07', cards: p5cards }),
    'panel-tq-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-tq-08', cards: p6cards }),
    'panel-tq-03': () => new GapTextExercise({ rootId: 'ex-gaptext-tq-03', paragraphs: p7paragraphs, gaps: p7gaps, showHints: false }),
    'panel-tq-09': () => new GapTextExercise({ rootId: 'ex-gaptext-tq-09', paragraphs: p8paragraphs, gaps: p8gaps, showHints: false }),
    'panel-tq-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-tq-10', cards: p9cards }),
    'panel-tq-04': () => initPanelTq04()
};

initPanelManager({ initializers, enableAccessControl: true });
