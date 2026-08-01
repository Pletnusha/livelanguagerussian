import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Spряжение ХОДИТЬ passato
// (ходил / ходила / ходило / ходили)
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Раньше он {{1}} в спортзал три раза в неделю.",
        words: ["ходил", "ходила", "ходили"],
        correctAnswers: { 1: "ходил" },
        explanation: "ходил = azione abituale ripetuta nel passato (tre volte a settimana), non un tragitto singolo in un momento preciso."
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Она всегда {{1}} на рынок по субботам.",
        words: ["ходила", "ходил", "ходили"],
        correctAnswers: { 1: "ходила" },
        explanation: "ходила = abitudine ripetuta (ogni sabato), non un movimento in corso in un momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "В детстве мы часто {{1}} к бабушке.",
        words: ["ходили", "ходил", "ходила"],
        correctAnswers: { 1: "ходили" },
        explanation: "ходили = abitudine ripetuta nell'infanzia (spesso), non un tragitto singolo in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Он никогда не {{1}} к врачу.",
        words: ["ходил", "ходила", "ходили"],
        correctAnswers: { 1: "ходил" },
        explanation: "ходил = azione generale/abituale (mai andato, in generale), non un viaggio specifico in corso in un momento preciso."
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Лена {{1}} на танцы каждую неделю.",
        words: ["ходила", "ходил", "ходили"],
        correctAnswers: { 1: "ходила" },
        explanation: "ходила = abitudine ripetuta (ogni settimana), non un tragitto in corso in quel momento."
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Они {{1}} в один и тот же ресторан каждую пятницу.",
        words: ["ходили", "ходил", "ходила"],
        correctAnswers: { 1: "ходили" },
        explanation: "ходили = abitudine ripetuta (ogni venerdì) — andata e ritorno ripetuti nel tempo, non un unico tragitto."
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Я {{1}} в театр ещё ребёнком.",
        words: ["ходил", "ходила", "ходили"],
        correctAnswers: { 1: "ходил" },
        explanation: "ходил = azione generale riferita a un periodo della vita (da bambino), non un singolo tragitto in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Бабушка {{1}} к врачу каждую неделю.",
        words: ["ходила", "ходил", "ходили"],
        correctAnswers: { 1: "ходила" },
        explanation: "ходила = abitudine ripetuta (ogni settimana), non un tragitto in corso in un momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Дети {{1}} в школу пешком.",
        words: ["ходили", "ходил", "ходила"],
        correctAnswers: { 1: "ходили" },
        explanation: "ходили = fatto abituale/generale (andavano a scuola a piedi), non un tragitto specifico in un momento preciso."
    },
    {
        instruction: "Выбери правильную форму глагола ХОДИТЬ (passato).",
        text: "Он {{1}} на работу каждый день в одно и то же время.",
        words: ["ходил", "ходила", "ходили"],
        correctAnswers: { 1: "ходил" },
        explanation: "ходил = abitudine quotidiana ripetuta, non un movimento in corso in un momento preciso."
    },
];

