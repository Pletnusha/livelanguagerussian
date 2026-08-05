import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Aggettivo possessivo + sostantivo — accordo di genere e caso (accusativo)
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Анна.",
        words: ["моего маму", "моя мама", "мою маму", "моя маму"],
        correctAnswers: { 1: "мою маму" },
        explanation: "моего (pronome maschile, accusativo) + маму (sostantivo femminile, accusativo) → genere del pronome sbagliato. моя (pronome femminile, nominativo) + мама (sostantivo femminile, nominativo) → genere giusto ma caso sbagliato. мою (pronome femminile, accusativo) + маму (sostantivo femminile, accusativo) → CORRETTO. моя (pronome femminile, nominativo) + маму (sostantivo femminile, accusativo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Оля.",
        words: ["твоего маму", "твоя мама", "твою маму", "твоя маму"],
        correctAnswers: { 1: "твою маму" },
        explanation: "твоего (pronome maschile, accusativo) + маму (sostantivo femminile, accusativo) → genere del pronome sbagliato. твоя (pronome femminile, nominativo) + мама (sostantivo femminile, nominativo) → genere giusto ma caso sbagliato. твою (pronome femminile, accusativo) + маму (sostantivo femminile, accusativo) → CORRETTO. твоя (pronome femminile, nominativo) + маму (sostantivo femminile, accusativo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Иван.",
        words: ["мою отца", "мой отец", "моего отца", "мой отца"],
        correctAnswers: { 1: "моего отца" },
        explanation: "мою (pronome femminile, accusativo) + отца (sostantivo maschile animato, accusativo) → genere del pronome sbagliato. мой (pronome maschile, nominativo) + отец (sostantivo maschile, nominativo) → genere giusto ma caso sbagliato. моего (pronome maschile animato, accusativo) + отца (sostantivo maschile animato, accusativo) → CORRETTO. мой (pronome maschile, nominativo) + отца (sostantivo maschile animato, accusativo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Пётр.",
        words: ["нашу отца", "наш отец", "нашего отца", "наш отца"],
        correctAnswers: { 1: "нашего отца" },
        explanation: "нашу (pronome femminile, accusativo) + отца (sostantivo maschile animato, accusativo) → genere del pronome sbagliato. наш (pronome maschile, nominativo) + отец (sostantivo maschile, nominativo) → genere giusto ma caso sbagliato. нашего (pronome maschile animato, accusativo) + отца (sostantivo maschile animato, accusativo) → CORRETTO. наш (pronome maschile, nominativo) + отца (sostantivo maschile animato, accusativo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Дима.",
        words: ["твою отца", "твой отец", "твоего отца", "твой отца"],
        correctAnswers: { 1: "твоего отца" },
        explanation: "твою (pronome femminile, accusativo) + отца (sostantivo maschile animato, accusativo) → genere del pronome sbagliato. твой (pronome maschile, nominativo) + отец (sostantivo maschile, nominativo) → genere giusto ma caso sbagliato. твоего (pronome maschile animato, accusativo) + отца (sostantivo maschile animato, accusativo) → CORRETTO. твой (pronome maschile, nominativo) + отца (sostantivo maschile animato, accusativo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Сергей.",
        words: ["твою брата", "твой брат", "твоего брата", "твой брата"],
        correctAnswers: { 1: "твоего брата" },
        explanation: "твою (pronome femminile, accusativo) + брата (sostantivo maschile animato, accusativo) → genere del pronome sbagliato. твой (pronome maschile, nominativo) + брат (sostantivo maschile, nominativo) → genere giusto ma caso sbagliato. твоего (pronome maschile animato, accusativo) + брата (sostantivo maschile animato, accusativo) → CORRETTO. твой (pronome maschile, nominativo) + брата (sostantivo maschile animato, accusativo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Андрей.",
        words: ["нашу брата", "наш брат", "нашего брата", "наш брата"],
        correctAnswers: { 1: "нашего брата" },
        explanation: "нашу (pronome femminile, accusativo) + брата (sostantivo maschile animato, accusativo) → genere del pronome sbagliato. наш (pronome maschile, nominativo) + брат (sostantivo maschile, nominativo) → genere giusto ma caso sbagliato. нашего (pronome maschile animato, accusativo) + брата (sostantivo maschile animato, accusativo) → CORRETTO. наш (pronome maschile, nominativo) + брата (sostantivo maschile animato, accusativo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Катя.",
        words: ["моего сестру", "моя сестра", "мою сестру", "моя сестру"],
        correctAnswers: { 1: "мою сестру" },
        explanation: "моего (pronome maschile, accusativo) + сестру (sostantivo femminile, accusativo) → genere del pronome sbagliato. моя (pronome femminile, nominativo) + сестра (sostantivo femminile, nominativo) → genere giusto ma caso sbagliato. мою (pronome femminile, accusativo) + сестру (sostantivo femminile, accusativo) → CORRETTO. моя (pronome femminile, nominativo) + сестру (sostantivo femminile, accusativo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Лена.",
        words: ["твоего сестру", "твоя сестра", "твою сестру", "твоя сестру"],
        correctAnswers: { 1: "твою сестру" },
        explanation: "твоего (pronome maschile, accusativo) + сестру (sostantivo femminile, accusativo) → genere del pronome sbagliato. твоя (pronome femminile, nominativo) + сестра (sostantivo femminile, nominativo) → genere giusto ma caso sbagliato. твою (pronome femminile, accusativo) + сестру (sostantivo femminile, accusativo) → CORRETTO. твоя (pronome femminile, nominativo) + сестру (sostantivo femminile, accusativo) → i due elementi non concordano nel caso."
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Марина.",
        words: ["нашего сестру", "наша сестра", "нашу сестру", "наша сестру"],
        correctAnswers: { 1: "нашу сестру" },
        explanation: "нашего (pronome maschile, accusativo) + сестру (sostantivo femminile, accusativo) → genere del pronome sbagliato. наша (pronome femminile, nominativo) + сестра (sostantivo femminile, nominativo) → genere giusto ma caso sbagliato. нашу (pronome femminile, accusativo) + сестру (sostantivo femminile, accusativo) → CORRETTO. наша (pronome femminile, nominativo) + сестру (sostantivo femminile, accusativo) → i due elementi non concordano nel caso."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Pronome + aggettivo + sostantivo (1a declinazione) — accordo all'accusativo
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Анна.",
        words: ["моего старшую сестру", "моя старшая сестра", "мою старшую сестру", "моя старшую сестру"],
        correctAnswers: { 1: "мою старшую сестру" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "Как зовут {{1}}?",
        words: ["твоего лучшую подругу", "твоя лучшая подруга", "твою лучшую подругу", "твоя лучшую подругу"],
        correctAnswers: { 1: "твою лучшую подругу" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Ольга.",
        words: ["его любимого тётю", "его любимая тётя", "его любимую тётю", "его любимая тётю"],
        correctAnswers: { 1: "его любимую тётю" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Иван.",
        words: ["нашу любимого дядю", "наш любимый дядя", "нашего любимого дядю", "наш любимого дядю"],
        correctAnswers: { 1: "нашего любимого дядю" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Катя.",
        words: ["их младшего сестру", "их младшая сестра", "их младшую сестру", "их младшая сестру"],
        correctAnswers: { 1: "их младшую сестру" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Марина.",
        words: ["его любимого девушку", "его любимая девушка", "его любимую девушку", "его любимая девушку"],
        correctAnswers: { 1: "его любимую девушку" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Лена.",
        words: ["их среднего сестру", "их средняя сестра", "их среднюю сестру", "их средняя сестру"],
        correctAnswers: { 1: "их среднюю сестру" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Тамара.",
        words: ["нашего бабушку", "наша бабушка", "нашу бабушку", "наша бабушку"],
        correctAnswers: { 1: "нашу бабушку" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Соня.",
        words: ["её лучшего подругу", "её лучшая подруга", "её лучшую подругу", "её лучшая подругу"],
        correctAnswers: { 1: "её лучшую подругу" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Рекс.",
        words: ["его любимого собаку", "его любимая собака", "его любимую собаку", "его любимая собаку"],
        correctAnswers: { 1: "его любимую собаку" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Pronome + aggettivo + sostantivo (2a declinazione, maschile animato) — accordo all'accusativo
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Дима.",
        words: ["его старшую брата", "его старший брат", "его старшего брата", "его старший брата"],
        correctAnswers: { 1: "его старшего брата" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Олег.",
        words: ["нашу среднего сына", "наш средний сын", "нашего среднего сына", "наш среднего сына"],
        correctAnswers: { 1: "нашего среднего сына" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Антон.",
        words: ["мою лучшего друга", "мой лучший друг", "моего лучшего друга", "мой лучшего друга"],
        correctAnswers: { 1: "моего лучшего друга" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Павел.",
        words: ["их старшую сына", "их старший сын", "их старшего сына", "их старший сына"],
        correctAnswers: { 1: "их старшего сына" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Кирилл.",
        words: ["нашу младшего брата", "наш младший брат", "нашего младшего брата", "наш младшего брата"],
        correctAnswers: { 1: "нашего младшего брата" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Николай.",
        words: ["его отец", "его отцу", "его отца", "его отцом"],
        correctAnswers: { 1: "его отца" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + aggettivo + sostantivo) all'accusativo.",
        text: "{{1}} зовут Артём.",
        words: ["её любимую парня", "её любимый парень", "её любимого парня", "её любимый парня"],
        correctAnswers: { 1: "её любимого парня" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "{{1}} зовут Виктор.",
        words: ["их сосед", "их соседу", "их соседа", "их соседом"],
        correctAnswers: { 1: "их соседа" }
    },
    {
        instruction: "Scegli la forma corretta (pronome + sostantivo) all'accusativo.",
        text: "Как зовут {{1}}?",
        words: ["ваша кота", "ваш кот", "вашего кота", "ваш кота"],
        correctAnswers: { 1: "вашего кота" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Pronome possessivo (fronte) + sostantivo all'accusativo (retro)
// ============================================================
const p4cards = [
    { front: "мою", back: "маму зовут", explanation: "Pronome femminile accusativo (мою) + sostantivo femminile in -а accusativo (маму)." },
    { front: "нашего", back: "друга зовут", explanation: "Pronome maschile animato accusativo (нашего) + sostantivo maschile animato accusativo (друга)." },
    { front: "Как зовут твоего", back: "дедушку?", explanation: "Pronome maschile animato accusativo (твоего) + sostantivo maschile (genere maschile nonostante la desinenza in -а, come дядя) accusativo (дедушку)." },
    { front: "Как зовут вашего", back: "сына?", explanation: "Pronome maschile animato accusativo (вашего) + sostantivo maschile animato accusativo (сына)." },
    { front: "нашу", back: "сестру зовут", explanation: "Pronome femminile accusativo (нашу) + sostantivo femminile in -а accusativo (сестру)." },
    { front: "вашу", back: "кошку зовут", explanation: "Pronome femminile accusativo (вашу) + sostantivo femminile in -а accusativo (кошку)." },
    { front: "твою", back: "бабушку зовут", explanation: "Pronome femminile accusativo (твою) + sostantivo femminile in -а accusativo (бабушку)." },
    { front: "нашего", back: "дедушку зовут", explanation: "Pronome maschile animato accusativo (нашего) + sostantivo maschile (genere maschile nonostante la desinenza in -а) accusativo (дедушку)." },
    { front: "вашего", back: "дядю зовут", explanation: "Pronome maschile animato accusativo (вашего) + sostantivo maschile (genere maschile nonostante la desinenza in -я) accusativo (дядю)." },
    { front: "моего", back: "папу зовут", explanation: "Pronome maschile animato accusativo (моего) + sostantivo maschile (genere maschile nonostante la desinenza in -а) accusativo (папу)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Pronome + aggettivo (fronte) + sostantivo, 1a declinazione (retro)
// ============================================================
const p5cards = [
    { front: "мою старшую", back: "сестру зовут" },
    { front: "Как зовут твою лучшую", back: "подругу?" },
    { front: "нашу младшую", back: "сестру зовут" },
    { front: "Как зовут вашу любимую", back: "кошку?" },
    { front: "его любимую", back: "девушку зовут" },
    { front: "их младшую", back: "сестру зовут" },
    { front: "нашего любимого", back: "дядю зовут" },
    { front: "вашу любимую", back: "тётю зовут" },
    { front: "Как зовут вашу среднюю", back: "сестру?" },
    { front: "Как зовут твою любимую", back: "собаку?" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Pronome + aggettivo (fronte) + sostantivo, 2a declinazione maschile (retro)
// ============================================================
const p6cards = [
    { front: "нашего младшего", back: "сына зовут" },
    { front: "вашего среднего", back: "сына зовут" },
    { front: "их старшего", back: "сына зовут" },
    { front: "моего лучшего", back: "друга зовут" },
    { front: "нашего любимого", back: "кота зовут" },
    { front: "твоего среднего", back: "брата зовут" },
    { front: "её любимого", back: "парня зовут" },
    { front: "моего любимого", back: "мужа зовут" },
    { front: "Как зовут твоего лучшего", back: "друга?" },
    { front: "нашего старшего", back: "сына зовут" }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Mix 1a + 2a declinazione — pronome/aggettivo (fronte) + sostantivo (retro)
// ============================================================
const p7cards = [
    { front: "мою старшую", back: "тётю зовут", explanation: "Pronome femminile accusativo (мою) + sostantivo femminile in -а accusativo (тётю)." },
    { front: "твоего среднего", back: "друга зовут", explanation: "Pronome maschile animato accusativo (твоего) + sostantivo maschile animato accusativo (друга)." },
    { front: "нашего любимого", back: "дедушку зовут", explanation: "Pronome maschile animato accusativo (нашего) + sostantivo maschile (genere maschile nonostante la desinenza in -а) accusativo (дедушку)." },
    { front: "их младшую", back: "подругу зовут", explanation: "Sostantivo femminile in -а accusativo: подругу." },
    { front: "вашего лучшего", back: "сына зовут", explanation: "Pronome maschile animato accusativo (вашего) + sostantivo maschile animato accusativo (сына)." },
    { front: "мою любимую", back: "кошку зовут", explanation: "Pronome femminile accusativo (мою) + sostantivo femminile in -а accusativo (кошку)." },
    { front: "нашего старшего", back: "брата зовут", explanation: "Pronome maschile animato accusativo (нашего) + sostantivo maschile animato accusativo (брата)." },
    { front: "её старшую", back: "сестру зовут", explanation: "Sostantivo femminile in -а accusativo: сестру." },
    { front: "твою любимую", back: "бабушку зовут", explanation: "Pronome femminile accusativo (твою) + sostantivo femminile in -а accusativo (бабушку)." },
    { front: "их лучшего", back: "друга зовут", explanation: "Sostantivo maschile animato accusativo: друга." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Mix 1a decl. (5) + 2a decl. (4) + 3a decl. speciale «дочь» (1)
// ============================================================
const p8cards = [
    { front: "твою старшую", back: "тётю зовут" },
    { front: "нашу лучшую", back: "подругу зовут" },
    { front: "его среднюю", back: "сестру зовут" },
    { front: "вашего любимого", back: "дядю зовут" },
    { front: "мою любимую", back: "собаку зовут" },
    { front: "твоего младшего", back: "сына зовут" },
    { front: "нашего лучшего", back: "кота зовут" },
    { front: "их среднего", back: "брата зовут" },
    { front: "вашего старшего", back: "мужа зовут" },
    { front: "Как зовут вашу", back: "дочь?" }
];

// ============================================================
// PANEL 9 — Flashcard · paid
// 5 ripetute da panel 8 (3× 2a decl. + 2× 1a decl.) + 4 nuove (2× 2a + 1× 1a + 1× 3a decl.)
// ============================================================
const p9cards = [
    { front: "твоего младшего", back: "сына зовут" },
    { front: "нашего лучшего", back: "кота зовут" },
    { front: "их среднего", back: "брата зовут" },
    { front: "твою старшую", back: "тётю зовут" },
    { front: "нашу лучшую", back: "подругу зовут" },
    { front: "моего старшего", back: "сына зовут" },
    { front: "вашего среднего", back: "брата зовут" },
    { front: "их младшую", back: "девушку зовут" },
    { front: "Как зовут вашу", back: "мать?" }
];

// ============================================================
// PANEL 10 — Quiz misto (multiple choice + match + write) · paid
// TODO: contenuto in attesa di materiale da ID/Copywriter
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelCtc10() {
    const panel = document.getElementById('panel-ctc-10');
    if (!panel) return;

    const container = panel.querySelector('#ctc-10-cards-container');
    const prevBtn   = panel.querySelector('#ctc-10-deck-prev');
    const nextBtn   = panel.querySelector('#ctc-10-deck-next');
    const counterEl = panel.querySelector('#ctc-10-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "___ зовут Анна.", options: ["мою старшую сестру", "моя старшая сестра"], answer: "мою старшую сестру" },
        { question: "___ зовут Дима.", options: ["его старшего брата", "его старший брат"], answer: "его старшего брата" },
        { question: "___ зовут Оля.", options: ["твою лучшую подругу", "твоя лучшая подруга"], answer: "твою лучшую подругу" },
        { question: "___ зовут Олег.", options: ["нашего среднего сына", "наш средний сын"], answer: "нашего среднего сына" },
        { question: "___ зовут Соня.", options: ["твою дочь", "твоя дочь"], answer: "твою дочь" },
        { question: "___ зовут Ольга.", options: ["его любимую тётю", "его любимая тётя"], answer: "его любимую тётю" },
        { question: "___ зовут Антон.", options: ["моего лучшего друга", "мой лучший друг"], answer: "моего лучшего друга" },
        { question: "___ зовут Иван.", options: ["нашего любимого дядю", "наш любимый дядя"], answer: "нашего любимого дядю" },
        { question: "___ зовут Павел.", options: ["их старшего сына", "их старший сын"], answer: "их старшего сына" },
        { question: "___ зовут Катя.", options: ["их младшую сестру", "их младшая сестра"], answer: "их младшую сестру" }
    ];

    const matchPairs = [
        { left: "нашего младшего", right: "брата зовут Кирилл" },
        { left: "его любимую", right: "девушку зовут Марина" },
        { left: "её любимого", right: "парня зовут Артём" },
        { left: "их среднюю", right: "сестру зовут Лена" },
        { left: "нашу", right: "мать зовут Ирина" },
        { left: "нашего лучшего", right: "друга зовут Максим" },
        { left: "её лучшую", right: "подругу зовут Соня" },
        { left: "вашего среднего", right: "сына зовут Олег" },
        { left: "мою любимую", right: "собаку зовут Рекс" },
        { left: "нашего любимого", right: "кота зовут Барсик" }
    ];

    const quizData = [
        { id: "ctc-001", promptPrefix: "", promptSuffix: " зовут Тамара.", answers: ["нашу младшую сестру"] },
        { id: "ctc-002", promptPrefix: "", promptSuffix: " зовут Сергей.", answers: ["твоего среднего брата"] },
        { id: "ctc-003", promptPrefix: "", promptSuffix: " зовут Мурка.", answers: ["вашу любимую кошку"] },
        { id: "ctc-004", promptPrefix: "", promptSuffix: " зовут Игорь.", answers: ["моего любимого мужа"] },
        { id: "ctc-005", promptPrefix: "", promptSuffix: " зовут Вера.", answers: ["вашу любимую тётю"] },
        { id: "ctc-006", promptPrefix: "", promptSuffix: " зовут Данил.", answers: ["твоего лучшего друга"] },
        { id: "ctc-007", promptPrefix: "", promptSuffix: " зовут Настя.", answers: ["вашу среднюю сестру"] },
        { id: "ctc-008", promptPrefix: "", promptSuffix: " зовут Роман.", answers: ["нашего старшего сына"] },
        { id: "ctc-009", promptPrefix: "", promptSuffix: " зовут Дружок.", answers: ["твою любимую собаку"] },
        { id: "ctc-010", promptPrefix: "", promptSuffix: " зовут Женя.", answers: ["твоего среднего друга"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ');
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
            card.className = 'fca01-card-container ctc-10-card';
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
        container.querySelectorAll('.ctc-10-card').forEach(card => {
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
                const card    = this.closest('.ctc-10-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === ans);
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
        container.querySelectorAll('.ctc-10-card').forEach((c, i) => {
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
    'panel-ctc-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-ctc-01',    exercises: p1exercises }),
    'panel-ctc-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-ctc-02',    exercises: p2exercises }),
    'panel-ctc-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-ctc-03',    exercises: p3exercises }),
    'panel-ctc-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ctc-04', cards: p4cards }),
    'panel-ctc-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ctc-05', cards: p5cards }),
    'panel-ctc-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ctc-06', cards: p6cards }),
    'panel-ctc-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ctc-07', cards: p7cards }),
    'panel-ctc-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ctc-08', cards: p8cards }),
    'panel-ctc-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-ctc-09', cards: p9cards }),
    'panel-ctc-10': () => initPanelCtc10()
};

initPanelManager({ initializers, enableAccessControl: true });
