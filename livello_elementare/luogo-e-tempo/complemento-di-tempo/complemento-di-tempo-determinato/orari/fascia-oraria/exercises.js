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
// PANEL 2 — DragDrop · student
// между + numerali allo strumentale (verbi di evento unico): двумя, тремя, четырьмя, пятью … двенадцатью, часом
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(15:00–17:00) Мама позвонила {{1}}.",
        words: ["между трёх и пяти", "между тремя и пятью", "между три и пять"],
        correctAnswers: { 1: "между тремя и пятью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10:00–12:00) Он пришёл {{1}}.",
        words: ["между десяти и двенадцати", "между десятью и двенадцатью", "между десять и двенадцать"],
        correctAnswers: { 1: "между десятью и двенадцатью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(6:00–7:00) Я проснулся {{1}}.",
        words: ["между шесть и семь", "между шести и семи", "между шестью и семью"],
        correctAnswers: { 1: "между шестью и семью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00–15:00) Посылку доставили {{1}}.",
        words: ["между часом и тремя", "между часа и трёх", "между час и три"],
        correctAnswers: { 1: "между часом и тремя" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20:00–21:00) Фильм закончился {{1}}.",
        words: ["между восьми и девяти", "между восемь и девять", "между восемью и девятью"],
        correctAnswers: { 1: "между восемью и девятью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(16:00–18:00) Курьер приехал {{1}}.",
        words: ["между четырьмя и шестью", "между четырёх и шести", "между четыре и шесть"],
        correctAnswers: { 1: "между четырьмя и шестью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(11:00–12:00) Он ответил на письмо {{1}}.",
        words: ["между одиннадцати и двенадцати", "между одиннадцатью и двенадцатью", "между одиннадцать и двенадцать"],
        correctAnswers: { 1: "между одиннадцатью и двенадцатью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:00–15:00) Врач вернулся {{1}}.",
        words: ["между два и три", "между двух и трёх", "между двумя и тремя"],
        correctAnswers: { 1: "между двумя и тремя" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(17:00–19:00) Гости ушли {{1}}.",
        words: ["между пятью и семью", "между пяти и семи", "между пять и семь"],
        correctAnswers: { 1: "между пятью и семью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–10:00) Поезд пришёл {{1}}.",
        words: ["между девяти и десяти", "между девятью и десятью", "между девять и десять"],
        correctAnswers: { 1: "между девятью и десятью" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// между или с … до? Durata su tutto il periodo (открыт, работает, сплю, весь вечер) → с … до; evento unico (позвонил, проснулся, приехал) → между
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–18:00) Магазин открыт {{1}}.",
        words: ["между девятью и шестью", "с девяти до шести", "с девять до шести"],
        correctAnswers: { 1: "с девяти до шести" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:00–15:00) Он позвонил {{1}}.",
        words: ["между двумя и тремя", "с двух до трёх", "между двух и трёх"],
        correctAnswers: { 1: "между двумя и тремя" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23:00–7:00) Я сплю {{1}}.",
        words: ["с одиннадцать до семи", "между одиннадцатью и семью", "с одиннадцати до семи"],
        correctAnswers: { 1: "с одиннадцати до семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(6:00–7:00) Я проснулся {{1}}.",
        words: ["с шести до семи", "между шести и семи", "между шестью и семью"],
        correctAnswers: { 1: "между шестью и семью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10:00–12:00) Урок идёт {{1}}.",
        words: ["с десяти до двенадцати", "между десятью и двенадцатью", "с десять до двенадцати"],
        correctAnswers: { 1: "с десяти до двенадцати" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(16:00–18:00) Курьер приехал {{1}}.",
        words: ["с четырёх до шести", "между четырьмя и шестью", "между четырёх и шести"],
        correctAnswers: { 1: "между четырьмя и шестью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:00–21:00) Весь вечер я был дома: {{1}}.",
        words: ["с шести до девяти", "между шестью и девятью", "с шесть до девяти"],
        correctAnswers: { 1: "с шести до девяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20:00–21:00) Фильм закончился {{1}}.",
        words: ["между восемь и девять", "с восьми до девяти", "между восемью и девятью"],
        correctAnswers: { 1: "между восемью и девятью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(8:00–17:00) Папа работает {{1}}.",
        words: ["между восемью и пятью", "с восьми до пяти", "с восемь до пяти"],
        correctAnswers: { 1: "с восьми до пяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12:00–13:00) Посылку принесли {{1}}.",
        words: ["между двенадцатью и часом", "с двенадцати до часа", "между двенадцати и часа"],
        correctAnswers: { 1: "между двенадцатью и часом" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-fo-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-01', exercises: p1exercises }),
    'panel-fo-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-02', exercises: p2exercises }),
    'panel-fo-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-03', exercises: p3exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
