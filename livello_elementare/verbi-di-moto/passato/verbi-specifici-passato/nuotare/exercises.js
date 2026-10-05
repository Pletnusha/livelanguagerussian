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

// ── Panel 4 — public · testo con lacune «Море или озеро?» ───────────────────
// GapText (showHints: false). Solo verbi di moto imperfettivi senza prefisso:
// плыть/плавать, ходить/идти, ездить/ехать, бегать/бежать — scelta
// pluri/monodirezionale, solo al passato.
const p4instruction = "Leggi il racconto e scrivi la forma corretta del verbo (плыть/плавать, ходить/идти, ездить/ехать, бегать/бежать) al passato. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p4paragraphs = [
    "[[На вкус и цвет товарищей нет::i gusti sono gusti (ognuno ha i suoi gusti)]]. Прошлым летом банда [[поспорила::ha discusso]]: где лучше плавать — в море или в озере? Аня, Лена и Женя {{1}} в Сочи, а Тимур, Катя и Андрей весь июль жили у Жени на даче, у озера. В сентябре все сидели в баре и сравнивали.",
    "<strong>1.1 Озеро. Тимур</strong>",
    "— На озере [[волн::onde]] нет, вода спокойная и [[пресная::dolce (non salata)]], — сказал Тимур. — Каждое утро я {{2}} на другой берег и обратно. А один раз я {{3}} туда и вдруг увидел на берегу [[лося::alce]]!",
    "<strong>1.2 Озеро. Катя</strong>",
    "— А я в первый день {{4}} к середине озера и вдруг [[испугалась::mi sono spaventata]]: там так глубоко! — сказала Катя. — И я решила: буду [[тренироваться::allenarmi]]. Весь месяц я каждый день {{5}} у берега — сначала десять минут, потом полчаса. А в последний день я [[доплыла::sono arrivata a nuoto]] до другого берега. Сама!",
    "<strong>1.3 Озеро. Андрей</strong>",
    "— А мне озеро очень понравилось, — сказал Андрей. — Я каждый день {{6}} на [[надувном матрасе::materassino gonfiabile]] с бутербродом.",
    "— Это не плавание! — сказал Тимур.",
    "— [[Ещё как::eccome se lo è]] плавание. Один раз матрас {{7}} прямо в [[камыши::canne (piante acquatiche)]], а я на нём спал. А ещё я три раза в день {{8}} на дачу за бутербродами. Одна проблема — [[комары::zanzare]]. И жара: [[ветерок::venticello]] совсем не [[обдувает::rinfresca, soffia addosso]].",
    "<strong>1.4 Море. Лена</strong>",
    "— А на море ветерок обдувает, и комаров нет! — сказала Лена. — И солёная вода тебя [[держит::ti tiene a galla]]. Я купила [[надувной матрас с единорогом::materassino gonfiabile a forma di unicorno]] и каждое утро {{9}} на нём вдоль берега [[туда-сюда::avanti e indietro]]. А в последний день я {{10}} на нём до [[буйков::boe]] — против волн!",
    "<strong>1.5 Море. Женя</strong>",
    "— Морская вода — это [[детокс::detox]], — сказал Женя. — Но там [[медузы::meduse]]. Мне хватало морского воздуха. Каждое утро я {{11}} по пляжу в [[панаме::cappello da sole]]…",
    "— …и мазал всех [[солнцезащитным кремом::crema solare]], — закончила Лена.",
    "<strong>1.6 Море. Аня</strong>",
    "Аня не плавает ни в море, ни в озере.",
    "— Я брала [[водный велосипед::pedalò]] и {{12}} на нём вдоль пляжа, — сказала она. — А один раз я {{13}} к буйкам, и меня остановили [[спасатели::bagnini]]: туда на водном велосипеде нельзя. Волны!",
    "— Ну и кто победил? — спросил Тимур.",
    "— Море, — сказала Лена.",
    "— Озеро, — сказала Катя.",
    "— Бутерброды, — сказал Андрей.",
    "Спорили до полуночи. А потом Андрей {{14}} к последнему трамваю — с бутербродом в руке.",
];

