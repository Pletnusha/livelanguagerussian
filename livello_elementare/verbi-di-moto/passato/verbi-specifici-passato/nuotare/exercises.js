import WriteDialogueExercise from '/assets/js/engines/WriteDialogueExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ── Panel 1 — public · dialoghi brevi ───────────────────────────────────────
const p1exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Вчера мы видели Тимура на озере. Он ___ на другой берег — очень быстро. — Да, он каждое лето ___ там по часу.",
        answers: ["плыл", "плавал"],
        explanation: "плыл на другой берег → movimento in una direzione, verso una meta precisa. плавал каждое лето → abitudine ripetuta.",
        glossary: {
            "берег": "riva",
            "озеро": "lago"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Ты умеешь плавать? — В детстве я много ___ в бассейне. А в море один раз ___ с папой до буйка — было страшно!",
        answers: ["плавала", "плыла"],
        explanation: "плавала в бассейне → attività ripetuta, senza meta. плыла до буйка → una volta sola, in una direzione, fino alla boa.",
        glossary: {
            "бассейн": "piscina",
            "буёк": "boa"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Почему ты мокрый? — Я ___ за мячом: ветер сдул его в озеро. — И долго ты ___? — Минут десять. Мяч ___ всё дальше и дальше.",
        answers: ["плыл", "плавал", "плыл"],
        explanation: "плыл за мячом → inseguiva la palla in una direzione. долго плавал → durata dell'attività in acqua. мяч плыл всё дальше → la palla si allontanava in una direzione.",
        glossary: {
            "мокрый": "bagnato",
            "сдул": "ha soffiato via"
        }
    },
];

// ── Panel 5 — student · abitudine e fatto (no explanation) ──────────────────
const p5exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— В отпуске вы часто ___ в море? — Каждый день. А в последний день мы ___ на лодке на маленький остров.",
        answers: ["плавали", "плыли"],
        glossary: {
            "лодка": "barca",
            "остров": "isola"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Бабушка в молодости ___ в Волге до самого октября. — А сейчас? — Сейчас только в бассейне. Но вчера она ___ быстрее всех на дорожке!",
        answers: ["плавала", "плыла"],
        glossary: {
            "в молодости": "da giovane",
            "дорожка": "corsia (della piscina)"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Корабль медленно ___ по Неве, а мы смотрели на мосты. — А ты раньше ___ на таком корабле? — Да, когда жил в Петербурге, каждое лето.",
        answers: ["плыл", "плавал"],
        glossary: {
            "корабль": "nave",
            "мосты": "ponti"
        }
    },
];

// ── Panel 6 — student · processo interrotto e genere (no explanation) ───────
const p6exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ к берегу и вдруг увидел медузу! — Большую? — Огромную. И она тоже ___ к берегу.",
        answers: ["плыл", "плыла"],
        glossary: {
            "медуза": "medusa",
            "огромная": "enorme"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Катя ___ на матрасе у берега и уснула. — И что? — Когда она проснулась, матрас уже ___ к другому пляжу.",
        answers: ["плавала", "плыл"],
        glossary: {
            "матрас": "materassino",
            "уснула": "si è addormentata"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Мы ___ на лодке к острову, и вдруг начался дождь. — А утки? — Утки спокойно ___ рядом, им всё равно.",
        answers: ["плыли", "плавали"],
        glossary: {
            "утки": "anatre",
            "им всё равно": "a loro non importa"
        }
    },
];

