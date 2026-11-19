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
// PANEL 2 — DragDrop · student
// Nuovo: назад (passato) ↔ через (futuro), scelto dal tempo del verbo; ordine delle parole (… назад dopo, через … prima)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2024; сейчас 2026) Мы купили машину {{1}}.",
        words: ["через два года", "два года назад", "два года через"],
        correctAnswers: { 1: "два года назад" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2029; сейчас 2026) Сын пойдёт в школу {{1}}.",
        words: ["три года назад", "три года через", "через три года"],
        correctAnswers: { 1: "через три года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2025; сейчас 2026) Я начал учить русский {{1}}.",
        words: ["год назад", "через год", "назад год"],
        correctAnswers: { 1: "год назад" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2027; сейчас 2026) Мы поедем в Петербург {{1}}.",
        words: ["через год", "год назад", "назад год"],
        correctAnswers: { 1: "через год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2022; сейчас 2026) Бабушка переехала к нам {{1}}.",
        words: ["через четыре года", "назад четыре года", "четыре года назад"],
        correctAnswers: { 1: "четыре года назад" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2030; сейчас 2026) Я выйду на пенсию {{1}}.",
        words: ["четыре года назад", "через четыре года", "четыре года через"],
        correctAnswers: { 1: "через четыре года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2016; сейчас 2026) Они познакомились {{1}}.",
        words: ["через десять лет", "десять лет назад", "назад десять лет"],
        correctAnswers: { 1: "десять лет назад" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2031; сейчас 2026) Кредит закончится {{1}}.",
        words: ["пять лет назад", "пять лет через", "через пять лет"],
        correctAnswers: { 1: "через пять лет" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2006; сейчас 2026) Родители купили дачу {{1}}.",
        words: ["двадцать лет назад", "через двадцать лет", "назад двадцать лет"],
        correctAnswers: { 1: "двадцать лет назад" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2028; сейчас 2026) Дочь окончит университет {{1}}.",
        words: ["два года назад", "через два года", "два года через"],
        correctAnswers: { 1: "через два года" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Nuovo: numero + год / года / лет (1, 21 → год; 2–4, 22 → года; 5–20, 25, 50, 100 → лет), con назад e через
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(2024; сейчас 2026) Мы переехали в Милан два {{1}} назад.",
        words: ["года", "год", "лет"],
        correctAnswers: { 1: "года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2031; сейчас 2026) Через пять {{1}} мы купим дом.",
        words: ["год", "года", "лет"],
        correctAnswers: { 1: "лет" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2005; сейчас 2026) Папа начал работать в банке двадцать один {{1}} назад.",
        words: ["лет", "год", "года"],
        correctAnswers: { 1: "год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2048; сейчас 2026) Через двадцать два {{1}} я выйду на пенсию.",
        words: ["лет", "год", "года"],
        correctAnswers: { 1: "года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2001; сейчас 2026) Родители поженились двадцать пять {{1}} назад.",
        words: ["лет", "года", "год"],
        correctAnswers: { 1: "лет" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2027; сейчас 2026) Мы поженимся через {{1}}.",
        words: ["года", "год", "лет"],
        correctAnswers: { 1: "год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1926; сейчас 2026) Этот дом построили сто {{1}} назад.",
        words: ["год", "лет", "года"],
        correctAnswers: { 1: "лет" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2029; сейчас 2026) Через три {{1}} брат окончит университет.",
        words: ["года", "лет", "год"],
        correctAnswers: { 1: "года" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1976; сейчас 2026) Бабушка приехала в Рим пятьдесят {{1}} назад.",
        words: ["года", "год", "лет"],
        correctAnswers: { 1: "лет" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2030; сейчас 2026) Через четыре {{1}} откроется новый вокзал.",
        words: ["год", "года", "лет"],
        correctAnswers: { 1: "года" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: Сколько лет назад? Через сколько лет? Когда? → … назад / через …, год / года / лет, ordine delle parole; con spiegazioni
// ============================================================
const p4cards = [
    { front: "(2023; сейчас 2026) — Сколько лет назад ты переехал в Италию?", back: "Три года назад", distractors: ["Через три года", "Три лет назад"], explanation: "Passato (переехал): назад. Con 2–4: года." },
    { front: "(2031; сейчас 2026) — Через сколько лет вы вернётесь в Россию?", back: "Через пять лет", distractors: ["Пять лет назад", "Через пять года"], explanation: "Futuro (вернётесь): через. Con 5–20: лет." },
    { front: "(2025; сейчас 2026) — Когда ты купил эту машину?", back: "Год назад", distractors: ["Через год", "Один года назад"], explanation: "Con 1 di solito senza «один»: год назад = un anno fa." },
    { front: "(2005; сейчас 2026) — Сколько лет назад вы познакомились?", back: "Двадцать один год назад", distractors: ["Двадцать один года назад", "Двадцать один лет назад"], explanation: "21 si comporta come 1: двадцать один год." },
    { front: "(2027; сейчас 2026) — Когда у вас будет свадьба?", back: "Через год", distractors: ["Год назад", "После года"], explanation: "Tra un anno = через год. «После года» non vuol dire «tra un anno»." },
    { front: "(2016; сейчас 2026) — Когда ты в первый раз был в Москве?", back: "Десять лет назад", distractors: ["Десять года назад", "Через десять лет"], explanation: "Passato: назад. Con 10: лет." },
    { front: "(2048; сейчас 2026) — Через сколько лет ты выйдешь на пенсию?", back: "Через двадцать два года", distractors: ["Через двадцать два лет", "Двадцать два года назад"], explanation: "22 si comporta come 2: двадцать два года." },
    { front: "(1926; сейчас 2026) — Сколько лет назад построили этот дом?", back: "Сто лет назад", distractors: ["Сто года назад", "Через сто лет"], explanation: "Con 100: лет. Сто лет назад = cento anni fa." },
    { front: "(2024; сейчас 2026) — Когда родилась твоя дочь?", back: "Два года назад", distractors: ["Два лет назад", "Назад два года"], explanation: "Ordine come in italiano: prima il numero, poi назад (due anni fa)." },
    { front: "(2029; сейчас 2026) — Через сколько лет сын окончит школу?", back: "Через три года", distractors: ["Через три лет", "Три года через"], explanation: "Ordine come in italiano: через prima del numero (tra tre anni)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Nuovo: piani — через полгода (una parola, come через полчаса), через несколько лет, много лет назад, через N лет
// ============================================================
const p5cards = [
    { front: "(05.2027; сейчас 11.2026) — Когда ты поедешь в Москву?", back: "Через полгода", distractors: ["Полгода назад", "Через пол года"] },
    { front: "(05.2026; сейчас 11.2026) — Когда вы купили квартиру?", back: "Полгода назад", distractors: ["Через полгода", "Пол года назад"] },
    { front: "— Когда вы поженитесь? — Не знаем точно…", back: "Через несколько лет", distractors: ["Несколько лет назад", "Через несколько года"] },
    { front: "— Когда вы познакомились? — Давно…", back: "Много лет назад", distractors: ["Через много лет", "Много года назад"] },
    { front: "(2028; сейчас 2026) — Когда откроется новый театр?", back: "Через два года", distractors: ["Два года назад", "Через два лет"] },
    { front: "(2036; сейчас 2026) — Когда сын станет взрослым?", back: "Через десять лет", distractors: ["Десять лет назад", "Через десять года"] },
    { front: "(2027; сейчас 2026) — Когда у тебя будет длинный отпуск? — Только…", back: "Через год", distractors: ["Год назад", "Через один года"] },
    { front: "(2033; сейчас 2026) — Через сколько лет закончится кредит?", back: "Через семь лет", distractors: ["Семь лет назад", "Через семь года"] },
    { front: "(2048; сейчас 2026) Внук только родился. Через сколько лет он окончит университет?", back: "Через двадцать два года", distractors: ["Через двадцать два лет", "Двадцать два года назад"] },
    { front: "(2029; сейчас 2026) — Когда вы будете жить в новом доме?", back: "Через три года", distractors: ["Три года назад", "Через три лет"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto, storia contata dal 2026 (date verificate: Гагарин 04.1961 → 65, Repubblica 06.1946 → 80, euro 01.2002 → 24, metro di Mosca 05.1935 → 91, Olimpiadi 07.1980 → 46; guerra 1945 → Гагарин 1961 = через 16 лет после): … назад, через … после (nuovo) + data completa, в … году, с … по (vecchio)
// ============================================================
const p6cards = [
    { front: "(1961; сейчас 2026) — Сколько лет назад Гагарин полетел в космос?", back: "Шестьдесят пять лет назад", distractors: ["Шестьдесят пять года назад", "Через шестьдесят пять лет"] },
    { front: "(12.04.1961) — Когда Гагарин полетел в космос? Полная дата.", back: "Двенадцатого апреля тысяча девятьсот шестьдесят первого года", distractors: ["Двенадцатое апреля тысяча девятьсот шестьдесят первого года", "Двенадцатого апреля в тысяча девятьсот шестьдесят первом году"] },
    { front: "(1946; сейчас 2026) — Сколько лет назад Италия стала республикой?", back: "Восемьдесят лет назад", distractors: ["Восемьдесят года назад", "Через восемьдесят лет"] },
    { front: "(2002; сейчас 2026) — Сколько лет назад в Италии появились наличные евро?", back: "Двадцать четыре года назад", distractors: ["Двадцать четыре лет назад", "Двадцать четыре год назад"] },
    { front: "(2002) — В каком году в Италии появились наличные евро?", back: "В две тысячи втором году", distractors: ["Две тысячи второго года", "В две тысячи второй год"] },
    { front: "(1935; сейчас 2026) — Сколько лет назад открылось московское метро?", back: "Девяносто один год назад", distractors: ["Девяносто один года назад", "Девяносто один лет назад"] },
    { front: "(1945 → 1961) — Через сколько лет после войны Гагарин полетел в космос?", back: "Через шестнадцать лет", distractors: ["Шестнадцать лет назад", "Через шестнадцать года"] },
    { front: "(1980) — В каком году в Москве была Олимпиада?", back: "В тысяча девятьсот восьмидесятом году", distractors: ["В тысяча девятьсот восьмидесятый год", "Тысяча девятьсот восьмидесятого года"] },
    { front: "(1980; сейчас 2026) — Сколько лет назад в Москве была Олимпиада?", back: "Сорок шесть лет назад", distractors: ["Сорок шесть года назад", "Через сорок шесть лет"] },
    { front: "(1941–1945) — С какого по какой год шла Великая Отечественная война?", back: "С тысяча девятьсот сорок первого по тысяча девятьсот сорок пятый год", distractors: ["С тысяча девятьсот сорок первого по тысяча девятьсот сорок пятого года", "С тысяча девятьсот сорок первый по тысяча девятьсот сорок пятый год"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto: год назад ↔ в прошлом году, через год ↔ в следующем году, в этом году, через … после (nuovo) + в … году, с … года, около, к … году (vecchio), con spiegazioni. Adesso = 11.2026
// ============================================================
const p7cards = [
    { front: "(03.2025; сейчас 11.2026) — Когда вы были в Риме?", back: "В прошлом году", distractors: ["Год назад", "В прошлый год"], explanation: "Marzo 2025 è l'anno scorso (в прошлом году), ma non «un anno fa»: sono passati 20 mesi." },
    { front: "(11.2025; сейчас 11.2026) — Когда ты купил собаку?", back: "Год назад", distractors: ["Через год", "В прошлый год"], explanation: "Esattamente 12 mesi fa: год назад. Qui va bene anche «в прошлом году»." },
    { front: "(2027; сейчас 2026) — В каком году ты поедешь в Россию?", back: "В следующем году", distractors: ["В следующий год", "Год назад"], explanation: "Il 2027 = l'anno prossimo: в следующем году (в + prepositivo, come «в прошлом году»)." },
    { front: "(2026; сейчас 2026) — Когда ты начал учить русский?", back: "В этом году", distractors: ["В этот год", "Год назад"], explanation: "Quest'anno: в этом году." },
    { front: "(2025) — В каком году вы поженились?", back: "В две тысячи двадцать пятом году", distractors: ["Две тысячи двадцать пятого года", "В две тысячи двадцать пятый год"], explanation: "Un anno: в + prepositivo." },
    { front: "(11.2027; сейчас 11.2026) — Когда закончится ремонт?", back: "Через год", distractors: ["Год назад", "После года"], explanation: "Tra esattamente un anno: через год." },
    { front: "(2015 → 2017) — Через сколько лет после свадьбы родился сын?", back: "Через два года", distractors: ["Два года назад", "Через два лет"], explanation: "Contato da un evento, non da oggi: через два года после свадьбы." },
    { front: "(2017) — С какого года вы живёте в Риме?", back: "С две тысячи семнадцатого года", distractors: ["В две тысячи семнадцатом году", "С две тысячи семнадцатый год"], explanation: "Dal 2017 a oggi: с + genitivo." },
    { front: "(2000) — Когда ты в первый раз был в Москве? — Точно не помню…", back: "Около двухтысячного года", distractors: ["В двухтысячном году", "Около двухтысячном году"], explanation: "Non ricordo esattamente → около + genitivo." },
    { front: "(2030) — К какому году вы хотите купить дом?", back: "К две тысячи тридцатому году", distractors: ["К две тысячи тридцатого года", "К две тысячи тридцатый год"], explanation: "Entro il 2030: к + dativo." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto, album di famiglia (adesso = 11.2026): … назад, через … после (nuovo) + в … году, decennio, в прошлом году, data completa, до (vecchio)
// ============================================================
const p8cards = [
    { front: "(1996; сейчас 2026) Это фото родителей. Сколько лет назад они поженились?", back: "Тридцать лет назад", distractors: ["Тридцать года назад", "Через тридцать лет"] },
    { front: "(1996 → 1998) — Через сколько лет после свадьбы родился ты?", back: "Через два года", distractors: ["Два года назад", "Через два лет"] },
    { front: "(1998) — В каком году ты родился?", back: "В тысяча девятьсот девяносто восьмом году", distractors: ["Тысяча девятьсот девяносто восьмого года", "В тысяча девятьсот девяносто восьмой год"] },
    { front: "(70-е) — Когда сделали это фото бабушки?", back: "В семидесятые годы", distractors: ["В семидесятом году", "Семьдесят лет назад"] },
    { front: "(2024; сейчас 2026) — А это наша собака. Когда мы её взяли?", back: "Два года назад", distractors: ["Через два года", "Два лет назад"] },
    { front: "(07.2025; сейчас 11.2026) — Когда мы были на море?", back: "В прошлом году", distractors: ["В прошлый год", "Через год"] },
    { front: "(2006; сейчас 2026) — Сколько лет назад дедушка построил дачу?", back: "Двадцать лет назад", distractors: ["Двадцать года назад", "Через двадцать лет"] },
    { front: "(01.09.2005) — Когда ты пошёл в школу? Полная дата.", back: "Первого сентября две тысячи пятого года", distractors: ["Первое сентября две тысячи пятого года", "Первого сентября в две тысячи пятом году"] },
    { front: "(2005; сейчас 2026) — Сколько лет назад ты пошёл в школу?", back: "Двадцать один год назад", distractors: ["Двадцать один лет назад", "Двадцать один года назад"] },
    { front: "(2002) — Эти деньги — лиры. Когда в Италии были лиры?", back: "До две тысячи второго года", distractors: ["После две тысячи второго года", "До две тысячи второй год"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelAft9() {
    const panel = document.getElementById('panel-aft-9');
    if (!panel) return;

    const container = panel.querySelector('#aft-9-cards-container');
    const prevBtn   = panel.querySelector('#aft-9-deck-prev');
    const nextBtn   = panel.querySelector('#aft-9-deck-next');
    const counterEl = panel.querySelector('#aft-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(2024; сейчас 2026) Мы купили машину ___.", options: ["через два года", "два года назад", "два года через"], answer: "два года назад" },
        { question: "(2029; сейчас 2026) Сын пойдёт в школу ___.", options: ["через три года", "три года назад", "три года через"], answer: "через три года" },
        { question: "(2005; сейчас 2026) Папа начал работать двадцать один ___ назад.", options: ["года", "лет", "год"], answer: "год" },
        { question: "(2001; сейчас 2026) Родители поженились двадцать пять ___ назад.", options: ["год", "года", "лет"], answer: "лет" },
        { question: "(05.2027; сейчас 11.2026) Я поеду в Москву через ___.", options: ["пол года", "полгода", "половину года"], answer: "полгода" },
        { question: "(03.2025; сейчас 11.2026) Мы были в Риме ___.", options: ["в прошлом году", "год назад", "в прошлый год"], answer: "в прошлом году" },
        { question: "(2027; сейчас 2026) ___ мы поедем в Петербург.", options: ["В следующем году", "В следующий год", "Год назад"], answer: "В следующем году" },
        { question: "(1926; сейчас 2026) Этот дом построили ___ назад.", options: ["сто года", "сто год", "сто лет"], answer: "сто лет" },
        { question: "(1945 → 1961) Гагарин полетел в космос через шестнадцать лет ___ войны.", options: ["до", "после", "с"], answer: "после" },
        { question: "(2016) Мы окончили школу в две тысячи ___.", options: ["шестнадцатого года", "шестнадцатый год", "шестнадцатом году"], answer: "шестнадцатом году" }
    ];
    const matchPairs = [
        { left: "(2024; сейчас 2026) Сколько лет назад?", right: "два года назад" },
        { left: "(2028; сейчас 2026) Через сколько лет?", right: "через два года" },
        { left: "(2025; сейчас 2026) Сколько лет назад?", right: "год назад" },
        { left: "(2027; сейчас 2026) Через сколько лет?", right: "через год" },
        { left: "(2025; сейчас 2026) В каком году?", right: "в прошлом году" },
        { left: "(2027; сейчас 2026) В каком году?", right: "в следующем году" },
        { left: "(05.2027; сейчас 11.2026) Когда?", right: "через полгода" },
        { left: "(1926; сейчас 2026) Сколько лет назад?", right: "сто лет назад" },
        { left: "(2005; сейчас 2026) Сколько лет назад?", right: "двадцать один год назад" },
        { left: "(2021; сейчас 2026) Сколько лет назад?", right: "пять лет назад" }
    ];
    const quizData = [
        { id: "aft9-w1", promptPrefix: "(2024; сейчас 2026) Мы купили машину два года ", promptSuffix: ".", answers: ["назад"] },
        { id: "aft9-w2", promptPrefix: "(2029; сейчас 2026) Сын пойдёт в школу ", promptSuffix: " три года.", answers: ["через"] },
        { id: "aft9-w3", promptPrefix: "(2023; сейчас 2026) Аня вышла замуж три ", promptSuffix: " назад.", answers: ["года"] },
        { id: "aft9-w4", promptPrefix: "(2031; сейчас 2026) Через пять ", promptSuffix: " мы купим дом.", answers: ["лет"] },
        { id: "aft9-w5", promptPrefix: "(2025; сейчас 2026) Лена родила сына ", promptSuffix: " назад.", answers: ["год"] },
        { id: "aft9-w6", promptPrefix: "(05.2027; сейчас 11.2026) Я поеду в Москву через ", promptSuffix: ".", answers: ["полгода"] },
        { id: "aft9-w7", promptPrefix: "(2025; сейчас 2026) Мы были на море в ", promptSuffix: " году.", answers: ["прошлом"] },
        { id: "aft9-w8", promptPrefix: "(2027; сейчас 2026) Мы поедем в Россию в ", promptSuffix: " году.", answers: ["следующем"] },
        { id: "aft9-w9", promptPrefix: "(2005; сейчас 2026) Папа начал работать двадцать один ", promptSuffix: " назад.", answers: ["год"] },
        { id: "aft9-w10", promptPrefix: "(2016; сейчас 2026) — Сколько лет назад вы окончили школу? — ", promptSuffix: ".", answers: ["десять лет назад"] }
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
            card.className = 'fca01-card-container aft-9-card';
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
        container.querySelectorAll('.aft-9-card').forEach(card => {
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
                const card    = this.closest('.aft-9-card');
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
        container.querySelectorAll('.aft-9-card').forEach((c, i) => {
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
    'panel-aft-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-aft-01', exercises: p1exercises }),
    'panel-aft-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-aft-02', exercises: p2exercises }),
    'panel-aft-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-aft-03', exercises: p3exercises }),
    'panel-aft-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-aft-04', cards: p4cards }),
    'panel-aft-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-aft-05', cards: p5cards }),
    'panel-aft-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-aft-06', cards: p6cards }),
    'panel-aft-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-aft-07', cards: p7cards }),
    'panel-aft-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-aft-08', cards: p8cards }),
    'panel-aft-9': () => initPanelAft9()
};

initPanelManager({ initializers, enableAccessControl: true });
