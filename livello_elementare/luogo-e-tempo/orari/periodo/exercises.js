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
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelPer9() {
    const panel = document.getElementById('panel-per-9');
    if (!panel) return;

    const container = panel.querySelector('#per-9-cards-container');
    const prevBtn   = panel.querySelector('#per-9-deck-prev');
    const nextBtn   = panel.querySelector('#per-9-deck-next');
    const counterEl = panel.querySelector('#per-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(9:00–18:00) Банк работает ___.", options: ["с девяти по шесть", "с девяти до шести", "с девять до шести"], answer: "с девяти до шести" },
        { question: "(Пн–Пт) Мы открыты ___.", options: ["с понедельника по пятницу", "с понедельника до пятницу", "с понедельник по пятницу"], answer: "с понедельника по пятницу" },
        { question: "(18:30) — Во сколько начинается фильм? — ___.", options: ["Половина седьмого", "В половину седьмого", "В половине седьмого"], answer: "В половине седьмого" },
        { question: "(3–8 мая) Выставка ___ мая.", options: ["с третьего по восьмого", "с третье по восьмое", "с третьего по восьмое"], answer: "с третьего по восьмое" },
        { question: "(12:45) — Сколько времени? — ___.", options: ["В без пятнадцати час", "Без пятнадцати час", "Без пятнадцати один"], answer: "Без пятнадцати час" },
        { question: "(Ср–Вс) Музей открыт ___.", options: ["со среды по воскресенье", "с среды по воскресенье", "со среды по воскресенья"], answer: "со среды по воскресенье" },
        { question: "(13:00–14:00) Перерыв ___.", options: ["с часа до двух", "с час до двух", "с часа по два"], answer: "с часа до двух" },
        { question: "(7:20) — Во сколько ты выходишь? — ___.", options: ["Двадцать минут восьмого", "В двадцать минут седьмого", "В двадцать минут восьмого"], answer: "В двадцать минут восьмого" },
        { question: "(10:00–16:30) Приём ___.", options: ["с десяти до половина пятого", "с десяти до половины пятого", "с десяти по половину пятого"], answer: "с десяти до половины пятого" },
        { question: "(22:00) — Сколько времени? — ___.", options: ["В десять часов вечера", "Десять часов вечера", "Десяти часов вечера"], answer: "Десять часов вечера" }
    ];
    const matchPairs = [
        { left: "(9:00–18:00) Часы работы", right: "с девяти до шести" },
        { left: "(Пн–Пт) Часы работы", right: "с понедельника по пятницу" },
        { left: "(17:30) Сколько времени?", right: "половина шестого" },
        { left: "(17:30) Во сколько?", right: "в половине шестого" },
        { left: "(1–5 мая) Когда?", right: "с первого по пятое мая" },
        { left: "(Вт–Сб) Когда?", right: "со вторника по субботу" },
        { left: "(8:50) Во сколько?", right: "без десяти девять" },
        { left: "(12:00–15:00) Обед", right: "с двенадцати до трёх" },
        { left: "(7:15) Во сколько?", right: "в четверть восьмого" },
        { left: "(18:00–19:30) Приём", right: "с шести до половины восьмого" }
    ];
    const quizData = [
        { id: "per9-w1", promptPrefix: "Магазин работает ", promptSuffix: ". (10:00–19:00)", answers: ["с десяти до семи"] },
        { id: "per9-w2", promptPrefix: "Мы работаем ", promptSuffix: ". (Пн–Пт)", answers: ["с понедельника по пятницу"] },
        { id: "per9-w3", promptPrefix: "Поезд уходит ", promptSuffix: ". (17:55)", answers: ["без пяти шесть"] },
        { id: "per9-w4", promptPrefix: "Выставка открыта ", promptSuffix: " мая. (2–9 мая)", answers: ["со второго по девятое"] },
        { id: "per9-w5", promptPrefix: "Перерыв ", promptSuffix: ". (13:00–14:00)", answers: ["с часа до двух", "с часу до двух"] },
        { id: "per9-w6", promptPrefix: "Урок начинается ", promptSuffix: ". (16:30)", answers: ["в половине пятого"] },
        { id: "per9-w7", promptPrefix: "Приём врача ", promptSuffix: ". (18:00–19:30)", answers: ["с шести до половины восьмого"] },
        { id: "per9-w8", promptPrefix: "Аптека открыта ", promptSuffix: ". (Вт–Сб)", answers: ["со вторника по субботу"] },
        { id: "per9-w9", promptPrefix: "— Сколько времени? — ", promptSuffix: ". (14:15)", answers: ["четверть третьего", "пятнадцать минут третьего"] },
        { id: "per9-w10", promptPrefix: "Обед ", promptSuffix: ". (12:00–15:00)", answers: ["с двенадцати до трёх"] }
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
            card.className = 'fca01-card-container per-9-card';
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
        container.querySelectorAll('.per-9-card').forEach(card => {
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
                const card    = this.closest('.per-9-card');
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
        container.querySelectorAll('.per-9-card').forEach((c, i) => {
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
    'panel-per-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-01', exercises: p1exercises }),
    'panel-per-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-02', exercises: p2exercises }),
    'panel-per-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-per-03', exercises: p3exercises }),
    'panel-per-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-04', cards: p4cards }),
    'panel-per-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-05', cards: p5cards }),
    'panel-per-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-06', cards: p6cards }),
    'panel-per-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-07', cards: p7cards }),
    'panel-per-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-per-08', cards: p8cards }),
    'panel-per-9': () => initPanelPer9()
};

initPanelManager({ initializers, enableAccessControl: true });
