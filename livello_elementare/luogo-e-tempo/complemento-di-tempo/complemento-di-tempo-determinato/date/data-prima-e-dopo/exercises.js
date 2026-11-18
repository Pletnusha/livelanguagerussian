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
// PANEL 3 — DragDrop · paid
// до или после? Lo decide la logica del calendario (зарплата пятого → после; открывается десятого → до)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) Зарплата пятого. Новый телефон купим {{1}} мая, когда будут деньги.",
        words: ["до пятого", "после пятого", "после пятое"],
        correctAnswers: { 1: "после пятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.06) Магазин открывается десятого. {{1}} он закрыт.",
        words: ["До десятого", "После десятого", "До десятое"],
        correctAnswers: { 1: "До десятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.08) Отпуск начинается пятнадцатого. Работу нужно закончить {{1}} августа.",
        words: ["после пятнадцатого", "до пятнадцатое", "до пятнадцатого"],
        correctAnswers: { 1: "до пятнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(31.08) Каникулы заканчиваются тридцать первого. В школу дети идут {{1}} августа.",
        words: ["до тридцать первого", "после тридцать первое", "после тридцать первого"],
        correctAnswers: { 1: "после тридцать первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.12) Билеты на Новый год дорожают двадцатого. Купи их {{1}} декабря!",
        words: ["до двадцатого", "после двадцатого", "до двадцатое"],
        correctAnswers: { 1: "до двадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.01) Сначала Новый год, потом отпуск: в отпуск поедем {{1}}.",
        words: ["после Новый год", "после Нового года", "до Нового года"],
        correctAnswers: { 1: "после Нового года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(07.01) Ёлку убираем, когда закончатся праздники, {{1}} января.",
        words: ["после седьмого", "до седьмого", "после седьмое"],
        correctAnswers: { 1: "после седьмого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14.02) День святого Валентина четырнадцатого. Цветы закажем заранее, {{1}} февраля.",
        words: ["до четырнадцатое", "после четырнадцатого", "до четырнадцатого"],
        correctAnswers: { 1: "до четырнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.12) Рождество двадцать пятого. Распродажи начинаются после праздника, {{1}} декабря.",
        words: ["до двадцать пятого", "после двадцать пятого", "после двадцать пятое"],
        correctAnswers: { 1: "после двадцать пятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05) Майские праздники начинаются первого. Продукты на дачу купим заранее, {{1}} мая.",
        words: ["до первого", "после первого", "до первое"],
        correctAnswers: { 1: "до первого" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Feste per nome: до / после + genitivo (Нового года, Рождества, Пасхи, майских праздников, каникул), con spiegazioni
// ============================================================
const p4cards = [
    { front: "Сначала праздничный стол, потом диета. Когда начинаем диету?", back: "После Нового года", distractors: ["До Нового года", "После Новый год"], explanation: "Dopo la festa: после + genitivo: Новый год → Нового года." },
    { front: "Ёлку и подарки покупаем заранее. Когда?", back: "До Нового года", distractors: ["После Нового года", "До Новый год"], explanation: "Prima della festa: до + genitivo: Нового года." },
    { front: "Распродажи начинаются, когда праздник прошёл. Когда?", back: "После Рождества", distractors: ["До Рождества", "После Рождество"], explanation: "Рождество → Рождества (genitivo)." },
    { front: "Ремонт начнём, когда закончатся майские праздники. Когда?", back: "После майских праздников", distractors: ["До майских праздников", "После майские праздники"], explanation: "Plurale: майские праздники → майских праздников." },
    { front: "Цветы для мамы заказываем заранее. Когда?", back: "До Восьмого марта", distractors: ["После Восьмого марта", "До Восьмое марта"], explanation: "Восьмое марта → Восьмого марта." },
    { front: "Куличи пекут заранее, а едят в праздник. Когда пекут?", back: "До Пасхи", distractors: ["После Пасхи", "До Пасха"], explanation: "Пасха → Пасхи." },
    { front: "Сначала блины на Масленицу, потом пост. Когда начинается пост?", back: "После Масленицы", distractors: ["До Масленицы", "После Масленица"], explanation: "Масленица (la settimana dei blini) → Масленицы." },
    { front: "Отпуск у мамы — когда дети уже в школе. Когда?", back: "После первого сентября", distractors: ["До первого сентября", "После первое сентября"], explanation: "Dopo il primo settembre: после первого сентября." },
    { front: "Сначала отдыхаем, потом снова учимся. Когда начинаются уроки?", back: "После каникул", distractors: ["До каникул", "После каникулы"], explanation: "Каникулы → каникул (genitivo plurale senza desinenza)." },
    { front: "Сначала экзамены, потом каникулы. Когда экзамены?", back: "До каникул", distractors: ["После каникул", "До каникулы"], explanation: "Prima delle vacanze: до каникул." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dpd-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dpd-01', exercises: p1exercises }),
    'panel-dpd-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dpd-02', exercises: p2exercises }),
    'panel-dpd-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dpd-03', exercises: p3exercises }),
    'panel-dpd-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-dpd-04', cards: p4cards })
};

initPanelManager({ initializers, enableAccessControl: true });
