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
// PANEL 5 — Flashcard · student
// в этом / в прошлом / в следующем году; anno abbreviato colloquiale (в девяностом году, в двадцать шестом году)
// ============================================================
const p5cards = [
    { front: "Сейчас 2026 год. Когда ты начал учить русский? (2026)", back: "В этом году", distractors: ["В этот год", "В этом годе"] },
    { front: "Сейчас 2026 год. Когда мы были в Москве? (2025)", back: "В прошлом году", distractors: ["В прошлый год", "В прошлом годе"] },
    { front: "Сейчас 2026 год. Когда ты поедешь в Россию? (2027)", back: "В следующем году", distractors: ["В следующий год", "В следующем годе"] },
    { front: "(1990) Когда родился папа? Скажи коротко, как в разговоре.", back: "В девяностом году", distractors: ["В девяностый год", "В девяностом годе"] },
    { front: "(2026) Когда мы переехали? Коротко, как в разговоре.", back: "В двадцать шестом году", distractors: ["В двадцать шестой год", "В двадцать шестом годе"] },
    { front: "(1985) Когда родилась мама? Коротко, как в разговоре.", back: "В восемьдесят пятом году", distractors: ["В восемьдесят пятый год", "В восемьдесят пятом годе"] },
    { front: "Сейчас 2026 год. Когда открылось кафе у дома? (2025)", back: "В прошлом году", distractors: ["В прошлый год", "В прошлом годе"] },
    { front: "(2000) Когда ты родился?", back: "В двухтысячном году", distractors: ["В двухтысячный год", "В двух тысячном году"] },
    { front: "Сейчас 2026 год. Когда у нас свадьба? (2027)", back: "В следующем году", distractors: ["В следующий год", "В следующем годе"] },
    { front: "(2014) Когда была Олимпиада в Сочи? Коротко, как в разговоре.", back: "В четырнадцатом году", distractors: ["В четырнадцатый год", "В четырнадцатом годе"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto — Olimpiadi: anno fatto / momento / в этом году / anno breve (nuovo) + date: fatto, momento, с … по, к, между (vecchio)
// ============================================================
const p6cards = [
    { front: "(2026) В каком году прошла Олимпиада в Милане и Кортине?", back: "В две тысячи двадцать шестом году", distractors: ["В две тысячи двадцать шестом годе", "Две тысячи двадцать шестой год"] },
    { front: "(06.02) Какого числа открылась Олимпиада в Милане?", back: "Шестого февраля", distractors: ["Шестое февраля", "В шестое февраля"] },
    { front: "(06.02–22.02) С какого по какое число шла Олимпиада?", back: "С шестого по двадцать второе февраля", distractors: ["С шестого по двадцать второго февраля", "Между шестым и двадцать вторым февраля"] },
    { front: "(1960) Какой это год? Олимпиада в Риме.", back: "Тысяча девятьсот шестидесятый", distractors: ["Тысяча девятьсот шестидесятое", "В тысяча девятьсот шестидесятом году"] },
    { front: "(22.02) Какое сегодня число? Закрытие Олимпиады.", back: "Двадцать второе февраля", distractors: ["Двадцать второго февраля", "Двадцать второй февраль"] },
    { front: "(1980) Когда была Олимпиада в Москве? Коротко, как в разговоре.", back: "В восьмидесятом году", distractors: ["В восьмидесятый год", "В восьмидесятом годе"] },
    { front: "(01.02) — К какому числу нужно купить билеты?", back: "К первому февраля", distractors: ["К первого февраля", "К первое февраля"] },
    { front: "Сейчас 2026 год. Когда мы смотрели Олимпиаду по телевизору? (2026)", back: "В этом году", distractors: ["В этот год", "В этом годе"] },
    { front: "(10.02–15.02) Когда мы купили сувениры?", back: "Между десятым и пятнадцатым февраля", distractors: ["С десятого по пятнадцатое февраля", "Между десятого и пятнадцатого февраля"] },
    { front: "(2006) В каком году была Олимпиада в Турине?", back: "В две тысячи шестом году", distractors: ["В две тысячи шестой год", "В две тысячи шестом годе"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni — biografia di Anna: anni (fatto / momento / breve / в этом году) + date
// ============================================================
const p7cards = [
    { front: "(1995) В каком году родилась Анна?", back: "В тысяча девятьсот девяносто пятом году", distractors: ["В тысяча девятьсот девяносто пятом годе", "Тысяча девятьсот девяносто пятый год"], explanation: "В каком году? в + prepositivo: пятый → пятом, «году»." },
    { front: "(14.03) Какого числа у Анны день рождения?", back: "Четырнадцатого марта", distractors: ["Четырнадцатое марта", "В четырнадцатое марта"], explanation: "Data: genitivo senza preposizione." },
    { front: "(2002) В каком году Анна пошла в школу?", back: "В две тысячи втором году", distractors: ["В две тысячи втором годе", "Две тысячи второй год"], explanation: "второй → втором." },
    { front: "(01.09) Какого числа она пошла в первый класс?", back: "Первого сентября", distractors: ["Первое сентября", "В первое сентября"], explanation: "Il 1° settembre: in Russia inizia la scuola." },
    { front: "(2019) Когда Анна переехала в Италию? Коротко, как в разговоре.", back: "В девятнадцатом году", distractors: ["В девятнадцатый год", "В девятнадцатом годе"], explanation: "Nel parlato si omette «две тысячи»." },
    { front: "(01.06–30.06) С какого по какое число она искала квартиру в Милане?", back: "С первого по тридцатое июня", distractors: ["С первого по тридцатого июня", "Между первым и тридцатым июня"], explanation: "Durata (tutto il mese) → с … по." },
    { front: "Сейчас 2026 год. Когда Анна получила права? (2026)", back: "В этом году", distractors: ["В этот год", "В этом годе"], explanation: "Quest'anno: в этом году." },
    { front: "(2023) Какой это был год? Год её свадьбы.", back: "Две тысячи двадцать третий", distractors: ["Две тысячи двадцать третье", "В две тысячи двадцать третьем году"], explanation: "Il fatto: nominativo maschile (год)." },
    { front: "(10.09–20.09) Когда она нашла работу?", back: "Между десятым и двадцатым сентября", distractors: ["С десятого по двадцатое сентября", "Между десятого и двадцатого сентября"], explanation: "Un evento: между + strumentale." },
    { front: "Сейчас 2026 год. Когда Анна поедет к маме в Россию? (2027)", back: "В следующем году", distractors: ["В следующий год", "В следующем годе"], explanation: "L'anno prossimo: в следующем году." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto — il trasloco in Italia: anni (pieno, breve, в прошлом / следующем году, fatto) + date
// ============================================================
const p8cards = [
    { front: "(2024) В каком году вы переехали в Италию?", back: "В две тысячи двадцать четвёртом году", distractors: ["В две тысячи двадцать четвёртом годе", "Две тысячи двадцать четвёртый год"] },
    { front: "(2024) Когда вы переехали? Коротко, как в разговоре.", back: "В двадцать четвёртом году", distractors: ["В двадцать четвёртый год", "В двадцать четвёртом годе"] },
    { front: "(15.08) Какого числа вы прилетели в Рим?", back: "Пятнадцатого августа", distractors: ["Пятнадцатое августа", "В пятнадцатое августа"] },
    { front: "(15.08) Какое сегодня число? Феррагосто, всё закрыто!", back: "Пятнадцатое августа", distractors: ["Пятнадцатого августа", "Пятнадцатый август"] },
    { front: "Сейчас 2026 год. Когда дети пошли в итальянскую школу? (2025)", back: "В прошлом году", distractors: ["В прошлый год", "В прошлом годе"] },
    { front: "(01.09–15.09) С какого по какое число мы искали школу?", back: "С первого по пятнадцатое сентября", distractors: ["С первого по пятнадцатого сентября", "Между первым и пятнадцатым сентября"] },
    { front: "(2026) Какой сейчас год?", back: "Две тысячи двадцать шестой", distractors: ["Две тысячи двадцать шестое", "В две тысячи двадцать шестом году"] },
    { front: "(10.10–20.10) Когда мы получили вид на жительство?", back: "Между десятым и двадцатым октября", distractors: ["С десятого по двадцатое октября", "Между десятого и двадцатого октября"] },
    { front: "Сейчас 2026 год. Когда приедут бабушка и дедушка? (2027)", back: "В следующем году", distractors: ["В следующий год", "В следующем годе"] },
    { front: "(31.12) — К какому числу нужно продлить документы?", back: "К тридцать первому декабря", distractors: ["К тридцать первого декабря", "К тридцать первое декабря"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelAfm9() {
    const panel = document.getElementById('panel-afm-9');
    if (!panel) return;

    const container = panel.querySelector('#afm-9-cards-container');
    const prevBtn   = panel.querySelector('#afm-9-deck-prev');
    const nextBtn   = panel.querySelector('#afm-9-deck-next');
    const counterEl = panel.querySelector('#afm-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(2026) — Какой сейчас год? — Две тысячи двадцать ___ год.", options: ["шестом", "шестой", "шестое"], answer: "шестой" },
        { question: "(2026) Мы переехали в две тысячи двадцать ___ году.", options: ["шестой", "шестого", "шестом"], answer: "шестом" },
        { question: "(2000) Я родился в ___ году.", options: ["двухтысячном", "двух тысячном", "двухтысячный"], answer: "двухтысячном" },
        { question: "(1961) Гагарин полетел в космос в тысяча девятьсот шестьдесят ___.", options: ["первом году", "первом годе", "первый год"], answer: "первом году" },
        { question: "Сейчас 2026 год. Мы были в Москве (2025) ___.", options: ["в прошлый год", "в прошлом году", "в прошлом годе"], answer: "в прошлом году" },
        { question: "(18.11) — Какое сегодня число? — ___ ноября.", options: ["Восемнадцатый", "Восемнадцатого", "Восемнадцатое"], answer: "Восемнадцатое" },
        { question: "(2023) В две тысячи двадцать ___ году мы поженились.", options: ["третем", "третий", "третьем"], answer: "третьем" },
        { question: "(1990) Когда родился папа? Коротко, как в разговоре: ___.", options: ["в девяностом году", "в девяностый год", "в девяностом годе"], answer: "в девяностом году" },
        { question: "(05.03) У мамы день рождения ___ марта.", options: ["пятое", "пятого", "в пятое"], answer: "пятого" },
        { question: "Сейчас 2026 год. В Россию поеду ___ (2027).", options: ["в следующем году", "в следующий год", "в следующем годе"], answer: "в следующем году" }
    ];
    const matchPairs = [
        { left: "(2026) Какой сейчас год?", right: "две тысячи двадцать шестой" },
        { left: "(2026) В каком году?", right: "в две тысячи двадцать шестом году" },
        { left: "(2026) Коротко, в разговоре", right: "в двадцать шестом году" },
        { left: "(2000) В каком году?", right: "в двухтысячном году" },
        { left: "Сейчас 2026. А это 2025", right: "в прошлом году" },
        { left: "Сейчас 2026. А это 2026", right: "в этом году" },
        { left: "Сейчас 2026. А это 2027", right: "в следующем году" },
        { left: "(18.11) Какое сегодня число?", right: "восемнадцатое ноября" },
        { left: "(18.11) Какого числа день рождения?", right: "восемнадцатого ноября" },
        { left: "(1961) В каком году Гагарин полетел в космос?", right: "в тысяча девятьсот шестьдесят первом году" }
    ];
    const quizData = [
        { id: "afm9-w1", promptPrefix: "(2026) — Какой сейчас год? — Две тысячи двадцать ", promptSuffix: " год.", answers: ["шестой"] },
        { id: "afm9-w2", promptPrefix: "(2026) Мы переехали в две тысячи двадцать ", promptSuffix: " году.", answers: ["шестом"] },
        { id: "afm9-w3", promptPrefix: "(2000) Я родился в ", promptSuffix: " году.", answers: ["двухтысячном"] },
        { id: "afm9-w4", promptPrefix: "(1990) Папа родился в тысяча девятьсот ", promptSuffix: " году.", answers: ["девяностом"] },
        { id: "afm9-w5", promptPrefix: "(2023) Мы поженились в две тысячи двадцать ", promptSuffix: " году.", answers: ["третьем"] },
        { id: "afm9-w6", promptPrefix: "Сейчас 2026 год. Мы были в Москве (2025) в ", promptSuffix: " году.", answers: ["прошлом"] },
        { id: "afm9-w7", promptPrefix: "Сейчас 2026 год. Я поеду в Россию (2027) в ", promptSuffix: " году.", answers: ["следующем"] },
        { id: "afm9-w8", promptPrefix: "(1961) Гагарин полетел в космос в ", promptSuffix: " году.", answers: ["тысяча девятьсот шестьдесят первом", "шестьдесят первом"] },
        { id: "afm9-w9", promptPrefix: "(18.11) — Какое сегодня число? — ", promptSuffix: " ноября.", answers: ["восемнадцатое"] },
        { id: "afm9-w10", promptPrefix: "(2014) Олимпиада в Сочи была в две тысячи ", promptSuffix: " году.", answers: ["четырнадцатом"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

    // Typed answers: ignore case, ё/е, extra spaces and a final dot
    // (Italian keyboards usually have no ё).
    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ').replace(/[.!]+$/, '').toLowerCase().replace(/ё/g, 'е');
    }

    function ensureCardTitle(card, index) {
        const existingTitle = Array.from(card.children).find(child => child.tagName === 'H1');
        if (existingTitle) {
            if (index < MC_END) existingTitle.classList.add('exercise-counter');
            if (card.firstElementChild !== existingTitle) card.insertBefore(existingTitle, card.firstElementChild);
            return;
        }
        const title = document.createElement('h1');
        title.textContent = `Esercizio ${index + 1} di ${TOTAL_CARDS}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container afm-9-card';
            card.dataset.index = i;
            if (i === 0) card.classList.add('visible');
            card.hidden = (i !== 0);

            if (i < MC_END) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) => `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`).join('');
                const questionText = item.question.replace('___', `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`);
                card.innerHTML = `
                    <div class="instruction">Completa la frase scegliendo la forma corretta</div>
                    <div class="exercise-text">${questionText}</div>
                    <div class="word-options">${opts}</div>
                    <div class="controls">
                        <button class="btn btn-primary verify-btn">Verifica</button>
                        <button class="btn btn-secondary next-btn" style="display:none;">Prossimo</button>
                        <div class="feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);

            } else if (i < MATCH_END) {
                const pairIdx = i - MC_END;
                const pair = matchPairs[pairIdx];
                const otherPairs = matchPairs.filter((_, idx) => idx !== pairIdx);
                const shuffledOthers = otherPairs.sort(() => Math.random() - 0.5).slice(0, 2);
                const allPairs = [pair, ...shuffledOthers].sort(() => Math.random() - 0.5);

                let fronts = allPairs.map((p, idx) => ({ text: p.left,  type: 'front', id: idx }));
                let backs  = allPairs.map((p, idx) => ({ text: p.right, type: 'back',  id: idx }));
                fronts.sort(() => Math.random() - 0.5);
                backs.sort(() => Math.random() - 0.5);

                let selectedMatchCard = null;
                let isProcessingMatch = false;

                const matchContainer = document.createElement('div');
                matchContainer.className = 'fca01-match-container';
                const feedbackEl = document.createElement('p');
                feedbackEl.className = 'fca01-match-feedback';
                const matchGrid = document.createElement('div');
                matchGrid.className = 'fca01-match-grid';
                const colFronts = document.createElement('div');
                colFronts.className = 'fca01-match-col';
                const colBacks = document.createElement('div');
                colBacks.className = 'fca01-match-col';

                matchGrid.appendChild(colFronts);
                matchGrid.appendChild(colBacks);
                matchContainer.appendChild(feedbackEl);
                matchContainer.appendChild(matchGrid);
                card.appendChild(matchContainer);

                function handleMatchClick(clickedCard) {
                    if (isProcessingMatch || clickedCard.classList.contains('matched')) return;
                    if (clickedCard === selectedMatchCard) return;

                    if (!selectedMatchCard) {
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    if (selectedMatchCard.dataset.type === clickedCard.dataset.type) {
                        selectedMatchCard.classList.remove('selected');
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    const firstId    = selectedMatchCard.dataset.id;
                    const secondId   = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;

                    if (firstId === secondId) {
                        previousCard.classList.add('matched');
                        clickedCard.classList.add('matched');
                        feedbackEl.textContent = "✨ Отлично!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "🎉 ПОБЕДА! 🎉";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "Неверно";
                        feedbackEl.className = "fca01-match-feedback wrong";
                        setTimeout(() => {
                            clickedCard.classList.remove('selected', 'wrong');
                            previousCard.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = "";
                            isProcessingMatch = false;
                        }, 800);
                        selectedMatchCard = null;
                    }
                }

                function createMatchElement(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card';
                    div.textContent = item.text;
                    div.dataset.id   = item.id;
                    div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatchClick(div));
                    return div;
                }

                fronts.forEach(item => colFronts.appendChild(createMatchElement(item)));
                backs.forEach(item  => colBacks.appendChild(createMatchElement(item)));
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);

            } else {
                const item = quizData[i - MATCH_END];
                card.innerHTML = `
                    <h3 class="quiz-title">Write</h3>
                    <p class="quiz-instruction">Scrivete la forma corretta</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix}<input type="text" class="quiz-input" data-index="${i - MATCH_END}">${item.promptSuffix}</div>
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">Проверить</button></div>
                        <div class="quiz-feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);
            }

            container.appendChild(card);
        }

        attachHandlers();
    }

    function attachHandlers() {
        container.querySelectorAll('.afm-9-card').forEach(card => {
            const cardIndex = parseInt(card.dataset.index, 10);
            if (cardIndex >= MC_END) return;

            let checked = false;
            const gapElements  = Array.from(card.querySelectorAll('.gap'));
            const wordElements = Array.from(card.querySelectorAll('.word-option'));
            const verifyBtn    = card.querySelector('.verify-btn');
            const nextBtn      = card.querySelector('.next-btn');
            const feedback     = card.querySelector('.feedback');

            wordElements.forEach(wordElement => {
                wordElement.addEventListener('click', function() {
                    if (this.classList.contains('used') || checked) return;
                    const emptyGap = gapElements.find(gap => !gap.classList.contains('filled'));
                    if (!emptyGap) return;
                    const word = this.dataset.word;
                    emptyGap.textContent = word;
                    emptyGap.classList.add('filled');
                    emptyGap.dataset.word      = word;
                    emptyGap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });

            gapElements.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const wordIndex   = this.dataset.wordIndex;
                    const wordElement = wordElements.find(w => w.dataset.index === wordIndex);
                    this.textContent = '';
                    this.classList.remove('filled');
                    delete this.dataset.word;
                    delete this.dataset.wordIndex;
                    if (wordElement) wordElement.classList.remove('used');
                });
            });

            if (nextBtn) nextBtn.addEventListener('click', () => showCard(currentCard + 1));

            verifyBtn.addEventListener('click', function() {
                checked = true;
                const correctAnswer = multipleChoiceData[cardIndex].answer;
                let correct = 0;
                gapElements.forEach(gap => {
                    if (gap.dataset.word === correctAnswer) {
                        gap.classList.remove('filled');
                        gap.classList.add('correct');
                        correct = 1;
                    } else {
                        gap.classList.add('incorrect');
                    }
                });
                feedback.textContent = `Corretto: ${correct} / 1`;
                verifyBtn.style.display = 'none';
                nextBtn.style.display   = 'inline-block';
            });
        });

        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card    = this.closest('.afm-9-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === normalizeInput(ans));
                if (isCorrect) {
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                    input.disabled = true;
                    this.disabled  = true;
                    fb.textContent = 'Правильно!';
                    fb.className   = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.';
                    fb.className   = 'quiz-feedback incorrect';
                }
            });
        });

        container.querySelectorAll('.quiz-input').forEach(input => {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    const btn = this.closest('.quiz-item').querySelector('.quiz-check-btn');
                    if (btn && !btn.disabled) btn.click();
                }
            });
        });
    }

    function showCard(idx) {
        currentCard = idx;
        container.querySelectorAll('.afm-9-card').forEach((c, i) => {
            c.classList.toggle('visible', i === idx);
            c.hidden = (i !== idx);
        });
        counterEl.textContent = (idx + 1) + ' / ' + TOTAL_CARDS;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === TOTAL_CARDS - 1);
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0)               showCard(currentCard - 1); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL_CARDS - 1) showCard(currentCard + 1); });

    buildCards();
    showCard(0);
}

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-afm-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-afm-01', exercises: p1exercises }),
    'panel-afm-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-afm-02', exercises: p2exercises }),
    'panel-afm-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-afm-03', exercises: p3exercises }),
    'panel-afm-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-afm-04', cards: p4cards }),
    'panel-afm-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-afm-05', cards: p5cards }),
    'panel-afm-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-afm-06', cards: p6cards }),
    'panel-afm-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-afm-07', cards: p7cards }),
    'panel-afm-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-afm-08', cards: p8cards }),
    'panel-afm-9': () => initPanelAfm9()
};

initPanelManager({ initializers, enableAccessControl: true });
