import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Passato dei verbi specifici:
// БЕЖАТЬ  → бежал / бежала / бежало / бежали  (monodir.: in corsa in quel momento)
// БЕГАТЬ  → бегал / бегала / бегало / бегали  (pluridir.: corsa abituale o senza meta fissa)
// ПЛЫТЬ   → плыл  / плыла  / плыло  / плыли   (monodir.: nuotava in direzione specifica)
// ПЛАВАТЬ → плавал / плавала / плавало / плавали (pluridir.: abitudine o senza meta)
// ЛЕТЕТЬ  → летел / летела / летело / летели   (monodir.: volo in direzione specifica)
// ЛЕТАТЬ  → летал / летала / летало / летали   (pluridir.: abitudine di volare)

// ============================================================
// PANEL 1 — DragDrop · public · Mix tutti i verbi specifici passato
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Он {{1}} в парке каждое утро.",
        words: ["бегал", "бежал", "бегали"],
        correctAnswers: { 1: "бегал" }
        // bегал = abitudine
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Она {{1}} к финишу изо всех сил.",
        words: ["бежала", "бегала", "бежали"],
        correctAnswers: { 1: "бежала" }
        // бежала = in corsa verso la meta
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Он {{1}} в бассейне каждый день.",
        words: ["плавал", "плыл", "плавали"],
        correctAnswers: { 1: "плавал" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Она {{1}} к берегу брассом.",
        words: ["плыла", "плавала", "плыли"],
        correctAnswers: { 1: "плыла" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Он никогда не {{1}} на самолёте.",
        words: ["летал", "летел", "летали"],
        correctAnswers: { 1: "летал" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Самолёт {{1}} над облаками.",
        words: ["летел", "летал", "летели"],
        correctAnswers: { 1: "летел" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Мы {{1}} по берегу моря на рассвете.",
        words: ["бежали", "бегали", "бежал"],
        correctAnswers: { 1: "бежали" }
        // бежали = in corsa verso una direzione
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Они {{1}} на море каждое лето.",
        words: ["плавали", "плыли", "плавал"],
        correctAnswers: { 1: "плавали" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Птицы {{1}} на юг.",
        words: ["летели", "летали", "летел"],
        correctAnswers: { 1: "летели" }
    },
    {
        instruction: "Выбери правильную форму глагола (passato).",
        text: "Она {{1}} каждое утро в парке.",
        words: ["бегала", "бежала", "бегали"],
        correctAnswers: { 1: "бегала" }
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · БЕЖАТЬ vs БЕГАТЬ passato
// ============================================================
const p5exercises = [
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Он {{1}} к остановке — автобус уже уходил!",
        words: ["бежал", "бегал", "бежали"],
        correctAnswers: { 1: "бежал" }
    },
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Она {{1}} в парке каждое утро перед работой.",
        words: ["бегала", "бежала", "бегали"],
        correctAnswers: { 1: "бегала" }
    },
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Они {{1}} к финишу вместе.",
        words: ["бежали", "бегали", "бежал"],
        correctAnswers: { 1: "бежали" }
    },
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Он {{1}} на стадионе часами.",
        words: ["бегал", "бежал", "бегали"],
        correctAnswers: { 1: "бегал" }
    },
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Она {{1}} изо всех сил, но не успела.",
        words: ["бежала", "бегала", "бежали"],
        correctAnswers: { 1: "бежала" }
    },
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Мы {{1}} каждый день по набережной.",
        words: ["бегали", "бежали", "бегал"],
        correctAnswers: { 1: "бегали" }
    },
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Он {{1}} впереди всей группы.",
        words: ["бежал", "бегал", "бежали"],
        correctAnswers: { 1: "бежал" }
    },
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Раньше она {{1}} марафоны.",
        words: ["бегала", "бежала", "бегали"],
        correctAnswers: { 1: "бегала" }
    },
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Дети {{1}} по двору.",
        words: ["бегали", "бежали", "бегал"],
        correctAnswers: { 1: "бегали" }
        // бегали = senza meta precisa, giocavano
    },
    {
        instruction: "Completa con la forma corretta di БЕЖАТЬ o БЕГАТЬ al passato.",
        text: "Он {{1}} по лесу и наслаждался тишиной.",
        words: ["бежал", "бегал", "бежали"],
        correctAnswers: { 1: "бежал" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · ПЛЫТЬ vs ПЛАВАТЬ passato
// ============================================================
const p6exercises = [
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "Он {{1}} к берегу изо всех сил.",
        words: ["плыл", "плавал", "плыли"],
        correctAnswers: { 1: "плыл" }
    },
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "Она {{1}} в море каждое утро.",
        words: ["плавала", "плыла", "плавали"],
        correctAnswers: { 1: "плавала" }
    },
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "Они {{1}} к острову три часа.",
        words: ["плыли", "плавали", "плыл"],
        correctAnswers: { 1: "плыли" }
    },
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "Он {{1}} в бассейне каждый день.",
        words: ["плавал", "плыл", "плавали"],
        correctAnswers: { 1: "плавал" }
    },
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "Она {{1}} брассом, потому что по-другому не умела.",
        words: ["плыла", "плавала", "плыли"],
        correctAnswers: { 1: "плыла" }
    },
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "Корабль {{1}} по тёмному морю.",
        words: ["плыл", "плавал", "плыли"],
        correctAnswers: { 1: "плыл" }
    },
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "В детстве она {{1}} в секции водного поло.",
        words: ["плавала", "плыла", "плавали"],
        correctAnswers: { 1: "плавала" }
    },
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "Мы {{1}} к скале и устали.",
        words: ["плыли", "плавали", "плыл"],
        correctAnswers: { 1: "плыли" }
    },
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "Облака {{1}} по небу.",
        words: ["плыли", "плавали", "плыл"],
        correctAnswers: { 1: "плыли" }
    },
    {
        instruction: "Completa con la forma corretta di ПЛЫТЬ o ПЛАВАТЬ al passato.",
        text: "Он {{1}} хорошо, но в этот раз вода была очень холодной.",
        words: ["плавал", "плыл", "плавали"],
        correctAnswers: { 1: "плавал" }
    },
];