// ============================================================
// PANEL 2 — DragDrop · student · Spряжение ИДТИ passato
// (шёл / шла / шло / шли)
// ============================================================
const p2exercises = [
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Я {{1}} в библиотеку, когда встретил Катю.",
        words: ["шёл", "шла", "шли"],
        correctAnswers: { 1: "шёл" },
        explanation: "шёл = movimento in corso in un momento preciso, in una sola direzione (mentre andava, ha incontrato Katja)."
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Она {{1}} по улице и улыбалась.",
        words: ["шла", "шёл", "шли"],
        correctAnswers: { 1: "шла" },
        explanation: "шла = movimento in corso in un momento preciso (camminava per strada proprio in quel momento)."
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Мы {{1}} домой после концерта пешком.",
        words: ["шли", "шёл", "шла"],
        correctAnswers: { 1: "шли" },
        explanation: "шли = movimento in una sola direzione (verso casa) — un tragitto specifico dopo il concerto, non un'abitudine."
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Время {{1}} медленно.",
        words: ["шло", "шёл", "шли"],
        correctAnswers: { 1: "шло" },
        explanation: "шло = uso figurato di идти (il tempo passava lentamente) — un processo in corso, non un'abitudine ripetuta."
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Он {{1}} к выходу, не оглядываясь.",
        words: ["шёл", "шла", "шли"],
        correctAnswers: { 1: "шёл" },
        explanation: "шёл = movimento in corso in una sola direzione (verso l'uscita), in un momento preciso."
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Она {{1}} в магазин, когда я её заметил.",
        words: ["шла", "шёл", "шли"],
        correctAnswers: { 1: "шла" },
        explanation: "шла = movimento in corso in un momento preciso, in una sola direzione (mentre andava al negozio)."
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Они {{1}} на вечеринку вместе.",
        words: ["шли", "шёл", "шла"],
        correctAnswers: { 1: "шли" },
        explanation: "шли = movimento in corso in una sola direzione, verso la festa."
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Собрание {{1}} уже два часа.",
        words: ["шло", "шёл", "шли"],
        correctAnswers: { 1: "шло" },
        explanation: "шло = uso figurato di идти (la riunione proseguiva/durava) — processo in corso, non un tragitto fisico."
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Дождь {{1}} всю ночь.",
        words: ["шёл", "шла", "шли"],
        correctAnswers: { 1: "шёл" },
        explanation: "шёл = uso figurato di идти (pioveva) — azione continua per tutta la notte, non un'abitudine ripetuta."
    },
    {
        instruction: "Completa con la forma corretta di ИДТИ al passato.",
        text: "Они уже {{1}}, когда мы их позвали.",
        words: ["шли", "шёл", "шла"],
        correctAnswers: { 1: "шли" },
        explanation: "шли = movimento già in corso in un momento preciso (stavano già camminando) quando li abbiamo chiamati."
    },
];

// ============================================================
// PANEL 3 — GapText · public · Testo connesso con lacune + glossario
// Traduzione cliccabile delle espressioni idiomatiche/complesse
// (showHints: false — nessun infinito accanto al gap).
// Тестируются passato (шёл/шла, ходила/ходили), presente
// (хожу/ходишь/иду/ходит) e infinito (идти/ходить) — тоже часть
// тренировки, не оставляем как обычный текст.
// ============================================================
const p3instruction = "Leggi il racconto e scrivi la forma corretta del verbo, al presente (хожу/ходишь/ходит, иду), al passato (ходил/ходила/ходили, шёл/шла) o all'infinito (идти/ходить). Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p3paragraphs = [
    "Суббота, утро. Андрей на кухне с чашкой кофе. Лена [[листает::sfoglia (le ricette)]] рецепты. Завтра день рождения Кати — надо готовить.",
    "— Рынок или гипермаркет? — спросила Лена.",
    "— Я на рынок {{7}} только за сыром, — Андрей [[оторвался от чашки::si è staccato dalla tazza per un attimo]]. — К одной женщине. Уже полгода к ней {{8}}. А так — нет. Я по субботам пешком через [[пол-Москвы::mezza Mosca]] не хочу {{15}}. [[Смысл?::Che senso ha?]]",
    "— А я вчера {{1}} на рынок с Аней, — Лена [[отложила::ha messo da parte (il telefono)]] телефон. — Клубника, зелень, помидоры. Мы два часа {{2}} по рядам — и всё. [[Весь стол готов::tutta la tavola è pronta (il cibo è pronto)]].",
    "— Ты {{9}} по рынку два часа, а я {{10}} в гипермаркет. Тридцать минут — и я дома.",
    "— И [[продукты пластиковые::i prodotti sono \"di plastica\" (finti, di scarsa qualità)]], — Лена улыбнулась.",
    "— А ты вчера {{3}} до рынка сколько? Полчаса?",
    "<strong>1.2</strong>",
    "Лена и Андрей [[переглянулись::si sono scambiati uno sguardo]].",
    "— Кстати, как думаешь, — Андрей посмотрел в потолок, — тирамису в гипермаркете [[нормальное бывает::capita che sia buono / a volte è buono]]?",
    "— Какое тирамису?! — Лена [[чуть не подавилась::quasi si è strozzata]] кофе. — Для тирамису нужно маскарпоне, а не «[[продукт творожный::\"prodotto a base di cagliata\", come scritto ironicamente su un'etichetta]]».",
    "— Я просто спросил, — Андрей [[пожал плечами::ha alzato le spalle]]. — В прошлую субботу я {{4}} мимо [[кондитерской::pasticceria]], там [[витрина::vetrina]] — итальянские десерты. Красиво. Но {{16}} до неё сорок минут. А до гипермаркета десять. [[Вот и думаю::Ecco perché ci penso]].",
    "<strong>1.3</strong>",
    "Вошла Катя и [[молча::in silenzio]] посмотрела на пустой стол.",
    "— Вы уже {{5}} за продуктами?",
    "— Нет, — Андрей взял ключи от машины. — Мы [[обсуждаем::discutiamo]], кто куда {{11}}.",
    "— Понятно, — Катя открыла холодильник. — Я вчера {{6}} в «Азбуку вкуса». Пармезан, [[рукола::rucola]], хлеб. Десять минут от дома. По субботам я в магазин {{12}}, а не пешком через весь город — у меня итальянский в девять утра.",
    "— Ты за сыром в «Азбуку» {{14}}?! — Лена не поверила.",
    "— А что? Пармезан там такой же, как на рынке. И мне не надо {{17}} к нему через пол-Москвы.",
    "— [[А душа?::E il piacere del rito? (lett. \"E l'anima?\")]] — Лена посмотрела на Катю.",
    "— [[Душа в субботу спит::L'anima dorme di sabato — espressione figurata: manca il piacere del rito]]. Как и я, когда в магазин не {{13}}.",
];

