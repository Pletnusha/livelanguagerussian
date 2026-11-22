import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «СРЕДНИЙ РОД НА -О / -Е» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Neutro in -о / -е → desinenza zero (ma: море → морей): озеро → озёр, окно → окон, полотенце → полотенец.
// Fonte: iCloud Курсы: principianti/A1_modulo1/РОДИТЕЛЬНЫЙ ПАДЕЖ МНОЖЕСТВЕННОЕ ЧИСЛО/ (многомало*.pdf) · elemntare/А1_МОДУЛЬ_2/много_мало.pdf.
// Fonte: indicazione della PM (21.11.2026)
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
