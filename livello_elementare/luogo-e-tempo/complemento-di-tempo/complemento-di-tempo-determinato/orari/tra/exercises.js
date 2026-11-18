import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Через час» — tra un'ora: через + accusativo (intervallo da adesso) ↔ после + genitivo (dopo un evento / un'ora dell'orologio)
// Trappola: «после часа» = dopo le 13, NON «tra un'ora». Forme: через минуту / неделю; через два часа / пять часов; через полчаса.
// Niente suggerimenti di significato: lo dice il contesto russo (сейчас 14:00, урок в 15:00 → через час).
// Storia: telefono e messaggi, attese (буду через пять минут, перезвоню через час, поезд через полчаса, приходите через неделю).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
