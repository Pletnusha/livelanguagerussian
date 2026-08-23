import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// Struttura della pagina (identica a idti-xodit-passato) —
// contenuti in sviluppo, riempiti panel per panel.
//
// PANEL 1 — DragDrop · public  · Spряжение ЕЗДИТЬ passato
// PANEL 2 — DragDrop · student · Spряжение ЕХАТЬ passato
// PANEL 3 — GapText  · public  · Testo con lacune + glossario + spiegazioni
// PANEL 4 — GapText  · student · Testo con lacune + glossario (no spiegazioni)
// PANEL 5 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 6 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 7 — Mixed Quiz · public · задания собираются из блоков 1-3
// ============================================================

// ============================================================
// PANEL 1 — DragDrop · public · Spряжение ЕЗДИТЬ passato
// (ездил / ездила / ездило / ездили)
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Раньше он {{1}} на работу на машине каждый день.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" },
        explanation: "ездил = azione abituale ripetuta nel passato (ogni giorno in macchina), non un tragitto singolo in un momento preciso."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Она всегда {{1}} на дачу по выходным.",
        words: ["ездила", "ездил", "ездили"],
        correctAnswers: { 1: "ездила" },
        explanation: "ездила = abitudine ripetuta (ogni weekend), non un movimento in corso in un momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "В детстве мы часто {{1}} к бабушке в деревню.",
        words: ["ездили", "ездил", "ездила"],
        correctAnswers: { 1: "ездили" },
        explanation: "ездили = abitudine ripetuta nell'infanzia (spesso), non un tragitto singolo in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Он никогда не {{1}} за границу.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" },
        explanation: "ездил = azione generale/abituale (mai andato, in generale), non un viaggio specifico in corso in un momento preciso."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Лена {{1}} на курсы английского каждую неделю.",
        words: ["ездила", "ездил", "ездили"],
        correctAnswers: { 1: "ездила" },
        explanation: "ездила = abitudine ripetuta (ogni settimana), non un tragitto in corso in quel momento."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Они {{1}} в один и тот же отель каждое лето.",
        words: ["ездили", "ездил", "ездила"],
        correctAnswers: { 1: "ездили" },
        explanation: "ездили = abitudine ripetuta (ogni estate) — andata e ritorno ripetuti nel tempo, non un unico tragitto."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Я {{1}} к морю ещё ребёнком.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" },
        explanation: "ездил = azione generale riferita a un periodo della vita (da bambino), non un singolo tragitto in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Бабушка {{1}} в поликлинику каждую неделю.",
        words: ["ездила", "ездил", "ездили"],
        correctAnswers: { 1: "ездила" },
        explanation: "ездила = abitudine ripetuta (ogni settimana), non un tragitto in corso in un momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Дети {{1}} в школу на автобусе.",
        words: ["ездили", "ездил", "ездила"],
        correctAnswers: { 1: "ездили" },
        explanation: "ездили = fatto abituale/generale (andavano a scuola in autobus), non un tragitto specifico in un momento preciso."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Он {{1}} на работу каждый день в одно и то же время.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" },
        explanation: "ездил = abitudine quotidiana ripetuta, non un movimento in corso in un momento preciso."
    },
];

// ============================================================
// PANEL 2 — DragDrop · student · Spряжение ЕХАТЬ passato
// (ехал / ехала / ехало / ехали) — durata/sfondo di un movimento
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Вчера Андрей {{1}} на работу два часа.",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехал" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Катя {{1}} домой, когда ей позвонили.",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехала" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Такси {{1}} в пробке очень медленно.",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехало" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Мы {{1}} в Москву, когда сломалась машина.",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехали" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Она первый раз {{1}} из деревни одна.",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехала" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Она {{1}} по парку на велосипеде, когда увидела Андрея.",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехала" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Они {{1}} всю ночь, пока не рассвело.",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехали" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Дима {{1}} на дачу новой дорогой.",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехал" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Машина {{1}} прямо, когда вдруг появился пешеход.",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехала" }
    },
    {
        instruction: "Выбери правильную форму глагола ЕХАТЬ (passato).",
        text: "Почему вы так долго {{1}}?",
        words: ["ехал", "ехала", "ехало", "ехали"],
        correctAnswers: { 1: "ехали" }
    },
];