const p4gaps = {
    1: {
        answers: ["ездили"],
        explanation: "ездили в Сочи = andata e ritorno: ci sono andati e poi sono tornati a casa.",
    },
    2: {
        answers: ["плавал"],
        explanation: "плавал на другой берег и обратно = andata e ritorno, ogni mattina: verbo pluridirezionale.",
    },
    3: {
        answers: ["плыл"],
        explanation: "плыл туда = una volta, in una direzione, quando all'improvviso ha visto l'alce.",
    },
    4: {
        answers: ["плыла"],
        explanation: "плыла к середине = nuotata in una direzione, interrotta (si è spaventata).",
    },
    5: {
        answers: ["плавала"],
        explanation: "плавала у берега каждый день = abitudine, senza una meta: verbo pluridirezionale.",
    },
    6: {
        answers: ["плавал"],
        explanation: "плавал на матрасе = stare in acqua senza una meta, ogni giorno.",
    },
    7: {
        answers: ["плыл"],
        explanation: "матрас плыл в камыши = il materassino si muoveva in una direzione, verso le canne.",
    },
    8: {
        answers: ["бегал"],
        explanation: "бегал на дачу за бутербродами = andata e ritorno, tre volte al giorno.",
    },
    9: {
        answers: ["плавала"],
        explanation: "плавала туда-сюда = in più direzioni, avanti e indietro, ogni mattina.",
    },
    10: {
        answers: ["плыла"],
        explanation: "плыла до буйков = una volta, in una direzione, verso le boe.",
    },
    11: {
        answers: ["ходил"],
        explanation: "ходил по пляжу = camminare in giro, senza una meta, ogni mattina.",
    },
    12: {
        answers: ["ездила"],
        explanation: "ездила вдоль пляжа = andare in giro con un mezzo (il pedalò), avanti e indietro.",
    },
    13: {
        answers: ["ехала"],
        explanation: "ехала к буйкам = una volta, in una direzione, quando l'hanno fermata.",
    },
    14: {
        answers: ["бежал"],
        explanation: "бежал к трамваю = corsa in una direzione, di fretta, verso l'ultimo tram.",
    },
};

// ── Panel 11 — student · testo con lacune «Кто как плавает» ────────────────
// GapText (showHints: false, senza spiegazioni). плыть/плавать, ходить/идти,
// ездить/ехать, бегать/бежать al presente e al passato; носить/нести,
// водить/вести, возить/везти solo al presente.
const p11instruction = "Leggi il racconto e scrivi la forma corretta del verbo: плыть/плавать, ходить/идти, ездить/ехать, бегать/бежать al presente o al passato; носить/нести, водить/вести, возить/везти al presente. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p11paragraphs = [
    "[[Сюрприз::sorpresa]] от Тимура. В марте он написал в чат: «Я купил всем билеты в Калининград. Июль, Балтийское море. Не благодарите». Банда [[смирилась::si è rassegnata]]: после марафона спорить с Тимуром бесполезно. До лета оставалось три месяца.",
    "В субботу вечером банда собралась в ресторане на ужин. Тимур опоздал: он {{1}} на электросамокате под дождём.",
    "— Тимур, а что ты {{2}}? — спросила Катя.",
    "— [[Распечатки::fogli stampati]]. Температура воды в Балтийском море за последние десять лет. Ну, рассказывайте, кто как готовится к морю?",
    "<strong>1.1 Женя</strong>",
    "— Тим, ты [[перебарщиваешь::esageri]], — сказал Женя. — Я каждый день {{3}}, в клуб всегда {{4}} пешком. Но готовиться я ни к чему не собираюсь. От слова «готовиться» меня [[в холодный пот кидает::mi viene il sudore freddo]] — я как на экзамене. Прекращай.",
    "<strong>1.2 Женя и утёнок</strong>",
    "— А сегодня у меня был [[шок::shock]], — продолжил Женя. — Я {{5}} себе спокойно, пошёл на последний круг — и вдруг вижу: мне навстречу {{6}} жёлтый [[надувной утёнок::paperella gonfiabile]]. Я подумал: всё, [[приплыл::è finita (lett. «sono arrivato a nuoto»)]]. А это наш Андрей решил послушать Тимура и потренироваться.",
    "— Я [[плаваю как топор::nuoto come un sasso (lett. «come un'ascia»)]], — спокойно сказал Андрей. — В детстве на море я {{7}} только с кругом. Теперь я всегда {{8}} его с собой. Это [[традиция::tradizione]].",
    "Женя молча [[поправил часы::si è sistemato l'orologio]].",
    "<strong>1.3 Лена</strong>",
    "Лена [[сияла::era raggiante]].",
    "— А я так рада! Я давно хотела научиться [[сёрфингу::surf]], но всё время [[ленилась::ero pigra]]. А теперь у меня наконец есть повод заставить себя ходить на тренировки! По субботам я {{9}} на другой конец города, в [[волновой бассейн::piscina con onde artificiali]]. Сегодня я сначала целый час {{10}} — [[разминка::riscaldamento]]. Потом взяла доску и {{11}} на ней к волне. Я не знаю, сколько раз я сегодня падала с этой доски и вставала! Через полчаса я думала, что умру. [[Инструктор::istruttore]] кричал и {{12}} по [[периметру::perimetro]] бассейна — было [[ощущение::la sensazione]], что мы в армии. Но в итоге я всё-таки [[умудрилась устоять::sono riuscita a restare in piedi]] — и [[свалилась::sono caduta]] через тридцать секунд. Зато [[гидрокостюм::muta]] розовый, из новой коллекции!",
    "<strong>1.4 Катя</strong>",
    "Катя [[вздохнула::ha sospirato]].",
    "— Тимур, а ты знаешь, какая вода в Балтийском море в июле? Плюс восемнадцать! Прошлым летом на озере я каждый день {{13}} в тёплой воде. А сегодня я специально {{14}} в бассейн — [[тренироваться::allenarmi]]. Я {{15}} свои десять дорожек и думала: в Балтике вода будет на десять градусов холоднее!",
    "— Плюс девятнадцать, — поправил Тимур и показал распечатку. — Я проверил. Кстати, у тебя скоро день рождения. Подарим тебе гидрокостюм.",
    "— Розовый! — сказала Лена.",
    "— Вы [[сумасшедшие::pazzi]]! — сказала Катя. — Не хочу я розовый гидрокостюм. Я хочу тёплое море, [[шезлонг::sdraio]] и коктейли. А вы опять [[устраиваете::organizzate]] «Тур де Франс»!",
    "— «Тур де Франс» — это [[велогонка::gara ciclistica]], — поправил Тимур. — Там {{16}} на велосипедах, а не плавают. У нас скорее [[триатлон::triathlon]].",
    "<strong>1.5 Аня</strong>",
    "— А я занимаюсь [[водной аэробикой::acquagym]], — сказала Аня. — Каждую среду и субботу я {{17}} в бассейн и {{18}} с собой маму. Плавать там не надо: стоишь в воде [[по грудь::con l'acqua fino al petto]] и танцуешь под музыку.",
    "— Это не спорт, — сказал Тимур. — Я каждое утро {{19}} десять километров. Вот это спорт. А это [[дискотека::discoteca]] для бабушек.",
    "— А ты попробуй, — сказала Аня. — В среду обещают дождь, так что я {{20}} маму на машине. Поедешь с нами?",
    "<strong>1.6 Среда</strong>",
    "Тимур поехал. Через двадцать минут он {{21}} в раздевалку — красный, [[мокрый::bagnato]] и злой.",
    "— Там бабушки! Они [[двигаются::si muovono]] быстрее меня!",
    "Мама Ани {{22}} за ним и смеялась:",
    "— Молодой человек, приходите в субботу!",
    "А Андрей в тот же день записался на водную аэробику.",
    "— Там же можно стоять, — объяснил он. — Значит, я не [[утону::annegherò]].",
];

