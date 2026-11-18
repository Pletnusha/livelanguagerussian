import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Через час» — tra un'ora: через + accusativo (intervallo da adesso) ↔ после + genitivo (dopo un evento / un'ora dell'orologio)
// Trappola: «после часа» = dopo le 13, NON «tra un'ora». Forme: через минуту / неделю; через два часа / пять часов; через полчаса.
// Niente suggerimenti di significato: lo dice il contesto russo (сейчас 14:00, урок в 15:00 → через час).
// Storia: telefono e messaggi, attese (буду через пять минут, перезвоню через час, поезд через полчаса, приходите через неделю).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: через / после (nuovo) + до / около / к / в / fatto (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 11:00, обед в 12:00. Обед будет {{1}}.",
        words: ["после часа", "через часа", "через час"],
        correctAnswers: { 1: "через час" },
        explanation: "Ora sono le 11, il pranzo alle 12 → tra un'ora: через час. «После часа» = dopo le 13!"
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала зарядка, потом завтрак. Зарядку делают {{1}}.",
        words: ["до завтрака", "после завтрака", "до завтрак"],
        correctAnswers: { 1: "до завтрака" },
        explanation: "Prima la ginnastica, poi la colazione: до + genitivo: завтрак → завтрака."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я сейчас занята. Перезвоню {{1}}.",
        words: ["через минута", "через минуту", "через минуты"],
        correctAnswers: { 1: "через минуту" },
        explanation: "Tra un minuto: через + accusativo: минута → минуту."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) Точно не знаю, приду {{1}}.",
        words: ["около семь", "около семи", "около семью"],
        correctAnswers: { 1: "около семи" },
        explanation: "Ora approssimativa: около + genitivo: семь → семи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала обед, потом кофе. Кофе пьём {{1}}.",
        words: ["после обеда", "через обед", "после обед"],
        correctAnswers: { 1: "после обеда" },
        explanation: "Dopo un evento: после + genitivo. Через si usa con un intervallo (час, неделя), non con un evento."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:00) — К какому часу нужно сдать отчёт? — {{1}}.",
        words: ["К шесть", "К шестью", "К шести"],
        correctAnswers: { 1: "К шести" },
        explanation: "Scadenza: к + dativo: шесть → шести."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 10:00, поезд в 10:30. Поезд отправляется {{1}}.",
        words: ["через полчаса", "после получаса", "через пол часа"],
        correctAnswers: { 1: "через полчаса" },
        explanation: "Tra mezz'ora: через полчаса (una parola sola)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:15) Урок начинается ровно {{1}}.",
        words: ["около четверти десятого", "в четверти десятого", "в четверть десятого"],
        correctAnswers: { 1: "в четверть десятого" },
        explanation: "Ora esatta (ровно): в + accusativo: в четверть десятого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сегодня понедельник. Врач: «Приходите {{1}}, в следующий понедельник».",
        words: ["через неделя", "через неделю", "после недели"],
        correctAnswers: { 1: "через неделю" },
        explanation: "Tra una settimana: через + accusativo: неделя → неделю."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:30) — Сколько времени? — {{1}}.",
        words: ["Половина третьего", "В половине третьего", "Через половину третьего"],
        correctAnswers: { 1: "Половина третьего" },
        explanation: "Che ore sono? Il fatto, senza preposizione."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// через + accusativo senza numerali: час, минуту, неделю, месяц, полчаса, четверть часа (gli anni → blocco Даты)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Позвони мне {{1}}.",
        words: ["через часа", "через час", "через часом"],
        correctAnswers: { 1: "через час" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Подожди, я буду готова {{1}}.",
        words: ["через минута", "через минуте", "через минуту"],
        correctAnswers: { 1: "через минуту" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы едем в отпуск {{1}}.",
        words: ["через неделю", "через неделе", "через неделя"],
        correctAnswers: { 1: "через неделю" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мой день рождения {{1}}.",
        words: ["через месяц", "через месяца", "через месяцем"],
        correctAnswers: { 1: "через месяц" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обед будет готов {{1}}.",
        words: ["через часа", "через часом", "через час"],
        correctAnswers: { 1: "через час" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Фильм начнётся {{1}}.",
        words: ["через получаса", "через полчаса", "через полчас"],
        correctAnswers: { 1: "через полчаса" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Не клади трубку, я отвечу {{1}}.",
        words: ["через секунда", "через секунды", "через секунду"],
        correctAnswers: { 1: "через секунду" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Автобус придёт {{1}}.",
        words: ["через четверть часа", "через четверти часа", "через четвертью часа"],
        correctAnswers: { 1: "через четверть часа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Перезвоните, пожалуйста, {{1}}.",
        words: ["через часом", "через час", "через часа"],
        correctAnswers: { 1: "через час" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Приходите на контроль {{1}}.",
        words: ["через неделю", "через недели", "через неделей"],
        correctAnswers: { 1: "через неделю" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// через или после? Lo decide il contesto (сейчас X, evento alle Y / сначала … потом); trappola «после часа» = dopo le 13
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 12:00, встреча в 13:00, то есть {{1}}.",
        words: ["через час", "после часа", "через часа"],
        correctAnswers: { 1: "через час" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала урок, потом обед. Обед {{1}}.",
        words: ["через урок", "после урок", "после урока"],
        correctAnswers: { 1: "после урока" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 9:00. Я позвоню в 9:15, то есть {{1}}.",
        words: ["после четверти часа", "через четверть часа", "через четверти часа"],
        correctAnswers: { 1: "через четверть часа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала фильм, потом ужин. Мы ужинаем {{1}}.",
        words: ["через фильм", "после фильма", "после фильм"],
        correctAnswers: { 1: "после фильма" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 9:00, лекция в 10:00. Лекция начнётся {{1}}.",
        words: ["через час", "через часа", "после часа"],
        correctAnswers: { 1: "через час" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 11:30, а перерыв в банке с 12:00 до 13:00. Приходите {{1}}.",
        words: ["через час", "после часа", "после час"],
        correctAnswers: { 1: "после часа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала экзамен, потом каникулы. Каникулы начнутся {{1}}.",
        words: ["через экзамен", "после экзамен", "после экзамена"],
        correctAnswers: { 1: "после экзамена" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сегодня 1 мая. Отпуск начнётся 1 июня, то есть {{1}}.",
        words: ["через месяц", "после месяца", "через месяца"],
        correctAnswers: { 1: "через месяц" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала душ, потом кофе. Я пью кофе {{1}}.",
        words: ["через душ", "после душ", "после душа"],
        correctAnswers: { 1: "после душа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 18:00, поезд в 18:30. Поезд уходит {{1}}.",
        words: ["после полчаса", "через полчаса", "через полчас"],
        correctAnswers: { 1: "через полчаса" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// через + numerali (ore, minuti, giorni, settimane): 1 → nome; 2–4 → genitivo singolare; 5+ → genitivo plurale (con spiegazioni)
// ============================================================
const p4cards = [
    { front: "Сейчас 14:00, концерт в 16:00. Когда начнётся концерт?", back: "Через два часа", distractors: ["Через два часов", "Через две часа"], explanation: "2, 3, 4 + genitivo singolare: два часа." },
    { front: "Сейчас 10:00, урок в 10:05. Когда начнётся урок?", back: "Через пять минут", distractors: ["Через пять минуты", "Через пять минуту"], explanation: "Da 5 in poi + genitivo plurale: пять минут." },
    { front: "Сейчас 8:00, поезд в 11:00. Когда уходит поезд?", back: "Через три часа", distractors: ["Через три часов", "Через три час"], explanation: "2, 3, 4 + genitivo singolare: три часа." },
    { front: "Сейчас 12:00, автобус в 12:02. Когда придёт автобус?", back: "Через две минуты", distractors: ["Через два минуты", "Через две минут"], explanation: "Минута è femminile: две минуты (non «два»)." },
    { front: "Сегодня понедельник, концерт в четверг. Когда концерт?", back: "Через три дня", distractors: ["Через три дней", "Через три день"], explanation: "2, 3, 4 + genitivo singolare: день → дня." },
    { front: "Сейчас 9:00, обед в 14:00. Когда обед?", back: "Через пять часов", distractors: ["Через пять часа", "Через пять час"], explanation: "Da 5 in poi + genitivo plurale: пять часов." },
    { front: "Сегодня 1 марта, экзамен 15 марта. Когда экзамен?", back: "Через две недели", distractors: ["Через два недели", "Через две неделю"], explanation: "Неделя è femminile: две недели." },
    { front: "Сейчас 15:00, фильм в 15:20. Когда начнётся фильм?", back: "Через двадцать минут", distractors: ["Через двадцать минуты", "Через двадцать минуту"], explanation: "20 come 5: genitivo plurale: двадцать минут." },
    { front: "Сегодня 10 мая, свадьба 17 мая. Когда свадьба?", back: "Через неделю", distractors: ["Через неделя", "Через недели"], explanation: "Una settimana: через неделю, senza numero." },
    { front: "Сейчас 7:00, автобус в 7:40. Когда придёт автобус?", back: "Через сорок минут", distractors: ["Через сорок минуты", "Через сорок минуту"], explanation: "40 come 5: genitivo plurale: сорок минут." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Messaggi al telefono: сейчас X, nel messaggio Y → через … (минуту, полчаса, четверть часа, numerali)
// ============================================================
const p5cards = [
    { front: "Сейчас 18:00. Сообщение: «Я в метро, приеду в 18:10». Когда он приедет?", back: "Через десять минут", distractors: ["Через десять минуты", "Через десять минуту"] },
    { front: "Сейчас 14:00. Сообщение: «Перезвоню в 15:00». Когда она перезвонит?", back: "Через час", distractors: ["Через часа", "Через часом"] },
    { front: "Сейчас 20:00. Сообщение: «Пицца будет в 20:30». Когда привезут пиццу?", back: "Через полчаса", distractors: ["Через получаса", "Через пол часа"] },
    { front: "Сейчас 9:00. Сообщение: «Выхожу! Буду у тебя в 9:15». Когда он придёт?", back: "Через четверть часа", distractors: ["Через четверти часа", "Через четвертью часа"] },
    { front: "В чате: «Подожди секунду…» Когда он ответит?", back: "Через секунду", distractors: ["Через секунда", "Через секунды"] },
    { front: "Сейчас 13:00. Сообщение: «Встреча в 16:00». Когда встреча?", back: "Через три часа", distractors: ["Через три часов", "Через три час"] },
    { front: "Сейчас 21:58. Сообщение: «Буду дома в 22:00». Когда она будет дома?", back: "Через две минуты", distractors: ["Через два минуты", "Через две минут"] },
    { front: "Сейчас 10:59. Сообщение: «Урок в 11:00». Когда урок?", back: "Через минуту", distractors: ["Через минута", "Через минуты"] },
    { front: "Сейчас 17:00. Сообщение: «Поезд прибывает в 17:45». Когда прибывает поезд?", back: "Через сорок пять минут", distractors: ["Через сорок пять минуты", "Через сорок пять минуту"] },
    { front: "Сейчас 11:00. Сообщение: «Доставка в 13:00». Когда доставка?", back: "Через два часа", distractors: ["Через два часов", "Через две часа"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: через / после (nuovo) + до / около / к / во сколько / сколько времени (vecchio)
// ============================================================
const p6cards = [
    { front: "Сейчас 16:00, кино в 16:20. Когда кино?", back: "Через двадцать минут", distractors: ["После двадцати минут", "Через двадцать минуты"] },
    { front: "Сначала таблетка, потом завтрак. Когда пить таблетку?", back: "До завтрака", distractors: ["После завтрака", "До завтрак"] },
    { front: "Сначала работа, потом кино. Когда мы идём в кино?", back: "После работы", distractors: ["Через работу", "После работа"] },
    { front: "(20:00) Когда примерно ты вернёшься?", back: "Часов в восемь", distractors: ["Часа в восемь", "Около восемь"] },
    { front: "Сейчас 12:00, приём у врача в 13:00. Когда приём?", back: "Через час", distractors: ["После часа", "Через часа"] },
    { front: "(9:00) К какому часу нужно прийти на экзамен?", back: "К девяти", distractors: ["К девять", "К девятью"] },
    { front: "Сначала ужин, потом десерт. Когда десерт?", back: "После ужина", distractors: ["Через ужин", "После ужин"] },
    { front: "(18:45) Во сколько по расписанию уходит поезд?", back: "Без пятнадцати семь", distractors: ["В без пятнадцати семь", "Около без пятнадцати семь"] },
    { front: "Сейчас 19:00, поезд в 19:30. Когда поезд?", back: "Через полчаса", distractors: ["После получаса", "Через получаса"] },
    { front: "(16:15) Сколько времени?", back: "Четверть пятого", distractors: ["В четверть пятого", "Через четверть пятого"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni: alla stazione — через / после + periodo / около / к / в / fatto
// ============================================================
const p7cards = [
    { front: "Сейчас 10:00, поезд в 10:15. Когда отправляется поезд?", back: "Через пятнадцать минут", distractors: ["Через пятнадцать минуты", "После пятнадцати минут"], explanation: "Da 5 in poi + genitivo plurale: пятнадцать минут." },
    { front: "(6:00–23:00) Когда работает касса?", back: "С шести до одиннадцати", distractors: ["С шести по одиннадцать", "С шесть до одиннадцати"], explanation: "Periodo con le ore: с + genitivo … до + genitivo." },
    { front: "Сначала контроль, потом посадка. Когда посадка?", back: "После контроля", distractors: ["Через контроль", "После контроль"], explanation: "Dopo un evento: после + genitivo: контроль → контроля." },
    { front: "(14:00) Когда примерно прибудет поезд?", back: "Около двух", distractors: ["Около два", "Около двумя"], explanation: "Circa: около + genitivo: два → двух." },
    { front: "Сейчас 8:00, электричка в 8:30. Когда электричка?", back: "Через полчаса", distractors: ["Через получаса", "После получаса"], explanation: "Tra mezz'ora: через полчаса." },
    { front: "(7:00) К какому часу нужно приехать на вокзал?", back: "К семи", distractors: ["К семь", "К семью"], explanation: "Scadenza: к + dativo: семь → семи." },
    { front: "Сейчас 9:00. Касса закрыта до 13:00. Когда можно купить билет?", back: "После часа", distractors: ["Через час", "После час"], explanation: "«После часа» = dopo le 13. «Через час» = tra un'ora: alle 10 la cassa è ancora chiusa." },
    { front: "(23:30) Во сколько точно уходит ночной поезд?", back: "В половине двенадцатого", distractors: ["Около половины двенадцатого", "В половину двенадцатого"], explanation: "Ora esatta (точно): в половине двенадцатого." },
    { front: "Сначала обед в вагоне-ресторане, потом сон. Когда мы спим?", back: "После обеда", distractors: ["Через обед", "После обед"], explanation: "Dopo un evento: после + genitivo: обед → обеда." },
    { front: "(12:50) Сколько времени?", back: "Без десяти час", distractors: ["В без десяти час", "До без десяти час"], explanation: "Che ore sono? Il fatto, senza preposizione." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-tra-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-01', exercises: p1exercises }),
    'panel-tra-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-02', exercises: p2exercises }),
    'panel-tra-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-03', exercises: p3exercises }),
    'panel-tra-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-tra-04', cards: p4cards }),
    'panel-tra-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-tra-05', cards: p5cards }),
    'panel-tra-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-tra-06', cards: p6cards }),
    'panel-tra-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-tra-07', cards: p7cards })
};

initPanelManager({ initializers, enableAccessControl: true });
