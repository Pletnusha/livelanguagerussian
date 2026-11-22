import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Дома: супер мама» — quarta pagina del blocco «Нужно или обычно» (piano approvato dalla PM 20.11.2026).
// Solo due forme: presente imperfettivo (обычно / всегда / два раза в неделю) e нужно + infinito perfettivo. Niente passato / futuro, nemmeno nel test.
// Fonti (originali): «список дел молодой мамы», «cсупер мама планы на день» (5 dialoghi), «нужно-обычно Дома_1»; vecchio = pagine «В университете», «В офисе».
// Nuova difficoltà: come si forma il perfettivo — по- (постирать, погладить, почистить, позавтракать, позвонить), вы- (вымыть), при- (приготовить),
// с- (съесть, сходить), у- (убрать, убраться), altra radice (встать / вставать, лечь / ложиться, купить / покупать); riflessivi (умыться, проснуться, убраться).
// Esclusi: «Андрей дома один» (нужно + imperfettivo per azioni regolari — livello successivo), futuro / condizionale («даст», «ляжешь», «хорошо бы»).
// Dopo «нужно» mai l'infinito imperfettivo come sbagliata. Niente domande tra parentesi (regola 7.1).
// Schema: 1 D&D lista (+ vecchio, con spiegazioni) · 2 D&D faccende · 3 D&D quando / ogni quanto · 4 FC обычно o нужно (con spiegazioni)
//         5 FC tre forme · 6 FC finisci la frase (misto) · 7 FC mattina «Уже!» (con spiegazioni) · 8 FC come si forma il perfettivo (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Lessico (lista «Список дел молодой мамы на сегодня» + dialoghi «Супермама»): quale verbo con quale oggetto — 8 frasi originali + 2 vecchie dalla pagina «В офисе»; sbagliate = verbi della stessa lista che lì non possono stare; con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} рубашки.",
        words: ["позвонить", "постирать", "лечь"],
        correctAnswers: { 1: "постирать" },
        explanation: "Lavare i vestiti (in lavatrice): постирать рубашки."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} детские вещи.",
        words: ["погладить", "позавтракать", "сходить"],
        correctAnswers: { 1: "погладить" },
        explanation: "Stirare: погладить вещи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} полы.",
        words: ["позвонить", "купить", "вымыть"],
        correctAnswers: { 1: "вымыть" },
        explanation: "Lavare il pavimento: вымыть полы. Мыть per pavimenti, piatti, finestre; стирать solo per i vestiti."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} в парикмахерскую.",
        words: ["погладить", "вымыть", "сходить"],
        correctAnswers: { 1: "сходить" },
        explanation: "Andare (e tornare) dal parrucchiere: сходить в парикмахерскую."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} педиатру.",
        words: ["позвонить", "купить", "постирать"],
        correctAnswers: { 1: "позвонить" },
        explanation: "Telefonare a qualcuno: позвонить + dativo (педиатру)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} продукты.",
        words: ["умыться", "купить", "лечь"],
        correctAnswers: { 1: "купить" },
        explanation: "Comprare: купить продукты (fare la spesa)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "До обеда нужно {{1}} обед.",
        words: ["приготовить", "почистить", "умыться"],
        correctAnswers: { 1: "приготовить" },
        explanation: "Preparare da mangiare: приготовить обед."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Тебе нужно {{1}} зубы.",
        words: ["погладить", "почистить", "лечь"],
        correctAnswers: { 1: "почистить" },
        explanation: "Lavarsi i denti: почистить зубы."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} отчёт к понедельнику.",
        words: ["назначить", "встретиться", "подготовить"],
        correctAnswers: { 1: "подготовить" },
        explanation: "Dalla pagina «В офисе»: preparare un rapporto — подготовить отчёт."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Коллеге нужно {{1}} встречу заказчику.",
        words: ["назначить", "составить", "закончить"],
        correctAnswers: { 1: "назначить" },
        explanation: "Dalla pagina «В офисе»: fissare un appuntamento — назначить встречу кому."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Lessico: le faccende di casa — il nome giusto nella forma giusta. 10 frasi originali («список дел молодой мамы», dialoghi «Супермама», «нужно-обычно Дома»), solo presente e нужно + perfettivo; sbagliate = stessa parola in un altro caso + oggetto che con quel verbo non va (стирать полы, мыть рубашки); senza spiegazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я стираю {{1}} в стиральной машине.",
        words: ["полы", "рубашек", "рубашки"],
        correctAnswers: { 1: "рубашки" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я всегда глажу детские {{1}}.",
        words: ["вещи", "вещей", "зубы"],
        correctAnswers: { 1: "вещи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Она моет {{1}} два раза в неделю.",
        words: ["рубашки", "полы", "полов"],
        correctAnswers: { 1: "полы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как часто вы ходите в {{1}}?",
        words: ["продукты", "парикмахерскую", "парикмахерской"],
        correctAnswers: { 1: "парикмахерскую" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Она звонит {{1}} пятый раз!",
        words: ["педиатра", "педиатр", "педиатру"],
        correctAnswers: { 1: "педиатру" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы покупаем {{1}} на рынке.",
        words: ["продукты", "продуктов", "посуду"],
        correctAnswers: { 1: "продукты" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно вымыть {{1}} после вечеринки.",
        words: ["посуду", "посуда", "рубашки"],
        correctAnswers: { 1: "посуду" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно убрать {{1}}.",
        words: ["зубы", "квартира", "квартиру"],
        correctAnswers: { 1: "квартиру" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "После обеда нужно вымыть {{1}}.",
        words: ["бельё", "окна", "окон"],
        correctAnswers: { 1: "окна" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мой сын обычно умывается, чистит {{1}}, ест шоколад.",
        words: ["зубы", "зубов", "педиатру"],
        correctAnswers: { 1: "зубы" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Quando? Ogni quanto? Dove? — 10 frasi originali («список дел молодой мамы», dialoghi «Супермама», «нужно-обычно Дома»), solo presente e нужно + perfettivo; sbagliate = errori di forma o «на прошлой неделе» / «часто» dove non possono stare (mai «поздно», «обычно», «как долго», che sarebbero corretti); senza spiegazioni
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Она моет полы {{1}}.",
        words: ["на прошлой неделе", "два раза в неделю", "два раза в недели"],
        correctAnswers: { 1: "два раза в неделю" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно встать очень {{1}}.",
        words: ["часто", "ранний", "рано"],
        correctAnswers: { 1: "рано" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты же знаешь, что обычно я ложусь {{1}}!",
        words: ["поздно", "поздний", "на прошлой неделе"],
        correctAnswers: { 1: "поздно" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} нужно сходить за продуктами, приготовить обед, постирать бельё.",
        words: ["До обеда", "До обед", "На прошлой неделе"],
        correctAnswers: { 1: "До обеда" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "После {{1}} нужно погладить вещи, убраться, вымыть окна.",
        words: ["обед", "обедом", "обеда"],
        correctAnswers: { 1: "обеда" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно вымыть посуду после {{1}}.",
        words: ["вечеринка", "вечеринки", "вечеринку"],
        correctAnswers: { 1: "вечеринки" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я стираю рубашки в {{1}} машине.",
        words: ["стиральная", "стиральной", "стиральную"],
        correctAnswers: { 1: "стиральной" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы покупаем продукты на {{1}}.",
        words: ["рынке", "рынок", "рынка"],
        correctAnswers: { 1: "рынке" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как {{1}} вы ходите в парикмахерскую?",
        words: ["частый", "частое", "часто"],
        correctAnswers: { 1: "часто" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Мне нужно лечь {{1}}.",
        words: ["в двух", "в двое", "в два"],
        correctAnswers: { 1: "в два" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Aspetto: 5 coppie da «список дел молодой мамы» e dai dialoghi «Супермама» — стирать / постирать, мыть / вымыть, звонить / позвонить, покупать / купить, готовить / приготовить. Presente imperfettivo (sbagliate: due infiniti) ↔ нужно + infinito perfettivo (sbagliate: presente e futuro, mai l'infinito imperfettivo). Niente гладить / погладить: in MATCH «погладить рубашки» e «постирать вещи» sarebbero corretti entrambi; con spiegazioni
// ============================================================
const p4cards = [
    { front: "Обычно я ___ рубашки в стиральной машине.", back: "стираю", distractors: ["постирать", "стирать"], explanation: "Обычно = abitudine: imperfettivo al presente (я стираю)." },
    { front: "Сегодня нужно ___ рубашки в стиральной машине.", back: "постирать", distractors: ["стираю", "постираю"], explanation: "Oggi, una cosa da finire: нужно + perfettivo (по-стирать)." },
    { front: "Она ___ полы два раза в неделю.", back: "моет", distractors: ["вымыть", "мыть"], explanation: "Два раза в неделю = abitudine: imperfettivo al presente (она моет)." },
    { front: "Сегодня нужно ___ полы.", back: "вымыть", distractors: ["мою", "вымою"], explanation: "Oggi, un risultato: нужно + perfettivo (вы-мыть)." },
    { front: "Она ___ педиатру пятый раз!", back: "звонит", distractors: ["позвонить", "звонить"], explanation: "Пятый раз = un'azione che si ripete: imperfettivo al presente (она звонит)." },
    { front: "Сегодня нужно ___ педиатру.", back: "позвонить", distractors: ["звоню", "позвоню"], explanation: "Una telefonata da fare oggi: нужно + perfettivo (по-звонить)." },
    { front: "Мы ___ продукты на рынке.", back: "покупаем", distractors: ["купить", "покупать"], explanation: "Dove facciamo di solito la spesa: abitudine → imperfettivo al presente (мы покупаем)." },
    { front: "Сегодня нужно ___ продукты на рынке.", back: "купить", distractors: ["покупаю", "куплю"], explanation: "Oggi, una cosa da fare: нужно + perfettivo (купить — un'altra radice, non un prefisso!)." },
    { front: "— Ты что делаешь сегодня вечером? — После вечеринки мою посуду, убираю квартиру, ___ ужин.", back: "готовлю", distractors: ["приготовить", "готовить"], explanation: "Il presente russo ha solo l'imperfettivo: мою, убираю, готовлю (anche per stasera)." },
    { front: "До обеда нужно сходить за продуктами, ___ обед, постирать бельё.", back: "приготовить", distractors: ["готовлю", "приготовлю"], explanation: "Una lista di cose da finire: нужно + perfettivo (при-готовить)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Tre forme: 5 nuove coppie dai dialoghi «Супермама» e da «нужно-обычно Дома» — чистить / почистить, ложиться / лечь, ходить / сходить, убирать / убрать, умываться / умыться. Presente imperfettivo (sbagliate: due infiniti) ↔ нужно + infinito perfettivo (sbagliate: presente e futuro, mai l'infinito imperfettivo). Niente гладить / погладить: in MATCH «нужно ___ вещи» andrebbe anche con убрать / почистить (va nel pannello 8); senza spiegazioni
// ============================================================
const p5cards = [
    { front: "Мой сын обычно умывается, ___ зубы, ест шоколад.", back: "чистит", distractors: ["почистить", "чистить"] },
    { front: "— Тебе нужно умыться. — Уже! — …___ зубы.", back: "почистить", distractors: ["чистишь", "почистишь"] },
    { front: "Ты же знаешь, что обычно я ___ поздно!", back: "ложусь", distractors: ["лечь", "ложиться"] },
    { front: "Мне нужно ___ в два.", back: "лечь", distractors: ["ложусь", "лягу"] },
    { front: "Как часто вы ___ в парикмахерскую?", back: "ходите", distractors: ["сходить", "ходить"] },
    { front: "Сегодня нужно ___ в парикмахерскую.", back: "сходить", distractors: ["хожу", "схожу"] },
    { front: "После вечеринки мою посуду, ___ квартиру, мою полы.", back: "убираю", distractors: ["убрать", "убирать"] },
    { front: "Нужно вымыть посуду после вечеринки, ___ квартиру, вымыть пол.", back: "убрать", distractors: ["убираю", "уберу"] },
    { front: "Мой сын обычно ___, чистит зубы, ест шоколад.", back: "умывается", distractors: ["умыться", "умываться"] },
    { front: "Нужно уговорить детей проснуться, ___, почистить зубы.", back: "умыться", distractors: ["умываются", "умоются"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: inizio → fine. 6 frasi originali («список дел молодой мамы», dialoghi «Супермама», «нужно-обычно Дома»: trappole «обычно я нужно», «тебе умываешься», caso dopo в) + 4 vecchie (pagina «В университете»: к каждому семинару мы пишем, пять экзаменов; pagina «В офисе»: встречу заказчику, три встречи). Inizi scelti in modo che in MATCH ogni fine stia solo con il suo inizio (persona, caso): niente «Нам…» / «Директор редко…»; senza spiegazioni
// ============================================================
const p6cards = [
    { front: "Обычно я…", back: "стираю рубашки в стиральной машине.", distractors: ["нужно постирать рубашки в стиральной машине.", "постирать рубашки в стиральной машине."] },
    { front: "Мой сын обычно…", back: "умывается, чистит зубы, ест шоколад.", distractors: ["нужно умыться, почистить зубы, съесть шоколад.", "умыться, почистить зубы, съесть шоколад."] },
    { front: "Тебе…", back: "нужно умыться.", distractors: ["умываешься.", "умоешься."] },
    { front: "— Привет, какие планы? — До обеда нужно…", back: "сходить за продуктами, приготовить обед, постирать бельё.", distractors: ["хожу за продуктами, готовлю обед, стираю бельё.", "сходим за продуктами, приготовим обед, постираем бельё."] },
    { front: "Как часто вы ходите в…", back: "парикмахерскую?", distractors: ["парикмахерской?", "парикмахерская?"] },
    { front: "Она моет полы два раза в…", back: "неделю.", distractors: ["неделя.", "недели."] },
    { front: "К каждому семинару мы…", back: "пишем доклад или читаем статьи.", distractors: ["нужно написать доклад или прочитать статьи.", "написать доклад или прочитать статьи."] },
    { front: "Ты знаешь, что в эту сессию нам нужно сдать пять…", back: "экзаменов?", distractors: ["экзамены?", "экзамена?"] },
    { front: "Коллеге нужно назначить встречу…", back: "заказчику.", distractors: ["заказчик.", "заказчиком."] },
    { front: "— Тебе нужно проверить эти договоры. — Я не успею, у меня три…", back: "встречи сегодня.", distractors: ["встреч сегодня.", "встреча сегодня."] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Mattina «Уже!»: dialogo 1 (трудный день, уговорить детей), dialogo 5 (тебе нужно умыться — уже) e «Мой сын обычно…» (нужно-обычно Дома). La mamma: нужно + perfettivo (risultato) → il figlio: «Уже!» (il risultato c'è); l'abitudine del figlio: imperfettivo presente. In MATCH un solo infinito intransitivo (встать): проснуться / умыться / позавтракать andrebbero con ogni «нужно ___»; niente «снова» come risposta (andrebbe con «Уже»); con spiegazioni
// ============================================================
const p7cards = [
    { front: "Мой сын обычно ___, чистит зубы, ест шоколад.", back: "умывается", distractors: ["умыться", "умываться"], explanation: "Обычно = ogni mattina: imperfettivo presente. Il -ся resta in tutte e due le forme: умываться / умыться." },
    { front: "Мой сын обычно умывается, ___ зубы, ест шоколад.", back: "чистит", distractors: ["почистить", "чистить"], explanation: "Abitudine: imperfettivo presente (он чистит). Perfettivo: по-чистить." },
    { front: "Мой сын обычно умывается, чистит зубы, ___ шоколад и снова чистит зубы.", back: "ест", distractors: ["съесть", "есть"], explanation: "Abitudine: imperfettivo presente (он ест). Perfettivo: с-ъесть." },
    { front: "— Тебе нужно умыться. — ___!", back: "Уже", distractors: ["Обычно", "Рано"], explanation: "«Уже!» = è già fatto: il risultato c'è. Per questo la mamma dice нужно + perfettivo." },
    { front: "— …и снова ___ зубы. — Блин!", back: "почистить", distractors: ["чистишь", "почистишь"], explanation: "«…» = (тебе нужно). Снова = ancora una volta, ma con un risultato: perfettivo." },
    { front: "— …Почистить зубы. — Уже! — …___ шоколад. — Уже!", back: "съесть", distractors: ["ешь", "съешь"], explanation: "Съесть = mangiare tutto (perfettivo con с-). Dopo «нужно» l'infinito perfettivo." },
    { front: "Ох, трудный день! Нужно ___ очень рано.", back: "встать", distractors: ["встаю", "встану"], explanation: "Встать (perf.) / вставать (imperf., con -ва-: я встаю). Domani mattina, una volta: нужно встать." },
    { front: "…потому что нужно уговорить ___ проснуться, умыться, почистить зубы.", back: "детей", distractors: ["дети", "детям"], explanation: "Уговорить кого? accusativo plurale animato: детей." },
    { front: "…потому что нужно ___ детей проснуться, умыться, почистить зубы.", back: "уговорить", distractors: ["уговариваю", "уговорю"], explanation: "Уговорить = convincere (perf., ci si riesce). Imperfettivo: уговаривать." },
    { front: "— Привет! Как дела? — Привет! Ох, ___ день!", back: "трудный", distractors: ["трудная", "трудное"], explanation: "День è maschile: трудный день — una giornata pesante." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Come si forma il perfettivo, in frasi (regola PM 21–22.11: niente carte «НСВ → СВ»): prima la frase riconoscibile con l'imperfettivo, poi «нужно ___» → la coppia perfettiva; in MATCH ogni frase va solo con la sua coppia, perché l'imperfettivo è nella frase. 7 coppie di casa (по-, вы-, при-, с-, forma più corta, altra forma) + 3 vecchie (pagina «В университете»: учить → выучить, сдавать → сдать; pagina «В офисе»: заканчивать → закончить). Sbagliate = perfettivi veri di altri verbi, spesso con lo stesso prefisso (si riconosce la radice); mai un prefisso «sbagliato» che esiste (помыть, выстирать, выгладить). Niente убрать (у- fa parte della radice); con spiegazioni
// ============================================================
const p8cards = [
    { front: "Я всегда глажу детские вещи. Сегодня нужно ___ детские вещи.", back: "погладить", distractors: ["почистить", "позвонить"], explanation: "по- + гладить. Con по- anche: постирать, почистить, позвонить, позавтракать." },
    { front: "Она моет полы два раза в неделю. Сегодня нужно ___ полы.", back: "вымыть", distractors: ["выучить", "выполнить"], explanation: "вы- + мыть: вымыть полы, посуду, окна." },
    { front: "Обычно я готовлю ужин. До обеда нужно ___ обед.", back: "приготовить", distractors: ["погладить", "вымыть"], explanation: "при- + готовить: il cibo. Un documento invece si подготовить (pagina «В офисе»)." },
    { front: "Мой сын обычно ест шоколад. — …___ шоколад. — Уже!", back: "съесть", distractors: ["сходить", "сдать"], explanation: "с- + есть; davanti a е si scrive съ-: съесть." },
    { front: "Как часто вы ходите в парикмахерскую? Сегодня нужно ___ в парикмахерскую.", back: "сходить", distractors: ["съесть", "сдать"], explanation: "с- + ходить: andare e tornare (una volta)." },
    { front: "Мы покупаем продукты на рынке. Сегодня нужно ___ продукты.", back: "купить", distractors: ["закончить", "встать"], explanation: "Attenzione: qui il perfettivo è più corto, senza по-! покупать → купить." },
    { front: "Обычно я ложусь поздно, но сегодня мне нужно ___ в два.", back: "лечь", distractors: ["купить", "съесть"], explanation: "Due forme diverse: ложиться / лечь (я ложусь — мне нужно лечь)." },
    { front: "Обычно мы учим новые слова. К понедельнику нужно ___ спряжения глаголов.", back: "выучить", distractors: ["вымыть", "выполнить"], explanation: "Dalla pagina «В университете»: вы- + учить, imparare fino in fondo." },
    { front: "Обычно мы сдаём три экзамена, но в эту сессию нужно ___ пять!", back: "сдать", distractors: ["встать", "съесть"], explanation: "Dalla pagina «В университете»: -ва- solo nell'imperfettivo — сдавать / сдать, come вставать / встать." },
    { front: "Я обычно заканчиваю отчёт к концу недели, а сегодня нужно ___ отчёт до обеда.", back: "закончить", distractors: ["купить", "лечь"], explanation: "Dalla pagina «В офисе»: il perfettivo è più corto — заканчивать → закончить." }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelSmm9() {
    const panel = document.getElementById('panel-smm-9');
    if (!panel) return;

    const container = panel.querySelector('#smm-9-cards-container');
    const prevBtn   = panel.querySelector('#smm-9-deck-prev');
    const nextBtn   = panel.querySelector('#smm-9-deck-next');
    const counterEl = panel.querySelector('#smm-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Обычно я ___ рубашки в стиральной машине.", options: ["постирать", "стираю", "стирать"], answer: "стираю" },
        { question: "Сегодня нужно ___ полы.", options: ["мою", "вымою", "вымыть"], answer: "вымыть" },
        { question: "Она звонит ___ пятый раз!", options: ["педиатру", "педиатра", "педиатр"], answer: "педиатру" },
        { question: "Мы покупаем продукты на ___.", options: ["рынок", "рынке", "рынка"], answer: "рынке" },
        { question: "Я всегда ___ детские вещи.", options: ["гладить", "глажу", "погладить"], answer: "глажу" },
        { question: "Нужно ___ в парикмахерскую.", options: ["хожу", "схожу", "сходить"], answer: "сходить" },
        { question: "Ты же знаешь, что обычно я ложусь ___!", options: ["поздно", "поздний", "поздняя"], answer: "поздно" },
        { question: "Нужно вымыть посуду после ___.", options: ["вечеринка", "вечеринку", "вечеринки"], answer: "вечеринки" },
        { question: "Мой сын обычно умывается, ___ зубы, ест шоколад.", options: ["чистит", "почистить", "чистить"], answer: "чистит" },
        { question: "Нужно уговорить детей ___, умыться, почистить зубы.", options: ["просыпаются", "проснуться", "проснутся"], answer: "проснуться" }
    ];
    const matchPairs = [
        { left: "Обычно я…", right: "стираю рубашки в стиральной машине." },
        { left: "Мой сын обычно…", right: "умывается, чистит зубы, ест шоколад." },
        { left: "Тебе…", right: "нужно умыться." },
        { left: "Как часто вы ходите в…", right: "парикмахерскую?" },
        { left: "Она моет полы два раза в…", right: "неделю." },
        { left: "До обеда нужно сходить за…", right: "продуктами." },
        { left: "После обеда нужно погладить вещи, убраться, вымыть…", right: "окна." },
        { left: "Нужно уговорить…", right: "детей проснуться." },
        { left: "Мне нужно лечь…", right: "в два." },
        { left: "Сегодня нужно позвонить…", right: "педиатру." }
    ];
    const quizData = [
        { id: "smm9-w1", promptPrefix: "Обычно я ", promptSuffix: " рубашки в стиральной машине.", answers: ["стираю"] },
        { id: "smm9-w2", promptPrefix: "После обеда нужно ", promptSuffix: " вещи, убраться, вымыть окна.", answers: ["погладить", "постирать", "убрать"] },
        { id: "smm9-w3", promptPrefix: "Она ", promptSuffix: " полы два раза в неделю.", answers: ["моет"] },
        { id: "smm9-w4", promptPrefix: "Нужно ", promptSuffix: " посуду после вечеринки.", answers: ["вымыть", "помыть"] },
        { id: "smm9-w5", promptPrefix: "Мы ", promptSuffix: " продукты на рынке.", answers: ["покупаем", "берём"] },
        { id: "smm9-w6", promptPrefix: "До обеда нужно сходить за продуктами, ", promptSuffix: " обед, постирать бельё.", answers: ["приготовить", "сварить", "сделать"] },
        { id: "smm9-w7", promptPrefix: "— Ты ещё не в постели? — Ты же знаешь, что обычно я ", promptSuffix: " поздно!", answers: ["ложусь"] },
        { id: "smm9-w8", promptPrefix: "Мне нужно ", promptSuffix: " в два.", answers: ["лечь", "встать"] },
        { id: "smm9-w9", promptPrefix: "Мой сын обычно ", promptSuffix: ", чистит зубы, ест шоколад.", answers: ["умывается"] },
        { id: "smm9-w10", promptPrefix: "Тебе нужно ", promptSuffix: " зубы.", answers: ["почистить"] }
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
            card.className = 'fca01-card-container smm-9-card';
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
        container.querySelectorAll('.smm-9-card').forEach(card => {
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
                const card    = this.closest('.smm-9-card');
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
        container.querySelectorAll('.smm-9-card').forEach((c, i) => {
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
    'panel-smm-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-smm-01', exercises: p1exercises }),
    'panel-smm-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-smm-02', exercises: p2exercises }),
    'panel-smm-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-smm-03', exercises: p3exercises }),
    'panel-smm-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-smm-04', cards: p4cards }),
    'panel-smm-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-smm-05', cards: p5cards }),
    'panel-smm-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-smm-06', cards: p6cards }),
    'panel-smm-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-smm-07', cards: p7cards }),
    'panel-smm-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-smm-08', cards: p8cards }),
    'panel-smm-9': () => initPanelSmm9()
};

initPanelManager({ initializers, enableAccessControl: true });
