import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Список дел студента: нужно было или обычно» — seconda pagina del blocco «Нужно или обычно» (piano approvato dalla PM 19.11.2026).
// Al passato: (кому) нужно было + infinito perfettivo (una cosa da fare) ↔ обычно / всегда / редко / часто + passato imperfettivo (abitudine).
// Nuova difficoltà: genere e numero al passato (он читал, она учила, мы писали, я — Лена — брала); «нужно было», mai «нужна была / нужен был».
// Fonti: PDF «список дел студента», «учиться прошедшее» (solo domande senza учиться / заниматься), testo su Тимур; frasi della pagina 1 portate al passato (permesso PM).
// Mai l'infinito imperfettivo come sbagliata dopo «нужно было» (rimprovero: «Нужно было готовиться заранее!» è corretto). Perfettivo al passato solo come sbagliata.
// Errore nell'originale: «Обычно я беру конспект…» nella lista al passato → брал / брала.
// Schema: 1 D&D lista (+ vecchio, con spiegazioni) · 2 D&D он / она / мы · 3 D&D quando / ogni quanto
//         4 FC нужно было o обычно (con spiegazioni) · 5 FC tre forme · 6 FC allora e adesso (misto) · 7 FC domande → risposte (con spiegazioni) · 8 FC Тимур (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
