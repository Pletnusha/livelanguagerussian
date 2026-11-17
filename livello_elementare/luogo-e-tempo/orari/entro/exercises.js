import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «К трём» — scadenza: к + dativo (entro), in alternativa a до + genitivo (fino a)
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.
// Convenzioni: «(entro 15:00)» = scadenza → к; «(fino alle 20:00)» = fino a → до; «≈» = ora approssimativa.

// ============================================================
// PANEL 1 — DragDrop · public
// Misto: к / к ↔ до / полдень, полночь (nuovo) + около / periodo / momento / без (vecchio)
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 15:00) Документы нужно сдать {{1}}.",
        words: ["к три", "к трём", "к трёх"],
        correctAnswers: { 1: "к трём" },
        explanation: "Scadenza (entro): к + dativo: три → трём."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(≈19:00) Гости придут {{1}}.",
        words: ["около семь", "около в семь", "около семи"],
        correctAnswers: { 1: "около семи" },
        explanation: "Ora approssimativa: около + genitivo: семь → семи."
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
        text: "(entro 13:00) Надо закончить отчёт {{1}}.",
        words: ["к час", "к часу", "к часа"],
        correctAnswers: { 1: "к часу" },
        explanation: "к + dativo: час → часу."
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
        text: "(entro 18:30) Приходи {{1}}.",
        words: ["к половина седьмого", "к половину седьмого", "к половине седьмого"],
        correctAnswers: { 1: "к половине седьмого" },
        explanation: "к + dativo: половина → половине."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(fino alle 20:00) Магазин работает {{1}}.",
        words: ["к восьми", "до восемь", "до восьми"],
        correctAnswers: { 1: "до восьми" },
        explanation: "«Fino a»: до + genitivo. К vuol dire «entro», non «fino a»."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 12:00) Обед будет готов {{1}}.",
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
        text: "(entro 0:00) Мы вернёмся {{1}}.",
        words: ["к полночь", "к полуночи", "к полуночью"],
        correctAnswers: { 1: "к полуночи" },
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
        text: "(entro 16:00) Нужно вернуться {{1}}.",
        words: ["к четыре", "к четырём", "к четырёх"],
        correctAnswers: { 1: "к четырём" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 19:00) Ужин будет готов {{1}}.",
        words: ["к семи", "к семь", "к семью"],
        correctAnswers: { 1: "к семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 11:30) Приходи {{1}}.",
        words: ["к половину двенадцатого", "к половины двенадцатого", "к половине двенадцатого"],
        correctAnswers: { 1: "к половине двенадцатого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 13:00) Курьер привезёт заказ {{1}}.",
        words: ["к час", "к часу", "к часа"],
        correctAnswers: { 1: "к часу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 22:00) Мы должны быть дома {{1}}.",
        words: ["к десять", "к десятью", "к десяти"],
        correctAnswers: { 1: "к десяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 9:15) Приезжай {{1}}.",
        words: ["к четверти десятого", "к четверть десятого", "к в четверть десятого"],
        correctAnswers: { 1: "к четверти десятого" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 12:00) Отчёт нужен {{1}}.",
        words: ["к полудню", "к полдень", "к полудня"],
        correctAnswers: { 1: "к полудню" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 2:00) Он обещал вернуться {{1}} ночи.",
        words: ["к два", "к двум", "к двух"],
        correctAnswers: { 1: "к двум" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 18:00) Заберите заказ {{1}}.",
        words: ["к шесть", "к шестью", "к шести"],
        correctAnswers: { 1: "к шести" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 0:00) Праздник закончится {{1}}.",
        words: ["к полночь", "к полуночи", "к полночью"],
        correctAnswers: { 1: "к полуночи" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// к + dativo (entro) o до + genitivo (fino a)?
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 15:00) Отчёт должен быть готов {{1}}.",
        words: ["до трёх", "к трём", "к трёх"],
        correctAnswers: { 1: "к трём" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(fino alle 15:00) Я сегодня работаю {{1}}.",
        words: ["до трёх", "к трём", "до трём"],
        correctAnswers: { 1: "до трёх" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 13:00) Обед должен быть на столе {{1}}.",
        words: ["до часа", "к часа", "к часу"],
        correctAnswers: { 1: "к часу" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(fino alle 13:00) Перерыв продлится {{1}}.",
        words: ["к часу", "до час", "до часа"],
        correctAnswers: { 1: "до часа" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 19:00) Будь дома {{1}}.",
        words: ["до семи", "к семи", "к семь"],
        correctAnswers: { 1: "к семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(fino alle 19:00) Аптека открыта {{1}}.",
        words: ["к семи", "до семь", "до семи"],
        correctAnswers: { 1: "до семи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 8:00) Мы должны быть на вокзале {{1}}.",
        words: ["к восьми", "до восьми", "к восемь"],
        correctAnswers: { 1: "к восьми" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(fino alle 10:00) В субботу я сплю {{1}}.",
        words: ["к десяти", "до десять", "до десяти"],
        correctAnswers: { 1: "до десяти" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(entro 14:00) Машина должна быть готова {{1}}.",
        words: ["к два", "к двум", "до двух"],
        correctAnswers: { 1: "к двум" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "(fino alle 14:00) Подожди меня {{1}}.",
        words: ["до двух", "к двум", "до двум"],
        correctAnswers: { 1: "до двух" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// к + dativo: rispondere «Когда…?» con una scadenza (entro)
// ============================================================
const p4cards = [
    { front: "(entro 14:00) Когда ты придёшь?", back: "К двум", distractors: ["К двух", "К два"], explanation: "Scadenza: к + dativo: два → двум." },
    { front: "(entro 17:00) Когда будет готово платье?", back: "К пяти", distractors: ["К пять", "К пятью"], explanation: "к + dativo: пять → пяти." },
    { front: "(entro 19:30) Когда нужно быть в театре?", back: "К половине восьмого", distractors: ["К половина восьмого", "К половину восьмого"], explanation: "Anche la mezz'ora va al dativo: половина → половине." },
    { front: "(entro 12:00) Когда привезут пиццу?", back: "К полудню", distractors: ["К полдень", "К полудня"], explanation: "Dativo irregolare: полдень → полудню." },
    { front: "(entro 23:00) Когда ты вернёшься?", back: "К одиннадцати", distractors: ["К одиннадцать", "К одиннадцатью"], explanation: "к + dativo: одиннадцать → одиннадцати." },
    { front: "(entro 13:00) Когда закончится собрание?", back: "К часу", distractors: ["К час", "К часа"], explanation: "к + dativo: час → часу." },
    { front: "(entro 15:00) Когда нужно отправить письмо?", back: "К трём", distractors: ["К трёх", "К три"], explanation: "к + dativo: три → трём. «Трёх» è il genitivo (до трёх, около трёх)." },
    { front: "(entro 0:00) Когда закончится вечеринка?", back: "К полуночи", distractors: ["К полночь", "К полночью"], explanation: "Dativo irregolare: полночь → полуночи." },
    { front: "(entro 8:15) Когда нужно быть в офисе?", back: "К четверти девятого", distractors: ["К четверть девятого", "К четвертью девятого"], explanation: "Anche il quarto va al dativo: четверть → четверти." },
    { front: "(entro 16:00) Когда будут готовы документы?", back: "К четырём", distractors: ["К четырёх", "К четыре"], explanation: "к + dativo: четыре → четырём." }
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
    { front: "(entro 18:00) Когда нужно сдать проект?", back: "К шести", distractors: ["К шесть", "К шестью"] },
    { front: "(fino alle 18:00) До какого часа работает банк?", back: "До шести", distractors: ["К шести", "До шесть"] },
    { front: "(≈21:00) Когда ты вернёшься?", back: "Часов в девять", distractors: ["Часа в девять", "В девять часов"] },
    { front: "(9:00–17:00) Когда работает почта?", back: "С девяти до пяти", distractors: ["С девяти по пять", "С девяти к пяти"] },
    { front: "(entro 13:30) Когда нужно вернуться с обеда?", back: "К половине второго", distractors: ["К половина второго", "К половину второго"] },
    { front: "(19:00) Во сколько начинается спектакль?", back: "В семь часов", distractors: ["К семи часам", "Семь часов"] },
    { front: "(fino alle 23:00) До какого часа открыт клуб?", back: "До одиннадцати", distractors: ["К одиннадцати", "До одиннадцать"] },
    { front: "(entro 10:00) Когда нужно освободить номер?", back: "К десяти", distractors: ["К десять", "К десятью"] },
    { front: "(16:45) Сколько времени?", back: "Без пятнадцати пять", distractors: ["К без пятнадцати пять", "В без пятнадцати пять"] },
    { front: "(entro 14:00) Когда будет готов обед?", back: "К двум часам", distractors: ["К двум часов", "К двух часам"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto con spiegazioni: к / к ↔ до + около / periodo / momento / fatto
// ============================================================
const p7cards = [
    { front: "(entro 9:00) Когда нужно прийти на экзамен?", back: "К девяти", distractors: ["К девять", "К девятью"], explanation: "Scadenza: к + dativo: девять → девяти." },
    { front: "(fino alle 17:00) До какого часа идёт урок?", back: "До пяти", distractors: ["К пяти", "До пять"], explanation: "Fino a: до + genitivo. К vuol dire «entro»." },
    { front: "(≈16:00) Когда ты освободишься?", back: "Около четырёх", distractors: ["Около четыре", "Около четырём"], explanation: "≈ = circa: около + genitivo: четыре → четырёх." },
    { front: "(entro 20:00) Когда гости должны прийти?", back: "К восьми", distractors: ["К восемь", "К восьмью"], explanation: "Scadenza: к + dativo: восемь → восьми." },
    { front: "(Пн–Сб) Когда работает рынок?", back: "С понедельника по субботу", distractors: ["С понедельника по субботы", "С понедельник по субботу"], explanation: "Giorni: с + genitivo … по + accusativo (sabato incluso)." },
    { front: "(12:30) Во сколько у нас встреча?", back: "В половине первого", distractors: ["К половине первого", "В половину первого"], explanation: "Во сколько? = momento esatto: в половине. К vuol dire «entro»." },
    { front: "(entro 6:30) Когда нужно быть в аэропорту?", back: "К половине седьмого", distractors: ["К половина седьмого", "К половину седьмого"], explanation: "к + dativo: половина → половине." },
    { front: "(fino alle 2:00) До какого часа работает бар?", back: "До двух", distractors: ["К двум", "До двум"], explanation: "Fino a: до + genitivo: два → двух. «К двум» = entro le due." },
    { front: "(10:10) Сколько времени?", back: "Десять минут одиннадцатого", distractors: ["К десяти минутам одиннадцатого", "В десять минут одиннадцатого"], explanation: "Che ore sono? Il fatto, senza preposizione." },
    { front: "(entro 18:00) Когда будут готовы фотографии?", back: "К шести часам", distractors: ["К шести часов", "К шести часа"], explanation: "Forma piena: к шести часам (часам = dativo plurale)." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto: к / к ↔ до / forma piena + около / periodo / без / momento
// ============================================================
const p8cards = [
    { front: "(entro 7:00) Когда должен приехать водитель?", back: "К семи", distractors: ["К семь", "К семью"] },
    { front: "(fino alle 21:00) До какого часа работает спортзал?", back: "До девяти", distractors: ["К девяти", "До девять"] },
    { front: "(≈13:00) Когда ты пообедаешь?", back: "Около часа", distractors: ["Около час", "Около часом"] },
    { front: "(entro 15:30) Когда нужно забрать ребёнка?", back: "К половине четвёртого", distractors: ["К половина четвёртого", "К половину четвёртого"] },
    { front: "(Ср–Вс) Когда открыта выставка?", back: "Со среды по воскресенье", distractors: ["Со среды по воскресенья", "С среды по воскресенье"] },
    { front: "(8:45) Сколько времени?", back: "Без пятнадцати девять", distractors: ["К без пятнадцати девять", "В без пятнадцати девять"] },
    { front: "(entro 12:00) Когда нужно освободить зал?", back: "К двенадцати", distractors: ["К двенадцать", "К двенадцатью"] },
    { front: "(17:00) Во сколько закрывается банк?", back: "В пять часов", distractors: ["К пяти часам", "Пять часов"] },
    { front: "(fino alle 16:00) До какого часа идёт репетиция?", back: "До четырёх", distractors: ["К четырём", "До четыре"] },
    { front: "(entro 22:00) Когда должны закончиться работы?", back: "К десяти часам вечера", distractors: ["К десяти часов вечера", "К десяти часа вечера"] }
];

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
};

initPanelManager({ initializers, enableAccessControl: true });
