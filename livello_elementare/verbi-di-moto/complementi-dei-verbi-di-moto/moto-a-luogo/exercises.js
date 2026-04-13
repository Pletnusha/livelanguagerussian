import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — public · Drag & Drop
// ============================================================
const p1exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}.", words: ["на работу", "на работе", "в работу"], correctAnswers: { 1: "на работу" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы идёте утром {{1}}.", words: ["на пляж", "в пляж", "к пляжу"], correctAnswers: { 1: "на пляж" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь {{1}}.", words: ["на концерт", "на концерте", "в концерт"], correctAnswers: { 1: "на концерт" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь сегодня вечером {{1}}.", words: ["к Кате", "в Катю", "на Катю"], correctAnswers: { 1: "к Кате" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Андрей ходит {{1}}.", words: ["на спортзал", "в спортзал", "к спортзалу"], correctAnswers: { 1: "в спортзал" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}, тебе купить что-нибудь?", words: ["на магазин", "в магазин", "к магазину"], correctAnswers: { 1: "в магазин" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В воскресенье едем {{1}}.", words: ["к родителям", "на родителей", "в родителей"], correctAnswers: { 1: "к родителям" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я всегда хожу с бабушкой {{1}}.", words: ["в банк", "на банк", "к банку"], correctAnswers: { 1: "в банк" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В субботу идём с друзьями {{1}}.", words: ["в ресторан", "к ресторану", "на ресторан"], correctAnswers: { 1: "в ресторан" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы в пятницу идём {{1}}.", words: ["к друзьям в гости", "на друзей в гости", "в друзей в гости"], correctAnswers: { 1: "к друзьям в гости" } },
];

// ============================================================
// PANEL 5 — paid · Drag & Drop
// ============================================================
const p5exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы идём {{1}}.", words: ["на концерт", "в концерт", "к концерту"], correctAnswers: { 1: "на концерт" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она ходит {{1}}.", words: ["к выставкам", "на выставки", "в выставки"], correctAnswers: { 1: "на выставки" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Завтра утром мы идём {{1}}.", words: ["в пляж", "к пляжу", "на пляж"], correctAnswers: { 1: "на пляж" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они всегда по утрам ходят {{1}}.", words: ["на пробежку", "в пробежку", "к пробежке"], correctAnswers: { 1: "на пробежку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В понедельник мы идём {{1}}.", words: ["к презентации", "в презентацию", "на презентацию"], correctAnswers: { 1: "на презентацию" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Он всегда ходит {{1}}.", words: ["на лекции", "в лекции", "к лекциям"], correctAnswers: { 1: "на лекции" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я хожу {{1}} два-три раза в неделю.", words: ["к тренировке", "на тренировку", "в тренировку"], correctAnswers: { 1: "на тренировку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы идёте {{1}}?", words: ["на день рождения", "к дню рождения"], correctAnswers: { 1: "на день рождения" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они идут в субботу {{1}}.", words: ["в концерт", "на концерт", "к концерту"], correctAnswers: { 1: "на концерт" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы всегда ходите {{1}} по пятницам?", words: ["в йогу", "к йоге", "на йогу"], correctAnswers: { 1: "на йогу" } },
];

// ============================================================
// PANEL 6 — paid · Drag & Drop
// ============================================================
const p6exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь сегодня вечером {{1}}.", words: ["в Катю", "к Кате", "на Катю"], correctAnswers: { 1: "к Кате" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Андрей ходит {{1}}.", words: ["в спортзал", "на спортзал", "к спортзалу"], correctAnswers: { 1: "в спортзал" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}.", words: ["к работе", "в работу", "на работу"], correctAnswers: { 1: "на работу" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы едем {{1}}, кот заболел.", words: ["на ветеринара", "к ветеринару", "в ветеринара"], correctAnswers: { 1: "к ветеринару" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я всегда хожу с бабушкой {{1}}.", words: ["к банку", "на банк", "в банк"], correctAnswers: { 1: "в банк" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они всегда по утрам ходят {{1}}.", words: ["в пробежку", "на пробежку", "к пробежке"], correctAnswers: { 1: "на пробежку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В воскресенье едем {{1}}.", words: ["на родителей", "в родителей", "к родителям"], correctAnswers: { 1: "к родителям" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}, тебе купить что-нибудь?", words: ["на магазин", "в магазин", "к магазину"], correctAnswers: { 1: "в магазин" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь {{1}}.", words: ["к концерту", "в концерт", "на концерт"], correctAnswers: { 1: "на концерт" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы в пятницу идём {{1}}.", words: ["в друзей в гости", "на друзей в гости", "к друзьям в гости"], correctAnswers: { 1: "к друзьям в гости" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В субботу идём с друзьями {{1}}.", words: ["к ресторану", "в ресторан", "на ресторан"], correctAnswers: { 1: "в ресторан" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы всегда ходите {{1}} по пятницам?", words: ["к йоге", "в йогу", "на йогу"], correctAnswers: { 1: "на йогу" } },
];

// ============================================================
// PANEL 2 — public · Flashcard — misto (в / на / к)
// ============================================================
const p2cards = [
    { front: "Я иду на", back: "работу" },
    { front: "Вы идёте утром на", back: "пляж" },
    { front: "Ты идёшь на", back: "концерт" },
    { front: "Ты идёшь сегодня вечером к", back: "Кате" },
    { front: "Андрей ходит в", back: "спортзал" },
    { front: "Тебе купить что-нибудь? Я иду в", back: "магазин" },
    { front: "В воскресенье едем к", back: "родителям" },
    { front: "Я всегда хожу с бабушкой в", back: "банк" },
    { front: "В субботу идём с друзьями в", back: "ресторан" },
    { front: "Мы в пятницу идём в гости к", back: "друзьям" },
];

// ============================================================
// PANEL 7 — paid · Flashcard — solo на
// ============================================================
const p7cards = [
    { front: "Мы идём на", back: "концерт" },
    { front: "Она ходит на", back: "выставки" },
    { front: "Завтра утром мы идём на", back: "пляж" },
    { front: "Они всегда по утрам ходят на", back: "пробежку" },
    { front: "В понедельник мы идём на", back: "презентацию" },
    { front: "Он всегда ходит на", back: "лекции" },
    { front: "Да, два-три раза в неделю хожу на", back: "тренировку" },
    { front: "Вы идёте на", back: "день рождения" },
    { front: "Они идут в субботу на", back: "концерт" },
    { front: "Вы всегда по пятницам ходите на", back: "йогу" },
];

// ============================================================
// PANEL 8 — paid · Flashcard — misto (в / на / к)
// ============================================================
const p8cards = [
    { front: "Ты идёшь сегодня вечером к", back: "Кате" },
    { front: "Андрей ходит в", back: "спортзал" },
    { front: "Я иду на", back: "работу" },
    { front: "Кот заболел, мы едем к", back: "ветеринару" },
    { front: "Я всегда хожу с бабушкой в", back: "банк" },
    { front: "Они всегда по утрам ходят на", back: "пробежку" },
    { front: "В воскресенье едем к", back: "родителям" },
    { front: "Тебе купить что-нибудь? Я иду в", back: "магазин" },
    { front: "Ты идёшь на", back: "концерт" },
    { front: "Вы всегда по пятницам ходите на", back: "йогу" },
];

// ============================================================
// PANEL 3 — public · Flashcard
// ============================================================
const p3cards = [
    { front: "Она ходит на", back: "выставки" },
    { front: "Да, два-три раза в неделю хожу на", back: "тренировку" },
    { front: "В понедельник мы идём на", back: "презентацию" },
    { front: "В субботу идём с друзьями в", back: "ресторан" },
    { front: "Я всегда хожу с бабушкой в", back: "банк" },
    { front: "Кот заболел, мы едем к", back: "ветеринару" },
    { front: "Мы в пятницу идём в гости к", back: "друзьям" },
    { front: "Когда ты идёшь к", back: "врачу" },
    { front: "Весной они летят в", back: "Египет" },
    { front: "Куда вы едете на", back: "Пасху" },
];

// ============================================================
// PANEL 9 — paid · Flashcard
// ============================================================
const p9cards = [
    { front: "Мы идём на", back: "концерт" },
    { front: "Они всегда по утрам ходят на", back: "пробежку" },
    { front: "Вы всегда по пятницам ходите на", back: "йогу" },
    { front: "Андрей ходит в", back: "спортзал" },
    { front: "Тебе купить что-нибудь? Я иду в", back: "магазин" },
    { front: "Ты идёшь сегодня вечером к", back: "Кате" },
    { front: "В воскресенье едем к", back: "родителям" },
    { front: "В выходные мы едем на", back: "дачу" },
    { front: "Когда ты идёшь к", back: "стоматологу" },
    { front: "По воскресеньям мы ездим в", back: "баню" },
];

// ============================================================
// PANEL 10 — paid · Flashcard
// ============================================================
const p10cards = [
    { front: "Я иду на", back: "работу" },
    { front: "Вы идёте утром на", back: "пляж" },
    { front: "Ты идёшь на", back: "концерт" },
    { front: "Он всегда ходит на", back: "лекции" },
    { front: "Мы едем в", back: "гости к друзьям" },
    { front: "Он всегда ходит выпить кофе в", back: "этот бар" },
    { front: "Они идут в", back: "аптеку" },
    { front: "После лекций я иду к", back: "профессору" },
    { front: "Вы часто ходите в", back: "кино" },
    { front: "Ты идёшь вечером гулять в", back: "центр" },
];

// ============================================================
// PANEL 4 — public · Mixed (MC + Match + Write)
// ============================================================
function initPanel4Mal() {
    const panel = document.getElementById('panel-mal-open-4');
    if (!panel) return;

    const container = panel.querySelector('#mal-04-cards-container');
    const prevBtn   = panel.querySelector('#mal-04-deck-prev');
    const nextBtn   = panel.querySelector('#mal-04-deck-next');
    const counterEl = panel.querySelector('#mal-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Я иду ___ работу.",                          options: ["в", "на", "к"], answer: "на" },
        { question: "Ты идёшь ___ концерт.",                      options: ["в", "на", "к"], answer: "на" },
        { question: "Они всегда по утрам ходят ___ пробежку.",    options: ["в", "на", "к"], answer: "на" },
        { question: "В выходные мы едем ___ дачу.",               options: ["в", "на", "к"], answer: "на" },
        { question: "Андрей ходит ___ спортзал.",                 options: ["в", "на", "к"], answer: "в" },
        { question: "Они идут ___ аптеку.",                       options: ["в", "на", "к"], answer: "в" },
        { question: "Вы часто ходите ___ кино?",                  options: ["в", "на", "к"], answer: "в" },
        { question: "Ты идёшь сегодня вечером ___ Кате.",         options: ["в", "на", "к"], answer: "к" },
        { question: "В воскресенье едем ___ родителям.",          options: ["в", "на", "к"], answer: "к" },
        { question: "Кот заболел, мы едем ___ ветеринару.",       options: ["в", "на", "к"], answer: "к" },
    ];

    const matchPairs = [
        { left: "Вы идёте утром на",               right: "пляж" },
        { left: "Она ходит на",                    right: "выставки" },
        { left: "В понедельник мы идём на",         right: "презентацию" },
        { left: "Два-три раза в неделю хожу на",   right: "тренировку" },
        { left: "Тебе купить что-нибудь? Я иду в", right: "магазин" },
        { left: "В субботу идём в",                right: "ресторан" },
        { left: "Весной они летят в",              right: "Египет" },
        { left: "Мы в пятницу идём в гости к",     right: "друзьям" },
        { left: "Когда ты идёшь к",               right: "врачу" },
        { left: "После лекций я иду к",            right: "профессору" },
    ];

    const quizData = [
        { id: "mal-001", promptPrefix: "Он всегда ходит",              promptSuffix: "лекции.",         answers: ["на"] },
        { id: "mal-002", promptPrefix: "Вы идёте",                     promptSuffix: "день рождения?",  answers: ["на"] },
        { id: "mal-003", promptPrefix: "Я всегда хожу с бабушкой",     promptSuffix: "банк.",           answers: ["в"] },
        { id: "mal-004", promptPrefix: "По воскресеньям мы ездим",     promptSuffix: "баню.",           answers: ["в"] },
        { id: "mal-005", promptPrefix: "Он всегда ходит выпить кофе",  promptSuffix: "этот бар.",       answers: ["в"] },
        { id: "mal-006", promptPrefix: "Ты идёшь вечером гулять",      promptSuffix: "центр?",          answers: ["в"] },
        { id: "mal-007", promptPrefix: "Мы летим в Париж",             promptSuffix: "родственникам.",  answers: ["к"] },
        { id: "mal-008", promptPrefix: "Ты уже едешь",                 promptSuffix: "нам?",            answers: ["к"] },
        { id: "mal-009", promptPrefix: "Мы едем в гости",              promptSuffix: "друзьям.",        answers: ["к"] },
        { id: "mal-010", promptPrefix: "Когда ты идёшь",               promptSuffix: "стоматологу?",    answers: ["к"] },
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
            card.className = 'fca01-card-container mal-04-card';
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
                    <p class="quiz-instruction">Scrivete la preposizione corretta: в / на / к</p>
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
        container.querySelectorAll('.mal-04-card').forEach(card => {
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
                const card  = this.closest('.mal-04-card');
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
        container.querySelectorAll('.mal-04-card').forEach((c, i) => {
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
        'panel-mal-open-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mal-01',    exercises: p1exercises }),
        'panel-mal-open-5':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mal-05',    exercises: p5exercises }),
        'panel-mal-open-6':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mal-06',    exercises: p6exercises }),
        'panel-mal-open-2':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-02', cards: p2cards, quizByPrep: true }),
        'panel-mal-open-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-07', cards: p7cards, quizByPrep: true }),
        'panel-mal-open-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-08', cards: p8cards, quizByPrep: true }),
        'panel-mal-open-3':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-03', cards: p3cards, quizByPrep: true }),
        'panel-mal-open-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-09', cards: p9cards, quizByPrep: true }),
        'panel-mal-open-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-10', cards: p10cards, quizByPrep: true }),
        'panel-mal-open-4':  () => initPanel4Mal(),
    },
    enableAccessControl: true,
});
