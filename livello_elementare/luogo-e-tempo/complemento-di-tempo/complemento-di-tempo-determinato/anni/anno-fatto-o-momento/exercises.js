import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Какой сейчас год?» (blocco Годы) — fatto ↔ momento con gli anni:
// Какой сейчас год? — две тысячи двадцать шестой год (ordinale maschile, nominativo) ↔ В каком году? — в две тысячи двадцать шестом году (в + prepositivo).
// Si declina SOLO l'ultima parola; «в году» (non «в годе»); 2000 → двухтысячный / в двухтысячном; третий → третьем; сороковой.
// Anche: в этом / в прошлом / в следующем году; colloquiale «в двадцать шестом году», «в девяностом году».
// Solo date e anni (niente ore). Anni tra parentesi in cifre: (2026). Date storiche verificate.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
