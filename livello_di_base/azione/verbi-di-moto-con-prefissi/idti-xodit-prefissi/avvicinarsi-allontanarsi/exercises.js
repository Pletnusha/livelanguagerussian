import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Подойти или отойти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// avvicinarsi ↔ allontanarsi — под- + к + dat. ↔ от- + от + gen. (anche отойти в сторону), coppie подходить / подойти ↔ отходить / отойти.
// Trappole: подошёл к Анне (vicino a lei) ≠ пришёл к Анне (a casa sua); под- vuole «к», non «под»; подойти к телефону = rispondere;
// поезд подходит (arriva al binario) ↔ отходит (parte); подойти ≠ войти («подошли к кабинету, но входить не стали»).
// Gramota.ru (БТС): подойти к начальнику, к телефону; подошёл поезд; отойти от прилавка, в сторону; отойти = отлучиться; поезд должен отойти.
// Esclusi i sensi figurati: подойдёт тебе, отойти от дел, отошёл (si è ripreso), отойти ко сну. «Отойти» mai come distrattore di «выйти на минутку».
// Pochi originali (11): 4 pannelli + quiz, approvato dalla PM. Frasi nuove solo con il permesso della PM. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2 D&D · 3 FC misto (pagine 1–2) · 4 FC (forme + aspetto, con spiegazioni) · Quiz (panel-po-9)

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
