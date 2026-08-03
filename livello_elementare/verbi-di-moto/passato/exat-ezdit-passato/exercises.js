import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// Struttura della pagina (identica a idti-xodit-passato) —
// contenuti in sviluppo, riempiti panel per panel.
//
// PANEL 1 — DragDrop · public  · Spряжение ЕЗДИТЬ passato
// PANEL 2 — DragDrop · student · Spряжение ЕХАТЬ passato
// PANEL 3 — GapText  · public  · Testo con lacune + glossario + spiegazioni
// PANEL 4 — GapText  · student · Testo con lacune + glossario (no spiegazioni)
// PANEL 5 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 6 — GapText  · paid    · Testo con lacune + glossario (no spiegazioni)
// PANEL 7 — Mixed Quiz · public · задания собираются из блоков 1-3
// ============================================================

// ============================================================
// PANEL 1 — DragDrop · public · Spряжение ЕЗДИТЬ passato
// (ездил / ездила / ездило / ездили)
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Раньше он {{1}} на работу на машине каждый день.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" },
        explanation: "ездил = azione abituale ripetuta nel passato (ogni giorno in macchina), non un tragitto singolo in un momento preciso."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Она всегда {{1}} на дачу по выходным.",
        words: ["ездила", "ездил", "ездили"],
        correctAnswers: { 1: "ездила" },
        explanation: "ездила = abitudine ripetuta (ogni weekend), non un movimento in corso in un momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "В детстве мы часто {{1}} к бабушке в деревню.",
        words: ["ездили", "ездил", "ездила"],
        correctAnswers: { 1: "ездили" },
        explanation: "ездили = abitudine ripetuta nell'infanzia (spesso), non un tragitto singolo in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Он никогда не {{1}} за границу.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" },
        explanation: "ездил = azione generale/abituale (mai andato, in generale), non un viaggio specifico in corso in un momento preciso."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Лена {{1}} на курсы английского каждую неделю.",
        words: ["ездила", "ездил", "ездили"],
        correctAnswers: { 1: "ездила" },
        explanation: "ездила = abitudine ripetuta (ogni settimana), non un tragitto in corso in quel momento."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Они {{1}} в один и тот же отель каждое лето.",
        words: ["ездили", "ездил", "ездила"],
        correctAnswers: { 1: "ездили" },
        explanation: "ездили = abitudine ripetuta (ogni estate) — andata e ritorno ripetuti nel tempo, non un unico tragitto."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Я {{1}} к морю ещё ребёнком.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" },
        explanation: "ездил = azione generale riferita a un periodo della vita (da bambino), non un singolo tragitto in una direzione."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Бабушка {{1}} в поликлинику каждую неделю.",
        words: ["ездила", "ездил", "ездили"],
        correctAnswers: { 1: "ездила" },
        explanation: "ездила = abitudine ripetuta (ogni settimana), non un tragitto in corso in un momento specifico."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Дети {{1}} в школу на автобусе.",
        words: ["ездили", "ездил", "ездила"],
        correctAnswers: { 1: "ездили" },
        explanation: "ездили = fatto abituale/generale (andavano a scuola in autobus), non un tragitto specifico in un momento preciso."
    },
    {
        instruction: "Выбери правильную форму глагола ЕЗДИТЬ (passato).",
        text: "Он {{1}} на работу каждый день в одно и то же время.",
        words: ["ездил", "ездила", "ездили"],
        correctAnswers: { 1: "ездил" },
        explanation: "ездил = abitudine quotidiana ripetuta, non un movimento in corso in un momento preciso."
    },
];

// TODO: p2exercises (ЕХАТЬ D&D)

// ============================================================
// PANEL 3 — GapText · public · Testo connesso con lacune + glossario
// Traduzione cliccabile delle espressioni idiomatiche/complesse
// (showHints: false — nessun infinito accanto al gap).
// Testate tutte le forme e tutte le coppie di verbi di moto che
// compaiono nel testo: ходить/идти, ехать/ездить, водить, нести,
// лететь — passato, presente e infinito.
// ============================================================
const p3instruction = "Leggi il racconto e scrivi la forma corretta del verbo, al presente (хожу/езжу/водишь/ездят/ходим), al passato (ехали/шли/ходила/несли) o all'infinito (ездить/ходить/лететь). Clicca sulle parole sottolineate per vedere la traduzione in italiano.";

const p3paragraphs = [
    "Мы стояли три часа в [[пробке::ingorgo (traffico bloccato)]]! — возмутился Андрей. — Я обычно {{1}} пешком в бар или {{2}} на велосипеде по району, а тут я просидел полдня в машине!",
    "<strong>1.2</strong>",
    "— Андрей, мы вообще-то {{3}} на моей машине, а ты просто спал на заднем сиденье, — спокойно ответил Тимур. — Я другого не понимаю. Девочки, зачем нужно было брать пакеты с продуктами с собой? Я же на машине, могли всё положить ко мне в [[багажник::bagagliaio (portabagagli dell'auto)]]!",
    "<strong>1.3</strong>",
    "— Потому что я не люблю {{4}} с тобой, Тимур — ты слишком агрессивно {{5}}, — сказала Катя. — Мы с Анной {{6}} на [[электричке::treno locale (treno regionale/suburbano)]]. Но от станции мы {{7}} пешком сорок минут по [[грязи::fango (melma)]] с этими пакетами! Обычно я {{8}} по лесу с огромным удовольствием, но не с картошкой и помидорами!",
    "<strong>1.4</strong>",
    "— Я специально {{9}} на фермерский рынок в пятницу, чтобы купить нормальное свежее мясо, — возмутилась Анна. — И да, мы {{10}} от станции пешком, зато ели нормальную еду! Я не доверю хорошее мясо твоему багажнику, Тимур!",
    "<strong>1.5</strong>",
    "— Зачем вы вообще всё это {{11}}? — Женя поправил дорогие часы. — Я же говорил, что у меня [[подписка на доставку::abbonamento alla consegna a domicilio]]. Ко мне на дачу каждую неделю {{12}} курьеры и привозят всё необходимое. Вам вообще не нужно было никуда {{13}}.",
    "<strong>1.6</strong>",
    "— А я говорила, что нужно {{14}} в спа-отель на выходные, — Лена посмотрела на свой идеальный маникюр. — Вы всё {{15}} и {{16}} на эту дачу. А в итоге мы только {{17}} по грязи, стоим в пробках и ругаемся из-за мяса.",
];

