import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «К трём» — scadenza: к + dativo (entro), in alternativa a до + genitivo (fino a)
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.
// Niente suggerimenti di significato: tra parentesi solo l'ora. Il senso lo dà la domanda russa
// (К какому часу? / До какого часа? / Когда примерно? / Во сколько?) o un verbo che esclude l'altra preposizione.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: к / к ↔ до / полдень, полночь (nuovo) + около / periodo / momento / без (vecchio)
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(15:00) — К какому часу нужно сдать документы? — {{1}}.",
        words: ["К три", "К трём", "К трёх"],
        correctAnswers: { 1: "К трём" },
        explanation: "К какому часу? = entro: к + dativo: три → трём."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) — Когда примерно придут гости? — {{1}}.",
        words: ["Около семь", "Около в семь", "Около семи"],
        correctAnswers: { 1: "Около семи" },
        explanation: "Когда примерно? = circa: около + genitivo: семь → семи."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:00–18:00) Офис работает {{1}}.",
        words: ["с девяти до шести", "с девяти по шесть", "с девяти к шести"],
        correctAnswers: { 1: "с девяти до шести" },
        explanation: "Periodo con le ore: с + genitivo … до + genitivo."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00) Отчёт должен быть готов {{1}}.",
        words: ["к час", "к часу", "к часа"],
        correctAnswers: { 1: "к часу" },
        explanation: "Должен быть готов к… = entro: к + dativo: час → часу."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:30) — Во сколько начинается фильм? — {{1}}.",
        words: ["В половине седьмого", "К половине седьмого", "В половину седьмого"],
        correctAnswers: { 1: "В половине седьмого" },
        explanation: "Во сколько? = il momento esatto: в половине. К vuol dire «entro»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:30) — К какому часу нам приходить? — {{1}}.",
        words: ["К половина седьмого", "К половину седьмого", "К половине седьмого"],
        correctAnswers: { 1: "К половине седьмого" },
        explanation: "к + dativo: половина → половине."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(20:00) — До какого часа работает магазин? — {{1}}.",
        words: ["К восьми", "До восемь", "До восьми"],
        correctAnswers: { 1: "До восьми" },
        explanation: "До какого часа? = fino a: до + genitivo. К vuol dire «entro»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12:00) Обед будет готов {{1}}.",
        words: ["к полудню", "к полдню", "к полудня"],
        correctAnswers: { 1: "к полудню" },
        explanation: "Dativo irregolare: полдень → полудню."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(7:50) — Сколько времени? — {{1}}.",
        words: ["К без десяти восемь", "Без десяти восемь", "В без десяти восемь"],
        correctAnswers: { 1: "Без десяти восемь" },
        explanation: "Che ore sono? Con без niente preposizione."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(0:00) — К какому часу вы вернётесь? — {{1}}.",
        words: ["К полночь", "К полуночи", "К полуночью"],
        correctAnswers: { 1: "К полуночи" },
        explanation: "Dativo irregolare: полночь → полуночи (come il genitivo)."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// к + dativo (ore, час, половина, четверть, полдень, полночь)
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(16:00) Нужно вернуться {{1}}.",
        words: ["к четыре", "к четырём", "к четырёх"],
        correctAnswers: { 1: "к четырём" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) Ужин будет готов {{1}}.",
        words: ["к семи", "к семь", "к семью"],
        correctAnswers: { 1: "к семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(11:30) Приходи {{1}}.",
        words: ["к половину двенадцатого", "к половины двенадцатого", "к половине двенадцатого"],
        correctAnswers: { 1: "к половине двенадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00) Курьер привезёт заказ {{1}}.",
        words: ["к час", "к часу", "к часа"],
        correctAnswers: { 1: "к часу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(22:00) Мы должны быть дома {{1}}.",
        words: ["к десять", "к десятью", "к десяти"],
        correctAnswers: { 1: "к десяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(9:15) Приезжай {{1}}.",
        words: ["к четверти десятого", "к четверть десятого", "к в четверть десятого"],
        correctAnswers: { 1: "к четверти десятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(12:00) Отчёт нужен {{1}}.",
        words: ["к полудню", "к полдень", "к полудня"],
        correctAnswers: { 1: "к полудню" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(2:00) Он обещал вернуться {{1}} ночи.",
        words: ["к два", "к двум", "к двух"],
        correctAnswers: { 1: "к двум" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(18:00) Заберите заказ {{1}}.",
        words: ["к шесть", "к шестью", "к шести"],
        correctAnswers: { 1: "к шести" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(0:00) Праздник закончится {{1}}.",
        words: ["к полночь", "к полуночи", "к полночью"],
        correctAnswers: { 1: "к полуночи" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// К какому часу? (к + dativo) o До какого часа? (до + genitivo)
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(15:00) — К какому часу должен быть готов отчёт? — {{1}}.",
        words: ["До трёх", "К трём", "К трёх"],
        correctAnswers: { 1: "К трём" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(15:00) — До какого часа ты сегодня работаешь? — {{1}}.",
        words: ["До трёх", "К трём", "До трём"],
        correctAnswers: { 1: "До трёх" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00) — К какому часу подать обед? — {{1}}.",
        words: ["До часа", "К часа", "К часу"],
        correctAnswers: { 1: "К часу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(13:00) — До какого часа продлится перерыв? — {{1}}.",
        words: ["К часу", "До час", "До часа"],
        correctAnswers: { 1: "До часа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) — К какому часу мне быть дома? — {{1}}.",
        words: ["До семи", "К семи", "К семь"],
        correctAnswers: { 1: "К семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(19:00) — До какого часа открыта аптека? — {{1}}.",
        words: ["К семи", "До семь", "До семи"],
        correctAnswers: { 1: "До семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(8:00) — К какому часу нам быть на вокзале? — {{1}}.",
        words: ["К восьми", "До восьми", "К восемь"],
        correctAnswers: { 1: "К восьми" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(10:00) — До какого часа ты спишь в субботу? — {{1}}.",
        words: ["К десяти", "До десять", "До десяти"],
        correctAnswers: { 1: "До десяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:00) — К какому часу будет готова машина? — {{1}}.",
        words: ["К два", "К двум", "До двух"],
        correctAnswers: { 1: "К двум" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(14:00) — До какого часа тебя ждать? — {{1}}.",
        words: ["До двух", "К двум", "До двум"],
        correctAnswers: { 1: "До двух" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// к + dativo: rispondere «Когда…?» con una scadenza
// ============================================================
const p4cards = [
    { front: "(14:00) Когда ты придёшь?", back: "К двум", distractors: ["К двух", "К два"], explanation: "Scadenza: к + dativo: два → двум." },
    { front: "(17:00) Когда будет готово платье?", back: "К пяти", distractors: ["К пять", "К пятью"], explanation: "к + dativo: пять → пяти." },
    { front: "(19:30) Когда нужно быть в театре?", back: "К половине восьмого", distractors: ["К половина восьмого", "К половину восьмого"], explanation: "Anche la mezz'ora va al dativo: половина → половине." },
    { front: "(12:00) Когда привезут пиццу?", back: "К полудню", distractors: ["К полдень", "К полудня"], explanation: "Dativo irregolare: полдень → полудню." },
    { front: "(23:00) Когда ты вернёшься?", back: "К одиннадцати", distractors: ["К одиннадцать", "К одиннадцатью"], explanation: "к + dativo: одиннадцать → одиннадцати." },
    { front: "(13:00) Когда закончится собрание?", back: "К часу", distractors: ["К час", "К часа"], explanation: "к + dativo: час → часу." },
    { front: "(15:00) Когда нужно отправить письмо?", back: "К трём", distractors: ["К трёх", "К три"], explanation: "к + dativo: три → трём. «Трёх» è il genitivo (до трёх, около трёх)." },
    { front: "(0:00) Когда закончится вечеринка?", back: "К полуночи", distractors: ["К полночь", "К полночью"], explanation: "Dativo irregolare: полночь → полуночи." },
    { front: "(8:15) Когда нужно быть в офисе?", back: "К четверти девятого", distractors: ["К четверть девятого", "К четвертью девятого"], explanation: "Anche il quarto va al dativo: четверть → четверти." },
    { front: "(16:00) Когда будут готовы документы?", back: "К четырём", distractors: ["К четырёх", "К четыре"], explanation: "к + dativo: четыре → четырём." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Forma piena: к трём → к трём часам (часам = dativo plurale, con ogni numero)
// ============================================================
const p5cards = [
    { front: "к трём = …", back: "к трём часам", distractors: ["к трём часов", "к трём часа"] },
    { front: "к двум = …", back: "к двум часам", distractors: ["к двум часов", "к двум часа"] },
    { front: "к пяти = …", back: "к пяти часам", distractors: ["к пяти часов", "к пяти часу"] },
    { front: "к четырём = …", back: "к четырём часам", distractors: ["к четырём часов", "к четырём часа"] },
    { front: "к семи = …", back: "к семи часам", distractors: ["к семи часов", "к семи часу"] },
    { front: "к десяти = …", back: "к десяти часам", distractors: ["к десяти часов", "к десяти часа"] },
    { front: "к восьми утра = …", back: "к восьми часам утра", distractors: ["к восьми часов утра", "к восьми утра часам"] },
    { front: "к шести вечера = …", back: "к шести часам вечера", distractors: ["к шести часов вечера", "к шести часа вечера"] },
    { front: "к двенадцати = …", back: "к двенадцати часам", distractors: ["к двенадцати часов", "к двенадцати часу"] },
    { front: "к одиннадцати = …", back: "к одиннадцати часам", distractors: ["к одиннадцати часов", "к одиннадцати часа"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: к / к ↔ до (nuovo) + около / periodo / momento / без (vecchio)
// ============================================================
const p6cards = [
    { front: "(18:00) Когда нужно сдать проект?", back: "К шести", distractors: ["К шесть", "К шестью"] },
    { front: "(18:00) До какого часа работает банк?", back: "До шести", distractors: ["К шести", "До шесть"] },
    { front: "(21:00) Когда ты вернёшься?", back: "Часов в девять", distractors: ["Часа в девять", "Около девять"] },
    { front: "(9:00–17:00) Когда работает почта?", back: "С девяти до пяти", distractors: ["С девяти по пять", "С девяти к пяти"] },
    { front: "(13:30) Когда нужно вернуться с обеда?", back: "К половине второго", distractors: ["К половина второго", "К половину второго"] },
    { front: "(19:00) Во сколько начинается спектакль?", back: "В семь часов", distractors: ["К семи часам", "Семь часов"] },
    { front: "(23:00) До какого часа открыт клуб?", back: "До одиннадцати", distractors: ["К одиннадцати", "До одиннадцать"] },
    { front: "(10:00) Когда нужно освободить номер?", back: "К десяти", distractors: ["К десять", "К десятью"] },
    { front: "(16:45) Сколько времени?", back: "Без пятнадцати пять", distractors: ["К без пятнадцати пять", "В без пятнадцати пять"] },
    { front: "(14:00) Когда будет готов обед?", back: "К двум часам", distractors: ["К двум часов", "К двух часам"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni: к / к ↔ до + около / periodo / momento / fatto
// ============================================================
const p7cards = [
    { front: "(9:00) Когда нужно прийти на экзамен?", back: "К девяти", distractors: ["К девять", "К девятью"], explanation: "Scadenza: к + dativo: девять → девяти." },
    { front: "(17:00) До какого часа идёт урок?", back: "До пяти", distractors: ["К пяти", "До пять"], explanation: "Fino a: до + genitivo. К vuol dire «entro»." },
    { front: "(16:00) Когда ты освободишься?", back: "Около четырёх", distractors: ["Около четыре", "Около четырём"], explanation: "Circa: около + genitivo: четыре → четырёх." },
    { front: "(20:00) Когда гости должны прийти?", back: "К восьми", distractors: ["К восемь", "К восьмью"], explanation: "Scadenza: к + dativo: восемь → восьми." },
    { front: "(Пн–Сб) Когда работает рынок?", back: "С понедельника по субботу", distractors: ["С понедельника по субботы", "С понедельник по субботу"], explanation: "Giorni: с + genitivo … по + accusativo (sabato incluso)." },
    { front: "(12:30) Во сколько у нас встреча?", back: "В половине первого", distractors: ["К половине первого", "В половину первого"], explanation: "Во сколько? = momento esatto: в половине. К vuol dire «entro»." },
    { front: "(6:30) Когда нужно быть в аэропорту?", back: "К половине седьмого", distractors: ["К половина седьмого", "К половину седьмого"], explanation: "к + dativo: половина → половине." },
    { front: "(2:00) До какого часа работает бар?", back: "До двух", distractors: ["К двум", "До двум"], explanation: "Fino a: до + genitivo: два → двух. «К двум» = entro le due." },
    { front: "(10:10) Сколько времени?", back: "Десять минут одиннадцатого", distractors: ["К десяти минутам одиннадцатого", "В десять минут одиннадцатого"], explanation: "Che ore sono? Il fatto, senza preposizione." },
    { front: "(18:00) Когда будут готовы фотографии?", back: "К шести часам", distractors: ["К шести часов", "К шести часа"], explanation: "Forma piena: к шести часам (часам = dativo plurale)." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto: к / к ↔ до / forma piena + около / periodo / без / momento
// ============================================================
const p8cards = [
    { front: "(7:00) Когда должен приехать водитель?", back: "К семи", distractors: ["К семь", "К семью"] },
    { front: "(21:00) До какого часа работает спортзал?", back: "До девяти", distractors: ["К девяти", "До девять"] },
    { front: "(13:00) Когда ты пообедаешь?", back: "Около часа", distractors: ["Около час", "Около часом"] },
    { front: "(15:30) Когда нужно забрать ребёнка?", back: "К половине четвёртого", distractors: ["К половина четвёртого", "К половину четвёртого"] },
    { front: "(Ср–Вс) Когда открыта выставка?", back: "Со среды по воскресенье", distractors: ["Со среды по воскресенья", "С среды по воскресенье"] },
    { front: "(8:45) Сколько времени?", back: "Без пятнадцати девять", distractors: ["К без пятнадцати девять", "В без пятнадцати девять"] },
    { front: "(12:00) Когда нужно освободить зал?", back: "К двенадцати", distractors: ["К двенадцать", "К двенадцатью"] },
    { front: "(17:00) Во сколько закрывается банк?", back: "В пять часов", distractors: ["К пяти часам", "Пять часов"] },
    { front: "(16:00) До какого часа идёт репетиция?", back: "До четырёх", distractors: ["К четырём", "До четыре"] },
    { front: "(22:00) Когда должны закончиться работы?", back: "К десяти часам вечера", distractors: ["К десяти часов вечера", "К десяти часа вечера"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelEnt9() {
    const panel = document.getElementById('panel-ent-9');
    if (!panel) return;

    const container = panel.querySelector('#ent-9-cards-container');
    const prevBtn   = panel.querySelector('#ent-9-deck-prev');
    const nextBtn   = panel.querySelector('#ent-9-deck-next');
    const counterEl = panel.querySelector('#ent-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "(entro 16:00) Сдай работу ___.", options: ["к четырёх", "к четырём", "к четыре"], answer: "к четырём" },
        { question: "(fino alle 16:00) Я работаю ___.", options: ["до четырёх", "к четырём", "до четырём"], answer: "до четырёх" },
        { question: "(≈19:00) Мы придём ___.", options: ["около семь", "около в семь", "около семи"], answer: "около семи" },
        { question: "(entro 13:00) Ответь мне ___.", options: ["к час", "к часу", "к часа"], answer: "к часу" },
        { question: "(9:00–18:00) Офис работает ___.", options: ["с девяти к шести", "с девяти по шесть", "с девяти до шести"], answer: "с девяти до шести" },
        { question: "(entro 12:00) Обед будет готов ___.", options: ["к полудню", "к полдень", "к полудня"], answer: "к полудню" },
        { question: "(18:30) — Во сколько начинается фильм? — ___.", options: ["К половине седьмого", "В половине седьмого", "В половину седьмого"], answer: "В половине седьмого" },
        { question: "(entro 10:00) Приходи ___.", options: ["к десяти часам", "к десяти часов", "к десять часам"], answer: "к десяти часам" },
        { question: "(8:50) — Сколько времени? — ___.", options: ["К без десяти девять", "В без десяти девять", "Без десяти девять"], answer: "Без десяти девять" },
        { question: "(fino alle 23:00) Магазин открыт ___.", options: ["к одиннадцати", "до одиннадцати", "до одиннадцать"], answer: "до одиннадцати" }
    ];
    const matchPairs = [
        { left: "(entro 15:00) Когда?", right: "к трём" },
        { left: "(fino alle 15:00) До какого часа?", right: "до трёх" },
        { left: "(≈15:00) Когда?", right: "около трёх" },
        { left: "(15:00) Во сколько?", right: "в три часа" },
        { left: "(15:00) Сколько времени?", right: "три часа" },
        { left: "(entro 13:00) Когда?", right: "к часу" },
        { left: "(entro 0:00) Когда?", right: "к полуночи" },
        { left: "(entro 18:30) Когда?", right: "к половине седьмого" },
        { left: "(9:00–18:00) Часы работы", right: "с девяти до шести" },
        { left: "(entro 20:00) Когда? (полная форма)", right: "к восьми часам" }
    ];
    const quizData = [
        { id: "ent9-w1", promptPrefix: "Документы нужно сдать ", promptSuffix: ". (entro 17:00)", answers: ["к пяти", "к пяти часам"] },
        { id: "ent9-w2", promptPrefix: "Я сплю ", promptSuffix: ". (fino alle 9:00)", answers: ["до девяти", "до девяти часов"] },
        { id: "ent9-w3", promptPrefix: "Будь дома ", promptSuffix: ". (entro 22:00)", answers: ["к десяти", "к десяти часам", "к десяти вечера", "к десяти часам вечера"] },
        { id: "ent9-w4", promptPrefix: "Курьер приедет ", promptSuffix: ". (entro 14:00)", answers: ["к двум", "к двум часам"] },
        { id: "ent9-w5", promptPrefix: "Перерыв ", promptSuffix: ". (13:00–14:00)", answers: ["с часа до двух", "с часу до двух"] },
        { id: "ent9-w6", promptPrefix: "Гости придут ", promptSuffix: ". (≈19:00)", answers: ["около семи", "часов в семь"] },
        { id: "ent9-w7", promptPrefix: "Нужно вернуться ", promptSuffix: ". (entro 12:00)", answers: ["к полудню", "к двенадцати", "к двенадцати часам"] },
        { id: "ent9-w8", promptPrefix: "Аптека открыта ", promptSuffix: ". (fino alle 20:00)", answers: ["до восьми", "до восьми вечера", "до восьми часов", "до двадцати часов"] },
        { id: "ent9-w9", promptPrefix: "Приходи ", promptSuffix: ". (entro 18:30)", answers: ["к половине седьмого"] },
        { id: "ent9-w10", promptPrefix: "Поезд отправляется ", promptSuffix: ". (7:15)", answers: ["в четверть восьмого", "в пятнадцать минут восьмого"] }
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
            card.className = 'fca01-card-container ent-9-card';
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
        container.querySelectorAll('.ent-9-card').forEach(card => {
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
                const card    = this.closest('.ent-9-card');
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
        container.querySelectorAll('.ent-9-card').forEach((c, i) => {
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
    'panel-ent-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-ent-01', exercises: p1exercises }),
    'panel-ent-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-ent-02', exercises: p2exercises }),
    'panel-ent-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-ent-03', exercises: p3exercises }),
    'panel-ent-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-ent-04', cards: p4cards }),
    'panel-ent-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-ent-05', cards: p5cards }),
    'panel-ent-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-ent-06', cards: p6cards }),
    'panel-ent-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-ent-07', cards: p7cards }),
    'panel-ent-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-ent-08', cards: p8cards }),
    'panel-ent-9': () => initPanelEnt9()
};

initPanelManager({ initializers, enableAccessControl: true });
