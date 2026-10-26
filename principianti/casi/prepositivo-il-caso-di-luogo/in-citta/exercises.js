import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Preposizione (в/на) + sostantivo al prepositivo — luoghi in città
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Мы любим гулять {{1}}.",
        words: ["на парке", "в парке", "на парк", "в парк"],
        correctAnswers: { 1: "в парке" },
        explanation: "парк → в парке (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Я {{1}}.",
        words: ["на улице", "в улице", "на улица", "в улица"],
        correctAnswers: { 1: "на улице" },
        explanation: "улица → на улице (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Катя {{1}}.",
        words: ["в рынке", "на рынок", "на рынке", "в рынок"],
        correctAnswers: { 1: "на рынке" },
        explanation: "рынок → на рынке (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Андрей {{1}}.",
        words: ["на банке", "в банк", "на банк", "в банке"],
        correctAnswers: { 1: "в банке" },
        explanation: "банк → в банке (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Женя {{1}}.",
        words: ["в больница", "в больнице", "на больнице", "на больница"],
        correctAnswers: { 1: "в больнице" },
        explanation: "больница → в больнице (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Лена {{1}}.",
        words: ["на офисе", "в офис", "в офисе", "на офис"],
        correctAnswers: { 1: "в офисе" },
        explanation: "офис → в офисе (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Мы {{1}}.",
        words: ["в ресторане", "на ресторане", "в ресторан", "на ресторан"],
        correctAnswers: { 1: "в ресторане" },
        explanation: "ресторан → в ресторане (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Студенты {{1}}.",
        words: ["на библиотеке", "в библиотека", "в библиотеке", "на библиотека"],
        correctAnswers: { 1: "в библиотеке" },
        explanation: "библиотека → в библиотеке (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Они {{1}}.",
        words: ["в музее", "на музее", "в музей", "на музей"],
        correctAnswers: { 1: "в музее" },
        explanation: "музей → в музее (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Друзья {{1}}.",
        words: ["в перекрёстке", "на перекрёсток", "на перекрёстке", "в перекрёсток"],
        correctAnswers: { 1: "на перекрёстке" },
        explanation: "перекрёсток → на перекрёстке (м.р., -е)"
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Sostantivo femminile (1a declinazione) al prepositivo — luoghi in città
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Мы {{1}}.",
        words: ["на остановке", "в остановке", "на остановка", "в остановка"],
        correctAnswers: { 1: "на остановке" },
        explanation: "остановка → на остановке (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Машина {{1}}.",
        words: ["в парковке", "на парковка", "на парковке", "в парковка"],
        correctAnswers: { 1: "на парковке" },
        explanation: "парковка → на парковке (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Платье {{1}} магазина.",
        words: ["в витрине", "на витрине", "в витрина", "на витрина"],
        correctAnswers: { 1: "в витрине" },
        explanation: "витрина → в витрине (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Дедушка {{1}}.",
        words: ["в лавочке", "на лавочка", "на лавочке", "в лавочка"],
        correctAnswers: { 1: "на лавочке" },
        explanation: "лавочка → на лавочке (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Дети {{1}}.",
        words: ["на школе", "в школа", "в школе", "на школа"],
        correctAnswers: { 1: "в школе" },
        explanation: "школа → в школе (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Студенты {{1}}.",
        words: ["в гостинице", "на гостинице", "в гостиница", "на гостиница"],
        correctAnswers: { 1: "в гостинице" },
        explanation: "гостиница → в гостинице (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Тимур {{1}}.",
        words: ["на аптеке", "в аптека", "в аптеке", "на аптека"],
        correctAnswers: { 1: "в аптеке" },
        explanation: "аптека → в аптеке (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Мы {{1}}.",
        words: ["на почте", "в почте", "на почта", "в почта"],
        correctAnswers: { 1: "на почте" },
        explanation: "почта → на почте (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Я {{1}}.",
        words: ["в улице", "на улица", "на улице", "в улица"],
        correctAnswers: { 1: "на улице" },
        explanation: "улица → на улице (ж.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Женя {{1}}.",
        words: ["в больнице", "на больнице", "в больница", "на больница"],
        correctAnswers: { 1: "в больнице" },
        explanation: "больница → в больнице (ж.р., -е)"
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Sostantivo maschile (2a declinazione) al prepositivo — luoghi in città
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Катя {{1}}.",
        words: ["в рынке", "на рынок", "на рынке", "в рынок"],
        correctAnswers: { 1: "на рынке" },
        explanation: "рынок → на рынке (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Аня {{1}}.",
        words: ["в магазине", "на магазине", "в магазин", "на магазин"],
        correctAnswers: { 1: "в магазине" },
        explanation: "магазин → в магазине (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Тимур {{1}}.",
        words: ["на парке", "в парк", "в парке", "на парк"],
        correctAnswers: { 1: "в парке" },
        explanation: "парк → в парке (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Мы {{1}}.",
        words: ["в банке", "на банке", "в банк", "на банк"],
        correctAnswers: { 1: "в банке" },
        explanation: "банк → в банке (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Они {{1}}.",
        words: ["в перекрёстке", "на перекрёсток", "на перекрёстке", "в перекрёсток"],
        correctAnswers: { 1: "на перекрёстке" },
        explanation: "перекрёсток → на перекрёстке (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Машина {{1}}.",
        words: ["на гараже", "в гараж", "в гараже", "на гараж"],
        correctAnswers: { 1: "в гараже" },
        explanation: "гараж → в гараже (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Они {{1}}.",
        words: ["в ресторане", "на ресторане", "в ресторан", "на ресторан"],
        correctAnswers: { 1: "в ресторане" },
        explanation: "ресторан → в ресторане (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Я {{1}}.",
        words: ["на супермаркете", "в супермаркет", "в супермаркете", "на супермаркет"],
        correctAnswers: { 1: "в супермаркете" },
        explanation: "супермаркет → в супермаркете (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Вы {{1}}?",
        words: ["на вокзале", "в вокзале", "на вокзал", "в вокзал"],
        correctAnswers: { 1: "на вокзале" },
        explanation: "вокзал → на вокзале (м.р., -е)"
    },
    {
        instruction: "Scegli la preposizione e la forma corretta.",
        text: "Тимур и Катя {{1}}.",
        words: ["на университете", "в университет", "в университете", "на университет"],
        correctAnswers: { 1: "в университете" },
        explanation: "университет → в университете (м.р., -е)"
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Mix 1a + 2a + 3a declinazione (5+4+1), con aggettivo — luoghi in città
// ============================================================
const p4cards = [
    { front: "Катя", back: "на городском рынке", explanation: "Aggettivo maschile prepositivo (городском) + sostantivo maschile prepositivo (рынке)." },
    { front: "Дедушка", back: "на старой лавочке", explanation: "Aggettivo femminile prepositivo (старой) + sostantivo femminile prepositivo (лавочке)." },
    { front: "Друзья", back: "в модном ресторане", explanation: "Aggettivo maschile prepositivo (модном) + sostantivo maschile prepositivo (ресторане)." },
    { front: "Аня", back: "в новом магазине", explanation: "Aggettivo maschile prepositivo (новом) + sostantivo maschile prepositivo (магазине)." },
    { front: "Женя", back: "на центральной площади", explanation: "Aggettivo femminile prepositivo (центральной) + sostantivo femminile (3ª declinazione, in -ь) prepositivo (площади) — genitivo e prepositivo coincidono per questo tipo di sostantivo, come кровать." },
    { front: "Я", back: "в новой пекарне", explanation: "Aggettivo femminile prepositivo (новой) + sostantivo femminile prepositivo (пекарне)." },
    { front: "Тимур", back: "в тихом парке", explanation: "Aggettivo maschile prepositivo (тихом) + sostantivo maschile prepositivo (парке)." },
    { front: "Мы", back: "в уютной кофейне", explanation: "Aggettivo femminile prepositivo (уютной) + sostantivo femminile prepositivo (кофейне)." },
    { front: "Дети", back: "в частной школе", explanation: "Aggettivo femminile prepositivo (частной) + sostantivo femminile prepositivo (школе)." },
    { front: "Мы", back: "на конечной станции", explanation: "Aggettivo femminile prepositivo (конечной) + sostantivo femminile prepositivo (станции)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Solo 1a declinazione — 2 riprese dal panel 4 + 8 dal pool panel 2, con aggettivo
// ============================================================
const p5cards = [
    { front: "Дедушка", back: "на старой лавочке" },
    { front: "Дети", back: "в частной школе" },
    { front: "Машина", back: "на пустой парковке" },
    { front: "Платье", back: "в яркой витрине" },
    { front: "Туристы", back: "в уютной гостинице" },
    { front: "Тимур", back: "в дальней аптеке" },
    { front: "Мы", back: "на главной почте" },
    { front: "Я", back: "на шумной улице" },
    { front: "Женя", back: "в детской больнице" },
    { front: "Мы", back: "на автобусной остановке" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// 9×2a declinazione + 1×3a declinazione, con aggettivo
// ============================================================
const p6cards = [
    { front: "Я", back: "в местном супермаркете" },
    { front: "Мы", back: "в историческом музее" },
    { front: "Мы", back: "на опасном перекрёстке" },
    { front: "Андрей", back: "в городском банке" },
    { front: "Машина", back: "в тёплом гараже" },
    { front: "Поезд", back: "на новом вокзале" },
    { front: "Студенты", back: "в новом корпусе" },
    { front: "Катя", back: "на шумном рынке" },
    { front: "Тимур", back: "в дорогом ресторане" },
    { front: "Туристы", back: "на старинной площади" }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Plurale al prepositivo, con aggettivo — mix 1a/2a/3a declinazione
// ============================================================
const p7cards = [
    { front: "Дедушки и бабушки", back: "на деревянных скамейках", explanation: "Aggettivo plurale prepositivo (деревянных) + sostantivo plurale prepositivo (скамейках), 1ª declinazione." },
    { front: "Сотрудники", back: "в новых офисах", explanation: "Aggettivo plurale prepositivo (новых) + sostantivo plurale prepositivo (офисах), 2ª declinazione." },
    { front: "Туристы", back: "на центральных улицах", explanation: "Aggettivo plurale prepositivo (центральных) + sostantivo plurale prepositivo (улицах), 1ª declinazione." },
    { front: "Люди", back: "на исторических площадях", explanation: "Aggettivo plurale prepositivo (исторических) + sostantivo plurale prepositivo (площадях), 3ª declinazione." },
    { front: "Клиенты", back: "в разных банках", explanation: "Aggettivo plurale prepositivo (разных) + sostantivo plurale prepositivo (банках), 2ª declinazione." },
    { front: "Врачи", back: "в новых больницах", explanation: "Aggettivo plurale prepositivo (новых) + sostantivo plurale prepositivo (больницах), 1ª declinazione." },
    { front: "Студенты", back: "в исторических университетах", explanation: "Aggettivo plurale prepositivo (исторических) + sostantivo plurale prepositivo (университетах), 2ª declinazione." },
    { front: "Покупатели", back: "в книжных магазинах", explanation: "Aggettivo plurale prepositivo (книжных) + sostantivo plurale prepositivo (магазинах), 2ª declinazione." },
    { front: "Проводники", back: "в скоростных поездах", explanation: "Aggettivo plurale prepositivo (скоростных) + sostantivo plurale prepositivo (поездах), 2ª declinazione." },
    { front: "Продавцы", back: "на фермерских рынках", explanation: "Aggettivo plurale prepositivo (фермерских) + sostantivo plurale prepositivo (рынках), 2ª declinazione." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Plurale al prepositivo, con aggettivo — mix declinazioni
// ============================================================
const p8cards = [
    { front: "Машины", back: "на подземных парковках" },
    { front: "Студенты", back: "в университетских библиотеках" },
    { front: "Врачи", back: "в областных больницах" },
    { front: "Сотрудники", back: "в новых офисах" },
    { front: "Клиенты", back: "в новых банках" },
    { front: "Пациенты", back: "в городских поликлиниках" },
    { front: "Вода", back: "в старинных фонтанах" },
    { front: "Квартиры", back: "в современных домах" },
    { front: "Аренда", back: "в офисных зданиях" },
    { front: "Дети", back: "на детских площадках" }
];

// ============================================================
// PANEL 9 — Flashcard · paid
// 10 uniche dal pool combinato pannelli 7+8, plurale al prepositivo
// ============================================================
const p9cards = [
    { front: "Дедушки и бабушки", back: "на деревянных скамейках" },
    { front: "Машины", back: "на подземных парковках" },
    { front: "Туристы", back: "на центральных улицах" },
    { front: "Пациенты", back: "в городских поликлиниках" },
    { front: "Люди", back: "на исторических площадях" },
    { front: "Вода", back: "в старинных фонтанах" },
    { front: "Покупатели", back: "в книжных магазинах" },
    { front: "Квартиры", back: "в современных домах" },
    { front: "Проводники", back: "в скоростных поездах" },
    { front: "Дети", back: "на детских площадках" }
];

// ============================================================
// PANEL 10 — Quiz misto (multiple choice + match + write) · paid
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelCit10() {
    const panel = document.getElementById('panel-cit-10');
    if (!panel) return;

    const container = panel.querySelector('#cit-10-cards-container');
    const prevBtn   = panel.querySelector('#cit-10-deck-prev');
    const nextBtn   = panel.querySelector('#cit-10-deck-next');
    const counterEl = panel.querySelector('#cit-10-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Мы ___.", options: ["на остановке", "в остановке", "на остановка", "в остановка"], answer: "на остановке" },
        { question: "Машина ___.", options: ["в парковке", "на парковке", "на парковка", "в парковка"], answer: "на парковке" },
        { question: "Платье ___ магазина.", options: ["в витрине", "на витрине", "в витрина", "на витрина"], answer: "в витрине" },
        { question: "Дедушка ___.", options: ["в лавочке", "на лавочке", "на лавочка", "в лавочка"], answer: "на лавочке" },
        { question: "Дети ___.", options: ["на школе", "в школе", "в школа", "на школа"], answer: "в школе" },
        { question: "Студенты ___.", options: ["в гостинице", "на гостинице", "в гостиница", "на гостиница"], answer: "в гостинице" },
        { question: "Тимур ___.", options: ["на аптеке", "в аптеке", "в аптека", "на аптека"], answer: "в аптеке" },
        { question: "Мы ___.", options: ["на почте", "в почте", "на почта", "в почта"], answer: "на почте" },
        { question: "Я ___.", options: ["в улице", "на улице", "на улица", "в улица"], answer: "на улице" },
        { question: "Женя ___.", options: ["в больнице", "на больнице", "в больница", "на больница"], answer: "в больнице" }
    ];

    const matchPairs = [
        { left: "Дедушки и бабушки", right: "на деревянных скамейках" },
        { left: "Сотрудники", right: "в новых офисах" },
        { left: "Туристы", right: "на центральных улицах" },
        { left: "Люди", right: "на исторических площадях" },
        { left: "Клиенты", right: "в разных банках" },
        { left: "Врачи", right: "в новых больницах" },
        { left: "Студенты", right: "в исторических университетах" },
        { left: "Покупатели", right: "в книжных магазинах" },
        { left: "Проводники", right: "в скоростных поездах" },
        { left: "Продавцы", right: "на фермерских рынках" }
    ];

    const quizData = [
        { id: "cit-001", promptPrefix: "Катя ", promptSuffix: " (городской рынок).", answers: ["на городском рынке"] },
        { id: "cit-002", promptPrefix: "Друзья ", promptSuffix: " (модный ресторан).", answers: ["в модном ресторане"] },
        { id: "cit-003", promptPrefix: "Аня ", promptSuffix: " (новый магазин).", answers: ["в новом магазине"] },
        { id: "cit-004", promptPrefix: "Тимур ", promptSuffix: " (тихий парк).", answers: ["в тихом парке"] },
        { id: "cit-005", promptPrefix: "Я ", promptSuffix: " (местный супермаркет).", answers: ["в местном супермаркете"] },
        { id: "cit-006", promptPrefix: "Андрей ", promptSuffix: " (городской банк).", answers: ["в городском банке"] },
        { id: "cit-007", promptPrefix: "Машина ", promptSuffix: " (тёплый гараж).", answers: ["в тёплом гараже"] },
        { id: "cit-008", promptPrefix: "Поезд ", promptSuffix: " (новый вокзал).", answers: ["на новом вокзале"] },
        { id: "cit-009", promptPrefix: "Студенты ", promptSuffix: " (новый корпус).", answers: ["в новом корпусе"] },
        { id: "cit-010", promptPrefix: "Мы ", promptSuffix: " (опасный перекрёсток).", answers: ["на опасном перекрёстке"] }
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
            card.className = 'fca01-card-container cit-10-card';
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
        container.querySelectorAll('.cit-10-card').forEach(card => {
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
                const card    = this.closest('.cit-10-card');
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
        container.querySelectorAll('.cit-10-card').forEach((c, i) => {
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
    'panel-cit-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-cit-01',    exercises: p1exercises }),
    'panel-cit-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-cit-02',    exercises: p2exercises }),
    'panel-cit-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-cit-03',    exercises: p3exercises }),
    'panel-cit-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-04', cards: p4cards }),
    'panel-cit-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-05', cards: p5cards }),
    'panel-cit-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-06', cards: p6cards }),
    'panel-cit-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-07', cards: p7cards }),
    'panel-cit-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-08', cards: p8cards }),
    'panel-cit-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-09', cards: p9cards }),
    'panel-cit-10': () => initPanelCit10()
};

initPanelManager({ initializers, enableAccessControl: true });
