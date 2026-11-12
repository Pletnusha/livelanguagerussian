import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// Struttura della pagina (identica a vezti-voziti-passato) —
// contenuti in sviluppo, riempiti panel per panel.
//
// PANEL 1 — DragDrop · public  · Coniugazione ВЕСТИ passato
// PANEL 2 — DragDrop · student · Coniugazione ВОДИТЬ passato
// PANEL 3 — GapText  · public  · Testo con lacune + glossario + spiegazioni
// PANEL 4 — GapText  · student · Testo con lacune + glossario (no spiegazioni)
// PANEL 5 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 6 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 7 — Mixed Quiz · public · задания собираются из блоков 1-6
// ============================================================

// ============================================================
// PANEL 1 — DragDrop · public · Coniugazione ВЕСТИ passato
// (вёл / вела / вело / вели) — condurre, direzione unica
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Вчера он {{1}} делегацию по музею два часа.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вёл" },
        explanation: "вёл = condurre in corso in una direzione, in quel momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Она {{1}} ребёнка за руку через дорогу.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вела" },
        explanation: "вела = un tragitto specifico, non un'abitudine ripetuta."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Собрание {{1}} к конфликту, это все чувствовали.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вело" },
        explanation: "вело = neutro (собрание), uso esteso di вести — 'portare a' un esito, non un movimento fisico."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Мы {{1}} туристов по узким улочкам старого города.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вели" },
        explanation: "вели = plurale, movimento in corso in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Катя {{1}} переговоры с поставщиком весь день.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вела" },
        explanation: "вела переговоры = espressione idiomatica (condurre trattative), femminile singolare."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Он {{1}} машину очень аккуратно по гололёду.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вёл" },
        explanation: "вёл машину = guidare (in quel momento specifico), maschile singolare."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Он {{1}} дневник каждый день в путешествии.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вёл" },
        explanation: "вёл дневник = espressione idiomatica (tenere un diario), maschile singolare."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Мы {{1}} детей в парк на праздник.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вели" },
        explanation: "вели = plurale, tragitto specifico in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Она {{1}} совещание, когда отключили свет.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вела" },
        explanation: "вела совещание = condurre una riunione, in corso quando è successo un evento."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕСТИ (passato).",
        text: "Он {{1}} слепого дедушку через оживлённый перекрёсток.",
        words: ["вёл", "вела", "вело", "вели"],
        correctAnswers: { 1: "вёл" },
        explanation: "вёл = condurre per mano in corso in una direzione, in quell'occasione."
    },
];

// ============================================================
// PANEL 2 — DragDrop · student · Coniugazione ВОДИТЬ passato
// (водил / водила / водили) — abitudine ripetuta
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Раньше он всегда {{1}} экскурсии по городу.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водил" },
        explanation: "водил = abitudine ripetuta nel passato, non un tragitto specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Она много лет {{1}} детей в художественную школу.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водила" },
        explanation: "водила = abitudine protratta nel tempo (per molti anni)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Мы {{1}} гостей по всем главным достопримечательностям.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водили" },
        explanation: "водили = abitudine ripetuta (ogni volta con nuovi ospiti)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Он {{1}} машину десять лет без единой аварии.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водил" },
        explanation: "водил = abitudine/capacità protratta nel tempo (per dieci anni)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Она {{1}} группы туристов каждое лето.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водила" },
        explanation: "водила = abitudine ripetuta (ogni estate)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Раньше мы {{1}} собаку в парк каждое утро.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водили" },
        explanation: "водили = abitudine ripetuta (ogni mattina)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Он никогда не {{1}} собаку без поводка.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водил" },
        explanation: "водил = abitudine/fatto generale (mai, in generale), non un'azione in corso."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Она {{1}} внуков в зоопарк по выходным.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водила" },
        explanation: "водила = abitudine ripetuta (nei weekend)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Мы {{1}} делегации на завод каждый месяц.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водили" },
        explanation: "водили = abitudine ripetuta (ogni mese)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОДИТЬ (passato).",
        text: "Он {{1}} дружбу с очень странными людьми.",
        words: ["водил", "водила", "водили"],
        correctAnswers: { 1: "водил" },
        explanation: "водил дружбу = espressione idiomatica (frequentare, essere amico di), maschile singolare."
    },
];

