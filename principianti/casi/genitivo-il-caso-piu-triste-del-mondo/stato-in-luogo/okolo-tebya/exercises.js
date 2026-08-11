import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Genitivo dopo preposizioni di vicinanza (возле, у, около, справа/слева от, напротив, вокруг)
// ============================================================
const p1exercises = [
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["окно", "окне", "окна"],
        correctAnswers: { 1: "окна" },
        explanation: "Genitivo dopo la preposizione возле (vicino a): окно → окна."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}}.",
        words: ["стол", "столе", "стола"],
        correctAnswers: { 1: "стола" },
        explanation: "Genitivo dopo la preposizione у (presso, accanto a): стол → стола."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Около {{1}}.",
        words: ["кровать", "кроватью", "кровати"],
        correctAnswers: { 1: "кровати" },
        explanation: "Genitivo dopo около (vicino a): кровать → кровати. Genitivo e prepositivo coincidono per questo tipo di sostantivo, quindi il distrattore è lo strumentale кроватью."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Справа от {{1}}.",
        words: ["раковина", "раковине", "раковины"],
        correctAnswers: { 1: "раковины" },
        explanation: "Genitivo dopo справа от (a destra di): раковина → раковины."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Слева от {{1}}.",
        words: ["кресло", "кресле", "кресла"],
        correctAnswers: { 1: "кресла" },
        explanation: "Genitivo dopo слева от (a sinistra di): кресло → кресла."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Напротив {{1}}.",
        words: ["дверь", "дверью", "двери"],
        correctAnswers: { 1: "двери" },
        explanation: "Genitivo dopo напротив (di fronte a): дверь → двери. Come кровать, genitivo e prepositivo coincidono, il distrattore è lo strumentale дверью."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Вокруг {{1}}.",
        words: ["стол", "столе", "стола"],
        correctAnswers: { 1: "стола" },
        explanation: "Genitivo dopo вокруг (intorno a): стол → стола."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Напротив {{1}}.",
        words: ["стена", "стене", "стены"],
        correctAnswers: { 1: "стены" },
        explanation: "Genitivo dopo напротив (di fronte a): стена → стены."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Около {{1}}.",
        words: ["лампа", "лампе", "лампы"],
        correctAnswers: { 1: "лампы" },
        explanation: "Genitivo dopo около (vicino a): лампа → лампы."
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Слева от {{1}}.",
        words: ["полка", "полке", "полки"],
        correctAnswers: { 1: "полки" },
        explanation: "Genitivo dopo слева от (a sinistra di): полка → полки."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Genitivo dopo preposizioni di vicinanza — solo 1a declinazione
