import WriteDialogueExercise from '/assets/js/engines/WriteDialogueExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ── Panel 1 — public · dialoghi brevi ───────────────────────────────────────
const p1exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Вчера Андрей ___ за маршруткой — она уже уезжала. — И догнал? — Нет. Он вообще не ___ — ноль спорта.",
        answers: ["бежал", "бегал"],
        explanation: "бежал за маршруткой → corsa specifica verso mezzo in movimento. не бегал → caratteristica generale, zero sport.",
        glossary: {
            "маршрутка": "minibus",
            "догнал": "ha raggiunto"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ по парку и вдруг пошёл дождь. — И ты ___ под дождём до самого дома?",
        answers: ["бежала", "бежала"],
        explanation: "бежала по парку и вдруг → processo interrotto da evento improvviso. бежала до дома → processo con destinazione precisa.",
        glossary: {
            "пошёл дождь": "ha cominciato a piovere"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Вы ___ на стадион по выходным? — В прошлое воскресенье ___ — думали, опоздаем.",
        answers: ["бегали", "бежали"],
        explanation: "бегали по выходным → abitudine regolare. бежали в прошлое воскресенье → corsa specifica, episodio singolo.",
        glossary: {
            "стадион": "stadio"
        }
    },
];

// ── Panel 2 — public · БЕЖАТЬ coniugazione ──────────────────────────────────
const p2exercises = [
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Вчера я ___ за автобусом.",
        answers: ["бежал"],
        explanation: "бежать (разноспр., irreg.): беж- + -а- + -л → бежал (м.р.)",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Она ___ по парку и вдруг остановилась.",
        answers: ["бежала"],
        explanation: "бежать → бежала (ж.р.): беж- + -а- + -ла",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Мы ___ на поезд — чуть не опоздали.",
        answers: ["бежали"],
        explanation: "бежать → бежали (мн.ч.): беж- + -а- + -ли",
        glossary: {
            "чуть не опоздали": "per poco non facevamo in tempo"
        }
    },
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Они ___ за мороженым.",
        answers: ["бежали"],
        explanation: "бежать → бежали (мн.ч.)",
        glossary: {
            "мороженое": "gelato"
        }
    },
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Ты ___ за такси?",
        answers: ["бежал"],
        explanation: "бежать → бежал (м.р., ты)",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Куда вы ___? — На стадион.",
        answers: ["бежали"],
        explanation: "бежать → бежали (мн.ч., вы)",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Он ___ стометровку за 11 секунд.",
        answers: ["бежал"],
        explanation: "бежать → бежал (м.р., он)",
        glossary: {
            "стометровка": "100 metri"
        }
    },
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Собака ___ за кошкой.",
        answers: ["бежала"],
        explanation: "бежать → бежала (ж.р., собака)",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Ребёнок ___ по коридору и упал.",
        answers: ["бежал"],
        explanation: "бежать → бежал (м.р., ребёнок)",
        glossary: {
            "коридор": "corridoio"
        }
    },
    {
        instruction: "Scrivi la forma corretta di БЕЖАТЬ al passato.",
        text: "Мы ___ за скидками.",
        answers: ["бежали"],
        explanation: "бежать → бежали (мн.ч.)",
        glossary: {
            "скидки": "sconti"
        }
    },
];