// ============================================================
// PANEL 3 — GapText · public · testo «Лена учится водить»
// ============================================================
const p3instruction = "Leggi il racconto e scrivi la forma corretta del verbo (водить/вести, ходить/идти, ездить/ехать) al presente o al passato. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";
const p3paragraphs = [
    "В восемнадцать лет Лена {{1}} машину. Папину, на даче, два лета. Потом десять лет не [[садилась за руль::si metteva al volante]]: в Москве есть такси, а в такси можно [[краситься::truccarsi]].",
    "В сентябре Лена купила машину — белую, с бежевым [[салоном::interni (dell'auto)]], под цвет новой сумки. Неделю машина стояла у подъезда. Лена {{2}} вокруг неё и фотографировала. Ехать на ней было страшно.",
    "<strong>1.1 План</strong>",
    "Узнав о машине, Тимур {{3}} себя как [[лидер партийного большинства::leader della maggioranza di partito]]: решения принимал сам, остальных [[ставил в известность::informava a cose fatte]]. Он составил план: автошкола три раза в неделю плюс его личные занятия по выходным.",
    "— Зачем тебе инструктор, если есть я?",
    "— У инструктора есть [[педаль тормоза::pedale del freno]], — ответила Лена.",
    "<strong>1.2 Автошкола</strong>",
    "Занятия {{4}} Пётр Михайлович — инструктор с тридцатилетним [[стажем::anni di esperienza]] и лицом человека, который всё уже видел. На третьем занятии Лена {{5}} машину по Садовому кольцу, когда вдруг увидела [[витрину::vetrina]] с новой коллекцией Prada. Пётр Михайлович нажал на тормоз раньше, чем она успела сказать «ой».",
    "— Елена, вы {{6}} машину или смотрите витрины? — спросил он без всякой надежды.",
    "<strong>1.3 Тимур</strong>",
    "По выходным Тимур {{7}} с Леной на пустую парковку у торгового центра. Он {{8}} дневник её ошибок: таблица, три цвета, графики. Каждую субботу — тест по ошибкам за неделю.",
    "— Ошибка номер двенадцать: парковка задним ходом. Повторяем.",
    "— Тимур, я двадцать минут парковалась задним ходом.",
    "— Двадцать две. Я [[засекал::cronometravo]].",
    "<strong>1.4 Пятница</strong>",
    "В пятницу у Кати банда слушала [[отчёт::resoconto]] Тимура: тридцать восемь ошибок, [[динамика::andamento]] положительная.",
    "Женя отпил вина.",
    "— Тимур, ты как Ленин, который {{9}} нас в светлое будущее. Только оно не кажется мне светлым. Особенно на парковке.",
    "Андрей Лене сочувствовал.",
    "— Я машину никогда не {{10}}. И ничего, жив. Двадцать лет {{11}} на велосипеде — и ни одного теста.",
    "<strong>1.5 Экзамен</strong>",
    "Экзамен Лена сдала со второго раза. В первый раз она {{12}} машину идеально, пока [[экзаменатор::esaminatore]] не попросил припарковаться задним ходом. Во второй раз Тимура в машину не пустили.",
    "В субботу Лена в первый раз {{13}} машину сама — без инструктора и без Тимура. Банда {{14}} к Кате на дачу. Тимур сидел сзади и молчал. На коленях у него лежал блокнот.",
    "— Тимур, что ты пишешь?",
    "— Ничего. Для статистики.",
    "Дневник он {{15}} до самой дачи. [[По привычке::per abitudine]].",
];
const p3gaps = {
    1: {
        answers: ["водила"],
        explanation: "competenza nel passato: sapeva guidare, poi il cerchio si è chiuso (per dieci anni non ha guidato).",
    },
    2: {
        answers: ["ходила"],
        explanation: "movimento senza una direzione, intorno alla macchina.",
    },
    3: {
        answers: ["вёл"],
        explanation: "«comportarsi» (вести себя): processo astratto, sempre вести.",
    },
    4: {
        answers: ["вёл"],
        explanation: "condurre le lezioni: evento astratto con un inizio e una fine, вести anche se le lezioni sono tante.",
    },
    5: {
        answers: ["вела"],
        explanation: "guida in corso, interrotta da un evento improvviso.",
    },
    6: {
        answers: ["ведёте"],
        explanation: "guida in corso adesso, in questo momento.",
    },
    7: {
        answers: ["ездил"],
        explanation: "abitudine (ogni fine settimana, andata e ritorno).",
    },
    8: {
        answers: ["вёл"],
        explanation: "tenere un diario: attività astratta continua, sempre вести.",
    },
    9: {
        answers: ["ведёт"],
        explanation: "una sola direzione, verso una meta.",
    },
    10: {
        answers: ["водил"],
        explanation: "competenza: non ha mai saputo guidare.",
    },
    11: {
        answers: ["езжу"],
        explanation: "abitudine al presente (da vent'anni).",
    },
    12: {
        answers: ["вела"],
        explanation: "processo in corso, interrotto dalla richiesta dell'esaminatore.",
    },
    13: {
        answers: ["вела"],
        explanation: "un viaggio concreto, in una direzione, in quel momento.",
    },
    14: {
        answers: ["ехала"],
        explanation: "un tragitto concreto verso la dacia.",
    },
    15: {
        answers: ["вёл"],
        explanation: "tenere un diario: processo continuo fino alla dacia.",
    },
};