// ── Panel 4 — public · testo con lacune «На вкус и цвет: кто как плавает» ───
// GapText (showHints: false). Solo verbi di moto imperfettivi senza prefisso:
// плыть/плавать, ходить/идти, ездить/ехать, бегать/бежать — scelta
// pluri/monodirezionale, al presente e al passato.
const p4instruction = "Leggi il racconto e scrivi la forma corretta del verbo (плыть/плавать, ходить/идти, ездить/ехать, бегать/бежать) al presente o al passato. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p4paragraphs = [
    "[[На вкус и цвет товарищей нет::i gusti sono gusti (ognuno ha i suoi gusti)]]. В июле банда опять {{1}} к Жене на дачу. Рядом с дачей есть озеро — пять минут на велосипеде. Тимур {{2}} к озеру первым, на [[моноколесе::monoruota elettrica]], по лесной дороге.",
    "<strong>1.1</strong>",
    "Через минуту он уже {{3}} на другой берег.",
    "— Ребята, я каждое утро {{4}} два километра! — крикнул он из воды. — Это лучше, чем бег!",
    "<strong>1.2</strong>",
    "Женя сидел на берегу в [[панаме::cappello da sole]].",
    "— В этом озере я не {{5}}. Я читал [[исследование::uno studio scientifico]]: здесь бактерии. Я {{6}} в бассейн три раза в неделю. Там вода с [[хлором::cloro]], зато [[стерильная::sterile]].",
    "<strong>1.3</strong>",
    "Лена {{7}} [[вдоль берега::lungo la riva]] [[туда-сюда::avanti e indietro]] и [[следила за пульсом::controllava il battito cardiaco]].",
    "— Сорок минут, пульс сто двадцать!",
    "— Лен, ты же на отдыхе, — сказала Катя.",
    "<strong>1.4</strong>",
    "Катя плавать любит, но только у берега.",
    "— В прошлом году я {{8}} к середине озера и вдруг [[испугалась::mi sono spaventata]]: там так глубоко! С тех пор я {{9}} только там, где можно стоять.",
    "<strong>1.5</strong>",
    "Аня не плавает вообще. Она [[загорала::prendeva il sole]] на берегу и смотрела на всех в [[бинокль::binocolo]].",
    "— Зачем плавать? Когда мне жарко, я беру [[водный велосипед::pedalò]] и {{10}} на нём по озеру, — сказала она.",
    "— Ага. А вчера ты на нём {{11}} к Тимуру на другой берег и [[застряла в камышах::sei rimasta bloccata tra le canne]], — засмеялась Катя.",
    "<strong>1.6</strong>",
    "Андрей {{12}} у берега на [[надувном матрасе::materassino gonfiabile]] с бутербродом.",
    "— Андрей, ты сегодня хоть раз {{13}}? По-настоящему? — спросил Тимур.",
    "— Конечно. Я {{14}} от берега до середины озера. На матрасе.",
    "— Это [[не считается::non vale]]!",
    "— [[Ещё как считается::eccome se vale]]. А потом я ещё два раза {{15}} на дачу за бутербродами. Это тоже спорт!",
];

const p4gaps = {
    1: {
        answers: ["ездила", "ездили"],
        explanation: "ездила к Жене на дачу = andata e ritorno (ci sono andati e poi sono tornati), e «опять»: è una cosa che si ripete.",
    },
    2: {
        answers: ["ехал"],
        explanation: "ехал = viaggio con un mezzo (la monoruota) in corso, in una sola direzione: verso il lago.",
    },
    3: {
        answers: ["плыл"],
        explanation: "плыл на другой берег = nuotata in corso, in una direzione, verso una meta (l'altra riva).",
    },
    4: {
        answers: ["плаваю"],
        explanation: "плаваю = abitudine al presente (ogni mattina): il nuoto come attività.",
    },
    5: {
        answers: ["плаваю"],
        explanation: "не плаваю = in generale non nuoto in questo lago: attività, non un tragitto.",
    },
    6: {
        answers: ["хожу"],
        explanation: "хожу в бассейн = abitudine ripetuta (tre volte a settimana): andata e ritorno ogni volta.",
    },
    7: {
        answers: ["плавала"],
        explanation: "плавала туда-сюда = nuotare in più direzioni, avanti e indietro: verbo pluridirezionale.",
    },
    8: {
        answers: ["плыла"],
        explanation: "плыла к середине = nuotata in una direzione, interrotta (all'improvviso si è spaventata).",
    },
    9: {
        answers: ["плаваю"],
        explanation: "плаваю = abitudine al presente (da allora nuoto solo dove si tocca).",
    },
    10: {
        answers: ["езжу"],
        explanation: "езжу по озеру = andare in giro con un mezzo, senza una meta precisa: pluridirezionale.",
    },
    11: {
        answers: ["ехала"],
        explanation: "ехала к Тимуру = una volta, in una direzione (verso l'altra riva), quando è rimasta bloccata.",
    },
    12: {
        answers: ["плавал"],
        explanation: "плавал у берега = stare in acqua senza una meta, vicino alla riva.",
    },
    13: {
        answers: ["плавал"],
        explanation: "плавал = la domanda è sull'attività in generale (hai nuotato almeno una volta oggi?).",
    },
    14: {
        answers: ["плыл"],
        explanation: "плыл от берега до середины = un tragitto in una direzione, da un punto a un altro.",
    },
    15: {
        answers: ["бегал"],
        explanation: "бегал на дачу = andata e ritorno (due volte alla dacia e poi di nuovo al lago).",
    },
};

