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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-aa-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-aa-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
