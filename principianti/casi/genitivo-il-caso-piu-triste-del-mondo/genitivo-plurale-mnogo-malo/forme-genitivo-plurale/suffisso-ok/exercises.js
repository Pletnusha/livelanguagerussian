import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «СУФФИКС -К-: -ОК» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Femminile con suffisso -к- → -ок: площадка → площадок, остановка → остановок, тетрадка → тетрадок.
// Fonte: iCloud Курсы: principianti/A1_modulo1/РОДИТЕЛЬНЫЙ ПАДЕЖ МНОЖЕСТВЕННОЕ ЧИСЛО/ (многомало*.pdf) · elemntare/А1_МОДУЛЬ_2/много_мало.pdf.
// Fonte: iCloud Курсы: MICRO/Micro A2_/грамматика/il genitivo plurale/.
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