// ============================================================
// PANEL 3 — GapText · public · Testo connesso con lacune + glossario
// Traduzione cliccabile delle espressioni idiomatiche/complesse
// (showHints: false — nessun infinito accanto al gap).
// Testate tutte le forme e tutte le coppie di verbi di moto che
// compaiono nel testo: ходить/идти, ехать/ездить, водить, нести,
// лететь — passato, presente e infinito.
// ============================================================
const p3instruction = "Leggi il racconto e scrivi la forma corretta del verbo, al presente (хожу/езжу/водишь/ездят/ходим), al passato (ехали/шли/ходила/несли) o all'infinito (ездить/ходить/лететь). Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p3paragraphs = [
    "Мы стояли три часа в [[пробке::ingorgo (traffico bloccato)]]! — возмутился Андрей. — Я обычно {{1}} пешком в бар или {{2}} на велосипеде по району, а тут я просидел полдня в машине!",
    "<strong>1.2</strong>",
    "— Андрей, мы вообще-то {{3}} на моей машине, а ты просто спал на заднем сиденье, — спокойно ответил Тимур. — Я другого не понимаю. Девочки, зачем нужно было брать пакеты с продуктами с собой? Я же на машине, могли всё положить ко мне в [[багажник::bagagliaio (portabagagli dell'auto)]]!",
    "<strong>1.3</strong>",
    "— Потому что я не люблю {{4}} с тобой, Тимур — ты слишком агрессивно {{5}}, — сказала Катя. — Мы с Анной {{6}} на [[электричке::treno locale (treno regionale/suburbano)]]. Но от станции мы {{7}} пешком сорок минут по [[грязи::fango (melma)]] с этими пакетами! Обычно я {{8}} по лесу с огромным удовольствием, но не с картошкой и помидорами!",
    "<strong>1.4</strong>",
    "— Я специально {{9}} на фермерский рынок в пятницу, чтобы купить нормальное свежее мясо, — возмутилась Анна. — И да, мы {{10}} от станции пешком, зато ели нормальную еду! Я не доверю хорошее мясо твоему багажнику, Тимур!",
    "<strong>1.5</strong>",
    "— Зачем вы вообще всё это {{11}}? — Женя поправил дорогие часы. — Я же говорил, что у меня [[подписка на доставку::abbonamento alla consegna a domicilio]]. Ко мне на дачу каждую неделю {{12}} курьеры и привозят всё необходимое. Вам вообще не нужно было никуда {{13}}.",
    "<strong>1.6</strong>",
    "— А я говорила, что нужно {{14}} в спа-отель на выходные, — Лена посмотрела на свой идеальный маникюр. — Вы всё {{15}} и {{16}} на эту дачу. А в итоге мы только {{17}} по грязи, стоим в пробках и ругаемся из-за мяса.",
];