// ── Panel 11 — student · testo con lacune «Андрей и надувной матрас» ────────
// GapText (showHints: false, senza spiegazioni). плыть/плавать, ходить/идти,
// ездить/ехать, бегать/бежать al presente e al passato; носить/нести,
// водить/вести, возить/везти solo al presente.
const p11instruction = "Leggi il racconto e scrivi la forma corretta del verbo: плыть/плавать, ходить/идти, ездить/ехать, бегать/бежать al presente o al passato; носить/нести, водить/вести, возить/везти al presente. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p11paragraphs = [
    "[[Отпуск::vacanza]] на море. В августе банда {{1}} в Сочи на поезде — тридцать шесть часов.",
    "— Зачем поезд? — [[ворчал::brontolava]] Тимур. — Это же целая вечность!",
    "— Потому что в поезде можно спать, есть и смотреть в окно, — ответила Катя. — Я всегда {{2}} на море на поезде.",
    "<strong>1.1</strong>",
    "Каждое утро Тимур {{3}} до [[буйков::boe]] и обратно, а Лена {{4}} по [[набережной::lungomare]]. Женя {{5}} по пляжу в панаме и [[мазал::spalmava]] всех кремом от солнца.",
    "— Я всегда {{6}} с собой крем SPF 50, — говорил он. — Солнце — это [[старение::invecchiamento]].",
    "<strong>1.2</strong>",
    "В среду Андрей купил [[надувной матрас::materassino gonfiabile]].",
    "— Андрей, а что это ты {{7}}? — спросила Катя.",
    "— Матрас. Сегодня я отдыхаю как профессионал.",
    "Андрей лёг на матрас, закрыл глаза и долго {{8}} у берега. Он [[мечтал о::sognava]] шаурме. Через час Андрей открыл глаза: берега не было. Матрас медленно {{9}} в открытое море.",
    "<strong>1.3</strong>",
    "— Андрей! — закричала Лена.",
    "Тимур уже {{10}} к нему — быстро, как [[дельфин::delfino]]. А Аня {{11}} по пляжу к [[спасателям::bagnini]].",
    "Через десять минут у берега уже была лодка спасателей.",
    "— Не волнуйтесь, мы его {{12}}! — крикнул [[спасатель::bagnino]]. — Мы таких туристов каждое лето {{13}}. Обычно на матрасах.",
    "На лодке сидел Андрей — мокрый и счастливый. Тимур {{14}} рядом с лодкой.",
    "<strong>1.4</strong>",
    "Вечером банда сидела в кафе на набережной.",
    "— Больше никаких матрасов, — сказала Лена. — Завтра я {{15}} вас всех в бассейн. Учиться плавать.",
    "— Я умею плавать! — [[обиделся::si è offeso]] Андрей. — Я просто плохо {{16}} в нужную сторону.",
    "— В Москве я каждую неделю {{17}} [[племянника::nipote (figlio del fratello o della sorella)]] в бассейн, — сказал Женя. — Ему шесть лет, и он плавает лучше Андрея.",
    "Андрей не стал спорить. Он уже {{18}} к киоску с шаурмой.",
];

const p11gaps = {
    1: { answers: ["ехала", "ехали"] },
    2: { answers: ["езжу"] },
    3: { answers: ["плавал"] },
    4: { answers: ["бегала"] },
    5: { answers: ["ходил"] },
    6: { answers: ["ношу"] },
    7: { answers: ["несёшь"] },
    8: { answers: ["плавал"] },
    9: { answers: ["плыл"] },
    10: { answers: ["плыл"] },
    11: { answers: ["бежала"] },
    12: { answers: ["везём"] },
    13: { answers: ["возим"] },
    14: { answers: ["плыл"] },
    15: { answers: ["веду"] },
    16: { answers: ["плаваю"] },
    17: { answers: ["вожу"] },
    18: { answers: ["шёл"] },
};

