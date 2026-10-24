import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import ImageLabelExercise from '/assets/js/engines/ImageLabelExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — ImageLabel · student · НАЙДИ ПРЕДМЕТ
// ============================================================
const kitchenLabels = [
    { id: 'k-01', x: 23.7, y: 48.5, answers: ['духовка'] },
    { id: 'k-02', x: 40.4, y: 20, answers: ['вытяжка'] },
    { id: 'k-03', x: 60.5, y: 39.5, answers: ['холодильник'] },
    { id: 'k-04', x: 44.8, y: 54.2, answers: ['плита'] },
    { id: 'k-05', x: 40.3, y: 49.8, answers: ['раковина'] },
    { id: 'k-06', x: 37.4, y: 66.6, answers: ['тарелки'] },
    { id: 'k-07', x: 72.3, y: 52.8, answers: ['кухонный комбайн'] },
    { id: 'k-08', x: 85.8, y: 54.1, answers: ['камин'] },
    { id: 'k-09', x: 85.8, y: 54.1, answers: ['полка'] },
    { id: 'k-10', x: 25.7, y: 29.7, answers: ['лампа'] },
    { id: 'k-11', x: 91.6, y: 39.5, answers: ['картина'] },
    { id: 'k-12', x: 92.5, y: 68.8, answers: ['ваза'] },
    { id: 'k-13', x: 93.1, y: 85.2, answers: ['ковёр', 'ковер'] },
    { id: 'k-14', x: 10.9, y: 53.1, answers: ['салатница'] },
];

const livingLabels = [
    { id: 'l-01', x: 22.4, y: 85.5, answers: ['диван'] },
    { id: 'l-02', x: 80.2, y: 85, answers: ['подушка'] },
    { id: 'l-03', x: 37.8, y: 66.2, answers: ['стенка'] },
    { id: 'l-04', x: 42.3, y: 93.4, answers: ['ковёр', 'ковер'] },
    { id: 'l-05', x: 90, y: 29.6, answers: ['занавеска'] },
    { id: 'l-06', x: 75.4, y: 51.5, answers: ['лампа'] },
    { id: 'l-07', x: 58.3, y: 41.1, answers: ['лампа'] },
    { id: 'l-08', x: 61, y: 64, answers: ['стул'] },
    { id: 'l-09', x: 54.9, y: 60.2, answers: ['стол'] },
    { id: 'l-10', x: 80.8, y: 35.1, answers: ['окно'] },
    { id: 'l-11', x: 51.8, y: 83.8, answers: ['пол'] },
    { id: 'l-12', x: 64.5, y: 9.8, answers: ['потолок'] },
    { id: 'l-13', x: 32.5, y: 58.2, answers: ['книги'] },
];

// ============================================================
// PANEL 2 — Flashcard · public · ЛЕКСИКА: КУХНЯ
// ============================================================
const kitchenCards = [
    { front: "духовка", back: "forno" },
    { front: "микроволновка", back: "microonde" },
    { front: "вытяжка", back: "cappa aspirante" },
    { front: "раковина", back: "lavandino" },
    { front: "холодильник", back: "frigorifero" },
    { front: "кран", back: "rubinetto" },
    { front: "кухонный комбайн", back: "robot da cucina" },
    { front: "плита", back: "piano cottura" },
    { front: "тарелки", back: "piatti" },
    { front: "ступка", back: "mortaio" }
];

// ============================================================
// PANEL 3 — Flashcard · student · ЛЕКСИКА: ГОСТИНАЯ
// ============================================================
const livingRoomCards = [
    { front: "потолок", back: "soffitto" },
    { front: "стенка", back: "parete attrezzata" },
    { front: "диван", back: "divano" },
    { front: "подушка", back: "cuscino" },
    { front: "ковёр", back: "tappeto" },
    { front: "занавеска", back: "tenda" },
    { front: "лампа", back: "lampada" },
    { front: "стул", back: "sedia" },
    { front: "ваза", back: "vaso" },
    { front: "окно", back: "finestra" }
];

// ============================================================
// PANEL 4 — Flashcard · paid · ЛЕКСИКА: ВАННАЯ + РАЗНОЕ
// ============================================================
const bathroomCards = [
    { front: "полотенце", back: "asciugamano" },
    { front: "зеркало", back: "specchio" },
    { front: "мыло", back: "sapone" },
    { front: "шампунь", back: "shampoo" },
    { front: "зубная паста", back: "dentifricio" },
    { front: "пульт", back: "telecomando" },
    { front: "камин", back: "camino" },
    { front: "картина", back: "quadro" },
    { front: "кресло", back: "poltrona" },
    { front: "коробка", back: "scatola" }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-casa-1': () => new ImageLabelExercise({ rootId: 'ex-imagelabel-casa-01', rooms: [
        { name: 'Кухня', image: './img/kitchen.jpg', labels: kitchenLabels },
        { name: 'Гостиная', image: './img/living.jpg', labels: livingLabels },
    ]}),
    'panel-casa-2': () => new FlashcardExercise({ rootId: 'ex-flashcards-casa-02', cards: kitchenCards }),
    'panel-casa-3': () => new FlashcardExercise({ rootId: 'ex-flashcards-casa-03', cards: livingRoomCards }),
    'panel-casa-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-casa-04', cards: bathroomCards }),
};

initPanelManager({ initializers, enableAccessControl: true });
