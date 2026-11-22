import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «МУЖСКОЙ РОД НА -Й» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Maschile in -й → -ев: трамвай → трамваев, музей → музеев, край → краёв.
// Fonte: iCloud Курсы: MICRO/Micro A2_/грамматика/il genitivo plurale/
// Fonte: iCloud Курсы: elemntare/А1_МОДУЛЬ_2/город/ (Москва, Санкт-Петербург, Мой родной город — Тверь)
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
