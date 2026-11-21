import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Дойти или зайти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// arrivare fino a ↔ passare da — до- (punto finale del percorso: до + gen.) ↔ за- (visita breve, di passaggio: в / на + acc., к + dat., за + strum.; «по дороге»),
// con entrambe le coppie aspettuali: доходить / дойти ↔ заходить / зайти.
// Trappole (quiz della PM): «зайти до магазина» ✗ → зайти в магазин; «дойти до бабушки» = arrivarci a piedi, non farle visita; «Нам пора доходить!» ✗;
// зайти (visita breve) ≠ войти (attraversare la soglia); «Заходи!» = invito → НСВ.
// Esclusi: за- «dietro» (зашли за угол, солнце зашло) → «Обход и перемена»; доехать / заехать / забежать → pagine «Специальные».
// Frasi nuove solo con il permesso della PM: lessico utile e frequente (città, incontro), ogni carta comprensibile da sola. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC misto (pagine 1–3) · Quiz (panel-dz-9)

// ============================================================
// PANEL 1 — DragDrop · public
// Nuovo: дойти до + gen. ↔ зайти в / к / за (visita breve, scopo); trappole dei quiz della PM («зайти до банка» ✗); solo originali, con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно {{1}} до банка.",
        words: ["зайти", "дойти", "дайти"],
        correctAnswers: { 1: "дойти" },
        explanation: "Arrivare fino a = дойти до + genitivo. «Зайти до банка» non si dice: зайти в банк."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Им нужно дойти {{1}} и вернуться.",
        words: ["до магазина", "в магазин", "до магазин"],
        correctAnswers: { 1: "до магазина" },
        explanation: "Дойти vuole до + genitivo (до магазина), non «в»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Каждый раз, когда я {{1}} за мороженым, мы болтаем с продавщицей.",
        words: ["дохожу", "захажу", "захожу"],
        correctAnswers: { 1: "захожу" },
        explanation: "Каждый раз = abitudine → НСВ: захожу. Зайти за + strumentale = passare a prendere qualcosa."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно зайти {{1}} за кефиром.",
        words: ["в магазин", "до магазина", "в магазине"],
        correctAnswers: { 1: "в магазин" },
        explanation: "Passare in un posto = зайти в + accusativo. «До магазина» va con дойти."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} к бабушке на чай.",
        words: ["дошли", "зашли", "зашлы"],
        correctAnswers: { 1: "зашли" },
        explanation: "Una visita breve = зайти к + dativo. «Дошли» vorrebbe «до»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Начальник попросил {{1}} к нему на пару слов.",
        words: ["дойти", "зайтить", "зайти"],
        correctAnswers: { 1: "зайти" },
        explanation: "Passare da qualcuno = зайти к + dativo: зайти к нему."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "По дороге домой я {{1}} в аптеку.",
        words: ["дойду", "зайдю", "зайду"],
        correctAnswers: { 1: "зайду" },
        explanation: "По дороге = di passaggio → зайти. Futuro: зайду (non «зайдю»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как {{1}} до набережной, поверните налево.",
        words: ["дойдёте", "зайдёте", "дойдёти"],
        correctAnswers: { 1: "дойдёте" },
        explanation: "Arrivare fino al punto finale del percorso = дойти до: как дойдёте до набережной."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ей нужно зайти {{1}} к врачу.",
        words: ["за справку", "за справкой", "в справку"],
        correctAnswers: { 1: "за справкой" },
        explanation: "Lo scopo: зайти за + strumentale (за справкой = a prendere il certificato)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он часто {{1}} к соседям.",
        words: ["заходит", "доходит", "заходет"],
        correctAnswers: { 1: "заходит" },
        explanation: "Часто = abitudine → НСВ: заходит."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dz-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dz-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