// ============================================================
// PANEL 4 — GapText · student · testo «Катя и итальянцы»
// ============================================================
const p4instruction = "Leggi il racconto e scrivi la forma corretta del verbo (водить/вести, ходить/идти, ездить/ехать) al presente o al passato. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";
const p4paragraphs = [
    "В октябре к Кате приехали друзья из Милана — Лука, Джулия и Франческа. Они хотели «посмотреть Москву». Катя хотела показать им всё.",
    "<strong>1.1 Первый день</strong>",
    "В первый день Катя {{1}} их по Кремлю. Четыре часа, три [[собора::cattedrale]], Царь-пушка. У каждой [[иконы::icona]] Катя останавливалась и {{2}} [[лекцию::lezione]]: даты, цари, архитекторы. Итальянцы [[кивали::annuivano]]. Они оделись так, будто в Москве сорокаградусный [[мороз::gelo]]: [[дублёнки::montoni (cappotti di montone)]], меховые [[шапки::colbacchi]]. А в Кремле было плюс восемь и шёл дождь.",
    "<strong>1.2 Второй день</strong>",
    "Во второй день Катя {{3}} их в Третьяковку и в Пушкинский. Она {{4}} их по залу с иконами, когда Лука вдруг сел на [[скамейку::panchina]].",
    "— Катя, я больше не могу. Я в отпуске.",
    "— Ещё два зала, — сказала Катя. — Это Рублёв. Ты что, не хочешь увидеть Рублёва?",
    "Лука хотел есть.",
    "<strong>1.3 Тимур</strong>",
    "Вечером в чат написал Тимур. Он, как обычно, {{5}} себя как лидер партийного большинства: составил для итальянцев свой маршрут. Шесть часов, перерыв десять минут, сбор в 8:00.",
    "«Завтра их {{6}} я. Катя, ты слишком медленно {{7}} экскурсии».",
    "«Тимур, это экскурсия, а не [[марш-бросок::marcia forzata]]».",
    "Итальянцы прочитали переписку через переводчик в телефоне и тихо решили, что завтра заболеют.",
    "<strong>1.4 Третий день</strong>",
    "На третий день Катя {{8}} группу к Новодевичьему [[монастырю::monastero]]. Шёл мелкий дождь. Франческа {{9}} последней и смотрела на все кафе по дороге.",
    "— Катя, — очень вежливо сказала Джулия. — Ты три дня {{10}} лекцию по истории России. Это очень интересно. Но мы не готовимся к экзамену. Мы хотим борщ.",
    "Катя остановилась. Она искренне не понимала, что случилось. В прошлом году она {{11}} по Москве друзей из Петербурга — и все были в восторге. Правда, потом они пропали на полгода.",
    "<strong>1.5 Андрей</strong>",
    "Спас всех Андрей. Он {{12}} мимо на велосипеде, увидел итальянцев в мокрых дублёнках и всё понял.",
    "— Пойдёмте. Я знаю место.",
    "Андрей отвёл всех в ресторан русской кухни за углом: [[самовар::samovar]], борщ, пельмени, [[селёдка под шубой::insalata di aringa «sotto la pelliccia»]]. По меню он {{13}} их так же, как Катя по Третьяковке, только быстрее:",
    "— Это борщ. Это пельмени. Это селёдка под шубой. Не спрашивайте почему. Просто ешьте.",
    "Лука ел третью тарелку пельменей и смотрел на Андрея тем взглядом, которого Катя три дня ждала у икон Андрея Рублёва.",
    "— Андрей, а завтра ты нас куда {{14}}?",
    "Катя [[обиделась::si è offesa]] ровно на один вечер. В этот вечер она {{15}} свой блог и написала длинный пост: «Итальянцы и Рублёв: почему мы не понимаем друг друга». Лайк поставил только Тимур.",
];
const p4gaps = {
    1: {
        answers: ["водила"],
    },
    2: {
        answers: ["вела"],
    },
    3: {
        answers: ["водила"],
    },
    4: {
        answers: ["вела"],
    },
    5: {
        answers: ["вёл"],
    },
    6: {
        answers: ["веду"],
    },
    7: {
        answers: ["водишь"],
    },
    8: {
        answers: ["вела"],
    },
    9: {
        answers: ["шла"],
    },
    10: {
        answers: ["ведёшь"],
    },
    11: {
        answers: ["водила"],
    },
    12: {
        answers: ["ехал"],
    },
    13: {
        answers: ["вёл"],
    },
    14: {
        answers: ["ведёшь"],
    },
    15: {
        answers: ["вела"],
    },
};

