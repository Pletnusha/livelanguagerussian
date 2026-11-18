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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-an-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-an-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
