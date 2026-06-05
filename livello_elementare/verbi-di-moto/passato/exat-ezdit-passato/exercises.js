import WriteDialogueExercise from '/assets/js/engines/WriteDialogueExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — Write · public · Dialoghi brevi (D5, D7, D3)
// ============================================================
const p1exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Мы ___ в прошлые выходные? — ___ три часа туда, три часа обратно.",
        answers: ["ездили", "ехали"],
        explanation: "ездили → fatto passato concluso (в прошлые выходные). ехали три часа → processo con durata.",
        glossary: {}
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Вы ___ в Петербург на выходные? — Да. ___ ночным поездом — не спал ни минуты.",
        answers: ["ездили", "ехали"],
        explanation: "ездили → fatto compiuto con ritorno. ехали ночным поездом → processo del viaggio con caratteristica.",
        glossary: {
            "ни минуты": "neanche un minuto"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Куда вы ___ на выходных? — В Казань. ___ двенадцать часов — уснул на перроне.",
        answers: ["ездили", "ехали"],
        explanation: "ездили → evento concluso con ritorno. ехали двенадцать часов → durata del processo.",
        glossary: {
            "перрон": "marciapiede della stazione"
        }
    },
];

// ============================================================
// PANEL 2 — Write · public · Abitudine e fatto compiuto (D2, D4, D13)
// ============================================================
const p2exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Андрей опять ___ к маме? — ___ полтора часа — и зря. Её не было дома. — А чего не позвонил? — Звонил. Она не ответила. Я испугался, не случилось ли чего, и поехал.",
        answers: ["ездил", "ехал"],
        explanation: "ездил → azione ripetuta con ritorno (опять). ехал полтора часа → durata del processo di viaggio.",
        glossary: {
            "опять": "di nuovo",
            "зря": "invano",
            "испугался": "mi sono spaventato",
            "не случилось ли чего": "che non fosse successo qualcosa"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Ты ___ в аптеку? — Да, ___ полчаса туда и обратно. Закрыто. — Позвонить не мог? — Звонил. Четверг. Аптека по четвергам не работает. — Что за бред?! Почему по четвергам?! — Так написано на дверях. Я не придумывал.",
        answers: ["ездил", "ездил"],
        explanation: "ездил (entrambe) → fatto compiuto chiuso. «полчаса туда и обратно» = l'intera gita come evento concluso.",
        glossary: {
            "закрыто": "chiuso",
            "по четвергам": "il giovedì",
            "бред": "assurdo / che cavolata"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Раньше я ___ на работу на машине. — А в метель ты тоже ___? — Нет, в тот день ___ на метро.",
        answers: ["ездил", "ехал", "ехал"],
        explanation: "ездил (раньше) → abitudine passata. ехал (в метель / в тот день) → singola occasione, processo.",
        glossary: {
            "метель": "tempesta di neve / bufera"
        }
    },
];

// ============================================================
// PANEL 3 — Write · public · Processo interrotto e genere (D8, D9, D6)
// ============================================================
const p3exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Я ___ на дачу и вдруг увидел лося. — А ты часто туда ___? — Раньше каждую неделю ___. Теперь лосей боюсь.",
        answers: ["ехал", "ездил", "ездил"],
        explanation: "ехал (и вдруг) → processo interrotto da evento improvviso. ездил (часто / раньше) → abitudine passata.",
        glossary: {
            "лося": "un alce (acc.)",
            "лосей": "degli alci (gen.)",
            "вдруг": "all'improvviso"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Куда ты ___, когда я позвонил? — ___ на работу. — Опять пробка? — Каждое утро. Час ___ — вернее, стоял. Один бампер изучил вдоль и поперёк.",
        answers: ["ехал", "ехал", "ехал"],
        explanation: "ехал (когда позвонил) → processo colto da altro evento. час ехал — стоял → ironia: tecnicamente si muoveva, in realtà era fermo in coda.",
        glossary: {
            "пробка": "ingorgo",
            "бампер": "paraurti",
            "вернее": "anzi / più precisamente"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Она ___ к бабушке каждые выходные. — А в тот раз ___ на такси? — На такси. Автобусы туда не ходят. — И почему на такси? У неё же своя машина! Она на ней ___.",
        answers: ["ездила", "ехала", "ездила"],
        explanation: "ездила (каждые выходные) → abitudine regolare. ехала (в тот раз) → singola occorrenza, processo. ездила (на ней) → abitudine generale.",
        glossary: {
            "автобусы туда не ходят": "gli autobus non vanno lì"
        }
    },
];

