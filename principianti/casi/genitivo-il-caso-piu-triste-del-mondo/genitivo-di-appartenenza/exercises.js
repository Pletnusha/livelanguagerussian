import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · ВСЕ СКЛОНЕНИЯ (тренировка)
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "кошка {{1}} (= il gatto della nonna)",
        words: ["бабушка", "бабушке", "бабушки", "бабушку"],
        correctAnswers: { 1: "бабушки" },
        explanation: "бабушка → бабушки (genitivo, 1ª decl.: -а → -ы). бабушка = nominativo, бабушке = dativo, бабушку = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "соседка {{1}} (= la vicina della figlia)",
        words: ["дочь", "дочери", "дочерью", "дочерей"],
        correctAnswers: { 1: "дочери" },
        explanation: "дочь → дочери (genitivo, 3ª decl.: -ь → -и). дочь = nominativo, дочерью = strumentale, дочерей = genitivo plurale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "муж {{1}} (= il marito dell'amica)",
        words: ["подруга", "подруге", "подруги", "подругу"],
        correctAnswers: { 1: "подруги" },
        explanation: "подруга → подруги (genitivo, 1ª decl.: -а → -и dopo г). подруга = nominativo, подруге = dativo, подругу = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "жена {{1}} (= la moglie dell'amico)",
        words: ["друг", "другу", "друга", "другом"],
        correctAnswers: { 1: "друга" },
        explanation: "друг → друга (genitivo, 2ª decl.: consonante + -а). друг = nominativo, другу = dativo, другом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "муж {{1}} (= il marito della sorella)",
        words: ["сестра", "сестре", "сестры", "сестру"],
        correctAnswers: { 1: "сестры" },
        explanation: "сестра → сестры (genitivo, 1ª decl.: -а → -ы). сестра = nominativo, сестре = dativo, сестру = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "жена {{1}} (= la moglie del fratello)",
        words: ["брат", "брату", "брата", "братом"],
        correctAnswers: { 1: "брата" },
        explanation: "брат → брата (genitivo, 2ª decl.: consonante + -а). брат = nominativo, брату = dativo, братом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "собака {{1}} (= il cane del nonno)",
        words: ["дедушка", "дедушке", "дедушки", "дедушку"],
        correctAnswers: { 1: "дедушки" },
        explanation: "дедушка → дедушки (genitivo, 1ª decl.: -а → -и dopo ш). Sostantivo maschile con desinenza in -а. дедушка = nominativo, дедушке = dativo, дедушку = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "сын {{1}} (= il figlio del vicino)",
        words: ["сосед", "соседу", "соседа", "соседом"],
        correctAnswers: { 1: "соседа" },
        explanation: "сосед → соседа (genitivo, 2ª decl.: consonante + -а). сосед = nominativo, соседу = dativo, соседом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "дочь {{1}} (= la figlia della zia)",
        words: ["тётя", "тёте", "тёти", "тётю"],
        correctAnswers: { 1: "тёти" },
        explanation: "тётя → тёти (genitivo, 1ª decl.: -я → -и). тётя = nominativo, тёте = dativo, тётю = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "брат {{1}} (= il fratello della mamma)",
        words: ["мама", "маме", "мамы", "маму"],
        correctAnswers: { 1: "мамы" },
        explanation: "мама → мамы (genitivo, 1ª decl.: -а → -ы). мама = nominativo, маме = dativo, маму = accusativo."
    }
];

