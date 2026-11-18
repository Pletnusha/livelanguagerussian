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
// PANEL 8 — Flashcard · student
// Misto: dal medico — через / после + до / около / к / periodo / в
// ============================================================
const p8cards = [
    { front: "Врач: «Пейте лекарство неделю, потом приходите». Когда снова к врачу?", back: "Через неделю", distractors: ["Через неделя", "После недели"] },
    { front: "Врач: сначала лекарство, потом еда. Когда пить лекарство?", back: "До еды", distractors: ["После еды", "До еда"] },
    { front: "Сначала анализ, потом завтрак. Когда завтракать?", back: "После анализа", distractors: ["Через анализ", "После анализ"] },
    { front: "(10:00) Когда примерно освободится врач?", back: "Около десяти", distractors: ["Около десять", "Около десятью"] },
    { front: "Сейчас 9:40, приём в 10:00. Когда приём?", back: "Через двадцать минут", distractors: ["Через двадцать минуты", "Через двадцать минуту"] },
    { front: "(8:00) К какому часу нужно прийти на анализ?", back: "К восьми", distractors: ["К восемь", "К восьмью"] },
    { front: "Сейчас 11:00. Врач принимает с 14:00. Когда приём?", back: "Через три часа", distractors: ["После трёх часов", "Через три часов"] },
    { front: "(Пн–Пт) Когда работает поликлиника?", back: "С понедельника по пятницу", distractors: ["С понедельника до пятницу", "С понедельник по пятницу"] },
    { front: "Сегодня 1 апреля, результаты анализов — 15 апреля. Когда будут результаты?", back: "Через две недели", distractors: ["Через два недели", "Через две неделю"] },
    { front: "(15:30) Во сколько по записи приём?", back: "В половине четвёртого", distractors: ["Около половины четвёртого", "В половину четвёртого"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelTra9() {
    const panel = document.getElementById('panel-tra-9');
    if (!panel) return;

    const container = panel.querySelector('#tra-9-cards-container');
    const prevBtn   = panel.querySelector('#tra-9-deck-prev');
    const nextBtn   = panel.querySelector('#tra-9-deck-next');
    const counterEl = panel.querySelector('#tra-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Сейчас 10:00, урок в 11:00. Урок начнётся ___.", options: ["после часа", "через часа", "через час"], answer: "через час" },
        { question: "Сначала работа, потом бассейн. В бассейн я иду ___.", options: ["после работы", "через работу", "после работа"], answer: "после работы" },
        { question: "Сейчас 14:00, поезд в 14:05. Поезд уйдёт ___.", options: ["через пять минуты", "через пять минут", "через пять минуту"], answer: "через пять минут" },
        { question: "Сейчас 9:00, концерт в 12:00. Концерт ___.", options: ["через три часа", "через три часов", "через три час"], answer: "через три часа" },
        { question: "Сначала таблетка, потом завтрак. Таблетку пьют ___.", options: ["после завтрака", "до завтрак", "до завтрака"], answer: "до завтрака" },
        { question: "(17:00) Точно не знаю, приду ___.", options: ["около пять", "около пяти", "около пятью"], answer: "около пяти" },
        { question: "Сейчас 12:00, а магазин закрыт до 14:00. Приходи ___.", options: ["через час", "после двух", "после два"], answer: "после двух" },
        { question: "Сейчас 18:00, фильм в 18:30. Фильм начнётся ___.", options: ["через полчаса", "после получаса", "через получаса"], answer: "через полчаса" },
        { question: "(11:00) — К какому часу нужно прийти? — ___.", options: ["К одиннадцать", "К одиннадцатью", "К одиннадцати"], answer: "К одиннадцати" },
        { question: "Сегодня 1 мая, экзамен 15 мая. Экзамен ___.", options: ["через два недели", "через две недели", "через две неделю"], answer: "через две недели" }
    ];
    const matchPairs = [
        { left: "Сейчас 12:00, встреча в 13:00", right: "через час" },
        { left: "Сейчас 12:00, встреча в 12:30", right: "через полчаса" },
        { left: "Сейчас 12:00, встреча в 14:00", right: "через два часа" },
        { left: "Сейчас 12:00, встреча в 12:05", right: "через пять минут" },
        { left: "Сначала обед, потом прогулка. Прогулка — …", right: "после обеда" },
        { left: "Сначала прогулка, потом обед. Прогулка — …", right: "до обеда" },
        { left: "Сначала урок, потом обед. Обед — …", right: "после урока" },
        { left: "(15:00) Когда примерно?", right: "около трёх" },
        { left: "(15:00) К какому часу?", right: "к трём" },
        { left: "(15:00) Во сколько точно?", right: "в три часа" }
    ];
    const quizData = [
        { id: "tra9-w1", promptPrefix: "Сейчас 10:00, урок в 11:00. Урок начнётся ", promptSuffix: ".", answers: ["через час"] },
        { id: "tra9-w2", promptPrefix: "Сейчас 20:00, пицца будет в 20:30. Пицца будет ", promptSuffix: ".", answers: ["через полчаса", "через тридцать минут"] },
        { id: "tra9-w3", promptPrefix: "Сейчас 14:00, концерт в 16:00. Концерт начнётся ", promptSuffix: ".", answers: ["через два часа"] },
        { id: "tra9-w4", promptPrefix: "Сначала экзамен, потом вечеринка. Вечеринка будет ", promptSuffix: ".", answers: ["после экзамена"] },
        { id: "tra9-w5", promptPrefix: "Сейчас 9:00, такси в 9:10. Такси приедет ", promptSuffix: ".", answers: ["через десять минут"] },
        { id: "tra9-w6", promptPrefix: "Сейчас 9:00. Касса закрыта до 13:00. Билеты можно купить ", promptSuffix: ".", answers: ["после часа", "после часа дня", "после тринадцати", "после тринадцати часов", "через четыре часа"] },
        { id: "tra9-w7", promptPrefix: "Сегодня 1 марта, отпуск 8 марта. Отпуск будет ", promptSuffix: ".", answers: ["через неделю", "через семь дней"] },
        { id: "tra9-w8", promptPrefix: "(17:00) — Когда примерно ты придёшь? — ", promptSuffix: ".", answers: ["около пяти", "около пяти часов", "часов в пять"] },
        { id: "tra9-w9", promptPrefix: "Сначала лекарство, потом ужин. Лекарство пьют ", promptSuffix: ".", answers: ["до ужина"] },
        { id: "tra9-w10", promptPrefix: "Сейчас 11:58, обед в 12:00. Обед будет ", promptSuffix: ".", answers: ["через две минуты"] }
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
            card.className = 'fca01-card-container tra-9-card';
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
        container.querySelectorAll('.tra-9-card').forEach(card => {
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
                const card    = this.closest('.tra-9-card');
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
        container.querySelectorAll('.tra-9-card').forEach((c, i) => {
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
    'panel-tra-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-01', exercises: p1exercises }),
    'panel-tra-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-02', exercises: p2exercises }),
    'panel-tra-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-03', exercises: p3exercises }),
    'panel-tra-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-tra-04', cards: p4cards }),
    'panel-tra-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-tra-05', cards: p5cards }),
    'panel-tra-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-tra-06', cards: p6cards }),
    'panel-tra-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-tra-07', cards: p7cards }),
    'panel-tra-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-tra-08', cards: p8cards }),
    'panel-tra-9': () => initPanelTra9()
};

initPanelManager({ initializers, enableAccessControl: true });
