import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import GapTextExercise from '/assets/js/engines/GapTextExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public
// Базовая лексика — Привычки Жени
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильное слово.",
        text: "Женя любит хорошо ___.",
        words: ["одеваться", "готовить"],
        correctAnswers: { 1: "одеваться" },
        explanation: "Одеваться — vestirsi. Женя любит хорошо одеваться."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Ему нравится ездить на ___ в Милан.",
        words: ["шоппинг", "работу"],
        correctAnswers: { 1: "шоппинг" },
        explanation: "Шоппинг — shopping. Ездить на шоппинг = andare a fare shopping."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Женя работает ___ директором.",
        words: ["креативным", "генеральным"],
        correctAnswers: { 1: "креативным" },
        explanation: "Креативный директор — direttore creativo (in un'agenzia pubblicitaria)."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он работает в рекламном ___.",
        words: ["агентстве", "магазине"],
        correctAnswers: { 1: "агентстве" },
        explanation: "Рекламное агентство — agenzia pubblicitaria."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Женя любит слушать музыку на ___.",
        words: ["виниле", "телефоне"],
        correctAnswers: { 1: "виниле" },
        explanation: "Винил — vinile. Слушать музыку на виниле = ascoltare musica su vinile."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "У него дома большая ___.",
        words: ["библиотека", "кухня"],
        correctAnswers: { 1: "библиотека" },
        explanation: "Библиотека — biblioteca. Женя много читает, у него большая библиотека."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Жене нравится заниматься ___ и плаваньем.",
        words: ["боксом", "теннисом"],
        correctAnswers: { 1: "боксом" },
        explanation: "Бокс — pugilato / boxe. Заниматься боксом = praticare il pugilato."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "По утрам он ходит на ___ в кафе.",
        words: ["завтрак", "обед"],
        correctAnswers: { 1: "завтрак" },
        explanation: "Завтрак — colazione. Ходить на завтрак = andare a fare colazione."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он всегда заказывает ___ и кофе с молоком.",
        words: ["сырники", "блинчики"],
        correctAnswers: { 1: "сырники" },
        explanation: "Сырники — frittelle di ricotta. Его любимый завтрак."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он ненавидит писать ___ в мессенджерах.",
        words: ["сообщения", "письма"],
        correctAnswers: { 1: "сообщения" },
        explanation: "Сообщения — messaggi. Писать сообщения = scrivere messaggi."
    }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Лексика привычек RU → IT
// ============================================================
const p5cards = [
    { front: "одеваться", back: "vestirsi", explanation: "Хорошо одеваться — vestirsi bene" },
    { front: "шоппинг", back: "shopping", explanation: "Ездить на шоппинг — andare a fare shopping" },
    { front: "зарабатывать", back: "guadagnare", explanation: "Хорошо зарабатывать — guadagnare bene" },
    { front: "рекламное агентство", back: "agenzia pubblicitaria" },
    { front: "креативный директор", back: "direttore creativo" },
    { front: "бумажные книги", back: "libri cartacei", explanation: "Бумажный = di carta" },
    { front: "библиотека", back: "biblioteca" },
    { front: "винил", back: "vinile" },
    { front: "бокс", back: "pugilato / boxe" },
    { front: "плаванье", back: "nuoto" },
    { front: "мессенджер", back: "app di messaggistica" },
    { front: "сырники", back: "frittelle di ricotta" }
];

// ============================================================
// PANEL 6 — GapText · paid
// Текст «Привычки Жени» — 12 пропусков
// ============================================================
const p6paragraphs = [
    "Женя [[любит::ama]] хорошо {{1}}. Ему [[нравится::gli piace]] ездить на {{2}} в Милан или Лондон. Женя хорошо {{3}}, он работает {{4}} директором в {{5}} [[агентстве::agenzia]].",
    "Женя любит читать книги и читает много. Он любит читать {{6}} книги, поэтому у него дома большая {{7}}.",
    "Женя любит слушать музыку на {{8}}. Жене нравится заниматься {{9}} и {{10}}.",
    "Он [[ненавидит::odia]] ездить на {{11}} и писать {{12}} в мессенджерах."
];
const p6gaps = {
    1:  { answers: ["одеваться"] },
    2:  { answers: ["шоппинг"] },
    3:  { answers: ["зарабатывает"] },
    4:  { answers: ["креативным"] },
    5:  { answers: ["рекламном"] },
    6:  { answers: ["бумажные"] },
    7:  { answers: ["библиотека"] },
    8:  { answers: ["виниле"] },
    9:  { answers: ["боксом"] },
    10: { answers: ["плаваньем"] },
    11: { answers: ["метро"] },
    12: { answers: ["сообщения"] }
};

