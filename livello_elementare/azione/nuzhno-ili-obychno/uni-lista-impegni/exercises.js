import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Список дел студента» (blocco «Нужно или обычно», all'università) — la prima delle quattro.
// Alternativa: нужно + perfettivo all'infinito (una cosa da fare, con risultato) ↔ обычно / всегда / часто / каждую неделю + imperfettivo al presente (abitudine).
// Coppie: писать / написать, читать / прочитать, учить / выучить, готовить / подготовить, выполнять / выполнить, брать / взять.
// Ogni frase con «нужно» ha un segnale di risultato: scadenza (к понедельнику, к завтрашнему семинару) + oggetto concreto o numero (эту статью, двадцать слов).
// Niente «мне сейчас нужно писать» (processo): «нужно + НСВ» è corretto e va alla pagina 4. Niente futuro perfettivo come risposta giusta.
// Frequenza qui: обычно, всегда, часто, каждую неделю, к каждому занятию. Никогда / редко / иногда — pagina 2. Сессия, экзамены — pagina 3.
// Vecchio materiale (pannelli misti): хочу + СВ, нравится / люблю + НСВ (pagine «Обычно или хочу», «Нравится или хочу»), к + dativo di scadenza.
// Carte: 2 sbagliate — senso (СВ al posto di НСВ o viceversa) + forma (persona sbagliata). Risposta giusta in posizione casuale.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