// ============================================================
const p2exercises = [
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Слева от {{1}}.",
        words: ["раковина", "раковине", "раковины"],
        correctAnswers: { 1: "раковины" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["стена", "стене", "стены"],
        correctAnswers: { 1: "стены" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}}.",
        words: ["комната", "комнате", "комнаты"],
        correctAnswers: { 1: "комнаты" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["кухня", "кухне", "кухни"],
        correctAnswers: { 1: "кухни" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Около {{1}}.",
        words: ["лампа", "лампе", "лампы"],
        correctAnswers: { 1: "лампы" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Справа от {{1}}.",
        words: ["полка", "полке", "полки"],
        correctAnswers: { 1: "полки" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["подушка", "подушке", "подушки"],
        correctAnswers: { 1: "подушки" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Слева от {{1}}.",
        words: ["кастрюля", "кастрюле", "кастрюли"],
        correctAnswers: { 1: "кастрюли" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["сковородка", "сковородке", "сковородки"],
        correctAnswers: { 1: "сковородки" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["чашка", "чашке", "чашки"],
        correctAnswers: { 1: "чашки" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Genitivo dopo preposizioni di vicinanza — 2a declinazione
// ============================================================
const p3exercises = [
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Напротив {{1}}.",
        words: ["телевизор", "телевизоре", "телевизора"],
        correctAnswers: { 1: "телевизора" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["шкаф", "шкафу", "шкафа"],
        correctAnswers: { 1: "шкафа" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}}.",
        words: ["диван", "диване", "дивана"],
        correctAnswers: { 1: "дивана" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["кресло", "кресле", "кресла"],
        correctAnswers: { 1: "кресла" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "У {{1}}.",
        words: ["окно", "окне", "окна"],
        correctAnswers: { 1: "окна" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Справа от {{1}}.",
        words: ["холодильник", "холодильнике", "холодильника"],
        correctAnswers: { 1: "холодильника" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["дом", "доме", "дома"],
        correctAnswers: { 1: "дома" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Вокруг {{1}}.",
        words: ["стол", "столе", "стола"],
        correctAnswers: { 1: "стола" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Возле {{1}}.",
        words: ["стул", "стуле", "стула"],
        correctAnswers: { 1: "стула" }
    },
    {
        instruction: "Scegli la forma corretta al genitivo.",
        text: "Около {{1}}.",
        words: ["вход", "входе", "входа"],
        correctAnswers: { 1: "входа" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Genitivo dopo preposizioni di vicinanza, con aggettivo — mix declinazioni
// ============================================================
const p4cards = [
    { front: "Возле", back: "новой духовки", explanation: "Aggettivo femminile genitivo (новой) + sostantivo femminile genitivo (духовки), 1ª declinazione." },
    { front: "Вокруг", back: "обеденного стола", explanation: "Aggettivo maschile genitivo (обеденного) + sostantivo maschile genitivo (стола), 2ª declinazione." },
    { front: "Справа от", back: "книжной полки", explanation: "Aggettivo femminile genitivo (книжной) + sostantivo femminile genitivo (полки), 1ª declinazione." },
    { front: "Слева от", back: "большого холодильника", explanation: "Aggettivo maschile genitivo (большого) + sostantivo maschile genitivo (холодильника), 2ª declinazione." },
    { front: "Напротив", back: "нового телевизора", explanation: "Aggettivo maschile genitivo (нового) + sostantivo maschile genitivo (телевизора), 2ª declinazione." },
    { front: "Справа от", back: "синего кресла", explanation: "Aggettivo neutro genitivo (синего) + sostantivo neutro genitivo (кресла), 2ª declinazione." },
    { front: "Слева от", back: "деревянного шкафа", explanation: "Aggettivo maschile genitivo (деревянного) + sostantivo maschile genitivo (шкафа), 2ª declinazione." },
    { front: "Возле", back: "пластикового стула", explanation: "Aggettivo maschile genitivo (пластикового) + sostantivo maschile genitivo (стула), 2ª declinazione." },
    { front: "Напротив", back: "овального зеркала", explanation: "Aggettivo neutro genitivo (овального) + sostantivo neutro genitivo (зеркала), 2ª declinazione." },
    { front: "Около", back: "письменного стола", explanation: "Aggettivo maschile genitivo (письменного) + sostantivo maschile genitivo (стола), 2ª declinazione." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Genitivo dopo preposizioni di vicinanza, con aggettivo — solo genere femminile
// ============================================================
const p5cards = [
    { front: "Возле", back: "напольной вазы" },
    { front: "Справа от", back: "новой лампы" },
    { front: "Слева от", back: "двуспальной кровати" },
    { front: "Напротив", back: "входной двери" },
    { front: "У", back: "белой стены" },
    { front: "Справа от", back: "книжной полки" },
    { front: "Слева от", back: "огромной картины" },
    { front: "Возле", back: "бордовой подушки" },
    { front: "Справа от", back: "круглой раковины" },
    { front: "Возле", back: "пепельницы" }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// 6 femminile (1a decl.) + 4 maschile/neutro, dal pool già creato
// ============================================================
const p6cards = [
    { front: "Справа от", back: "раковины" },
    { front: "Напротив", back: "стены" },
    { front: "Возле", back: "подушки" },
    { front: "Слева от", back: "кастрюли" },
    { front: "Возле", back: "новой духовки" },
    { front: "Слева от", back: "огромной картины" },
    { front: "Напротив", back: "телевизора" },
    { front: "Возле", back: "дома" },
    { front: "Вокруг", back: "обеденного стола" },
    { front: "Напротив", back: "овального зеркала" }
];

// ============================================================
// PANEL 7 — Flashcard · public
// TODO: contenuto in attesa di materiale da PM
// Mix femminile/maschile con aggettivo, dal pool già creato
// ============================================================
const p7cards = [
    { front: "Справа от", back: "круглой раковины", explanation: "Aggettivo femminile genitivo (круглой) + sostantivo femminile genitivo (раковины), 1ª declinazione." },
    { front: "Слева от", back: "большого холодильника", explanation: "Aggettivo maschile genitivo (большого) + sostantivo maschile genitivo (холодильника), 2ª declinazione." },
    { front: "Возле", back: "напольной вазы", explanation: "Aggettivo femminile genitivo (напольной) + sostantivo femminile genitivo (вазы), 1ª declinazione." },
    { front: "Напротив", back: "нового телевизора", explanation: "Aggettivo maschile genitivo (нового) + sostantivo maschile genitivo (телевизора), 2ª declinazione." },
    { front: "У", back: "белой стены", explanation: "Aggettivo femminile genitivo (белой) + sostantivo femminile genitivo (стены), 1ª declinazione." },
    { front: "Около", back: "письменного стола", explanation: "Aggettivo maschile genitivo (письменного) + sostantivo maschile genitivo (стола), 2ª declinazione." },
    { front: "Слева от", back: "двуспальной кровати", explanation: "Aggettivo femminile genitivo (двуспальной) + sostantivo femminile genitivo (кровати), 3ª declinazione." },
    { front: "Возле", back: "пластикового стула", explanation: "Aggettivo maschile genitivo (пластикового) + sostantivo maschile genitivo (стула), 2ª declinazione." },
    { front: "Возле", back: "бордовой подушки", explanation: "Aggettivo femminile genitivo (бордовой) + sostantivo femminile genitivo (подушки), 1ª declinazione." },
    { front: "Слева от", back: "деревянного шкафа", explanation: "Aggettivo maschile genitivo (деревянного) + sostantivo maschile genitivo (шкафа), 2ª declinazione." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// 5 femminile + 5 maschile con aggettivo, dal pool già creato
// ============================================================
const p8cards = [
    { front: "Справа от", back: "круглой раковины" },
    { front: "Возле", back: "напольной вазы" },
    { front: "У", back: "белой стены" },
    { front: "Слева от", back: "двуспальной кровати" },
    { front: "Возле", back: "бордовой подушки" },
    { front: "Слева от", back: "большого холодильника" },
    { front: "Напротив", back: "нового телевизора" },
    { front: "Вокруг", back: "обеденного стола" },
    { front: "Слева от", back: "деревянного шкафа" },
    { front: "Около", back: "письменного стола" }
];

// ============================================================
// PANEL 9 — Flashcard · paid
// 3+2 femminile e 3+2 maschile con aggettivo, dal pool già creato
// ============================================================
const p9cards = [
    { front: "Справа от", back: "круглой раковины" },
    { front: "У", back: "белой стены" },
    { front: "Возле", back: "бордовой подушки" },
    { front: "Возле", back: "новой духовки" },
    { front: "Слева от", back: "огромной картины" },
    { front: "Слева от", back: "большого холодильника" },
    { front: "Напротив", back: "нового телевизора" },
    { front: "Вокруг", back: "обеденного стола" },
    { front: "Слева от", back: "деревянного шкафа" },
    { front: "Возле", back: "пластикового стула" }
];

// ============================================================
// PANEL 10 — Quiz misto (multiple choice + match + write) · public
// TODO: contenuto in attesa di materiale da PM
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelSil10() {
    const panel = document.getElementById('panel-sil-10');
    if (!panel) return;

    const container = panel.querySelector('#sil-10-cards-container');
    const prevBtn   = panel.querySelector('#sil-10-deck-prev');
    const nextBtn   = panel.querySelector('#sil-10-deck-next');
    const counterEl = panel.querySelector('#sil-10-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Цветы на обеденном столе возле ___.", options: ["холодильник", "холодильника"], answer: "холодильника" },
        { question: "Плед на старинном диване возле ___.", options: ["камин", "камина"], answer: "камина" },
        { question: "Сковородка на газовой плите слева от ___.", options: ["деревянный шкаф", "деревянного шкафа"], answer: "деревянного шкафа" },
        { question: "Кровать в новой спальне у ___.", options: ["балконная дверь", "балконной двери"], answer: "балконной двери" },
        { question: "Ваза на полке возле ___.", options: ["новая духовка", "новой духовки"], answer: "новой духовки" },
        { question: "Стул в длинном коридоре возле ___.", options: ["входная дверь", "входной двери"], answer: "входной двери" },
        { question: "Тарелки в шкафу на нижней полке слева от ___.", options: ["круглая раковина", "круглой раковины"], answer: "круглой раковины" },
        { question: "Стул в большой комнате возле ___.", options: ["старинный шкаф", "старинного шкафа"], answer: "старинного шкафа" },
        { question: "Часы на кухонной стене напротив ___.", options: ["овальное зеркало", "овального зеркала"], answer: "овального зеркала" },
        { question: "Бордовая подушка на синем кресле напротив ___.", options: ["окно", "окна"], answer: "окна" }
    ];

    const matchPairs = [
        { left: "Вилки в", right: "верхнем ящике справа от раковины" },
        { left: "Полка в новой кухне справа от", right: "бордового дивана" },
        { left: "Картина на", right: "стене слева от двуспальной кровати" },
        { left: "Раковина в ванной слева от", right: "белого шкафа" },
        { left: "Чашки в", right: "кухонном шкафу справа от нового холодильника" },
        { left: "Пепельница на балконе возле", right: "стены" },
        { left: "Сковородки в", right: "нижнем ящике слева от круглой раковины" },
        { left: "Стулья в гостиной вокруг", right: "обеденного стола" },
        { left: "Занавеска на", right: "большом окне напротив нового телевизора" },
        { left: "Полотенце в ванной справа от", right: "широкой раковины" }
    ];

    const quizData = [
        { id: "sil-001", promptPrefix: "Лампа на письменном столе ", promptSuffix: " (балконная дверь).", answers: ["возле балконной двери"] },
        { id: "sil-002", promptPrefix: "Пульт на синем диване ", promptSuffix: " (большой холодильник).", answers: ["слева от большого холодильника"] },
        { id: "sil-003", promptPrefix: "Тарелка на столе ", promptSuffix: " (белая стена).", answers: ["у белой стены"] },
        { id: "sil-004", promptPrefix: "Зеркало в коридоре ", promptSuffix: " (входная дверь).", answers: ["напротив входной двери"] },
        { id: "sil-005", promptPrefix: "Кастрюля на кухне ", promptSuffix: " (пластиковый стул).", answers: ["возле пластикового стула"] },
        { id: "sil-006", promptPrefix: "Твоя любимая книга на письменном столе ", promptSuffix: " (книжный шкаф).", answers: ["возле книжного шкафа"] },
        { id: "sil-007", promptPrefix: "Мыло в ванной ", promptSuffix: " (круглая раковина).", answers: ["возле круглой раковины"] },
        { id: "sil-008", promptPrefix: "Холодильник на кухне ", promptSuffix: " (кухонный стол).", answers: ["возле кухонного стола"] },
        { id: "sil-009", promptPrefix: "Диван в гостиной ", promptSuffix: " (большое окно).", answers: ["справа от большого окна"] },
        { id: "sil-010", promptPrefix: "Кот на синем кресле ", promptSuffix: " (большое окно).", answers: ["возле большого окна"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

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
            card.className = 'fca01-card-container sil-10-card';
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
        container.querySelectorAll('.sil-10-card').forEach(card => {
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
                const card    = this.closest('.sil-10-card');
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
        container.querySelectorAll('.sil-10-card').forEach((c, i) => {
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
    'panel-sil-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-sil-01',    exercises: p1exercises }),
    'panel-sil-2':  () => new DragDropExercise({ rootId: 'ex-dragdrop-sil-02',    exercises: p2exercises }),
    'panel-sil-3':  () => new DragDropExercise({ rootId: 'ex-dragdrop-sil-03',    exercises: p3exercises }),
    'panel-sil-4':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sil-04', cards: p4cards }),
    'panel-sil-5':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sil-05', cards: p5cards }),
    'panel-sil-6':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sil-06', cards: p6cards }),
    'panel-sil-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sil-07', cards: p7cards }),
    'panel-sil-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sil-08', cards: p8cards }),
    'panel-sil-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-sil-09', cards: p9cards }),
    'panel-sil-10': () => initPanelSil10()
};

initPanelManager({ initializers, enableAccessControl: true });
