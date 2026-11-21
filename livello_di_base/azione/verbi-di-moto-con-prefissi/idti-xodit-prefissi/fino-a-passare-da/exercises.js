import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Дойти или зайти» (Livello di base · Verbi di moto con prefissi · Идти / ходить):
// arrivare fino a ↔ passare da — до- (punto finale del percorso: до + gen.) ↔ за- (visita breve, di passaggio: в / на + acc., к + dat., за + strum.; «по дороге»),
// con entrambe le coppie aspettuali: доходить / дойти ↔ заходить / зайти.
// Trappole (quiz della PM): «зайти до магазина» ✗ → зайти в магазин; «дойти до бабушки» = arrivarci a piedi, non farle visita; «Нам пора доходить!» ✗;
// зайти (visita breve) ≠ войти (attraversare la soglia); «Заходи!» = invito → НСВ.
// Esclusi: за- «dietro» (зашли за угол, солнце зашло) → «Обход и перемена»; доехать / заехать / забежать → pagine «Специальные».
// Frasi nuove solo con il permesso della PM: lessico utile e frequente (città, incontro), ogni carta comprensibile da sola. Tempi misti in ogni pannello.
// Schema: 1 D&D (con spiegazioni) · 2–3 D&D · 4 FC (con spiegazioni) · 5 FC · 6 FC misto (pagine 1–3) · Quiz (panel-dz-9)