// ============================================================
// PANEL 2 — DragDrop · public · 1-Е СКЛОНЕНИЕ
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "кошка {{1}} (= il gatto della vicina)",
        words: ["соседка", "соседке", "соседки", "соседку"],
        correctAnswers: { 1: "соседки" },
        explanation: "соседка → соседки (genitivo, 1ª decl.: -а → -и dopo к). соседка = nominativo, соседке = dativo, соседку = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "собака {{1}} (= il cane dell'amica)",
        words: ["подруга", "подруге", "подруги", "подругу"],
        correctAnswers: { 1: "подруги" },
        explanation: "подруга → подруги (genitivo, 1ª decl.: -а → -и dopo г). подруга = nominativo, подруге = dativo, подругу = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "сын {{1}} (= il figlio della sorella)",
        words: ["сестра", "сестре", "сестры", "сестру"],
        correctAnswers: { 1: "сестры" },
        explanation: "сестра → сестры (genitivo, 1ª decl.: -а → -ы). сестра = nominativo, сестре = dativo, сестру = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "кошка {{1}} (= il gatto della zia)",
        words: ["тётя", "тёте", "тёти", "тётю"],
        correctAnswers: { 1: "тёти" },
        explanation: "тётя → тёти (genitivo, 1ª decl.: -я → -и). тётя = nominativo, тёте = dativo, тётю = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "собака {{1}} (= il cane della mamma)",
        words: ["мама", "маме", "мамы", "маму"],
        correctAnswers: { 1: "мамы" },
        explanation: "мама → мамы (genitivo, 1ª decl.: -а → -ы). мама = nominativo, маме = dativo, маму = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "сестра {{1}} (= la sorella del nonno)",
        words: ["дедушка", "дедушке", "дедушки", "дедушку"],
        correctAnswers: { 1: "дедушки" },
        explanation: "дедушка → дедушки (genitivo, 1ª decl.: -а → -и dopo ш). дедушка = nominativo, дедушке = dativo, дедушку = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "брат {{1}} (= il fratello della nonna)",
        words: ["бабушка", "бабушке", "бабушки", "бабушку"],
        correctAnswers: { 1: "бабушки" },
        explanation: "бабушка → бабушки (genitivo, 1ª decl.: -а → -и dopo ш). бабушка = nominativo, бабушке = dativo, бабушку = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "муж {{1}} (= il marito della vicina)",
        words: ["соседка", "соседке", "соседки", "соседку"],
        correctAnswers: { 1: "соседки" },
        explanation: "соседка → соседки (genitivo, 1ª decl.: -а → -и dopo к). соседка = nominativo, соседке = dativo, соседку = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "жена {{1}} (= la moglie dello zio)",
        words: ["дядя", "дяде", "дяди", "дядю"],
        correctAnswers: { 1: "дяди" },
        explanation: "дядя → дяди (genitivo, 1ª decl.: -я → -и). дядя = nominativo, дяде = dativo, дядю = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "дочь {{1}} (= la figlia della zia)",
        words: ["тётя", "тёте", "тёти", "тётю"],
        correctAnswers: { 1: "тёти" },
        explanation: "тётя → тёти (genitivo, 1ª decl.: -я → -и). тётя = nominativo, тёте = dativo, тётю = accusativo."
    }
];

// ============================================================
// PANEL 3 — DragDrop · public · 2-Е И 3-Е СКЛОНЕНИЕ
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "жена {{1}} (= la moglie dell'amico)",
        words: ["друг", "другу", "друга", "другом"],
        correctAnswers: { 1: "друга" },
        explanation: "друг → друга (genitivo, 2ª decl.: consonante + -а). друг = nominativo, другу = dativo, другом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "собака {{1}} (= il cane del fratello)",
        words: ["брат", "брату", "брата", "братом"],
        correctAnswers: { 1: "брата" },
        explanation: "брат → брата (genitivo, 2ª decl.: consonante + -а). брат = nominativo, брату = dativo, братом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "кошка {{1}} (= il gatto del vicino)",
        words: ["сосед", "соседу", "соседа", "соседом"],
        correctAnswers: { 1: "соседа" },
        explanation: "сосед → соседа (genitivo, 2ª decl.: consonante + -а). сосед = nominativo, соседу = dativo, соседом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "сестра {{1}} (= la sorella del marito)",
        words: ["муж", "мужу", "мужа", "мужем"],
        correctAnswers: { 1: "мужа" },
        explanation: "муж → мужа (genitivo, 2ª decl.: consonante + -а). муж = nominativo, мужу = dativo, мужем = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "брат {{1}} (= il fratello del padre)",
        words: ["отец", "отцу", "отца", "отцом"],
        correctAnswers: { 1: "отца" },
        explanation: "отец → отца (genitivo, 2ª decl.: -ец → -ца). отец = nominativo, отцу = dativo, отцом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "кот {{1}} (= il gatto del figlio)",
        words: ["сын", "сыну", "сына", "сыном"],
        correctAnswers: { 1: "сына" },
        explanation: "сын → сына (genitivo, 2ª decl.: consonante + -а). сын = nominativo, сыну = dativo, сыном = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "дочь {{1}} (= la figlia della madre)",
        words: ["мать", "матери", "матерью", "матерей"],
        correctAnswers: { 1: "матери" },
        explanation: "мать → матери (genitivo, 3ª decl.: -ь → -и). мать = nominativo, матерью = strumentale, матерей = genitivo plurale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "муж {{1}} (= il marito della figlia)",
        words: ["дочь", "дочери", "дочерью", "дочерей"],
        correctAnswers: { 1: "дочери" },
        explanation: "дочь → дочери (genitivo, 3ª decl.: -ь → -и). дочь = nominativo, дочерью = strumentale, дочерей = genitivo plurale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "сын {{1}} (= il figlio del vicino)",
        words: ["сосед", "соседу", "соседа", "соседом"],
        correctAnswers: { 1: "соседа" },
        explanation: "сосед → соседа (genitivo, 2ª decl.: consonante + -а). сосед = nominativo, соседу = dativo, соседом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "мать {{1}} (= la madre del marito)",
        words: ["муж", "мужу", "мужа", "мужем"],
        correctAnswers: { 1: "мужа" },
        explanation: "муж → мужа (genitivo, 2ª decl.: consonante + -а). муж = nominativo, мужу = dativo, мужем = strumentale."
    }
];