// ── Panel 3 — public · БЕГАТЬ coniugazione ──────────────────────────────────
const p3exercises = [
    {
        instruction: "Scrivi la forma corretta di БЕГАТЬ al passato.",
        text: "Раньше я ___ по утрам.",
        answers: ["бегал"],
        explanation: "бегать (I, reg.): бег- + -а- + -л → бегал (м.р.)",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕГАТЬ al passato.",
        text: "Она никогда не ___ по лестнице.",
        answers: ["бегала"],
        explanation: "бегать → бегала (ж.р.): бег- + -а- + -ла",
        glossary: {
            "лестница": "scale"
        }
    },
    {
        instruction: "Scrivi la forma corretta di БЕГАТЬ al passato.",
        text: "Мы ___ в парке каждое воскресенье.",
        answers: ["бегали"],
        explanation: "бегать → бегали (мн.ч.): бег- + -а- + -ли",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕГАТЬ al passato.",
        text: "Они ___ марафон в прошлом году.",
        answers: ["бегали"],
        explanation: "бегать → бегали (мн.ч.)",
        glossary: {
            "марафон": "maratona"
        }
    },
    {
        instruction: "Scrivi la forma corretta di БЕГАТЬ al passato.",
        text: "Ты когда-нибудь ___ по утрам?",
        answers: ["бегал"],
        explanation: "бегать → бегал (м.р., ты)",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕГАТЬ al passato.",
        text: "Дети ___ во дворе каждый вечер.",
        answers: ["бегали"],
        explanation: "бегать → бегали (мн.ч., дети)",
        glossary: {
            "двор": "cortile"
        }
    },
    {
        instruction: "Scrivi la forma corretta di БЕГАТЬ al passato.",
        text: "Раньше он ___ на работу — три километра.",
        answers: ["бегал"],
        explanation: "бегать → бегал (м.р., он)",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕГАТЬ al passato.",
        text: "Кошка часто ___ по квартире.",
        answers: ["бегала"],
        explanation: "бегать → бегала (ж.р., кошка)",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta di БЕГАТЬ al passato.",
        text: "В детстве она ___ быстрее всех.",
        answers: ["бегала"],
        explanation: "бегать → бегала (ж.р., она)",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corrotta di БЕГАТЬ al passato.",
        text: "Мы ___ кросс в школе каждый год.",
        answers: ["бегали"],
        explanation: "бегать → бегали (мн.ч.)",
        glossary: {
            "кросс": "corsa campestre"
        }
    },
];

