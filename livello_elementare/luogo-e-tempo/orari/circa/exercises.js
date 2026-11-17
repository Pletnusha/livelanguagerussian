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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-cir-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-cir-01', exercises: p1exercises }),
};

initPanelManager({ initializers, enableAccessControl: true });