// ── Panel 12 — paid · testo con lacune «Моржи» ──────────────────────────────
// GapText (showHints: false, senza spiegazioni). Stessi verbi del pannello 11.
const p12instruction = "Leggi il racconto e scrivi la forma corretta del verbo: плыть/плавать, ходить/идти, ездить/ехать, бегать/бежать al presente o al passato; носить/нести, водить/вести, возить/везти al presente. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p12paragraphs = [
    "[[Моржи::«trichechi»: chi nuota nell'acqua gelata d'inverno]]. В январе Женя прочитал новое исследование: холодная вода — это молодость, [[иммунитет::sistema immunitario]] и [[дофамин::dopamina]]. Теперь каждое воскресенье он {{1}} за город на озеро и {{2}} в [[проруби::buco nel ghiaccio]].",
    "<strong>1.1</strong>",
    "— Ребята, завтра [[Крещение::Epifania ortodossa (19 gennaio)]]. Я {{3}} вас всех на озеро! — объявил Женя в субботу вечером.",
    "— Я не плаваю в минус пятнадцать, — сказала Аня. — Я вообще не {{4}}.",
    "— А я {{5}} в минус двадцать, — сказал Тимур. — Значит, и плавать смогу.",
    "— В прорубь — [[ни за что::per niente al mondo]], — сказала Катя. — Но я {{6}} с вами. Смотреть.",
    "<strong>1.2</strong>",
    "В воскресенье в семь утра они {{7}} к озеру. Было минус пятнадцать. У проруби уже стояла [[очередь::fila, coda]]: бабушки в купальниках, мужчины с бородами, дети. Мимо {{8}} [[священник::sacerdote]].",
    "— Лена, а что ты {{9}}? — спросил Андрей.",
    "— Три термоса, пять полотенец и [[аптечку::kit di pronto soccorso]]. [[На всякий случай::per ogni evenienza]].",
    "<strong>1.3</strong>",
    "Первым в воду прыгнул Женя. Он {{10}} к краю проруби и кричал: «Дофамин!» Тимур {{11}} в проруби целых три минуты и потом был красный, как помидор.",
    "А Андрей? Андрей долго стоял у проруби. Потом он {{12}} к машине так быстро, что потерял [[тапок::ciabatta]].",
    "— Я с понедельника! — кричал он.",
    "Аня сидела в машине с [[подогревом сидений::sedili riscaldati]].",
    "— Я всегда {{13}} в багажнике плед и горячий кофе, — сказала она. — Вот это я понимаю — [[закаливание::temprarsi al freddo]].",
    "Катя снимала всё на телефон и {{14}} вокруг проруби, чтобы не [[замёрзнуть::congelarsi]].",
    "<strong>1.4</strong>",
    "— Ну как? — спросила Катя.",
    "— [[Невероятно::incredibile]]! — сказал Женя. — Я чувствую себя на двадцать лет моложе.",
    "— А я на двадцать лет старше, — сказал Тимур. — Женя, ты правда каждое воскресенье так {{15}}?",
    "— Каждое. И каждое воскресенье я {{16}} сюда кого-нибудь новенького. Сегодня — вас.",
    "По дороге домой все молчали. Только Андрей {{17}} в одном тапке и рассказывал, как он почти [[нырнул::si è tuffato]].",
];

const p12gaps = {
    1: { answers: ["ездит"] },
    2: { answers: ["плавает"] },
    3: { answers: ["везу"] },
    4: { answers: ["плаваю"] },
    5: { answers: ["бегаю"] },
    6: { answers: ["еду", "иду"] },
    7: { answers: ["ехали"] },
    8: { answers: ["шёл"] },
    9: { answers: ["несёшь"] },
    10: { answers: ["плыл"] },
    11: { answers: ["плавал"] },
    12: { answers: ["бежал"] },
    13: { answers: ["вожу"] },
    14: { answers: ["ходила"] },
    15: { answers: ["плаваешь"] },
    16: { answers: ["вожу"] },
    17: { answers: ["ехал"] },
};

// ── Panel Manager ────────────────────────────────────────────────────────────
const initializers = {
    'panel-past-nuo-01': () => new WriteDialogueExercise({ rootId: 'ex-write-past-nuo-01', exercises: p1exercises }),
    'panel-past-nuo-05': () => new WriteDialogueExercise({ rootId: 'ex-write-past-nuo-05', exercises: p5exercises }),
    'panel-past-nuo-06': () => new WriteDialogueExercise({ rootId: 'ex-write-past-nuo-06', exercises: p6exercises }),
    'panel-past-nuo-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nuo-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-nuo-11': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nuo-11', instruction: p11instruction, paragraphs: p11paragraphs, gaps: p11gaps, showHints: false }),
    'panel-past-nuo-12': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nuo-12', instruction: p12instruction, paragraphs: p12paragraphs, gaps: p12gaps, showHints: false }),
};

initPanelManager({ initializers, enableAccessControl: false });