const p3gaps = {
    1: {
        answers: ["ходила"],
        explanation: "ходила = andata e tornata dal mercato (viaggio di andata e ritorno completato), non un'azione in corso in un momento preciso.",
    },
    2: {
        answers: ["ходили"],
        explanation: "ходили = movimento senza una sola direzione, andare avanti e indietro tra le bancarelle per un periodo di tempo (due ore) — non un tragitto singolo.",
    },
    3: {
        answers: ["шла"],
        explanation: "шла = movimento in una sola direzione verso il mercato — si chiede quanto tempo ci ha messo per arrivarci (un tragitto specifico, non un'abitudine).",
    },
    4: {
        answers: ["шёл"],
        explanation: "шёл = movimento in corso in un momento preciso, in una sola direzione (stava passando davanti alla pasticceria); forma maschile perché parla Андрей.",
    },
    5: {
        answers: ["ходили"],
        explanation: "ходили = siete già andati e tornati (viaggio di andata e ritorno completato), non un tragitto in corso in un momento preciso.",
    },
    6: {
        answers: ["ходила"],
        explanation: "ходила = sono andata e tornata dal negozio (azione completata, andata+ritorno), non un movimento in corso in un momento specifico.",
    },
    7: {
        answers: ["хожу"],
        explanation: "хожу = abitudine al presente (vado sempre e solo per il formaggio), non un movimento in corso adesso.",
    },
    8: {
        answers: ["хожу"],
        explanation: "хожу = abitudine ripetuta al presente (da mezzo anno), non un tragitto in corso in questo momento.",
    },
    9: {
        answers: ["ходишь"],
        explanation: "ходишь = movimento senza una sola direzione al presente (giri tra le bancarelle per due ore), non un tragitto singolo.",
    },
    10: {
        answers: ["иду"],
        explanation: "иду = movimento in corso adesso, in una sola direzione (verso l'ipermercato).",
    },
    11: {
        answers: ["ходит"],
        explanation: "ходит = uso generale/abituale al presente (chi va dove abitualmente), non un tragitto in corso.",
    },
    12: {
        answers: ["хожу"],
        explanation: "хожу = abitudine al presente (ogni sabato vado al negozio), non un movimento in corso in un momento preciso.",
    },
    13: {
        answers: ["хожу"],
        explanation: "хожу = abitudine al presente (quando non vado al negozio), non un tragitto in corso in questo momento.",
    },
    14: {
        answers: ["ходишь"],
        explanation: "ходишь = abitudine al presente (vai per il formaggio proprio lì), non un movimento in corso adesso.",
    },
    15: {
        answers: ["идти"],
        explanation: "идти (infinito) = descrive il tragitto specifico attraverso mezza Mosca in una direzione; resta идти anche parlando in generale del sabato, perché non è la ripetizione dell'abitudine ad essere negata, ma quel percorso preciso.",
    },
    16: {
        answers: ["идти"],
        explanation: "идти (infinito) = costruzione fissa «идти + tempo» per indicare la durata di un tragitto in una direzione (es. «до работы идти пять минут»), indipendente dall'abitudine.",
    },
    17: {
        answers: ["идти"],
        explanation: "идти (infinito) = stesso motivo del gap precedente: descrive il tragitto specifico attraverso mezza Mosca, non la ripetizione dell'abitudine.",
    },
};

