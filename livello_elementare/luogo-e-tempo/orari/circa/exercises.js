import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Около трёх» — ora approssimativa: около + genitivo, «часа в три», около полудня / полуночи
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.
// Convenzione: «≈» davanti all'ora = ora approssimativa; senza ≈ l'ora è esatta.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: около / часа в три / полдень, полночь (nuovo) + periodo / momento / без (vecchio)
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈15:00) — Когда ты придёшь? — {{1}}.",
        words: ["Около три", "Около трёх", "Около трём"],
        correctAnswers: { 1: "Около трёх" },
        explanation: "Ora approssimativa: около + genitivo: три → трёх."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–18:00) Офис работает {{1}}.",
        words: ["с девяти до шести", "с девяти по шесть", "с девять до шести"],
        correctAnswers: { 1: "с девяти до шести" },
        explanation: "Periodo con le ore: с + genitivo … до + genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈17:30) Я буду дома {{1}}.",
        words: ["около половина шестого", "около половину шестого", "около половины шестого"],
        correctAnswers: { 1: "около половины шестого" },
        explanation: "Dopo около anche la mezz'ora va al genitivo: половина → половины."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) — Во сколько начинается концерт? — {{1}}.",
        words: ["Около семи", "Семь часов", "В семь часов"],
        correctAnswers: { 1: "В семь часов" },
        explanation: "Ora esatta (senza ≈): в + accusativo. Около si usa solo per un'ora approssimativa."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈13:00) Курьер приедет {{1}}.",
        words: ["около часа", "около час", "около часом"],
        correctAnswers: { 1: "около часа" },
        explanation: "около + genitivo: час → часа."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈20:00) — Когда вы вернётесь? — {{1}}.",
        words: ["Часа в восемь", "Часов в восемь", "Около восемь"],
        correctAnswers: { 1: "Часов в восемь" },
        explanation: "Nel parlato si dice «circa» anche invertendo: часов в восемь = около восьми. Con 5–12: часов; con 2, 3, 4: часа (часа в три)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(8:50) — Сколько времени? — {{1}}.",
        words: ["В без десяти девять", "Около без десяти девять", "Без десяти девять"],
        correctAnswers: { 1: "Без десяти девять" },
        explanation: "Che ore sono? Con без niente preposizione: без + genitivo dei minuti + l'ora successiva."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈0:00) Мы вернёмся домой {{1}}.",
        words: ["около полночь", "около полуночи", "около полночью"],
        correctAnswers: { 1: "около полуночи" },
        explanation: "Genitivo irregolare: полночь → полуночи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈14:00) Позвони мне {{1}}.",
        words: ["часов в два", "часу в два", "часа в два"],
        correctAnswers: { 1: "часа в два" },
        explanation: "Inversione = «circa». Con 2, 3, 4 si dice часа: часа в два."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈12:00) Обед будет {{1}}.",
        words: ["около полудня", "около полдень", "около полудню"],
        correctAnswers: { 1: "около полудня" },
        explanation: "Genitivo irregolare: полдень → полудня."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// около + genitivo (ore, половина, четверть, полдень, полночь)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈16:00) Я приеду {{1}}.",
        words: ["около четыре", "около четырёх", "около четырём"],
        correctAnswers: { 1: "около четырёх" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈19:00) Гости придут {{1}}.",
        words: ["около семи", "около семь", "около в семь"],
        correctAnswers: { 1: "около семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈11:30) Мастер будет {{1}}.",
        words: ["около половину двенадцатого", "около половина двенадцатого", "около половины двенадцатого"],
        correctAnswers: { 1: "около половины двенадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈22:00) Поезд прибывает {{1}}.",
        words: ["около десять", "около десяти", "около десятью"],
        correctAnswers: { 1: "около десяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈2:00) Он вернулся {{1}} ночи.",
        words: ["около два", "около двух", "около двумя"],
        correctAnswers: { 1: "около двух" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈9:15) Начнём {{1}}.",
        words: ["около четверть десятого", "около в четверть десятого", "около четверти десятого"],
        correctAnswers: { 1: "около четверти десятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈18:00) Магазин закроется {{1}}.",
        words: ["около шести", "около шесть", "около шестью"],
        correctAnswers: { 1: "около шести" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈0:00) Фильм закончится {{1}}.",
        words: ["около полуночи", "около полночь", "около в полночь"],
        correctAnswers: { 1: "около полуночи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈13:00) Позвоните {{1}}.",
        words: ["около час", "около в час", "около часа"],
        correctAnswers: { 1: "около часа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈12:00) Приходи {{1}}.",
        words: ["около полдень", "около полудня", "около полудню"],
        correctAnswers: { 1: "около полудня" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Approssimativo (≈: около / часа в три) o esatto (в + accusativo)?
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(15:00) Встреча начнётся {{1}}.",
        words: ["около трёх", "в три", "в трёх"],
        correctAnswers: { 1: "в три" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈15:00) Встреча начнётся {{1}}.",
        words: ["часа в три", "в три", "часов в три"],
        correctAnswers: { 1: "часа в три" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈18:30) Я освобожусь {{1}}.",
        words: ["в половине седьмого", "около половины седьмого", "около в половине седьмого"],
        correctAnswers: { 1: "около половины седьмого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:30) Начало спектакля {{1}}.",
        words: ["около половины седьмого", "в половину седьмого", "в половине седьмого"],
        correctAnswers: { 1: "в половине седьмого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈21:00) Мы будем дома {{1}}.",
        words: ["часов в девять", "часа в девять", "в девять часов"],
        correctAnswers: { 1: "часов в девять" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21:00) Поезд отправляется {{1}}.",
        words: ["часов в девять", "в девять часов", "около девяти"],
        correctAnswers: { 1: "в девять часов" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈4:00) Он лёг спать {{1}} утра.",
        words: ["часа в четыре", "часов в четыре", "в четыре часа"],
        correctAnswers: { 1: "часа в четыре" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈12:00) Давай пообедаем {{1}}.",
        words: ["в полдень", "около полдень", "около полудня"],
        correctAnswers: { 1: "около полудня" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(0:00) Новый год наступает {{1}}.",
        words: ["около полуночи", "в полночь", "в полуночи"],
        correctAnswers: { 1: "в полночь" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈10:30) Я позвоню {{1}}.",
        words: ["около половины одиннадцатого", "в половине одиннадцатого", "около половину одиннадцатого"],
        correctAnswers: { 1: "около половины одиннадцатого" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// около + genitivo: rispondere «Когда…?» con un'ora approssimativa
// ============================================================
const p4cards = [
    { front: "(≈17:00) Когда ты придёшь?", back: "Около пяти", distractors: ["Около пять", "Около пятью"], explanation: "Ora approssimativa: около + genitivo: пять → пяти." },
    { front: "(≈14:00) Когда приедет курьер?", back: "Около двух", distractors: ["Около два", "Около двумя"], explanation: "около + genitivo: два → двух." },
    { front: "(≈19:30) Когда начнётся ужин?", back: "Около половины восьмого", distractors: ["Около половина восьмого", "Около в половине восьмого"], explanation: "Dopo около anche la mezz'ora va al genitivo: половина → половины." },
    { front: "(≈12:00) Когда ты обедаешь?", back: "Около полудня", distractors: ["Около полдень", "Около полудню"], explanation: "Genitivo irregolare: полдень → полудня." },
    { front: "(≈23:00) Когда ты ложишься спать?", back: "Около одиннадцати", distractors: ["Около одиннадцать", "Около одиннадцатью"], explanation: "около + genitivo: одиннадцать → одиннадцати." },
    { front: "(≈8:15) Когда ты выходишь из дома?", back: "Около четверти девятого", distractors: ["Около четверть девятого", "Около четвертью девятого"], explanation: "Anche il quarto va al genitivo: четверть → четверти." },
    { front: "(≈1:00) Когда вы вернулись?", back: "Около часа ночи", distractors: ["Около час ночи", "Около часом ночи"], explanation: "около + genitivo: час → часа." },
    { front: "(≈0:00) Когда закончится вечеринка?", back: "Около полуночи", distractors: ["Около полночь", "Около полночью"], explanation: "Genitivo irregolare: полночь → полуночи." },
    { front: "(≈10:00) Когда откроется магазин?", back: "Около десяти", distractors: ["Около десять", "Около в десять"], explanation: "Mai «около в»: около prende il genitivo direttamente (около десяти)." },
    { front: "(≈18:00) Когда ты будешь дома?", back: "Около шести", distractors: ["Около шесть", "Около шестью"], explanation: "около + genitivo: шесть → шести." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Inversione = «circa»: около трёх → часа в три (2–4: часа; 5–12: часов)
// ============================================================
const p5cards = [
    { front: "около трёх = …", back: "часа в три", distractors: ["часов в три", "в три часа"] },
    { front: "около восьми = …", back: "часов в восемь", distractors: ["часа в восемь", "в восемь часов"] },
    { front: "около двух = …", back: "часа в два", distractors: ["часов в два", "часу в два"] },
    { front: "около пяти = …", back: "часов в пять", distractors: ["часа в пять", "в пять часов"] },
    { front: "около четырёх = …", back: "часа в четыре", distractors: ["часов в четыре", "в четыре часа"] },
    { front: "около десяти = …", back: "часов в десять", distractors: ["часа в десять", "в десять часов"] },
    { front: "около семи = …", back: "часов в семь", distractors: ["часа в семь", "в семь часов"] },
    { front: "около двенадцати = …", back: "часов в двенадцать", distractors: ["часа в двенадцать", "в двенадцать часов"] },
    { front: "около одиннадцати = …", back: "часов в одиннадцать", distractors: ["часа в одиннадцать", "в одиннадцать часов"] },
    { front: "около шести вечера = …", back: "часов в шесть вечера", distractors: ["часа в шесть вечера", "в шесть часов вечера"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: около / часа в … (nuovo) + periodo / momento / fatto / без (vecchio)
// ============================================================
const p6cards = [
    { front: "(≈15:30) Когда начнём?", back: "Около половины четвёртого", distractors: ["Около половина четвёртого", "В половине четвёртого"] },
    { front: "(10:00–14:00) Когда работает касса?", back: "С десяти до двух", distractors: ["С десяти по два", "С десять до двух"] },
    { front: "(17:45) Сколько времени?", back: "Без пятнадцати шесть", distractors: ["В без пятнадцати шесть", "Около без пятнадцати шесть"] },
    { front: "(≈21:00) Когда вы вернётесь?", back: "Часов в девять", distractors: ["Часа в девять", "В девять часов"] },
    { front: "(9:20) Во сколько приходит автобус?", back: "В двадцать минут десятого", distractors: ["Двадцать минут десятого", "Около двадцать минут десятого"] },
    { front: "(≈23:30) Когда закончится праздник?", back: "Около половины двенадцатого", distractors: ["Около половина двенадцатого", "В половине двенадцатого"] },
    { front: "(Пн–Чт) Когда открыт бассейн?", back: "С понедельника по четверг", distractors: ["С понедельника по четверга", "С понедельник по четверг"] },
    { front: "(≈14:00) Когда тебе позвонить?", back: "Часа в два", distractors: ["Часов в два", "В два часа"] },
    { front: "(12:00) Во сколько встречаемся?", back: "В полдень", distractors: ["Около полудня", "В полудня"] },
    { front: "(16:15) Сколько времени?", back: "Четверть пятого", distractors: ["В четверть пятого", "Около четверти пятого"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni: approssimato / esatto / periodo / без
// ============================================================
const p7cards = [
    { front: "(≈20:30) Когда ты будешь дома?", back: "Около половины девятого", distractors: ["Около половина девятого", "В половине девятого"], explanation: "≈ = circa: около + genitivo. Anche la mezz'ora va al genitivo: половины." },
    { front: "(Ср–Пт) Когда работает выставка?", back: "Со среды по пятницу", distractors: ["Со среды по пятницы", "С среды по пятницу"], explanation: "Giorni: со среды (со davanti a ср-) по пятницу (accusativo)." },
    { front: "(≈16:00) Когда у тебя перерыв?", back: "Часа в четыре", distractors: ["Часов в четыре", "В четыре часа"], explanation: "Inversione = circa. Con 2, 3, 4: часа (часа в четыре)." },
    { front: "(8:40) Сколько времени?", back: "Без двадцати девять", distractors: ["В без двадцати девять", "Около без двадцати девять"], explanation: "Che ore sono? Con без niente preposizione: без двадцати девять." },
    { front: "(≈13:00) Когда ты пообедаешь?", back: "Около часа", distractors: ["Около час", "Около в час"], explanation: "около + genitivo: час → часа. Mai «около в»." },
    { front: "(19:15) Во сколько начинается урок?", back: "В четверть восьмого", distractors: ["Четверть восьмого", "Около четверти восьмого"], explanation: "Ora esatta (senza ≈): в + accusativo → в четверть восьмого." },
    { front: "(≈7:00) Когда ты встаёшь?", back: "Часов в семь", distractors: ["Часа в семь", "В семь часов"], explanation: "Inversione = circa. Con 5–12: часов (часов в семь)." },
    { front: "(11:00–15:00) Когда открыт музей?", back: "С одиннадцати до трёх", distractors: ["С одиннадцати по три", "С одиннадцать до трёх"], explanation: "Periodo con le ore: с + genitivo … до + genitivo." },
    { front: "(0:00) Во сколько бой курантов?", back: "В полночь", distractors: ["Около полуночи", "В полуночи"], explanation: "Ora esatta: в полночь (accusativo), come в полдень. Около полуночи = circa." },
    { front: "(≈9:00) Когда ты придёшь в офис?", back: "Около девяти", distractors: ["Около девять", "Около девятью"], explanation: "около + genitivo: девять → девяти." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto: approssimato + esatto / periodo / fatto / без
// ============================================================
const p8cards = [
    { front: "(≈18:30) Когда ты освободишься?", back: "Около половины седьмого", distractors: ["Около половину седьмого", "В половине седьмого"] },
    { front: "(≈15:00) Когда ты будешь в офисе?", back: "Часа в три", distractors: ["Часов в три", "В три часа"] },
    { front: "(9:00–13:00) Когда работает почта в субботу?", back: "С девяти до часа", distractors: ["С девяти до час", "С девяти по час"] },
    { front: "(20:10) Во сколько начинается матч?", back: "В десять минут девятого", distractors: ["Десять минут девятого", "Около десяти минут девятого"] },
    { front: "(≈22:00) Когда начнётся фильм?", back: "Около десяти вечера", distractors: ["Около десять вечера", "Около в десять вечера"] },
    { front: "(14:30) Сколько времени?", back: "Половина третьего", distractors: ["В половине третьего", "Около половины третьего"] },
    { front: "(≈11:00) Когда ты проснёшься?", back: "Часов в одиннадцать", distractors: ["Часа в одиннадцать", "В одиннадцать часов"] },
    { front: "(12–15 октября) Когда фестиваль?", back: "С двенадцатого по пятнадцатое октября", distractors: ["С двенадцатого по пятнадцатого октября", "С двенадцатое по пятнадцатое октября"] },
    { front: "(5:50) Во сколько уходит первый автобус?", back: "Без десяти шесть", distractors: ["В без десяти шесть", "Без десять шесть"] },
    { front: "(≈3:00) Когда вы вернулись с вечеринки?", back: "Около трёх ночи", distractors: ["Около три ночи", "Около тремя ночи"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelCir9() {
    const panel = document.getElementById('panel-cir-9');
    if (!panel) return;

    const container = panel.querySelector('#cir-9-cards-container');
    const prevBtn   = panel.querySelector('#cir-9-deck-prev');
    const nextBtn   = panel.querySelector('#cir-9-deck-next');
    const counterEl = panel.querySelector('#cir-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(≈16:00) Я приду ___.", options: ["около четыре", "около четырёх", "в четыре"], answer: "около четырёх" },
        { question: "(16:00) Урок начинается ___.", options: ["в четыре", "около четырёх", "в четырёх"], answer: "в четыре" },
        { question: "(≈21:00) Мы вернёмся ___.", options: ["часа в девять", "в девять часов", "часов в девять"], answer: "часов в девять" },
        { question: "(≈0:00) Гости ушли ___.", options: ["около полуночи", "около полночь", "в полуночи"], answer: "около полуночи" },
        { question: "(9:00–17:00) Банк работает ___.", options: ["с девяти по пять", "с девять до пяти", "с девяти до пяти"], answer: "с девяти до пяти" },
        { question: "(≈14:00) Позвони мне ___.", options: ["часов в два", "часа в два", "в два часа"], answer: "часа в два" },
        { question: "(12:00) Обед ровно ___.", options: ["около полудня", "в полдень", "в полудня"], answer: "в полдень" },
        { question: "(7:50) — Сколько времени? — ___.", options: ["В без десяти восемь", "Около без десяти восемь", "Без десяти восемь"], answer: "Без десяти восемь" },
        { question: "(≈19:30) Ужин будет ___.", options: ["около половины восьмого", "около половина восьмого", "в половине восьмого"], answer: "около половины восьмого" },
        { question: "(Пн–Пт) Мы работаем ___.", options: ["с понедельника до пятницу", "с понедельника по пятницу", "с понедельник по пятницу"], answer: "с понедельника по пятницу" }
    ];
    const matchPairs = [
        { left: "(≈15:00) Когда?", right: "около трёх" },
        { left: "(15:00) Во сколько?", right: "в три часа" },
        { left: "(≈20:00) Когда? (часов в …)", right: "часов в восемь" },
        { left: "(≈12:00) Когда?", right: "около полудня" },
        { left: "(0:00) Во сколько?", right: "в полночь" },
        { left: "(≈17:30) Когда?", right: "около половины шестого" },
        { left: "(17:30) Во сколько?", right: "в половине шестого" },
        { left: "(17:30) Сколько времени?", right: "половина шестого" },
        { left: "(10:00–19:00) Часы работы", right: "с десяти до семи" },
        { left: "(≈13:00) Когда?", right: "около часа" }
    ];
    const quizData = [
        { id: "cir9-w1", promptPrefix: "Курьер приедет ", promptSuffix: ". (≈14:00)", answers: ["около двух", "часа в два"] },
        { id: "cir9-w2", promptPrefix: "Я буду дома ", promptSuffix: ". (≈18:30)", answers: ["около половины седьмого"] },
        { id: "cir9-w3", promptPrefix: "Фильм закончится ", promptSuffix: ". (≈0:00)", answers: ["около полуночи"] },
        { id: "cir9-w4", promptPrefix: "Встреча начнётся ", promptSuffix: ". (15:00)", answers: ["в три", "в три часа", "в пятнадцать часов"] },
        { id: "cir9-w5", promptPrefix: "Позвони мне ", promptSuffix: ". (≈19:00)", answers: ["около семи", "часов в семь"] },
        { id: "cir9-w6", promptPrefix: "Обед ", promptSuffix: ". (≈12:00)", answers: ["около полудня"] },
        { id: "cir9-w7", promptPrefix: "Магазин работает ", promptSuffix: ". (8:00–20:00)", answers: ["с восьми до восьми", "с восьми утра до восьми вечера"] },
        { id: "cir9-w8", promptPrefix: "— Сколько времени? — ", promptSuffix: ". (9:45)", answers: ["без пятнадцати десять", "без четверти десять"] },
        { id: "cir9-w9", promptPrefix: "Мы вернёмся ", promptSuffix: ". (≈23:00)", answers: ["около одиннадцати", "часов в одиннадцать"] },
        { id: "cir9-w10", promptPrefix: "Поезд отправляется ", promptSuffix: ". (6:30)", answers: ["в половине седьмого"] }
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
            card.className = 'fca01-card-container cir-9-card';
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
        container.querySelectorAll('.cir-9-card').forEach(card => {
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
                const card    = this.closest('.cir-9-card');
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
        container.querySelectorAll('.cir-9-card').forEach((c, i) => {
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
    'panel-cir-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-cir-01', exercises: p1exercises }),
    'panel-cir-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-cir-02', exercises: p2exercises }),
    'panel-cir-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-cir-03', exercises: p3exercises }),
    'panel-cir-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-cir-04', cards: p4cards }),
    'panel-cir-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-cir-05', cards: p5cards }),
    'panel-cir-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-cir-06', cards: p6cards }),
    'panel-cir-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-cir-07', cards: p7cards }),
    'panel-cir-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-cir-08', cards: p8cards }),
    'panel-cir-9': () => initPanelCir9()
};

initPanelManager({ initializers, enableAccessControl: true });
