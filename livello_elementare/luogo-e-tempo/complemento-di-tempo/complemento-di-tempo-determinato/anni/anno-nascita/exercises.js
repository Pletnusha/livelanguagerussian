import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Когда ты родился?» (blocco Годы) — solo l'anno (в тысяча девятьсот девяностом году, в + prepositivo)
// ↔ data completa (пятого марта тысяча девятьсот девяностого года: tutto al genitivo, senza preposizione).
// Anche mese + anno: в марте девяностого года; «Ты какого года?» — «Девяностого».
// Date di nascita verificate (Пушкин 6.6.1799 e Толстой 9.9.1828, Чайковский 7.5.1840 = nuovo stile; Гагарин 9.3.1934; Леонардо 15.4.1452; Феллини 20.1.1920; Софи Лорен 20.9.1934).
// Solo date e anni (niente ore). Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: data completa con anno al genitivo (nuovo) + solo anno / fatto / date (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.03.1990) Я родился пятого марта тысяча девятьсот {{1}}.",
        words: ["девяностом году", "девяностого года", "девяностый год"],
        correctAnswers: { 1: "девяностого года" },
        explanation: "Data completa: tutto al genitivo, senza «в»: девяностого года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) — В каком году ты родился? — В тысяча девятьсот {{1}}.",
        words: ["девяностого года", "девяностом годе", "девяностом году"],
        correctAnswers: { 1: "девяностом году" },
        explanation: "Solo l'anno: в + prepositivo: в … ом году."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12.04.1961) Гагарин полетел в космос двенадцатого апреля тысяча девятьсот шестьдесят {{1}}.",
        words: ["первого года", "первом году", "первый год"],
        correctAnswers: { 1: "первого года" },
        explanation: "Dopo la data, l'anno va al genitivo: первого года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2026) — Какой сейчас год? — Две тысячи двадцать {{1}} год.",
        words: ["шестого", "шестом", "шестой"],
        correctAnswers: { 1: "шестой" },
        explanation: "Il fatto: nominativo maschile."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.01.2000) Он родился первого января {{1}}.",
        words: ["двухтысячном году", "двухтысячного года", "двух тысячного года"],
        correctAnswers: { 1: "двухтысячного года" },
        explanation: "2000 al genitivo: двухтысячного года (una parola)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18.11) У Антона день рождения {{1}} ноября.",
        words: ["восемнадцатого", "восемнадцатое", "в восемнадцатом"],
        correctAnswers: { 1: "восемнадцатого" },
        explanation: "Data senza anno: genitivo, senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(06.06.1799) Пушкин родился шестого июня тысяча семьсот девяносто {{1}}.",
        words: ["девятом году", "девятый год", "девятого года"],
        correctAnswers: { 1: "девятого года" },
        explanation: "Data completa: девятого года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2023) Мы поженились в две тысячи двадцать {{1}} году.",
        words: ["третьем", "третьего", "третий"],
        correctAnswers: { 1: "третьем" },
        explanation: "Solo l'anno: в … третьем году."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.09.1934) Софи Лорен родилась двадцатого сентября тысяча девятьсот тридцать {{1}}.",
        words: ["четвёртом году", "четвёртого года", "четвёртый год"],
        correctAnswers: { 1: "четвёртого года" },
        explanation: "Data completa: четвёртого года."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05–05.05) Выставка работала {{1}} мая.",
        words: ["между первым и пятым", "с первого по пятого", "с первого по пятое"],
        correctAnswers: { 1: "с первого по пятое" },
        explanation: "Durata: с … по."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Anno al genitivo dopo la data: … ого года (non «… ом году», «… ый год», «… ого году»)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.03.1990) Мама родилась пятого марта тысяча девятьсот {{1}}.",
        words: ["девяностом году", "девяностого года", "девяностого году"],
        correctAnswers: { 1: "девяностого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14.07.2001) Сын родился четырнадцатого июля две тысячи {{1}}.",
        words: ["первом году", "первый год", "первого года"],
        correctAnswers: { 1: "первого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.01.2000) Это фото первого января {{1}}.",
        words: ["двухтысячного года", "двухтысячный год", "двухтысячном году"],
        correctAnswers: { 1: "двухтысячного года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(09.03.1934) Гагарин родился девятого марта тысяча девятьсот тридцать {{1}}.",
        words: ["четвёртого года", "четвёртого году", "четвёртом году"],
        correctAnswers: { 1: "четвёртого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(07.05.1840) Чайковский родился седьмого мая тысяча восемьсот {{1}}.",
        words: ["сорокового году", "сороковой год", "сорокового года"],
        correctAnswers: { 1: "сорокового года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.01.1920) Феллини родился двадцатого января тысяча девятьсот {{1}}.",
        words: ["двадцатом году", "двадцатого года", "двадцатый год"],
        correctAnswers: { 1: "двадцатого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.04.1452) Леонардо да Винчи родился пятнадцатого апреля тысяча четыреста пятьдесят {{1}}.",
        words: ["втором году", "второй год", "второго года"],
        correctAnswers: { 1: "второго года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(09.09.1828) Толстой родился девятого сентября тысяча восемьсот двадцать {{1}}.",
        words: ["восьмого года", "восьмом году", "восьмого году"],
        correctAnswers: { 1: "восьмого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(23.02.2023) Дочь родилась двадцать третьего февраля две тысячи двадцать {{1}}.",
        words: ["третьем году", "третьего года", "третий год"],
        correctAnswers: { 1: "третьего года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(31.12.1999) Мы встретились тридцать первого декабря тысяча девятьсот девяносто {{1}}.",
        words: ["девятого года", "девятом году", "девятый год"],
        correctAnswers: { 1: "девятого года" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Anno o data completa? Coppie: senza data → в … ом году; con la data → … ого года (forma breve colloquiale dell'anno)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) Папа родился {{1}}.",
        words: ["девяностого года", "в девяностом году", "в девяностого года"],
        correctAnswers: { 1: "в девяностом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.03.1990) Папа родился пятого марта {{1}}.",
        words: ["девяностого года", "в девяностом году", "девяностом году"],
        correctAnswers: { 1: "девяностого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Я окончил школу {{1}}.",
        words: ["в двухтысячного года", "двухтысячного года", "в двухтысячном году"],
        correctAnswers: { 1: "в двухтысячном году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.06.2000) Я окончил школу двадцать пятого июня {{1}}.",
        words: ["в двухтысячном году", "двухтысячный год", "двухтысячного года"],
        correctAnswers: { 1: "двухтысячного года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1961) Гагарин полетел в космос {{1}}.",
        words: ["в шестьдесят первом году", "шестьдесят первого года", "в шестьдесят первый год"],
        correctAnswers: { 1: "в шестьдесят первом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12.04.1961) Гагарин полетел в космос двенадцатого апреля {{1}}.",
        words: ["в шестьдесят первом году", "шестьдесят первого года", "шестьдесят первый год"],
        correctAnswers: { 1: "шестьдесят первого года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2023) Мы поженились {{1}}.",
        words: ["в двадцать третьем году", "двадцать третьего года", "в двадцать третий год"],
        correctAnswers: { 1: "в двадцать третьем году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.06.2023) Мы поженились десятого июня {{1}}.",
        words: ["двадцать третьем году", "в двадцать третьем году", "двадцать третьего года"],
        correctAnswers: { 1: "двадцать третьего года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1995) Анна родилась {{1}}.",
        words: ["девяносто пятого года", "в девяносто пятом году", "в девяносто пятого года"],
        correctAnswers: { 1: "в девяносто пятом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14.03.1995) Анна родилась четырнадцатого марта {{1}}.",
        words: ["девяносто пятого года", "девяносто пятом году", "в девяносто пятом году"],
        correctAnswers: { 1: "девяносто пятого года" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Persone famose: data completa al genitivo ↔ solo l'anno (в … ом году) ↔ fatto (date verificate), con spiegazioni
// ============================================================
const p4cards = [
    { front: "(06.06.1799) Когда родился Пушкин?", back: "Шестого июня тысяча семьсот девяносто девятого года", distractors: ["Шестое июня тысяча семьсот девяносто девятого года", "Шестого июня тысяча семьсот девяносто девятый год"], explanation: "Data completa: giorno e anno al genitivo, senza preposizione." },
    { front: "(09.09.1828) Когда родился Толстой?", back: "Девятого сентября тысяча восемьсот двадцать восьмого года", distractors: ["Девятое сентября тысяча восемьсот двадцать восьмого года", "Девятого сентября тысяча восемьсот двадцать восьмом году"], explanation: "Con la data, mai «в … году»: двадцать восьмого года." },
    { front: "(07.05.1840) Когда родился Чайковский?", back: "Седьмого мая тысяча восемьсот сорокового года", distractors: ["Седьмое мая тысяча восемьсот сорокового года", "Седьмого мая тысяча восемьсот сороковой год"], explanation: "сороковой → сорокового." },
    { front: "(09.03.1934) Когда родился Гагарин?", back: "Девятого марта тысяча девятьсот тридцать четвёртого года", distractors: ["Девятое марта тысяча девятьсот тридцать четвёртого года", "Девятого марта тысяча девятьсот тридцать четвёртом году"], explanation: "Il giorno al genitivo: девятого (non «девятое»)." },
    { front: "(15.04.1452) Когда родился Леонардо да Винчи?", back: "Пятнадцатого апреля тысяча четыреста пятьдесят второго года", distractors: ["Пятнадцатое апреля тысяча четыреста пятьдесят второго года", "Пятнадцатого апреля тысяча четыреста пятьдесят второй год"], explanation: "Anche il Quattrocento: тысяча четыреста…" },
    { front: "(20.01.1920) Когда родился Феллини?", back: "Двадцатого января тысяча девятьсот двадцатого года", distractors: ["Двадцатое января тысяча девятьсот двадцатого года", "Двадцатого января тысяча девятьсот двадцатом году"], explanation: "Двадцатого … двадцатого: giorno e anno, stessa forma." },
    { front: "(20.09.1934) Когда родилась Софи Лорен?", back: "Двадцатого сентября тысяча девятьсот тридцать четвёртого года", distractors: ["Двадцатое сентября тысяча девятьсот тридцать четвёртого года", "Двадцатого сентября тысяча девятьсот тридцать четвёртый год"], explanation: "Data completa: tutto al genitivo." },
    { front: "(1799) В каком году родился Пушкин?", back: "В тысяча семьсот девяносто девятом году", distractors: ["Тысяча семьсот девяносто девятого года", "В тысяча семьсот девяносто девятом годе"], explanation: "Solo l'anno: в + prepositivo, «году»." },
    { front: "(1934) В каком году родился Гагарин?", back: "В тысяча девятьсот тридцать четвёртом году", distractors: ["Тысяча девятьсот тридцать четвёртого года", "В тысяча девятьсот тридцать четвёртый год"], explanation: "Solo l'anno → в … ом году." },
    { front: "(1934) Какой это год? Год рождения Гагарина и Софи Лорен.", back: "Тысяча девятьсот тридцать четвёртый", distractors: ["Тысяча девятьсот тридцать четвёртого", "В тысяча девятьсот тридцать четвёртом году"], explanation: "Il fatto: nominativo maschile." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Mese + anno (в марте девяностого года) e «Ты какого года?» — «Девяностого» (genitivo)
// ============================================================
const p5cards = [
    { front: "(03.1990) Когда ты родился? Месяц и год.", back: "В марте девяностого года", distractors: ["В марте девяностом году", "В март девяностого года"] },
    { front: "(05.2026) Когда вы переехали? Месяц и год.", back: "В мае двадцать шестого года", distractors: ["В мае двадцать шестом году", "В мая двадцать шестого года"] },
    { front: "(1990) — Ты какого года?", back: "Девяностого", distractors: ["Девяностый", "В девяностом"] },
    { front: "(2000) — Ты какого года?", back: "Двухтысячного", distractors: ["Двухтысячный", "В двухтысячном"] },
    { front: "(09.2019) Когда Анна приехала в Италию? Месяц и год.", back: "В сентябре девятнадцатого года", distractors: ["В сентябре девятнадцатом году", "В сентябрь девятнадцатого года"] },
    { front: "(1985) — Мама какого года?", back: "Восемьдесят пятого", distractors: ["Восемьдесят пятый", "В восемьдесят пятом"] },
    { front: "(12.2023) Когда вы поженились? Месяц и год.", back: "В декабре двадцать третьего года", distractors: ["В декабре двадцать третьем году", "В декабря двадцать третьего года"] },
    { front: "(1995) — Ты какого года рождения?", back: "Девяносто пятого", distractors: ["Девяносто пятый", "Девяносто пятом"] },
    { front: "(07.2014) Когда ты окончил университет? Месяц и год.", back: "В июле четырнадцатого года", distractors: ["В июле четырнадцатом году", "В июль четырнадцатого года"] },
    { front: "(2001) — Сын какого года?", back: "Две тысячи первого", distractors: ["Две тысячи первый", "В две тысячи первом"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto — documenti e moduli: data completa con anno, mese + anno, «какого года» (nuovo) + anno fatto/momento, в этом году, date (vecchio)
// ============================================================
const p6cards = [
    { front: "(05.03.1990) Анкета, дата рождения. Когда вы родились?", back: "Пятого марта тысяча девятьсот девяностого года", distractors: ["Пятое марта тысяча девятьсот девяностого года", "Пятого марта тысяча девятьсот девяностом году"] },
    { front: "(2026) Какой сейчас год?", back: "Две тысячи двадцать шестой", distractors: ["Две тысячи двадцать шестое", "Две тысячи двадцать шестого"] },
    { front: "(10.2024) Когда вы получили паспорт? Месяц и год.", back: "В октябре двадцать четвёртого года", distractors: ["В октябре двадцать четвёртом году", "В октябрь двадцать четвёртого года"] },
    { front: "(2019) В каком году вы приехали в Италию?", back: "В две тысячи девятнадцатом году", distractors: ["Две тысячи девятнадцатого года", "В две тысячи девятнадцатом годе"] },
    { front: "(1990) — Вы какого года?", back: "Девяностого", distractors: ["Девяностый", "В девяностом"] },
    { front: "(15.06) Какого числа нужно прийти в консульство?", back: "Пятнадцатого июня", distractors: ["Пятнадцатое июня", "В пятнадцатое июня"] },
    { front: "(01.07.2021) Когда вы получили вид на жительство?", back: "Первого июля две тысячи двадцать первого года", distractors: ["Первого июля две тысячи двадцать первом году", "Первое июля две тысячи двадцать первого года"] },
    { front: "Сейчас 2026 год. Когда вы продлили визу? (2026)", back: "В этом году", distractors: ["В этот год", "В этом годе"] },
    { front: "(18.11.2026) Анкета, сегодняшняя дата. Какое сегодня число?", back: "Восемнадцатое ноября две тысячи двадцать шестого года", distractors: ["Восемнадцатого ноября две тысячи двадцать шестого года", "Восемнадцатое ноября две тысячи двадцать шестой год"] },
    { front: "(01.01–31.12) С какого по какое число действует страховка?", back: "С первого января по тридцать первое декабря", distractors: ["С первого января по тридцать первого декабря", "Между первым января и тридцать первым декабря"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni — compleanni in famiglia: data completa, solo anno, «какого года», mese + anno, fatto, date
// ============================================================
const p7cards = [
    { front: "(14.03.1960) Когда родилась бабушка?", back: "Четырнадцатого марта тысяча девятьсот шестидесятого года", distractors: ["Четырнадцатого марта тысяча девятьсот шестидесятом году", "Четырнадцатое марта тысяча девятьсот шестидесятого года"], explanation: "Data completa: tutto al genitivo, senza «в»." },
    { front: "(1960) В каком году родилась бабушка?", back: "В тысяча девятьсот шестидесятом году", distractors: ["Тысяча девятьсот шестидесятого года", "В тысяча девятьсот шестидесятом годе"], explanation: "Solo l'anno: в + prepositivo." },
    { front: "(1985) — Папа какого года?", back: "Восемьдесят пятого", distractors: ["Восемьдесят пятый", "В восемьдесят пятом"], explanation: "«Какого года?» → risposta al genitivo." },
    { front: "(11.2012) Когда родился брат? Месяц и год.", back: "В ноябре двенадцатого года", distractors: ["В ноябре двенадцатом году", "В ноябрь двенадцатого года"], explanation: "Mese: в + prepositivo (в ноябре); anno al genitivo." },
    { front: "(14.03) Какого числа у бабушки день рождения?", back: "Четырнадцатого марта", distractors: ["Четырнадцатое марта", "В четырнадцатое марта"], explanation: "Data senza anno: genitivo." },
    { front: "Сейчас 2026 год. Когда родилась внучка? (2026)", back: "В этом году", distractors: ["В этот год", "В этом годе"], explanation: "Quest'anno: в этом году." },
    { front: "(2010) Какой это год на фото? Свадьба родителей.", back: "Две тысячи десятый", distractors: ["Две тысячи десятое", "В две тысячи десятом году"], explanation: "Il fatto: nominativo maschile." },
    { front: "(23.02.1985) Когда родился папа?", back: "Двадцать третьего февраля тысяча девятьсот восемьдесят пятого года", distractors: ["Двадцать третье февраля тысяча девятьсот восемьдесят пятого года", "Двадцать третьего февраля тысяча девятьсот восемьдесят пятом году"], explanation: "Giorno e anno al genitivo." },
    { front: "(01.06–31.08) С какого по какое число дети живут у бабушки?", back: "С первого июня по тридцать первое августа", distractors: ["С первого июня по тридцать первого августа", "Между первым июня и тридцать первым августа"], explanation: "Durata: с … по." },
    { front: "(1958) Дедушка какого года рождения?", back: "Пятьдесят восьмого", distractors: ["Пятьдесят восьмой", "В пятьдесят восьмом"], explanation: "«Какого года рождения?» → genitivo." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto — il giubileo del nonno: data completa, solo anno, mese + anno, «какого года», fatto, к, между
// ============================================================
const p8cards = [
    { front: "(20.05.1956) Когда родился дедушка? Скоро юбилей.", back: "Двадцатого мая тысяча девятьсот пятьдесят шестого года", distractors: ["Двадцатое мая тысяча девятьсот пятьдесят шестого года", "Двадцатого мая тысяча девятьсот пятьдесят шестом году"] },
    { front: "(1956) В каком году родился дедушка?", back: "В тысяча девятьсот пятьдесят шестом году", distractors: ["Тысяча девятьсот пятьдесят шестого года", "В тысяча девятьсот пятьдесят шестой год"] },
    { front: "(20.05) Какого числа юбилей?", back: "Двадцатого мая", distractors: ["Двадцатое мая", "В двадцатое мая"] },
    { front: "(06.1981) Когда бабушка и дедушка поженились? Месяц и год.", back: "В июне восемьдесят первого года", distractors: ["В июне восемьдесят первом году", "В июнь восемьдесят первого года"] },
    { front: "(2026) Какой сейчас год? Дедушке семьдесят!", back: "Две тысячи двадцать шестой", distractors: ["Две тысячи двадцать шестое", "В две тысячи двадцать шестом году"] },
    { front: "(1956) — Дедушка какого года?", back: "Пятьдесят шестого", distractors: ["Пятьдесят шестой", "В пятьдесят шестом"] },
    { front: "Сейчас 2026 год. Когда будет праздник? (2026)", back: "В этом году", distractors: ["В этот год", "В этом годе"] },
    { front: "(20.05) — К какому числу нужно купить подарок?", back: "К двадцатому мая", distractors: ["К двадцатого мая", "К двадцатое мая"] },
    { front: "(18.05–20.05) Когда приехали гости?", back: "Между восемнадцатым и двадцатым мая", distractors: ["С восемнадцатого по двадцатое мая", "Между восемнадцатого и двадцатого мая"] },
    { front: "(10.06.1981) Какого числа свадьба бабушки и дедушки? Полная дата.", back: "Десятого июня тысяча девятьсот восемьдесят первого года", distractors: ["Десятое июня тысяча девятьсот восемьдесят первого года", "Десятого июня тысяча девятьсот восемьдесят первом году"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelAn9() {
    const panel = document.getElementById('panel-an-9');
    if (!panel) return;

    const container = panel.querySelector('#an-9-cards-container');
    const prevBtn   = panel.querySelector('#an-9-deck-prev');
    const nextBtn   = panel.querySelector('#an-9-deck-next');
    const counterEl = panel.querySelector('#an-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(05.03.1990) Я родился пятого марта тысяча девятьсот ___.", options: ["девяностом году", "девяностого года", "девяностый год"], answer: "девяностого года" },
        { question: "(1990) Я родился в тысяча девятьсот ___.", options: ["девяностого года", "девяностый год", "девяностом году"], answer: "девяностом году" },
        { question: "(1990) — Ты какого года? — ___.", options: ["Девяностого", "Девяностый", "В девяностом"], answer: "Девяностого" },
        { question: "(03.1990) Я родился ___ девяностого года.", options: ["в марте", "в март", "в марта"], answer: "в марте" },
        { question: "(12.04.1961) Гагарин полетел в космос двенадцатого апреля тысяча девятьсот шестьдесят ___.", options: ["первом году", "первый год", "первого года"], answer: "первого года" },
        { question: "(2026) — Какой сейчас год? — Две тысячи двадцать ___.", options: ["шестого", "шестой", "шестом"], answer: "шестой" },
        { question: "(01.01.2000) Он родился первого января ___.", options: ["двухтысячного года", "двухтысячном году", "двух тысячного года"], answer: "двухтысячного года" },
        { question: "(18.11) — Какого числа день рождения? — ___ ноября.", options: ["Восемнадцатое", "В восемнадцатое", "Восемнадцатого"], answer: "Восемнадцатого" },
        { question: "(1799) Пушкин родился в тысяча семьсот девяносто ___.", options: ["девятого года", "девятом году", "девятый год"], answer: "девятом году" },
        { question: "(18.11.2026) Сегодня ___ ноября две тысячи двадцать шестого года.", options: ["восемнадцатое", "восемнадцатого", "восемнадцатый"], answer: "восемнадцатое" }
    ];
    const matchPairs = [
        { left: "(05.03.1990) Когда ты родился? Полная дата.", right: "пятого марта девяностого года" },
        { left: "(1990) В каком году?", right: "в девяностом году" },
        { left: "(03.1990) Месяц и год", right: "в марте девяностого года" },
        { left: "(1990) Ты какого года?", right: "девяностого" },
        { left: "(1990) Какой это год?", right: "девяностый" },
        { left: "(05.03) Какого числа?", right: "пятого марта" },
        { left: "(05.03) Какое сегодня число?", right: "пятое марта" },
        { left: "Сейчас 2026. А это 2025", right: "в прошлом году" },
        { left: "(18.11.2026) Какое сегодня число? Полная дата.", right: "восемнадцатое ноября двадцать шестого года" },
        { left: "(06.06.1799) Когда родился Пушкин?", right: "шестого июня тысяча семьсот девяносто девятого года" }
    ];
    const quizData = [
        { id: "an9-w1", promptPrefix: "(05.03.1990) Я родился пятого марта тысяча девятьсот ", promptSuffix: " года.", answers: ["девяностого"] },
        { id: "an9-w2", promptPrefix: "(1990) Я родился в тысяча девятьсот ", promptSuffix: " году.", answers: ["девяностом"] },
        { id: "an9-w3", promptPrefix: "(1990) — Ты какого года? — ", promptSuffix: ".", answers: ["девяностого"] },
        { id: "an9-w4", promptPrefix: "(03.1990) Я родился в ", promptSuffix: " девяностого года.", answers: ["марте"] },
        { id: "an9-w5", promptPrefix: "(12.04.1961) Гагарин полетел в космос двенадцатого апреля тысяча девятьсот шестьдесят ", promptSuffix: " года.", answers: ["первого"] },
        { id: "an9-w6", promptPrefix: "(1961) Гагарин полетел в космос в тысяча девятьсот шестьдесят ", promptSuffix: " году.", answers: ["первом"] },
        { id: "an9-w7", promptPrefix: "(01.01.2000) Он родился первого января ", promptSuffix: " года.", answers: ["двухтысячного"] },
        { id: "an9-w8", promptPrefix: "(2000) Он родился в ", promptSuffix: " году.", answers: ["двухтысячном"] },
        { id: "an9-w9", promptPrefix: "(05.03) Мама родилась ", promptSuffix: " марта.", answers: ["пятого"] },
        { id: "an9-w10", promptPrefix: "(18.11.2026) Сегодня ", promptSuffix: " ноября две тысячи двадцать шестого года.", answers: ["восемнадцатое"] }
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
            card.className = 'fca01-card-container an-9-card';
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
        container.querySelectorAll('.an-9-card').forEach(card => {
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
                const card    = this.closest('.an-9-card');
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
        container.querySelectorAll('.an-9-card').forEach((c, i) => {
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
    'panel-an-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-an-01', exercises: p1exercises }),
    'panel-an-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-an-02', exercises: p2exercises }),
    'panel-an-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-an-03', exercises: p3exercises }),
    'panel-an-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-an-04', cards: p4cards }),
    'panel-an-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-an-05', cards: p5cards }),
    'panel-an-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-an-06', cards: p6cards }),
    'panel-an-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-an-07', cards: p7cards }),
    'panel-an-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-an-08', cards: p8cards }),
    'panel-an-9': () => initPanelAn9()
};

initPanelManager({ initializers, enableAccessControl: true });