// ── Panel 4 — public · testo con lacune «На вкус и цвет: кто как бегает» ────
// GapText (showHints: false). Solo verbi di moto imperfettivi senza prefisso:
// ходить/идти, ездить/ехать, бегать/бежать — scelta pluri/monodirezionale,
// al presente e al passato.
const p4instruction = "Leggi il racconto e scrivi la forma corretta del verbo (ходить/идти, ездить/ехать, бегать/бежать) al presente o al passato. Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p4paragraphs = [
    "[[На вкус и цвет товарищей нет::i gusti sono gusti (ognuno ha i suoi gusti)]]. В субботу вечером вся банда, как обычно, сидела в баре. Не было только Тимура.",
    "— Тимур, ты где?! — написала Лена в чат.",
    "— Уже {{1}}! Пять минут! — ответил Тимур.",
    "<strong>1.1</strong>",
    "Тимур [[опоздал на полчаса::è arrivato con mezz'ora di ritardo]]. Сначала он {{2}} из парка на [[моноколесе::monoruota elettrica]], но [[на полпути::a metà strada]] [[разрядился аккумулятор::si è scaricata la batteria]], и последние два километра он {{3}} — и даже [[обогнал::ha superato]] троллейбус.",
    "— Ребята, [[не ругайтесь::non arrabbiatevi]], — сказал он и посмотрел на [[фитнес-браслет::braccialetto fitness]]. — Я сегодня {{4}} по парку два часа. Двадцать тысяч шагов! [[Браслет мной гордится::il braccialetto è fiero di me]].",
    "<strong>1.2</strong>",
    "— Два часа? Это вредно для [[суставов::articolazioni]], — сказал Женя. — Я читал [[исследование::uno studio scientifico]].",
    "— Ты всё читал, — засмеялась Лена. — А сам ты когда-нибудь {{5}}?",
    "— Один раз. На [[беговой дорожке::tapis roulant]]. Это ужасно: ты {{6}} целый час и всё время [[смотришь в стену::fissi il muro]]. Поэтому теперь я {{7}} пешком [[в любую погоду::con qualsiasi tempo]], а зимой {{8}} на лыжах.",
    "<strong>1.3</strong>",
    "— Ходить пешком — это не спорт, — [[заявила::ha dichiarato]] Лена.",
    "Лена [[следит за пульсом::controlla il battito cardiaco]] [[даже во сне::perfino nel sonno]] и {{9}} в спортзал пять раз в неделю.",
    "— Вот вчера я {{10}} на дорожке сорок минут, пульс — сто сорок. Вот это [[нагрузка::sforzo fisico (allenamento vero)]]!",
    "— А когда ты {{11}} домой пешком после спортзала, пульс тоже был сто сорок? — спросила Катя.",
    "— Нет, конечно.",
    "— Вот! А у меня каждое воскресенье нормальная нагрузка.",
    "<strong>1.4</strong>",
    "Катя бег не любит, она любит гулять. Каждое воскресенье она {{12}} в парк или в центр.",
    "— В прошлое воскресенье мы с Аней {{13}} по центру пять часов! — [[гордо::con orgoglio]] сказала она.",
    "— Пять часов, — [[мрачно::cupamente]] повторила Аня. — Я потом два дня лежала на диване.",
    "<strong>1.5</strong>",
    "Аня [[ненавидит::odia]] ходить пешком. На работу она {{14}} на машине, на прогулки — на велосипеде, а дома, кажется, на [[самокате::monopattino]]: из спальни на кухню и обратно. Бегает Аня только [[в одном случае::in un solo caso]].",
    "— Только когда опаздываю, — объяснила она. — Вот вчера я {{15}} за автобусом: машина была [[в сервисе::dal meccanico]].",
    "— И как?",
    "— Автобус {{16}} быстрее.",
    "<strong>1.6</strong>",
    "Андрей всё это время [[молча::in silenzio]] ел бургер с картошкой фри.",
    "— Андрей, а ты? — спросил Тимур. — Ты же в понедельник тоже {{17}}!",
    "— Конечно, — гордо ответил Андрей. — Целых пятнадцать минут. Я {{18}} в [[киоск::chiosco]] за [[шаурмой::kebab]] и обратно.",
    "— Это [[не считается::non vale]]!",
    "— [[Ещё как считается::eccome se vale]]. Когда я {{19}} мимо [[Лениного::di Lena]] спортзала, я даже не курил.",
    "Андрей [[начинает новую жизнь::comincia una nuova vita]] каждый понедельник. В прошлый понедельник он тоже {{20}}. И в [[позапрошлый::quello prima ancora]].",
];

