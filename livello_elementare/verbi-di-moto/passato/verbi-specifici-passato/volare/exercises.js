import WriteDialogueExercise from '/assets/js/engines/WriteDialogueExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ── Panel 1 — public · dialoghi brevi ───────────────────────────────────────
const p1exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Андрей, ты в самолёте был такой бледный!<br>— Я десять лет не ___. А тут мы ___ два часа, и всё время трясло!<br>— Час пятьдесят, — поправил Тимур. — И не трясло, а была лёгкая турбулентность.",
        answers: ["летал", "летели"],
        explanation: "не летал десять лет → esperienza in generale: non volava da dieci anni. летели два часа → un volo preciso, in una direzione, in corso.",
        glossary: {
            "бледный": "pallido",
            "трясло": "c'erano scossoni",
            "турбулентность": "turbolenza"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Лена, ты опять была в Милане?<br>— Конечно! В прошлом году я каждый сезон ___ туда на распродажи. А в этот раз я ___ обратно с тремя чемоданами.<br>— А туда?<br>— А туда я ___ налегке.",
        answers: ["летала", "летела", "летела"],
        explanation: "летала каждый сезон → abitudine ripetuta, andata e ritorno ogni stagione. летела обратно / туда → un solo viaggio, in una direzione.",
        glossary: {
            "распродажи": "saldi",
            "чемоданами": "valigie",
            "налегке": "senza bagagli"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Катя, как Канны?<br>— Ужасно. Рейс задержали на пять часов. Когда в Каннах начиналось открытие фестиваля, мы ещё ___ над Альпами. В Ниццу мы прилетели только в два часа ночи.<br>— Ты же и в прошлом году туда ___?<br>— И в прошлом году. И каждый год что-то случается.",
        answers: ["летели", "летала"],
        explanation: "летели над Альпами → il volo era in corso nel momento in cui cominciava il festival. летала в прошлом году → un viaggio di andata e ritorno, concluso.",
        glossary: {
            "задержали": "hanno ritardato",
            "открытие": "apertura",
            "прилетели": "siamo atterrati"
        }
    },
];

// ── Panel 2 — student · coniugazione (frasi mescolate, senza spiegazioni) ───
const p2instruction = "Scrivi la forma corretta di ЛЕТЕТЬ o ЛЕТАТЬ al passato.";
const p2glossary = {
    "стюардесса": "assistente di volo",
    "правила авиакомпании": "regolamento della compagnia aerea",
    "бизнес-классом": "in business class",
    "воздушном шаре": "mongolfiera"
};
const p2exercises = [
    ["Когда начался дождь, Лена ещё ___ над Миланом.", "летела"],
    ["Андрей и Тимур ___ над Альпами, когда стюардесса принесла кофе.", "летели"],
    ["Тимур ___ в Калининград и всю дорогу читал правила авиакомпании.", "летел"],
    ["Мы ___ в Сочи ночью, и в самолёте все спали.", "летели"],
    ["Анина мама ___ в Рим первый раз в жизни и всю дорогу смотрела в окно.", "летела"],
    ["Раньше Женя каждый месяц ___ в Петербург бизнес-классом.", "летал"],
    ["Аня никогда не ___ на самолёте: она любит поезда.", "летала"],
    ["В детстве Катя и Аня каждое лето ___ к бабушке в Сочи.", "летали"],
    ["— Лена, ты когда-нибудь ___ на воздушном шаре?", "летала"],
    ["В прошлом году Лена и Катя ___ в Канны на выходные.", "летали"],
]
    .map(([text, answer]) => ({ instruction: p2instruction, text, answers: [answer], glossary: p2glossary }))
    .sort(() => Math.random() - 0.5);

