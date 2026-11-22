import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «ШИПЯЩАЯ НА КОНЦЕ» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Sostantivi con sibilante finale → -ей: нож → ножей, овощ → овощей, ключ → ключей.
// Fonte: iCloud Курсы: principianti/A1_modulo1/РОДИТЕЛЬНЫЙ ПАДЕЖ МНОЖЕСТВЕННОЕ ЧИСЛО/ (многомало*.pdf) · elemntare/А1_МОДУЛЬ_2/много_мало.pdf.
// Fonte: iCloud Курсы: INSTAGRAMM/грамматика/il genitivo plurale ь шипящие.png
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
