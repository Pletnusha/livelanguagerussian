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
// PANEL 2 — DragDrop · student
// В аэропорту: лететь (вылетать / прилетать / улетать) + приехать in aeroporto / in albergo; n. 2 e 5 originali con marcatore (встретишь меня?, поедем встречать) *; esclusi «прилетают / улетают в Лондон», «прилетели из Италии» (due risposte giuste)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Они {{1}} во вторник из Флоренции.",
        words: ["залетают", "вылетают", "вылитают"],
        correctAnswers: { 1: "вылетают" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я {{1}} завтра после обеда, встретишь меня?",
        words: ["прилетаю", "улетаю", "прилитаю"],
        correctAnswers: { 1: "прилетаю" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вы только что {{1}} в аэропорт Шереметьево, вам нужно добраться до гостиницы.",
        words: ["вылетели", "прилители", "прилетели"],
        correctAnswers: { 1: "прилетели" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы вчера прилетели {{1}} Италии.",
        words: ["из", "с", "от"],
        correctAnswers: { 1: "из" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Они должны {{1}} около шести вечера, поедем их встречать.",
        words: ["улететь", "прилететь", "прилетить"],
        correctAnswers: { 1: "прилететь" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} двадцать шестого мая и возвращаемся пятнадцатого июня.",
        words: ["улетаем", "прилетаем", "улитаем"],
        correctAnswers: { 1: "улетаем" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он {{1}} завтра утром, и документы ему нужны в поездке.",
        words: ["прилетает", "улитает", "улетает"],
        correctAnswers: { 1: "улетает" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "На каникулы друг всегда {{1}} домой, а в этот раз улетел в Крым.",
        words: ["улетел", "улетает", "улитает"],
        correctAnswers: { 1: "улетает" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} в аэропорт очень рано, потому что боялись опоздать на свой рейс.",
        words: ["приехали", "прилетели", "приехале"],
        correctAnswers: { 1: "приехали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Самолёт опоздал на два часа, и Андрей и Женя {{1}} в гостиницу поздно ночью.",
        words: ["прилетели", "приехили", "приехали"],
        correctAnswers: { 1: "приехали" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-sp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-sp-01', exercises: p1exercises }),
    'panel-sp-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-sp-02', exercises: p2exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
