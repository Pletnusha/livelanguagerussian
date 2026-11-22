import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «На кухне: Андрей ждёт гостей» — quinta pagina del blocco «Нужно или обычно» (piano approvato dalla PM 20.11.2026).
// Solo due forme: presente imperfettivo (обычно / по воскресеньям) e нужно + infinito perfettivo. Niente passato / futuro, nemmeno nel test.
// Fonti: testo «Когда ждёшь гостей» (Андрей, A1_MODULO 3, p. 12) + scheda «Приготовить что? где?» (p. 14 / «РЕЗАТЬ ГДЕ ПОЛОЖИТЬ КУДА»).
// La scheda ha solo coppie + что? + где?: la PM ha permesso di costruire frasi «coppia + oggetto + dove» con Андрей come soggetto, niente di più.
// Coppie: резать / нарезать овощи (на столе), мыть / вымыть картофель (в раковине), чистить / почистить морковь (в раковине),
// варить / сварить, отварить мясо (в кастрюле), жарить / обжарить рыбу (на сковородке), тушить / потушить рыбу (в кастрюле), кипятить / вскипятить воду (в чайнике).
// Due perfettivi (сварить / отварить, обжарить / пожарить): l'altro perfettivo mai tra le sbagliate; nel test si accettano tutti e due.
// «Нарезаю» (imperfettivo di нарезáть) mai come sbagliata: per l'abitudine режу / режет.
// Esclusi: куда? / откуда? (положить, поставить, взять, добавить соль в салат, «разобрать сумки» p. 13 — verbi di posizione, altro blocco),
// «чтобы» e «нужно идти» solo come contesto, «оказалось» (passato).
// Dopo «нужно» mai l'infinito imperfettivo come sbagliata. Niente domande tra parentesi (regola 7.1).
// Schema: 1 D&D lista della spesa (con spiegazioni) · 2 D&D verbo + prodotto · 3 D&D dove / quando · 4 FC обычно o нужно (con spiegazioni)
//         5 FC tre forme · 6 FC finisci la frase (misto) · 7 FC «Сегодня гости» dal testo (con spiegazioni) · 8 FC come si forma il perfettivo (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Lista della spesa: 10 frasi dal testo «Когда ждёшь гостей» (Андрей; la 8 unisce «нужно купить» e la lista dello stesso testo). Il nome giusto nella forma giusta; sbagliate = nominativo, dativo, strumentale — mai il genitivo partitivo («купить воды / помидоров / телятины» sarebbe corretto); con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "У Андрея в холодильнике нет {{1}}.",
        words: ["нечего", "ничто", "ничего"],
        correctAnswers: { 1: "ничего" },
        explanation: "«Нет ничего» = non c'è niente: dopo «нет» il genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно он ходит за {{1}} по воскресеньям.",
        words: ["продуктами", "продукты", "продуктов"],
        correctAnswers: { 1: "продуктами" },
        explanation: "Ходить за + strumentale: andare a prendere (за продуктами = a fare la spesa)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Но сегодня у него {{1}}.",
        words: ["гости", "гостей", "гостям"],
        correctAnswers: { 1: "гости" },
        explanation: "«У него гости» = ha ospiti: гости è il soggetto (nominativo)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно купить {{1}} бумагу, шампунь и мыло.",
        words: ["туалетная", "туалетной", "туалетную"],
        correctAnswers: { 1: "туалетную" },
        explanation: "Купить что? accusativo femminile: туалетную бумагу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно не забыть купить {{1}}.",
        words: ["вода", "воду", "водой"],
        correctAnswers: { 1: "воду" },
        explanation: "Купить что? accusativo: воду."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "…и заодно купить продукты на следующую {{1}}.",
        words: ["неделя", "неделю", "недели"],
        correctAnswers: { 1: "неделю" },
        explanation: "На + accusativo = per (la settimana prossima)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно купить шампунь и мыло на всякий {{1}}.",
        words: ["случай", "случае", "случая"],
        correctAnswers: { 1: "случай" },
        explanation: "«На всякий случай» = per ogni evenienza (espressione fissa)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно купить морковь, лук, чеснок, огурцы и {{1}}.",
        words: ["помидорам", "помидорами", "помидоры"],
        correctAnswers: { 1: "помидоры" },
        explanation: "Купить что? accusativo plurale: помидоры."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно купить салфетки и гель для мытья {{1}}.",
        words: ["посуду", "посуды", "посуда"],
        correctAnswers: { 1: "посуды" },
        explanation: "Мытьё чего? genitivo: гель для мытья посуды = detersivo per i piatti."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно купить {{1}} и фарш.",
        words: ["телятиной", "телятина", "телятину"],
        correctAnswers: { 1: "телятину" },
        explanation: "Купить что? accusativo femminile: телятину."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-kuh-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-kuh-01', exercises: p1exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