// ── Panel 3 — paid · «Летел и вдруг…» (senza spiegazioni) ────────────────────
const p3exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Андрей, как полёт?<br>— Я спал. Мы ___ уже час, и вдруг пилот сказал: «Пристегните ремни!» Я проснулся и чуть не умер от страха.<br>— Ты же раньше много ___.<br>— Двадцать лет назад. Тогда пилоты так не пугали.",
        answers: ["летели", "летал"],
        glossary: {
            "Пристегните ремни": "allacciate le cinture"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Тимур, где твой новый дрон?<br>— Сначала он красиво ___ над озером. А потом вдруг полетел к лесу. Я бежал за ним два километра. Рядом с дроном ___ утки. Когда он упал, мне показалось, что они начали прикалываться.<br>— Нашёл?<br>— Нашёл. На сосне.",
        answers: ["летал", "летели"],
        glossary: {
            "новый дрон": "nuovo drone",
            "полетел": "è volato via (è partito in volo)",
            "прикалываться": "prendere in giro",
            "сосне": "pino"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Женя, почему у тебя костюм в грязи?<br>— Я шёл через парк, там дети играли в футбол. В последний момент я увидел, что мяч ___ прямо мне в лицо! Я увернулся… и упал в лужу.<br>— А мяч?<br>— А мяч прилетел прямо Андрею в руки. Он даже пиво не пролил.",
        answers: ["летел"],
        glossary: {
            "увернулся": "ho schivato",
            "лужу": "pozzanghera",
            "прилетел": "è arrivato in volo",
            "пролил": "ha versato"
        }
    },
];

// ── Panel 4 — public · testo con lacune «Андрей и парашют» ──────────────────
// GapText (showHints: false), con spiegazioni.
const p4instruction = "Leggi il racconto e scrivi la forma corretta del verbo (лететь/летать, ехать/ездить, плыть/плавать, ходить/идти, бегать/бежать). Clicca sulle parole sottolineate per vedere la traduzione in italiano.";
const p4paragraphs = [
    "В пятницу вечером банда собралась у Кати смотреть новый фильм Содерберга «Чёрный чемодан». [[Редкий случай::un caso raro]]: фильм хотели смотреть все. Но до фильма дело не дошло.",
    "— Ребята, — сказал Тимур и положил на стол [[сертификат::buono regalo]]. — В субботу прыгаем с [[парашютом::paracadute]]. Все. Андрей — тоже.",
    "<strong>1.1 Андрей</strong>",
    "— Я? С парашютом? — Андрей [[побледнел::è impallidito]]. — Я за всю жизнь {{1}} на самолёте три раза. И три раза думал, что это последний.",
    "<strong>1.2 Катя</strong>",
    "— Тимур, оставь его, — сказала Катя и погладила Андрея по плечу. — Помнишь, как мы {{2}} в Милан с [[пересадкой::scalo]] в Риме? Андрей {{3}} до Рима белый как стена. А в Риме сказал: «Дальше — только по земле» — и купил билет на поезд. Мы {{4}} до Милана час, а он {{5}} три.",
    "— Зато я видел Тоскану, — сказал Андрей.",
    "<strong>1.3 Лена</strong>",
    "— А Сицилию помнишь? — [[подколола::ha punzecchiato]] Лена. — Из Палермо до Мальты на самолёте меньше часа. Но Андрей сказал: «Только по воде!» И мы три [[лишних::in più]] часа {{6}} на машине через весь остров, а потом ещё два часа {{7}} на [[пароме::traghetto]]. А самолёт туда {{8}} сорок минут!",
    "— Зато я видел дельфинов.",
    "— Ты видел только [[пакет::sacchetto]], — сказала Лена. — Тебя всю дорогу [[укачивало::aveva il mal di mare]].",
    "<strong>1.4 Женя</strong>",
    "Женя [[отпил::ha bevuto un sorso]] вина.",
    "— В прошлом году я {{9}} двадцать раз. Самолёт — самый безопасный транспорт в мире. Андрей, это не страх. Это [[каприз::capriccio]]. Тебе просто нравится, когда тебя все уговаривают.",
    "<strong>1.5 Тимур</strong>",
    "— Страх нужно [[побороть::vincere, superare]], — сказал Тимур. — В детстве я боялся леса. Ночью я даже мимо леса не {{10}}. А теперь я каждое утро {{11}} там один. Даже зимой. В темноте. Начни летать чаще — и всё пройдёт.",
    "— Тимур, — сказал Андрей. — В лесу невозможно упасть с высоты четыре километра.",
    "Он взял пульт и включил фильм.",
    "<strong>1.6 Суббота</strong>",
    "В субботу утром они {{12}} на [[аэродром::aerodromo]] на двух машинах. Андрей тоже поехал — «посмотреть». Он стоял на земле с пивом и смотрел в небо. Где-то очень высоко {{13}} самолёт — его было почти не видно. Вдруг в небе появились три [[точки::puntini]] — Тимур, Лена и Женя. Через минуту над ними [[раскрылись::si sono aperti]] парашюты.",
    "Катя стояла рядом с Андреем. Она погладила его по плечу:",
    "— Пусть сами летают, если им нравится.",
];
const p4gaps = {
    1: {
        answers: ["летал"],
        explanation: "esperienza in generale nella vita (tre volte), non un viaggio preciso.",
    },
    2: {
        answers: ["летели"],
        explanation: "un viaggio preciso, in una direzione (verso Milano).",
    },
    3: {
        answers: ["летел"],
        explanation: "volo in corso, in una direzione (fino a Roma).",
    },
    4: {
        answers: ["летели"],
        explanation: "durata di un volo preciso, in una direzione.",
    },
    5: {
        answers: ["ехал"],
        explanation: "viaggio in treno preciso, in una direzione.",
    },
    6: {
        answers: ["ехали"],
        explanation: "un tragitto preciso in macchina, in una direzione, per tre ore.",
    },
    7: {
        answers: ["плыли"],
        explanation: "un tragitto preciso in traghetto, in una direzione.",
    },
    8: {
        answers: ["летит"],
        explanation: "fatto generale: quanto dura il volo, in una direzione.",
    },
    9: {
        answers: ["летал"],
        explanation: "andata e ritorno ripetuti (venti volte).",
    },
    10: {
        answers: ["ходил"],
        explanation: "abitudine al passato (di notte non ci andava mai).",
    },
    11: {
        answers: ["бегаю"],
        explanation: "abitudine al presente (ogni mattina), senza una meta.",
    },
    12: {
        answers: ["ехали"],
        explanation: "un tragitto preciso verso l'aerodromo.",
    },
    13: {
        answers: ["летел"],
        explanation: "l'aereo era in volo in quel momento.",
    },
};