const p3gaps = {
    1: {
        answers: ["хожу"],
        explanation: "хожу = abitudine al presente (di solito vai a piedi al bar), non un movimento diretto in un momento preciso.",
    },
    2: {
        answers: ["езжу"],
        explanation: "езжу = abitudine al presente in bicicletta per il quartiere (senza una direzione unica), non un tragitto singolo.",
    },
    3: {
        answers: ["ехали"],
        explanation: "ехали = movimento in corso in una sola direzione (viaggio in macchina in corso in quel momento), non un'abitudine ripetuta.",
    },
    4: {
        answers: ["ездить"],
        explanation: "ездить (infinito) = attività generale/abituale (non le piace viaggiare con lui in generale), non un tragitto specifico in una direzione.",
    },
    5: {
        answers: ["водишь"],
        explanation: "водишь = abitudine/comportamento generale (guidi sempre così aggressivamente), non un'azione in corso in questo momento.",
    },
    6: {
        answers: ["ехали"],
        explanation: "ехали = movimento in corso in una sola direzione (il viaggio in treno in quell'occasione), non un'abitudine.",
    },
    7: {
        answers: ["шли"],
        explanation: "шли = movimento a piedi in una sola direzione (dalla stazione), in quell'occasione precisa, non un'abitudine.",
    },
    8: {
        answers: ["хожу"],
        explanation: "хожу = abitudine al presente (di solito cammini nel bosco con piacere), non un tragitto in corso ora.",
    },
    9: {
        answers: ["ходила"],
        explanation: "ходила = andata e tornata dal mercato (viaggio di andata e ritorno completato in quell'occasione specifica), non шла che descriverebbe il tragitto in corso.",
    },
    10: {
        answers: ["шли"],
        explanation: "шли = movimento a piedi in una sola direzione in quell'occasione, non un'abitudine.",
    },
    11: {
        answers: ["несли"],
        explanation: "несли = movimento (portare qualcosa) in corso in una direzione in quell'occasione specifica, non носили che indicherebbe un'abitudine ripetuta.",
    },
    12: {
        answers: ["ездят"],
        explanation: "ездят = abitudine ripetuta (ogni settimana), non un tragitto in corso in un momento preciso.",
    },
    13: {
        answers: ["ходить"],
        explanation: "ходить (infinito) = attività generale (non dovevate andare da nessuna parte, in generale), non un tragitto specifico in una direzione.",
    },
    14: {
        answers: ["лететь"],
        explanation: "лететь (infinito) = un viaggio specifico proposto (questo fine settimana), in una sola direzione, non летать che indicherebbe un'abitudine.",
    },
    15: {
        answers: ["ездите"],
        explanation: "ездите = abitudine ripetuta (andate sempre a questa dacia), ripetuto per enfasi retorica.",
    },
    16: {
        answers: ["ездите"],
        explanation: "ездите = ripetizione della stessa forma per enfasi retorica.",
    },
    17: {
        answers: ["ходим"],
        explanation: "ходим = abitudine al presente (camminiamo sempre nel fango), non un movimento in corso in un momento preciso.",
    },
};

// ============================================================
// PANEL 4 — GapText · student · Testo con lacune + glossario
// (showHints: false). Verbi: ходить/идти, ехать/ездить —
// passato, presente e infinito.
// ============================================================
const p4instruction = "Leggi il racconto e scrivi la forma corretta del verbo (ходить/идти/ехать/ездить), al presente, al passato o all'infinito. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p4paragraphs = [
    "В прошлом году друзья {{1}} в горы. Жили в одном и том же отеле, но отдых у всех был абсолютно разный. Катя и Женя отдыхали и расслаблялись в спа: ходили на массаж, на [[процедуры по уходу::trattamenti di bellezza]], в сауну. Тимур и Лена целыми днями гуляли по горам. А энергичная Анна заставила Андрея {{2}} в поход с палаткой.",
    "<strong>1.1</strong>",
    "— Я не понимаю, зачем вы в прошлом году {{3}} в горы, — вздохнула Катя, элегантно поправляя волосы. — Мы с Женей каждый день {{4}} в спа-центр при отеле. А вы где-то пачкали обувь. — Мы {{5}} за пейзажами, за прогулками по горным тропам! — возмутилась Лена, которая обожает активный отдых. — Мы с Тимуром каждый день {{6}} по новым маршрутам.",
    "<strong>1.2</strong>",
    "— Мы тоже {{7}} по новым маршрутам, — Женя вздохнул и сделал глоток. — Мы {{8}} на массаж. Я вообще не люблю {{9}} на дикую природу, чтобы там страдать. — Вы потеряли время! — сказал Тимур. — Когда мы поднимались по склонам, мы видели неописуемой красоты пейзажи.",
    "<strong>1.3</strong>",
    "— А вот зачем я {{10}} с Анной на скалы — это главная загадка моей жизни. — Потому что сидеть в отеле — это скучно! — ответила Анна. — Мы отлично {{11}} на [[скалодром::palestra di arrampicata]], а потом спали в палатке!",
    "<strong>1.4</strong>",
    "— Это ты отлично {{12}}! — Андрей чуть не уронил стакан с пивом. — А я нёс эту огромную палатку! Когда мы {{13}} в гору, я думал, что это мой последний день. Я всегда {{14}} на [[фуникулёре::funivia]]! Зачем мы вообще {{15}}?! — Потому что фуникулёр не работает ночью! — засмеялась Анна. — Экстрим — это [[преодоление себя::superare se stessi]].",
    "<strong>1.5</strong>",
    "— Я хотел [[преодолевать себя::superare me stesso]] в спа-центре вместе с Женей! — крикнул Андрей. — Пока я нёс тяжелые рюкзаки, ты просто {{16}} рядом [[налегке::senza peso, a mani libere]]! Я обычно ничего тяжелее джойстика от PlayStation не ношу! — Зато когда мы {{17}} обратно в отель на автобусе, ты съел пять сосисок, — заметила Катя.",
    "<strong>1.6</strong>",
    "— Потому что у меня был сильный стресс! — ответил Андрей. — В следующий раз, если мы куда-то {{18}}, я остаюсь в лобби с Катей и Женей. — Договорились, — улыбнулся Женя. — Но мы больше никуда не {{19}}. Сидим в городе, пьём вино и {{20}} в наш бар.",
];

