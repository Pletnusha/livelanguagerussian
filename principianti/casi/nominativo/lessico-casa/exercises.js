import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · ОДЕЖДА
// ============================================================
const p1exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la maglietta = {{1}}, il vestito = {{2}}, la gonna = {{3}}, la sciarpa = {{4}}",
        words: ["футболка", "платье", "юбка", "шарф", "ботинки"],
        correctAnswers: { 1: "футболка", 2: "платье", 3: "юбка", 4: "шарф" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "gli stivali = {{1}}, la camicia = {{2}}, il maglione = {{3}}, la giacca = {{4}}",
        words: ["ботинки", "рубашка", "свитер", "пиджак", "брюки"],
        correctAnswers: { 1: "ботинки", 2: "рубашка", 3: "свитер", 4: "пиджак" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "i pantaloni = {{1}}, il berretto = {{2}}, il cappotto = {{3}}, il giubbotto = {{4}}",
        words: ["брюки", "шапка", "пальто", "куртка", "платье"],
        correctAnswers: { 1: "брюки", 2: "шапка", 3: "пальто", 4: "куртка" }
    }
];

// ============================================================
// PANEL 2 — DragDrop · student · ДОМ И ПРЕДМЕТЫ
// ============================================================
const p2exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la parete = {{1}}, la finestra = {{2}}, il letto = {{3}}, la lampada = {{4}}",
        words: ["стена", "окно", "кровать", "лампа", "диван"],
        correctAnswers: { 1: "стена", 2: "окно", 3: "кровать", 4: "лампа" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il divano = {{1}}, la poltrona = {{2}}, il tavolo = {{3}}, l'armadio = {{4}}",
        words: ["диван", "кресло", "стол", "шкаф", "стул"],
        correctAnswers: { 1: "диван", 2: "кресло", 3: "стол", 4: "шкаф" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la porta = {{1}}, la sedia = {{2}}, lo specchio = {{3}}, le chiavi = {{4}}",
        words: ["дверь", "стул", "зеркало", "ключи", "чемодан"],
        correctAnswers: { 1: "дверь", 2: "стул", 3: "зеркало", 4: "ключи" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la valigia = {{1}}, il telefono = {{2}}, l'orologio = {{3}}, la forchetta = {{4}}",
        words: ["чемодан", "телефон", "часы", "вилка", "кастрюля"],
        correctAnswers: { 1: "чемодан", 2: "телефон", 3: "часы", 4: "вилка" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la pentola = {{1}}, la padella = {{2}}, la borsa = {{3}}, lo zaino = {{4}}",
        words: ["кастрюля", "сковорода", "сумка", "рюкзак", "ложка"],
        correctAnswers: { 1: "кастрюля", 2: "сковорода", 3: "сумка", 4: "рюкзак" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il cucchiaio = {{1}}, il coltello = {{2}}, il piatto = {{3}}, la tazza = {{4}}",
        words: ["ложка", "нож", "тарелка", "чашка", "стена"],
        correctAnswers: { 1: "ложка", 2: "нож", 3: "тарелка", 4: "чашка" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid · ГОРОД И ТРАНСПОРТ
// ============================================================
const p3exercises = [
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il mercato = {{1}}, il negozio = {{2}}, la banca = {{3}}, la stazione = {{4}}",
        words: ["рынок", "магазин", "банк", "вокзал", "аптека"],
        correctAnswers: { 1: "рынок", 2: "магазин", 3: "банк", 4: "вокзал" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "la farmacia = {{1}}, la piazza = {{2}}, il parco = {{3}}, la strada = {{4}}",
        words: ["аптека", "площадь", "парк", "улица", "автобус"],
        correctAnswers: { 1: "аптека", 2: "площадь", 3: "парк", 4: "улица" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "l'autobus = {{1}}, il treno = {{2}}, l'aereo = {{3}}, la macchina = {{4}}",
        words: ["автобус", "поезд", "самолёт", "машина", "трамвай"],
        correctAnswers: { 1: "автобус", 2: "поезд", 3: "самолёт", 4: "машина" }
    },
    {
        instruction: "Abbina la parola italiana alla traduzione russa.",
        text: "il tram = {{1}}, i pattini a rotelle = {{2}}, la bicicletta = {{3}}, il monopattino = {{4}}",
        words: ["трамвай", "ролики", "велосипед", "самокат", "поезд"],
        correctAnswers: { 1: "трамвай", 2: "ролики", 3: "велосипед", 4: "самокат" }
    }
];

// ============================================================
// PANEL 4 — Flashcards · public · ЛЕКСИКА: ОДЕЖДА
// ============================================================
const p4cards = [
    { front: "la maglietta", back: "футболка" },
    { front: "il vestito", back: "платье" },
    { front: "la gonna", back: "юбка" },
    { front: "la sciarpa", back: "шарф" },
    { front: "gli stivali", back: "ботинки" },
    { front: "la camicia", back: "рубашка" },
    { front: "il maglione", back: "свитер" },
    { front: "la giacca", back: "пиджак" },
    { front: "i pantaloni", back: "брюки" },
    { front: "il berretto", back: "шапка" },
    { front: "il cappotto", back: "пальто" },
    { front: "il giubbotto", back: "куртка" }
];

// ============================================================
// PANEL 5 — Flashcards · student · ЛЕКСИКА: ДОМ И ПРЕДМЕТЫ
// ============================================================
const p5cards = [
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
    { front: "le chiavi", back: "ключи" },
    { front: "la valigia", back: "чемодан" },
    { front: "il telefono", back: "телефон" },
    { front: "l'orologio", back: "часы" },
    { front: "la forchetta", back: "вилка" },
    { front: "la pentola", back: "кастрюля" },
    { front: "la padella", back: "сковорода" },
    { front: "la borsa", back: "сумка" },
    { front: "lo zaino", back: "рюкзак" },
    { front: "il cucchiaio", back: "ложка" },
    { front: "il coltello", back: "нож" },
    { front: "il piatto", back: "тарелка" },
    { front: "la tazza", back: "чашка" }
];

// ============================================================
// PANEL 6 — Flashcards · paid · ЛЕКСИКА: ГОРОД И ТРАНСПОРТ
// ============================================================
const p6cards = [
    { front: "il mercato", back: "рынок" },
    { front: "il negozio", back: "магазин" },
    { front: "la banca", back: "банк" },
    { front: "la stazione", back: "вокзал" },
    { front: "la farmacia", back: "аптека" },
    { front: "la piazza", back: "площадь" },
    { front: "il parco", back: "парк" },
    { front: "la strada", back: "улица" },
    { front: "l'autobus", back: "автобус" },
    { front: "il treno", back: "поезд" },
    { front: "l'aereo", back: "самолёт" },
    { front: "la macchina", back: "машина" },
    { front: "il tram", back: "трамвай" },
    { front: "i pattini a rotelle", back: "ролики" },
    { front: "la bicicletta", back: "велосипед" },
    { front: "il monopattino", back: "самокат" }
];

// ============================================================
// PANEL 7 — Flashcards · student · ЛЕКСИКА: ЕДА
// ============================================================
const p7cards = [
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
// PANEL 8 — Quiz misto · public
// MC (10) + Match (8) + Scrivi (8) = 26
// ============================================================
function initPanelCasa8() {
    const panel = document.getElementById('panel-casa-8');
    if (!panel) return;

    const container = panel.querySelector('#casa-8-cards-container');
    const prevBtn   = panel.querySelector('#casa-8-deck-prev');
    const nextBtn   = panel.querySelector('#casa-8-deck-next');
    const counterEl = panel.querySelector('#casa-8-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Come si dice 'la maglietta' in russo?", options: ["футболка", "рубашка", "куртка"], answer: "футболка" },
        { question: "Come si dice 'il letto' in russo?", options: ["кровать", "стол", "стул"], answer: "кровать" },
        { question: "Come si dice 'la farmacia' in russo?", options: ["аптека", "банк", "магазин"], answer: "аптека" },
        { question: "Come si dice 'il treno' in russo?", options: ["поезд", "автобус", "самолёт"], answer: "поезд" },
        { question: "Come si dice 'il formaggio' in russo?", options: ["сыр", "хлеб", "молоко"], answer: "сыр" },
        { question: "Come si dice 'la gonna' in russo?", options: ["юбка", "платье", "брюки"], answer: "юбка" },
        { question: "Come si dice 'lo specchio' in russo?", options: ["зеркало", "окно", "дверь"], answer: "зеркало" },
        { question: "Come si dice 'la bicicletta' in russo?", options: ["велосипед", "самокат", "машина"], answer: "велосипед" },
        { question: "Come si dice 'la carota' in russo?", options: ["морковь", "картошка", "лук"], answer: "морковь" },
        { question: "Come si dice 'la pentola' in russo?", options: ["кастрюля", "сковорода", "тарелка"], answer: "кастрюля" }
    ];

    const matchPairs = [
        { left: "il maglione", right: "свитер" },
        { left: "la sedia", right: "стул" },
        { left: "il negozio", right: "магазин" },
        { left: "la macchina", right: "машина" },
        { left: "il pomodoro", right: "помидор" },
        { left: "la borsa", right: "сумка" },
        { left: "il parco", right: "парк" },
        { left: "la mela", right: "яблоко" }
    ];

    const quizData = [
        { id: "casa-001", promptPrefix: "il cappotto = ", promptSuffix: "", answers: ["пальто"] },
        { id: "casa-002", promptPrefix: "la finestra = ", promptSuffix: "", answers: ["окно"] },
        { id: "casa-003", promptPrefix: "l'autobus = ", promptSuffix: "", answers: ["автобус"] },
        { id: "casa-004", promptPrefix: "il pane = ", promptSuffix: "", answers: ["хлеб"] },
        { id: "casa-005", promptPrefix: "le chiavi = ", promptSuffix: "", answers: ["ключи"] },
        { id: "casa-006", promptPrefix: "la piazza = ", promptSuffix: "", answers: ["площадь"] },
        { id: "casa-007", promptPrefix: "il coltello = ", promptSuffix: "", answers: ["нож"] },
        { id: "casa-008", promptPrefix: "la banana = ", promptSuffix: "", answers: ["банан"] }
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
    'panel-casa-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-casa-01', exercises: p1exercises }),
    'panel-casa-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-casa-02', exercises: p2exercises }),
    'panel-casa-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-casa-03', exercises: p3exercises }),
    'panel-casa-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-casa-04', cards: p4cards }),
    'panel-casa-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-casa-05', cards: p5cards }),
    'panel-casa-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-casa-06', cards: p6cards }),
    'panel-casa-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-casa-07', cards: p7cards }),
    'panel-casa-8': () => initPanelCasa8(),
};

initPanelManager({ initializers, enableAccessControl: true });