const p3gaps = {
    1: {
        answers: ["хожу"],
        explanation: "хожу = abitudine al presente (di solito vai a piedi al bar), non un movimento diretto in un momento preciso.",
    },
    2: {
        answers: ["езжу"],
        explanation: "езжу = abitudine al presente in bicicletta per il quartiere (senza una direzione unica), non un tragitto singolo.",
    },
    3: {
        answers: ["ехали"],
        explanation: "ехали = movimento in corso in una sola direzione (viaggio in macchina in corso in quel momento), non un'abitudine ripetuta.",
    },
    4: {
        answers: ["ездить"],
        explanation: "ездить (infinito) = attività generale/abituale (non le piace viaggiare con lui in generale), non un tragitto specifico in una direzione.",
    },
    5: {
        answers: ["водишь"],
        explanation: "водишь = abitudine/comportamento generale (guidi sempre così aggressivamente), non un'azione in corso in questo momento.",
    },
    6: {
        answers: ["ехали"],
        explanation: "ехали = movimento in corso in una sola direzione (il viaggio in treno in quell'occasione), non un'abitudine.",
    },
    7: {
        answers: ["шли"],
        explanation: "шли = movimento a piedi in una sola direzione (dalla stazione), in quell'occasione precisa, non un'abitudine.",
    },
    8: {
        answers: ["хожу"],
        explanation: "хожу = abitudine al presente (di solito cammini nel bosco con piacere), non un tragitto in corso ora.",
    },
    9: {
        answers: ["ходила"],
        explanation: "ходила = andata e tornata dal mercato (viaggio di andata e ritorno completato in quell'occasione specifica), non шла che descriverebbe il tragitto in corso.",
    },
    10: {
        answers: ["шли"],
        explanation: "шли = movimento a piedi in una sola direzione in quell'occasione, non un'abitudine.",
    },
    11: {
        answers: ["несли"],
        explanation: "несли = movimento (portare qualcosa) in corso in una direzione in quell'occasione specifica, non носили che indicherebbe un'abitudine ripetuta.",
    },
    12: {
        answers: ["ездят"],
        explanation: "ездят = abitudine ripetuta (ogni settimana), non un tragitto in corso in un momento preciso.",
    },
    13: {
        answers: ["ходить"],
        explanation: "ходить (infinito) = attività generale (non dovevate andare da nessuna parte, in generale), non un tragitto specifico in una direzione.",
    },
    14: {
        answers: ["лететь"],
        explanation: "лететь (infinito) = un viaggio specifico proposto (questo fine settimana), in una sola direzione, non летать che indicherebbe un'abitudine.",
    },
    15: {
        answers: ["ездите"],
        explanation: "ездите = abitudine ripetuta (andate sempre a questa dacia), ripetuto per enfasi retorica.",
    },
    16: {
        answers: ["ездите"],
        explanation: "ездите = ripetizione della stessa forma per enfasi retorica.",
    },
    17: {
        answers: ["ходим"],
        explanation: "ходим = abitudine al presente (camminiamo sempre nel fango), non un movimento in corso in un momento preciso.",
    },
};

// TODO: p4instruction / p4paragraphs / p4gaps
// TODO: p5instruction / p5paragraphs / p5gaps
// TODO: p6instruction / p6paragraphs / p6gaps
// TODO: Panel 7 — costruita da p1exercises (MC) + p2exercises (match) + selezione write-in

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-past-ez-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ez-01', exercises: p1exercises }),
    // 'panel-past-ez-02': () => new DragDropExercise({ rootId: 'ex-dragdrop-past-ez-02', exercises: p2exercises }),
    'panel-past-ez-03': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-03', instruction: p3instruction, paragraphs: p3paragraphs, gaps: p3gaps, showHints: false }),
    // 'panel-past-ez-04': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-04', instruction: p4instruction, paragraphs: p4paragraphs, gaps: p4gaps, showHints: false }),
    // 'panel-past-ez-05': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-05', instruction: p5instruction, paragraphs: p5paragraphs, gaps: p5gaps, showHints: false }),
    // 'panel-past-ez-06': () => new GapTextExercise({ rootId: 'ex-gaptext-past-ez-06', instruction: p6instruction, paragraphs: p6paragraphs, gaps: p6gaps, showHints: false }),
    // 'panel-past-ez-07': () => initPanel7(),
};

initPanelManager({ initializers, enableAccessControl: false });
