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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-pd-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-pd-01', exercises: p1exercises }),
    'panel-pd-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-pd-02', exercises: p2exercises }),
    'panel-pd-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-pd-03', exercises: p3exercises }),
    'panel-pd-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-pd-04', cards: p4cards }),
    'panel-pd-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-pd-05', cards: p5cards }),
    'panel-pd-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-pd-06', cards: p6cards })
};

initPanelManager({ initializers, enableAccessControl: true });