const p4gaps = {
    1: {
        answers: ["бегу", "иду", "еду"],
        explanation: "бегу = movimento in corso adesso, in una direzione (verso il bar): verbo monodirezionale al presente.",
    },
    2: {
        answers: ["ехал"],
        explanation: "ехал = viaggio con un mezzo (la monoruota) in corso, in una direzione: dal parco verso il bar.",
    },
    3: {
        answers: ["бежал"],
        explanation: "бежал = corsa in una sola direzione, un tragitto concreto (gli ultimi due chilometri fino al bar).",
    },
    4: {
        answers: ["бегал"],
        explanation: "бегал по парку = correre in giro, in più direzioni, per due ore: verbo pluridirezionale.",
    },
    5: {
        answers: ["бегал"],
        explanation: "бегал = esperienza in generale (hai mai corso?): la corsa come attività, senza direzione.",
    },
    6: {
        answers: ["бегаешь"],
        explanation: "бегаешь = la corsa come attività sul tapis roulant: non c'è una meta, si corre «sul posto».",
    },
    7: {
        answers: ["хожу"],
        explanation: "хожу пешком = abitudine (con qualsiasi tempo): verbo pluridirezionale al presente.",
    },
    8: {
        answers: ["езжу"],
        explanation: "езжу на лыжах = attività abituale d'inverno, senza una direzione precisa.",
    },
    9: {
        answers: ["ходит"],
        explanation: "ходит в спортзал = abitudine ripetuta (cinque volte a settimana): andata e ritorno ogni volta.",
    },
    10: {
        answers: ["бегала"],
        explanation: "бегала на дорожке = la corsa come attività per quaranta minuti, senza una meta.",
    },
    11: {
        answers: ["шла"],
        explanation: "шла = movimento a piedi in una sola direzione (verso casa), in un momento preciso.",
    },
    12: {
        answers: ["ходит"],
        explanation: "ходит = abitudine (ogni domenica va al parco o in centro e torna).",
    },
    13: {
        answers: ["ходили"],
        explanation: "ходили по центру = camminare in giro, in più direzioni, per cinque ore.",
    },
    14: {
        answers: ["ездит"],
        explanation: "ездит на машине = abitudine (va al lavoro in macchina ogni giorno).",
    },
    15: {
        answers: ["бежала"],
        explanation: "бежала за автобусом = una corsa concreta in una direzione, dietro all'autobus.",
    },
    16: {
        answers: ["ехал"],
        explanation: "ехал = l'autobus era in movimento in quel momento, in una direzione: monodirezionale.",
    },
    17: {
        answers: ["бегал"],
        explanation: "бегал = la corsa come attività (anche tu hai corso lunedì?), senza direzione.",
    },
    18: {
        answers: ["бегал"],
        explanation: "бегал в киоск и обратно = andata e ritorno: con il ritorno si usa il pluridirezionale.",
    },
    19: {
        answers: ["бежал"],
        explanation: "бежал мимо = movimento in corso in una direzione, nel momento in cui passava davanti alla palestra.",
    },
    20: {
        answers: ["бегал"],
        explanation: "бегал = un fatto generale, ripetuto (ogni lunedì): la corsa come attività.",
    },
};

