import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// MOTO PER LUOGO — ЧЕРЕЗ + accusativo · ПО + dativo
// Panel prefix: mpl
// ============================================================

// ============================================================
// PANEL 1 — public · Drag & Drop · Mix ЧЕРЕЗ / ПО
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Мы шли {{1}} лесу три часа — дороги не было.",
        words: ["по", "через", "в"],
        correctAnswers: { 1: "по" }
        // по лесу = camminare nel bosco (movimento interno/diffuso)
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Мы прошли {{1}} лес за час и вышли на другую сторону.",
        words: ["через", "по", "в"],
        correctAnswers: { 1: "через" }
        // через лес = attraversare il bosco (da un lato all'altro)
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Она гуляла {{1}} парку и слушала музыку.",
        words: ["по", "через", "в"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Он перебежал {{1}} дорогу на красный свет.",
        words: ["через", "по", "на"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Мы ехали {{1}} городу два часа в пробке.",
        words: ["по", "через", "в"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Поезд прошёл {{1}} тоннель за три минуты.",
        words: ["через", "по", "в"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Они шли {{1}} берегу реки и разговаривали.",
        words: ["по", "через", "у"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Мы пересекли {{1}} границу ночью.",
        words: ["через", "по", "на"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Он шёл {{1}} коридору к выходу.",
        words: ["по", "через", "в"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta.",
        text: "Машина медленно проехала {{1}} мост.",
        words: ["через", "по", "на"],
        correctAnswers: { 1: "через" }
    },
];

// ============================================================
// PANEL 5 — student · Drag & Drop · Solo ЧЕРЕЗ
// ============================================================
const p5exercises = [
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Мы прошли {{1}} весь парк насквозь.",
        words: ["через", "по", "в"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Он перешёл {{1}} дорогу у светофора.",
        words: ["через", "по", "на"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Поезд едет {{1}} горы в длинном тоннеле.",
        words: ["через", "по", "в"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Мы переплыли {{1}} реку за двадцать минут.",
        words: ["через", "по", "на"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Она прошла {{1}} толпу и добралась до выхода.",
        words: ["через", "по", "в"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Мы въехали {{1}} открытые ворота во двор.",
        words: ["через", "по", "на"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Они пересекли {{1}} границу ночью без остановок.",
        words: ["через", "по", "на"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Свет проходит {{1}} стекло и освещает комнату.",
        words: ["через", "по", "в"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Мы прошли {{1}} весь город пешком.",
        words: ["через", "по", "в"],
        correctAnswers: { 1: "через" }
    },
    {
        instruction: "Scegli la preposizione corretta (attraversare → ЧЕРЕЗ).",
        text: "Он перепрыгнул {{1}} забор одним прыжком.",
        words: ["через", "по", "над"],
        correctAnswers: { 1: "через" }
    },
];

// ============================================================
// PANEL 6 — paid · Drag & Drop · Solo ПО
// ============================================================
const p6exercises = [
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Мы гуляли {{1}} парку весь вечер.",
        words: ["по", "через", "в"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Они шли {{1}} улице и громко смеялись.",
        words: ["по", "через", "на"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Дети бегали {{1}} всему двору.",
        words: ["по", "через", "в"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Мы ехали {{1}} набережной и любовались закатом.",
        words: ["по", "через", "на"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Он медленно шёл {{1}} коридору.",
        words: ["по", "через", "в"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Туристы ходили {{1}} музею три часа.",
        words: ["по", "через", "в"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Мы плыли {{1}} реке на лодке.",
        words: ["по", "через", "на"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Она прогуливалась {{1}} берегу моря.",
        words: ["по", "через", "у"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Мы ехали {{1}} шоссе без остановок.",
        words: ["по", "через", "на"],
        correctAnswers: { 1: "по" }
    },
    {
        instruction: "Scegli la preposizione corretta (lungo/dentro → ПО).",
        text: "Дети ходят {{1}} всему дому и ищут кота.",
        words: ["по", "через", "в"],
        correctAnswers: { 1: "по" }
    },
];

// ============================================================
// PANEL 2 — public · Flashcard · Mix ЧЕРЕЗ / ПО
// ============================================================
const p2cards = [
    { front: "через мост", back: "attraverso il ponte (ЧЕРЕЗ + accusativo)" },
    { front: "по улице", back: "lungo la strada (ПО + dativo)" },
    { front: "через лес", back: "attraversare il bosco da parte a parte" },
    { front: "по лесу", back: "camminare nel bosco (senza meta precisa)" },
    { front: "через границу", back: "attraversare il confine" },
    { front: "по берегу", back: "lungo la riva" },
    { front: "через тоннель", back: "attraverso il tunnel" },
    { front: "по коридору", back: "lungo il corridoio" },
    { front: "через дорогу", back: "attraversare la strada" },
    { front: "по городу", back: "per la città (girare, spostarsi)" },
];

// ============================================================
// PANEL 3 — public · Flashcard · Contrasto ЧЕРЕЗ vs ПО
// ============================================================
const p3cards = [
    { front: "ЧЕРЕЗ = ?", back: "attraversare da un lato all'altro (+ accusativo)" },
    { front: "ПО = ?", back: "muoversi lungo o all'interno di (+ dativo)" },
    { front: "через лес", back: "attraversare il bosco (entrare da un lato, uscire dall'altro)" },
    { front: "по лесу", back: "passeggiare nel bosco (movimento interno, non direzionale)" },
    { front: "через парк", back: "tagliare il parco (percorso diretto da A a B)" },
    { front: "по парку", back: "girare per il parco (passeggio, esplorazione)" },
    { front: "через реку", back: "attraversare il fiume (da sponda a sponda)" },
    { front: "по реке", back: "lungo il fiume (navigare, camminare sulla riva)" },
    { front: "через город", back: "attraversare la città (da un capo all'altro)" },
    { front: "по городу", back: "per la città (girare, spostarsi senza meta fissa)" },
];

// ============================================================
// PANEL 7 — student · Flashcard · ЧЕРЕЗ + accusativo
// ============================================================
const p7cards = [
    { front: "через + лес", back: "через лес" },
    { front: "через + мост", back: "через мост" },
    { front: "через + дорога", back: "через дорогу" },
    { front: "через + площадь", back: "через площадь" },
    { front: "через + тоннель", back: "через тоннель" },
    { front: "через + граница", back: "через границу" },
    { front: "через + река", back: "через реку" },
    { front: "через + двор", back: "через двор" },
    { front: "через + город", back: "через город" },
    { front: "через + парк", back: "через парк" },
];

// ============================================================
// PANEL 8 — paid · Flashcard · ПО + dativo
// ============================================================
const p8cards = [
    { front: "по + улица", back: "по улице" },
    { front: "по + парк", back: "по парку" },
    { front: "по + лес", back: "по лесу" },
    { front: "по + берег", back: "по берегу" },
    { front: "по + город", back: "по городу" },
    { front: "по + коридор", back: "по коридору" },
    { front: "по + набережная", back: "по набережной" },
    { front: "по + горы", back: "по горам" },
    { front: "по + дорога", back: "по дороге" },
    { front: "по + поле", back: "по полю" },
];

// ============================================================
// PANEL 9 — student · Flashcard · Consolidamento mix
// ============================================================
const p9cards = [
    { front: "Он прошёл через мост", back: "attraversare il ponte (ЧЕРЕЗ)" },
    { front: "Мы шли по мосту", back: "camminare sul ponte (ПО)" },
    { front: "Прошли через лес", back: "traversato il bosco (da parte a parte)" },
    { front: "Гуляли по лесу", back: "passeggiato nel bosco (wandering)" },
    { front: "Проехали через город", back: "attraversato la città (in transito)" },
    { front: "Ехали по городу", back: "girato per la città (spostandosi)" },
    { front: "Переплыли через реку", back: "attraversato il fiume a nuoto" },
    { front: "Плыли по реке", back: "navigato lungo il fiume" },
    { front: "Перебежал через дорогу", back: "attraversato di corsa la strada" },
    { front: "Бежал по дороге", back: "correva lungo la strada" },
];

// ============================================================
// PANEL 10 — paid · Flashcard · Consolidamento avanzato
// ============================================================
const p10cards = [
    { front: "Поезд едет через тоннель", back: "ЧЕРЕЗ: passa attraverso il tunnel" },
    { front: "Едем по шоссе", back: "ПО: viaggiamo lungo l'autostrada" },
    { front: "Мы прошли через границу", back: "ЧЕРЕЗ: abbiamo attraversato il confine" },
    { front: "Туристы ходили по музею", back: "ПО: i turisti giravano per il museo" },
    { front: "Перепрыгнул через забор", back: "ЧЕРЕЗ: saltato oltre la recinzione" },
    { front: "Дети бегают по двору", back: "ПО: i bambini corrono nel cortile" },
    { front: "Свет идёт через стекло", back: "ЧЕРЕЗ: la luce passa attraverso il vetro" },
    { front: "Мы плыли по озеру", back: "ПО: navigavamo sul lago" },
    { front: "Прошли через весь парк", back: "ЧЕРЕЗ: attraversato tutto il parco" },
    { front: "Гуляли по набережной", back: "ПО: passeggiata lungo il lungofiume" },
];

// ============================================================
// PANEL 4 — public · Mixed Quiz (MC + Match + Write)
// ============================================================
function initPanel4Mpl() {
    const panel = document.getElementById('panel-mpl-04');
    if (!panel) return;

    const container = panel.querySelector('#mpl-04-cards-container');
    const prevBtn   = panel.querySelector('#mpl-04-deck-prev');
    const nextBtn   = panel.querySelector('#mpl-04-deck-next');
    const counterEl = panel.querySelector('#mpl-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Мы шли ___ лесу три часа — дороги не было.", options: ["по", "через", "в"], answer: "по" },
        { question: "Мы прошли ___ лес за час и вышли на другую сторону.", options: ["через", "по", "в"], answer: "через" },
        { question: "Она гуляла ___ парку и слушала музыку.", options: ["по", "через", "в"], answer: "по" },
        { question: "Он перебежал ___ дорогу на красный свет.", options: ["через", "по", "на"], answer: "через" },
        { question: "Мы ехали ___ городу два часа в пробке.", options: ["по", "через", "в"], answer: "по" },
        { question: "Поезд прошёл ___ тоннель за три минуты.", options: ["через", "по", "в"], answer: "через" },
        { question: "Они шли ___ берегу реки и разговаривали.", options: ["по", "через", "у"], answer: "по" },
        { question: "Мы пересекли ___ границу ночью.", options: ["через", "по", "на"], answer: "через" },
        { question: "Он шёл ___ коридору к выходу.", options: ["по", "через", "в"], answer: "по" },
        { question: "Машина медленно проехала ___ мост.", options: ["через", "по", "на"], answer: "через" },
    ];

    const matchPairs = [
        { left: "через мост", right: "attraversare il ponte" },
        { left: "по улице", right: "lungo la strada" },
        { left: "через лес", right: "da un lato all'altro del bosco" },
        { left: "по лесу", right: "passeggiare nel bosco" },
        { left: "через границу", right: "attraversare il confine" },
        { left: "по берегу", right: "lungo la riva" },
        { left: "через тоннель", right: "attraverso il tunnel" },
        { left: "по коридору", right: "lungo il corridoio" },
        { left: "через дорогу", right: "attraversare la strada" },
        { left: "по городу", right: "girare per la città" },
    ];

    const quizData = [
        { id: "mpl-001", promptPrefix: "Мы прошли", promptSuffix: "весь парк насквозь.", answers: ["через"] },
        { id: "mpl-002", promptPrefix: "Она гуляла", promptSuffix: "парку весь вечер.", answers: ["по"] },
        { id: "mpl-003", promptPrefix: "Он перешёл", promptSuffix: "дорогу у светофора.", answers: ["через"] },
        { id: "mpl-004", promptPrefix: "Дети бегали", promptSuffix: "всему двору.", answers: ["по"] },
        { id: "mpl-005", promptPrefix: "Поезд едет", promptSuffix: "горы в тоннеле.", answers: ["через"] },
        { id: "mpl-006", promptPrefix: "Мы плыли", promptSuffix: "реке на лодке.", answers: ["по"] },
        { id: "mpl-007", promptPrefix: "Они пересекли", promptSuffix: "границу ночью.", answers: ["через"] },
        { id: "mpl-008", promptPrefix: "Туристы ходили", promptSuffix: "музею три часа.", answers: ["по"] },
        { id: "mpl-009", promptPrefix: "Свет проходит", promptSuffix: "стекло.", answers: ["через"] },
        { id: "mpl-010", promptPrefix: "Мы ехали", promptSuffix: "набережной и смотрели на закат.", answers: ["по"] },
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
        title.textContent = `Exercise ${index + 1} of ${TOTAL_CARDS}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';
        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container mpl-04-card';
            card.dataset.index = i;
            if (i === 0) card.classList.add('visible');
            card.hidden = (i !== 0);

            if (i < MC_END) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) => `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`).join('');
                const questionText = item.question.replace('___', `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`);
                card.innerHTML = `
                    <div class="instruction">Completa la frase scegliendo la preposizione corretta</div>
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
                    <h3 class="quiz-title">Scrivi</h3>
                    <p class="quiz-instruction">Scrivi la preposizione corretta (через o по)</p>
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
        container.querySelectorAll('.mpl-04-card').forEach(card => {
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
                const card = this.closest('.mpl-04-card');
                const idx = parseInt(card.dataset.index) - MATCH_END;
                const item = quizData[idx];
                const input = card.querySelector('.quiz-input');
                const fb = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect = item.answers.some(ans => userAnswer.toLowerCase() === ans.toLowerCase());
                if (isCorrect) {
                    input.classList.remove('incorrect'); input.classList.add('correct');
                    input.disabled = true; this.disabled = true;
                    fb.textContent = 'Правильно!'; fb.className = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct'); input.classList.add('incorrect');
                    fb.textContent = `Неправильно. Risposta: ${item.answers[0]}`; fb.className = 'quiz-feedback incorrect';
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
        container.querySelectorAll('.mpl-04-card').forEach((c, i) => { c.classList.toggle('visible', i === idx); c.hidden = (i !== idx); });
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
// INIT
// ============================================================
initPanelManager({
    initializers: {
        'panel-mpl-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mpl-01',    exercises: p1exercises }),
        'panel-mpl-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mpl-05',    exercises: p5exercises }),
        'panel-mpl-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mpl-06',    exercises: p6exercises }),
        'panel-mpl-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-02', cards: p2cards }),
        'panel-mpl-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-03', cards: p3cards }),
        'panel-mpl-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-07', cards: p7cards }),
        'panel-mpl-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-08', cards: p8cards }),
        'panel-mpl-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-09', cards: p9cards }),
        'panel-mpl-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-10', cards: p10cards }),
        'panel-mpl-04':  () => initPanel4Mpl(),
    },
    enableAccessControl: true,
});
