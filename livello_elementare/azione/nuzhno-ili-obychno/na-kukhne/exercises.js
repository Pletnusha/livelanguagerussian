import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «На кухне: Андрей ждёт гостей» — quinta pagina del blocco «Нужно или обычно» (piano approvato dalla PM 20.11.2026).
// Solo due forme: presente imperfettivo (обычно / по воскресеньям) e нужно + infinito perfettivo. Niente passato / futuro, nemmeno nel test.
// Fonti: testo «Когда ждёшь гостей» (Андрей, A1_MODULO 3, p. 12) + scheda «Приготовить что? где?» (p. 14 / «РЕЗАТЬ ГДЕ ПОЛОЖИТЬ КУДА»).
// La scheda ha solo coppie + что? + где?: la PM ha permesso di costruire frasi «coppia + oggetto + dove» con Андрей come soggetto, niente di più.
// Coppie: резать / нарезать овощи (на столе), мыть / вымыть картофель (в раковине), чистить / почистить морковь (в раковине),
// варить / сварить, отварить мясо (в кастрюле), жарить / обжарить рыбу (на сковородке), тушить / потушить рыбу (в кастрюле), кипятить / вскипятить воду (в чайнике).
// Due perfettivi (сварить / отварить, обжарить / пожарить): l'altro perfettivo mai tra le sbagliate; nel test si accettano tutti e due.
// «Нарезаю» (imperfettivo di нарезáть) mai come sbagliata: per l'abitudine режу / режет.
// Esclusi: куда? / откуда? (положить, поставить, взять, добавить соль в салат, «разобрать сумки» p. 13 — verbi di posizione, altro blocco),
// «чтобы» e «нужно идти» solo come contesto, «оказалось» (passato).
// Dopo «нужно» mai l'infinito imperfettivo come sbagliata. Niente domande tra parentesi (regola 7.1).
// Schema: 1 D&D lista della spesa (con spiegazioni) · 2 D&D verbo + prodotto · 3 D&D dove / quando · 4 FC обычно o нужно (con spiegazioni)
//         5 FC tre forme · 6 FC finisci la frase (misto) · 7 FC «Сегодня гости» dal testo (con spiegazioni) · 8 FC come si forma il perfettivo (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
