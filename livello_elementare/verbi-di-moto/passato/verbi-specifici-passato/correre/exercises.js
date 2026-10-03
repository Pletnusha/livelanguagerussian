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
    "Через полчаса все были в парке. Тимур ждал у входа с [[секундомером::cronometro]], а Лена уже {{16}} на месте и проверяла пульс. Катя в машину не села и {{17}} к парку пешком, с кофе. Аня {{18}} кругами вокруг парка и искала, где [[поставить машину::parcheggiare]]. Женя {{19}} вокруг [[пруда::stagno, laghetto]] и считал шаги. А Андрей, как всегда, [[проспал::non si è svegliato in tempo]].",
    "— Андрей, ты где?!",
    "— Я {{20}}, {{21}}! [[Опаздываю::sono in ritardo]]!",
    "Он действительно {{22}} — от киоска с шаурмой к парку.",
    "— Андрей, а что это ты {{23}}?!",
    "— Шаурму. Это мой завтрак. Тренировка же!",
    "— Так, все здесь, — [[скомандовал::ha dato l'ordine]] Тимур. — Я {{24}} вас на [[разминку::riscaldamento]].",
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
    16: { answers: ["бегала"] },
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

// ── Panel 7 — public · Quiz misto (multiple choice + match + write) ───────────
// 30 frasi dai dialoghi e dai tre testi (бежать/бегать + ходить/идти, ездить/ехать, нести, везти)
function initPanel7() {
    const panel = document.getElementById('panel-past-cor-07');
    if (!panel) return;

    const container = panel.querySelector('#past-cor-07-cards-container');
    const prevBtn   = panel.querySelector('#past-cor-07-deck-prev');
    const nextBtn   = panel.querySelector('#past-cor-07-deck-next');
    const counterEl = panel.querySelector('#past-cor-07-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Тимур опоздал: последние два километра он ___.", options: ["бежал", "бегал", "шёл"], answer: "бежал" },
        { question: "Я сегодня ___ по парку два часа.", options: ["бежал", "бегал", "бегу"], answer: "бегал" },
        { question: "На беговой дорожке ты ___ целый час и смотришь в стену.", options: ["бежишь", "бегал", "бегаешь"], answer: "бегаешь" },
        { question: "Вчера я ___ за автобусом: машина была в сервисе.", options: ["бежала", "бегала", "ехала"], answer: "бежала" },
        { question: "Андрей ___ в киоск за шаурмой и обратно.", options: ["бежал", "бегал", "бежит"], answer: "бегал" },
        { question: "— Тимур, ты где? — Всё, ___! Опаздываю!", options: ["бегаю", "бежал", "бегу"], answer: "бегу" },
        { question: "Время ___ быстро, и до старта оставался месяц.", options: ["бежало", "бегало", "бежит"], answer: "бежало" },
        { question: "Я этот марафон не ___. Я вообще не бегаю.", options: ["бегаю", "бегу", "бежала"], answer: "бегу" },
        { question: "Ночью Тимур ___ по лесу с налобным фонариком.", options: ["бегал", "бегает", "бежал"], answer: "бежал" },
        { question: "Лена каждый день ___ на дорожке сорок минут.", options: ["бегает", "бежит", "бежала"], answer: "бегает" },
    ];
    const matchPairs = [
        { left: "Последний километр Лена ___ рядом с Тимуром.", right: "бежала" },
        { left: "Раньше я ___ по утрам, а теперь сплю до десяти.", right: "бегал" },
        { left: "Аня ___ только когда опаздывает.", right: "бегает" },
        { left: "Смотри, вон курьер ___ с пиццей!", right: "бежит" },
        { left: "Во вторник и в четверг мы ___ в парке.", right: "бегаем" },
        { left: "— Ты где? — Я уже ___, пять минут!", right: "бегу" },
        { left: "Дети каждый вечер ___ во дворе.", right: "бегают" },
        { left: "В прошлом году он ___ за трамваем и даже его догнал.", right: "бежал" },
        { left: "В детстве она ___ быстрее всех в классе.", right: "бегала" },
        { left: "Мы ___ на поезд и чуть не опоздали.", right: "бежали" },
    ];
    const quizData = [
        { id: "q01", promptPrefix: "Тимур уже двадцатый час ", promptSuffix: " по снегу.", answers: ["бежал"] },
        { id: "q02", promptPrefix: "Андрей ", promptSuffix: " от машины к костру и обратно — греться.", answers: ["бегал"] },
        { id: "q03", promptPrefix: "Всю ночь ребята ", promptSuffix: " от одной контрольной точки к другой.", answers: ["ездили"] },
        { id: "q04", promptPrefix: "Аня ", promptSuffix: " кругами вокруг парка и искала, где поставить машину.", answers: ["ездила"] },
        { id: "q05", promptPrefix: "Женя ", promptSuffix: " вокруг пруда и считал шаги.", answers: ["ходил"] },
        { id: "q06", promptPrefix: "Катя в машину не села и ", promptSuffix: " к парку пешком, с кофе.", answers: ["шла"] },
        { id: "q07", promptPrefix: "— Все в машину! Я ", promptSuffix: " вас на тренировку!", answers: ["везу"] },
        { id: "q08", promptPrefix: "— Андрей, а что это ты ", promptSuffix: "?! — Шаурму. Это мой завтрак.", answers: ["несёшь"] },
        { id: "q09", promptPrefix: "Зимой я всегда ", promptSuffix: " с собой термос с горячим чаем.", answers: ["ношу"] },
        { id: "q10", promptPrefix: "Лена уже ", promptSuffix: " на месте и проверяла пульс.", answers: ["бегала"] },
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
            card.className = 'fca01-card-container past-cor-07-card';
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
        container.querySelectorAll('.past-cor-07-card').forEach(card => {
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
                const card    = this.closest('.past-cor-07-card');
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
        container.querySelectorAll('.past-cor-07-card').forEach((c, i) => {
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
    'panel-past-cor-01': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-01', exercises: p1exercises }),
    'panel-past-cor-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-cor-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    'panel-past-cor-11': () => new GapTextExercise({ rootId: 'ex-gaptext-past-cor-11', instruction: p11instruction, paragraphs: p11paragraphs, gaps: p11gaps, showHints: false }),
    'panel-past-cor-12': () => new GapTextExercise({ rootId: 'ex-gaptext-past-cor-12', instruction: p12instruction, paragraphs: p12paragraphs, gaps: p12gaps, showHints: false }),
    'panel-past-cor-05': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-05', exercises: p5exercises }),
    'panel-past-cor-06': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-06', exercises: p6exercises }),
    'panel-past-cor-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: true });
