import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// Struttura della pagina (identica a nesti-nositi-passato) —
// contenuti in sviluppo, riempiti panel per panel.
//
// PANEL 1 — DragDrop · public  · Spряжение ВЕЗТИ passato
// PANEL 2 — DragDrop · student · Spряжение ВОЗИТЬ passato
// PANEL 3 — GapText  · public  · Testo con lacune + glossario + spiegazioni
// PANEL 4 — GapText  · student · Testo con lacune + glossario (no spiegazioni)
// PANEL 5 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 6 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 7 — Mixed Quiz · public · задания собираются из блоков 1-6
// ============================================================

// ============================================================
// PANEL 1 — DragDrop · public · Spряжение ВЕЗТИ passato
// (вёз / везла / везло / везли) — trasportare con un mezzo, direzione unica
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Вчера он {{1}} тяжёлую мебель на грузовике.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "вёз" },
        explanation: "вёз = movimento con un mezzo in corso in una direzione, in quel momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Она {{1}} подругу в аэропорт рано утром.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везла" },
        explanation: "везла = un tragitto specifico con un mezzo, non un'abitudine ripetuta."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Такси {{1}} нас через весь город в час пик.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везло" },
        explanation: "везло = neutro (такси), movimento con un mezzo in corso in quel momento."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Мы {{1}} оборудование на выставку всю ночь.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везли" },
        explanation: "везли = plurale, movimento con un mezzo in corso in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Катя {{1}} торт на праздник очень аккуратно.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везла" },
        explanation: "везла = movimento femminile con un mezzo, in corso in quel momento."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Он {{1}} коллегу на важную встречу и опаздывал.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "вёз" },
        explanation: "вёз = movimento con un mezzo in corso, sullo sfondo di un altro fatto (era in ritardo)."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Курьер {{1}} посылку через весь город под дождём.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "вёз" },
        explanation: "вёз = movimento con un mezzo in corso in una direzione, in quell'occasione."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Мы {{1}} мебель в новую квартиру на арендованном фургоне.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везли" },
        explanation: "везли = plurale, tragitto specifico con un mezzo."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Она {{1}} ребёнка в школу, когда машина заглохла.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "везла" },
        explanation: "везла = movimento in corso in una direzione, interrotto da un evento (l'auto si è spenta)."
    },
    {
        instruction: "Выбери правильную форму глагола ВЕЗТИ (passato).",
        text: "Он {{1}} важные документы в офис, когда его остановила полиция.",
        words: ["вёз", "везла", "везло", "везли"],
        correctAnswers: { 1: "вёз" },
        explanation: "вёз = movimento con un mezzo in corso, interrotto da un evento (l'ha fermato la polizia)."
    },
];

// ============================================================
// PANEL 2 — DragDrop · student · Spряжение ВОЗИТЬ passato
// (возил / возила / возили) — abitudine ripetuta
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Раньше он всегда {{1}} детей в школу сам.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возил" },
        explanation: "возил = abitudine ripetuta nel passato, non un tragitto specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Она много лет {{1}} туристов по городу.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возила" },
        explanation: "возила = abitudine protratta nel tempo (per molti anni)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Мы {{1}} оборудование на все выставки в том году.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возили" },
        explanation: "возили = abitudine ripetuta durante un periodo (quell'anno)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Если было нужно, он всегда {{1}} коллег на работу.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возил" },
        explanation: "возил = abitudine/disponibilità ripetuta (ogni volta che serviva)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Раньше она всегда {{1}} молоко и мясо с рынка.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возила" },
        explanation: "возила = abitudine ripetuta nel passato."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Мы {{1}} мебель для клиентов весь прошлый год.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возили" },
        explanation: "возили = abitudine ripetuta durante un periodo definito (tutto l'anno scorso)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Он всегда {{1}} друзей за город.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возил" },
        explanation: "возил = abitudine ripetuta (sempre, in generale)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Она {{1}} бабушку к врачу каждый месяц.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возила" },
        explanation: "возила = abitudine ripetuta (ogni mese)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Мы {{1}} гостей по городу на экскурсии всё лето.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возили" },
        explanation: "возили = abitudine ripetuta durante un periodo (tutta l'estate)."
    },
    {
        instruction: "Выбери правильную форму глагола ВОЗИТЬ (passato).",
        text: "Он {{1}} стройматериалы на объект каждый день.",
        words: ["возил", "возила", "возили"],
        correctAnswers: { 1: "возил" },
        explanation: "возил = abitudine ripetuta (ogni giorno)."
    },
];

