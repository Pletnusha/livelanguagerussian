import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «МУЖСКОЙ РОД: -ОВ» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Maschile, desinenza zero → -ов: фонтан → фонтанов, парк → парков, ресторан → ресторанов.
// Fonte: iCloud Курсы: principianti/A1_modulo1/РОДИТЕЛЬНЫЙ ПАДЕЖ МНОЖЕСТВЕННОЕ ЧИСЛО/ (многомало*.pdf) · elemntare/А1_МОДУЛЬ_2/много_мало.pdf.
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public · Город · solo -ов
// Frasi 1–5: testo «Город» della PM (iCloud Курсы); frasi 6–9: nuove, approvate dalla PM il 21.11.2026.
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Наш город очень зелёный: в нём много {{1}}.",
        words: ["парки", "парков", "парк"],
        correctAnswers: { 1: "парков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile con desinenza zero: парк → парков."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В историческом центре много старинных {{1}}.",
        words: ["фонтанов", "фонтан", "фонтаны"],
        correctAnswers: { 1: "фонтанов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile con desinenza zero: фонтан → фонтанов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В центре много маленьких кафе и {{1}}.",
        words: ["ресторан", "рестораны", "ресторанов"],
        correctAnswers: { 1: "ресторанов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile con desinenza zero: ресторан → ресторанов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Летом в центре много {{1}} с мороженым.",
        words: ["киоски", "киосков", "киоск"],
        correctAnswers: { 1: "киосков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile con desinenza zero: киоск → киосков."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "У нас много маленьких {{1}} и спортивных площадок.",
        words: ["скверов", "скверы", "сквер"],
        correctAnswers: { 1: "скверов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile con desinenza zero: сквер → скверов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "На моей улице мало {{1}}, поэтому за хлебом я хожу в центр.",
        words: ["магазин", "магазинов", "магазины"],
        correctAnswers: { 1: "магазинов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile con desinenza zero: магазин → магазинов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В Москве много {{1}}: Большой, Малый, МХТ…",
        words: ["театры", "театр", "театров"],
        correctAnswers: { 1: "театров" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile con desinenza zero: театр → театров."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В Петербурге много {{1}}: город стоит на воде.",
        words: ["мостов", "мосты", "мост"],
        correctAnswers: { 1: "мостов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile con desinenza zero: мост → мостов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Вечером в центре мало {{1}}, поэтому мы идём домой пешком.",
        words: ["автобус", "автобусы", "автобусов"],
        correctAnswers: { 1: "автобусов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile con desinenza zero: автобус → автобусов."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · Фрукты и овощи · solo -ов (senza spiegazioni)
// Frasi 1–4: testo «Рынок» della PM (iCloud Курсы); frasi 5–9: nuove, approvate dalla PM il 21.11.2026.
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Во второй половине лета на рынке много помидоров и {{1}}.",
        words: ["огурцы", "огурцов", "огурец"],
        correctAnswers: { 1: "огурцов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В июле и августе на рынке много {{1}} и абрикосов.",
        words: ["персиков", "персик", "персики"],
        correctAnswers: { 1: "персиков" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Осенью на рынке много {{1}}.",
        words: ["гриб", "грибы", "грибов"],
        correctAnswers: { 1: "грибов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Летом на рынке много {{1}} и баклажанов.",
        words: ["кабачки", "кабачок", "кабачков"],
        correctAnswers: { 1: "кабачков" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Я хочу сделать сок, но дома мало {{1}}. Нужно купить ещё.",
        words: ["апельсинов", "апельсины", "апельсин"],
        correctAnswers: { 1: "апельсинов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Чай с лимоном? Извини, у нас мало {{1}}: остался только один.",
        words: ["лимон", "лимонов", "лимоны"],
        correctAnswers: { 1: "лимонов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Дети любят бананы, поэтому дома всегда много {{1}}.",
        words: ["бананы", "банан", "бананов"],
        correctAnswers: { 1: "бананов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Весной на рынке мало {{1}}: их сезон начинается летом.",
        words: ["помидоров", "помидоры", "помидор"],
        correctAnswers: { 1: "помидоров" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Зимой фрукты дорогие, поэтому я покупаю мало {{1}}.",
        words: ["абрикос", "абрикосы", "абрикосов"],
        correctAnswers: { 1: "абрикосов" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid · Дом · solo -ов (senza spiegazioni)
// Frase 1: testo «Квартира» della PM (iCloud Курсы); frasi 2–9: nuove, approvate dalla PM il 21.11.2026.
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "У меня в шкафу много кастрюль и {{1}}.",
        words: ["ковшиков", "ковшик", "ковшики"],
        correctAnswers: { 1: "ковшиков" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "После вечеринки на столе много грязных {{1}}.",
        words: ["стакан", "стаканов", "стаканы"],
        correctAnswers: { 1: "стаканов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "На кухне мало {{1}}, поэтому посуда стоит на полке.",
        words: ["шкафы", "шкаф", "шкафов"],
        correctAnswers: { 1: "шкафов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В гостиной много {{1}}: от телевизора, от кондиционера…",
        words: ["пульт", "пультов", "пульты"],
        correctAnswers: { 1: "пультов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В комнате сына много {{1}}: он любит читать.",
        words: ["журнал", "журналы", "журналов"],
        correctAnswers: { 1: "журналов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В нашей семье пять человек и много {{1}}: у каждого свой.",
        words: ["телефоны", "телефонов", "телефон"],
        correctAnswers: { 1: "телефонов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "После магазина на кухне много {{1}} с продуктами.",
        words: ["пакетов", "пакет", "пакеты"],
        correctAnswers: { 1: "пакетов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Мы едем в отпуск на месяц, поэтому у нас много {{1}}.",
        words: ["чемодан", "чемоданы", "чемоданов"],
        correctAnswers: { 1: "чемоданов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "У нас большая семья, и в доме много {{1}}: на кухне, в гостиной, в кабинете.",
        words: ["столов", "стол", "столы"],
        correctAnswers: { 1: "столов" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-gpov-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-gpov-01', exercises: p1exercises }),
    'panel-gpov-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-gpov-02', exercises: p2exercises }),
    'panel-gpov-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-gpov-03', exercises: p3exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
