import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Какой сейчас год?» (blocco Годы) — fatto ↔ momento con gli anni:
// Какой сейчас год? — две тысячи двадцать шестой год (ordinale maschile, nominativo) ↔ В каком году? — в две тысячи двадцать шестом году (в + prepositivo).
// Si declina SOLO l'ultima parola; «в году» (non «в годе»); 2000 → двухтысячный / в двухтысячном; третий → третьем; сороковой.
// Anche: в этом / в прошлом / в следующем году; colloquiale «в двадцать шестом году», «в девяностом году».
// Solo date e anni (niente ore). Anni tra parentesi in cifre: (2026). Date storiche verificate.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: anno fatto ↔ momento (nuovo, si completa solo l'ultima parola) + date (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2026) — Какой сейчас год? — Сейчас две тысячи двадцать {{1}} год.",
        words: ["шестом", "шестого", "шестой"],
        correctAnswers: { 1: "шестой" },
        explanation: "Il fatto: ordinale maschile al nominativo (год è maschile): шестой."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18.11) — Какое сегодня число? — {{1}} ноября.",
        words: ["Восемнадцатое", "Восемнадцатого", "Восемнадцатый"],
        correctAnswers: { 1: "Восемнадцатое" },
        explanation: "Data: число è neutro → восемнадцатое (non «восемнадцатый» come per il год)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2026) Мы переехали в Италию в две тысячи двадцать {{1}} году.",
        words: ["шестой", "шестом", "шестого"],
        correctAnswers: { 1: "шестом" },
        explanation: "В каком году? в + prepositivo: шестой → шестом; e «году», non «годе»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.03) У мамы день рождения {{1}} марта.",
        words: ["пятое", "в пятом", "пятого"],
        correctAnswers: { 1: "пятого" },
        explanation: "Quando? Data al genitivo senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Я родился в {{1}} году.",
        words: ["двухтысячный", "двухтысячном", "двух тысячах"],
        correctAnswers: { 1: "двухтысячном" },
        explanation: "2000: двухтысячный → в двухтысячном году (una parola sola)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(сб, 21.11) Свадьба {{1}}, двадцать первого.",
        words: ["в субботу", "в суббота", "во субботу"],
        correctAnswers: { 1: "в субботу" },
        explanation: "Giorno della settimana: в + accusativo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) — В каком году родился папа? — В тысяча девятьсот {{1}} году.",
        words: ["девяностый", "девяностого", "девяностом"],
        correctAnswers: { 1: "девяностом" },
        explanation: "Solo l'ultima parola cambia: тысяча девятьсот девяностом."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05–05.05) Выставка работала {{1}} мая.",
        words: ["с первого по пятое", "между первым и пятым", "с первого по пятого"],
        correctAnswers: { 1: "с первого по пятое" },
        explanation: "Durata: с … по."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2023) В две тысячи двадцать {{1}} году мы поженились.",
        words: ["третем", "третьем", "третий"],
        correctAnswers: { 1: "третьем" },
        explanation: "Третий → третьем (con «ь»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) — К какому числу нужно сдать отчёт? — {{1}} мая.",
        words: ["В пятом", "К пятого", "К пятому"],
        correctAnswers: { 1: "К пятому" },
        explanation: "Scadenza: к + dativo."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-afm-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-afm-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
