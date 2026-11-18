import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «С первого по пятое» (blocco Даты, complemento di tempo continuato) — periodo con le date:
// с + genitivo (с первого) … по + accusativo (по пятое = compreso) ↔ до + genitivo (до пятого = il 5 escluso). Norma Gramota: «по» con le date = incluso.
// Trappola: «по пятое», non «по пятого» (accusativo del neutro = nominativo). Mese sempre al genitivo: с двадцать пятого декабря по восьмое января.
// Solo date (niente ore). Vecchio materiale: fatto/momento con le date, с понедельника по пятницу.
// Storia: ferie, vacanze, mostre, chiuso per lavori, feste di Capodanno.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: с … по / до con le date (nuovo) + fatto/momento, с понедельника по пятницу, giorno (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05–05.05) Выставка работает с первого {{1}} мая.",
        words: ["по пятого", "до пятое", "по пятое"],
        correctAnswers: { 1: "по пятое" },
        explanation: "Fino al 5 compreso: по + accusativo: пятое (per il neutro = nominativo)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18.11) — Какое сегодня число? — {{1}} ноября.",
        words: ["Восемнадцатое", "Восемнадцатого", "С восемнадцатого"],
        correctAnswers: { 1: "Восемнадцатое" },
        explanation: "Che giorno è? Il fatto: nominativo neutro."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.07–20.07) Я в отпуске {{1}} по двадцатое июля.",
        words: ["с десятое", "с десятого", "с десятом"],
        correctAnswers: { 1: "с десятого" },
        explanation: "Inizio del periodo: с + genitivo: десятое → десятого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(пн–пт) Мы работаем {{1}}.",
        words: ["с понедельника до пятницу", "с понедельник по пятницу", "с понедельника по пятницу"],
        correctAnswers: { 1: "с понедельника по пятницу" },
        explanation: "Giorni: с + genitivo … по + accusativo (venerdì compreso)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.12–08.01) Каникулы с двадцать пятого декабря {{1}} января.",
        words: ["по восьмого", "по восьмое", "до восьмое"],
        correctAnswers: { 1: "по восьмое" },
        explanation: "Anche con due mesi: по восьмое января; il mese resta al genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21.11) У них свадьба {{1}} ноября.",
        words: ["двадцать первого", "двадцать первое", "с двадцать первого"],
        correctAnswers: { 1: "двадцать первого" },
        explanation: "Quando? Il momento: genitivo senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Магазин закрыт с первого {{1}}: пятого он уже открыт.",
        words: ["по пятое", "до пятое", "до пятого"],
        correctAnswers: { 1: "до пятого" },
        explanation: "Il 5 non è compreso → до + genitivo: до пятого. «По пятое» = compreso."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(сб, 05.12) Вечеринка {{1}}, пятого.",
        words: ["в субботу", "в суббота", "с субботы"],
        correctAnswers: { 1: "в субботу" },
        explanation: "Giorno della settimana: в + accusativo: суббота → субботу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.06–31.08) Летние каникулы с первого июня по {{1}} августа.",
        words: ["тридцать первого", "тридцать первое", "тридцать первый"],
        correctAnswers: { 1: "тридцать первое" },
        explanation: "по + accusativo: тридцать первое (non «тридцать первого»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(09.05) — Какое сегодня число? — {{1}} мая.",
        words: ["Девятого", "По девятое", "Девятое"],
        correctAnswers: { 1: "Девятое" },
        explanation: "Il fatto: nominativo neutro: девятое."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Inizio del periodo: с + genitivo dell'ordinale (с первого, со второго, с двадцать пятого мая)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.03–10.03) Скидки {{1}} по десятое марта.",
        words: ["с первое", "с первого", "с первым"],
        correctAnswers: { 1: "с первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.06–30.06) Я в Италии {{1}} по тридцатое июня.",
        words: ["с пятнадцатого", "с пятнадцатое", "с пятнадцатым"],
        correctAnswers: { 1: "с пятнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(03.08–17.08) Отпуск {{1}} по семнадцатое августа.",
        words: ["с третье", "с третьим", "с третьего"],
        correctAnswers: { 1: "с третьего" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.12–31.12) Ярмарка {{1}} по тридцать первое декабря.",
        words: ["с двадцатым", "с двадцатого", "с двадцатое"],
        correctAnswers: { 1: "с двадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.09–06.09) Конференция {{1}} по шестое сентября.",
        words: ["с второго", "со второго", "со второе"],
        correctAnswers: { 1: "со второго" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(11.04–14.04) Фестиваль {{1}} по четырнадцатое апреля.",
        words: ["с одиннадцатого", "с одиннадцатое", "с одиннадцатым"],
        correctAnswers: { 1: "с одиннадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.05–05.06) Сессия {{1}} по пятое июня.",
        words: ["с двадцать пятое мая", "с двадцать пятым мая", "с двадцать пятого мая"],
        correctAnswers: { 1: "с двадцать пятого мая" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(07.11–09.11) Мы на даче {{1}} по девятое ноября.",
        words: ["с седьмое", "с седьмого", "с седьмым"],
        correctAnswers: { 1: "с седьмого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21.03–28.03) Каникулы {{1}} по двадцать восьмое марта.",
        words: ["с двадцать первого", "с двадцать первое", "с двадцать первым"],
        correctAnswers: { 1: "с двадцать первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13.01–19.01) Курсы {{1}} по девятнадцатое января.",
        words: ["с тринадцатое", "с тринадцатым", "с тринадцатого"],
        correctAnswers: { 1: "с тринадцатого" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Fine del periodo: по + accusativo (по пятое, по тридцать первое), non «по пятого» né «по пятому»
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05–05.05) Выставка с первого {{1}} мая.",
        words: ["по пятого", "по пятое", "по пятому"],
        correctAnswers: { 1: "по пятое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.07–20.07) Я в отпуске с десятого {{1}} июля.",
        words: ["по двадцатого", "по двадцатому", "по двадцатое"],
        correctAnswers: { 1: "по двадцатое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.06–31.08) Каникулы с первого июня {{1}} августа.",
        words: ["по тридцать первое", "по тридцать первого", "по тридцать первому"],
        correctAnswers: { 1: "по тридцать первое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.12–08.01) Праздники с двадцать пятого декабря {{1}} января.",
        words: ["по восьмое", "по восьмого", "по восьмому"],
        correctAnswers: { 1: "по восьмое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14.02–16.02) Мы в Венеции с четырнадцатого {{1}} февраля.",
        words: ["по шестнадцатого", "по шестнадцатому", "по шестнадцатое"],
        correctAnswers: { 1: "по шестнадцатое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.11–03.11) Офис закрыт с первого {{1}} ноября.",
        words: ["по третьего", "по третье", "по третьему"],
        correctAnswers: { 1: "по третье" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.04–12.04) Курс с пятого {{1}} апреля.",
        words: ["по двенадцатого", "по двенадцатому", "по двенадцатое"],
        correctAnswers: { 1: "по двенадцатое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19.10–23.10) Командировка с девятнадцатого {{1}} октября.",
        words: ["по двадцать третье", "по двадцать третьего", "по двадцать третьему"],
        correctAnswers: { 1: "по двадцать третье" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.09–07.09) Неделя кино с первого {{1}} сентября.",
        words: ["по седьмого", "по седьмое", "по седьмому"],
        correctAnswers: { 1: "по седьмое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(26.06–02.07) Отпуск с двадцать шестого июня {{1}} июля.",
        words: ["по второго", "по второму", "по второе"],
        correctAnswers: { 1: "по второе" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Vacanze e feste: frase intera с … по … (con spiegazioni)
// ============================================================
const p4cards = [
    { front: "(01.01–08.01) Когда новогодние каникулы?", back: "С первого по восьмое января", distractors: ["С первого по восьмого января", "С первое по восьмое января"], explanation: "с + genitivo (первого) … по + accusativo (восьмое)." },
    { front: "(01.06–31.08) Когда летние каникулы в школе?", back: "С первого июня по тридцать первое августа", distractors: ["С первого июня по тридцать первого августа", "С первое июня по тридцать первое августа"], explanation: "Due mesi: entrambi al genitivo (июня, августа)." },
    { front: "(29.10–06.11) С какого по какое число осенние каникулы?", back: "С двадцать девятого октября по шестое ноября", distractors: ["С двадцать девятого октября по шестого ноября", "С двадцать девятое октября по шестое ноября"], explanation: "с двадцать девятого (gen.) … по шестое (acc.)." },
    { front: "(23.03–31.03) Когда весенние каникулы?", back: "С двадцать третьего по тридцать первое марта", distractors: ["С двадцать третьего по тридцать первого марта", "С двадцать третье по тридцать первое марта"], explanation: "Il mese una volta sola, alla fine: марта." },
    { front: "(01.05–11.05) Когда майские праздники?", back: "С первого по одиннадцатое мая", distractors: ["С первого по одиннадцатого мая", "С первого по одиннадцатому мая"], explanation: "по + accusativo, non dativo: по одиннадцатое." },
    { front: "(15.07–29.07) С какого по какое число ты в отпуске?", back: "С пятнадцатого по двадцать девятое июля", distractors: ["С пятнадцатого по двадцать девятого июля", "С пятнадцатое по двадцать девятое июля"], explanation: "с пятнадцатого … по двадцать девятое." },
    { front: "(02.08–16.08) Когда у Марины отпуск?", back: "Со второго по шестнадцатое августа", distractors: ["С второго по шестнадцатое августа", "Со второго по шестнадцатого августа"], explanation: "«С» diventa «со» davanti a «вт»: со второго." },
    { front: "(22.12–31.12) Когда зимняя сессия?", back: "С двадцать второго по тридцать первое декабря", distractors: ["С двадцать второго по тридцать первого декабря", "С двадцать второе по тридцать первое декабря"], explanation: "по тридцать первое (accusativo = nominativo neutro)." },
    { front: "(01.11–03.11) С какого по какое число офис закрыт?", back: "С первого по третье ноября", distractors: ["С первого по третьего ноября", "С первого по третьему ноября"], explanation: "по третье: accusativo neutro." },
    { front: "(04.01–10.01) Когда мы на горнолыжном курорте?", back: "С четвёртого по десятое января", distractors: ["С четвёртого по десятого января", "С четвёртое по десятое января"], explanation: "с четвёртого (gen.) … по десятое (acc.)." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dp-01', exercises: p1exercises }),
    'panel-dp-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dp-02', exercises: p2exercises }),
    'panel-dp-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dp-03', exercises: p3exercises }),
    'panel-dp-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-dp-04', cards: p4cards })
};

initPanelManager({ initializers, enableAccessControl: true });
