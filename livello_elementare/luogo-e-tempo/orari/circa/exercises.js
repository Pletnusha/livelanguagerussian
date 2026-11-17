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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-cir-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-cir-01', exercises: p1exercises }),
    'panel-cir-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-cir-02', exercises: p2exercises }),
    'panel-cir-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-cir-03', exercises: p3exercises }),
    'panel-cir-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-cir-04', cards: p4cards }),
    'panel-cir-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-cir-05', cards: p5cards }),
    'panel-cir-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-cir-06', cards: p6cards }),
};

initPanelManager({ initializers, enableAccessControl: true });
