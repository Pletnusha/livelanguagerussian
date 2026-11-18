import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Между пятью и семью» — fascia oraria: между + strumentale (un momento dentro l'intervallo, tra le 5 e le 7)
// ↔ с … до + genitivo (tutto il periodo, dalle 5 alle 7). Sceglie il verbo: durata (работает, открыт, идёт) → с … до;
// momento (позвоните, приходите, курьер приедет) → между.
// Numerali allo strumentale: двумя, тремя, четырьмя, пятью … двенадцатью, часом. ATTENZIONE: восемью e восьмью sono ENTRAMBE corrette.
// Anche tra eventi: между уроками, между обедом и ужином. Niente anni (blocco «Даты»). Niente suggerimenti di significato.
// Storia: consegne e appuntamenti (курьер приедет между двумя и четырьмя, звоните между девятью и десятью).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
