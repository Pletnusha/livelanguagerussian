import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Mix нести + носить
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Он её {{1}} на руках — делает всё, что она захочет.",
        words: ["носит", "несёт", "носим"],
        correctAnswers: { 1: "носит" },
        wrongFeedback: {
            "несёт": "«Носить на руках» è un'espressione idiomatica fissa (adorare qualcuno). Нести = portare verso una meta adesso — non funziona qui.",
            "носим": "Verbo giusto, ma soggetto «он» → 3ª sg.: носит, non носим."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "У меня компьютер сломался — {{1}} его в ремонт.",
        words: ["несу", "ношу", "несёт"],
        correctAnswers: { 1: "несу" },
        wrongFeedback: {
            "ношу": "C'è una destinazione specifica («в ремонт»), movimento diretto adesso → нести, non носить.",
            "несёт": "Verbo giusto, ma soggetto «я» → 1ª sg.: несу, non несёт."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Она никогда не {{1}} платья.",
        words: ["носит", "несёт", "носим"],
        correctAnswers: { 1: "носит" },
        wrongFeedback: {
            "несёт": "I vestiti si indossano abitualmente («никогда» = mai, abitudine costante) → носить, non нести.",
            "носим": "Verbo giusto, ma soggetto «она» → 3ª sg.: носит, non носим."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Кто будет {{1}} ответственность за этот провал?",
        words: ["нести", "носить", "несёт"],
        correctAnswers: { 1: "нести" },
        wrongFeedback: {
            "носить": "«Нести ответственность» è un'espressione fissa del registro formale. Носить non si usa mai con «ответственность».",
            "несёт": "Dopo «будет» serve l'infinito, non la forma personale."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Куда ты {{1}} все эти книги?",
        words: ["несёшь", "носишь", "несут"],
        correctAnswers: { 1: "несёшь" },
        wrongFeedback: {
            "носишь": "«Куда» + destinazione = movimento diretto adesso → нести, non носить (носить = abitudine).",
            "несут": "Verbo giusto, ma soggetto «ты» → 2ª sg.: несёшь, non несут."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Тебе нужно {{1}} очки — ты ничего не видишь!",
        words: ["носить", "нести", "носит"],
        correctAnswers: { 1: "носить" },
        wrongFeedback: {
            "нести": "Gli occhiali si indossano abitualmente, non si portano verso una destinazione → носить, non нести. Entrambi sono infiniti, ma il significato è sbagliato.",
            "носит": "Dopo «нужно» serve l'infinito, non la forma personale."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Компания {{1}} серьёзные потери из-за кризиса.",
        words: ["несёт", "носит", "несут"],
        correctAnswers: { 1: "несёт" },
        wrongFeedback: {
            "носит": "«Нести потери» è un'espressione fissa del registro formale/economico. Носить non si combina con «потери».",
            "несут": "Verbo giusto, ma soggetto «компания» → 3ª sg.: несёт, non несут."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Куда ты {{1}} нашего кота? — К ветеринару, он проглотил шарик.",
        words: ["несёшь", "носишь", "несут"],
        correctAnswers: { 1: "несёшь" },
        wrongFeedback: {
            "носишь": "Movimento diretto verso una destinazione specifica adesso («к ветеринару») → нести, non носить.",
            "несут": "Verbo giusto, ma soggetto «ты» → 2ª sg.: несёшь, non несут."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Хватит {{1}} чушь — говори по делу!",
        words: ["нести", "носить", "несёт"],
        correctAnswers: { 1: "нести" },
        wrongFeedback: {
            "носить": "«Нести чушь» è un'espressione idiomatica fissa (dire stupidaggini). Носить non funziona mai in questo contesto.",
            "несёт": "Dopo «хватит» serve l'infinito, non la forma personale."
        }
    },
    {
        instruction: "Выбери правильную форму глагола.",
        text: "Зачем ты {{1}} такие тяжести?!",
        words: ["носишь", "несёшь", "носит"],
        correctAnswers: { 1: "носишь" },
        wrongFeedback: {
            "несёшь": "«Зачем ты» + «такие тяжести» si riferisce a un'abitudine (perché porti sempre cose così pesanti?) → носить, non нести.",
            "носит": "Verbo giusto, ma soggetto «ты» → 2ª sg.: носишь, non носит."
        }
    },
];

// ============================================================
// PANEL 5 — DragDrop · paid · Solo НОСИТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Я не {{1}} шорты, ненавижу их!",
        words: ["ношу", "носит", "носим"],
        correctAnswers: { 1: "ношу" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Зачем ты {{1}} такие тяжести?!",
        words: ["носишь", "носит", "ношу"],
        correctAnswers: { 1: "носишь" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Он её {{1}} на руках — делает всё, что она захочет.",
        words: ["носит", "носим", "носят"],
        correctAnswers: { 1: "носит" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Мы {{1}} бельё стирать в прачечную.",
        words: ["носим", "носят", "носите"],
        correctAnswers: { 1: "носим" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Вы {{1}} форму на работе?",
        words: ["носите", "носим", "носят"],
        correctAnswers: { 1: "носите" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "В Хогвартсе все студенты {{1}} мантии — даже на уроках.",
        words: ["носят", "носит", "носите"],
        correctAnswers: { 1: "носят" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Тебе нужно {{1}} очки — ты ничего не видишь!",
        words: ["носить", "носит", "носишь"],
        correctAnswers: { 1: "носить" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Вот Андрей не {{1}} ни костюмов, ни часов.",
        words: ["носит", "носим", "ношу"],
        correctAnswers: { 1: "носит" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Мне нравится {{1}} красивую одежду.",
        words: ["носить", "носит", "ношу"],
        correctAnswers: { 1: "носить" }
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ.",
        text: "Почему ты не {{1}} джинсы, которые я тебе купила?",
        words: ["носишь", "носит", "носите"],
        correctAnswers: { 1: "носишь" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Solo НЕСТИ
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "У меня компьютер сломался — {{1}} его в ремонт.",
        words: ["несу", "несёт", "несём"],
        correctAnswers: { 1: "несу" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Зачем ты {{1}} тарелки в комнату?",
        words: ["несёшь", "несёт", "несут"],
        correctAnswers: { 1: "несёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Она {{1}} горячий суп в комнату.",
        words: ["несёт", "несу", "несёшь"],
        correctAnswers: { 1: "несёт" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Мы {{1}} цветы на свадьбу.",
        words: ["несём", "несут", "несёте"],
        correctAnswers: { 1: "несём" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Куда вы {{1}} эти коробки?",
        words: ["несёте", "несём", "несут"],
        correctAnswers: { 1: "несёте" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Они {{1}} диван на четвёртый этаж.",
        words: ["несут", "несёт", "несёте"],
        correctAnswers: { 1: "несут" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Кто будет {{1}} ответственность за этот провал?",
        words: ["нести", "несёт", "несу"],
        correctAnswers: { 1: "нести" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Компания {{1}} серьёзные потери из-за кризиса.",
        words: ["несёт", "несут", "несём"],
        correctAnswers: { 1: "несёт" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "{{1}} подарок Кате — у неё был день рождения.",
        words: ["несу", "несёшь", "несёт"],
        correctAnswers: { 1: "несу" }
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ.",
        text: "Хватит {{1}} чушь — говори по делу!",
        words: ["нести", "несу", "несёт"],
        correctAnswers: { 1: "нести" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public · Mix нести + носить
// ============================================================
const p2cards = [
    {
        front: "Я ношу джинсы.",
        back: "Я несу сдавать джинсы — мне мал мой размер.",
        explanation: "«Ношу джинсы» = li indosso abitualmente. «Несу сдавать» = li sto portando adesso con una destinazione precisa — cambio taglia."
    },
    {
        front: "Я не ношу солнечные очки.",
        back: "Несу очки в ремонт — они сломались.",
        explanation: "«Не ношу очки» = non le indosso mai (abitudine). «Несу в ремонт» = le sto portando adesso dal riparatore."
    },
    {
        front: "Я ненавижу носить часы — есть же телефон!",
        back: "Несу часы в ремонт — стекло треснуло.",
        explanation: "«Ненавижу носить часы» = odio indossarli in generale. «Несу в ремонт» = li sto portando adesso — il vetro si è rotto."
    },
    {
        front: "Он носит костюм только на важные встречи.",
        back: "Он несёт костюм в химчистку — завтра переговоры.",
        explanation: "«Носит костюм» = lo indossa in certi contesti (abitudine). «Несёт в химчистку» = lo sta portando adesso — domani ha una riunione."
    },
    {
        front: "Мы два раза в год носим кота к ветеринару.",
        back: "Несу к ветеринару — он шарик проглотил.",
        explanation: "«Носим кота» = lo portiamo abitualmente (due volte all'anno). «Несу» = lo sto portando adesso — ha ingoiato una pallina!"
    },
];

// ============================================================
// PANEL 7 — Flashcard · paid · Mix нести + носить
// ============================================================
const p7cards = [
    { front: "Я не ношу шорты — ненавижу их!",                                                          back: "Я несу шорты Кате в подарок." },
    { front: "Я несу нашего кота к ветеринару — он шарик проглотил.",                                   back: "Я всегда ношу нашего кота к ветеринару. У него кабинет рядом с домом, это удобно." },
    { front: "Женя носит только костюмы.",                                                               back: "Женя несёт костюм к портному — нужно ушить пиджак." },
    { front: "Я не ношу часов.",                                                                         back: "Я несу часы в ремонт — стекло треснуло." },
    { front: "Мы несём букет на свадьбу.",                                                               back: "Андрей каждый день носит Лене цветы." },
    { front: "Стиральная машина сломалась — мы несём бельё в прачечную.",                               back: "Мы редко носим бельё в прачечную — только если стиральная машина сломалась." },
    { front: "Она не носит юбки — думает, что у неё ноги некрасивые.",                                  back: "Она несёт юбку в ателье, чтобы укоротить." },
    { front: "Андрей всегда носит джинсы.",                                                              back: "Андрей несёт новые джинсы сдавать в магазин — они оказались бракованными." },
    { front: "Лифт сломался, и они несут диван на четвёртый этаж.",                                     back: "Переезд был ужасным — лифт был сломан, и они целый день носили вещи на четвёртый этаж." },
    { front: "Мы несём ответственность за тех, кого приручили.",                                        back: "Куда тебя несёт! Тормози — мы же в горах! Здесь так быстро ехать опасно." },
];

// ============================================================
// PANEL 8 — Flashcard · paid · Mix нести + носить
// ============================================================
const p8cards = [
    { front: "Куда ты несёшь все эти книги? — Да вот, хочу в библиотеку отдать.",                      back: "Ты целый день носишь какие-то книги? Куда? — Остались после дедушки, раздаю: что-то в библиотеку, что-то продал, что-то друзьям." },
    { front: "Он носит костюм только на важные встречи.",                                               back: "Он несёт костюм в химчистку — завтра переговоры." },
    { front: "Где его носит!",                                                                          back: "Куда тебя несёт!" },
    { front: "Я не ношу шорты — ненавижу их!",                                                         back: "Я несу шорты Кате в подарок." },
    { front: "Компания несёт потери из-за финансового кризиса.",                                        back: "Директор носит эту идею уже год." },
    { front: "Я ненавижу носить часы — есть же телефон!",                                              back: "Несу часы в ремонт — стекло треснуло." },
    { front: "Андрей всегда носит мои тяжёлые сумки.",                                                 back: "Помоги мне нести эти сумки, пожалуйста!" },
    { front: "Мы два раза в год носим кота к ветеринару.",                                             back: "Несу к ветеринару — он шарик проглотил." },
    { front: "Я несу телефон в ремонт.",                                                               back: "Я всегда ношу телефон в сумке." },
    { front: "Женя носит только костюмы.",                                                              back: "Женя несёт костюм к портному — нужно ушить пиджак." },
];

// ============================================================
// PANEL 3 — Flashcard · public · Mix нести + носить (повторение)
// ============================================================
const p3cards = [
    {
        front: "Он всегда",
        back: "носит маску — никто не знает, что думает.",
        explanation: "«Носить маску» — espressione figurativa: indossare una maschera = nascondere la vera personalità. Носить, non нести — è un'abitudine costante, non un'azione in corso."
    },
    {
        front: "Она никогда",
        back: "не носит платья.",
        explanation: "«Никогда не носит» = non indossa mai (abitudine costante) → носить. Нести = portare qualcosa verso una meta in questo momento."
    },
    {
        front: "Уговаривать его —",
        back: "всё равно что носить воду в решете.",
        explanation: "«Носить воду в решете» — proverbio: fare qualcosa di completamente inutile. Espressione fissa con носить — non si usa нести."
    },
    {
        front: "Мы два раза в год",
        back: "носим кота к ветеринару.",
        explanation: "«Два раза в год» = con regolarità → носить. Нести = portare adesso, in questo momento specifico."
    },
    {
        front: "Он опять",
        back: "несёт бред!",
        explanation: "«Нести бред» è un'espressione fissa = dire assurdità. Come «нести чушь» — si usa solo нести. Носить non funziona in questo contesto."
    },
    {
        front: "Несу часы в ремонт —",
        back: "стекло треснуло.",
        explanation: "Destinazione specifica («в ремонт»), azione adesso → нести. Носить = portare abitualmente o indossare."
    },
    {
        front: "Он всем кажется таким добрым —",
        back: "но носит камень за пазухой.",
        explanation: "«Носить камень за пазухой» — idiomatico: covare rancore nascosto. Носить = abitudine duratura. Нести non si usa qui."
    },
    {
        front: "Хватит",
        back: "нести чушь — говори по делу!",
        explanation: "«Нести чушь» è idiomatico = dire stupidaggini. Espressione fissa — носить non può sostituire нести qui."
    },
    {
        front: "Эта улица носит —",
        back: "имя Пушкина.",
        explanation: "«Носить имя» = portare il nome di qualcuno illustre. Espressione fissa con носить — abitudine/identità permanente."
    },
    {
        front: "В Хогвартсе все студенты",
        back: "носят мантии — даже на уроках.",
        explanation: "«Носят мантии» = le indossano abitualmente → носить. Нести = portare qualcosa verso una destinazione adesso."
    },
];

// ============================================================
// PANEL 9 — Flashcard · paid · Mix нести + носить
// ============================================================
const p9cards = [
    { front: "У меня компьютер сломался —", back: "несу его в ремонт." },
    { front: "Он всегда носит", back: "маску — никто не знает, что думает." },
    { front: "Вот Андрей не носит", back: "ни костюмов, ни часов." },
    { front: "Я не ношу шорты —", back: "ненавижу их!" },
    { front: "Я несу —", back: "цветы домой." },
    { front: "Несу подарок Кате —", back: "у неё был день рождения." },
    { front: "Почему ты не носишь джинсы —", back: "которые я тебе купила?" },
    { front: "Он опять несёт —", back: "бред!" },
    { front: "Она несёт —", back: "горячий суп в комнату." },
    { front: "Эта улица носит —", back: "имя Пушкина." },
];

// ============================================================
// PANEL 10 — Flashcard · paid · Mix нести + носить
// ============================================================
const p10cards = [
    { front: "Зачем ты несёшь —", back: "тарелки в комнату?" },
    { front: "Мне нравится носить —", back: "красивую одежду." },
    { front: "Они несут —", back: "диван на четвёртый этаж." },
    { front: "Она юбки не носит —", back: "думает, что у неё ноги не красивые." },
    { front: "Компания несёт —", back: "серьёзные потери из-за кризиса." },
    { front: "Куда вы несёте —", back: "эти коробки?" },
    { front: "Кто несёт —", back: "ответственность за этот провал?" },
    { front: "Он её носит —", back: "на руках — делает всё, что она захочет." },
    { front: "Тебе нужно носить —", back: "очки — ты ничего не видишь!" },
    { front: "Зачем ты носишь —", back: "такие тяжести?!" },
];

// ============================================================
// PANEL 4 — Mixed Quiz · public · НЕСТИ/НОСИТЬ
// ============================================================
function initPanel4NN() {
    const panel = document.getElementById('panel-nn-04');
    if (!panel) return;

    const container = panel.querySelector('#nn-04-cards-container');
    const prevBtn   = panel.querySelector('#nn-04-deck-prev');
    const nextBtn   = panel.querySelector('#nn-04-deck-next');
    const counterEl = panel.querySelector('#nn-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Осторожно — она ___ горячий суп в комнату.",          options: ["несёт",  "носит",  "несут"],  answer: "несёт"  },
        { question: "Мы ___ цветы на свадьбу.",                            options: ["несём",  "носим",  "несут"],  answer: "несём"  },
        { question: "Я не ___ шорты — ненавижу их!",                       options: ["ношу",   "несу",   "носит"],  answer: "ношу"   },
        { question: "Бабушка летом всегда ___ панамку.",                   options: ["носит",  "несёт",  "носят"],  answer: "носит"  },
        { question: "Они ___ диван на четвёртый этаж.",                    options: ["несут",  "носят",  "несём"],  answer: "несут"  },
        { question: "В Хогвартсе все студенты ___ мантии.",                options: ["носят",  "несут",  "носит"],  answer: "носят"  },
        { question: "Куда ты ___ все эти книги?",                          options: ["несёшь", "носишь", "несут"],  answer: "несёшь" },
        { question: "Хватит ___ чушь — говори по делу!",                   options: ["нести",  "носить", "несёт"],  answer: "нести"  },
        { question: "Компания ___ серьёзные потери из-за кризиса.",        options: ["несёт",  "носит",  "несут"],  answer: "несёт"  },
        { question: "Женя ___ только костюмы.",                            options: ["носит",  "несёт",  "носим"],  answer: "носит"  },
    ];

    const matchPairs = [
        { left: "Несу подарок Кате —",              right: "у неё был день рождения."                    },
        { left: "Он всегда носит маску —",           right: "никто не знает, что думает."                 },
        { left: "Несу очки в ремонт —",              right: "они сломались."                              },
        { left: "Мы два раза в год",                 right: "носим кота к ветеринару."                    },
        { left: "Он опять",                          right: "несёт бред!"                                 },
        { left: "Я ненавижу носить часы —",          right: "есть же телефон!"                            },
        { left: "Уговаривать его —",                 right: "всё равно что носить воду в решете."         },
        { left: "Несу часы в ремонт —",              right: "стекло треснуло."                            },
        { left: "Эта улица носит —",                 right: "имя Пушкина."                                },
        { left: "Он всем кажется таким добрым —",    right: "но носит камень за пазухой."                 },
    ];

    const quizData = [
        { id: "nn-001", promptPrefix: "Я",                       promptSuffix: "подарок Кате — у неё был день рождения.",    answers: ["несу"]   },
        { id: "nn-002", promptPrefix: "Бабушка летом всегда",    promptSuffix: "панамку.",                                   answers: ["носит"]  },
        { id: "nn-003", promptPrefix: "Она",                     promptSuffix: "горячий суп в комнату.",                     answers: ["несёт"]  },
        { id: "nn-004", promptPrefix: "Куда ты",                 promptSuffix: "нашего кота? — К ветеринару.",               answers: ["несёшь"] },
        { id: "nn-005", promptPrefix: "Мне нравится",            promptSuffix: "красивую одежду.",                           answers: ["носить"] },
        { id: "nn-006", promptPrefix: "Они",                     promptSuffix: "диван на четвёртый этаж.",                   answers: ["несут"]  },
        { id: "nn-007", promptPrefix: "Мы",                      promptSuffix: "бельё стирать в прачечную.",                 answers: ["носим"]  },
        { id: "nn-008", promptPrefix: "Хватит",                  promptSuffix: "чушь — говори по делу!",                     answers: ["нести"]  },
        { id: "nn-009", promptPrefix: "Компания",                promptSuffix: "серьёзные потери из-за кризиса.",            answers: ["несёт"]  },
        { id: "nn-010", promptPrefix: "Почему ты не",            promptSuffix: "джинсы, которые я тебе купила?",             answers: ["носишь"] },
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
            card.className = 'fca01-card-container nn-04-card';
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
        container.querySelectorAll('.nn-04-card').forEach(card => {
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
                const card       = this.closest('.nn-04-card');
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
        container.querySelectorAll('.nn-04-card').forEach((c, i) => {
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
    'panel-nn-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-nn-01', exercises: p1exercises }),
    'panel-nn-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-nn-05', exercises: p5exercises }),
    'panel-nn-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-nn-06', exercises: p6exercises }),
    'panel-nn-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-02', cards: p2cards }),
    'panel-nn-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-07', cards: p7cards }),
    'panel-nn-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-08', cards: p8cards }),
    'panel-nn-03': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-03', cards: p3cards }),
    'panel-nn-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-09', cards: p9cards }),
    'panel-nn-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-nn-10', cards: p10cards }),
    'panel-nn-04': () => initPanel4NN(),
};

initPanelManager({ initializers, enableAccessControl: true });