// ============================================================
// PANEL 5 — GapText · paid · testo «Женя и хаски»
// ============================================================
const p5instruction = "Leggi il racconto e scrivi la forma corretta del verbo (водить/вести, ходить/идти) al presente o al passato. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";
const p5paragraphs = [
    "Друг Жени, Кирилл, уехал на два месяца в Нью-Йорк — работать. Перед отъездом он привёз Жене своего хаски. Графу два года, у него голубые глаза и двадцать пять килограммов энергии.",
    "— Он спокойный, — сказал Кирилл. — Я его {{1}} гулять два раза в день. Утром и вечером. Всё.",
    "Кирилл улетел. Спокойным Граф был ровно до утра.",
    "<strong>1.1 Утро</strong>",
    "В первое утро Женя {{2}} Графа по бульвару. Точнее, думал, что ведёт. Через пять минут стало ясно: прогулку {{3}} Граф — по своему маршруту, известному только ему. Женя попробовал [[дёрнуть::strattonare]] поводок. Граф обернулся и посмотрел на Женю так, что тот [[ретировался::ha battuto in ritirata]]. Признал чужое лидерство. Остаток прогулки Женя {{4}} следом и делал вид, что так и задумано.",
    "К концу недели стало ясно: не Женя {{5}} Графа гулять. Граф {{6}} Женю. В шесть утра Граф приносит [[поводок::guinzaglio]]. В семь — миску. Женя понял, что он здесь ничего не решает.",
    "<strong>1.2 Дневник</strong>",
    "Женя всегда {{7}} дневник питания: граммы, калории, белки, жиры, [[углеводы::carboidrati]]. Теперь он {{8}} два дневника — свой и Графа. У Графа рацион лучше. Женю это особенно [[расстраивает::dispiace, irrita]].",
    "<strong>1.3 Кафе</strong>",
    "В субботу Тимур {{9}} всех в веганское кафе. Как лидер партийного большинства, он сам выбрал место, время и меню. Граф {{10}} за Тимуром — без поводка — и с [[любопытством::curiosità]] смотрел на него снизу вверх. Женю это [[добило::gli ha dato il colpo di grazia]]. Он обиделся.",
    "В кафе Женя не мог начать есть: приложение не знало, что такое веганская шаурма. Пока Женя {{11}} [[подсчёт::conteggio]] калорий, Катя [[скормила::ha dato da mangiare]] Графу половину его шаурмы.",
    "Тимур тем временем двадцать минут {{12}} переговоры с официантом: настоящий лидер должен добиться скидки. Он добился. Десять процентов — при условии, что собака уйдёт.",
    "Андрей под столом кормил Графа сосисками.",
    "— Андрей, у него рацион!",
    "— У него жизнь, — сказал Андрей.",
    "Доедал Женя последним. То, что оставил Граф.",
    "<strong>1.4 Вечер</strong>",
    "Вечером Граф {{13}} Женю домой через парк — самой длинной дорогой. Тимур {{14}} рядом и объяснял:",
    "— Женя, собака должна знать, кто её {{15}}. Нужна [[дисциплина::disciplina]]. Я составлю план.",
    "Граф посмотрел на Тимура. Потом на Женю. Потом лёг посреди дорожки.",
    "Вечером Кирилл написал из Нью-Йорка: «Как вы там?»",
    "Женя ответил честно: «Нормально. Он меня [[воспитывает::educa]]».",
];
const p5gaps = {
    1: {
        answers: ["вожу"],
    },
    2: {
        answers: ["вёл"],
    },
    3: {
        answers: ["вёл"],
    },
    4: {
        answers: ["шёл"],
    },
    5: {
        answers: ["водит"],
    },
    6: {
        answers: ["водит"],
    },
    7: {
        answers: ["вёл"],
    },
    8: {
        answers: ["ведёт"],
    },
    9: {
        answers: ["вёл"],
    },
    10: {
        answers: ["шёл"],
    },
    11: {
        answers: ["вёл"],
    },
    12: {
        answers: ["вёл"],
    },
    13: {
        answers: ["вёл"],
    },
    14: {
        answers: ["шёл"],
    },
    15: {
        answers: ["водит"],
    },
};

