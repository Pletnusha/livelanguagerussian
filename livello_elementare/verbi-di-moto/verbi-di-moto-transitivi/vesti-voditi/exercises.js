import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix вести + водить + носить + возить
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Профессор {{1}} лекции по истории экономики.",
        words: ["ведёт", "носит", "возит"],
        correctAnswers: { 1: "ведёт" },
        explanation: "ВЕСТИ per azioni astratte guidate: tenere lezioni, condurre trattative, gestire un progetto. Non è un movimento fisico — è un ruolo."
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Андрей, почему ты никогда не {{1}} очки?",
        words: ["возишь", "носишь", "водишь"],
        correctAnswers: { 1: "носишь" },
        explanation: "НОСИТЬ = portare su di sé per abitudine. Gli occhiali non si trasportano da A a B — si indossano ogni giorno."
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Тимур, куда ты нас {{1}}?",
        words: ["водишь", "везёшь", "носишь"],
        correctAnswers: { 1: "везёшь" },
        explanation: "ВЕЗТИ = trasportare con un mezzo in questo momento. Sono in macchina adesso — azione in corso, direzione precisa."
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Ты часто {{1}} дочь на занятия после школы?",
        words: ["носишь", "возишь", "водишь"],
        correctAnswers: { 1: "водишь" },
        explanation: "ВОДИТЬ = accompagnare qualcuno a piedi in modo abituale. «Часто» conferma la ripetizione: non una volta sola, ma ogni settimana."
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Женя {{1}} только костюмы, и часов у него штук десять.",
        words: ["носит", "ведёт", "возит"],
        correctAnswers: { 1: "носит" },
        explanation: "НОСИТЬ = indossare per preferenza o abitudine. Non porta i vestiti da qualche parte — li indossa ogni giorno."
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Кто {{1}} расследование этого убийства?",
        words: ["возит", "носит", "ведёт"],
        correctAnswers: { 1: "ведёт" },
        explanation: "«Вести расследование» = condurre un'indagine. ВЕСТИ si usa per azioni astratte guidate: condurre trattative, un programma, un diario."
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Зачем ты {{1}} его за нос?",
        words: ["везёшь", "носишь", "водишь"],
        correctAnswers: { 1: "водишь" },
        explanation: "«Водить за нос» = «menare per il naso» in italiano — stessa immagine, stesso significato: ingannare qualcuno sistematicamente. ВОДИТЬ perché è un'azione continuata nel tempo."
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "В какую клинику ты кота {{1}}?",
        words: ["ведёшь", "возишь", "носишь"],
        correctAnswers: { 1: "возишь" },
        explanation: "ВОЗИТЬ = portare qualcuno con un mezzo in modo abituale. Il gatto va in clinica periodicamente, in macchina."
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я не {{1}} часов — смотри на телефоне.",
        words: ["везу", "ношу", "вожу"],
        correctAnswers: { 1: "ношу" },
        explanation: "НОСИТЬ = portare su di sé come abitudine. L'orologio non si trasporta — si indossa (o non si indossa)."
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Она уже год не {{1}} машину.",
        words: ["водит", "носит", "возит"],
        correctAnswers: { 1: "водит" },
        explanation: "ВОДИТЬ машину = guidare la macchina (capacità o abitudine). «Уже год» indica che l'abitudine si è interrotta nel tempo."
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Спряжение ВЕСТИ (только формы ВЕСТИ)
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "— Что я {{1}}? — Мероприятия.",
        words: ["веду", "ведёшь", "ведут"],
        correctAnswers: { 1: "веду" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Ты всегда {{1}} себя так, будто всё знаешь.",
        words: ["ведёт", "ведёшь", "веду"],
        correctAnswers: { 1: "ведёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "А кто {{1}} вторую часть презентации?",
        words: ["ведём", "ведёт", "ведут"],
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Три раза в неделю мы {{1}} занятия онлайн.",
        words: ["ведём", "ведут", "ведёте"],
        correctAnswers: { 1: "ведём" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Каждый день вы {{1}} приём пациентов?",
        words: ["ведём", "ведут", "ведёте"],
        correctAnswers: { 1: "ведёте" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Уже два часа они {{1}} переговоры.",
        words: ["ведёт", "ведём", "ведут"],
        correctAnswers: { 1: "ведут" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Расследование {{1}} Шерлок Холмс.",
        words: ["ведут", "ведёт", "ведём"],
        correctAnswers: { 1: "ведёт" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Я {{1}} дневник с детства.",
        words: ["ведёт", "ведём", "веду"],
        correctAnswers: { 1: "веду" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "Саша и Миша уже два года {{1}} блог о путешествиях.",
        words: ["ведёт", "ведут", "ведём"],
        correctAnswers: { 1: "ведут" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ.",
        text: "К чему ты {{1}}?",
        words: ["ведёшь", "ведут", "ведёт"],
        correctAnswers: { 1: "ведёшь" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Спряжение ВОДИТЬ (только формы ВОДИТЬ)
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "По субботам я {{1}} бабушку на рынок.",
        words: ["водит", "вожу", "водим"],
        correctAnswers: { 1: "вожу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Ты же отлично {{1}}!",
        words: ["водишь", "водит", "вожу"],
        correctAnswers: { 1: "водишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Нормально — он и видит, и {{1}}.",
        words: ["водит", "водим", "водишь"],
        correctAnswers: { 1: "водит" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "По вечерам мы {{1}} собаку в парк.",
        words: ["водят", "водим", "водите"],
        correctAnswers: { 1: "водим" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Вы уже давно {{1}} туристов по этому маршруту?",
        words: ["водим", "водят", "водите"],
        correctAnswers: { 1: "водите" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Они вообще меня никуда не {{1}}!",
        words: ["водят", "водит", "водим"],
        correctAnswers: { 1: "водят" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Артём каждое утро {{1}} сына на тренировку по плаванию.",
        words: ["водим", "водишь", "водит"],
        correctAnswers: { 1: "водит" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "С тех пор как получила права, я {{1}} сама — без инструктора.",
        words: ["водит", "вожу", "водят"],
        correctAnswers: { 1: "вожу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Молодые родители в нашем районе {{1}} детей в один и тот же садик.",
        words: ["водит", "водят", "водите"],
        correctAnswers: { 1: "водят" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ.",
        text: "Ты просто {{1}} его за нос.",
        words: ["водит", "вожу", "водишь"],
        correctAnswers: { 1: "водишь" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public · ВЕСТИ vs ВОДИТЬ (coppie contrasto)
// ============================================================
const p2cards = [
    { front: "Я веду дневник с детства.", back: "Я не вожу дружбу с ними.", explanation: "«Вести дневник» = tenere un diario — ВЕСТИ per azioni astratte continuate. «Водить дружбу» = coltivare un'amicizia — ВОДИТЬ per relazioni ripetute nel tempo." },
    { front: "По субботам я вожу бабушку на рынок.", back: "В субботу я веду бабушку на рынок.", explanation: "«По субботам» = ogni sabato, abitudine ripetuta → ВОДИТЬ. «В субботу» = un sabato specifico, azione puntuale → ВЕСТИ. Stessa nonna, frequenza diversa." },
    { front: "Ты ведёшь себя так, как будто всё знаешь.", back: "Ты водишь меня по кругу.", explanation: "«Вести себя» = comportarsi — espressione fissa con ВЕСТИ. «Водить по кругу» = girare in tondo — ВОДИТЬ per azione ripetuta e circolare." },
    { front: "Ты просто водишь его за нос.", back: "К чему ты ведёшь этот разговор?", explanation: "«Водить за нос» = menare per il naso — ВОДИТЬ per inganno sistematico. «Вести разговор» = condurre una conversazione verso uno scopo — ВЕСТИ per azioni astratte guidate." },
    { front: "Уже два часа они ведут переговоры.", back: "Зачем они эти хороводы водят?", explanation: "«Вести переговоры» = condurre trattative — fissa con ВЕСТИ. «Водить хороводы» = fare la danza rotonda — ВОДИТЬ per movimento circolare e ripetuto." },
    { front: "С твоими капризами тебя даже в кино вести не хочется.", back: "Он никогда меня не водит в кино!", explanation: "«Вести в кино» = portare una volta, azione puntuale → ВЕСТИ. «Водить в кино» = portare abitualmente → ВОДИТЬ. Stessa situazione, due frequenze diverse." },
    { front: "Лён, ты ведёшь себя как ребёнок!", back: "Сколько можно водить нас кругами! Что вы хотите сказать?", explanation: "«Вести себя» = comportarsi — sempre ВЕСТИ. «Водить кругами» = girare in tondo senza concludere — ВОДИТЬ per azione ripetuta e circolare." },
    { front: "Перед нами идёт девушка и ведёт на поводке кота.", back: "Лена всегда своего кота водит гулять на поводке.", explanation: "«Ведёт на поводке» = porta adesso, in questo momento → ВЕСТИ. «Водит гулять» = porta a spasso abitualmente → ВОДИТЬ. Stesso gatto, frequenza diversa." },
    { front: "Нашу программу ведёт доктор медицинских наук.", back: "Кто водит вашего сына на плавание?", explanation: "«Вести программу» = condurre un programma — ВЕСТИ per ruoli astratti. «Водить на плавание» = accompagnare regolarmente → ВОДИТЬ per abitudine." },
    { front: "Ты хочешь, чтобы тебя водили только по дорогим заведениям!", back: "Веду Лену сегодня в кино.", explanation: "«Водить по заведениям» = portare in giro più volte → ВОДИТЬ. «Веду сегодня» = porto oggi, una volta sola → ВЕСТИ. «Сегодня» marca l'occasione puntuale." },
];

// ============================================================
// PANEL 7 — Flashcard · student · ВЕСТИ vs ВОДИТЬ (coppie contrasto)
// ============================================================
const p7cards = [
    { front: "Я веду дневник с детства.", back: "Я не вожу дружбу с ними." },
    { front: "Ты ведёшь себя так, как будто всё знаешь.", back: "Ты водишь меня по кругу." },
    { front: "Уже два часа они ведут переговоры.", back: "Зачем они эти хороводы водят?" },
    { front: "Лён, ты ведёшь себя как ребёнок!", back: "Сколько можно водить нас кругами! Что вы хотите сказать?" },
    { front: "Нашу программу ведёт доктор медицинских наук.", back: "Кто водит вашего сына на плавание?" },
    { front: "А кто ведёт вторую часть презентации?", back: "Гид водит детей по выставке, они слушают его с открытыми ртами." },
    { front: "Три раза в неделю мы ведём занятия онлайн.", back: "Профессор водит ручкой по листу, не поднимает глаз. Думаю, что экзамен я провалил." },
    { front: "Счёт в матче ведёт команда московского Динамо.", back: "Дима никогда не водит меня на футбол." },
    { front: "Концерт ведёт известный шоумен.", back: "Мы водим детей на музыку и на рисование." },
    { front: "Я не умею водить машину.", back: "Не могу говорить. Веду машину." },
];

// ============================================================
// PANEL 8 — Flashcard · paid · ВЕСТИ vs ВОДИТЬ (coppie contrasto)
// ============================================================
const p8cards = [
    { front: "По субботам я вожу бабушку на рынок.", back: "В субботу я веду бабушку на рынок." },
    { front: "Ты хочешь, чтобы тебя водили только по дорогим заведениям!", back: "Веду Лену сегодня в кино." },
    { front: "Перед нами идёт девушка и ведёт на поводке кота.", back: "Лена всегда своего кота водит гулять на поводке." },
    { front: "Три раза в неделю мы ведём занятия онлайн.", back: "Профессор водит ручкой по листу, не поднимает глаз. Думаю, что экзамен я провалил." },
    { front: "Концерт ведёт известный шоумен.", back: "Мы водим детей на музыку и на рисование." },
    { front: "Он водит знакомства с нужными людьми.", back: "К чему ты ведёшь этот разговор?" },
    { front: "Ты водишь нас кругами уже целый час.", back: "Куда ты нас ведёшь?" },
    { front: "Отлично водишь! За пять лет ни одной аварии.", back: "Он очень аккуратно ведёт машину на горных дорогах." },
    { front: "Они меня вообще никуда не водят.", back: "Веду родителей в ресторан сегодня." },
    { front: "По вечерам мы водим собаку в парк.", back: "Ты ведёшь собаку гулять? Уже поздно!" },
];

// ============================================================
// PANEL 3 — Flashcard · public · Mix вести + водить + носить + везти
// ============================================================
const p3cards = [
    { front: "Дочь начала",                                 back: "вести дневник — прячет под матрас",              explanation: "«Вести дневник» = tenere un diario. ВЕСТИ per azioni astratte continuate, non movimento fisico." },
    { front: "Андрей, почему ты никогда не",                back: "носишь очки?",                                   explanation: "НОСИТЬ = portare su di sé per abitudine. Gli occhiali non si trasportano da A a B — si indossano." },
    { front: "Тимур, куда ты нас",                         back: "везёшь?",                                        explanation: "ВЕЗТИ = trasportare con un mezzo in questo momento. Siamo in macchina — azione in corso, direzione precisa." },
    { front: "Уже два часа они",                            back: "ведут переговоры",                               explanation: "«Вести переговоры» = condurre trattative. Espressione fissa con ВЕСТИ, non ВОДИТЬ." },
    { front: "Женя",                                        back: "носит только костюмы, и часов у него штук десять", explanation: "НОСИТЬ = indossare per preferenza o abitudine. Non porta i vestiti da qualche parte — li indossa ogni giorno." },
    { front: "После того случая они больше не",             back: "водят дружбу с соседями",                        explanation: "«Водить дружбу» = coltivare un'amicizia. ВОДИТЬ perché è un processo attivo e ripetuto nel tempo." },
    { front: "В какую клинику ты кота",                    back: "возишь?",                                        explanation: "ВОЗИТЬ = portare qualcuno con un mezzo in modo abituale. Il gatto va in clinica periodicamente, in macchina." },
    { front: "Я не",                                        back: "ношу часов — смотри на телефоне",                explanation: "НОСИТЬ = portare su di sé come abitudine. L'orologio non si trasporta — si indossa (o non si indossa)." },
    { front: "Ты говорила, что знаешь дорогу —",           back: "водишь нас кругами уже целый час",               explanation: "«Водить кругами» = girare in tondo, non arrivare da nessuna parte. ВОДИТЬ perché è un'azione continuata." },
    { front: "Вести тебя в ресторан —",                    back: "никаких денег не хватит",                        explanation: "Portare qualcuno una volta in un posto specifico → ВЕСТИ (infinito, azione puntuale, non abituale)." },
];

// ============================================================
// PANEL 9 — Flashcard · paid · Consolidamento Mix
// ============================================================
const p9cards = [
    { front: "С детства я",                                 back: "веду дневник" },
    { front: "Жень, ты уже",                               back: "везёшь проектор?" },
    { front: "Мне нравится",                               back: "носить красивую одежду" },
    { front: "По субботам я",                               back: "вожу бабушку на рынок" },
    { front: "Мы",                                          back: "везём воду, салфетки и вино" },
    { front: "Счёт в матче",                               back: "ведёт команда московского Динамо" },
    { front: "Я не",                                        back: "ношу шорты, ненавижу их!" },
    { front: "Говорят, ты отлично",                         back: "водишь — ни одной аварии за десять лет" },
    { front: "Они вообще меня никуда не водят",             back: "и не возят!" },
    { front: "Он водит знакомство",                         back: "с нужными людьми" },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Consolidamento Mix 2
// ============================================================
const p10cards = [
    { front: "Ты всегда",                           back: "ведёшь себя так, будто всё знаешь" },
    { front: "Тимур,",                              back: "куда ты нас везёшь?" },
    { front: "Вот Андрей не",                       back: "носит ни костюмов ни часов" },
    { front: "Ты же",                               back: "отлично водишь!" },
    { front: "Костюмы я",                           back: "ношу на работу или на рабочие встречи" },
    { front: "Три раза в неделю мы",                back: "ведём занятия онлайн" },
    { front: "Слушай, в какую клинику",             back: "ты кота возишь?" },
    { front: "С детства не",                        back: "ношу платья — терпеть не могу!" },
    { front: "Каждый день вы",                      back: "ведёте приём пациентов?" },
    { front: "С тех пор как получила права, я",     back: "вожу сама — без инструктора" },
];

// ============================================================
// PANEL 4 — Mixed Quiz · paid · ВЕСТИ/ВОДИТЬ
// ============================================================
function initPanel4VV() {
    const panel = document.getElementById('panel-vv-04');
    if (!panel) return;

    const container = panel.querySelector('#vv-04-cards-container');
    const prevBtn   = panel.querySelector('#vv-04-deck-prev');
    const nextBtn   = panel.querySelector('#vv-04-deck-next');
    const counterEl = panel.querySelector('#vv-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "По субботам я ___ бабушку на рынок.",                                          options: ["ношу",    "вожу",    "везу"],    answer: "вожу"   },
        { question: "Андрей, почему ты никогда не ___ очки?",                                       options: ["возишь",  "носишь",  "водишь"],  answer: "носишь" },
        { question: "Кто ___ расследование этого убийства?",                                        options: ["возит",   "носит",   "ведёт"],   answer: "ведёт"  },
        { question: "Жень, ты уже ___ проектор?",                                                   options: ["носишь",  "везёшь",  "ведёшь"],  answer: "везёшь" },
        { question: "Женя ___ только костюмы, и часов у него штук десять.",                         options: ["ведёт",   "носит",   "везёт"],   answer: "носит"  },
        { question: "Ты говорила, что знаешь дорогу — ___ нас кругами уже целый час.",              options: ["везёшь",  "ведёшь",  "водишь"],  answer: "водишь" },
        { question: "Мне нравится ___ красивую одежду.",                                            options: ["возить",  "носить",  "водить"],  answer: "носить" },
        { question: "Ты же отлично ___!",                                                           options: ["носишь",  "возишь",  "водишь"],  answer: "водишь" },
        { question: "В какую клинику ты кота ___?",                                                 options: ["водишь",  "несёшь",  "возишь"],  answer: "возишь" },
        { question: "Уже два часа они ___ переговоры.",                                             options: ["возят",   "носят",   "ведут"],   answer: "ведут"  },
    ];

    const matchPairs = [
        { left: "С детства я",       right: "веду дневник" },
        { left: "Я не",              right: "ношу часов — смотри на телефоне" },
        { left: "Нашу программу",    right: "ведёт доктор медицинских наук" },
        { left: "Мы",                right: "везём воду, салфетки и вино" },
        { left: "С детства не",      right: "ношу платья — терпеть не могу!" },
        { left: "Ты просто",         right: "водишь его за нос" },
        { left: "Костюмы я",         right: "ношу на работу или на рабочие встречи" },
        { left: "По вечерам мы",     right: "водим собаку в парк" },
        { left: "Тимур, куда ты нас",right: "везёшь?" },
        { left: "Лён, ты",           right: "ведёшь себя как ребёнок!" },
    ];

    const quizData = [
        { id: "vv-001", promptPrefix: "Счёт в матче",                    promptSuffix: "команда московского Динамо.",          answers: ["ведёт"]  },
        { id: "vv-002", promptPrefix: "Я не",                            promptSuffix: "шорты, ненавижу их!",                  answers: ["ношу"]   },
        { id: "vv-003", promptPrefix: "Жень, ты уже",                    promptSuffix: "проектор?",                            answers: ["везёшь"] },
        { id: "vv-004", promptPrefix: "Они вообще меня никуда не",       promptSuffix: "!",                                    answers: ["водят"]  },
        { id: "vv-005", promptPrefix: "Слушай, в какую клинику ты кота", promptSuffix: "?",                                    answers: ["возишь"] },
        { id: "vv-006", promptPrefix: "Он",                              promptSuffix: "знакомство с нужными людьми.",         answers: ["водит"]  },
        { id: "vv-007", promptPrefix: "С тех пор как получила права, я", promptSuffix: "сама — без инструктора.",              answers: ["вожу"]   },
        { id: "vv-008", promptPrefix: "Вот Андрей не",                   promptSuffix: "ни костюмов ни часов.",                answers: ["носит"]  },
        { id: "vv-009", promptPrefix: "Три раза в неделю мы",            promptSuffix: "занятия онлайн.",                      answers: ["ведём"]  },
        { id: "vv-010", promptPrefix: "Мы",                              promptSuffix: "воду, салфетки и вино.",               answers: ["везём"]  },
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
            card.className = 'fca01-card-container vv-04-card';
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
        container.querySelectorAll('.vv-04-card').forEach(card => {
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
                const card       = this.closest('.vv-04-card');
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
        container.querySelectorAll('.vv-04-card').forEach((c, i) => {
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
    'panel-vv-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-vv-01', exercises: p1exercises }),
    'panel-vv-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-vv-05', exercises: p5exercises }),
    'panel-vv-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-vv-06', exercises: p6exercises }),
    'panel-vv-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-02', cards: p2cards }),
    'panel-vv-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-07', cards: p7cards }),
    'panel-vv-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-08', cards: p8cards }),
    'panel-vv-03': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-03', cards: p3cards }),
    'panel-vv-04': () => initPanel4VV(),
    'panel-vv-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-09', cards: p9cards }),
    'panel-vv-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-vv-10', cards: p10cards }),
};

initPanelManager({ initializers, enableAccessControl: true });
