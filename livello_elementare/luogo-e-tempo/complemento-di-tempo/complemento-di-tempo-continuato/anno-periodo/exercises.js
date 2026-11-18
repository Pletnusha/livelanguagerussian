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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-ap-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-ap-01', exercises: p1exercises }),
    'panel-ap-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-ap-02', exercises: p2exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