// ── Panel 5 — student · testo con lacune «Анина мама летит в Рим» ───────────
// GapText (showHints: false, senza spiegazioni).
const p5instruction = "Leggi il racconto e scrivi la forma corretta del verbo: лететь/летать, ехать/ездить, идти/ходить, бегать/бежать al presente o al passato; нести/носить, вести/водить, везти/возить al presente. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";
const p5paragraphs = [
    "Анина мама семьдесят лет никуда не {{1}}. Раньше она {{2}} только на дачу и на озеро — плавать в проруби. И вот она [[решилась::si è decisa]]: Рим, Колизей, настоящая пицца. Провожать маму поехала вся банда.",
    "<strong>1.1 Дорога</strong>",
    "В шесть утра они {{3}} в аэропорт на двух машинах. Аня сидела рядом с мамой и проверяла документы: паспорт, билет, [[страховка::assicurazione]].",
    "— Мама, где чемодан?",
    "— У Жени в багажнике. Женя его {{4}}.",
    "<strong>1.2 Терминал</strong>",
    "В терминале Тимур {{5}} впереди всех и читал правила авиакомпании. Андрей {{6}} за ним с пакетом.",
    "— Андрей, что ты {{7}}? — спросила Катя.",
    "— Бутерброды. Для мамы. В самолёте же кормят [[пластиком::plastica (qui: cibo finto)]].",
    "А Лена, как обычно, [[пошла::è andata]] по магазинам — посмотреть, что бы себе купить.",
    "<strong>1.3 Стойка регистрации</strong>",
    "Девушка на [[стойке регистрации::banco del check-in]] долго смотрела в компьютер.",
    "— Рейс на Рим? Ваш самолёт [[улетел::è partito (in volo)]] вчера.",
    "— Как вчера?! — Аня побледнела.",
    "Тимур взял билет: на билете было вчерашнее число.",
    "— Кто покупал билет?",
    "— Я, — тихо сказала Аня. — Я [[перепутала::ho confuso]] дату.",
    "Все [[запаниковали::sono andati nel panico]]. Аня {{8}} по терминалу от одной стойки к другой. Тимур спорил с сотрудницей и цитировал правила. Женя {{9}} туда-сюда с телефоном и искал бизнес-класс: «Есть рейс через Стамбул!» Андрей предлагал:",
    "— Давайте на поезде! Я в прошлом году из Рима в Милан {{10}} — нормально!",
    "— Аня, — сказала Катя, — я {{11}} тебя пить кофе. Сейчас же.",
    "Лена {{12}} из магазина с новой сумкой.",
    "— А что случилось? — Лена удивлённо посмотрела на всех. — Что за [[кризис::crisi]] [[разразился::è scoppiato]], пока я {{13}} за сумкой?",
    "<strong>1.4 Мама</strong>",
    "А где мама? Мама спокойно сидела в кафе.",
    "— Мама! Что ты делаешь?!",
    "— Пью кофе. Я купила новый билет. Самолёт {{14}} в Рим через три часа. Прямой.",
    "— Когда ты успела?!",
    "— Пока вы {{15}} по терминалу. Доченька, есть ситуации, в которых паника — это [[лишнее::superfluo]]. Я {{16}} купаться в прорубь, у меня нервы стали [[железные::d'acciaio]].",
    "Через три часа банда стояла у большого окна. Самолёт, в котором {{17}} мама, медленно поднимался в небо.",
    "Вечером Аня получила фото: мама у Колизея, с мороженым. И сообщение: «Билет на обратный рейс — на правильное число. Я проверила».",
];
const p5gaps = {
    1: {
        answers: ["летала"],
    },
    2: {
        answers: ["ездила"],
    },
    3: {
        answers: ["ехали"],
    },
    4: {
        answers: ["везёт"],
    },
    5: {
        answers: ["шёл"],
    },
    6: {
        answers: ["бежал"],
    },
    7: {
        answers: ["несёшь"],
    },
    8: {
        answers: ["бегала"],
    },
    9: {
        answers: ["ходил"],
    },
    10: {
        answers: ["ехал"],
    },
    11: {
        answers: ["веду"],
    },
    12: {
        answers: ["шла"],
    },
    13: {
        answers: ["ходила"],
    },
    14: {
        answers: ["летит"],
    },
    15: {
        answers: ["бегали"],
    },
    16: {
        answers: ["хожу"],
    },
    17: {
        answers: ["летела"],
    },
};

