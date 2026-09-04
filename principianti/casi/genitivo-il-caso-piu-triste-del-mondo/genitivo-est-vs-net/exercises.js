import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Местоимения и существительные (все склонения) после "у" + genitivo
// ============================================================
const p1exercises = [
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть сестра.",
        words: ["я", "мне", "меня"],
        correctAnswers: { 1: "меня" },
        explanation: "Genitivo del pronome personale: я → меня."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть друг.",
        words: ["моя старшая сестра", "моей старшей сестре", "моей старшей сестры"],
        correctAnswers: { 1: "моей старшей сестры" },
        explanation: "Genitivo: сестра (femminile) → сестры; l'aggettivo concorda: моя старшая → моей старшей."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть машина?",
        words: ["твой сосед", "твоему соседу", "твоего соседа"],
        correctAnswers: { 1: "твоего соседа" },
        explanation: "Genitivo: сосед (maschile) → соседа; il pronome concorda: твой → твоего."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть собака.",
        words: ["наша бабушка", "нашей бабушке", "нашей бабушки"],
        correctAnswers: { 1: "нашей бабушки" },
        explanation: "Genitivo: бабушка (femminile) → бабушки; il pronome concorda: наша → нашей."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть работа.",
        words: ["она", "ей", "неё"],
        correctAnswers: { 1: "неё" },
        explanation: "Genitivo del pronome personale: она → неё (con -н- dopo la preposizione «у»)."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть квартира.",
        words: ["ваш дядя", "вашему дяде", "вашего дяди"],
        correctAnswers: { 1: "вашего дяди" },
        explanation: "дядя è maschile ma si declina come i sostantivi femminili in -я: genitivo дяди. Il pronome concorda al maschile: ваш → вашего."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У его ___ есть время.",
        words: ["брат", "брату", "брата"],
        correctAnswers: { 1: "брата" },
        explanation: "Sostantivo maschile al genitivo: брата. (его è invariabile, non cambia forma)."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У её ___ есть велосипед.",
        words: ["подруга", "подруге", "подруги"],
        correctAnswers: { 1: "подруги" },
        explanation: "Sostantivo femminile al genitivo: подруги. (её è invariabile, non cambia forma)."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть дети.",
        words: ["они", "им", "них"],
        correctAnswers: { 1: "них" },
        explanation: "Genitivo del pronome personale: они → них (con -н- dopo la preposizione «у»)."
    },
    {
        instruction: "Поставь местоимение или существительное в родительный падеж.",
        text: "У ___ есть дача.",
        words: ["мы", "нам", "нас"],
        correctAnswers: { 1: "нас" },
        explanation: "Genitivo del pronome personale: мы → нас."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// "У X нет Y" — genitivo su entrambi i lati, tutte le declinazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["я", "меня", "кошка", "кошки"],
        correctAnswers: { 1: "меня", 2: "кошки" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} брата нет {{2}}.",
        words: ["мой старший", "моего старшего", "чёрная куртка", "чёрной куртки"],
        correctAnswers: { 1: "моего старшего", 2: "чёрной куртки" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["ты", "тебя", "заграничный паспорт", "заграничного паспорта"],
        correctAnswers: { 1: "тебя", 2: "заграничного паспорта" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} сестры нет {{2}}.",
        words: ["твоя младшая", "твоей младшей", "мобильный телефон", "мобильного телефона"],
        correctAnswers: { 1: "твоей младшей", 2: "мобильного телефона" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["он", "него", "русский словарь", "русского словаря"],
        correctAnswers: { 1: "него", 2: "русского словаря" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} соседа нет {{2}}.",
        words: ["наш", "нашего", "большая терраса", "большой террасы"],
        correctAnswers: { 1: "нашего", 2: "большой террасы" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["ваша соседка", "вашей соседки", "большое зеркало", "большого зеркала"],
        correctAnswers: { 1: "вашей соседки", 2: "большого зеркала" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["его подруга", "его подруги", "парень", "парня"],
        correctAnswers: { 1: "его подруги", 2: "парня" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["мы", "нас", "время", "времени"],
        correctAnswers: { 1: "нас", 2: "времени" }
    },
    {
        instruction: "Поставь слова в родительный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["её друг", "её друга", "девушка", "девушки"],
        correctAnswers: { 1: "её друга", 2: "девушки" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Solo pronomi dopo "у" — 5 coppie affermazione/negazione, ordine misto
// ============================================================
const p3exercises = [
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["он", "него", "новый телефон", "нового телефона"],
        correctAnswers: { 1: "него", 2: "нового телефона" }
    },
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} есть {{2}}.",
        words: ["я", "меня", "старший брат", "старшего брата"],
        correctAnswers: { 1: "меня", 2: "старший брат" }
    },
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} есть {{2}}.",
        words: ["он", "него", "новый телефон", "нового телефона"],
        correctAnswers: { 1: "него", 2: "новый телефон" }
    },
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["она", "неё", "свободное время", "свободного времени"],
        correctAnswers: { 1: "неё", 2: "свободного времени" }
    },
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} есть {{2}}.",
        words: ["ты", "тебя", "большая собака", "большой собаки"],
        correctAnswers: { 1: "тебя", 2: "большая собака" }
    },
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["мы", "нас", "большое зеркало", "большого зеркала"],
        correctAnswers: { 1: "нас", 2: "большого зеркала" }
    },
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} есть {{2}}.",
        words: ["мы", "нас", "большое зеркало", "большого зеркала"],
        correctAnswers: { 1: "нас", 2: "большое зеркало" }
    },
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["ты", "тебя", "большая собака", "большой собаки"],
        correctAnswers: { 1: "тебя", 2: "большой собаки" }
    },
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} есть {{2}}.",
        words: ["она", "неё", "свободное время", "свободного времени"],
        correctAnswers: { 1: "неё", 2: "свободное время" }
    },
    {
        instruction: "Поставь слова в правильный падеж (два пропуска).",
        text: "У {{1}} нет {{2}}.",
        words: ["я", "меня", "старший брат", "старшего брата"],
        correctAnswers: { 1: "меня", 2: "старшего брата" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Soggetto (1ª declinazione) + aggettivo, есть vs нет
// ============================================================
const p4cards = [
    { front: "У моей соседки есть новый телефон.", back: "У моей соседки нет нового телефона.", explanation: "Genitivo negativo: новый телефон → нового телефона (maschile)." },
    { front: "У твоего друга есть красная машина.", back: "У твоего друга нет красной машины.", explanation: "Genitivo negativo: красная машина → красной машины (femminile)." },
    { front: "У нашей бабушки есть старая фотография.", back: "У нашей бабушки нет старой фотографии.", explanation: "Genitivo negativo: старая фотография → старой фотографии (femminile)." },
    { front: "У вашего брата есть большая собака.", back: "У вашего брата нет большой собаки.", explanation: "Genitivo negativo: большая собака → большой собаки (femminile)." },
    { front: "У его сестры есть интересная книга.", back: "У его сестры нет интересной книги.", explanation: "Genitivo negativo: интересная книга → интересной книги (femminile). (его è invariabile)." },
    { front: "У её дяди есть новый дом.", back: "У её дяди нет нового дома.", explanation: "Genitivo negativo: новый дом → нового дома (maschile). (её è invariabile)." },
    { front: "У моего папы есть быстрый мотоцикл.", back: "У моего папы нет быстрого мотоцикла.", explanation: "Genitivo negativo: быстрый мотоцикл → быстрого мотоцикла (maschile)." },
    { front: "У твоей мамы есть вкусный торт.", back: "У твоей мамы нет вкусного торта.", explanation: "Genitivo negativo: вкусный торт → вкусного торта (maschile)." },
    { front: "У нашего соседа есть большой сад.", back: "У нашего соседа нет большого сада.", explanation: "Genitivo negativo: большой сад → большого сада (maschile)." },
    { front: "У вашей тёти есть красивое платье.", back: "У вашей тёти нет красивого платья.", explanation: "Genitivo negativo: красивое платье → красивого платья (neutro)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Soggetto (2ª declinazione, maschile) + aggettivo, есть vs нет
// ============================================================
const p5cards = [
    { front: "У моего дедушки есть старый чемодан.", back: "У моего дедушки нет старого чемодана." },
    { front: "У твоего коллеги есть новый ноутбук.", back: "У твоего коллеги нет нового ноутбука." },
    { front: "У нашего учителя есть строгий характер.", back: "У нашего учителя нет строгого характера." },
    { front: "У вашего начальника есть хороший план.", back: "У вашего начальника нет хорошего плана." },
    { front: "У его друга есть большой гараж.", back: "У его друга нет большого гаража." },
    { front: "У её брата есть быстрый велосипед.", back: "У её брата нет быстрого велосипеда." },
    { front: "У моего тренера есть новый свисток.", back: "У моего тренера нет нового свистка." },
    { front: "У твоего отца есть старый мотоцикл.", back: "У твоего отца нет старого мотоцикла." },
    { front: "У нашего доктора есть свободный час.", back: "У нашего доктора нет свободного часа." },
    { front: "У вашего племянника есть интересный проект.", back: "У вашего племянника нет интересного проекта." }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Есть vs нет — selezione mista dai panel 4-5
// ============================================================
const p6cards = [
    { front: "У моей соседки есть новый телефон.", back: "У моей соседки нет нового телефона." },
    { front: "У нашего соседа есть большой сад.", back: "У нашего соседа нет большого сада." },
    { front: "У её брата есть быстрый велосипед.", back: "У её брата нет быстрого велосипеда." },
    { front: "У вашего брата есть большая собака.", back: "У вашего брата нет большой собаки." },
    { front: "У твоей мамы есть вкусный торт.", back: "У твоей мамы нет вкусного торта." },
    { front: "У моего тренера есть новый свисток.", back: "У моего тренера нет нового свистка." },
    { front: "У её дяди есть новый дом.", back: "У её дяди нет нового дома." },
    { front: "У нашего учителя есть строгий характер.", back: "У нашего учителя нет строгого характера." },
    { front: "У твоего коллеги есть новый ноутбук.", back: "У твоего коллеги нет нового ноутбука." },
    { front: "У вашего начальника есть хороший план.", back: "У вашего начальника нет хорошего плана." }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Aggettivo + sostantivo (femminile), есть vs нет
// ============================================================
const p7cards = [
    { front: "У лучшей подруги есть красная машина.", back: "У лучшей подруги нет красной машины.", explanation: "Genitivo negativo: красная машина → красной машины (femminile)." },
    { front: "У старшей сестры есть интересная книга.", back: "У старшей сестры нет интересной книги.", explanation: "Genitivo negativo: интересная книга → интересной книги (femminile)." },
    { front: "У младшей сестры есть новый телефон.", back: "У младшей сестры нет нового телефона.", explanation: "Genitivo negativo: новый телефон → нового телефона (maschile)." },
    { front: "У бывшей девушки есть большая собака.", back: "У бывшей девушки нет большой собаки.", explanation: "Genitivo negativo: большая собака → большой собаки (femminile)." },
    { front: "У любимой бабушки есть старый дом.", back: "У любимой бабушки нет старого дома.", explanation: "Genitivo negativo: старый дом → старого дома (maschile)." },
    { front: "У новой учительницы есть красная ручка.", back: "У новой учительницы нет красной ручки.", explanation: "Genitivo negativo: красная ручка → красной ручки (femminile)." },
    { front: "У молодой соседки есть красивый сад.", back: "У молодой соседки нет красивого сада.", explanation: "Genitivo negativo: красивый сад → красивого сада (maschile)." },
    { front: "У доброй тёти есть уютная квартира.", back: "У доброй тёти нет уютной квартиры.", explanation: "Genitivo negativo: уютная квартира → уютной квартиры (femminile)." },
    { front: "У весёлой подруги есть смешная история.", back: "У весёлой подруги нет смешной истории.", explanation: "Genitivo negativo: смешная история → смешной истории (femminile)." },
    { front: "У умной студентки есть хорошая идея.", back: "У умной студентки нет хорошей идеи.", explanation: "Genitivo negativo: хорошая идея → хорошей идеи (femminile)." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Aggettivo + sostantivo (maschile, entrambe le parti), есть vs нет
// ============================================================
const p8cards = [
    { front: "У старшего брата есть новый телефон.", back: "У старшего брата нет нового телефона." },
    { front: "У нового начальника есть дальний родственник.", back: "У нового начальника нет дальнего родственника." },
    { front: "У младшего брата есть лучший друг.", back: "У младшего брата нет лучшего друга." },
    { front: "У бывшего парня есть странный друг.", back: "У бывшего парня нет странного друга." },
    { front: "У любимого дедушки есть старый дом.", back: "У любимого дедушки нет старого дома." },
    { front: "У нового учителя есть красный карандаш.", back: "У нового учителя нет красного карандаша." },
    { front: "У молодого соседа есть красивый сад.", back: "У молодого соседа нет красивого сада." },
    { front: "У любимого дяди есть старый гараж.", back: "У любимого дяди нет старого гаража." },
    { front: "У весёлого коллеги есть смешной рассказ.", back: "У весёлого коллеги нет смешного рассказа." },
    { front: "У умного студента есть хороший доклад.", back: "У умного студента нет хорошего доклада." }
];

// ============================================================
// PANEL 9 — Flashcard · paid
// Есть vs нет — selezione mista dai panel 7-8
// ============================================================
const p9cards = [
    { front: "У доброй тёти есть уютная квартира.", back: "У доброй тёти нет уютной квартиры." },
    { front: "У нового начальника есть дальний родственник.", back: "У нового начальника нет дальнего родственника." },
    { front: "У старшей сестры есть интересная книга.", back: "У старшей сестры нет интересной книги." },
    { front: "У любимого дедушки есть старый дом.", back: "У любимого дедушки нет старого дома." },
    { front: "У бывшей девушки есть большая собака.", back: "У бывшей девушки нет большой собаки." },
    { front: "У младшего брата есть лучший друг.", back: "У младшего брата нет лучшего друга." },
    { front: "У умной студентки есть хорошая идея.", back: "У умной студентки нет хорошей идеи." },
    { front: "У молодого соседа есть красивый сад.", back: "У молодого соседа нет красивого сада." },
    { front: "У новой учительницы есть красная ручка.", back: "У новой учительницы нет красной ручки." },
    { front: "У весёлого коллеги есть смешной рассказ.", back: "У весёлого коллеги нет смешного рассказа." }
];

// ============================================================
// PANEL 10 — Quiz misto (multiple choice + match + write) · public
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelEvn10() {
    const panel = document.getElementById('panel-evn-10');
    if (!panel) return;

    const container = panel.querySelector('#evn-10-cards-container');
    const prevBtn   = panel.querySelector('#evn-10-deck-prev');
    const nextBtn   = panel.querySelector('#evn-10-deck-next');
    const counterEl = panel.querySelector('#evn-10-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "У моей соседки нет ___.", options: ["новый телефон", "новому телефону", "нового телефона"], answer: "нового телефона" },
        { question: "У нашей бабушки нет ___.", options: ["старая фотография", "старую фотографию", "старой фотографии"], answer: "старой фотографии" },
        { question: "У его сестры нет ___.", options: ["интересная книга", "интересную книгу", "интересной книги"], answer: "интересной книги" },
        { question: "У твоей мамы нет ___.", options: ["вкусный торт", "вкусному торту", "вкусного торта"], answer: "вкусного торта" },
        { question: "У вашей тёти нет ___.", options: ["красивое платье", "красивому платью", "красивого платья"], answer: "красивого платья" },
        { question: "У твоего друга нет ___.", options: ["красная машина", "красную машину", "красной машины"], answer: "красной машины" },
        { question: "У вашего брата нет ___.", options: ["большая собака", "большую собаку", "большой собаки"], answer: "большой собаки" },
        { question: "У её дяди нет ___.", options: ["новый дом", "новому дому", "нового дома"], answer: "нового дома" },
        { question: "У моего папы нет ___.", options: ["быстрый мотоцикл", "быстрому мотоциклу", "быстрого мотоцикла"], answer: "быстрого мотоцикла" },
        { question: "У нашего соседа нет ___.", options: ["большой сад", "большому саду", "большого сада"], answer: "большого сада" }
    ];
    const matchPairs = [
        { left: "У лучшей подруги есть красная машина.", right: "У лучшей подруги нет красной машины." },
        { left: "У старшей сестры есть интересная книга.", right: "У старшей сестры нет интересной книги." },
        { left: "У младшей сестры есть новый телефон.", right: "У младшей сестры нет нового телефона." },
        { left: "У бывшей девушки есть большая собака.", right: "У бывшей девушки нет большой собаки." },
        { left: "У любимой бабушки есть старый дом.", right: "У любимой бабушки нет старого дома." },
        { left: "У моего дедушки есть старый чемодан.", right: "У моего дедушки нет старого чемодана." },
        { left: "У твоего коллеги есть новый ноутбук.", right: "У твоего коллеги нет нового ноутбука." },
        { left: "У нашего учителя есть строгий характер.", right: "У нашего учителя нет строгого характера." },
        { left: "У вашего начальника есть хороший план.", right: "У вашего начальника нет хорошего плана." },
        { left: "У его друга есть большой гараж.", right: "У его друга нет большого гаража." }
    ];
    const quizData = [
        { id: "evn10-w1",  promptPrefix: "У новой учительницы нет ",  promptSuffix: ".", answers: ["красной ручки"] },
        { id: "evn10-w2",  promptPrefix: "У молодой соседки нет ",    promptSuffix: ".", answers: ["красивого сада"] },
        { id: "evn10-w3",  promptPrefix: "У доброй тёти нет ",        promptSuffix: ".", answers: ["уютной квартиры"] },
        { id: "evn10-w4",  promptPrefix: "У весёлой подруги нет ",    promptSuffix: ".", answers: ["смешной истории"] },
        { id: "evn10-w5",  promptPrefix: "У умной студентки нет ",    promptSuffix: ".", answers: ["хорошей идеи"] },
        { id: "evn10-w6",  promptPrefix: "У старшего брата нет ",     promptSuffix: ".", answers: ["нового телефона"] },
        { id: "evn10-w7",  promptPrefix: "У нового начальника нет ",  promptSuffix: ".", answers: ["дальнего родственника"] },
        { id: "evn10-w8",  promptPrefix: "У младшего брата нет ",     promptSuffix: ".", answers: ["лучшего друга"] },
        { id: "evn10-w9",  promptPrefix: "У бывшего парня нет ",      promptSuffix: ".", answers: ["странного друга"] },
        { id: "evn10-w10", promptPrefix: "У любимого дяди нет ",      promptSuffix: ".", answers: ["старого гаража"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

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
            card.className = 'fca01-card-container evn-10-card';
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
        container.querySelectorAll('.evn-10-card').forEach(card => {
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
                const card    = this.closest('.evn-10-card');
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
        container.querySelectorAll('.evn-10-card').forEach((c, i) => {
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
    'panel-evn-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-evn-01', exercises: p1exercises }),
    'panel-evn-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-evn-02', exercises: p2exercises }),
    'panel-evn-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-evn-03', exercises: p3exercises }),
    'panel-evn-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-04', cards: p4cards }),
    'panel-evn-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-05', cards: p5cards }),
    'panel-evn-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-06', cards: p6cards }),
    'panel-evn-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-07', cards: p7cards }),
    'panel-evn-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-08', cards: p8cards }),
    'panel-evn-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-evn-09', cards: p9cards }),
    'panel-evn-10': () => initPanelEvn10()
};

initPanelManager({ initializers, enableAccessControl: true });
