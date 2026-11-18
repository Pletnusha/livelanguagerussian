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
// PANEL 5 — Flashcard · student
// Nuovo: cronologia di famiglia — до / после / около + genitivo, году в …, в … году esatto; il senso da раньше / позже / уже / точно не помню
// ============================================================
const p5cards = [
    { front: "(2015) Свадьба была в две тысячи пятнадцатом году, а квартиру мы купили позже. Когда?", back: "После две тысячи пятнадцатого года", distractors: ["До две тысячи пятнадцатого года", "После две тысячи пятнадцатый год"] },
    { front: "(2015) Мы познакомились раньше, чем поженились. Когда мы познакомились?", back: "До две тысячи пятнадцатого года", distractors: ["После две тысячи пятнадцатого года", "До две тысячи пятнадцатом году"] },
    { front: "(2018) Сын родился в две тысячи восемнадцатом году. Собаку мы взяли, когда сын уже был. Когда?", back: "После две тысячи восемнадцатого года", distractors: ["До две тысячи восемнадцатого года", "После две тысячи восемнадцатом году"] },
    { front: "(2013) Я окончила университет в две тысячи тринадцатом году. Итальянский я учила в университете. Когда?", back: "До две тысячи тринадцатого года", distractors: ["После две тысячи тринадцатого года", "До две тысячи тринадцатый год"] },
    { front: "(2010) — Когда вы с мужем познакомились? — Точно не помню…", back: "Около две тысячи десятого года", distractors: ["Около две тысячи десятом году", "После две тысячи десятый год"] },
    { front: "(2016) — Когда вы ездили в свадебное путешествие? — Году в…", back: "Году в шестнадцатом", distractors: ["Году в шестнадцатого", "Года в шестнадцатом"] },
    { front: "(2020) В две тысячи двадцатом году мы переехали в Рим. Когда мы жили в Москве?", back: "До две тысячи двадцатого года", distractors: ["После две тысячи двадцатого года", "До две тысячи двадцатом году"] },
    { front: "(2020) Дочь родилась уже в Риме, после переезда. Мы переехали в две тысячи двадцатом. Когда родилась дочь?", back: "После две тысячи двадцатого года", distractors: ["До две тысячи двадцатого года", "После две тысячи двадцатый год"] },
    { front: "(2015) — Свадьба была точно в две тысячи пятнадцатом? — Да, точно…", back: "В две тысячи пятнадцатом году", distractors: ["Около две тысячи пятнадцатого года", "В две тысячи пятнадцатого года"] },
    { front: "(2005) — Когда твои родители купили дачу? — Не помню, примерно…", back: "В две тысячи пятом году", distractors: ["Около две тысячи пятом году", "В две тысячи пятый год"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto, storia (date verificate): до / после / около + genitivo (nuovo) + в … году, с … по … год, в начале девяностых, data completa (vecchio). Rivoluzione 1917, referendum 2–3.6.1946, Gioconda iniziata c. 1503, Гагарин 12.04.1961, lire fino al 2002, Москва 1147
// ============================================================
const p6cards = [
    { front: "(1917) — Когда в России был царь?", back: "До тысяча девятьсот семнадцатого года", distractors: ["После тысяча девятьсот семнадцатого года", "До тысяча девятьсот семнадцатый год"] },
    { front: "(1917) — В каком году была революция в России?", back: "В тысяча девятьсот семнадцатом году", distractors: ["До тысяча девятьсот семнадцатого года", "В тысяча девятьсот семнадцатый год"] },
    { front: "(1946) Италия стала республикой в тысяча девятьсот сорок шестом году. Когда в Италии был король?", back: "До тысяча девятьсот сорок шестого года", distractors: ["После тысяча девятьсот сорок шестого года", "До тысяча девятьсот сорок шестом году"] },
    { front: "(1941–1945) — С какого по какой год шла Великая Отечественная война?", back: "С тысяча девятьсот сорок первого по тысяча девятьсот сорок пятый год", distractors: ["С тысяча девятьсот сорок первого по тысяча девятьсот сорок пятого года", "С тысяча девятьсот сорок первый по тысяча девятьсот сорок пятый год"] },
    { front: "(1961) Первый человек полетел в космос в тысяча девятьсот шестьдесят первом году. Когда люди ещё не летали в космос?", back: "До тысяча девятьсот шестьдесят первого года", distractors: ["После тысяча девятьсот шестьдесят первого года", "До тысяча девятьсот шестьдесят первом году"] },
    { front: "(1503) — Когда Леонардо начал писать «Джоконду»? Точной даты нет…", back: "Около тысяча пятьсот третьего года", distractors: ["Около тысяча пятьсот третьем году", "После тысяча пятьсот третий год"] },
    { front: "(1991) — Когда распался СССР? В начале…", back: "В начале девяностых", distractors: ["В начале девяностые", "В конце девяностых"] },
    { front: "(2002) — Когда в Италии уже не было лир?", back: "После две тысячи второго года", distractors: ["До две тысячи второго года", "После две тысячи второй год"] },
    { front: "(12.04.1961) — Когда Гагарин полетел в космос? Полная дата.", back: "Двенадцатого апреля тысяча девятьсот шестьдесят первого года", distractors: ["Двенадцатое апреля тысяча девятьсот шестьдесят первого года", "Двенадцатого апреля в тысяча девятьсот шестьдесят первом году"] },
    { front: "(1147) Москва впервые упоминается в тысяча сто сорок седьмом году, но город появился раньше. Когда?", back: "До тысяча сто сорок седьмого года", distractors: ["После тысяча сто сорок седьмого года", "До тысяча сто сорок седьмой год"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto: к + dativo (entro), между … годами (solo riconoscimento) (nuovo) + до, около, anno-fatto, secolo (vecchio), con spiegazioni. Con «к» mai «до» come distrattore
// ============================================================
const p7cards = [
    { front: "(2030) — Когда вы хотите купить дом? — Мы хотим купить дом…", back: "К две тысячи тридцатому году", distractors: ["К две тысячи тридцатого года", "К две тысячи тридцатый год"], explanation: "Entro il 2030: к + dativo: к … тридцатому году (come «к пятому мая»)." },
    { front: "(2027) — Когда ты выучишь русский? — Надеюсь, …", back: "К две тысячи двадцать седьмому году", distractors: ["К две тысячи двадцать седьмого года", "В две тысячи двадцать седьмой год"], explanation: "Entro il 2027: к + dativo: двадцать седьмому году." },
    { front: "(2002) — Когда в Италии были лиры?", back: "До две тысячи второго года", distractors: ["После две тысячи второго года", "До две тысячи второй год"], explanation: "Prima del 2002: до + genitivo." },
    { front: "(2010–2015) — Когда вы познакомились? — Точно не помню, где-то…", back: "Между две тысячи десятым и две тысячи пятнадцатым годами", distractors: ["Между две тысячи десятого и две тысячи пятнадцатого года", "С две тысячи десятого по две тысячи пятнадцатый год"], explanation: "Un momento qualsiasi tra il 2010 e il 2015: между + strumentale (десятым … пятнадцатым годами). Per tutto il periodo invece: с … по." },
    { front: "(2026) — Какой сейчас год?", back: "Две тысячи двадцать шестой", distractors: ["Две тысячи двадцать шестого", "В две тысячи двадцать шестом году"], explanation: "Il fatto: nominativo." },
    { front: "(2028) — Когда закончат строить новую линию метро? — Обещают…", back: "К две тысячи двадцать восьмому году", distractors: ["К две тысячи двадцать восьмого года", "К две тысячи двадцать восьмой год"], explanation: "Entro il 2028: к + dativo." },
    { front: "(1990–1995) — Когда родители купили дачу? — Где-то…", back: "Между девяностым и девяносто пятым годами", distractors: ["Между девяностого и девяносто пятого года", "С девяностого по девяносто пятый год"], explanation: "Forma breve: между девяностым и девяносто пятым годами (strumentale)." },
    { front: "(2000) — Когда ты в первый раз был в Москве? — Точно не помню…", back: "Около двухтысячного года", distractors: ["В двухтысячном году", "Около двухтысячном году"], explanation: "Non ricordo esattamente → около + genitivo." },
    { front: "(2029) — К какому году нужно выплатить кредит?", back: "К две тысячи двадцать девятому году", distractors: ["К две тысячи двадцать девятого года", "К две тысячи двадцать девятый год"], explanation: "к + dativo: двадцать девятому году." },
    { front: "(XXI в.) — Какой сейчас век?", back: "Двадцать первый", distractors: ["Двадцать первом", "Двадцать первого"], explanation: "Il fatto: nominativo." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto, piani: к … году, после, году в …, между (riconoscimento) (nuovo) + с … года, в … году, decennio (vecchio)
// ============================================================
const p8cards = [
    { front: "(2028) — К какому году вы хотите переехать в Италию?", back: "К две тысячи двадцать восьмому году", distractors: ["К две тысячи двадцать восьмого года", "К две тысячи двадцать восьмой год"] },
    { front: "(2027) — Ты поедешь в Россию в этом году? — Нет, только…", back: "После две тысячи двадцать седьмого года", distractors: ["До две тысячи двадцать седьмого года", "После две тысячи двадцать седьмой год"] },
    { front: "(2026) — С какого года ты учишь русский?", back: "С две тысячи двадцать шестого года", distractors: ["В две тысячи двадцать шестом году", "С две тысячи двадцать шестой год"] },
    { front: "(2031) — К какому году ты хочешь свободно говорить по-русски?", back: "К две тысячи тридцать первому году", distractors: ["К две тысячи тридцать первого года", "К две тысячи тридцать первый год"] },
    { front: "(2015) — Когда ты в последний раз ездил в Россию? — Давно, году в…", back: "Году в пятнадцатом", distractors: ["Году в пятнадцатого", "Года в пятнадцатом"] },
    { front: "(2032) — Когда вы хотите выйти на пенсию? — Не скоро, только…", back: "После две тысячи тридцать второго года", distractors: ["До две тысячи тридцать второго года", "После две тысячи тридцать второй год"] },
    { front: "(2026–2028) — Когда вы будете делать ремонт? — Где-то…", back: "Между две тысячи двадцать шестым и две тысячи двадцать восьмым годами", distractors: ["Между две тысячи двадцать шестого и две тысячи двадцать восьмого года", "С две тысячи двадцать шестого по две тысячи двадцать восьмой год"] },
    { front: "(2027) — В каком году у вас будет свадьба?", back: "В две тысячи двадцать седьмом году", distractors: ["К две тысячи двадцать седьмому году", "В две тысячи двадцать седьмой год"] },
    { front: "(2030-е) — Когда, по-твоему, все машины будут электрическими?", back: "В тридцатые годы", distractors: ["В тридцатом году", "В тридцатый год"] },
    { front: "(2024) Мы купили квартиру в две тысячи двадцать четвёртом году, а мебель — позже. Когда мы купили мебель?", back: "После две тысячи двадцать четвёртого года", distractors: ["До две тысячи двадцать четвёртого года", "После две тысячи двадцать четвёртом году"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelApd9() {
    const panel = document.getElementById('panel-apd-9');
    if (!panel) return;

    const container = panel.querySelector('#apd-9-cards-container');
    const prevBtn   = panel.querySelector('#apd-9-deck-prev');
    const nextBtn   = panel.querySelector('#apd-9-deck-next');
    const counterEl = panel.querySelector('#apd-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(2002) ___ две тысячи второго года в Италии платили лирами.", options: ["После", "Около", "До"], answer: "До" },
        { question: "(2002) Сначала были лиры, а ___ две тысячи второго года — евро.", options: ["после", "до", "около"], answer: "после" },
        { question: "(2000) Точно не помню, это было ___ двухтысячного года.", options: ["в", "около", "после"], answer: "около" },
        { question: "(2010) По документам я начал работать здесь ___.", options: ["в две тысячи десятом году", "около две тысячи десятого года", "году в две тысячи десятом"], answer: "в две тысячи десятом году" },
        { question: "(2000) Как сказать «prima del 2000»? — ___.", options: ["Перед двухтысячным годом", "До двухтысячном году", "До двухтысячного года"], answer: "До двухтысячного года" },
        { question: "(1995) — Когда вы познакомились? — Не помню точно, году в девяносто ___.", options: ["пятого", "пятом", "пятый"], answer: "пятом" },
        { question: "(2030) Мы хотим купить дом к две тысячи ___ году.", options: ["тридцатого", "тридцатый", "тридцатому"], answer: "тридцатому" },
        { question: "(2010–2015) Мы познакомились где-то между две тысячи десятым и две тысячи пятнадцатым ___.", options: ["года", "годами", "году"], answer: "годами" },
        { question: "(1917) ___ тысяча девятьсот семнадцатого года в России был царь.", options: ["До", "После", "Около"], answer: "До" },
        { question: "(90-е) ___ в Италии все платили лирами.", options: ["В девяностом году", "В девяностые годы", "До девяностые годы"], answer: "В девяностые годы" }
    ];
    const matchPairs = [
        { left: "(2002) Когда в Италии были лиры?", right: "до две тысячи второго года" },
        { left: "(2000) Сначала Москва, потом Рим. Когда Рим?", right: "после двухтысячного года" },
        { left: "(2000) Точно не помню когда.", right: "около двухтысячного года" },
        { left: "(2000) Точно помню когда.", right: "в двухтысячном году" },
        { left: "(2030) К какому году?", right: "к две тысячи тридцатому году" },
        { left: "(1995) Не помню точно, году в…", right: "году в девяносто пятом" },
        { left: "(2010–2015) Где-то между…", right: "между десятым и пятнадцатым годами" },
        { left: "(2017) С какого года?", right: "с семнадцатого года" },
        { left: "(90-е) В какие годы?", right: "в девяностые годы" },
        { left: "(2026) Какой сейчас год?", right: "две тысячи двадцать шестой" }
    ];
    const quizData = [
        { id: "apd9-w1", promptPrefix: "(2002) ", promptSuffix: " две тысячи второго года в Италии платили лирами.", answers: ["до"] },
        { id: "apd9-w2", promptPrefix: "(2000) Сначала мы жили в Москве, а ", promptSuffix: " двухтысячного года — в Риме.", answers: ["после"] },
        { id: "apd9-w3", promptPrefix: "(2000) Точно не помню, это было ", promptSuffix: " двухтысячного года.", answers: ["около"] },
        { id: "apd9-w4", promptPrefix: "(2015) Я начал учить русский после две тысячи ", promptSuffix: " года.", answers: ["пятнадцатого"] },
        { id: "apd9-w5", promptPrefix: "(1990) Дедушка купил дачу около тысяча девятьсот ", promptSuffix: " года.", answers: ["девяностого"] },
        { id: "apd9-w6", promptPrefix: "(1995) Не помню точно, году в девяносто ", promptSuffix: ".", answers: ["пятом"] },
        { id: "apd9-w7", promptPrefix: "(2030) Мы хотим купить дом к две тысячи ", promptSuffix: " году.", answers: ["тридцатому"] },
        { id: "apd9-w8", promptPrefix: "(2027) — К какому году ты выучишь русский? — К две тысячи двадцать ", promptSuffix: " году.", answers: ["седьмому"] },
        { id: "apd9-w9", promptPrefix: "(2000) Мы жили в Москве до ", promptSuffix: " года.", answers: ["двухтысячного"] },
        { id: "apd9-w10", promptPrefix: "(2019) Примерно в две тысячи ", promptSuffix: " году я начал работать из дома.", answers: ["девятнадцатом"] }
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
            card.className = 'fca01-card-container apd-9-card';
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
        container.querySelectorAll('.apd-9-card').forEach(card => {
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
                const card    = this.closest('.apd-9-card');
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
        container.querySelectorAll('.apd-9-card').forEach((c, i) => {
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
    'panel-apd-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-apd-01', exercises: p1exercises }),
    'panel-apd-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-apd-02', exercises: p2exercises }),
    'panel-apd-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-apd-03', exercises: p3exercises }),
    'panel-apd-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-apd-04', cards: p4cards }),
    'panel-apd-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-apd-05', cards: p5cards }),
    'panel-apd-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-apd-06', cards: p6cards }),
    'panel-apd-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-apd-07', cards: p7cards }),
    'panel-apd-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-apd-08', cards: p8cards }),
    'panel-apd-9': () => initPanelApd9()
};

initPanelManager({ initializers, enableAccessControl: true });
