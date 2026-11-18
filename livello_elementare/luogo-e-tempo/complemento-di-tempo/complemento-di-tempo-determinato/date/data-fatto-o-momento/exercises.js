import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Какое сегодня число?» (blocco Даты) — fatto ↔ momento con le date:
// Какое сегодня число? — Восемнадцатое ноября (ordinale neutro, nominativo) ↔ Когда? — Восемнадцатого ноября (genitivo, senza preposizione).
// Il mese è sempre al genitivo (ноября). Con il giorno della settimana: в субботу, двадцать первого.
// Solo giorno e mese: gli anni vanno nel blocco «Годы». Date tra parentesi in cifre: (18.11). Niente suggerimenti di significato.
// Storia: calendario di famiglia e feste (дни рождения, свадьба, 1 января, 8 марта, 9 мая, 1 сентября, 31 декабря).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Fatto ↔ momento con le date (solo date, niente ore), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(18.11) — Какое сегодня число? — Сегодня {{1}} ноября.",
        words: ["восемнадцатого", "восемнадцатый", "восемнадцатое"],
        correctAnswers: { 1: "восемнадцатое" },
        explanation: "Che giorno è? Il fatto: ordinale neutro (число) al nominativo: восемнадцатое."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18.11) — Когда у Антона день рождения? — {{1}} ноября.",
        words: ["Восемнадцатого", "Восемнадцатое", "В восемнадцатое"],
        correctAnswers: { 1: "Восемнадцатого" },
        explanation: "Quando? La data è un momento: genitivo senza preposizione: восемнадцатого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.12) — Какое сегодня число? — {{1}} декабря. Католическое Рождество!",
        words: ["Двадцать пятого", "Двадцать пятое", "Двадцать пятый"],
        correctAnswers: { 1: "Двадцать пятое" },
        explanation: "Il fatto: nominativo neutro: двадцать пятое."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21.11) У них свадьба в субботу, {{1}}.",
        words: ["двадцать первое", "в двадцать первое", "двадцать первого"],
        correctAnswers: { 1: "двадцать первого" },
        explanation: "Quando? Giorno della settimana: в + accusativo (в субботу); data al genitivo (двадцать первого)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12.06) {{1}} июня в России выходной: День России.",
        words: ["Двенадцатое", "Двенадцатого", "В двенадцатое"],
        correctAnswers: { 1: "Двенадцатого" },
        explanation: "Quando? Genitivo senza preposizione: двенадцатого июня."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.09) — Какое завтра число? — {{1}} сентября. Дети идут в школу!",
        words: ["Первое", "Первого", "Первый"],
        correctAnswers: { 1: "Первое" },
        explanation: "Какое число? Nominativo neutro: первое."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(08.03) {{1}} марта мы дарим маме цветы.",
        words: ["Восьмого", "Восьмое", "В восьмое"],
        correctAnswers: { 1: "Восьмого" },
        explanation: "Quando? Genitivo: восьмого марта. Il mese è sempre al genitivo: марта."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(09.05) — Какое сегодня число? — {{1}} мая. День Победы.",
        words: ["Девятого", "Девятое", "Девятый"],
        correctAnswers: { 1: "Девятое" },
        explanation: "Il fatto: nominativo neutro: девятое."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(31.12) — Какое сегодня число? — {{1}} декабря. Завтра Новый год!",
        words: ["Тридцать первое", "Тридцать первого", "Тридцать первый"],
        correctAnswers: { 1: "Тридцать первое" },
        explanation: "Nominativo: тридцать первое. Solo l'ultima parola è ordinale."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14.02) Мы познакомились в пятницу, {{1}} февраля.",
        words: ["в четырнадцатое", "четырнадцатое", "четырнадцатого"],
        correctAnswers: { 1: "четырнадцатого" },
        explanation: "Quando? в пятницу (в + accusativo) + data al genitivo: четырнадцатого февраля."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dfm-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dfm-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
