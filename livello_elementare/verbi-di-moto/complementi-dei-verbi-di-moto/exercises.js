import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — public · D&D · mix tutti e tre i tipi
// ============================================================
const p1exercises = [
    { instruction: "Scegli la preposizione corretta.", text: "Каждое утро он ходит гулять {{1}} реки.",                                          words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento lungo il bordo di un elemento naturale. «Вдоль» + genitivo: река → реки." },
    { instruction: "Scegli la preposizione corretta.", text: "Ходим {{1}} магазинам, уже полдня ходим, мне надоело.",                           words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento all'interno di uno spazio o tra più luoghi. «По» + dativo plurale: магазины → магазинам." },
    { instruction: "Scegli la preposizione corretta.", text: "Друзья идут {{1}} дороги — машин нет, тихо.",                                      words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento parallelo al bordo di qualcosa. «Вдоль» + genitivo: дорога → дороги." },
    { instruction: "Scegli la preposizione corretta.", text: "Туристы идут {{1}} центру и ищут кафе.",                                           words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento all'interno di un'area. «По» + dativo: центр → центру." },
    { instruction: "Scegli la preposizione corretta.", text: "Мы ходим {{1}} рынку, ищем липовый мёд.",                                          words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento all'interno di uno spazio. «По» + dativo: рынок → рынку." },
    { instruction: "Scegli la preposizione corretta.", text: "Иди {{1}} синего здания до перекрёстка.",                                          words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento parallelo a un edificio. «Вдоль» + genitivo: синее здание → синего здания." },
    { instruction: "Scegli la preposizione corretta.", text: "Она ходит {{1}} пляжу и плачет, потому что они с Димой поругались.",               words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento su una superficie aperta. «По» + dativo: пляж → пляжу." },
    { instruction: "Scegli la preposizione corretta.", text: "Дима ходит {{1}} супермаркету и покупает продукты по списку.",                     words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento all'interno di uno spazio chiuso. «По» + dativo: супермаркет → супермаркету." },
    { instruction: "Scegli la preposizione corretta.", text: "Иди {{1}} улицы до светофора, там повернёшь.",                                     words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento lungo il bordo di una strada. «Вдоль» + genitivo: улица → улицы." },
    { instruction: "Scegli la preposizione corretta.", text: "Идёт {{1}} моря и любуется закатом.",                                              words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento lungo il bordo del mare. «Вдоль» + genitivo: море → моря." },
];

// ============================================================
// PANEL 5 — paid · D&D · solo moto a luogo
// ============================================================
const p5exercises = [
    { instruction: "Scegli la preposizione corretta.", text: "Ходим {{1}} магазинам, уже полдня ходим, мне надоело.",       words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Туристы идут {{1}} центру и ищут кафе.",                      words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Мы ходим {{1}} рынку, ищем липовый мёд.",                     words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Каждое утро он ходит гулять {{1}} реки.",                     words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Иди {{1}} улицы до светофора, там повернёшь.",                words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Они идут {{1}} тропинке к озеру.",                            words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она идёт {{1}} парку и слушает музыку.",                      words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Иди {{1}} двору до второго подъезда.",                        words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Катя и Дима ходят гулять {{1}} набережной каждый вечер.",    words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Лена идёт {{1}} моря и любуется закатом.",                   words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
];

// ============================================================
// PANEL 6 — paid · D&D · solo moto per luogo
// ============================================================
const p6exercises = [
    { instruction: "Scegli la preposizione corretta.", text: "Мы идём {{1}} городу и ищем где пообедать.",                   words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Каждое утро он ходит гулять {{1}} реки.",                      words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Группа туристов идёт {{1}} площади.",                          words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Они идут {{1}} тропинке к озеру.",                             words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Коля идёт {{1}} дороге домой и заходит купить продукты.",      words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Мы идём {{1}} канала в сторону Петроградки.",                  words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она идёт {{1}} берега и собирает ракушки.",                    words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Туристы ходят {{1}} центру в поисках скамейки и тени.",        words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Катя и Дима ходят гулять {{1}} набережной каждый вечер.",      words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Я никогда не хожу {{1}} кладбища.",                            words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
];

// ============================================================
// PANEL 2 — public · Flashcard · moto per luogo — forma del caso
// ============================================================
const p2cards = [
    { front: "по + рынок",          back: "по рынку",           explanation: "«Рынок» = mercato. «По» + dativo, 2a decl.: рынок → рынку." },
    { front: "вдоль + река",        back: "вдоль реки",         explanation: "«Река» = fiume. «Вдоль» + genitivo, 1a decl.: река → реки." },
    { front: "по + магазины",       back: "по магазинам",       explanation: "«Магазины» = negozi. «По» + dativo plurale: магазины → магазинам." },
    { front: "вдоль + канал",       back: "вдоль канала",       explanation: "«Канал» = canale. «Вдоль» + genitivo, 2a decl.: канал → канала." },
    { front: "по + тропинка",       back: "по тропинке",        explanation: "«Тропинка» = sentiero. «По» + dativo, 1a decl.: тропинка → тропинке." },
    { front: "по + дом",            back: "по дому",            explanation: "«Дом» = casa. «По» + dativo, 2a decl.: дом → дому. Ходить по дому = camminare per casa (essere in ansia)." },
    { front: "вдоль + озеро",       back: "вдоль озера",        explanation: "«Озеро» = lago. «Вдоль» + genitivo, 2a decl. neutro: озеро → озера." },
    { front: "по + аллея",          back: "по аллее",           explanation: "«Аллея» = viale alberato. «По» + dativo, 1a decl.: аллея → аллее." },
    { front: "вдоль + магазины",    back: "вдоль магазинов",    explanation: "«Магазины» = negozi. «Вдоль» + genitivo plurale: магазины → магазинов." },
    { front: "вдоль + набережная",  back: "вдоль набережной",   explanation: "«Набережная» = lungofiume. «Вдоль» + genitivo, decl. aggettivale femm.: набережная → набережной." },
];

// ============================================================
// PANEL 7 — paid · Flashcard · moto per luogo · по/вдоль
// ============================================================
const p7cards = [
    { front: "Она идёт ___ (парк) и слушает музыку.",                    back: "Она идёт по парку и слушает музыку." },
    { front: "Дима ходит ___ (супермаркет) и покупает продукты.",        back: "Дима ходит по супермаркету и покупает продукты." },
    { front: "Группа туристов идёт ___ (площадь).",                      back: "Группа туристов идёт по площади." },
    { front: "Она идёт ___ (берег) и собирает ракушки.",                 back: "Она идёт вдоль берега и собирает ракушки." },
    { front: "Друзья идут ___ (дорога) — машин нет, тихо.",              back: "Друзья идут вдоль дороги — машин нет, тихо." },
    { front: "Они идут ___ (набережная).",                               back: "Они идут вдоль набережной." },
    { front: "Катя ходит ___ (квартира), не может успокоиться.",         back: "Катя ходит по квартире, не может успокоиться." },
    { front: "Он идёт ___ (коридор) в конец здания.",                   back: "Он идёт по коридору в конец здания." },
    { front: "Мы идём ___ (поезд) и ищем свой вагон.",                  back: "Мы идём вдоль поезда и ищем свой вагон." },
    { front: "Они идут ___ (аллея) старинного парка.",                   back: "Они идут вдоль аллеи старинного парка." },
];

// ============================================================
// PANEL 8 — paid · Flashcard · moto per luogo · по/вдоль
// ============================================================
const p8cards = [
    { front: "Иди ___ (двор) до второго подъезда.",                          back: "Иди по двору до второго подъезда." },
    { front: "Лена и Миша идут ___ (тропинка) к озеру.",                     back: "Лена и Миша идут по тропинке к озеру." },
    { front: "Мы идём ___ (канал) в сторону Петроградки.",                   back: "Мы идём вдоль канала в сторону Петроградки." },
    { front: "Иди ___ (улица) до светофора, там повернёшь.",                 back: "Иди вдоль улицы до светофора, там повернёшь." },
    { front: "Я никогда не хожу ___ (кладбище).",                            back: "Я никогда не хожу вдоль кладбища." },
    { front: "Маша и Коля ходят ___ (ярмарка) и ищут подарки.",              back: "Маша и Коля ходят по ярмарке и ищут подарки." },
    { front: "Нужно подняться ___ (лестница) на третий этаж.",               back: "Нужно подняться по лестнице на третий этаж." },
    { front: "Школьники ходят ___ (музей) и слушают экскурсовода.",          back: "Школьники ходят по музею и слушают экскурсовода." },
    { front: "Антон идёт ___ (стена) к выходу.",                             back: "Антон идёт вдоль стены к выходу." },
    { front: "Она идёт ___ (забор) и ищет вход.",                            back: "Она идёт вдоль забора и ищет вход." },
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
        'panel-cdm-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-02', cards: p2cards }),
        'panel-cdm-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-07', cards: p7cards, quizByPrep: true }),
        'panel-cdm-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-08', cards: p8cards, quizByPrep: true }),
        'panel-cdm-03': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-03', cards: p3cards, quizByPrep: true }),
        'panel-cdm-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-09', cards: p9cards, quizByPrep: true }),
        'panel-cdm-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-cdm-10', cards: p10cards, quizByPrep: true }),
        'panel-cdm-04': () => initPanel4Cdm(),
    },
    enableAccessControl: true,
});
