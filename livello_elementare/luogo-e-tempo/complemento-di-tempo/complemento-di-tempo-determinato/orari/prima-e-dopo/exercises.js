import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «До и после» — prima e dopo: до + genitivo ↔ после + genitivo (eventi e ore)
// Alternativa unica della pagina: до ↔ после. «через» (tra un'ora) e «перед» (poco prima) hanno pagine proprie.
// Niente suggerimenti di significato: l'ordine degli eventi lo dà il contesto russo (сначала … потом) o un orario.
// Storia: cartelli, regole, istruzioni (до еды / после еды, после 23:00 не шуметь).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: до / после + genitivo (nuovo) + periodo / около / к / в / без (vecchio)
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала работа, потом спортзал: я хожу в спортзал {{1}}.",
        words: ["до работы", "после работы", "после работа"],
        correctAnswers: { 1: "после работы" },
        explanation: "Prima il lavoro, poi la palestra → dopo: после + genitivo: работа → работы."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10:00–19:00) Магазин работает {{1}}.",
        words: ["с десяти по семь", "с десять до семи", "с десяти до семи"],
        correctAnswers: { 1: "с десяти до семи" },
        explanation: "Periodo con le ore: с + genitivo … до + genitivo («по» si usa con i giorni)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала таблетка, потом завтрак: таблетку пьют {{1}}.",
        words: ["до завтрака", "до завтрак", "после завтрака"],
        correctAnswers: { 1: "до завтрака" },
        explanation: "Prima la pastiglia, poi la colazione → prima: до + genitivo: завтрак → завтрака."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) Точно не знаю, гости придут {{1}}.",
        words: ["около семи", "около семь", "в семи"],
        correctAnswers: { 1: "около семи" },
        explanation: "Ora approssimativa: около + genitivo: семь → семи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23:00) Соседи рано ложатся спать. Табличка: «{{1}} не шуметь».",
        words: ["До одиннадцати", "После одиннадцать", "После одиннадцати"],
        correctAnswers: { 1: "После одиннадцати" },
        explanation: "Dopo un'ora: после + genitivo: одиннадцать → одиннадцати."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00) — К какому часу нужно прийти? — {{1}}.",
        words: ["К девять", "К девяти", "К девятью"],
        correctAnswers: { 1: "К девяти" },
        explanation: "Scadenza (entro): к + dativo: девять → девяти."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:00) Банк закрывается в шесть. Приходи {{1}}.",
        words: ["до шести", "после шести", "до шесть"],
        correctAnswers: { 1: "до шести" },
        explanation: "La banca chiude alle sei → prima delle sei: до + genitivo. Attenzione: «до шести» è anche «fino alle sei» (работаю до шести) — lo dice il verbo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:30) Фильм начинается ровно {{1}}.",
        words: ["около половины седьмого", "в половину седьмого", "в половине седьмого"],
        correctAnswers: { 1: "в половине седьмого" },
        explanation: "Ora esatta (ровно): в половине седьмого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00) Рано утром я не звоню друзьям. Звоню только {{1}}.",
        words: ["до девяти", "после девяти", "после девять"],
        correctAnswers: { 1: "после девяти" },
        explanation: "Non presto la mattina → dopo le nove: после + genitivo: девять → девяти."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(8:45) — Сколько времени? — {{1}}.",
        words: ["В без пятнадцати девять", "До без пятнадцати девять", "Без пятнадцати девять"],
        correctAnswers: { 1: "Без пятнадцати девять" },
        explanation: "Che ore sono? Il fatto, senza preposizione."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-pd-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pd-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
