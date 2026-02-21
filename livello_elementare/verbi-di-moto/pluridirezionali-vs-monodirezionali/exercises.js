import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import QuizExercise from '/assets/js/engines/QuizExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// EXERCISE DATA & INITIALIZERS
// Page: pluridirezionali-vs-monodirezionali
// ============================================================

const panelInitializers = {

    // --- Panel 1 (public) - Drag & Drop ---
    'panel-acc-open-1': () => new DragDropExercise({
        rootId: 'ex-dragdrop-plur-01',
        exercises: [
            {
                instruction: "Completa la frase con i verbi corretti (Ходить vs Идти)",
                text: "Обычно мы {{1}} завтракать в бар рядом с домом, но сегодня мы {{2}} завтракать в центр.",
                words: ["идем", "ходим", "идёте", "идём"],
                correctAnswers: { 1: "ходим", 2: "идём" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Куда ты сейчас {{1}}? Я {{2}} на тренировку.",
                words: ["ходишь", "идёшь", "хожу", "иду"],
                correctAnswers: { 1: "идёшь", 2: "иду" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Ты часто сюда {{1}}? Да, я {{2}} в этот ресторан каждую неделю.",
                words: ["идёшь", "ходишь", "иду", "хожу"],
                correctAnswers: { 1: "ходишь", 2: "хожу" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Смотри, она {{1}} по берегу моря. Она часто {{2}} гулять здесь.",
                words: ["ходить", "идёт", "ходит", "идёшь"],
                correctAnswers: { 1: "идёт", 2: "ходит" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Вы {{1}} на концерт сегодня вечером? Мы редко {{2}} на концерты.",
                words: ["идём", "ходим", "идёте", "ходите"],
                correctAnswers: { 1: "идёте", 2: "ходим" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Я ненавижу {{1}} в спортзал, но сейчас зима, в парке не позаниматься, вот {{2}}.",
                words: ["хожу", "иду", "ходить", "идёт"],
                correctAnswers: { 1: "ходить", 2: "иду" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Тебе нравится {{1}} в кино? Если честно, я очень редко {{2}} в кино.",
                words: ["ходишь", "ходить", "идти", "хожу"],
                correctAnswers: { 1: "ходить", 2: "хожу" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Ты каждый день {{1}} в спортзал? Нет, но три раза в неделю {{2}}.",
                words: ["мой парень", "ходит", "идёт", "хожу", "иду"],
                correctAnswers: { 1: "ходишь", 2: "хожу" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Куда вы {{1}} в субботу вечером? Я {{2}} с подругами в кино.",
                words: ["идёте", "ходите", "хожу", "иду"],
                correctAnswers: { 1: "идёте", 2: "иду" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Привет! Ты редко {{1}} в этот бар. — Привет, я {{2}} сюда часто, но обычно после обеда.",
                words: ["идёшь", "ходишь", "идёт", "хожу"],
                correctAnswers: { 1: "ходишь", 2: "хожу" }
            }
        ]
    }),

    // --- Panel 5 - Drag & Drop ---
    'panel-acc-open-5': () => new DragDropExercise({
        rootId: 'ex-dragdrop-plur-05',
        exercises: [
            {
                instruction: "Completa la frase con i verbi corretti (Ходить vs Идти)",
                text: "Я {{1}} в кино на все премьеры. Сегодня премьера нового фильма, мы {{2}} с подругой.",
                words: ["хожу", "ходим", "идёте", "идём"],
                correctAnswers: { 1: "хожу", 2: "идём" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Ты где? Я {{1}} по магазинам, ищу маме подарок. Сейчас {{2}} обедать, потом опять пойду искать.",
                words: ["ходишь", "идёшь", "хожу", "иду"],
                correctAnswers: { 1: "хожу", 2: "иду" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Ты часто {{1}} на выставки? Да, я {{2}} практически на все выставки современного искусства.",
                words: ["идёшь", "ходишь", "иду", "хожу"],
                correctAnswers: { 1: "ходишь", 2: "хожу" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Смотри, она {{1}} по другой стороне дороги. Она {{2}} на пробежку в парк.",
                words: ["ходить", "идёт", "ходишь", "ходит"],
                correctAnswers: { 1: "идёт", 2: "ходит" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Вы {{1}} на день рождения к Андрею? Да, {{2}}.",
                words: ["идём", "ходим", "идёте", "ходите"],
                correctAnswers: { 1: "идёте", 2: "идём" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Ты часто {{1}} гулять в центр? Нет, очень редко. Обычно я {{2}} гулять в парк недалеко от дома.",
                words: ["ходят", "идёшь", "хожу", "ходишь"],
                correctAnswers: { 1: "ходишь", 2: "хожу" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Мы {{1}} в кино сегодня вечером? Да, {{2}}, мы редко {{3}}.",
                words: ["ходишь", "идём", "ходим", "идём"],
                correctAnswers: { 1: "идём", 2: "идём", 3: "ходим" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Я люблю {{1}} на йогу. Мне не нравится йога. Предпочитаю {{2}} заниматься на тренажёрах.",
                words: ["хожу", "ходить", "иду", "ходить", "иду"],
                correctAnswers: { 1: "ходить", 2: "ходить" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Куда вы {{1}} в субботу вечером? Я {{2}} с подругами в кино.",
                words: ["идёте", "ходите", "хожу", "иду"],
                correctAnswers: { 1: "идёте", 2: "иду" }
            },
            {
                instruction: "Completa la frase con i verbi corretti",
                text: "Привет! По воскресеньям мы {{1}} в этот ресторан обедать. — Привет, я туда {{2}} на обед на неделе.",
                words: ["иду", "ходим", "ходите", "хожу"],
                correctAnswers: { 1: "ходим", 2: "хожу" }
            }
        ]
    })

    // Panels 2, 3, 4, 6, 7, 8, 9, 10, 11 have no exercise data yet (TODO)
};

// Initialize
initPanelManager({
    initializers: panelInitializers,
    enableAccessControl: false
});
