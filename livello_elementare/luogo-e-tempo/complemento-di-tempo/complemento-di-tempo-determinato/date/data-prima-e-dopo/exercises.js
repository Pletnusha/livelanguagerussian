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
// PANEL 5 — Flashcard · student
// Con «число»: до пятнадцатого числа / после двадцатого числа (bollette, stipendio, affitto); «до» = prima (раньше), giorno escluso
// ============================================================
const p5cards = [
    { front: "Счёт за свет платим в первой половине месяца, раньше пятнадцатого. Когда?", back: "До пятнадцатого числа", distractors: ["После пятнадцатого числа", "До пятнадцатое число"] },
    { front: "Зарплата приходит двадцатого. Когда у нас есть деньги?", back: "После двадцатого числа", distractors: ["До двадцатого числа", "После двадцатое число"] },
    { front: "Квартиру оплачиваем в первые дни месяца, раньше пятого. Когда?", back: "До пятого числа", distractors: ["После пятого числа", "До пятое число"] },
    { front: "Скидки в магазине начинаются двадцать пятого. Когда лучше покупать?", back: "После двадцать пятого числа", distractors: ["До двадцать пятого числа", "После двадцать пятое число"] },
    { front: "Отчёт сдаём раньше десятого. Когда?", back: "До десятого числа", distractors: ["После десятого числа", "До десятое число"] },
    { front: "Бабушка получает пенсию третьего. Когда она идёт за продуктами?", back: "После третьего числа", distractors: ["До третьего числа", "После третье число"] },
    { front: "Аренду платим раньше первого числа следующего месяца. Когда?", back: "До первого числа", distractors: ["После первого числа", "До первое число"] },
    { front: "Аванс приходит пятнадцатого. Когда мы покупаем новый диван?", back: "После пятнадцатого числа", distractors: ["До пятнадцатого числа", "После пятнадцатое число"] },
    { front: "Показания счётчиков передаём раньше двадцатого. Когда?", back: "До двадцатого числа", distractors: ["После двадцатого числа", "До двадцатое число"] },
    { front: "Деньги на телефоне кончаются, а зарплата только тридцатого. Когда я пополню телефон?", back: "После тридцатого числа", distractors: ["До тридцатого числа", "После тридцатое число"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto — la dieta di Capodanno: до / после con date e feste (nuovo) + fatto / momento / с … по / числа / к (vecchio)
// ============================================================
const p6cards = [
    { front: "Сначала праздники, потом спортзал. Когда начнём ходить в спортзал?", back: "После Нового года", distractors: ["До Нового года", "После Новый год"] },
    { front: "(10.01) Какое сегодня число? Первый день диеты!", back: "Десятое января", distractors: ["Десятого января", "После десятого января"] },
    { front: "(10.01–31.01) С какого по какое число мы на диете?", back: "С десятого по тридцать первое января", distractors: ["С десятого по тридцать первого января", "С десятое по тридцать первое января"] },
    { front: "(14.02) Шоколад — только когда пройдёт День святого Валентина. Когда?", back: "После четырнадцатого февраля", distractors: ["До четырнадцатого февраля", "После четырнадцатое февраля"] },
    { front: "(20.01) — Когда примерно ты сдашь анализы? — Точно не знаю…", back: "Числа двадцатого", distractors: ["Числа двадцатое", "Число двадцатого"] },
    { front: "(01.03) Хочу похудеть к весне, раньше первого марта. Когда?", back: "До первого марта", distractors: ["После первого марта", "До первое марта"] },
    { front: "(05.02) — К какому числу нужно записаться к врачу?", back: "К пятому февраля", distractors: ["К пятого февраля", "После пятого февраля"] },
    { front: "(08.03) Торт можно, но только когда праздник прошёл. Когда?", back: "После Восьмого марта", distractors: ["До Восьмого марта", "После Восьмое марта"] },
    { front: "(15.01) Когда у тебя приём у диетолога? Это есть в записи.", back: "Пятнадцатого января", distractors: ["Пятнадцатое января", "Около пятнадцатого января"] },
    { front: "(25.12) Сладкое покупаем заранее, раньше Рождества. Когда?", back: "До Рождества", distractors: ["После Рождества", "До Рождество"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni — lavoro e ferie: до / после + fatto / momento / с … по / к / около
// ============================================================
const p7cards = [
    { front: "(15.07) Отпуск начинается пятнадцатого. Проект нужно закончить раньше. Когда?", back: "До пятнадцатого июля", distractors: ["После пятнадцатого июля", "До пятнадцатое июля"], explanation: "Prima: до + genitivo: пятнадцатого." },
    { front: "(15.07) Какое сегодня число? Первый день отпуска!", back: "Пятнадцатое июля", distractors: ["Пятнадцатого июля", "До пятнадцатого июля"], explanation: "Il fatto: nominativo neutro." },
    { front: "(15.07–29.07) С какого по какое число ты в отпуске?", back: "С пятнадцатого по двадцать девятое июля", distractors: ["С пятнадцатого по двадцать девятого июля", "С пятнадцатое по двадцать девятое июля"], explanation: "с + gen. … по + acc. (compreso)." },
    { front: "(29.07) Отпуск заканчивается двадцать девятого. Когда ты снова на работе?", back: "После двадцать девятого июля", distractors: ["До двадцать девятого июля", "После двадцать девятое июля"], explanation: "Dopo: после + genitivo." },
    { front: "Сначала отпуск, потом новый проект. Когда новый проект?", back: "После отпуска", distractors: ["До отпуска", "После отпуск"], explanation: "Отпуск → отпуска (genitivo)." },
    { front: "(10.07) — К какому числу нужно сдать отчёт перед отпуском?", back: "К десятому июля", distractors: ["К десятого июля", "После десятого июля"], explanation: "Scadenza: к + dativo." },
    { front: "Сначала отчёт, потом отпуск. Когда отчёт?", back: "До отпуска", distractors: ["После отпуска", "До отпуск"], explanation: "Prima: до отпуска." },
    { front: "(01.08) — Когда примерно ты вернёшься в офис? — Точно не знаю…", back: "Около первого августа", distractors: ["Около первое августа", "Около одного августа"], explanation: "Circa: около + ordinale (первого), non «одного»." },
    { front: "(20.07) Билеты домой дешевеют после двадцатого. Когда купим?", back: "После двадцатого июля", distractors: ["До двадцатого июля", "После двадцатое июля"], explanation: "Dopo il 20: после двадцатого." },
    { front: "(14.07) — Какого числа ты уезжаешь в отпуск?", back: "Четырнадцатого июля", distractors: ["Четырнадцатое июля", "До четырнадцатого июля"], explanation: "Какого числа? → la data esatta al genitivo." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto — le bollette del mese: до / после (con «число» e feste) + fatto / momento / к / числа / с … по
// ============================================================
const p8cards = [
    { front: "Свет оплачиваем раньше пятнадцатого. Когда?", back: "До пятнадцатого числа", distractors: ["После пятнадцатого числа", "До пятнадцатое число"] },
    { front: "(01.11) Какое сегодня число? Пришли новые счета.", back: "Первое ноября", distractors: ["Первого ноября", "После первого ноября"] },
    { front: "Зарплата пятого. Когда мы платим за интернет?", back: "После пятого числа", distractors: ["До пятого числа", "После пятое число"] },
    { front: "(10.11) — К какому числу нужно оплатить квартиру?", back: "К десятому ноября", distractors: ["К десятого ноября", "После десятого ноября"] },
    { front: "(20.11) — Когда примерно придёт счёт за газ? — Точно не знаю…", back: "Числа двадцатого", distractors: ["Числа двадцатое", "Число двадцатого"] },
    { front: "(01.11–30.11) С какого по какое число действует тариф?", back: "С первого по тридцатое ноября", distractors: ["С первого по тридцатого ноября", "С первое по тридцатое ноября"] },
    { front: "Скидка на интернет — только раньше двадцать пятого. Когда платим?", back: "До двадцать пятого числа", distractors: ["После двадцать пятого числа", "До двадцать пятое число"] },
    { front: "(03.11) Когда пришёл счёт за воду? Это есть в письме.", back: "Третьего ноября", distractors: ["Третье ноября", "После третьего ноября"] },
    { front: "Сначала праздники, потом большие счета. Когда приходят большие счета?", back: "После Нового года", distractors: ["До Нового года", "После Новый год"] },
    { front: "Пенсия третьего. Когда бабушка платит за телефон?", back: "После третьего числа", distractors: ["До третьего числа", "После третье число"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelDpd9() {
    const panel = document.getElementById('panel-dpd-9');
    if (!panel) return;

    const container = panel.querySelector('#dpd-9-cards-container');
    const prevBtn   = panel.querySelector('#dpd-9-deck-prev');
    const nextBtn   = panel.querySelector('#dpd-9-deck-next');
    const counterEl = panel.querySelector('#dpd-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(05.05) Зарплата пятого, а сегодня третье: ___ денег нет.", options: ["До пятого", "После пятого", "До пятое"], answer: "До пятого" },
        { question: "(10.06) Магазин открывается десятого. ___ можно купить всё.", options: ["До десятого", "После десятое", "После десятого"], answer: "После десятого" },
        { question: "Сначала праздники, потом диета: на диету сядем ___.", options: ["до Нового года", "после Нового года", "после Новый год"], answer: "после Нового года" },
        { question: "(20.12) Билеты дорожают двадцатого. Купи их ___ декабря!", options: ["после двадцатого", "до двадцатого", "до двадцатое"], answer: "до двадцатого" },
        { question: "(03.05) — Какое сегодня число? — ___ мая.", options: ["Третье", "Третьего", "До третьего"], answer: "Третье" },
        { question: "Распродажи начинаются, когда праздник прошёл: ___.", options: ["до Рождества", "после Рождество", "после Рождества"], answer: "после Рождества" },
        { question: "Свет платим раньше пятнадцатого: ___ числа.", options: ["после пятнадцатого", "до пятнадцатого", "до пятнадцатое"], answer: "до пятнадцатого" },
        { question: "(10.05) — К какому числу нужно сдать отчёт? — ___ мая.", options: ["К десятому", "К десятого", "После десятого"], answer: "К десятому" },
        { question: "(01.07–14.07) Отпуск с первого ___ июля.", options: ["по четырнадцатого", "после четырнадцатого", "по четырнадцатое"], answer: "по четырнадцатое" },
        { question: "Сначала экзамены, потом каникулы: экзамены ___.", options: ["после каникул", "до каникул", "до каникулы"], answer: "до каникул" }
    ];
    const matchPairs = [
        { left: "(05.05) Зарплата пятого. Денег нет…", right: "до пятого" },
        { left: "(05.05) Зарплата пятого. Телефон купим…", right: "после пятого" },
        { left: "(05.05) Какое сегодня число?", right: "пятое мая" },
        { left: "(05.05) Какого числа зарплата?", right: "пятого мая" },
        { left: "(05.05) К какому числу сдать отчёт?", right: "к пятому мая" },
        { left: "Сначала Новый год, потом диета. Диета — …", right: "после Нового года" },
        { left: "Ёлку покупаем заранее — …", right: "до Нового года" },
        { left: "Сначала отпуск, потом проект. Проект — …", right: "после отпуска" },
        { left: "Счета платим раньше пятнадцатого — …", right: "до пятнадцатого числа" },
        { left: "(01.05–05.05) С какого по какое число?", right: "с первого по пятое мая" }
    ];
    const quizData = [
        { id: "dpd9-w1", promptPrefix: "(05.05) Зарплата пятого, а сегодня третье: ", promptSuffix: " денег нет.", answers: ["до пятого"] },
        { id: "dpd9-w2", promptPrefix: "(10.06) Магазин открывается десятого. ", promptSuffix: " можно купить всё.", answers: ["после десятого"] },
        { id: "dpd9-w3", promptPrefix: "Сначала праздники, потом диета: на диету сядем ", promptSuffix: ".", answers: ["после Нового года", "после праздников"] },
        { id: "dpd9-w4", promptPrefix: "(20.12) Билеты дорожают двадцатого. Купи их ", promptSuffix: " декабря!", answers: ["до двадцатого"] },
        { id: "dpd9-w5", promptPrefix: "Распродажи начинаются, когда праздник прошёл: ", promptSuffix: ".", answers: ["после Рождества"] },
        { id: "dpd9-w6", promptPrefix: "Свет платим раньше пятнадцатого: ", promptSuffix: " числа.", answers: ["до пятнадцатого"] },
        { id: "dpd9-w7", promptPrefix: "Сначала экзамены, потом каникулы: экзамены ", promptSuffix: ".", answers: ["до каникул"] },
        { id: "dpd9-w8", promptPrefix: "Сначала отпуск, потом новый проект: проект ", promptSuffix: ".", answers: ["после отпуска"] },
        { id: "dpd9-w9", promptPrefix: "(03.05) — Какое сегодня число? — ", promptSuffix: " мая.", answers: ["третье"] },
        { id: "dpd9-w10", promptPrefix: "Пенсия третьего. Бабушка платит за телефон ", promptSuffix: " числа.", answers: ["после третьего"] }
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
            card.className = 'fca01-card-container dpd-9-card';
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
        container.querySelectorAll('.dpd-9-card').forEach(card => {
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
                const card    = this.closest('.dpd-9-card');
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
        container.querySelectorAll('.dpd-9-card').forEach((c, i) => {
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
    'panel-dpd-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dpd-01', exercises: p1exercises }),
    'panel-dpd-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dpd-02', exercises: p2exercises }),
    'panel-dpd-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dpd-03', exercises: p3exercises }),
    'panel-dpd-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-dpd-04', cards: p4cards }),
    'panel-dpd-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-dpd-05', cards: p5cards }),
    'panel-dpd-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-dpd-06', cards: p6cards }),
    'panel-dpd-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-dpd-07', cards: p7cards }),
    'panel-dpd-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-dpd-08', cards: p8cards }),
    'panel-dpd-9': () => initPanelDpd9()
};

initPanelManager({ initializers, enableAccessControl: true });
