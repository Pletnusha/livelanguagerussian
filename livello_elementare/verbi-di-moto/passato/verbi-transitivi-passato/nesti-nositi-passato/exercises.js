import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// Struttura della pagina (identica a exat-ezdit-passato) —
// contenuti in sviluppo, riempiti panel per panel.
//
// PANEL 1 — DragDrop · public  · Spряжение НЕСТИ passato
// PANEL 2 — DragDrop · student · Spряжение НОСИТЬ passato
// PANEL 3 — GapText  · public  · Testo con lacune + glossario + spiegazioni
// PANEL 4 — GapText  · student · Testo con lacune + glossario (no spiegazioni)
// PANEL 5 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 6 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 7 — Mixed Quiz · public · задания собираются из блоков 1-6
// ============================================================

// ============================================================
// PANEL 1 — DragDrop · public · Spряжение НЕСТИ passato
// (нёс / несла / несло / несли) — movimento a mano, direzione unica
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Вчера он {{1}} тяжёлую сумку из магазина.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "нёс" },
        explanation: "нёс = movimento a mano in corso in una direzione, in quel momento specifico (ieri, da solo)."
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Она {{1}} букет цветов на день рождения подруги.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "несла" },
        explanation: "несла = un tragitto specifico, non un'abitudine ripetuta."
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Директор {{1}} полную ответственность за провал проекта.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "нёс" },
        explanation: "нёс ответственность = espressione idiomatica (portare la responsabilità), maschile singolare."
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Мы {{1}} чемоданы к такси всё утро.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "несли" },
        explanation: "несли = plurale, movimento in corso in una direzione (verso il taxi)."
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Катя {{1}} торт очень осторожно, чтобы не уронить.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "несла" },
        explanation: "несла = movimento a mano femminile, in corso in quel momento."
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Он весь вечер {{1}} какую-то чушь после третьего бокала.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "нёс" },
        explanation: "нёс чушь = espressione idiomatica (dire sciocchezze), maschile singolare."
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Дети {{1}} воздушные шарики с праздника домой.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "несли" },
        explanation: "несли = plurale, tragitto specifico in una direzione (verso casa)."
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Пока она {{1}} посылку на почту, начался дождь.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "несла" },
        explanation: "несла = movimento in corso (sullo sfondo di un altro evento — è iniziato a piovere)."
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Мы {{1}} ёлку из леса вдвоём.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "несли" },
        explanation: "несли = plurale, tragitto specifico (dal bosco)."
    },
    {
        instruction: "Выбери правильную форму глагола НЕСТИ (passato).",
        text: "Он {{1}} букет так, будто это было что-то хрупкое.",
        words: ["нёс", "несла", "несло", "несли"],
        correctAnswers: { 1: "нёс" },
        explanation: "нёс = movimento a mano maschile, in corso in quel momento."
    },
];

// ============================================================
// PANEL 2 — DragDrop · student · Spряжение НОСИТЬ passato
// (носил / носила / носили) — abitudine ripetuta
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "Она каждый день {{1}} ноутбук в рюкзаке.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носила" },
        explanation: "носила = abitudine ripetuta (ogni giorno), non un tragitto specifico."
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "Раньше он всегда {{1}} тяжёлые сумки сам, без курьера.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носил" },
        explanation: "носил = abitudine generale nel passato (in generale, sempre)."
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "В детстве мы {{1}} воду из колодца на даче.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носили" },
        explanation: "носили = abitudine ripetuta nell'infanzia."
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "Он два года {{1}} обручальное кольцо, не снимая.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носил" },
        explanation: "носил = stato/abitudine protratta nel tempo (per due anni)."
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "Она {{1}} чёрное на все вечеринки — это был её стиль.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носила" },
        explanation: "носила = abitudine ripetuta (uno stile costante), non un'occasione specifica."
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "Мы {{1}} школьную форму каждый день.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носили" },
        explanation: "носили = abitudine ripetuta (ogni giorno)."
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "Он никогда не {{1}} зонт, даже в дождь.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носил" },
        explanation: "носил = abitudine/fatto generale (mai, in generale)."
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "Дети {{1}} рюкзаки в школу каждое утро.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носили" },
        explanation: "носили = abitudine ripetuta (ogni mattina)."
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "Она долго {{1}} девичью фамилию после свадьбы.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носила" },
        explanation: "носила = stato protratto nel tempo (a lungo)."
    },
    {
        instruction: "Выбери правильную форму глагола НОСИТЬ (passato).",
        text: "Раньше они {{1}} воду вёдрами, пока не провели водопровод.",
        words: ["носил", "носила", "носили"],
        correctAnswers: { 1: "носили" },
        explanation: "носили = abitudine ripetuta prima di un cambiamento (prima dell'acquedotto)."
    },
];

