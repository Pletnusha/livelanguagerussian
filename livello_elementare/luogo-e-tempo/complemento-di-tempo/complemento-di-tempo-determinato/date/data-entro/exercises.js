import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «К пятому мая» (blocco Даты) — scadenza: к + dativo (к пятому мая, entro il 5) ↔ до + genitivo (до пятого, fino al 5).
// Senza suggerimenti: К какому числу? + verbi di scadenza (сдать, закончить, быть готовым) → к; До какого числа? + verbi di durata (в отпуске, живу, открыт) → до.
// Con i verbi di scadenza «до пятого» è anche corretto: non metterlo tra i distrattori in quei casi.
// Dativo degli ordinali: к пятому, к первому, к третьему, ко второму (к → ко davanti a «вт»); к концу / к началу месяца; к Новому году, к восьмому марта.
// Solo date (niente ore). Storia: scadenze e preparativi (документы, виза, ремонт к Новому году, подарки к восьмому марта).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: к + dativo (nuovo) + fatto / momento / с … по / около (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) — К какому числу нужно сдать документы? — {{1}} мая.",
        words: ["К пятого", "К пятое", "К пятому"],
        correctAnswers: { 1: "К пятому" },
        explanation: "Scadenza: к + dativo: пятое → пятому."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) — Какое сегодня число? — {{1}} мая.",
        words: ["Пятое", "Пятого", "К пятому"],
        correctAnswers: { 1: "Пятое" },
        explanation: "Che giorno è? Il fatto: nominativo neutro."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.09) Учебники нужно купить {{1}} сентября.",
        words: ["к первого", "к первому", "к первое"],
        correctAnswers: { 1: "к первому" },
        explanation: "Scadenza: к + dativo: первое → первому."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.07–20.07) Я в отпуске с десятого {{1}} июля.",
        words: ["по двадцатого", "к двадцатому", "по двадцатое"],
        correctAnswers: { 1: "по двадцатое" },
        explanation: "Periodo compreso: по + accusativo. «К двадцатому» = entro il 20, qui non ha senso."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.10) — К какому числу будет готова виза? — {{1}} октября.",
        words: ["К второму", "Ко второму", "Ко второе"],
        correctAnswers: { 1: "Ко второму" },
        explanation: "к → ко davanti a «вт»: ко второму."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.05) Точно не знаю, зарплата будет {{1}} мая.",
        words: ["около двадцатого", "около двадцати", "около двадцатое"],
        correctAnswers: { 1: "около двадцатого" },
        explanation: "Data approssimativa: около + genitivo dell'ordinale."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(31.12) Ремонт нужно закончить {{1}} декабря, к Новому году.",
        words: ["к тридцать первого", "к тридцать первое", "к тридцать первому"],
        correctAnswers: { 1: "к тридцать первому" },
        explanation: "Scadenza: к тридцать первому (dativo)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21.11) Свадьба {{1}} ноября, точно!",
        words: ["двадцать первого", "к двадцать первому", "двадцать первое"],
        correctAnswers: { 1: "двадцать первого" },
        explanation: "Data esatta: genitivo senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(03.03) — К какому числу нужно оплатить квартиру? — {{1}} марта.",
        words: ["К третьего", "К третьему", "К третиму"],
        correctAnswers: { 1: "К третьему" },
        explanation: "Третье → третьему (con «ь»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18.11) — Когда у Антона день рождения? — {{1}} ноября.",
        words: ["Восемнадцатое", "К восемнадцатому", "Восемнадцатого"],
        correctAnswers: { 1: "Восемнадцатого" },
        explanation: "Quando? Il momento: genitivo senza preposizione."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-de-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-de-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
