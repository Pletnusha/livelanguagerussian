import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Дома: супер мама» — quarta pagina del blocco «Нужно или обычно» (piano approvato dalla PM 20.11.2026).
// Solo due forme: presente imperfettivo (обычно / всегда / два раза в неделю) e нужно + infinito perfettivo. Niente passato / futuro, nemmeno nel test.
// Fonti (originali): «список дел молодой мамы», «cсупер мама планы на день» (5 dialoghi), «нужно-обычно Дома_1»; vecchio = pagine «В университете», «В офисе».
// Nuova difficoltà: come si forma il perfettivo — по- (постирать, погладить, почистить, позавтракать, позвонить), вы- (вымыть), при- (приготовить),
// с- (съесть, сходить), у- (убрать, убраться), altra radice (встать / вставать, лечь / ложиться, купить / покупать); riflessivi (умыться, проснуться, убраться).
// Esclusi: «Андрей дома один» (нужно + imperfettivo per azioni regolari — livello successivo), futuro / condizionale («даст», «ляжешь», «хорошо бы»).
// Dopo «нужно» mai l'infinito imperfettivo come sbagliata. Niente domande tra parentesi (regola 7.1).
// Schema: 1 D&D lista (+ vecchio, con spiegazioni) · 2 D&D faccende · 3 D&D quando / ogni quanto · 4 FC обычно o нужно (con spiegazioni)
//         5 FC tre forme · 6 FC finisci la frase (misto) · 7 FC mattina «Уже!» (con spiegazioni) · 8 FC come si forma il perfettivo (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
