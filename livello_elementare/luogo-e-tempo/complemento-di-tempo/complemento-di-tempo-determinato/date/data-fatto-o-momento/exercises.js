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
// PANEL 2 — DragDrop · student
// Il fatto: ordinale neutro al nominativo (первое, второе, третье, двадцать второе)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(03.10) — Какое сегодня число? — {{1}} октября.",
        words: ["Третое", "Третье", "Третьего"],
        correctAnswers: { 1: "Третье" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.04) Сегодня {{1}} апреля.",
        words: ["второй", "второго", "второе"],
        correctAnswers: { 1: "второе" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(07.01) Сегодня {{1}} января, православное Рождество.",
        words: ["седьмое", "седьмой", "седьмого"],
        correctAnswers: { 1: "седьмое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(04.07) — Какое завтра число? — {{1}} июля.",
        words: ["Четвёртого", "Четвёртый", "Четвёртое"],
        correctAnswers: { 1: "Четвёртое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.02) Сегодня {{1}} февраля.",
        words: ["десятый", "десятое", "десятого"],
        correctAnswers: { 1: "десятое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(22.08) Сегодня {{1}} августа.",
        words: ["двадцать второе", "двадцать второго", "двадцать второй"],
        correctAnswers: { 1: "двадцать второе" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(30.04) Сегодня {{1}} апреля.",
        words: ["тридцатое", "тридцатого", "тридцатый"],
        correctAnswers: { 1: "тридцатое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(06.06) Сегодня {{1}} июня — День русского языка.",
        words: ["шестой", "шестого", "шестое"],
        correctAnswers: { 1: "шестое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(11.11) — Какое вчера было число? — {{1}} ноября.",
        words: ["Одиннадцатое", "Одиннадцатого", "Одиннадцатый"],
        correctAnswers: { 1: "Одиннадцатое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23.02) Сегодня {{1}} февраля.",
        words: ["двадцать третий", "двадцать третье", "двадцать третьего"],
        correctAnswers: { 1: "двадцать третье" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Il momento: ordinale al genitivo senza preposizione (пятого марта, третьего июля)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.03) У мамы день рождения {{1}} марта.",
        words: ["пятое", "пятого", "в пятое"],
        correctAnswers: { 1: "пятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(03.07) Мы уезжаем на море {{1}} июля.",
        words: ["третьего", "третего", "третье"],
        correctAnswers: { 1: "третьего" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.05) Экзамен будет {{1}} мая.",
        words: ["пятнадцатое", "в пятнадцатое", "пятнадцатого"],
        correctAnswers: { 1: "пятнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.06) Дети едут в лагерь {{1}} июня.",
        words: ["первое", "в первое", "первого"],
        correctAnswers: { 1: "первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(24.12) Мы украшаем ёлку {{1}} декабря.",
        words: ["двадцать четвёртого", "двадцать четвёртое", "в двадцать четвёртое"],
        correctAnswers: { 1: "двадцать четвёртого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.10) Бабушка приедет {{1}} октября.",
        words: ["второе", "второго", "в второе"],
        correctAnswers: { 1: "второго" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19.08) Я вернулся из отпуска {{1}} августа.",
        words: ["девятнадцатое", "в девятнадцатое", "девятнадцатого"],
        correctAnswers: { 1: "девятнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(30.11) Концерт будет {{1}} ноября.",
        words: ["тридцатого", "тридцатое", "тридцатый"],
        correctAnswers: { 1: "тридцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13.01) У брата день рождения {{1}} января.",
        words: ["тринадцатое", "тринадцатого", "в тринадцатое"],
        correctAnswers: { 1: "тринадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23.02) {{1}} февраля мы поздравляем папу.",
        words: ["Двадцать третье", "Двадцать третего", "Двадцать третьего"],
        correctAnswers: { 1: "Двадцать третьего" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dfm-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dfm-01', exercises: p1exercises }),
    'panel-dfm-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dfm-02', exercises: p2exercises }),
    'panel-dfm-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dfm-03', exercises: p3exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