// ============================================================
// PANEL 3 — GapText · public · "Голод не тётка"
// Testo con lacune + glossario + spiegazioni.
// Verbi testati (per spirale): ходить/идти, ехать/ездить,
// бегать/бежать, нести/носить, возить/везти (tema di questa pagina).
// ============================================================
const p3instruction = "Leggi il racconto e scrivi la forma corretta del verbo (ходить/идти, ехать/ездить, бегать/бежать, нести/носить, возить/везти), al presente, al passato o all'infinito. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p3paragraphs = [
    "Субботний вечер начался с тихой паники: Женя вёз друзей в центр города, когда Дима признался, что забыл забронировать столик в ресторане. Машина застряла в пробке, а поиск нового места превратился в настоящий [[квест::un'avventura, una vera impresa]], ведь у каждого в компании свои строгие пищевые привычки.",
    "<strong>1.1</strong>",
    "— Мы уже сорок минут {{1}} по центру! — Женя раздражённо сжал руль. — Я обычно не {{2}} полную машину людей без чёткого плана. Дима, мы куда вообще {{3}}? — Простите! — виновато ответил Дима. — Я утром {{4}} на работу, {{5}} в сервис тяжеленный системный блок и просто забыл позвонить!",
    "<strong>1.2</strong>",
    "— Давайте просто вылезем и пойдём пешком? — предложил Дима. — Пойти пешком? В такой холод? — Катя ужаснулась. — Я в такую погоду пешком по улице не {{6}}. Я [[пескетарианка::pescetariana]], мне нужен рыбный ресторан! — А я мясоед! — отрезала Анна. — В прошлую субботу, когда мы {{7}} к маме, ты тоже заставила нас искать салат-бар!",
    "<strong>1.3</strong>",
    "— Друзья, спокойнее, — вмешался Тимур. — Я веган, но я не паникую. Я всегда {{8}} с собой перекус в контейнере или {{9}} в веганское кафе. Женя, куда ты нас сейчас {{10}}? — Я {{11}} вас к набережной, — ответил Женя. — Но если вы будете спорить, я развернусь. Помните, как в прошлом месяце я {{12}} вас на пикник, и мы два часа искали парковку?",
    "<strong>1.4</strong>",
    "— Да закройте вы тему с высокой кухней! — подал голос Андрей с заднего сиденья. — Я, когда на велосипеде по городу {{13}}, всегда [[заскакиваю::faccio un salto (in un posto)]] в фастфуд. Помню, как в прошлом месяце я {{14}} из банка и {{15}} пакет с бургерами — вот это был вечер! — Бургеры? [[Дикарь::Selvaggio (scherzoso)]], — поморщилась Катя. — Но чтобы поесть нормальной рыбы, нам надо {{16}} на другой конец города.",
    "<strong>1.5</strong>",
    "— На другой конец города мы не успеем, — Тимур посмотрел в навигатор. — Пока наша машина {{17}} по мосту, я изучил меню в округе. В первом месте нет рыбы для Кати, а во втором — ничего веганского для меня. — Потрясающе, — вздохнул Женя. — Когда я {{18}} иностранных гостей по ресторанам, у них было меньше претензий!",
    "<strong>1.6</strong>",
    "— [[Отставить панику::Basta panico! (comando militare scherzoso)]]! — Андрей победоносно поднял телефон. — Я нашёл новую бургерную в двух кварталах! Там есть сочные стейк-бургеры для Ани и меня, фиш-бургеры для Кати и [[нутовые котлеты::polpette di ceci]] для Тимура! В прошлом месяце, когда я {{19}} на выставку гаджетов, я заходил в их первый филиал. Там есть всё!",
    "<strong>1.7</strong>",
    "— Бургерная с веганским и рыбным меню? Невероятно, но это компромисс, — Женя включил [[поворотник::freccia (dell'auto)]]. — Всё, я {{20}} вас туда. Больше никаких кругов по центру. — Ура! — обрадовался Тимур. — А то пока мы тут {{21}}, у меня упал сахар. Я думал, уже сам пешком {{22}} придётся!",
    "<strong>1.8</strong>",
    "— Главное, чтобы там была вентиляция, — заметила Катя. — Дима, в следующий раз, когда ты будешь {{23}} свой системный блок, поставь себе напоминание в телефон! — Обязательно! — улыбнулся Дима. — А сейчас — едем есть!",
];