// ============================================================
// PANEL 3 — GapText · public · "Чужую беду руками разведу"
// Testo connesso con lacune + glossario + spiegazioni.
// Verbi testati (per spirale, già visti sulle pagine precedenti):
// ходить/идти, ехать/ездить, бегать/бежать, нести/носить.
// I verbi con prefisso (приезжают, приду) NON sono lacune —
// argomento non ancora affrontato — restano scritti nel testo.
// ============================================================
const p3instruction = "Leggi il racconto e scrivi la forma corretta del verbo (ходить/идти, ехать/ездить, бегать/бежать, нести/носить), al presente, al passato o all'infinito. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p3paragraphs = [
    "Пятница, вечер. Компания друзей сидела в любимом баре. Андрей, верный своему [[нездоровому образу жизни::stile di vita poco sano]], пил пиво с бургером. Женя, [[сторонник статуса и формы::sostenitore di status e forma fisica]], поправлял дорогие часы, а Дима грустно смотрел в пустой стакан. У него сломалась стиральная машина, и [[гора грязных вещей::una montagna di vestiti sporchi]] росла с каждым днём.",
    "<strong>1.1</strong>",
    "— Ребята, это катастрофа, — вздохнул Дима. — Вчера весь вечер стирал футболки в раковине. Раньше я просто {{1}} в ванную и нажимал кнопку. А теперь? Куда мне {{2}} этот огромный пакет с грязными вещами?",
    "<strong>1.2</strong>",
    "— Зачем вообще куда-то {{3}}? — Женя презрительно поморщился. — Раньше, когда я жил в старой квартире, я тоже {{4}} вещи в химчистку. Помню, как {{5}} по улице как [[вьючное животное::animale da soma]]. А сейчас курьеры сами приезжают ко мне домой и всё забирают. Я уже забыл, как это — когда ты сам в руках {{6}} грязное бельё.",
    "<strong>1.3</strong>",
    "— Твои курьеры стоят [[как крыло самолёта::come un'ala d'aereo — espressione idiomatica: costosissimo]], — буркнул Андрей. — Я вот {{7}} рубашки, костюмы и постельное бельё в прачечную. Остальное стираю дома. Раньше эта прачечная была далеко, я туда на велосипеде {{8}}. А теперь она в соседнем доме — пять минут {{9}} пешком, и готово.",
    "<strong>1.4</strong>",
    "— [[Везёт вам::Siete fortunati]], — Катя, [[эстет и интеллектуалка::esteta e intellettuale]], отпила свой чай. — А вот некоторые никак не могут купить стиральную машину. Тим, ты когда её уже купишь? Раньше ты {{10}} ко мне с рюкзаком вещей два раза в месяц, а теперь {{11}} каждую неделю!",
    "<strong>1.5</strong>",
    "— Это оптимизация времени и кардио-нагрузка, — спокойно ответил Тимур, фанат дисциплины. — Я же всё равно каждый день {{12}} по утрам. Пока я {{13}} к тебе с рюкзаком, я сжигаю калории. Помнишь, когда я {{14}} к тебе в прошлую пятницу под дождём? Идеальная тренировка!",
    "<strong>1.6</strong>",
    "— Идеальная тренировка для моей стиральной машины, — возмутилась Катя. — Хотя, признаю... когда три года назад у меня самой сломалась техника, я два месяца {{15}} всё бельё стирать к маме. Помню, как я {{16}} в автобусе с огромной сумкой, а потом ещё пешком {{17}}... Ужас.",
    "<strong>1.7</strong>",
    "— Не понимаю ваших проблем, — [[пожала плечами::alzò le spalle]] Анна, хранительница качества. — Нужно просто покупать нормальную технику. У меня машинка дома ни разу не ломалась. Я никогда никуда с грязным бельём не {{18}} и чужие вещи в дом не {{19}}.",
    "<strong>1.8</strong>",
    "— Аня, это очень познавательно, — Дима с надеждой посмотрел на Катю. — Кать, раз Тимур всё равно к тебе {{20}}... Можно я тоже завтра приду? Честно, прямо сейчас {{21}} домой собирать вещи! — Только попробуй! — Катя [[закатила глаза::alzò gli occhi al cielo, esasperata]]. — Договаривайся с Тимом — либо ты, либо он!",
];

