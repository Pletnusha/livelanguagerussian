import WriteDialogueExercise from '/assets/js/engines/WriteDialogueExercise.js';
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

// ── Panel 2 — public · abitudine e fatto compiuto ───────────────────────────
const p2exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— В детстве мы ___ во дворе каждый вечер. — А помнишь, вчера ___ за мороженым — ларёк закрывался?",
        answers: ["бегали", "бежали"],
        explanation: "бегали каждый вечер → abitudine dell'infanzia. бежали за мороженым → corsa specifica verso obiettivo.",
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
        explanation: "бегала по утрам → abitudine (fitness quotidiano). бежала до остановки → processo con destinazione, abitudine interrotta.",
        glossary: {
            "переезд": "trasloco",
            "остановка": "fermata"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Раньше мы ___ в парке каждое утро. — А в прошлый вторник ___ за троллейбусом — проспали.",
        answers: ["бегали", "бежали"],
        explanation: "раньше бегали каждое утро → abitudine passata. бежали за троллейбусом → corsa specifica causata da ritardo.",
        glossary: {
            "троллейбус": "filobus",
            "проспали": "abbiamo dormito troppo"
        }
    },
];

// ── Panel 3 — public · processo interrotto e genere ─────────────────────────
const p3exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ за собакой — она сорвалась с поводка. — И догнал? — Нет. Она ___ быстрее. — А часто она ___? — Каждый день.",
        answers: ["бежал", "бежала", "бегала"],
        explanation: "бежал за собакой → corsa specifica in inseguimento. она бежала быстрее → processo con confronto. часто бегала → abitudine della cagna.",
        glossary: {
            "сорвалась с поводка": "è scappata dal guinzaglio",
            "поводок": "guinzaglio"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Куда ты ___, когда я тебя увидел? — ___ за билетами — касса закрывалась. — И успел? — Успел.",
        answers: ["бежал", "бежал"],
        explanation: "бежал, когда увидел → processo colto da altro evento. бежал за билетами → corsa specifica con destinazione urgente.",
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
        explanation: "бегали каждое лето → abitudine estiva di gruppo. бежали за волной → corsa specifica, momento preciso.",
        glossary: {
            "пляж": "spiaggia",
            "волна": "onda",
            "дурачились": "scherzavano"
        }
    },
];

// ── Panel 4 — student · contesti variati ────────────────────────────────────
const p4exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Ты сегодня утром ___? — ___ за автобусом — чуть не опоздал. — А обычно ты ___ по утрам? — Раньше ___, а теперь лень.",
        answers: ["бегал", "бежал", "бегал", "бегал"],
        explanation: "бегал (утром?) → domanda su abitudine. бежал за автобусом → corsa urgente verso mezzo. обычно/раньше бегал → abitudine presente e passata.",
        glossary: {
            "чуть не опоздал": "per poco non facevo in tempo",
            "лень": "pigrizia"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ по лестнице — лифт сломался. — Сколько этажей? — Десять. Ты вообще когда-нибудь ___? — Нет.",
        answers: ["бежал", "бегал"],
        explanation: "бежал по лестнице → processo in corso (10 piani). когда-нибудь бегал → domanda su abitudine.",
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
        explanation: "бежал по квартире → processo specifico in corso. часто бегал → abitudine ricorrente del gatto.",
        glossary: {
            "Глюк": "nome del gatto",
            "сумасшедший": "pazzo",
            "огурец": "cetriolo"
        }
    },
];

// ── Panel 5 — paid · fatto compiuto e coniugazioni varie ────────────────────
const p5exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Ты когда-нибудь ___ марафон? — Нет, но однажды ___ за такси. — А часто ты ___? — Раньше ___, каждый день ___.",
        answers: ["бегал", "бежал", "бегал", "бегал", "бегал"],
        explanation: "бегал марафон → domanda su abitudine/esperienza. бежал за такси → corsa specifica. часто/раньше/каждый день бегал → abitudine presente e passata.",
        glossary: {
            "марафон": "maratona",
            "однажды": "una volta"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Он ___ стометровку в школе. Быстро ___? — Очень. Он вообще много ___ в детстве, часто ___ в школе.",
        answers: ["бежал", "бежал", "бегал", "бегал"],
        explanation: "бежал стометровку → gara specifica. быстро бежал → processo con caratteristica. много/часто бегал → abitudine dell'infanzia.",
        glossary: {
            "стометровка": "100 metri"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Мы ___ кросс в школе каждый год. — А в последний ___ изо всех сил — хотел рекорд.",
        answers: ["бегали", "бежал"],
        explanation: "бегали кросс каждый год → abitudine scolastica. бежал изо всех сил → processo specifico con sforzo massimo.",
        glossary: {
            "кросс": "corsa campestre",
            "изо всех сил": "con tutte le forze"
        }
    },
];

// ── Panel 6 — paid · dialoghi complessi ─────────────────────────────────────
const p6exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ на поезд — опаздывал. — Успел? — Вскочил. Сердце ___ как бешеное. — Часто ___ на поезда? — Когда опаздываю.",
        answers: ["бежал", "бежало", "бегал"],
        explanation: "бежал на поезд → corsa specifica urgente. сердце бежало → uso metaforico del processo. часто бегал → abitudine condizionale.",
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
        explanation: "когда-нибудь бегал → domanda su esperienza. раньше/каждое воскресенье бегал → abitudine passata. бежал за мусоровозом → corsa specifica inaspettata.",
        glossary: {
            "мусоровоз": "camion della spazzatura"
        }
    },
];

// ── Panel 7 — paid · dialoghi avanzati ──────────────────────────────────────
const p7exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ за скидками в чёрную пятницу. — И много народу ___? — Толпа.",
        answers: ["бежала", "бежало"],
        explanation: "бежала за скидками → corsa specifica verso obiettivo. народу бежало → processo collettivo, soggetto al neutro (народ → бежало).",
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
        explanation: "раньше бегал на работу → abitudine passata (3 km al giorno). бежал до метро → processo con destinazione in condizione difficile.",
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
    'panel-past-cor-04': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-04', exercises: p4exercises }),
    'panel-past-cor-05': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-05', exercises: p5exercises }),
    'panel-past-cor-06': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-06', exercises: p6exercises }),
    'panel-past-cor-07': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-07', exercises: p7exercises }),
};

initPanelManager({ initializers, enableAccessControl: false });