// ============================================================
// PANEL 6 — GapText · paid · testo «Грибы»
// ============================================================
const p6instruction = "Leggi il racconto e scrivi la forma corretta del verbo (водить/вести, ходить/идти, бегать/бежать, ездить/ехать, везти/возить, нести/носить) al presente o al passato. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";
const p6paragraphs = [
    "В пятницу вечером Тимур написал в чат: «Суббота. Лес. Грибы. Сбор в 7:00 на вокзале». Обсуждения не было.",
    "— Тимур, ты вообще когда-нибудь {{1}} людей за грибами? — спросила Катя.",
    "— Каждую осень {{2}}. В детстве. Папу.",
    "— Это папа тебя водил.",
    "— Но маршрут выбирал я.",
    "— Какой маршрут? Грибной? — [[съязвила::ha detto con sarcasmo]] Катя.",
    "<strong>1.1 Дорога</strong>",
    "До леса {{3}} час на электричке. Графа {{4}} в [[тамбуре::vestibolo (del treno)]]: в вагон собаку такого размера контролёр не пустил. Женя стоял с ним и смотрел, как мимо проплывает Подмосковье. Пешком он ходит каждый день и любит это. Но не в семь утра.",
    "Корзины {{5}} все. Тимур купил их вчера — шесть одинаковых [[плетёных::di vimini]] корзин. «Пакеты — это несерьёзно». Ещё он раздал всем план: маршрут, время, [[норма::quota]] — килограмм грибов на человека. Грибы он собирался определять по приложению. Лена была в новых [[треккинговых ботинках::scarponi da trekking]], купленных вчера специально для леса. Аня держала на коленях термос.",
    "<strong>1.2 Лес</strong>",
    "В лесу Тимур {{6}} всех по навигатору: впереди он, за ним банда, сзади Граф. Каждые пять минут приложение находило гриб и сообщало: «Съедобный. Вероятность 54 %».",
    "— Это [[мухомор::ovolaccio (fungo velenoso)]], — говорил Андрей.",
    "Через час навигатор потерял сеть. Тимур {{7}} группу ещё час — уверенно и не в ту сторону. Лена {{8}} последней: ботинки [[натёрли::hanno fatto le vesciche]] ноги.",
    "— Мы правильно {{9}}? — спросила она.",
    "— Мы правильно {{10}}, — сказал Тимур. — До того поворота.",
    "— Тимур, — сказала Катя, — ты нас {{11}} в светлое будущее?",
    "— В грибное.",
    "Женя {{12}} подсчёт шагов: двадцать четыре тысячи. Рекорд. Это его не радовало.",
    "<strong>1.3 Граф</strong>",
    "Тогда Граф вдруг повернул налево. Катя [[спохватилась::si è accorta all'improvviso]] и начала его звать:",
    "— Граф! Граф, стоять!",
    "Граф гавкнул и не остановился. Более того — побежал. Катя {{13}} за ним. За Катей, хромая, {{14}} Лена, за Леной — Женя, за Женей — Андрей. [[Цепочку::fila]] бегущих [[замыкал::chiudeva (la fila)]] Тимур.",
    "Граф остановился и сел.",
    "— Боже, — закричала Катя. — Здесь столько [[белых::porcini]]!",
    "Пока все собирали белые, Граф ждал. Потом гавкнул и снова побежал. Теперь банду {{15}} он. Граф остановился на поляне, где было столько [[опят::chiodini (funghi)]], что приложение Тимура [[зависло::si è bloccato]]. Корзины наполнились за десять минут. Граф снова гавкнул и побежал. Через пятнадцать минут все стояли на платформе. Граф довольно [[вилял::scodinzolava]] хвостом и [[ластился::faceva le feste]] к Кате.",
    "<strong>1.4 Воскресенье</strong>",
    "Тимур молчал до самой Москвы. В воскресенье он прислал в чат новое расписание: «Суббота. Грибы-2. [[Ведущий::capogruppo, guida]] — Граф. Заместитель — Тимур».",
    "— Ну вот, — сказал Женя и посмотрел на Графа. — Теперь он {{16}} всех. Не только меня.",
    "Граф зевнул. Он и так это знал. А в понедельник Женя {{17}} два дневника питания и третий — грибной.",
];
const p6gaps = {
    1: {
        answers: ["водил"],
    },
    2: {
        answers: ["водил"],
    },
    3: {
        answers: ["ехали"],
    },
    4: {
        answers: ["везли"],
    },
    5: {
        answers: ["несли"],
    },
    6: {
        answers: ["вёл"],
    },
    7: {
        answers: ["вёл"],
    },
    8: {
        answers: ["шла"],
    },
    9: {
        answers: ["идём"],
    },
    10: {
        answers: ["шли"],
    },
    11: {
        answers: ["ведёшь"],
    },
    12: {
        answers: ["вёл"],
    },
    13: {
        answers: ["бежала"],
    },
    14: {
        answers: ["бежала"],
    },
    15: {
        answers: ["вёл"],
    },
    16: {
        answers: ["водит"],
    },
    17: {
        answers: ["вёл"],
    },
};

