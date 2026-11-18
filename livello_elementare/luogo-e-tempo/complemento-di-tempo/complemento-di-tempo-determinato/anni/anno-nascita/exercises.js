import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Когда ты родился?» (blocco Годы) — solo l'anno (в тысяча девятьсот девяностом году, в + prepositivo)
// ↔ data completa (пятого марта тысяча девятьсот девяностого года: tutto al genitivo, senza preposizione).
// Anche mese + anno: в марте девяностого года; «Ты какого года?» — «Девяностого».
// Date di nascita verificate (Пушкин 6.6.1799 e Толстой 9.9.1828, Чайковский 7.5.1840 = nuovo stile; Гагарин 9.3.1934; Леонардо 15.4.1452; Феллини 20.1.1920; Софи Лорен 20.9.1934).
// Solo date e anni (niente ore). Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
