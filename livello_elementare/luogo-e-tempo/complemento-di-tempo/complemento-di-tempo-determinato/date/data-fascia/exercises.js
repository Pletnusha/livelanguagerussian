import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Между первым и пятым» (blocco Даты, ultima) — между + strumentale degli ordinali (un momento dentro l'intervallo)
// ↔ с … по (tutto il periodo). Evento unico al passato (доставили, позвонил, познакомились) → между; durata (работает, открыто, в отпуске) → с … по.
// Con il futuro / le «finestre» (доставят …) vanno bene entrambe: evitarle.
// Strumentale: первым, вторым, третьим, пятым, двадцать первым; mese al genitivo alla fine. Anche tra feste: между Новым годом и Рождеством.
// Solo date (niente ore). Il quiz 9 ripassa tutto il blocco Даты.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: между con date e feste (nuovo) + fatto / с … по / около / к / до (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05–05.05) Посылку доставили {{1}} мая.",
        words: ["между первого и пятого", "между первым и пятым", "между первое и пятое"],
        correctAnswers: { 1: "между первым и пятым" },
        explanation: "Un momento nell'intervallo: между + strumentale: первое → первым, пятое → пятым."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) — Какое сегодня число? — {{1}} мая.",
        words: ["Пятого", "Между пятым", "Пятое"],
        correctAnswers: { 1: "Пятое" },
        explanation: "Che giorno è? Il fatto: nominativo neutro."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.06–20.06) Мы познакомились {{1}} июня, точно не помню.",
        words: ["между десятым и двадцатым", "с десятого по двадцатое", "между десятого и двадцатого"],
        correctAnswers: { 1: "между десятым и двадцатым" },
        explanation: "Познакомились = un solo evento → между (non «с … по», che è una durata)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.07–14.07) Отпуск {{1}} июля.",
        words: ["между первым и четырнадцатым", "с первого по четырнадцатого", "с первого по четырнадцатое"],
        correctAnswers: { 1: "с первого по четырнадцатое" },
        explanation: "Le ferie durano tutto il periodo → с … по."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.03–03.03) Мастер позвонил {{1}} марта.",
        words: ["между второго и третьего", "между вторым и третьим", "между вторым и третим"],
        correctAnswers: { 1: "между вторым и третьим" },
        explanation: "Третье → третьим (con «ь»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.05) Точно не знаю: зарплата будет {{1}} мая.",
        words: ["около двадцатого", "около двадцатое", "около двадцати"],
        correctAnswers: { 1: "около двадцатого" },
        explanation: "Data approssimativa: около + genitivo dell'ordinale."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(31.12–07.01) Мы ездили к бабушке {{1}}.",
        words: ["между Нового года и Рождества", "между Новый год и Рождество", "между Новым годом и Рождеством"],
        correctAnswers: { 1: "между Новым годом и Рождеством" },
        explanation: "Feste: между + strumentale: Новым годом, Рождеством."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.05) — К какому числу нужно сдать отчёт? — {{1}} мая.",
        words: ["К десятому", "К десятого", "Между десятым"],
        correctAnswers: { 1: "К десятому" },
        explanation: "Scadenza: к + dativo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.08–25.08) Ремонт закончили {{1}} августа.",
        words: ["между двадцатого и двадцать пятого", "между двадцатым и двадцать пятым", "между двадцатым и двадцать пятом"],
        correctAnswers: { 1: "между двадцатым и двадцать пятым" },
        explanation: "Solo l'ultima parola cambia: двадцать пятым."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) Зарплата пятого, а сегодня третье: {{1}} денег нет.",
        words: ["После пятого", "До пятое", "До пятого"],
        correctAnswers: { 1: "До пятого" },
        explanation: "Prima del 5: до + genitivo."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// между + strumentale di due ordinali (eventi al passato): между первым и пятым, между вторым и третьим
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.06–05.06) Бабушка приехала {{1}} июня.",
        words: ["между первого и пятого", "между первым и пятым", "между первое и пятое"],
        correctAnswers: { 1: "между первым и пятым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.09–15.09) Мы купили машину {{1}} сентября.",
        words: ["между десятого и пятнадцатого", "между десятым и пятнадцатого", "между десятым и пятнадцатым"],
        correctAnswers: { 1: "между десятым и пятнадцатым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(02.04–03.04) Пришло письмо {{1}} апреля.",
        words: ["между вторым и третьим", "между второе и третье", "между второго и третьего"],
        correctAnswers: { 1: "между вторым и третьим" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.11–25.11) Документы подписали {{1}} ноября.",
        words: ["между двадцатым и двадцать пятым", "между двадцатого и двадцать пятого", "между двадцатое и двадцать пятое"],
        correctAnswers: { 1: "между двадцатым и двадцать пятым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(07.10–14.10) Мы переехали {{1}} октября.",
        words: ["между седьмого и четырнадцатого", "между седьмым и четырнадцатого", "между седьмым и четырнадцатым"],
        correctAnswers: { 1: "между седьмым и четырнадцатым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(03.12–05.12) Он вернулся из командировки {{1}} декабря.",
        words: ["между третьего и пятого", "между третьим и пятым", "между третим и пятым"],
        correctAnswers: { 1: "между третьим и пятым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21.03–23.03) Ремонт начали {{1}} марта.",
        words: ["между двадцать первого и двадцать третьего", "между двадцать первом и двадцать третьем", "между двадцать первым и двадцать третьим"],
        correctAnswers: { 1: "между двадцать первым и двадцать третьим" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.01–20.01) Мы получили визы {{1}} января.",
        words: ["между пятнадцатым и двадцатым", "между пятнадцатого и двадцатого", "между пятнадцатое и двадцатое"],
        correctAnswers: { 1: "между пятнадцатым и двадцатым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.08–10.08) Котёнок появился у нас {{1}} августа.",
        words: ["между первого и десятого", "между первым и десятым", "между первое и десятое"],
        correctAnswers: { 1: "между первым и десятым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.12–31.12) Мы поставили ёлку {{1}} декабря.",
        words: ["между двадцать пятым и тридцать первым", "между двадцать пятого и тридцать первого", "между двадцать пятым и тридцать первого"],
        correctAnswers: { 1: "между двадцать пятым и тридцать первым" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// между или с … по? Coppie sullo stesso intervallo: durata (работала, жила, был закрыт) → с … по; evento unico (доставили, приехала) → между
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05–05.05) Выставка работала {{1}} мая.",
        words: ["между первым и пятым", "с первого по пятое", "с первое по пятое"],
        correctAnswers: { 1: "с первого по пятое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.05–05.05) Посылку доставили {{1}} мая.",
        words: ["с первого по пятое", "между первого и пятого", "между первым и пятым"],
        correctAnswers: { 1: "между первым и пятым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.07–20.07) Мы были в отпуске {{1}} июля.",
        words: ["с десятого по двадцатое", "между десятым и двадцатым", "с десятого по двадцатого"],
        correctAnswers: { 1: "с десятого по двадцатое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.07–20.07) Мы купили билеты {{1}} июля.",
        words: ["между десятым и двадцатым", "с десятого по двадцатое", "между десятого и двадцатого"],
        correctAnswers: { 1: "между десятым и двадцатым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.11–07.11) Музей был закрыт {{1}} ноября.",
        words: ["между первым и седьмым", "с первого по седьмого", "с первого по седьмое"],
        correctAnswers: { 1: "с первого по седьмое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.11–07.11) Мастер позвонил {{1}} ноября.",
        words: ["с первого по седьмое", "между первым и седьмым", "между первого и седьмого"],
        correctAnswers: { 1: "между первым и седьмым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.08–25.08) Бабушка жила у нас {{1}} августа.",
        words: ["с пятнадцатого по двадцать пятое", "между пятнадцатым и двадцать пятым", "с пятнадцатое по двадцать пятое"],
        correctAnswers: { 1: "с пятнадцатого по двадцать пятое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.08–25.08) Бабушка приехала {{1}} августа.",
        words: ["между пятнадцатого и двадцать пятого", "с пятнадцатого по двадцать пятое", "между пятнадцатым и двадцать пятым"],
        correctAnswers: { 1: "между пятнадцатым и двадцать пятым" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.12–31.12) Ярмарка работала {{1}} декабря.",
        words: ["между двадцатым и тридцать первым", "с двадцатого по тридцать первое", "с двадцатого по тридцать первого"],
        correctAnswers: { 1: "с двадцатого по тридцать первое" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.12–31.12) Мы познакомились на ярмарке {{1}} декабря.",
        words: ["между двадцатым и тридцать первым", "с двадцатого по тридцать первое", "между двадцатого и тридцать первого"],
        correctAnswers: { 1: "между двадцатым и тридцать первым" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Eventi in un intervallo di date (passato): между + strumentale, con spiegazioni
// ============================================================
const p4cards = [
    { front: "(10.03–15.03) Когда пришла посылка?", back: "Между десятым и пятнадцатым марта", distractors: ["С десятого по пятнадцатое марта", "Между десятого и пятнадцатого марта"], explanation: "Arrivata = un momento: между + strumentale." },
    { front: "(01.04–05.04) Когда вам починили стиральную машину?", back: "Между первым и пятым апреля", distractors: ["С первого по пятое апреля", "Между первое и пятое апреля"], explanation: "Un evento, non una durata → между." },
    { front: "(02.06–03.06) Когда пришёл ответ из банка?", back: "Между вторым и третьим июня", distractors: ["Между второго и третьего июня", "Между вторым и третим июня"], explanation: "Третье → третьим (con «ь»)." },
    { front: "(20.09–30.09) Когда вы нашли квартиру?", back: "Между двадцатым и тридцатым сентября", distractors: ["С двадцатого по тридцатое сентября", "Между двадцатым и тридцатого сентября"], explanation: "Entrambi i numeri allo strumentale: двадцатым, тридцатым." },
    { front: "(11.02–14.02) Когда ты получил подарок?", back: "Между одиннадцатым и четырнадцатым февраля", distractors: ["Между одиннадцатого и четырнадцатого февраля", "Между одиннадцатое и четырнадцатое февраля"], explanation: "между + strumentale: одиннадцатым, четырнадцатым." },
    { front: "(05.10–08.10) Когда закончили ремонт крыши?", back: "Между пятым и восьмым октября", distractors: ["С пятого по восьмое октября", "Между пятым и восьмого октября"], explanation: "Закончили = un momento → между." },
    { front: "(21.07–23.07) Когда вам доставили мебель?", back: "Между двадцать первым и двадцать третьим июля", distractors: ["Между двадцать первого и двадцать третьего июля", "Между двадцать первом и двадцать третьем июля"], explanation: "Solo l'ultima parola cambia: двадцать первым, двадцать третьим." },
    { front: "(13.05–18.05) Когда тебе позвонили с новой работы?", back: "Между тринадцатым и восемнадцатым мая", distractors: ["С тринадцатого по восемнадцатое мая", "Между тринадцатого и восемнадцатого мая"], explanation: "Позвонили = un momento: между." },
    { front: "(01.12–10.12) Когда пришли счета?", back: "Между первым и десятым декабря", distractors: ["Между первого и десятого декабря", "С первого по десятое декабря"], explanation: "Il mese resta al genitivo alla fine: декабря." },
    { front: "(25.08–31.08) Когда сын вернулся из лагеря?", back: "Между двадцать пятым и тридцать первым августа", distractors: ["С двадцать пятого по тридцать первое августа", "Между двадцать пятым и тридцать первом августа"], explanation: "Вернулся = un evento: между + strumentale." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Tra le feste: между + strumentale (Новым годом, Рождеством, Восьмым марта, майскими праздниками, каникулами)
// ============================================================
const p5cards = [
    { front: "Новый год прошёл, Рождество ещё не наступило. Когда мы катались на лыжах?", back: "Между Новым годом и Рождеством", distractors: ["Между Нового года и Рождества", "Между Новый год и Рождество"] },
    { front: "Рождество прошло, Старый Новый год ещё не наступил. Когда мы ходили в театр?", back: "Между Рождеством и Старым Новым годом", distractors: ["Между Рождества и Старого Нового года", "Между Рождеством и Старый Новый год"] },
    { front: "Восьмое марта прошло, майские праздники ещё не начались. Когда мы переехали?", back: "Между Восьмым марта и майскими праздниками", distractors: ["Между Восьмого марта и майских праздников", "Между Восьмым марта и майские праздники"] },
    { front: "Первое и девятое мая — праздники. Когда мы съездили на дачу?", back: "Между первым и девятым мая", distractors: ["Между первого и девятого мая", "Между первое и девятое мая"] },
    { front: "Новогодние праздники прошли, Масленица ещё впереди. Когда мы отдыхали на море?", back: "Между Новым годом и Масленицей", distractors: ["Между Нового года и Масленицы", "Между Новым годом и Масленица"] },
    { front: "Зимние каникулы закончились, весенние ещё не начались. Когда у детей контрольная?", back: "Между каникулами", distractors: ["Между каникул", "Между каникулы"] },
    { front: "Первое сентября прошло, осенние каникулы ещё впереди. Когда было родительское собрание?", back: "Между первым сентября и каникулами", distractors: ["Между первого сентября и каникул", "Между первым сентября и каникулы"] },
    { front: "Пасха прошла, майские праздники ещё не начались. Когда мы купили велосипед?", back: "Между Пасхой и майскими праздниками", distractors: ["Между Пасхи и майских праздников", "Между Пасхой и майские праздники"] },
    { front: "Девятое мая прошло, лето ещё не началось. Когда были экзамены?", back: "Между Девятым мая и летом", distractors: ["Между Девятого мая и лета", "Между Девятым мая и лето"] },
    { front: "Рождество прошло, Новый год ещё не наступил. Когда мы ходили в гости в Италии?", back: "Между Рождеством и Новым годом", distractors: ["Между Рождества и Нового года", "Между Рождеством и Новый год"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto — storia di una coppia: между (date e feste) + fatto / momento / с … по / числа / к / после / giorno
// ============================================================
const p6cards = [
    { front: "(10.06–20.06) Когда вы познакомились? Точно не помню.", back: "Между десятым и двадцатым июня", distractors: ["С десятого по двадцатое июня", "Между десятого и двадцатого июня"] },
    { front: "(14.06) Какое сегодня число? Наша годовщина!", back: "Четырнадцатое июня", distractors: ["Четырнадцатого июня", "Четырнадцатый июнь"] },
    { front: "(01.07–14.07) С какого по какое число вы отдыхали вместе?", back: "С первого по четырнадцатое июля", distractors: ["С первого по четырнадцатого июля", "Между первым и четырнадцатым июля"] },
    { front: "(25.12–31.12) Когда он сделал предложение?", back: "Между Рождеством и Новым годом", distractors: ["Между Рождества и Нового года", "Между Рождеством и Новый год"] },
    { front: "(20.08) — Когда примерно свадьба? — Точно не знаем…", back: "Числа двадцатого августа", distractors: ["Числа двадцатое августа", "Число двадцатого августа"] },
    { front: "(15.03) — К какому числу нужно разослать приглашения?", back: "К пятнадцатому марта", distractors: ["К пятнадцатого марта", "К пятнадцатое марта"] },
    { front: "(05.04–10.04) Когда вы купили кольца?", back: "Между пятым и десятым апреля", distractors: ["С пятого по десятое апреля", "Между пятого и десятого апреля"] },
    { front: "(сб, 21.08) Какого числа свадьба?", back: "В субботу, двадцать первого", distractors: ["В суббота, двадцать первого", "В субботу, двадцать первое"] },
    { front: "Сначала свадьба, потом медовый месяц. Когда медовый месяц?", back: "После свадьбы", distractors: ["До свадьбы", "После свадьба"] },
    { front: "(02.03–03.03) Когда вы нашли ресторан для свадьбы?", back: "Между вторым и третьим марта", distractors: ["Между второго и третьего марта", "Между вторым и третим марта"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni — cercare lavoro: между + fatto / momento / с … по / около / к / после
// ============================================================
const p7cards = [
    { front: "(03.02–07.02) Когда тебе позвонили из банка?", back: "Между третьим и седьмым февраля", distractors: ["С третьего по седьмое февраля", "Между третьего и седьмого февраля"], explanation: "Позвонили = un momento: между + strumentale (третьим con «ь»)." },
    { front: "(07.02) Какое сегодня число? Первый день на новой работе!", back: "Седьмое февраля", distractors: ["Седьмого февраля", "Седьмой февраль"], explanation: "Il fatto: nominativo neutro." },
    { front: "(01.02–28.02) С какого по какое число у тебя испытательный срок?", back: "С первого по двадцать восьмое февраля", distractors: ["С первого по двадцать восьмого февраля", "Между первым и двадцать восьмым февраля"], explanation: "Durata (tutto il periodo) → с … по." },
    { front: "(10.01–20.01) Когда ты отправил резюме?", back: "Между десятым и двадцатым января", distractors: ["С десятого по двадцатое января", "Между десятым и двадцатого января"], explanation: "Un evento → между + strumentale (entrambi i numeri)." },
    { front: "(25.01) — Когда примерно будет собеседование? — Точно не знаю…", back: "Около двадцать пятого января", distractors: ["Около двадцать пятое января", "Около двадцати пяти января"], explanation: "Circa: около + ordinale al genitivo." },
    { front: "(31.01) — К какому числу нужно прислать документы?", back: "К тридцать первому января", distractors: ["К тридцать первого января", "К тридцать первое января"], explanation: "Scadenza: к + dativo." },
    { front: "Новый год прошёл, Рождество ещё не наступило. Когда ты нашёл вакансию?", back: "Между Новым годом и Рождеством", distractors: ["Между Нового года и Рождества", "Между Новым годом и Рождество"], explanation: "Tra le feste: между + strumentale." },
    { front: "Зарплата пятого. Когда мы купим новый телефон?", back: "После пятого числа", distractors: ["До пятого числа", "После пятое число"], explanation: "Dopo lo stipendio: после + genitivo." },
    { front: "(11.02–13.02) Когда тебе дали пропуск в офис?", back: "Между одиннадцатым и тринадцатым февраля", distractors: ["Между одиннадцатого и тринадцатого февраля", "С одиннадцатого по тринадцатое февраля"], explanation: "Dare = un momento → между." },
    { front: "(05.02) Какого числа тебе предложили работу?", back: "Пятого февраля", distractors: ["Пятое февраля", "Около пятого февраля"], explanation: "Какого числа? → la data esatta al genitivo." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto — tutto l'anno: между + fatto / momento / с … по / к / после / числа / giorno
// ============================================================
const p8cards = [
    { front: "(01.03–08.03) Когда ты купил цветы маме?", back: "Между первым и восьмым марта", distractors: ["С первого по восьмое марта", "Между первого и восьмого марта"] },
    { front: "(08.03) Какое сегодня число?", back: "Восьмое марта", distractors: ["Восьмого марта", "Восьмой март"] },
    { front: "(01.05–10.05) С какого по какое число майские праздники?", back: "С первого по десятое мая", distractors: ["С первого по десятого мая", "Между первым и десятым мая"] },
    { front: "(09.05) Когда в Москве парад?", back: "Девятого мая", distractors: ["Девятое мая", "Около девятого мая"] },
    { front: "(12.06–15.06) Когда ты получил визу?", back: "Между двенадцатым и пятнадцатым июня", distractors: ["С двенадцатого по пятнадцатое июня", "Между двенадцатого и пятнадцатого июня"] },
    { front: "(01.09) — К какому числу нужно купить форму?", back: "К первому сентября", distractors: ["К первого сентября", "К первое сентября"] },
    { front: "Зарплата двадцатого. Когда мы пойдём в ресторан?", back: "После двадцатого числа", distractors: ["До двадцатого числа", "После двадцатое число"] },
    { front: "(25.09) — Когда примерно включат отопление? — Точно не знаю…", back: "Числа двадцать пятого", distractors: ["Числа двадцать пятое", "Число двадцать пятого"] },
    { front: "Рождество прошло, Новый год ещё не наступил. Когда мы ходили в кино?", back: "Между Рождеством и Новым годом", distractors: ["Между Рождества и Нового года", "Между Рождеством и Новый год"] },
    { front: "(пт, 31.12) Когда новогодняя вечеринка?", back: "В пятницу, тридцать первого", distractors: ["В пятница, тридцать первого", "В пятницу, тридцать первое"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelDf9() {
    const panel = document.getElementById('panel-df-9');
    if (!panel) return;

    const container = panel.querySelector('#df-9-cards-container');
    const prevBtn   = panel.querySelector('#df-9-deck-prev');
    const nextBtn   = panel.querySelector('#df-9-deck-next');
    const counterEl = panel.querySelector('#df-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(01.05–05.05) Посылку доставили ___ мая.", options: ["с первого по пятое", "между первым и пятым", "между первого и пятого"], answer: "между первым и пятым" },
        { question: "(01.05–05.05) Выставка работала ___ мая.", options: ["между первым и пятым", "с первого по пятого", "с первого по пятое"], answer: "с первого по пятое" },
        { question: "(18.11) — Какое сегодня число? — ___ ноября.", options: ["Восемнадцатое", "Восемнадцатого", "Восемнадцатый"], answer: "Восемнадцатое" },
        { question: "(21.11) — Какого числа свадьба? — ___ ноября.", options: ["Двадцать первого", "Двадцать первое", "В двадцать первое"], answer: "Двадцать первого" },
        { question: "(20.05) Точно не знаю: зарплата будет ___ мая.", options: ["около двадцатое", "около двадцати", "около двадцатого"], answer: "около двадцатого" },
        { question: "(05.05) — К какому числу нужно сдать отчёт? — ___ мая.", options: ["К пятого", "К пятому", "До пятое"], answer: "К пятому" },
        { question: "(05.05) Зарплата пятого, а сегодня третье: ___ денег нет.", options: ["До пятого", "После пятого", "До пятое"], answer: "До пятого" },
        { question: "(02.03–03.03) Мастер позвонил ___ марта.", options: ["между второго и третьего", "между вторым и третим", "между вторым и третьим"], answer: "между вторым и третьим" },
        { question: "(31.12–07.01) Мы ездили к бабушке ___.", options: ["между Нового года и Рождества", "между Новым годом и Рождеством", "между Новый год и Рождество"], answer: "между Новым годом и Рождеством" },
        { question: "(сб, 21.11) — Когда свадьба? — ___, двадцать первого.", options: ["В субботу", "В суббота", "Во субботу"], answer: "В субботу" }
    ];
    const matchPairs = [
        { left: "(05.05) Какое сегодня число?", right: "пятое мая" },
        { left: "(05.05) Какого числа зарплата?", right: "пятого мая" },
        { left: "(01.05–05.05) Выставка работала…", right: "с первого по пятое мая" },
        { left: "(01.05–05.05) Посылку доставили…", right: "между первым и пятым мая" },
        { left: "(05.05) Точно не знаю, примерно…", right: "числа пятого мая" },
        { left: "(05.05) К какому числу сдать?", right: "к пятому мая" },
        { left: "(05.05) Зарплата пятого. Денег нет…", right: "до пятого мая" },
        { left: "(05.05) Зарплата пятого. Купим телефон…", right: "после пятого мая" },
        { left: "(ср, 05.05) Когда концерт?", right: "в среду, пятого" },
        { left: "Закрыто с первого, пятого уже открыто", right: "с первого до пятого" }
    ];
    const quizData = [
        { id: "df9-w1", promptPrefix: "(05.05) — Какое сегодня число? — ", promptSuffix: " мая.", answers: ["пятое"] },
        { id: "df9-w2", promptPrefix: "(05.05) — Какого числа зарплата? — ", promptSuffix: " мая.", answers: ["пятого"] },
        { id: "df9-w3", promptPrefix: "(01.05–05.05) Выставка работала с первого ", promptSuffix: " мая.", answers: ["по пятое"] },
        { id: "df9-w4", promptPrefix: "(01.05–05.05) Посылку доставили ", promptSuffix: " мая.", answers: ["между первым и пятым"] },
        { id: "df9-w5", promptPrefix: "(05.05) Точно не знаю: зарплата будет ", promptSuffix: " мая.", answers: ["около пятого", "числа пятого"] },
        { id: "df9-w6", promptPrefix: "(05.05) — К какому числу сдать отчёт? — ", promptSuffix: " мая.", answers: ["к пятому"] },
        { id: "df9-w7", promptPrefix: "(05.05) Зарплата пятого. Новый телефон купим ", promptSuffix: " мая.", answers: ["после пятого"] },
        { id: "df9-w8", promptPrefix: "(02.10) — К какому числу будет готов паспорт? — ", promptSuffix: " октября.", answers: ["ко второму"] },
        { id: "df9-w9", promptPrefix: "(31.12–07.01) Мы ездили к бабушке между Новым годом и ", promptSuffix: ".", answers: ["Рождеством"] },
        { id: "df9-w10", promptPrefix: "(вт, 01.12) Экзамен ", promptSuffix: ", первого декабря.", answers: ["во вторник"] }
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
            card.className = 'fca01-card-container df-9-card';
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
        container.querySelectorAll('.df-9-card').forEach(card => {
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
                const card    = this.closest('.df-9-card');
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
        container.querySelectorAll('.df-9-card').forEach((c, i) => {
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
    'panel-df-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-df-01', exercises: p1exercises }),
    'panel-df-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-df-02', exercises: p2exercises }),
    'panel-df-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-df-03', exercises: p3exercises }),
    'panel-df-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-df-04', cards: p4cards }),
    'panel-df-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-df-05', cards: p5cards }),
    'panel-df-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-df-06', cards: p6cards }),
    'panel-df-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-df-07', cards: p7cards }),
    'panel-df-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-df-08', cards: p8cards }),
    'panel-df-9': () => initPanelDf9()
};

initPanelManager({ initializers, enableAccessControl: true });