// ── Panel 11 — student · testo con lacune «Ультрамарафон» ──────────────────
// GapText (showHints: false, senza spiegazioni). ходить/идти, ездить/ехать,
// бегать/бежать al presente e al passato (anche бежать = «andare di fretta»);
// носить/нести, водить/вести, возить/везти solo al presente.
const p11instruction = "Leggi il racconto e scrivi la forma corretta del verbo: ходить/идти, ездить/ехать, бегать/бежать al presente o al passato; носить/нести, водить/вести, возить/везти al presente. Attenzione: бежать può voler dire anche «andare di fretta». Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p11paragraphs = [
    "[[Ультрамарафон::ultramaratona]] — это не марафон. Это сто миль, то есть сто шестьдесят километров. В декабре. Под Переславлем-Залесским. Полгода Тимур [[готовился::si è preparato]] к нему как настоящий профессионал: каждое утро он {{1}} по [[заснеженному::innevato]] парку, а по выходным {{2}} за город и {{3}} по лесу по пять часов — в минус двадцать. Время {{4}} быстро, и [[до старта оставался::alla partenza mancava]] всего месяц.",
    "<strong>1.1</strong>",
    "— Тимур, пойдём сегодня в кино? — спросила Катя.",
    "— Не могу, у меня тренировка. Всё, {{5}}! — и Тимур уже надевал [[шипованные кроссовки::scarpe da corsa chiodate]].",
    "— А что у тебя в рюкзаке? — спросила Аня.",
    "— Вода, бананы, [[энергетические гели::gel energetici]] и [[запасные::di ricambio]] носки. Зимой я всегда {{6}} с собой [[термос::thermos]] с горячим чаем.",
    "— Термос? Я даже сумку с продуктами сама не {{7}}. Для этого у меня есть машина, — засмеялась Аня.",
    "<strong>1.2</strong>",
    "В день старта, в четыре утра, вся банда собралась у Ани: все хотели [[болеть за::fare il tifo per]] Тимура, но только Аня [[согласилась::ha accettato]] [[сесть за руль::mettersi alla guida]] [[в такую рань::così presto]]. Не было только Андрея.",
    "— Андрей, ты где?! Мы уже в машине!",
    "— Я {{8}}, {{9}}! Пять минут! [[Опаздываю::sono in ritardo]]! — ответил Андрей.",
    "Через двадцать минут они наконец {{10}} в Переславль-Залесский. На трассе была [[метель::tormenta di neve]].",
    "— Аня, ты всегда так быстро {{11}}? Даже в метель? — [[испуганно::spaventato]] спросил Женя.",
    "— Я {{12}} машину двадцать лет, у меня [[зимняя резина::gomme invernali]], [[не бойся::non avere paura]], — ответила Аня.",
    "— [[Аккуратнее::più piano, fai attenzione]]! Мы {{13}} в [[багажнике::bagagliaio]] торт для Тимура! — крикнула Лена.",
    "— Веганский, — уточнил Женя. — Без сахара, без муки и, кажется, без вкуса.",
    "<strong>1.3</strong>",
    "Днём Тимур {{14}} по [[глубокому снегу::neve alta]] — тяжело, но ещё [[куда ни шло::passi ancora]]. А ночью стало по-настоящему страшно: темнота, лес, минус восемнадцать и только маленький круг света от [[налобного фонарика::lampada frontale]]. Тимур {{15}} уже семнадцать часов. Чай в термосе давно [[кончился::era finito]].",
    "Всю ночь ребята {{16}} от одной [[контрольной точки::punto di controllo]] к другой. На каждой точке Аня держала [[наготове::pronto in mano]] горячий термос, Лена — бананы, Катя — [[плакат::cartellone]] «Тимур, ты лучший!». Плакат замёрз. Катя тоже. Тимур [[появлялся из темноты::sbucava dal buio]], [[молча::in silenzio]] пил чай и {{17}} дальше, в лес. А ребята прыгали в машину и {{18}} на следующую точку.",
    "Женя на каждой точке {{19}} [[туда-сюда::avanti e indietro]], чтобы не [[замёрзнуть::congelarsi]], и проверял пульс на своих умных часах — у себя, не у Тимура. Андрей {{20}} от машины к [[костру::falò]] и обратно — [[греться::a scaldarsi]].",
    "На сто пятьдесят девятом километре Тимур остановился.",
    "— Всё. Я больше не могу. Я не чувствую ног.",
    "— Можешь, — сказала Лена. — Ты полгода {{21}} в минус двадцать. Остался один километр.",
    "Последний километр Лена {{22}} рядом с ним по [[сугробам::cumuli di neve]] и кричала: «[[Дыши::respira]]!»",
    "<strong>1.4</strong>",
    "Тимур [[финишировал::ha tagliato il traguardo]] больше чем через [[сутки::un giorno intero (24 ore)]].",
    "— Ну как ты? — спросила Катя.",
    "— Отлично. Только ноги не {{23}}. И пальцы не чувствую.",
    "— Ничего, мы тебя {{24}} домой, — сказала Аня.",
    "— Андрей, а что это ты {{25}}? — спросил Женя.",
    "— Медаль Тимура. Он сказал, что она слишком тяжёлая.",
    "Всю дорогу Тимур спал на [[заднем сиденье::sedile posteriore]] под тремя куртками. А в понедельник в шесть утра он уже снова {{26}} по заснеженному парку.",
];

const p11gaps = {
    1: { answers: ["бегал"] },
    2: { answers: ["ездил"] },
    3: { answers: ["бегал"] },
    4: { answers: ["бежало"] },
    5: { answers: ["бегу"] },
    6: { answers: ["ношу"] },
    7: { answers: ["ношу"] },
    8: { answers: ["бегу"] },
    9: { answers: ["бегу"] },
    10: { answers: ["ехали"] },
    11: { answers: ["водишь"] },
    12: { answers: ["вожу"] },
    13: { answers: ["везём"] },
    14: { answers: ["бежал"] },
    15: { answers: ["бежал"] },
    16: { answers: ["ездили"] },
    17: { answers: ["бежал"] },
    18: { answers: ["ехали"] },
    19: { answers: ["ходил"] },
    20: { answers: ["бегал"] },
    21: { answers: ["бегал"] },
    22: { answers: ["бежала"] },
    23: { answers: ["ходят"] },
    24: { answers: ["везём"] },
    25: { answers: ["несёшь"] },
    26: { answers: ["бегал"] },
};

