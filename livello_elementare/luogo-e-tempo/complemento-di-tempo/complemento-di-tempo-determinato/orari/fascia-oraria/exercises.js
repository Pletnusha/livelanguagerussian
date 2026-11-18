import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Между пятью и семью» — fascia oraria: между + strumentale (un momento dentro l'intervallo, tra le 5 e le 7)
// ↔ с … до + genitivo (tutto il periodo, dalle 5 alle 7). Sceglie il verbo: durata (работает, открыт, идёт) → с … до;
// momento (позвоните, приходите, курьер приедет) → между.
// Numerali allo strumentale: двумя, тремя, четырьмя, пятью … двенадцатью, часом. ATTENZIONE: восемью e восьмью sono ENTRAMBE corrette.
// Anche tra eventi: между уроками, между обедом и ужином. Niente anni (blocco «Даты»). Niente suggerimenti di significato.
// Storia: consegne e appuntamenti (курьер приедет между двумя и четырьмя, звоните между девятью и десятью).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: между (nuovo) + с … до / около / перед / через / fatto (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:00–16:00) Курьер приехал {{1}}.",
        words: ["между два и четыре", "между двумя и четырьмя", "между двух и четырёх"],
        correctAnswers: { 1: "между двумя и четырьмя" },
        explanation: "Un momento tra le 2 e le 4: между + strumentale: два → двумя, четыре → четырьмя."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–18:00) Офис работает {{1}}.",
        words: ["между девятью и шестью", "с девять до шести", "с девяти до шести"],
        correctAnswers: { 1: "с девяти до шести" },
        explanation: "Работает = tutto il periodo: с + genitivo … до + genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–10:00) Врач позвонил {{1}}.",
        words: ["между девятью и десятью", "между девять и десять", "между девяти и десяти"],
        correctAnswers: { 1: "между девятью и десятью" },
        explanation: "Позвонил = un momento: между + strumentale: девять → девятью."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) Точно не знаю, приду {{1}}.",
        words: ["около семи", "около семь", "около семью"],
        correctAnswers: { 1: "около семи" },
        explanation: "Circa: около + genitivo: семь → семи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23:00–0:00) Я заснул {{1}}.",
        words: ["между одиннадцать и двенадцать", "между одиннадцати и двенадцати", "между одиннадцатью и двенадцатью"],
        correctAnswers: { 1: "между одиннадцатью и двенадцатью" },
        explanation: "Un momento nella notte: между + strumentale: одиннадцатью, двенадцатью."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Прямо {{1}} я выключаю телефон.",
        words: ["до урок", "перед уроком", "перед урок"],
        correctAnswers: { 1: "перед уроком" },
        explanation: "Subito prima: перед + strumentale: урок → уроком."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "На перемене, {{1}}, я пью кофе.",
        words: ["между уроков", "между урокам", "между уроками"],
        correctAnswers: { 1: "между уроками" },
        explanation: "Tra una lezione e l'altra: между + strumentale plurale: уроки → уроками."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сейчас 14:00, фильм в 14:30. Фильм начнётся {{1}}.",
        words: ["через полчаса", "после получаса", "через получаса"],
        correctAnswers: { 1: "через полчаса" },
        explanation: "Tra mezz'ora: через полчаса."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00–14:00) Посылку принесли {{1}}.",
        words: ["между час и два", "между часом и двумя", "между часа и двух"],
        correctAnswers: { 1: "между часом и двумя" },
        explanation: "между + strumentale: час → часом, два → двумя."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(17:45) — Сколько времени? — {{1}}.",
        words: ["В без пятнадцати шесть", "С без пятнадцати шесть", "Без пятнадцати шесть"],
        correctAnswers: { 1: "Без пятнадцати шесть" },
        explanation: "Che ore sono? Il fatto, senza preposizione."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// между + numerali allo strumentale (verbi di evento unico): двумя, тремя, четырьмя, пятью … двенадцатью, часом
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(15:00–17:00) Мама позвонила {{1}}.",
        words: ["между трёх и пяти", "между тремя и пятью", "между три и пять"],
        correctAnswers: { 1: "между тремя и пятью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10:00–12:00) Он пришёл {{1}}.",
        words: ["между десяти и двенадцати", "между десятью и двенадцатью", "между десять и двенадцать"],
        correctAnswers: { 1: "между десятью и двенадцатью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(6:00–7:00) Я проснулся {{1}}.",
        words: ["между шесть и семь", "между шести и семи", "между шестью и семью"],
        correctAnswers: { 1: "между шестью и семью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00–15:00) Посылку доставили {{1}}.",
        words: ["между часом и тремя", "между часа и трёх", "между час и три"],
        correctAnswers: { 1: "между часом и тремя" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20:00–21:00) Фильм закончился {{1}}.",
        words: ["между восьми и девяти", "между восемь и девять", "между восемью и девятью"],
        correctAnswers: { 1: "между восемью и девятью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(16:00–18:00) Курьер приехал {{1}}.",
        words: ["между четырьмя и шестью", "между четырёх и шести", "между четыре и шесть"],
        correctAnswers: { 1: "между четырьмя и шестью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(11:00–12:00) Он ответил на письмо {{1}}.",
        words: ["между одиннадцати и двенадцати", "между одиннадцатью и двенадцатью", "между одиннадцать и двенадцать"],
        correctAnswers: { 1: "между одиннадцатью и двенадцатью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:00–15:00) Врач вернулся {{1}}.",
        words: ["между два и три", "между двух и трёх", "между двумя и тремя"],
        correctAnswers: { 1: "между двумя и тремя" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(17:00–19:00) Гости ушли {{1}}.",
        words: ["между пятью и семью", "между пяти и семи", "между пять и семь"],
        correctAnswers: { 1: "между пятью и семью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–10:00) Поезд пришёл {{1}}.",
        words: ["между девяти и десяти", "между девятью и десятью", "между девять и десять"],
        correctAnswers: { 1: "между девятью и десятью" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// между или с … до? Durata su tutto il periodo (открыт, работает, сплю, весь вечер) → с … до; evento unico (позвонил, проснулся, приехал) → между
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–18:00) Магазин открыт {{1}}.",
        words: ["между девятью и шестью", "с девяти до шести", "с девять до шести"],
        correctAnswers: { 1: "с девяти до шести" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:00–15:00) Он позвонил {{1}}.",
        words: ["между двумя и тремя", "с двух до трёх", "между двух и трёх"],
        correctAnswers: { 1: "между двумя и тремя" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23:00–7:00) Я сплю {{1}}.",
        words: ["с одиннадцать до семи", "между одиннадцатью и семью", "с одиннадцати до семи"],
        correctAnswers: { 1: "с одиннадцати до семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(6:00–7:00) Я проснулся {{1}}.",
        words: ["с шести до семи", "между шести и семи", "между шестью и семью"],
        correctAnswers: { 1: "между шестью и семью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10:00–12:00) Урок идёт {{1}}.",
        words: ["с десяти до двенадцати", "между десятью и двенадцатью", "с десять до двенадцати"],
        correctAnswers: { 1: "с десяти до двенадцати" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(16:00–18:00) Курьер приехал {{1}}.",
        words: ["с четырёх до шести", "между четырьмя и шестью", "между четырёх и шести"],
        correctAnswers: { 1: "между четырьмя и шестью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:00–21:00) Весь вечер я был дома: {{1}}.",
        words: ["с шести до девяти", "между шестью и девятью", "с шесть до девяти"],
        correctAnswers: { 1: "с шести до девяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20:00–21:00) Фильм закончился {{1}}.",
        words: ["между восемь и девять", "с восьми до девяти", "между восемью и девятью"],
        correctAnswers: { 1: "между восемью и девятью" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(8:00–17:00) Папа работает {{1}}.",
        words: ["между восемью и пятью", "с восьми до пяти", "с восемь до пяти"],
        correctAnswers: { 1: "с восьми до пяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12:00–13:00) Посылку принесли {{1}}.",
        words: ["между двенадцатью и часом", "с двенадцати до часа", "между двенадцати и часа"],
        correctAnswers: { 1: "между двенадцатью и часом" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Consegne e appuntamenti: между + strumentale con verbi di evento unico (con spiegazioni)
// ============================================================
const p4cards = [
    { front: "(10:00–12:00) Когда приехал курьер?", back: "Между десятью и двенадцатью", distractors: ["С десяти до двенадцати", "Между десяти и двенадцати"], explanation: "Приехал = un momento nell'intervallo: между + strumentale." },
    { front: "(19:00–20:00) Когда привезли пиццу?", back: "Между семью и восемью", distractors: ["Между семи и восьми", "Между семь и восемь"], explanation: "Восемь: sono corrette sia «восемью» sia «восьмью»." },
    { front: "(9:00–10:00) Когда позвонил врач?", back: "Между девятью и десятью", distractors: ["Между девять и десять", "С девяти до десяти"], explanation: "Позвонил = un momento: между + strumentale: девять → девятью." },
    { front: "(15:00–17:00) Когда пришёл мастер?", back: "Между тремя и пятью", distractors: ["Между трёх и пяти", "Между три и пять"], explanation: "между + strumentale: три → тремя, пять → пятью." },
    { front: "(13:00–14:00) Когда пришло письмо?", back: "Между часом и двумя", distractors: ["Между часа и двух", "С часа до двух"], explanation: "между + strumentale: час → часом, два → двумя." },
    { front: "(11:00–13:00) Когда принесли посылку?", back: "Между одиннадцатью и часом", distractors: ["Между одиннадцати и часа", "Между одиннадцать и час"], explanation: "между + strumentale: одиннадцать → одиннадцатью, час → часом." },
    { front: "(16:00–17:00) Когда приехало такси?", back: "Между четырьмя и пятью", distractors: ["Между четырёх и пяти", "С четырёх до пяти"], explanation: "между + strumentale: четыре → четырьмя." },
    { front: "(20:00–22:00) Когда ушли гости?", back: "Между восемью и десятью", distractors: ["Между восьми и десяти", "Между восемь и десять"], explanation: "Восемь → восемью (o восьмью: entrambe corrette)." },
    { front: "(6:00–7:00) Когда ты встал?", back: "Между шестью и семью", distractors: ["Между шести и семи", "С шести до семи"], explanation: "между + strumentale: шесть → шестью, семь → семью." },
    { front: "(12:00–14:00) Когда закончилось собрание?", back: "Между двенадцатью и двумя", distractors: ["Между двенадцати и двух", "Между двенадцать и два"], explanation: "между + strumentale: двенадцать → двенадцатью, два → двумя." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// между tra eventi + strumentale: между уроками, между обедом и ужином, между работой и спортзалом
// ============================================================
const p5cards = [
    { front: "Урок, перемена, урок. Я пью кофе на перемене. Когда?", back: "Между уроками", distractors: ["Между уроков", "Между урокам"] },
    { front: "Обед в 13:00, ужин в 19:00, я гуляю в 16:00. Когда я гуляю?", back: "Между обедом и ужином", distractors: ["Между обеда и ужина", "Между обед и ужин"] },
    { front: "Сначала работа, потом спортзал, а в 18:30 я ем банан. Когда?", back: "Между работой и спортзалом", distractors: ["Между работы и спортзала", "Между работа и спортзал"] },
    { front: "Завтрак в 8:00, обед в 13:00, яблоко в 11:00. Когда я ем яблоко?", back: "Между завтраком и обедом", distractors: ["Между завтрака и обеда", "Между завтрак и обед"] },
    { front: "Первая пара, перерыв, вторая пара. Когда мы разговариваем?", back: "Между парами", distractors: ["Между пар", "Между парам"] },
    { front: "Экзамен в понедельник и экзамен в пятницу, в среду я отдыхаю. Когда?", back: "Между экзаменами", distractors: ["Между экзаменов", "Между экзаменам"] },
    { front: "Встреча в 10:00, звонок в 12:00, письма в 11:00. Когда я пишу письма?", back: "Между встречей и звонком", distractors: ["Между встречи и звонка", "Между встреча и звонок"] },
    { front: "Спектакль: первый акт, антракт, второй акт. Когда мы пьём кофе?", back: "Между актами", distractors: ["Между актов", "Между актам"] },
    { front: "Душ в 7:00, завтрак в 7:30, одеваюсь в 7:15. Когда я одеваюсь?", back: "Между душем и завтраком", distractors: ["Между душа и завтрака", "Между душ и завтрак"] },
    { front: "Работа до 18:00, концерт в 20:00, ужин в 19:00. Когда я ужинаю?", back: "Между работой и концертом", distractors: ["Между работы и концерта", "Между работой и концерт"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: consegne — между (ore ed eventi) + с … до / около / через / к / перед
// ============================================================
const p6cards = [
    { front: "(14:00–16:00) Когда приехал курьер?", back: "Между двумя и четырьмя", distractors: ["С двух до четырёх", "Между двух и четырёх"] },
    { front: "(10:00–19:00) Когда работает пункт выдачи?", back: "С десяти до семи", distractors: ["Между десятью и семью", "С десять до семи"] },
    { front: "Обед в 13:00, ужин в 19:00, курьер пришёл в 16:00. Когда?", back: "Между обедом и ужином", distractors: ["Между обеда и ужина", "Между обед и ужин"] },
    { front: "(15:00) Когда примерно приедет курьер?", back: "Около трёх", distractors: ["Около три", "Около тремя"] },
    { front: "(9:00–10:00) Когда пришло СМС о доставке?", back: "Между девятью и десятью", distractors: ["С девяти до десяти", "Между девяти и десяти"] },
    { front: "Сейчас 12:00, курьер в 12:20. Когда курьер?", back: "Через двадцать минут", distractors: ["Через двадцать минуты", "После двадцати минут"] },
    { front: "(17:00–19:00) Когда ты получил посылку?", back: "Между пятью и семью", distractors: ["С пяти до семи", "Между пяти и семи"] },
    { front: "(18:00) К какому часу нужно забрать посылку?", back: "К шести", distractors: ["К шесть", "К шестью"] },
    { front: "(11:00–12:00) Когда позвонил оператор?", back: "Между одиннадцатью и двенадцатью", distractors: ["С одиннадцати до двенадцати", "Между одиннадцать и двенадцать"] },
    { front: "Я проверяю посылку, а потом сразу ставлю подпись. Когда я проверяю посылку?", back: "Перед подписью", distractors: ["Перед подпись", "Перед подписи"] }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-fo-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-01', exercises: p1exercises }),
    'panel-fo-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-02', exercises: p2exercises }),
    'panel-fo-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-03', exercises: p3exercises }),
    'panel-fo-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-fo-04', cards: p4cards }),
    'panel-fo-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-fo-05', cards: p5cards }),
    'panel-fo-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-fo-06', cards: p6cards })
};

initPanelManager({ initializers, enableAccessControl: true });