const p3gaps = {
    1: { answers: ["ездим"], explanation: "ездим = movimento in più direzioni ripetuto/prolungato (giriamo da 40 minuti), non un tragitto in una sola direzione." },
    2: { answers: ["вожу"], explanation: "вожу = abitudine ripetuta al presente (di solito non trasporto una macchina piena), non un'azione in corso ora." },
    3: { answers: ["едем"], explanation: "едем = movimento con un mezzo in corso al presente, in una direzione precisa (dove stiamo andando ora)." },
    4: { answers: ["шёл"], explanation: "шёл = movimento a piedi in corso in una direzione, in quel momento specifico (stamattina)." },
    5: { answers: ["нёс"], explanation: "нёс = movimento a mano in corso in una direzione, azione concreta in quel momento." },
    6: { answers: ["хожу"], explanation: "хожу = abitudine/fatto generale al presente (con questo tempo non vado mai), non un tragitto in corso." },
    7: { answers: ["ехали"], explanation: "ехали = movimento con un mezzo in corso in una direzione, in quell'occasione specifica." },
    8: { answers: ["ношу"], explanation: "ношу = abitudine ripetuta al presente (porto sempre con me), non un'azione in corso ora." },
    9: { answers: ["бегаю"], explanation: "бегаю = abitudine ripetuta al presente (vado di corsa abitualmente), verbo già visto sulla pagina correre." },
    10: { answers: ["везёшь"], explanation: "везёшь = movimento con un mezzo in corso al presente, in una direzione precisa (dove ci stai portando adesso)." },
    11: { answers: ["везу"], explanation: "везу = movimento con un mezzo in corso al presente, in una direzione precisa." },
    12: { answers: ["возил"], explanation: "возил = tragitto di andata e ritorno completato in un'occasione specifica (vi ho portato al picnic e riportati indietro), non un movimento in corso in una sola direzione." },
    13: { answers: ["езжу"], explanation: "езжу = abitudine ripetuta al presente (quando vado in bici in giro per la città, di solito)." },
    14: { answers: ["шёл"], explanation: "шёл = movimento a piedi in corso in una direzione, in quell'occasione specifica." },
    15: { answers: ["нёс"], explanation: "нёс = movimento a mano in corso in una direzione, in quell'occasione." },
    16: { answers: ["ехать"], explanation: "ехать (infinito) = tragitto specifico necessario, in una sola direzione, non un'abitudine." },
    17: { answers: ["ехала"], explanation: "ехала = movimento con un mezzo in corso in una direzione, sullo sfondo di un'altra azione (studiavo il menù)." },
    18: { answers: ["возил"], explanation: "возил = abitudine ripetuta nel passato (quando lavoravo con turisti stranieri, regolarmente), non un tragitto singolo." },
    19: { answers: ["ходил"], explanation: "ходил = tragitto di andata e ritorno completato in un'occasione specifica (sono andato alla fiera e tornato), non un'abitudine." },
    20: { answers: ["везу"], explanation: "везу = movimento con un mezzo in corso al presente, in una direzione precisa e decisa." },
    21: { answers: ["ездили"], explanation: "ездили = movimento in più direzioni ripetuto (giravamo per il centro), non un tragitto in una sola direzione." },
    22: { answers: ["бежать"], explanation: "бежать (infinito) = movimento a piedi specifico e diretto (di corsa, in una direzione precisa), non un'abitudine — verbo già visto sulla pagina correre." },
    23: { answers: ["нести"], explanation: "нести (infinito) = portare a mano un oggetto concreto, azione specifica riferita a un caso preciso." },
};

