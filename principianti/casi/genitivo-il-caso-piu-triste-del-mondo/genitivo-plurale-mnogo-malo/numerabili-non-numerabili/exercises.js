import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Исчисляемые и неисчисляемые» (Principianti · Casi · Родительный падеж · Много или мало):
// много / мало + numerabili → genitivo plurale (много огурцов, яблок);
// non numerabili → genitivo singolare (много моркови, лука, клубники).
// Definizione della PM (21.11.2026): numerabili = parole che hanno il plurale; tutte le altre sono non numerabili.
// Ordine: prima le forme del genitivo plurale (hub «Формы»), poi questa pagina.
// Fonte: iCloud Курсы: principianti/A1_modulo1/РОДИТЕЛЬНЫЙ ПАДЕЖ МНОЖЕСТВЕННОЕ ЧИСЛО/многомало 1.pdf (testo «Рынок»).
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