const p3gaps = {
    1: { answers: ["шёл"], explanation: "шёл = movimento a piedi in corso in una direzione, in quel momento specifico, non un'abitudine." },
    2: { answers: ["нести"], explanation: "нести (infinito) = portare a mano in una direzione, azione generale riferita a un caso concreto (questo pacco)." },
    3: { answers: ["ходить"], explanation: "ходить (infinito) = attività generale/abituale (andare da qualche parte in generale), non un tragitto specifico." },
    4: { answers: ["носил"], explanation: "носил = abitudine ripetuta nel passato (quando viveva in quell'appartamento), non un tragitto singolo." },
    5: { answers: ["шёл"], explanation: "шёл = movimento a piedi in corso in una direzione, in quell'occasione precisa." },
    6: { answers: ["несёшь"], explanation: "несёшь = movimento a mano al presente, azione concreta in corso (tenere in mano la biancheria sporca)." },
    7: { answers: ["ношу"], explanation: "ношу = abitudine ripetuta al presente (porto sempre in lavanderia), non un'azione in corso ora." },
    8: { answers: ["ездил"], explanation: "ездил = abitudine ripetuta nel passato (quando la lavanderia era lontana), non un tragitto in corso." },
    9: { answers: ["иду"], explanation: "иду = movimento a piedi abituale/generale al presente (ci vogliono cinque minuti), non un tragitto in corso in questo istante." },
    10: { answers: ["бегал"], explanation: "бегал = abitudine ripetuta nel passato (due volte al mese), non un episodio singolo." },
    11: { answers: ["бегаешь"], explanation: "бегаешь = abitudine ripetuta al presente (ogni settimana)." },
    12: { answers: ["бегаю"], explanation: "бегаю = abitudine ripetuta al presente (ogni mattina)." },
    13: { answers: ["бегу"], explanation: "бегу = movimento in corso al presente, in una direzione precisa (verso di te, ora)." },
    14: { answers: ["бежал"], explanation: "бежал = movimento in corso in una direzione, in quell'occasione specifica (venerdì scorso sotto la pioggia)." },
    15: { answers: ["носила"], explanation: "носила = abitudine ripetuta per un periodo di tempo (due mesi), non un tragitto singolo." },
    16: { answers: ["ехала"], explanation: "ехала = movimento in corso in una sola direzione (quel viaggio in autobus specifico), non un'abitudine." },
    17: { answers: ["шла"], explanation: "шла = movimento a piedi in corso in una direzione, in quell'occasione precisa." },
    18: { answers: ["ездила"], explanation: "ездила = abitudine/fatto generale (mai, in generale), non un tragitto specifico." },
    19: { answers: ["носила"], explanation: "носила = abitudine/fatto generale (mai portato in casa cose altrui), non un'azione in corso." },
    20: { answers: ["ходит"], explanation: "ходит = abitudine ripetuta al presente (ci va comunque sempre), non un tragitto in corso ora." },
    21: { answers: ["иду"], explanation: "иду = movimento a piedi in corso al presente, in una direzione precisa (verso casa, adesso)." },
};

