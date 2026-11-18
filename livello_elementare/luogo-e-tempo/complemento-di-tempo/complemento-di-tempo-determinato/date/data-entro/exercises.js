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
// PANEL 6 — Flashcard · paid
// Misto — il visto: к / до (con domanda), к концу (nuovo) + fatto / momento / с … по / числа / в конце (vecchio)
// ============================================================
const p6cards = [
    { front: "(15.04) К какому числу нужно подать документы на визу?", back: "К пятнадцатому апреля", distractors: ["К пятнадцатого апреля", "К пятнадцатое апреля"] },
    { front: "(10.04) Какое сегодня число? Мы заполняем анкету.", back: "Десятое апреля", distractors: ["Десятого апреля", "К десятому апреля"] },
    { front: "(30.04) — До какого числа визовый центр работает в этом месяце?", back: "До тридцатого апреля", distractors: ["К тридцатому апреля", "До тридцатое апреля"] },
    { front: "(20.04) — Когда примерно будет готова виза? — Точно не знаю…", back: "Числа двадцатого", distractors: ["Числа двадцатое", "К двадцатому"] },
    { front: "(25.04) Когда нас вызвали в консульство? Это есть в письме.", back: "Двадцать пятого апреля", distractors: ["Двадцать пятое апреля", "Около двадцать пятого апреля"] },
    { front: "(01.05–14.05) С какого по какое число мы в Москве?", back: "С первого по четырнадцатое мая", distractors: ["С первого по четырнадцатого мая", "С первое по четырнадцатое мая"] },
    { front: "(30.04) Билеты нужно купить не позже последнего дня апреля, то есть…", back: "к концу апреля", distractors: ["к конец апреля", "к концу апрель"] },
    { front: "(02.05) — К какому числу нужно приехать в Москву?", back: "Ко второму мая", distractors: ["К второму мая", "Ко второго мая"] },
    { front: "(26.04–30.04) Когда примерно мы покупаем подарки друзьям? Точной даты нет.", back: "В конце апреля", distractors: ["В конец апреля", "В конце апрель"] },
    { front: "(14.05) — До какого числа действует виза?", back: "До четырнадцатого мая", distractors: ["К четырнадцатому мая", "До четырнадцатое мая"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni — preparativi per Capodanno e Natale: к / до / к концу + fatto / momento / с … по / около
// ============================================================
const p7cards = [
    { front: "(31.12) К какому празднику мы наряжаем ёлку?", back: "К Новому году", distractors: ["К Новый год", "К Нового года"], explanation: "к + dativo: Новый год → Новому году." },
    { front: "(31.12) Какое сегодня число? Новогодний вечер!", back: "Тридцать первое декабря", distractors: ["Тридцать первого декабря", "К тридцать первому декабря"], explanation: "Il fatto: nominativo neutro." },
    { front: "(28.12) — К какому числу нужно купить продукты для праздника?", back: "К двадцать восьмому декабря", distractors: ["К двадцать восьмого декабря", "К двадцать восьмое декабря"], explanation: "Scadenza: к двадцать восьмому (dativo)." },
    { front: "(01.01–08.01) С какого по какое число новогодние каникулы?", back: "С первого по восьмое января", distractors: ["С первого по восьмого января", "С первое по восьмое января"], explanation: "Periodo compreso: с + gen. … по + acc." },
    { front: "(09.01) — До какого числа мы отдыхаем? Девятого уже на работу.", back: "До девятого января", distractors: ["К девятому января", "До девятое января"], explanation: "До какого числа? → до + genitivo (fino a, il 9 escluso)." },
    { front: "(25.12) Когда католическое Рождество?", back: "Двадцать пятого декабря", distractors: ["Двадцать пятое декабря", "К двадцать пятому декабря"], explanation: "Quando? Il momento: genitivo senza preposizione." },
    { front: "(20.12) — К какому числу нужно отправить открытки?", back: "К двадцатому декабря", distractors: ["К двадцатого декабря", "К двадцатом декабря"], explanation: "Scadenza: к двадцатому." },
    { front: "(10.12) — Когда примерно мы покупаем ёлку? — Точной даты нет…", back: "Около десятого декабря", distractors: ["Около десятое декабря", "К десятому декабря"], explanation: "Data approssimativa: около + genitivo." },
    { front: "(27.12–31.12) Ремонт закончим не позже последних дней декабря, то есть…", back: "к концу декабря", distractors: ["к конец декабря", "к концу декабрь"], explanation: "К концу = non oltre la fine; в конце = alla fine." },
    { front: "(07.01) К какому празднику в православных семьях пекут пироги?", back: "К Рождеству", distractors: ["К Рождество", "К Рождества"], explanation: "к + dativo: Рождество → Рождеству." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto — i lavori in casa: к / до / к концу / к празднику + fatto / momento / с … по / числа
// ============================================================
const p8cards = [
    { front: "(15.11) — К какому числу мастер закончит кухню?", back: "К пятнадцатому ноября", distractors: ["К пятнадцатого ноября", "К пятнадцатое ноября"] },
    { front: "(01.11) Какое сегодня число? Начинаем ремонт!", back: "Первое ноября", distractors: ["Первого ноября", "К первому ноября"] },
    { front: "(01.11–15.11) С какого по какое число мы живём у мамы?", back: "С первого по пятнадцатое ноября", distractors: ["С первого по пятнадцатого ноября", "С первое по пятнадцатое ноября"] },
    { front: "(20.11) — До какого числа магазин стройматериалов даёт скидку?", back: "До двадцатого ноября", distractors: ["К двадцатому ноября", "До двадцатое ноября"] },
    { front: "(10.11) — Когда примерно привезут плитку? — Точно не знаю…", back: "Числа десятого", distractors: ["Числа десятое", "К десятому"] },
    { front: "(03.11) — К какому числу нужно выбрать обои?", back: "К третьему ноября", distractors: ["К третего ноября", "К третьему ноябрь"] },
    { front: "(12.11) Когда привезли новую мебель? Это есть в чеке.", back: "Двенадцатого ноября", distractors: ["Двенадцатое ноября", "Около двенадцатого ноября"] },
    { front: "(30.11) Всё нужно закончить не позже последнего дня ноября, то есть…", back: "к концу ноября", distractors: ["к конец ноября", "к концу ноябрь"] },
    { front: "(02.12) — К какому числу мы вернёмся домой?", back: "Ко второму декабря", distractors: ["К второму декабря", "Ко второго декабря"] },
    { front: "(31.12) К какому празднику квартира будет как новая?", back: "К Новому году", distractors: ["К Новый год", "К Нового года"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelDe9() {
    const panel = document.getElementById('panel-de-9');
    if (!panel) return;

    const container = panel.querySelector('#de-9-cards-container');
    const prevBtn   = panel.querySelector('#de-9-deck-prev');
    const nextBtn   = panel.querySelector('#de-9-deck-next');
    const counterEl = panel.querySelector('#de-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(05.05) — К какому числу нужно сдать документы? — ___ мая.", options: ["К пятого", "К пятому", "К пятое"], answer: "К пятому" },
        { question: "(05.05) — До какого числа ты в отпуске? — ___ мая.", options: ["К пятому", "До пятое", "До пятого"], answer: "До пятого" },
        { question: "(02.10) — К какому числу будет готов паспорт? — ___ октября.", options: ["Ко второму", "К второму", "Ко второго"], answer: "Ко второму" },
        { question: "(03.03) Квартиру нужно оплатить ___ марта.", options: ["к третьему", "к третего", "к третье"], answer: "к третьему" },
        { question: "(31.12) Ёлку покупаем ___.", options: ["к Новый год", "к Нового года", "к Новому году"], answer: "к Новому году" },
        { question: "(18.11) — Какое сегодня число? — ___ ноября.", options: ["К восемнадцатому", "Восемнадцатое", "Восемнадцатого"], answer: "Восемнадцатое" },
        { question: "(30.11) Ремонт закончим не позже последнего дня ноября, ___.", options: ["к концу ноября", "к конец ноября", "к концу ноябрь"], answer: "к концу ноября" },
        { question: "(01.05–14.05) Мы в Москве с первого ___ мая.", options: ["по четырнадцатого", "к четырнадцатому", "по четырнадцатое"], answer: "по четырнадцатое" },
        { question: "(20.05) Точно не знаю: зарплата будет ___ мая.", options: ["около двадцатое", "около двадцатого", "около двадцати"], answer: "около двадцатого" },
        { question: "(08.03) Цветы покупаем ___ марта.", options: ["к восьмому", "к восьмого", "к восьмое"], answer: "к восьмому" }
    ];
    const matchPairs = [
        { left: "(05.05) К какому числу сдать?", right: "к пятому мая" },
        { left: "(05.05) До какого числа отпуск?", right: "до пятого мая" },
        { left: "(05.05) Какое сегодня число?", right: "пятое мая" },
        { left: "(05.05) Когда день рождения?", right: "пятого мая" },
        { left: "(05.05) Точно не знаю, когда примерно?", right: "около пятого мая" },
        { left: "(01.05–05.05) С какого по какое число?", right: "с первого по пятое мая" },
        { left: "(31.05) Не позже последнего дня мая", right: "к концу мая" },
        { left: "(02.05) К какому числу приехать?", right: "ко второму мая" },
        { left: "(31.12) К какому празднику?", right: "к Новому году" },
        { left: "(03.05) К какому числу оплатить?", right: "к третьему мая" }
    ];
    const quizData = [
        { id: "de9-w1", promptPrefix: "(05.05) — К какому числу нужно сдать документы? — ", promptSuffix: " мая.", answers: ["к пятому"] },
        { id: "de9-w2", promptPrefix: "(05.05) — До какого числа ты в отпуске? — ", promptSuffix: " мая.", answers: ["до пятого"] },
        { id: "de9-w3", promptPrefix: "(02.10) — К какому числу будет готов паспорт? — ", promptSuffix: " октября.", answers: ["ко второму"] },
        { id: "de9-w4", promptPrefix: "(03.03) — К какому числу оплатить квартиру? — ", promptSuffix: " марта.", answers: ["к третьему"] },
        { id: "de9-w5", promptPrefix: "(31.12) Ёлку наряжаем ", promptSuffix: ".", answers: ["к Новому году"] },
        { id: "de9-w6", promptPrefix: "(30.11) Ремонт закончим не позже последнего дня ноября, то есть ", promptSuffix: ".", answers: ["к концу ноября"] },
        { id: "de9-w7", promptPrefix: "(20.11) — До какого числа действует скидка? — ", promptSuffix: " ноября.", answers: ["до двадцатого"] },
        { id: "de9-w8", promptPrefix: "(15.04) — К какому числу подать документы на визу? — ", promptSuffix: " апреля.", answers: ["к пятнадцатому"] },
        { id: "de9-w9", promptPrefix: "(08.03) Цветы маме покупаем ", promptSuffix: " марта.", answers: ["к восьмому"] },
        { id: "de9-w10", promptPrefix: "(18.11) — Какое сегодня число? — ", promptSuffix: " ноября.", answers: ["восемнадцатое"] }
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
            card.className = 'fca01-card-container de-9-card';
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
        container.querySelectorAll('.de-9-card').forEach(card => {
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
                const card    = this.closest('.de-9-card');
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
        container.querySelectorAll('.de-9-card').forEach((c, i) => {
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
    'panel-de-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-de-01', exercises: p1exercises }),
    'panel-de-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-de-02', exercises: p2exercises }),
    'panel-de-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-de-03', exercises: p3exercises }),
    'panel-de-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-de-04', cards: p4cards }),
    'panel-de-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-de-05', cards: p5cards }),
    'panel-de-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-de-06', cards: p6cards }),
    'panel-de-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-de-07', cards: p7cards }),
    'panel-de-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-de-08', cards: p8cards }),
    'panel-de-9': () => initPanelDe9()
};

initPanelManager({ initializers, enableAccessControl: true });
