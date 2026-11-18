import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «К пятому мая» (blocco Даты) — scadenza: к + dativo (к пятому мая, entro il 5) ↔ до + genitivo (до пятого, fino al 5).
// Senza suggerimenti: К какому числу? + verbi di scadenza (сдать, закончить, быть готовым) → к; До какого числа? + verbi di durata (в отпуске, живу, открыт) → до.
// Con i verbi di scadenza «до пятого» è anche corretto: non metterlo tra i distrattori in quei casi.
// Dativo degli ordinali: к пятому, к первому, к третьему, ко второму (к → ко davanti a «вт»); к концу / к началу месяца; к Новому году, к восьмому марта.
// Solo date (niente ore). Storia: scadenze e preparativi (документы, виза, ремонт к Новому году, подарки к восьмому марта).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
