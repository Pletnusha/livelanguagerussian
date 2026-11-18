import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «С 2010 по 2020 год» (blocco Годы, complemento di tempo continuato) — periodo con gli anni:
// с + genitivo (с две тысячи десятого года: cambia solo l'ultima parola) … по + accusativo (по две тысячи двадцатый год = compreso)
// ↔ до + genitivo (до две тысячи двадцатого года = il 2020 escluso). «С какого года?» — с … года = dal (Я живу в Италии с две тысячи пятнадцатого года).
// Trappola: «по двадцатый год», non «по двадцатого года». Forma breve: с десятого по двадцатый год.
// «До 2000 года» da solo (= prima del) e «между … годами» → pagina «До и после 2000 года».
// Solo date e anni (niente ore). Vecchio materiale: в … году, data completa con l'anno, «Ты какого года?», с первого по пятое, с понедельника по пятницу.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: с … по / до / с … года con gli anni (nuovo) + в … году, data completa, «Ты какого года?», с понедельника по пятницу (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2010–2020) Я работал в банке с две тысячи десятого {{1}}.",
        words: ["по две тысячи двадцатого года", "по две тысячи двадцатый год", "до две тысячи двадцатый год"],
        correctAnswers: { 1: "по две тысячи двадцатый год" },
        explanation: "Fino al 2020 compreso: по + accusativo: двадцатый год (maschile inanimato = nominativo)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2019) Я окончил университет в две тысячи {{1}} году.",
        words: ["девятнадцатого", "девятнадцатый", "девятнадцатом"],
        correctAnswers: { 1: "девятнадцатом" },
        explanation: "Un momento, solo l'anno: в + prepositivo: в … девятнадцатом году."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2015–2019) Я учился в университете {{1}} по две тысячи девятнадцатый год.",
        words: ["с две тысячи пятнадцатого", "с две тысячи пятнадцатый", "с две тысячи пятнадцатом"],
        correctAnswers: { 1: "с две тысячи пятнадцатого" },
        explanation: "Inizio del periodo: с + genitivo. Cambia solo l'ultima parola: две тысячи пятнадцатого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.09.2015) Я начал работать первого сентября две тысячи {{1}}.",
        words: ["пятнадцатого года", "пятнадцатом году", "пятнадцатый год"],
        correctAnswers: { 1: "пятнадцатого года" },
        explanation: "Data completa: l'anno al genitivo, senza «в»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2010–2019) Я жил в Москве с две тысячи десятого {{1}}.",
        words: ["по две тысячи двадцатого года", "до две тысячи двадцатый год", "до две тысячи двадцатого года"],
        correctAnswers: { 1: "до две тысячи двадцатого года" },
        explanation: "Il 2020 escluso: до + genitivo: до … двадцатого года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) — Ты какого года? — {{1}}.",
        words: ["Девяностый", "Девяностого", "В девяностом"],
        correctAnswers: { 1: "Девяностого" },
        explanation: "Anno di nascita: genitivo, senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2021) Я живу в Италии {{1}}.",
        words: ["в две тысячи двадцать первом году", "по две тысячи двадцать первый год", "с две тысячи двадцать первого года"],
        correctAnswers: { 1: "с две тысячи двадцать первого года" },
        explanation: "Dal 2021 a oggi: с + genitivo, con il presente (живу), come in italiano: vivo in Italia dal 2021."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(пн–пт) В офисе я работаю с понедельника {{1}}.",
        words: ["по пятницу", "по пятницы", "до пятницу"],
        correctAnswers: { 1: "по пятницу" },
        explanation: "Con i giorni: по + accusativo: по пятницу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2010–2020) — С какого по какой год ты жил в Риме? — С десятого {{1}} год.",
        words: ["по двадцатого", "по двадцатый", "до двадцатый"],
        correctAnswers: { 1: "по двадцатый" },
        explanation: "Forma breve colloquiale: с десятого по двадцатый год."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— {{1}} ты работаешь в этой школе? — С две тысячи восемнадцатого года.",
        words: ["В каком году", "Какой год", "С какого года"],
        correctAnswers: { 1: "С какого года" },
        explanation: "Da quando? С какого года? — с + genitivo. «В каком году?» chiede un momento e non va con «работаешь»."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Nuovo: с + genitivo con gli anni (с … ого года; nel periodo с … ого по … ый год). Cambia solo l'ultima parola
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2018) Я изучаю русский язык с две тысячи {{1}}.",
        words: ["восемнадцатом году", "восемнадцатый год", "восемнадцатого года"],
        correctAnswers: { 1: "восемнадцатого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2012–2016) Анна жила в Петербурге с две тысячи {{1}} по две тысячи шестнадцатый год.",
        words: ["двенадцатого", "двенадцатом", "двенадцатый"],
        correctAnswers: { 1: "двенадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Мы знаем друг друга с {{1}}.",
        words: ["двухтысячном году", "двухтысячного года", "двухтысячный год"],
        correctAnswers: { 1: "двухтысячного года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1995–2005) Отец работал на заводе с тысяча девятьсот девяносто {{1}} по две тысячи пятый год.",
        words: ["пятом", "пятого", "пятый"],
        correctAnswers: { 1: "пятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2023) Марко играет в футбольной команде с две тысячи двадцать {{1}}.",
        words: ["третьего года", "третьем году", "третий год"],
        correctAnswers: { 1: "третьего года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2008–2014) Ольга преподавала в школе с две тысячи {{1}} по две тысячи четырнадцатый год.",
        words: ["восьмой", "восьмом", "восьмого"],
        correctAnswers: { 1: "восьмого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1999) Эта школа существует с тысяча девятьсот девяносто {{1}}.",
        words: ["девятого года", "девятом году", "девятый год"],
        correctAnswers: { 1: "девятого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1991–1999) Родители жили в Новосибирске с тысяча девятьсот девяносто {{1}} по тысяча девятьсот девяносто девятый год.",
        words: ["первым", "первом", "первого"],
        correctAnswers: { 1: "первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2024) Мы снимаем эту квартиру с две тысячи двадцать {{1}}.",
        words: ["четвёртом году", "четвёртого года", "четвёртый год"],
        correctAnswers: { 1: "четвёртого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2016–2022) Паоло работал в Москве с две тысячи {{1}} по две тысячи двадцать второй год.",
        words: ["шестнадцатого", "шестнадцатом", "шестнадцатый"],
        correctAnswers: { 1: "шестнадцатого" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Nuovo: по + accusativo (anno compreso) ↔ до + genitivo (anno escluso), deciso dall'intervallo tra parentesi
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2014–2018) Мы жили в Риме с две тысячи четырнадцатого {{1}}.",
        words: ["по две тысячи восемнадцатый год", "до две тысячи восемнадцатого года", "по две тысячи восемнадцатого года"],
        correctAnswers: { 1: "по две тысячи восемнадцатый год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2014–2017) Марина училась в Болонье с две тысячи четырнадцатого {{1}}.",
        words: ["по две тысячи восемнадцатый год", "до две тысячи восемнадцатый год", "до две тысячи восемнадцатого года"],
        correctAnswers: { 1: "до две тысячи восемнадцатого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2001–2010) Отец работал в Милане с две тысячи первого {{1}}.",
        words: ["до две тысячи десятого года", "по две тысячи десятый год", "по две тысячи десятого года"],
        correctAnswers: { 1: "по две тысячи десятый год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2019–2022) Мы снимали квартиру в Турине с две тысячи девятнадцатого {{1}}.",
        words: ["до две тысячи двадцать второго года", "по две тысячи двадцать второго года", "по две тысячи двадцать второй год"],
        correctAnswers: { 1: "по две тысячи двадцать второй год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1985–1989) Мама училась в институте с тысяча девятьсот восемьдесят пятого {{1}}.",
        words: ["до тысяча девятьсот девяностого года", "по тысяча девятьсот девяностый год", "до тысяча девятьсот девяностый год"],
        correctAnswers: { 1: "до тысяча девятьсот девяностого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2005–2011) — С какого по какой год ты жил в Москве? — С пятого {{1}}.",
        words: ["до одиннадцатого", "по одиннадцатый", "по одиннадцатого"],
        correctAnswers: { 1: "по одиннадцатый" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2015–2019) Магазин работал с две тысячи пятнадцатого {{1}}.",
        words: ["по две тысячи двадцатый год", "до две тысячи двадцатого года", "до две тысячи двадцатый год"],
        correctAnswers: { 1: "до две тысячи двадцатого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2007–2011) Я играла в оркестре с две тысячи седьмого {{1}}.",
        words: ["до две тысячи двенадцатого года", "по две тысячи двенадцатый год", "по две тысячи двенадцатого года"],
        correctAnswers: { 1: "до две тысячи двенадцатого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1996–2000) Брат жил в Лондоне с тысяча девятьсот девяносто шестого {{1}}.",
        words: ["до двухтысячного года", "по двухтысячного года", "по двухтысячный год"],
        correctAnswers: { 1: "по двухтысячный год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2020–2023) Лука изучал русский язык в Москве с двадцатого {{1}} год.",
        words: ["по двадцать третий", "до двадцать третьего", "по двадцать третьего"],
        correctAnswers: { 1: "по двадцать третий" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: domanda → risposta (С какого по какой год? С какого года? По какой год?), forma piena e breve, con spiegazioni
// ============================================================
const p4cards = [
    { front: "(2010–2020) — С какого по какой год ты работал в банке?", back: "С две тысячи десятого по две тысячи двадцатый год", distractors: ["С две тысячи десятого по две тысячи двадцатого года", "С две тысячи десятый по две тысячи двадцатый год"], explanation: "с + genitivo … по + accusativo. «Год» una sola volta, alla fine: по … двадцатый год." },
    { front: "(2017) — С какого года ты живёшь в Италии?", back: "С две тысячи семнадцатого года", distractors: ["В две тысячи семнадцатом году", "С две тысячи семнадцатый год"], explanation: "Da quando? с + genitivo: … семнадцатого года." },
    { front: "(2000–2004) — С какого по какой год ты учился в школе в Риме?", back: "С двухтысячного по две тысячи четвёртый год", distractors: ["С двухтысячный по две тысячи четвёртый год", "С двухтысячного по две тысячи четвёртого года"], explanation: "Il 2000 in una parola: с двухтысячного." },
    { front: "(2010–2020) — С какого по какой год ты работал в банке? Коротко.", back: "С десятого по двадцатый", distractors: ["С десятый по двадцатый", "С десятого по двадцатого"], explanation: "Nel parlato si omettono «две тысячи» e «год»: с десятого по двадцатый." },
    { front: "(1990–1995) — С какого по какой год вы жили в Казани?", back: "С тысяча девятьсот девяностого по тысяча девятьсот девяносто пятый год", distractors: ["С тысяча девятьсот девяностом по тысяча девятьсот девяносто пятый год", "С тысяча девятьсот девяностого до тысяча девятьсот девяносто пятый год"], explanation: "Anche con il 1900 cambia solo l'ultima parola: девяностого … девяносто пятый." },
    { front: "(2003) — С какого года работает этот ресторан?", back: "С две тысячи третьего года", distractors: ["С две тысячи третий год", "В две тысячи третьем году"], explanation: "Da quando? с + genitivo: третьего года." },
    { front: "(2012–2015) — По какой год ты учился в Падуе?", back: "По две тысячи пятнадцатый год", distractors: ["По две тысячи пятнадцатого года", "До две тысячи пятнадцатый год"], explanation: "По какой год? — по + accusativo: il 2015 compreso." },
    { front: "(2017) — С какого года ты живёшь в Италии? Коротко.", back: "С семнадцатого", distractors: ["С семнадцатый", "В семнадцатом"], explanation: "Forma breve: с семнадцатого (года)." },
    { front: "(2008–2012) Я жила в Генуе с две тысячи восьмого… Закончи с «до».", back: "До две тысячи тринадцатого года", distractors: ["До две тысячи двенадцатого года", "До две тысячи тринадцатый год"], explanation: "Il 2012 è compreso, quindi con «до» si nomina l'anno dopo: до … тринадцатого года (= по … двенадцатый год)." },
    { front: "(2021–2024) — С какого по какой год вы снимали квартиру? Коротко.", back: "С двадцать первого по двадцать четвёртый", distractors: ["С двадцать первого по двадцать четвёртого", "С двадцать первый по двадцать четвёртый"], explanation: "Forma breve: с + genitivo … по + accusativo." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Nuovo: «С какого года?» → с … года (dal), con il presente; forma piena e breve
// ============================================================
const p5cards = [
    { front: "(2019) — С какого года ты живёшь в Милане?", back: "С две тысячи девятнадцатого года", distractors: ["В две тысячи девятнадцатом году", "С две тысячи девятнадцатый год"] },
    { front: "(2022) — С какого года вы снимаете квартиру в Болонье?", back: "С две тысячи двадцать второго года", distractors: ["С две тысячи двадцать второй год", "По две тысячи двадцать второй год"] },
    { front: "(2015) — С какого года Анна работает в Неаполе? Коротко.", back: "С пятнадцатого", distractors: ["С пятнадцатый", "В пятнадцатом"] },
    { front: "(2020) — С какого года ты изучаешь итальянский?", back: "С две тысячи двадцатого года", distractors: ["С две тысячи двадцатом году", "В две тысячи двадцатом году"] },
    { front: "(2011) — С какого года твои родители живут в Венеции?", back: "С две тысячи одиннадцатого года", distractors: ["С две тысячи одиннадцатый год", "До две тысячи одиннадцатого года"] },
    { front: "(2000) — С какого года вы знаете Марко?", back: "С двухтысячного года", distractors: ["С двухтысячный год", "В двухтысячном году"] },
    { front: "(2024) — С какого года у тебя итальянское гражданство?", back: "С две тысячи двадцать четвёртого года", distractors: ["С две тысячи двадцать четвёртом году", "По две тысячи двадцать четвёртый год"] },
    { front: "(2018) — С какого года Ольга преподаёт русский в Турине? Коротко.", back: "С восемнадцатого", distractors: ["С восемнадцатом", "По восемнадцатый"] },
    { front: "(1998) — С какого года твоя мама живёт в Риме?", back: "С тысяча девятьсот девяносто восьмого года", distractors: ["С тысяча девятьсот девяносто восьмой год", "В тысяча девятьсот девяносто восьмом году"] },
    { front: "(2023) — С какого года вы работаете в этой школе? Коротко.", back: "С двадцать третьего", distractors: ["С двадцать третий", "В двадцать третьем"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto, storia (date verificate): с … по … год, с … года (nuovo) + в … году, data completa (vecchio). Леонардо a Milano 1482–1499 (Britannica), Лицей 1811–1817, Сикстинская капелла 1508–1512, «Война и мир» 1863–1869, метро 15.05.1935, Петербург 27.05.1703 (n. st.)
// ============================================================
const p6cards = [
    { front: "(1941–1945) — С какого по какой год шла Великая Отечественная война?", back: "С тысяча девятьсот сорок первого по тысяча девятьсот сорок пятый год", distractors: ["С тысяча девятьсот сорок первого по тысяча девятьсот сорок пятого года", "С тысяча девятьсот сорок первый по тысяча девятьсот сорок пятый год"] },
    { front: "(1961) — В каком году Гагарин полетел в космос?", back: "В тысяча девятьсот шестьдесят первом году", distractors: ["С тысяча девятьсот шестьдесят первого года", "В тысяча девятьсот шестьдесят первый год"] },
    { front: "(1811–1817) — С какого по какой год Пушкин учился в Лицее?", back: "С тысяча восемьсот одиннадцатого по тысяча восемьсот семнадцатый год", distractors: ["С тысяча восемьсот одиннадцатого по тысяча восемьсот семнадцатого года", "С тысяча восемьсот одиннадцатом по тысяча восемьсот семнадцатый год"] },
    { front: "(1482–1499) — С какого по какой год Леонардо жил в Милане?", back: "С тысяча четыреста восемьдесят второго по тысяча четыреста девяносто девятый год", distractors: ["С тысяча четыреста восемьдесят второго до тысяча четыреста девяносто девятого года", "С тысяча четыреста восемьдесят второй по тысяча четыреста девяносто девятый год"] },
    { front: "(27.05.1703) — Когда основали Санкт-Петербург?", back: "Двадцать седьмого мая тысяча семьсот третьего года", distractors: ["Двадцать седьмое мая тысяча семьсот третьего года", "Двадцать седьмого мая в тысяча семьсот третьем году"] },
    { front: "(1508–1512) — С какого по какой год Микеланджело расписывал потолок Сикстинской капеллы?", back: "С тысяча пятьсот восьмого по тысяча пятьсот двенадцатый год", distractors: ["С тысяча пятьсот восьмого по тысяча пятьсот двенадцатого года", "С тысяча пятьсот восьмой по тысяча пятьсот двенадцатый год"] },
    { front: "(1980) — В каком году в Москве была Олимпиада?", back: "В тысяча девятьсот восьмидесятом году", distractors: ["В тысяча девятьсот восьмидесятый год", "С тысяча девятьсот восьмидесятого года"] },
    { front: "(1863–1869) — С какого по какой год Толстой писал «Войну и мир»?", back: "С тысяча восемьсот шестьдесят третьего по тысяча восемьсот шестьдесят девятый год", distractors: ["С тысяча восемьсот шестьдесят третьего по тысяча восемьсот шестьдесят девятого года", "С тысяча восемьсот шестьдесят третьем по тысяча восемьсот шестьдесят девятый год"] },
    { front: "(1935) — С какого года работает московское метро?", back: "С тысяча девятьсот тридцать пятого года", distractors: ["В тысяча девятьсот тридцать пятом году", "С тысяча девятьсот тридцать пятый год"] },
    { front: "(1960) — В каком году в Риме была Олимпиада?", back: "В тысяча девятьсот шестидесятом году", distractors: ["В тысяча девятьсот шестидесятого года", "С тысяча девятьсот шестидесятого года"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto: с … по … год, с … года, до (nuovo) + в … году, data completa, anno di nascita, с понедельника по пятницу, с первого по пятнадцатое (vecchio), con spiegazioni
// ============================================================
const p7cards = [
    { front: "(2016–2021) — С какого по какой год ты учился в университете?", back: "С две тысячи шестнадцатого по две тысячи двадцать первый год", distractors: ["С две тысячи шестнадцатого по две тысячи двадцать первого года", "С две тысячи шестнадцатом по две тысячи двадцать первый год"], explanation: "с + genitivo … по + accusativo: il 2021 compreso." },
    { front: "(2021) — В каком году ты окончил университет?", back: "В две тысячи двадцать первом году", distractors: ["С две тысячи двадцать первого года", "В две тысячи двадцать первый год"], explanation: "Un momento, solo l'anno: в + prepositivo." },
    { front: "(2022) — С какого года ты работаешь в этой фирме?", back: "С две тысячи двадцать второго года", distractors: ["В две тысячи двадцать втором году", "По две тысячи двадцать второй год"], explanation: "Da quando? с + genitivo, con il presente (работаешь)." },
    { front: "(пн–пт) — Когда ты работаешь?", back: "С понедельника по пятницу", distractors: ["С понедельник по пятницу", "С понедельника по пятницы"], explanation: "Con i giorni: с + genitivo … по + accusativo." },
    { front: "(2019–2020) Я работала в Лондоне с две тысячи девятнадцатого… Закончи с «до».", back: "До две тысячи двадцать первого года", distractors: ["До две тысячи двадцатого года", "До две тысячи двадцать первый год"], explanation: "Il 2020 è compreso, quindi con «до» si nomina l'anno dopo: до … двадцать первого года." },
    { front: "(01.09.2016) — Когда ты начал учиться в университете?", back: "Первого сентября две тысячи шестнадцатого года", distractors: ["Первое сентября две тысячи шестнадцатого года", "Первого сентября в две тысячи шестнадцатом году"], explanation: "Data completa: tutto al genitivo, senza «в»." },
    { front: "(2012–2016) — С какого по какой год ты учился в лицее? Коротко.", back: "С двенадцатого по шестнадцатый", distractors: ["С двенадцатый по шестнадцатый", "С двенадцатого по шестнадцатого"], explanation: "Forma breve: с двенадцатого (genitivo) по шестнадцатый (accusativo)." },
    { front: "(1995) — Какого года рождения твой начальник?", back: "Девяносто пятого", distractors: ["Девяносто пятый", "В девяносто пятом"], explanation: "Anno di nascita: genitivo, senza preposizione." },
    { front: "(01.07–15.07) — Когда у тебя отпуск?", back: "С первого по пятнадцатое июля", distractors: ["С первого по пятнадцатого июля", "С первое по пятнадцатое июля"], explanation: "Con le date: с первого (genitivo) по пятнадцатое (accusativo)." },
    { front: "(2018–2023) — С какого по какой год ты работал в банке?", back: "С две тысячи восемнадцатого по две тысячи двадцать третий год", distractors: ["С две тысячи восемнадцатого до две тысячи двадцать третий год", "С две тысячи восемнадцатого по две тысячи двадцать третьего года"], explanation: "по + accusativo: двадцать третий год (compreso)." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto, storia di una famiglia che trasloca: с … по … год, с … года, до (nuovo) + в … году, mese + anno, data completa, anno di nascita, с первого по двадцатое (vecchio)
// ============================================================
const p8cards = [
    { front: "(2005–2010) — Когда вы жили в Новосибирске?", back: "С две тысячи пятого по две тысячи десятый год", distractors: ["С две тысячи пятого по две тысячи десятого года", "В две тысячи пятом по две тысячи десятый год"] },
    { front: "(2010) — В каком году вы переехали в Москву?", back: "В две тысячи десятом году", distractors: ["С две тысячи десятого года", "В две тысячи десятый год"] },
    { front: "(2010–2017) — С какого по какой год вы жили в Москве? Коротко.", back: "С десятого по семнадцатый", distractors: ["С десятого до семнадцатый", "С десятом по семнадцатый"] },
    { front: "(03.2017) — Когда вы переехали в Италию? Месяц и год.", back: "В марте семнадцатого года", distractors: ["В марте семнадцатом году", "В март семнадцатого года"] },
    { front: "(2017) — С какого года вы живёте в Италии?", back: "С две тысячи семнадцатого года", distractors: ["В две тысячи семнадцатом году", "С две тысячи семнадцатый год"] },
    { front: "(2017–2020) Мы жили в Падуе с две тысячи семнадцатого… Закончи с «до».", back: "До две тысячи двадцать первого года", distractors: ["До две тысячи двадцатого года", "До две тысячи двадцать первый год"] },
    { front: "(15.01.2021) — Когда вы переехали в Верону?", back: "Пятнадцатого января две тысячи двадцать первого года", distractors: ["Пятнадцатое января две тысячи двадцать первого года", "Пятнадцатого января в две тысячи двадцать первом году"] },
    { front: "(2021) — С какого года вы живёте в Вероне? Коротко.", back: "С двадцать первого", distractors: ["С двадцать первый", "В двадцать первом"] },
    { front: "(2014) — Дочь какого года?", back: "Две тысячи четырнадцатого", distractors: ["Две тысячи четырнадцатый", "В две тысячи четырнадцатом"] },
    { front: "(01.08–20.08) — Когда у вас был ремонт в новой квартире?", back: "С первого по двадцатое августа", distractors: ["С первого по двадцатого августа", "С первое по двадцатое августа"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelAp9() {
    const panel = document.getElementById('panel-ap-9');
    if (!panel) return;

    const container = panel.querySelector('#ap-9-cards-container');
    const prevBtn   = panel.querySelector('#ap-9-deck-prev');
    const nextBtn   = panel.querySelector('#ap-9-deck-next');
    const counterEl = panel.querySelector('#ap-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(2010–2020) Я работал в банке с две тысячи десятого ___.", options: ["по две тысячи двадцатого года", "до две тысячи двадцатый год", "по две тысячи двадцатый год"], answer: "по две тысячи двадцатый год" },
        { question: "(2015–2019) Я учился в университете ___ по две тысячи девятнадцатый год.", options: ["с две тысячи пятнадцатого", "с две тысячи пятнадцатом", "с две тысячи пятнадцатый"], answer: "с две тысячи пятнадцатого" },
        { question: "(2021) Я живу в Италии ___.", options: ["в две тысячи двадцать первом году", "с две тысячи двадцать первого года", "по две тысячи двадцать первый год"], answer: "с две тысячи двадцать первого года" },
        { question: "(2006–2009) Мы жили в Генуе с две тысячи шестого ___.", options: ["по две тысячи десятый год", "до две тысячи десятого года", "до две тысячи десятый год"], answer: "до две тысячи десятого года" },
        { question: "— ___ ты работаешь в этой школе? — С две тысячи восемнадцатого года.", options: ["Какой год", "В каком году", "С какого года"], answer: "С какого года" },
        { question: "(2010–2020) — С какого по какой год ты жил в Риме? — С десятого ___.", options: ["по двадцатый", "по двадцатого", "до двадцатый"], answer: "по двадцатый" },
        { question: "(1941–1945) Война шла с тысяча девятьсот сорок первого ___.", options: ["по тысяча девятьсот сорок пятый год", "по тысяча девятьсот сорок пятого года", "до тысяча девятьсот сорок пятого года"], answer: "по тысяча девятьсот сорок пятый год" },
        { question: "(2019) Я окончил университет в две тысячи ___ году.", options: ["девятнадцатого", "девятнадцатый", "девятнадцатом"], answer: "девятнадцатом" },
        { question: "(01.09.2015) Я начал работать первого сентября две тысячи ___.", options: ["пятнадцатом году", "пятнадцатого года", "пятнадцатый год"], answer: "пятнадцатого года" },
        { question: "(пн–пт) Я работаю с понедельника ___.", options: ["по пятницу", "по пятницы", "до пятницу"], answer: "по пятницу" }
    ];
    const matchPairs = [
        { left: "(2010–2020) С какого по какой год?", right: "с десятого по двадцатый год" },
        { left: "(2017) С какого года?", right: "с семнадцатого года" },
        { left: "(2017) В каком году?", right: "в семнадцатом году" },
        { left: "(2010–2019) С десятого… Закончи с «до».", right: "до двадцатого года" },
        { left: "(2012–2015) По какой год?", right: "по пятнадцатый год" },
        { left: "(1990) Ты какого года?", right: "девяностого" },
        { left: "(2026) Какой сейчас год?", right: "двадцать шестой" },
        { left: "(05.03.1990) Когда ты родился? Полная дата.", right: "пятого марта девяностого года" },
        { left: "(пн–пт) Когда ты работаешь?", right: "с понедельника по пятницу" },
        { left: "(01.05–05.05) Когда работает выставка?", right: "с первого по пятое мая" }
    ];
    const quizData = [
        { id: "ap9-w1", promptPrefix: "(2010–2020) Я работал в банке с две тысячи десятого по две тысячи ", promptSuffix: " год.", answers: ["двадцатый"] },
        { id: "ap9-w2", promptPrefix: "(2015–2019) Я учился в университете с две тысячи ", promptSuffix: " по две тысячи девятнадцатый год.", answers: ["пятнадцатого"] },
        { id: "ap9-w3", promptPrefix: "(2021) Я живу в Италии с две тысячи двадцать ", promptSuffix: " года.", answers: ["первого"] },
        { id: "ap9-w4", promptPrefix: "(2006–2009) Мы жили в Генуе с две тысячи шестого ", promptSuffix: " две тысячи десятого года.", answers: ["до"] },
        { id: "ap9-w5", promptPrefix: "(2012–2015) Я учился в Падуе с две тысячи двенадцатого ", promptSuffix: " две тысячи пятнадцатый год.", answers: ["по"] },
        { id: "ap9-w6", promptPrefix: "(2000) Мы знаем друг друга с ", promptSuffix: " года.", answers: ["двухтысячного"] },
        { id: "ap9-w7", promptPrefix: "— С какого ", promptSuffix: " ты живёшь в Милане? — С две тысячи девятнадцатого.", answers: ["года"] },
        { id: "ap9-w8", promptPrefix: "(2010–2020) — С какого по какой год ты жил в Риме? — С десятого по ", promptSuffix: ".", answers: ["двадцатый", "двадцатый год"] },
        { id: "ap9-w9", promptPrefix: "(2019) Я окончил университет в две тысячи ", promptSuffix: " году.", answers: ["девятнадцатом"] },
        { id: "ap9-w10", promptPrefix: "(1990) — Ты какого года? — ", promptSuffix: ".", answers: ["девяностого", "девяностого года", "тысяча девятьсот девяностого", "тысяча девятьсот девяностого года"] }
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
            card.className = 'fca01-card-container ap-9-card';
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
        container.querySelectorAll('.ap-9-card').forEach(card => {
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
                const card    = this.closest('.ap-9-card');
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
        container.querySelectorAll('.ap-9-card').forEach((c, i) => {
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
    'panel-ap-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-ap-01', exercises: p1exercises }),
    'panel-ap-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-ap-02', exercises: p2exercises }),
    'panel-ap-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-ap-03', exercises: p3exercises }),
    'panel-ap-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-ap-04', cards: p4cards }),
    'panel-ap-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-ap-05', cards: p5cards }),
    'panel-ap-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-ap-06', cards: p6cards }),
    'panel-ap-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-ap-07', cards: p7cards }),
    'panel-ap-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-ap-08', cards: p8cards }),
    'panel-ap-9': () => initPanelAp9()
};

initPanelManager({ initializers, enableAccessControl: true });
