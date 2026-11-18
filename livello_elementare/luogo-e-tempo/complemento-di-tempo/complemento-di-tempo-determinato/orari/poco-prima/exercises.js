import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Перед обедом» — poco prima: перед + strumentale (subito prima di un evento) ↔ до + genitivo (prima, in qualsiasi momento; con le ore SOLO до)
// Regola per italiani: con l'orologio solo «до шести», mai «перед шестью»; перед solo con eventi (перед обедом, перед сном).
// Anche «за + accusativo … до + genitivo»: за час до урока (un'ora prima della lezione), за пять минут до начала.
// Niente suggerimenti di significato: lo dice il contesto russo (прямо / сразу / за минуту → перед; утром … вечером → до).
// Storia: abitudini e routine (перед сном читаю, перед едой мою руки, перед выходом проверяю ключи).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