// ============================================================
// PANEL 11 — DragDrop · paid · ЛЕТЕТЬ vs ЛЕТАТЬ passato
// ============================================================
const p11exercises = [
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "Он {{1}} в Рим на конференцию.",
        words: ["летел", "летал", "летели"],
        correctAnswers: { 1: "летел" }
    },
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "Она {{1}} на самолёте несколько раз в год.",
        words: ["летала", "летела", "летали"],
        correctAnswers: { 1: "летала" }
    },
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "Птицы {{1}} на юг.",
        words: ["летели", "летали", "летел"],
        correctAnswers: { 1: "летели" }
    },
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "Он никогда не {{1}} на вертолёте.",
        words: ["летал", "летел", "летали"],
        correctAnswers: { 1: "летал" }
    },
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "Самолёт {{1}} над облаками.",
        words: ["летел", "летал", "летели"],
        correctAnswers: { 1: "летел" }
    },
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "В молодости она {{1}} на параплане.",
        words: ["летала", "летела", "летали"],
        correctAnswers: { 1: "летала" }
    },
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "Они {{1}} бизнес-классом.",
        words: ["летели", "летали", "летел"],
        correctAnswers: { 1: "летели" }
    },
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "Он {{1}} по работе очень часто.",
        words: ["летал", "летел", "летали"],
        correctAnswers: { 1: "летал" }
    },
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "Листья {{1}} по ветру.",
        words: ["летели", "летали", "летел"],
        correctAnswers: { 1: "летели" }
    },
    {
        instruction: "Completa con la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.",
        text: "Она {{1}} в Лондон и вернулась на следующий день.",
        words: ["летала", "летела", "летали"],
        correctAnswers: { 1: "летала" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Он бежал к остановке", back: "автобус уже уходил" },
    { front: "Она бегала каждое утро", back: "в парке перед работой" },
    { front: "Они плыли к острову", back: "три часа" },
    { front: "Он плавал в бассейне", back: "каждый день" },
    { front: "Самолёт летел", back: "над облаками" },
    { front: "Она летала на самолёте", back: "несколько раз в год" },
    { front: "Птицы летели", back: "на юг" },
    { front: "Мы бегали по набережной", back: "каждый вечер" },
    { front: "Корабль плыл", back: "по тёмному морю" },
    { front: "В детстве он никогда не", back: "летал на самолёте" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Она бежала изо всех сил", back: "но не успела" },
    { front: "Раньше он бегал марафоны", back: "каждый год" },
    { front: "Она плыла брассом", back: "потому что по-другому не умела" },
    { front: "В детстве она плавала", back: "в секции водного поло" },
    { front: "Он летел в Рим", back: "на конференцию" },
    { front: "В молодости она летала", back: "на параплане" },
    { front: "Они бежали к финишу", back: "вместе" },
    { front: "Облака плыли", back: "по небу" },
    { front: "Они летели", back: "бизнес-классом" },
    { front: "Дети бегали по двору", back: "до темноты" },
];

// ============================================================
// PANEL 7 — Flashcard · student (ПЛЫТЬ/ПЛАВАТЬ)
// ============================================================
const p7cards = [
    { front: "Он плыл к берегу", back: "изо всех сил" },
    { front: "Она плавала в море", back: "каждое утро" },
    { front: "Мы плыли к скале", back: "и устали" },
    { front: "В прошлом году он плавал", back: "каждый день" },
    { front: "Корабль плыл", back: "без остановок" },
    { front: "Она плавала хорошо", back: "но в этот раз вода была холодной" },
    { front: "Они плыли вместе", back: "и разговаривали" },
    { front: "Он плавал в бассейне", back: "с детства" },
    { front: "Облака плыли", back: "по небу медленно" },
    { front: "Мы плавали на море", back: "каждое лето" },
];

// ============================================================
// PANEL 8 — Flashcard · paid (ЛЕТЕТЬ/ЛЕТАТЬ)
// ============================================================
const p8cards = [
    { front: "Он летел в Рим", back: "на конференцию" },
    { front: "Она летала за границу", back: "несколько раз в год" },
    { front: "Самолёт летел", back: "над облаками" },
    { front: "Он никогда не летал", back: "на вертолёте" },
    { front: "Птицы летели на юг", back: "большой стаей" },
    { front: "В молодости она летала", back: "на параплане" },
    { front: "Они летели домой", back: "после долгой командировки" },
    { front: "Листья летели", back: "по ветру" },
    { front: "Он летал по работе", back: "очень часто" },
    { front: "Она летала в Лондон", back: "и вернулась на следующий день" },
];

// ============================================================
// PANEL 9 — Flashcard · student (БЕЖАТЬ/БЕГАТЬ)
// ============================================================
const p9cards = [
    { front: "Он бежал первым", back: "не оглядываясь" },
    { front: "Она бегала по утрам", back: "даже зимой" },
    { front: "Они бежали к финишу", back: "и кричали" },
    { front: "Он бегал марафоны", back: "несколько лет" },
    { front: "Она бежала через парк", back: "опаздывая на работу" },
    { front: "Мы бегали по стадиону", back: "каждый вечер" },
    { front: "Он бежал так быстро", back: "что я не мог угнаться" },
    { front: "В студенчестве они бегали", back: "каждое утро вместе" },
    { front: "Она бежала к остановке", back: "автобус уже отъезжал" },
    { front: "Дети бегали по двору", back: "целый день" },
];

// ============================================================
// PANEL 10 — Flashcard · paid (Mix tutti e tre)
// ============================================================
const p10cards = [
    { front: "Он бежал к ней", back: "через весь город" },
    { front: "Она плыла к берегу", back: "медленно и устала" },
    { front: "Самолёт летел", back: "ещё два часа" },
    { front: "Мы бегали по лесу", back: "и слушали птиц" },
    { front: "Корабль плыл", back: "всю ночь" },
    { front: "Они летели долго", back: "почти десять часов" },
    { front: "Он бежал не останавливаясь", back: "километров пять" },
    { front: "Она плавала в открытой воде", back: "каждое лето" },
    { front: "Птицы летели на юг", back: "уже в октябре" },
    { front: "Дети бегали, плавали", back: "и были счастливы" },
];


// ============================================================
// PANEL 4 — Mixed Quiz · public
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-past-sp-04');
    if (!panel) return;

    const container = panel.querySelector('#past-sp-04-cards-container');
    const prevBtn   = panel.querySelector('#past-sp-04-deck-prev');
    const nextBtn   = panel.querySelector('#past-sp-04-deck-next');
    const counterEl = panel.querySelector('#past-sp-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Он ___ к остановке — автобус уже уходил!", options: ["бежал", "бегал", "бежали"], answer: "бежал" },
        { question: "Она ___ в парке каждое утро.", options: ["бегала", "бежала", "бегали"], answer: "бегала" },
        { question: "Корабль ___ по тёмному морю.", options: ["плыл", "плавал", "плыли"], answer: "плыл" },
        { question: "В детстве она ___ в секции водного поло.", options: ["плавала", "плыла", "плавали"], answer: "плавала" },
        { question: "Самолёт ___ над облаками.", options: ["летел", "летал", "летели"], answer: "летел" },
        { question: "Он никогда не ___ на вертолёте.", options: ["летал", "летел", "летали"], answer: "летал" },
        { question: "Птицы ___ на юг большой стаей.", options: ["летели", "летали", "летел"], answer: "летели" },
        { question: "Они ___ к финишу вместе.", options: ["бежали", "бегали", "бежал"], answer: "бежали" },
        { question: "Мы ___ на море каждое лето.", options: ["плавали", "плыли", "плавал"], answer: "плавали" },
        { question: "Листья ___ по ветру.", options: ["летели", "летали", "летел"], answer: "летели" },
    ];

    const matchPairs = [
        { left: "Он бежал к остановке", right: "автобус уже уходил" },
        { left: "Она бегала каждое утро", right: "в парке перед работой" },
        { left: "Корабль плыл", right: "по тёмному морю" },
        { left: "Птицы летели", right: "на юг" },
        { left: "Самолёт летел", right: "над облаками" },
        { left: "В детстве она плавала", right: "в секции водного поло" },
        { left: "Они бежали к финишу", right: "вместе" },
        { left: "В молодости она летала", right: "на параплане" },
        { left: "Облака плыли", right: "по небу" },
        { left: "Дети бегали по двору", right: "до темноты" },
    ];

    const quizData = [
        { id: "past-sp-001", promptPrefix: "Она", promptSuffix: "изо всех сил, но не успела.", answers: ["бежала"] },
        { id: "past-sp-002", promptPrefix: "Раньше он", promptSuffix: "каждый день в бассейне.", answers: ["плавал"] },
        { id: "past-sp-003", promptPrefix: "Мы", promptSuffix: "к острову три часа.", answers: ["плыли"] },
        { id: "past-sp-004", promptPrefix: "В детстве она", promptSuffix: "каждое утро в парке.", answers: ["бегала"] },
        { id: "past-sp-005", promptPrefix: "Самолёт", promptSuffix: "над облаками.", answers: ["летел"] },
        { id: "past-sp-006", promptPrefix: "Он никогда не", promptSuffix: "на вертолёте.", answers: ["летал"] },
        { id: "past-sp-007", promptPrefix: "Птицы", promptSuffix: "на юг.", answers: ["летели"] },
        { id: "past-sp-008", promptPrefix: "Он", promptSuffix: "к финишу быстрее всех.", answers: ["бежал"] },
        { id: "past-sp-009", promptPrefix: "Корабль", promptSuffix: "всю ночь.", answers: ["плыл"] },
        { id: "past-sp-010", promptPrefix: "Мы каждое лето", promptSuffix: "на море.", answers: ["плавали"] },
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
            card.className = 'fca01-card-container past-sp-04-card';
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
                    const firstId  = selectedMatchCard.dataset.id;
                    const secondId = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;
                    if (firstId === secondId) {
                        previousCard.classList.add('matched');
                        clickedCard.classList.add('matched');
                        feedbackEl.textContent = '✨ Отлично!';
                        feedbackEl.className = 'fca01-match-feedback correct';
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ''; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = '🎉 ПОБЕДА! 🎉';
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = 'Неверно';
                        feedbackEl.className = 'fca01-match-feedback wrong';
                        setTimeout(() => {
                            clickedCard.classList.remove('selected', 'wrong');
                            previousCard.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = '';
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
                    <h3 class="quiz-title">Scrivi</h3>
                    <p class="quiz-instruction">Scrivete la forma corretta del passato</p>
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
        container.querySelectorAll('.past-sp-04-card').forEach(card => {
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
                const card       = this.closest('.past-sp-04-card');
                const idx        = parseInt(card.dataset.index) - MATCH_END;
                const item       = quizData[idx];
                const input      = card.querySelector('.quiz-input');
                const fb         = card.querySelector('.quiz-feedback');
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
        container.querySelectorAll('.past-sp-04-card').forEach((c, i) => {
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
    'panel-past-sp-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-sp-01',    exercises: p1exercises }),
    'panel-past-sp-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-sp-05',    exercises: p5exercises }),
    'panel-past-sp-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-sp-06',    exercises: p6exercises }),
    'panel-past-sp-11':  () => new DragDropExercise({ rootId: 'ex-dragdrop-past-sp-11',    exercises: p11exercises }),
    'panel-past-sp-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-sp-02', cards: p2cards }),
    'panel-past-sp-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-sp-03', cards: p3cards }),
    'panel-past-sp-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-sp-07', cards: p7cards }),
    'panel-past-sp-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-sp-08', cards: p8cards }),
    'panel-past-sp-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-sp-09', cards: p9cards }),
    'panel-past-sp-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-past-sp-10', cards: p10cards }),
    'panel-past-sp-04':  () => initPanel4(),
};

initPanelManager({ initializers, enableAccessControl: false });
