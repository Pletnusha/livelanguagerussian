import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «В девяностые годы» (blocco Годы) — l'epoca, non l'anno: decennio ↔ secolo.
// Decennio: в девяностые годы (в + accusativo plurale) ↔ в девяностом году (1990, un solo anno). Fatto: Это были девяностые.
// Variante «в девяностых (годах)» = norma anche questa: accettata nelle risposte scritte, mai come distrattore; «в девяностые года» = colloquiale, mai distrattore.
// Secolo: в двадцатом веке (в + prepositivo); Какой сейчас век? — Двадцать первый. Novecento = двадцатый век (non «девятисотый»).
// В начале / в конце (genitivo): в начале девяностых, в конце девятнадцатого века. «прошлого века» per distinguere gli anni Venti del Novecento.
// Solo anni ed epoche (niente ore). Vecchio materiale: в … году, с … по … год, с … года, data completa, «Ты какого года?».
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: decennio, secolo, в начале / в конце (nuovo) + в … году, с … по … год, с … года, anno di nascita (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(90-е) Моя мама жила в Москве {{1}}.",
        words: ["в девяностом году", "в девяностые годы", "в девяностый год"],
        correctAnswers: { 1: "в девяностые годы" },
        explanation: "Un decennio (gli anni Novanta): в + accusativo plurale: в девяностые годы. Si dice anche «в девяностых»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) Мама родилась в тысяча девятьсот {{1}}.",
        words: ["девяностом году", "девяностые годы", "девяностого года"],
        correctAnswers: { 1: "девяностом году" },
        explanation: "Un solo anno (il 1990): в + prepositivo: в девяностом году."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(XX в.) Феллини жил и работал в {{1}} веке.",
        words: ["двадцатый", "двадцатого", "двадцатом"],
        correctAnswers: { 1: "двадцатом" },
        explanation: "Il secolo: в + prepositivo, come con l'anno: в двадцатом веке. Attenzione: il Novecento = двадцатый век."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2005–2012) Мы жили в Турине с две тысячи пятого {{1}}.",
        words: ["по две тысячи двенадцатого года", "в две тысячи двенадцатом году", "по две тысячи двенадцатый год"],
        correctAnswers: { 1: "по две тысячи двенадцатый год" },
        explanation: "Periodo: с + genitivo … по + accusativo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(90-е) — Какие это были годы? — Это были {{1}}.",
        words: ["девяностые", "девяностых", "девяностый"],
        correctAnswers: { 1: "девяностые" },
        explanation: "Il fatto: nominativo plurale: девяностые (годы)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2017) Я живу в Италии {{1}}.",
        words: ["в две тысячи семнадцатом году", "с две тысячи семнадцатого года", "по две тысячи семнадцатый год"],
        correctAnswers: { 1: "с две тысячи семнадцатого года" },
        explanation: "Dal 2017 a oggi: с + genitivo, con il presente."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(XXI в.) — Какой сейчас век? — {{1}} век.",
        words: ["Двадцать первый", "Двадцать первом", "Двадцать первого"],
        correctAnswers: { 1: "Двадцать первый" },
        explanation: "Il fatto: nominativo: двадцать первый век."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1991) Мы переехали в Италию в начале {{1}}.",
        words: ["девяностые", "девяностых", "девяностом"],
        correctAnswers: { 1: "девяностых" },
        explanation: "в начале + genitivo plurale: в начале девяностых (годов)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1985) — Ты какого года? — {{1}}.",
        words: ["Восьмидесятые", "В восемьдесят пятом", "Восемьдесят пятого"],
        correctAnswers: { 1: "Восемьдесят пятого" },
        explanation: "Anno di nascita: genitivo, senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1895–1896) Чехов написал «Чайку» в конце {{1}} века.",
        words: ["девятнадцатого", "девятнадцатом", "девятнадцатый"],
        correctAnswers: { 1: "девятнадцатого" },
        explanation: "в конце + genitivo: в конце девятнадцатого века."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-ad-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-ad-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
