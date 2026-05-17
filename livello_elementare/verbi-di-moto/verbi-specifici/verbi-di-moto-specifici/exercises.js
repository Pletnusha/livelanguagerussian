import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Misto (бегать/бежать + плавать/плыть + летать/лететь)
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Я {{1}} на работу, опаздываю!",
        words: ["бегу", "бегаю", "еду"],
        correctAnswers: { 1: "бегу" },
        wrongFeedback: {
            "бегаю": "«Опаздываю» — corre verso il lavoro adesso, non un'abitudine → бежать.",
            "еду": "Nessun mezzo di trasporto, si muove a piedi di corsa → бежать, non ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Где ты обычно {{1}}, в парке?",
        words: ["бежишь", "бегаешь", "ходишь"],
        correctAnswers: { 1: "бегаешь" },
        wrongFeedback: {
            "бежишь": "«Обычно» chiede un'abitudine, non un movimento in corso → бегать.",
            "ходишь": "Correre ≠ camminare — il contesto è running → бегать, non ходить."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Машина сломалась, вот я {{1}} на метро!",
        words: ["едет", "езжу", "еду"],
        correctAnswers: { 1: "еду" },
        wrongFeedback: {
            "едет": "Verbo giusto, ma soggetto «я» → 1ª pers. sg.: еду, non едет.",
            "езжу": "ездить = frequentare (visitare abitualmente); qui è un viaggio singolo forzato — la macchina è rotta → ехать, non ездить."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Ненавижу {{1}} на метро — там постоянно толпа!",
        words: ["ездишь", "ездить", "ехать"],
        correctAnswers: { 1: "ездить" },
        wrongFeedback: {
            "ездишь": "Dopo «ненавижу» serve l'infinito, non la forma personale.",
            "ехать": "«Постоянно» = odio abituale per la metro → ездить, non ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Тихо — учитель уже {{1}}!",
        words: ["идёт", "ходит", "едет"],
        correctAnswers: { 1: "идёт" },
        wrongFeedback: {
            "ходит": "«Уже» = movimento diretto percepibile adesso → идти, non ходить.",
            "едет": "Nessun mezzo di trasporto, l'insegnante cammina → идти, non ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "По пятницам они вместе {{1}} в спортзал.",
        words: ["идут", "ходят", "едут"],
        correctAnswers: { 1: "ходят" },
        wrongFeedback: {
            "идут": "«По пятницам» = abitudine settimanale → ходить, non идти.",
            "едут": "ехать/ездить si usa con un mezzo di trasporto; qui vanno a piedi → ходить, non ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Он {{1}} на автобус.",
        words: ["бегает", "бежит", "бегут"],
        correctAnswers: { 1: "бежит" },
        wrongFeedback: {
            "бегает": "Movimento urgente verso un autobus specifico adesso → бежать, non бегать.",
            "бегут": "Verbo giusto, ma soggetto «он» → 3ª pers. sg.: бежит, non бегут."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Ты же на машине {{1}} на работу — что ты в автобусе делаешь?",
        words: ["ездишь", "ездит", "едешь"],
        correctAnswers: { 1: "ездишь" },
        wrongFeedback: {
            "ездит": "Verbo giusto, ma soggetto «ты» → 2ª pers. sg., non 3ª sg.",
            "едешь": "«Же» = abitudine consolidata, non un viaggio specifico → ездить."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "По утрам Андрей {{1}} на йогу.",
        words: ["идёт", "ходит", "едет"],
        correctAnswers: { 1: "ходит" },
        wrongFeedback: {
            "идёт": "«По утрам» = abitudine quotidiana → ходить, non идти.",
            "едет": "Nessun mezzo di trasporto — ci va a piedi → ходить, non ехать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Мы взяли за привычку — теперь каждое утро {{1}} по пляжу.",
        words: ["бежим", "бегаем", "бегают"],
        correctAnswers: { 1: "бегаем" },
        wrongFeedback: {
            "бежим": "«Взяли за привычку» = abitudine acquisita → бегать, non бежать.",
            "бегают": "Verbo giusto, ma soggetto «мы» → 1ª pers. pl.: бегаем, non бегают."
        }
    },
];

// ============================================================
// PANEL 5 — DragDrop · student · Спряжение БЕГАТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Обычно я {{1}} в парке.",
        words: ["бегу", "бегаю", "бежит"],
        correctAnswers: { 1: "бегаю" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Женя {{1}} по выходным в парке.",
        words: ["бежит", "бегает", "бегают"],
        correctAnswers: { 1: "бегает" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Зачем она за ним {{1}}?",
        words: ["бежит", "бегает", "бегаешь"],
        correctAnswers: { 1: "бегает" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Вы {{1}} по утрам?",
        words: ["бежите", "бегаете", "бегают"],
        correctAnswers: { 1: "бегаете" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Катя и Лена {{1}} каждое утро по берегу моря.",
        words: ["бегут", "бегают", "бегает"],
        correctAnswers: { 1: "бегают" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} каждое утро по пляжу.",
        words: ["бежим", "бегаем", "бегают"],
        correctAnswers: { 1: "бегаем" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я всегда после работы 30 мин {{1}} на беговой дорожке дома.",
        words: ["бегу", "бегаю", "бегает"],
        correctAnswers: { 1: "бегаю" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Тимур редко {{1}}, если только с Женей.",
        words: ["бежит", "бегает", "бегаем"],
        correctAnswers: { 1: "бегает" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Вы {{1}} здесь каждое утро?",
        words: ["бежите", "бегаете", "бегают"],
        correctAnswers: { 1: "бегаете" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Кто {{1}} в дождь?!",
        words: ["бежит", "бегает", "бегаю"],
        correctAnswers: { 1: "бегает" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Спряжение БЕЖАТЬ
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Они {{1}} марафон в понедельник.",
        words: ["бегают", "бегут", "бежит"],
        correctAnswers: { 1: "бегут" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Куда вы {{1}}?",
        words: ["бегаете", "бежите", "бегут"],
        correctAnswers: { 1: "бежите" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Он {{1}} на автобус.",
        words: ["бегает", "бежит", "бегут"],
        correctAnswers: { 1: "бежит" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} на самолёт, прости, нет времени!",
        words: ["бегаем", "бежим", "бегут"],
        correctAnswers: { 1: "бежим" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я {{1}} на работу, опаздываю!",
        words: ["бегаю", "бегу", "бежит"],
        correctAnswers: { 1: "бегу" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Вы {{1}} на концерт?",
        words: ["бегаете", "бежите", "бегут"],
        correctAnswers: { 1: "бежите" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Гепард {{1}} со скоростью 112 км в час.",
        words: ["бегает", "бежит", "бегут"],
        correctAnswers: { 1: "бежит" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Куда ты {{1}}?",
        words: ["бегаешь", "бежишь", "бежит"],
        correctAnswers: { 1: "бежишь" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Пошёл дождь, и все {{1}} прятаться.",
        words: ["бегают", "бегут", "бежим"],
        correctAnswers: { 1: "бегут" }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} на лекцию.",
        words: ["бегаем", "бежим", "бежит"],
        correctAnswers: { 1: "бежим" }
    },
];


// ============================================================
// PANEL 2 — Flashcard · public · Парные фразы бежать / бегать
// ============================================================
const p2cards = [
    { front: "Смотрите — гепард бежит за газелью!", back: "Гепарды бегают со скоростью 112 км в час.", explanation: "«Смотрите» = guarda, azione in corso adesso → бежать. Il contrario esprime una capacità generale della specie → бегать." },
    { front: "Я бегу на автобус.", back: "Каждое утро я бегаю за этим автобусом — никогда не приходит по расписанию.", explanation: "Corsa urgente verso l'autobus in questo momento → бежать. Il contrario usa «каждое утро» = abitudine → бегать." },
    { front: "Мы бежим на вокзал.", back: "Мы уже час бегаем по вокзалу — ищем платформу нашего поезда.", explanation: "Corsa in una direzione precisa verso la stazione → бежать. Il contrario: correre in tutte le direzioni cercando il binario → бегать." },
    { front: "Дети бегут домой — пошёл дождь.", back: "Дети бегают под дождём.", explanation: "Corsa verso una direzione precisa (a casa) → бежать. Il contrario: correre senza direzione fissa → бегать." },
    { front: "В какую сторону вы бежите по пляжу?", back: "Вы каждое утро бегаете по пляжу?", explanation: "«В какую сторону» = direzione precisa, movimento in corso → бежать. Il contrario usa «каждое утро» = abitudine → бегать." },
];

// ============================================================
// PANEL 7 — Flashcard · student · Парные фразы микс бежать/бегать + идти/ходить + ехать/ездить
// ============================================================
const p7cards = [
    { front: "Она едет в Верону на поезде — сейчас уже в поезде.", back: "Она всегда ездит в Верону на поезде." },
    { front: "Смотрите — гепард бежит за газелью!",                back: "Гепарды бегают со скоростью 112 км в час." },
    { front: "Сегодня Лена идёт на работу пешком.",                back: "Лена обычно ходит на работу пешком." },
    { front: "Дети бегут домой — пошёл дождь.",                    back: "Дети бегают под дождём." },
    { front: "На выходные мы едем на шашлыки!",                    back: "На выходные мы обычно ездим на дачу." },
    { front: "Мы бежим на вокзал.",                                back: "Мы уже час бегаем по вокзалу — ищем платформу нашего поезда." },
    { front: "Завтра бабушка идёт к врачу.",                       back: "Бабушка каждую неделю ходит к врачу." },
];

// ============================================================
// PANEL 8 — Flashcard · paid · Парные фразы микс бежать/бегать + идти/ходить + ехать/ездить
// ============================================================
const p8cards = [
    { front: "Я бегу на автобус.",                  back: "Каждое утро я бегаю за этим автобусом — никогда не приходит по расписанию." },
    { front: "Сегодня вечером мы идём в этот ресторан.", back: "Мы часто ходим в этот ресторан." },
    { front: "Мы на выходные едем к родителям.",    back: "Мы ездим к родителям на машине каждые выходные." },
    { front: "В какую сторону вы бежите по пляжу?", back: "Вы каждое утро бегаете по пляжу?" },
    { front: "Машина сломалась, вот я еду на метро!", back: "Ненавижу ездить на метро — там постоянно толпа!" },
];

// ============================================================
// PANEL 3 — Flashcard · public · Микс бежать/бегать + идти/ходить + ехать/ездить
// ============================================================
const p3cards = [
    { front: "Мы на выходные",          back: "едем к родителям",                              explanation: "«На выходные» = viaggio specifico pianificato → ехать." },
    { front: "Тихо — учитель уже",      back: "идёт!",                                         explanation: "«Уже» = movimento diretto percepibile adesso → идти." },
    { front: "Обычно я",                back: "бегаю в парке",                                 explanation: "«Обычно» = abitudine → бегать." },
    { front: "Ты куда",                 back: "бежишь?",                                       explanation: "«Куда» chiede la direzione adesso → бежать." },
    { front: "Сегодня вечером мы",      back: "идём в ресторан",                               explanation: "«Сегодня вечером» = evento specifico pianificato → идти." },
    { front: "По пятницам они вместе",  back: "ходят в спортзал",                              explanation: "«По пятницам» = abitudine settimanale → ходить." },
    { front: "Пошёл дождь, и все",      back: "бегут прятаться",                               explanation: "Evento improvviso, reazione immediata → бежать." },
    { front: "Женя по выходным",        back: "бегает в парке",                                explanation: "«По выходным» = abitudine periodica → бегать." },
    { front: "Бабушка каждую неделю",   back: "ходит к врачу",                                 explanation: "«Каждую неделю» = frequenza regolare → ходить." },
    { front: "Ненавижу",               back: "ездить на метро — там постоянно толпа!",         explanation: "Dopo «ненавижу» + «постоянно» = odio abituale → infinito ездить." },
];

// ============================================================
// PANEL 9 — Flashcard · student · Микс парные бежать/бегать (5) + идти/ходить (3) + ехать/ездить (2)
// ============================================================
const p9cards = [
    { front: "Мы бежим на вокзал.",                                    back: "Мы уже час бегаем по вокзалу — ищем платформу нашего поезда." },
    { front: "Сегодня Лена идёт на работу пешком.",                    back: "Лена обычно ходит на работу пешком." },
    { front: "Она едет в Верону на поезде — сейчас уже в поезде.",    back: "Она всегда ездит в Верону на поезде." },
    { front: "Смотрите — гепард бежит за газелью!",                    back: "Гепарды бегают со скоростью 112 км в час." },
    { front: "Завтра бабушка идёт к врачу.",                           back: "Бабушка каждую неделю ходит к врачу." },
    { front: "Дети бегут домой — пошёл дождь.",                        back: "Дети бегают под дождём." },
    { front: "Мы на выходные едем к родителям.",                       back: "Мы ездим к родителям на машине каждые выходные." },
    { front: "Я бегу на автобус.",                                      back: "Каждое утро я бегаю за этим автобусом — никогда не приходит по расписанию." },
    { front: "Сегодня вечером мы идём в этот ресторан.",               back: "Мы часто ходим в этот ресторан." },
    { front: "В какую сторону вы бежите по пляжу?",                    back: "Вы каждое утро бегаете по пляжу?" },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Микс бежать/бегать (5) + идти/ходить (3) + ехать/ездить (2)
// ============================================================
const p10cards = [
    { front: "Катя",                     back: "бежит на свидание" },
    { front: "Мы на выходные",           back: "едем к родителям" },
    { front: "Тихо — учитель уже",       back: "идёт!" },
    { front: "Пошёл дождь, и все",       back: "бегут прятаться" },
    { front: "По пятницам они вместе",   back: "ходят в спортзал" },
    { front: "Он",                       back: "бежит на автобус" },
    { front: "Ненавижу",                 back: "ездить на метро — там постоянно толпа!" },
    { front: "Катя последнее время",     back: "бегает по свиданиям" },
    { front: "Сегодня вечером мы",       back: "идём в ресторан" },
    { front: "Обычно я",                 back: "бегаю в парке" },
];

// ============================================================
// PANEL 4 — Mixed Quiz · public
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-spec-04');
    if (!panel) return;

    const container = panel.querySelector('#spec-04-cards-container');
    const prevBtn   = panel.querySelector('#spec-04-deck-prev');
    const nextBtn   = panel.querySelector('#spec-04-deck-next');
    const counterEl = panel.querySelector('#spec-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Он ___ на автобус.",                            options: ["бегает", "бежит"],    answer: "бежит" },
        { question: "По понедельникам Катя ___ на йогу.",            options: ["идёт", "ходит"],      answer: "ходит" },
        { question: "Обычно я ___ в парке.",                         options: ["бегаю", "бегу"],      answer: "бегаю" },
        { question: "Мы ___ на самолёт, прости, нет времени!",       options: ["бегаем", "бежим"],    answer: "бежим" },
        { question: "Зачем она за ним ___?",                         options: ["бежит", "бегает"],    answer: "бегает" },
        { question: "Мы на выходные ___ к родителям.",               options: ["едем", "ездим"],      answer: "едем" },
        { question: "Пошёл дождь, и все ___ прятаться.",             options: ["бегают", "бегут"],    answer: "бегут" },
        { question: "Куда ты ___?",                                  options: ["бегаешь", "бежишь"],  answer: "бежишь" },
        { question: "Тимур редко ___.",                              options: ["бежит", "бегает"],    answer: "бегает" },
        { question: "Вы ___ по утрам?",                              options: ["бежите", "бегаете"],  answer: "бегаете" },
    ];

    const matchPairs = [
        { left: "Гепард",                         right: "бежит со скоростью 112 км в час" },
        { left: "Сегодня Лена",                   right: "идёт на работу пешком" },
        { left: "Я всегда после работы 30 мин",   right: "бегаю на беговой дорожке дома" },
        { left: "Ты же на машине",                right: "ездишь на работу" },
        { left: "Они",                            right: "бегут марафон в понедельник" },
        { left: "Катя и Лена каждое утро",        right: "бегают по берегу моря" },
        { left: "Куда вы в этом году",            right: "едете в отпуск?" },
        { left: "Мы",                             right: "бежим на лекцию" },
        { left: "Бабушка каждую неделю",          right: "ходит к врачу" },
        { left: "Кто",                            right: "бегает в дождь?!" },
    ];

    const quizData = [
        { id: "spec-001", promptPrefix: "Я",                                    promptSuffix: " на работу, опаздываю!",                        answers: ["бегу"] },
        { id: "spec-002", promptPrefix: "Я",                                    promptSuffix: " на рынок по воскресеньям.",                     answers: ["хожу"] },
        { id: "spec-003", promptPrefix: "Где ты обычно ",                       promptSuffix: ", в парке?",                                    answers: ["бегаешь"] },
        { id: "spec-004", promptPrefix: "Мы",                                   promptSuffix: " на вокзал.",                                    answers: ["бежим"] },
        { id: "spec-005", promptPrefix: "Я обычно на машине в городе не ",      promptSuffix: ".",                                             answers: ["езжу"] },
        { id: "spec-006", promptPrefix: "Мы",                                   promptSuffix: " каждое утро по пляжу.",                         answers: ["бегаем"] },
        { id: "spec-007", promptPrefix: "Она",                                  promptSuffix: " в Верону на поезде — сейчас уже в поезде.",     answers: ["едет"] },
        { id: "spec-008", promptPrefix: "Вы",                                   promptSuffix: " здесь каждое утро?",                            answers: ["бегаете"] },
        { id: "spec-009", promptPrefix: "Вы",                                   promptSuffix: " на концерт?",                                   answers: ["бежите"] },
        { id: "spec-010", promptPrefix: "Сегодня вечером они",                  promptSuffix: " к Рудневым.",                                   answers: ["идут"] },
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
            card.className = 'fca01-card-container spec-04-card';
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
        container.querySelectorAll('.spec-04-card').forEach(card => {
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
                const card    = this.closest('.spec-04-card');
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
        container.querySelectorAll('.spec-04-card').forEach((c, i) => {
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
    'panel-spec-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-spec-01',    exercises: p1exercises }),
    'panel-spec-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-spec-05', exercises: p5exercises }),
    'panel-spec-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-spec-06', exercises: p6exercises }),
'panel-spec-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-02', cards: p2cards }),
    'panel-spec-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-07', cards: p7cards }),
    'panel-spec-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-08', cards: p8cards }),
    'panel-spec-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-03', cards: p3cards }),
    'panel-spec-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-09', cards: p9cards }),
    'panel-spec-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-spec-10', cards: p10cards }),
    'panel-spec-04':  () => initPanel4()
};

initPanelManager({ initializers, enableAccessControl: false });