// ── Panel 12 — paid · testo con lacune «Марафон для всех» ──────────────────
// GapText (showHints: false, senza spiegazioni). ходить/идти, ездить/ехать,
// бегать/бежать al presente e al passato (anche бежать = «andare di fretta»);
// носить/нести, водить/вести, возить/везти solo al presente.
const p12instruction = "Leggi il racconto e scrivi la forma corretta del verbo: ходить/идти, ездить/ехать, бегать/бежать al presente o al passato; носить/нести, водить/вести, возить/везти al presente. Attenzione: бежать può voler dire anche «andare di fretta». Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p12paragraphs = [
    "[[Сюрприз::sorpresa]]. В пятницу вечером банда, как всегда, сидела в баре. Тимур {{1}} к их столику [[с таким лицом::con una faccia tale]], что Андрей сразу [[спрятал::ha nascosto]] сигареты.",
    "<strong>1.1</strong>",
    "— Ребята, я [[записал::ho iscritto]] вас всех на [[Московский марафон::la Maratona di Mosca]]! — гордо сказал Тимур.",
    "— Всех?!",
    "— Всех. Он в сентябре. Время ещё есть.",
    "— Подожди, — сказала Катя. — Я же не {{2}}. Я {{3}}. Это разные вещи.",
    "— Не бойся, там есть [[дистанция::distanza]] десять километров.",
    "— Десять километров? В прошлое воскресенье я {{4}} по центру двенадцать. Пешком. С кофе.",
    "<strong>1.2</strong>",
    "— А я этот марафон не {{5}}, — сразу сказала Аня. — Я вообще не {{6}}. Только за автобусом. Но у меня есть машина. По субботам я всё равно {{7}} мимо парка на танцы.",
    "— Отлично! — сказал Тимур. — Значит, ты нас {{8}} на тренировки, а Андрей {{9}} воду.",
    "— Почему я? — [[возмутился::ha protestato]] Андрей.",
    "<strong>1.3</strong>",
    "— Потому что ты последний раз {{10}} в школе, — сказала Лена.",
    "— Неправда! В прошлом году я {{11}} за трамваем и даже его [[догнал::ho raggiunto]]. И вообще, с понедельника я начинаю новую жизнь.",
    "Все засмеялись.",
    "<strong>1.4</strong>",
    "Лена уже открыла в телефоне [[таблицу::foglio di calcolo]] с [[планом тренировок::programma di allenamento]].",
    "— Значит, так. Во вторник и в четверг мы {{12}} в парке, в субботу — длинная [[пробежка::corsa]].",
    "— А я бегать не буду, — сказал Женя. — У меня своя система. Я каждый день {{13}} пешком на работу и обратно, считаю шаги и калории. А на марафон я {{14}} болеть. С термосом.",
    "<strong>1.5</strong>",
    "Первая тренировка была в субботу, в восемь утра. Аня [[сигналила::suonava il clacson]] под окнами.",
    "— Все в машину! Я {{15}} вас на тренировку!",
    "Через полчаса Лена и Тимур уже {{16}} по парку. Катя в машину не села и {{17}} к парку пешком, с кофе. Аня {{18}} кругами вокруг парка и искала, где [[поставить машину::parcheggiare]]. Женя {{19}} вокруг [[пруда::stagno, laghetto]] и считал шаги. А Андрей, как всегда, [[проспал::non si è svegliato in tempo]].",
    "— Андрей, ты где?!",
    "— Я {{20}}, {{21}}! [[Опаздываю::sono in ritardo]]!",
    "Он действительно {{22}} — от киоска с шаурмой к парку.",
    "— Андрей, а что это ты {{23}}?!",
    "— Шаурму. Это мой завтрак. Тренировка же!",
    "— Так, все здесь, — [[скомандовала::ha dato l'ordine]] Лена. — Я {{24}} вас на [[разминку::riscaldamento]].",
    "Тимур посмотрел на свою банду и [[вздохнул::ha sospirato]]. [[До марафона оставалось::alla maratona mancavano]] пять месяцев.",
];

