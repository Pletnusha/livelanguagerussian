import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Перейти, пройти, обойти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// attraversare = перейти (дорогу, мост, через дорогу) · passare = пройти (через парк, мимо, вдоль, прямо, N метров) · girare intorno / evitare = обойти (дом, лужу; обошли все магазины),
// con le coppie aspettuali переходить / перейти, проходить / пройти, обходить / обойти.
// Trappole: перейти дорогу (da un lato all'altro) ≠ пройти через парк (attraverso l'interno); пройти мимо ≠ зайти; «Как пройти к…?»; «Проходите!» = invito.
// Sensi figurati frequenti (PM 22.11): платёж не прошёл, всё прошло хорошо, прошло несколько лет, как прошёл день, голова прошла, перейти на ты, перейти на другую работу, пройти собеседование, обойти проблему.
// Esclusi: переехать / перебежать / проехать… → «Специальные»; «проходили по парку целый час» (проходить СВ di durata); figurati rari (обойти закон); за- «dietro».
// Regola PM: solo frasi con contesto o marcatore; niente carte con sole forme; test «match» frase ↔ forma; ввод senza parentesi, tutte le risposte giuste. Lessico utile e frequente.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC sensi figurati · Quiz (panel-pp-9)

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