// ============================================================
// PANEL 4 — GapText · student · Testo connesso con lacune + glossario
// Stesse regole del Panel 3, MA: nessuna hint (infinito) accanto ai
// gap e nessuna spiegazione sulla risposta sbagliata — solo giusto/
// sbagliato. Testate tutte le forme: passato (шёл/шла/ходил),
// presente (иду/хожу/идёшь) e infinito (идти/ходить).
// ============================================================
const p4instruction = "Leggi il racconto e scrivi la forma corretta del verbo, al presente (хожу/ходишь/ходит, иду/идёшь), al passato (ходил/ходила/ходили, шёл/шла) o all'infinito (идти/ходить). Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p4paragraphs = [
    "Пятница, вечер. Катя, Женя, Андрей, Тимур. Завтра суббота.",
    "Женя и Андрей [[переглянулись::si sono scambiati uno sguardo]].",
    "<strong>1.1 — Женя</strong>",
    "— Я завтра {{10}} в «Стрелку». По субботам всегда туда {{11}} — джаз, коктейли, [[правильные люди::la gente giusta (uso colloquiale: persone \"autentiche\", di tendenza)]]. В прошлую субботу тоже {{1}}: квартет из Нового Орлеана, играли до двух ночи. А когда {{2}} обратно через [[Патриаршие::i \"Patriaršie prudy\", un quartiere del centro di Mosca]], {{3}} дождь. Весь город был пустой. Я {{4}} и думал: [[вот бы каждую ночь так::magari fosse così ogni notte (espressione di desiderio/rimpianto)]].",
    "<strong>1.2 — Катя</strong>",
    "— Джаз? В «Стрелке»? Там теперь хипстеры с ноутбуками сидят. Я завтра {{12}} на [[ретроспективу::retrospettiva]] Феллини в «Пионере». На прошлой неделе показывали «8½».",
    "— Ты же его сто раз смотрела, — Андрей [[поднял бровь::ha alzato un sopracciglio (gesto di scetticismo)]].",
    "— [[Сто первый будет::Sarà la centounesima (volta) — frase ellittica]]. Когда я {{5}} домой после сеанса, {{6}} снег. Я {{7}} через [[Бульварное кольцо::il \"Bul'varnoe kol'co\", uno dei viali ad anello del centro di Mosca]] и вдруг поняла: Феллини снимал Москву. Не Рим. Москву. Просто никто не заметил.",
    "— [[Ну да::Sì, certo (spesso con una sfumatura ironica/scettica)]], — сказал Андрей. — [[Только ты::Solo tu (potevi accorgertene) — frase ellittica, con ironia]].",
    "<strong>1.3 — Тимур</strong>",
    "— Вы вообще погоду видели? [[Что за романтика::Che romanticismo ci sarebbe...?! (espressione retorica di scetticismo)]] — дождь, Москва — прекрасна! Снег — Феллини, я вот не понял, ты Кать, на «Амаркорд» {{15}} или на восемь с половиной?",
    "В прошлую субботу погода была [[премерзкая::orrenda, schifosa (rafforzativo colloquiale di \"мерзкий\")]]: {{8}} снег с дождём. [[Слякоть::nevischio misto a pioggia, fanghiglia per strada]], грязь. Что за романтика — {{16}} пешком в такую погоду?! Я по субботам {{13}} в спортзал. Там сухо. [[Тренажёры::attrezzi/macchine da palestra]]. Душ.",
    "— Андрей, а ты куда {{14}}? — Катя повернулась к нему.",
    "— Никуда. Раньше я {{9}} в бар по субботам. Теперь у меня PlayStation. В баре PlayStation нет.",
];

