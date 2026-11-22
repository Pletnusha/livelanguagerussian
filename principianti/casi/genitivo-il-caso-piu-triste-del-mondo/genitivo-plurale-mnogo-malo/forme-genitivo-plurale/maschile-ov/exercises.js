import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «МУЖСКОЙ РОД НА СОГЛАСНУЮ» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Maschile in consonante (desinenza zero) → -ов: парк → парков, фонтан → фонтанов, ресторан → ресторанов.
// Fonte: iCloud Курсы: principianti/A1_modulo1/РОДИТЕЛЬНЫЙ ПАДЕЖ МНОЖЕСТВЕННОЕ ЧИСЛО/ (многомало*.pdf) · elemntare/А1_МОДУЛЬ_2/много_мало.pdf.
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public · «НАШ ГОРОД» · solo м.р. на согласную → -ов
// Testo «Наш город» della PM (iCloud Курсы, МНОГО\МАЛО). * = tempo/stagione cambiati: n. 5, 7, 8, 10.
// N. 6, 7: frasi approvate il 21.11; n. 9: nuova. Distrattori: gen. sing. (senso) + nom. plur. (forma).
// Approvato dalla PM il 22.11.2026.
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Наш город очень зелёный: в нём много {{1}}.",
        words: ["парки", "парков", "парка"],
        correctAnswers: { 1: "парков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: парк → парков."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "У нас много маленьких {{1}} и спортивных площадок.",
        words: ["скверов", "сквера", "скверы"],
        correctAnswers: { 1: "скверов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: сквер → скверов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В историческом центре много старинных {{1}}.",
        words: ["фонтана", "фонтаны", "фонтанов"],
        correctAnswers: { 1: "фонтанов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: фонтан → фонтанов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В центре много маленьких кафе и {{1}}.",
        words: ["ресторанов", "рестораны", "ресторана"],
        correctAnswers: { 1: "ресторанов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: ресторан → ресторанов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Летом в центре будет много {{1}} с мороженым.",
        words: ["киоска", "киосков", "киоски"],
        correctAnswers: { 1: "киосков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: киоск → киосков."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "На моей улице мало {{1}}, поэтому за хлебом я хожу в центр.",
        words: ["магазины", "магазина", "магазинов"],
        correctAnswers: { 1: "магазинов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: магазин → магазинов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Вчера вечером в центре было мало {{1}}, поэтому мы шли домой пешком.",
        words: ["автобусов", "автобусы", "автобуса"],
        correctAnswers: { 1: "автобусов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: автобус → автобусов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Десять лет назад в нашем городе было мало {{1}}, а сейчас он очень зелёный.",
        words: ["парка", "парков", "парки"],
        correctAnswers: { 1: "парков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: парк → парков."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "После ремонта на нашей улице будет много новых {{1}}.",
        words: ["магазинов", "магазина", "магазины"],
        correctAnswers: { 1: "магазинов" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: магазин → магазинов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Зимой в центре мало {{1}} с мороженым.",
        words: ["киоски", "киоска", "киосков"],
        correctAnswers: { 1: "киосков" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in consonante: киоск → киосков."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · «НА РЫНКЕ» · solo м.р. на согласную → -ов (senza spiegazioni)
// Testo «Рынок» della PM (iCloud Курсы, многомало 1.pdf). * = tempo/luogo cambiati: n. 3, 8, 9, 10.
// N. 5, 6, 9, 10: frasi approvate il 21.11; n. 7: nuova. Distrattori: gen. sing. (senso) + nom. plur. (forma).
// Approvato dalla PM il 22.11.2026.
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Во второй половине лета на рынке много помидоров и {{1}}.",
        words: ["огурца", "огурцы", "огурцов"],
        correctAnswers: { 1: "огурцов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В июле и августе на рынке много {{1}} и абрикосов.",
        words: ["персиков", "персика", "персики"],
        correctAnswers: { 1: "персиков" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Через месяц на рынке будет много {{1}}: начинается сезон.",
        words: ["баклажаны", "баклажанов", "баклажана"],
        correctAnswers: { 1: "баклажанов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Летом на рынке много {{1}} и баклажанов.",
        words: ["кабачка", "кабачков", "кабачки"],
        correctAnswers: { 1: "кабачков" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Весной на рынке мало {{1}}: их сезон начинается летом.",
        words: ["помидора", "помидоры", "помидоров"],
        correctAnswers: { 1: "помидоров" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Зимой фрукты дорогие, поэтому я покупаю мало {{1}}.",
        words: ["абрикосов", "абрикоса", "абрикосы"],
        correctAnswers: { 1: "абрикосов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В прошлую субботу на рынке было мало {{1}}, и мы купили только два.",
        words: ["лимонов", "лимоны", "лимона"],
        correctAnswers: { 1: "лимонов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Вчера на рынке было много свежих {{1}}: осень — их время.",
        words: ["грибы", "гриба", "грибов"],
        correctAnswers: { 1: "грибов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Завтра пойдём на рынок: там будет много свежих {{1}} для сока.",
        words: ["апельсины", "апельсинов", "апельсина"],
        correctAnswers: { 1: "апельсинов" }
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Дети любят бананы, поэтому я всегда покупаю на рынке много {{1}}.",
        words: ["бананов", "банана", "бананы"],
        correctAnswers: { 1: "бананов" }
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
