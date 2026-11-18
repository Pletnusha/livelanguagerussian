import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «В девяностые годы» (blocco Годы) — l'epoca, non l'anno: decennio ↔ secolo.
// Decennio: в девяностые годы (в + accusativo plurale) ↔ в девяностом году (1990, un solo anno). Fatto: Это были девяностые.
// Variante «в девяностых (годах)» = norma anche questa: accettata nelle risposte scritte, mai come distrattore; «в девяностые года» = colloquiale, mai distrattore.
// Secolo: в двадцатом веке (в + prepositivo); Какой сейчас век? — Двадцать первый. Novecento = двадцатый век (non «девятисотый»).
// В начале / в конце (genitivo): в начале девяностых, в конце девятнадцатого века. «прошлого века» per distinguere gli anni Venti del Novecento.
// Solo anni ed epoche (niente ore). Vecchio materiale: в … году, с … по … год, с … года, data completa, «Ты какого года?».
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