// ============================================================
// PANEL 2 — DragDrop · public
// Лексика «Ужасный день» — с пояснениями
// ============================================================
const p2exercises = [
    {
        instruction: "Выбери правильное слово.",
        text: "Женя хотел заказать ___.",
        words: ["сырники", "блинчики"],
        correctAnswers: { 1: "сырники" },
        explanation: "Сырники — его обычный завтрак, но в тот день их не было."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Их не было, и он взял ___ с творогом.",
        words: ["блинчики", "сырники"],
        correctAnswers: { 1: "блинчики" },
        explanation: "Блинчики с творогом — crêpes con ricotta. Вместо сырников."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он хочет ___ в Лондон.",
        words: ["слетать", "ехать"],
        correctAnswers: { 1: "слетать" },
        explanation: "Слетать — volare (andata e ritorno). Быстрая поездка на самолёте."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он хочет обновить свой ___.",
        words: ["гардероб", "телефон"],
        correctAnswers: { 1: "гардероб" },
        explanation: "Гардероб — guardaroba. Обновить гардероб = rinnovare il guardaroba."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Ему нужно ___ встречу с заказчиками.",
        words: ["перенести", "отменить"],
        correctAnswers: { 1: "перенести" },
        explanation: "Перенести встречу — spostare un incontro (non cancellare, spostare)."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Женя хотел ___, но его попросили написать.",
        words: ["позвонить", "написать"],
        correctAnswers: { 1: "позвонить" },
        explanation: "Позвонить — telefonare. Но его попросили написать в whatsapp."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Зал для ___ и бассейн были закрыты.",
        words: ["бокса", "тенниса"],
        correctAnswers: { 1: "бокса" },
        explanation: "Зал для бокса — palestra di pugilato."
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он хотел послушать музыку, но ___ сломался.",
        words: ["проигрыватель", "телевизор"],
        correctAnswers: { 1: "проигрыватель" },
        explanation: "Проигрыватель — giradischi. Сломаться = rompersi."
    }
];

// ============================================================
// PANEL 7 — Flashcard · student
// Лексика «Ужасный день» RU → IT
// ============================================================
const p7cards = [
    { front: "позавтракать", back: "fare colazione", explanation: "Пришёл позавтракать в кафе" },
    { front: "блинчики с творогом", back: "crêpes con ricotta" },
    { front: "слетать", back: "volare (andata e ritorno)", explanation: "Слетать в Лондон — поехать и вернуться" },
    { front: "обновить гардероб", back: "rinnovare il guardaroba" },
    { front: "перенести встречу", back: "spostare un incontro" },
    { front: "заказчик", back: "cliente / committente" },
    { front: "обрадоваться", back: "rallegrarsi", explanation: "Женя обрадовался — si è rallegrato" },
    { front: "договориться", back: "mettersi d'accordo" },
    { front: "боксировать", back: "fare pugilato" },
    { front: "поплавать", back: "fare una nuotata" },
    { front: "бассейн", back: "piscina" },
    { front: "проигрыватель", back: "giradischi" }
];