const p4gaps = {
    1: { answers: ["ходил"] },
    2: { answers: ["шёл"] },
    3: { answers: ["шёл"] },
    4: { answers: ["шёл"] },
    5: { answers: ["шла"] },
    6: { answers: ["шёл"] },
    7: { answers: ["шла"] },
    8: { answers: ["шёл"] },
    9: { answers: ["ходил"] },
    10: { answers: ["иду"] },
    11: { answers: ["хожу"] },
    12: { answers: ["иду"] },
    13: { answers: ["хожу"] },
    14: { answers: ["идёшь"] },
    15: { answers: ["ходила"] },
    16: { answers: ["ходить"] },
};

// ============================================================
// PANEL 5 — GapText · paid · Testo connesso con lacune + glossario
// Stesse regole del Panel 4: nessuna hint, nessuna spiegazione —
// solo giusto/sbagliato. Solo il passato diventa gap.
// ============================================================
const p5instruction = "Leggi il racconto e scrivi la forma corretta del verbo, al presente (хожу/ходишь/ходит, иду) o al passato (ходил/ходила/ходили, шёл/шла). Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p5paragraphs = [
    "Пять лет после выпуска.",
    "<strong>1.1</strong>",
    "— А помните, как я {{1}} в библиотеку каждый день? Даже в субботу. Все {{2}} в кино, а я — в [[читальный зал::sala di lettura (in biblioteca)]]. На первую зимнюю сессию всегда {{3}} снег. За окном [[белым-бело::tutto bianco, bianco ovunque — costruzione enfatica per ripetizione]]. Я после последнего экзамена {{4}} домой и вдруг поняла: я абсолютно счастлива.",
    "— И сейчас так же? — спросил Тимур.",
    "— Сейчас я только в спортзал {{14}}. По три раза в неделю. [[Привычка осталась — локация сменилась::L'abitudine è rimasta, è cambiato solo il posto — costruzione parallela ellittica]]. А помните, как мы на первом курсе все вместе {{5}} в спортзал? Один раз. Больше — никогда.",
    "— Ну конечно, ты вспомнила, — Андрей отложил телефон. — Хорошая привычка — она осталась только у тебя.",
    "<strong>1.2</strong>",
    "— Я в прошлом месяце {{6}} в универ на встречу выпускников. Ничего не изменилось — даже лампочка в коридоре та же. Я всегда {{7}} в универ пешком, а сейчас на работу {{15}}, но тоже пешком. Единственное, что изменилось: на лекции больше не {{16}}. Помню: {{8}} на все, а учить всё равно садился за три дня до экзамена.",
    "— Андрей бы оценил, — Женя [[кивнул в его сторону::ha fatto un cenno con la testa verso di lui]]. — Человек вообще на лекции не {{9}}. Помните, Лена только родилась — он либо спал на лекциях, либо вообще на них не {{10}}. А потом к Диме переехал.",
    "— И ничего не изменилось, — Дима пожал плечами. — Я до сих пор никуда не {{17}}. Разве что до PlayStation {{18}} каждый вечер уверенно.",
    "<strong>1.3</strong>",
    "— Кстати, о привычках, — Лена повернулась к Тимуру. — Ты был [[звездой курса::la star/il migliore del corso — uso figurato]]. [[Все на тебя молились::Tutti ti veneravano — in senso figurato: contavano molto su di te]] перед сессией. Конспекты, спокойствие, «Тимур всё знает». Ты как?",
    "— Я до сих пор никуда пешком не {{19}}, — Тимур улыбнулся. — Тогда, помню, мода на самокаты появилась: я на нём ездил в универ, сейчас на [[моноколесе::monociclo elettrico]] — в офис. Конспекты больше не пишу, но записи веду. Да, и на следующей неделе {{20}} на конференцию по праву — выступаю. Так что привычка быть звездой — осталась.",
    "— [[Скромно::\"Che modestia\" — detto con ironia/sarcasmo]], — заметила Катя.",
    "<strong>1.4</strong>",
    "— А ты? — Тимур посмотрел на Катю. — Ты же на лекции вообще не {{11}}.",
    "— Я {{12}} по мероприятиям. Показы, закрытые вечеринки, лекции приглашённых режиссёров. На обычные пары — никогда. И знаете что? Ничего не изменилось. Я до сих пор {{21}} на всё, где есть слово «фестиваль» или «премьера». В субботу {{22}} на ретроспективу Феллини.",
    "— [[Вот это я понимаю — стабильность::Questo sì che si chiama stabilità! — espressione di approvazione]], — Лена улыбнулась.",
    "— А помните выпускной? — вдруг сказал Женя. — За неделю до него {{13}} дождь. Все думали — [[никаких прогулок на катере::niente gite in barca a motore]]. И прямо перед выпускным после обеда вышло солнце.",
    "— Лучший день, — сказала Катя.",
];

