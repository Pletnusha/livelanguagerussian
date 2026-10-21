import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Accusativo: кого зовут (фразы из текста о семейном древе)
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} Альберта зовут Линда.",
        words: ["Сестру", "Сестра", "Сестры"],
        correctAnswers: { 1: "Сестру" },
        explanation: "сестра → сестру (accusativo femminile). Зовут + кого (accusativo)."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} Линды зовут Владислав.",
        words: ["Мужа", "Муж", "Мужу"],
        correctAnswers: { 1: "Мужа" },
        explanation: "муж → мужа (accusativo maschile animato = genitivo)."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} Линды и Владислава зовут Анатолий.",
        words: ["Сына", "Сын", "Сыну"],
        correctAnswers: { 1: "Сына" },
        explanation: "сын → сына (accusativo maschile animato = genitivo)."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "А {{1}} зовут Александра.",
        words: ["дочь", "дочери", "дочерью"],
        correctAnswers: { 1: "дочь" },
        explanation: "дочь → дочь (accusativo = nominativo per i sostantivi femminili in -ь)."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} Анатолия зовут Светлана.",
        words: ["Жену", "Жена", "Жены"],
        correctAnswers: { 1: "Жену" },
        explanation: "жена → жену (accusativo femminile: -а → -у)."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} Александры зовут Сергей.",
        words: ["Мужа", "Муж", "Мужу"],
        correctAnswers: { 1: "Мужа" },
        explanation: "муж → мужа (accusativo maschile animato)."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} Сергея и Александры зовут Рома.",
        words: ["Сына", "Сын", "Сыну"],
        correctAnswers: { 1: "Сына" },
        explanation: "сын → сына (accusativo maschile animato)."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "А {{1}} зовут Катя.",
        words: ["дочь", "дочери", "дочерью"],
        correctAnswers: { 1: "дочь" },
        explanation: "дочь → дочь (accusativo = nominativo)."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Genitivo: у + кого / сестра/тётя + кого (фразы из текста)
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} есть сестра.",
        words: ["Альберта", "Альберт", "Альберту"],
        correctAnswers: { 1: "Альберта" },
        explanation: "Альберт → Альберта (genitivo maschile: -∅ → -а)."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} есть муж.",
        words: ["Линды", "Линда", "Линде"],
        correctAnswers: { 1: "Линды" },
        explanation: "Линда → Линды (genitivo femminile: -а → -ы)."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} есть сестра, её зовут Елена.",
        words: ["Владислава", "Владислав", "Владиславу"],
        correctAnswers: { 1: "Владислава" },
        explanation: "Владислав → Владислава (genitivo maschile: -∅ → -а)."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} есть жена.",
        words: ["Анатолия", "Анатолий", "Анатолию"],
        correctAnswers: { 1: "Анатолия" },
        explanation: "Анатолий → Анатолия (genitivo maschile: -й → -я)."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} и Анатолия два сына — Руслан и Антон.",
        words: ["Светланы", "Светлана", "Светлане"],
        correctAnswers: { 1: "Светланы" },
        explanation: "Светлана → Светланы (genitivo femminile: -а → -ы)."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} есть муж.",
        words: ["Александры", "Александра", "Александре"],
        correctAnswers: { 1: "Александры" },
        explanation: "Александра → Александры (genitivo femminile: -а → -ы)."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} и Александры сын и дочь.",
        words: ["Сергея", "Сергей", "Сергею"],
        correctAnswers: { 1: "Сергея" },
        explanation: "Сергей → Сергея (genitivo maschile: -й → -я)."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Александра — сестра {{1}}.",
        words: ["Анатолия", "Анатолий", "Анатолию"],
        correctAnswers: { 1: "Анатолия" },
        explanation: "Анатолий → Анатолия (genitivo). Сестра кого? — genitivo di appartenenza."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Елена — тётя {{1}}.",
        words: ["Анатолия", "Анатолий", "Анатолию"],
        correctAnswers: { 1: "Анатолия" },
        explanation: "Тётя кого? — genitivo di appartenenza: Анатолий → Анатолия."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Альберт — дядя {{1}}.",
        words: ["Александры", "Александра", "Александре"],
        correctAnswers: { 1: "Александры" },
        explanation: "Дядя кого? — genitivo di appartenenza: Александра → Александры."
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Misto: accusativo (кого зовут) + genitivo (у кого) — 2 gap
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "У {{1}} есть сестра. {{2}} Альберта зовут Линда.",
        words: ["Альберта", "Альберт", "Сестру", "Сестра"],
        correctAnswers: { 1: "Альберта", 2: "Сестру" },
        explanation: "У кого (genitivo): Альберта. Кого зовут (accusativo): Сестру."
    },
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "У {{1}} есть муж. {{2}} Линды зовут Владислав.",
        words: ["Линды", "Линда", "Мужа", "Муж"],
        correctAnswers: { 1: "Линды", 2: "Мужа" },
        explanation: "У кого (genitivo): Линды. Кого зовут (accusativo): Мужа."
    },
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "{{1}} зовут Анатолий, а {{2}} зовут Александра.",
        words: ["Сына", "Сын", "дочь", "дочери"],
        correctAnswers: { 1: "Сына", 2: "дочь" },
        explanation: "Accusativo animato: сын → сына. Accusativo femminile: дочь → дочь (invariato)."
    },
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "У {{1}} есть жена. {{2}} Анатолия зовут Светлана.",
        words: ["Анатолия", "Анатолий", "Жену", "Жена"],
        correctAnswers: { 1: "Анатолия", 2: "Жену" },
        explanation: "У кого (genitivo): Анатолия. Кого зовут (accusativo): Жену."
    },
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "У {{1}} есть муж. {{2}} Александры зовут Сергей.",
        words: ["Александры", "Александра", "Мужа", "Муж"],
        correctAnswers: { 1: "Александры", 2: "Мужа" },
        explanation: "У кого (genitivo): Александры. Кого зовут (accusativo): Мужа."
    },
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "{{1}} зовут Рома, а {{2}} зовут Катя.",
        words: ["Сына", "Сын", "дочь", "дочери"],
        correctAnswers: { 1: "Сына", 2: "дочь" },
        explanation: "Accusativo animato: сын → сына. Accusativo femminile: дочь → дочь (invariato)."
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Accusativo dei sostantivi: membri della famiglia
// ============================================================
const p4cards = [
    { front: "сестра", back: "сестру", explanation: "Accusativo femminile: -а → -у." },
    { front: "муж", back: "мужа", explanation: "Accusativo maschile animato = genitivo: -∅ → -а." },
    { front: "сын", back: "сына", explanation: "Accusativo maschile animato = genitivo: -∅ → -а." },
    { front: "дочь", back: "дочь", explanation: "Accusativo femminile in -ь = nominativo (invariato)." },
    { front: "жена", back: "жену", explanation: "Accusativo femminile: -а → -у." },
    { front: "брат", back: "брата", explanation: "Accusativo maschile animato = genitivo: -∅ → -а." },
    { front: "тётя", back: "тётю", explanation: "Accusativo femminile: -я → -ю." },
    { front: "дядя", back: "дядю", explanation: "Accusativo maschile animato in -я → -ю (come femminile)." },
    { front: "мама", back: "маму", explanation: "Accusativo femminile: -а → -у." },
    { front: "папа", back: "папу", explanation: "Accusativo maschile animato in -а → -у (come femminile)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Genitivo dei nomi propri (dal testo)
// ============================================================
const p5cards = [
    { front: "Альберт (genitivo)", back: "Альберта", explanation: "Maschile: -∅ → -а." },
    { front: "Линда (genitivo)", back: "Линды", explanation: "Femminile: -а → -ы." },
    { front: "Владислав (genitivo)", back: "Владислава", explanation: "Maschile: -∅ → -а." },
    { front: "Анатолий (genitivo)", back: "Анатолия", explanation: "Maschile in -й → -я." },
    { front: "Светлана (genitivo)", back: "Светланы", explanation: "Femminile: -а → -ы." },
    { front: "Александра (genitivo)", back: "Александры", explanation: "Femminile: -а → -ы." },
    { front: "Сергей (genitivo)", back: "Сергея", explanation: "Maschile in -й → -я." },
    { front: "Елена (genitivo)", back: "Елены", explanation: "Femminile: -а → -ы." },
    { front: "Руслан (genitivo)", back: "Руслана", explanation: "Maschile: -∅ → -а." },
    { front: "Катя (genitivo)", back: "Кати", explanation: "Femminile in -я → -и." }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Frasi complete: accusativo e genitivo dal testo
// ============================================================
const p6cards = [
    { front: "Сестра Альберта — Линда. (accusativo)", back: "Сестру Альберта зовут Линда." },
    { front: "Муж Линды — Владислав. (accusativo)", back: "Мужа Линды зовут Владислав." },
    { front: "Сын Линды и Владислава — Анатолий. (accusativo)", back: "Сына Линды и Владислава зовут Анатолий." },
    { front: "Дочь Линды и Владислава — Александра. (accusativo)", back: "Дочь Линды и Владислава зовут Александра." },
    { front: "Жена Анатолия — Светлана. (accusativo)", back: "Жену Анатолия зовут Светлана." },
    { front: "Муж Александры — Сергей. (accusativo)", back: "Мужа Александры зовут Сергей." },
    { front: "Сын Сергея и Александры — Рома. (accusativo)", back: "Сына Сергея и Александры зовут Рома." },
    { front: "Дочь Сергея и Александры — Катя. (accusativo)", back: "Дочь Сергея и Александры зовут Катя." },
    { front: "Александра — сестра ... (genitivo)", back: "Александра — сестра Анатолия." },
    { front: "Елена — тётя ... (genitivo)", back: "Елена — тётя Анатолия и Александры." }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Лексика: семья (RU → IT)
// ============================================================
const p7cards = [
    { front: "сестра", back: "sorella" },
    { front: "брат", back: "fratello" },
    { front: "муж", back: "marito" },
    { front: "жена", back: "moglie" },
    { front: "сын", back: "figlio" },
    { front: "дочь", back: "figlia" },
    { front: "тётя", back: "zia" },
    { front: "дядя", back: "zio" },
    { front: "семья", back: "famiglia" },
    { front: "родители", back: "genitori" }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Лексика: родственные связи (RU → IT)
// ============================================================
const p8cards = [
    { front: "семейное древо", back: "albero genealogico" },
    { front: "есть (у кого)", back: "avere" },
    { front: "дети", back: "figli, bambini" },
    { front: "двоюродный брат", back: "cugino" },
    { front: "двоюродная сестра", back: "cugina" },
    { front: "племянник", back: "nipote (m., di zio)" },
    { front: "племянница", back: "nipote (f., di zio)" },
    { front: "внук", back: "nipote (m., di nonno)" },
    { front: "внучка", back: "nipote (f., di nonno)" },
    { front: "родственник", back: "parente" }
];

// ============================================================
// PANEL 9 — Flashcard · paid
// Лексика: глаголы и выражения (RU → IT)
// ============================================================
const p9cards = [
    { front: "зовут", back: "si chiama" },
    { front: "приходиться (кем)", back: "essere parente" },
    { front: "старший", back: "maggiore" },
    { front: "младший", back: "minore" },
    { front: "замужем (за + strum.)", back: "sposata (con)" },
    { front: "женат (на + prep.)", back: "sposato (con)" },
    { front: "есть", back: "c'è, avere" },
    { front: "нет", back: "non c'è" },
    { front: "сколько", back: "quanti, quante" },
    { front: "кто", back: "chi" }
];

// ============================================================
// PANEL 10 — GapText · public
// Семейное древо: кто кому кем приходится (полный текст)
// Род.: у + кого, сестра/тётя/дядя + кого; Вин.: кого зовут
// ============================================================
const p10paragraphs = [
    "Это Альберт. У {{1}} есть сестра. {{2}} Альберта зовут Линда.",
    "У {{3}} есть муж. {{4}} Линды зовут Владислав.",
    "У {{5}} есть сестра, её зовут Елена.",
    "У {{6}} и {{7}} есть сын и дочь. {{8}} Линды и Владислава зовут Анатолий, а {{9}} зовут Александра.",
    "У {{10}} есть жена. {{11}} Анатолия зовут Светлана.",
    "У {{12}} и {{13}} два сына — Руслан и Антон.",
    "Александра — сестра {{14}}. У {{15}} есть муж. {{16}} Александры зовут Сергей.",
    "У {{17}} и {{18}} сын и дочь. {{19}} Сергея и Александры зовут Рома, а {{20}} зовут Катя.",
    "Елена — тётя {{21}} и {{22}}. Альберт — их дядя."
];

const p10gaps = {
    1:  { hint: "Альберт",    answers: ["Альберта"] },
    2:  { hint: "сестра",     answers: ["Сестру"] },
    3:  { hint: "Линда",      answers: ["Линды"] },
    4:  { hint: "муж",        answers: ["Мужа"] },
    5:  { hint: "Владислав",  answers: ["Владислава"] },
    6:  { hint: "Линда",      answers: ["Линды"] },
    7:  { hint: "Владислав",  answers: ["Владислава"] },
    8:  { hint: "сын",        answers: ["Сына"] },
    9:  { hint: "дочь",       answers: ["дочь"] },
    10: { hint: "Анатолий",   answers: ["Анатолия"] },
    11: { hint: "жена",       answers: ["Жену"] },
    12: { hint: "Анатолий",   answers: ["Анатолия"] },
    13: { hint: "Светлана",   answers: ["Светланы"] },
    14: { hint: "Анатолий",   answers: ["Анатолия"] },
    15: { hint: "Александра", answers: ["Александры"] },
    16: { hint: "муж",        answers: ["Мужа"] },
    17: { hint: "Сергей",     answers: ["Сергея"] },
    18: { hint: "Александра", answers: ["Александры"] },
    19: { hint: "сын",        answers: ["Сына"] },
    20: { hint: "дочь",       answers: ["дочь"] },
    21: { hint: "Анатолий",   answers: ["Анатолия"] },
    22: { hint: "Александра", answers: ["Александры"] }
};

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-ag-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-ag-01', exercises: p1exercises }),
    'panel-ag-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-ag-02', exercises: p2exercises }),
    'panel-ag-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-ag-03', exercises: p3exercises }),
    'panel-ag-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ag-04', cards: p4cards }),
    'panel-ag-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ag-05', cards: p5cards }),
    'panel-ag-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ag-06', cards: p6cards }),
    'panel-ag-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ag-07', cards: p7cards }),
    'panel-ag-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ag-08', cards: p8cards }),
    'panel-ag-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ag-09', cards: p9cards }),
    'panel-ag-10': () => new GapTextExercise({ rootId: 'ex-gaptext-ag-10', paragraphs: p10paragraphs, gaps: p10gaps, showHints: true })
};

initPanelManager({ initializers, enableAccessControl: true });
