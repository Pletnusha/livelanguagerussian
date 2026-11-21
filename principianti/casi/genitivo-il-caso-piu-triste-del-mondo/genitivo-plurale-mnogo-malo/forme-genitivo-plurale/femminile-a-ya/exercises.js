import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «ЖЕНСКИЙ РОД НА -А / -Я» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Femminile in -а / -я → desinenza zero: улица → улиц, гостиница → гостиниц, кастрюля → кастрюль.
// Fonte: iCloud Курсы: principianti/A1_modulo1/РОДИТЕЛЬНЫЙ ПАДЕЖ МНОЖЕСТВЕННОЕ ЧИСЛО/ (многомало*.pdf) · elemntare/А1_МОДУЛЬ_2/много_мало.pdf.
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