const p5gaps = {
    1:  { answers: ["ходила"] },
    2:  { answers: ["ходили"] },
    3:  { answers: ["шёл"] },
    4:  { answers: ["шла"] },
    5:  { answers: ["ходили"] },
    6:  { answers: ["ходил"] },
    7:  { answers: ["ходил"] },
    8:  { answers: ["ходил"] },
    9:  { answers: ["ходил"] },
    10: { answers: ["ходил"] },
    11: { answers: ["ходила"] },
    12: { answers: ["ходила"] },
    13: { answers: ["шёл"] },
    14: { answers: ["хожу"] },
    15: { answers: ["хожу"] },
    16: { answers: ["хожу"] },
    17: { answers: ["хожу"] },
    18: { answers: ["иду"] },
    19: { answers: ["хожу"] },
    20: { answers: ["иду"] },
    21: { answers: ["хожу"] },
    22: { answers: ["иду"] },
};

// ============================================================
// PANEL 6 — GapText · paid · Testo connesso con lacune + glossario
// Stesse regole dei Panel 4-5: nessuna hint, nessuna spiegazione —
// solo giusto/sbagliato. Solo il passato diventa gap.
// ============================================================
const p6instruction = "Leggi il racconto e scrivi la forma corretta del verbo, al presente (хожу, идём) o al passato (ходил/ходила/ходили, шёл/шла). Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p6paragraphs = [
    "<strong>В какой ресторан идём сегодня?</strong>",
    "Пятница, вечер. Катя, Андрей, Женя, Лена, Тимур.",
    "— Ну и куда мы сегодня {{11}}? — Андрей [[откинулся на стуле::si è appoggiato allo schienale della sedia]].",
    "Женя и Тимур [[переглянулись::si sono scambiati uno sguardo]].",
    "<strong>1.1</strong>",
    "— Я на прошлой неделе {{1}} в «Воронеж». Стейк, пиво. Когда я {{2}} туда по [[Кузнецкому Мосту::via del centro di Mosca (\"Kuznetskij Most\")]], {{3}} снег. Все спешили, а какой-то парень играл на саксофоне. Я стоял пять минут под снегом и слушал.",
    "<strong>1.2</strong>",
    "— «Воронеж»? — Женя [[поморщился::ha fatto una smorfia (di disappunto)]]. — Я туда {{4}} один раз. Больше не {{12}}. А вот в «Sage» на патриарших я в среду {{5}}. Маленький зал, тихо. Раньше я туда часто {{6}}. Когда {{7}} оттуда, на [[Бронной::via del centro di Mosca (\"Bronnaja\")]] снимали кино — пришлось обходить.",
    "<strong>1.3</strong>",
    "— А я в прошлом месяце {{8}} в «Белую Лошадь», — Лена поправила волосы. — Утка с грушей.",
    "— Я туда {{9}} один раз, — Тимур [[скрестил руки::ha incrociato le braccia]]. — [[Одно веганское блюдо. Одно.::Un solo piatto vegano. Uno solo. — ripetizione enfatica/ironica]]",
    "— Между прочим, раньше мы все вместе {{10}} в «Хачапури». Раз в месяц, — Женя [[примирительно поднял руку::ha alzato una mano in segno di conciliazione]]. — Там и мясо, и сыр, и [[веганские лодочки::\"barchette\" vegane — un tipo di khachapuri a forma di barca]].",
    "— Пока туда не начали ходить все. Теперь — очередь на улице. Я больше туда не {{13}}.",
];

