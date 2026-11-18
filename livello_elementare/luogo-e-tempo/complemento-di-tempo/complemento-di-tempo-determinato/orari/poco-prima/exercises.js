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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-pp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-01', exercises: p1exercises }),
    'panel-pp-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-02', exercises: p2exercises }),
    'panel-pp-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-pp-03', exercises: p3exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
