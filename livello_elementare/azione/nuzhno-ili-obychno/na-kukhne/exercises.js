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
// PANEL 2 — DragDrop · student
// In cucina: quale verbo con quale prodotto e dove (scheda «Приготовить что? где?», frasi «coppia + oggetto + dove» con Андрей, permesso PM). Обычно + imperfettivo presente / нужно + perfettivo. Sbagliate = verbi della scheda che non vanno con quel posto («варит картофель в раковине»); mai una combinazione corretta (тушит мясо в кастрюле, чистит картофель); niente тушить / потушить (рыбу в кастрюле: anche варить); senza spiegazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно Андрей {{1}} овощи на столе.",
        words: ["кипятит", "жарит", "режет"],
        correctAnswers: { 1: "режет" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} овощи на столе.",
        words: ["нарезать", "вскипятить", "обжарить"],
        correctAnswers: { 1: "нарезать" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно Андрей {{1}} картофель в раковине.",
        words: ["варит", "моет", "жарит"],
        correctAnswers: { 1: "моет" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} картофель в раковине.",
        words: ["сварить", "вымыть", "обжарить"],
        correctAnswers: { 1: "вымыть" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно он {{1}} морковь в раковине.",
        words: ["чистит", "кипятит", "тушит"],
        correctAnswers: { 1: "чистит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} морковь в раковине.",
        words: ["вскипятить", "потушить", "почистить"],
        correctAnswers: { 1: "почистить" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно Андрей {{1}} мясо в кастрюле.",
        words: ["варит", "режет", "чистит"],
        correctAnswers: { 1: "варит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} мясо в кастрюле.",
        words: ["нарезать", "почистить", "сварить"],
        correctAnswers: { 1: "сварить" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно Андрей {{1}} рыбу на сковородке.",
        words: ["моет", "жарит", "режет"],
        correctAnswers: { 1: "жарит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} воду в чайнике.",
        words: ["обжарить", "нарезать", "вскипятить"],
        correctAnswers: { 1: "вскипятить" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Dove? Quando? — posti della scheda (на столе, в раковине, в кастрюле, на сковородке, в чайнике: prepositivo; sbagliate anche l'accusativo «куда?» — solo come sbagliata, niente положить / поставить), по воскресеньям / сегодня dal testo su Андрей, scelta del marcatore Обычно / Нужно; senza spiegazioni
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно Андрей режет овощи на {{1}}.",
        words: ["стол", "столе", "столом"],
        correctAnswers: { 1: "столе" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно вымыть картофель в {{1}}.",
        words: ["раковина", "раковину", "раковине"],
        correctAnswers: { 1: "раковине" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно сварить мясо в {{1}}.",
        words: ["кастрюле", "кастрюлю", "кастрюля"],
        correctAnswers: { 1: "кастрюле" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно Андрей жарит рыбу на {{1}}.",
        words: ["сковородке", "сковородку", "сковородка"],
        correctAnswers: { 1: "сковородке" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно вскипятить воду в {{1}}.",
        words: ["чайник", "чайника", "чайнике"],
        correctAnswers: { 1: "чайнике" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно он ходит за продуктами по {{1}}.",
        words: ["воскресенье", "воскресеньям", "воскресенья"],
        correctAnswers: { 1: "воскресеньям" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно он ходит за продуктами по воскресеньям. Но {{1}} у него гости.",
        words: ["сегодня", "обычно", "всегда"],
        correctAnswers: { 1: "сегодня" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} Андрей режет овощи на столе.",
        words: ["Нужно", "Обычно", "Сегодня нужно"],
        correctAnswers: { 1: "Обычно" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} вымыть картофель в раковине.",
        words: ["Обычно", "Всегда", "Нужно"],
        correctAnswers: { 1: "Нужно" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно он чистит морковь в {{1}}.",
        words: ["раковине", "раковиной", "раковину"],
        correctAnswers: { 1: "раковине" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Aspetto: 5 coppie della scheda — резать / нарезать, мыть / вымыть, варить / сварить, жарить / обжарить, кипятить / вскипятить; frasi riconoscibili dei pannelli 2–3 + «Сегодня у Андрея гости» dal testo. Presente imperfettivo (sbagliate: due infiniti) ↔ нужно + perfettivo (sbagliate: presente e futuro, mai l'infinito imperfettivo). Niente чистить / почистить: in MATCH «моет картофель в раковине» e «чистит морковь в раковине» si scambierebbero; l'altro perfettivo (отварить, пожарить) solo nella spiegazione; con spiegazioni
// ============================================================
const p4cards = [
    { front: "Обычно Андрей ___ овощи на столе.", back: "режет", distractors: ["нарезать", "резать"], explanation: "Обычно = abitudine: imperfettivo presente (он режет)." },
    { front: "Сегодня у Андрея гости, нужно ___ овощи на столе.", back: "нарезать", distractors: ["режет", "нарежет"], explanation: "Oggi, una cosa da finire: нужно + perfettivo (на-резать)." },
    { front: "Обычно Андрей ___ картофель в раковине.", back: "моет", distractors: ["вымыть", "мыть"], explanation: "Abitudine: imperfettivo presente (он моет)." },
    { front: "Сегодня нужно ___ картофель в раковине.", back: "вымыть", distractors: ["моет", "вымоет"], explanation: "Un risultato oggi: нужно + perfettivo (вы-мыть)." },
    { front: "Обычно Андрей ___ мясо в кастрюле.", back: "варит", distractors: ["сварить", "варить"], explanation: "Abitudine: imperfettivo presente (он варит)." },
    { front: "Сегодня у Андрея гости, нужно ___ мясо в кастрюле.", back: "сварить", distractors: ["варит", "сварит"], explanation: "Нужно + perfettivo: с-варить (va bene anche от-варить)." },
    { front: "Обычно Андрей ___ рыбу на сковородке.", back: "жарит", distractors: ["обжарить", "жарить"], explanation: "Abitudine: imperfettivo presente (он жарит)." },
    { front: "Сегодня нужно ___ рыбу на сковородке.", back: "обжарить", distractors: ["жарит", "обжарит"], explanation: "Нужно + perfettivo: об-жарить (va bene anche по-жарить)." },
    { front: "Обычно Андрей ___ воду в чайнике.", back: "кипятит", distractors: ["вскипятить", "кипятить"], explanation: "Abitudine: imperfettivo presente (он кипятит)." },
    { front: "Сегодня нужно ___ воду в чайнике.", back: "вскипятить", distractors: ["кипятит", "вскипятит"], explanation: "Нужно + perfettivo: вс-кипятить." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Tre forme: ходить / сходить за продуктами e покупать / купить продукты (testo su Андрей: «Обычно он ходит за продуктами по воскресеньям», «нужно купить продукты»), чистить / почистить морковь, тушить / потушить рыбу, кипятить / вскипятить воду (scheda). Presente imperfettivo (sbagliate: due infiniti) ↔ нужно + perfettivo (sbagliate: presente e futuro, mai l'infinito imperfettivo). Тушить qui sì: senza варит / сварить nel pannello il MATCH resta univoco; senza spiegazioni
// ============================================================
const p5cards = [
    { front: "Обычно он ___ за продуктами по воскресеньям.", back: "ходит", distractors: ["сходить", "ходить"] },
    { front: "Сегодня нужно ___ за продуктами.", back: "сходить", distractors: ["ходит", "сходит"] },
    { front: "Обычно Андрей ___ продукты по воскресеньям.", back: "покупает", distractors: ["купить", "покупать"] },
    { front: "Но сегодня у него гости, поэтому нужно ___ продукты.", back: "купить", distractors: ["покупает", "купит"] },
    { front: "Обычно Андрей ___ морковь в раковине.", back: "чистит", distractors: ["почистить", "чистить"] },
    { front: "Нужно ___ морковь в раковине.", back: "почистить", distractors: ["чистит", "почистит"] },
    { front: "Обычно Андрей ___ рыбу в кастрюле.", back: "тушит", distractors: ["потушить", "тушить"] },
    { front: "Сегодня нужно ___ рыбу в кастрюле.", back: "потушить", distractors: ["тушит", "потушит"] },
    { front: "Андрей всегда ___ воду в чайнике.", back: "кипятит", distractors: ["вскипятить", "кипятить"] },
    { front: "Сейчас нужно ___ воду в чайнике.", back: "вскипятить", distractors: ["кипятит", "вскипятит"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: inizio → fine. 6 frasi della cucina (testo su Андрей + scheda: trappole «обычно Андрей нужно», «ему покупает», caso dopo за / в) + 4 vecchie identiche (pagina «Супер мама»: парикмахерскую, два раза в неделю; pagina «В офисе»: встречу заказчику, три встречи). In MATCH ogni fine sta solo con il suo inizio: niente «Мой сын обычно…», «Тебе… нужно умыться», «сварить мясо в кастрюле»; senza spiegazioni
// ============================================================
const p6cards = [
    { front: "Обычно Андрей…", back: "режет овощи на столе.", distractors: ["нужно нарезать овощи на столе.", "нарезать овощи на столе."] },
    { front: "Сегодня у Андрея гости, поэтому ему…", back: "нужно купить продукты.", distractors: ["покупает продукты.", "купит продукты."] },
    { front: "Сегодня нужно…", back: "обжарить рыбу на сковородке.", distractors: ["жарит рыбу на сковородке.", "обжарит рыбу на сковородке."] },
    { front: "Обычно он ходит за…", back: "продуктами по воскресеньям.", distractors: ["продукты по воскресеньям.", "продуктов по воскресеньям."] },
    { front: "Нужно вскипятить воду в…", back: "чайнике.", distractors: ["чайник.", "чайника."] },
    { front: "Нужно не забыть купить…", back: "воду.", distractors: ["вода.", "водой."] },
    { front: "Как часто вы ходите в…", back: "парикмахерскую?", distractors: ["парикмахерской?", "парикмахерская?"] },
    { front: "Она моет полы два раза в…", back: "неделю.", distractors: ["неделя.", "недели."] },
    { front: "Коллеге нужно назначить встречу…", back: "заказчику.", distractors: ["заказчик.", "заказчиком."] },
    { front: "— Тебе нужно проверить эти договоры. — Я не успею, у меня три…", back: "встречи сегодня.", distractors: ["встреч сегодня.", "встреча сегодня."] }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-kuh-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-kuh-01', exercises: p1exercises }),
    'panel-kuh-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-kuh-02', exercises: p2exercises }),
    'panel-kuh-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-kuh-03', exercises: p3exercises }),
    'panel-kuh-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-kuh-04', cards: p4cards }),
    'panel-kuh-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-kuh-05', cards: p5cards }),
    'panel-kuh-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-kuh-06', cards: p6cards })
};

initPanelManager({ initializers, enableAccessControl: true });
