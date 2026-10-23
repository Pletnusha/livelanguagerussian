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
        text: "Катя любит ___ странные фильмы.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "смотреть" },
        explanation: "Dopo «любит» si usa l'imperfettivo: guardare come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя несколько раз в неделю ___ в тренажёрном зале.",
        words: ["занимается", "займётся"],
        correctAnswers: { 1: "занимается" },
        explanation: "Azione abituale ripetuta (несколько раз в неделю) → imperfettivo."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя ___ занятия по фитнесу.",
        words: ["посещает", "посетит"],
        correctAnswers: { 1: "посещает" },
        explanation: "Azione abituale regolare → imperfettivo."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя ненавидит ___ йогой.",
        words: ["заниматься", "заняться"],
        correctAnswers: { 1: "заниматься" },
        explanation: "Dopo «ненавидит» si usa l'imperfettivo: odia l'attività in generale."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Кате нравится ___ чай с бергамотом.",
        words: ["пить", "выпить"],
        correctAnswers: { 1: "пить" },
        explanation: "Dopo «нравится» si usa l'imperfettivo: bere come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Кате нравится ___ белый шоколад.",
        words: ["есть", "съесть"],
        correctAnswers: { 1: "есть" },
        explanation: "Dopo «нравится» si usa l'imperfettivo: mangiare come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя любит ___ детективы Агаты Кристи.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" },
        explanation: "Dopo «любит» si usa l'imperfettivo: leggere come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя любит ___ английским в группе.",
        words: ["заниматься", "заняться"],
        correctAnswers: { 1: "заниматься" },
        explanation: "Dopo «любит» si usa l'imperfettivo: studiare come attività regolare."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "В машине она любит ___ лаундж и джаз.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" },
        explanation: "Dopo «любит» si usa l'imperfettivo: ascoltare come abitudine."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя хотела ___ рано.",
        words: ["проснуться", "просыпаться"],
        correctAnswers: { 1: "проснуться" },
        explanation: "Dopo «хотела» si usa il perfettivo: svegliarsi, risultato concreto."
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хотела ___ кофе.",
        words: ["выпить", "пить"],
        correctAnswers: { 1: "выпить" },
        explanation: "Dopo «хотела» si usa il perfettivo: bere un caffè, azione concreta."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// НСВ или СВ — без explanation
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя любит ___ странные фильмы альтернативных направлений.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "смотреть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя ненавидит ___ йогой.",
        words: ["заниматься", "заняться"],
        correctAnswers: { 1: "заниматься" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Кате нравится ___ белый шоколад.",
        words: ["есть", "съесть"],
        correctAnswers: { 1: "есть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя хотела ___ в тренажёрный зал.",
        words: ["пойти", "ходить"],
        correctAnswers: { 1: "пойти" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя любит ___ детективы.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хотела ___ горький шоколад.",
        words: ["есть", "съесть"],
        correctAnswers: { 1: "съесть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя любит ___ английским с англичанами.",
        words: ["заниматься", "заняться"],
        correctAnswers: { 1: "заниматься" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она поняла, что хочет ___ заниматься французским.",
        words: ["начать", "начинать"],
        correctAnswers: { 1: "начать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Кате нравится ___ чай с бергамотом.",
        words: ["пить", "выпить"],
        correctAnswers: { 1: "пить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она любит ___ лаундж и джаз.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Когда она села в машину, она ___ Бетховена.",
        words: ["включила", "включала"],
        correctAnswers: { 1: "включила" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// НСВ или СВ — микс, без подсказок
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя хотела ___ рано.",
        words: ["проснуться", "просыпаться"],
        correctAnswers: { 1: "проснуться" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя любит ___ странные фильмы.",
        words: ["смотреть", "посмотреть"],
        correctAnswers: { 1: "смотреть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хотела ___ кофе.",
        words: ["выпить", "пить"],
        correctAnswers: { 1: "выпить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя ненавидит ___ йогой.",
        words: ["заниматься", "заняться"],
        correctAnswers: { 1: "заниматься" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хотела ___ горький шоколад.",
        words: ["есть", "съесть"],
        correctAnswers: { 1: "съесть" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Кате нравится ___ чай с бергамотом.",
        words: ["пить", "выпить"],
        correctAnswers: { 1: "пить" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она хочет ___ заниматься французским.",
        words: ["начать", "начинать"],
        correctAnswers: { 1: "начать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя любит ___ детективы Агаты Кристи.",
        words: ["читать", "прочитать"],
        correctAnswers: { 1: "читать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Катя хотела ___ в тренажёрный зал.",
        words: ["пойти", "ходить"],
        correctAnswers: { 1: "пойти" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Она любит ___ лаундж и джаз шестидесятых годов.",
        words: ["слушать", "послушать"],
        correctAnswers: { 1: "слушать" }
    },
    {
        instruction: "Выбери правильный вид глагола.",
        text: "Когда она села в машину, она ___ Бетховена.",
        words: ["включила", "включала"],
        correctAnswers: { 1: "включила" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Лексика: «Привычки Кати»
// ============================================================
const p4cards = [
    { front: "смотреть странные фильмы", back: "guardare film strani", explanation: "НСВ: abitudine" },
    { front: "альтернативные направления", back: "correnti alternative", explanation: "Aggettivo + sostantivo" },
    { front: "называть обывателями", back: "chiamare filistei", explanation: "НСВ + Т.п." },
    { front: "заниматься в тренажёрном зале", back: "allenarsi in palestra", explanation: "НСВ + П.п." },
    { front: "посещать занятия по фитнесу", back: "frequentare lezioni di fitness", explanation: "НСВ + В.п." },
    { front: "чай с бергамотом", back: "tè al bergamotto", explanation: "Sostantivo + с + Т.п." },
    { front: "белый шоколад", back: "cioccolato bianco", explanation: "Aggettivo + sostantivo" },
    { front: "детективы Агаты Кристи", back: "gialli di Agatha Christie", explanation: "Sostantivo + Р.п." },
    { front: "лаундж и джаз шестидесятых годов", back: "lounge e jazz degli anni Sessanta", explanation: "Sostantivo + Р.п." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Лексика: «Странный день»
// ============================================================
const p5cards = [
    { front: "проснуться рано", back: "svegliarsi presto" },
    { front: "пойти в тренажёрный зал", back: "andare in palestra" },
    { front: "начала работать в офисе", back: "ha iniziato a lavorare in ufficio" },
    { front: "у неё не было времени", back: "non aveva tempo" },
    { front: "выпить кофе", back: "bere un caffè (risultato)" },
    { front: "съесть горький шоколад", back: "mangiare cioccolato fondente" },
    { front: "начать заниматься французским", back: "iniziare a studiare francese" },
    { front: "села в машину", back: "si è seduta in macchina" },
    { front: "включила Бетховена", back: "ha messo Beethoven" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Глаголы в ситуациях: НСВ / СВ
// ============================================================
const p6cards = [
    { front: "Катя любит смотреть", back: "A Katja piace guardare" },
    { front: "Она ненавидит заниматься", back: "Lei odia praticare" },
    { front: "Кате нравится пить", back: "A Katja piace bere" },
    { front: "Кате нравится есть", back: "A Katja piace mangiare" },
    { front: "Катя любит читать", back: "A Katja piace leggere" },
    { front: "Она любит слушать", back: "A lei piace ascoltare" },
    { front: "Катя хотела проснуться", back: "Katja voleva svegliarsi" },
    { front: "Она хотела пойти", back: "Lei voleva andare" },
    { front: "Она хотела выпить", back: "Lei voleva bere" },
    { front: "Она хотела съесть", back: "Lei voleva mangiare" },
    { front: "Она хочет начать", back: "Lei vuole iniziare" },
    { front: "Она включила Бетховена", back: "Lei ha messo Beethoven" }
];

// ============================================================
// PANEL 7 — GapText · public
// Текст «Привычки Кати» — 10 пропусков
// ============================================================
const p7paragraphs = [
    "Катя любит {{1}} странные фильмы [[альтернативных направлений::correnti alternative]]. Обычно она не {{2}} и называет нас \"[[обывателями::filistei]]\". Катя несколько раз в неделю {{3}} в [[тренажёрном зале::palestra]] и {{4}} занятия по [[фитнесу::fitness]]. Она ненавидит {{5}} йогой. Кате нравится {{6}} чай с [[бергамотом::bergamotto]] и {{7}} белый шоколад. Она любит {{8}} детективы Агаты Кристи. Она любит {{9}} английским в группе с [[англичанами::inglesi]]. В машине она любит {{10}} лаундж и джаз."
];
const p7gaps = {
    1:  { answers: ["смотреть"] },
    2:  { answers: ["обижается"] },
    3:  { answers: ["занимается"] },
    4:  { answers: ["посещает"] },
    5:  { answers: ["заниматься"] },
    6:  { answers: ["пить"] },
    7:  { answers: ["есть"] },
    8:  { answers: ["читать"] },
    9:  { answers: ["заниматься"] },
    10: { answers: ["слушать"] }
};

// ============================================================
// PANEL 8 — GapText · student
// Текст «Странный день» — 10 пропусков
// ============================================================
const p8paragraphs = [
    "Катя хотела {{1}} рано, но {{2}} около десяти и поняла, что всё не так. Она хотела {{3}} в [[тренажёрный зал::palestra]], но она начала {{4}} в офисе, и у неё не было времени. Сегодня утром даже хотела {{5}} кофе и {{6}} [[горький шоколад::cioccolato fondente]]. Потом она поняла, что хочет {{7}} заниматься [[французским::francese]], а когда она {{8}} в машину, она {{9}} [[Бетховена::Beethoven]]. Какой {{10}} день!"
];
const p8gaps = {
    1:  { answers: ["проснуться"] },
    2:  { answers: ["проснулась"] },
    3:  { answers: ["пойти"] },
    4:  { answers: ["работать"] },
    5:  { answers: ["выпить"] },
    6:  { answers: ["съесть"] },
    7:  { answers: ["начать"] },
    8:  { answers: ["села"] },
    9:  { answers: ["включила"] },
    10: { answers: ["странный"] }
};

// ============================================================
// PANEL 9 — Flashcard · paid
// Глагольное управление — 15 карточек
// ============================================================
const p9cards = [
    { front: "смотреть (В.п.) —", back: "фильмы" },
    { front: "заниматься (Т.п.) —", back: "йогой" },
    { front: "заниматься в (П.п.) —", back: "тренажёрном зале" },
    { front: "посещать (В.п.) —", back: "занятия" },
    { front: "пить (В.п.) —", back: "чай" },
    { front: "есть (В.п.) —", back: "шоколад" },
    { front: "читать (В.п.) —", back: "детективы" },
    { front: "заниматься (Т.п.) —", back: "английским" },
    { front: "слушать (В.п.) —", back: "лаундж и джаз" },
    { front: "проснуться (как?) —", back: "рано" },
    { front: "пойти в (В.п.) —", back: "тренажёрный зал" },
    { front: "выпить (В.п.) —", back: "кофе" },
    { front: "съесть (В.п.) —", back: "горький шоколад" },
    { front: "заниматься (Т.п.) —", back: "французским" },
    { front: "включить (В.п.) —", back: "Бетховена" }
];

// ============================================================
// PANEL 10 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelKq04() {
    const panel = document.getElementById('panel-kq-04');
    if (!panel) return;

    const container = panel.querySelector('#kq-04-cards-container');
    const prevBtn   = panel.querySelector('#kq-04-deck-prev');
    const nextBtn   = panel.querySelector('#kq-04-deck-next');
    const counterEl = panel.querySelector('#kq-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Dopo «любит» quale aspetto si usa?", options: ["perfettivo", "imperfettivo", "entrambi"], answer: "imperfettivo" },
        { question: "«Катя хотела ___ рано» — quale verbo?", options: ["просыпаться", "проснуться", "проснулась"], answer: "проснуться" },
        { question: "Perché «заниматься» nella frase «ненавидит заниматься йогой» è imperfettivo?", options: ["Perché è un risultato", "Perché è dopo «ненавидит» (sentimento = НСВ)", "Perché è un verbo di moto"], answer: "Perché è dopo «ненавидит» (sentimento = НСВ)" },
        { question: "«Она хотела ___ горький шоколад» — quale verbo?", options: ["есть", "съесть", "ела"], answer: "съесть" },
        { question: "Perché «пить» resta imperfettivo nella frase «нравится пить чай»?", options: ["Perché è dopo «нравится» (abitudine = НСВ)", "Perché è un verbo di moto", "Perché è negativo"], answer: "Perché è dopo «нравится» (abitudine = НСВ)" }
    ];
    const matchPairs = [
        { left: "Катя любит", right: "смотреть фильмы" },
        { left: "Она хотела", right: "проснуться рано" },
        { left: "Кате нравится", right: "пить чай с бергамотом" },
        { left: "Катя ненавидит", right: "заниматься йогой" },
        { left: "Она хочет", right: "начать заниматься французским" },
        { left: "Катя любит", right: "слушать лаундж и джаз" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "Катя любит ", promptSuffix: " странные фильмы.", answers: ["смотреть"] },
        { id: "q2", promptPrefix: "Она хотела ", promptSuffix: " кофе.", answers: ["выпить"] },
        { id: "q3", promptPrefix: "Катя ненавидит ", promptSuffix: " йогой.", answers: ["заниматься"] },
        { id: "q4", promptPrefix: "Она хочет ", promptSuffix: " заниматься французским.", answers: ["начать"] },
        { id: "q5", promptPrefix: "Катя любит ", promptSuffix: " детективы Агаты Кристи.", answers: ["читать"] }
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
            card.className = 'fca01-card-container kq-04-card';
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
        container.querySelectorAll('.kq-04-card').forEach(card => {
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
                const card    = this.closest('.kq-04-card');
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
        container.querySelectorAll('.kq-04-card').forEach((c, i) => {
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
    'panel-kq-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-kq-01', exercises: p1exercises }),
    'panel-kq-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-kq-05', exercises: p2exercises }),
    'panel-kq-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-kq-06', exercises: p3exercises }),
    'panel-kq-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-kq-02', cards: p4cards }),
    'panel-kq-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-kq-07', cards: p5cards }),
    'panel-kq-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-kq-08', cards: p6cards }),
    'panel-kq-03': () => new GapTextExercise({ rootId: 'ex-gaptext-kq-03', paragraphs: p7paragraphs, gaps: p7gaps, showHints: false }),
    'panel-kq-09': () => new GapTextExercise({ rootId: 'ex-gaptext-kq-09', paragraphs: p8paragraphs, gaps: p8gaps, showHints: false }),
    'panel-kq-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-kq-10', cards: p9cards }),
    'panel-kq-04': () => initPanelKq04()
};

initPanelManager({ initializers, enableAccessControl: true });
