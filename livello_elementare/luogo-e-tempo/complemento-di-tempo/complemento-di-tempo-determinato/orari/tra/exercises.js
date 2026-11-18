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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-tra-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-tra-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
