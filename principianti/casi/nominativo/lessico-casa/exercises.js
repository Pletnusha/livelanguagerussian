import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · МЕБЕЛЬ
// ============================================================
const p1exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la parete = {{1}}, la finestra = {{2}}, il letto = {{3}}, la lampada = {{4}}",
        words: ["стена", "окно", "кровать", "лампа", "вилка"],
        correctAnswers: { 1: "стена", 2: "окно", 3: "кровать", 4: "лампа" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il divano = {{1}}, la poltrona = {{2}}, il tavolo = {{3}}, l'armadio = {{4}}",
        words: ["диван", "кресло", "стол", "шкаф", "чемодан"],
        correctAnswers: { 1: "диван", 2: "кресло", 3: "стол", 4: "шкаф" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la porta = {{1}}, la sedia = {{2}}, lo specchio = {{3}}",
        words: ["дверь", "стул", "зеркало", "ложка"],
        correctAnswers: { 1: "дверь", 2: "стул", 3: "зеркало" }
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · КУХНЯ
// ============================================================
const p2exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la forchetta = {{1}}, la pentola = {{2}}, la padella = {{3}}, il cucchiaio = {{4}}",
        words: ["вилка", "кастрюля", "сковорода", "ложка", "стул"],
        correctAnswers: { 1: "вилка", 2: "кастрюля", 3: "сковорода", 4: "ложка" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il coltello = {{1}}, il piatto = {{2}}, la tazza = {{3}}",
        words: ["нож", "тарелка", "чашка", "зеркало"],
        correctAnswers: { 1: "нож", 2: "тарелка", 3: "чашка" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid · ВЕЩИ И АКСЕССУАРЫ
// ============================================================
const p3exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "le chiavi = {{1}}, la valigia = {{2}}, il telefono = {{3}}",
        words: ["ключи", "чемодан", "телефон", "кровать"],
        correctAnswers: { 1: "ключи", 2: "чемодан", 3: "телефон" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "l'orologio = {{1}}, la borsa = {{2}}, lo zaino = {{3}}",
        words: ["часы", "сумка", "рюкзак", "шкаф"],
        correctAnswers: { 1: "часы", 2: "сумка", 3: "рюкзак" }
    }
];

// ============================================================
// PANEL 4 — Flashcards · public · ЛЕКСИКА: МЕБЕЛЬ
// ============================================================
const p4cards = [
    { front: "la parete", back: "стена" },
    { front: "la finestra", back: "окно" },
    { front: "il letto", back: "кровать" },
    { front: "la lampada", back: "лампа" },
    { front: "il divano", back: "диван" },
    { front: "la poltrona", back: "кресло" },
    { front: "il tavolo", back: "стол" },
    { front: "l'armadio", back: "шкаф" },
    { front: "la porta", back: "дверь" },
    { front: "la sedia", back: "стул" },
    { front: "lo specchio", back: "зеркало" }
];

// ============================================================
// PANEL 5 — Flashcards · student · ЛЕКСИКА: КУХНЯ
// ============================================================
const p5cards = [
    { front: "la forchetta", back: "вилка" },
    { front: "la pentola", back: "кастрюля" },
    { front: "la padella", back: "сковорода" },
    { front: "il cucchiaio", back: "ложка" },
    { front: "il coltello", back: "нож" },
    { front: "il piatto", back: "тарелка" },
    { front: "la tazza", back: "чашка" }
];

// ============================================================
// PANEL 6 — Flashcards · paid · ЛЕКСИКА: ВЕЩИ
// ============================================================
const p6cards = [
    { front: "le chiavi", back: "ключи" },
    { front: "la valigia", back: "чемодан" },
    { front: "il telefono", back: "телефон" },
    { front: "l'orologio", back: "часы" },
    { front: "la borsa", back: "сумка" },
    { front: "lo zaino", back: "рюкзак" }
];

// ============================================================
// PANEL 7 — Flashcards · paid · ЛЕКСИКА: ВСЁ ВМЕСТЕ
// ============================================================
const p7cards = [
    { front: "la parete", back: "стена" },
    { front: "la finestra", back: "окно" },
    { front: "il letto", back: "кровать" },
    { front: "la lampada", back: "лампа" },
    { front: "il divano", back: "диван" },
    { front: "la poltrona", back: "кресло" },
    { front: "il tavolo", back: "стол" },
    { front: "l'armadio", back: "шкаф" },
    { front: "la porta", back: "дверь" },
    { front: "la sedia", back: "стул" },
    { front: "lo specchio", back: "зеркало" },
    { front: "la forchetta", back: "вилка" },
    { front: "la pentola", back: "кастрюля" },
    { front: "la padella", back: "сковорода" },
    { front: "il cucchiaio", back: "ложка" },
    { front: "il coltello", back: "нож" },
    { front: "il piatto", back: "тарелка" },
    { front: "la tazza", back: "чашка" },
    { front: "le chiavi", back: "ключи" },
    { front: "la valigia", back: "чемодан" },
    { front: "il telefono", back: "телефон" },
    { front: "l'orologio", back: "часы" },
    { front: "la borsa", back: "сумка" },
    { front: "lo zaino", back: "рюкзак" }
];

// ============================================================
// PANEL 8 — Quiz misto · public
// MC (8) + Match (8) + Scrivi (8) = 24
// ============================================================
function initPanelCas8() {
    const panel = document.getElementById('panel-cas-8');
    if (!panel) return;

    const container = panel.querySelector('#cas-8-cards-container');
    const prevBtn   = panel.querySelector('#cas-8-deck-prev');
    const nextBtn   = panel.querySelector('#cas-8-deck-next');
    const counterEl = panel.querySelector('#cas-8-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Come si dice 'il letto' in russo?", options: ["кровать", "стол", "стул"], answer: "кровать" },
        { question: "Come si dice 'lo specchio' in russo?", options: ["зеркало", "окно", "дверь"], answer: "зеркало" },
        { question: "Come si dice 'la pentola' in russo?", options: ["кастрюля", "сковорода", "тарелка"], answer: "кастрюля" },
        { question: "Come si dice 'l'orologio' in russo?", options: ["часы", "телефон", "ключи"], answer: "часы" },
        { question: "Come si dice 'la poltrona' in russo?", options: ["кресло", "диван", "стул"], answer: "кресло" },
        { question: "Come si dice 'lo zaino' in russo?", options: ["рюкзак", "сумка", "чемодан"], answer: "рюкзак" },
        { question: "Come si dice 'la tazza' in russo?", options: ["чашка", "тарелка", "ложка"], answer: "чашка" },
        { question: "Come si dice 'la lampada' in russo?", options: ["лампа", "стена", "зеркало"], answer: "лампа" }
    ];

    const matchPairs = [
        { left: "la parete", right: "стена" },
        { left: "la finestra", right: "окно" },
        { left: "l'armadio", right: "шкаф" },
        { left: "la forchetta", right: "вилка" },
        { left: "il coltello", right: "нож" },
        { left: "la borsa", right: "сумка" },
        { left: "il divano", right: "диван" },
        { left: "il piatto", right: "тарелка" }
    ];

    const quizData = [
        { id: "cas-001", promptPrefix: "la porta = ", promptSuffix: "", answers: ["дверь"] },
        { id: "cas-002", promptPrefix: "il tavolo = ", promptSuffix: "", answers: ["стол"] },
        { id: "cas-003", promptPrefix: "la valigia = ", promptSuffix: "", answers: ["чемодан"] },
        { id: "cas-004", promptPrefix: "la padella = ", promptSuffix: "", answers: ["сковорода"] },
        { id: "cas-005", promptPrefix: "il cucchiaio = ", promptSuffix: "", answers: ["ложка"] },
        { id: "cas-006", promptPrefix: "il telefono = ", promptSuffix: "", answers: ["телефон"] },
        { id: "cas-007", promptPrefix: "la sedia = ", promptSuffix: "", answers: ["стул"] },
        { id: "cas-008", promptPrefix: "le chiavi = ", promptSuffix: "", answers: ["ключи"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ');
    }

    function buildCard(index) {
        const card = document.createElement('div');
        card.className = 'quiz-card';

        if (index < MC_END) {
            const d = multipleChoiceData[index];
            card.innerHTML = `
                <h1 class="exercise-counter">Esercizio ${index + 1} di ${TOTAL_CARDS}</h1>
                <p class="quiz-question">${d.question}</p>
                <div class="quiz-grid">
                    ${d.options.map(o => `<button class="quiz-btn">${o}</button>`).join('')}
                </div>
                <div class="quiz-feedback"></div>`;
            card.querySelectorAll('.quiz-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    if (card.querySelector('.quiz-btn.correct, .quiz-btn.wrong')) return;
                    const isCorrect = btn.textContent === d.answer;
                    btn.classList.add(isCorrect ? 'correct' : 'wrong');
                    if (!isCorrect) card.querySelector(`.quiz-btn:not(.wrong)`).classList.add('correct');
                    card.querySelector('.quiz-feedback').textContent = isCorrect ? '✓ Giusto!' : `✗ La risposta corretta: ${d.answer}`;
                    card.querySelector('.quiz-feedback').className = `quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`;
                });
            });
        } else if (index < MATCH_END) {
            const pairs = matchPairs.slice();
            const shuffledRight = pairs.map(p => p.right).sort(() => Math.random() - 0.5);
            card.innerHTML = `
                <h1>Esercizio ${index + 1} di ${TOTAL_CARDS}</h1>
                <p class="quiz-question">Collega le parole.</p>
                <div class="match-grid">
                    ${pairs.map((p, i) => `
                        <div class="match-pair">
                            <span class="match-left">${p.left}</span>
                            <select class="match-select">
                                <option value="">…</option>
                                ${shuffledRight.map(r => `<option value="${r}">${r}</option>`).join('')}
                            </select>
                        </div>`).join('')}
                </div>
                <button class="btn btn-primary match-check-btn">Verifica</button>
                <div class="quiz-feedback"></div>`;
            card.querySelector('.match-check-btn').addEventListener('click', () => {
                const selects = card.querySelectorAll('.match-select');
                let allCorrect = true;
                selects.forEach((sel, i) => {
                    const correct = sel.value === pairs[i].right;
                    sel.style.borderColor = correct ? '#16a34a' : '#dc2626';
                    if (!correct) allCorrect = false;
                });
                const fb = card.querySelector('.quiz-feedback');
                fb.textContent = allCorrect ? '✓ Tutto giusto!' : '✗ Ci sono errori, riprova.';
                fb.className = `quiz-feedback ${allCorrect ? 'correct' : 'wrong'}`;
            });
        } else {
            const d = quizData[index - MATCH_END];
            card.innerHTML = `
                <h1>Esercizio ${index + 1} di ${TOTAL_CARDS}</h1>
                <p class="quiz-question">Scrivi la traduzione russa.</p>
                <p class="quiz-prompt">${d.promptPrefix}<span class="quiz-gap-inline"></span>${d.promptSuffix}</p>
                <input type="text" class="quiz-input" placeholder="Scrivi in russo…">
                <button class="btn btn-primary quiz-check-btn">Verifica</button>
                <div class="quiz-feedback"></div>`;
            card.querySelector('.quiz-check-btn').addEventListener('click', () => {
                const input = card.querySelector('.quiz-input');
                const val = normalizeInput(input.value).toLowerCase();
                const correct = d.answers.some(a => normalizeInput(a).toLowerCase() === val);
                const fb = card.querySelector('.quiz-feedback');
                fb.textContent = correct ? '✓ Giusto!' : `✗ La risposta corretta: ${d.answers[0]}`;
                fb.className = `quiz-feedback ${correct ? 'correct' : 'wrong'}`;
                input.style.borderColor = correct ? '#16a34a' : '#dc2626';
            });
        }

        return card;
    }

    const cards = Array.from({ length: TOTAL_CARDS }, (_, i) => buildCard(i));
    cards.forEach((c, i) => { if (i > 0) c.style.display = 'none'; container.appendChild(c); });

    function showCard(idx) {
        cards.forEach((c, i) => c.style.display = i === idx ? '' : 'none');
        currentCard = idx;
        counterEl.textContent = `${idx + 1} / ${TOTAL_CARDS}`;
        prevBtn.disabled = idx === 0;
        nextBtn.textContent = idx === TOTAL_CARDS - 1 ? 'FINE' : 'AVANTI →';
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0) showCard(currentCard - 1); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL_CARDS - 1) showCard(currentCard + 1); });
    showCard(0);
}

// ============================================================
// INIT
// ============================================================
const initializers = {
    'panel-cas-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-cas-01', exercises: p1exercises }),
    'panel-cas-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-cas-02', exercises: p2exercises }),
    'panel-cas-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-cas-03', exercises: p3exercises }),
    'panel-cas-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-cas-04', cards: p4cards }),
    'panel-cas-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-cas-05', cards: p5cards }),
    'panel-cas-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-cas-06', cards: p6cards }),
    'panel-cas-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-cas-07', cards: p7cards }),
    'panel-cas-8': () => initPanelCas8(),
};

initPanelManager({ initializers, enableAccessControl: true });
