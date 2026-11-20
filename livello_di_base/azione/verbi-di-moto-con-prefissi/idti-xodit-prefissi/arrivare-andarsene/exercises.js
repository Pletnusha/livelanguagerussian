import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Прийти или уйти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// arrivare ↔ andarsene — при- (arrivo, в / на + acc., к + dat.) ↔ у- (lasciare un luogo: из / с / от + gen.; anche уйти домой, в магазин),
// con entrambe le coppie aspettuali: приходить / прийти ↔ уходить / уйти.
// Trappole: venire = прийти («Придёшь к нам?»); Me ne vado! = Я ухожу!; uscire (вышел) ≠ andarsene (ушёл);
// il treno parte = поезд уходит; lasciare il lavoro / i genitori = уйти с работы / от родителей. Forme: пришёл, приду (non «прийду»).
// Verificato su Gramota.ru (БТС): уйти в магазин, домой, за хлебом; поезд ушёл; уйти с работы, от родителей; прийти в гости, к другу.
// Solo frasi originali dei materiali «Курсы»; frasi nuove solo con il permesso della PM. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC misto (pagina 1: вышел ↔ ушёл) · Quiz (panel-aa-9)
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: прийти / уйти (nuovo, 7) + к + dat., из / с + gen. (vecchio, 3), con spiegazioni; presente 4, passato 5, futuro 1
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда ты {{1}} к нам на обед?",
        words: ["уйдёшь", "придёшь", "прийдёшь"],
        correctAnswers: { 1: "придёшь" },
        explanation: "Venire da noi = прийти к + dativo. Futuro: приду, придёшь (non «прийдёшь»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Наконец-то она пришла {{1}} в гости.",
        words: ["к нам", "у нас", "к нас"],
        correctAnswers: { 1: "к нам" },
        explanation: "Da qualcuno (moto) = к + dativo: к нам. «У нас» = stato in luogo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Уже {{1}}? — Да, мне пора, завтра рано вставать!",
        words: ["приходишь", "уходешь", "уходишь"],
        correctAnswers: { 1: "уходишь" },
        explanation: "Andarsene adesso → НСВ presente: «Уже уходишь?» = te ne vai già?"
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Моя подруга не живёт с родителями с университета. Она ушла {{1}}, когда ей было семнадцать.",
        words: ["в дом", "из дом", "из дома"],
        correctAnswers: { 1: "из дома" },
        explanation: "Lasciare la casa dei genitori = уйти из + genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я не могу и не хочу всё это выслушивать! Я {{1}}!",
        words: ["ухожу", "прихожу", "ухожю"],
        correctAnswers: { 1: "ухожу" },
        explanation: "Me ne vado! = Я ухожу! (presente НСВ, azione di adesso)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он {{1}} в библиотеку и принёс ноутбук, потому что дома он не мог ничего написать.",
        words: ["ушёл", "пришёл", "пришол"],
        correctAnswers: { 1: "пришёл" },
        explanation: "Arrivare in biblioteca = прийти в + accusativo. Passato: пришёл (non «пришол»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Ты слышала, что вчера случилось на вечеринке в ресторане? — Нет, я {{1}} из ресторана рано.",
        words: ["ушла", "вошла", "ушола"],
        correctAnswers: { 1: "ушла" },
        explanation: "Andarsene da = уйти из + genitivo. «Вошла из» non esiste: si dice войти в."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Они {{1}} к открытию музея. Но люди уже толпились у входа.",
        words: ["ушли", "пришлы", "пришли"],
        correctAnswers: { 1: "пришли" },
        explanation: "Arrivare per l'apertura = прийти к + dativo (momento). Passato: пришли."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он каждый день {{1}} на работу около девяти.",
        words: ["входит", "приходит", "прихадит"],
        correctAnswers: { 1: "приходит" },
        explanation: "Ogni giorno → НСВ: приходит на работу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Во сколько ты обычно уходишь {{1}}?",
        words: ["на работе", "с работы", "с работу"],
        correctAnswers: { 1: "с работы" },
        explanation: "Lasciare il lavoro a fine giornata = уходить с + genitivo."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Nuovo: прийти / уйти — «Дом и гости» (senza spiegazioni); * 3 e 6 adattate, 10 frase nuova approvata dalla PM
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы завтра устраиваем вечеринку. Вы {{1}} к нам?",
        words: ["уйдёте", "прийдёте", "придёте"],
        correctAnswers: { 1: "придёте" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Наконец-то она {{1}} к нам в гости.",
        words: ["пришла", "ушла", "прийшла"],
        correctAnswers: { 1: "пришла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Оля была очень рада: на её день рождения все {{1}} с цветами.",
        words: ["ушли", "пришли", "пришлы"],
        correctAnswers: { 1: "пришли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам пора {{1}}!",
        words: ["приходить", "уходить", "уходеть"],
        correctAnswers: { 1: "уходить" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Ты остаёшься? — Да, мне ещё нужно поработать. — Выключи свет, когда будешь {{1}}!",
        words: ["уходеть", "приходить", "уходить"],
        correctAnswers: { 1: "уходить" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Каждый раз, когда она {{1}} от нас, она забывает зонтик.",
        words: ["уходит", "приходит", "уходет"],
        correctAnswers: { 1: "уходит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я {{1}}, нужно купить что-нибудь?",
        words: ["прихожу", "ухожю", "ухожу"],
        correctAnswers: { 1: "ухожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он {{1}} от родителей, когда ему было восемнадцать.",
        words: ["вошёл", "ушёл", "ушол"],
        correctAnswers: { 1: "ушёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Моя подруга не живёт с родителями с университета. Она {{1}} из дома, когда ей было семнадцать.",
        words: ["ушла", "вошла", "ушола"],
        correctAnswers: { 1: "ушла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы ждём вас в субботу. {{1}} к часу!",
        words: ["Приходите", "Уходите", "Прийдите"],
        correctAnswers: { 1: "Приходите" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Nuovo: прийти / уйти — «Работа и вокзал» (senza spiegazioni); frasi 2, 5, 6, 8, 9, 10 nuove approvate dalla PM, 3 adattata (Наконец)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Во сколько ты обычно {{1}} с работы?",
        words: ["входишь", "уходишь", "уходеш"],
        correctAnswers: { 1: "уходишь" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Каждое утро я {{1}} в офис первой и включаю кофемашину.",
        words: ["прихажу", "ухожу", "прихожу"],
        correctAnswers: { 1: "прихожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Наконец он {{1}} в офис — на полчаса позже, чем обычно.",
        words: ["пришёл", "ушёл", "пришол"],
        correctAnswers: { 1: "пришёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Знаешь, Андрей опять {{1}} с работы. — Опять уволился?!",
        words: ["пришёл", "ушол", "ушёл"],
        correctAnswers: { 1: "ушёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Не звони Андрею на работу: он уже {{1}}.",
        words: ["ушёл", "пришёл", "ушол"],
        correctAnswers: { 1: "ушёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Лена в офисе? — Нет, она ещё не {{1}}: у неё приём у врача.",
        words: ["ушла", "пришла", "прийшла"],
        correctAnswers: { 1: "пришла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поезд {{1}} через десять минут.",
        words: ["уйдёт", "войдёт", "уйдёть"],
        correctAnswers: { 1: "уйдёт" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поезд на Москву {{1}} в восемь пятнадцать с третьего пути.",
        words: ["приходит", "уходет", "уходит"],
        correctAnswers: { 1: "уходит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поезд уже {{1}}, следующий через час.",
        words: ["пришёл", "ушёл", "ушол"],
        correctAnswers: { 1: "ушёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Завтра вы {{1}} в офис к восьми: у нас важная встреча.",
        words: ["придёте", "уйдёте", "прийдёте"],
        correctAnswers: { 1: "придёте" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-aa-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-aa-01', exercises: p1exercises }),
    'panel-aa-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-aa-02', exercises: p2exercises }),
    'panel-aa-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-aa-03', exercises: p3exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
