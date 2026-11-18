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
// через + accusativo senza numerali: час, минуту, неделю, месяц, год, полчаса, четверть часа
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
        text: "Они поженятся {{1}}.",
        words: ["через года", "через годом", "через год"],
        correctAnswers: { 1: "через год" }
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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-tra-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-01', exercises: p1exercises }),
    'panel-tra-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-02', exercises: p2exercises }),
    'panel-tra-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-03', exercises: p3exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