// ── Panel 6 — paid · testo con lacune «Андрей в аэротрубе» ──────────────────
// GapText (showHints: false, senza spiegazioni).
const p6instruction = "Leggi il racconto e scrivi la forma corretta del verbo: лететь/летать, ехать/ездить, идти/ходить, бегать/бежать al presente o al passato; нести/носить, вести/водить, везти/возить al presente. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";
const p6paragraphs = [
    "После прыжка с парашютом банда не успокоилась. В пятницу вечером у Кати Андрея опять [[уговаривали::cercavano di convincere]].",
    "— Андрей, подумай, — сказала Лена. — Вот ты {{1}} в самолёте, и вдруг самолёт падает. А ты умеешь прыгать с парашютом!",
    "— В самолётах нет парашютов, — сказал Андрей.",
    "— Ты же в прошлом году три раза {{2}} — и ничего, — сказал Женя.",
    "Тимур поднял руку.",
    "— Стоп. Так нельзя. К страху надо подходить [[мягко::con delicatezza]]. [[Шаг за шагом::passo dopo passo]]. Андрей, ты знаешь, что такое [[аэротруба::galleria del vento]]? Это стеклянная труба, в которой {{3}} без самолёта. Поток воздуха снизу, высота — два метра, рядом — инструктор.",
    "— Два метра? — Андрей подумал. — С двух метров я падал с велосипеда. Ладно. Но только посмотреть.",
    "<strong>1.1 Суббота</strong>",
    "В субботу они {{4}} в аэротрубу на двух машинах. Андрей всю дорогу молчал.",
    "— Я {{5}} тебе шоколадку, — сказала Катя. — За смелость.",
    "<strong>1.2 Труба</strong>",
    "Внутри было шумно: под полом гудели огромные [[вентиляторы::ventilatori]]. В трубе {{6}} девочка лет восьми — вверх, вниз, по кругу — и смеялась.",
    "— Видишь? — сказал Тимур. — Если она может, то и ты сможешь.",
    "Андрею дали [[комбинезон::tuta]] и [[шлем::casco]].",
    "— Я {{7}} вас в трубу, — сказал инструктор. — Руки вот так, голову вверх. И улыбайтесь!",
    "Лена {{8}} вокруг трубы с телефоном и искала лучший [[ракурс::inquadratura]]. Женя сел в кресло и сказал, что в бизнес-классе удобнее.",
    "<strong>1.3 Полёт</strong>",
    "Первую минуту Андрея [[мотало::sballottava]] как [[мешок с картошкой::sacco di patate]]: он {{9}} от одной стенки к другой, потом {{10}} вверх, потом его начинало [[кружить::far girare]]. Вдруг он [[полетел::è volato (di colpo)]] прямо на инструктора, и тот поймал его за комбинезон. А потом что-то случилось. Андрей перестал кричать, [[раскинул::ha allargato]] руки и спокойно {{11}} по кругу.",
    "— Андрей, я {{12}} твоё пиво в машину! — крикнула Аня через стекло.",
    "Андрей её не слышал.",
    "<strong>1.4 После</strong>",
    "Андрей вышел из трубы красный и счастливый.",
    "— Я {{13}}! Вы видели? Я {{14}}!",
    "— Видели, — сказала Катя. — Особенно как ты [[полетел::è volato (di colpo)]] на инструктора.",
    "Когда они {{15}} к машине, Тимур уже что-то [[набирал::digitava]] в телефоне.",
    "— Отлично. Следующий шаг — прыжок. Я записал тебя на субботу.",
    "— Тимур!",
    "— Шаг за шагом, — сказал Тимур.",
    "Андрей посмотрел на трубу, потом на Тимура.",
    "— Ладно. Но если самолёт будет падать, я прыгаю первым.",
];
const p6gaps = {
    1: {
        answers: ["летишь"],
    },
    2: {
        answers: ["летал"],
    },
    3: {
        answers: ["летают"],
    },
    4: {
        answers: ["ехали"],
    },
    5: {
        answers: ["везу"],
    },
    6: {
        answers: ["летала"],
    },
    7: {
        answers: ["веду"],
    },
    8: {
        answers: ["бегала"],
    },
    9: {
        answers: ["летал"],
    },
    10: {
        answers: ["летел"],
    },
    11: {
        answers: ["летал"],
    },
    12: {
        answers: ["несу"],
    },
    13: {
        answers: ["летал"],
    },
    14: {
        answers: ["летал"],
    },
    15: {
        answers: ["шли"],
    },
};

