import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «С … до, с … по» — periodo (ore: с … до + genitivo; giorni e date: с … по + accusativo)
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: с … до / с … по (nuovo) + fatto / momento / без (vecchio)
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(Пн–Пт) Мы работаем {{1}}.",
        words: ["с понедельник по пятница", "с понедельника по пятницу", "с понедельника по пятницы"],
        correctAnswers: { 1: "с понедельника по пятницу" },
        explanation: "Giorni: с + genitivo … по + accusativo (l'ultimo giorno è incluso): с понедельника по пятницу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–18:00) Банк работает {{1}}.",
        words: ["с девять до шесть", "с девяти до шести", "с девяти по шесть"],
        correctAnswers: { 1: "с девяти до шести" },
        explanation: "Ore: с + genitivo … до + genitivo. Con le ore si usa до, non по: с девяти до шести."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(17:30) — Сколько сейчас времени? — {{1}}.",
        words: ["Половина шестого", "В половине шестого", "С половины шестого"],
        correctAnswers: { 1: "Половина шестого" },
        explanation: "Che ore sono? È il fatto: niente preposizione → половина шестого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1–5 мая) Выставка открыта {{1}} мая.",
        words: ["с первого по пятое", "с первое по пятое", "с первого по пятого"],
        correctAnswers: { 1: "с первого по пятое" },
        explanation: "Date: с + genitivo (первого) … по + accusativo (пятое, uguale al nominativo per il neutro). Il 5 è incluso."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) — Во сколько начинается концерт? — {{1}}.",
        words: ["Семь часов", "В семь часов", "С семи часов"],
        correctAnswers: { 1: "В семь часов" },
        explanation: "A che ora? È il momento: в + accusativo → в семь часов."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00–14:00) Перерыв {{1}}.",
        words: ["с час до двух", "с часа до два", "с часа до двух"],
        correctAnswers: { 1: "с часа до двух" },
        explanation: "Genitivo dopo с e до: час → часа, два → двух."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(8:50) — Во сколько уходит автобус? — {{1}}.",
        words: ["В без десяти девять", "Без десяти девять", "Без десять девять"],
        correctAnswers: { 1: "Без десяти девять" },
        explanation: "Con без non si mette в: без + genitivo dei minuti (десяти) + l'ora successiva (девять)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:00–19:30) Приём врача {{1}}.",
        words: ["с шести до половина восьмого", "с шести до половины восьмого", "с шесть до половины восьмого"],
        correctAnswers: { 1: "с шести до половины восьмого" },
        explanation: "Dopo до anche la mezz'ora va al genitivo: половина → половины."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10–20 июля) Мы в отпуске {{1}} июля.",
        words: ["с десятого до двадцатое", "с десятое по двадцатое", "с десятого по двадцатое"],
        correctAnswers: { 1: "с десятого по двадцатое" },
        explanation: "Date: с десятого (genitivo) по двадцатое (accusativo). Il 20 è incluso."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(Вт–Сб) Музей открыт {{1}}.",
        words: ["со вторника по субботу", "с вторника по субботу", "со вторника по субботы"],
        correctAnswers: { 1: "со вторника по субботу" },
        explanation: "Davanti a вт- si dice со: со вторника. Poi по + accusativo: субботу."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-per-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-01', exercises: p1exercises }),
};

initPanelManager({ initializers, enableAccessControl: true });
