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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-ent-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-ent-01', exercises: p1exercises }),
    'panel-ent-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-ent-02', exercises: p2exercises }),
    'panel-ent-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-ent-03', exercises: p3exercises }),
};

initPanelManager({ initializers, enableAccessControl: true });
