import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «С первого по пятое» (blocco Даты, complemento di tempo continuato) — periodo con le date:
// с + genitivo (с первого) … по + accusativo (по пятое = compreso) ↔ до + genitivo (до пятого = il 5 escluso). Norma Gramota: «по» con le date = incluso.
// Trappola: «по пятое», non «по пятого» (accusativo del neutro = nominativo). Mese sempre al genitivo: с двадцать пятого декабря по восьмое января.
// Solo date (niente ore). Vecchio materiale: fatto/momento con le date, с понедельника по пятницу.
// Storia: ferie, vacanze, mostre, chiuso per lavori, feste di Capodanno.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
