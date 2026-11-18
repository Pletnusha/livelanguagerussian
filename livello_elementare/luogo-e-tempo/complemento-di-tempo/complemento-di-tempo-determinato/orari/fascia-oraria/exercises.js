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
// PANEL 7 — Flashcard · public
// Misto con spiegazioni: dal medico — между + с … до / около / за … до / перед / после
// ============================================================
const p7cards = [
    { front: "(8:00–9:00) Когда позвонила медсестра?", back: "Между восемью и девятью", distractors: ["С восьми до девяти", "Между восьми и девяти"], explanation: "Позвонила = un momento: между + strumentale (восемью o восьмью)." },
    { front: "(8:00–20:00) Когда работает поликлиника?", back: "С восьми до восьми", distractors: ["Между восемью и восемью", "С восемь до восьми"], explanation: "Работает = tutto il periodo: с … до + genitivo." },
    { front: "Анализ в 8:00, приём у врача в 10:00, завтрак в 9:00. Когда я завтракаю?", back: "Между анализом и приёмом", distractors: ["Между анализа и приёма", "Между анализ и приём"], explanation: "Tra due eventi: между + strumentale: анализ → анализом, приём → приёмом." },
    { front: "(11:00) Когда примерно освободится врач?", back: "Около одиннадцати", distractors: ["Около одиннадцать", "Около одиннадцатью"], explanation: "Circa: около + genitivo: одиннадцать → одиннадцати." },
    { front: "(14:00–15:00) Когда пришли результаты?", back: "Между двумя и тремя", distractors: ["С двух до трёх", "Между два и три"], explanation: "Пришли = un momento: между + strumentale: два → двумя, три → тремя." },
    { front: "Приём в 10:00, нужно прийти в 9:45. Когда?", back: "За пятнадцать минут до приёма", distractors: ["Через пятнадцать минут до приёма", "За пятнадцать минуты до приёма"], explanation: "за + accusativo … до + genitivo: за пятнадцать минут до приёма." },
    { front: "(7:00–8:00) Когда ты сдал анализ?", back: "Между семью и восемью", distractors: ["С семи до восьми", "Между семи и восьми"], explanation: "Сдал = un momento: между семью и восемью." },
    { front: "Врач: «Утром сначала анализ, потом еда. Ничего не ешьте прямо …»", back: "Перед анализом", distractors: ["Перед анализ", "Перед анализа"], explanation: "Subito prima: перед + strumentale: анализ → анализом." },
    { front: "Первый приём в понедельник, второй в пятницу, в среду я пью лекарство. Когда?", back: "Между приёмами", distractors: ["Между приёмов", "Между приёмам"], explanation: "Plurale: приёмы → приёмами." },
    { front: "Сначала приём, потом аптека. Когда я иду в аптеку?", back: "После приёма", distractors: ["Через приём", "После приём"], explanation: "Dopo un evento: после + genitivo: приём → приёма." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto: la giornata — между (ore ed eventi) + с … до / около / через / перед / к
// ============================================================
const p8cards = [
    { front: "(12:00–13:00) Когда ты пообедал?", back: "Между двенадцатью и часом", distractors: ["С двенадцати до часа", "Между двенадцати и часа"] },
    { front: "(9:00–17:00) Когда открыт банк?", back: "С девяти до пяти", distractors: ["Между девятью и пятью", "С девять до пяти"] },
    { front: "Работа до 18:00, ужин в 19:00, я звоню маме в 18:30. Когда?", back: "Между работой и ужином", distractors: ["Между работы и ужина", "Между работа и ужин"] },
    { front: "(10:00) Когда примерно ты проснёшься?", back: "Около десяти", distractors: ["Около десять", "Около десятью"] },
    { front: "(15:00–16:00) Когда закончилась встреча?", back: "Между тремя и четырьмя", distractors: ["С трёх до четырёх", "Между трёх и четырёх"] },
    { front: "Сейчас 9:00, автобус в 9:10. Когда автобус?", back: "Через десять минут", distractors: ["Через десять минуты", "После десяти минут"] },
    { front: "(20:00–21:00) Когда вернулся папа?", back: "Между восемью и девятью", distractors: ["С восьми до девяти", "Между восемь и девять"] },
    { front: "Я чищу зубы, а потом сразу сплю. Когда я чищу зубы?", back: "Перед сном", distractors: ["Перед сон", "Перед сна"] },
    { front: "Тренировки во вторник и в четверг, в среду я отдыхаю. Когда?", back: "Между тренировками", distractors: ["Между тренировок", "Между тренировкам"] },
    { front: "(7:00) К какому часу нужно быть на работе?", back: "К семи", distractors: ["К семь", "К семью"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelFo9() {
    const panel = document.getElementById('panel-fo-9');
    if (!panel) return;

    const container = panel.querySelector('#fo-9-cards-container');
    const prevBtn   = panel.querySelector('#fo-9-deck-prev');
    const nextBtn   = panel.querySelector('#fo-9-deck-next');
    const counterEl = panel.querySelector('#fo-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(14:00–15:00) Он позвонил ___.", options: ["с двух до трёх", "между двумя и тремя", "между двух и трёх"], answer: "между двумя и тремя" },
        { question: "(9:00–18:00) Магазин открыт ___.", options: ["с девяти до шести", "между девятью и шестью", "с девять до шести"], answer: "с девяти до шести" },
        { question: "(19:00) Точно не знаю, приду ___.", options: ["около семь", "около семью", "около семи"], answer: "около семи" },
        { question: "Обед в 13:00, ужин в 19:00, я гуляю в 16:00, то есть ___.", options: ["между обедом и ужином", "между обеда и ужина", "после обед"], answer: "между обедом и ужином" },
        { question: "Сейчас 10:00, урок в 10:30. Урок начнётся ___.", options: ["после получаса", "через полчаса", "через получаса"], answer: "через полчаса" },
        { question: "Мама: «Прямо ___ помой руки!»", options: ["до еды", "перед еда", "перед едой"], answer: "перед едой" },
        { question: "(18:00) Банк закрывается в шесть. Приходи ___.", options: ["до шести", "перед шестью", "до шесть"], answer: "до шести" },
        { question: "(20:00–21:00) Фильм закончился ___.", options: ["между восемь и девять", "с восьми до девяти", "между восемью и девятью"], answer: "между восемью и девятью" },
        { question: "(12:00) — К какому часу нужно освободить номер? — ___.", options: ["К полдень", "К полудню", "К полудня"], answer: "К полудню" },
        { question: "(16:45) — Сколько времени? — ___.", options: ["Без пятнадцати пять", "В без пятнадцати пять", "Между без пятнадцати пять"], answer: "Без пятнадцати пять" }
    ];
    const matchPairs = [
        { left: "(15:00–16:00) Он позвонил …", right: "между тремя и четырьмя" },
        { left: "(15:00–16:00) Урок идёт …", right: "с трёх до четырёх" },
        { left: "(15:00) Когда примерно?", right: "около трёх" },
        { left: "(15:00) К какому часу?", right: "к трём" },
        { left: "(15:00) Во сколько точно?", right: "в три часа" },
        { left: "(15:00) Сколько времени?", right: "три часа" },
        { left: "Сначала обед, потом прогулка. Прогулка — …", right: "после обеда" },
        { left: "Сразу потом обед. Мою руки …", right: "перед обедом" },
        { left: "Сейчас 14:00, урок в 15:00", right: "через час" },
        { left: "Урок в 15:00, я пришёл в 14:50", right: "за десять минут до урока" }
    ];
    const quizData = [
        { id: "fo9-w1", promptPrefix: "(13:00–14:00) Посылку принесли ", promptSuffix: ".", answers: ["между часом и двумя"] },
        { id: "fo9-w2", promptPrefix: "(10:00–19:00) Пункт выдачи работает ", promptSuffix: ".", answers: ["с десяти до семи", "с десяти до семи вечера", "с десяти утра до семи вечера", "с десяти до девятнадцати"] },
        { id: "fo9-w3", promptPrefix: "(17:00–19:00) Курьер приехал ", promptSuffix: ".", answers: ["между пятью и семью"] },
        { id: "fo9-w4", promptPrefix: "(20:00–22:00) Гости ушли ", promptSuffix: ".", answers: ["между восемью и десятью", "между восьмью и десятью"] },
        { id: "fo9-w5", promptPrefix: "Урок, перемена, урок. Я пью кофе на перемене, ", promptSuffix: ".", answers: ["между уроками"] },
        { id: "fo9-w6", promptPrefix: "Обед в 13:00, ужин в 19:00. Прогулка в 16:00 — ", promptSuffix: " обедом и ужином.", answers: ["между"] },
        { id: "fo9-w7", promptPrefix: "(6:00–7:00) Я проснулся ", promptSuffix: ".", answers: ["между шестью и семью"] },
        { id: "fo9-w8", promptPrefix: "(15:00) — Когда примерно ты придёшь? — ", promptSuffix: ".", answers: ["около трёх", "около трёх часов", "часа в три"] },
        { id: "fo9-w9", promptPrefix: "Сейчас 11:00, урок в 12:00. Урок начнётся ", promptSuffix: ".", answers: ["через час"] },
        { id: "fo9-w10", promptPrefix: "Каждый вечер в кровати я читаю. Я читаю ", promptSuffix: ".", answers: ["перед сном"] }
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
            card.className = 'fca01-card-container fo-9-card';
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
        container.querySelectorAll('.fo-9-card').forEach(card => {
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
                const card    = this.closest('.fo-9-card');
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
        container.querySelectorAll('.fo-9-card').forEach((c, i) => {
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
    'panel-fo-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-01', exercises: p1exercises }),
    'panel-fo-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-02', exercises: p2exercises }),
    'panel-fo-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-fo-03', exercises: p3exercises }),
    'panel-fo-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-fo-04', cards: p4cards }),
    'panel-fo-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-fo-05', cards: p5cards }),
    'panel-fo-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-fo-06', cards: p6cards }),
    'panel-fo-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-fo-07', cards: p7cards }),
    'panel-fo-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-fo-08', cards: p8cards }),
    'panel-fo-9': () => initPanelFo9()
};

initPanelManager({ initializers, enableAccessControl: true });
