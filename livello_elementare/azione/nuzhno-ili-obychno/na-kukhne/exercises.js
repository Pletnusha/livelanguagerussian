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
// PANEL 7 — Flashcard · public
// «Сегодня гости»: domanda → risposta sul testo «Когда ждёшь гостей». 1–5 domande originali del PDF (p. 12; corretto «купить Андрей» → «Андрею»), 6–10 costruite sullo stesso testo (approvate dalla PM). Sbagliate = casi sbagliati, mai il genitivo partitivo dopo купить; la 8 = нужно (oggi, una volta) ↔ по воскресеньям (обычно); con spiegazioni
// ============================================================
const p7cards = [
    { front: "Как часто Андрей ходит в супермаркет?", back: "По воскресеньям.", distractors: ["В воскресенье.", "Каждый день."], explanation: "По + dativo plurale = ogni domenica; в воскресенье = una domenica sola." },
    { front: "Почему Андрею нужно сегодня идти в супермаркет?", back: "Потому что у него гости.", distractors: ["Потому что у него гостей.", "Потому что у него гостям."], explanation: "«У него гости»: гости è il soggetto (nominativo)." },
    { front: "Чего нет дома у Андрея?", back: "Туалетной бумаги и шампуня.", distractors: ["Туалетная бумага и шампунь.", "Туалетную бумагу и шампунь."], explanation: "«Нет чего?» → genitivo." },
    { front: "Что нужно не забыть купить Андрею?", back: "Воду.", distractors: ["Вода.", "Водой."], explanation: "Купить что? accusativo: воду." },
    { front: "Из чего состоит список покупок у Андрея?", back: "Из продуктов, салфеток и шампуня.", distractors: ["Из продукты, салфетки и шампунь.", "Продукты, салфетки и шампунь."], explanation: "Состоять из + genitivo." },
    { front: "Что нужно приготовить?", back: "Ужин.", distractors: ["Ужина.", "Ужином."], explanation: "Приготовить что? accusativo (ужин)." },
    { front: "На какую неделю нужно купить продукты?", back: "На следующую.", distractors: ["На следующей.", "На следующая."], explanation: "На + accusativo = per (la settimana prossima)." },
    { front: "Когда Андрею нужно идти в супермаркет?", back: "Сегодня.", distractors: ["По воскресеньям.", "Обычно."], explanation: "Нужно = oggi, una volta (ci sono ospiti); по воскресеньям = обычно, l'abitudine." },
    { front: "Что нужно купить на всякий случай?", back: "Туалетную бумагу, шампунь и мыло.", distractors: ["Туалетная бумага, шампунь и мыло.", "Туалетной бумагой, шампунем и мылом."], explanation: "Купить что? accusativo: туалетную бумагу." },
    { front: "Что есть в холодильнике у Андрея?", back: "Ничего.", distractors: ["Ничто.", "Нечего."], explanation: "«Ничего (нет)» = non c'è niente." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Come si forma il perfettivo, in frasi (regola PM 21–22.11: niente carte «НСВ → СВ»): prima la frase riconoscibile con l'imperfettivo, poi «нужно ___» → la coppia perfettiva. на- (нарезать), вы- (вымыть), по- (почистить, потушить), с- (сварить, сходить), об- (обжарить), вс- (вскипятить), forma più corta (купить) + 1 vecchia identica da «Супер мама» (приготовить). Sbagliate = perfettivi veri di altri verbi che con quel prodotto non vanno (mai съесть мясо, нарезать / вымыть рыбу); in MATCH «рыбу» due volte ma l'imperfettivo nella frase decide; con spiegazioni
// ============================================================
const p8cards = [
    { front: "Обычно Андрей режет овощи на столе. Сегодня нужно ___ овощи.", back: "нарезать", distractors: ["написать", "назначить"], explanation: "на- + резать: tagliare tutto, a pezzi." },
    { front: "Обычно Андрей моет картофель в раковине. Сегодня нужно ___ картофель.", back: "вымыть", distractors: ["выучить", "выполнить"], explanation: "вы- + мыть." },
    { front: "Обычно он чистит морковь в раковине. Сегодня нужно ___ морковь.", back: "почистить", distractors: ["позвонить", "погладить"], explanation: "по- + чистить." },
    { front: "Обычно Андрей варит мясо в кастрюле. Сегодня нужно ___ мясо.", back: "сварить", distractors: ["сходить", "сдать"], explanation: "с- + варить (va bene anche от-варить)." },
    { front: "Обычно Андрей жарит рыбу на сковородке. Сегодня нужно ___ рыбу.", back: "обжарить", distractors: ["вскипятить", "позвонить"], explanation: "об- + жарить (va bene anche по-жарить)." },
    { front: "Обычно Андрей тушит рыбу в кастрюле. Сегодня нужно ___ рыбу.", back: "потушить", distractors: ["позвонить", "погладить"], explanation: "по- + тушить." },
    { front: "Андрей всегда кипятит воду в чайнике. Сейчас нужно ___ воду.", back: "вскипятить", distractors: ["вымыть", "выучить"], explanation: "вс- + кипятить." },
    { front: "Обычно Андрей покупает продукты по воскресеньям. Сегодня нужно ___ продукты.", back: "купить", distractors: ["закончить", "встать"], explanation: "Il perfettivo è più corto, senza по-: покупать → купить." },
    { front: "Обычно он ходит за продуктами по воскресеньям. Сегодня нужно ___ за продуктами.", back: "сходить", distractors: ["съесть", "сдать"], explanation: "с- + ходить: andare e tornare." },
    { front: "Обычно я готовлю ужин. До обеда нужно ___ обед.", back: "приготовить", distractors: ["погладить", "вымыть"], explanation: "Dalla pagina «Супер мама»: при- + готовить (il cibo); un documento — подготовить." }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelKuh9() {
    const panel = document.getElementById('panel-kuh-9');
    if (!panel) return;

    const container = panel.querySelector('#kuh-9-cards-container');
    const prevBtn   = panel.querySelector('#kuh-9-deck-prev');
    const nextBtn   = panel.querySelector('#kuh-9-deck-next');
    const counterEl = panel.querySelector('#kuh-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Обычно Андрей ___ овощи на столе.", options: ["нарезать", "режет", "резать"], answer: "режет" },
        { question: "Сегодня у Андрея гости, нужно ___ мясо в кастрюле.", options: ["варит", "сварит", "сварить"], answer: "сварить" },
        { question: "Обычно он ходит за продуктами по ___.", options: ["воскресеньям", "воскресенье", "воскресенья"], answer: "воскресеньям" },
        { question: "Нужно вскипятить воду в ___.", options: ["чайнике", "чайник", "чайника"], answer: "чайнике" },
        { question: "У Андрея в холодильнике нет ___.", options: ["нечего", "ничто", "ничего"], answer: "ничего" },
        { question: "Нужно купить салфетки и гель для мытья ___.", options: ["посуду", "посуды", "посуда"], answer: "посуды" },
        { question: "Обычно я ___ рубашки в стиральной машине.", options: ["постирать", "стирать", "стираю"], answer: "стираю" },
        { question: "Сегодня нужно ___ полы.", options: ["вымыть", "мою", "вымою"], answer: "вымыть" },
        { question: "Нужно ___ отчёт к понедельнику.", options: ["готовим", "подготовить", "подготовим"], answer: "подготовить" },
        { question: "Обычно мы ___ десять–двадцать новых слов к каждому занятию.", options: ["учим", "выучить", "учить"], answer: "учим" }
    ];
    const matchPairs = [
        { left: "Обычно Андрей…", right: "режет овощи на столе." },
        { left: "Сегодня у Андрея гости, поэтому ему…", right: "нужно купить продукты." },
        { left: "Сегодня нужно…", right: "обжарить рыбу на сковородке." },
        { left: "Обычно он ходит за…", right: "продуктами по воскресеньям." },
        { left: "Нужно вскипятить воду в…", right: "чайнике." },
        { left: "Нужно купить шампунь и мыло на всякий…", right: "случай." },
        { left: "Как часто вы ходите в…", right: "парикмахерскую?" },
        { left: "Она моет полы два раза в…", right: "неделю." },
        { left: "Коллеге нужно назначить встречу…", right: "заказчику." },
        { left: "Ты знаешь, что в эту сессию нам нужно сдать пять…", right: "экзаменов?" }
    ];
    const quizData = [
        { id: "kuh9-w1", promptPrefix: "Обычно Андрей ", promptSuffix: " овощи на столе.", answers: ["режет", "нарезает", "чистит"] },
        { id: "kuh9-w2", promptPrefix: "Сегодня у Андрея гости, нужно ", promptSuffix: " мясо в кастрюле.", answers: ["сварить", "отварить", "потушить", "приготовить"] },
        { id: "kuh9-w3", promptPrefix: "Обычно Андрей ", promptSuffix: " рыбу на сковородке.", answers: ["жарит", "обжаривает", "готовит"] },
        { id: "kuh9-w4", promptPrefix: "Сегодня нужно ", promptSuffix: " воду в чайнике.", answers: ["вскипятить", "нагреть"] },
        { id: "kuh9-w5", promptPrefix: "Обычно он ", promptSuffix: " за продуктами по воскресеньям.", answers: ["ходит", "ездит"] },
        { id: "kuh9-w6", promptPrefix: "Но сегодня у него гости, поэтому нужно ", promptSuffix: " продукты.", answers: ["купить", "заказать"] },
        { id: "kuh9-w7", promptPrefix: "Обычно я ", promptSuffix: " рубашки в стиральной машине.", answers: ["стираю"] },
        { id: "kuh9-w8", promptPrefix: "Тебе нужно ", promptSuffix: " зубы.", answers: ["почистить"] },
        { id: "kuh9-w9", promptPrefix: "Обычно мы ", promptSuffix: " отчёт в мае.", answers: ["готовим", "пишем", "составляем", "делаем", "сдаём", "заканчиваем"] },
        { id: "kuh9-w10", promptPrefix: "Нужно ", promptSuffix: " задание к завтрашнему семинару.", answers: ["выполнить", "сделать", "написать"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

    // Typed answers: ignore case, ё/е, extra spaces and a final dot
    // (Italian keyboards usually have no ё).
    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ').replace(/[.!]+$/, '').toLowerCase().replace(/ё/g, 'е');
    }

    function ensureCardTitle(card, index) {
        const existingTitle = Array.from(card.children).find(child => child.tagName === 'H1');
        if (existingTitle) {
            if (index < MC_END) existingTitle.classList.add('exercise-counter');
            if (card.firstElementChild !== existingTitle) card.insertBefore(existingTitle, card.firstElementChild);
            return;
        }
        const title = document.createElement('h1');
        title.textContent = `Esercizio ${index + 1} di ${TOTAL_CARDS}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container kuh-9-card';
            card.dataset.index = i;
            if (i === 0) card.classList.add('visible');
            card.hidden = (i !== 0);

            if (i < MC_END) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) => `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`).join('');
                const questionText = item.question.replace('___', `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`);
                card.innerHTML = `
                    <div class="instruction">Completa la frase scegliendo la forma corretta</div>
                    <div class="exercise-text">${questionText}</div>
                    <div class="word-options">${opts}</div>
                    <div class="controls">
                        <button class="btn btn-primary verify-btn">Verifica</button>
                        <button class="btn btn-secondary next-btn" style="display:none;">Prossimo</button>
                        <div class="feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);

            } else if (i < MATCH_END) {
                const pairIdx = i - MC_END;
                const pair = matchPairs[pairIdx];
                const otherPairs = matchPairs.filter((_, idx) => idx !== pairIdx);
                const shuffledOthers = otherPairs.sort(() => Math.random() - 0.5).slice(0, 2);
                const allPairs = [pair, ...shuffledOthers].sort(() => Math.random() - 0.5);

                let fronts = allPairs.map((p, idx) => ({ text: p.left,  type: 'front', id: idx }));
                let backs  = allPairs.map((p, idx) => ({ text: p.right, type: 'back',  id: idx }));
                fronts.sort(() => Math.random() - 0.5);
                backs.sort(() => Math.random() - 0.5);

                let selectedMatchCard = null;
                let isProcessingMatch = false;

                const matchContainer = document.createElement('div');
                matchContainer.className = 'fca01-match-container';
                const feedbackEl = document.createElement('p');
                feedbackEl.className = 'fca01-match-feedback';
                const matchGrid = document.createElement('div');
                matchGrid.className = 'fca01-match-grid';
                const colFronts = document.createElement('div');
                colFronts.className = 'fca01-match-col';
                const colBacks = document.createElement('div');
                colBacks.className = 'fca01-match-col';

                matchGrid.appendChild(colFronts);
                matchGrid.appendChild(colBacks);
                matchContainer.appendChild(feedbackEl);
                matchContainer.appendChild(matchGrid);
                card.appendChild(matchContainer);

                function handleMatchClick(clickedCard) {
                    if (isProcessingMatch || clickedCard.classList.contains('matched')) return;
                    if (clickedCard === selectedMatchCard) return;

                    if (!selectedMatchCard) {
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    if (selectedMatchCard.dataset.type === clickedCard.dataset.type) {
                        selectedMatchCard.classList.remove('selected');
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    const firstId    = selectedMatchCard.dataset.id;
                    const secondId   = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;

                    if (firstId === secondId) {
                        previousCard.classList.add('matched');
                        clickedCard.classList.add('matched');
                        feedbackEl.textContent = "✨ Отлично!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "🎉 ПОБЕДА! 🎉";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "Неверно";
                        feedbackEl.className = "fca01-match-feedback wrong";
                        setTimeout(() => {
                            clickedCard.classList.remove('selected', 'wrong');
                            previousCard.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = "";
                            isProcessingMatch = false;
                        }, 800);
                        selectedMatchCard = null;
                    }
                }

                function createMatchElement(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card';
                    div.textContent = item.text;
                    div.dataset.id   = item.id;
                    div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatchClick(div));
                    return div;
                }

                fronts.forEach(item => colFronts.appendChild(createMatchElement(item)));
                backs.forEach(item  => colBacks.appendChild(createMatchElement(item)));
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);

            } else {
                const item = quizData[i - MATCH_END];
                card.innerHTML = `
                    <h3 class="quiz-title">Write</h3>
                    <p class="quiz-instruction">Scrivete la forma corretta</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix}<input type="text" class="quiz-input" data-index="${i - MATCH_END}">${item.promptSuffix}</div>
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">Проверить</button></div>
                        <div class="quiz-feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);
            }

            container.appendChild(card);
        }

        attachHandlers();
    }

    function attachHandlers() {
        container.querySelectorAll('.kuh-9-card').forEach(card => {
            const cardIndex = parseInt(card.dataset.index, 10);
            if (cardIndex >= MC_END) return;

            let checked = false;
            const gapElements  = Array.from(card.querySelectorAll('.gap'));
            const wordElements = Array.from(card.querySelectorAll('.word-option'));
            const verifyBtn    = card.querySelector('.verify-btn');
            const nextBtn      = card.querySelector('.next-btn');
            const feedback     = card.querySelector('.feedback');

            wordElements.forEach(wordElement => {
                wordElement.addEventListener('click', function() {
                    if (this.classList.contains('used') || checked) return;
                    const emptyGap = gapElements.find(gap => !gap.classList.contains('filled'));
                    if (!emptyGap) return;
                    const word = this.dataset.word;
                    emptyGap.textContent = word;
                    emptyGap.classList.add('filled');
                    emptyGap.dataset.word      = word;
                    emptyGap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });

            gapElements.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const wordIndex   = this.dataset.wordIndex;
                    const wordElement = wordElements.find(w => w.dataset.index === wordIndex);
                    this.textContent = '';
                    this.classList.remove('filled');
                    delete this.dataset.word;
                    delete this.dataset.wordIndex;
                    if (wordElement) wordElement.classList.remove('used');
                });
            });

            if (nextBtn) nextBtn.addEventListener('click', () => showCard(currentCard + 1));

            verifyBtn.addEventListener('click', function() {
                checked = true;
                const correctAnswer = multipleChoiceData[cardIndex].answer;
                let correct = 0;
                gapElements.forEach(gap => {
                    if (gap.dataset.word === correctAnswer) {
                        gap.classList.remove('filled');
                        gap.classList.add('correct');
                        correct = 1;
                    } else {
                        gap.classList.add('incorrect');
                    }
                });
                feedback.textContent = `Corretto: ${correct} / 1`;
                verifyBtn.style.display = 'none';
                nextBtn.style.display   = 'inline-block';
            });
        });

        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card    = this.closest('.kuh-9-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === normalizeInput(ans));
                if (isCorrect) {
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                    input.disabled = true;
                    this.disabled  = true;
                    fb.textContent = 'Правильно!';
                    fb.className   = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.';
                    fb.className   = 'quiz-feedback incorrect';
                }
            });
        });

        container.querySelectorAll('.quiz-input').forEach(input => {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    const btn = this.closest('.quiz-item').querySelector('.quiz-check-btn');
                    if (btn && !btn.disabled) btn.click();
                }
            });
        });
    }

    function showCard(idx) {
        currentCard = idx;
        container.querySelectorAll('.kuh-9-card').forEach((c, i) => {
            c.classList.toggle('visible', i === idx);
            c.hidden = (i !== idx);
        });
        counterEl.textContent = (idx + 1) + ' / ' + TOTAL_CARDS;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === TOTAL_CARDS - 1);
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0)               showCard(currentCard - 1); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL_CARDS - 1) showCard(currentCard + 1); });

    buildCards();
    showCard(0);
}

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-kuh-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-kuh-01', exercises: p1exercises }),
    'panel-kuh-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-kuh-02', exercises: p2exercises }),
    'panel-kuh-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-kuh-03', exercises: p3exercises }),
    'panel-kuh-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-kuh-04', cards: p4cards }),
    'panel-kuh-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-kuh-05', cards: p5cards }),
    'panel-kuh-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-kuh-06', cards: p6cards }),
    'panel-kuh-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-kuh-07', cards: p7cards }),
    'panel-kuh-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-kuh-08', cards: p8cards }),
    'panel-kuh-9': () => initPanelKuh9()
};

initPanelManager({ initializers, enableAccessControl: true });