// ============================================================
// PANEL 8 — GapText · paid
// Текст «Ужасный день» — 13 пропусков
// ============================================================
const p8paragraphs = [
    "Всё [[пошло не так::è andato storto]] с утра. Женя пришёл {{1}} в кафе, он хотел заказать {{2}}, но их не было и он взял себе {{3}} с [[творогом::ricotta]].",
    "В выходные он хочет {{4}} в Лондон, потому что хочет {{5}} свой [[гардероб::guardaroba]]. Для этого ему нужно {{6}} встречу с {{7}}. Женя хотел {{8}}, но его попросили написать в whatsapp.",
    "{{9}} не понял, Женя {{10}} и {{11}} о новой встрече. Он хотел пойти {{12}} или поплавать, но зал для бокса и {{13}} были закрыты. Он вернулся домой и хотел послушать музыку, но проигрыватель [[сломался::si è rotto]]."
];
const p8gaps = {
    1:  { answers: ["позавтракать"] },
    2:  { answers: ["сырники"] },
    3:  { answers: ["блинчики"] },
    4:  { answers: ["слетать"] },
    5:  { answers: ["обновить"] },
    6:  { answers: ["перенести"] },
    7:  { answers: ["заказчиками"] },
    8:  { answers: ["позвонить"] },
    9:  { answers: ["Заказчик"] },
    10: { answers: ["обрадовался"] },
    11: { answers: ["договорился"] },
    12: { answers: ["боксировать"] },
    13: { answers: ["бассейн"] }
};

