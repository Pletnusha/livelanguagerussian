import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «До и после 2000 года» (blocco Годы) — prima ↔ dopo un anno: до / после + genitivo (двухтысячного года).
// La forma è nota (genitivo come «пятого марта девяностого года»): la difficoltà è il senso, dato dal contesto (лиры → евро, сначала … потом).
// Qui «до» = prima di (su «С 2010 по 2020 год» era fino a, in coppia con «с»). «Перед двухтысячным годом» non si usa con gli anni.
// Approssimato: около двухтысячного года / году в двухтысячном (inversione colloquiale, come «часа в три», «числа двадцатого») ↔ esatto в двухтысячном году.
// Solo nei pannelli misti: к две тысячи тридцатому году (к + dativo, entro); между … годами (strumentale) solo riconoscimento, mai da scrivere.
// Solo anni ed epoche (niente ore). Vecchio materiale: в … году, с … по … год, в девяностые годы, в начале / в конце века, data completa.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto, lire ed euro (euro contabile 1.1.1999, banconote 1.1.2002, lira fino al 28.2.2002): до / после / около + genitivo (nuovo) + data completa, в … году, decennio, с … по … год (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2002) {{1}} две тысячи второго года в Италии платили лирами.",
        words: ["До", "После", "Около"],
        correctAnswers: { 1: "До" },
        explanation: "Prima del 2002 c'erano le lire: до + genitivo. Qui «до» = prima di."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.01.2002) Наличные евро появились в Италии первого января две тысячи {{1}}.",
        words: ["втором году", "второй год", "второго года"],
        correctAnswers: { 1: "второго года" },
        explanation: "Data completa: l'anno al genitivo, senza «в»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2002) Мы открыли кафе в Риме после две тысячи {{1}}, и все цены были в евро.",
        words: ["второй год", "второго года", "втором году"],
        correctAnswers: { 1: "второго года" },
        explanation: "после + genitivo: после две тысячи второго года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1999) Безналичный евро появился в тысяча девятьсот девяносто {{1}}.",
        words: ["девятом году", "девятого года", "девятый год"],
        correctAnswers: { 1: "девятом году" },
        explanation: "Un anno: в + prepositivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Когда ты был в Италии в первый раз? — Точно не помню, {{1}} двухтысячного года.",
        words: ["после", "в", "около"],
        correctAnswers: { 1: "около" },
        explanation: "Non ricordo esattamente → около + genitivo: circa il 2000."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(90-е) {{1}} в Италии все платили лирами.",
        words: ["В девяностом году", "В девяностые годы", "После девяностые годы"],
        correctAnswers: { 1: "В девяностые годы" },
        explanation: "Un decennio: в + accusativo plurale."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2002) Сначала были лиры, а {{1}} две тысячи второго года — евро.",
        words: ["до", "после", "около"],
        correctAnswers: { 1: "после" },
        explanation: "Prima le lire, poi l'euro: после + genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Мы жили в Москве до {{1}}.",
        words: ["двухтысячном году", "двухтысячный год", "двухтысячного года"],
        correctAnswers: { 1: "двухтысячного года" },
        explanation: "до + genitivo: до двухтысячного года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1995–2001) Я работал в банке в Милане с тысяча девятьсот девяносто пятого {{1}}.",
        words: ["по две тысячи первый год", "по две тысячи первого года", "до две тысячи первый год"],
        correctAnswers: { 1: "по две тысячи первый год" },
        explanation: "Periodo: с + genitivo … по + accusativo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) — Мама приехала в Италию до или после девяностого года? — {{1}}: в восемьдесят девятом.",
        words: ["После", "Около", "До"],
        correctAnswers: { 1: "До" },
        explanation: "Il 1989 viene prima del 1990: до."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Nuovo: до ↔ после + genitivo; il senso dal contesto (сначала … потом, не было … а теперь), forma al genitivo
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Сначала мы жили в Москве, а {{1}} двухтысячного года — в Риме.",
        words: ["до", "после", "в"],
        correctAnswers: { 1: "после" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2010) У меня не было смартфона {{1}} две тысячи десятого года.",
        words: ["после", "в", "до"],
        correctAnswers: { 1: "до" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2015) Я начал учить русский язык после две тысячи {{1}}.",
        words: ["пятнадцатого года", "пятнадцатом году", "пятнадцатый год"],
        correctAnswers: { 1: "пятнадцатого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1991) {{1}} тысяча девятьсот девяносто первого года был Советский Союз.",
        words: ["До", "После", "В"],
        correctAnswers: { 1: "До" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2008) Мы поженились в две тысячи восьмом году, а дети родились {{1}} две тысячи восьмого года.",
        words: ["до", "после", "около"],
        correctAnswers: { 1: "после" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2020) До две тысячи {{1}} я работал в офисе, а теперь работаю дома.",
        words: ["двадцатом году", "двадцатый год", "двадцатого года"],
        correctAnswers: { 1: "двадцатого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2012) Брат окончил университет, и {{1}} две тысячи двенадцатого года он уехал в Лондон.",
        words: ["до", "после", "с"],
        correctAnswers: { 1: "после" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1999) Бабушка жила в деревне до тысяча девятьсот девяносто {{1}}.",
        words: ["девятом году", "девятый год", "девятого года"],
        correctAnswers: { 1: "девятого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2024) {{1}} две тысячи двадцать четвёртого года у нас не было собаки, а теперь есть.",
        words: ["До", "После", "Около"],
        correctAnswers: { 1: "До" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2005) Сначала я выучил итальянский, а после две тысячи {{1}} — русский.",
        words: ["пятого года", "пятом году", "пятый год"],
        correctAnswers: { 1: "пятого года" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Nuovo: approssimato (около + genitivo, году в … ом, примерно в … году) ↔ esatto (в … году); il senso da точно не помню / точно помню / по документам
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) — Когда ты переехал в Италию? — Точно не помню, {{1}}.",
        words: ["в двухтысячном году", "около двухтысячного года", "около двухтысячном году"],
        correctAnswers: { 1: "около двухтысячного года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Точно помню: мы переехали в Милан {{1}}.",
        words: ["около двухтысячного года", "году в двухтысячном", "в двухтысячном году"],
        correctAnswers: { 1: "в двухтысячном году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1995) — Когда вы познакомились? — Не помню точно, году в девяносто {{1}}.",
        words: ["пятом", "пятого", "пятый"],
        correctAnswers: { 1: "пятом" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) Дедушка купил дачу около тысяча девятьсот {{1}}, точной даты никто не знает.",
        words: ["девяностом году", "девяностого года", "девяностый год"],
        correctAnswers: { 1: "девяностого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2010) По документам я начал работать здесь {{1}}.",
        words: ["в две тысячи десятом году", "около две тысячи десятого года", "году в две тысячи десятом"],
        correctAnswers: { 1: "в две тысячи десятом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2005) Эту фотографию сделали примерно {{1}}.",
        words: ["около две тысячи пятом году", "две тысячи пятого года", "в две тысячи пятом году"],
        correctAnswers: { 1: "в две тысячи пятом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1985) Мама точно не помнит, когда это было: {{1}} в восемьдесят пятом.",
        words: ["году", "года", "год"],
        correctAnswers: { 1: "году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2003) Это было около две тысячи {{1}}, а может, позже.",
        words: ["третьем году", "третий год", "третьего года"],
        correctAnswers: { 1: "третьего года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Я был маленький и точно не помню: это было {{1}}.",
        words: ["в двухтысячный год", "около двухтысячного года", "около двухтысячный год"],
        correctAnswers: { 1: "около двухтысячного года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1999) Точно помню: бабушка переехала в Италию {{1}}.",
        words: ["в тысяча девятьсот девяносто девятом году", "около тысяча девятьсот девяносто девятого года", "году в тысяча девятьсот девяносто девятом"],
        correctAnswers: { 1: "в тысяча девятьсот девяносто девятом году" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: vita prima e dopo internet — до / после / около + genitivo, году в …, примерно в … году; «перед» non si usa con gli anni; con spiegazioni
// ============================================================
const p4cards = [
    { front: "(2005) — У тебя был интернет дома, когда ты учился в школе? — Нет, интернет появился только…", back: "После две тысячи пятого года", distractors: ["До две тысячи пятого года", "После две тысячи пятый год"], explanation: "Prima niente internet, poi sì: после + genitivo." },
    { front: "(2010) — Ты писал письма от руки? — Да, но только…", back: "До две тысячи десятого года", distractors: ["После две тысячи десятого года", "До две тысячи десятом году"], explanation: "Prima del 2010: до + genitivo. Qui «до» = prima di." },
    { front: "(2000) — Когда у вас дома появился компьютер? — Точно не помню…", back: "Около двухтысячного года", distractors: ["В двухтысячном году", "Около двухтысячный год"], explanation: "Non ricordo esattamente → около + genitivo: circa il 2000." },
    { front: "(2012) — Когда ты начал пользоваться WhatsApp? — Году в…", back: "Году в двенадцатом", distractors: ["Году в двенадцатого", "Года в двенадцатом"], explanation: "Inversione colloquiale (come «часа в три»): году в двенадцатом = circa nel 2012." },
    { front: "(1995) — Когда в семье появился мобильный телефон? — Только…", back: "После тысяча девятьсот девяносто пятого года", distractors: ["До тысяча девятьсот девяносто пятого года", "После тысяча девятьсот девяносто пятом году"], explanation: "Prima no, poi sì: после + genitivo." },
    { front: "(2015) — Ты покупал бумажные газеты? — Да, но только…", back: "До две тысячи пятнадцатого года", distractors: ["После две тысячи пятнадцатого года", "До две тысячи пятнадцатый год"], explanation: "Prima del 2015 sì, adesso no: до + genitivo." },
    { front: "(2000) — Как сказать по-русски «prima del 2000»?", back: "До двухтысячного года", distractors: ["Перед двухтысячным годом", "До двухтысячном году"], explanation: "Con gli anni si usa «до». «Перед» va con un momento vicino: перед обедом, перед праздником." },
    { front: "(2019) — Когда ты начал работать из дома? — Примерно…", back: "В две тысячи девятнадцатом году", distractors: ["Около две тысячи девятнадцатом году", "В две тысячи девятнадцатого года"], explanation: "Примерно + в … году = circa nel 2019. Con «около» invece il genitivo." },
    { front: "(2008) — Когда ты купил первый ноутбук? — Не помню точно…", back: "Около две тысячи восьмого года", distractors: ["Около две тысячи восьмой год", "В две тысячи восьмого года"], explanation: "около + genitivo: восьмого года." },
    { front: "(2001) — Когда ты в первый раз купил что-то в интернете? — Уже…", back: "После две тысячи первого года", distractors: ["До две тысячи первого года", "После две тысячи первым годом"], explanation: "Уже после = già dopo: после + genitivo." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-apd-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-apd-01', exercises: p1exercises }),
    'panel-apd-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-apd-02', exercises: p2exercises }),
    'panel-apd-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-apd-03', exercises: p3exercises }),
    'panel-apd-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-apd-04', cards: p4cards })
};

initPanelManager({ initializers, enableAccessControl: true });