// ============================================================
// PANEL 4 — GapText · student · "Встречают по одёжке"
// Testo con lacune + glossario (no spiegazioni).
// Verbi testati: ходить/идти, ехать/ездить, бегать/бежать, нести/носить
// (носить/ходить usati anche nel senso esteso "vestire/indossare").
// ============================================================
const p4instruction = "Leggi il racconto e scrivi la forma corretta del verbo (ходить/идти, ехать/ездить, бегать/бежать, нести/носить), al presente, al passato o all'infinito. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p4paragraphs = [
    "Пятница, вечер. Компания сидела в любимом баре. Женя медленно потягивал коктейль, с лёгким ужасом разглядывая свитер Димы невероятного ядовито-зелёного цвета. Разговор у стойки быстро переключился на школьные годы и на то, кто как одевался раньше и кто в чём {{1}} сейчас.",
    "<strong>1.1</strong>",
    "— Дима, этот свитер — [[преступление против моды::un crimine contro la moda]], — Женя поправил дорогие часы. — Ты опять {{2}} вещи [[с распродаж::dai saldi]]? — Я компьютерщик, мне важен комфорт! — [[пожал плечами::alzò le spalle]] Дима. — Я ещё в школе понял, что джинсы и футболки — это самая комфортная одежда. Тогда я {{3}} и сейчас {{4}} то, что продают со скидкой. А свитер тёплый, я пока сегодня {{5}} сюда, мне было очень тепло!",
    "<strong>1.2</strong>",
    "— Ужасный подход! — возмутилась Анна. — В одежде должна быть индивидуальность. Я всегда любила эксклюзивные и персонализированные вещи! В школе я {{6}} только интересные вещи. Обычно покупала одежду в [[секонд-хенде::negozio dell'usato]] и {{7}} перешивать к [[портнихе::sarta]] или бабушке. Я и сейчас {{8}} оригинальную одежду! Могу позволить себе дорогие вещи. Но привычка носить перешивать осталась.",
    "<strong>1.3</strong>",
    "— Если честно, — Женя усмехнулся. — У моих родителей не было возможности красиво меня одевать. Помню, когда я {{9}} в школу на автобусе, со мной всегда ездила какая-то девушка. Она всегда читала модные журналы, и я всю дорогу их [[разглядывал::sfogliavo]]. Пока автобус {{10}}, я придумывал свой идеальный стиль. Согласен с тобой, Ань, стиль одежды — это очень важно. Сейчас могу себе позволить очень дорогие вещи, и винтаж мне тоже нравится, так что я {{11}} и брендовые костюмы, и винтажные!",
    "<strong>1.4</strong>",
    "— О да, твоя элегантность всем известна, — с иронией заметила Катя. — Но Андрея ты всё равно [[не перевоспитаешь::non lo cambierai]]. Помнишь, Аня? Мы в прошлом месяце {{12}} на выставку артхауса, а он {{13}} рядом с нами в спортивном костюме! Мне очень хотелось сделать вид, что он не с нами. Я помню, в школе платья вообще никогда не {{14}} — {{15}} только в джинсах. Сейчас вообще их не ношу, мне кажется, у меня и в шкафу-то их нет.",
    "<strong>1.5</strong>",
    "— Меня в школе заставляли {{16}} ужасную школьную форму! — с чувством ответил Андрей, заказывая второй бургер. — С тех пор как я могу сам решать, {{17}} только спортивные вещи. Я и в банк {{18}} в худи, и в музей. Если мне надо {{19}} тяжёлые вещи или {{20}} на велике, я не буду надевать пиджак! Мне кажется, это [[снобизм::snobismo]].",
    "<strong>1.6</strong>",
    "— Вы оба в крайностях, — вмешался Тимур. — Один {{21}} только смокинги, другой {{22}} в трениках. Нужно {{23}} то, что удобно для жизни, и не зацикливаюсь на брендах. Но в трениках на свидание или в музей — это [[перебор::è eccessivo]], Андрюх. Тратить две зарплаты на брюки — это тоже перебор. Покупать то, что придётся, потому что «уже пришёл в магазин, а там только это дёшево», мне кажется вообще абсурдом. Я всегда много двигался — мне нравится комфорт и стиль. В школе я много {{24}}, и сейчас каждый день {{25}} по утрам.",
    "<strong>1.7</strong>",
    "— Про твои пробежки мы всё знаем, — улыбнулся Дима. — Вчера смотрю: {{26}} кто-то по улице в ливень. Присматриваюсь — Тимур! Я в этот момент спокойно {{27}} в сухом такси, а он {{28}} с рюкзаком на встречу.",
    "<strong>1.8</strong>",
    "— В прошлый вторник, когда я {{29}} под дождём, я не думал о том, что шёл дождь, бежал и бежал, — ответил Тимур. — А вот Андрей вчера {{30}} четыре упаковки пива — и [[сорвал спину::si è fatto male alla schiena]]. — Вот видишь! — хохотнула Катя. — Если бы ты меньше {{31}} за бургерами и больше {{32}} пешком, или бегал, спина бы не болела!",
];

