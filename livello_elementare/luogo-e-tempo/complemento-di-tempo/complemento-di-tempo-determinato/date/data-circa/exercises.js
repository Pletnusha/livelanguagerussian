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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dc-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dc-01', exercises: p1exercises }),
    'panel-dc-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dc-02', exercises: p2exercises }),
    'panel-dc-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dc-03', exercises: p3exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