const p4gaps = {
    1: { answers: ["ездили"] },
    2: { answers: ["идти"] },
    3: { answers: ["ездили"] },
    4: { answers: ["ходили"] },
    5: { answers: ["ездили"] },
    6: { answers: ["ходили"] },
    7: { answers: ["ходили"] },
    8: { answers: ["ходили"] },
    9: { answers: ["ездить"] },
    10: { answers: ["ездил"] },
    11: { answers: ["ходили"] },
    12: { answers: ["ходила"] },
    13: { answers: ["шли"] },
    14: { answers: ["езжу"] },
    15: { answers: ["шли"] },
    16: { answers: ["шла"] },
    17: { answers: ["ехали"] },
    18: { answers: ["едем"] },
    19: { answers: ["ездим"] },
    20: { answers: ["ходим"] },
};
// ============================================================
// PANEL 5 — GapText · paid · Testo con lacune + glossario
// (showHints: false). Verbi: ходить/идти, ехать/ездить —
// passato, presente e infinito.
// ============================================================
const p5instruction = "Leggi il racconto e scrivi la forma corretta del verbo (ходить/идти/ехать/ездить), al presente, al passato o all'infinito. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p5paragraphs = [
    "В прошлые выходные компания решила отдохнуть на природе и забронировала модный [[эко-отель::eco-resort]] в лесу. [[Главная фишка::Il punto forte]] места — полное отсутствие машин на территории.",
    "<strong>1.1</strong>",
    "— Я обожаю чёткую логистику и всегда везде {{1}} на машине, — Даша [[скрестила руки на груди::incrociò le braccia sul petto]]. — Но в этот эко-отель {{2}} на машинах нельзя! Нам пришлось бросить мой джип на парковке в лесу. В прошлом году мы {{3}} на нормальную турбазу, и мы парковались прямо у дома!",
    "<strong>1.2</strong>",
    "— [[Это ещё полбеды::è ancora il meno]], — Андрей мрачно откусил бургер. — Сначала мы {{4}} к этой парковке по [[грунтовой дороге::strada sterrata]]. Я обычно {{5}} только по городу. А тут мы {{6}} через какие-то ямы, [[нас трясло::ci scuoteva (per le buche)]], а потом нас заставили {{7}} пешком два километра!",
    "<strong>1.3</strong>",
    "— Это концепция цифрового детокса и тишины, — Женя [[поднял глаза к небу::alzò gli occhi al cielo]]. — Я вот очень люблю {{8}} пешком. Я просто взял свой лёгкий рюкзак и {{9}} по тропинке. Пока я {{10}} через сосновый лес, я [[наслаждался::si godeva]] эстетикой природы.",
    "<strong>1.4</strong>",
    "— Да, мы с Женей часто {{11}} в походы ради таких видов, — кивнула Катя. — Мы прекрасно {{12}} и обсуждали фильм Альмадовера. Воздух был потрясающий и тишина.",
    "<strong>1.5</strong>",
    "— Вы прекрасно {{13}}, потому что у вас не было сумок! — возмутилась Лена, глядя на свой [[безупречный маникюр::manicure impeccabile]]. — А я {{14}} в новых кроссовках по грязи! Вы же знаете, я в городе всегда {{15}} на такси, я вообще пешком не {{16}}! И пока я {{17}} по этому лесу, я [[убила::ha rovinato (lett. «ha ucciso»)]] свои новые дорогущие кроссовки.",
    "<strong>1.6</strong>",
    "— Я тоже была очень зла, — добавила Анна, разрезая стейк. — Утром перед поездкой я специально {{18}} на фермерский рынок за отличной говядиной. Я не покупаю мясо в супермаркетах. И пока мы {{19}} к отелю, я [[тащила::trascinavo]] огромную сумку-холодильник! Зачем мы вообще туда {{20}}?",
    "<strong>1.7</strong>",
    "— Вы просто не умеете отдыхать активно, — [[усмехнулся::sogghignò]] Тимур. — Я оставил машину ещё на станции и {{21}} до отеля на горном велосипеде. Я {{22}} по лесу и слушал подкаст. Идеальное кардио.",
    "<strong>1.8</strong>",
    "— Твоё кардио меня не интересует, — тяжело вздохнул Андрей. — Я больше ни на какие турбазы не {{23}}. В субботу я {{24}} только в бар, а потом лежу на диване с PlayStation.",
];