const p6gaps = {
    1:  { answers: ["ходил"] },
    2:  { answers: ["шёл"] },
    3:  { answers: ["шёл"] },
    4:  { answers: ["ходил"] },
    5:  { answers: ["ходил"] },
    6:  { answers: ["ходил"] },
    7:  { answers: ["шёл"] },
    8:  { answers: ["ходила"] },
    9:  { answers: ["ходил"] },
    10: { answers: ["ходили"] },
    11: { answers: ["идём"] },
    12: { answers: ["хожу"] },
    13: { answers: ["хожу"] },
};

// ============================================================
// PANEL 7 — Mixed Quiz · public — 30 фраз, passato + presente,
// задания строятся из блоков упражнений страницы:
// MC       <- 5 passato (p1exercises, ХОДИТЬ) + 5 presente (nuove)
// match    <- 5 passato (p2exercises, ИДТИ) + 5 presente (nuove)
// write-in <- p7writeInData: 7 passato dai testi Panel 3-6
//             + 3 presente dagli stessi testi
// ============================================================
const p7mcPresentData = [
    { question: "Обычно я ___ на работу пешком.", options: ["хожу", "иду", "ходил"], answer: "хожу" },
    { question: "Смотри, вот он ___ по улице!", options: ["идёт", "ходит", "шёл"], answer: "идёт" },
    { question: "Ты часто ___ в бассейн?", options: ["ходишь", "идёшь", "ходил"], answer: "ходишь" },
    { question: "Куда ты сейчас так быстро ___?", options: ["идёшь", "ходишь", "шёл"], answer: "идёшь" },
    { question: "По воскресеньям бабушка всегда ___ в церковь.", options: ["ходит", "идёт", "ходила"], answer: "ходит" },
];

const p7matchPresentData = [
    { left: "Обычно мы", right: "ходим в кино по пятницам." },
    { left: "Прямо сейчас я", right: "иду в магазин, перезвоню позже." },
    { left: "Дети каждое утро", right: "ходят в школу пешком." },
    { left: "Погоди, куда вы", right: "идёте?" },
    { left: "Он никогда не", right: "ходит на такие мероприятия." },
];

const p7writeInData = [
    { id: "past-ix-w01", promptPrefix: "А я вчера", promptSuffix: "на рынок с Аней.", answers: ["ходила"] },
    { id: "past-ix-w02", promptPrefix: "В прошлую субботу я", promptSuffix: "мимо кондитерской.", answers: ["шёл"] },
    { id: "past-ix-w03", promptPrefix: "Я на рынок", promptSuffix: "только за сыром.", answers: ["хожу"] },
    { id: "past-ix-w04", promptPrefix: "Я", promptSuffix: "через Бульварное кольцо.", answers: ["шла"] },
    { id: "past-ix-w05", promptPrefix: "Я после последнего экзамена", promptSuffix: "домой.", answers: ["шла"] },
    { id: "past-ix-w06", promptPrefix: "Андрей, а ты куда", promptSuffix: "?", answers: ["идёшь"] },
    { id: "past-ix-w07", promptPrefix: "За неделю до выпускного", promptSuffix: "дождь.", answers: ["шёл"] },
    { id: "past-ix-w08", promptPrefix: "Я на прошлой неделе", promptSuffix: "в «Воронеж».", answers: ["ходил"] },
    { id: "past-ix-w09", promptPrefix: "Когда я", promptSuffix: "туда по Кузнецкому Мосту, начался снег.", answers: ["шёл"] },
    { id: "past-ix-w10", promptPrefix: "Ну и куда мы сегодня", promptSuffix: "?", answers: ["идём"] },
];

