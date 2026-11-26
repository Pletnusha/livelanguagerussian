import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · ЛЁГКАЯ ОДЕЖДА
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
        text: "la camicia = {{1}}, i pantaloni = {{2}}, la giacca = {{3}}",
        words: ["рубашка", "брюки", "пиджак", "юбка"],
        correctAnswers: { 1: "рубашка", 2: "брюки", 3: "пиджак" }
    }
];

// ============================================================
// PANEL 2 — DragDrop · ОБУВЬ
// ============================================================
const p2exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "gli stivali = {{1}}, le scarpe = {{2}}, le sneakers = {{3}}",
        words: ["ботинки", "туфли", "кроссовки", "кеды"],
        correctAnswers: { 1: "ботинки", 2: "туфли", 3: "кроссовки" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "le scarpe da ginnastica = {{1}}, gli stivali alti = {{2}}, le scarpe = {{3}}",
        words: ["кеды", "сапоги", "туфли", "ботинки"],
        correctAnswers: { 1: "кеды", 2: "сапоги", 3: "туфли" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · ТЁПЛАЯ ОДЕЖДА
// ============================================================
const p3exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la sciarpa = {{1}}, il berretto = {{2}}, il maglione = {{3}}",
        words: ["шарф", "шапка", "свитер", "пуховик"],
        correctAnswers: { 1: "шарф", 2: "шапка", 3: "свитер" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il piumino = {{1}}, il montone = {{2}}, la sciarpa = {{3}}",
        words: ["пуховик", "дублёнка", "шарф", "свитер"],
        correctAnswers: { 1: "пуховик", 2: "дублёнка", 3: "шарф" }
    }
];

// ============================================================
// PANEL 4 — DragDrop · ВЕРХНЯЯ ОДЕЖДА
// ============================================================
const p4exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il cappotto = {{1}}, il giubbotto = {{2}}, l'impermeabile = {{3}}",
        words: ["пальто", "куртка", "плащ", "дублёнка"],
        correctAnswers: { 1: "пальто", 2: "куртка", 3: "плащ" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il montone = {{1}}, il piumino = {{2}}, il cappotto = {{3}}",
        words: ["дублёнка", "пуховик", "пальто", "куртка"],
        correctAnswers: { 1: "дублёнка", 2: "пуховик", 3: "пальто" }
    }
];

// ============================================================
// PANEL 5 — Flashcards · ЛЁГКАЯ ОДЕЖДА
// ============================================================
const p5cards = [
    { front: "la maglietta", back: "футболка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/futbolka.png" },
    { front: "il vestito", back: "платье", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/platye.png" },
    { front: "la gonna", back: "юбка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/юбка.png" },
    { front: "la camicia", back: "рубашка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/rubashka.png" },
    { front: "i pantaloni", back: "брюки", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/БРЮКИ.png" },
    { front: "la giacca", back: "пиджак", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/ПИДЖАК.png" }
];

// ============================================================
// PANEL 6 — Flashcards · ОБУВЬ
// ============================================================
const p6cards = [
    { front: "gli stivali", back: "ботинки", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/БОТИНКИ.png" },
    { front: "le scarpe", back: "туфли", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/tufli.png" },
    { front: "le sneakers", back: "кроссовки", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/krossovki.png" },
    { front: "le scarpe da ginnastica", back: "кеды", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/kedy.png" },
    { front: "gli stivali alti", back: "сапоги", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/sapogi.png" }
];

// ============================================================
// PANEL 7 — Flashcards · ТЁПЛАЯ ОДЕЖДА
// ============================================================
const p7cards = [
    { front: "la sciarpa", back: "шарф", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/ШАРФ.png" },
    { front: "il berretto", back: "шапка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/shapka.png" },
    { front: "il maglione", back: "свитер", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/sviter.png" },
    { front: "il piumino", back: "пуховик", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/pukhovik.png" },
    { front: "il montone", back: "дублёнка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/dublyonka.png" }
];

// ============================================================
// PANEL 8 — Flashcards · ВЕРХНЯЯ ОДЕЖДА
// ============================================================
const p8cards = [
    { front: "il cappotto", back: "пальто", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/пальто.png" },
    { front: "il giubbotto", back: "куртка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/куртка.png" },
    { front: "l'impermeabile", back: "плащ", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/plashch.png" },
    { front: "il montone", back: "дублёнка", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/dublyonka.png" },
    { front: "il piumino", back: "пуховик", frontImg: "/assets/img/principianti/vocaboli/abbigliamento/pukhovik.png" }
];

// ============================================================
// PANEL 9 — Quiz misto
// MC (5) + Match (5) + Scrivi (5) = 15
// ============================================================
function initPanelAbb9() {
    const panel = document.getElementById('panel-abb-9');
    if (!panel) return;

    const container = panel.querySelector('#abb-9-cards-container');
    const prevBtn   = panel.querySelector('#abb-9-deck-prev');
    const nextBtn   = panel.querySelector('#abb-9-deck-next');
    const counterEl = panel.querySelector('#abb-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Come si dice 'la maglietta' in russo?", options: ["футболка", "рубашка", "куртка"], answer: "футболка" },
        { question: "Come si dice 'gli stivali alti' in russo?", options: ["сапоги", "ботинки", "кеды"], answer: "сапоги" },
        { question: "Come si dice 'il cappotto' in russo?", options: ["пальто", "пиджак", "свитер"], answer: "пальто" },
        { question: "Come si dice 'il piumino' in russo?", options: ["пуховик", "плащ", "дублёнка"], answer: "пуховик" },
        { question: "Come si dice 'le scarpe da ginnastica' in russo?", options: ["кеды", "кроссовки", "сапоги"], answer: "кеды" }
    ];

    const matchPairs = [
        { left: "il vestito", right: "платье" },
        { left: "la sciarpa", right: "шарф" },
        { left: "il maglione", right: "свитер" },
        { left: "il giubbotto", right: "куртка" },
        { left: "l'impermeabile", right: "плащ" }
    ];

    const quizData = [
        { id: "abb-001", promptPrefix: "i pantaloni = ", promptSuffix: "", answers: ["брюки"] },
        { id: "abb-002", promptPrefix: "il berretto = ", promptSuffix: "", answers: ["шапка"] },
        { id: "abb-003", promptPrefix: "la giacca = ", promptSuffix: "", answers: ["пиджак"] },
        { id: "abb-004", promptPrefix: "il montone = ", promptSuffix: "", answers: ["дублёнка"] },
        { id: "abb-005", promptPrefix: "le sneakers = ", promptSuffix: "", answers: ["кроссовки"] }
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
    'panel-abb-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-abb-03', exercises: p3exercises }),
    'panel-abb-4': () => new DragDropExercise({ rootId: 'ex-dragdrop-abb-04', exercises: p4exercises }),
    'panel-abb-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-abb-05', cards: p5cards }),
    'panel-abb-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-abb-06', cards: p6cards }),
    'panel-abb-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-abb-07', cards: p7cards }),
    'panel-abb-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-abb-08', cards: p8cards }),
    'panel-abb-9': () => initPanelAbb9(),
};

initPanelManager({ initializers, enableAccessControl: true });
