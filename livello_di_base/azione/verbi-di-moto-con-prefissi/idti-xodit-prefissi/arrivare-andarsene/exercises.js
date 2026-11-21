import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Прийти или уйти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// arrivare ↔ andarsene — при- (arrivo, в / на + acc., к + dat.) ↔ у- (lasciare un luogo: из / с / от + gen.; anche уйти домой, в магазин),
// con entrambe le coppie aspettuali: приходить / прийти ↔ уходить / уйти.
// Trappole: venire = прийти («Придёшь к нам?»); Me ne vado! = Я ухожу!; uscire (вышел) ≠ andarsene (ушёл);
// il treno parte = поезд уходит; lasciare il lavoro / i genitori = уйти с работы / от родителей. Forme: пришёл, приду (non «прийду»).
// Verificato su Gramota.ru (БТС): уйти в магазин, домой, за хлебом; поезд ушёл; уйти с работы, от родителей; прийти в гости, к другу.
// Solo frasi originali dei materiali «Курсы»; frasi nuove solo con il permesso della PM. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC misto (pagina 1: вышел ↔ ушёл) · Quiz (panel-aa-9)
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: прийти / уйти (nuovo, 7) + к + dat., из / с + gen. (vecchio, 3), con spiegazioni; presente 4, passato 5, futuro 1
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда ты {{1}} к нам на обед?",
        words: ["уйдёшь", "придёшь", "прийдёшь"],
        correctAnswers: { 1: "придёшь" },
        explanation: "Venire da noi = прийти к + dativo. Futuro: приду, придёшь (non «прийдёшь»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Наконец-то она пришла {{1}} в гости.",
        words: ["к нам", "у нас", "к нас"],
        correctAnswers: { 1: "к нам" },
        explanation: "Da qualcuno (moto) = к + dativo: к нам. «У нас» = stato in luogo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Уже {{1}}? — Да, мне пора, завтра рано вставать!",
        words: ["приходишь", "уходешь", "уходишь"],
        correctAnswers: { 1: "уходишь" },
        explanation: "Andarsene adesso → НСВ presente: «Уже уходишь?» = te ne vai già?"
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Моя подруга не живёт с родителями с университета. Она ушла {{1}}, когда ей было семнадцать.",
        words: ["в дом", "из дом", "из дома"],
        correctAnswers: { 1: "из дома" },
        explanation: "Lasciare la casa dei genitori = уйти из + genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я не могу и не хочу всё это выслушивать! Я {{1}}!",
        words: ["ухожу", "прихожу", "ухожю"],
        correctAnswers: { 1: "ухожу" },
        explanation: "Me ne vado! = Я ухожу! (presente НСВ, azione di adesso)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он {{1}} в библиотеку и принёс ноутбук, потому что дома он не мог ничего написать.",
        words: ["ушёл", "пришёл", "пришол"],
        correctAnswers: { 1: "пришёл" },
        explanation: "Arrivare in biblioteca = прийти в + accusativo. Passato: пришёл (non «пришол»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Ты слышала, что вчера случилось на вечеринке в ресторане? — Нет, я {{1}} из ресторана рано.",
        words: ["ушла", "вошла", "ушола"],
        correctAnswers: { 1: "ушла" },
        explanation: "Andarsene da = уйти из + genitivo. «Вошла из» non esiste: si dice войти в."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Они {{1}} к открытию музея. Но люди уже толпились у входа.",
        words: ["ушли", "пришлы", "пришли"],
        correctAnswers: { 1: "пришли" },
        explanation: "Arrivare per l'apertura = прийти к + dativo (momento). Passato: пришли."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он каждый день {{1}} на работу около девяти.",
        words: ["входит", "приходит", "прихадит"],
        correctAnswers: { 1: "приходит" },
        explanation: "Ogni giorno → НСВ: приходит на работу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Во сколько ты обычно уходишь {{1}}?",
        words: ["на работе", "с работы", "с работу"],
        correctAnswers: { 1: "с работы" },
        explanation: "Lasciare il lavoro a fine giornata = уходить с + genitivo."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Nuovo: прийти / уйти — «Дом и гости» (senza spiegazioni); * 3 e 6 adattate, 10 frase nuova approvata dalla PM
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы завтра устраиваем вечеринку. Вы {{1}} к нам?",
        words: ["уйдёте", "прийдёте", "придёте"],
        correctAnswers: { 1: "придёте" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Наконец-то она {{1}} к нам в гости.",
        words: ["пришла", "ушла", "прийшла"],
        correctAnswers: { 1: "пришла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Оля была очень рада: на её день рождения все {{1}} с цветами.",
        words: ["ушли", "пришли", "пришлы"],
        correctAnswers: { 1: "пришли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам пора {{1}}!",
        words: ["приходить", "уходить", "уходеть"],
        correctAnswers: { 1: "уходить" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Ты остаёшься? — Да, мне ещё нужно поработать. — Выключи свет, когда будешь {{1}}!",
        words: ["уходеть", "приходить", "уходить"],
        correctAnswers: { 1: "уходить" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Каждый раз, когда она {{1}} от нас, она забывает зонтик.",
        words: ["уходит", "приходит", "уходет"],
        correctAnswers: { 1: "уходит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я {{1}}, нужно купить что-нибудь?",
        words: ["прихожу", "ухожю", "ухожу"],
        correctAnswers: { 1: "ухожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он {{1}} от родителей, когда ему было восемнадцать.",
        words: ["вошёл", "ушёл", "ушол"],
        correctAnswers: { 1: "ушёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Моя подруга не живёт с родителями с университета. Она {{1}} из дома, когда ей было семнадцать.",
        words: ["ушла", "вошла", "ушола"],
        correctAnswers: { 1: "ушла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы ждём вас в субботу. {{1}} к часу!",
        words: ["Приходите", "Уходите", "Прийдите"],
        correctAnswers: { 1: "Приходите" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Nuovo: прийти / уйти — «Работа и вокзал» (senza spiegazioni); frasi 2, 5, 6, 8, 9, 10 nuove approvate dalla PM, 3 adattata (Наконец)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Во сколько ты обычно {{1}} с работы?",
        words: ["входишь", "уходишь", "уходеш"],
        correctAnswers: { 1: "уходишь" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Каждое утро я {{1}} в офис первой и включаю кофемашину.",
        words: ["прихажу", "ухожу", "прихожу"],
        correctAnswers: { 1: "прихожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Наконец он {{1}} в офис — на полчаса позже, чем обычно.",
        words: ["пришёл", "ушёл", "пришол"],
        correctAnswers: { 1: "пришёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Знаешь, Андрей опять {{1}} с работы. — Опять уволился?!",
        words: ["пришёл", "ушол", "ушёл"],
        correctAnswers: { 1: "ушёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Не звони Андрею на работу: он уже {{1}}.",
        words: ["ушёл", "пришёл", "ушол"],
        correctAnswers: { 1: "ушёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Лена в офисе? — Нет, она ещё не {{1}}: у неё приём у врача.",
        words: ["ушла", "пришла", "прийшла"],
        correctAnswers: { 1: "пришла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поезд {{1}} через десять минут.",
        words: ["уйдёт", "войдёт", "уйдёть"],
        correctAnswers: { 1: "уйдёт" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поезд на Москву {{1}} в восемь пятнадцать с третьего пути.",
        words: ["приходит", "уходет", "уходит"],
        correctAnswers: { 1: "уходит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поезд уже {{1}}, следующий через час.",
        words: ["пришёл", "ушёл", "ушол"],
        correctAnswers: { 1: "ушёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Завтра вы {{1}} в офис к восьми: у нас важная встреча.",
        words: ["придёте", "уйдёте", "прийдёте"],
        correctAnswers: { 1: "придёте" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: aspetto — приходить / прийти, уходить / уйти: solo frasi con marcatori (PM 21.11: niente carte con sole forme) — abitudine / risultato, con spiegazioni
// ============================================================
const p4cards = [
    { front: "Каждое утро я ___ в офис первой и включаю кофемашину.", back: "прихожу", distractors: ["приду", "приходю"], explanation: "Каждое утро = abitudine → НСВ: прихожу («д» → «ж»)." },
    { front: "Во сколько ты обычно ___ с работы?", back: "уходишь", distractors: ["уйдёшь", "уходешь"], explanation: "Обычно → НСВ: уходишь." },
    { front: "Он ___ в библиотеку и принёс ноутбук, потому что дома он не мог ничего написать.", back: "пришёл", distractors: ["ушёл", "пришол"], explanation: "È arrivato ed è lì → прийти. Passato: пришёл, пришла, пришли." },
    { front: "— Где Маша? — Она уже ___ домой, будет только завтра.", back: "ушла", distractors: ["уходила", "ушола"], explanation: "Уже, e non c'è più → СВ: ушла." },
    { front: "Когда ты ___ к нам на обед?", back: "придёшь", distractors: ["уйдёшь", "прийдёшь"], explanation: "Una visita precisa nel futuro → СВ: придёшь (senza «й»: non «прийдёшь»)." },
    { front: "Мы ждём вас в субботу. ___ к часу!", back: "Приходите", distractors: ["Уходите", "Прийдите"], explanation: "Invito → imperativo НСВ: приходите! (non «прийдите»)." },
    { front: "Он каждый день ___ на работу около девяти.", back: "приходит", distractors: ["придёт", "прихадит"], explanation: "Ogni giorno (abitudine) → НСВ: приходит." },
    { front: "Каждый раз, когда она ___ от нас, она забывает зонтик.", back: "уходит", distractors: ["уйдёт", "уходет"], explanation: "Каждый раз = azione ripetuta → НСВ: уходит." },
    { front: "Наконец-то она ___ к нам в гости.", back: "пришла", distractors: ["приходила", "прийшла"], explanation: "Наконец-то = risultato atteso, una volta → СВ: пришла." },
    { front: "Он ___ от родителей, когда ему было восемнадцать.", back: "ушёл", distractors: ["уходил", "ушол"], explanation: "Un fatto unico nella vita → СВ: ушёл." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Nuovo: прийти / уйти — «Я ухожу!»: presente 5, futuro 2, passato 3; frasi dei pannelli 1–3 in formato carta (senza spiegazioni)
// ============================================================
const p5cards = [
    { front: "Я не могу и не хочу всё это выслушивать! Я ___!", back: "ухожу", distractors: ["прихожу", "ухожю"] },
    { front: "Я ___, нужно купить что-нибудь?", back: "ухожу", distractors: ["прихожу", "ухажу"] },
    { front: "— Уже ___? — Да, мне пора, завтра рано вставать!", back: "уходишь", distractors: ["приходишь", "уходеш"] },
    { front: "Каждое утро я ___ в офис первой и включаю кофемашину.", back: "прихожу", distractors: ["ухожу", "прихажу"] },
    { front: "Поезд на Москву ___ в восемь пятнадцать с третьего пути.", back: "уходит", distractors: ["приходит", "уходет"] },
    { front: "Когда ты ___ к нам на обед?", back: "придёшь", distractors: ["уйдёшь", "прийдёшь"] },
    { front: "Мы завтра устраиваем вечеринку. Вы ___ к нам?", back: "придёте", distractors: ["уйдёте", "прийдёте"] },
    { front: "Они ___ вчера с вечеринки первыми.", back: "ушли", distractors: ["пришли", "ушлы"] },
    { front: "— Ты слышала, что вчера случилось на вечеринке в ресторане? — Нет, я ___ из ресторана рано.", back: "ушла", distractors: ["вошла", "ушола"] },
    { front: "Наконец он ___ в офис — на полчаса позже, чем обычно.", back: "пришёл", distractors: ["ушёл", "пришол"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: при- / у- (pagina 2) ↔ в- / вы- (pagina 1) — soglia o presenza; frasi 1–3 nuove approvate dalla PM; уйти из дома = покинуть дом (PM)
// ============================================================
const p6cards = [
    { front: "— Где Маша? — Она ___ домой, будет только завтра.", back: "ушла", distractors: ["вышла", "ушола"] },
    { front: "Я ___ на минутку, сейчас вернусь.", back: "выйду", distractors: ["уйду", "выйдю"] },
    { front: "Директор ___ из кабинета покурить и сейчас вернётся.", back: "вышел", distractors: ["ушёл", "вышёл"] },
    { front: "Обычно я ___ из дома в 8 часов.", back: "выхожу", distractors: ["ухожу", "выхажу"] },
    { front: "Подожди, я пока не могу сказать точно, я только ___ в магазин.", back: "вхожу", distractors: ["прихожу", "вхажу"] },
    { front: "Эдуардо открыл дверь и ___ в кабинет начальника таможни.", back: "вошёл", distractors: ["пришёл", "вашёл"] },
    { front: "Наконец-то она ___ к нам в гости.", back: "пришла", distractors: ["вошла", "прийшла"] },
    { front: "Я не могу и не хочу всё это выслушивать! Я ___!", back: "ухожу", distractors: ["выхожу", "ухожю"] },
    { front: "Мне нужно доехать до остановки Площадь мира, ___ из автобуса и сразу повернуть налево.", back: "выйти", distractors: ["уйти", "выдти"] },
    { front: "Он ___ от родителей, когда ему было восемнадцать.", back: "ушёл", distractors: ["вошёл", "ушол"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelAa9() {
    const panel = document.getElementById('panel-aa-9');
    if (!panel) return;

    const container = panel.querySelector('#aa-9-cards-container');
    const prevBtn   = panel.querySelector('#aa-9-deck-prev');
    const nextBtn   = panel.querySelector('#aa-9-deck-next');
    const counterEl = panel.querySelector('#aa-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Когда ты ___ к нам на обед?", options: ["уйдёшь", "придёшь", "прийдёшь"], answer: "придёшь" },
        { question: "— Уже ___? — Да, мне пора, завтра рано вставать!", options: ["приходишь", "уходеш", "уходишь"], answer: "уходишь" },
        { question: "Он ___ в библиотеку и принёс ноутбук, потому что дома он не мог ничего написать.", options: ["пришёл", "ушёл", "пришол"], answer: "пришёл" },
        { question: "Они ___ вчера с вечеринки первыми.", options: ["ушли", "пришли", "ушлы"], answer: "ушли" },
        { question: "Поезд уже ___, следующий через час.", options: ["пришёл", "ушёл", "ушол"], answer: "ушёл" },
        { question: "Он каждый день ___ на работу около девяти.", options: ["входит", "прихадит", "приходит"], answer: "приходит" },
        { question: "Мы ждём вас в субботу. ___ к часу!", options: ["Уходите", "Прийдите", "Приходите"], answer: "Приходите" },
        { question: "— Где Маша? — Она ___ домой, будет только завтра.", options: ["ушла", "вышла", "ушола"], answer: "ушла" },
        { question: "Директор ___ из кабинета покурить и сейчас вернётся.", options: ["ушёл", "вышел", "вышёл"], answer: "вышел" },
        { question: "Наконец-то она ___ к нам в гости.", options: ["пришла", "ушла", "прийшла"], answer: "пришла" }
    ];
    const matchPairs = [
        { left: "Каждое утро я ___ в офис первой и включаю кофемашину.", right: "прихожу" },
        { left: "Я не могу и не хочу всё это выслушивать! Я ___!", right: "ухожу" },
        { left: "— Уже ___? — Да, мне пора, завтра рано вставать!", right: "уходишь" },
        { left: "Он каждый день ___ на работу около девяти.", right: "приходит" },
        { left: "Когда ты ___ к нам на обед?", right: "придёшь" },
        { left: "Мы завтра устраиваем вечеринку. Вы ___ к нам?", right: "придёте" },
        { left: "Наконец-то она ___ к нам в гости.", right: "пришла" },
        { left: "Он ___ от родителей, когда ему было восемнадцать.", right: "ушёл" },
        { left: "Они ___ вчера с вечеринки первыми.", right: "ушли" },
        { left: "Мы ждём вас в субботу. ___ к часу!", right: "Приходите" }
    ];
    const quizData = [
        { id: "aa9-w1", promptPrefix: "Каждое утро я ", promptSuffix: " в офис первой и включаю кофемашину.", answers: ["прихожу", "приезжаю"] },
        { id: "aa9-w2", promptPrefix: "— Уже ", promptSuffix: "? — Да, мне пора, завтра рано вставать!", answers: ["уходишь", "уезжаешь"] },
        { id: "aa9-w3", promptPrefix: "Когда ты ", promptSuffix: " к нам на обед?", answers: ["придёшь", "придешь", "приедешь", "зайдёшь", "зайдешь"] },
        { id: "aa9-w4", promptPrefix: "Наконец-то она ", promptSuffix: " к нам в гости.", answers: ["пришла", "приехала", "зашла"] },
        { id: "aa9-w5", promptPrefix: "Он ", promptSuffix: " от родителей, когда ему было восемнадцать.", answers: ["ушёл", "ушел", "уехал"] },
        { id: "aa9-w6", promptPrefix: "Каждый раз, когда она ", promptSuffix: " от нас, она забывает зонтик.", answers: ["уходит", "уезжает"] },
        { id: "aa9-w7", promptPrefix: "Я не могу и не хочу всё это выслушивать! Я ", promptSuffix: "!", answers: ["ухожу"] },
        { id: "aa9-w8", promptPrefix: "Мы завтра устраиваем вечеринку. Вы ", promptSuffix: " к нам?", answers: ["придёте", "придете", "приедете", "зайдёте", "зайдете"] },
        { id: "aa9-w9", promptPrefix: "Они ", promptSuffix: " вчера с вечеринки первыми.", answers: ["ушли", "уехали"] },
        { id: "aa9-w10", promptPrefix: "— Где Маша? — Она уже ", promptSuffix: " домой, будет только завтра.", answers: ["ушла", "уехала", "пошла"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

    // Typed answers: ignore case, ё/е, extra spaces and a final dot
    // (Italian keyboards usually have no ё).
    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ').replace(/[.!]+$/, '').toLowerCase().replace(/ё/g, 'е');
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
            card.className = 'fca01-card-container aa-9-card';
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
        container.querySelectorAll('.aa-9-card').forEach(card => {
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
                const card    = this.closest('.aa-9-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === normalizeInput(ans));
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
        container.querySelectorAll('.aa-9-card').forEach((c, i) => {
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
    'panel-aa-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-aa-01', exercises: p1exercises }),
    'panel-aa-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-aa-02', exercises: p2exercises }),
    'panel-aa-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-aa-03', exercises: p3exercises }),
    'panel-aa-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-aa-04', cards: p4cards }),
    'panel-aa-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-aa-05', cards: p5cards }),
    'panel-aa-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-aa-06', cards: p6cards }),
    'panel-aa-9': () => initPanelAa9()
};

initPanelManager({ initializers, enableAccessControl: true });
