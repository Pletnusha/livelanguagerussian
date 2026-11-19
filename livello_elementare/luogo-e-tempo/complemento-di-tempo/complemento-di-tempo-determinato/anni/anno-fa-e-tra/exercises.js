import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Год назад, через год» (blocco Годы) — tempo contato da oggi (adesso = 2026): назад (passato) ↔ через (futuro).
// Ordine come in italiano: два года назад = due anni fa; через два года = tra due anni. Il senso dal tempo del verbo (переехал → назад, переедем → через) o da (2024; сейчас 2026).
// Difficoltà principale: год / года / лет (1, 21 → год; 2–4, 22 → года; 5–20, 25, 100 → лет). Через полгода come «через полчаса».
// «Год назад» ≠ «в прошлом году» (l'anno solare 2025); «через год» ≠ «в следующем году». «Тому назад», «спустя» non si insegnano; «после года» non è «tra un anno».
// Solo nei pannelli misti: через два года после свадьбы. Vecchio materiale: в … году, с … года, до / после, около, к … году, в прошлом году, decenni.
// Solo anni (niente ore). Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