const p4gaps = {
    1: { answers: ["ходит"] },
    2: { answers: ["носишь"] },
    3: { answers: ["носил"] },
    4: { answers: ["ношу"] },
    5: { answers: ["шёл"] },
    6: { answers: ["носила"] },
    7: { answers: ["носила"] },
    8: { answers: ["ношу"] },
    9: { answers: ["ездил"] },
    10: { answers: ["ехал"] },
    11: { answers: ["ношу"] },
    12: { answers: ["ходили"] },
    13: { answers: ["шёл"] },
    14: { answers: ["носила"] },
    15: { answers: ["ходила"] },
    16: { answers: ["носить"] },
    17: { answers: ["ношу"] },
    18: { answers: ["хожу"] },
    19: { answers: ["нести"] },
    20: { answers: ["ехать"] },
    21: { answers: ["носит"] },
    22: { answers: ["ходит"] },
    23: { answers: ["носить"] },
    24: { answers: ["бегал"] },
    25: { answers: ["бегаю"] },
    26: { answers: ["бежит"] },
    27: { answers: ["ехал"] },
    28: { answers: ["бежал"] },
    29: { answers: ["бежал"] },
    30: { answers: ["нёс"] },
    31: { answers: ["ездил"] },
    32: { answers: ["ходил"] },
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
    const panel = document.getElementById('panel-past-nn-07');
    if (!panel) return;

    const container = panel.querySelector('#past-nn-07-cards-container');
    const prevBtn   = panel.querySelector('#past-nn-07-deck-prev');
    const nextBtn   = panel.querySelector('#past-nn-07-deck-next');
    const counterEl = panel.querySelector('#past-nn-07-deck-counter');

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
            card.className = 'fca01-card-container past-nn-07-card';
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
        container.querySelectorAll('.past-nn-07-card').forEach(card => {
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
                const card    = this.closest('.past-nn-07-card');
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
        container.querySelectorAll('.past-nn-07-card').forEach((c, i) => {
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
    'panel-past-nn-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-nn-01', exercises: p1exercises }),
    'panel-past-nn-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-nn-02', exercises: p2exercises }),
    'panel-past-nn-03': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nn-03', instruction: p3instruction, paragraphs: p3paragraphs, gaps: p3gaps, showHints: false }),
    'panel-past-nn-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nn-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-nn-05': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nn-05', instruction: p5instruction, paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    'panel-past-nn-06': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nn-06', instruction: p6instruction, paragraphs: p6paragraphs, gaps: p6gaps, showHints: false }),
    'panel-past-nn-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: false });
