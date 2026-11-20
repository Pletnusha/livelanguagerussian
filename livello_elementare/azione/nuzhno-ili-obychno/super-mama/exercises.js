import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Дома: супер мама» — quarta pagina del blocco «Нужно или обычно» (piano approvato dalla PM 20.11.2026).
// Solo due forme: presente imperfettivo (обычно / всегда / два раза в неделю) e нужно + infinito perfettivo. Niente passato / futuro, nemmeno nel test.
// Fonti (originali): «список дел молодой мамы», «cсупер мама планы на день» (5 dialoghi), «нужно-обычно Дома_1»; vecchio = pagine «В университете», «В офисе».
// Nuova difficoltà: come si forma il perfettivo — по- (постирать, погладить, почистить, позавтракать, позвонить), вы- (вымыть), при- (приготовить),
// с- (съесть, сходить), у- (убрать, убраться), altra radice (встать / вставать, лечь / ложиться, купить / покупать); riflessivi (умыться, проснуться, убраться).
// Esclusi: «Андрей дома один» (нужно + imperfettivo per azioni regolari — livello successivo), futuro / condizionale («даст», «ляжешь», «хорошо бы»).
// Dopo «нужно» mai l'infinito imperfettivo come sbagliata. Niente domande tra parentesi (regola 7.1).
// Schema: 1 D&D lista (+ vecchio, con spiegazioni) · 2 D&D faccende · 3 D&D quando / ogni quanto · 4 FC обычно o нужно (con spiegazioni)
//         5 FC tre forme · 6 FC finisci la frase (misto) · 7 FC mattina «Уже!» (con spiegazioni) · 8 FC come si forma il perfettivo (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Lessico (lista «Список дел молодой мамы на сегодня» + dialoghi «Супермама»): quale verbo con quale oggetto — 8 frasi originali + 2 vecchie dalla pagina «В офисе»; sbagliate = verbi della stessa lista che lì non possono stare; con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} рубашки.",
        words: ["позвонить", "постирать", "лечь"],
        correctAnswers: { 1: "постирать" },
        explanation: "Lavare i vestiti (in lavatrice): постирать рубашки."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} детские вещи.",
        words: ["погладить", "позавтракать", "сходить"],
        correctAnswers: { 1: "погладить" },
        explanation: "Stirare: погладить вещи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} полы.",
        words: ["позвонить", "купить", "вымыть"],
        correctAnswers: { 1: "вымыть" },
        explanation: "Lavare il pavimento: вымыть полы. Мыть per pavimenti, piatti, finestre; стирать solo per i vestiti."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} в парикмахерскую.",
        words: ["погладить", "вымыть", "сходить"],
        correctAnswers: { 1: "сходить" },
        explanation: "Andare (e tornare) dal parrucchiere: сходить в парикмахерскую."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} педиатру.",
        words: ["позвонить", "купить", "постирать"],
        correctAnswers: { 1: "позвонить" },
        explanation: "Telefonare a qualcuno: позвонить + dativo (педиатру)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} продукты.",
        words: ["умыться", "купить", "лечь"],
        correctAnswers: { 1: "купить" },
        explanation: "Comprare: купить продукты (fare la spesa)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "До обеда нужно {{1}} обед.",
        words: ["приготовить", "почистить", "умыться"],
        correctAnswers: { 1: "приготовить" },
        explanation: "Preparare da mangiare: приготовить обед."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Тебе нужно {{1}} зубы.",
        words: ["погладить", "почистить", "лечь"],
        correctAnswers: { 1: "почистить" },
        explanation: "Lavarsi i denti: почистить зубы."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} отчёт к понедельнику.",
        words: ["назначить", "встретиться", "подготовить"],
        correctAnswers: { 1: "подготовить" },
        explanation: "Dalla pagina «В офисе»: preparare un rapporto — подготовить отчёт."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Коллеге нужно {{1}} встречу заказчику.",
        words: ["назначить", "составить", "закончить"],
        correctAnswers: { 1: "назначить" },
        explanation: "Dalla pagina «В офисе»: fissare un appuntamento — назначить встречу кому."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Lessico: le faccende di casa — il nome giusto nella forma giusta. 10 frasi originali («список дел молодой мамы», dialoghi «Супермама», «нужно-обычно Дома»), solo presente e нужно + perfettivo; sbagliate = stessa parola in un altro caso + oggetto che con quel verbo non va (стирать полы, мыть рубашки); senza spiegazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я стираю {{1}} в стиральной машине.",
        words: ["полы", "рубашек", "рубашки"],
        correctAnswers: { 1: "рубашки" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я всегда глажу детские {{1}}.",
        words: ["вещи", "вещей", "зубы"],
        correctAnswers: { 1: "вещи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Она моет {{1}} два раза в неделю.",
        words: ["рубашки", "полы", "полов"],
        correctAnswers: { 1: "полы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как часто вы ходите в {{1}}?",
        words: ["продукты", "парикмахерскую", "парикмахерской"],
        correctAnswers: { 1: "парикмахерскую" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Она звонит {{1}} пятый раз!",
        words: ["педиатра", "педиатр", "педиатру"],
        correctAnswers: { 1: "педиатру" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы покупаем {{1}} на рынке.",
        words: ["продукты", "продуктов", "посуду"],
        correctAnswers: { 1: "продукты" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно вымыть {{1}} после вечеринки.",
        words: ["посуду", "посуда", "рубашки"],
        correctAnswers: { 1: "посуду" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно убрать {{1}}.",
        words: ["зубы", "квартира", "квартиру"],
        correctAnswers: { 1: "квартиру" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "После обеда нужно вымыть {{1}}.",
        words: ["бельё", "окна", "окон"],
        correctAnswers: { 1: "окна" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мой сын обычно умывается, чистит {{1}}, ест шоколад.",
        words: ["зубы", "зубов", "педиатру"],
        correctAnswers: { 1: "зубы" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Quando? Ogni quanto? Dove? — 10 frasi originali («список дел молодой мамы», dialoghi «Супермама», «нужно-обычно Дома»), solo presente e нужно + perfettivo; sbagliate = errori di forma o «на прошлой неделе» / «часто» dove non possono stare (mai «поздно», «обычно», «как долго», che sarebbero corretti); senza spiegazioni
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Она моет полы {{1}}.",
        words: ["на прошлой неделе", "два раза в неделю", "два раза в недели"],
        correctAnswers: { 1: "два раза в неделю" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно встать очень {{1}}.",
        words: ["часто", "ранний", "рано"],
        correctAnswers: { 1: "рано" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты же знаешь, что обычно я ложусь {{1}}!",
        words: ["поздно", "поздний", "на прошлой неделе"],
        correctAnswers: { 1: "поздно" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} нужно сходить за продуктами, приготовить обед, постирать бельё.",
        words: ["До обеда", "До обед", "На прошлой неделе"],
        correctAnswers: { 1: "До обеда" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "После {{1}} нужно погладить вещи, убраться, вымыть окна.",
        words: ["обед", "обедом", "обеда"],
        correctAnswers: { 1: "обеда" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно вымыть посуду после {{1}}.",
        words: ["вечеринка", "вечеринки", "вечеринку"],
        correctAnswers: { 1: "вечеринки" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я стираю рубашки в {{1}} машине.",
        words: ["стиральная", "стиральной", "стиральную"],
        correctAnswers: { 1: "стиральной" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы покупаем продукты на {{1}}.",
        words: ["рынке", "рынок", "рынка"],
        correctAnswers: { 1: "рынке" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как {{1}} вы ходите в парикмахерскую?",
        words: ["частый", "частое", "часто"],
        correctAnswers: { 1: "часто" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Мне нужно лечь {{1}}.",
        words: ["в двух", "в двое", "в два"],
        correctAnswers: { 1: "в два" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-smm-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-smm-01', exercises: p1exercises }),
    'panel-smm-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-smm-02', exercises: p2exercises }),
    'panel-smm-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-smm-03', exercises: p3exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
