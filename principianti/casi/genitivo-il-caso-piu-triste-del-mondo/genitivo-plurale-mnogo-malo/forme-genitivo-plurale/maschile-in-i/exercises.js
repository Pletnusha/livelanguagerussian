import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «МУЖСКОЙ РОД НА -Й» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Maschile in -й → -ев: трамвай → трамваев, музей → музеев, край → краёв.
// Decisione PM 23.11.2026: anche parole fuori dai temi Город/Дом/Продукты (героев, случаев, комментариев)
// e maschili in -ц senza accento sulla desinenza (месяц → месяцев, иностранец → иностранцев).
// Fonte: iCloud Курсы: MICRO/Micro A2_/грамматика/il genitivo plurale/
// Fonte: iCloud Курсы: elemntare/А1_МОДУЛЬ_2/город/ (Москва, Санкт-Петербург, Мой родной город — Тверь)

// ============================================================
// PANEL 1 — DragDrop · public · «В ГОРОДЕ» · solo -ев
// N. 1: originale PM («Мой родной город — Тверь»); n. 2–7: frasi proposte e approvate dalla PM.
// Distrattori: gen. sing. (senso) + «-ов» al posto di «-ев» (forma).
// Approvato dalla PM il 23.11.2026.
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Тверь — старинный город. Здесь много {{1}}.",
        words: ["музея", "музеев", "музеов"],
        correctAnswers: { 1: "музеев" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in -й: музей → музеев (non «музеов»)."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В Петербурге много больших {{1}}, за неделю всё не посмотреть.",
        words: ["музеев", "музеов", "музея"],
        correctAnswers: { 1: "музеев" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in -й: музей → музеев (non «музеов»)."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Раньше в Москве было много {{1}}, а сейчас больше автобусов.",
        words: ["трамвая", "трамваов", "трамваев"],
        correctAnswers: { 1: "трамваев" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in -й: трамвай → трамваев (non «трамваов»)."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Вечером на этой линии мало {{1}}, приходится долго ждать.",
        words: ["трамваов", "трамвая", "трамваев"],
        correctAnswers: { 1: "трамваев" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in -й: трамвай → трамваев (non «трамваов»)."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Летом в центре будет много {{1}}: туристы приезжают со всего мира.",
        words: ["иностранцев", "иностранца", "иностранцов"],
        correctAnswers: { 1: "иностранцев" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in -ц senza accento sulla desinenza: иностранец → иностранцев. La -е- cade e si scrive -ев, non -ов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "Зимой в нашем городе мало {{1}}.",
        words: ["иностранца", "иностранцев", "иностранцов"],
        correctAnswers: { 1: "иностранцев" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in -ц senza accento sulla desinenza: иностранец → иностранцев. La -е- cade e si scrive -ев, non -ов."
    },
    {
        instruction: "Scegli la forma giusta dopo много / мало.",
        text: "В Сочи много {{1}} у моря.",
        words: ["санаториев", "санаториов", "санатория"],
        correctAnswers: { 1: "санаториев" },
        explanation: "Dopo много / мало si usa il genitivo plurale. Maschile in -ий: санаторий → санаториев (non «санаториов»)."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-gpev-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-gpev-01', exercises: p1exercises }),
};

initPanelManager({ initializers, enableAccessControl: true });