// ============================================================
// PANEL 1 — DragDrop · public
// Nuovo: дойти до + gen. ↔ зайти в / к / за (visita breve, scopo); trappole dei quiz della PM («зайти до банка» ✗); solo originali, con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно {{1}} до банка.",
        words: ["зайти", "дойти", "дайти"],
        correctAnswers: { 1: "дойти" },
        explanation: "Arrivare fino a = дойти до + genitivo. «Зайти до банка» non si dice: зайти в банк."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Им нужно дойти {{1}} и вернуться.",
        words: ["до магазина", "в магазин", "до магазин"],
        correctAnswers: { 1: "до магазина" },
        explanation: "Дойти vuole до + genitivo (до магазина), non «в»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Каждый раз, когда я {{1}} за мороженым, мы болтаем с продавщицей.",
        words: ["дохожу", "захажу", "захожу"],
        correctAnswers: { 1: "захожу" },
        explanation: "Каждый раз = abitudine → НСВ: захожу. Зайти за + strumentale = passare a prendere qualcosa."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно зайти {{1}} за кефиром.",
        words: ["в магазин", "до магазина", "в магазине"],
        correctAnswers: { 1: "в магазин" },
        explanation: "Passare in un posto = зайти в + accusativo. «До магазина» va con дойти."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} к бабушке на чай.",
        words: ["дошли", "зашли", "зашлы"],
        correctAnswers: { 1: "зашли" },
        explanation: "Una visita breve = зайти к + dativo. «Дошли» vorrebbe «до»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Начальник попросил {{1}} к нему на пару слов.",
        words: ["дойти", "зайтить", "зайти"],
        correctAnswers: { 1: "зайти" },
        explanation: "Passare da qualcuno = зайти к + dativo: зайти к нему."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "По дороге домой я {{1}} в аптеку.",
        words: ["дойду", "зайдю", "зайду"],
        correctAnswers: { 1: "зайду" },
        explanation: "По дороге = di passaggio → зайти. Futuro: зайду (non «зайдю»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Как {{1}} до набережной, поверните налево.",
        words: ["дойдёте", "зайдёте", "дойдёти"],
        correctAnswers: { 1: "дойдёте" },
        explanation: "Arrivare fino al punto finale del percorso = дойти до: как дойдёте до набережной."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ей нужно зайти {{1}} к врачу.",
        words: ["за справку", "за справкой", "в справку"],
        correctAnswers: { 1: "за справкой" },
        explanation: "Lo scopo: зайти за + strumentale (за справкой = a prendere il certificato)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он часто {{1}} к соседям.",
        words: ["заходит", "доходит", "заходет"],
        correctAnswers: { 1: "заходит" },
        explanation: "Часто = abitudine → НСВ: заходит."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Как добраться до…? — testi-percorso della PM (дойти до + gen.); n. 6 e 8 adattati da ехать a идти; n. 7 e 10 nuovi approvati dalla PM; distrattori mai «идите» (anche giusto)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Чтобы добраться от работы до дома, мне нужно {{1}} до остановки автобуса.",
        words: ["дойти", "зайти", "дайти"],
        correctAnswers: { 1: "дойти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Чтобы {{1}} до супермаркета, вам нужно идти прямо по дороге метров двести.",
        words: ["зайти", "дойтить", "дойти"],
        correctAnswers: { 1: "дойти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Чтобы дойти {{1}}, вам нужно выйти к площади Ленина.",
        words: ["в офис", "до офиса", "до офис"],
        correctAnswers: { 1: "до офиса" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Поверните налево и {{1}} до большого современного здания с вывеской «Гута-банк».",
        words: ["дойдите", "зайдите", "дойдити"],
        correctAnswers: { 1: "дойдите" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Чтобы {{1}} до почты, нужно пройти прямо до площади и перейти дорогу возле аптеки.",
        words: ["войти", "дойти", "дайти"],
        correctAnswers: { 1: "дойти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы ещё не {{1}} до вокзала, когда стало ясно, что мы опоздали на поезд.",
        words: ["зашли", "дашли", "дошли"],
        correctAnswers: { 1: "дошли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я {{1}} до остановки за пять минут.",
        words: ["захожу", "дохожу", "дахожу"],
        correctAnswers: { 1: "дохожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он всегда {{1}} пешком до станции «Автово», а завтра дойдёт до «Нарвской».",
        words: ["доходит", "заходит", "доходет"],
        correctAnswers: { 1: "доходит" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "{{1}} до парка и идите вдоль велосипедной дорожки прямо до дома.",
        words: ["Зайдите", "Дойдити", "Дойдите"],
        correctAnswers: { 1: "Дойдите" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты уже {{1}} до дома? Напиши мне!",
        words: ["зашла", "дошла", "дашла"],
        correctAnswers: { 1: "дошла" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// По дороге: зайти в / на + acc., к + dat., за + strum.; n. 2 (orig. телеграф), 5 (orig. туда), 10 (orig. забежала) adattati; n. 7–8 nuovi approvati dalla PM; distrattori mai пошла / вошла / пришли (anche giusti)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "По дороге Нина {{1}} в обувной магазин.",
        words: ["дошла", "зашла", "зошла"],
        correctAnswers: { 1: "зашла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "По дороге он {{1}} на почту и отправил письмо.",
        words: ["зашёл", "дошёл", "зашол"],
        correctAnswers: { 1: "зашёл" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Утром зайди {{1}}, вместе пойдём в университет.",
        words: ["за меня", "за мне", "за мной"],
        correctAnswers: { 1: "за мной" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Ты идёшь в кино один? — Нет, с Олегом, он {{1}} за мной.",
        words: ["дойдёт", "зайдит", "зайдёт"],
        correctAnswers: { 1: "зайдёт" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Когда я шла в университет, я увидела красивый сад и {{1}} в него.",
        words: ["зашла", "дошла", "зашола"],
        correctAnswers: { 1: "зашла" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} в магазин, чтобы купить хлеб.",
        words: ["дошли", "зашли", "зашлы"],
        correctAnswers: { 1: "зашли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "По дороге на работу я всегда {{1}} в кафе за кофе.",
        words: ["дохожу", "захажу", "захожу"],
        correctAnswers: { 1: "захожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я {{1}} в магазин, тебе что-нибудь купить?",
        words: ["захожу", "дохожу", "захожю"],
        correctAnswers: { 1: "захожу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} к доктору за справкой.",
        words: ["дошли", "зашлы", "зашли"],
        correctAnswers: { 1: "зашли" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Лена, как обычно, опаздывала, но по дороге на работу {{1}} за круассанами в свою любимую пекарню.",
        words: ["дошла", "зашла", "зошла"],
        correctAnswers: { 1: "зашла" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Nuovo: aspetto — заходить / зайти, доходить / дойти: forme + abitudine / visita precisa / risultato / invito, con spiegazioni; n. 5 frase (PM), adattata da «Я ненадолго заеду к бабушке»; n. 10 dal dialogo «Можно? — Заходи, заходи!»
// ============================================================
const p4cards = [
    { front: "заходить → я …", back: "захожу", distractors: ["зайду", "заходю"], explanation: "Заходить (НСВ), presente: захожу, заходишь… «д» → «ж» alla 1ª persona." },
    { front: "доходить → ты …", back: "доходишь", distractors: ["дойдёшь", "доходешь"], explanation: "Доходить: дохожу, доходишь… come заходить." },
    { front: "зайти → он, прошедшее время …", back: "зашёл", distractors: ["заходил", "зашол"], explanation: "Passato di зайти: зашёл, зашла, зашли." },
    { front: "дойти → она, прошедшее время …", back: "дошла", distractors: ["доходила", "дашла"], explanation: "Passato di дойти: дошёл, дошла, дошли (con «о»)." },
    { front: "Я ненадолго ___ к бабушке.", back: "зайду", distractors: ["дойду", "зайдю"], explanation: "Futuro di зайти: зайду (non «зайдю»). Passare da qualcuno = зайти к + dativo; «дойду» vorrebbe «до»." },
    { front: "дойти → вы, будущее время …", back: "дойдёте", distractors: ["доходите", "дойдёти"], explanation: "Futuro di дойти: дойду, дойдёшь, дойдёте." },
    { front: "— Когда ___ к нам на кофе? Ты уже месяц обещаешь!", back: "зайдёшь", distractors: ["заходишь", "зайдишь"], explanation: "Una visita precisa nel futuro → СВ: зайдёшь." },
    { front: "Обычно я ___ до остановки за пять минут.", back: "дохожу", distractors: ["дойду", "дахожу"], explanation: "Обычно = abitudine → НСВ: дохожу." },
    { front: "Ты уже ___ до дома? Напиши мне!", back: "дошла", distractors: ["доходила", "дашла"], explanation: "Уже = il risultato è raggiunto → СВ: дошла." },
    { front: "— Можно? — ___!", back: "Заходи", distractors: ["Дойди", "Захади"], explanation: "Invitare a entrare = imperativo НСВ: заходи! Si usa per dire «prego, entra»." }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-dz-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-dz-01', exercises: p1exercises }),
    'panel-dz-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-dz-02', exercises: p2exercises }),
    'panel-dz-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-dz-03', exercises: p3exercises }),
    'panel-dz-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-dz-04', cards: p4cards })
};

initPanelManager({ initializers, enableAccessControl: true });
