import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «МНОЖЕСТВЕННОЕ ЧИСЛО НА -ЬЯ» (Principianti · Casi · Родительный падеж · Много или мало · Формы):
// Plurale in -ья → -ьев: стул → стулья → стульев, дерево → деревья → деревьев.
// Fonte: indicazione della PM (21.11.2026)
// Scheletro: i dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
