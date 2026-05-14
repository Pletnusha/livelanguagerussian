import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix сплавать vs поплавать
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Я быстро {{1}} к тому берегу и вернусь.",
        words: ["сплаваю", "поплаваю", "сплавает"],
        correctAnswers: { 1: "сплаваю" }
        // сплаваю = nuotare A/R verso una meta
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "После работы он {{1}} в бассейне полчаса.",
        words: ["поплавает", "сплавает", "поплаваем"],
        correctAnswers: { 1: "поплавает" }
        // поплавает = nuotare per un po', durata limitata
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Мы {{1}} на тот остров и обратно.",
        words: ["сплаваем", "поплаваем", "сплавает"],
        correctAnswers: { 1: "сплаваем" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Она {{1}} немного у берега и выйдет на сушу.",
        words: ["поплавает", "сплавает", "поплаваю"],
        correctAnswers: { 1: "поплавает" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Они {{1}} к буйку и вернутся.",
        words: ["сплавают", "поплавают", "сплаваем"],
        correctAnswers: { 1: "сплавают" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Ты {{1}} со мной к скале и обратно?",
        words: ["сплаваешь", "поплаваешь", "сплавает"],
        correctAnswers: { 1: "сплаваешь" }
        // сплаваешь = nuotare A/R insieme
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Дети {{1}} в море перед ужином.",
        words: ["поплавают", "сплавают", "поплавает"],
        correctAnswers: { 1: "поплавают" }
        // поплавают = nuotare per un po'
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Я {{1}} к лодке и привяжу верёвку.",
        words: ["сплаваю", "поплаваю", "сплавают"],
        correctAnswers: { 1: "сплаваю" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "Лена {{1}} в бассейне для здоровья.",
        words: ["поплавает", "сплавает", "поплаваем"],
        correctAnswers: { 1: "поплавает" }
    },
    {
        instruction: "Выбери правильную форму глагола (futuro).",
        text: "{{1}} на тот берег — там удобнее загорать.",
        words: ["Сплавай", "Поплавай", "Сплаваем"],
        correctAnswers: { 1: "Сплавай" }
        // imperativo di сплавать = nuotare A/R
    },
];

// ============================================================
// PANEL 5 — DragDrop · student · Solo СПЛАВАТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Я {{1}} к тому берегу и вернусь.",
        words: ["сплаваю", "сплаваешь", "сплавают"],
        correctAnswers: { 1: "сплаваю" }
    },
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Ты {{1}} к буйку за мной?",
        words: ["сплаваешь", "сплаваю", "сплаваем"],
        correctAnswers: { 1: "сплаваешь" }
    },
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Он {{1}} к лодке и привяжет верёвку.",
        words: ["сплавает", "сплаваю", "сплавают"],
        correctAnswers: { 1: "сплавает" }
    },
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Она {{1}} на тот остров и вернётся к обеду.",
        words: ["сплавает", "сплаваем", "сплавают"],
        correctAnswers: { 1: "сплавает" }
    },
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Мы {{1}} к скале вместе.",
        words: ["сплаваем", "сплавает", "сплавают"],
        correctAnswers: { 1: "сплаваем" }
    },
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Вы {{1}} к тому берегу без меня?",
        words: ["сплаваете", "сплаваем", "сплавают"],
        correctAnswers: { 1: "сплаваете" }
    },
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Они {{1}} за буйки и вернутся.",
        words: ["сплавают", "сплавает", "сплаваем"],
        correctAnswers: { 1: "сплавают" }
    },
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Я {{1}} к платформе и возьму маску.",
        words: ["сплаваю", "сплавает", "сплаваем"],
        correctAnswers: { 1: "сплаваю" }
    },
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Ты {{1}} к другому берегу за нами?",
        words: ["сплаваешь", "сплавает", "сплаваем"],
        correctAnswers: { 1: "сплаваешь" }
    },
    {
        instruction: "Completa con la forma corretta di СПЛАВАТЬ.",
        text: "Мы {{1}} к острову на рассвете.",
        words: ["сплаваем", "сплавают", "сплавает"],
        correctAnswers: { 1: "сплаваем" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo ПОПЛАВАТЬ
// ============================================================
const p6exercises = [
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Я {{1}} полчаса и выйду из воды.",
        words: ["поплаваю", "поплаваешь", "поплавают"],
        correctAnswers: { 1: "поплаваю" }
    },
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Ты {{1}} со мной в бассейне?",
        words: ["поплаваешь", "поплаваю", "поплаваем"],
        correctAnswers: { 1: "поплаваешь" }
    },
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Он {{1}} немного и успокоится.",
        words: ["поплавает", "поплаваю", "поплавают"],
        correctAnswers: { 1: "поплавает" }
    },
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Она {{1}} у берега перед завтраком.",
        words: ["поплавает", "поплаваем", "поплавают"],
        correctAnswers: { 1: "поплавает" }
    },
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Мы {{1}} после пробежки.",
        words: ["поплаваем", "поплавает", "поплавают"],
        correctAnswers: { 1: "поплаваем" }
    },
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Вы {{1}} в море сегодня?",
        words: ["поплаваете", "поплаваем", "поплавают"],
        correctAnswers: { 1: "поплаваете" }
    },
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Дети {{1}} в бассейне перед сном.",
        words: ["поплавают", "поплавает", "поплаваем"],
        correctAnswers: { 1: "поплавают" }
    },
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Я {{1}} для расслабления после работы.",
        words: ["поплаваю", "поплавает", "поплаваем"],
        correctAnswers: { 1: "поплаваю" }
    },
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Ты {{1}} на открытой воде?",
        words: ["поплаваешь", "поплавает", "поплаваем"],
        correctAnswers: { 1: "поплаваешь" }
    },
    {
        instruction: "Completa con la forma corretta di ПОПЛАВАТЬ.",
        text: "Мы {{1}} час и пойдём обедать.",
        words: ["поплаваем", "поплавают", "поплавает"],
        correctAnswers: { 1: "поплаваем" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Я сплаваю к тому берегу", back: "и сразу вернусь" },
    { front: "После работы он поплавает", back: "в бассейне полчаса" },
    { front: "Мы сплаваем", back: "на тот остров и обратно" },
    { front: "Она поплавает немного", back: "у берега и выйдет на сушу" },
    { front: "Они сплавают к буйку", back: "и вернутся" },
    { front: "Ты сплаваешь со мной", back: "к скале и обратно?" },
    { front: "Дети поплавают в море", back: "перед ужином" },
    { front: "Я сплаваю к лодке", back: "и привяжу верёвку" },
    { front: "Лена поплавает", back: "в бассейне для здоровья" },
    { front: "Сплавай на тот берег", back: "там удобнее загорать" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Сплавает к острову", back: "nuotare A/R verso una meta precisa" },
    { front: "Поплавает в бассейне", back: "nuotare per un po', durata limitata" },
    { front: "Я сплаваю за буйки", back: "andare e tornare a nuoto" },
    { front: "Поплаваю перед сном", back: "nuotata rilassante, breve" },
    { front: "Они сплавают вместе", back: "nuotare A/R entrambi" },
    { front: "Сплавай за маской", back: "commissione a nuoto: vai e torna" },
    { front: "Поплаваем после пробежки?", back: "nuotare insieme per un po'" },
    { front: "Она сплавает к платформе", back: "nuotare fino alla piattaforma e tornare" },
    { front: "Куда ты сплаваешь?", back: "domanda: nuotare A/R verso dove?" },
    { front: "Сколько поплаваешь?", back: "domanda sulla durata del nuoto" },
];

// ============================================================
// PANEL 7 — Flashcard · student
// ============================================================
const p7cards = [
    { front: "Я сплаваю к тому берегу", back: "и вернусь через десять минут" },
    { front: "Он сплавает к лодке", back: "и привяжет якорь" },
    { front: "Мы сплаваем к острову", back: "на рассвете" },
    { front: "Ты сплаваешь за буйки?", back: "это опасно одному" },
    { front: "Они сплавают к скале", back: "и вернутся к обеду" },
    { front: "Сплавай за маской", back: "она там, у дна" },
    { front: "Она сплавает на платформу", back: "взять полотенце" },
    { front: "Вы сплаваете к тому берегу?", back: "я подожду здесь" },
    { front: "Сплаваем вместе к буйку?", back: "предложение: A/R a nuoto" },
    { front: "Он сплавает и расскажет", back: "что там видел" },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Поплаваю полчаса", back: "потом пойду домой" },
    { front: "Поплавай немного", back: "тебе будет лучше" },
    { front: "Он поплавает и успокоится", back: "вода снимает стресс" },
    { front: "Мы поплаваем после пробежки", back: "хороший способ расслабиться" },
    { front: "Она поплавает у берега", back: "не заплывая далеко" },
    { front: "Ты поплаваешь со мной?", back: "в бассейне есть место" },
    { front: "Дети поплавают перед сном", back: "это их успокоит" },
    { front: "Поплаваем час и пойдём обедать", back: "предложение: nuotare per un'ora" },
    { front: "Вы поплаваете в открытом море?", back: "или только у берега?" },
    { front: "Поплавай для здоровья", back: "совет: nuotare un po'" },
];

// ============================================================
// PANEL 9 — Flashcard · student
// ============================================================
const p9cards = [
    { front: "Сплаваю и вернусь", back: "сплавать = A/R preciso via acqua" },
    { front: "Поплаваю немного", back: "поплавать = attività breve nel tempo" },
    { front: "Они сплавают к острову", back: "ritorneranno dopo" },
    { front: "Ты поплаваешь в море?", back: "сколько времени?" },
    { front: "Мы сплаваем вместе", back: "к скале и обратно" },
    { front: "Поплавай для расслабления", back: "не нужно никуда плыть" },
    { front: "Она сплавает за буйки", back: "e ritornerà" },
    { front: "Он поплавает час", back: "потом позвонит" },
    { front: "Куда ты сплаваешь?", back: "domanda sulla meta A/R" },
    { front: "Сколько ты поплаваешь?", back: "domanda sulla durata" },
];

// ============================================================
// PANEL 10 — Flashcard · paid
// ============================================================
const p10cards = [
    { front: "Сплаваем к острову?", back: "предложение: A/R a nuoto" },
    { front: "Поплаваем вместе немного?", back: "предложение: nuotare per un po'" },
    { front: "Она сплавает за маской", back: "veloce, andata e ritorno" },
    { front: "Он поплавает и выйдет", back: "breve nuotata, poi esce" },
    { front: "Сплавай на тот берег", back: "imperativo: A/R a nuoto" },
    { front: "Поплавай хоть немного", back: "imperativo: almeno un po'" },
    { front: "Я сплаваю туда и обратно", back: "нужно принести флаг" },
    { front: "Я поплаваю для здоровья", back: "nuotata di benessere" },
    { front: "Сплавают к буйку по очереди", back: "a turno, A/R" },
    { front: "Поплавают и вернутся", back: "breve nuotata poi rientrano" },
];


// ============================================================
// PANEL 4 — Mixed Quiz · public
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-fut-sp-04');
    if (!panel) return;

    const container = panel.querySelector('#fut-sp-04-cards-container');
    const prevBtn   = panel.querySelector('#fut-sp-04-deck-prev');
    const nextBtn   = panel.querySelector('#fut-sp-04-deck-next');
    const counterEl = panel.querySelector('#fut-sp-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Я быстро ___ к тому берегу и вернусь.", options: ["сплаваю", "поплаваю", "сплавает"], answer: "сплаваю" },
        { question: "После работы он ___ в бассейне полчаса.", options: ["поплавает", "сплавает", "поплаваем"], answer: "поплавает" },
        { question: "Мы ___ на тот остров и обратно.", options: ["сплаваем", "поплаваем", "сплавает"], answer: "сплаваем" },
        { question: "Она ___ немного у берега и выйдет.", options: ["поплавает", "сплавает", "поплаваю"], answer: "поплавает" },
        { question: "Они ___ к буйку и вернутся.", options: ["сплавают", "поплавают", "сплаваем"], answer: "сплавают" },
        { question: "Ты ___ со мной к скале и обратно?", options: ["сплаваешь", "поплаваешь", "сплавает"], answer: "сплаваешь" },
        { question: "Дети ___ в море перед ужином.", options: ["поплавают", "сплавают", "поплавает"], answer: "поплавают" },
        { question: "Я ___ к лодке и привяжу верёвку.", options: ["сплаваю", "поплаваю", "сплавают"], answer: "сплаваю" },
        { question: "Лена ___ в бассейне для здоровья.", options: ["поплавает", "сплавает", "поплаваем"], answer: "поплавает" },
        { question: "___ на тот берег — там удобнее.", options: ["Сплавай", "Поплавай", "Сплаваем"], answer: "Сплавай" },
    ];

    const matchPairs = [
        { left: "Я сплаваю к тому берегу", right: "и сразу вернусь" },
        { left: "После работы он поплавает", right: "в бассейне полчаса" },
        { left: "Мы сплаваем", right: "на тот остров и обратно" },
        { left: "Она поплавает немного", right: "у берега и выйдет" },
        { left: "Они сплавают к буйку", right: "и вернутся" },
        { left: "Ты сплаваешь со мной", right: "к скале и обратно?" },
        { left: "Дети поплавают в море", right: "перед ужином" },
        { left: "Я сплаваю к лодке", right: "и привяжу верёвку" },
        { left: "Лена поплавает", right: "в бассейне для здоровья" },
        { left: "Сплавай на тот берег", right: "там удобнее загорать" },
    ];

    const quizData = [
        { id: "fut-sp-001", promptPrefix: "Я быстро", promptSuffix: "к тому берегу и вернусь.", answers: ["сплаваю"] },
        { id: "fut-sp-002", promptPrefix: "После работы он", promptSuffix: "в бассейне полчаса.", answers: ["поплавает"] },
        { id: "fut-sp-003", promptPrefix: "Мы", promptSuffix: "на тот остров и обратно.", answers: ["сплаваем"] },
        { id: "fut-sp-004", promptPrefix: "Она", promptSuffix: "немного у берега и выйдет.", answers: ["поплавает"] },
        { id: "fut-sp-005", promptPrefix: "Они", promptSuffix: "к буйку и вернутся.", answers: ["сплавают"] },
        { id: "fut-sp-006", promptPrefix: "Ты", promptSuffix: "со мной к скале и обратно?", answers: ["сплаваешь"] },
        { id: "fut-sp-007", promptPrefix: "Дети", promptSuffix: "в море перед ужином.", answers: ["поплавают"] },
        { id: "fut-sp-008", promptPrefix: "Я", promptSuffix: "к лодке и привяжу верёвку.", answers: ["сплаваю"] },
        { id: "fut-sp-009", promptPrefix: "Лена", promptSuffix: "в бассейне для здоровья.", answers: ["поплавает"] },
        { id: "fut-sp-010", promptPrefix: "", promptSuffix: "на тот берег — там удобнее.", answers: ["Сплавай"] },
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
        title.textContent = `Esercizio ${index + 1} di ${TOTAL_CARDS}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';
        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container fut-sp-04-card';
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
                    <p class="quiz-instruction">Scrivi la forma corretta del futuro</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix} <input type="text" class="quiz-input" data-index="${i - MATCH_END}"> ${item.promptSuffix}</div>
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">VERIFICA</button></div>
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
        container.querySelectorAll('.fut-sp-04-card').forEach(card => {
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
                const card = this.closest('.fut-sp-04-card');
                const idx = parseInt(card.dataset.index) - MATCH_END;
                const item = quizData[idx];
                const input = card.querySelector('.quiz-input');
                const fb = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect = item.answers.some(ans => userAnswer === ans);
                if (isCorrect) {
                    input.classList.remove('incorrect'); input.classList.add('correct');
                    input.disabled = true; this.disabled = true;
                    fb.textContent = 'Правильно!'; fb.className = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct'); input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.'; fb.className = 'quiz-feedback incorrect';
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
        container.querySelectorAll('.fut-sp-04-card').forEach((c, i) => { c.classList.toggle('visible', i === idx); c.hidden = (i !== idx); });
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
    'panel-fut-sp-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-sp-01',    exercises: p1exercises }),
    'panel-fut-sp-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-sp-05',    exercises: p5exercises }),
    'panel-fut-sp-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-fut-sp-06',    exercises: p6exercises }),
    'panel-fut-sp-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sp-02', cards: p2cards }),
    'panel-fut-sp-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sp-03', cards: p3cards }),
    'panel-fut-sp-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sp-07', cards: p7cards }),
    'panel-fut-sp-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sp-08', cards: p8cards }),
    'panel-fut-sp-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sp-09', cards: p9cards }),
    'panel-fut-sp-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-fut-sp-10', cards: p10cards }),
    'panel-fut-sp-04':  () => initPanel4(),
};

initPanelManager({ initializers, enableAccessControl: true });
