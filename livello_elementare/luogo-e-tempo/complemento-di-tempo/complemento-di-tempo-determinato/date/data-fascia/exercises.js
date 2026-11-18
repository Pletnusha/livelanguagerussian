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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-df-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-df-01', exercises: p1exercises }),
    'panel-df-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-df-02', exercises: p2exercises }),
    'panel-df-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-df-03', exercises: p3exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