const p5gaps = {
    1: { answers: ["езжу"] },
    2: { answers: ["ездить"] },
    3: { answers: ["ездили"] },
    4: { answers: ["ехали"] },
    5: { answers: ["езжу"] },
    6: { answers: ["ехали"] },
    7: { answers: ["идти"] },
    8: { answers: ["ходить"] },
    9: { answers: ["шёл"] },
    10: { answers: ["шёл"] },
    11: { answers: ["ходим"] },
    12: { answers: ["шли"] },
    13: { answers: ["шли"] },
    14: { answers: ["шла"] },
    15: { answers: ["езжу"] },
    16: { answers: ["хожу"] },
    17: { answers: ["шла"] },
    18: { answers: ["ходила"] },
    19: { answers: ["шли"] },
    20: { answers: ["ездили"] },
    21: { answers: ["ехал"] },
    22: { answers: ["ехал"] },
    23: { answers: ["езжу"] },
    24: { answers: ["иду"] },
};
// ============================================================
// PANEL 6 — GapText · paid · Testo con lacune + glossario
// (showHints: false). Verbi: ходить/идти, ехать/ездить —
// passato, presente e infinito.
// ============================================================
const p6instruction = "Leggi il racconto e scrivi la forma corretta del verbo (ходить/идти/ехать/ездить), al presente, al passato o all'infinito. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p6paragraphs = [
    "[[День сурка::il giorno della marmotta]]. В пятницу вечером друзья собрались в баре. Катя была недовольна. Каждые выходные они делают одно и то же: либо сидят в этом баре, либо {{1}} за город на дачу к Жене. Катя решила, что с неё хватит.",
    "<strong>1.1</strong>",
    "— Я больше не могу, — Катя отодвинула бокал. — Мы каждый раз {{2}} и {{3}} в одни и те же места! У нас день сурка. В прошлые выходные мы опять {{4}} к Жене на дачу. — Отличная дача, — ответил Андрей. — Я туда {{5}} на велосипеде, погода была супер. А потом лежал на диване, играл в PlayStation и никуда не {{6}}.",
    "<strong>1.2</strong>",
    "— Ты {{7}} на велосипеде, потому что ты странный, — скривилась Лена. — А я туда {{8}} на машине и три часа стояла в пробке! Я ненавижу туда {{9}}. Там только грязь, это неэстетично. — Я тоже не люблю туда {{10}}, — вздохнула Даша. — Там нет нормальных супермаркетов. В субботу мне пришлось {{11}} в город за продуктами. И пока я {{12}} обратно с пакетами, я видела Тимура.",
    "<strong>1.3</strong>",
    "— Я бегал, — сухо сказал Тимур. — У меня строгий режим, я каждый день бегаю. И когда я бежал мимо станции, я видел Анну. Анна гордо {{13}} под дождём. — Потому что в дачном посёлке нет рынка! — возмутилась Анна. — Мне пришлось везти мясо из города. Я {{14}} на электричке, так что сумки мне пришлось нести самой и пешком {{15}} до дачи.",
    "<strong>1.4</strong>",
    "— Зачем вы вообще куда-то {{16}} и {{17}}? — элегантно поправил часы Женя. — Моя еда по подписке приехала сама. А я просто {{18}} по лесу, дышал воздухом и слушал подкаст про биохакинг. Я очень люблю {{19}} пешком. — Вот именно! — Катя [[всплеснула руками::alzò le mani, esasperata]]. — Мы {{20}} на природу, но ничего не меняется. Женя {{21}} пешком, Тимур бегал, Анна {{22}} за мясом, Даша зачем-то {{23}} в супермаркет. Вы даже за городом делаете всё то же самое!",
    "<strong>1.5</strong>",
    "— Резюмируем, — Женя посмотрел на часы. — В прошлые выходные мы {{24}} на природу. В итоге Даша {{25}} за продуктами, Анна {{26}} на рынок. В эти выходные мы никуда не {{27}}. Сидим в городе и {{28}} в наш бар.",
];

