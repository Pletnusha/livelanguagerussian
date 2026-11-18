import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «До и после» — prima e dopo: до + genitivo ↔ после + genitivo (eventi e ore)
// Alternativa unica della pagina: до ↔ после. «через» (tra un'ora) e «перед» (poco prima) hanno pagine proprie.
// Niente suggerimenti di significato: l'ordine degli eventi lo dà il contesto russo (сначала … потом) o un orario.
// Storia: cartelli, regole, istruzioni (до еды / после еды, после 23:00 не шуметь).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: до / после + genitivo (nuovo) + periodo / около / к / в / без (vecchio)
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала работа, потом спортзал: я хожу в спортзал {{1}}.",
        words: ["до работы", "после работы", "после работа"],
        correctAnswers: { 1: "после работы" },
        explanation: "Prima il lavoro, poi la palestra → dopo: после + genitivo: работа → работы."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10:00–19:00) Магазин работает {{1}}.",
        words: ["с десяти по семь", "с десять до семи", "с десяти до семи"],
        correctAnswers: { 1: "с десяти до семи" },
        explanation: "Periodo con le ore: с + genitivo … до + genitivo («по» si usa con i giorni)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала таблетка, потом завтрак: таблетку пьют {{1}}.",
        words: ["до завтрака", "до завтрак", "после завтрака"],
        correctAnswers: { 1: "до завтрака" },
        explanation: "Prima la pastiglia, poi la colazione → prima: до + genitivo: завтрак → завтрака."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) Точно не знаю, гости придут {{1}}.",
        words: ["около семи", "около семь", "в семи"],
        correctAnswers: { 1: "около семи" },
        explanation: "Ora approssimativa: около + genitivo: семь → семи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23:00) Соседи рано ложатся спать. Табличка: «{{1}} не шуметь».",
        words: ["До одиннадцати", "После одиннадцать", "После одиннадцати"],
        correctAnswers: { 1: "После одиннадцати" },
        explanation: "Dopo un'ora: после + genitivo: одиннадцать → одиннадцати."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00) — К какому часу нужно прийти? — {{1}}.",
        words: ["К девять", "К девяти", "К девятью"],
        correctAnswers: { 1: "К девяти" },
        explanation: "Scadenza (entro): к + dativo: девять → девяти."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:00) Банк закрывается в шесть. Приходи {{1}}.",
        words: ["до шести", "после шести", "до шесть"],
        correctAnswers: { 1: "до шести" },
        explanation: "La banca chiude alle sei → prima delle sei: до + genitivo. Attenzione: «до шести» è anche «fino alle sei» (работаю до шести) — lo dice il verbo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:30) Фильм начинается ровно {{1}}.",
        words: ["около половины седьмого", "в половину седьмого", "в половине седьмого"],
        correctAnswers: { 1: "в половине седьмого" },
        explanation: "Ora esatta (ровно): в половине седьмого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00) Рано утром я не звоню друзьям. Звоню только {{1}}.",
        words: ["до девяти", "после девяти", "после девять"],
        correctAnswers: { 1: "после девяти" },
        explanation: "Non presto la mattina → dopo le nove: после + genitivo: девять → девяти."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(8:45) — Сколько времени? — {{1}}.",
        words: ["В без пятнадцати девять", "До без пятнадцати девять", "Без пятнадцати девять"],
        correctAnswers: { 1: "Без пятнадцати девять" },
        explanation: "Che ore sono? Il fatto, senza preposizione."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// до / после + genitivo con eventi (обед → обеда, работа → работы, выходные → выходных)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы гуляем в парке {{1}}.",
        words: ["после обед", "после обеда", "после обедом"],
        correctAnswers: { 1: "после обеда" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я делаю домашнее задание {{1}}.",
        words: ["после урока", "после урок", "после уроку"],
        correctAnswers: { 1: "после урока" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мой руки {{1}}!",
        words: ["до еда", "до еды", "до едой"],
        correctAnswers: { 1: "до еды" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Позвони мне утром, {{1}}.",
        words: ["до работа", "до работе", "до работы"],
        correctAnswers: { 1: "до работы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы вернёмся в Москву {{1}}.",
        words: ["после отпуска", "после отпуск", "после отпуском"],
        correctAnswers: { 1: "после отпуска" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно всё повторить {{1}}.",
        words: ["до экзамен", "до экзамену", "до экзамена"],
        correctAnswers: { 1: "до экзамена" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Увидимся {{1}}!",
        words: ["после выходные", "после выходных", "после выходным"],
        correctAnswers: { 1: "после выходных" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Дети гуляют {{1}}.",
        words: ["до ужин", "до ужину", "до ужина"],
        correctAnswers: { 1: "до ужина" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я плаваю в бассейне {{1}}.",
        words: ["до школы", "до школа", "до школе"],
        correctAnswers: { 1: "до школы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Встретимся у театра {{1}}.",
        words: ["после концерт", "после концерта", "после концертом"],
        correctAnswers: { 1: "после концерта" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// до или после? Sceglie il contesto russo (сначала … потом, orari di apertura / chiusura)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала душ, потом завтрак. Я завтракаю {{1}}.",
        words: ["до душа", "после душа", "после душ"],
        correctAnswers: { 1: "после душа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала магазин, потом кино. Мы идём в кино {{1}}.",
        words: ["после магазина", "до магазина", "после магазин"],
        correctAnswers: { 1: "после магазина" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Фильм начинается в восемь. Мы придём в семь, то есть {{1}}.",
        words: ["после восьми", "до восемь", "до восьми"],
        correctAnswers: { 1: "до восьми" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала суп, потом фрукты: фрукты едят {{1}}.",
        words: ["после супа", "до супа", "после суп"],
        correctAnswers: { 1: "после супа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Магазин открывается в девять. Если ты придёшь {{1}}, он будет закрыт.",
        words: ["до девять", "после девяти", "до девяти"],
        correctAnswers: { 1: "до девяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала экзамен, потом каникулы. Мы поедем на море {{1}}.",
        words: ["до экзамена", "после экзамена", "после экзамен"],
        correctAnswers: { 1: "после экзамена" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Врач сказал: сначала лекарство, потом еда. Лекарство нужно пить {{1}}.",
        words: ["до еды", "после еды", "до еда"],
        correctAnswers: { 1: "до еды" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Музей закрывается в пять. {{1}} в музей уже нельзя.",
        words: ["После пять", "До пяти", "После пяти"],
        correctAnswers: { 1: "После пяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сначала разминка, потом тренировка: разминку делают {{1}}.",
        words: ["после тренировки", "до тренировки", "до тренировка"],
        correctAnswers: { 1: "до тренировки" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поезд уходит в семь. На вокзале нужно быть {{1}}.",
        words: ["до семи", "после семи", "до семь"],
        correctAnswers: { 1: "до семи" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Cartelli, ricette, regole: до / после + genitivo (con spiegazioni)
// ============================================================
const p4cards = [
    { front: "Рецепт: сначала таблетка, потом еда. «Принимать …»", back: "До еды", distractors: ["До еда", "До едой"], explanation: "Prima dei pasti: до + genitivo: еда → еды." },
    { front: "Рецепт: сначала еда, потом таблетка. «Принимать …»", back: "После еды", distractors: ["После еда", "После едой"], explanation: "Dopo i pasti: после + genitivo: еда → еды." },
    { front: "(23:00) Ночью соседи спят. «… не шуметь»", back: "После одиннадцати", distractors: ["После одиннадцать", "После одиннадцатью"], explanation: "Dopo le 23: после + genitivo: одиннадцать → одиннадцати." },
    { front: "(9:00) Рано утром не звонить! «Не звонить …»", back: "До девяти", distractors: ["До девять", "До девятью"], explanation: "Prima delle 9: до + genitivo: девять → девяти." },
    { front: "(18:00) Музей: по вечерам бесплатно. «Вход бесплатный …»", back: "После шести", distractors: ["После шесть", "После шестью"], explanation: "Dopo le 18: после + genitivo: шесть → шести." },
    { front: "Бассейн: сначала душ, потом плавание. «Принять душ …»", back: "До плавания", distractors: ["До плавание", "До плаванию"], explanation: "Prima di nuotare: до + genitivo: плавание → плавания." },
    { front: "(12:00) Отель: «Освободить номер …»", back: "До полудня", distractors: ["До полдень", "До полудню"], explanation: "Prima di mezzogiorno: полдень → полудня (genitivo irregolare)." },
    { front: "(0:00) Парк ночью закрыт. «Вход запрещён …»", back: "После полуночи", distractors: ["После полночь", "После полночью"], explanation: "Dopo mezzanotte: полночь → полуночи (genitivo irregolare)." },
    { front: "Школа: сначала выключить телефоны, потом урок. «Выключить телефоны …»", back: "До урока", distractors: ["До урок", "До уроку"], explanation: "Prima della lezione: до + genitivo: урок → урока." },
    { front: "(20:00) Супермаркет: вечером всё дешевле. «Скидки …»", back: "После восьми", distractors: ["После восемь", "После восьмью"], explanation: "Dopo le 20: после + genitivo: восемь → восьми." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// до / после + ore (anche половины): до десяти, после половины седьмого
// ============================================================
const p5cards = [
    { front: "(10:00) Магазин открывается в десять. Когда он ещё закрыт?", back: "До десяти", distractors: ["До десять", "До десятью"] },
    { front: "(22:00) В общежитии ночью тихо. Когда нельзя громко слушать музыку?", back: "После десяти", distractors: ["После десять", "После десятью"] },
    { front: "(14:00) Перерыв на обед заканчивается в два. Когда можно прийти?", back: "После двух", distractors: ["После два", "После двумя"] },
    { front: "(19:30) Ужин в половине восьмого. Сначала уроки, потом ужин. Когда дети делают уроки?", back: "До половины восьмого", distractors: ["До половина восьмого", "До половину восьмого"] },
    { front: "(17:00) Работа заканчивается в пять. Когда ты свободен?", back: "После пяти", distractors: ["После пять", "После пятью"] },
    { front: "(8:00) Завтрак в отеле заканчивается в восемь. Когда нужно прийти на завтрак?", back: "До восьми", distractors: ["До восемь", "До восьмью"] },
    { front: "(15:00) Заселение в отель начинается в три. Когда можно получить ключ?", back: "После трёх", distractors: ["После три", "После тремя"] },
    { front: "(13:00) Аптека закрывается на обед в час. Когда можно прийти утром?", back: "До часа", distractors: ["До час", "До часом"] },
    { front: "(18:30) Концерт начинается в половине седьмого. Когда в зал уже не пускают?", back: "После половины седьмого", distractors: ["После половина седьмого", "После половину седьмого"] },
    { front: "(11:00) Встреча в одиннадцать. Сначала отчёт, потом встреча. Когда нужно отправить отчёт?", back: "До одиннадцати", distractors: ["До одиннадцать", "До одиннадцатью"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: до / после (nuovo) + к / около / periodo / в / без (vecchio)
// ============================================================
const p6cards = [
    { front: "Врач: сначала лекарство, потом завтрак. Когда пить лекарство?", back: "До завтрака", distractors: ["После завтрака", "До завтрак"] },
    { front: "(18:00) К какому часу нужно сдать проект?", back: "К шести", distractors: ["К шесть", "К шестью"] },
    { front: "(21:00) Магазин работает до девяти. Когда он уже закрыт?", back: "После девяти", distractors: ["До девяти", "После девять"] },
    { front: "(14:00) Когда примерно ты придёшь?", back: "Около двух", distractors: ["Около два", "Около двумя"] },
    { front: "(8:00–12:00) Когда работает рынок в воскресенье?", back: "С восьми до двенадцати", distractors: ["С восьми по двенадцать", "С восемь до двенадцати"] },
    { front: "Сначала ужин, потом прогулка. Когда мы гуляем?", back: "После ужина", distractors: ["До ужина", "После ужин"] },
    { front: "(19:30) Во сколько по расписанию начинается спектакль?", back: "В половине восьмого", distractors: ["В половину восьмого", "Около половины восьмого"] },
    { front: "(7:00) Утром соседи спят до семи. Когда можно включить музыку?", back: "После семи", distractors: ["До семи", "После семь"] },
    { front: "(12:45) Сколько времени?", back: "Без пятнадцати час", distractors: ["В без пятнадцати час", "До без пятнадцати час"] },
    { front: "Сначала зарядка, потом душ. Когда ты делаешь зарядку?", back: "До душа", distractors: ["После душа", "До душ"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni: regole di casa / ostello — до / после + periodo / около / к / в / fatto
// ============================================================
const p7cards = [
    { front: "Хостел: «Завтрак — с семи до десяти». Когда нужно прийти на завтрак?", back: "До десяти", distractors: ["После десяти", "До десять"], explanation: "La colazione finisce alle 10 → prima: до + genitivo: десять → десяти." },
    { front: "(Пн–Пт) Когда работает прачечная в общежитии?", back: "С понедельника по пятницу", distractors: ["С понедельника до пятницу", "С понедельник по пятницу"], explanation: "Giorni: с + genitivo … по + accusativo (venerdì incluso)." },
    { front: "Сначала уборка, потом вечеринка. Когда мы убираем квартиру?", back: "До вечеринки", distractors: ["После вечеринки", "До вечеринка"], explanation: "Prima della festa: до + genitivo: вечеринка → вечеринки." },
    { front: "(23:00) Когда примерно ты вернёшься домой?", back: "Около одиннадцати", distractors: ["Около одиннадцать", "Около одиннадцатью"], explanation: "Circa: около + genitivo: одиннадцать → одиннадцати." },
    { front: "(21:30) Гости уходят в половине десятого. Когда гостям уже нельзя быть в общежитии?", back: "После половины десятого", distractors: ["До половины десятого", "После половина десятого"], explanation: "Dopo: после + genitivo: половина → половины." },
    { front: "(20:00) К какому часу нужно вернуться домой?", back: "К восьми", distractors: ["К восемь", "К восьмью"], explanation: "Scadenza: к + dativo: восемь → восьми." },
    { front: "Сначала уроки, потом компьютер. Когда можно играть на компьютере?", back: "После уроков", distractors: ["До уроков", "После уроки"], explanation: "Dopo i compiti: после + genitivo plurale: уроки → уроков." },
    { front: "(7:00) Во сколько точно открывается столовая?", back: "В семь часов", distractors: ["Около семи", "В семи часов"], explanation: "Ora esatta (точно): в + accusativo." },
    { front: "(9:00) В выходные утром не шуметь до девяти. Когда можно пылесосить?", back: "После девяти", distractors: ["До девяти", "После девять"], explanation: "Qui «до девяти» = fino alle nove; si può dopo: после девяти." },
    { front: "(21:15) Сколько времени?", back: "Четверть десятого", distractors: ["В четверть десятого", "После четверти десятого"], explanation: "Che ore sono? Il fatto, senza preposizione." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto: orari di viaggio — до / после + periodo / около / к / в / без
// ============================================================
const p8cards = [
    { front: "Расписание: 9:00 — урок, 10:30 — перерыв. Когда перерыв?", back: "После урока", distractors: ["До урока", "После урок"] },
    { front: "(12:00–13:00) Когда у нас обед?", back: "С двенадцати до часа", distractors: ["С двенадцати по час", "С двенадцать до часа"] },
    { front: "Расписание: 8:00 — завтрак, 9:00 — экскурсия. Когда завтрак?", back: "До экскурсии", distractors: ["После экскурсии", "До экскурсия"] },
    { front: "(16:00) Когда примерно закончится экскурсия?", back: "Часа в четыре", distractors: ["Часов в четыре", "Около четыре"] },
    { front: "Расписание: 14:00 — концерт, 16:00 — ужин. Когда ужин?", back: "После концерта", distractors: ["До концерта", "После концерт"] },
    { front: "(10:00) К какому часу нужно прийти на вокзал?", back: "К десяти", distractors: ["К десять", "К десятью"] },
    { front: "(19:00) Ужин в семь. Сначала прогулка, потом ужин. Когда прогулка?", back: "До семи", distractors: ["После семи", "До семь"] },
    { front: "(7:15) Во сколько по расписанию уходит автобус?", back: "В четверть восьмого", distractors: ["В четверти восьмого", "Около четверти восьмого"] },
    { front: "(22:00) Экскурсия заканчивается в десять. Когда мы вернёмся в отель?", back: "После десяти", distractors: ["До десяти", "После десять"] },
    { front: "(13:50) Сколько времени?", back: "Без десяти два", distractors: ["В без десяти два", "После без десяти два"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelPd9() {
    const panel = document.getElementById('panel-pd-9');
    if (!panel) return;

    const container = panel.querySelector('#pd-9-cards-container');
    const prevBtn   = panel.querySelector('#pd-9-deck-prev');
    const nextBtn   = panel.querySelector('#pd-9-deck-next');
    const counterEl = panel.querySelector('#pd-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Сначала обед, потом кофе. Кофе пьют ___.", options: ["до обеда", "после обед", "после обеда"], answer: "после обеда" },
        { question: "Магазин открывается в десять. Если придёшь ___, он закрыт.", options: ["до десяти", "после десяти", "до десять"], answer: "до десяти" },
        { question: "(10:00–18:00) Библиотека работает ___.", options: ["с десяти по шесть", "с десяти до шести", "с десять до шести"], answer: "с десяти до шести" },
        { question: "(15:00) Точно не знаю, приду ___.", options: ["около три", "около трёх", "около тремя"], answer: "около трёх" },
        { question: "Врач: сначала таблетка, потом еда. Таблетку пьют ___.", options: ["после еды", "до еда", "до еды"], answer: "до еды" },
        { question: "(12:00) — К какому часу нужно освободить номер? — ___.", options: ["К полудню", "К полдень", "К полудня"], answer: "К полудню" },
        { question: "(23:00) Ночью соседи спят. ___ не шуметь!", options: ["До одиннадцати", "После одиннадцать", "После одиннадцати"], answer: "После одиннадцати" },
        { question: "(18:30) Спектакль начинается ровно ___.", options: ["около половины седьмого", "в половине седьмого", "в половину седьмого"], answer: "в половине седьмого" },
        { question: "Сначала уроки, потом футбол. Мы играем в футбол ___.", options: ["до уроков", "после уроков", "после уроки"], answer: "после уроков" },
        { question: "(10:15) — Сколько времени? — ___.", options: ["В четверть одиннадцатого", "После четверти одиннадцатого", "Четверть одиннадцатого"], answer: "Четверть одиннадцатого" }
    ];
    const matchPairs = [
        { left: "Сначала прогулка, потом обед. Прогулка — …", right: "до обеда" },
        { left: "Сначала обед, потом прогулка. Прогулка — …", right: "после обеда" },
        { left: "(18:00) Банк закрывается в шесть. Прийти нужно …", right: "до шести" },
        { left: "(18:00) Банк открыт до шести. Закрыт …", right: "после шести" },
        { left: "(15:00) Когда примерно?", right: "около трёх" },
        { left: "(15:00) К какому часу?", right: "к трём" },
        { left: "(15:00) Во сколько точно?", right: "в три часа" },
        { left: "(15:00) Сколько времени?", right: "три часа" },
        { left: "(9:00–18:00) Часы работы", right: "с девяти до шести" },
        { left: "(0:00) Парк ночью закрыт. Вход запрещён …", right: "после полуночи" }
    ];
    const quizData = [
        { id: "pd9-w1", promptPrefix: "Сначала работа, потом спортзал. В спортзал я хожу ", promptSuffix: ".", answers: ["после работы"] },
        { id: "pd9-w2", promptPrefix: "Врач: сначала лекарство, потом завтрак. Лекарство пьют ", promptSuffix: ".", answers: ["до завтрака"] },
        { id: "pd9-w3", promptPrefix: "(9:00) Рано утром не звони! Звони ", promptSuffix: ".", answers: ["после девяти", "после девяти часов"] },
        { id: "pd9-w4", promptPrefix: "(20:00) Магазин закрывается в восемь. ", promptSuffix: " он уже закрыт.", answers: ["после восьми", "после восьми часов", "после восьми вечера", "после восьми часов вечера", "после двадцати часов"] },
        { id: "pd9-w5", promptPrefix: "Сначала экзамен, потом каникулы. Каникулы будут ", promptSuffix: ".", answers: ["после экзамена"] },
        { id: "pd9-w6", promptPrefix: "(12:30) Сначала работа, потом перерыв в половине первого. Я работаю ", promptSuffix: ".", answers: ["до половины первого"] },
        { id: "pd9-w7", promptPrefix: "(17:00) — Когда примерно ты придёшь? — ", promptSuffix: ".", answers: ["около пяти", "около пяти часов", "часов в пять"] },
        { id: "pd9-w8", promptPrefix: "(11:00) — К какому часу нужно прийти? — ", promptSuffix: ".", answers: ["к одиннадцати", "к одиннадцати часам"] },
        { id: "pd9-w9", promptPrefix: "(0:00) Парк закрывается в полночь. ", promptSuffix: " вход запрещён.", answers: ["после полуночи", "после двенадцати"] },
        { id: "pd9-w10", promptPrefix: "(19:00–21:00) Ужин в ресторане ", promptSuffix: ".", answers: ["с семи до девяти", "с семи до девяти вечера", "с семи часов до девяти часов", "с девятнадцати до двадцати одного"] }
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
            card.className = 'fca01-card-container pd-9-card';
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
        container.querySelectorAll('.pd-9-card').forEach(card => {
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
                const card    = this.closest('.pd-9-card');
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
        container.querySelectorAll('.pd-9-card').forEach((c, i) => {
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
    'panel-pd-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pd-01', exercises: p1exercises }),
    'panel-pd-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pd-02', exercises: p2exercises }),
    'panel-pd-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-pd-03', exercises: p3exercises }),
    'panel-pd-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-pd-04', cards: p4cards }),
    'panel-pd-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-pd-05', cards: p5cards }),
    'panel-pd-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-pd-06', cards: p6cards }),
    'panel-pd-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-pd-07', cards: p7cards }),
    'panel-pd-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-pd-08', cards: p8cards }),
    'panel-pd-9': () => initPanelPd9()
};

initPanelManager({ initializers, enableAccessControl: true });