// ── Panel 7 — public · Quiz misto (multiple choice + match + write) ───────────
// 30 frasi dai tre testi (лететь/летать + ехать, плыть, бегать, нести, вести, везти)
function initPanel7() {
    const panel = document.getElementById('panel-past-vol-07');
    if (!panel) return;

    const container = panel.querySelector('#past-vol-07-cards-container');
    const prevBtn   = panel.querySelector('#past-vol-07-deck-prev');
    const nextBtn   = panel.querySelector('#past-vol-07-deck-next');
    const counterEl = panel.querySelector('#past-vol-07-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Андрей за всю жизнь ___ на самолёте три раза.", options: ["летал", "летел", "летит"], answer: "летал" },
        { question: "До Рима Андрей ___ белый как стена.", options: ["летал", "летел", "летает"], answer: "летел" },
        { question: "Из Палермо до Мальты самолёт ___ сорок минут.", options: ["летал", "летел", "летит"], answer: "летит" },
        { question: "В прошлом году Женя ___ двадцать раз.", options: ["летал", "летел", "летит"], answer: "летал" },
        { question: "Где-то очень высоко ___ самолёт — его было почти не видно.", options: ["летал", "летел", "летает"], answer: "летел" },
        { question: "В трубе ___ девочка лет восьми — вверх, вниз, по кругу.", options: ["летела", "летит", "летала"], answer: "летала" },
        { question: "Андрея мотало: он ___ от одной стенки к другой.", options: ["летал", "летел", "летит"], answer: "летал" },
        { question: "Самолёт, в котором ___ мама, медленно поднимался в небо.", options: ["летала", "летела", "летает"], answer: "летела" },
        { question: "Анина мама семьдесят лет никуда не ___.", options: ["летела", "летит", "летала"], answer: "летала" },
        { question: "— Вот ты ___ в самолёте, и вдруг самолёт падает.", options: ["летишь", "летал", "летаешь"], answer: "летишь" },
    ];
    const matchPairs = [
        { left: "Мы ___ в Милан с пересадкой в Риме.", right: "летели" },
        { left: "Аэротруба — это труба, в которой ___ без самолёта.", right: "летают" },
        { left: "Смотри, утки ___ на юг!", right: "летят" },
        { left: "Женя часто ___ в командировки бизнес-классом.", right: "летает" },
        { left: "— Ты где? — В самолёте, ___ в Рим!", right: "лечу" },
        { left: "Раньше Катя много ___, а теперь ездит на поезде.", right: "летала" },
        { left: "Весь полёт Андрей ___ с закрытыми глазами.", right: "летел" },
        { left: "Три часа мы ___ на машине через всю Сицилию.", right: "ехали" },
        { left: "Два часа мы ___ на пароме до Мальты.", right: "плыли" },
        { left: "Аня ___ по терминалу от одной стойки к другой.", right: "бегала" },
    ];
    const quizData = [
        { id: "q01", promptPrefix: "В субботу утром они ", promptSuffix: " на аэродром на двух машинах.", answers: ["ехали"] },
        { id: "q02", promptPrefix: "Всю дорогу до Рима Андрей ", promptSuffix: " белый как стена.", answers: ["летел"] },
        { id: "q03", promptPrefix: "— В прошлом году я ", promptSuffix: " двадцать раз, — сказал Женя.", answers: ["летал"] },
        { id: "q04", promptPrefix: "Девочка ", promptSuffix: " в трубе по кругу и смеялась.", answers: ["летала"] },
        { id: "q05", promptPrefix: "Потом Андрей ", promptSuffix: " вверх, и его начинало кружить.", answers: ["летел"] },
        { id: "q06", promptPrefix: "— Я ", promptSuffix: " тебе шоколадку, — сказала Катя в машине.", answers: ["везу"] },
        { id: "q07", promptPrefix: "— Я ", promptSuffix: " вас в трубу, — сказал инструктор.", answers: ["веду"] },
        { id: "q08", promptPrefix: "Лена ", promptSuffix: " вокруг трубы с телефоном.", answers: ["бегала"] },
        { id: "q09", promptPrefix: "— Пока вы ", promptSuffix: " по терминалу, я купила новый билет.", answers: ["бегали"] },
        { id: "q10", promptPrefix: "Самолёт ", promptSuffix: " в Рим через три часа. Прямой.", answers: ["летит"] },
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
            card.className = 'fca01-card-container past-vol-07-card';
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
        container.querySelectorAll('.past-vol-07-card').forEach(card => {
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
                const card    = this.closest('.past-vol-07-card');
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
        container.querySelectorAll('.past-vol-07-card').forEach((c, i) => {
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



// ── Panel Manager ────────────────────────────────────────────────────────────
const initializers = {
    'panel-past-vol-01': () => new WriteDialogueExercise({ rootId: 'ex-write-past-vol-01', exercises: p1exercises }),
    'panel-past-vol-02': () => new WriteDialogueExercise({ rootId: 'ex-write-past-vol-02', exercises: p2exercises }),
    'panel-past-vol-03': () => new WriteDialogueExercise({ rootId: 'ex-write-past-vol-03', exercises: p3exercises }),
    'panel-past-vol-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vol-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-vol-05': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vol-05', instruction: p5instruction, paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    'panel-past-vol-06': () => new GapTextExercise({ rootId: 'ex-gaptext-past-vol-06', instruction: p6instruction, paragraphs: p6paragraphs, gaps: p6gaps, showHints: false }),
    'panel-past-vol-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: true });
