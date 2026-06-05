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

// ── Panel 4 — public · testo (stub) ─────────────────────────────────────────
const p4exercises = [
    // TODO: testo con бежал/бегал in contesto narrativo
];

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
    'panel-past-cor-04': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-04', exercises: p4exercises }),
    'panel-past-cor-05': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-05', exercises: p5exercises }),
    'panel-past-cor-06': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-06', exercises: p6exercises }),
    'panel-past-cor-07': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-07', exercises: p7exercises }),
    'panel-past-cor-08': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-08', exercises: p8exercises }),
    'panel-past-cor-09': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-09', exercises: p9exercises }),
    'panel-past-cor-10': () => new WriteDialogueExercise({ rootId: 'ex-write-past-cor-10', exercises: p10exercises }),
};

initPanelManager({ initializers, enableAccessControl: false });
