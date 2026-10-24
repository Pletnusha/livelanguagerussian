import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · ФРУКТЫ И ОВОЩИ
// ============================================================
const p1exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "l'arancia = {{1}}, l'anguria = {{2}}, la pera = {{3}}, la mela = {{4}}",
        words: ["апельсин", "арбуз", "груша", "яблоко", "банан"],
        correctAnswers: { 1: "апельсин", 2: "арбуз", 3: "груша", 4: "яблоко" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la banana = {{1}}, la prugna = {{2}}, il mirtillo = {{3}}, il lampone = {{4}}",
        words: ["банан", "слива", "черника", "малина", "арбуз"],
        correctAnswers: { 1: "банан", 2: "слива", 3: "черника", 4: "малина" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la melanzana = {{1}}, la patata = {{2}}, la cipolla = {{3}}, la carota = {{4}}",
        words: ["баклажан", "картошка", "лук", "морковь", "чеснок"],
        correctAnswers: { 1: "баклажан", 2: "картошка", 3: "лук", 4: "морковь" }
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · ОВОЩИ И ПРОДУКТЫ
// ============================================================
const p2exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "l'aglio = {{1}}, i piselli = {{2}}, il cavolo = {{3}}, il peperone = {{4}}",
        words: ["чеснок", "горошек", "капуста", "перец", "кабачок"],
        correctAnswers: { 1: "чеснок", 2: "горошек", 3: "капуста", 4: "перец" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la zucchina = {{1}}, il pomodoro = {{2}}, il sedano = {{3}}, la carne = {{4}}",
        words: ["кабачок", "помидор", "сельдерей", "мясо", "рыба"],
        correctAnswers: { 1: "кабачок", 2: "помидор", 3: "сельдерей", 4: "мясо" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il pesce = {{1}}, il latte = {{2}}, il formaggio = {{3}}, il pane = {{4}}",
        words: ["рыба", "молоко", "сыр", "хлеб", "яйца"],
        correctAnswers: { 1: "рыба", 2: "молоко", 3: "сыр", 4: "хлеб" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "le uova = {{1}}, il burro = {{2}}, l'olio = {{3}}",
        words: ["яйца", "масло (сливочное)", "масло (растительное)", "молоко"],
        correctAnswers: { 1: "яйца", 2: "масло (сливочное)", 3: "масло (растительное)" }
    }
];

// ============================================================
// PANEL 3 — Flashcards · public · ЛЕКСИКА: ВСЯ ЕДА
// ============================================================
const p3cards = [
    { front: "l'arancia", back: "апельсин" },
    { front: "l'anguria", back: "арбуз" },
    { front: "la melanzana", back: "баклажан" },
    { front: "la pera", back: "груша" },
    { front: "la patata", back: "картошка" },
    { front: "la cipolla", back: "лук" },
    { front: "la carota", back: "морковь" },
    { front: "la mela", back: "яблоко" },
    { front: "la carne", back: "мясо" },
    { front: "il pesce", back: "рыба" },
    { front: "la prugna", back: "слива" },
    { front: "il mirtillo", back: "черника" },
    { front: "l'aglio", back: "чеснок" },
    { front: "la banana", back: "банан" },
    { front: "i piselli", back: "горошек" },
    { front: "il cavolo", back: "капуста" },
    { front: "il latte", back: "молоко" },
    { front: "il peperone", back: "перец" },
    { front: "la zucchina", back: "кабачок" },
    { front: "il pomodoro", back: "помидор" },
    { front: "il sedano", back: "сельдерей" },
    { front: "il formaggio", back: "сыр" },
    { front: "il pane", back: "хлеб" },
    { front: "le uova", back: "яйца" },
    { front: "il lampone", back: "малина" },
    { front: "il burro", back: "масло (сливочное)" },
    { front: "l'olio", back: "масло (растительное)" }
];

// ============================================================
// PANEL 4 — Quiz misto · student
// MC (6) + Match (8) + Scrivi (6) = 20
// ============================================================
function initPanelCib4() {
    const panel = document.getElementById('panel-cib-4');
    if (!panel) return;

    const container = panel.querySelector('#cib-4-cards-container');
    const prevBtn   = panel.querySelector('#cib-4-deck-prev');
    const nextBtn   = panel.querySelector('#cib-4-deck-next');
    const counterEl = panel.querySelector('#cib-4-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Come si dice 'l'arancia' in russo?", options: ["апельсин", "банан", "яблоко"], answer: "апельсин" },
        { question: "Come si dice 'la carota' in russo?", options: ["морковь", "картошка", "лук"], answer: "морковь" },
        { question: "Come si dice 'il formaggio' in russo?", options: ["сыр", "хлеб", "молоко"], answer: "сыр" },
        { question: "Come si dice 'il pesce' in russo?", options: ["рыба", "мясо", "сыр"], answer: "рыба" },
        { question: "Come si dice 'il pomodoro' in russo?", options: ["помидор", "перец", "баклажан"], answer: "помидор" },
        { question: "Come si dice 'l'anguria' in russo?", options: ["арбуз", "груша", "слива"], answer: "арбуз" }
    ];

    const matchPairs = [
        { left: "la mela", right: "яблоко" },
        { left: "la cipolla", right: "лук" },
        { left: "la pera", right: "груша" },
        { left: "la carne", right: "мясо" },
        { left: "il pane", right: "хлеб" },
        { left: "il cavolo", right: "капуста" },
        { left: "il latte", right: "молоко" },
        { left: "la prugna", right: "слива" }
    ];

    const quizData = [
        { id: "cib-001", promptPrefix: "la patata = ", promptSuffix: "", answers: ["картошка"] },
        { id: "cib-002", promptPrefix: "la banana = ", promptSuffix: "", answers: ["банан"] },
        { id: "cib-003", promptPrefix: "l'aglio = ", promptSuffix: "", answers: ["чеснок"] },
        { id: "cib-004", promptPrefix: "le uova = ", promptSuffix: "", answers: ["яйца"] },
        { id: "cib-005", promptPrefix: "il burro = ", promptSuffix: "", answers: ["масло (сливочное)", "масло"] },
        { id: "cib-006", promptPrefix: "la zucchina = ", promptSuffix: "", answers: ["кабачок"] }
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
    'panel-cib-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-cib-01', exercises: p1exercises }),
    'panel-cib-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-cib-02', exercises: p2exercises }),
    'panel-cib-3': () => new FlashcardExercise({ rootId: 'ex-flashcards-cib-03', cards: p3cards }),
    'panel-cib-4': () => initPanelCib4(),
};

initPanelManager({ initializers, enableAccessControl: true });
