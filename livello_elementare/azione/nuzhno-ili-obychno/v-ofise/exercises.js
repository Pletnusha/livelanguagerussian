import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «В офисе: нужно или обычно» — terza pagina del blocco «Нужно или обычно» (piano approvato dalla PM 20.11.2026).
// Modello: scheda PDF «В офисе — нужно обычно — esercizi» (Desktop/LLR). Solo frasi originali: «нужно обычно в офисе» (Всё успеть),
// «в офисе — срочно нужно» (dialoghi), «чем ты занимаешься на работе», MICRO «в офисе»; vecchio materiale = pagina «В университете».
// Coppie nuove: начинать / начать, встречаться / встретиться (с + strumentale), назначать / назначить встречу (кому? dativo).
// Dopo «нужно» mai l'infinito imperfettivo come sbagliata («нужно начинать подготовку» è corretto): sbagliate = forme coniugate.
// Niente domande tra parentesi (regola 7.1). Niente «как обычно встретишься…» (futuro perfettivo ironico).
// Errore nell'originale: «Я обычно заканчивают» → заканчиваю.
// Schema: 1 D&D verbo + che cosa (+ vecchio, con spiegazioni) · 2 D&D parole · 3 D&D quando / ogni quanto
//         4 FC обычно o нужно (con spiegazioni) · 5 FC tre forme · 6 FC finisci la frase (misto) · 7 FC inizio e fine (con spiegazioni) · 8 FC chi fa che cosa (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
