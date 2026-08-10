import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Sostantivo al prepositivo (dopo в/на) — dove si trova l'oggetto in casa
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ваза на {{1}}.",
        words: ["стол", "стола", "столе"],
        correctAnswers: { 1: "столе" },
        explanation: "Sostantivo maschile al prepositivo (dopo на/в): стол → столе."
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Чашки на {{1}}.",
        words: ["полка", "полки", "полке"],
        correctAnswers: { 1: "полке" },
        explanation: "Sostantivo femminile in -а al prepositivo: полка → полке."
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Тарелки в {{1}}.",
        words: ["раковина", "раковины", "раковине"],
        correctAnswers: { 1: "раковине" },
        explanation: "Sostantivo femminile in -а al prepositivo: раковина → раковине."
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Мясо в {{1}}.",
        words: ["холодильник", "холодильника", "холодильнике"],
        correctAnswers: { 1: "холодильнике" },
        explanation: "Sostantivo maschile al prepositivo: холодильник → холодильнике."
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Кот на {{1}}.",
        words: ["диван", "дивана", "диване"],
        correctAnswers: { 1: "диване" },
        explanation: "Sostantivo maschile al prepositivo: диван → диване."
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Подушки на {{1}}.",
        words: ["кровать", "кроватью", "кровати"],
        correctAnswers: { 1: "кровати" },
        explanation: "Sostantivo femminile (3ª declinazione, in -ь) al prepositivo: кровать → кровати. (genitivo e prepositivo coincidono per questo tipo di sostantivo, quindi il distrattore qui è lo strumentale кроватью)."
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Кастрюля на {{1}}.",
        words: ["плита", "плиты", "плите"],
        correctAnswers: { 1: "плите" },
        explanation: "Sostantivo femminile in -а al prepositivo: плита → плите."
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Книги на {{1}}.",
        words: ["полка", "полки", "полке"],
        correctAnswers: { 1: "полке" },
        explanation: "Sostantivo femminile in -а al prepositivo: полка → полке."
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Суп в {{1}}.",
        words: ["кастрюля", "кастрюли", "кастрюле"],
        correctAnswers: { 1: "кастрюле" },
        explanation: "Sostantivo femminile in -я al prepositivo: кастрюля → кастрюле."
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Чемодан в {{1}}.",
        words: ["комната", "комнаты", "комнате"],
        correctAnswers: { 1: "комнате" },
        explanation: "Sostantivo femminile in -а al prepositivo: комната → комнате."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Sostantivo femminile (1a declinazione) al prepositivo (dopo в/на)
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Чай в {{1}}.",
        words: ["чашка", "чашки", "чашке"],
        correctAnswers: { 1: "чашке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Кофе на {{1}}.",
        words: ["полка", "полки", "полке"],
        correctAnswers: { 1: "полке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Посуда в {{1}}.",
        words: ["раковина", "раковины", "раковине"],
        correctAnswers: { 1: "раковине" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Картина на {{1}}.",
        words: ["стена", "стены", "стене"],
        correctAnswers: { 1: "стене" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Салат в {{1}}.",
        words: ["тарелка", "тарелки", "тарелке"],
        correctAnswers: { 1: "тарелке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Курица в {{1}}.",
        words: ["духовка", "духовки", "духовке"],
        correctAnswers: { 1: "духовке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Холодильник на {{1}}.",
        words: ["кухня", "кухни", "кухне"],
        correctAnswers: { 1: "кухне" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Я в {{1}}.",
        words: ["ванна", "ванны", "ванне"],
        correctAnswers: { 1: "ванне" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Игрушки в {{1}}.",
        words: ["коробка", "коробки", "коробке"],
        correctAnswers: { 1: "коробке" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ключи в {{1}}.",
        words: ["сумка", "сумки", "сумке"],
        correctAnswers: { 1: "сумке" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Sostantivo (2a/3a declinazione) al prepositivo — inclusi i casi irregolari in -у (пол, шкаф, угол)
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Занавеска на {{1}}.",
        words: ["окно", "окна", "окне"],
        correctAnswers: { 1: "окне" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ковёр на {{1}}.",
        words: ["пол", "поле", "полу"],
        correctAnswers: { 1: "полу" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Платье в {{1}}.",
        words: ["шкаф", "шкафе", "шкафу"],
        correctAnswers: { 1: "шкафу" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ключи на {{1}}.",
        words: ["зеркало", "зеркала", "зеркале"],
        correctAnswers: { 1: "зеркале" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Кошка в {{1}}.",
        words: ["кресло", "кресла", "кресле"],
        correctAnswers: { 1: "кресле" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Рубашка на {{1}}.",
        words: ["стул", "стула", "стуле"],
        correctAnswers: { 1: "стуле" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Кресло в {{1}}.",
        words: ["угол", "угле", "углу"],
        correctAnswers: { 1: "углу" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ножи в {{1}}.",
        words: ["ящик", "ящика", "ящике"],
        correctAnswers: { 1: "ящике" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Ботинки в {{1}}.",
        words: ["коридор", "коридора", "коридоре"],
        correctAnswers: { 1: "коридоре" }
    },
    {
        instruction: "Scegli la forma corretta al prepositivo.",
        text: "Лампа на {{1}}.",
        words: ["потолок", "потолка", "потолке"],
        correctAnswers: { 1: "потолке" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Aggettivo + sostantivo al prepositivo (10 frasi riprese dai pannelli 1-3, con aggettivo aggiunto)
// ============================================================
const p4cards = [
    { front: "Кот", back: "на старинном диване", explanation: "Aggettivo maschile prepositivo (старинном) + sostantivo maschile prepositivo (диване)." },
    { front: "Курица", back: "в новой духовке", explanation: "Aggettivo femminile prepositivo (новой) + sostantivo femminile prepositivo (духовке)." },
    { front: "Кресло", back: "в этом углу", explanation: "Dimostrativo maschile prepositivo (этом) + sostantivo maschile, locativo irregolare in -у́ (углу)." },
    { front: "Ваза", back: "на обеденном столе", explanation: "Aggettivo maschile prepositivo (обеденном) + sostantivo maschile prepositivo (столе)." },
    { front: "Ключи", back: "в чёрной кожаной сумке", explanation: "Due aggettivi femminili prepositivo (чёрной, кожаной) + sostantivo femminile prepositivo (сумке)." },
    { front: "Лампа", back: "на высоком потолке", explanation: "Aggettivo maschile prepositivo (высоком) + sostantivo maschile prepositivo (потолке)." },
    { front: "Подушки", back: "на широкой кровати", explanation: "Aggettivo femminile prepositivo (широкой) + sostantivo femminile (3ª declinazione) prepositivo (кровати)." },
    { front: "Я", back: "в большой ванне", explanation: "Aggettivo femminile prepositivo (большой) + sostantivo femminile prepositivo (ванне)." },
    { front: "Платье", back: "в деревянном шкафу", explanation: "Aggettivo maschile prepositivo regolare (деревянном) + sostantivo maschile, locativo irregolare in -у́ (шкафу) — le due desinenze non si assomigliano, ma il caso è lo stesso." },
    { front: "Суп", back: "в большой кастрюле", explanation: "Aggettivo femminile prepositivo (большой) + sostantivo femminile prepositivo (кастрюле)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// 5 ripetute da panel 4 (3 maschili + 2 femminili) + 5 nuove dal pool pannelli 1-3, con aggettivo
// ============================================================
const p5cards = [
    { front: "Кот", back: "на старинном диване" },
    { front: "Кресло", back: "в этом углу" },
    { front: "Платье", back: "в деревянном шкафу" },
    { front: "Курица", back: "в новой духовке" },
    { front: "Я", back: "в большой ванне" },
    { front: "Тарелки", back: "в кухонной раковине" },
    { front: "Мясо", back: "в сером холодильнике" },
    { front: "Чемодан", back: "в большой комнате" },
    { front: "Картина", back: "на белой стене" },
    { front: "Ножи", back: "в верхнем ящике" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// 5 ripetute da panel 5 (3 femminili + 2 maschili) + 5 nuove dal pool pannelli 1-3, con aggettivo
// ============================================================
const p6cards = [
    { front: "Курица", back: "в новой духовке" },
    { front: "Я", back: "в большой ванне" },
    { front: "Картина", back: "на белой стене" },
    { front: "Кот", back: "на старинном диване" },
    { front: "Ножи", back: "в верхнем ящике" },
    { front: "Книги", back: "на книжной полке" },
    { front: "Занавески", back: "на большом окне" },
    { front: "Ковёр", back: "на паркетном полу" },
    { front: "Кошка", back: "в бархатном красном кресле" },
    { front: "Ботинки", back: "в длинном коридоре" }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Plurale al prepositivo — oggetti distribuiti su più luoghi (semanticamente coerenti col plurale)
// ============================================================
const p7cards = [
    { front: "Тарелки", back: "на этих полках", explanation: "Plurale prepositivo: полка → на полках." },
    { front: "Книги", back: "на книжных полках", explanation: "Plurale prepositivo: полка → на книжных полках." },
    { front: "Картины", back: "в тяжёлых рамах", explanation: "Plurale prepositivo: рама → в тяжёлых рамах." },
    { front: "Чашки", back: "в кухонных шкафах", explanation: "Plurale prepositivo: шкаф → в кухонных шкафах (al plurale l'eccezione in -у́ del singolare scompare, torna la desinenza regolare -ах)." },
    { front: "Вилки и ножи", back: "в этих ящиках", explanation: "Plurale prepositivo: ящик → в этих ящиках." },
    { front: "Полотенца", back: "на деревянных полках", explanation: "Plurale prepositivo: полка → на деревянных полках." },
    { front: "Кастрюли", back: "в тех ящиках", explanation: "Plurale prepositivo: ящик → в тех ящиках." },
    { front: "Вино", back: "в бокалах", explanation: "Plurale prepositivo: бокал → в бокалах." },
    { front: "Рубашки", back: "на стульях", explanation: "Plurale prepositivo irregolare: стул → стулья (plurale) → на стульях (cambio di tema al plurale)." },
    { front: "Платья", back: "на вешалках", explanation: "Plurale prepositivo: вешалка → на вешалках." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// 4 nuove + 6 dal pool pannello 7 (in ordine misto)
// ============================================================
const p8cards = [
    { front: "Посуда", back: "на кухонных полках" },
    { front: "Книги", back: "на книжных полках" },
    { front: "Кастрюли", back: "в нижних ящиках" },
    { front: "Вино", back: "в хрустальных бокалах" },
    { front: "Цветы", back: "в керамических вазах" },
    { front: "Платья", back: "на новых вешалках" },
    { front: "Вода", back: "в пластиковых бутылках" },
    { front: "Чашки", back: "в кухонных шкафах" },
    { front: "Рубашки", back: "на деревянных стульях" },
    { front: "Картины", back: "в тяжёлых рамах" }
];

// ============================================================
// PANEL 9 — Flashcard · paid
// 10 uniche dal pool combinato pannelli 7+8, ordine misto
// ============================================================
const p9cards = [
    { front: "Вилки и ножи", back: "в этих ящиках" },
    { front: "Посуда", back: "на кухонных полках" },
    { front: "Цветы", back: "в керамических вазах" },
    { front: "Тарелки", back: "на этих полках" },
    { front: "Вино", back: "в хрустальных бокалах" },
    { front: "Полотенца", back: "на деревянных полках" },
    { front: "Вода", back: "в пластиковых бутылках" },
    { front: "Кастрюли", back: "в нижних ящиках" },
    { front: "Рубашки", back: "на деревянных стульях" },
    { front: "Платья", back: "на новых вешалках" }
];

// ============================================================
// PANEL 10 — Quiz misto (multiple choice + match + write) · paid
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelDom10() {
    const panel = document.getElementById('panel-dom-10');
    if (!panel) return;

    const container = panel.querySelector('#dom-10-cards-container');
    const prevBtn   = panel.querySelector('#dom-10-deck-prev');
    const nextBtn   = panel.querySelector('#dom-10-deck-next');
    const counterEl = panel.querySelector('#dom-10-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Суп в ___.", options: ["большой кастрюле", "большая кастрюля"], answer: "большой кастрюле" },
        { question: "Тарелки в ___.", options: ["кухонной раковине", "кухонная раковина"], answer: "кухонной раковине" },
        { question: "Чемодан в ___.", options: ["большой комнате", "большая комната"], answer: "большой комнате" },
        { question: "Лампа на ___.", options: ["высоком потолке", "высокий потолок"], answer: "высоком потолке" },
        { question: "Платье в ___.", options: ["деревянном шкафу", "деревянный шкаф"], answer: "деревянном шкафу" },
        { question: "Мясо в ___.", options: ["сером холодильнике", "серый холодильник"], answer: "сером холодильнике" },
        { question: "Подушки на ___.", options: ["широкой кровати", "широкая кровать"], answer: "широкой кровати" },
        { question: "Чашки в ___.", options: ["кухонных шкафах", "кухонные шкафы"], answer: "кухонных шкафах" },
        { question: "Кастрюли в ___.", options: ["тех ящиках", "те ящики"], answer: "тех ящиках" },
        { question: "Посуда на ___.", options: ["кухонных полках", "кухонные полки"], answer: "кухонных полках" }
    ];

    const matchPairs = [
        { left: "Курица в новой", right: "духовке" },
        { left: "Ключи в чёрной кожаной", right: "сумке" },
        { left: "Я в большой", right: "ванне" },
        { left: "Кот на старинном", right: "диване" },
        { left: "Ваза на обеденном", right: "столе" },
        { left: "Ножи в верхнем", right: "ящике" },
        { left: "Подушки на широкой", right: "кровати" },
        { left: "Книги на книжных", right: "полках" },
        { left: "Картины в тяжёлых", right: "рамах" },
        { left: "Вино в хрустальных", right: "бокалах" }
    ];

    const quizData = [
        { id: "dom-001", promptPrefix: "Картина ", promptSuffix: " (белая стена).", answers: ["на белой стене"] },
        { id: "dom-002", promptPrefix: "Чай ", promptSuffix: " (белая чашка).", answers: ["в белой чашке"] },
        { id: "dom-003", promptPrefix: "Салат ", promptSuffix: " (глубокая тарелка).", answers: ["в глубокой тарелке"] },
        { id: "dom-004", promptPrefix: "Кресло ", promptSuffix: " (этот угол).", answers: ["в этом углу"] },
        { id: "dom-005", promptPrefix: "Ковёр ", promptSuffix: " (паркетный пол).", answers: ["на паркетном полу"] },
        { id: "dom-006", promptPrefix: "Кошка ", promptSuffix: " (бархатное красное кресло).", answers: ["в бархатном красном кресле"] },
        { id: "dom-007", promptPrefix: "Ботинки ", promptSuffix: " (длинный коридор).", answers: ["в длинном коридоре"] },
        { id: "dom-008", promptPrefix: "Подушки ", promptSuffix: " (широкая кровать).", answers: ["на широкой кровати"] },
        { id: "dom-009", promptPrefix: "Вилки и ножи ", promptSuffix: " (эти ящики).", answers: ["в этих ящиках"] },
        { id: "dom-010", promptPrefix: "Цветы ", promptSuffix: " (керамические вазы).", answers: ["в керамических вазах"] }
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
            card.className = 'fca01-card-container dom-10-card';
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
                    <p class="quiz-instruction">Scrivete la forma corretta</p>
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
        container.querySelectorAll('.dom-10-card').forEach(card => {
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
                const card    = this.closest('.dom-10-card');
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
        container.querySelectorAll('.dom-10-card').forEach((c, i) => {
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
    'panel-dom-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-dom-01',    exercises: p1exercises }),
    'panel-dom-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-dom-02',    exercises: p2exercises }),
    'panel-dom-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-dom-03',    exercises: p3exercises }),
    'panel-dom-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-dom-04', cards: p4cards }),
    'panel-dom-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-dom-05', cards: p5cards }),
    'panel-dom-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-dom-06', cards: p6cards }),
    'panel-dom-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-dom-07', cards: p7cards }),
    'panel-dom-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-dom-08', cards: p8cards }),
    'panel-dom-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-dom-09', cards: p9cards }),
    'panel-dom-10': () => initPanelDom10()
};

initPanelManager({ initializers, enableAccessControl: true });
