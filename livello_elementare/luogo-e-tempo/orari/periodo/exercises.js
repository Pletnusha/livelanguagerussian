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
// PANEL 3 — DragDrop · paid
// с … по: giorni della settimana e date (с + genitivo, по + accusativo)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(Пн–Сб) Магазин работает {{1}}.",
        words: ["с понедельник по субботу", "с понедельника по субботу", "с понедельника по субботы"],
        correctAnswers: { 1: "с понедельника по субботу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(Ср–Вс) Выставка открыта {{1}}.",
        words: ["со среды по воскресенье", "с среды по воскресенье", "со среды по воскресенья"],
        correctAnswers: { 1: "со среды по воскресенье" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(3–7 марта) Конференция {{1}} марта.",
        words: ["с третье по седьмое", "с третьего по седьмого", "с третьего по седьмое"],
        correctAnswers: { 1: "с третьего по седьмое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(Чт–Пт) Курсы проходят {{1}}.",
        words: ["с четверга по пятница", "с четверг по пятницу", "с четверга по пятницу"],
        correctAnswers: { 1: "с четверга по пятницу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1–31 августа) Музей закрыт {{1}} августа.",
        words: ["с первого по тридцать первое", "с первого по тридцать первого", "с первое по тридцать первое"],
        correctAnswers: { 1: "с первого по тридцать первое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(Вт–Чт) Приём врача {{1}}.",
        words: ["со вторника по четверг", "со вторника по четверга", "с вторник по четверг"],
        correctAnswers: { 1: "со вторника по четверг" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15–20 апреля) Я в Москве {{1}} апреля.",
        words: ["с пятнадцатое по двадцатое", "с пятнадцатого по двадцатое", "с пятнадцатого по двадцатого"],
        correctAnswers: { 1: "с пятнадцатого по двадцатое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(Пн–Чт) Бассейн открыт {{1}}.",
        words: ["с понедельника по четверга", "с понедельника по четвергу", "с понедельника по четверг"],
        correctAnswers: { 1: "с понедельника по четверг" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2–9 января) Каникулы {{1}} января.",
        words: ["с второго по девятое", "со второго по девятое", "со второго по девятого"],
        correctAnswers: { 1: "со второго по девятое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(Пт–Вс) Фестиваль {{1}}.",
        words: ["с пятницы по воскресенье", "с пятница по воскресенье", "с пятницы по воскресенья"],
        correctAnswers: { 1: "с пятницы по воскресенье" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Cartelli: come si leggono (ore → с … до, giorni e date → с … по)
// ============================================================
const p4cards = [
    { front: "Пн–Пт", back: "С понедельника по пятницу", explanation: "Giorni: с + genitivo … по + accusativo. Il venerdì è incluso." },
    { front: "9:00–18:00", back: "С девяти до шести", explanation: "Ore: с … до + genitivo. Nello stile ufficiale si dice anche «до восемнадцати»." },
    { front: "Сб: 10:00–15:00", back: "В субботу с десяти до трёх", explanation: "Un solo giorno: в + accusativo (в субботу). Poi le ore con с … до." },
    { front: "Перерыв: 13:00–14:00", back: "Перерыв с часа до двух", explanation: "Genitivo dopo с e до: час → часа, два → двух." },
    { front: "1–10 мая", back: "С первого по десятое мая", explanation: "Date: с первого (genitivo) по десятое (accusativo). Il 10 è incluso." },
    { front: "Вт–Вс: 11:00–19:00", back: "Со вторника по воскресенье с одиннадцати до семи", explanation: "Davanti a вт- si dice со. Giorni con по, ore con до." },
    { front: "Приём: 16:00–18:30", back: "Приём с четырёх до половины седьмого", explanation: "Dopo до anche la mezz'ora va al genitivo: половина → половины." },
    { front: "Ср–Чт", back: "Со среды по четверг", explanation: "Davanti a ср- si dice со: со среды. Poi по + accusativo: четверг." },
    { front: "20–25 декабря", back: "С двадцатого по двадцать пятое декабря", explanation: "Nei numeri composti cambia solo l'ultima parola: двадцать пятое." },
    { front: "Пн–Сб: 8:00–20:00", back: "С понедельника по субботу с восьми утра до восьми вечера", explanation: "Giorni con по, ore con до. «утра» e «вечера» distinguono le 8 del mattino dalle 20." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-per-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-01', exercises: p1exercises }),
    'panel-per-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-02', exercises: p2exercises }),
    'panel-per-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-03', exercises: p3exercises }),
    'panel-per-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-04', cards: p4cards }),
};

initPanelManager({ initializers, enableAccessControl: true });
