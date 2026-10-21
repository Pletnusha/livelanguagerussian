import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Accusativo: зовут + кого (фразы из текста Антона)
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} зовут Антон.",
        words: ["Меня", "Мне", "Я"],
        correctAnswers: { 1: "Меня" },
        explanation: "я → меня (accusativo). Costruzione: (кого) зовут + имя."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} зовут Анна, она высокая и стройная.",
        words: ["Мою маму", "Моя мама", "Моей мамы"],
        correctAnswers: { 1: "Мою маму" },
        explanation: "моя мама → мою маму (accusativo femminile). Pronome: моя → мою; sostantivo: мама → маму."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} зовут Анатолий, он не очень высокий.",
        words: ["Моего отца", "Мой отец", "Моему отцу"],
        correctAnswers: { 1: "Моего отца" },
        explanation: "мой отец → моего отца (accusativo maschile animato = genitivo). Pronome: мой → моего; sostantivo: отец → отца."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} зовут Александр. Он очень высокий.",
        words: ["Моего старшего брата", "Мой старший брат", "Моему старшему брату"],
        correctAnswers: { 1: "Моего старшего брата" },
        explanation: "мой старший брат → моего старшего брата (accusativo maschile animato). Pronome + aggettivo + sostantivo concordano."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "{{1}} зовут Лиза. Она не высокая как папа.",
        words: ["Мою младшую сестру", "Моя младшая сестра", "Моей младшей сестры"],
        correctAnswers: { 1: "Мою младшую сестру" },
        explanation: "моя младшая сестра → мою младшую сестру (accusativo femminile). Desinenze: -ая → -ую, -а → -у."
    },
    {
        instruction: "Scegli la forma corretta all'accusativo.",
        text: "Привет, {{1}} зовут Антон.",
        words: ["меня", "мне", "я", "мной"],
        correctAnswers: { 1: "меня" },
        explanation: "я → меня (accusativo). Зовут + кого (accusativo)."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Genitivo: у + кого (фразы из текста Антона)
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} светлые волосы и голубые глаза.",
        words: ["неё", "ей", "она"],
        correctAnswers: { 1: "неё" },
        explanation: "она → неё (genitivo dopo «у»). Pronome femminile con н- dopo preposizione."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} тёмные волосы и карие глаза.",
        words: ["него", "ему", "он"],
        correctAnswers: { 1: "него" },
        explanation: "он → него (genitivo dopo «у»). Pronome maschile con н- dopo preposizione."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} тёмные волосы как у папы и голубые глаза как у мамы.",
        words: ["него", "ему", "он", "его"],
        correctAnswers: { 1: "него" },
        explanation: "он → него (genitivo dopo «у»). Dopo preposizione: него, non его."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У неё светлые волосы как у {{1}}.",
        words: ["мамы", "маму", "мама"],
        correctAnswers: { 1: "мамы" },
        explanation: "мама → мамы (genitivo). «Как у» + genitivo = come quello/a di..."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У него голубые глаза как у {{1}}.",
        words: ["мамы", "маму", "мама"],
        correctAnswers: { 1: "мамы" },
        explanation: "мама → мамы (genitivo femminile). Desinenza: -а → -ы."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У неё карие глаза как у {{1}}.",
        words: ["папы", "папу", "папа"],
        correctAnswers: { 1: "папы" },
        explanation: "папа → папы (genitivo). Sostantivo maschile in -а → -ы."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}} тёмные волосы как у отца.",
        words: ["меня", "мне", "я"],
        correctAnswers: { 1: "меня" },
        explanation: "я → меня (genitivo dopo «у»)."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У меня зелёные глаза как у {{1}}.",
        words: ["дедушки", "дедушку", "дедушка"],
        correctAnswers: { 1: "дедушки" },
        explanation: "дедушка → дедушки (genitivo). Sostantivo maschile in -а → -и."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У меня тёмные волосы как у {{1}}.",
        words: ["отца", "отцу", "отец"],
        correctAnswers: { 1: "отца" },
        explanation: "отец → отца (genitivo maschile). Vocale mobile: -ец → -ца."
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Misto: accusativo (зовут кого) + genitivo (у кого)
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "{{1}} зовут Анна. У {{2}} светлые волосы.",
        words: ["Мою маму", "Моя мама", "неё", "она"],
        correctAnswers: { 1: "Мою маму", 2: "неё" },
        explanation: "Accusativo: мою маму (зовут кого). Genitivo: у неё (dopo «у»)."
    },
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "{{1}} зовут Анатолий. У {{2}} тёмные волосы.",
        words: ["Моего отца", "Мой отец", "него", "он"],
        correctAnswers: { 1: "Моего отца", 2: "него" },
        explanation: "Accusativo animato = genitivo: моего отца. Genitivo dopo «у»: него."
    },
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "{{1}} зовут Лиза. У {{2}} светлые волосы.",
        words: ["Мою младшую сестру", "Моя младшая сестра", "неё", "она"],
        correctAnswers: { 1: "Мою младшую сестру", 2: "неё" },
        explanation: "Accusativo femminile: мою младшую сестру. Genitivo: у неё."
    },
    {
        instruction: "Scegli la forma corretta (accusativo o genitivo).",
        text: "{{1}} зовут Александр. У {{2}} тёмные волосы как у папы.",
        words: ["Моего старшего брата", "Мой старший брат", "него", "он"],
        correctAnswers: { 1: "Моего старшего брата", 2: "него" },
        explanation: "Accusativo animato: моего старшего брата. Genitivo: у него."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У неё карие глаза как у {{1}} и светлые волосы как у {{2}}.",
        words: ["папы", "папа", "мамы", "мама"],
        correctAnswers: { 1: "папы", 2: "мамы" },
        explanation: "Genitivo dopo «как у»: папа → папы, мама → мамы."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У него тёмные волосы как у {{1}} и голубые глаза как у {{2}}.",
        words: ["папы", "папа", "мамы", "мама"],
        correctAnswers: { 1: "папы", 2: "мамы" },
        explanation: "Genitivo dopo «как у»: папа → папы, мама → мамы."
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Accusativo: притяжательные + существительные
// ============================================================
const p4cards = [
    { front: "я → accusativo (кого зовут?)", back: "меня", explanation: "Pronome personale: я → меня (accusativo)." },
    { front: "моя мама → accusativo", back: "мою маму", explanation: "Femminile: моя → мою, мама → маму." },
    { front: "мой отец → accusativo", back: "моего отца", explanation: "Maschile animato (acc. = gen.): мой → моего, отец → отца." },
    { front: "мой старший брат → accusativo", back: "моего старшего брата", explanation: "Maschile animato: мой → моего, старший → старшего, брат → брата." },
    { front: "моя младшая сестра → accusativo", back: "мою младшую сестру", explanation: "Femminile: моя → мою, младшая → младшую, сестра → сестру." },
    { front: "наш дедушка → accusativo", back: "нашего дедушку", explanation: "Maschile animato (1ª decl.): наш → нашего, дедушка → дедушку." },
    { front: "твой папа → accusativo", back: "твоего папу", explanation: "Maschile animato (1ª decl.): твой → твоего, папа → папу." },
    { front: "ваш сын → accusativo", back: "вашего сына", explanation: "Maschile animato: ваш → вашего, сын → сына." },
    { front: "наша бабушка → accusativo", back: "нашу бабушку", explanation: "Femminile: наша → нашу, бабушка → бабушку." },
    { front: "мой средний сын → accusativo", back: "моего среднего сына", explanation: "Maschile animato: мой → моего, средний → среднего, сын → сына." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Genitivo: притяжательные + существительные
// ============================================================
const p5cards = [
    { front: "у + она", back: "у неё", explanation: "Genitivo: она → неё (с н- после предлога)." },
    { front: "у + он", back: "у него", explanation: "Genitivo: он → него (с н- после предлога)." },
    { front: "у + я", back: "у меня", explanation: "Genitivo: я → меня." },
    { front: "как у + мама", back: "как у мамы", explanation: "Genitivo femminile: мама → мамы." },
    { front: "как у + папа", back: "как у папы", explanation: "Genitivo: папа → папы (maschile in -а)." },
    { front: "как у + отец", back: "как у отца", explanation: "Genitivo maschile: отец → отца (vocale mobile)." },
    { front: "как у + дедушка", back: "как у дедушки", explanation: "Genitivo: дедушка → дедушки (maschile in -а → -и)." },
    { front: "у + моя мама", back: "у моей мамы", explanation: "Genitivo femminile: моя → моей, мама → мамы." },
    { front: "у + мой отец", back: "у моего отца", explanation: "Genitivo maschile: мой → моего, отец → отца." },
    { front: "у + мой старший брат", back: "у моего старшего брата", explanation: "Genitivo maschile: мой → моего, старший → старшего, брат → брата." }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: accusativo e genitivo — притяжательные + прилагательные
// ============================================================
const p6cards = [
    { front: "Зовут + моя мама (acc.)", back: "Мою маму зовут Анна.", explanation: "Accusativo femminile: моя мама → мою маму." },
    { front: "У + он (gen.) + тёмные волосы", back: "У него тёмные волосы.", explanation: "Genitivo: он → него (с н- после «у»)." },
    { front: "Зовут + мой старший брат (acc.)", back: "Моего старшего брата зовут Александр.", explanation: "Accusativo animato: мой старший брат → моего старшего брата." },
    { front: "Как у + мама (gen.) + волосы", back: "Светлые волосы как у мамы.", explanation: "Genitivo: мама → мамы." },
    { front: "Зовут + моя младшая сестра (acc.)", back: "Мою младшую сестру зовут Лиза.", explanation: "Accusativo femminile: моя младшая сестра → мою младшую сестру." },
    { front: "У + она (gen.) + карие глаза", back: "У неё карие глаза.", explanation: "Genitivo: она → неё (с н- после «у»)." },
    { front: "Зовут + мой отец (acc.)", back: "Моего отца зовут Анатолий.", explanation: "Accusativo maschile animato = genitivo: мой отец → моего отца." },
    { front: "Как у + дедушка (gen.) + глаза", back: "Зелёные глаза как у дедушки.", explanation: "Genitivo: дедушка → дедушки." },
    { front: "У + я (gen.) + тёмные волосы", back: "У меня тёмные волосы.", explanation: "Genitivo: я → меня." },
    { front: "Как у + отец (gen.) + волосы", back: "Тёмные волосы как у отца.", explanation: "Genitivo maschile: отец → отца." }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Лексика: семья (russo → italiano)
// ============================================================
const p7cards = [
    { front: "мама", back: "mamma" },
    { front: "папа", back: "papà" },
    { front: "отец", back: "padre" },
    { front: "брат", back: "fratello" },
    { front: "сестра", back: "sorella" },
    { front: "сын", back: "figlio" },
    { front: "дедушка", back: "nonno" },
    { front: "старший", back: "maggiore" },
    { front: "младший", back: "minore" },
    { front: "средний", back: "di mezzo" }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Лексика: внешность (russo → italiano)
// ============================================================
const p8cards = [
    { front: "высокий / высокая", back: "alto / alta" },
    { front: "стройная", back: "snella, slanciata" },
    { front: "телосложение", back: "corporatura" },
    { front: "атлетическое телосложение", back: "corporatura atletica" },
    { front: "светлые волосы", back: "capelli chiari" },
    { front: "тёмные волосы", back: "capelli scuri" },
    { front: "голубые глаза", back: "occhi azzurri" },
    { front: "карие глаза", back: "occhi marroni" },
    { front: "зелёные глаза", back: "occhi verdi" },
    { front: "рост", back: "statura, altezza" }
];

// ============================================================
// PANEL 9 — Flashcard · paid
// Лексика: характер и описание (russo → italiano)
// ============================================================
const p9cards = [
    { front: "серьёзный / серьёзная", back: "serio / seria" },
    { front: "весёлый / весёлая", back: "allegro / allegra" },
    { front: "невысокий", back: "non molto alto, basso" },
    { front: "стройный / стройная", back: "snello / snella" },
    { front: "волосы", back: "capelli" },
    { front: "глаза", back: "occhi" },
    { front: "голубой", back: "azzurro" },
    { front: "карий", back: "marrone (solo per gli occhi)" },
    { front: "зелёный", back: "verde" },
    { front: "семья", back: "famiglia" }
];

// ============================================================
// PANEL 10 — GapText · public
// Антон описывает свою семью (тест completo)
// Вин.: зовут + кого; Род.: у кого; прилагательные
// ============================================================
const p10paragraphs = [
    "Привет, {{1}} зовут Антон.",
    "{{2}} зовут Анна, она высокая и стройная. У {{3}} светлые волосы и голубые глаза, и она очень серьёзная.",
    "{{4}} зовут Анатолий, он не очень высокий, но атлетического телосложения. У {{5}} тёмные волосы и карие глаза, он очень весёлый.",
    "{{6}} зовут Александр. Он очень высокий. У {{7}} тёмные волосы как у {{8}} и голубые глаза как у {{9}}.",
    "{{10}} зовут Лиза. Она не высокая как папа, и у {{11}} светлые волосы как у {{12}} и карие глаза как у {{13}}.",
    "Я средний сын, я не высокого роста, у {{14}} тёмные волосы как у {{15}} и зелёные глаза как у {{16}}."
];

const p10gaps = {
    1:  { hint: "я",                    answers: ["меня"] },
    2:  { hint: "моя мама",             answers: ["Мою маму"] },
    3:  { hint: "она",                  answers: ["неё"] },
    4:  { hint: "мой отец",             answers: ["Моего отца"] },
    5:  { hint: "он",                   answers: ["него"] },
    6:  { hint: "мой старший брат",     answers: ["Моего старшего брата"] },
    7:  { hint: "он",                   answers: ["него"] },
    8:  { hint: "папа",                 answers: ["папы"] },
    9:  { hint: "мама",                 answers: ["мамы"] },
    10: { hint: "моя младшая сестра",   answers: ["Мою младшую сестру"] },
    11: { hint: "она",                  answers: ["неё"] },
    12: { hint: "мама",                 answers: ["мамы"] },
    13: { hint: "папа",                 answers: ["папы"] },
    14: { hint: "я",                    answers: ["меня"] },
    15: { hint: "отец",                 answers: ["отца"] },
    16: { hint: "дедушка",              answers: ["дедушки"] }
};

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-sa-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-sa-01', exercises: p1exercises }),
    'panel-sa-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-sa-02', exercises: p2exercises }),
    'panel-sa-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-sa-03', exercises: p3exercises }),
    'panel-sa-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sa-04', cards: p4cards }),
    'panel-sa-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sa-05', cards: p5cards }),
    'panel-sa-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sa-06', cards: p6cards }),
    'panel-sa-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sa-07', cards: p7cards }),
    'panel-sa-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sa-08', cards: p8cards }),
    'panel-sa-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sa-09', cards: p9cards }),
    'panel-sa-10': () => new GapTextExercise({ rootId: 'ex-gaptext-sa-10', paragraphs: p10paragraphs, gaps: p10gaps, showHints: true })
};

initPanelManager({ initializers, enableAccessControl: true });
