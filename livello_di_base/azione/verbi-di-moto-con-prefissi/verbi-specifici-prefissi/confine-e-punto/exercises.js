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
// PANEL 3 — DragDrop · paid
// На машине: ехать con в- / вы-, от-, за- (passare da, «куда мы заехали?!»), до-; n. 4 al presente con «сейчас» * (orig. въехали… связь прервалась); esclusi «заехала за дом» (за- dietro), «выезжаем / уезжаем» (entrambi giusti), treni
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Вчера мы {{1}} в дерево, слава богу, все живы, но машина в ремонте.",
        words: ["вьехали", "въехали", "заехали"],
        correctAnswers: { 1: "въехали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы оттуда еле {{1}}! Повсюду пробки!",
        words: ["выехали", "въехали", "выехоли"],
        correctAnswers: { 1: "выехали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы уже {{1}} от вокзала, когда я вспомнила, что оставила сумку в поезде.",
        words: ["подъехали", "отехали", "отъехали"],
        correctAnswers: { 1: "отъехали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} в тоннель, сейчас пропадёт связь.",
        words: ["въезжаем", "въехали", "вьезжаем"],
        correctAnswers: { 1: "въезжаем" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы поехали на рынок, потом {{1}} в ИКЕА — забрали заказ.",
        words: ["доехали", "заехали", "заехалы"],
        correctAnswers: { 1: "заехали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Жень, мы куда {{1}}?! Мы что, потерялись?!",
        words: ["отъехали", "заехоли", "заехали"],
        correctAnswers: { 1: "заехали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я ненадолго {{1}} к бабушке.",
        words: ["заеду", "доеду", "заедю"],
        correctAnswers: { 1: "заеду" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы заехали к родителям {{1}} вареньем.",
        words: ["на", "за", "для"],
        correctAnswers: { 1: "за" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как {{1}} до Ленинградского вокзала?",
        words: ["заехать", "доехоть", "доехать"],
        correctAnswers: { 1: "доехать" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы ещё не {{1}} до вокзала, когда стало ясно, что мы опоздали на поезд.",
        words: ["доехали", "заехали", "даехали"],
        correctAnswers: { 1: "доехали" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: forme (-езжать, ъ, бежать: забегу) + aspetto, solo frasi con marcatori, con spiegazioni; n. 2–3 al presente con marcatore * (orig. заезжали… задели; подъехала к магазину); n. 10 distrattore «выходим» (non «выедем», anche giusto)
// ============================================================
const p4cards = [
    { front: "Он всегда ___ до станции «Автово».", back: "доезжает", distractors: ["доедет", "доежает"], explanation: "Всегда → НСВ. L'imperfettivo di ехать con prefisso è -езжать: доезжать, приезжать (con «зж»)." },
    { front: "Каждый раз, когда мы ___ в гараж, мы задеваем зеркало.", back: "заезжаем", distractors: ["заедем", "заежаем"], explanation: "Каждый раз → НСВ: заезжаем." },
    { front: "Смотри, к магазину ___ машина!", back: "подъезжает", distractors: ["подъедет", "подезжает"], explanation: "Sta succedendo adesso («смотри!») → НСВ: подъезжает. Dopo под- si scrive «ъ»." },
    { front: "Когда вы ___ к нам в деревню?", back: "приедете", distractors: ["уедете", "приедите"], explanation: "Una visita precisa nel futuro → СВ: приедете (non «приедите»)." },
    { front: "Звони в автосервис, пусть ___ и заберут её.", back: "приедут", distractors: ["приезжают", "приедит"], explanation: "Пусть + futuro СВ: приедут (e poi заберут)." },
    { front: "Ваша подруга только что ___ из Вероны.", back: "приехала", distractors: ["приезжала", "прийехала"], explanation: "Только что = appena arrivata → СВ: приехала (senza «й»)." },
    { front: "На каникулы друг всегда улетает домой, а в этот раз ___ в Крым.", back: "улетел", distractors: ["улетал", "улител"], explanation: "Una volta, in contrasto con «всегда» → СВ: улетел." },
    { front: "Друзья ___ в город вчера.", back: "приехали", distractors: ["прийехали", "приехоли"], explanation: "Passato di приехать: приехал, приехала, приехали (senza «й»)." },
    { front: "Я ___ к тебе на минутку!", back: "забегу", distractors: ["забежу", "забежит"], explanation: "Futuro di забежать: забегу (non «забежу»), come бегу, бежишь… бегут." },
    { front: "Мы ___ из Рима в восемь.", back: "выезжаем", distractors: ["выходим", "выежаем"], explanation: "Partire da una città con un mezzo = выезжать из + genitivo. Partenza in programma → presente НСВ: выезжаем." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Забегу на минутку! — бежать con в- / вы-, при- / у-, под- / от-, до- / за-; originali della PM; distrattori sbagliati per la preposizione; mai «пришла», «выбегает из дома»
// ============================================================
const p5cards = [
    { front: "Алёнка ___ в аудиторию за минуту до звонка.", back: "вбежала", distractors: ["выбежала", "вбижала"] },
    { front: "Мы ___ из леса.", back: "выбежали", distractors: ["вбежали", "выбижали"] },
    { front: "Аня ___ ко мне вся в слезах и упала на стул.", back: "прибежала", distractors: ["убежала", "прибижала"] },
    { front: "Дети ___ к дому.", back: "подбегают", distractors: ["отбегают", "подбегуют"] },
    { front: "Кот ___ от миски.", back: "отбежал", distractors: ["подбежал", "атбежал"] },
    { front: "Я только ___ до супермаркета и обратно!", back: "добегу", distractors: ["забегу", "добежу"] },
    { front: "Мы ___ к вам на минутку! Дорогу совсем снегом занесло!", back: "забежали", distractors: ["добежали", "забежалы"] },
    { front: "— Ох, совершенно нет времени! Попробую ___ в пятницу.", back: "забежать", distractors: ["добежать", "забежить"] },
    { front: "Наш кот постоянно ___ из дома.", back: "убегает", distractors: ["подбегает", "убегет"] },
    { front: "Лена, как обычно, опаздывала, но по дороге на работу ___ за круассанами в свою любимую пекарню.", back: "забежала", distractors: ["добежала", "забежла"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Приплыли на Сицилию — плыть (при-, за- = al largo) + misto ехать / лететь; n. 2, 5, 6 con tempo cambiato e marcatore * (orig. приплыли на лодке; приехало много туристов; приехала к нам из Москвы); esclusi «уплыл / доплыл» con «как далеко», «влетела» al n. 9
// ============================================================
const p6cards = [
    { front: "Рыбаки ___ на лодке к острову.", back: "приплыли", distractors: ["выплыли", "приплылы"] },
    { front: "— Они прилетают? — Нет, они ___ на пароме.", back: "приплывают", distractors: ["прилетают", "приплавают"] },
    { front: "Мы сели на паром поздно ночью и ___ на Сицилию рано утром.", back: "приплыли", distractors: ["прилетели", "приплылы"] },
    { front: "Посмотри, как далеко Саша ___! Он так хорошо плавает!", back: "заплыл", distractors: ["выплыл", "заплил"] },
    { front: "Сюда каждое лето ___ много туристов из разных стран.", back: "приезжает", distractors: ["приехало", "приезжяет"] },
    { front: "Она ___ к нам из Москвы в субботу.", back: "приедет", distractors: ["уедет", "приедит"] },
    { front: "Мы ___ от родителей около девяти.", back: "уехали", distractors: ["приехали", "уехоли"] },
    { front: "В открытое окно ___ красивые птицы.", back: "влетели", distractors: ["вылетели", "влители"] },
    { front: "В комнату ___ муха.", back: "залетела", distractors: ["вылетела", "залитела"] },
    { front: "Он ___ из Италии и привёз нам вино.", back: "приехал", distractors: ["уехал", "приехол"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Spirale: a piedi ↔ con un mezzo / in volo / di corsa — 6 frasi di questa pagina + 4 delle pagine 1–5 (вышел из кабинета, подошли к кабинету, входит в комнату, вышли из аудитории); con spiegazioni; esclusi пришёл в офис / пришла ко мне / ушла домой / зашли на чай (anche ехать giusto)
// ============================================================
const p7cards = [
    { front: "Женя ___ в аэропорт на такси около шести.", back: "приехал", distractors: ["пришёл", "прийехал"], explanation: "Con un mezzo (на такси) → приехать. A piedi → прийти." },
    { front: "Директор ___ из кабинета покурить и сейчас вернётся.", back: "вышел", distractors: ["выехал", "вышол"], explanation: "Da una stanza si esce a piedi → выйти. Выехать solo con un mezzo." },
    { front: "Мы оттуда еле ___! Повсюду пробки!", back: "выехали", distractors: ["вышли", "выехоли"], explanation: "Пробки = siamo in macchina → выехать." },
    { front: "Студентка, опаздывая, ___ в аудиторию.", back: "вбежала", distractors: ["въехала", "вбежла"], explanation: "Di corsa (опаздывая) → вбежать в + accusativo." },
    { front: "Мы ___ к кабинету, но входить не стали.", back: "подошли", distractors: ["подъехали", "подашли"], explanation: "Dentro un edificio ci si avvicina a piedi → подойти к + dativo." },
    { front: "Самолёт ___ в 12 часов.", back: "вылетает", distractors: ["выходит", "вылитает"], explanation: "L'aereo parte = вылетать. Orario fisso → presente НСВ." },
    { front: "Она всегда ___ ко мне в комнату без стука.", back: "входит", distractors: ["въезжает", "входют"], explanation: "In una stanza si entra a piedi → входить. Всегда → НСВ." },
    { front: "Мы поехали на рынок, потом ___ в ИКЕА — забрали заказ.", back: "заехали", distractors: ["доехали", "заехалы"], explanation: "Passare da un posto lungo la strada in macchina = заехать в + accusativo." },
    { front: "Мы ___ из аудитории после лекции.", back: "вышли", distractors: ["выехали", "вышлы"], explanation: "Da un'aula si esce a piedi → выйти из + genitivo." },
    { front: "Самолёт опоздал на два часа, и Андрей и Женя ___ в гостиницу поздно ночью.", back: "приехали", distractors: ["прилетели", "приехили"], explanation: "In città si arriva in volo (прилететь), all'albergo con l'auto o il taxi → приехать." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-sp-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-sp-01', exercises: p1exercises }),
    'panel-sp-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-sp-02', exercises: p2exercises }),
    'panel-sp-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-sp-03', exercises: p3exercises }),
    'panel-sp-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-sp-04', cards: p4cards }),
    'panel-sp-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-sp-05', cards: p5cards }),
    'panel-sp-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-sp-06', cards: p6cards }),
    'panel-sp-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-sp-07', cards: p7cards })
};

initPanelManager({ initializers, enableAccessControl: true });