// ============================================================
// PANEL 4 — GapText · student · "Поспешишь — людей насмешишь"
// Testo con lacune + glossario (no spiegazioni).
// Solo aspetto imperfettivo (НСВ) — le forme perfettive annotate dalla PM
// (es. "пойду") NON sono lacune, restano testo fisso.
// ============================================================
const p4instruction = "Leggi il racconto e scrivi la forma corretta del verbo (ходить/идти, ехать/ездить, возить/везти), al presente, al passato o all'infinito. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p4paragraphs = [
    "Субботнее утро началось с грандиозного события: Андрей купил новую машину и пообещал повезти всю компанию за город на шашлыки. Выехали на рассвете, но на выезде из города выяснилось, что они забыли у подъезда Анну со всеми запасами мяса, рыбы и овощей.",
    "<strong>1.1</strong>",
    "— Аня, не кричи, я уже {{1}} к тебе! — Андрей резко затормозил. — Блин, мы забыли Аню! — Это всё Дима! — возмутился Женя. — Давай быстрее, давай быстрее, мне нужно велик забрать, давай за кофе заедем! Я не понимаю, зачем тебе велик, если мы даже не решили, где будем шашлыки жарить.",
    "<strong>1.2</strong>",
    "— Я не виноват! — оправдывался Дима. — Я думал только о кофе. И потом, раз мы на машине… везти велик ничего не стоит. — А вот и Анна с Катей, ну всё сейчас начнётся, — Тимур закатил глаза, — но если нам сегодня везёт, они ограничатся только пятнадцатиминутными [[колкостями::battute pungenti]]. — Не, Тим, не везёт на сегодня! Я думаю, они всю дорогу нас пилить будут, — Женя [[натянуто::con un sorriso forzato]] улыбнулся. — Привет, девчонки! — Потрясающе! — закричала Анна. — Мы вчера целый день ходили по магазинам, возили всё туда-сюда, готовили, резали, мариновали! А вы просто забыли заехать?!",
    "<strong>1.3</strong>",
    "— Аня, садись, теперь мы вас {{2}} на пикник! — скомандовал Андрей. — Никуда больше ходить не надо. — Андрюх, а куда мы едем? — спросила Катя. — Мы же вроде так и не решили… — Ну что, {{3}} на турбазу, — сказал Женя. — Я в прошлом году {{4}} туда зарубежных коллег, там всё было очень прилично. Столики, домик и место для костра.",
    "<strong>1.4</strong>",
    "— Какая турбаза? Нам надо {{5}} на озеро! — перебила Анна. — В прошлом году, когда мы {{6}} на Плещеево озеро, было отлично. — На озеро мы уже ездили, — вмешалась Катя. — Я знаю секретную [[поляну::radura]] в лесу. Помните, я рассказывала, как мы пару лет назад {{7}} туда через сосновый бор? Там потрясающий воздух, вокруг деревья шумят! Трава по пояс!",
    "<strong>1.5</strong>",
    "— Замечательные идеи, — с иронией пожал плечами Тимур. — Один хочет {{8}} нас по дорогущим платным стоянкам, другая — {{9}} в траве по пояс. Андрюх, ты помнишь, как Женя нас возил на эту стоянку? Мы тогда какую-то нечеловеческую цифру заплатили.",
    "<strong>1.6</strong>",
    "— Народ, мне всё равно, куда мы {{10}}, — подал голос голодный Дима. — Время к обеду! Пока Андрей {{11}} нас кругами, я умираю от голода. Если мы сейчас не остановимся, я сам пешком пойду в ближайшее кафе!",
    "<strong>1.7</strong>",
    "В этот момент у Андрея зазвонил телефон. На экране высветился его приятель-байкер. — Алло? Да, {{12}} друзей на природу... Что? Вы уже у реки? — Андрей выключил громкую связь и улыбнулся. — Мои знакомые уже стоят лагерем у реки, [[растопили::hanno acceso (il barbecue)]] мангал и зовут нас!",
    "<strong>1.8</strong>",
    "— О, готовый мангал? — оживился Женя. — Больше не надо по трассе {{13}} в поисках места! — Всё, решено! — Андрей прибавил газ. — {{14}} всех к реке. А то пока я тут всех {{15}}, Дима чуть не съела сырую курицу!",
];

