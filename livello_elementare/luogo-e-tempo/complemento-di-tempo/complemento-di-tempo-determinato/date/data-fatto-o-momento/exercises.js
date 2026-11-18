import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Какое сегодня число?» (blocco Даты) — fatto ↔ momento con le date:
// Какое сегодня число? — Восемнадцатое ноября (ordinale neutro, nominativo) ↔ Когда? — Восемнадцатого ноября (genitivo, senza preposizione).
// Il mese è sempre al genitivo (ноября). Con il giorno della settimana: в субботу, двадцать первого.
// Solo giorno e mese: gli anni vanno nel blocco «Годы». Date tra parentesi in cifre: (18.11). Niente suggerimenti di significato.
// Storia: calendario di famiglia e feste (дни рождения, свадьба, 1 января, 8 марта, 9 мая, 1 сентября, 31 декабря).
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
