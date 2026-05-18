import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix везти + возить
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Я {{1}} детей в школу каждый день.",
        words: ["вожу", "везу", "возит"],
        correctAnswers: { 1: "вожу" },
        wrongFeedback: {
            "везу": "«Каждый день» = azione abituale → возить, non везти. Везти = trasportare adesso verso una destinazione specifica.",
            "возит": "Verbo giusto (возить), ma soggetto «я» → 1ª sg.: вожу, non возит."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Тимур, куда ты нас {{1}}?",
        words: ["везёшь", "возишь", "везут"],
        correctAnswers: { 1: "везёшь" },
        wrongFeedback: {
            "возишь": "«Куда ты нас...» = viaggio specifico adesso → везти, non возить.",
            "везут": "Verbo giusto (везти), ma soggetto «ты» → 2ª sg.: везёшь, non везут."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Не волнуйся — Андрей уже {{1}} вино и торт.",
        words: ["везёт", "возит", "везём"],
        correctAnswers: { 1: "везёт" },
        wrongFeedback: {
            "возит": "«Уже едет» = sta portando adesso → везти, non возить.",
            "везём": "Verbo giusto (везти), ma soggetto «Андрей» → 3ª sg.: везёт, non везём."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} воду, салфетки и вино — уже едем!",
        words: ["везём", "возим", "везут"],
        correctAnswers: { 1: "везём" },
        wrongFeedback: {
            "возим": "«Уже едем» = in viaggio adesso → везти, non возить.",
            "везут": "Verbo giusto (везти), ma soggetto «мы» → 1ª pl.: везём, non везут."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Таксист нас час кругами по центру {{1}}.",
        words: ["возит", "везёт", "возим"],
        correctAnswers: { 1: "возит" },
        wrongFeedback: {
            "везёт": "Girare in cerchio per un'ora = comportamento abituale del tassista → возить, non везти.",
            "возим": "Verbo giusto (возить), ma soggetto «таксист» → 3ª sg.: возит, non возим."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Подожди — {{1}} кота к ветеринару, он заболел!",
        words: ["везу", "вожу", "везёт"],
        correctAnswers: { 1: "везу" },
        wrongFeedback: {
            "вожу": "Emergenza adesso («он заболел») = viaggio specifico → везти, non возить.",
            "везёт": "Verbo giusto (везти), ma soggetto «я» → 1ª sg.: везу, non везёт."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Димин класс {{1}} на экскурсии каждые выходные.",
        words: ["возят", "везут", "возите"],
        correctAnswers: { 1: "возят" },
        wrongFeedback: {
            "везут": "«Каждые выходные» = azione regolare → возить, non везти.",
            "возите": "Verbo giusto (возить), ma soggetto «класс» (они) → 3ª pl.: возят, non возите."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Тимур {{1}} стенд презентации — уже едет.",
        words: ["везёт", "возит", "везут"],
        correctAnswers: { 1: "везёт" },
        wrongFeedback: {
            "возит": "«Уже едет» = sta portando adesso → везти, non возить.",
            "везут": "Verbo giusto (везти), ma soggetto «Тимур» → 3ª sg.: везёт, non везут."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "На обиженных воду {{1}}!",
        words: ["возят", "везут", "возит"],
        correctAnswers: { 1: "возят" },
        wrongFeedback: {
            "везут": "«Возить воду» è un'espressione idiomatica fissa → возят. Везти non funziona in questo idioma.",
            "возит": "Forma giusta (возить), ma il soggetto implicito è «они» → 3ª pl.: возят, non возит."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Мы {{1}} грузы через Эстонию — так быстрее.",
        words: ["возим", "везём", "возят"],
        correctAnswers: { 1: "возим" },
        wrongFeedback: {
            "везём": "Trasportare merci via Estonia è un'abitudine lavorativa → возить, non везти.",
            "возят": "Verbo giusto (возить), ma soggetto «мы» → 1ª pl.: возим, non возят."
        }
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Solo ВОЗИТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Я {{1}} детей в школу каждый день.",
        words: ["вожу", "возит", "возим"],
        correctAnswers: { 1: "вожу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Слушай, в какую клинику ты кота {{1}}?",
        words: ["возишь", "возит", "вожу"],
        correctAnswers: { 1: "возишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Мы уже неделю бабушкино варенье в машине {{1}}.",
        words: ["возим", "возят", "вожу"],
        correctAnswers: { 1: "возим" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Мы {{1}} грузы через Эстонию — так быстрее.",
        words: ["возим", "возят", "возит"],
        correctAnswers: { 1: "возим" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Вы {{1}} туристов этой дорогой?",
        words: ["возите", "возим", "возят"],
        correctAnswers: { 1: "возите" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Димин класс {{1}} на экскурсии каждые выходные.",
        words: ["возят", "возит", "возите"],
        correctAnswers: { 1: "возят" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Ты {{1}} свои вещи туда-обратно — уже реши, где ты жить хочешь!",
        words: ["возишь", "везёшь", "вожу"],
        correctAnswers: { 1: "возишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Таксист нас час кругами по центру {{1}}.",
        words: ["возит", "везёт", "возим"],
        correctAnswers: { 1: "возит" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "На обиженных воду {{1}}!",
        words: ["возят", "везут", "возит"],
        correctAnswers: { 1: "возят" }
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ.",
        text: "Вам хорошо — у вас есть на чём {{1}}!",
        words: ["возить", "везти", "возит"],
        correctAnswers: { 1: "возить" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo ВЕЗТИ
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "{{1}} кота к ветеринару — он заболел!",
        words: ["везу", "вожу", "везёт"],
        correctAnswers: { 1: "везу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Тимур, куда ты нас {{1}}?",
        words: ["везёшь", "возишь", "везут"],
        correctAnswers: { 1: "везёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Андрей уже {{1}} вино и торт.",
        words: ["везёт", "возит", "везём"],
        correctAnswers: { 1: "везёт" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Мы {{1}} воду, салфетки и вино — уже едем!",
        words: ["везём", "возим", "везут"],
        correctAnswers: { 1: "везём" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "В следующие выходные {{1}} сына в горы, кататься на лыжах!",
        words: ["везу", "вожу", "везёт"],
        correctAnswers: { 1: "везу" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Жень, ты уже {{1}} проектор?",
        words: ["везёшь", "возишь", "везут"],
        correctAnswers: { 1: "везёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Муж {{1}} детей в школу — я опаздываю!",
        words: ["везёт", "возит", "везём"],
        correctAnswers: { 1: "везёт" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Везёт тому, кто {{1}}!",
        words: ["везёт", "возит", "везут"],
        correctAnswers: { 1: "везёт" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Они {{1}} мебель на новую квартиру.",
        words: ["везут", "везёт", "везём"],
        correctAnswers: { 1: "везут" }
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ.",
        text: "Таксист вздохнул: тяжело {{1}} пассажиров из аэропорта по пробкам.",
        words: ["везти", "возить", "везёт"],
        correctAnswers: { 1: "везти" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public · Контраст ВОЗИТЬ vs ВЕЗТИ
// ============================================================
const p2cards = [
    {
        front: "Я вожу кота к ветеринару два раза в год.",
        back: "Кот заболел, ночь, все закрыто. Вот везу его к ветеринару на другой конец города.",
        explanation: "«Вожу два раза в год» = ci vado abitualmente, fa parte della routine. «Везу» = lo sto portando adesso — è un'emergenza: notte, tutto chiuso."
    },
    {
        front: "Я вожу детей в школу каждый день.",
        back: "Муж заболел, метро встало. Везу детей сама — опаздываю на работу!",
        explanation: "«Вожу каждый день» = è la mia routine quotidiana. «Везу сама» = lo sto facendo io adesso — situazione eccezionale, il marito è malato."
    },
    {
        front: "Мы уже неделю бабушкино варенье в машине возим.",
        back: "Бабушка звонит каждый день — везём варенье наконец. Едем уже.",
        explanation: "«Возим» = lo trasportiamo da una settimana — l'azione si ripete senza concludersi (abitudine procrastinata). «Везём» = lo stiamo portando adesso — finalmente siamo in viaggio!"
    },
    {
        front: "Мы возим Петю гулять в парк в центре Питера.",
        back: "Везём Петю в парк — сегодня там детский праздник, он не мог пропустить!",
        explanation: "«Возим гулять» = lo portiamo al parco di solito, è la nostra abitudine. «Везём» = lo stiamo portando adesso — oggi c'è un'occasione speciale."
    },
    {
        front: "Ты возишь свои вещи туда-обратно — уже реши, где жить!",
        back: "Всё, решила! Везу последние вещи к маме — переезжаю сегодня.",
        explanation: "«Возишь туда-обратно» = lo fai continuamente senza decidere (abitudine frustrante). «Везу» = lo sto facendo adesso — ho deciso, azione in corso!"
    },
];

// ============================================================
// PANEL 3 — Flashcard · public · Контраст НЕСТИ/НОСИТЬ vs ВЕЗТИ/ВОЗИТЬ
// ============================================================
const p3cards = [
    {
        front: "Я час ношу документы с этажа на этаж, подпишите уже!",
        back: "Я везу документы в центральный офис.",
        explanation: "«Ношу» = lo faccio a piedi, di piano in piano — azione ripetuta senza meta. «Везу» = lo sto portando in auto adesso — viaggio specifico verso una destinazione."
    },
    {
        front: "Несу цветы домой — сегодня годовщина.",
        back: "Везу цветы с рынка — в машине, уже еду!",
        explanation: "«Несу» = li sto portando a piedi adesso, verso casa. «Везу» = li sto portando in auto adesso — dal mercato, già in viaggio."
    },
    {
        front: "Она несёт пакеты из магазина — тяжело, но такси не взяла.",
        back: "Андрей везёт вино и торт — он за рулём.",
        explanation: "«Несёт» = porta a piedi adesso, ha rifiutato il taxi. «Везёт» = trasporta in auto adesso — sta già guidando verso la meta."
    },
    {
        front: "Несу кота к машине — заболел, едем к ветеринару!",
        back: "Я вожу кота к ветеринару два раза в год.",
        explanation: "«Несу» = lo sto portando a piedi adesso (fino alla macchina). «Вожу» = lo porto abitualmente in auto — fa parte della routine."
    },
    {
        front: "Носишь свои вещи туда-обратно пешком — уже реши, где жить!",
        back: "Ты возишь свои вещи туда-обратно — уже реши, где ты жить хочешь!",
        explanation: "«Носишь» = lo fai a piedi, avanti e indietro. «Возишь» = lo stesso comportamento ma in macchina — stessa abitudine frustrante, mezzo diverso."
    },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Контраст НЕСТИ/НОСИТЬ vs ВЕЗТИ/ВОЗИТЬ · углублённый
// ============================================================
const p10cards = [
    { front: "Я час ношу документы с этажа на этаж, подпишите уже!", back: "Я везу документы в центральный офис." },
    { front: "Несу кота к машине — заболел, едем к ветеринару!", back: "Я вожу кота к ветеринару два раза в год." },
    { front: "Нести осторожнее, свечи на торте могут потухнуть!", back: "Не волнуйся, торт я купил, уже везу." },
    { front: "Я несу твой чемодан, ты что туда положила, его не поднять!", back: "Папа везёт мой чемодан, я его дома забыла. Ты где?" },
    { front: "Несут мебель по лестнице — лифт не работает!", back: "Они везут мебель на новую квартиру." },
    { front: "Мы уже купили продукты, несём их домой.", back: "Мы везём воду, салфетки и вино — уже едем!" },
    { front: "Муж несёт спящего сына.", back: "Муж везёт детей в школу — я опаздываю!" },
    { front: "Несу лыжи к машине — едем в горы!", back: "В следующие выходные везу сына в горы, кататься на лыжах!" },
    { front: "Несём коробки со склада — тяжело, но машины нет.", back: "Мы возим грузы через Эстонию — так быстрее." },
    { front: "Дети несут рюкзаки к автобусу, едут в поход.", back: "Везут класс сегодня в Эрмитаж — дети в восторге!" },
];

// ============================================================
// PANEL 9 — Flashcard · paid · Контраст НЕСТИ/НОСИТЬ vs ВЕЗТИ/ВОЗИТЬ
// ============================================================
const p9cards = [
    { front: "Я час ношу документы с этажа на этаж, подпишите уже!", back: "Я везу документы в центральный офис." },
    { front: "Несу цветы домой — сегодня годовщина.", back: "Везу цветы с рынка — в машине, уже еду!" },
    { front: "Она несёт пакеты из магазина — тяжело, но такси не взяла.", back: "Андрей везёт вино и торт — он за рулём." },
    { front: "Несу кота к машине — заболел, едем к ветеринару!", back: "Я вожу кота к ветеринару два раза в год." },
    { front: "Носишь свои вещи туда-обратно пешком — уже реши, где жить!", back: "Ты возишь свои вещи туда-обратно — уже реши, где ты жить хочешь!" },
    { front: "Нести осторожнее, свечи на торте могут потухнуть!", back: "Не волнуйся, торт я купил, уже везу." },
    { front: "Несём стенд по лестнице — лифт сломан!", back: "Тимур везёт стенд на выставку — уже в пути." },
    { front: "Ох, проектор же в другом корпусе, туда ехать час!", back: "Женя уже везёт его." },
    { front: "Я несу твой чемодан, ты что туда положила, его не поднять!", back: "Папа везёт мой чемодан, я его дома забыла. Ты где?" },
    { front: "Несут мебель по лестнице — лифт не работает!", back: "Они везут мебель на новую квартиру." },
];

// ============================================================
// PANEL 8 — Flashcard · paid · Контраст ВОЗИТЬ vs ВЕЗТИ
// ============================================================
const p8cards = [
    { front: "Я вожу детей в школу каждый день.", back: "Муж заболел, метро встало. Везу детей сама — опаздываю на работу!" },
    { front: "Мы уже неделю бабушкино варенье в машине возим.", back: "Бабушка звонит каждый день — везём варенье наконец. Едем уже." },
    { front: "Мы всегда возим туристов этой дорогой.", back: "Везём туристов — но дорогу закрыли! Едем в объезд." },
    { front: "Таксист нас кругами по центру возит.", back: "Таксист везёт нас в аэропорт." },
    { front: "Димин класс возят на экскурсии каждые выходные.", back: "Везут класс сегодня в Эрмитаж — дети в восторге!" },
    { front: "Возим оборудование клиентам каждую неделю.", back: "Везём оборудование на конференцию — уже едем!" },
    { front: "Вожу маму в больницу каждую пятницу.", back: "Везу маму в больницу, ей плохо." },
    { front: "Возим грузы через Эстонию — так быстрее.", back: "Везём срочный груз в Таллин — клиент ждёт." },
    { front: "Петю возят на занятия три раза в неделю.", back: "Везём Петю в парк — сегодня там детский праздник!" },
    { front: "Тимур возит стенд на все выставки.", back: "Тимур везёт стенд на выставку — уже в пути." },
];

// ============================================================
// PANEL 7 — Flashcard · paid · Контраст ВОЗИТЬ vs ВЕЗТИ
// ============================================================
const p7cards = [
    { front: "Я вожу кота к ветеринару два раза в год.", back: "Кот заболел, ночь, все закрыто. Вот везу его к ветеринару на другой конец города." },
    { front: "Ты возишь свои вещи туда-обратно — уже реши, где жить!", back: "Всё, решила! Везу последние вещи к маме — переезжаю сегодня." },
    { front: "Мы всегда возим туристов этой дорогой.", back: "Везём туристов — но дорогу закрыли! Едем в объезд." },
    { front: "Таксист нас кругами по центру возит.", back: "Таксист везёт нас в аэропорт." },
    { front: "Димин класс возят на экскурсии каждые выходные.", back: "Везут класс сегодня в Эрмитаж — дети в восторге!" },
];

// ============================================================
// PANEL 4 — Mixed Quiz · paid · ВЕЗТИ/ВОЗИТЬ
// ============================================================
function initPanel4VZ() {
    const panel = document.getElementById('panel-vz-04');
    if (!panel) return;

    const container = panel.querySelector('#vz-04-cards-container');
    const prevBtn   = panel.querySelector('#vz-04-deck-prev');
    const nextBtn   = panel.querySelector('#vz-04-deck-next');
    const counterEl = panel.querySelector('#vz-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Я час ___ документы с этажа на этаж, подпишите уже!",       options: ["ношу",   "несу",   "вожу"],   answer: "ношу"   },
        { question: "Она ___ пакеты из магазина — тяжело, но такси не взяла.",   options: ["несёт",  "возит",  "носит"],  answer: "несёт"  },
        { question: "___ кота к машине — он заболел!",                           options: ["несу",   "везу",   "ношу"],   answer: "несу"   },
        { question: "Я ___ детей в школу каждый день.",                          options: ["вожу",   "везу",   "возит"],  answer: "вожу"   },
        { question: "Тимур, куда ты нас ___?",                                   options: ["везёшь", "возишь", "несёшь"], answer: "везёшь" },
        { question: "Андрей ___ вино и торт — он уже едет.",                     options: ["везёт",  "возит",  "несёт"],  answer: "везёт"  },
        { question: "Таксист нас час кругами по центру ___.",                    options: ["возит",  "везёт",  "носит"],  answer: "возит"  },
        { question: "Мы ___ воду, салфетки и вино — уже едем!",                  options: ["везём",  "возим",  "несём"],  answer: "везём"  },
        { question: "Димин класс ___ на экскурсии каждые выходные.",             options: ["возят",  "везут",  "несут"],  answer: "возят"  },
        { question: "На обиженных воду ___!",                                    options: ["возят",  "везут",  "возит"],  answer: "возят"  },
    ];

    const matchPairs = [
        { left: "Нести осторожнее —",         right: "свечи на торте могут потухнуть!"         },
        { left: "Я несу твой чемодан,",       right: "ты что туда положила, его не поднять!"   },
        { left: "Дети несут рюкзаки",         right: "к автобусу, едут в поход."               },
        { left: "Мы уже купили продукты,",    right: "несём их домой."                         },
        { left: "Папа везёт мой чемодан —",   right: "я его дома забыла. Ты где?"              },
        { left: "Везём туристов —",           right: "но дорогу закрыли! Едем в объезд."       },
        { left: "Не волнуйся, торт я купил,", right: "уже везу."                               },
        { left: "Мы уже неделю",              right: "бабушкино варенье в машине возим."        },
        { left: "Везут класс сегодня",        right: "в Эрмитаж — дети в восторге!"            },
        { left: "Таксист везёт нас",          right: "в аэропорт."                             },
    ];

    const quizData = [
        { id: "vz4-001", promptPrefix: "Муж",                   promptSuffix: "спящего сына домой.",                            answers: ["несёт"]  },
        { id: "vz4-002", promptPrefix: "Дети",                  promptSuffix: "рюкзаки к автобусу — едут в поход.",             answers: ["несут"]  },
        { id: "vz4-003", promptPrefix: "Я час",                 promptSuffix: "документы с этажа на этаж, подпишите уже!",      answers: ["ношу"]   },
        { id: "vz4-004", promptPrefix: "Тимур",                 promptSuffix: "стенд на выставку — уже в пути.",                answers: ["везёт"]  },
        { id: "vz4-005", promptPrefix: "Папа сейчас",           promptSuffix: "нас на вокзал — поезд через час.",               answers: ["везёт"]  },
        { id: "vz4-006", promptPrefix: "На обиженных воду",     promptSuffix: "!",                                              answers: ["возят"]  },
        { id: "vz4-007", promptPrefix: "Ты",                    promptSuffix: "свои вещи туда-обратно — уже реши, где жить!",   answers: ["возишь"] },
        { id: "vz4-008", promptPrefix: "Женя уже",              promptSuffix: "проектор — туда ехать час!",                     answers: ["везёт"]  },
        { id: "vz4-009", promptPrefix: "Сегодня я",             promptSuffix: "маму в больницу — ей плохо.",                    answers: ["везу"]   },
        { id: "vz4-010", promptPrefix: "Мы сейчас",             promptSuffix: "срочный груз в Таллин — клиент ждёт.",           answers: ["везём"]  },
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
            card.className = 'fca01-card-container vz-04-card';
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
        container.querySelectorAll('.vz-04-card').forEach(card => {
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
                const card       = this.closest('.vz-04-card');
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
        container.querySelectorAll('.vz-04-card').forEach((c, i) => {
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
    'panel-vz-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-vz-01', exercises: p1exercises }),
    'panel-vz-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-02', cards: p2cards }),
    'panel-vz-03': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-03', cards: p3cards }),
    'panel-vz-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-vz-05', exercises: p5exercises }),
    'panel-vz-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-vz-06', exercises: p6exercises }),
    'panel-vz-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-07', cards: p7cards }),
    'panel-vz-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-08', cards: p8cards }),
    'panel-vz-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-09', cards: p9cards }),
    'panel-vz-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-vz-10', cards: p10cards }),
    'panel-vz-04': () => initPanel4VZ(),
};

initPanelManager({ initializers, enableAccessControl: true });
