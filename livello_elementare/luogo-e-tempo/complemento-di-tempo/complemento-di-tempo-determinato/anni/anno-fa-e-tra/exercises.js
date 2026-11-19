import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Год назад, через год» (blocco Годы) — tempo contato da oggi (adesso = 2026): назад (passato) ↔ через (futuro).
// Ordine come in italiano: два года назад = due anni fa; через два года = tra due anni. Il senso dal tempo del verbo (переехал → назад, переедем → через) o da (2024; сейчас 2026).
// Difficoltà principale: год / года / лет (1, 21 → год; 2–4, 22 → года; 5–20, 25, 100 → лет). Через полгода come «через полчаса».
// «Год назад» ≠ «в прошлом году» (l'anno solare 2025); «через год» ≠ «в следующем году». «Тому назад», «спустя» non si insegnano; «после года» non è «tra un anno».
// Solo nei pannelli misti: через два года после свадьбы. Vecchio materiale: в … году, с … года, до / после, около, к … году, в прошлом году, decenni.
// Solo anni (niente ore). Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto, incontro di ex compagni di scuola (adesso = 2026): назад / через, год / года / лет (nuovo) + в … году, с … года, в прошлом году, к … году (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2016; сейчас 2026) Мы окончили школу {{1}} назад.",
        words: ["десять лет", "десять года", "десять год"],
        correctAnswers: { 1: "десять лет" },
        explanation: "Passato: … назад = … fa. Con 5–20 si dice «лет»: десять лет назад."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2016) Мы окончили школу в две тысячи {{1}}.",
        words: ["шестнадцатого года", "шестнадцатый год", "шестнадцатом году"],
        correctAnswers: { 1: "шестнадцатом году" },
        explanation: "L'anno preciso: в + prepositivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2027; сейчас 2026) Следующая встреча будет {{1}}.",
        words: ["год назад", "через год", "после года"],
        correctAnswers: { 1: "через год" },
        explanation: "Futuro (будет): через + accusativo = tra un anno."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2023; сейчас 2026) Аня вышла замуж {{1}}.",
        words: ["через три года", "три года назад", "три лет назад"],
        correctAnswers: { 1: "три года назад" },
        explanation: "Passato (вышла): назад. Con 2–4 si dice «года»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2019) Марко живёт в Москве {{1}}.",
        words: ["с две тысячи девятнадцатого года", "в две тысячи девятнадцатом году", "до две тысячи девятнадцатого года"],
        correctAnswers: { 1: "с две тысячи девятнадцатого года" },
        explanation: "Dal 2019 a oggi: с + genitivo, con il presente."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2028; сейчас 2026) Олег откроет свой ресторан {{1}}.",
        words: ["два года назад", "через два лет", "через два года"],
        correctAnswers: { 1: "через два года" },
        explanation: "Futuro (откроет): через. Con 2–4: года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2025) {{1}} мы тоже встречались, но пришли не все.",
        words: ["В прошлый год", "В прошлом году", "Через год"],
        correctAnswers: { 1: "В прошлом году" },
        explanation: "Il 2025 = l'anno scorso: в прошлом году (в + prepositivo)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2025; сейчас 2026) Лена родила сына {{1}} назад.",
        words: ["год", "года", "лет"],
        correctAnswers: { 1: "год" },
        explanation: "Con 1 si dice «год»: год назад = un anno fa."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2030) Мы хотим собрать весь класс {{1}}.",
        words: ["к две тысячи тридцатого года", "до две тысячи тридцатом году", "к две тысячи тридцатому году"],
        correctAnswers: { 1: "к две тысячи тридцатому году" },
        explanation: "Entro il 2030: к + dativo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2021; сейчас 2026) — Когда ты переехал в Рим? — {{1}} назад.",
        words: ["Пять года", "Пять лет", "Через пять лет"],
        correctAnswers: { 1: "Пять лет" },
        explanation: "Passato (переехал): назад. Con 5: лет."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-aft-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-aft-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