const p11gaps = {
    1: { answers: ["ехал"] },
    2: { answers: ["несёшь"] },
    3: { answers: ["плаваю"] },
    4: { answers: ["хожу"] },
    5: { answers: ["плавал"] },
    6: { answers: ["плывёт"] },
    7: { answers: ["плавал"] },
    8: { answers: ["ношу"] },
    9: { answers: ["езжу"] },
    10: { answers: ["плавала"] },
    11: { answers: ["плыла"] },
    12: { answers: ["бегал"] },
    13: { answers: ["плавала"] },
    14: { answers: ["ходила"] },
    15: { answers: ["плыла"] },
    16: { answers: ["ездят"] },
    17: { answers: ["хожу"] },
    18: { answers: ["вожу"] },
    19: { answers: ["бегаю"] },
    20: { answers: ["везу"] },
    21: { answers: ["бежал"] },
    22: { answers: ["шла"] },
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

// ── Panel 7 — public · Quiz misto (multiple choice + match + write) ───────────
// 30 frasi dai dialoghi e dai tre testi (плыть/плавать + ходить/идти, ездить/ехать, бежать, водить/вести, возить)
function initPanel7() {
    const panel = document.getElementById('panel-past-nuo-07');
    if (!panel) return;

    const container = panel.querySelector('#past-nuo-07-cards-container');
    const prevBtn   = panel.querySelector('#past-nuo-07-deck-prev');
    const nextBtn   = panel.querySelector('#past-nuo-07-deck-next');
    const counterEl = panel.querySelector('#past-nuo-07-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Через минуту Тимур уже ___ на другой берег.", options: ["плыл", "плавал", "плавает"], answer: "плыл" },
        { question: "Каждое утро я ___ на другой берег и обратно.", options: ["плыл", "плавал", "плаваю"], answer: "плавал" },
        { question: "Лена каждое утро ___ на матрасе с единорогом туда-сюда.", options: ["плыла", "плавает", "плавала"], answer: "плавала" },
        { question: "В прошлом году я ___ к середине озера и вдруг испугалась.", options: ["плыла", "плавала", "плыл"], answer: "плыла" },
        { question: "И вдруг вижу: мне навстречу ___ жёлтый надувной утёнок.", options: ["плавал", "плывёт", "плавает"], answer: "плывёт" },
        { question: "Аня не ___ ни в море, ни в озере.", options: ["плывёт", "плавала", "плавает"], answer: "плавает" },
        { question: "Корабль медленно ___ по Неве, а мы смотрели на мосты.", options: ["плыл", "плавал", "плывёт"], answer: "плыл" },
        { question: "Тимур ___ в проруби целых три минуты.", options: ["плыл", "плавал", "плавает"], answer: "плавал" },
        { question: "Утки спокойно ___ рядом, им всё равно.", options: ["плыли", "плавает", "плавали"], answer: "плавали" },
        { question: "Женя, ты правда каждое воскресенье так ___?", options: ["плаваешь", "плывёшь", "плавал"], answer: "плаваешь" },
    ];
    const matchPairs = [
        { left: "Один раз матрас ___ прямо в камыши.", right: "плыл" },
        { left: "В детстве он много ___ в бассейне.", right: "плавал" },
        { left: "Вчера бабушка ___ быстрее всех на дорожке.", right: "плыла" },
        { left: "Бабушка в молодости ___ в Волге до октября.", right: "плавала" },
        { left: "Мы ___ на лодке к острову, и вдруг начался дождь.", right: "плыли" },
        { left: "В отпуске мы каждый день ___ в море.", right: "плавали" },
        { left: "Теперь я ___ каждый день, даже зимой в бассейне.", right: "плаваю" },
        { left: "Смотри, медуза ___ прямо к нам!", right: "плывёт" },
        { left: "Женя каждое воскресенье ___ в проруби.", right: "плавает" },
        { left: "По субботам мы с Леной ___ в бассейне.", right: "плаваем" },
    ];
    const quizData = [
        { id: "q01", promptPrefix: "Я ", promptSuffix: " себе спокойно и пошёл на последний круг.", answers: ["плавал"] },
        { id: "q02", promptPrefix: "Сегодня я сначала целый час ", promptSuffix: " — разминка.", answers: ["плавала"] },
        { id: "q03", promptPrefix: "Потом я взяла доску и ", promptSuffix: " на ней к волне.", answers: ["плыла"] },
        { id: "q04", promptPrefix: "Инструктор кричал и ", promptSuffix: " по периметру бассейна.", answers: ["бегал"] },
        { id: "q05", promptPrefix: "Каждую среду я хожу в бассейн и ", promptSuffix: " с собой маму.", answers: ["вожу"] },
        { id: "q06", promptPrefix: "— В среду обещают дождь, так что я ", promptSuffix: " маму на машине.", answers: ["везу"] },
        { id: "q07", promptPrefix: "Аня, Лена и Женя ", promptSuffix: " в Сочи.", answers: ["ездили"] },
        { id: "q08", promptPrefix: "Через двадцать минут Тимур ", promptSuffix: " в раздевалку.", answers: ["бежал"] },
        { id: "q09", promptPrefix: "Мимо проруби ", promptSuffix: " священник.", answers: ["шёл"] },
        { id: "q10", promptPrefix: "По дороге домой Андрей ", promptSuffix: " в одном тапке.", answers: ["ехал"] },
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
            card.className = 'fca01-card-container past-nuo-07-card';
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
        container.querySelectorAll('.past-nuo-07-card').forEach(card => {
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
                const card    = this.closest('.past-nuo-07-card');
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
        container.querySelectorAll('.past-nuo-07-card').forEach((c, i) => {
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
    'panel-past-nuo-01': () => new WriteDialogueExercise({ rootId: 'ex-write-past-nuo-01', exercises: p1exercises }),
    'panel-past-nuo-05': () => new WriteDialogueExercise({ rootId: 'ex-write-past-nuo-05', exercises: p5exercises }),
    'panel-past-nuo-06': () => new WriteDialogueExercise({ rootId: 'ex-write-past-nuo-06', exercises: p6exercises }),
    'panel-past-nuo-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nuo-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-nuo-11': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nuo-11', instruction: p11instruction, paragraphs: p11paragraphs, gaps: p11gaps, showHints: false }),
    'panel-past-nuo-12': () => new GapTextExercise({ rootId: 'ex-gaptext-past-nuo-12', instruction: p12instruction, paragraphs: p12paragraphs, gaps: p12gaps, showHints: false }),
    'panel-past-nuo-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: true });