const p6gaps = {
    1: { answers: ["ездят"] },
    2: { answers: ["ездим"] },
    3: { answers: ["ходим"] },
    4: { answers: ["ездили"] },
    5: { answers: ["ехал"] },
    6: { answers: ["ходил"] },
    7: { answers: ["ехал"] },
    8: { answers: ["ехала"] },
    9: { answers: ["ездить"] },
    10: { answers: ["ездить"] },
    11: { answers: ["ездить"] },
    12: { answers: ["ехала"] },
    13: { answers: ["ходила"] },
    14: { answers: ["ехала"] },
    15: { answers: ["идти"] },
    16: { answers: ["ездили"] },
    17: { answers: ["ходили"] },
    18: { answers: ["шёл"] },
    19: { answers: ["ходить"] },
    20: { answers: ["ездим"] },
    21: { answers: ["ходил"] },
    22: { answers: ["ездила"] },
    23: { answers: ["ездила"] },
    24: { answers: ["ездили"] },
    25: { answers: ["ездила"] },
    26: { answers: ["ездила"] },
    27: { answers: ["едем"] },
    28: { answers: ["ходим"] },
};
// TODO: Panel 7 — costruita da p1exercises (MC) + p2exercises (match) + selezione write-in

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-past-ez-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ez-01', exercises: p1exercises }),
    'panel-past-ez-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ez-02', exercises: p2exercises }),
    'panel-past-ez-03': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-03', instruction: p3instruction, paragraphs: p3paragraphs, gaps: p3gaps, showHints: false }),
    'panel-past-ez-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-ez-05': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-05', instruction: p5instruction, paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    'panel-past-ez-06': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-06', instruction: p6instruction, paragraphs: p6paragraphs, gaps: p6gaps, showHints: false }),
    // 'panel-past-ez-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: false });
