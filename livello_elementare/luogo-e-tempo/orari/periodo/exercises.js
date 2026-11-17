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
    { front: "Пн–Пт", back: "С понедельника по пятницу", distractors: ["С понедельника по пятницы", "С понедельник по пятницу"], explanation: "Giorni: с + genitivo … по + accusativo. Il venerdì è incluso." },
    { front: "9:00–18:00", back: "С девяти до шести", distractors: ["С девяти по шесть", "С девять до шести"], explanation: "Ore: с … до + genitivo. Nello stile ufficiale si dice anche «до восемнадцати»." },
    { front: "Сб: 10:00–15:00", back: "В субботу с десяти до трёх", distractors: ["В субботу с десяти по три", "В субботе с десяти до трёх"], explanation: "Un solo giorno: в + accusativo (в субботу). Poi le ore con с … до." },
    { front: "Перерыв: 13:00–14:00", back: "Перерыв с часа до двух", distractors: ["Перерыв с час до двух", "Перерыв с часа до два"], explanation: "Genitivo dopo с e до: час → часа, два → двух." },
    { front: "1–10 мая", back: "С первого по десятое мая", distractors: ["С первого по десятого мая", "С первое по десятое мая"], explanation: "Date: с первого (genitivo) по десятое (accusativo). Il 10 è incluso." },
    { front: "Вт–Вс: 11:00–19:00", back: "Со вторника по воскресенье с одиннадцати до семи", distractors: ["С вторника по воскресенье с одиннадцати до семи", "Со вторника по воскресенье с одиннадцати по семь"], explanation: "Davanti a вт- si dice со. Giorni con по, ore con до." },
    { front: "Приём: 16:00–18:30", back: "Приём с четырёх до половины седьмого", distractors: ["Приём с четырёх до половина седьмого", "Приём с четырёх по половину седьмого"], explanation: "Dopo до anche la mezz'ora va al genitivo: половина → половины." },
    { front: "Ср–Чт", back: "Со среды по четверг", distractors: ["Со среды по четверга", "С среды по четверг"], explanation: "Davanti a ср- si dice со: со среды. Poi по + accusativo: четверг." },
    { front: "20–25 декабря", back: "С двадцатого по двадцать пятое декабря", distractors: ["С двадцатого по двадцать пятого декабря", "С двадцатое по двадцать пятое декабря"], explanation: "Nei numeri composti cambia solo l'ultima parola: двадцать пятое." },
    { front: "Пн–Сб: 8:00–20:00", back: "С понедельника по субботу с восьми утра до восьми вечера", distractors: ["С понедельника по субботу с восьми утра по восемь вечера", "С понедельника по субботы с восьми утра до восьми вечера"], explanation: "Giorni con по, ore con до. «утра» e «вечера» distinguono le 8 del mattino dalle 20." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// до o по? Ore → до + genitivo; giorni e date → по + accusativo
// ============================================================
const p5cards = [
    { front: "(10:00–17:00) с десяти … пяти", back: "с десяти до пяти", distractors: ["с десяти по пять", "с десяти до пять"] },
    { front: "(Пн–Чт) с понедельника … четверг", back: "с понедельника по четверг", distractors: ["с понедельника до четверг", "с понедельника по четверга"] },
    { front: "(5–12 июня) с пятого … двенадцатое июня", back: "с пятого по двенадцатое июня", distractors: ["с пятого до двенадцатое июня", "с пятого по двенадцатого июня"] },
    { front: "(12:00–13:30) с двенадцати … половины второго", back: "с двенадцати до половины второго", distractors: ["с двенадцати по половину второго", "с двенадцати до половина второго"] },
    { front: "(Ср–Сб) со среды … субботу", back: "со среды по субботу", distractors: ["со среды до субботу", "со среды по субботы"] },
    { front: "(23:00–6:00) с одиннадцати вечера … шести утра", back: "с одиннадцати вечера до шести утра", distractors: ["с одиннадцати вечера по шесть утра", "с одиннадцати вечера до шесть утра"] },
    { front: "(1–15 сентября) с первого … пятнадцатое сентября", back: "с первого по пятнадцатое сентября", distractors: ["с первого до пятнадцатое сентября", "с первого по пятнадцатого сентября"] },
    { front: "(Вт–Пт) со вторника … пятницу", back: "со вторника по пятницу", distractors: ["со вторника до пятницу", "со вторника по пятницы"] },
    { front: "(16:00–18:00) с четырёх … шести", back: "с четырёх до шести", distractors: ["с четырёх по шесть", "с четырёх до шесть"] },
    { front: "(25–31 декабря) с двадцать пятого … тридцать первое декабря", back: "с двадцать пятого по тридцать первое декабря", distractors: ["с двадцать пятого до тридцать первое декабря", "с двадцать пятого по тридцать первого декабря"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: periodo (с … до / с … по) + fatto / momento / без
// ============================================================
const p6cards = [
    { front: "(14:30) Во сколько начинается кино?", back: "В половине третьего", distractors: ["В половину третьего", "В половине второго"] },
    { front: "Пн–Ср: 10:00–14:00", back: "С понедельника по среду с десяти до двух", distractors: ["С понедельника по среды с десяти до двух", "С понедельника по среду с десяти по два"] },
    { front: "17:45", back: "Без пятнадцати шесть", distractors: ["В без пятнадцати шесть", "Без пятнадцати пять"] },
    { front: "Перерыв: 12:30–13:15", back: "Перерыв с половины первого до четверти второго", distractors: ["Перерыв с половины первого до четверть второго", "Перерыв с половина первого до четверти второго"] },
    { front: "(9:05) Во сколько приходит поезд?", back: "В пять минут десятого", distractors: ["Пять минут десятого", "В пять минут девятого"] },
    { front: "4–8 ноября", back: "С четвёртого по восьмое ноября", distractors: ["С четвёртого по восьмого ноября", "С четвёртое по восьмое ноября"] },
    { front: "21:20", back: "Двадцать минут десятого", distractors: ["Двадцать минут девятого", "В двадцать минут десятого"] },
    { front: "Чт–Вс: 18:00–23:00", back: "С четверга по воскресенье с шести до одиннадцати", distractors: ["С четверг по воскресенье с шести до одиннадцати", "С четверга по воскресенье с шести по одиннадцать"] },
    { front: "(10:50) Во сколько у тебя урок?", back: "Без десяти одиннадцать", distractors: ["Без десяти десять", "Без десять одиннадцать"] },
    { front: "Приём: 8:30–11:00", back: "Приём с половины девятого до одиннадцати", distractors: ["Приём с половину девятого до одиннадцати", "Приём с половины восьмого до одиннадцати"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni: periodo + fatto / momento / без
// ============================================================
const p7cards = [
    { front: "Пт–Вс: 12:00–22:00", back: "С пятницы по воскресенье с двенадцати до десяти", distractors: ["С пятницы по воскресенье с двенадцати по десять", "С пятница по воскресенье с двенадцати до десяти"], explanation: "Giorni con по (+ accusativo), ore con до (+ genitivo)." },
    { front: "(16:45) Во сколько начинается встреча?", back: "Без пятнадцати пять", distractors: ["В без пятнадцати пять", "Без пятнадцати четыре"], explanation: "Con без non si mette в: без + genitivo dei minuti + l'ora successiva." },
    { front: "8:15", back: "Четверть девятого", distractors: ["Четверть восьмого", "В четверть девятого"], explanation: "Che ore sono? Il fatto, senza preposizione: четверть + genitivo dell'ora successiva." },
    { front: "11–14 февраля", back: "С одиннадцатого по четырнадцатое февраля", distractors: ["С одиннадцатого по четырнадцатого февраля", "С одиннадцатое по четырнадцатое февраля"], explanation: "Date: с + genitivo … по + accusativo. Il 14 è incluso." },
    { front: "(20:30) Во сколько начинается спектакль?", back: "В половине девятого", distractors: ["В половину девятого", "Половина девятого"], explanation: "A che ora? Con la mezz'ora: в + prepositivo → в половине." },
    { front: "Приём: 9:30–12:00", back: "Приём с половины десятого до двенадцати", distractors: ["Приём с половина десятого до двенадцати", "Приём с половины десятого по двенадцать"], explanation: "Dopo с anche la mezz'ora va al genitivo: половина → половины." },
    { front: "13:10", back: "Десять минут второго", distractors: ["Десять минут первого", "В десять минут второго"], explanation: "Il fatto: minuti + genitivo dell'ora successiva (la seconda ora va dalle 13 alle 14)." },
    { front: "Ср–Пт", back: "Со среды по пятницу", distractors: ["Со среды по пятницы", "С среды по пятницу"], explanation: "Davanti a ср- si dice со. Poi по + accusativo: пятницу." },
    { front: "(6:00) Во сколько ты встаёшь?", back: "В шесть часов", distractors: ["Шесть часов", "В шести часах"], explanation: "Il momento con l'ora esatta: в + accusativo → в шесть часов." },
    { front: "Обед: 13:00–14:30", back: "Обед с часа до половины третьего", distractors: ["Обед с час до половины третьего", "Обед с часа до половина третьего"], explanation: "Genitivo dopo с e до: час → часа, половина → половины." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto: periodo + fatto / momento / без
// ============================================================
const p8cards = [
    { front: "Пн–Вт: 9:30–17:30", back: "С понедельника по вторник с половины десятого до половины шестого", distractors: ["С понедельника по вторник с половины десятого по половину шестого", "С понедельника по вторника с половины десятого до половины шестого"] },
    { front: "(11:45) Во сколько у тебя обед?", back: "Без пятнадцати двенадцать", distractors: ["В без пятнадцати двенадцать", "Без пятнадцать двенадцать"] },
    { front: "19:10", back: "Десять минут восьмого", distractors: ["Десять минут седьмого", "В десять минут восьмого"] },
    { front: "7–14 марта", back: "С седьмого по четырнадцатое марта", distractors: ["С седьмого по четырнадцатого марта", "С седьмое по четырнадцатое марта"] },
    { front: "(12:00) Во сколько встречаемся?", back: "В двенадцать часов", distractors: ["Двенадцать часов", "В двенадцати часах"] },
    { front: "Касса: 10:00–13:00", back: "Касса с десяти до часа", distractors: ["Касса с десяти до час", "Касса с десяти по час"] },
    { front: "22:45", back: "Без пятнадцати одиннадцать", distractors: ["Без пятнадцати десять", "Без пятнадцать одиннадцать"] },
    { front: "Вт–Сб", back: "Со вторника по субботу", distractors: ["Со вторника по субботы", "С вторника по субботу"] },
    { front: "(18:30) Во сколько закрывается почта?", back: "В половине седьмого", distractors: ["В половину седьмого", "В половине шестого"] },
    { front: "28 мая – 3 июня", back: "С двадцать восьмого мая по третье июня", distractors: ["С двадцать восьмого мая по третьего июня", "С двадцать восьмое мая по третье июня"] }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-per-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-01', exercises: p1exercises }),
    'panel-per-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-02', exercises: p2exercises }),
    'panel-per-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-03', exercises: p3exercises }),
    'panel-per-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-04', cards: p4cards }),
    'panel-per-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-05', cards: p5cards }),
    'panel-per-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-06', cards: p6cards }),
    'panel-per-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-07', cards: p7cards }),
    'panel-per-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-08', cards: p8cards }),
};

initPanelManager({ initializers, enableAccessControl: true });
