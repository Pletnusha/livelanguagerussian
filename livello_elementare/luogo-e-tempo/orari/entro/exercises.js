import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «К трём» — scadenza: к + dativo (entro), in alternativa a до + genitivo (fino a)
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.
// Convenzioni: «(entro 15:00)» = scadenza → к; «(fino alle 20:00)» = fino a → до; «≈» = ora approssimativa.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: к / к ↔ до / полдень, полночь (nuovo) + около / periodo / momento / без (vecchio)
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 15:00) Документы нужно сдать {{1}}.",
        words: ["к три", "к трём", "к трёх"],
        correctAnswers: { 1: "к трём" },
        explanation: "Scadenza (entro): к + dativo: три → трём."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈19:00) Гости придут {{1}}.",
        words: ["около семь", "около в семь", "около семи"],
        correctAnswers: { 1: "около семи" },
        explanation: "Ora approssimativa: около + genitivo: семь → семи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–18:00) Офис работает {{1}}.",
        words: ["с девяти до шести", "с девяти по шесть", "с девяти к шести"],
        correctAnswers: { 1: "с девяти до шести" },
        explanation: "Periodo con le ore: с + genitivo … до + genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 13:00) Надо закончить отчёт {{1}}.",
        words: ["к час", "к часу", "к часа"],
        correctAnswers: { 1: "к часу" },
        explanation: "к + dativo: час → часу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:30) — Во сколько начинается фильм? — {{1}}.",
        words: ["В половине седьмого", "К половине седьмого", "В половину седьмого"],
        correctAnswers: { 1: "В половине седьмого" },
        explanation: "Во сколько? = il momento esatto: в половине. К vuol dire «entro»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 18:30) Приходи {{1}}.",
        words: ["к половина седьмого", "к половину седьмого", "к половине седьмого"],
        correctAnswers: { 1: "к половине седьмого" },
        explanation: "к + dativo: половина → половине."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(fino alle 20:00) Магазин работает {{1}}.",
        words: ["к восьми", "до восемь", "до восьми"],
        correctAnswers: { 1: "до восьми" },
        explanation: "«Fino a»: до + genitivo. К vuol dire «entro», non «fino a»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 12:00) Обед будет готов {{1}}.",
        words: ["к полудню", "к полдню", "к полудня"],
        correctAnswers: { 1: "к полудню" },
        explanation: "Dativo irregolare: полдень → полудню."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(7:50) — Сколько времени? — {{1}}.",
        words: ["К без десяти восемь", "Без десяти восемь", "В без десяти восемь"],
        correctAnswers: { 1: "Без десяти восемь" },
        explanation: "Che ore sono? Con без niente preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 0:00) Мы вернёмся {{1}}.",
        words: ["к полночь", "к полуночи", "к полуночью"],
        correctAnswers: { 1: "к полуночи" },
        explanation: "Dativo irregolare: полночь → полуночи (come il genitivo)."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-ent-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-ent-01', exercises: p1exercises }),
};

initPanelManager({ initializers, enableAccessControl: true });