// ============================================================
// PANEL 4 — Write · student · Contesti ricchi (D10, D11, D15)
// ============================================================
const p4exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Мы ___ в горы на прошлых выходных. — Долго ___? — Шесть часов в одну сторону. — Ужас! А ___ обратно? — Тоже шесть часов. Зато красиво.",
        answers: ["ездили", "ехали", "ехали"],
        explanation: "ездили → fatto passato concluso. ехали (долго / обратно) → durata e processo del viaggio di ritorno.",
        glossary: {
            "ужас": "che terrore",
            "зато": "però / ma almeno"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Он ___ на Байкал в прошлом году? — Да. ___ на поезде трое суток. — А ты когда-нибудь туда ___?",
        answers: ["ездил", "ехал", "ездил"],
        explanation: "ездил (в прошлом году) → fatto compiuto. ехал трое суток → durata del processo. ездил (когда-нибудь) → domanda su un fatto passato.",
        glossary: {
            "трое суток": "tre giorni e tre notti"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Дети ___ в лагерь каждое лето. — В прошлом году тоже ___? — Да, ___ на автобусе.",
        answers: ["ездили", "ездили", "ехали"],
        explanation: "ездили (каждое лето) → abitudine. ездили (в прошлом году) → fatto concluso confermato. ехали на автобусе → processo del viaggio.",
        glossary: {
            "лагерь": "campo estivo"
        }
    },
];

// ============================================================
// PANEL 5 — Write · paid · Fatto compiuto e durata (D12, D14, D16)
// ============================================================
const p5exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Ты уже ___ за продуктами? — ___ как раз, когда ты позвонил. Пришлось развернуться. — А потом снова ___?",
        answers: ["ездил", "ехал", "ездил"],
        explanation: "ездил (уже) → fatto compiuto. ехал как раз → processo interrotto dalla telefonata. ездил (снова) → ripetizione del fatto.",
        glossary: {
            "как раз": "proprio in quel momento",
            "пришлось": "ho dovuto"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Мы ___ на экскурсию с классом. — Как ___? — На автобусе, час ___.",
        answers: ["ездили", "ехали", "ехали"],
        explanation: "ездили → fatto concluso. ехали (как / час) → modo e durata del processo.",
        glossary: {
            "экскурсию": "gita scolastica / escursione"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Вы ___ в Италию прошлым летом? — Да. ___ через всю Европу на машине. — Сколько дней ___?",
        answers: ["ездили", "ехали", "ехали"],
        explanation: "ездили → fatto compiuto. ехали через всю Европу → processo del viaggio. сколько дней ехали → domanda sulla durata.",
        glossary: {
            "через всю Европу": "attraverso tutta l'Europa"
        }
    },
];

// ============================================================
// PANEL 6 — Write · paid · Dialoghi complessi (D1, D17, D18, D19)
// ============================================================
const p6exercises = [
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Ты вчера ___ к маме? — ___, ___ — и машина сломалась. Развернулся. — Обратно ___ два часа. Мама звонила три раза.",
        answers: ["ездил", "ехал", "ехал", "ехал"],
        explanation: "ездил → fatto compiuto con ritorno (вчера). ехал, ехал → processo in corso, interrotto dalla macchina rotta. обратно ехал → durata del viaggio di ritorno.",
        glossary: {
            "сломалась": "si è rotta",
            "развернулся": "sono tornato indietro"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Мы ___ в театр на прошлой неделе. — ___ в пробке? — Да, но ___ быстро.",
        answers: ["ездили", "ехали", "ехали"],
        explanation: "ездили → fatto concluso. ехали в пробке / ехали быстро → processo con caratteristiche contrastanti.",
        glossary: {
            "театр": "teatro",
            "пробке": "nell'ingorgo"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Она никогда не ___ за границу. — А в прошлом году куда ___? — В Турцию. ___ туда три часа.",
        answers: ["ездила", "ездила", "ехала"],
        explanation: "ездила (никогда не) → assenza di fatto. ездила (куда) → domanda su fatto passato. ехала три часа → durata del processo.",
        glossary: {
            "за границу": "all'estero"
        }
    },
    {
        instruction: "Scrivi la forma corretta del verbo al passato.",
        text: "— Родители ___ на Байкал. А ты? — Я тоже ___. На поезде трое суток ___.",
        answers: ["ездили", "ездил", "ехал"],
        explanation: "ездили / ездил → fatti conclusi con ritorno. трое суток ехал → durata del processo di viaggio.",
        glossary: {}
    },
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-past-ez-01': () => new WriteDialogueExercise({ rootId: 'ex-write-past-ez-01', exercises: p1exercises }),
    'panel-past-ez-02': () => new WriteDialogueExercise({ rootId: 'ex-write-past-ez-02', exercises: p2exercises }),
    'panel-past-ez-03': () => new WriteDialogueExercise({ rootId: 'ex-write-past-ez-03', exercises: p3exercises }),
    'panel-past-ez-04': () => new WriteDialogueExercise({ rootId: 'ex-write-past-ez-04', exercises: p4exercises }),
    'panel-past-ez-05': () => new WriteDialogueExercise({ rootId: 'ex-write-past-ez-05', exercises: p5exercises }),
    'panel-past-ez-06': () => new WriteDialogueExercise({ rootId: 'ex-write-past-ez-06', exercises: p6exercises }),
};

initPanelManager({ initializers, enableAccessControl: false });