// ============================================================
// PANEL 4 — Flashcards · public · 1-Е СКЛОНЕНИЕ
// ============================================================
const p4cards = [
    { front: "кошка", back: "бабушки" },
    { front: "собака", back: "дедушки" },
    { front: "муж", back: "подруги" },
    { front: "жена", back: "дяди" },
    { front: "сын", back: "сестры" },
    { front: "дочь", back: "тёти" },
    { front: "брат", back: "мамы" },
    { front: "кошка", back: "соседки" },
    { front: "собака", back: "папы" },
    { front: "сестра", back: "дедушки" }
];

// ============================================================
// PANEL 5 — Flashcards · public · 2-Е И 3-Е СКЛОНЕНИЕ
// ============================================================
const p5cards = [
    { front: "жена", back: "друга" },
    { front: "сестра", back: "брата" },
    { front: "кот", back: "соседа" },
    { front: "дочь", back: "мужа" },
    { front: "брат", back: "отца" },
    { front: "собака", back: "сына" },
    { front: "кот", back: "отца" },
    { front: "сестра", back: "соседа" },
    { front: "собака", back: "дочери" },
    { front: "брат", back: "матери" }
];

// ============================================================
// PANEL 6 — Flashcards · public · ВСЕ СКЛОНЕНИЯ (микс)
// ============================================================
const p6cards = [
    { front: "собака", back: "дочери" },
    { front: "жена", back: "дяди" },
    { front: "кот", back: "соседа" },
    { front: "дочь", back: "тёти" },
    { front: "брат", back: "матери" },
    { front: "кошка", back: "соседки" },
    { front: "сестра", back: "брата" },
    { front: "собака", back: "папы" },
    { front: "муж", back: "подруги" },
    { front: "кот", back: "отца" }
];

// ============================================================
// PANEL 7 — Flashcards · public · ПРИЛАГАТЕЛЬНЫЕ (жен. род)
// ============================================================
const p7cards = [
    { front: "парень", back: "старшей сестры" },
    { front: "собака", back: "младшей дочери" },
    { front: "муж", back: "лучшей подруги" },
    { front: "кошка", back: "близкой подруги" },
    { front: "кот", back: "старшей дочери" },
    { front: "сын", back: "младшей сестры" },
    { front: "дочь", back: "лучшей мамы" },
    { front: "брат", back: "старшей тёти" },
    { front: "жена", back: "младшей тёти" },
    { front: "собака", back: "младшей бабушки" }
];

// ============================================================
// PANEL 8 — Flashcards · public · ПРИЛАГАТЕЛЬНЫЕ (муж. род)
// ============================================================
const p8cards = [
    { front: "собака", back: "лучшего друга" },
    { front: "кошка", back: "старшего брата" },
    { front: "жена", back: "младшего сына" },
    { front: "сестра", back: "первого мужа" },
    { front: "дочь", back: "бывшего соседа" },
    { front: "кот", back: "старшего сына" },
    { front: "мать", back: "младшего брата" },
    { front: "собака", back: "бывшего мужа" },
    { front: "жена", back: "первого сына" },
    { front: "кошка", back: "старшего отца" }
];

