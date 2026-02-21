import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import QuizExercise from '/assets/js/engines/QuizExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// EXERCISE DATA & INITIALIZERS
// Page: accusativo-come-ti-chiami
// ============================================================

const panelInitializers = {

    // --- Panel 1 (public) - Drag & Drop ---
    'panel-acc-open-1': () => new DragDropExercise({
        rootId: 'ex-accusativo-trascina-01',
        exercises: [
            {
                instruction: "Completa la frase scegliendo 2 espressioni",
                text: " {{1}} зовут Александр, а {{2}} зовут Лиза.",
                words: ["мой брат", "моего брата", "мою сестра", "мою сестру"],
                correctAnswers: { 1: "моего брата", 2: "мою сестру" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressioni",
                text: "{{1}} зовут Владислав, {{2}} зовут Елена.",
                words: ["мою дедушку", "мою бабушку", "моего дедушку"],
                correctAnswers: { 1: "моего дедушку", 2: "мою бабушку" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} зовут Светлана, а  {{2}} зовут Анатолий.",
                words: ["мою тётю", "моего мужа", "её мужа"],
                correctAnswers: { 1: "мою тётю", 2: "её мужа" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} зовут Семён, {{2}} зовут Лидия.",
                words: ["мою соседа", "мою жену", "его жену", "моего соседа"],
                correctAnswers: { 1: "моего соседа", 2: "его жену" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} зовут Антон, а как зовут {{2}}?",
                words: ["нашу дочь", "наш сын", "вашу дочь", "нашего сына"],
                correctAnswers: { 1: "нашего сына", 2: "вашу дочь" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} зовут Николай, а {{2}} зовут Катя.",
                words: ["Их дядю", "его жена", "его жену", "их дядя"],
                correctAnswers: { 1: "Их дядю", 2: "его жену" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} зовут Дима, а {{2}} зовут Анна.",
                words: ["его девушку", "мою девушку", "моего друга"],
                correctAnswers: { 1: "моего друга", 2: "его девушку" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} зовут Борис, а {{2}} зовут Ольга.",
                words: ["мой парень", "его сестру", "моего парня", "мою сестру"],
                correctAnswers: { 1: "моего парня", 2: "его сестру" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} зовут Виктория, а {{2}} зовут Барсик.",
                words: ["его кота", "моего подругу", "мою подругу", "её кота"],
                correctAnswers: { 1: "мою подругу", 2: "её кота" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} зовут Белка, а {{2}} зовут Мурка.",
                words: ["нашего собаку", "нашу кошку", "нашу собаку", "нашего кота"],
                correctAnswers: { 1: "нашу собаку", 2: "нашу кошку" }
            }
        ]
    }),

    // --- Panel 5 (student) - Drag & Drop ---
    'panel-acc-open-5': () => new DragDropExercise({
        rootId: 'ex-dragdrop-acc-05',
        exercises: [
            {
                instruction: "Completa la frase scegliendo 2 espressioni",
                text: "{{1}} зовут Юрий, {{2}} зовут Елена.",
                words: ["мою бабушка", "мою бабушку", "моего дедушку", "мою дедушку"],
                correctAnswers: { 1: "моего дедушку", 2: "мою бабушку" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressioni",
                text: "{{1}} зовут Светлана, а  {{2}} зовут Анатолий.",
                words: ["Мою тётю", "мою дядя", "моего дядю", "Моего тётю"],
                correctAnswers: { 1: "Мою тётю", 2: "моего дядю" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} (сестра) зовут Линда, а {{2}} (жена) зовут Елена.",
                words: ["мою жена", "мою жену", "мою сестру", "моя сестру"],
                correctAnswers: { 1: "мою сестру", 2: "мою жену" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "Как зовут {{1}} (жена)? Как зовут {{2}} (сестра)?",
                words: ["Твоя жена", "Твою сестра", "Твою жену", "Твою сестру"],
                correctAnswers: { 1: "Твою жену", 2: "Твою сестру" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} зовут Николай, а {{2}} зовут Катя.",
                words: ["Их дядю", "его жена", "его жену", "Их дядя"],
                correctAnswers: { 1: "Их дядю", 2: "его жену" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressioni",
                text: "{{1}} (подруга) зовут Лена, а {{2}}(сестра) зовут Анна.",
                words: ["Наша подругу", "Нашу подругу", "её сестру", "её сестра"],
                correctAnswers: { 1: "Нашу подругу", 2: "её сестру" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} (соседка) зовут Светлана, а {{2}} (подруга) зовут Ольга.",
                words: ["Мою соседка", "Мою соседку", "её подругу", "его подругу"],
                correctAnswers: { 1: "Мою соседку", 2: "её подругу" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} (подруга) зовут Виктория, а {{2}} (кошка)зовут Мурка.",
                words: ["её кошка", "моего подругу", "мою подругу", "её кошку"],
                correctAnswers: { 1: "мою подругу", 2: "её кошку" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} (собака) зовут Белка, а {{2}} (кошка)зовут Мурка.",
                words: ["нашего собаку", "нашу кошку", "нашу собаку", "нашего кота"],
                correctAnswers: { 1: "нашу собаку", 2: "нашу кошку" }
            }
        ]
    }),

    // --- Panel 6 (paid) - Drag & Drop ---
    'panel-acc-open-6': () => new DragDropExercise({
        rootId: 'ex-dragdrop-acc-06',
        exercises: [
            {
                instruction: "Completa la frase scegliendo 2 espressioni",
                text: "{{1}} (друг) зовут Виктор, а {{2}}(брат) зовут Борис.",
                words: ["моего друг", "моего друга", "его брату", "его брата"],
                correctAnswers: { 1: "Моего друга", 2: "его брата" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressioni",
                text: "{{1}} (сосед) зовут Барсик, а {{2}} (кот) зовут Мурка.",
                words: ["нашего соседу", "нашего соседа", "его кота", "его кот"],
                correctAnswers: { 1: "мою подругу", 2: "её кошку" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} (брат) зовут Владислав, а {{2}} (друг) зовут Анатолий.",
                words: ["их брата", "их брату", "его друг", "их друга"],
                correctAnswers: { 1: "их брата", 2: "его друга" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressioni",
                text: "{{1}} (сын) зовут Денис, а {{2}} (сосед) зовут Андрей.",
                words: ["их сыну", "их сына", "его соседа", "её соседа"],
                correctAnswers: { 1: "их сына", 2: "его соседа" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} (племянник) зовут Анатолий, а {{2}} (сын) зовут Тимур.",
                words: ["наш племянник", "нашего племянника", "его сына", "её сына"],
                correctAnswers: { 1: "мою подругу", 2: "её кошку" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} (муж) зовут Владислав, а {{2}} (сын) зовут Анатолий.",
                words: ["её мужу", "её мужа", "её сын", "его сына"],
                correctAnswers: { 1: "её мужа", 2: "его сына" }
            },
            {
                instruction: "Completa la frase scegliendo 2 espressionи",
                text: "{{1}} (сосед) зовут Петр, а {{2}} (отец) зовут Дмитрий.",
                words: ["нашу соседа", "нашего соседа", "его отеца", "его отца"],
                correctAnswers: { 1: "нашего соседа", 2: "его отца" }
            }
        ]
    }),

    // --- Panel 2 (public) - Flashcards ---
    'panel-acc-open-2': () => new FlashcardExercise({
        rootId: 'ex-flashcards-acc-03',
        cards: [
            { front: "Моя сестра Катя.", back: "Мою сестру зовут Катя." },
            { front: "Моя мама Анна.", back: "Мою маму зовут Анна." },
            { front: "Твоя кошка Мурка.", back: "Твою кошку зовут Мурка." },
            { front: "Наша подруга Наташа.", back: "Нашу подругу зовут Наташа." },
            { front: "Её племянница Александра.", back: "Её племянницу зовут Александра." },
            { front: "Его девушка Мария.", back: "Как зовут его девушку?" },
            { front: "Твоя жена Светлана.", back: "Твою жену зовут Светлана?" },
            { front: "Моя бабушка Нина.", back: "Мою бабушку зовут Нина." }
        ]
    }),

    // --- Panel 7 (student) - Flashcards ---
    'panel-acc-open-7': () => new FlashcardExercise({
        rootId: 'ex-flashcards-acc-07',
        cards: [
            { front: "Его друг Антон.", back: "Его друга зовут Антон." },
            { front: "Наш сын Тимур.", back: "Нашего сына зовут Тимур." },
            { front: "Их племянник Анатолий.", back: "Их племянника зовут Анатолий." },
            { front: "Ваш кот Барсик.", back: "Вашего кота зовут Барсик." },
            { front: "Её брат Альберт.", back: "Её брата зовут Альберт." },
            { front: "Её муж Владислав.", back: "Её мужа зовут Владислав" },
            { front: "Твой парень Борис.", back: "Твоего парня зовут Борис" },
            { front: "Наш сосед Александр.", back: "Нашего соседа зовут Александр." }
        ]
    }),

    // --- Panel 8 (paid) - Flashcards ---
    'panel-acc-open-8': () => new FlashcardExercise({
        rootId: 'ex-flashcards-acc-08',
        cards: [
            { front: "Моя сестра Катя.", back: "Мою сестру зовут Катя." },
            { front: "Моя мама Анна.", back: "Мою маму зовут Анна." },
            { front: "Твоя кошка Мурка.", back: "Твою кошку зовут Мурка." },
            { front: "Наша подруга Наташа.", back: "Нашу подругу зовут Наташа." },
            { front: "Её племянница Александра.", back: "Её племянницу зовут Александра." },
            { front: "Его девушка Мария.", back: "Как зовут его девушку?" },
            { front: "Твоя жена Светлана.", back: "Твою жену зовут Светлана?" },
            { front: "Моя бабушка Нина.", back: "Мою бабушку зовут Нина." }
        ]
    }),

    // --- Panel 3 (public) - Flashcards ---
    'panel-acc-open-3': () => new FlashcardExercise({
        rootId: 'ex-flashcards-acc-02',
        cards: [
            { front: "Мой отец Александр.", back: "Моего отца зовут Александр." },
            { front: "Твой брат Андрей.", back: "Твоего брата зовут Андрей." },
            { front: "Наш друг Виктор.", back: "Нашего друга зовут Виктор." },
            { front: "Его мать Анна", back: "Его мать зовут Анна." },
            { front: "Её муж Анатолий.", back: "Её мужа зовут Анатолий." },
            { front: "Ваш кот Барсик?", back: "Вашего кота зовут Барсик?" },
            { front: "Их дочь Мария", back: "Их дочь зовут Мария." }
        ]
    }),

    // --- Panel 4 (public) - Quiz ---
    'panel-acc-open-4': () => new QuizExercise({
        panelId: 'panel-acc-open-4',
        listId: 'panel-acc-open-4-quiz-list',
        questions: [
            { id: "fam-001", promptPrefix: "Моя мама ", promptSuffix: " зовут Анна.", answers: ["Мою маму"] },
            { id: "fam-002", promptPrefix: "Мой брат ", promptSuffix: " зовут Александр.", answers: ["Моего брата"] },
            { id: "fam-003", promptPrefix: "Его девушка ", promptSuffix: " зовут Елена.", answers: ["Его девушку"] },
            { id: "fam-004", promptPrefix: "Наш дедушка ", promptSuffix: " зовут Владислав.", answers: ["Нашего дедушку"] },
            { id: "fam-005", promptPrefix: "Её подруга ", promptSuffix: " зовут Наталья.", answers: ["Её подругу"] },
            { id: "fam-006", promptPrefix: "Как зовут твой друг ", promptSuffix: " ?", answers: ["твоего друга"] },
            { id: "fam-007", promptPrefix: "Их дочь ", promptSuffix: " зовут Катя.", answers: ["Их дочь"] },
            { id: "fam-008", promptPrefix: "Наш сын ", promptSuffix: " зовут Анатолий.", answers: ["нашего сына"] },
            { id: "fam-009", promptPrefix: "Как зовут ваша тётя ", promptSuffix: " ?", answers: ["вашу тётю"] },
            { id: "fam-010", promptPrefix: "Твой дядя ", promptSuffix: " - зовут Альберт?!", answers: ["твоего дядю"] }
        ]
    })

    // Panel 9 and 10 are empty (paid, no data yet)
};

// Initialize
initPanelManager({
    initializers: panelInitializers,
    enableAccessControl: true
});
