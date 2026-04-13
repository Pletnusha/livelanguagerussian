import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — public · D&D · mix tutti e tre i tipi
// ============================================================
const p1exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы ходим {{1}}, ищем свежий мёд.", words: ["по рынка", "по рынком", "по рынку"], correctAnswers: { 1: "по рынку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}, меня ждут.", words: ["на работе", "в работу", "на работу"], correctAnswers: { 1: "на работу" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы едем {{1}}, там всё купили.", words: ["в магазин", "из магазин", "из магазина"], correctAnswers: { 1: "из магазина" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она идёт {{1}} и слушает музыку.", words: ["по улицу", "в улицу", "по улице"], correctAnswers: { 1: "по улице" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В субботу едем {{1}}.", words: ["к родителей", "к родителям", "на родителей"], correctAnswers: { 1: "к родителям" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они вернулись {{1}}, очень устали.", words: ["из гостях", "из гостям", "из гостей"], correctAnswers: { 1: "из гостей" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она идёт {{1}}, там хорошие цены.", words: ["в магазине", "на магазин", "в магазин"], correctAnswers: { 1: "в магазин" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Иду {{1}}, мы с ней поговорили.", words: ["от подругой", "к подруге", "от подруги"], correctAnswers: { 1: "от подруги" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Дети бегают {{1}} — никак не остановить.", words: ["в двор", "по двору", "по двор"], correctAnswers: { 1: "по двору" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Он идёт {{1}}, очень устал.", words: ["на работу", "с работы", "с работе"], correctAnswers: { 1: "с работы" } },
];

// ============================================================
// PANEL 5 — paid · D&D · solo moto a luogo
// ============================================================
const p5exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы идём {{1}} сегодня вечером.", words: ["на концерта", "на концерте", "на концерт"], correctAnswers: { 1: "на концерт" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она ходит {{1}} каждую неделю.", words: ["на выставки", "на выставках", "на выставкам"], correctAnswers: { 1: "на выставки" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Завтра утром мы идём {{1}}.", words: ["на пляже", "на пляж", "на пляжа"], correctAnswers: { 1: "на пляж" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они всегда по утрам ходят {{1}}.", words: ["на пробежки", "на пробежку", "на пробежке"], correctAnswers: { 1: "на пробежку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В понедельник мы идём {{1}}.", words: ["на презентацией", "на презентации", "на презентацию"], correctAnswers: { 1: "на презентацию" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Он всегда ходит {{1}} по вторникам.", words: ["на лекциях", "на лекций", "на лекции"], correctAnswers: { 1: "на лекции" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Иду {{1}}, увидимся позже.", words: ["на тренировкой", "на тренировке", "на тренировку"], correctAnswers: { 1: "на тренировку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы идёте {{1}}?", words: ["на дня рождения", "на день рождения", "на дне рождения"], correctAnswers: { 1: "на день рождения" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В воскресенье едем {{1}}.", words: ["к родителях", "к родителей", "к родителям"], correctAnswers: { 1: "к родителям" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты уже едешь {{1}}?", words: ["к нами", "к нам", "к нас"], correctAnswers: { 1: "к нам" } },
];

// ============================================================
// PANEL 6 — paid · D&D · solo moto per luogo
// ============================================================
const p6exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Гуляем {{1}} — красиво, тихо.", words: ["по центра", "по центром", "по центру"], correctAnswers: { 1: "по центру" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Он шёл {{1}} и думал о своём.", words: ["по дорогу", "по дороге", "по дорогой"], correctAnswers: { 1: "по дороге" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы весь день ходили {{1}} — ноги устали.", words: ["по города", "по городом", "по городу"], correctAnswers: { 1: "по городу" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они шли {{1}} молча, час, не меньше.", words: ["по лесу", "по леса", "по лесом"], correctAnswers: { 1: "по лесу" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она ходит {{1}} каждое утро.", words: ["по пляжем", "по пляжа", "по пляжу"], correctAnswers: { 1: "по пляжу" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Дети бегали {{1}} — не догнать.", words: ["по парка", "по парком", "по парку"], correctAnswers: { 1: "по парку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы ходим {{1}} уже полчаса — ничего не купили.", words: ["по магазинам", "по магазинов", "по магазинах"], correctAnswers: { 1: "по магазинам" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она толкает тележку {{1}} и смотрит в список.", words: ["по гипермаркетом", "по гипермаркету", "по гипермаркета"], correctAnswers: { 1: "по гипермаркету" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Иди {{1}} — там меньше машин.", words: ["по улицей", "по улице", "по улицу"], correctAnswers: { 1: "по улице" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ходим {{1}} — нигде нет липового мёда.", words: ["по рынком", "по рынка", "по рынку"], correctAnswers: { 1: "по рынку" } },
];

// ============================================================
// PANEL 2 — public · D&D · moto a luogo — forma del caso
// ============================================================
const p2exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду в {{1}}, нужно купить хлеб.", words: ["магазине", "магазина", "магазин"], correctAnswers: { 1: "магазин" }, explanation: "в + accusativo → магазин (movimento verso un luogo)" },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вечером едем к {{1}}.", words: ["другу", "друга", "другом"], correctAnswers: { 1: "другу" }, explanation: "к + dativo → другу" },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она идёт на {{1}} в восемь утра.", words: ["работой", "работе", "работу"], correctAnswers: { 1: "работу" }, explanation: "на + accusativo → работу (movimento verso un luogo)" },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она идёт к {{1}}, плохо себя чувствует.", words: ["врача", "врачу", "врачом"], correctAnswers: { 1: "врачу" }, explanation: "к + dativo → врачу" },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы идём в {{1}} сегодня вечером.", words: ["ресторан", "ресторане", "ресторана"], correctAnswers: { 1: "ресторан" }, explanation: "в + accusativo → ресторан (movimento verso un luogo)" },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы едем на {{1}} в выходные.", words: ["даче", "дачей", "дачу"], correctAnswers: { 1: "дачу" }, explanation: "на + accusativo → дачу (movimento verso un luogo)" },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В воскресенье едем к {{1}}.", words: ["бабушки", "бабушке", "бабушкой"], correctAnswers: { 1: "бабушке" }, explanation: "к + dativo → бабушке" },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они летят в {{1}} на каникулы.", words: ["Италии", "Италией", "Италию"], correctAnswers: { 1: "Италию" }, explanation: "в + accusativo → Италию (movimento verso un luogo)" },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь на {{1}} сегодня?", words: ["концерта", "концерт", "концерте"], correctAnswers: { 1: "концерт" }, explanation: "на + accusativo → концерт (movimento verso un luogo)" },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Завтра едем к {{1}} на день рождения.", words: ["подругой", "подруги", "подруге"], correctAnswers: { 1: "подруге" }, explanation: "к + dativo → подруге" },
];

// ============================================================
// PANEL 7 — paid · Flashcard · moto a luogo mix в/на/к
// ============================================================
const p7cards = [
    { front: "Я иду в", back: "бар" },
    { front: "Иду к", back: "врачу" },
    { front: "Мы едем на", back: "вокзал" },
    { front: "Она идёт в", back: "больницу" },
    { front: "Мы едем к", back: "родителям" },
    { front: "Иду на", back: "рынок" },
    { front: "Еду к", back: "сестре" },
    { front: "Я иду на", back: "работу" },
    { front: "Она идёт в", back: "спортзал" },
    { front: "Мы идём в", back: "ресторан" },
];

// ============================================================
// PANEL 8 — paid · Flashcard · mix tutti e tre i tipi
// ============================================================
const p8cards = [
    { front: "Я иду от", back: "сестры" },
    { front: "Мы ходим по", back: "рынку" },
    { front: "Она идёт в", back: "ночной клуб" },
    { front: "Иду с", back: "работы" },
    { front: "Она идёт по", back: "пляжу" },
    { front: "Мы едем к", back: "друзьям" },
    { front: "Он идёт из", back: "спортзала" },
    { front: "Мы идём по", back: "магазинам" },
    { front: "Еду на", back: "дискотеку" },
    { front: "Он вышел из", back: "бара" },
];

// ============================================================
// PANEL 3 — public · Flashcard · ripasso
// ============================================================
const p3cards = [
    { front: "Мы едем на", back: "вокзал" },
    { front: "Он идёт из", back: "спортзала" },
    { front: "Иду по", back: "улице" },
    { front: "Она идёт в", back: "больницу" },
    { front: "Иду с", back: "работы" },
    { front: "Мы едем к", back: "друзьям" },
    { front: "Мы ходим по", back: "центру" },
    { front: "Еду к", back: "сестре" },
    { front: "Он вышел из", back: "бара" },
    { front: "Я иду на", back: "почту" },
];

// ============================================================
// PANEL 9 — paid · Flashcard · dialoghi
// ============================================================
const p9cards = [
    { front: "Ты откуда? — Я от", back: "сестры" },
    { front: "Вы где? — Мы ходим по", back: "рынку" },
    { front: "Куда вы идёте? — Мы идём в", back: "кино" },
    { front: "Где Лена? — Она ходит по", back: "пляжу" },
    { front: "Откуда ты? — Я из", back: "университета" },
    { front: "Вы где? — Мы идём из", back: "гостей" },
    { front: "Я иду по", back: "правой стороне" },
    { front: "Уже полдня ходим по", back: "магазинам" },
    { front: "Куда в субботу? — Мы идём в", back: "кино, потом в ресторан" },
    { front: "Я иду тебе", back: "навстречу" },
];

// ============================================================
// PANEL 10 — paid · Flashcard · livello avanzato
// ============================================================
const p10cards = [
    { front: "Не хотите погулять по", back: "центру" },
    { front: "Уже поздно, мы идём", back: "домой" },
    { front: "Ходим по магазинам, уже полдня ходим, мне", back: "надоело" },
    { front: "Я из Ливерпуля, а ты в", back: "Гонконг" },
    { front: "Я иду по правой стороне, там где", back: "супермаркет" },
    { front: "Откуда ты? — Я из", back: "университета" },
    { front: "Куда? — На семинар, в", back: "библиотеку" },
    { front: "Они с Димой расстались, она ходит и", back: "плачет" },
    { front: "Мы идём из гостей, были у", back: "Кати" },
    { front: "Я иду тебе на", back: "встречу" },
];

// ============================================================
// PANEL 4 — public · Quiz · tutti i tipi (MC + Match + Write)
// ============================================================
function initPanel4Cdm() {
    const panel = document.getElementById('panel-cdm-04');
    if (!panel) return;

    const container = panel.querySelector('#cdm-04-cards-container');
    const prevBtn   = panel.querySelector('#cdm-04-deck-prev');
    const nextBtn   = panel.querySelector('#cdm-04-deck-next');
    const counterEl = panel.querySelector('#cdm-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Я иду ___ работу.",             options: ["в", "на", "к"],        answer: "на" },
        { question: "Мы едем ___ родителям.",        options: ["в", "на", "к"],        answer: "к" },
        { question: "Она идёт ___ магазин.",         options: ["в", "на", "к"],        answer: "в" },
        { question: "Он идёт ___ работы.",           options: ["из", "с", "от"],       answer: "с" },
        { question: "Я иду ___ сестры.",             options: ["из", "с", "от"],       answer: "от" },
        { question: "Мы вернулись ___ гостей.",      options: ["из", "с", "от"],       answer: "из" },
        { question: "Мы ходим ___ рынку.",           options: ["по", "через", "в"],    answer: "по" },
        { question: "Она идёт ___ пляжу.",           options: ["по", "через", "в"],    answer: "по" },
        { question: "Мы едем ___ вокзал.",           options: ["в", "на", "к"],        answer: "на" },
        { question: "Он идёт ___ врачу.",            options: ["в", "на", "к"],        answer: "к" },
    ];

    const matchPairs = [
        { left: "Мы едем к",        right: "родителям" },
        { left: "Иду с",            right: "работы" },
        { left: "Она ходит по",     right: "пляжу" },
        { left: "Я иду в",          right: "бассейн" },
        { left: "Он вышел из",      right: "спортзала" },
        { left: "Мы ходим по",      right: "магазинам" },
        { left: "Еду к",            right: "сестре" },
        { left: "Я иду на",         right: "почту" },
        { left: "Иду от",           right: "врача" },
        { left: "Мы идём в",        right: "ресторан" },
    ];

    const quizData = [
        { id: "cdm-001", promptPrefix: "Я иду к",      promptSuffix: ".",  answers: ["другу"] },
        { id: "cdm-002", promptPrefix: "Мы едем на",   promptSuffix: ".",  answers: ["дачу"] },
        { id: "cdm-003", promptPrefix: "Он идёт из",   promptSuffix: ".",  answers: ["университета"] },
        { id: "cdm-004", promptPrefix: "Мы ходим по",  promptSuffix: ".",  answers: ["центру"] },
        { id: "cdm-005", promptPrefix: "Она едет к",   promptSuffix: ".",  answers: ["родственникам"] },
        { id: "cdm-006", promptPrefix: "Иду с",        promptSuffix: ".",  answers: ["рынка"] },
        { id: "cdm-007", promptPrefix: "Он идёт из",   promptSuffix: ".",  answers: ["офиса"] },
        { id: "cdm-008", promptPrefix: "Мы идём на",   promptSuffix: ".",  answers: ["вокзал"] },
        { id: "cdm-009", promptPrefix: "Она ходит по", promptSuffix: ".",  answers: ["городу"] },
        { id: "cdm-010", promptPrefix: "Еду к",        promptSuffix: ".",  answers: ["друзьям"] },
    ];

    const MC_END    = multipleChoiceData.length;
    const MATCH_END = MC_END + matchPairs.length;
    const TOTAL     = MATCH_END + quizData.length;

    function normalizeInput(str) { return str.trim().replace(/\s+/g, ' '); }

    function ensureCardTitle(card, index) {
        const existing = Array.from(card.children).find(c => c.tagName === 'H1');
        if (existing) {
            if (index < MC_END) existing.classList.add('exercise-counter');
            if (card.firstElementChild !== existing) card.insertBefore(existing, card.firstElementChild);
            return;
        }
        const title = document.createElement('h1');
        title.textContent = `Exercise ${index + 1} of ${TOTAL}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container cdm-04-card';
            card.dataset.index = i;
            card.hidden = (i !== 0);
            if (i === 0) card.classList.add('visible');

            if (i < MC_END) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) =>
                    `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`
                ).join('');
                const questionText = item.question.replace('___',
                    `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`
                );
                card.innerHTML = `
                    <div class="instruction">Scegli la preposizione corretta</div>
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
                const others = matchPairs.filter((_, idx) => idx !== pairIdx)
                    .sort(() => Math.random() - 0.5).slice(0, 2);
                const allPairs = [pair, ...others].sort(() => Math.random() - 0.5);

                let fronts = allPairs.map((p, idx) => ({ text: p.left,  type: 'front', id: idx }));
                let backs  = allPairs.map((p, idx) => ({ text: p.right, type: 'back',  id: idx }));
                fronts.sort(() => Math.random() - 0.5);
                backs.sort(() => Math.random() - 0.5);

                let selCard = null;
                let processing = false;

                const matchContainer = document.createElement('div');
                matchContainer.className = 'fca01-match-container';
                const feedbackEl = document.createElement('p');
                feedbackEl.className = 'fca01-match-feedback';
                const matchGrid = document.createElement('div');
                matchGrid.className = 'fca01-match-grid';
                const colF = document.createElement('div'); colF.className = 'fca01-match-col';
                const colB = document.createElement('div'); colB.className = 'fca01-match-col';
                matchGrid.appendChild(colF);
                matchGrid.appendChild(colB);
                matchContainer.appendChild(feedbackEl);
                matchContainer.appendChild(matchGrid);
                card.appendChild(matchContainer);

                function handleMatch(clicked) {
                    if (processing || clicked.classList.contains('matched')) return;
                    if (clicked === selCard) return;
                    if (!selCard) { selCard = clicked; clicked.classList.add('selected'); return; }
                    if (selCard.dataset.type === clicked.dataset.type) {
                        selCard.classList.remove('selected');
                        selCard = clicked; clicked.classList.add('selected'); return;
                    }
                    const prev = selCard;
                    if (prev.dataset.id === clicked.dataset.id) {
                        prev.classList.add('matched'); clicked.classList.add('matched');
                        feedbackEl.textContent = '✨ Отлично!'; feedbackEl.className = 'fca01-match-feedback correct';
                        selCard = null;
                        setTimeout(() => { feedbackEl.textContent = ''; }, 1000);
                        if (matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length === 0)
                            feedbackEl.textContent = '🎉 ПОБЕДА! 🎉';
                    } else {
                        processing = true;
                        clicked.classList.add('wrong'); prev.classList.add('wrong');
                        feedbackEl.textContent = 'Неверно'; feedbackEl.className = 'fca01-match-feedback wrong';
                        setTimeout(() => {
                            clicked.classList.remove('selected', 'wrong');
                            prev.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = ''; processing = false;
                        }, 800);
                        selCard = null;
                    }
                }

                function makeMatchEl(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card';
                    div.textContent = item.text;
                    div.dataset.id   = item.id;
                    div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatch(div));
                    return div;
                }

                fronts.forEach(item => colF.appendChild(makeMatchEl(item)));
                backs.forEach(item  => colB.appendChild(makeMatchEl(item)));
                ensureCardTitle(card, i);
                const instrEl = document.createElement('div');
                instrEl.className = 'instruction';
                card.insertBefore(instrEl, card.firstElementChild);

            } else {
                const item = quizData[i - MATCH_END];
                card.innerHTML = `
                    <h3 class="quiz-title">Scrivi</h3>
                    <p class="quiz-instruction">Scrivete la parola nella forma corretta</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix} <input type="text" class="quiz-input" data-index="${i - MATCH_END}"> ${item.promptSuffix}</div>
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">Проверить</button></div>
                        <div class="quiz-feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);
                const instrEl = document.createElement('div');
                instrEl.className = 'instruction';
                card.insertBefore(instrEl, card.firstElementChild);
            }

            container.appendChild(card);
        }

        attachHandlers();
    }

    function attachHandlers() {
        container.querySelectorAll('.cdm-04-card').forEach(card => {
            const idx = parseInt(card.dataset.index, 10);
            if (idx >= MC_END) return;

            let checked = false;
            const gaps  = Array.from(card.querySelectorAll('.gap'));
            const words = Array.from(card.querySelectorAll('.word-option'));
            const verifyBtn = card.querySelector('.verify-btn');
            const nBtn      = card.querySelector('.next-btn');
            const feedback  = card.querySelector('.feedback');

            words.forEach(w => {
                w.addEventListener('click', function() {
                    if (this.classList.contains('used') || checked) return;
                    const gap = gaps.find(g => !g.classList.contains('filled'));
                    if (!gap) return;
                    gap.textContent = this.dataset.word;
                    gap.classList.add('filled');
                    gap.dataset.word      = this.dataset.word;
                    gap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });

            gaps.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const w = words.find(x => x.dataset.index === this.dataset.wordIndex);
                    this.textContent = ''; this.classList.remove('filled');
                    delete this.dataset.word; delete this.dataset.wordIndex;
                    if (w) w.classList.remove('used');
                });
            });

            if (nBtn) nBtn.addEventListener('click', () => showCard(currentCard + 1));

            verifyBtn.addEventListener('click', function() {
                checked = true;
                const correct = multipleChoiceData[idx].answer;
                let ok = 0;
                gaps.forEach(gap => {
                    if (gap.dataset.word === correct) { gap.classList.remove('filled'); gap.classList.add('correct'); ok = 1; }
                    else gap.classList.add('incorrect');
                });
                feedback.textContent = ok ? '✓ Правильно!' : `✗ Правильный предлог: ${correct}`;
                feedback.className = `feedback ${ok ? 'correct' : 'wrong'}`;
                verifyBtn.style.display = 'none';
                nBtn.style.display = 'inline-block';
            });
        });

        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card  = this.closest('.cdm-04-card');
                const idx   = parseInt(card.dataset.index) - MATCH_END;
                const item  = quizData[idx];
                const input = card.querySelector('.quiz-input');
                const fb    = card.querySelector('.quiz-feedback');
                const ok    = item.answers.some(a => normalizeInput(input.value) === a);
                if (ok) {
                    input.classList.replace('incorrect', 'correct') || input.classList.add('correct');
                    input.disabled = true; this.disabled = true;
                    fb.textContent = 'Правильно!'; fb.className = 'quiz-feedback correct';
                } else {
                    input.classList.replace('correct', 'incorrect') || input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.'; fb.className = 'quiz-feedback incorrect';
                }
            });
        });

        container.querySelectorAll('.quiz-input').forEach(input => {
            input.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    const btn = input.closest('.quiz-item').querySelector('.quiz-check-btn');
                    if (btn && !btn.disabled) btn.click();
                }
            });
        });
    }

    function showCard(idx) {
        currentCard = idx;
        container.querySelectorAll('.cdm-04-card').forEach((c, i) => {
            c.classList.toggle('visible', i === idx);
            c.hidden = (i !== idx);
        });
        counterEl.textContent = `${idx + 1} / ${TOTAL}`;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === TOTAL - 1);
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0)         showCard(currentCard - 1); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL - 1) showCard(currentCard + 1); });

    buildCards();
    showCard(0);
}

// ============================================================
// INIT
// ============================================================
initPanelManager({
    initializers: {
        'panel-cdm-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-cdm-01', exercises: p1exercises }),
        'panel-cdm-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-cdm-05', exercises: p5exercises }),
        'panel-cdm-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-cdm-06', exercises: p6exercises }),
        'panel-cdm-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-cdm-02', exercises: p2exercises }),
        'panel-cdm-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-07', cards: p7cards, quizByPrep: true }),
        'panel-cdm-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-08', cards: p8cards, quizByPrep: true }),
        'panel-cdm-03': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-03', cards: p3cards, quizByPrep: true }),
        'panel-cdm-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-09', cards: p9cards, quizByPrep: true }),
        'panel-cdm-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-10', cards: p10cards, quizByPrep: true }),
        'panel-cdm-04': () => initPanel4Cdm(),
    },
    enableAccessControl: true,
});