// ============================================================
// PANEL 9 — Flashcards · public · ПРИЛАГАТЕЛЬНЫЕ (микс м+ж)
// ============================================================
const p9cards = [
    { front: "кот", back: "младшей дочери" },
    { front: "собака", back: "старшего брата" },
    { front: "муж", back: "лучшей подруги" },
    { front: "жена", back: "первого мужа" },
    { front: "кошка", back: "старшей сестры" },
    { front: "брат", back: "младшего сына" },
    { front: "дочь", back: "бывшего соседа" },
    { front: "сестра", back: "близкой подруги" },
    { front: "собака", back: "лучшего друга" },
    { front: "кот", back: "младшего брата" }
];

// ============================================================
// PANEL 10 — DragDrop · public · QUIZ (все склонения вперемешку)
// ============================================================
const p10exercises = [
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "собака {{1}} (= il cane dell'amico)",
        words: ["друг", "другу", "друга", "другом"],
        correctAnswers: { 1: "друга" },
        explanation: "друг → друга (genitivo, 2ª decl.: consonante + -а). друг = nominativo, другу = dativo, другом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "дочь {{1}} (= la figlia della nonna)",
        words: ["бабушка", "бабушке", "бабушки", "бабушку"],
        correctAnswers: { 1: "бабушки" },
        explanation: "бабушка → бабушки (genitivo, 1ª decl.: -а → -и dopo ш). бабушка = nominativo, бабушке = dativo, бабушку = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "кот {{1}} (= il gatto della madre)",
        words: ["мать", "матери", "матерью", "матерей"],
        correctAnswers: { 1: "матери" },
        explanation: "мать → матери (genitivo, 3ª decl.: -ь → -и). мать = nominativo, матерью = strumentale, матерей = genitivo plurale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "жена {{1}} (= la moglie del fratello)",
        words: ["брат", "брату", "брата", "братом"],
        correctAnswers: { 1: "брата" },
        explanation: "брат → брата (genitivo, 2ª decl.: consonante + -а). брат = nominativo, брату = dativo, братом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "сестра {{1}} (= la sorella dello zio)",
        words: ["дядя", "дяде", "дяди", "дядю"],
        correctAnswers: { 1: "дяди" },
        explanation: "дядя → дяди (genitivo, 1ª decl.: -я → -и). дядя = nominativo, дяде = dativo, дядю = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "муж {{1}} (= il marito della vicina)",
        words: ["соседка", "соседке", "соседки", "соседку"],
        correctAnswers: { 1: "соседки" },
        explanation: "соседка → соседки (genitivo, 1ª decl.: -а → -и dopo к). соседка = nominativo, соседке = dativo, соседку = accusativo."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "кошка {{1}} (= il gatto del figlio)",
        words: ["сын", "сыну", "сына", "сыном"],
        correctAnswers: { 1: "сына" },
        explanation: "сын → сына (genitivo, 2ª decl.: consonante + -а). сын = nominativo, сыну = dativo, сыном = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "брат {{1}} (= il fratello della figlia)",
        words: ["дочь", "дочери", "дочерью", "дочерей"],
        correctAnswers: { 1: "дочери" },
        explanation: "дочь → дочери (genitivo, 3ª decl.: -ь → -и). дочь = nominativo, дочерью = strumentale, дочерей = genitivo plurale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "собака {{1}} (= il cane del padre)",
        words: ["отец", "отцу", "отца", "отцом"],
        correctAnswers: { 1: "отца" },
        explanation: "отец → отца (genitivo, 2ª decl.: -ец → -ца). отец = nominativo, отцу = dativo, отцом = strumentale."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "кот {{1}} (= il gatto della sorella)",
        words: ["сестра", "сестре", "сестры", "сестру"],
        correctAnswers: { 1: "сестры" },
        explanation: "сестра → сестры (genitivo, 1ª decl.: -а → -ы). сестра = nominativo, сестре = dativo, сестру = accusativo."
    }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-gda-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-gda-01',    exercises: p1exercises }),
    'panel-gda-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-gda-02',    exercises: p2exercises }),
    'panel-gda-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-gda-03',    exercises: p3exercises }),
    'panel-gda-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-04', cards: p4cards }),
    'panel-gda-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-05', cards: p5cards }),
    'panel-gda-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-06', cards: p6cards }),
    'panel-gda-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-07', cards: p7cards }),
    'panel-gda-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-08', cards: p8cards }),
    'panel-gda-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-gda-09', cards: p9cards }),
    'panel-gda-10': () => new DragDropExercise({ rootId: 'ex-dragdrop-gda-10',    exercises: p10exercises })
};

initPanelManager({ initializers, enableAccessControl: true });
