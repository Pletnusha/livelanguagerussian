import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Дойти или зайти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// arrivare fino a ↔ passare da — до- (punto finale del percorso: до + gen.) ↔ за- (visita breve, di passaggio: в / на + acc., к + dat., за + strum.; «по дороге»),
// con entrambe le coppie aspettuali: доходить / дойти ↔ заходить / зайти.
// Trappole (quiz della PM): «зайти до магазина» ✗ → зайти в магазин; «дойти до бабушки» = arrivarci a piedi, non farle visita; «Нам пора доходить!» ✗;
// зайти (visita breve) ≠ войти (attraversare la soglia); «Заходи!» = invito → НСВ.
// Esclusi: за- «dietro» (зашли за угол, солнце зашло) → «Обход и перемена»; доехать / заехать / забежать → pagine «Специальные».
// Frasi nuove solo con il permesso della PM: lessico utile e frequente (città, incontro), ogni carta comprensibile da sola. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC misto (pagine 1–3) · Quiz (panel-dz-9)

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
