import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «До и после» — prima e dopo: до + genitivo ↔ после + genitivo (eventi e ore)
// Alternativa unica della pagina: до ↔ после. «через» (tra un'ora) e «перед» (poco prima) hanno pagine proprie.
// Niente suggerimenti di significato: l'ordine degli eventi lo dà il contesto russo (сначала … потом) o un orario.
// Storia: cartelli, regole, istruzioni (до еды / после еды, после 23:00 не шуметь).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