// ============================================================
// PANEL 3 — DragDrop · paid
// Контекстная лексика — оба текста, без подсказок
// ============================================================
const p3exercises = [
    {
        instruction: "Выбери правильное слово.",
        text: "Женя хорошо ___, он — креативный директор.",
        words: ["зарабатывает", "работает"],
        correctAnswers: { 1: "зарабатывает" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он говорит, что звук на виниле более ___.",
        words: ["живой", "громкий"],
        correctAnswers: { 1: "живой" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Ему нужно ___ встречу с заказчиками.",
        words: ["перенести", "отменить"],
        correctAnswers: { 1: "перенести" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Заказчик не понял, Женя ___ и договорился о новой встрече.",
        words: ["обрадовался", "расстроился"],
        correctAnswers: { 1: "обрадовался" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Зал для бокса и ___ были закрыты.",
        words: ["бассейн", "библиотека"],
        correctAnswers: { 1: "бассейн" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он хотел послушать музыку, но ___ сломался.",
        words: ["проигрыватель", "компьютер"],
        correctAnswers: { 1: "проигрыватель" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Их не было, и он взял ___ с творогом.",
        words: ["блинчики", "сырники"],
        correctAnswers: { 1: "блинчики" }
    },
    {
        instruction: "Выбери правильное слово.",
        text: "Он хочет ___ свой гардероб в Лондоне.",
        words: ["обновить", "купить"],
        correctAnswers: { 1: "обновить" }
    }
];

// ============================================================
// PANEL 9 — Flashcard · student
// Понимание текста — вопросы о Жене
// ============================================================
const p9cards = [
    { front: "Где работает Женя?", back: "Креативным директором в рекламном агентстве" },
    { front: "Женя любит электронные книги?", back: "Нет! Он любит бумажные книги." },
    { front: "Женя любит ездить на метро?", back: "Нет! Он ненавидит ездить на метро." },
    { front: "Что Женя заказывает на завтрак?", back: "Сырники и кофе с молоком" },
    { front: "Куда Женя хочет слетать?", back: "В Лондон — обновить гардероб" },
    { front: "Почему день был ужасный?", back: "Нет сырников, зал и бассейн закрыты, проигрыватель сломался" },
    { front: "Что сломалось дома?", back: "Проигрыватель (giradischi)" },
    { front: "Женя любит писать в мессенджерах?", back: "Нет! Он ненавидит писать в мессенджерах." },
    { front: "Какую музыку слушает Женя?", back: "Музыку на виниле — звук более живой" },
    { front: "Каким спортом занимается Женя?", back: "Боксом и плаваньем" }
];

// ============================================================
// PANEL 10 — GapText · paid
// Пересказ текста — привычки Жени
// ============================================================
const p10paragraphs = [
    "Женя — {{1}} директор в рекламном {{2}}. Он хорошо {{3}} и любит хорошо {{4}}. В свободное время он любит {{5}} книги и слушать музыку на {{6}}.",
    "Также ему нравится заниматься {{7}} и {{8}}. По утрам он ходит в кафе и {{9}} сырники и кофе с {{10}}."
];
const p10gaps = {
    1:  { answers: ["креативный"] },
    2:  { answers: ["агентстве"] },
    3:  { answers: ["зарабатывает"] },
    4:  { answers: ["одеваться"] },
    5:  { answers: ["читать"] },
    6:  { answers: ["виниле"] },
    7:  { answers: ["боксом"] },
    8:  { answers: ["плаваньем"] },
    9:  { answers: ["заказывает"] },
    10: { answers: ["молоком"] }
};

// ============================================================
// PANEL 4 — Quiz misto (MC + match + write) · public
// ============================================================
function initPanelVq04() {
    const panel = document.getElementById('panel-vq-04');
    if (!panel) return;

    const container = panel.querySelector('#vq-04-cards-container');
    const prevBtn   = panel.querySelector('#vq-04-deck-prev');
    const nextBtn   = panel.querySelector('#vq-04-deck-next');
    const counterEl = panel.querySelector('#vq-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Где работает Женя?", options: ["в рекламном агентстве", "в банке", "в магазине"], answer: "в рекламном агентстве" },
        { question: "Что Женя любит слушать?", options: ["музыку на виниле", "радио", "подкасты"], answer: "музыку на виниле" },
        { question: "Что Женя заказывает на завтрак?", options: ["сырники", "блинчики", "кашу"], answer: "сырники" },
        { question: "Куда Женя хочет слетать?", options: ["в Лондон", "в Милан", "в Париж"], answer: "в Лондон" },
        { question: "Что сломалось у Жени дома?", options: ["проигрыватель", "телевизор", "компьютер"], answer: "проигрыватель" }
    ];
    const matchPairs = [
        { left: "одеваться", right: "vestirsi" },
        { left: "шоппинг", right: "shopping" },
        { left: "зарабатывать", right: "guadagnare" },
        { left: "проигрыватель", right: "giradischi" },
        { left: "бассейн", right: "piscina" },
        { left: "заказчик", right: "cliente" }
    ];
    const quizData = [
        { id: "q1", promptPrefix: "По утрам Женя ходит на ", promptSuffix: " в кафе.", answers: ["завтрак"] },
        { id: "q2", promptPrefix: "У Жени дома большая ", promptSuffix: ".", answers: ["библиотека"] },
        { id: "q3", promptPrefix: "Женя хочет обновить свой ", promptSuffix: ".", answers: ["гардероб"] },
        { id: "q4", promptPrefix: "Ему нужно ", promptSuffix: " встречу с заказчиками.", answers: ["перенести"] },
        { id: "q5", promptPrefix: "Зал для бокса и ", promptSuffix: " были закрыты.", answers: ["бассейн"] }
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
        if (index < MC_END) {
            title.className = 'exercise-counter';
            title.textContent = `Вопрос ${index + 1} из ${MC_END}`;
        } else if (index < MATCH_END) {
            title.textContent = `Соедини пары`;
        } else {
            title.textContent = `Напиши слово`;
        }
        card.insertBefore(title, card.firstElementChild);
    }

    function renderCard(index) {
        container.innerHTML = '';
        const card = document.createElement('div');
        card.className = 'quiz-card';

        if (index < MC_END) {
            const item = multipleChoiceData[index];
            const questionP = document.createElement('p');
            questionP.className = 'quiz-question';
            questionP.textContent = item.question;
            card.appendChild(questionP);

            const shuffled = [...item.options].sort(() => Math.random() - 0.5);
            shuffled.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.textContent = opt;
                btn.addEventListener('click', () => {
                    card.querySelectorAll('.quiz-option-btn').forEach(b => {
                        b.disabled = true;
                        b.classList.remove('correct', 'wrong');
                        if (b.textContent === item.answer) b.classList.add('correct');
                    });
                    if (opt !== item.answer) btn.classList.add('wrong');
                });
                card.appendChild(btn);
            });
        } else if (index < MATCH_END) {
            const pairIndex = index - MC_END;
            const pair = matchPairs[pairIndex];
            const questionP = document.createElement('p');
            questionP.className = 'quiz-question';
            questionP.textContent = pair.left;
            card.appendChild(questionP);

            const allRights = matchPairs.map(p => p.right).sort(() => Math.random() - 0.5);
            const subset = [pair.right, ...allRights.filter(r => r !== pair.right)].slice(0, 3).sort(() => Math.random() - 0.5);
            subset.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.textContent = opt;
                btn.addEventListener('click', () => {
                    card.querySelectorAll('.quiz-option-btn').forEach(b => {
                        b.disabled = true;
                        b.classList.remove('correct', 'wrong');
                        if (b.textContent === pair.right) b.classList.add('correct');
                    });
                    if (opt !== pair.right) btn.classList.add('wrong');
                });
                card.appendChild(btn);
            });
        } else {
            const qi = index - MATCH_END;
            const item = quizData[qi];
            const questionP = document.createElement('p');
            questionP.className = 'quiz-question';
            questionP.innerHTML = `${item.promptPrefix}<strong>___</strong>${item.promptSuffix}`;
            card.appendChild(questionP);

            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'quiz-write-input';
            input.placeholder = 'Напиши ответ...';
            card.appendChild(input);

            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-primary';
            checkBtn.textContent = 'Проверить';
            checkBtn.addEventListener('click', () => {
                const val = normalizeInput(input.value).toLowerCase();
                const ok = item.answers.some(a => a.toLowerCase() === val);
                input.classList.remove('correct', 'wrong');
                input.classList.add(ok ? 'correct' : 'wrong');
                if (!ok) {
                    const hint = document.createElement('p');
                    hint.className = 'quiz-hint';
                    hint.textContent = `Правильный ответ: ${item.answers[0]}`;
                    if (!card.querySelector('.quiz-hint')) card.appendChild(hint);
                }
            });
            card.appendChild(checkBtn);
        }

        ensureCardTitle(card, index);
        container.appendChild(card);
        counterEl.textContent = `${index + 1} / ${TOTAL_CARDS}`;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === TOTAL_CARDS - 1;
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0) renderCard(--currentCard); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL_CARDS - 1) renderCard(++currentCard); });
    renderCard(0);
}

