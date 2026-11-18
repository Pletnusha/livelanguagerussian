import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «До и после пятого» (blocco Даты) — до пятого (prima del 5) ↔ после пятого (dopo il 5), genitivo dell'ordinale.
// La forma è nota (genitivo come «пятого мая»): la difficoltà è il senso. Qui «до» = prima di (sulla pagina «К пятому мая» era fino a); lo dice il verbo/contesto.
// Anche feste per nome (до Нового года, после Рождества, после майских праздников) e con «число» (до пятнадцатого числа).
// Solo date (niente ore). Senza suggerimenti: сначала … потом; открывается / зарплата пятого → до / после.
// Storia: calendario di famiglia e di lavoro (зарплата, счета, диета после Нового года, работа до отпуска).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
