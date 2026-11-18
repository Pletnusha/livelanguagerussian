import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «До и после пятого» (blocco Даты) — до пятого (prima del 5) ↔ после пятого (dopo il 5), genitivo dell'ordinale.
// La forma è nota (genitivo come «пятого мая»): la difficoltà è il senso. Qui «до» = prima di (sulla pagina «К пятому мая» era fino a); lo dice il verbo/contesto.
// Anche feste per nome (до Нового года, после Рождества, после майских праздников) e con «число» (до пятнадцатого числа).
// Solo date (niente ore). Senza suggerimenti: сначала … потом; открывается / зарплата пятого → до / после.
// Storia: calendario di famiglia e di lavoro (зарплата, счета, диета после Нового года, работа до отпуска).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: до / после con date e feste (nuovo) + fatto / momento / с … по / около / к (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) Зарплата пятого, а сегодня третье: {{1}} денег нет.",
        words: ["До пятое", "До пятого", "После пятого"],
        correctAnswers: { 1: "До пятого" },
        explanation: "Prima del 5: до + genitivo: пятое → пятого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(03.05) — Какое сегодня число? — {{1}} мая.",
        words: ["Третьего", "До третьего", "Третье"],
        correctAnswers: { 1: "Третье" },
        explanation: "Che giorno è? Il fatto: nominativo neutro."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.06) Магазин открывается десятого июня. {{1}} можно будет купить всё.",
        words: ["После десятого", "До десятого", "После десятое"],
        correctAnswers: { 1: "После десятого" },
        explanation: "Dopo il 10: после + genitivo: десятое → десятого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.07–14.07) Отпуск с первого {{1}} июля.",
        words: ["по четырнадцатого", "после четырнадцатого", "по четырнадцатое"],
        correctAnswers: { 1: "по четырнадцатое" },
        explanation: "Periodo compreso: по + accusativo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.01) Сначала праздники, потом диета: на диету сядем {{1}}.",
        words: ["до Нового года", "после Нового года", "после Новый год"],
        correctAnswers: { 1: "после Нового года" },
        explanation: "Prima le feste, poi la dieta → после + genitivo: Новый год → Нового года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.05) Точно не знаю: зарплата будет {{1}} мая.",
        words: ["около двадцатого", "около двадцатое", "около двадцати"],
        correctAnswers: { 1: "около двадцатого" },
        explanation: "Data approssimativa: около + genitivo dell'ordinale."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.08) Отпуск начнётся пятнадцатого. Билеты на море купим заранее, {{1}} августа.",
        words: ["после пятнадцатого", "до пятнадцатое", "до пятнадцатого"],
        correctAnswers: { 1: "до пятнадцатого" },
        explanation: "Заранее = in anticipo → prima: до пятнадцатого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.05) — К какому числу нужно сдать отчёт? — {{1}} мая.",
        words: ["К десятому", "После десятого", "К десятого"],
        correctAnswers: { 1: "К десятому" },
        explanation: "Scadenza: к + dativo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(31.12) Подарки нужно купить {{1}} декабря, а не потом!",
        words: ["после тридцать первого", "до тридцать первого", "до тридцать первое"],
        correctAnswers: { 1: "до тридцать первого" },
        explanation: "«А не потом» → prima: до тридцать первого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21.11) — Какого числа свадьба? — {{1}} ноября.",
        words: ["Двадцать первое", "После двадцать первого", "Двадцать первого"],
        correctAnswers: { 1: "Двадцать первого" },
        explanation: "Какого числа? → la data esatta al genitivo."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// до / после + genitivo dell'ordinale (forma; la preposizione è data dal contesto: заранее, только после, сразу)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.09) Купи тетради заранее, {{1}} сентября.",
        words: ["до первое", "до первого", "до первому"],
        correctAnswers: { 1: "до первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.05) Зарплата десятого. Отпуск начнётся сразу {{1}} мая.",
        words: ["после десятое", "после десятому", "после десятого"],
        correctAnswers: { 1: "после десятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(03.07) Документы нужно отправить заранее, {{1}} июля.",
        words: ["до третьего", "до третье", "до третьему"],
        correctAnswers: { 1: "до третьего" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.12) Подарки покупаем заранее, {{1}} декабря.",
        words: ["до двадцатого", "до двадцатое", "до двадцатым"],
        correctAnswers: { 1: "до двадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.03) Мастер свободен только {{1}} марта.",
        words: ["после пятнадцатое", "после пятнадцатым", "после пятнадцатого"],
        correctAnswers: { 1: "после пятнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.05) Майские праздники — первого и второго. Работаем {{1}} мая.",
        words: ["после второе", "после второго", "после второму"],
        correctAnswers: { 1: "после второго" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(31.08) Отпуск заканчивается тридцать первого. Встретимся {{1}} августа.",
        words: ["после тридцать первое", "после тридцать первому", "после тридцать первого"],
        correctAnswers: { 1: "после тридцать первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(08.03) Цветы нужно купить заранее, {{1}} марта.",
        words: ["до восьмого", "до восьмое", "до восьмому"],
        correctAnswers: { 1: "до восьмого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(07.01) Рождество седьмого. Ёлку убираем {{1}} января.",
        words: ["после седьмое", "после седьмого", "после седьмому"],
        correctAnswers: { 1: "после седьмого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.04) Сейчас билеты дорогие, они подешевеют только {{1}} апреля.",
        words: ["после двадцать пятого", "после двадцать пятое", "после двадцать пятым"],
        correctAnswers: { 1: "после двадцать пятого" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dpd-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dpd-01', exercises: p1exercises }),
    'panel-dpd-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dpd-02', exercises: p2exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
