import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · ДРУГ ЕЁ БРАТА
// ============================================================
const p1exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: " Антон брат {{1}}.", words: ["Александры", "Александр", "Александра"], correctAnswers: { 1: "Александра" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Елена сестра {{1}} .", words: ["Владислава", "Владислав", "Владиславу"], correctAnswers: { 1: "Владислава" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Анна жена{{1}} .", words: ["Анатолий", "Анатолийа", "Анатолия"], correctAnswers: { 1: "Анатолия" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Лиза сестра {{1}} .", words: ["Антону", "Антона", "Антон"], correctAnswers: { 1: "Антона" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: " Девушка {{1}} ", words: ["наш сосед", "нашего соседа", "нашу соседа"], correctAnswers: { 1: "нашего соседа" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: " Собака {{1}} .", words: ["моё парня", "моего паренья", "моего парня"], correctAnswers: { 1: "моего парня" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: " Машина {{1}}.", words: ["мой друг", "моего другу", "моего друга"], correctAnswers: { 1: "моего друга" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Друг {{1}}.", words: ["ваш сын", "вашего сына", "вашего сын"], correctAnswers: { 1: "вашего сына" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "девушка {{1}}.", words: ["ваш друга", "вашего другу", "вашего друга"], correctAnswers: { 1: "вашего друга" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Жена {{1}}.", words: ["твой брата", "твоего брат", "твоего брата"], correctAnswers: { 1: "твоего брата" } }
];

// ============================================================
// PANEL 5 — DragDrop · student · ПОДРУГА МОЕЙ ДЕВУШКИ
// ============================================================
const p5exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Соседка {{1}}.", words: ["мою подругу", "моей подруга", "мою подруги", "моей подруги"], correctAnswers: { 1: "моей подруги" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Брат{{1}}.", words: ["моя девушки", "мою девушку", "моей девушки", "моей девушку"], correctAnswers: { 1: "моей девушки" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Родители {{1}}.", words: ["мою жена", "мою жену", "моей жена", "моей жены"], correctAnswers: { 1: "моей жены" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Кот {{1}}", words: ["нашу бабушку", "нашей бабушка", "нашу бабушки", "нашей бабушки"], correctAnswers: { 1: "нашей бабушки" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Брат {{1}}.", words: ["Александру", "Александра", "Александры"], correctAnswers: { 1: "Александры" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Кот {{1}}.", words: ["их соседку", "их соседки", "мх соседка"], correctAnswers: { 1: "их соседки" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Парень {{1}}.", words: ["вашего племянница", "вашу племянницу", "вашей племянницы"], correctAnswers: { 1: "вашей племянницы" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Собака {{1}}.", words: ["его девушку", "его девушки", "его девушка"], correctAnswers: { 1: "его девушки" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Миска {{1}}", words: ["нашего кошку", "нашу кошку", "нашей кошки"], correctAnswers: { 1: "нашей кошки" } }
];

// ============================================================
// PANEL 6 — DragDrop · paid · СЕМЬЯ АЛЬБЕРТА
// ============================================================
const p6exercises = [
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(сестра) {{1}}  {{2}}(Альберт) зовут Линда.", words: ["Сестру", "Сестры", "Альберту", "Альберта"], correctAnswers: { 1: "Сестру", 2: "Альберта" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(брат) {{1}} (Линда) {{2}} зовут Альберт.", words: ["Брату", "Брата", "Линду", "Линды"], correctAnswers: { 1: "Брата", 2: "Линды" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(жена) {{1}} (Владислав) {{2}} зовут Линда.", words: ["Жену", "Жены", "Владислав", "Владислава"], correctAnswers: { 1: "Жену", 2: "Владислава" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(Муж){{1}} (Линда) {{2}} зовут Владислав.", words: ["Мужу", "Мужа", "Линды", "Линду"], correctAnswers: { 1: "Мужа", 2: "Линды" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(Брат){{1}} (Елена) {{2}} зовут Владислав.", words: ["Брат", "Брата", "Елену", "Елены"], correctAnswers: { 1: "Брата", 2: "Елены" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(Сестра){{1}} (Владислав) {{2}} зовут Елена.", words: ["Сестры", "Сестру", "Владиславу", "Владислава"], correctAnswers: { 1: "Сестру", 2: "Владислава" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: " (Тётя) {{1}} (Александра) {{2}} зовут Елена.", words: ["Тёти", "Тётю", "Александру", "Александры"], correctAnswers: { 1: "Тётю", 2: "Александры" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(Племянница) {{1}} (Елена) {{2}} зовут Александра.", words: ["Племянницу", "Племянницы", "Елены", "Елену"], correctAnswers: { 1: "Племянницу", 2: "Елены" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(Дочь) {{1}} (Владислав) {{2}} зовут Александра.", words: ["Дочу", "Дочь", "Владислава", "Владиславы"], correctAnswers: { 1: "Дочь", 2: "Владислава" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(Отец) {{1}} (Александра) {{2}} зовут Владислав.", words: ["Отеца", "Отца", "Александруу", "Александры"], correctAnswers: { 1: "Отца", 2: "Александры" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(Сын) {{1}} (Линда) {{2}} зовут Анатолий.", words: ["Сына", "Сыну", "Линду", "Линды"], correctAnswers: { 1: "Сына", 2: "Линды" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(Дочь) {{1}} (Владислав) {{2}} зовут Александра.", words: ["Дочь", "Дочи", "Владиславы", "Владислава"], correctAnswers: { 1: "Дочь", 2: "Владислава" } },
    { instruction: "Completa la frase scegliendo due forme corrette", text: "(племянник) {{1}} (Альберт) {{2}} зовут Анатолий.", words: ["Племянника", "Племянники", "Альберту", "Альберта"], correctAnswers: { 1: "Племянника", 2: "Альберта" } }
];

// ============================================================
// PANEL 2 — Flashcard · public · БРАТ МОЕЙ ПОДРУГИ
// ============================================================
const p2cards = [
    { front: "Друг (моя тётя).", back: "Друг моей тёти." },
    { front: "Машина (моя девушка).", back: "Машина моей девушки." },
    { front: "Дом (мой дядя).", back: "Дом моего дяди." },
    { front: "Подушка (наша кошка).", back: "Подушка нашей кошки." },
    { front: "Собака (ваша соседка).", back: "Собака вашей соседки." },
    { front: "Телефон (твоя подруга).", back: "Телефон твоей подруги." },
    { front: "Кот (их бабушка)", back: "Кот их бабушки." },
    { front: "Мото (наш дедушка).", back: "Мото нашего дедушка." }
];

// ============================================================
// PANEL 7 — Flashcard · student · ДЕВУШКА МОЕГО ДРУГА
// ============================================================
const p7cards = [
    { front: "Сестра (наш друг).", back: "Сестра нашего друга." },
    { front: "Девушка (ваш сын).", back: "Девушка вашего сына." },
    { front: "Сосед (мой племянник).", back: "Сосед моего племянника." },
    { front: "Кот (их сосед).", back: "Кот их соседа." },
    { front: "Машина (твой брат).", back: "Машина твоего брата." },
    { front: "Телефон (её муж).", back: "Телефон её мужа" },
    { front: "Брат (её парень).", back: "Брат её парня" },
    { front: "Дом (наш отец).", back: "Дом нашего отца." }
];

// ============================================================
// PANEL 8 — Flashcard · public · ПАРЕНЬ МОЕЙ ЛУЧШЕЙ ПОДРУГИ
// ============================================================
const p8cards = [
    { front: "Телефон (моя старшая сестра Катя).", back: "Телефон моей старшей сестры Кати." },
    { front: "Дом (моя лучшая подруга Анна).", back: "Дом моей лучшей подргуги Анны." },
    { front: "Подушка (твоя старая кошка Мурка).", back: "Подушка твоей старой кошки Мурки." },
    { front: "Машина (наша новая соседка Наташа).", back: "Машина нашей новой соседки Наташи." },
    { front: "Дочь (её любимая племянница Александра).", back: "Дочь её любимой племянницы Александры." },
    { front: "Брат (его новая девушка Мария).", back: "Брат его новой девушки Марии." },
    { front: "Друг (твоя первая жена Светлана).", back: "Друг твоей первой жены Светланы" },
    { front: "Пирог (моя любимая бабушка Нина).", back: "Пирог моей любимой бабушки Нины." }
];

// ============================================================
// PANEL 9 — Flashcard · paid · ДРУГ ТВОЕГО СТАРШЕГО БРАТА
// ============================================================
const p9cards = [
    { front: "Жена (мой старший брат Александр).", back: "Жена моего старшего брата Алексадра." },
    { front: "Друг (твой младший брат Андрей).", back: "Друг твоего младшего брата Андрея" },
    { front: "Девушка (наш друг Виктор).", back: "Девушка нашего друга Виктора." },
    { front: "Дом (его мать Анна)", back: "Дом его матери Анны." },
    { front: "Брат (её второй муж Анатолий).", back: "Брат её второго мужа Анатолия." },
    { front: "Миска (ваш любимый кот Барсик)", back: "Миска вашего любимого кота Барсика" },
    { front: "Парень (их старшая дочь Мария)", back: "Парень их старшей дочери Марии." }
];

// ============================================================
// PANEL 10 — Flashcard · paid · СЕМЬЯ АЛЬБЕРТА
// ============================================================
const p10cards = [
    { front: "Это сестра Альберта - Линда.", back: "Сестру Альберта зовут Линда." },
    { front: "Это брат Линды - Альберт.", back: "Брата Линды зовут Альберт." },
    { front: "Это жена Владислава - Линда.", back: "Жену Владислава зовут Линда." },
    { front: "Это муж Линды - Владислав.", back: "Мужа Линды зовут Владислав." },
    { front: "Это дочь Владислава - Александра.", back: "Дочь Владислава зовут Александра." },
    { front: "Это Владислав - отец Александры.", back: "Отца Александры зовут Владислав." },
    { front: "Это Анатолий - сын Линды и Владислава.", back: "Сына Линды и Владислава зовут Анатолий." },
    { front: "Это Альберт - дядя Анатолия и Александы.", back: "Дядю Анатолия и Александры зовут Альберт." },
    { front: "Это Александр - племянник Альберта и Елены.", back: "Племянника Альберта и Елены зовут Анатолий." },
    { front: "Это Александра - племянница Альберта и Елены.", back: "Племянницу Альберта и Елены зовут Александра." },
    { front: "Это Елена - тётя Анатолия и Александры.", back: "Тётю Анатолия и Александры зовут Елена." }
];

// ============================================================
// PANEL 4 — Mixed Quiz · public · QUIZ (30 carte)
// 0-9: multiple choice drag-drop
// 10-19: match game
// 20-29: text input
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-acc-open-4');
    if (!panel) return;

    const container = panel.querySelector('#acc-04-cards-container');
    const prevBtn = panel.querySelector('#acc-04-deck-prev');
    const nextBtn = panel.querySelector('#acc-04-deck-next');
    const counterEl = panel.querySelector('#acc-04-deck-counter');

    const TOTAL_CARDS = 30;
    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Как зовут (мой брат) ?", options: ["Моего брата", "Мой брат", "Моему брату", "Моим братом"], answer: "Моего брата" },
        { question: "Как зовут (наша сестра) ?", options: ["Нашу сестру", "Наша сестра", "Нашей сестре"], answer: "Нашу сестру" },
        { question: "Как зовут (их подруга) ?", options: ["Их подругу", "Их подруга", "Их подругой"], answer: "Их подругу" },
        { question: "Как зовут (ваш отец) ?", options: ["Вашего отца", "Ваш отец", "Вашему отцу"], answer: "Вашего отца" },
        { question: "Как зовут (твоя мама) ?", options: ["Твою маму", "Твоя мама", "Твоей маме"], answer: "Твою маму" },
        { question: "Как зовут (его друг) ?", options: ["Его друга", "Его друг", "Его другу"], answer: "Его друга" },
        { question: "Как зовут (её дочь) ?", options: ["Её дочь", "Её дочери", "Её дочерью"], answer: "Её дочь" },
        { question: "Как зовут (наш дедушка) ?", options: ["Нашего дедушку", "Наш дедушка", "Нашему дедушке"], answer: "Нашего дедушку" },
        { question: "Как зовут (твой сын) ?", options: ["Твоего сына", "Твой сын", "Твоему сыну"], answer: "Твоего сына" },
        { question: "Как зовут (ваша тётя) ?", options: ["Вашу тётю", "Ваша тётя", "Вашей тёте"], answer: "Вашу тётю" }
    ];

    const matchPairs = [
        { left: "мама", right: "маму" },
        { left: "брат", right: "брата" },
        { left: "дедушка", right: "дедушку" },
        { left: "подруга", right: "подругу" },
        { left: "сын", right: "сына" },
        { left: "тётя", right: "тётю" },
        { left: "сестра", right: "сестру" },
        { left: "друг", right: "друга" },
        { left: "бабушка", right: "бабушку" },
        { left: "дочь", right: "дочь" }
    ];

    const quizData = [
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
    ];

    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ');
    }

    function ensureCardTitle(card, index) {
        const existingTitle = Array.from(card.children).find(child => child.tagName === 'H1');
        if (existingTitle) {
            if (index < 10) existingTitle.classList.add('exercise-counter');
            if (card.firstElementChild !== existingTitle) card.insertBefore(existingTitle, card.firstElementChild);
            return;
        }
        const title = document.createElement('h1');
        title.textContent = `Esercizio ${index + 1} di ${TOTAL_CARDS}`;
        if (index < 10) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container acc-04-card';
            card.dataset.index = i;
            if (i === 0) card.classList.add('visible');
            card.hidden = (i !== 0);

            if (i < 10) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) => `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`).join('');
                const questionText = item.question.replace(/\(([^)]+)\)/, `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`);
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

            } else if (i < 20) {
                const pairIdx = i - 10;
                const pair = matchPairs[pairIdx];
                const otherPairs = matchPairs.filter((_, idx) => idx !== pairIdx);
                const shuffledOthers = otherPairs.sort(() => Math.random() - 0.5).slice(0, 2);
                const allPairs = [pair, ...shuffledOthers].sort(() => Math.random() - 0.5);

                let fronts = allPairs.map((p, idx) => ({ text: p.left, type: 'front', id: idx }));
                let backs = allPairs.map((p, idx) => ({ text: p.right, type: 'back', id: idx }));
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

                    const firstId = selectedMatchCard.dataset.id;
                    const secondId = clickedCard.dataset.id;
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
                    div.dataset.id = item.id;
                    div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatchClick(div));
                    return div;
                }

                fronts.forEach(item => colFronts.appendChild(createMatchElement(item)));
                backs.forEach(item => colBacks.appendChild(createMatchElement(item)));
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);

            } else {
                const item = quizData[i - 20];
                card.innerHTML = `
                    <h3 class="quiz-title">Write</h3>
                    <p class="quiz-instruction">Scrivete la forma corretta</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix}<input type="text" class="quiz-input" data-index="${i - 20}">${item.promptSuffix}</div>
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
        container.querySelectorAll('.acc-04-card').forEach(card => {
            const cardIndex = parseInt(card.dataset.index, 10);
            if (cardIndex >= 10) return;

            let checked = false;
            const gapElements = Array.from(card.querySelectorAll('.gap'));
            const wordElements = Array.from(card.querySelectorAll('.word-option'));
            const verifyBtn = card.querySelector('.verify-btn');
            const nextBtn = card.querySelector('.next-btn');
            const feedback = card.querySelector('.feedback');

            wordElements.forEach(wordElement => {
                wordElement.addEventListener('click', function() {
                    if (this.classList.contains('used') || checked) return;
                    const emptyGap = gapElements.find(gap => !gap.classList.contains('filled'));
                    if (!emptyGap) return;
                    const word = this.dataset.word;
                    emptyGap.textContent = word;
                    emptyGap.classList.add('filled');
                    emptyGap.dataset.word = word;
                    emptyGap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });

            gapElements.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const wordIndex = this.dataset.wordIndex;
                    const wordElement = wordElements.find(w => w.dataset.index === wordIndex);
                    this.textContent = '';
                    this.classList.remove('filled');
                    delete this.dataset.word;
                    delete this.dataset.wordIndex;
                    if (wordElement) wordElement.classList.remove('used');
                });
            });

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
                nextBtn.style.display = 'inline-block';
            });
        });

        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.acc-04-card');
                const idx = parseInt(card.dataset.index) - 20;
                const item = quizData[idx];
                const input = card.querySelector('.quiz-input');
                const fb = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect = item.answers.some(ans => userAnswer === ans);
                if (isCorrect) {
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                    input.disabled = true;
                    this.disabled = true;
                    fb.textContent = 'Правильно!';
                    fb.className = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.';
                    fb.className = 'quiz-feedback incorrect';
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
        container.querySelectorAll('.acc-04-card').forEach((c, i) => {
            c.classList.toggle('visible', i === idx);
            c.hidden = (i !== idx);
        });
        counterEl.textContent = (idx + 1) + ' / ' + TOTAL_CARDS;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === TOTAL_CARDS - 1);
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0) showCard(currentCard - 1); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL_CARDS - 1) showCard(currentCard + 1); });

    buildCards();
    showCard(0);
}

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-acc-open-1':  () => new DragDropExercise({ rootId: 'ex-accusativo-trascina-01', exercises: p1exercises }),
    'panel-acc-open-5':  () => new DragDropExercise({ rootId: 'ex-dragdrop-acc-05',        exercises: p5exercises }),
    'panel-acc-open-6':  () => new DragDropExercise({ rootId: 'ex-dragdrop-acc-06',        exercises: p6exercises }),
    'panel-acc-open-2':  () => new FlashcardExercise({ rootId: 'ex-flashcards-acc-03',     cards: p2cards }),
    'panel-acc-open-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-acc-07',     cards: p7cards }),
    'panel-acc-open-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-acc-08',     cards: p8cards }),
    'panel-acc-open-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-acc-09',     cards: p9cards }),
    'panel-acc-open-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-acc-10',     cards: p10cards }),
    'panel-acc-open-4':  () => initPanel4()
};

initPanelManager({ initializers, enableAccessControl: true });
