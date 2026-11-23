import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «МУЖСКОЙ РОД НА СОГЛАСНУЮ» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Maschile in consonante (desinenza zero) → -ов: парк → парков, фонтан → фонтанов, ресторан → ресторанов.
// Fonte: iCloud Курсы: principianti/A1_modulo1/РОДИТЕЛЬНЫЙ ПАДЕЖ МНОЖЕСТВЕННОЕ ЧИСЛО/ (многомало*.pdf) · elemntare/А1_МОДУЛЬ_2/много_мало.pdf.
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public · «НАШ ГОРОД» · solo м.р. на согласную → -ов
// Testo «Наш город» della PM (iCloud Курсы, МНОГО\МАЛО). * = tempo/stagione cambiati: n. 5, 7, 8, 10.
// N. 6, 7: frasi approvate il 21.11; n. 9: nuova. Distrattori: gen. sing. (senso) + nom. plur. (forma).
// Approvato dalla PM il 22.11.2026.
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Наш город очень зелёный: в нём много {{1}}.",
        words: ["парки", "парков", "парка"],
        correctAnswers: { 1: "парков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: парк → парков."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "У нас много маленьких {{1}} и спортивных площадок.",
        words: ["скверов", "сквера", "скверы"],
        correctAnswers: { 1: "скверов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: сквер → скверов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В историческом центре много старинных {{1}}.",
        words: ["фонтана", "фонтаны", "фонтанов"],
        correctAnswers: { 1: "фонтанов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: фонтан → фонтанов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В центре много маленьких кафе и {{1}}.",
        words: ["ресторанов", "рестораны", "ресторана"],
        correctAnswers: { 1: "ресторанов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: ресторан → ресторанов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Летом в центре будет много {{1}} с мороженым.",
        words: ["киоска", "киосков", "киоски"],
        correctAnswers: { 1: "киосков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: киоск → киосков."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "На моей улице мало {{1}}, поэтому за хлебом я хожу в центр.",
        words: ["магазины", "магазина", "магазинов"],
        correctAnswers: { 1: "магазинов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: магазин → магазинов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Вчера вечером в центре было мало {{1}}, поэтому мы шли домой пешком.",
        words: ["автобусов", "автобусы", "автобуса"],
        correctAnswers: { 1: "автобусов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: автобус → автобусов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Десять лет назад в нашем городе было мало {{1}}, а сейчас он очень зелёный.",
        words: ["парка", "парков", "парки"],
        correctAnswers: { 1: "парков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: парк → парков."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "После ремонта на нашей улице будет много новых {{1}}.",
        words: ["магазинов", "магазина", "магазины"],
        correctAnswers: { 1: "магазинов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: магазин → магазинов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Зимой в центре мало {{1}} с мороженым.",
        words: ["киоски", "киоска", "киосков"],
        correctAnswers: { 1: "киосков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: киоск → киосков."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · «НА РЫНКЕ» · solo м.р. на согласную → -ов (senza spiegazioni)
// Testo «Рынок» della PM (iCloud Курсы, многомало 1.pdf). * = tempo/luogo cambiati: n. 3, 8, 9, 10.
// N. 5, 6, 9, 10: frasi approvate il 21.11; n. 7: nuova. Distrattori: gen. sing. (senso) + nom. plur. (forma).
// Approvato dalla PM il 22.11.2026.
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Во второй половине лета на рынке много помидоров и {{1}}.",
        words: ["огурца", "огурцы", "огурцов"],
        correctAnswers: { 1: "огурцов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В июле и августе на рынке много {{1}} и абрикосов.",
        words: ["персиков", "персика", "персики"],
        correctAnswers: { 1: "персиков" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Через месяц на рынке будет много {{1}}: начинается сезон.",
        words: ["баклажаны", "баклажанов", "баклажана"],
        correctAnswers: { 1: "баклажанов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Летом на рынке много {{1}} и баклажанов.",
        words: ["кабачка", "кабачков", "кабачки"],
        correctAnswers: { 1: "кабачков" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Весной на рынке мало {{1}}: их сезон начинается летом.",
        words: ["помидора", "помидоры", "помидоров"],
        correctAnswers: { 1: "помидоров" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Зимой фрукты дорогие, поэтому я покупаю мало {{1}}.",
        words: ["абрикосов", "абрикоса", "абрикосы"],
        correctAnswers: { 1: "абрикосов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В прошлую субботу на рынке было мало {{1}}, и мы купили только два.",
        words: ["лимонов", "лимоны", "лимона"],
        correctAnswers: { 1: "лимонов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Вчера на рынке было много свежих {{1}}: осень — их время.",
        words: ["грибы", "гриба", "грибов"],
        correctAnswers: { 1: "грибов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Завтра пойдём на рынок: там будет много свежих {{1}} для сока.",
        words: ["апельсины", "апельсинов", "апельсина"],
        correctAnswers: { 1: "апельсинов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Дети любят бананы, поэтому я всегда покупаю на рынке много {{1}}.",
        words: ["бананов", "банана", "бананы"],
        correctAnswers: { 1: "бананов" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid · «МОЯ КВАРТИРА» · solo м.р. на согласную → -ов (senza spiegazioni)
// Testo «Квартира» della PM (iCloud Курсы, многомало.pdf): n. 1. * = tempo cambiato: n. 3, 7, 8.
// N. 2–8: frasi approvate il 21.11; n. 9, 10: nuove. Distrattori: gen. sing. (senso) + nom. plur. (forma).
// Approvato dalla PM il 22.11.2026.
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "У меня в шкафу много кастрюль и {{1}}.",
        words: ["ковшика", "ковшиков", "ковшики"],
        correctAnswers: { 1: "ковшиков" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "На кухне мало {{1}}, поэтому посуда стоит на полке.",
        words: ["шкафы", "шкафа", "шкафов"],
        correctAnswers: { 1: "шкафов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "После вечеринки на столе было много грязных {{1}}.",
        words: ["стаканов", "стаканы", "стакана"],
        correctAnswers: { 1: "стаканов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В гостиной много {{1}}: от телевизора, от кондиционера…",
        words: ["пультов", "пульта", "пульты"],
        correctAnswers: { 1: "пультов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В комнате сына много {{1}}: он любит читать.",
        words: ["журнала", "журналы", "журналов"],
        correctAnswers: { 1: "журналов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В нашей семье пять человек и много {{1}}: у каждого свой.",
        words: ["телефоны", "телефонов", "телефона"],
        correctAnswers: { 1: "телефонов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "После магазина на кухне было много {{1}} с продуктами.",
        words: ["пакеты", "пакета", "пакетов"],
        correctAnswers: { 1: "пакетов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В субботу мы едем в отпуск, поэтому в коридоре будет много {{1}}.",
        words: ["чемодана", "чемоданов", "чемоданы"],
        correctAnswers: { 1: "чемоданов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Квартира у нас маленькая, поэтому в ней мало {{1}}: только один, на кухне.",
        words: ["столов", "стола", "столы"],
        correctAnswers: { 1: "столов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "После ремонта на кухне будет много новых {{1}}.",
        words: ["шкафа", "шкафов", "шкафы"],
        correctAnswers: { 1: "шкафов" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public · «ГОРОДА РОССИИ» · м.р. на согласную → -ов
// Testi della PM «Москва», «Санкт-Петербург», «Старинные города России», tabella «В городе много мостов»
// (iCloud Курсы: elemntare/А1_МОДУЛЬ_2/город). Modificati: n. 2–7 (tempo, «количество» → «много», domanda-risposta).
// Approvato dalla PM il 22.11.2026.
// ============================================================
const p4cards = [
    { front: "Улицы в исторической части Москвы узкие, а в центре…", back: "много широких проспектов", distractors: ["много широкого проспекта", "много широкие проспекты"], explanation: "Dopo много anche l'aggettivo va al genitivo plurale: широкие проспекты → широких проспектов." },
    { front: "— Летом мы поедем по Золотому кольцу. Что там будет?", back: "Много старинных городов", distractors: ["Много старинного города", "Много старинные города"], explanation: "город → городов, старинный → старинных." },
    { front: "— Тридцать лет назад в Москве было много небоскрёбов?", back: "Нет, было мало небоскрёбов", distractors: ["Нет, было мало небоскрёба", "Нет, было мало небоскрёбы"], explanation: "небоскрёб (grattacielo) → небоскрёбов." },
    { front: "— Большой, Малый, Сатирикон… Что есть в Москве?", back: "Много театров", distractors: ["Много театра", "Много театры"], explanation: "театр → театров." },
    { front: "— На Арбате всегда многолюдно. Что там есть?", back: "Много ресторанов и кафе", distractors: ["Много ресторана и кафе", "Много рестораны и кафе"], explanation: "ресторан → ресторанов; кафе non si declina." },
    { front: "— Петербург стоит на воде. Что там есть?", back: "Много мостов", distractors: ["Много моста", "Много мосты"], explanation: "мост → мостов." },
    { front: "— Какая в Питере ночная жизнь?", back: "Яркая: много баров и ночных клубов", distractors: ["Яркая: много бара и ночного клуба", "Яркая: много бары и ночные клубы"], explanation: "бар → баров, клуб → клубов, ночной → ночных." }
];

// ============================================================
// PANEL 5 — Flashcard · student · «НА РЫНКЕ» · м.р. на согласную → -ов (senza spiegazioni)
// Testo «Рынок» della PM + frasi approvate il 21.11, in forma domanda-risposta; tempi cambiati: n. 3, 4, 9, 10.
// Approvato dalla PM il 22.11.2026.
// ============================================================
const p5cards = [
    { front: "— Что продают на рынке во второй половине лета?", back: "Много помидоров и огурцов", distractors: ["Много помидора и огурца", "Много помидоры и огурцы"] },
    { front: "— В июле и августе на рынке есть персики?", back: "Да, там много персиков и абрикосов", distractors: ["Да, там много персика и абрикоса", "Да, там много персики и абрикосы"] },
    { front: "— Осень — время грибов. Что вчера было на рынке?", back: "Было много свежих грибов", distractors: ["Было много свежего гриба", "Было много свежие грибы"] },
    { front: "— Летом сделаем рагу. Что будет на рынке?", back: "Много кабачков и баклажанов", distractors: ["Много кабачка и баклажана", "Много кабачки и баклажаны"] },
    { front: "— Весной на рынке много помидоров?", back: "Нет, весной там мало помидоров", distractors: ["Нет, весной там мало помидора", "Нет, весной там мало помидоры"] },
    { front: "— Зимой на рынке много абрикосов?", back: "Нет, мало абрикосов: зимой они дорогие", distractors: ["Нет, мало абрикоса: зимой они дорогие", "Нет, мало абрикосы: зимой они дорогие"] },
    { front: "— Можно чай с лимоном?", back: "Извини, у нас мало лимонов: остался только один", distractors: ["Извини, у нас мало лимона: остался только один", "Извини, у нас мало лимоны: остался только один"] },
    { front: "— Дети любят бананы. Что ты покупаешь на рынке?", back: "Всегда много бананов", distractors: ["Всегда много банана", "Всегда много бананы"] },
    { front: "— Завтра сделаем сок?", back: "Да, на рынке будет много свежих апельсинов", distractors: ["Да, на рынке будет много свежего апельсина", "Да, на рынке будет много свежие апельсины"] },
    { front: "— В понедельник на рынке были кабачки?", back: "Да, было много кабачков", distractors: ["Да, было много кабачка", "Да, было много кабачки"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid · «МОЯ КВАРТИРА» · м.р. на согласную → -ов (senza spiegazioni)
// Testo «Квартира» della PM (n. 1) + frasi approvate il 21–22.11, in forma domanda-risposta.
// Approvato dalla PM il 22.11.2026.
// ============================================================
const p6cards = [
    { front: "— Посуда — твоя страсть. Что у тебя в шкафу, кроме кастрюль?", back: "Много ковшиков", distractors: ["Много ковшика", "Много ковшики"] },
    { front: "— Почему посуда стоит на полке?", back: "На кухне мало шкафов", distractors: ["На кухне мало шкафа", "На кухне мало шкафы"] },
    { front: "— Как прошла вечеринка?", back: "Весело! Потом на столе было много грязных стаканов", distractors: ["Весело! Потом на столе было много грязного стакана", "Весело! Потом на столе было много грязные стаканы"] },
    { front: "— Где пульт от телевизора?", back: "Не знаю, у нас много пультов", distractors: ["Не знаю, у нас много пульта", "Не знаю, у нас много пульты"] },
    { front: "— Твой сын любит читать?", back: "Да, в его комнате много журналов", distractors: ["Да, в его комнате много журнала", "Да, в его комнате много журналы"] },
    { front: "— В вашей семье пять человек. А телефоны?", back: "Тоже много телефонов: у каждого свой", distractors: ["Тоже много телефона: у каждого свой", "Тоже много телефоны: у каждого свой"] },
    { front: "— Ты вчера ходил в супермаркет?", back: "Да, потом на кухне было много пакетов", distractors: ["Да, потом на кухне было много пакета", "Да, потом на кухне было много пакеты"] },
    { front: "— В субботу едем в отпуск?", back: "Да, в коридоре будет много чемоданов", distractors: ["Да, в коридоре будет много чемодана", "Да, в коридоре будет много чемоданы"] },
    { front: "— У вас большая квартира?", back: "Нет, маленькая: в ней мало столов, только один", distractors: ["Нет, маленькая: в ней мало стола, только один", "Нет, маленькая: в ней мало столы, только один"] },
    { front: "— Что будет на кухне после ремонта?", back: "Много новых шкафов", distractors: ["Много нового шкафа", "Много новые шкафы"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelGpov9() {
    const panel = document.getElementById('panel-gpov-9');
    if (!panel) return;

    const container = panel.querySelector('#gpov-9-cards-container');
    const prevBtn   = panel.querySelector('#gpov-9-deck-prev');
    const nextBtn   = panel.querySelector('#gpov-9-deck-next');
    const counterEl = panel.querySelector('#gpov-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Наш город очень зелёный: в нём много ___.", options: ["парки", "парка", "парков"], answer: "парков" },
        { question: "Летом на рынке много ___ и баклажанов.", options: ["кабачков", "кабачки", "кабачка"], answer: "кабачков" },
        { question: "На кухне мало ___, поэтому посуда стоит на полке.", options: ["шкафа", "шкафов", "шкафы"], answer: "шкафов" },
        { question: "В центре Москвы много широких ___.", options: ["проспекта", "проспектов", "проспекты"], answer: "проспектов" },
        { question: "В июле и августе на рынке много ___ и абрикосов.", options: ["персиков", "персика", "персики"], answer: "персиков" },
        { question: "После вечеринки на столе было много грязных ___.", options: ["стаканы", "стакана", "стаканов"], answer: "стаканов" },
        { question: "Вечером в центре было мало ___, поэтому мы шли домой пешком.", options: ["автобусов", "автобуса", "автобусы"], answer: "автобусов" },
        { question: "Петербург стоит на воде: там много ___.", options: ["моста", "мосты", "мостов"], answer: "мостов" },
        { question: "В субботу мы едем в отпуск, поэтому в коридоре будет много ___.", options: ["чемодана", "чемоданов", "чемоданы"], answer: "чемоданов" },
        { question: "— Можно чай с лимоном? — Извини, у нас мало ___.", options: ["лимоны", "лимона", "лимонов"], answer: "лимонов" }
    ];
    const matchPairs = [
        { left: "один парк", right: "много парков" },
        { left: "один мост", right: "много мостов" },
        { left: "один театр", right: "много театров" },
        { left: "один огурец", right: "много огурцов" },
        { left: "один гриб", right: "много грибов" },
        { left: "один банан", right: "много бананов" },
        { left: "один шкаф", right: "много шкафов" },
        { left: "один стакан", right: "много стаканов" },
        { left: "один чемодан", right: "много чемоданов" },
        { left: "один пульт", right: "много пультов" }
    ];
    const quizData = [
        { id: "gpov9-w1", promptPrefix: "В центре много маленьких кафе и ", promptSuffix: " (ресторан).", answers: ["ресторанов"] },
        { id: "gpov9-w2", promptPrefix: "Наш город очень зелёный: в нём много ", promptSuffix: " (парк).", answers: ["парков"] },
        { id: "gpov9-w3", promptPrefix: "На моей улице мало ", promptSuffix: " (магазин), поэтому за хлебом я хожу в центр.", answers: ["магазинов"] },
        { id: "gpov9-w4", promptPrefix: "Во второй половине лета на рынке много помидоров и ", promptSuffix: " (огурец).", answers: ["огурцов"] },
        { id: "gpov9-w5", promptPrefix: "Осенью на рынке много ", promptSuffix: " (гриб).", answers: ["грибов"] },
        { id: "gpov9-w6", promptPrefix: "Дети любят бананы, поэтому дома всегда много ", promptSuffix: " (банан).", answers: ["бананов"] },
        { id: "gpov9-w7", promptPrefix: "В комнате сына много ", promptSuffix: " (журнал): он любит читать.", answers: ["журналов"] },
        { id: "gpov9-w8", promptPrefix: "После магазина на кухне было много ", promptSuffix: " (пакет) с продуктами.", answers: ["пакетов"] },
        { id: "gpov9-w9", promptPrefix: "В Москве много ", promptSuffix: " (театр): Большой, Малый, Сатирикон.", answers: ["театров"] },
        { id: "gpov9-w10", promptPrefix: "В России много старинных ", promptSuffix: " (город).", answers: ["городов"] }
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
            card.className = 'fca01-card-container gpov-9-card';
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
        container.querySelectorAll('.gpov-9-card').forEach(card => {
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
                const card    = this.closest('.gpov-9-card');
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
        container.querySelectorAll('.gpov-9-card').forEach((c, i) => {
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
    'panel-gpov-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-gpov-01', exercises: p1exercises }),
    'panel-gpov-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-gpov-02', exercises: p2exercises }),
    'panel-gpov-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-gpov-03', exercises: p3exercises }),
    'panel-gpov-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-gpov-04', cards: p4cards }),
    'panel-gpov-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-gpov-05', cards: p5cards }),
    'panel-gpov-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-gpov-06', cards: p6cards }),
    'panel-gpov-9': () => initPanelGpov9()
};

initPanelManager({ initializers, enableAccessControl: true });