const p12gaps = {
    1: { answers: ["шёл", "бежал"] },
    2: { answers: ["бегаю"] },
    3: { answers: ["хожу"] },
    4: { answers: ["ходила"] },
    5: { answers: ["бегу"] },
    6: { answers: ["бегаю"] },
    7: { answers: ["езжу"] },
    8: { answers: ["возишь"] },
    9: { answers: ["носит"] },
    10: { answers: ["бегал"] },
    11: { answers: ["бежал"] },
    12: { answers: ["бегаем"] },
    13: { answers: ["хожу"] },
    14: { answers: ["еду", "иду"] },
    15: { answers: ["везу"] },
    16: { answers: ["бегали"] },
    17: { answers: ["шла"] },
    18: { answers: ["ездила"] },
    19: { answers: ["ходил"] },
    20: { answers: ["бегу"] },
    21: { answers: ["бегу"] },
    22: { answers: ["бежал"] },
    23: { answers: ["несёшь"] },
    24: { answers: ["веду"] },
};

// ── Panel 5 — student · abitudine e fatto compiuto (no explanation) ─────────
const p5exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— В детстве мы ___ во дворе каждый вечер. — А помнишь, вчера ___ за мороженым — ларёк закрывался?",
        answers: ["бегали", "бежали"],
        glossary: {
            "двор": "cortile",
            "мороженое": "gelato",
            "ларёк": "chiosco"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Она ___ по утрам, когда жила в центре. — А после переезда? — ___ до остановки и на автобусе.",
        answers: ["бегала", "бежала"],
        glossary: {
            "переезд": "trasloco",
            "остановка": "fermata"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Раньше мы ___ в парке каждое утро. — А в прошлый вторник ___ за троллейбусом — проспали.",
        answers: ["бегали", "бежали"],
        glossary: {
            "троллейбус": "filobus",
            "проспали": "abbiamo dormito troppo"
        }
    },
];

// ── Panel 6 — student · processo interrotto e genere (no explanation) ───────
const p6exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ за собакой — она сорвалась с поводка. — И догнал? — Нет. Она ___ быстрее. — А часто она ___? — Каждый день.",
        answers: ["бежал", "бежала", "бегала"],
        glossary: {
            "сорвалась с поводка": "è scappata dal guinzaglio",
            "поводок": "guinzaglio"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Куда ты ___, когда я тебя увидел? — ___ за билетами — касса закрывалась. — И успел? — Успел.",
        answers: ["бежал", "бежал"],
        glossary: {
            "билеты": "biglietti",
            "касса": "biglietteria",
            "успел": "ce l'ho fatta"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Друзья ___ по пляжу каждое лето. — А в прошлом августе ___ за волной — дурачились.",
        answers: ["бегали", "бежали"],
        glossary: {
            "пляж": "spiaggia",
            "волна": "onda",
            "дурачились": "scherzavano"
        }
    },
];

// ── Panel 7 — paid · contesti variati (no explanation) ──────────────────────
const p7exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Ты сегодня утром ___? — ___ за автобусом — чуть не опоздал. — А обычно ты ___ по утрам? — Раньше ___, а теперь лень.",
        answers: ["бегал", "бежал", "бегал", "бегал"],
        glossary: {
            "чуть не опоздал": "per poco non facevo in tempo",
            "лень": "pigrizia"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ по лестнице — лифт сломался. — Сколько этажей? — Десять. Ты вообще когда-нибудь ___? — Нет.",
        answers: ["бежал", "бегал"],
        glossary: {
            "лестница": "scale",
            "лифт сломался": "ascensore rotto",
            "этаж": "piano"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Глюк ___ по квартире как сумасшедший. — Он часто так ___? — Когда видит огурец.",
        answers: ["бежал", "бегал"],
        glossary: {
            "Глюк": "nome del gatto",
            "сумасшедший": "pazzo",
            "огурец": "cetriolo"
        }
    },
];

