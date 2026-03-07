import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// EXERCISE DATA & INITIALIZERS
// Page: accusativo-come-ti-chiami
// ============================================================

// ============================================================
// PANEL 4 — public · Quiz deck (come ti chiami / accusativo)
// ============================================================
function initPanel4Acc() {
    const questions = [
        // Блок 1
        { sentence: "___ зовут Александр.", correct: "Моего брата",    options: ["Мой брат",     "Моего брата",    "Моему брату"] },
        { sentence: "___ зовут Артём.",     correct: "Его",            options: ["Он",            "Его",            "Ему"] },
        { sentence: "___ зовут Анна.",      correct: "Мою маму",       options: ["Моя мама",      "Мою маму",       "Моей маме"] },
        { sentence: "___ зовут Иван.",      correct: "Меня",           options: ["Я",             "Меня",           "Мне"] },
        { sentence: "___ зовут Владислав.", correct: "Нашего дедушку", options: ["Наш дедушка",   "Нашего дедушку", "Нашему дедушке"] },
        { sentence: "___ зовут Наталья.",   correct: "Её подругу",     options: ["Её подруга",    "Её подругу",     "Её подруге"] },
        { sentence: "Как ___ зовут?",       correct: "тебя",           options: ["ты",            "тебя",           "тебе"] },
        { sentence: "___ зовут Андрей.",    correct: "Её мужа",        options: ["Её муж",        "Её мужа",        "Её мужу"] },
        { sentence: "___ зовут Елена.",     correct: "Его девушку",    options: ["Его девушка",   "Его девушку",    "Его девушке"] },
        { sentence: "___ зовут Анатолий.",  correct: "Нашего сына",    options: ["Наш сын",       "Нашего сына",    "Нашему сыну"] },
        // Блок 2
        { sentence: "___ зовут Ирина.",          correct: "Нашу сестру",   options: ["Наша сестра",   "Нашу сестру",    "Нашей сестре"] },
        { sentence: "___ зовут Антон и Лена.",   correct: "Их",            options: ["Они",           "Их",             "Им"] },
        { sentence: "Как зовут ___?",            correct: "твоего друга",  options: ["твой друг",     "твоего друга",   "твоему другу"] },
        { sentence: "___ зовут Анастасия.",      correct: "Её",            options: ["Она",           "Её",             "Ей"] },
        { sentence: "___ зовут Виктория.",       correct: "Нашу соседку",  options: ["Наша соседка",  "Нашу соседку",   "Нашей соседке"] },
        { sentence: "___ зовут Дмитрий.",        correct: "Их соседа",     options: ["Их сосед",      "Их соседа",      "Их соседу"] },
        { sentence: "___ зовут Игорь и Соня.",   correct: "Нас",           options: ["Мы",            "Нас",            "Нам"] },
        { sentence: "Как зовут ___?",            correct: "вашу тётю",     options: ["ваша тётя",     "вашу тётю",      "вашей тёте"] },
        { sentence: "___ зовут Альберт.",        correct: "Твоего дядю",   options: ["Твой дядя",     "Твоего дядю",    "Твоему дяде"] },
        { sentence: "___ зовут Людмила.",        correct: "Твою бабушку",  options: ["Твоя бабушка",  "Твою бабушку",   "Твоей бабушке"] },
        // Блок 3
        { sentence: "___ зовут Николай.",   correct: "Нашего папу",    options: ["Наш папа",      "Нашего папу",    "Нашему папе"] },
        { sentence: "___ зовут Юлия.",      correct: "Её",             options: ["Она",           "Её",             "Ей"] },
        { sentence: "Как ___ зовут?",       correct: "вас",            options: ["вы",            "вас",            "вам"] },
        { sentence: "___ зовут Светлана.",  correct: "Мою коллегу",    options: ["Моя коллега",   "Мою коллегу",    "Моей коллеге"] },
        { sentence: "___ зовут Евгений.",   correct: "Его",            options: ["Он",            "Его",            "Ему"] },
        { sentence: "Как зовут ___?",       correct: "вашего коллегу", options: ["ваш коллега",   "вашего коллегу", "вашему коллеге"] },
        { sentence: "___ зовут Паша и Маша.",  correct: "Их",          options: ["Они",           "Их",             "Им"] },
        { sentence: "___ зовут Михаил.",    correct: "Моего племянника",options: ["Мой племянник", "Моего племянника","Моему племяннику"] },
        { sentence: "___ зовут Татьяна.",   correct: "Его жену",       options: ["Его жена",      "Его жену",       "Его жене"] },
        { sentence: "Как зовут ___?",       correct: "твою подругу",   options: ["твоя подруга",  "твою подругу",   "твоей подруге"] },
    ];

    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    let current = 0;

    const container = document.getElementById('acc-ctc-04-cards-container');
    const prevBtn   = document.getElementById('acc-ctc-04-deck-prev');
    const nextBtn   = document.getElementById('acc-ctc-04-deck-next');
    const counterEl = document.getElementById('acc-ctc-04-deck-counter');

    function render(index) {
        const q = shuffled[index];
        container.innerHTML = `
            <div class="acc04-card">
                <p class="acc04-sentence">${q.sentence.replace('___', '<span class="acc04-blank">___</span>')}</p>
                <div class="acc04-options">
                    ${q.options.map(opt => `<button class="acc04-opt" data-value="${opt}">${opt}</button>`).join('')}
                </div>
                <div class="acc04-feedback"></div>
            </div>
        `;
        container.querySelectorAll('.acc04-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                const sel = btn.getAttribute('data-value');
                const fb  = container.querySelector('.acc04-feedback');
                container.querySelectorAll('.acc04-opt').forEach(b => b.disabled = true);
                if (sel === q.correct) {
                    btn.classList.add('correct');
                    fb.textContent = '✓ Правильно!';
                    fb.className = 'acc04-feedback correct';
                } else {
                    btn.classList.add('wrong');
                    fb.textContent = `✗ Правильно: ${q.correct}`;
                    fb.className = 'acc04-feedback wrong';
                    container.querySelectorAll('.acc04-opt').forEach(b => {
                        if (b.getAttribute('data-value') === q.correct) b.classList.add('correct');
                    });
                }
            });
        });
        counterEl.textContent = `${index + 1} / ${shuffled.length}`;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === shuffled.length - 1;
    }

    prevBtn.addEventListener('click', () => { if (current > 0)                   { current--; render(current); } });
    nextBtn.addEventListener('click', () => { if (current < shuffled.length - 1) { current++; render(current); } });

    render(0);
}

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
                correctAnswers: { 1: "нашего соседа", 2: "его кота" }
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
                correctAnswers: { 1: "нашего племянника", 2: "его сына" }
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
        rootId: 'ex-flashcards-acc-02',
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
            { front: "Моя соседка Виктория.",  back: "Мою соседку зовут Виктория." },
            { front: "Наша подруга Ирина.",    back: "Нашу подругу зовут Ирина." },
            { front: "Его собака Стрелка.",    back: "Его собаку зовут Стрелка." },
            { front: "Моя тётя Анна.",         back: "Мою тётю зовут Анна." },
            { front: "Ваша коллега Светлана.", back: "Вашу коллегу зовут Светлана." },
            { front: "Его жена Александра.",   back: "Его жену зовут Александра." },
            { front: "Его девушка Катя.",      back: "Его девушку зовут Катя." },
            { front: "Наша студентка Вера.",   back: "Нашу студентку зовут Вера." },
            { front: "Ваша дочь Елена.",       back: "Вашу дочь зовут Елена." },
        ]
    }),

    // --- Panel 3 (public) - Flashcards ---
    'panel-acc-open-3': () => new FlashcardExercise({
        rootId: 'ex-flashcards-acc-03',
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

    // --- Panel 4 (public) - Quiz deck ---
    'panel-acc-open-4': () => initPanel4Acc(),

    // --- Panel 9 (paid) - Flashcards (personal pronouns singular: я/ты/он/она) ---
    'panel-acc-open-9': () => new FlashcardExercise({
        rootId: 'ex-flashcards-acc-09',
        cards: [
            { front: "Он — Дмитрий.",    back: "Его зовут Дмитрий." },
            { front: "Она — Наташа.",    back: "Её зовут Наташа." },
            { front: "Я — Александр.",   back: "Меня зовут Александр." },
            { front: "Ты — Ирина?",      back: "Тебя зовут Ирина?" },
            { front: "Он — Артём.",      back: "Его зовут Артём." },
            { front: "Она — Валерия.",   back: "Её зовут Валерия." },
            { front: "Я — Николай.",     back: "Меня зовут Николай." },
            { front: "Ты — Людмила?",    back: "Тебя зовут Людмила?" },
            { front: "Она — Виктория.",  back: "Её зовут Виктория." },
            { front: "Он — Евгений.",    back: "Его зовут Евгений." },
        ]
    }),

    // --- Panel 10 (paid) - Flashcards (personal pronouns mixed: он/она/они/мы/вы) ---
    'panel-acc-open-10': () => new FlashcardExercise({
        rootId: 'ex-flashcards-acc-10',
        cards: [
            { front: "Они — Антон и Лена.",   back: "Их зовут Антон и Лена." },
            { front: "Он — Кирилл.",          back: "Его зовут Кирилл." },
            { front: "Она — Анастасия.",      back: "Её зовут Анастасия." },
            { front: "Мы — Игорь и Соня.",    back: "Нас зовут Игорь и Соня." },
            { front: "Они — Паша и Маша.",    back: "Их зовут Паша и Маша." },
            { front: "Вы — Михаил?",          back: "Вас зовут Михаил?" },
            { front: "Он — Степан.",          back: "Его зовут Степан." },
            { front: "Она — Юлия.",           back: "Её зовут Юлия." },
            { front: "Они — Серёжа и Вика.",  back: "Их зовут Серёжа и Вика." },
            { front: "Мы — Андрей и Таня.",   back: "Нас зовут Андрей и Таня." },
        ]
    })

};

// Initialize
initPanelManager({
    initializers: panelInitializers,
    enableAccessControl: true
});
