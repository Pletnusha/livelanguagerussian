import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Между первым и пятым» (blocco Даты, ultima) — между + strumentale degli ordinali (un momento dentro l'intervallo)
// ↔ с … по (tutto il periodo). Evento unico al passato (доставили, позвонил, познакомились) → между; durata (работает, открыто, в отпуске) → с … по.
// Con il futuro / le «finestre» (доставят …) vanno bene entrambe: evitarle.
// Strumentale: первым, вторым, третьим, пятым, двадцать первым; mese al genitivo alla fine. Anche tra feste: между Новым годом и Рождеством.
// Solo date (niente ore). Il quiz 9 ripassa tutto il blocco Даты.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
