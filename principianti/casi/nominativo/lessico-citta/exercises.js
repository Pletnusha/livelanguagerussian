import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · ГОРОД
// ============================================================
const p1exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il mercato = {{1}}, il negozio = {{2}}, la banca = {{3}}, la stazione = {{4}}",
        words: ["рынок", "магазин", "банк", "вокзал", "аптека"],
        correctAnswers: { 1: "рынок", 2: "магазин", 3: "банк", 4: "вокзал" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la farmacia = {{1}}, la piazza = {{2}}, la strada = {{3}}",
        words: ["аптека", "площадь", "улица", "рынок"],
        correctAnswers: { 1: "аптека", 2: "площадь", 3: "улица" }
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · ТРАНСПОРТ
// ============================================================
const p2exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "l'autobus = {{1}}, il treno = {{2}}, l'aereo = {{3}}, la macchina = {{4}}",
        words: ["автобус", "поезд", "самолёт", "машина", "трамвай"],
        correctAnswers: { 1: "автобус", 2: "поезд", 3: "самолёт", 4: "машина" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il tram = {{1}}, la bicicletta = {{2}}, il monopattino = {{3}}",
        words: ["трамвай", "велосипед", "самокат", "автобус"],
        correctAnswers: { 1: "трамвай", 2: "велосипед", 3: "самокат" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid · ВСЁ ВМЕСТЕ
// ============================================================
const p3exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il mercato = {{1}}, il negozio = {{2}}, la banca = {{3}}, la stazione = {{4}}",
        words: ["рынок", "магазин", "банк", "вокзал", "парк"],
        correctAnswers: { 1: "рынок", 2: "магазин", 3: "банк", 4: "вокзал" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la farmacia = {{1}}, la piazza = {{2}}, la strada = {{3}}",
        words: ["аптека", "площадь", "улица", "магазин"],
        correctAnswers: { 1: "аптека", 2: "площадь", 3: "улица" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "l'autobus = {{1}}, il treno = {{2}}, l'aereo = {{3}}, la macchina = {{4}}",
        words: ["автобус", "поезд", "самолёт", "машина", "велосипед"],
        correctAnswers: { 1: "автобус", 2: "поезд", 3: "самолёт", 4: "машина" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il tram = {{1}}, la bicicletta = {{2}}, il monopattino = {{3}}",
        words: ["трамвай", "велосипед", "самокат", "поезд"],
        correctAnswers: { 1: "трамвай", 2: "велосипед", 3: "самокат" }
    }
];

// ============================================================
// PANEL 4 — Flashcards · public · ЛЕКСИКА: МЕСТА
// ============================================================
const p4cards = [
    { front: "il mercato", back: "рынок", frontImg: "/assets/img/principianti/vocaboli/citta/РЫНОК.png" },
    { front: "il negozio", back: "магазин", frontImg: "/assets/img/principianti/vocaboli/citta/МАГАЗИН.png" },
    { front: "la banca", back: "банк", frontImg: "/assets/img/principianti/vocaboli/citta/БАНК.png" },
    { front: "la stazione", back: "вокзал", frontImg: "/assets/img/principianti/vocaboli/citta/ВОКЗАЛ.png" }
];

// ============================================================
// PANEL 5 — Flashcards · student · ЛЕКСИКА: ГОРОД
// ============================================================
const p5cards = [
    { front: "la farmacia", back: "аптека", frontImg: "/assets/img/principianti/vocaboli/citta/АПТЕКА.png" },
    { front: "la piazza", back: "площадь", frontImg: "/assets/img/principianti/vocaboli/citta/ПЛОЩАДЬ.png" },
    { front: "la strada", back: "улица", frontImg: "/assets/img/principianti/vocaboli/citta/УЛИЦА.png" }
];

// ============================================================
// PANEL 6 — Flashcards · student · ЛЕКСИКА: ТРАНСПОРТ
// ============================================================
const p6cards = [
    { front: "l'autobus", back: "автобус", frontImg: "/assets/img/principianti/vocaboli/citta/АВТОБУС.png" },
    { front: "il treno", back: "поезд", frontImg: "/assets/img/principianti/vocaboli/citta/ПОЕЗД.png" },
    { front: "l'aereo", back: "самолёт", frontImg: "/assets/img/principianti/vocaboli/citta/САМОЛЁТ.png" },
    { front: "la macchina", back: "машина", frontImg: "/assets/img/principianti/vocaboli/citta/МАШИНА.png" },
    { front: "il tram", back: "трамвай", frontImg: "/assets/img/principianti/vocaboli/citta/ТРАМВАЙ.png" },
    { front: "la bicicletta", back: "велосипед", frontImg: "/assets/img/principianti/vocaboli/citta/велосипед.png" },
    { front: "il monopattino", back: "самокат", frontImg: "/assets/img/principianti/vocaboli/citta/самокат.png" }
];

// ============================================================
// PANEL 7 — Flashcards · paid · ЛЕКСИКА: ВСЁ ВМЕСТЕ
// ============================================================
const p7cards = [
    { front: "il mercato", back: "рынок", frontImg: "/assets/img/principianti/vocaboli/citta/РЫНОК.png" },
    { front: "il negozio", back: "магазин", frontImg: "/assets/img/principianti/vocaboli/citta/МАГАЗИН.png" },
    { front: "la banca", back: "банк", frontImg: "/assets/img/principianti/vocaboli/citta/БАНК.png" },
    { front: "la stazione", back: "вокзал", frontImg: "/assets/img/principianti/vocaboli/citta/ВОКЗАЛ.png" },
    { front: "la farmacia", back: "аптека", frontImg: "/assets/img/principianti/vocaboli/citta/АПТЕКА.png" },
    { front: "la piazza", back: "площадь", frontImg: "/assets/img/principianti/vocaboli/citta/ПЛОЩАДЬ.png" },
    { front: "la strada", back: "улица", frontImg: "/assets/img/principianti/vocaboli/citta/УЛИЦА.png" },
    { front: "l'autobus", back: "автобус", frontImg: "/assets/img/principianti/vocaboli/citta/АВТОБУС.png" },
    { front: "il treno", back: "поезд", frontImg: "/assets/img/principianti/vocaboli/citta/ПОЕЗД.png" },
    { front: "l'aereo", back: "самолёт", frontImg: "/assets/img/principianti/vocaboli/citta/САМОЛЁТ.png" },
    { front: "la macchina", back: "машина", frontImg: "/assets/img/principianti/vocaboli/citta/МАШИНА.png" },
    { front: "il tram", back: "трамвай", frontImg: "/assets/img/principianti/vocaboli/citta/ТРАМВАЙ.png" },
    { front: "la bicicletta", back: "велосипед", frontImg: "/assets/img/principianti/vocaboli/citta/велосипед.png" },
    { front: "il monopattino", back: "самокат", frontImg: "/assets/img/principianti/vocaboli/citta/самокат.png" }
];

// ============================================================
// PANEL 8 — Quiz misto · public
// MC (6) + Match (4) + Scrivi (4) = 14
// ============================================================
function initPanelCit8() {
    const panel = document.getElementById('panel-cit-8');
    if (!panel) return;

    const container = panel.querySelector('#cit-8-cards-container');
    const prevBtn   = panel.querySelector('#cit-8-deck-prev');
    const nextBtn   = panel.querySelector('#cit-8-deck-next');
    const counterEl = panel.querySelector('#cit-8-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Come si dice 'la farmacia' in russo?", options: ["аптека", "банк", "магазин"], answer: "аптека" },
        { question: "Come si dice 'il treno' in russo?", options: ["поезд", "автобус", "самолёт"], answer: "поезд" },
        { question: "Come si dice 'la bicicletta' in russo?", options: ["велосипед", "самокат", "машина"], answer: "велосипед" },
        { question: "Come si dice 'la piazza' in russo?", options: ["площадь", "улица", "вокзал"], answer: "площадь" },
        { question: "Come si dice 'la stazione' in russo?", options: ["вокзал", "рынок", "банк"], answer: "вокзал" },
        { question: "Come si dice 'il monopattino' in russo?", options: ["самокат", "велосипед", "трамвай"], answer: "самокат" }
    ];

    const matchPairs = [
        { left: "il mercato", right: "рынок" },
        { left: "il negozio", right: "магазин" },
        { left: "la macchina", right: "машина" },
        { left: "il tram", right: "трамвай" }
    ];

    const quizData = [
        { id: "cit-001", promptPrefix: "l'autobus = ", promptSuffix: "", answers: ["автобус"] },
        { id: "cit-002", promptPrefix: "l'aereo = ", promptSuffix: "", answers: ["самолёт"] },
        { id: "cit-003", promptPrefix: "la strada = ", promptSuffix: "", answers: ["улица"] },
        { id: "cit-004", promptPrefix: "la banca = ", promptSuffix: "", answers: ["банк"] }
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
    'panel-cit-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-cit-01', exercises: p1exercises }),
    'panel-cit-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-cit-02', exercises: p2exercises }),
    'panel-cit-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-cit-03', exercises: p3exercises }),
    'panel-cit-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-04', cards: p4cards }),
    'panel-cit-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-05', cards: p5cards }),
    'panel-cit-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-06', cards: p6cards }),
    'panel-cit-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-cit-07', cards: p7cards }),
    'panel-cit-8': () => initPanelCit8(),
};

initPanelManager({ initializers, enableAccessControl: true });
