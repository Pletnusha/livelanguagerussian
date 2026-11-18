import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «С 2010 по 2020 год» (blocco Годы, complemento di tempo continuato) — periodo con gli anni:
// с + genitivo (с две тысячи десятого года: cambia solo l'ultima parola) … по + accusativo (по две тысячи двадцатый год = compreso)
// ↔ до + genitivo (до две тысячи двадцатого года = il 2020 escluso). «С какого года?» — с … года = dal (Я живу в Италии с две тысячи пятнадцатого года).
// Trappola: «по двадцатый год», non «по двадцатого года». Forma breve: с десятого по двадцатый год.
// «До 2000 года» da solo (= prima del) e «между … годами» → pagina «До и после 2000 года».
// Solo date e anni (niente ore). Vecchio materiale: в … году, data completa con l'anno, «Ты какого года?», с первого по пятое, с понедельника по пятницу.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
