import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Между пятью и семью» — fascia oraria: между + strumentale (un momento dentro l'intervallo, tra le 5 e le 7)
// ↔ с … до + genitivo (tutto il periodo, dalle 5 alle 7). Sceglie il verbo: durata (работает, открыт, идёт) → с … до;
// momento (позвоните, приходите, курьер приедет) → между.
// Numerali allo strumentale: двумя, тремя, четырьмя, пятью … двенадцатью, часом. ATTENZIONE: восемью e восьмью sono ENTRAMBE corrette.
// Anche tra eventi: между уроками, между обедом и ужином. Niente anni (blocco «Даты»). Niente suggerimenti di significato.
// Storia: consegne e appuntamenti (курьер приедет между двумя и четырьмя, звоните между девятью и десятью).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: между (nuovo) + с … до / около / перед / через / fatto (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:00–16:00) Курьер приехал {{1}}.",
        words: ["между два и четыре", "между двумя и четырьмя", "между двух и четырёх"],
        correctAnswers: { 1: "между двумя и четырьмя" },
        explanation: "Un momento tra le 2 e le 4: между + strumentale: два → двумя, четыре → четырьмя."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–18:00) Офис работает {{1}}.",
        words: ["между девятью и шестью", "с девять до шести", "с девяти до шести"],
        correctAnswers: { 1: "с девяти до шести" },
        explanation: "Работает = tutto il periodo: с + genitivo … до + genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–10:00) Врач позвонил {{1}}.",
        words: ["между девятью и десятью", "между девять и десять", "между девяти и десяти"],
        correctAnswers: { 1: "между девятью и десятью" },
        explanation: "Позвонил = un momento: между + strumentale: девять → девятью."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) Точно не знаю, приду {{1}}.",
        words: ["около семи", "около семь", "около семью"],
        correctAnswers: { 1: "около семи" },
        explanation: "Circa: около + genitivo: семь → семи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23:00–0:00) Я заснул {{1}}.",
        words: ["между одиннадцать и двенадцать", "между одиннадцати и двенадцати", "между одиннадцатью и двенадцатью"],
        correctAnswers: { 1: "между одиннадцатью и двенадцатью" },
        explanation: "Un momento nella notte: между + strumentale: одиннадцатью, двенадцатью."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Прямо {{1}} я выключаю телефон.",
        words: ["до урок", "перед уроком", "перед урок"],
        correctAnswers: { 1: "перед уроком" },
        explanation: "Subito prima: перед + strumentale: урок → уроком."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "На перемене, {{1}}, я пью кофе.",
        words: ["между уроков", "между урокам", "между уроками"],
        correctAnswers: { 1: "между уроками" },
        explanation: "Tra una lezione e l'altra: между + strumentale plurale: уроки → уроками."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 14:00, фильм в 14:30. Фильм начнётся {{1}}.",
        words: ["через полчаса", "после получаса", "через получаса"],
        correctAnswers: { 1: "через полчаса" },
        explanation: "Tra mezz'ora: через полчаса."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00–14:00) Посылку принесли {{1}}.",
        words: ["между час и два", "между часом и двумя", "между часа и двух"],
        correctAnswers: { 1: "между часом и двумя" },
        explanation: "между + strumentale: час → часом, два → двумя."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(17:45) — Сколько времени? — {{1}}.",
        words: ["В без пятнадцати шесть", "С без пятнадцати шесть", "Без пятнадцати шесть"],
        correctAnswers: { 1: "Без пятнадцати шесть" },
        explanation: "Che ore sono? Il fatto, senza preposizione."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-fo-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