// ============================================================
// PANEL 7 — Quiz misto (multiple choice + match + write) · public
// 30 frasi dai testi dei pannelli 3-6
// ============================================================
function initPanel7() {
    const panel = document.getElementById('panel-past-vd-07');
    if (!panel) return;

    const container = panel.querySelector('#past-vd-07-cards-container');
    const prevBtn   = panel.querySelector('#past-vd-07-deck-prev');
    const nextBtn   = panel.querySelector('#past-vd-07-deck-next');
    const counterEl = panel.querySelector('#past-vd-07-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "В восемнадцать лет Лена ___ машину. Потом десять лет не садилась за руль.", options: ["водила", "вела", "ведёт"], answer: "водила" },
        { question: "Занятия в автошколе ___ Пётр Михайлович.", options: ["водил", "вёл", "водит"], answer: "вёл" },
        { question: "Лена ___ машину по Садовому, когда вдруг увидела витрину Prada.", options: ["водила", "водит", "вела"], answer: "вела" },
        { question: "Тимур ___ дневник Лениных ошибок: таблица, три цвета, графики.", options: ["вёл", "водил", "водит"], answer: "вёл" },
        { question: "Во вторник Катя ___ итальянцев в Третьяковку, вечером они вернулись без сил.", options: ["вела", "водила", "ведёт"], answer: "водила" },
        { question: "У каждой иконы Катя ___ лекцию: даты, цари, архитекторы.", options: ["водила", "водит", "вела"], answer: "вела" },
        { question: "Женя всегда ___ дневник питания.", options: ["вёл", "водил", "водит"], answer: "вёл" },
        { question: "В первое утро Женя ___ Графа по бульвару и думал, что он главный.", options: ["водит", "вёл", "ведёт"], answer: "вёл" },
        { question: "Тимур двадцать минут ___ переговоры с официантом.", options: ["водил", "водит", "вёл"], answer: "вёл" },
        { question: "— Тимур, ты когда-нибудь ___ людей за грибами?", options: ["водил", "вёл", "ведёшь"], answer: "водил" },
    ];
    const matchPairs = [
        { left: "Граф каждое утро ___ Женю гулять.", right: "водит" },
        { left: "— Мы правильно ___? — спросила Лена.", right: "идём" },
        { left: "В субботу обратно банду ___ Граф.", right: "вёл" },
        { left: "Катя ___ за Графом через лес.", right: "бежала" },
        { left: "Андрей машину никогда не ___.", right: "водил" },
        { left: "— Тимур, ты нас ___ в светлое будущее?", right: "ведёшь" },
        { left: "В субботу Лена ___ машину сама, а Тимур сидел сзади.", right: "вела" },
        { left: "В прошлом году Катя ___ по Москве друзей из Петербурга.", right: "водила" },
        { left: "Женя теперь ___ два дневника — свой и Графа.", right: "ведёт" },
        { left: "— Мы правильно ___, — сказал Тимур. — До того поворота.", right: "шли" },
    ];
    const quizData = [
        { id: "q01", promptPrefix: "По выходным Тимур ", promptSuffix: " с Леной на пустую парковку.", answers: ["ездил"] },
        { id: "q02", promptPrefix: "До экзамена Лена ", promptSuffix: " машину идеально — пока не дошло до парковки.", answers: ["вела"] },
        { id: "q03", promptPrefix: "«Завтра итальянцев ", promptSuffix: " я», — написал Тимур.", answers: ["веду"] },
        { id: "q04", promptPrefix: "— Катя, ты слишком медленно ", promptSuffix: " экскурсии.", answers: ["водишь"] },
        { id: "q05", promptPrefix: "Франческа ", promptSuffix: " последней и смотрела на кафе.", answers: ["шла"] },
        { id: "q06", promptPrefix: "— Ты три дня ", promptSuffix: " лекцию по истории России.", answers: ["ведёшь", "ведешь"] },
        { id: "q07", promptPrefix: "— Я его ", promptSuffix: " гулять два раза в день, — сказал Кирилл.", answers: ["вожу"] },
        { id: "q08", promptPrefix: "Вечером Граф ", promptSuffix: " Женю домой самой длинной дорогой.", answers: ["вёл", "вел"] },
        { id: "q09", promptPrefix: "До леса все ", promptSuffix: " час на электричке.", answers: ["ехали"] },
        { id: "q10", promptPrefix: "Графа ", promptSuffix: " в тамбуре: в вагон его не пустили.", answers: ["везли"] },
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ');
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
            card.className = 'fca01-card-container past-vd-07-card';
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
                        feedbackEl.textContent = "✨ Esatto!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "🎉 Tutto abbinato! 🎉";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "Sbagliato";
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
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">VERIFICA</button></div>
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
        container.querySelectorAll('.past-vd-07-card').forEach(card => {
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
                const card    = this.closest('.past-vd-07-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === ans);
                if (isCorrect) {
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                    input.disabled = true;
                    this.disabled  = true;
                    fb.textContent = 'Corretto!';
                    fb.className   = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = 'Sbagliato. Riprova.';
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
        container.querySelectorAll('.past-vd-07-card').forEach((c, i) => {
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
    'panel-past-vd-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-vd-01', exercises: p1exercises }),
    'panel-past-vd-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-vd-02', exercises: p2exercises }),
    'panel-past-vd-03': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vd-03', instruction: p3instruction, paragraphs: p3paragraphs, gaps: p3gaps, showHints: false }),
    'panel-past-vd-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vd-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-vd-05': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vd-05', instruction: p5instruction, paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    'panel-past-vd-06': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vd-06', instruction: p6instruction, paragraphs: p6paragraphs, gaps: p6gaps, showHints: false }),
    'panel-past-vd-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: true });
