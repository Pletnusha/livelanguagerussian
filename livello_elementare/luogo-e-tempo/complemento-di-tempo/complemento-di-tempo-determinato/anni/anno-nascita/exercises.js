import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Когда ты родился?» (blocco Годы) — solo l'anno (в тысяча девятьсот девяностом году, в + prepositivo)
// ↔ data completa (пятого марта тысяча девятьсот девяностого года: tutto al genitivo, senza preposizione).
// Anche mese + anno: в марте девяностого года; «Ты какого года?» — «Девяностого».
// Date di nascita verificate (Пушкин 6.6.1799 e Толстой 9.9.1828, Чайковский 7.5.1840 = nuovo stile; Гагарин 9.3.1934; Леонардо 15.4.1452; Феллини 20.1.1920; Софи Лорен 20.9.1934).
// Solo date e anni (niente ore). Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: data completa con anno al genitivo (nuovo) + solo anno / fatto / date (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.03.1990) Я родился пятого марта тысяча девятьсот {{1}}.",
        words: ["девяностом году", "девяностого года", "девяностый год"],
        correctAnswers: { 1: "девяностого года" },
        explanation: "Data completa: tutto al genitivo, senza «в»: девяностого года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) — В каком году ты родился? — В тысяча девятьсот {{1}}.",
        words: ["девяностого года", "девяностом годе", "девяностом году"],
        correctAnswers: { 1: "девяностом году" },
        explanation: "Solo l'anno: в + prepositivo: в … ом году."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12.04.1961) Гагарин полетел в космос двенадцатого апреля тысяча девятьсот шестьдесят {{1}}.",
        words: ["первого года", "первом году", "первый год"],
        correctAnswers: { 1: "первого года" },
        explanation: "Dopo la data, l'anno va al genitivo: первого года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2026) — Какой сейчас год? — Две тысячи двадцать {{1}} год.",
        words: ["шестого", "шестом", "шестой"],
        correctAnswers: { 1: "шестой" },
        explanation: "Il fatto: nominativo maschile."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.01.2000) Он родился первого января {{1}}.",
        words: ["двухтысячном году", "двухтысячного года", "двух тысячного года"],
        correctAnswers: { 1: "двухтысячного года" },
        explanation: "2000 al genitivo: двухтысячного года (una parola)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18.11) У Антона день рождения {{1}} ноября.",
        words: ["восемнадцатого", "восемнадцатое", "в восемнадцатом"],
        correctAnswers: { 1: "восемнадцатого" },
        explanation: "Data senza anno: genitivo, senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(06.06.1799) Пушкин родился шестого июня тысяча семьсот девяносто {{1}}.",
        words: ["девятом году", "девятый год", "девятого года"],
        correctAnswers: { 1: "девятого года" },
        explanation: "Data completa: девятого года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2023) Мы поженились в две тысячи двадцать {{1}} году.",
        words: ["третьем", "третьего", "третий"],
        correctAnswers: { 1: "третьем" },
        explanation: "Solo l'anno: в … третьем году."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.09.1934) Софи Лорен родилась двадцатого сентября тысяча девятьсот тридцать {{1}}.",
        words: ["четвёртом году", "четвёртого года", "четвёртый год"],
        correctAnswers: { 1: "четвёртого года" },
        explanation: "Data completa: четвёртого года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05–05.05) Выставка работала {{1}} мая.",
        words: ["между первым и пятым", "с первого по пятого", "с первого по пятое"],
        correctAnswers: { 1: "с первого по пятое" },
        explanation: "Durata: с … по."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Anno al genitivo dopo la data: … ого года (non «… ом году», «… ый год», «… ого году»)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.03.1990) Мама родилась пятого марта тысяча девятьсот {{1}}.",
        words: ["девяностом году", "девяностого года", "девяностого году"],
        correctAnswers: { 1: "девяностого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14.07.2001) Сын родился четырнадцатого июля две тысячи {{1}}.",
        words: ["первом году", "первый год", "первого года"],
        correctAnswers: { 1: "первого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.01.2000) Это фото первого января {{1}}.",
        words: ["двухтысячного года", "двухтысячный год", "двухтысячном году"],
        correctAnswers: { 1: "двухтысячного года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(09.03.1934) Гагарин родился девятого марта тысяча девятьсот тридцать {{1}}.",
        words: ["четвёртого года", "четвёртого году", "четвёртом году"],
        correctAnswers: { 1: "четвёртого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(07.05.1840) Чайковский родился седьмого мая тысяча восемьсот {{1}}.",
        words: ["сорокового году", "сороковой год", "сорокового года"],
        correctAnswers: { 1: "сорокового года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.01.1920) Феллини родился двадцатого января тысяча девятьсот {{1}}.",
        words: ["двадцатом году", "двадцатого года", "двадцатый год"],
        correctAnswers: { 1: "двадцатого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.04.1452) Леонардо да Винчи родился пятнадцатого апреля тысяча четыреста пятьдесят {{1}}.",
        words: ["втором году", "второй год", "второго года"],
        correctAnswers: { 1: "второго года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(09.09.1828) Толстой родился девятого сентября тысяча восемьсот двадцать {{1}}.",
        words: ["восьмого года", "восьмом году", "восьмого году"],
        correctAnswers: { 1: "восьмого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23.02.2023) Дочь родилась двадцать третьего февраля две тысячи двадцать {{1}}.",
        words: ["третьем году", "третьего года", "третий год"],
        correctAnswers: { 1: "третьего года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(31.12.1999) Мы встретились тридцать первого декабря тысяча девятьсот девяносто {{1}}.",
        words: ["девятого года", "девятом году", "девятый год"],
        correctAnswers: { 1: "девятого года" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-an-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-an-01', exercises: p1exercises }),
    'panel-an-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-an-02', exercises: p2exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