const p4gaps = {
    1: { answers: ["везу"] },
    2: { answers: ["везём"] },
    3: { answers: ["едем"] },
    4: { answers: ["возил"] },
    5: { answers: ["ехать"] },
    6: { answers: ["ездили"] },
    7: { answers: ["шли"] },
    8: { answers: ["возить"] },
    9: { answers: ["ходить"] },
    10: { answers: ["едем"] },
    11: { answers: ["возит"] },
    12: { answers: ["везу"] },
    13: { answers: ["ездить"] },
    14: { answers: ["едем"] },
    15: { answers: ["возил"] },
};

// ============================================================
// PANEL 5 — GapText · paid · Testo con lacune + glossario
// TODO: in attesa del testo autentico da PM
// ============================================================
const p5instruction = "";
const p5paragraphs = [];
const p5gaps = {};

// ============================================================
// PANEL 6 — GapText · paid · Testo con lacune + glossario
// TODO: in attesa del testo autentico da PM
// ============================================================
const p6instruction = "";
const p6paragraphs = [];
const p6gaps = {};

// ============================================================
// PANEL 7 — Quiz misto (multiple choice + match + write) · public
// TODO: 30 frasi da raccogliere dai panel 1-6 quando saranno pronti
// ============================================================
function initPanel7() {
    const panel = document.getElementById('panel-past-vv-07');
    if (!panel) return;

    const container = panel.querySelector('#past-vv-07-cards-container');
    const prevBtn   = panel.querySelector('#past-vv-07-deck-prev');
    const nextBtn   = panel.querySelector('#past-vv-07-deck-next');
    const counterEl = panel.querySelector('#past-vv-07-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [];
    const matchPairs = [];
    const quizData = [];

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
            card.className = 'fca01-card-container past-vv-07-card';
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
        container.querySelectorAll('.past-vv-07-card').forEach(card => {
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
                const card    = this.closest('.past-vv-07-card');
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
        container.querySelectorAll('.past-vv-07-card').forEach((c, i) => {
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
    'panel-past-vv-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-vv-01', exercises: p1exercises }),
    'panel-past-vv-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-vv-02', exercises: p2exercises }),
    'panel-past-vv-03': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vv-03', instruction: p3instruction, paragraphs: p3paragraphs, gaps: p3gaps, showHints: false }),
    'panel-past-vv-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vv-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-vv-05': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vv-05', instruction: p5instruction, paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    'panel-past-vv-06': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vv-06', instruction: p6instruction, paragraphs: p6paragraphs, gaps: p6gaps, showHints: false }),
    'panel-past-vv-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: false });
