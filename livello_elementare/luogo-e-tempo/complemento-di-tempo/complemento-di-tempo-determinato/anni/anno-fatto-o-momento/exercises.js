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
// PANEL 2 — DragDrop · student
// Il fatto: ultima parola dell'anno, ordinale maschile al nominativo (шестой, двухтысячный, третий, сороковой)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2026) Сейчас две тысячи двадцать {{1}} год.",
        words: ["шестое", "шестой", "шестом"],
        correctAnswers: { 1: "шестой" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Это был {{1}} год.",
        words: ["двухтысячный", "двухтысячное", "двухтысячном"],
        correctAnswers: { 1: "двухтысячный" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) Тысяча девятьсот {{1}} год — год рождения папы.",
        words: ["девяностом", "девяностое", "девяностый"],
        correctAnswers: { 1: "девяностый" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2023) Две тысячи двадцать {{1}} год был трудным.",
        words: ["третье", "третьем", "третий"],
        correctAnswers: { 1: "третий" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1961) Тысяча девятьсот шестьдесят {{1}} год — Гагарин в космосе!",
        words: ["первый", "первое", "первом"],
        correctAnswers: { 1: "первый" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2014) Две тысячи {{1}} год — Олимпиада в Сочи.",
        words: ["четырнадцатое", "четырнадцатый", "четырнадцатом"],
        correctAnswers: { 1: "четырнадцатый" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1980) Тысяча девятьсот {{1}} год — Олимпиада в Москве.",
        words: ["восьмидесятое", "восьмидесятом", "восьмидесятый"],
        correctAnswers: { 1: "восьмидесятый" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2027) — Какой год будет следующим? — Две тысячи двадцать {{1}} год.",
        words: ["седьмой", "седьмое", "седьмого"],
        correctAnswers: { 1: "седьмой" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1940) — Какой год на фото? — Тысяча девятьсот {{1}} год.",
        words: ["сороковое", "сороковой", "сороковом"],
        correctAnswers: { 1: "сороковой" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2010) Две тысячи {{1}} год — я окончил школу.",
        words: ["десятый", "десятом", "десятое"],
        correctAnswers: { 1: "десятый" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Il momento: в … ом году (non «в … ом годе», non «… ый год»); 2000 = в двухтысячном году (una parola)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2026) Мы переехали в Италию в две тысячи двадцать {{1}}.",
        words: ["шестом годе", "шестой год", "шестом году"],
        correctAnswers: { 1: "шестом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Я родился в {{1}}.",
        words: ["двухтысячном году", "двухтысячный год", "двух тысячном году"],
        correctAnswers: { 1: "двухтысячном году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1961) Гагарин полетел в космос в тысяча девятьсот шестьдесят {{1}}.",
        words: ["первый год", "первом году", "первом годе"],
        correctAnswers: { 1: "первом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2014) Олимпиада в Сочи была в две тысячи {{1}}.",
        words: ["четырнадцатый год", "четырнадцатом году", "четырнадцатом годе"],
        correctAnswers: { 1: "четырнадцатом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2006) Олимпиада в Турине была в две тысячи {{1}}.",
        words: ["шестой год", "шестом годе", "шестом году"],
        correctAnswers: { 1: "шестом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1960) Олимпиада в Риме была в тысяча девятьсот {{1}}.",
        words: ["шестидесятом году", "шестидесятом годе", "шестидесятый год"],
        correctAnswers: { 1: "шестидесятом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2023) Мы поженились в две тысячи двадцать {{1}}.",
        words: ["третьем году", "третий год", "третьем годе"],
        correctAnswers: { 1: "третьем году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) Папа окончил университет в тысяча девятьсот {{1}}.",
        words: ["девяностом годе", "девяностый год", "девяностом году"],
        correctAnswers: { 1: "девяностом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1980) Олимпиада в Москве была в тысяча девятьсот {{1}}.",
        words: ["восьмидесятый год", "восьмидесятом году", "восьмидесятом годе"],
        correctAnswers: { 1: "восьмидесятом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2018) Чемпионат мира по футболу в России был в две тысячи {{1}}.",
        words: ["восемнадцатый год", "восемнадцатом годе", "восемнадцатом году"],
        correctAnswers: { 1: "восемнадцатом году" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Storia: В каком году? → в … ом году (eventi verificati), con spiegazioni
// ============================================================
const p4cards = [
    { front: "(1961) В каком году Гагарин полетел в космос?", back: "В тысяча девятьсот шестьдесят первом году", distractors: ["В тысяча девятьсот шестьдесят первом годе", "Тысяча девятьсот шестьдесят первый год"], explanation: "В каком году? в + prepositivo; si declina solo l'ultima parola; «году», non «годе»." },
    { front: "(1957) В каком году запустили первый спутник?", back: "В тысяча девятьсот пятьдесят седьмом году", distractors: ["В тысяча девятьсот пятьдесят седьмом годе", "Тысяча девятьсот пятьдесят седьмой год"], explanation: "седьмой → седьмом." },
    { front: "(1861) В каком году объединили Италию?", back: "В тысяча восемьсот шестьдесят первом году", distractors: ["В тысяча восемьсот шестьдесят первом годе", "Тысяча восемьсот шестьдесят первый год"], explanation: "Anche l'Ottocento: тысяча восемьсот…" },
    { front: "(1703) В каком году основали Санкт-Петербург?", back: "В тысяча семьсот третьем году", distractors: ["В тысяча семьсот третьем годе", "В тысяча семьсот третем году"], explanation: "Третий → третьем (con «ь»)." },
    { front: "(1945) В каком году закончилась Вторая мировая война?", back: "В тысяча девятьсот сорок пятом году", distractors: ["В тысяча девятьсот сорок пятом годе", "Тысяча девятьсот сорок пятый год"], explanation: "пятый → пятом." },
    { front: "(1991) В каком году распался СССР?", back: "В тысяча девятьсот девяносто первом году", distractors: ["В тысяча девятьсот девяносто первом годе", "Тысяча девятьсот девяносто первый год"], explanation: "первый → первом." },
    { front: "(2002) В каком году в Италии появились евро?", back: "В две тысячи втором году", distractors: ["В две тысячи втором годе", "Две тысячи второй год"], explanation: "второй → втором." },
    { front: "(1946) В каком году Италия стала республикой?", back: "В тысяча девятьсот сорок шестом году", distractors: ["В тысяча девятьсот сорок шестом годе", "Тысяча девятьсот сорок шестой год"], explanation: "шестой → шестом." },
    { front: "(1935) В каком году открыли московское метро?", back: "В тысяча девятьсот тридцать пятом году", distractors: ["В тысяча девятьсот тридцать пятом годе", "Тысяча девятьсот тридцать пятый год"], explanation: "Solo l'ultima parola cambia." },
    { front: "(2026) Какой сейчас год?", back: "Две тысячи двадцать шестой", distractors: ["В две тысячи двадцать шестом году", "Две тысячи двадцать шестое"], explanation: "Che anno è? Il fatto: nominativo maschile (non neutro: год, non число)." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-afm-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-afm-01', exercises: p1exercises }),
    'panel-afm-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-afm-02', exercises: p2exercises }),
    'panel-afm-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-afm-03', exercises: p3exercises }),
    'panel-afm-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-afm-04', cards: p4cards })
};

initPanelManager({ initializers, enableAccessControl: true });
