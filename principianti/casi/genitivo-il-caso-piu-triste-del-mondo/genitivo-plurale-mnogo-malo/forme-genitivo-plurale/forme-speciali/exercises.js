import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «ОСОБЫЕ ФОРМЫ» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Forme particolari e sostantivi indeclinabili: человек → людей, ребёнок → детей, друг → друзей · пальто, кофе.
// Fonte: iCloud Курсы: principianti/A1_modulo1/РОДИТЕЛЬНЫЙ ПАДЕЖ МНОЖЕСТВЕННОЕ ЧИСЛО/ (многомало*.pdf) · elemntare/А1_МОДУЛЬ_2/много_мало.pdf.
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
