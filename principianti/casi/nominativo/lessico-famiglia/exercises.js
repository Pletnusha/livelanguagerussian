import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · СЕМЬЯ: ЖЕНСКИЙ РОД
// ============================================================
const p1exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "mamma = {{1}}, sorella = {{2}}, nonna = {{3}}",
        words: ["мама", "сестра", "бабушка", "тётя"],
        correctAnswers: { 1: "мама", 2: "сестра", 3: "бабушка" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "zia = {{1}}, amica = {{2}}, ragazza = {{3}}",
        words: ["тётя", "подруга", "девушка", "мама"],
        correctAnswers: { 1: "тётя", 2: "подруга", 3: "девушка" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "moglie = {{1}}, vicina = {{2}}, figlia = {{3}}, madre = {{4}}",
        words: ["жена", "соседка", "дочь", "мать", "сестра"],
        correctAnswers: { 1: "жена", 2: "соседка", 3: "дочь", 4: "мать" }
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · СЕМЬЯ: МУЖСКОЙ РОД
// ============================================================
const p2exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "papà = {{1}}, nonno = {{2}}, fratello = {{3}}",
        words: ["папа", "дедушка", "брат", "дядя"],
        correctAnswers: { 1: "папа", 2: "дедушка", 3: "брат" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "zio = {{1}}, amico = {{2}}, marito = {{3}}",
        words: ["дядя", "друг", "муж", "сосед"],
        correctAnswers: { 1: "дядя", 2: "друг", 3: "муж" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "vicino = {{1}}, padre = {{2}}, figlio = {{3}}",
        words: ["сосед", "отец", "сын", "брат"],
        correctAnswers: { 1: "сосед", 2: "отец", 3: "сын" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid · ВСЯ СЕМЬЯ
// ============================================================
const p3exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "madre = {{1}}, padre = {{2}}, figlia = {{3}}, figlio = {{4}}",
        words: ["мать", "отец", "дочь", "сын", "брат"],
        correctAnswers: { 1: "мать", 2: "отец", 3: "дочь", 4: "сын" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "nonna = {{1}}, nonno = {{2}}, zia = {{3}}, zio = {{4}}",
        words: ["бабушка", "дедушка", "тётя", "дядя", "мама"],
        correctAnswers: { 1: "бабушка", 2: "дедушка", 3: "тётя", 4: "дядя" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "moglie = {{1}}, marito = {{2}}, amica = {{3}}, amico = {{4}}",
        words: ["жена", "муж", "подруга", "друг", "сосед"],
        correctAnswers: { 1: "жена", 2: "муж", 3: "подруга", 4: "друг" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "gatta = {{1}}, gatto = {{2}}, cane = {{3}}",
        words: ["кошка", "кот", "собака", "мама"],
        correctAnswers: { 1: "кошка", 2: "кот", 3: "собака" }
    }
];

// ============================================================
// PANEL 4 — Flashcards · public · ЛЕКСИКА: ЖЕНСКИЙ РОД
// ============================================================
const p4cards = [
    { front: "mamma", back: "мама" },
    { front: "sorella", back: "сестра" },
    { front: "amica", back: "подруга" },
    { front: "ragazza", back: "девушка" },
    { front: "nonna", back: "бабушка" },
    { front: "zia", back: "тётя" },
    { front: "moglie", back: "жена" },
    { front: "vicina", back: "соседка" },
    { front: "figlia", back: "дочь" },
    { front: "madre", back: "мать" }
];

// ============================================================
// PANEL 5 — Flashcards · student · ЛЕКСИКА: МУЖСКОЙ РОД
// ============================================================
const p5cards = [
    { front: "papà", back: "папа" },
    { front: "nonno", back: "дедушка" },
    { front: "fratello", back: "брат" },
    { front: "zio", back: "дядя" },
    { front: "amico", back: "друг" },
    { front: "marito", back: "муж" },
    { front: "vicino", back: "сосед" },
    { front: "padre", back: "отец" },
    { front: "figlio", back: "сын" }
];

// ============================================================
// PANEL 6 — Flashcards · paid · ЛЕКСИКА: ЖИВОТНЫЕ
// ============================================================
const p6cards = [
    { front: "gatta", back: "кошка" },
    { front: "gatto", back: "кот" },
    { front: "cane", back: "собака" }
];

// ============================================================
// PANEL 7 — Quiz misto · public
// MC (8) + Match (8) + Scrivi (6) = 22
// ============================================================
function initPanelFam7() {
    const panel = document.getElementById('panel-fam-7');
    if (!panel) return;

    const container = panel.querySelector('#fam-7-cards-container');
    const prevBtn   = panel.querySelector('#fam-7-deck-prev');
    const nextBtn   = panel.querySelector('#fam-7-deck-next');
    const counterEl = panel.querySelector('#fam-7-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Come si dice 'mamma' in russo?", options: ["мама", "мать", "бабушка"], answer: "мама" },
        { question: "Come si dice 'fratello' in russo?", options: ["брат", "друг", "сын"], answer: "брат" },
        { question: "Come si dice 'moglie' in russo?", options: ["жена", "девушка", "подруга"], answer: "жена" },
        { question: "Come si dice 'nonno' in russo?", options: ["дедушка", "дядя", "отец"], answer: "дедушка" },
        { question: "Come si dice 'figlia' in russo?", options: ["дочь", "мать", "сестра"], answer: "дочь" },
        { question: "Come si dice 'vicino' in russo?", options: ["сосед", "друг", "муж"], answer: "сосед" },
        { question: "Come si dice 'zia' in russo?", options: ["тётя", "бабушка", "соседка"], answer: "тётя" },
        { question: "Come si dice 'cane' in russo?", options: ["собака", "кошка", "кот"], answer: "собака" }
    ];

    const matchPairs = [
        { left: "sorella", right: "сестра" },
        { left: "papà", right: "папа" },
        { left: "nonna", right: "бабушка" },
        { left: "marito", right: "муж" },
        { left: "amico", right: "друг" },
        { left: "ragazza", right: "девушка" },
        { left: "zio", right: "дядя" },
        { left: "gatto", right: "кот" }
    ];

    const quizData = [
        { id: "fam-001", promptPrefix: "mamma = ", promptSuffix: "", answers: ["мама"] },
        { id: "fam-002", promptPrefix: "padre = ", promptSuffix: "", answers: ["отец"] },
        { id: "fam-003", promptPrefix: "figlio = ", promptSuffix: "", answers: ["сын"] },
        { id: "fam-004", promptPrefix: "amica = ", promptSuffix: "", answers: ["подруга"] },
        { id: "fam-005", promptPrefix: "madre = ", promptSuffix: "", answers: ["мать"] },
        { id: "fam-006", promptPrefix: "gatta = ", promptSuffix: "", answers: ["кошка"] }
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

    function buildCard(index) {
        const card = document.createElement('div');
        card.className = 'quiz-card';

        if (index < MC_END) {
            const d = multipleChoiceData[index];
            card.innerHTML = `
                <h1 class="exercise-counter">Esercizio ${index + 1} di ${TOTAL_CARDS}</h1>
                <p class="quiz-question">${d.question}</p>
                <div class="quiz-options">
                    ${d.options.map(o => `<button class="quiz-option">${o}</button>`).join('')}
                </div>
                <div class="quiz-feedback"></div>`;
            card.querySelectorAll('.quiz-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    if (card.querySelector('.quiz-option.correct, .quiz-option.wrong')) return;
                    const isCorrect = btn.textContent === d.answer;
                    btn.classList.add(isCorrect ? 'correct' : 'wrong');
                    if (!isCorrect) card.querySelector(`.quiz-option:not(.wrong)`).classList.add('correct');
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
    'panel-fam-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-fam-01', exercises: p1exercises }),
    'panel-fam-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-fam-02', exercises: p2exercises }),
    'panel-fam-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-fam-03', exercises: p3exercises }),
    'panel-fam-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-fam-04', cards: p4cards }),
    'panel-fam-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-fam-05', cards: p5cards }),
    'panel-fam-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-fam-06', cards: p6cards }),
    'panel-fam-7': () => initPanelFam7(),
};

initPanelManager({ initializers, enableAccessControl: true });
