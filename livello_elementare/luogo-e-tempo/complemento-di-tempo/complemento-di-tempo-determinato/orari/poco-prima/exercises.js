import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Перед обедом» — poco prima: перед + strumentale (subito prima di un evento) ↔ до + genitivo (prima, in qualsiasi momento; con le ore SOLO до)
// Regola per italiani: con l'orologio solo «до шести», mai «перед шестью»; перед solo con eventi (перед обедом, перед сном).
// Anche «за + accusativo … до + genitivo»: за час до урока (un'ora prima della lezione), за пять минут до начала.
// Niente suggerimenti di significato: lo dice il contesto russo (прямо / сразу / за минуту → перед; утром … вечером → до).
// Storia: abitudini e routine (перед сном читаю, перед едой мою руки, перед выходом проверяю ключи).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: перед / до / за час до (nuovo) + после / через / около / к / fatto (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Я всегда читаю {{1}}.",
        words: ["перед сон", "перед сном", "перед сна"],
        correctAnswers: { 1: "перед сном" },
        explanation: "Subito prima di dormire: перед + strumentale: сон → сном (espressione fissa)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала урок, потом кафе. В кафе мы идём {{1}}.",
        words: ["через урок", "после урок", "после урока"],
        correctAnswers: { 1: "после урока" },
        explanation: "Dopo un evento: после + genitivo: урок → урока."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:00) Банк закрывается в шесть. Приходи {{1}}.",
        words: ["до шести", "перед шестью", "до шесть"],
        correctAnswers: { 1: "до шести" },
        explanation: "Con le ore solo до: до шести (non «перед шестью»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 15:00, урок в 15:30. Урок начнётся {{1}}.",
        words: ["через полчаса", "после получаса", "через получаса"],
        correctAnswers: { 1: "через полчаса" },
        explanation: "Tra mezz'ora: через полчаса."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Прямо {{1}} я выключаю телефон.",
        words: ["до урока", "перед уроком", "перед урок"],
        correctAnswers: { 1: "перед уроком" },
        explanation: "Прямо = subito: перед + strumentale: урок → уроком."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00) Точно не знаю, приду {{1}}.",
        words: ["около час", "около часом", "около часа"],
        correctAnswers: { 1: "около часа" },
        explanation: "Circa: около + genitivo: час → часа."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Урок в 10:00, я прихожу в 9:00, то есть {{1}} до урока.",
        words: ["через час", "за часа", "за час"],
        correctAnswers: { 1: "за час" },
        explanation: "Un'ora prima: за + accusativo (час) … до + genitivo (урока)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20:00) — К какому часу ты вернёшься? — {{1}}.",
        words: ["К восемь", "К восьми", "К восьмью"],
        correctAnswers: { 1: "К восьми" },
        explanation: "Scadenza: к + dativo: восемь → восьми."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мой руки {{1}}!",
        words: ["перед едой", "перед еда", "перед еды"],
        correctAnswers: { 1: "перед едой" },
        explanation: "Subito prima di mangiare: перед + strumentale: еда → едой."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:45) — Сколько времени? — {{1}}.",
        words: ["В без пятнадцати восемь", "Без пятнадцати восемь", "Перед без пятнадцати восемь"],
        correctAnswers: { 1: "Без пятнадцати восемь" },
        explanation: "Che ore sono? Il fatto, senza preposizione."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// перед + strumentale: -ом (ужином, уроком), -ой / -ей (работой, встречей), plurale -ями / -ыми (занятиями, выходными)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Я пью кофе {{1}}.",
        words: ["перед работа", "перед работой", "перед работы"],
        correctAnswers: { 1: "перед работой" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы гуляем {{1}}.",
        words: ["перед ужином", "перед ужин", "перед ужина"],
        correctAnswers: { 1: "перед ужином" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я волнуюсь {{1}}.",
        words: ["перед экзамена", "перед экзамене", "перед экзаменом"],
        correctAnswers: { 1: "перед экзаменом" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Позвони мне {{1}}.",
        words: ["перед встречей", "перед встреча", "перед встречи"],
        correctAnswers: { 1: "перед встречей" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я принимаю душ {{1}}.",
        words: ["перед завтрак", "перед завтраком", "перед завтрака"],
        correctAnswers: { 1: "перед завтраком" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы покупаем продукты {{1}}.",
        words: ["перед выходные", "перед выходных", "перед выходными"],
        correctAnswers: { 1: "перед выходными" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Дети волнуются {{1}}.",
        words: ["перед занятия", "перед занятиями", "перед занятий"],
        correctAnswers: { 1: "перед занятиями" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я проверяю ключи {{1}}.",
        words: ["перед выход", "перед выхода", "перед выходом"],
        correctAnswers: { 1: "перед выходом" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я собираю чемодан {{1}}.",
        words: ["перед поездка", "перед поездкой", "перед поездки"],
        correctAnswers: { 1: "перед поездкой" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я повторяю слова {{1}}.",
        words: ["перед уроком", "перед урока", "перед урок"],
        correctAnswers: { 1: "перед уроком" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// до или перед? Ore → solo до; прямо / сразу → перед; задолго → solo до
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00) Магазин открывается в девять. {{1}} он закрыт.",
        words: ["Перед девятью", "До девяти", "До девять"],
        correctAnswers: { 1: "До девяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Прямо {{1}} я всегда волнуюсь.",
        words: ["до концерта", "перед концерт", "перед концертом"],
        correctAnswers: { 1: "перед концертом" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я купил билеты задолго {{1}}.",
        words: ["до концерта", "перед концертом", "до концерт"],
        correctAnswers: { 1: "до концерта" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сразу {{1}} я пью воду.",
        words: ["перед тренировкой", "до тренировки", "перед тренировка"],
        correctAnswers: { 1: "перед тренировкой" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23:00) Шуметь можно только {{1}}.",
        words: ["перед одиннадцатью", "до одиннадцати", "до одиннадцать"],
        correctAnswers: { 1: "до одиннадцати" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Стоп! Прямо {{1}} нужно выключить телефоны.",
        words: ["до фильма", "перед фильм", "перед фильмом"],
        correctAnswers: { 1: "перед фильмом" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Каждый вечер прямо {{1}} я чищу зубы.",
        words: ["до сна", "перед сна", "перед сном"],
        correctAnswers: { 1: "перед сном" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12:00) Обед в двенадцать. Позвони мне {{1}}.",
        words: ["до двенадцати", "перед двенадцатью", "до двенадцать"],
        correctAnswers: { 1: "до двенадцати" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мама: «Прямо {{1}} помой руки!»",
        words: ["до еды", "перед едой", "перед еда"],
        correctAnswers: { 1: "перед едой" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы познакомились ещё в школе, задолго {{1}}.",
        words: ["перед свадьбой", "до свадьба", "до свадьбы"],
        correctAnswers: { 1: "до свадьбы" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Abitudini: перед + strumentale (subito prima), con spiegazioni
// ============================================================
const p4cards = [
    { front: "Каждый вечер в кровати я читаю. Когда?", back: "Перед сном", distractors: ["Перед сон", "Перед сна"], explanation: "Espressione fissa: перед сном (сон → сном)." },
    { front: "Обед на столе. Мама: «Помой руки!» Когда?", back: "Перед едой", distractors: ["Перед еда", "Перед еды"], explanation: "перед + strumentale: еда → едой." },
    { front: "Ключи, телефон, кошелёк — я проверяю у двери. Когда?", back: "Перед выходом", distractors: ["Перед выход", "Перед выхода"], explanation: "перед + strumentale: выход → выходом." },
    { front: "Через минуту экзамен, я очень волнуюсь. Когда я волнуюсь?", back: "Перед экзаменом", distractors: ["Перед экзамен", "Перед экзамена"], explanation: "перед + strumentale: экзамен → экзаменом." },
    { front: "Я делаю разминку, а потом сразу бегаю. Когда разминка?", back: "Перед тренировкой", distractors: ["Перед тренировка", "Перед тренировки"], explanation: "Femminile -а → -ой: тренировка → тренировкой." },
    { front: "Я пью кофе в 8:55, а работаю с 9:00. Когда я пью кофе?", back: "Перед работой", distractors: ["Перед работа", "Перед работы"], explanation: "Femminile -а → -ой: работа → работой." },
    { front: "Дети повторяют слова, а потом сразу идут в класс. Когда они повторяют слова?", back: "Перед уроком", distractors: ["Перед урок", "Перед урока"], explanation: "перед + strumentale: урок → уроком." },
    { front: "Вечером мы гуляем, потом сразу ужинаем. Когда мы гуляем?", back: "Перед ужином", distractors: ["Перед ужин", "Перед ужина"], explanation: "перед + strumentale: ужин → ужином." },
    { front: "В пятницу вечером мы покупаем продукты на субботу и воскресенье. Когда?", back: "Перед выходными", distractors: ["Перед выходные", "Перед выходных"], explanation: "Выходные si declina come un aggettivo: выходными." },
    { front: "Я собираю чемодан, а утром уезжаю. Когда я собираю чемодан?", back: "Перед поездкой", distractors: ["Перед поездка", "Перед поездки"], explanation: "Femminile -а → -ой: поездка → поездкой." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// за + accusativo … до + genitivo: за час до урока, за пять минут до концерта
// ============================================================
const p5cards = [
    { front: "Урок в 10:00, я прихожу в 9:00. Когда я прихожу?", back: "За час до урока", distractors: ["За часа до урока", "Через час до урока"] },
    { front: "Фильм в 20:00, мы в кино в 19:30. Когда мы в кино?", back: "За полчаса до фильма", distractors: ["За получаса до фильма", "За полчаса до фильм"] },
    { front: "Концерт в 19:00, я пришёл в 18:55. Когда я пришёл?", back: "За пять минут до концерта", distractors: ["За пять минуты до концерта", "За пять минут до концерт"] },
    { front: "Экзамен в пятницу, я начал готовиться в прошлую пятницу. Когда?", back: "За неделю до экзамена", distractors: ["За неделя до экзамена", "За неделю до экзамен"] },
    { front: "Встреча в 15:00, он позвонил в 14:59. Когда он позвонил?", back: "За минуту до встречи", distractors: ["За минута до встречи", "За минуту до встреча"] },
    { front: "Самолёт вылетает в 12:00, в аэропорту нужно быть в 10:00. Когда?", back: "За два часа до вылета", distractors: ["За два часов до вылета", "За два часа до вылет"] },
    { front: "Ужин в 19:00, я начинаю готовить в 18:00. Когда?", back: "За час до ужина", distractors: ["За час до ужин", "Через час до ужина"] },
    { front: "Праздник в субботу, я купил подарок в четверг. Когда?", back: "За два дня до праздника", distractors: ["За два дней до праздника", "За два дня до праздник"] },
    { front: "Лекция в 11:00, я приехал в 10:45. Когда?", back: "За пятнадцать минут до лекции", distractors: ["За пятнадцать минуты до лекции", "За пятнадцать минут до лекция"] },
    { front: "Магазин закрывается в 21:00, я пришёл в 20:50. Когда?", back: "За десять минут до закрытия", distractors: ["За десять минуты до закрытия", "За десять минут до закрытие"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: перед / до / за … до / задолго до (nuovo) + через / после / около / к / сколько времени (vecchio)
// ============================================================
const p6cards = [
    { front: "Экзамен через минуту. Когда я так волнуюсь?", back: "Перед экзаменом", distractors: ["До экзамена", "Перед экзамен"] },
    { front: "Сейчас 13:00, экзамен в 15:00. Когда экзамен?", back: "Через два часа", distractors: ["Через два часов", "Через двух часов"] },
    { front: "(10:00) Экзамен начинается в десять. Когда нужно сдать телефоны?", back: "До десяти", distractors: ["Перед десятью", "До десять"] },
    { front: "Сначала экзамен, потом каникулы. Когда каникулы?", back: "После экзамена", distractors: ["Через экзамен", "После экзамен"] },
    { front: "Экзамен в 9:00, я пришёл в 8:30. Когда я пришёл?", back: "За полчаса до экзамена", distractors: ["Через полчаса до экзамена", "За получаса до экзамена"] },
    { front: "(12:00) Когда примерно будут результаты?", back: "Около полудня", distractors: ["Около полдень", "Около полудню"] },
    { front: "Я начал готовиться в сентябре, а экзамен в июне. Когда я начал?", back: "Задолго до экзамена", distractors: ["Задолго перед экзаменом", "Задолго до экзамен"] },
    { front: "(9:00) К какому часу нужно прийти на экзамен?", back: "К девяти", distractors: ["К девять", "К девятью"] },
    { front: "Я повторяю слова в кровати, а потом сразу сплю. Когда?", back: "Перед сном", distractors: ["Перед сон", "Перед сна"] },
    { front: "(8:50) Сколько времени?", back: "Без десяти девять", distractors: ["В без десяти девять", "Перед без десяти девять"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni: in viaggio — перед / до / за … до / задолго до + через / после / около / к / fatto
// ============================================================
const p7cards = [
    { front: "Поезд через десять минут, мы покупаем воду в киоске. Когда?", back: "Перед отъездом", distractors: ["До отъезда", "Перед отъезд"], explanation: "Subito prima di partire: перед + strumentale: отъезд → отъездом." },
    { front: "Сейчас 7:00, такси в 7:20. Когда приедет такси?", back: "Через двадцать минут", distractors: ["Через двадцать минуты", "После двадцати минут"], explanation: "Da 5 in poi + genitivo plurale: двадцать минут." },
    { front: "Поезд в 18:00, мы на вокзале в 17:40. Когда мы на вокзале?", back: "За двадцать минут до отправления", distractors: ["Через двадцать минут до отправления", "За двадцать минуты до отправления"], explanation: "за + accusativo … до + genitivo: отправление → отправления." },
    { front: "Сначала регистрация, потом паспортный контроль. Когда контроль?", back: "После регистрации", distractors: ["Через регистрацию", "После регистрация"], explanation: "Dopo un evento: после + genitivo: регистрация → регистрации." },
    { front: "(12:00) Отель: номер нужно освободить в 12:00. Когда?", back: "До двенадцати", distractors: ["Перед двенадцатью", "До двенадцать"], explanation: "Con le ore solo до: до двенадцати." },
    { front: "(16:00) Когда примерно мы приедем в Москву?", back: "Часа в четыре", distractors: ["Часов в четыре", "Около четыре"], explanation: "Circa con l'inversione: 2, 3, 4 → часа в четыре." },
    { front: "Билеты мы купили в январе, а поездка в мае. Когда мы купили билеты?", back: "Задолго до поездки", distractors: ["Задолго перед поездкой", "Задолго до поездка"], explanation: "Задолго = molto prima: solo до (non «перед»)." },
    { front: "(5:00) К какому часу нужно приехать в аэропорт?", back: "К пяти", distractors: ["К пять", "К пятью"], explanation: "Scadenza: к + dativo: пять → пяти." },
    { front: "Самолёт вот-вот взлетит, пассажиры пристёгивают ремни. Когда?", back: "Перед взлётом", distractors: ["До взлёта", "Перед взлёт"], explanation: "Subito prima del decollo: перед + strumentale: взлёт → взлётом." },
    { front: "(23:55) Сколько времени?", back: "Без пяти двенадцать", distractors: ["В без пяти двенадцать", "Перед без пяти двенадцать"], explanation: "Che ore sono? Il fatto, senza preposizione." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto: lavoro e giornata — за … до / перед / до + ore / задолго до + после / через / около / к / во сколько
// ============================================================
const p8cards = [
    { front: "Совещание в 10:00, я пришёл в 9:59. Когда я пришёл?", back: "За минуту до совещания", distractors: ["Через минуту до совещания", "За минута до совещания"] },
    { front: "Сначала работа, потом фитнес. Когда фитнес?", back: "После работы", distractors: ["Через работу", "После работа"] },
    { front: "Я мою руки, а потом сразу обедаю. Когда я мою руки?", back: "Перед обедом", distractors: ["Перед обед", "Перед обеда"] },
    { front: "Сейчас 16:00, встреча в 16:45. Когда встреча?", back: "Через сорок пять минут", distractors: ["Через сорок пять минуты", "Через сорок пять минуту"] },
    { front: "(17:00) Офис закрывается в пять. Когда нужно позвонить?", back: "До пяти", distractors: ["Перед пятью", "До пять"] },
    { front: "(13:00) Когда примерно ты пообедаешь?", back: "Около часа", distractors: ["Около час", "Около часом"] },
    { front: "Отпуск в понедельник, я купил билеты в пятницу. Когда?", back: "За три дня до отпуска", distractors: ["За три дней до отпуска", "За три дня до отпуск"] },
    { front: "(18:00) К какому часу нужно закончить отчёт?", back: "К шести", distractors: ["К шесть", "К шестью"] },
    { front: "Подарок маме я купил в марте, а день рождения у неё в декабре. Когда?", back: "Задолго до дня рождения", distractors: ["Задолго перед днём рождения", "Задолго до день рождения"] },
    { front: "(19:30) Во сколько точно начинается спектакль?", back: "В половине восьмого", distractors: ["Около половины восьмого", "В половину восьмого"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelPp9() {
    const panel = document.getElementById('panel-pp-9');
    if (!panel) return;

    const container = panel.querySelector('#pp-9-cards-container');
    const prevBtn   = panel.querySelector('#pp-9-deck-prev');
    const nextBtn   = panel.querySelector('#pp-9-deck-next');
    const counterEl = panel.querySelector('#pp-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Мама: «Прямо ___ помой руки!»", options: ["до еды", "перед едой", "перед еда"], answer: "перед едой" },
        { question: "(18:00) Магазин закрывается в шесть. Приходи ___.", options: ["перед шестью", "до шесть", "до шести"], answer: "до шести" },
        { question: "Урок в 9:00, я пришёл в 8:50, то есть ___ до урока.", options: ["за десять минут", "через десять минут", "за десять минуты"], answer: "за десять минут" },
        { question: "Я всегда читаю ___.", options: ["перед сном", "перед сон", "перед сна"], answer: "перед сном" },
        { question: "Билеты мы купили задолго ___.", options: ["до концерт", "до концерта", "перед концертом"], answer: "до концерта" },
        { question: "Сейчас 10:00, урок в 11:00. Урок начнётся ___.", options: ["после часа", "через часа", "через час"], answer: "через час" },
        { question: "Сначала работа, потом кино. Мы идём в кино ___.", options: ["через работу", "после работа", "после работы"], answer: "после работы" },
        { question: "(15:00) Точно не знаю, приду ___.", options: ["около три", "около трёх", "около тремя"], answer: "около трёх" },
        { question: "Я пью кофе прямо ___.", options: ["перед работой", "перед работа", "перед работы"], answer: "перед работой" },
        { question: "(11:00) — К какому часу нужно прийти? — ___.", options: ["К одиннадцать", "К одиннадцатью", "К одиннадцати"], answer: "К одиннадцати" }
    ];
    const matchPairs = [
        { left: "Ужин в 19:00. Прямо … я мою руки", right: "перед ужином" },
        { left: "Ужин в 19:00, я пришёл в 18:00", right: "за час до ужина" },
        { left: "(19:00) Магазин закрывается в семь. Приходи …", right: "до семи" },
        { left: "Сначала ужин, потом прогулка. Прогулка — …", right: "после ужина" },
        { left: "Сейчас 18:00, ужин в 19:00. Ужин — …", right: "через час" },
        { left: "Каждый вечер в кровати я читаю", right: "перед сном" },
        { left: "Билеты в январе, концерт в мае", right: "задолго до концерта" },
        { left: "(15:00) Когда примерно?", right: "около трёх" },
        { left: "(15:00) К какому часу?", right: "к трём" },
        { left: "(15:00) Во сколько точно?", right: "в три часа" }
    ];
    const quizData = [
        { id: "pp9-w1", promptPrefix: "Обед на столе. Мама: «Прямо ", promptSuffix: " помой руки!»", answers: ["перед едой", "перед обедом"] },
        { id: "pp9-w2", promptPrefix: "(18:00) Банк закрывается в шесть. ", promptSuffix: " он открыт.", answers: ["до шести", "до шести часов", "до восемнадцати", "до восемнадцати часов"] },
        { id: "pp9-w3", promptPrefix: "Урок в 10:00, я пришёл в 9:30, то есть ", promptSuffix: " до урока.", answers: ["за полчаса", "за тридцать минут"] },
        { id: "pp9-w4", promptPrefix: "Каждый вечер в кровати я читаю. Я читаю ", promptSuffix: ".", answers: ["перед сном"] },
        { id: "pp9-w5", promptPrefix: "Билеты мы купили в январе, а концерт в мае: задолго ", promptSuffix: ".", answers: ["до концерта"] },
        { id: "pp9-w6", promptPrefix: "Экзамен через минуту. Я волнуюсь ", promptSuffix: ".", answers: ["перед экзаменом"] },
        { id: "pp9-w7", promptPrefix: "Сейчас 14:00, фильм в 14:20. Фильм начнётся ", promptSuffix: ".", answers: ["через двадцать минут"] },
        { id: "pp9-w8", promptPrefix: "Сначала урок, потом обед. Обед ", promptSuffix: ".", answers: ["после урока"] },
        { id: "pp9-w9", promptPrefix: "Самолёт в 12:00, в аэропорту я в 10:00, то есть ", promptSuffix: " до вылета.", answers: ["за два часа"] },
        { id: "pp9-w10", promptPrefix: "(17:00) — Когда примерно ты придёшь? — ", promptSuffix: ".", answers: ["около пяти", "около пяти часов", "часов в пять"] }
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
            card.className = 'fca01-card-container pp-9-card';
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
        container.querySelectorAll('.pp-9-card').forEach(card => {
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
                const card    = this.closest('.pp-9-card');
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
        container.querySelectorAll('.pp-9-card').forEach((c, i) => {
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
    'panel-pp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-01', exercises: p1exercises }),
    'panel-pp-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-02', exercises: p2exercises }),
    'panel-pp-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-03', exercises: p3exercises }),
    'panel-pp-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-04', cards: p4cards }),
    'panel-pp-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-05', cards: p5cards }),
    'panel-pp-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-06', cards: p6cards }),
    'panel-pp-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-07', cards: p7cards }),
    'panel-pp-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-08', cards: p8cards }),
    'panel-pp-9': () => initPanelPp9()
};

initPanelManager({ initializers, enableAccessControl: true });
