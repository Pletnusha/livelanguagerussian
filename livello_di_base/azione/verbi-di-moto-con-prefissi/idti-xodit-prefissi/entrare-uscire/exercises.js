import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Войти или выйти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// entrare ↔ uscire — в- (внутрь) ↔ вы- (наружу), con entrambe le coppie aspettuali: входить / войти ↔ выходить / выйти.
// в + acc. ↔ из / с + gen.; anche выйти на / в + acc. (выйти на улицу, выйти погулять).
// Trappole: scendere dall'autobus = выйти из автобуса; sto entrando / entra sempre = вхожу / входит (НСВ), è entrato = вошёл;
// вы́шел (non «вышёл»), вы́йду ma выходи́ть; «пошёл в магазин» è corretto — mai come distrattore.
// Solo frasi originali dei materiali «Курсы» (vedi «LLR — Оригиналы — глаголы движения с приставками (20.11).md»);
// frasi nuove solo con il permesso della PM.
// Schema: 1 D&D (vecchio + nuovo, con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC misto (идти / ходить, Elementare) · Quiz (panel-eu-9)
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
