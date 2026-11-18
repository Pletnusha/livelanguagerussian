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
// PANEL 5 — Flashcard · student
// по o до? Ultimo giorno compreso (последний день — пятое, включительно) → по + acc.; escluso (пятого уже открыт) → до + gen.
// ============================================================
const p5cards = [
    { front: "Магазин закрыт на ремонт, последний закрытый день — пятое мая. Закрыт с первого…", back: "по пятое мая", distractors: ["до пятого мая", "по пятого мая"] },
    { front: "Магазин закрыт с первого мая, а пятого он уже открыт. Закрыт с первого…", back: "до пятого мая", distractors: ["по пятое мая", "до пятое мая"] },
    { front: "(10.06–20.06) Двадцатое включительно. Я в отпуске с десятого…", back: "по двадцатое июня", distractors: ["до двадцатого июня", "по двадцатого июня"] },
    { front: "Курс с первого октября, тридцать первого занятий уже нет. Курс идёт с первого…", back: "до тридцать первого октября", distractors: ["по тридцать первое октября", "до тридцать первое октября"] },
    { front: "(01.03–08.03) Скидки действуют и восьмого марта. Скидки с первого…", back: "по восьмое марта", distractors: ["до восьмого марта", "по восьмого марта"] },
    { front: "Офис не работает с двадцать девятого декабря, девятого января мы снова работаем. Закрыт с двадцать девятого декабря…", back: "до девятого января", distractors: ["по девятое января", "до девятое января"] },
    { front: "Выставка открыта с пятого апреля, последний день — пятнадцатое. Выставка с пятого…", back: "по пятнадцатое апреля", distractors: ["до пятнадцатого апреля", "по пятнадцатому апреля"] },
    { front: "Ремонт с третьего июля, седьмого мы уже дома. Мы живём у бабушки с третьего…", back: "до седьмого июля", distractors: ["по седьмое июля", "до седьмое июля"] },
    { front: "(14.02–16.02) Шестнадцатое включительно. Мы в Венеции с четырнадцатого…", back: "по шестнадцатое февраля", distractors: ["до шестнадцатого февраля", "по шестнадцатому февраля"] },
    { front: "Акция с первого ноября, двадцатого её уже нет. Акция с первого…", back: "до двадцатого ноября", distractors: ["по двадцатое ноября", "до двадцатое ноября"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto — la mostra: с … по, по / до (nuovo) + fatto / momento / giorno / со вторника по воскресенье (vecchio)
// ============================================================
const p6cards = [
    { front: "(01.10–15.10) С какого по какое число выставка?", back: "С первого по пятнадцатое октября", distractors: ["С первого по пятнадцатого октября", "С первое по пятнадцатое октября"] },
    { front: "(12.10) Какое сегодня число? Мы идём на выставку.", back: "Двенадцатое октября", distractors: ["Двенадцатого октября", "Двенадцатый октября"] },
    { front: "(вт–вс) Когда работает музей?", back: "Со вторника по воскресенье", distractors: ["С вторника по воскресенье", "Со вторника по воскресенья"] },
    { front: "(05.10) Когда открытие выставки?", back: "Пятого октября", distractors: ["Пятое октября", "В пятое октября"] },
    { front: "Выставка открыта с первого октября, шестнадцатого её уже нет. Открыта с первого…", back: "до шестнадцатого октября", distractors: ["по шестнадцатое октября", "до шестнадцатое октября"] },
    { front: "(сб, 10.10) Когда экскурсия для студентов?", back: "В субботу, десятого", distractors: ["В суббота, десятого", "В субботу, десятое"] },
    { front: "(20.10–31.10) С какого по какое число вторая часть выставки?", back: "С двадцатого по тридцать первое октября", distractors: ["С двадцатого по тридцать первого октября", "С двадцатое по тридцать первое октября"] },
    { front: "(пн–пт) Когда работает касса?", back: "С понедельника по пятницу", distractors: ["С понедельника до пятницу", "С понедельник по пятницу"] },
    { front: "(31.10) Какое сегодня число? Последний день выставки!", back: "Тридцать первое октября", distractors: ["Тридцать первого октября", "Тридцать первый октября"] },
    { front: "Музей закрыт со второго ноября, последний закрытый день — пятое. Закрыт со второго…", back: "по пятое ноября", distractors: ["до пятого ноября", "по пятого ноября"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni — chiusure e riscaldamento: с … по, по / до + fatto / momento / giorni
// ============================================================
const p7cards = [
    { front: "(01.07–14.07) Объявление: «Бассейн закрыт на ремонт с первого…»", back: "по четырнадцатое июля", distractors: ["по четырнадцатого июля", "до четырнадцатое июля"], explanation: "Ultimo giorno compreso: по + accusativo: четырнадцатое." },
    { front: "(01.07) Какое сегодня число? Бассейн закрылся.", back: "Первое июля", distractors: ["Первого июля", "Первый июль"], explanation: "Il fatto: nominativo neutro: первое; il mese al genitivo." },
    { front: "Кафе закрыто с пятого июля, двенадцатого оно уже работает. Закрыто с пятого…", back: "до двенадцатого июля", distractors: ["по двенадцатое июля", "до двенадцатое июля"], explanation: "Il 12 escluso → до + genitivo: до двенадцатого." },
    { front: "(пн, 12.07) Когда кафе снова открывается?", back: "В понедельник, двенадцатого", distractors: ["Во понедельник, двенадцатого", "В понедельник, двенадцатое"], explanation: "В понедельник (non «во»); data al genitivo." },
    { front: "(15.10–15.04) С какого по какое число в Милане работает отопление?", back: "С пятнадцатого октября по пятнадцатое апреля", distractors: ["С пятнадцатого октября по пятнадцатого апреля", "С пятнадцатое октября по пятнадцатое апреля"], explanation: "с пятнадцатого (gen.) … по пятнадцатое (acc.). In Italia il riscaldamento si accende per legge: di norma a Milano (zona E) dal 15 ottobre al 15 aprile." },
    { front: "(15.10) Когда в Милане включают отопление?", back: "Пятнадцатого октября", distractors: ["Пятнадцатое октября", "В пятнадцатое октября"], explanation: "Quando? Il momento: genitivo senza preposizione: пятнадцатого октября." },
    { front: "(02.08–06.08) Магазин закрыт, последний закрытый день — шестое. Закрыт со второго…", back: "по шестое августа", distractors: ["до шестого августа", "по шестого августа"], explanation: "Compreso → по шестое. «Со второго»: с → со davanti a «вт»." },
    { front: "(вт–сб) Когда работает библиотека?", back: "Со вторника по субботу", distractors: ["С вторника по субботу", "Со вторника по суббота"], explanation: "Giorni: со вторника (gen.) … по субботу (acc.)." },
    { front: "(01.12–11.01) Каток открыт с первого декабря…", back: "по одиннадцатое января", distractors: ["по одиннадцатого января", "по одиннадцатому января"], explanation: "Due mesi: по одиннадцатое января; il mese al genitivo." },
    { front: "(11.01) Какое сегодня число? Последний день катка.", back: "Одиннадцатое января", distractors: ["Одиннадцатого января", "Одиннадцатый январь"], explanation: "Il fatto: nominativo neutro: одиннадцатое." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto — feste d'inverno (Russia e Italia): с … по, по / до + fatto / momento / giorni
// ============================================================
const p8cards = [
    { front: "(31.12) Какое сегодня число? Мы наряжаем ёлку.", back: "Тридцать первое декабря", distractors: ["Тридцать первого декабря", "Тридцать первый декабрь"] },
    { front: "(01.01–08.01) Восьмое — тоже выходной. В России отдыхают с первого…", back: "по восьмое января", distractors: ["до восьмого января", "по восьмого января"] },
    { front: "(07.01) Когда православное Рождество?", back: "Седьмого января", distractors: ["Седьмое января", "В седьмое января"] },
    { front: "Ёлка стоит у нас с двадцатого декабря, а четырнадцатого января её уже нет. Стоит с двадцатого декабря…", back: "до четырнадцатого января", distractors: ["по четырнадцатое января", "до четырнадцатое января"] },
    { front: "(06.01) Какое сегодня число? В Италии — Befana!", back: "Шестое января", distractors: ["Шестого января", "Шестой январь"] },
    { front: "(24.12–06.01) Когда в Италии рождественские каникулы в школе?", back: "С двадцать четвёртого декабря по шестое января", distractors: ["С двадцать четвёртого декабря по шестого января", "С двадцать четвёртое декабря по шестое января"] },
    { front: "(пт, 01.01) Когда Новый год?", back: "В пятницу, первого", distractors: ["В пятница, первого", "В пятницу, первое"] },
    { front: "(13.01) Когда Старый Новый год?", back: "Тринадцатого января", distractors: ["Тринадцатое января", "В тринадцатое января"] },
    { front: "(пн–ср) Когда я работаю на праздниках?", back: "С понедельника по среду", distractors: ["С понедельника до среду", "С понедельник по среду"] },
    { front: "Каток открыт с первого декабря, последний день — двадцать восьмое февраля. Открыт с первого декабря…", back: "по двадцать восьмое февраля", distractors: ["до двадцать восьмого февраля", "по двадцать восьмого февраля"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelDp9() {
    const panel = document.getElementById('panel-dp-9');
    if (!panel) return;

    const container = panel.querySelector('#dp-9-cards-container');
    const prevBtn   = panel.querySelector('#dp-9-deck-prev');
    const nextBtn   = panel.querySelector('#dp-9-deck-next');
    const counterEl = panel.querySelector('#dp-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(01.05–05.05) Выставка с первого ___ мая.", options: ["по пятого", "по пятое", "до пятое"], answer: "по пятое" },
        { question: "(10.07–20.07) Отпуск ___ по двадцатое июля.", options: ["с десятое", "с десятым", "с десятого"], answer: "с десятого" },
        { question: "Магазин закрыт с первого, а пятого он уже открыт. Закрыт с первого ___.", options: ["до пятого", "по пятое", "до пятое"], answer: "до пятого" },
        { question: "(02.09–06.09) Конференция ___ по шестое сентября.", options: ["с второго", "со второе", "со второго"], answer: "со второго" },
        { question: "(18.11) — Какое сегодня число? — ___ ноября.", options: ["Восемнадцатое", "Восемнадцатого", "С восемнадцатого"], answer: "Восемнадцатое" },
        { question: "(15.10–15.04) Отопление в Милане работает с пятнадцатого октября ___ апреля.", options: ["по пятнадцатому", "по пятнадцатое", "по пятнадцатого"], answer: "по пятнадцатое" },
        { question: "(пн–пт) Офис работает с понедельника ___.", options: ["по пятница", "до пятницу", "по пятницу"], answer: "по пятницу" },
        { question: "(21.11) Свадьба ___ ноября.", options: ["двадцать первое", "двадцать первого", "с двадцать первого"], answer: "двадцать первого" },
        { question: "(25.12–08.01) Каникулы с двадцать пятого декабря ___ января.", options: ["по восьмое", "по восьмого", "до восьмое"], answer: "по восьмое" },
        { question: "(вт–вс) Музей работает ___ по воскресенье.", options: ["с вторника", "со вторника", "со вторник"], answer: "со вторника" }
    ];
    const matchPairs = [
        { left: "(01.05–05.05) Выставка", right: "с первого по пятое мая" },
        { left: "Закрыто с первого, пятого уже открыто", right: "с первого до пятого" },
        { left: "(18.11) Какое сегодня число?", right: "восемнадцатое ноября" },
        { left: "(18.11) Когда день рождения?", right: "восемнадцатого ноября" },
        { left: "(пн–пт) Когда работает офис?", right: "с понедельника по пятницу" },
        { left: "(15.10–15.04) Отопление в Милане", right: "с пятнадцатого октября по пятнадцатое апреля" },
        { left: "(02.08–16.08) Отпуск", right: "со второго по шестнадцатое августа" },
        { left: "(сб, 21.11) Когда свадьба?", right: "в субботу, двадцать первого" },
        { left: "(25.12–08.01) Каникулы", right: "с двадцать пятого декабря по восьмое января" },
        { left: "(01.01) Когда Новый год?", right: "первого января" }
    ];
    const quizData = [
        { id: "dp9-w1", promptPrefix: "(01.05–05.05) Выставка с первого ", promptSuffix: " мая.", answers: ["по пятое"] },
        { id: "dp9-w2", promptPrefix: "(10.07–20.07) Отпуск ", promptSuffix: " по двадцатое июля.", answers: ["с десятого"] },
        { id: "dp9-w3", promptPrefix: "Магазин закрыт с первого, а пятого он уже открыт. Закрыт с первого ", promptSuffix: ".", answers: ["до пятого"] },
        { id: "dp9-w4", promptPrefix: "(02.09–06.09) Конференция ", promptSuffix: " по шестое сентября.", answers: ["со второго"] },
        { id: "dp9-w5", promptPrefix: "(01.06–31.08) Каникулы с первого июня по ", promptSuffix: " августа.", answers: ["тридцать первое"] },
        { id: "dp9-w6", promptPrefix: "(пн–пт) Мы работаем с понедельника ", promptSuffix: ".", answers: ["по пятницу"] },
        { id: "dp9-w7", promptPrefix: "(15.10) Отопление в Милане включают ", promptSuffix: " октября.", answers: ["пятнадцатого"] },
        { id: "dp9-w8", promptPrefix: "(01.01–08.01) Восьмое тоже выходной. Отдыхаем с первого ", promptSuffix: " января.", answers: ["по восьмое"] },
        { id: "dp9-w9", promptPrefix: "(31.12) — Какое сегодня число? — ", promptSuffix: " декабря.", answers: ["тридцать первое"] },
        { id: "dp9-w10", promptPrefix: "(20.12–31.12) Ярмарка ", promptSuffix: " по тридцать первое декабря.", answers: ["с двадцатого"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

    // Typed answers: ignore case, ё/е, extra spaces and a final dot
    // (Italian keyboards usually have no ё).
    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ').replace(/[.!]+$/, '').toLowerCase().replace(/ё/g, 'е');
    }

    function ensureCardTitle(card, index) {
        const existingTitle = Array.from(card.children).find(child => child.tagName === 'H1');
        if (existingTitle) {
            if (index < MC_END) existingTitle.classList.add('exercise-counter');
            if (card.firstElementChild !== existingTitle) card.insertBefore(existingTitle, card.firstElementChild);
            return;
        }
        const title = document.createElement('h1');
        title.textContent = `Esercizio ${index + 1} di ${TOTAL_CARDS}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container dp-9-card';
            card.dataset.index = i;
            if (i === 0) card.classList.add('visible');
            card.hidden = (i !== 0);

            if (i < MC_END) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) => `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`).join('');
                const questionText = item.question.replace('___', `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`);
                card.innerHTML = `
                    <div class="instruction">Completa la frase scegliendo la forma corretta</div>
                    <div class="exercise-text">${questionText}</div>
                    <div class="word-options">${opts}</div>
                    <div class="controls">
                        <button class="btn btn-primary verify-btn">Verifica</button>
                        <button class="btn btn-secondary next-btn" style="display:none;">Prossimo</button>
                        <div class="feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);

            } else if (i < MATCH_END) {
                const pairIdx = i - MC_END;
                const pair = matchPairs[pairIdx];
                const otherPairs = matchPairs.filter((_, idx) => idx !== pairIdx);
                const shuffledOthers = otherPairs.sort(() => Math.random() - 0.5).slice(0, 2);
                const allPairs = [pair, ...shuffledOthers].sort(() => Math.random() - 0.5);

                let fronts = allPairs.map((p, idx) => ({ text: p.left,  type: 'front', id: idx }));
                let backs  = allPairs.map((p, idx) => ({ text: p.right, type: 'back',  id: idx }));
                fronts.sort(() => Math.random() - 0.5);
                backs.sort(() => Math.random() - 0.5);

                let selectedMatchCard = null;
                let isProcessingMatch = false;

                const matchContainer = document.createElement('div');
                matchContainer.className = 'fca01-match-container';
                const feedbackEl = document.createElement('p');
                feedbackEl.className = 'fca01-match-feedback';
                const matchGrid = document.createElement('div');
                matchGrid.className = 'fca01-match-grid';
                const colFronts = document.createElement('div');
                colFronts.className = 'fca01-match-col';
                const colBacks = document.createElement('div');
                colBacks.className = 'fca01-match-col';

                matchGrid.appendChild(colFronts);
                matchGrid.appendChild(colBacks);
                matchContainer.appendChild(feedbackEl);
                matchContainer.appendChild(matchGrid);
                card.appendChild(matchContainer);

                function handleMatchClick(clickedCard) {
                    if (isProcessingMatch || clickedCard.classList.contains('matched')) return;
                    if (clickedCard === selectedMatchCard) return;

                    if (!selectedMatchCard) {
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    if (selectedMatchCard.dataset.type === clickedCard.dataset.type) {
                        selectedMatchCard.classList.remove('selected');
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    const firstId    = selectedMatchCard.dataset.id;
                    const secondId   = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;

                    if (firstId === secondId) {
                        previousCard.classList.add('matched');
                        clickedCard.classList.add('matched');
                        feedbackEl.textContent = "✨ Отлично!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "🎉 ПОБЕДА! 🎉";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "Неверно";
                        feedbackEl.className = "fca01-match-feedback wrong";
                        setTimeout(() => {
                            clickedCard.classList.remove('selected', 'wrong');
                            previousCard.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = "";
                            isProcessingMatch = false;
                        }, 800);
                        selectedMatchCard = null;
                    }
                }

                function createMatchElement(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card';
                    div.textContent = item.text;
                    div.dataset.id   = item.id;
                    div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatchClick(div));
                    return div;
                }

                fronts.forEach(item => colFronts.appendChild(createMatchElement(item)));
                backs.forEach(item  => colBacks.appendChild(createMatchElement(item)));
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);

            } else {
                const item = quizData[i - MATCH_END];
                card.innerHTML = `
                    <h3 class="quiz-title">Write</h3>
                    <p class="quiz-instruction">Scrivete la forma corretta</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix}<input type="text" class="quiz-input" data-index="${i - MATCH_END}">${item.promptSuffix}</div>
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">Проверить</button></div>
                        <div class="quiz-feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);
            }

            container.appendChild(card);
        }

        attachHandlers();
    }

    function attachHandlers() {
        container.querySelectorAll('.dp-9-card').forEach(card => {
            const cardIndex = parseInt(card.dataset.index, 10);
            if (cardIndex >= MC_END) return;

            let checked = false;
            const gapElements  = Array.from(card.querySelectorAll('.gap'));
            const wordElements = Array.from(card.querySelectorAll('.word-option'));
            const verifyBtn    = card.querySelector('.verify-btn');
            const nextBtn      = card.querySelector('.next-btn');
            const feedback     = card.querySelector('.feedback');

            wordElements.forEach(wordElement => {
                wordElement.addEventListener('click', function() {
                    if (this.classList.contains('used') || checked) return;
                    const emptyGap = gapElements.find(gap => !gap.classList.contains('filled'));
                    if (!emptyGap) return;
                    const word = this.dataset.word;
                    emptyGap.textContent = word;
                    emptyGap.classList.add('filled');
                    emptyGap.dataset.word      = word;
                    emptyGap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });

            gapElements.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const wordIndex   = this.dataset.wordIndex;
                    const wordElement = wordElements.find(w => w.dataset.index === wordIndex);
                    this.textContent = '';
                    this.classList.remove('filled');
                    delete this.dataset.word;
                    delete this.dataset.wordIndex;
                    if (wordElement) wordElement.classList.remove('used');
                });
            });

            if (nextBtn) nextBtn.addEventListener('click', () => showCard(currentCard + 1));

            verifyBtn.addEventListener('click', function() {
                checked = true;
                const correctAnswer = multipleChoiceData[cardIndex].answer;
                let correct = 0;
                gapElements.forEach(gap => {
                    if (gap.dataset.word === correctAnswer) {
                        gap.classList.remove('filled');
                        gap.classList.add('correct');
                        correct = 1;
                    } else {
                        gap.classList.add('incorrect');
                    }
                });
                feedback.textContent = `Corretto: ${correct} / 1`;
                verifyBtn.style.display = 'none';
                nextBtn.style.display   = 'inline-block';
            });
        });

        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card    = this.closest('.dp-9-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === normalizeInput(ans));
                if (isCorrect) {
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                    input.disabled = true;
                    this.disabled  = true;
                    fb.textContent = 'Правильно!';
                    fb.className   = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.';
                    fb.className   = 'quiz-feedback incorrect';
                }
            });
        });

        container.querySelectorAll('.quiz-input').forEach(input => {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    const btn = this.closest('.quiz-item').querySelector('.quiz-check-btn');
                    if (btn && !btn.disabled) btn.click();
                }
            });
        });
    }

    function showCard(idx) {
        currentCard = idx;
        container.querySelectorAll('.dp-9-card').forEach((c, i) => {
            c.classList.toggle('visible', i === idx);
            c.hidden = (i !== idx);
        });
        counterEl.textContent = (idx + 1) + ' / ' + TOTAL_CARDS;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === TOTAL_CARDS - 1);
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0)               showCard(currentCard - 1); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL_CARDS - 1) showCard(currentCard + 1); });

    buildCards();
    showCard(0);
}

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dp-01', exercises: p1exercises }),
    'panel-dp-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dp-02', exercises: p2exercises }),
    'panel-dp-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dp-03', exercises: p3exercises }),
    'panel-dp-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-dp-04', cards: p4cards }),
    'panel-dp-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-dp-05', cards: p5cards }),
    'panel-dp-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-dp-06', cards: p6cards }),
    'panel-dp-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-dp-07', cards: p7cards }),
    'panel-dp-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-dp-08', cards: p8cards }),
    'panel-dp-9': () => initPanelDp9()
};

initPanelManager({ initializers, enableAccessControl: true });
