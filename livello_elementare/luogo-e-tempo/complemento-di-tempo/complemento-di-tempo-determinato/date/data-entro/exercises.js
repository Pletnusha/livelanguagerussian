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
// PANEL 2 — DragDrop · student
// к + dativo dell'ordinale: к пятому, к первому, к третьему, ко второму
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.05) Отчёт нужно сдать {{1}} мая.",
        words: ["к десятого", "к десятому", "к десятое"],
        correctAnswers: { 1: "к десятому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.06) Сайт должен работать {{1}} июня.",
        words: ["к первому", "к первом", "к первого"],
        correctAnswers: { 1: "к первому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(03.09) Документы будут готовы {{1}} сентября.",
        words: ["к третье", "к третего", "к третьему"],
        correctAnswers: { 1: "к третьему" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.04) Нужно оплатить курс {{1}} апреля.",
        words: ["ко второму", "к второму", "ко второго"],
        correctAnswers: { 1: "ко второму" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.07) Мастер закончит ремонт {{1}} июля.",
        words: ["к пятнадцатого", "к пятнадцатому", "к пятнадцатое"],
        correctAnswers: { 1: "к пятнадцатому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.12) Подарки купим {{1}} декабря.",
        words: ["к двадцатое", "к двадцатом", "к двадцатому"],
        correctAnswers: { 1: "к двадцатому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.02) Зарплата придёт {{1}} февраля.",
        words: ["к двадцать пятого", "к двадцать пятому", "к двадцать пятое"],
        correctAnswers: { 1: "к двадцать пятому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(07.11) Бабушка приедет {{1}} ноября.",
        words: ["к седьмому", "к седьмого", "к седьмом"],
        correctAnswers: { 1: "к седьмому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(30.06) Виза будет готова {{1}} июня.",
        words: ["к тридцатого", "к тридцатое", "к тридцатому"],
        correctAnswers: { 1: "к тридцатому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12.08) Нужно забронировать гостиницу {{1}} августа.",
        words: ["к двенадцатому", "к двенадцатое", "к двенадцатого"],
        correctAnswers: { 1: "к двенадцатому" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// к или до? Coppie con la stessa data: К какому числу? → к + dativo; До какого числа? → до + genitivo
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) — К какому числу нужно сдать проект? — {{1}} мая.",
        words: ["К пятому", "До пятого", "К пятого"],
        correctAnswers: { 1: "К пятому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) — До какого числа ты в отпуске? — {{1}} мая.",
        words: ["К пятому", "До пятое", "До пятого"],
        correctAnswers: { 1: "До пятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.06) — К какому числу будет готов ремонт? — {{1}} июня.",
        words: ["До двадцатого", "К двадцатому", "К двадцатое"],
        correctAnswers: { 1: "К двадцатому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.06) — До какого числа открыта выставка? — {{1}} июня.",
        words: ["До двадцатого", "К двадцатому", "До двадцатому"],
        correctAnswers: { 1: "До двадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.09) — К какому числу нужно купить форму? — {{1}} сентября.",
        words: ["До первого", "К первого", "К первому"],
        correctAnswers: { 1: "К первому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.09) — До какого числа вы живёте на даче? — {{1}} сентября.",
        words: ["До первого", "К первому", "До первое"],
        correctAnswers: { 1: "До первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.12) — К какому числу оплатить счёт? — {{1}} декабря.",
        words: ["До десятого", "К десятому", "К десятое"],
        correctAnswers: { 1: "К десятому" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.12) — До какого числа действует скидка? — {{1}} декабря.",
        words: ["К десятому", "До десятого", "До десятому"],
        correctAnswers: { 1: "До десятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.03) — К какому числу будет готов паспорт? — {{1}} марта.",
        words: ["Ко второму", "До второго", "К второму"],
        correctAnswers: { 1: "Ко второму" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.03) — До какого числа бабушка у нас? — {{1}} марта.",
        words: ["До второе", "Ко второму", "До второго"],
        correctAnswers: { 1: "До второго" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Scadenze reali: К какому числу? → к + dativo dell'ordinale (con spiegazioni)
// ============================================================
const p4cards = [
    { front: "(15.04) К какому числу нужно подать документы на визу?", back: "К пятнадцатому апреля", distractors: ["К пятнадцатого апреля", "К пятнадцатое апреля"], explanation: "к + dativo: пятнадцатое → пятнадцатому." },
    { front: "(01.07) К какому числу нужно освободить квартиру?", back: "К первому июля", distractors: ["К первого июля", "К первое июля"], explanation: "к + dativo: первое → первому." },
    { front: "(20.05) К какому числу нужно написать курсовую?", back: "К двадцатому мая", distractors: ["К двадцатого мая", "К двадцатое мая"], explanation: "к + dativo: двадцатое → двадцатому." },
    { front: "(03.06) К какому числу будут готовы фотографии со свадьбы?", back: "К третьему июня", distractors: ["К третего июня", "К третьего июня"], explanation: "Третье → третьему (con «ь»)." },
    { front: "(02.11) К какому числу нужно продлить страховку?", back: "Ко второму ноября", distractors: ["К второму ноября", "Ко второго ноября"], explanation: "к → ко davanti a «вт»: ко второму." },
    { front: "(25.12) К какому числу должен прийти подарок?", back: "К двадцать пятому декабря", distractors: ["К двадцать пятого декабря", "К двадцать пятое декабря"], explanation: "Solo l'ultima parola cambia: двадцать пятому." },
    { front: "(10.10) К какому числу нужно оплатить свет и газ?", back: "К десятому октября", distractors: ["К десятого октября", "К десятом октября"], explanation: "к + dativo: десятое → десятому." },
    { front: "(31.08) К какому числу нужно записаться на курсы?", back: "К тридцать первому августа", distractors: ["К тридцать первого августа", "К тридцать первое августа"], explanation: "к тридцать первому (dativo)." },
    { front: "(14.02) К какому числу нужно купить цветы?", back: "К четырнадцатому февраля", distractors: ["К четырнадцатого февраля", "К четырнадцатое февраля"], explanation: "к + dativo: четырнадцатое → четырнадцатому." },
    { front: "(08.03) К какому празднику мы покупаем цветы маме?", back: "К восьмому марта", distractors: ["К восьмого марта", "К восьмое марта"], explanation: "Anche le feste: к восьмому марта = per l'8 marzo." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Scadenza senza numero: к началу / к середине / к концу месяца; feste: к Новому году, к Рождеству, к восьмому марта
// ============================================================
const p5cards = [
    { front: "(31.05) Ремонт закончим не позже последнего дня мая, то есть…", back: "к концу мая", distractors: ["к конец мая", "к концу май"] },
    { front: "(01.09–05.09) Форму купим не позже первых дней сентября, то есть…", back: "к началу сентября", distractors: ["к начало сентября", "к началу сентябрь"] },
    { front: "(15.07) Перевод нужно закончить не позже середины июля, то есть…", back: "к середине июля", distractors: ["к середина июля", "к середине июль"] },
    { front: "(31.12) Ёлку покупаем заранее. Для какого праздника?", back: "К Новому году", distractors: ["К Новый год", "К Нового года"] },
    { front: "(08.03) Цветы покупаем заранее. Для какого праздника?", back: "К восьмому марта", distractors: ["К восьмое марта", "К восьмого марта"] },
    { front: "(07.01) Подарки крёстным — не позже седьмого января. Для какого праздника?", back: "К Рождеству", distractors: ["К Рождество", "К Рождества"] },
    { front: "(01.09) Тетради и ручки покупаем в августе. Для какого дня?", back: "К первому сентября", distractors: ["К первое сентября", "К первого сентября"] },
    { front: "(30.11) Курс нужно закончить не позже последних дней ноября, то есть…", back: "к концу ноября", distractors: ["к конец ноября", "к концу ноябрь"] },
    { front: "(01.10–05.10) Документы будут готовы не позже первых дней октября, то есть…", back: "к началу октября", distractors: ["к начало октября", "к началу октябрь"] },
    { front: "(28–31 число) Счета нужно оплатить не позже последних дней месяца, то есть…", back: "к концу месяца", distractors: ["к конец месяца", "к концу месяц"] }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-de-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-de-01', exercises: p1exercises }),
    'panel-de-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-de-02', exercises: p2exercises }),
    'panel-de-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-de-03', exercises: p3exercises }),
    'panel-de-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-de-04', cards: p4cards }),
    'panel-de-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-de-05', cards: p5cards })
};

initPanelManager({ initializers, enableAccessControl: true });
