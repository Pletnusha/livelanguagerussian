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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-ad-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-ad-01', exercises: p1exercises }),
    'panel-ad-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-ad-02', exercises: p2exercises }),
    'panel-ad-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-ad-03', exercises: p3exercises }),
    'panel-ad-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-ad-04', cards: p4cards }),
    'panel-ad-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-ad-05', cards: p5cards })
};

initPanelManager({ initializers, enableAccessControl: true });
