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
// PANEL 4 — Flashcard · public
// Feste russe: fatto (Какое сегодня число?) ↔ momento (Когда?), con spiegazioni
// ============================================================
const p4cards = [
    { front: "(01.01) Какое сегодня число? Новый год!", back: "Первое января", distractors: ["Первого января", "Первый января"], explanation: "Il fatto: nominativo neutro: первое января." },
    { front: "(01.01) Когда празднуют Новый год?", back: "Первого января", distractors: ["Первое января", "В первое января"], explanation: "Quando? Genitivo senza preposizione: первого января." },
    { front: "(08.03) Какое сегодня число? Женский день!", back: "Восьмое марта", distractors: ["Восьмого марта", "Восьмой марта"], explanation: "Il fatto: восьмое марта. «Восьмое марта» è anche il nome della festa." },
    { front: "(08.03) Когда мы дарим цветы женщинам?", back: "Восьмого марта", distractors: ["Восьмое марта", "В восьмое марта"], explanation: "Quando? Genitivo: восьмого марта, senza «в»." },
    { front: "(09.05) Какое сегодня число? День Победы.", back: "Девятое мая", distractors: ["Девятого мая", "Девятый мая"], explanation: "Il fatto: nominativo neutro: девятое мая." },
    { front: "(09.05) Когда в Москве парад?", back: "Девятого мая", distractors: ["Девятое мая", "В девятое мая"], explanation: "Quando? Genitivo: девятого мая." },
    { front: "(01.09) Какое сегодня число? Дети идут в школу.", back: "Первое сентября", distractors: ["Первого сентября", "Первый сентябрь"], explanation: "Il mese resta al genitivo: сентября (non «сентябрь»)." },
    { front: "(01.09) Когда начинается учебный год?", back: "Первого сентября", distractors: ["Первое сентября", "В первое сентября"], explanation: "Quando? Genitivo: первого сентября." },
    { front: "(12.06) Какое сегодня число? День России.", back: "Двенадцатое июня", distractors: ["Двенадцатого июня", "Двенадцатый июнь"], explanation: "Il fatto: двенадцатое июня; il mese al genitivo (июня)." },
    { front: "(07.01) Когда православные празднуют Рождество?", back: "Седьмого января", distractors: ["Седьмое января", "В седьмое января"], explanation: "Quando? Genitivo senza preposizione: седьмого января." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Giorno della settimana + data: в субботу, двадцать первого (в / во + accusativo; data al genitivo). Giorni reali del calendario 2026–2027
// ============================================================
const p5cards = [
    { front: "(сб, 21.11) Когда у них свадьба?", back: "В субботу, двадцать первого", distractors: ["В субботу, двадцать первое", "В суббота, двадцать первого"] },
    { front: "(вт, 01.12) Когда у тебя экзамен?", back: "Во вторник, первого", distractors: ["В вторник, первого", "Во вторник, первое"] },
    { front: "(ср, 02.12) Когда приедет бабушка?", back: "В среду, второго", distractors: ["В среда, второго", "В среду, второе"] },
    { front: "(пт, 04.12) Когда вечеринка?", back: "В пятницу, четвёртого", distractors: ["В пятница, четвёртого", "В пятницу, четвёртое"] },
    { front: "(пн, 07.12) Когда начинается курс?", back: "В понедельник, седьмого", distractors: ["Во понедельник, седьмого", "В понедельник, седьмое"] },
    { front: "(вс, 13.12) Когда концерт?", back: "В воскресенье, тринадцатого", distractors: ["В воскресенье, тринадцатое", "Во воскресенье, тринадцатого"] },
    { front: "(чт, 24.12) Когда ты улетаешь?", back: "В четверг, двадцать четвёртого", distractors: ["В четверг, двадцать четвёртое", "Во четверг, двадцать четвёртого"] },
    { front: "(сб, 30.01) Когда день рождения у Лены?", back: "В субботу, тридцатого", distractors: ["В субботу, тридцатое", "В суббота, тридцатого"] },
    { front: "(вт, 16.02) Когда собрание?", back: "Во вторник, шестнадцатого", distractors: ["В вторник, шестнадцатого", "Во вторник, шестнадцатое"] },
    { front: "(ср, 21.04) Когда ты переезжаешь?", back: "В среду, двадцать первого", distractors: ["В среду, двадцать первое", "В среда, двадцать первого"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto — il matrimonio: fatto (Какое число?) / momento (Когда?) / giorno + data
// ============================================================
const p6cards = [
    { front: "(28.11) Какое сегодня число?", back: "Двадцать восьмое ноября", distractors: ["Двадцать восьмого ноября", "Двадцать восьмой ноября"] },
    { front: "(сб, 05.12) Когда свадьба у Ани и Максима?", back: "В субботу, пятого", distractors: ["В субботу, пятое", "В суббота, пятого"] },
    { front: "(09.12) Когда нужно купить кольца?", back: "Девятого декабря", distractors: ["Девятое декабря", "В девятое декабря"] },
    { front: "(11.12) Какое завтра число? Примерка платья!", back: "Одиннадцатое декабря", distractors: ["Одиннадцатого декабря", "Одиннадцатый декабря"] },
    { front: "(вт, 15.12) Когда мы отправим приглашения?", back: "Во вторник, пятнадцатого", distractors: ["В вторник, пятнадцатого", "Во вторник, пятнадцатое"] },
    { front: "(18.12) Когда приедут родители жениха?", back: "Восемнадцатого декабря", distractors: ["Восемнадцатое декабря", "В восемнадцатое декабря"] },
    { front: "(20.12) Какое сегодня число? Мы выбираем торт.", back: "Двадцатое декабря", distractors: ["Двадцатого декабря", "Двадцатый декабря"] },
    { front: "(сб, 26.12) Когда свадьба у Олега?", back: "В субботу, двадцать шестого", distractors: ["В субботу, двадцать шестое", "В суббота, двадцать шестого"] },
    { front: "(02.01) Когда они улетают в свадебное путешествие?", back: "Второго января", distractors: ["Второе января", "В второе января"] },
    { front: "(03.01) Какое сегодня число? Мы на море!", back: "Третье января", distractors: ["Третьего января", "Третое января"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni — il calendario dell'anno: fatto / momento / giorno + data
// ============================================================
const p7cards = [
    { front: "(25.01) Какое сегодня число? Татьянин день — праздник студентов.", back: "Двадцать пятое января", distractors: ["Двадцать пятого января", "Двадцать пятый января"], explanation: "Il fatto: nominativo neutro: двадцать пятое." },
    { front: "(25.01) Когда празднуют День студента?", back: "Двадцать пятого января", distractors: ["Двадцать пятое января", "В двадцать пятое января"], explanation: "Quando? Genitivo senza preposizione: двадцать пятого." },
    { front: "(вс, 14.02) Когда в этом году День святого Валентина?", back: "В воскресенье, четырнадцатого", distractors: ["Во воскресенье, четырнадцатого", "В воскресенье, четырнадцатое"], explanation: "В воскресенье (non «во»); data al genitivo." },
    { front: "(01.03) Какое сегодня число? Первый день весны.", back: "Первое марта", distractors: ["Первого марта", "Первый март"], explanation: "Il fatto: первое; il mese al genitivo: марта." },
    { front: "(12.04) Когда День космонавтики?", back: "Двенадцатого апреля", distractors: ["Двенадцатое апреля", "В двенадцатое апреля"], explanation: "Quando? Genitivo: двенадцатого апреля." },
    { front: "(сб, 01.05) Когда Праздник весны и труда?", back: "В субботу, первого", distractors: ["В субботу, первое", "В суббота, первого"], explanation: "В субботу: суббота → субботу (accusativo); первого (genitivo)." },
    { front: "(01.06) Какое сегодня число? День защиты детей.", back: "Первое июня", distractors: ["Первого июня", "Первый июнь"], explanation: "Il fatto: первое июня; il mese al genitivo." },
    { front: "(ср, 07.07) Когда у Маши день рождения?", back: "В среду, седьмого", distractors: ["В среда, седьмого", "В среду, седьмое"], explanation: "Среда → среду (accusativo); седьмого (genitivo)." },
    { front: "(15.08) Какое сегодня число? Феррагосто!", back: "Пятнадцатое августа", distractors: ["Пятнадцатого августа", "Пятнадцатый август"], explanation: "Il fatto: пятнадцатое августа." },
    { front: "(чт, 30.09) Когда ты сдаёшь экзамен?", back: "В четверг, тридцатого", distractors: ["Во четверг, тридцатого", "В четверг, тридцатое"], explanation: "В четверг (non «во»); тридцатого (genitivo)." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto — inviti: fatto / momento / giorno + data
// ============================================================
const p8cards = [
    { front: "(пт, 27.11) Приглашение на юбилей. Когда праздник?", back: "В пятницу, двадцать седьмого", distractors: ["В пятница, двадцать седьмого", "В пятницу, двадцать седьмое"] },
    { front: "(03.12) Какое сегодня число? Пришло приглашение!", back: "Третье декабря", distractors: ["Третьего декабря", "Третий декабря"] },
    { front: "(12.12) Когда новоселье у Димы?", back: "Двенадцатого декабря", distractors: ["Двенадцатое декабря", "В двенадцатое декабря"] },
    { front: "(сб, 19.12) Когда корпоратив?", back: "В субботу, девятнадцатого", distractors: ["В субботу, девятнадцатое", "В суббота, девятнадцатого"] },
    { front: "(16.01) Какое сегодня число? Мы пишем приглашения.", back: "Шестнадцатое января", distractors: ["Шестнадцатого января", "Шестнадцатый января"] },
    { front: "(22.01) Когда нужно ответить на приглашение?", back: "Двадцать второго января", distractors: ["Двадцать второе января", "В двадцать второе января"] },
    { front: "(сб, 20.02) Когда вечеринка у Кати?", back: "В субботу, двадцатого", distractors: ["В субботу, двадцатое", "В суббота, двадцатого"] },
    { front: "(13.03) Какое сегодня число? Сегодня юбилей!", back: "Тринадцатое марта", distractors: ["Тринадцатого марта", "Тринадцатый март"] },
    { front: "(03.04) Когда день рождения у бабушки?", back: "Третьего апреля", distractors: ["Третье апреля", "Третего апреля"] },
    { front: "(сб, 10.04) Когда выпускной?", back: "В субботу, десятого", distractors: ["В субботу, десятое", "Во субботу, десятого"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelDfm9() {
    const panel = document.getElementById('panel-dfm-9');
    if (!panel) return;

    const container = panel.querySelector('#dfm-9-cards-container');
    const prevBtn   = panel.querySelector('#dfm-9-deck-prev');
    const nextBtn   = panel.querySelector('#dfm-9-deck-next');
    const counterEl = panel.querySelector('#dfm-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(18.11) — Какое сегодня число? — Сегодня ___ ноября.", options: ["восемнадцатого", "восемнадцатое", "восемнадцатый"], answer: "восемнадцатое" },
        { question: "(18.11) У Антона день рождения ___ ноября.", options: ["восемнадцатое", "в восемнадцатое", "восемнадцатого"], answer: "восемнадцатого" },
        { question: "(сб, 21.11) У них свадьба ___, двадцать первого.", options: ["в субботу", "в суббота", "во субботу"], answer: "в субботу" },
        { question: "(03.10) Сегодня ___ октября.", options: ["третое", "третьего", "третье"], answer: "третье" },
        { question: "(07.01) Православные празднуют Рождество ___ января.", options: ["седьмого", "седьмое", "в седьмое"], answer: "седьмого" },
        { question: "(вт, 01.12) Экзамен ___, первого декабря.", options: ["в вторник", "во вторник", "во вторнике"], answer: "во вторник" },
        { question: "(08.03) — Какое завтра число? — ___ марта.", options: ["Восьмого", "Восьмой", "Восьмое"], answer: "Восьмое" },
        { question: "(01.09) Учебный год начинается ___ сентября.", options: ["первое", "первого", "в первое"], answer: "первого" },
        { question: "(31.12) Сегодня ___ декабря. Завтра Новый год!", options: ["тридцать первое", "тридцать первого", "тридцать первый"], answer: "тридцать первое" },
        { question: "(ср, 02.12) Бабушка приедет в среду, ___.", options: ["второе", "в второе", "второго"], answer: "второго" }
    ];
    const matchPairs = [
        { left: "(18.11) Какое сегодня число?", right: "восемнадцатое ноября" },
        { left: "(18.11) Когда день рождения?", right: "восемнадцатого ноября" },
        { left: "(01.01) Какое сегодня число?", right: "первое января" },
        { left: "(01.01) Когда Новый год?", right: "первого января" },
        { left: "(03.07) Какое сегодня число?", right: "третье июля" },
        { left: "(03.07) Когда отпуск?", right: "третьего июля" },
        { left: "(сб, 21.11) Когда свадьба?", right: "в субботу, двадцать первого" },
        { left: "(вт, 01.12) Когда экзамен?", right: "во вторник, первого" },
        { left: "(ср, 09.12) Когда концерт?", right: "в среду, девятого" },
        { left: "(09.05) Когда парад?", right: "девятого мая" }
    ];
    const quizData = [
        { id: "dfm9-w1", promptPrefix: "(18.11) — Какое сегодня число? — Сегодня ", promptSuffix: " ноября.", answers: ["восемнадцатое"] },
        { id: "dfm9-w2", promptPrefix: "(18.11) У Антона день рождения ", promptSuffix: " ноября.", answers: ["восемнадцатого"] },
        { id: "dfm9-w3", promptPrefix: "(25.12) — Какое сегодня число? — ", promptSuffix: " декабря.", answers: ["двадцать пятое"] },
        { id: "dfm9-w4", promptPrefix: "(08.03) ", promptSuffix: " марта мы дарим маме цветы.", answers: ["восьмого"] },
        { id: "dfm9-w5", promptPrefix: "(сб, 21.11) Свадьба в субботу, ", promptSuffix: ".", answers: ["двадцать первого", "двадцать первого ноября"] },
        { id: "dfm9-w6", promptPrefix: "(03.10) — Какое сегодня число? — ", promptSuffix: " октября.", answers: ["третье"] },
        { id: "dfm9-w7", promptPrefix: "(вт, 01.12) Экзамен ", promptSuffix: ", первого.", answers: ["во вторник"] },
        { id: "dfm9-w8", promptPrefix: "(12.06) — Когда День России? — ", promptSuffix: " июня.", answers: ["двенадцатого"] },
        { id: "dfm9-w9", promptPrefix: "(пт, 04.12) Вечеринка ", promptSuffix: ", четвёртого.", answers: ["в пятницу"] },
        { id: "dfm9-w10", promptPrefix: "(09.05) — Какое сегодня число? — ", promptSuffix: " мая.", answers: ["девятое"] }
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
            card.className = 'fca01-card-container dfm-9-card';
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
        container.querySelectorAll('.dfm-9-card').forEach(card => {
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
                const card    = this.closest('.dfm-9-card');
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
        container.querySelectorAll('.dfm-9-card').forEach((c, i) => {
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
    'panel-dfm-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dfm-01', exercises: p1exercises }),
    'panel-dfm-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dfm-02', exercises: p2exercises }),
    'panel-dfm-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dfm-03', exercises: p3exercises }),
    'panel-dfm-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-dfm-04', cards: p4cards }),
    'panel-dfm-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-dfm-05', cards: p5cards }),
    'panel-dfm-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-dfm-06', cards: p6cards }),
    'panel-dfm-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-dfm-07', cards: p7cards }),
    'panel-dfm-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-dfm-08', cards: p8cards }),
    'panel-dfm-9': () => initPanelDfm9()
};

initPanelManager({ initializers, enableAccessControl: true });
