import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «С первого по пятое» (blocco Даты, complemento di tempo continuato) — periodo con le date:
// с + genitivo (с первого) … по + accusativo (по пятое = compreso) ↔ до + genitivo (до пятого = il 5 escluso). Norma Gramota: «по» con le date = incluso.
// Trappola: «по пятое», non «по пятого» (accusativo del neutro = nominativo). Mese sempre al genitivo: с двадцать пятого декабря по восьмое января.
// Solo date (niente ore). Vecchio materiale: fatto/momento con le date, с понедельника по пятницу.
// Storia: ferie, vacanze, mostre, chiuso per lavori, feste di Capodanno.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: с … по / до con le date (nuovo) + fatto/momento, с понедельника по пятницу, giorno (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05–05.05) Выставка работает с первого {{1}} мая.",
        words: ["по пятого", "до пятое", "по пятое"],
        correctAnswers: { 1: "по пятое" },
        explanation: "Fino al 5 compreso: по + accusativo: пятое (per il neutro = nominativo)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18.11) — Какое сегодня число? — {{1}} ноября.",
        words: ["Восемнадцатое", "Восемнадцатого", "С восемнадцатого"],
        correctAnswers: { 1: "Восемнадцатое" },
        explanation: "Che giorno è? Il fatto: nominativo neutro."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.07–20.07) Я в отпуске {{1}} по двадцатое июля.",
        words: ["с десятое", "с десятого", "с десятом"],
        correctAnswers: { 1: "с десятого" },
        explanation: "Inizio del periodo: с + genitivo: десятое → десятого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(пн–пт) Мы работаем {{1}}.",
        words: ["с понедельника до пятницу", "с понедельник по пятницу", "с понедельника по пятницу"],
        correctAnswers: { 1: "с понедельника по пятницу" },
        explanation: "Giorni: с + genitivo … по + accusativo (venerdì compreso)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.12–08.01) Каникулы с двадцать пятого декабря {{1}} января.",
        words: ["по восьмого", "по восьмое", "до восьмое"],
        correctAnswers: { 1: "по восьмое" },
        explanation: "Anche con due mesi: по восьмое января; il mese resta al genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21.11) У них свадьба {{1}} ноября.",
        words: ["двадцать первого", "двадцать первое", "с двадцать первого"],
        correctAnswers: { 1: "двадцать первого" },
        explanation: "Quando? Il momento: genitivo senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Магазин закрыт с первого {{1}}: пятого он уже открыт.",
        words: ["по пятое", "до пятое", "до пятого"],
        correctAnswers: { 1: "до пятого" },
        explanation: "Il 5 non è compreso → до + genitivo: до пятого. «По пятое» = compreso."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(сб, 05.12) Вечеринка {{1}}, пятого.",
        words: ["в субботу", "в суббота", "с субботы"],
        correctAnswers: { 1: "в субботу" },
        explanation: "Giorno della settimana: в + accusativo: суббота → субботу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.06–31.08) Летние каникулы с первого июня по {{1}} августа.",
        words: ["тридцать первого", "тридцать первое", "тридцать первый"],
        correctAnswers: { 1: "тридцать первое" },
        explanation: "по + accusativo: тридцать первое (non «тридцать первого»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(09.05) — Какое сегодня число? — {{1}} мая.",
        words: ["Девятого", "По девятое", "Девятое"],
        correctAnswers: { 1: "Девятое" },
        explanation: "Il fatto: nominativo neutro: девятое."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dp-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