// ============================================================
// INITIALIZATION
// ============================================================
initPanelManager({
    enableAccessControl: true,
    initializers: {
        'panel-vq-01': () => {
            new DragDropExercise({
                containerId: 'ex-dragdrop-vq-01-container',
                completionId: 'ex-dragdrop-vq-01-completion',
                exercises: p1exercises
            });
        },
        'panel-vq-05': () => {
            new FlashcardExercise({
                sectionId: 'ex-flashcards-vq-05',
                cards: p5cards
            });
        },
        'panel-vq-06': () => {
            new GapTextExercise({
                containerId: 'ex-gaptext-vq-06',
                paragraphs: p6paragraphs,
                gaps: p6gaps
            });
        },
        'panel-vq-02': () => {
            new DragDropExercise({
                containerId: 'ex-dragdrop-vq-02-container',
                completionId: 'ex-dragdrop-vq-02-completion',
                exercises: p2exercises
            });
        },
        'panel-vq-07': () => {
            new FlashcardExercise({
                sectionId: 'ex-flashcards-vq-07',
                cards: p7cards
            });
        },
        'panel-vq-08': () => {
            new GapTextExercise({
                containerId: 'ex-gaptext-vq-08',
                paragraphs: p8paragraphs,
                gaps: p8gaps
            });
        },
        'panel-vq-03': () => {
            new DragDropExercise({
                containerId: 'ex-dragdrop-vq-03-container',
                completionId: 'ex-dragdrop-vq-03-completion',
                exercises: p3exercises
            });
        },
        'panel-vq-09': () => {
            new FlashcardExercise({
                sectionId: 'ex-flashcards-vq-09',
                cards: p9cards
            });
        },
        'panel-vq-10': () => {
            new GapTextExercise({
                containerId: 'ex-gaptext-vq-10',
                paragraphs: p10paragraphs,
                gaps: p10gaps
            });
        },
        'panel-vq-04': () => {
            initPanelVq04();
        }
    }
});
