import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Прийти или уйти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// arrivare ↔ andarsene — при- (arrivo, в / на + acc., к + dat.) ↔ у- (lasciare un luogo: из / с / от + gen.; anche уйти домой, в магазин),
// con entrambe le coppie aspettuali: приходить / прийти ↔ уходить / уйти.
// Trappole: venire = прийти («Придёшь к нам?»); Me ne vado! = Я ухожу!; uscire (вышел) ≠ andarsene (ушёл);
// il treno parte = поезд уходит; lasciare il lavoro / i genitori = уйти с работы / от родителей. Forme: пришёл, приду (non «прийду»).
// Verificato su Gramota.ru (БТС): уйти в магазин, домой, за хлебом; поезд ушёл; уйти с работы, от родителей; прийти в гости, к другу.
// Solo frasi originali dei materiali «Курсы»; frasi nuove solo con il permesso della PM. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC misto (pagina 1: вышел ↔ ушёл) · Quiz (panel-aa-9)
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
