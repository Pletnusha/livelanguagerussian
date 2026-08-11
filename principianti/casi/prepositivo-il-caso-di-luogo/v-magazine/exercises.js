import QuizExercise from '/assets/js/engines/QuizExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — Scrivi · public
// Prepositivo — dove si trova l'oggetto in una libreria
// ============================================================
const p1questions = [
    { id: "neg-1-01", promptPrefix: "Книги ", promptSuffix: " (полка).", answers: ["на полке"] },
    { id: "neg-1-02", promptPrefix: "Журналы ", promptSuffix: " (стойка).", answers: ["на стойке"] },
    { id: "neg-1-03", promptPrefix: "Открытки ", promptSuffix: " (витрина).", answers: ["на витрине"] },
    { id: "neg-1-04", promptPrefix: "Пакеты ", promptSuffix: " (касса).", answers: ["на кассе"] },
    { id: "neg-1-05", promptPrefix: "Карандаши ", promptSuffix: " (коробка).", answers: ["в коробке"] },
    { id: "neg-1-06", promptPrefix: "Закладки ", promptSuffix: " (корзина).", answers: ["в корзине"] },
    { id: "neg-1-07", promptPrefix: "Карты ", promptSuffix: " (шкаф).", answers: ["в шкафу"] },
    { id: "neg-1-08", promptPrefix: "Ручки ", promptSuffix: " (отдел канцелярии).", answers: ["в отделе канцелярии"] },
    { id: "neg-1-09", promptPrefix: "Романы ", promptSuffix: " (отдел художественной литературы).", answers: ["в отделе художественной литературы"] },
    { id: "neg-1-10", promptPrefix: "Учебники ", promptSuffix: " (отдел учебной литературы).", answers: ["в отделе учебной литературы"] }
];

// ============================================================
// PANEL 2 — Scrivi · student
// Prepositivo — al supermercato
// ============================================================
const p2questions = [
    { id: "neg-2-01", promptPrefix: "Мы ", promptSuffix: " (молочный отдел).", answers: ["в молочном отделе"] },
    { id: "neg-2-02", promptPrefix: "Они ", promptSuffix: " в кассу (очередь).", answers: ["в очереди"] },
    { id: "neg-2-03", promptPrefix: "Женя ", promptSuffix: " (овощной отдел).", answers: ["в овощном отделе"] },
    { id: "neg-2-04", promptPrefix: "Йогурты ", promptSuffix: " в молочном отделе (полки).", answers: ["на полках"] },
    { id: "neg-2-05", promptPrefix: "Овощи ", promptSuffix: " в овощном отделе (прилавок).", answers: ["на прилавке"] },
    { id: "neg-2-06", promptPrefix: "Продукты ", promptSuffix: " (тележка).", answers: ["в тележке"] },
    { id: "neg-2-07", promptPrefix: "Хлеб ", promptSuffix: " (прилавок).", answers: ["на прилавке"] },
    { id: "neg-2-08", promptPrefix: "Товары ", promptSuffix: " (касса).", answers: ["на кассе"] },
    { id: "neg-2-09", promptPrefix: "Покупатели ", promptSuffix: " (очередь).", answers: ["в очереди"] },
    { id: "neg-2-10", promptPrefix: "", promptSuffix: " (какой отдел) находятся замороженные продукты и полуфабрикаты?", answers: ["В каком отделе", "в каком отделе"] }
];

// ============================================================
// PANEL 3 — Scrivi · paid
// Prepositivo — nel negozio di abbigliamento
// ============================================================
const p3questions = [
    { id: "neg-3-01", promptPrefix: "Платья ", promptSuffix: " (вешалки).", answers: ["на вешалках"] },
    { id: "neg-3-02", promptPrefix: "Она ", promptSuffix: " (примерочная).", answers: ["в примерочной"] },
    { id: "neg-3-03", promptPrefix: "Мы ", promptSuffix: " в кассу (очередь).", answers: ["в очереди"] },
    { id: "neg-3-04", promptPrefix: "Ценник ", promptSuffix: " (рубашка).", answers: ["на рубашке"] },
    { id: "neg-3-05", promptPrefix: "Продавец ", promptSuffix: " (зал).", answers: ["в зале"] },
    { id: "neg-3-06", promptPrefix: "Зеркало ", promptSuffix: " (примерочная).", answers: ["в примерочной"] },
    { id: "neg-3-07", promptPrefix: "Джинсы ", promptSuffix: " (полки).", answers: ["на полках"] },
    { id: "neg-3-08", promptPrefix: "Обувь ", promptSuffix: " (коробки).", answers: ["в коробках"] },
    { id: "neg-3-09", promptPrefix: "Новая коллекция ", promptSuffix: " (витрина).", answers: ["на витрине"] },
    { id: "neg-3-10", promptPrefix: "Носки ", promptSuffix: " (стойка).", answers: ["на стойке"] }
];

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-neg-1': () => new QuizExercise({ panelId: 'panel-neg-1', listId: 'quiz-neg-1-list', questions: p1questions }),
    'panel-neg-2': () => new QuizExercise({ panelId: 'panel-neg-2', listId: 'quiz-neg-2-list', questions: p2questions }),
    'panel-neg-3': () => new QuizExercise({ panelId: 'panel-neg-3', listId: 'quiz-neg-3-list', questions: p3questions })
};

initPanelManager({ initializers, enableAccessControl: true });
