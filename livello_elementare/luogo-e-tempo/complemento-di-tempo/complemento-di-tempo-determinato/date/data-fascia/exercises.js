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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-df-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-df-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
