import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Список дел студента» (blocco «Нужно или обычно», all'università) — la prima delle quattro.
// Alternativa: нужно + perfettivo all'infinito (una cosa da fare, con risultato) ↔ обычно / всегда / часто / каждую неделю + imperfettivo al presente (abitudine).
// Coppie: писать / написать, читать / прочитать, учить / выучить, готовить / подготовить, выполнять / выполнить, брать / взять.
// Ogni frase con «нужно» ha un segnale di risultato: scadenza (к понедельнику, к завтрашнему семинару) + oggetto concreto o numero (эту статью, двадцать слов).
// Niente «мне сейчас нужно писать» (processo): «нужно + НСВ» è corretto e va alla pagina 4. Niente futuro perfettivo come risposta giusta.
// Frequenza qui: обычно, всегда, часто, каждую неделю, к каждому занятию. Никогда / редко / иногда — pagina 2. Сессия, экзамены — pagina 3.
// Vecchio materiale (pannelli misti): хочу + СВ, нравится / люблю + НСВ (pagine «Обычно или хочу», «Нравится или хочу»), к + dativo di scadenza.
// Carte: 2 sbagliate — senso (СВ al posto di НСВ o viceversa) + forma (persona sbagliata). Risposta giusta in posizione casuale.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto, lista di cose da fare all'università: нужно + perfettivo / обычно + imperfettivo (nuovo) + нравится, хочет, не любит + aspetto, к + dativo (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "К понедельнику Лене нужно {{1}} доклад и отправить его профессору.",
        words: ["писать", "напишет", "написать"],
        correctAnswers: { 1: "написать" },
        explanation: "Una cosa da finire (poi lo manda al professore): нужно + perfettivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно Лена {{1}} доклад раз в месяц.",
        words: ["пишет", "пишем", "напишет"],
        correctAnswers: { 1: "пишет" },
        explanation: "Обычно = abitudine: imperfettivo al presente."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Лене нравится {{1}} статьи по экономике.",
        words: ["прочитать", "читать", "читает"],
        correctAnswers: { 1: "читать" },
        explanation: "Dopo «нравится» si usa l'imperfettivo: un'attività che piace."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сегодня Кате нужно {{1}} у Тимура конспект лекции.",
        words: ["брать", "взять", "возьмёт"],
        correctAnswers: { 1: "взять" },
        explanation: "Una volta, oggi: нужно + perfettivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Катя обычно {{1}} конспекты у Тимура.",
        words: ["возьмёт", "берут", "берёт"],
        correctAnswers: { 1: "берёт" },
        explanation: "Обычно = abitudine: imperfettivo al presente."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Андрей хочет {{1}} эту книгу за выходные.",
        words: ["прочитать", "читать", "прочитает"],
        correctAnswers: { 1: "прочитать" },
        explanation: "Dopo «хочет» + risultato (tutto il libro in un weekend): perfettivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "К следующему занятию студентам нужно {{1}} всё задание.",
        words: ["выполнять", "выполнят", "выполнить"],
        correctAnswers: { 1: "выполнить" },
        explanation: "Tutto il compito per la prossima lezione: нужно + perfettivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы {{1}} новые слова к каждому занятию.",
        words: ["учим", "учат", "выучим"],
        correctAnswers: { 1: "учим" },
        explanation: "«К каждому занятию» = ogni volta, abitudine: imperfettivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Женя не любит {{1}} презентации.",
        words: ["подготовить", "готовить", "готовит"],
        correctAnswers: { 1: "готовить" },
        explanation: "Dopo «не любит» si usa l'imperfettivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Профессор ждёт доклад в понедельник утром, поэтому его нужно написать {{1}}.",
        words: ["к понедельнику", "к понедельника", "после понедельника"],
        correctAnswers: { 1: "к понедельнику" },
        explanation: "Entro lunedì: к + dativo."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-uli-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-uli-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
