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
// PANEL 2 — DragDrop · student
// с … до + genitivo con le ore (cartelli e orari)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(10:00–19:00) Магазин работает {{1}}.",
        words: ["с десять до семи", "с десяти по семь", "с десяти до семи"],
        correctAnswers: { 1: "с десяти до семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12:00–15:00) Обед в ресторане {{1}}.",
        words: ["с двенадцати до трёх", "с двенадцать до трёх", "с двенадцати до три"],
        correctAnswers: { 1: "с двенадцати до трёх" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(8:00–20:00) Аптека открыта {{1}}.",
        words: ["с восьми до восьми", "с восьми по восемь", "с восьми до восемь"],
        correctAnswers: { 1: "с восьми до восьми" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:00–16:30) Приём документов {{1}}.",
        words: ["с два до половины пятого", "с двух до половины пятого", "с двух до половина пятого"],
        correctAnswers: { 1: "с двух до половины пятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(11:30–13:00) Урок {{1}}.",
        words: ["с половина двенадцатого до часа", "с половины двенадцатого до час", "с половины двенадцатого до часа"],
        correctAnswers: { 1: "с половины двенадцатого до часа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–17:00) Офис работает {{1}}.",
        words: ["с девять до пяти", "с девяти до пяти", "с девяти по пять"],
        correctAnswers: { 1: "с девяти до пяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(7:00–10:00) Завтрак в отеле {{1}}.",
        words: ["с семи до десять", "с семи до десяти", "с семь до десяти"],
        correctAnswers: { 1: "с семи до десяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:30–20:00) Тренировка {{1}}.",
        words: ["с половины седьмого до восьми", "с половины седьмого по восемь", "с половину седьмого до восьми"],
        correctAnswers: { 1: "с половины седьмого до восьми" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(22:00–7:00) Тишина в доме {{1}}.",
        words: ["с десять вечера до семь утра", "с десяти вечера по семь утра", "с десяти вечера до семи утра"],
        correctAnswers: { 1: "с десяти вечера до семи утра" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15:00–16:00) Перерыв на кофе {{1}}.",
        words: ["с трёх до четырёх", "с трёх до четыре", "с три до четырёх"],
        correctAnswers: { 1: "с трёх до четырёх" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-per-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-01', exercises: p1exercises }),
    'panel-per-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-02', exercises: p2exercises }),
};

initPanelManager({ initializers, enableAccessControl: true });
