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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-pp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-01', exercises: p1exercises }),
    'panel-pp-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-02', exercises: p2exercises }),
    'panel-pp-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-03', exercises: p3exercises }),
    'panel-pp-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-04', cards: p4cards }),
    'panel-pp-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-05', cards: p5cards }),
    'panel-pp-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-pp-06', cards: p6cards })
};

initPanelManager({ initializers, enableAccessControl: true });
