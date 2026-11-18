import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «В девяностые годы» (blocco Годы) — l'epoca, non l'anno: decennio ↔ secolo.
// Decennio: в девяностые годы (в + accusativo plurale) ↔ в девяностом году (1990, un solo anno). Fatto: Это были девяностые.
// Variante «в девяностых (годах)» = norma anche questa: accettata nelle risposte scritte, mai come distrattore; «в девяностые года» = colloquiale, mai distrattore.
// Secolo: в двадцатом веке (в + prepositivo); Какой сейчас век? — Двадцать первый. Novecento = двадцатый век (non «девятисотый»).
// В начале / в конце (genitivo): в начале девяностых, в конце девятнадцатого века. «прошлого века» per distinguere gli anni Venti del Novecento.
// Solo anni ed epoche (niente ore). Vecchio materiale: в … году, с … по … год, с … года, data completa, «Ты какого года?».
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: decennio, secolo, в начале / в конце (nuovo) + в … году, с … по … год, с … года, anno di nascita (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(90-е) Моя мама жила в Москве {{1}}.",
        words: ["в девяностом году", "в девяностые годы", "в девяностый год"],
        correctAnswers: { 1: "в девяностые годы" },
        explanation: "Un decennio (gli anni Novanta): в + accusativo plurale: в девяностые годы. Si dice anche «в девяностых»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1990) Мама родилась в тысяча девятьсот {{1}}.",
        words: ["девяностом году", "девяностые годы", "девяностого года"],
        correctAnswers: { 1: "девяностом году" },
        explanation: "Un solo anno (il 1990): в + prepositivo: в девяностом году."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(XX в.) Феллини жил и работал в {{1}} веке.",
        words: ["двадцатый", "двадцатого", "двадцатом"],
        correctAnswers: { 1: "двадцатом" },
        explanation: "Il secolo: в + prepositivo, come con l'anno: в двадцатом веке. Attenzione: il Novecento = двадцатый век."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2005–2012) Мы жили в Турине с две тысячи пятого {{1}}.",
        words: ["по две тысячи двенадцатого года", "в две тысячи двенадцатом году", "по две тысячи двенадцатый год"],
        correctAnswers: { 1: "по две тысячи двенадцатый год" },
        explanation: "Periodo: с + genitivo … по + accusativo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(90-е) — Какие это были годы? — Это были {{1}}.",
        words: ["девяностые", "девяностых", "девяностый"],
        correctAnswers: { 1: "девяностые" },
        explanation: "Il fatto: nominativo plurale: девяностые (годы)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2017) Я живу в Италии {{1}}.",
        words: ["в две тысячи семнадцатом году", "с две тысячи семнадцатого года", "по две тысячи семнадцатый год"],
        correctAnswers: { 1: "с две тысячи семнадцатого года" },
        explanation: "Dal 2017 a oggi: с + genitivo, con il presente."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(XXI в.) — Какой сейчас век? — {{1}} век.",
        words: ["Двадцать первый", "Двадцать первом", "Двадцать первого"],
        correctAnswers: { 1: "Двадцать первый" },
        explanation: "Il fatto: nominativo: двадцать первый век."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1991) Мы переехали в Италию в начале {{1}}.",
        words: ["девяностые", "девяностых", "девяностом"],
        correctAnswers: { 1: "девяностых" },
        explanation: "в начале + genitivo plurale: в начале девяностых (годов)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1985) — Ты какого года? — {{1}}.",
        words: ["Восьмидесятые", "В восемьдесят пятом", "Восемьдесят пятого"],
        correctAnswers: { 1: "Восемьдесят пятого" },
        explanation: "Anno di nascita: genitivo, senza preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1895–1896) Чехов написал «Чайку» в конце {{1}} века.",
        words: ["девятнадцатого", "девятнадцатом", "девятнадцатый"],
        correctAnswers: { 1: "девятнадцатого" },
        explanation: "в конце + genitivo: в конце девятнадцатого века."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Nuovo: decennio (в … -ые годы) ↔ un solo anno (в … -ом году)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(80-е) Родители познакомились в институте {{1}}.",
        words: ["в восьмидесятые годы", "в восьмидесятом году", "в восьмидесятый год"],
        correctAnswers: { 1: "в восьмидесятые годы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1980) Олимпиада в Москве была в тысяча девятьсот {{1}}.",
        words: ["восьмидесятые годы", "восьмидесятый год", "восьмидесятом году"],
        correctAnswers: { 1: "восьмидесятом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(60-е) {{1}} моя бабушка была студенткой в Милане.",
        words: ["В шестидесятом году", "В шестидесятые годы", "В шестидесятый год"],
        correctAnswers: { 1: "В шестидесятые годы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1966) Мой папа родился в тысяча девятьсот шестьдесят {{1}}.",
        words: ["шестом году", "шестого года", "шестой год"],
        correctAnswers: { 1: "шестом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(70-е) {{1}} бабушка и дедушка жили в Ленинграде.",
        words: ["В семидесятом году", "В семидесятые годы", "В семидесятый год"],
        correctAnswers: { 1: "В семидесятые годы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000-е) Брат учился в Лондоне в {{1}} годы.",
        words: ["двухтысячном", "двухтысячный", "двухтысячные"],
        correctAnswers: { 1: "двухтысячные" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2000) Брат окончил школу в {{1}} году.",
        words: ["двухтысячные", "двухтысячном", "двухтысячный"],
        correctAnswers: { 1: "двухтысячном" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(90-е) Эта песня была очень популярна {{1}}.",
        words: ["в девяностом году", "в девяностый год", "в девяностые годы"],
        correctAnswers: { 1: "в девяностые годы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1999) Я окончил школу в тысяча девятьсот девяносто {{1}}.",
        words: ["девятом году", "девятого года", "девятый год"],
        correctAnswers: { 1: "девятом году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(50-е) Дедушка работал на заводе {{1}}.",
        words: ["в пятидесятом году", "в пятидесятые годы", "в пятидесятый год"],
        correctAnswers: { 1: "в пятидесятые годы" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Nuovo: в начале / в конце + genitivo (девяностых, двадцатого века); scelta inizio ↔ fine dall'anno tra parentesi
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(1991) Мы переехали в Петербург в начале {{1}}.",
        words: ["девяностые", "девяностых", "девяностом"],
        correctAnswers: { 1: "девяностых" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1998) Дедушка вышел на пенсию в конце {{1}}.",
        words: ["девяностом", "девяностые", "девяностых"],
        correctAnswers: { 1: "девяностых" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1903) Мой прадедушка родился в начале {{1}} века.",
        words: ["двадцатого", "двадцатом", "двадцатый"],
        correctAnswers: { 1: "двадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1898) Прабабушка родилась в конце {{1}} века.",
        words: ["девятнадцатом", "девятнадцатого", "девятнадцатый"],
        correctAnswers: { 1: "девятнадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2001) Я пошёл в школу {{1}} двухтысячных.",
        words: ["в конце", "в начало", "в начале"],
        correctAnswers: { 1: "в начале" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1989) Родители поженились {{1}} восьмидесятых.",
        words: ["в конце", "в начале", "в конец"],
        correctAnswers: { 1: "в конце" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2009) Сестра окончила университет в конце {{1}}.",
        words: ["двухтысячных", "двухтысячные", "двухтысячном"],
        correctAnswers: { 1: "двухтысячных" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1962) Бабушка поступила в институт в начале {{1}}.",
        words: ["шестидесятом", "шестидесятых", "шестидесятые"],
        correctAnswers: { 1: "шестидесятых" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(1999) {{1}} двадцатого века в Италии ещё были лиры.",
        words: ["В начале", "В конце", "В конец"],
        correctAnswers: { 1: "В конце" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2004) Мы купили квартиру в Милане в начале {{1}} века.",
        words: ["двадцать первом", "двадцать первый", "двадцать первого"],
        correctAnswers: { 1: "двадцать первого" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: secoli (Какой век? В каком веке?), Novecento/Seicento/Quattrocento, decennio, в начале/в конце, прошлого века, con spiegazioni
// ============================================================
const p4cards = [
    { front: "(XXI в.) — Какой сейчас век?", back: "Двадцать первый", distractors: ["Двадцать первом", "Двадцать первого"], explanation: "Il fatto: nominativo: двадцать первый (век)." },
    { front: "(XX в.) — В каком веке жил Гагарин?", back: "В двадцатом веке", distractors: ["В двадцатый век", "В двадцатого века"], explanation: "В каком веке? — в + prepositivo, come «в … году»: в двадцатом веке." },
    { front: "(Novecento) — Какой это век?", back: "Двадцатый век", distractors: ["Девятисотый век", "Девятнадцатый век"], explanation: "Il Novecento sono gli anni 1900–1999 = il XX secolo: двадцатый век. In russo si conta il secolo, non le centinaia." },
    { front: "(Seicento) — В каком веке?", back: "В семнадцатом веке", distractors: ["В шестом веке", "В шестнадцатом веке"], explanation: "Il Seicento (1600–1699) = XVII secolo: в семнадцатом веке." },
    { front: "(XIX в.) — В каком веке Пушкин написал «Евгения Онегина»?", back: "В девятнадцатом веке", distractors: ["В девятнадцатый век", "В девятнадцатого века"], explanation: "в + prepositivo: в девятнадцатом веке." },
    { front: "(Quattrocento) — Какой это век?", back: "Пятнадцатый век", distractors: ["Четырёхсотый век", "Четырнадцатый век"], explanation: "Il Quattrocento (1400–1499) = XV secolo: пятнадцатый век." },
    { front: "(90-е) — В какие годы ты жил в Москве?", back: "В девяностые годы", distractors: ["В девяностом году", "В девяностый год"], explanation: "В какие годы? — в + accusativo plurale: в девяностые годы. Si dice anche «в девяностых (годах)»." },
    { front: "(1992) — Когда вы познакомились? В начале…", back: "В начале девяностых", distractors: ["В начале девяностые", "В начало девяностых"], explanation: "в начале + genitivo plurale: девяностых. Forma piena: в начале девяностых годов." },
    { front: "(1920-е) — Когда прабабушка жила в Париже?", back: "В двадцатые годы прошлого века", distractors: ["В двадцатом году прошлого века", "В двадцатые годы этого века"], explanation: "«Прошлого века» (genitivo) chiarisce: gli anni Venti del Novecento, non del 2000." },
    { front: "(1799) — Когда родился Пушкин? В конце…", back: "В конце восемнадцатого века", distractors: ["В конце девятнадцатого века", "В конце восемнадцатом веке"], explanation: "Il 1799 è nel Settecento = XVIII secolo: в конце восемнадцатого века (genitivo)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Nuovo: decenni e secoli con la musica e il cinema (fatti verificati: Dafne 1598, Sanremo 1951, Celentano Ancona 1959, cinema Lumière 1895, Al Bano e Romina anni '80)
// ============================================================
const p5cards = [
    { front: "(60-е) — Когда «Битлз» были очень популярны?", back: "В шестидесятые годы", distractors: ["В шестидесятом году", "В шестидесятый год"] },
    { front: "(40-е) — Когда в Италии появился неореализм?", back: "В сороковые годы", distractors: ["В сороковом году", "В сороковой год"] },
    { front: "(1951) — Когда начался фестиваль в Сан-Ремо? В начале…", back: "В начале пятидесятых", distractors: ["В начале пятидесятые", "В начало пятидесятых"] },
    { front: "(70-е) — Когда было модно диско?", back: "В семидесятые годы", distractors: ["В семидесятом году", "В семидесятый год"] },
    { front: "(1895) — Когда появилось кино? В конце…", back: "В конце девятнадцатого века", distractors: ["В конце девятнадцатом веке", "В конце двадцатого века"] },
    { front: "(XIX в.) — В каком веке Верди писал оперы?", back: "В девятнадцатом веке", distractors: ["В девятнадцатый век", "В девятнадцатого века"] },
    { front: "(XVIII в.) — В каком веке жил Вивальди?", back: "В восемнадцатом веке", distractors: ["В восемнадцатый век", "В восемнадцатого века"] },
    { front: "(80-е) — Когда Аль Бано и Ромина Пауэр были очень популярны?", back: "В восьмидесятые годы", distractors: ["В восьмидесятом году", "В восьмидесятый год"] },
    { front: "(1598) — Когда в Италии появилась опера? В конце…", back: "В конце шестнадцатого века", distractors: ["В конце шестнадцатом веке", "В конце семнадцатого века"] },
    { front: "(1959) — Когда Челентано стал знаменитым? В конце…", back: "В конце пятидесятых", distractors: ["В конце пятидесятые", "В конец пятидесятых"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto, arte (date verificate): secoli, в начале / в конце (nuovo) + data completa, с … по … год, в … году (vecchio). Боттичелли ~1485, «Тайная вечеря» 1495–1498, «Давид» 1501–1504, Эрмитаж 1764, Третьяковская 1856, «Чёрный квадрат» 1915
// ============================================================
const p6cards = [
    { front: "(XV в.) — В каком веке Боттичелли написал «Рождение Венеры»?", back: "В пятнадцатом веке", distractors: ["В пятнадцатый век", "В пятнадцатого века"] },
    { front: "(15.04.1452) — Когда родился Леонардо да Винчи?", back: "Пятнадцатого апреля тысяча четыреста пятьдесят второго года", distractors: ["Пятнадцатое апреля тысяча четыреста пятьдесят второго года", "Пятнадцатого апреля в тысяча четыреста пятьдесят втором году"] },
    { front: "(1495–1498) — Когда Леонардо написал «Тайную вечерю»? В конце…", back: "В конце пятнадцатого века", distractors: ["В конце пятнадцатом веке", "В конце шестнадцатого века"] },
    { front: "(1501–1504) — Когда Микеланджело создал «Давида»? В начале…", back: "В начале шестнадцатого века", distractors: ["В начале шестнадцатом веке", "В начале пятнадцатого века"] },
    { front: "(1508–1512) — С какого по какой год Микеланджело расписывал Сикстинскую капеллу?", back: "С тысяча пятьсот восьмого по тысяча пятьсот двенадцатый год", distractors: ["С тысяча пятьсот восьмого по тысяча пятьсот двенадцатого года", "С тысяча пятьсот восьмой по тысяча пятьсот двенадцатый год"] },
    { front: "(XVIII в.) — В каком веке основали Эрмитаж?", back: "В восемнадцатом веке", distractors: ["В восемнадцатый век", "В восемнадцатого века"] },
    { front: "(1856) — В каком году Павел Третьяков купил первые картины?", back: "В тысяча восемьсот пятьдесят шестом году", distractors: ["В тысяча восемьсот пятьдесят шестой год", "С тысяча восемьсот пятьдесят шестого года"] },
    { front: "(XIX в.) — В каком веке основали Третьяковскую галерею?", back: "В девятнадцатом веке", distractors: ["В девятнадцатый век", "В девятнадцатого века"] },
    { front: "(1915) — Когда Малевич написал «Чёрный квадрат»? В начале…", back: "В начале двадцатого века", distractors: ["В начале двадцатом веке", "В начале девятнадцатого века"] },
    { front: "(1915) — В каком году Малевич написал «Чёрный квадрат»?", back: "В тысяча девятьсот пятнадцатом году", distractors: ["В тысяча девятьсот пятнадцатого года", "В тысяча девятьсот пятнадцатый год"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto, storia di famiglia: decennio, в начале / в конце, secolo (nuovo) + в … году, data completa, с … по … год, anno di nascita (vecchio), con spiegazioni
// ============================================================
const p7cards = [
    { front: "(50-е) — Когда дедушка жил в деревне?", back: "В пятидесятые годы", distractors: ["В пятидесятом году", "В пятидесятый год"], explanation: "Un decennio: в + accusativo plurale: в пятидесятые годы." },
    { front: "(1948) — Когда родился дедушка?", back: "В тысяча девятьсот сорок восьмом году", distractors: ["В тысяча девятьсот сорок восьмой год", "Тысяча девятьсот сорок восьмого года"], explanation: "Un solo anno: в + prepositivo: в … сорок восьмом году." },
    { front: "(1972) — Когда познакомились бабушка и дедушка? В начале…", back: "В начале семидесятых", distractors: ["В начале семидесятые", "В начале семидесятом"], explanation: "в начале + genitivo plurale: семидесятых." },
    { front: "(12.06.1976) — Когда родилась мама?", back: "Двенадцатого июня тысяча девятьсот семьдесят шестого года", distractors: ["Двенадцатое июня тысяча девятьсот семьдесят шестого года", "Двенадцатого июня в тысяча девятьсот семьдесят шестом году"], explanation: "Data completa: tutto al genitivo, senza «в»." },
    { front: "(80-е) — В какие годы мама училась в школе?", back: "В восьмидесятые годы", distractors: ["В восьмидесятом году", "В восьмидесятый год"], explanation: "В какие годы? — в восьмидесятые годы. Si dice anche «в восьмидесятых»." },
    { front: "(1994–1999) — С какого по какой год родители жили в Москве?", back: "С тысяча девятьсот девяносто четвёртого по тысяча девятьсот девяносто девятый год", distractors: ["С тысяча девятьсот девяносто четвёртого по тысяча девятьсот девяносто девятого года", "С тысяча девятьсот девяносто четвёртом по тысяча девятьсот девяносто девятый год"], explanation: "Periodo: с + genitivo … по + accusativo." },
    { front: "(1999) — Когда родители переехали в Италию? В конце…", back: "В конце девяностых", distractors: ["В конце девяностые", "В начале девяностых"], explanation: "в конце + genitivo plurale: девяностых. Il 1999 è la fine del decennio." },
    { front: "(2001) — Ты какого года?", back: "Две тысячи первого", distractors: ["Двухтысячные", "В две тысячи первом"], explanation: "Anno di nascita: genitivo. «Двухтысячные» è il decennio, non l'anno." },
    { front: "(XX в.) — В каком веке родились бабушка, дедушка и мама?", back: "В двадцатом веке", distractors: ["В двадцатый век", "В двадцать первом веке"], explanation: "в + prepositivo: в двадцатом веке." },
    { front: "(2001) — А ты? В каком веке ты родился?", back: "В двадцать первом веке", distractors: ["В двадцатом веке", "В двадцать первый век"], explanation: "Il XXI secolo comincia nel 2001: в двадцать первом веке." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto, città (date verificate): secolo, в начале / в конце, decennio (nuovo) + в … году, с … по … год, data completa (vecchio). Москва 1147, Петербург 27.05.1703, Ленинград 1924–1991, Duomo di Milano 1386, Кремль 1485–1495, метро Милано 1964, метро Москва 1935
// ============================================================
const p8cards = [
    { front: "(XII в.) — В каком веке впервые упоминается Москва?", back: "В двенадцатом веке", distractors: ["В двенадцатый век", "В двенадцатого века"] },
    { front: "(1147) — В каком году Москва впервые упоминается в летописи?", back: "В тысяча сто сорок седьмом году", distractors: ["В тысяча сто сорок седьмой год", "Тысяча сто сорок седьмого года"] },
    { front: "(1703) — Когда основали Петербург? В начале…", back: "В начале восемнадцатого века", distractors: ["В начале восемнадцатом веке", "В начале семнадцатого века"] },
    { front: "(1924–1991) — С какого по какой год Петербург назывался Ленинградом?", back: "С тысяча девятьсот двадцать четвёртого по тысяча девятьсот девяносто первый год", distractors: ["С тысяча девятьсот двадцать четвёртого по тысяча девятьсот девяносто первого года", "С тысяча девятьсот двадцать четвёртый по тысяча девятьсот девяносто первый год"] },
    { front: "(1386) — Когда начали строить Миланский собор? В конце…", back: "В конце четырнадцатого века", distractors: ["В конце четырнадцатом веке", "В конце тринадцатого века"] },
    { front: "(1485–1495) — Когда построили стены Кремля из красного кирпича? В конце…", back: "В конце пятнадцатого века", distractors: ["В конце пятнадцатом веке", "В конце шестнадцатого века"] },
    { front: "(30-е) — Когда открылось московское метро?", back: "В тридцатые годы", distractors: ["В тридцатом году", "В тридцатый год"] },
    { front: "(1964) — В каком году открылось метро в Милане?", back: "В тысяча девятьсот шестьдесят четвёртом году", distractors: ["В тысяча девятьсот шестьдесят четвёртый год", "С тысяча девятьсот шестьдесят четвёртого года"] },
    { front: "(60-е) — Когда в Милане появилось метро?", back: "В шестидесятые годы", distractors: ["В шестидесятом году", "В шестидесятый год"] },
    { front: "(27.05.1703) — Когда основали Петербург? Полная дата.", back: "Двадцать седьмого мая тысяча семьсот третьего года", distractors: ["Двадцать седьмое мая тысяча семьсот третьего года", "Двадцать седьмого мая в тысяча семьсот третьем году"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelAd9() {
    const panel = document.getElementById('panel-ad-9');
    if (!panel) return;

    const container = panel.querySelector('#ad-9-cards-container');
    const prevBtn   = panel.querySelector('#ad-9-deck-prev');
    const nextBtn   = panel.querySelector('#ad-9-deck-next');
    const counterEl = panel.querySelector('#ad-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(90-е) Моя мама жила в Москве ___.", options: ["в девяностом году", "в девяностые годы", "в девяностый год"], answer: "в девяностые годы" },
        { question: "(1990) Мама родилась в тысяча девятьсот ___.", options: ["девяностые годы", "девяностого года", "девяностом году"], answer: "девяностом году" },
        { question: "(XX в.) Феллини жил в ___ веке.", options: ["двадцатом", "двадцатый", "двадцатого"], answer: "двадцатом" },
        { question: "(1991) Мы переехали в Италию в начале ___.", options: ["девяностые", "девяностом", "девяностых"], answer: "девяностых" },
        { question: "(Novecento) — Какой это век? — ___ век.", options: ["Двадцатый", "Девятисотый", "Девятнадцатый"], answer: "Двадцатый" },
        { question: "(1898) Прабабушка родилась в конце ___ века.", options: ["девятнадцатом", "девятнадцатого", "девятнадцатый"], answer: "девятнадцатого" },
        { question: "(XXI в.) — Какой сейчас век? — ___ век.", options: ["Двадцать первого", "Двадцать первый", "Двадцать первом"], answer: "Двадцать первый" },
        { question: "(2001) — Ты какого года? — ___.", options: ["Две тысячи первого", "Двухтысячные", "В две тысячи первом"], answer: "Две тысячи первого" },
        { question: "(1508–1512) Микеланджело расписывал Сикстинскую капеллу с тысяча пятьсот восьмого ___.", options: ["по тысяча пятьсот двенадцатого года", "до тысяча пятьсот двенадцатый год", "по тысяча пятьсот двенадцатый год"], answer: "по тысяча пятьсот двенадцатый год" },
        { question: "(1920-е) Прабабушка жила в Париже в двадцатые годы ___ века.", options: ["прошлого", "прошлом", "прошлый"], answer: "прошлого" }
    ];
    const matchPairs = [
        { left: "(90-е) В какие годы?", right: "в девяностые годы" },
        { left: "(1990) В каком году?", right: "в девяностом году" },
        { left: "(XX в.) В каком веке?", right: "в двадцатом веке" },
        { left: "(XXI в.) Какой сейчас век?", right: "двадцать первый" },
        { left: "(1992) В начале…", right: "в начале девяностых" },
        { left: "(1999) В конце…", right: "в конце девяностых" },
        { left: "(Seicento) Какой это век?", right: "семнадцатый" },
        { left: "(90-е) Какие это были годы?", right: "девяностые" },
        { left: "(2017) С какого года?", right: "с семнадцатого года" },
        { left: "(2005–2012) С какого по какой год?", right: "с пятого по двенадцатый год" }
    ];
    const quizData = [
        { id: "ad9-w1", promptPrefix: "(90-е) Мама жила в Москве в ", promptSuffix: " годы.", answers: ["девяностые"] },
        { id: "ad9-w2", promptPrefix: "(1990) Мама родилась в тысяча девятьсот ", promptSuffix: " году.", answers: ["девяностом"] },
        { id: "ad9-w3", promptPrefix: "(XX в.) Феллини жил в ", promptSuffix: " веке.", answers: ["двадцатом"] },
        { id: "ad9-w4", promptPrefix: "(1991) Мы переехали в Италию в начале ", promptSuffix: ".", answers: ["девяностых", "девяностых годов"] },
        { id: "ad9-w5", promptPrefix: "(80-е) Мама училась в школе ", promptSuffix: ".", answers: ["в восьмидесятые годы", "в восьмидесятые", "в восьмидесятых", "в восьмидесятых годах"] },
        { id: "ad9-w6", promptPrefix: "(1898) Прабабушка родилась в конце ", promptSuffix: " века.", answers: ["девятнадцатого"] },
        { id: "ad9-w7", promptPrefix: "Novecento по-русски — это ", promptSuffix: " век.", answers: ["двадцатый"] },
        { id: "ad9-w8", promptPrefix: "(XXI в.) — Какой сейчас век? — ", promptSuffix: ".", answers: ["двадцать первый", "двадцать первый век"] },
        { id: "ad9-w9", promptPrefix: "(2004) Мы купили квартиру в Милане в начале ", promptSuffix: " века.", answers: ["двадцать первого"] },
        { id: "ad9-w10", promptPrefix: "(1985) — Ты какого года? — ", promptSuffix: ".", answers: ["восемьдесят пятого", "восемьдесят пятого года", "тысяча девятьсот восемьдесят пятого", "тысяча девятьсот восемьдесят пятого года"] }
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
            card.className = 'fca01-card-container ad-9-card';
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
        container.querySelectorAll('.ad-9-card').forEach(card => {
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
                const card    = this.closest('.ad-9-card');
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
        container.querySelectorAll('.ad-9-card').forEach((c, i) => {
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
    'panel-ad-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-ad-01', exercises: p1exercises }),
    'panel-ad-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-ad-02', exercises: p2exercises }),
    'panel-ad-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-ad-03', exercises: p3exercises }),
    'panel-ad-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-ad-04', cards: p4cards }),
    'panel-ad-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-ad-05', cards: p5cards }),
    'panel-ad-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-ad-06', cards: p6cards }),
    'panel-ad-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-ad-07', cards: p7cards }),
    'panel-ad-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-ad-08', cards: p8cards }),
    'panel-ad-9': () => initPanelAd9()
};

initPanelManager({ initializers, enableAccessControl: true });