function toMultipleChoice(item) {
    return {
        question: item.text.replace("{{1}}", "___"),
        options: item.words,
        answer: item.correctAnswers[1],
    };
}

function toMatchPair(item) {
    const marker = "{{1}}";
    const idx = item.text.indexOf(marker);
    const left = item.text.slice(0, idx).trim();
    const after = item.text.slice(idx + marker.length).trim();
    return { left, right: `${item.correctAnswers[1]} ${after}`.trim() };
}

function initPanel7() {
    const panel = document.getElementById('panel-past-ix-07');
    if (!panel) return;

    const container = panel.querySelector('#past-ix-07-cards-container');
    const prevBtn   = panel.querySelector('#past-ix-07-deck-prev');
    const nextBtn   = panel.querySelector('#past-ix-07-deck-next');
    const counterEl = panel.querySelector('#past-ix-07-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = p1exercises.map(toMultipleChoice);
    const matchPairs = p2exercises.map(toMatchPair);
    const quizData = p7writeInData;

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

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
            card.className = 'fca01-card-container past-ix-07-card';
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
                    const firstId  = selectedMatchCard.dataset.id;
                    const secondId = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;
                    if (firstId === secondId) {
                        previousCard.classList.add('matched');
                        clickedCard.classList.add('matched');
                        feedbackEl.textContent = '✨ Отлично!';
                        feedbackEl.className = 'fca01-match-feedback correct';
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ''; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = '🎉 ПОБЕДА! 🎉';
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = 'Неверно';
                        feedbackEl.className = 'fca01-match-feedback wrong';
                        setTimeout(() => {
                            clickedCard.classList.remove('selected', 'wrong');
                            previousCard.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = '';
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
                    <p class="quiz-instruction">Scrivete la forma corretta del passato</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix} <input type="text" class="quiz-input" data-index="${i - MATCH_END}"> ${item.promptSuffix}</div>
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
        container.querySelectorAll('.past-ix-07-card').forEach(card => {
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
                const card       = this.closest('.past-ix-07-card');
                const idx        = parseInt(card.dataset.index) - MATCH_END;
                const item       = quizData[idx];
                const input      = card.querySelector('.quiz-input');
                const fb         = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === ans);
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
        container.querySelectorAll('.past-ix-07-card').forEach((c, i) => {
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
    'panel-past-ix-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ix-01', exercises: p1exercises }),
    'panel-past-ix-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ix-02', exercises: p2exercises }),
    'panel-past-ix-03': () => new GapTextExercise({
        rootId: 'ex-gaptext-past-ix-03',
        instruction: p3instruction,
        paragraphs: p3paragraphs,
        gaps: p3gaps,
        showHints: false,
    }),
    'panel-past-ix-04': () => new GapTextExercise({
        rootId: 'ex-gaptext-past-ix-04',
        instruction: p4instruction,
        paragraphs: p4paragraphs,
        gaps: p4gaps,
        showHints: false,
    }),
    'panel-past-ix-05': () => new GapTextExercise({
        rootId: 'ex-gaptext-past-ix-05',
        instruction: p5instruction,
        paragraphs: p5paragraphs,
        gaps: p5gaps,
        showHints: false,
    }),
    'panel-past-ix-06': () => new GapTextExercise({
        rootId: 'ex-gaptext-past-ix-06',
        instruction: p6instruction,
        paragraphs: p6paragraphs,
        gaps: p6gaps,
        showHints: false,
    }),
    'panel-past-ix-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: false });
