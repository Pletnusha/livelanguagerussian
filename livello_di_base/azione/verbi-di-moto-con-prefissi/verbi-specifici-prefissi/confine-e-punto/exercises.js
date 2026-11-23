import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Приехать или прийти?» (Livello di base · Verbi di moto con prefissi · Специальные: ехать, бежать, лететь, плыть):
// stessi prefissi delle pagine 1–4 (в- / вы-, при- / у-, под- / от-, до- / за-) con i verbi specifici. Nuovo: il mezzo (a piedi / con un mezzo / in volo / a nuoto),
// le forme: въехать, подъехать, отъехать (ъ); приезжать / уезжать (НСВ in -езжать); прилетать / прилететь; прибегать / прибежать; приплывать / приплыть.
// Sensi particolari: заехать к родителям / за вареньем (passare da), «Куда мы заехали?!» (finire chissà dove), заплыл слишком далеко.
// Esclusi: «забегал по комнате» (за- = inizio), «долетит» (citazione letteraria), «въехать к родителям» (sbagliato nel quiz della PM); пере- / про- / об- → pagina 7 «percorso».
// Regole PM: solo frasi con contesto o marcatore; test «match» frase ↔ forma; ввод senza parentesi; spirale: pannello 7 + ~4/10 del test dalle pagine 1–5.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5–6 FC · 7 FC spirale (con spiegazioni) · Quiz (panel-sp-9)

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
