import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Числа двадцатого» (blocco Даты) — data esatta ↔ data approssimativa:
// двадцатого (esatto) ↔ около двадцатого / числа двадцатого (inversione colloquiale, come «часа в три») · в начале / в середине / в конце месяца.
// Trappole: «около пяти» = verso le cinque (ore), con le date «около пятого»; «около двадцатое», «числа двадцатое» sono errori.
// Solo date (niente ore). Il senso lo dà il contesto russo (точно не знаю / примерно ↔ точно / по договору).
// Storia: piani e accordi (зарплата, переезд, ремонт, приезд родственников, отпуск).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: около / числа (nuovo) + fatto / momento / с … по (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.05) Точно не знаю, зарплата будет {{1}} мая.",
        words: ["около двадцатое", "двадцатое", "около двадцатого"],
        correctAnswers: { 1: "около двадцатого" },
        explanation: "Data approssimativa: около + genitivo: двадцатое → двадцатого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.05) — Какое сегодня число? — {{1}} мая.",
        words: ["Двадцатое", "Двадцатого", "Около двадцатого"],
        correctAnswers: { 1: "Двадцатое" },
        explanation: "Che giorno è? Il fatto: nominativo neutro."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.06) — Примерно когда вы переезжаете? — {{1}} июня.",
        words: ["Числа десятое", "Числа десятого", "Число десятого"],
        correctAnswers: { 1: "Числа десятого" },
        explanation: "Inversione colloquiale = circa: числа + genitivo (come «часа в три»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.07–15.07) Отпуск с первого {{1}} июля.",
        words: ["по пятнадцатого", "около пятнадцатого", "по пятнадцатое"],
        correctAnswers: { 1: "по пятнадцатое" },
        explanation: "Periodo compreso: по + accusativo: пятнадцатое."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.08) Точно не знаю: родители приедут {{1}} августа.",
        words: ["около пяти", "около пятого", "около пятое"],
        correctAnswers: { 1: "около пятого" },
        explanation: "Con le date: около пятого (ordinale). «Около пяти» = verso le cinque (ore)!"
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21.11) Свадьба {{1}} ноября, точно!",
        words: ["двадцать первого", "около двадцать первого", "двадцать первое"],
        correctAnswers: { 1: "двадцать первого" },
        explanation: "Data esatta (точно): genitivo senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.09) — Когда примерно начнётся ремонт? — {{1}} сентября.",
        words: ["Числом пятнадцатого", "Числа пятнадцатое", "Числа пятнадцатого"],
        correctAnswers: { 1: "Числа пятнадцатого" },
        explanation: "Числа + genitivo dell'ordinale: числа пятнадцатого."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.09) Сегодня {{1}} сентября, дети идут в школу.",
        words: ["первое", "первого", "около первого"],
        correctAnswers: { 1: "первое" },
        explanation: "Il fatto: nominativo neutro: первое."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.12) Точно не помню, но мы познакомились {{1}} декабря.",
        words: ["около двадцать пятое", "около двадцать пятого", "около двадцати пяти"],
        correctAnswers: { 1: "около двадцать пятого" },
        explanation: "Data: около двадцать пятого. «Около двадцати пяти» = circa venticinque (quantità)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18.11) У Антона день рождения {{1}} ноября, это я знаю точно.",
        words: ["около восемнадцатого", "восемнадцатое", "восемнадцатого"],
        correctAnswers: { 1: "восемнадцатого" },
        explanation: "Esatto (знаю точно): genitivo senza preposizione."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// около + genitivo dell'ordinale (около пятого, non «около пятое» né «около пяти»)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.05) Точно не знаю: приеду {{1}} мая.",
        words: ["около пятое", "около пятого", "около пяти"],
        correctAnswers: { 1: "около пятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(21.06) Наверное, отпуск начнётся {{1}} июня.",
        words: ["около двадцать первого", "около двадцать первое", "около двадцати одного"],
        correctAnswers: { 1: "около двадцать первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.09) Ремонт закончат {{1}} сентября, точной даты нет.",
        words: ["около десятое", "около десяти", "около десятого"],
        correctAnswers: { 1: "около десятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(03.12) Посылка придёт {{1}} декабря, точно не знаю.",
        words: ["около третьего", "около трёх", "около третье"],
        correctAnswers: { 1: "около третьего" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.03) Наверное, мы переедем {{1}} марта.",
        words: ["около пятнадцати", "около пятнадцатое", "около пятнадцатого"],
        correctAnswers: { 1: "около пятнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.07) Точно не знаю, но курсы начнутся {{1}} июля.",
        words: ["около первое", "около первого", "около одного"],
        correctAnswers: { 1: "около первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(30.10) Бабушка вернётся {{1}} октября, точной даты пока нет.",
        words: ["около тридцатого", "около тридцати", "около тридцатое"],
        correctAnswers: { 1: "около тридцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12.04) Наверное, документы будут готовы {{1}} апреля.",
        words: ["около двенадцатое", "около двенадцатого", "около двенадцати"],
        correctAnswers: { 1: "около двенадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(08.08) Точно не помню: мы познакомились {{1}} августа.",
        words: ["около восьми", "около восьмое", "около восьмого"],
        correctAnswers: { 1: "около восьмого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.02) Наверное, зарплату дадут {{1}} февраля.",
        words: ["около двадцать пятого", "около двадцати пяти", "около двадцать пятое"],
        correctAnswers: { 1: "около двадцать пятого" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Esatto o approssimativo? Contratto / biglietto / festa fissa → двадцатого; точно не знаю / точной даты нет → около / числа
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.05) В договоре написано: зарплата {{1}} мая.",
        words: ["около двадцатого", "двадцатое", "двадцатого"],
        correctAnswers: { 1: "двадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10.06) — Когда вы переезжаете? — Точно не знаю, {{1}} июня.",
        words: ["числа десятого", "десятого", "числа десятое"],
        correctAnswers: { 1: "числа десятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(07.01) Православное Рождество {{1}} января.",
        words: ["около седьмого", "седьмого", "седьмое"],
        correctAnswers: { 1: "седьмого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15.03) Точной даты нет: мы переедем {{1}} марта.",
        words: ["пятнадцатого", "около пятнадцатого", "около пятнадцатое"],
        correctAnswers: { 1: "около пятнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(01.01) Новый год всегда {{1}} января.",
        words: ["около первого", "первое", "первого"],
        correctAnswers: { 1: "первого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(25.08) Точно не помню, когда мы вернулись: {{1}} августа.",
        words: ["числа двадцать пятого", "двадцать пятого", "числа двадцать пятое"],
        correctAnswers: { 1: "числа двадцать пятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12.06) День России празднуют {{1}} июня.",
        words: ["двенадцатого", "около двенадцатого", "двенадцатое"],
        correctAnswers: { 1: "двенадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(05.09) Точной даты пока нет: ремонт закончат {{1}} сентября.",
        words: ["пятого", "около пятое", "около пятого"],
        correctAnswers: { 1: "около пятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14.02) На билете: концерт {{1}} февраля.",
        words: ["около четырнадцатого", "четырнадцатого", "четырнадцатое"],
        correctAnswers: { 1: "четырнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20.10) Точно не знаю: отпуск начнётся {{1}} октября.",
        words: ["двадцатого", "числа двадцатое", "числа двадцатого"],
        correctAnswers: { 1: "числа двадцатого" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Inversione colloquiale: числа + genitivo (= около …), con spiegazioni
// ============================================================
const p4cards = [
    { front: "около двадцатого = …", back: "числа двадцатого", distractors: ["число двадцатого", "числа двадцатое"], explanation: "Inversione: числа (genitivo di «число») + ordinale al genitivo = circa il 20." },
    { front: "около пятого = …", back: "числа пятого", distractors: ["числа пятое", "числом пятого"], explanation: "Числа + genitivo: пятое → пятого." },
    { front: "около десятого мая = …", back: "числа десятого мая", distractors: ["числа десятое мая", "число десятого мая"], explanation: "Il mese resta alla fine: числа десятого мая." },
    { front: "около первого = …", back: "числа первого", distractors: ["числа первое", "число первого"], explanation: "Числа + genitivo: первое → первого." },
    { front: "около пятнадцатого = …", back: "числа пятнадцатого", distractors: ["числа пятнадцатое", "числам пятнадцатого"], explanation: "«Числа» sempre al genitivo singolare." },
    { front: "(25.04) — Когда примерно приедут гости? — Точной даты нет…", back: "Числа двадцать пятого", distractors: ["Числа двадцать пятое", "Около двадцать пятое"], explanation: "Data approssimativa: числа двадцать пятого." },
    { front: "(03.06) — Когда ты уезжаешь? — Точно не знаю…", back: "Числа третьего", distractors: ["Числа третье", "Числа третего"], explanation: "Третье → третьего (con «ь»)." },
    { front: "(12.12) — Когда будет готов ремонт? — Точной даты нет…", back: "Числа двенадцатого", distractors: ["Числа двенадцатое", "Число двенадцатого"], explanation: "Числа + genitivo: двенадцатого." },
    { front: "(30.09) — Когда начнутся занятия? — Точно не помню…", back: "Числа тридцатого", distractors: ["Числа тридцатое", "Около тридцатое"], explanation: "Числа тридцатого = около тридцатого." },
    { front: "(18.07) — Когда вы вернётесь? — Точно не знаю…", back: "Числа восемнадцатого", distractors: ["Числа восемнадцатое", "Число восемнадцатого"], explanation: "«Числа» si usa nel parlato; nello scritto: около восемнадцатого." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// в начале / в середине / в конце + genitivo del mese (non «в начало», «в начале май»)
// ============================================================
const p5cards = [
    { front: "(01.05–05.05) Когда мы едем на дачу?", back: "В начале мая", distractors: ["В начало мая", "В начале май"] },
    { front: "(13.07–17.07) Когда фестиваль?", back: "В середине июля", distractors: ["В середину июля", "В середине июль"] },
    { front: "(27.12–31.12) Когда корпоратив?", back: "В конце декабря", distractors: ["В конец декабря", "В конце декабрь"] },
    { front: "(01.09–04.09) Когда начинаются занятия в университете?", back: "В начале сентября", distractors: ["В начало сентября", "В начале сентябрь"] },
    { front: "(14.02–17.02) Когда у нас экзамены?", back: "В середине февраля", distractors: ["В середину февраля", "В середине февраль"] },
    { front: "(26.06–30.06) Когда отпуск у мамы?", back: "В конце июня", distractors: ["В конец июня", "В конце июнь"] },
    { front: "(02.03–06.03) Когда приедет бабушка?", back: "В начале марта", distractors: ["В начало марта", "В начале март"] },
    { front: "(14.10–18.10) Когда ремонт в офисе?", back: "В середине октября", distractors: ["В середину октября", "В середине октябрь"] },
    { front: "(25.08–31.08) Когда мы вернёмся с моря?", back: "В конце августа", distractors: ["В конец августа", "В конце август"] },
    { front: "(28–31 число) Когда приходят счета за квартиру?", back: "В конце месяца", distractors: ["В конец месяца", "В конце месяц"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto — il trasloco: около / числа / в начале, в конце (nuovo) + fatto / momento / с … по / giorno (vecchio)
// ============================================================
const p6cards = [
    { front: "(10.06) — Когда примерно вы переезжаете? — Точной даты нет…", back: "Числа десятого июня", distractors: ["Десятого июня", "Числа десятое июня"] },
    { front: "(01.06) Какое сегодня число? Мы начали собирать коробки.", back: "Первое июня", distractors: ["Первого июня", "Первый июнь"] },
    { front: "(01.06–05.06) Когда мы ищем грузовик?", back: "В начале июня", distractors: ["В начало июня", "В начале июнь"] },
    { front: "(сб, 12.06) Когда переезд? Точно!", back: "В субботу, двенадцатого", distractors: ["В субботу, двенадцатое", "Около субботы, двенадцатого"] },
    { front: "(15.06) Точно не знаю: когда подключат интернет?", back: "Около пятнадцатого", distractors: ["Пятнадцатого", "Около пятнадцатое"] },
    { front: "(14.06–20.06) С какого по какое число мы живём у друзей?", back: "С четырнадцатого по двадцатое июня", distractors: ["С четырнадцатого по двадцатого июня", "С четырнадцатое по двадцатое июня"] },
    { front: "(26.06–30.06) Когда новоселье? Точной даты нет.", back: "В конце июня", distractors: ["В конец июня", "Тридцатого июня"] },
    { front: "(20.06) Когда привезут мебель? Это есть в договоре.", back: "Двадцатого июня", distractors: ["Около двадцатого июня", "Двадцатое июня"] },
    { front: "(05.07) — Когда примерно придут счета за новую квартиру? — Точно не знаю…", back: "Числа пятого июля", distractors: ["Числа пятое июля", "Пятого июля"] },
    { front: "(01.07) Какое сегодня число? Мы уже живём в новой квартире!", back: "Первое июля", distractors: ["Первого июля", "Около первого июля"] }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dc-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dc-01', exercises: p1exercises }),
    'panel-dc-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dc-02', exercises: p2exercises }),
    'panel-dc-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dc-03', exercises: p3exercises }),
    'panel-dc-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-dc-04', cards: p4cards }),
    'panel-dc-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-dc-05', cards: p5cards }),
    'panel-dc-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-dc-06', cards: p6cards })
};

initPanelManager({ initializers, enableAccessControl: true });