// ── Panel 8 — paid · fatto compiuto e coniugazioni varie (no explanation) ───
const p8exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Ты когда-нибудь ___ марафон? — Нет, но однажды ___ за такси. — А часто ты ___? — Раньше ___, каждый день ___.",
        answers: ["бегал", "бежал", "бегал", "бегал", "бегал"],
        glossary: {
            "марафон": "maratona",
            "однажды": "una volta"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Он ___ стометровку в школе. Быстро ___? — Очень. Он вообще много ___ в детстве, часто ___ в школе.",
        answers: ["бежал", "бежал", "бегал", "бегал"],
        glossary: {
            "стометровка": "100 metri"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Мы ___ кросс в школе каждый год. — А в последний ___ изо всех сил — хотел рекорд.",
        answers: ["бегали", "бежал"],
        glossary: {
            "кросс": "corsa campestre",
            "изо всех сил": "con tutte le forze"
        }
    },
];

// ── Panel 9 — student · dialoghi complessi (no explanation) ─────────────────
const p9exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ на поезд — опаздывал. — Успел? — Вскочил. Сердце ___ как бешеное. — Часто ___ на поезда? — Когда опаздываю.",
        answers: ["бежал", "бежало", "бегал"],
        glossary: {
            "опаздывал": "ero in ritardo",
            "вскочил": "sono saltato su (nel vagone)",
            "сердце": "cuore"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Ты когда-нибудь ___ по утрам? — Раньше ___, каждое воскресенье ___. А вчера ___ за мусоровозом.",
        answers: ["бегал", "бегал", "бегал", "бежал"],
        glossary: {
            "мусоровоз": "camion della spazzatura"
        }
    },
];

// ── Panel 10 — paid · dialoghi avanzati (no explanation) ────────────────────
const p10exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ за скидками в чёрную пятницу. — И много народу ___? — Толпа.",
        answers: ["бежала", "бежало"],
        glossary: {
            "скидки": "sconti",
            "чёрная пятница": "Black Friday",
            "толпа": "folla"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Раньше я ___ на работу — три километра. — А в дождь ___ до метро и на автобусе?",
        answers: ["бегал", "бежал"],
        glossary: {
            "километр": "chilometro"
        }
    },
];

// ── Panel Manager ────────────────────────────────────────────────────────────
const initializers = {
    'panel-past-cor-01': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-01', exercises: p1exercises }),
    'panel-past-cor-02': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-02', exercises: p2exercises }),
    'panel-past-cor-03': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-03', exercises: p3exercises }),
    'panel-past-cor-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-cor-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-cor-11': () => new GapTextExercise({ rootId: 'ex-gaptext-past-cor-11', instruction: p11instruction, paragraphs: p11paragraphs, gaps: p11gaps, showHints: false }),
    'panel-past-cor-12': () => new GapTextExercise({ rootId: 'ex-gaptext-past-cor-12', instruction: p12instruction, paragraphs: p12paragraphs, gaps: p12gaps, showHints: false }),
    'panel-past-cor-05': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-05', exercises: p5exercises }),
    'panel-past-cor-06': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-06', exercises: p6exercises }),
    'panel-past-cor-07': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-07', exercises: p7exercises }),
    'panel-past-cor-08': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-08', exercises: p8exercises }),
    'panel-past-cor-09': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-09', exercises: p9exercises }),
    'panel-past-cor-10': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-10', exercises: p10exercises }),
};

initPanelManager({ initializers, enableAccessControl: false });
