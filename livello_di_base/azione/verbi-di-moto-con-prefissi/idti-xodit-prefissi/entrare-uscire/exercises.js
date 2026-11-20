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
// PANEL 1 — DragDrop · public
// Misto: войти / выйти (nuovo) + в + acc. ↔ из + gen. (vecchio), con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} в театр, когда концерт уже начался.",
        words: ["вышли", "войшли", "вошли"],
        correctAnswers: { 1: "вошли" },
        explanation: "Entrare = войти в + accusativo (в театр). Passato: вошли."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Двери лифта открылись, и мы в него {{1}}.",
        words: ["вошли", "вышли", "вошлы"],
        correctAnswers: { 1: "вошли" },
        explanation: "Entrare nell'ascensore: войти в + acc. Passato: вошёл, вошла, вошли."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы вышли {{1}} после лекции.",
        words: ["из аудитории", "в аудиторию", "из аудиторию"],
        correctAnswers: { 1: "из аудитории" },
        explanation: "Uscire da = выйти из + genitivo: аудитория → из аудитории."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Магазин открыли, и покупатели {{1}} в торговый зал.",
        words: ["вышли", "вошли", "войшли"],
        correctAnswers: { 1: "вошли" },
        explanation: "Entrare: вошли в + acc. (в зал). Non «войшли»: il passato è вошли."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Павел {{1}} из дома в 9 часов.",
        words: ["вошёл", "вышёл", "вышел"],
        correctAnswers: { 1: "вышел" },
        explanation: "Uscire di casa = выйти из дома. Passato: вы́шел (non «вышёл»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда я вошёл {{1}} к начальнику, он разговаривал по телефону.",
        words: ["из кабинета", "в кабинете", "в кабинет"],
        correctAnswers: { 1: "в кабинет" },
        explanation: "Moto a luogo: войти в + accusativo (в кабинет). «В кабинете» = stato in luogo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "В кабинет врача медленно {{1}} старик.",
        words: ["вышел", "вошёл", "войшёл"],
        correctAnswers: { 1: "вошёл" },
        explanation: "Вошёл: passato maschile di войти (non «войшёл»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сестра выйдет {{1}} через 5 минут.",
        words: ["из школы", "из школу", "в школу"],
        correctAnswers: { 1: "из школы" },
        explanation: "Uscire da scuola = выйти из + genitivo (из школы)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вам нужно {{1}} из дома, повернуть направо и пройти прямо.",
        words: ["войти", "выйти", "выйдти"],
        correctAnswers: { 1: "выйти" },
        explanation: "Uscire di casa: выйти (infinito, non «выйдти»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты {{1}} погулять?",
        words: ["войдёшь", "выйдешь", "выйдишь"],
        correctAnswers: { 1: "выйдешь" },
        explanation: "Uscire a fare qualcosa = выйти + infinito (выйти погулять). Futuro: выйду, выйдешь (non «выйдишь»)."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Nuovo: войти / выйти, входить / выходить — ufficio, banca, casa (senza spiegazioni)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Перед дверью стояла очередь — я подошла, подождала и {{1}} в банк.",
        words: ["вышла", "вошла", "войшла"],
        correctAnswers: { 1: "вошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как только дверь открылась, вся шумная группа {{1}} в банк и начала нажимать на кнопки автомата электронной очереди.",
        words: ["вышла", "вашла", "вошла"],
        correctAnswers: { 1: "вошла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "В офис {{1}} Андрей, который оживлённо разговаривал с кем-то по телефону, и прошёл к себе в кабинет.",
        words: ["вошёл", "вышел", "вошол"],
        correctAnswers: { 1: "вошёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Эдуардо {{1}} в кабинет начальника таможни. В кабинете никого не было.",
        words: ["вошёл", "войшёл", "вышел"],
        correctAnswers: { 1: "вошёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда я {{1}} в кабинет к начальнику, он разговаривал по телефону.",
        words: ["вышел", "вашёл", "вошёл"],
        correctAnswers: { 1: "вошёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда мы уже {{1}} из офиса, шеф вспомнил, что нужно закончить документы к утру, и мы вернулись.",
        words: ["входили", "выходили", "выхадили"],
        correctAnswers: { 1: "выходили" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Она всегда {{1}} ко мне в комнату без стука.",
        words: ["выходит", "вхадит", "входит"],
        correctAnswers: { 1: "входит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда будешь {{1}} из дома, не забудь взять мусор, выкинешь по дороге.",
        words: ["выходить", "входить", "выхадить"],
        correctAnswers: { 1: "выходить" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно {{1}} сейчас, чтобы успеть на поезд.",
        words: ["войти", "выйти", "выйдти"],
        correctAnswers: { 1: "выйти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно {{1}} из дома утром.",
        words: ["выйти", "выдти", "войти"],
        correctAnswers: { 1: "выйти" }
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-eu-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-eu-01', exercises: p1exercises }),
    'panel-eu-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-eu-02', exercises: p2exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
