import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Числа двадцатого» (blocco Даты) — data esatta ↔ data approssimativa:
// двадцатого (esatto) ↔ около двадцатого / числа двадцатого (inversione colloquiale, come «часа в три») · в начале / в середине / в конце месяца.
// Trappole: «около пяти» = verso le cinque (ore), con le date «около пятого»; «около двадцатое», «числа двадцатое» sono errori.
// Solo date (niente ore). Il senso lo dà il contesto russo (точно не знаю / примерно ↔ точно / по договору).
// Storia: piani e accordi (зарплата, переезд, ремонт, приезд родственников, отпуск).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
