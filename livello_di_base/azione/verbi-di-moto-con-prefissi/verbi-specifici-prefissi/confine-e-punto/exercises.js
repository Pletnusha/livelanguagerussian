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
// PANEL 1 — DragDrop · public
// Nuovo: a piedi ↔ con un mezzo / in volo / a nuoto / di corsa, sempre con marcatore (на такси, паром, самолёт, опаздывая, машина); forme con «ъ» e «зж»; con spiegazioni; solo originali
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Женя {{1}} в аэропорт на такси около шести.",
        words: ["пришёл", "приехал", "прийехал"],
        correctAnswers: { 1: "приехал" },
        explanation: "Con un mezzo (на такси) → приехать. A piedi → прийти."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы сели на паром поздно ночью и {{1}} на Сицилию рано утром.",
        words: ["приплыли", "пришли", "приплылы"],
        correctAnswers: { 1: "приплыли" },
        explanation: "Via mare (паром) → приплыть."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Самолёт {{1}} в Москву вечером.",
        words: ["прилетел", "приехал", "прилятел"],
        correctAnswers: { 1: "прилетел" },
        explanation: "In volo → прилететь: самолёт прилетел."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Студентка, опаздывая, {{1}} в аудиторию.",
        words: ["въехала", "вбежла", "вбежала"],
        correctAnswers: { 1: "вбежала" },
        explanation: "Di corsa (опаздывая) → вбежать в + accusativo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Машина {{1}} во двор.",
        words: ["вошла", "въехала", "вьехала"],
        correctAnswers: { 1: "въехала" },
        explanation: "Entrare con un veicolo = въехать в + accusativo. Dopo в- si scrive «ъ»: въехала, non «вьехала»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} из Рима в восемь.",
        words: ["выезжаем", "выходим", "выежаем"],
        correctAnswers: { 1: "выезжаем" },
        explanation: "Partire da una città con un mezzo = выезжать из + genitivo. НСВ: выезжаем (con «зж»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Самолёт {{1}} в 12 часов.",
        words: ["выходит", "вылитает", "вылетает"],
        correctAnswers: { 1: "вылетает" },
        explanation: "L'aereo parte = вылетает (orario fisso → presente НСВ)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Наш кот всё время {{1}} из дома.",
        words: ["уезжает", "убегает", "убигает"],
        correctAnswers: { 1: "убегает" },
        explanation: "Scappare = убегать из + genitivo. Всё время → НСВ."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Машина {{1}} к магазину и остановилась.",
        words: ["подъехала", "подошла", "подехала"],
        correctAnswers: { 1: "подъехала" },
        explanation: "Avvicinarsi con un veicolo = подъехать к + dativo. Dopo под- si scrive «ъ»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Наш пёс {{1}} к нам с мячиком в зубах.",
        words: ["подъехал", "подбижал", "подбежал"],
        correctAnswers: { 1: "подбежал" },
        explanation: "Avvicinarsi di corsa = подбежать к + dativo."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-sp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-sp-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
