import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · ЛЁГКАЯ ОДЕЖДА
// ============================================================
const p1exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la maglietta = {{1}}, il vestito = {{2}}, la gonna = {{3}}",
        words: ["футболка", "платье", "юбка", "рубашка"],
        correctAnswers: { 1: "футболка", 2: "платье", 3: "юбка" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la camicia = {{1}}, i pantaloni = {{2}}, la sciarpa = {{3}}",
        words: ["рубашка", "брюки", "шарф", "юбка"],
        correctAnswers: { 1: "рубашка", 2: "брюки", 3: "шарф" }
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · ВЕРХНЯЯ ОДЕЖДА
// ============================================================
const p2exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la giacca = {{1}}, il maglione = {{2}}, gli stivali = {{3}}",
        words: ["пиджак", "свитер", "ботинки", "шапка"],
        correctAnswers: { 1: "пиджак", 2: "свитер", 3: "ботинки" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il berretto = {{1}}, il cappotto = {{2}}, il giubbotto = {{3}}",
        words: ["шапка", "пальто", "куртка", "пиджак"],
        correctAnswers: { 1: "шапка", 2: "пальто", 3: "куртка" }
    }
];

// ============================================================
// PANEL 3 — Flashcards · public · ЛЕКСИКА: ЛЁГКАЯ ОДЕЖДА
// ============================================================
const p3cards = [
    { front: "la maglietta", back: "футболка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/futbolka.png" },
    { front: "il vestito", back: "платье", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/platye.png" },
    { front: "la gonna", back: "юбка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/юбка.png" },
    { front: "la camicia", back: "рубашка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/rubashka.png" },
    { front: "i pantaloni", back: "брюки", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/БОЮКАИ.png" },
    { front: "la sciarpa", back: "шарф", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/ШАРФ.png" }
];

// ============================================================
// PANEL 4 — Flashcards · student · ЛЕКСИКА: ВЕРХНЯЯ ОДЕЖДА
// ============================================================
const p4cards = [
    { front: "la giacca", back: "пиджак" },
    { front: "il maglione", back: "свитер", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/sviter.png" },
    { front: "gli stivali", back: "ботинки", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/БОТИНКИ.png" },
    { front: "il berretto", back: "шапка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/shapka.png" },
    { front: "il cappotto", back: "пальто", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/пальто.png" },
    { front: "il giubbotto", back: "куртка" }
];

// ============================================================
// PANEL 5 — Quiz misto · public
// MC (4) + Match (4) + Scrivi (4) = 12
// ============================================================
function initPanelAbb5() {
    const panel = document.getElementById('panel-abb-5');
    if (!panel) return;

    const container = panel.querySelector('#abb-5-cards-container');
    const prevBtn   = panel.querySelector('#abb-5-deck-prev');
    const nextBtn   = panel.querySelector('#abb-5-deck-next');
    const counterEl = panel.querySelector('#abb-5-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Come si dice 'la maglietta' in russo?", options: ["футболка", "рубашка", "куртка"], answer: "футболка" },
        { question: "Come si dice 'gli stivali' in russo?", options: ["ботинки", "брюки", "шапка"], answer: "ботинки" },
        { question: "Come si dice 'il cappotto' in russo?", options: ["пальто", "пиджак", "свитер"], answer: "пальто" },
        { question: "Come si dice 'la gonna' in russo?", options: ["юбка", "платье", "шарф"], answer: "юбка" }
    ];

    const matchPairs = [
        { left: "il vestito", right: "платье" },
        { left: "la camicia", right: "рубашка" },
        { left: "il maglione", right: "свитер" },
        { left: "il giubbotto", right: "куртка" }
    ];

    const quizData = [
        { id: "abb-001", promptPrefix: "i pantaloni = ", promptSuffix: "", answers: ["брюки"] },
        { id: "abb-002", promptPrefix: "la sciarpa = ", promptSuffix: "", answers: ["шарф"] },
        { id: "abb-003", promptPrefix: "la giacca = ", promptSuffix: "", answers: ["пиджак"] },
        { id: "abb-004", promptPrefix: "il berretto = ", promptSuffix: "", answers: ["шапка"] }
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
    'panel-abb-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-abb-01', exercises: p1exercises }),
    'panel-abb-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-abb-02', exercises: p2exercises }),
    'panel-abb-3': () => new FlashcardExercise({ rootId: 'ex-flashcards-abb-03', cards: p3cards }),
    'panel-abb-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-abb-04', cards: p4cards }),
    'panel-abb-5': () => initPanelAbb5(),
};

initPanelManager({ initializers, enableAccessControl: true });
