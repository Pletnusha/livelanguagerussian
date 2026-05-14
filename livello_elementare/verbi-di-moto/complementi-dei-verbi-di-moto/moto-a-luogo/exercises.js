import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — public · Drag & Drop
// ============================================================
const p1exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}.", words: ["на работу", "на работе", "в работу"], correctAnswers: { 1: "на работу" }, explanation: "Preposizione: il lavoro è un'attività → «на». Caso: «работа» è femminile in -а → moto a luogo → accusativo: работа → работу (non работе = locativo)." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы идёте утром {{1}}.", words: ["на пляж", "в пляж", "к пляжу"], correctAnswers: { 1: "на пляж" }, explanation: "La spiaggia si riconosce come una superficie, quindi la preposizione è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь {{1}}.", words: ["на концерт", "на концерте", "в концерт"], correctAnswers: { 1: "на концерт" }, explanation: "Preposizione: un concerto è un evento → «на». Caso: «концерт» è maschile inanimato → accusativo = nominativo: концерт → концерт (non концерте = locativo)." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь сегодня вечером {{1}}.", words: ["к Кате", "в Катю", "на Катю"], correctAnswers: { 1: "к Кате" }, explanation: "Katya è una persona, quindi non è una superficie e non ha un confine: dobbiamo avvicinarci, quindi la preposizione è «к»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Андрей ходит {{1}}.", words: ["на спортзал", "в спортзал", "к спортзалу"], correctAnswers: { 1: "в спортзал" }, explanation: "La palestra è un edificio, quindi bisogna entrare dentro: la preposizione è «в»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}, тебе купить что-нибудь?", words: ["на магазин", "в магазин", "к магазину"], correctAnswers: { 1: "в магазин" }, explanation: "Seguiamo la stessa logica: un supermercato o un negozio sono sempre un edificio dentro cui bisogna entrare, quindi la preposizione è «в»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В воскресенье едем {{1}}.", words: ["к родителям", "на родителей", "в родителей"], correctAnswers: { 1: "к родителям" }, explanation: "Dobbiamo avvicinarci, non entrare e non stare su una superficie, quindi la preposizione è «к»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я всегда хожу с бабушкой {{1}}.", words: ["в банк", "на банк", "к банку"], correctAnswers: { 1: "в банк" }, explanation: "La banca si trova dentro un palazzo e bisogna entrare dentro, quindi la preposizione è «в»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В субботу идём с друзьями {{1}}.", words: ["в ресторан", "к ресторану", "на ресторан"], correctAnswers: { 1: "в ресторан" }, explanation: "Il ristorante è un edificio: dobbiamo entrare dentro, quindi la preposizione è «в»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы в пятницу идём {{1}}.", words: ["к друзьям в гости", "на друзей в гости", "в друзей в гости"], correctAnswers: { 1: "к друзьям в гости" }, explanation: "Non si entra dentro, non si passa sopra una superficie: la preposizione è «к»." },
];

// ============================================================
// PANEL 5 — paid · Drag & Drop
// ============================================================
const p5exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы идём {{1}}.", words: ["на концерт", "в концерт", "к концерту"], correctAnswers: { 1: "на концерт" }, explanation: "Un concerto è un evento, quindi la preposizione che viene applicata è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она ходит {{1}}.", words: ["к выставкам", "на выставки", "в выставки"], correctAnswers: { 1: "на выставки" }, explanation: "La mostra è un evento, quindi si applica la preposizione «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Завтра утром мы идём {{1}}.", words: ["в пляж", "к пляжу", "на пляж"], correctAnswers: { 1: "на пляж" }, explanation: "La spiaggia si riconosce come una superficie, quindi la preposizione è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они всегда по утрам ходят {{1}}.", words: ["на пробежку", "в пробежку", "к пробежке"], correctAnswers: { 1: "на пробежку" }, explanation: "\"Fare una corsa\" in russo è letteralmente \"andare alla corsa\": la corsa è un evento, quindi la preposizione è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В понедельник мы идём {{1}}.", words: ["к презентации", "в презентацию", "на презентацию"], correctAnswers: { 1: "на презентацию" }, explanation: "Una presentazione è un evento, quindi la preposizione è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Он всегда ходит {{1}}.", words: ["на лекции", "в лекции", "к лекциям"], correctAnswers: { 1: "на лекции" }, explanation: "Le lezioni sono un grandissimo evento universitario 😄, quindi la preposizione è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я хожу {{1}} два-три раза в неделю.", words: ["к тренировке", "на тренировку", "в тренировку"], correctAnswers: { 1: "на тренировку" }, explanation: "L'allenamento è un evento, quindi la preposizione è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы идёте {{1}}?", words: ["на день рождения", "к дню рождения"], correctAnswers: { 1: "на день рождения" }, explanation: "Un compleanno è sempre un evento, quindi la preposizione è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они идут в субботу {{1}}.", words: ["в концерт", "на концерт", "к концерту"], correctAnswers: { 1: "на концерт" }, explanation: "Un concerto è un evento, quindi la preposizione che viene applicata è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы всегда ходите {{1}} по пятницам?", words: ["в йогу", "к йоге", "на йогу"], correctAnswers: { 1: "на йогу" }, explanation: "Si tratta di lezioni di yoga: sappiamo che una lezione è un evento, quindi la preposizione è «на»." },
];

// ============================================================
// PANEL 6 — paid · Drag & Drop
// ============================================================
const p6exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь сегодня вечером {{1}}.", words: ["в Катю", "к Кате", "на Катю"], correctAnswers: { 1: "к Кате" }, explanation: "Katya è una persona, quindi non è una superficie e non ha un confine: dobbiamo avvicinarci, quindi la preposizione è «к»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Андрей ходит {{1}}.", words: ["в спортзал", "на спортзал", "к спортзалу"], correctAnswers: { 1: "в спортзал" }, explanation: "La palestra è un edificio, quindi bisogna entrare dentro: la preposizione è «в»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}.", words: ["к работе", "в работу", "на работу"], correctAnswers: { 1: "на работу" }, explanation: "Il lavoro si riconosce come un evento, quindi la preposizione è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы едем {{1}}, кот заболел.", words: ["на ветеринара", "к ветеринару", "в ветеринара"], correctAnswers: { 1: "к ветеринару" }, explanation: "Si parla di una persona, un professionista: il veterinario non è un edificio né una superficie, dobbiamo avvicinarci, quindi la preposizione è «к»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я всегда хожу с бабушкой {{1}}.", words: ["к банку", "на банк", "в банк"], correctAnswers: { 1: "в банк" }, explanation: "La banca si trova dentro un palazzo e bisogna entrare dentro, quindi la preposizione è «в»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они всегда по утрам ходят {{1}}.", words: ["в пробежку", "на пробежку", "к пробежке"], correctAnswers: { 1: "на пробежку" }, explanation: "\"Fare una corsa\" in russo è letteralmente \"andare alla corsa\": la corsa è un evento, quindi la preposizione è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В воскресенье едем {{1}}.", words: ["на родителей", "в родителей", "к родителям"], correctAnswers: { 1: "к родителям" }, explanation: "Dobbiamo avvicinarci, non entrare e non stare su una superficie, quindi la preposizione è «к»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}, тебе купить что-нибудь?", words: ["на магазин", "в магазин", "к магазину"], correctAnswers: { 1: "в магазин" }, explanation: "Seguiamo la stessa logica: un supermercato o un negozio sono sempre un edificio dentro cui bisogna entrare, quindi la preposizione è «в»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь {{1}}.", words: ["к концерту", "в концерт", "на концерт"], correctAnswers: { 1: "на концерт" }, explanation: "Un concerto è un evento, quindi la preposizione che viene applicata è «на»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы в пятницу идём {{1}}.", words: ["в друзей в гости", "на друзей в гости", "к друзьям в гости"], correctAnswers: { 1: "к друзьям в гости" }, explanation: "Non si entra dentro, non si passa sopra una superficie: la preposizione è «к»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В субботу идём с друзьями {{1}}.", words: ["к ресторану", "в ресторан", "на ресторан"], correctAnswers: { 1: "в ресторан" }, explanation: "Il ristorante è un edificio: dobbiamo entrare dentro, quindi la preposizione è «в»." },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы всегда ходите {{1}} по пятницам?", words: ["к йоге", "в йогу", "на йогу"], correctAnswers: { 1: "на йогу" }, explanation: "Si tratta di lezioni di yoga: sappiamo che una lezione è un evento, quindi la preposizione è «на»." },
];

// ============================================================
// PANEL 2 — public · Flashcard — misto (в / на / к)
// ============================================================
const p2cards = [
    { front: "Я иду на", back: "работу", explanation: "«Работа» = lavoro. «Идти на работу» — andare al lavoro (accusativo: работа → работу)." },
    { front: "Вы идёте утром на", back: "пляж", explanation: "«Пляж» = spiaggia. «Идти на пляж» — andare in spiaggia." },
    { front: "Ты идёшь на", back: "концерт", explanation: "«Концерт» = concerto. «Идти на концерт» — andare al concerto." },
    { front: "Ты идёшь сегодня вечером к", back: "Кате", explanation: "«Катя» è un nome proprio. «Идти к Кате» — andare da Katya (dativo: Катя → Кате)." },
    { front: "Андрей ходит в", back: "спортзал", explanation: "«Спортзал» = palestra. «Ходить в спортзал» — andare in palestra." },
    { front: "Тебе купить что-нибудь? Я иду в", back: "магазин", explanation: "«Магазин» = negozio. «Идти в магазин» — andare al negozio." },
    { front: "В воскресенье едем к", back: "родителям", explanation: "«Родители» = genitori. «Ехать к родителям» — andare dai genitori (dativo: родители → родителям)." },
    { front: "Я всегда хожу с бабушкой в", back: "банк", explanation: "«Банк» = banca. «Ходить в банк» — andare in banca." },
    { front: "В субботу идём с друзьями в", back: "ресторан", explanation: "«Ресторан» = ristorante. «Идти в ресторан» — andare al ristorante." },
    { front: "Мы в пятницу идём в гости к", back: "друзьям", explanation: "«Друзья» = amici. «Идти в гости к друзьям» — andare dagli amici (dativo: друзья → друзьям)." },
];

// ============================================================
// PANEL 7 — paid · Flashcard — solo на
// ============================================================
const p7cards = [
    { front: "в + университет", back: "в университет" },
    { front: "на + работа", back: "на работу" },
    { front: "в + школа", back: "в школу" },
    { front: "на + концерт", back: "на концерт" },
    { front: "в + театр", back: "в театр" },
    { front: "на + рынок", back: "на рынок" },
    { front: "в + бассейн", back: "в бассейн" },
    { front: "на + стадион", back: "на стадион" },
    { front: "в + спортзал", back: "в спортзал" },
    { front: "на + дискотека", back: "на дискотеку" },
];

// ============================================================
// PANEL 8 — paid · Flashcard — misto (в / на / к)
// ============================================================
const p8cards = [
    { front: "в + университет", back: "в университет" },
    { front: "на + работа", back: "на работу" },
    { front: "в + бассейн", back: "в бассейн" },
    { front: "на + концерт", back: "на концерт" },
    { front: "в + спортзал", back: "в спортзал" },
    { front: "к + врач", back: "к врачу" },
    { front: "к + сестра", back: "к сестре" },
    { front: "на + вокзал", back: "на вокзал" },
    { front: "к + родители", back: "к родителям" },
    { front: "к + друзья", back: "к друзьям" },
];

// ============================================================
// PANEL 3 — public · Flashcard
// ============================================================
const p3cards = [
    { front: "Она ходит на", back: "выставки", explanation: "«Выставки» = mostre. «Ходить на выставки» — andare alle mostre." },
    { front: "Да, два-три раза в неделю хожу на", back: "тренировку", explanation: "«Тренировка» = allenamento. «Ходить на тренировку» — andare all'allenamento." },
    { front: "В понедельник мы идём на", back: "презентацию", explanation: "«Презентация» = presentazione. «Идти на презентацию» — andare alla presentazione." },
    { front: "В субботу идём с друзьями в", back: "ресторан", explanation: "«Ресторан» = ristorante. «Идти в ресторан» — andare al ristorante." },
    { front: "Я всегда хожу с бабушкой в", back: "банк", explanation: "«Банк» = banca. «Ходить в банк» — andare in banca." },
    { front: "Кот заболел, мы едем к", back: "ветеринару", explanation: "«Ветеринар» = veterinario. «Ехать к ветеринару» — andare dal veterinario." },
    { front: "Мы в пятницу идём в гости к", back: "друзьям", explanation: "«Друзья» = amici. «Идти в гости к друзьям» — andare dagli amici." },
    { front: "Когда ты идёшь к", back: "врачу", explanation: "«Врач» = medico. «Идти к врачу» — andare dal medico." },
    { front: "Весной они летят в", back: "Египет", explanation: "«Египет» = Egitto. «Лететь в Египет» — volare in Egitto." },
    { front: "Куда вы едете на", back: "Пасху", explanation: "«Пасха» = Pasqua. «Ехать на Пасху» — andare per Pasqua." },
];

// ============================================================
// PANEL 9 — paid · Flashcard — в / на / к (5 repeat p7+p8 + 5 new)
// ============================================================
const p9cards = [
    { front: "в + театр",     back: "в театр" },
    { front: "на + рынок",    back: "на рынок" },
    { front: "на + стадион",  back: "на стадион" },
    { front: "к + сестра",    back: "к сестре" },
    { front: "на + вокзал",   back: "на вокзал" },
    { front: "к + подруга",   back: "к подруге" },
    { front: "в + больница",  back: "в больницу" },
    { front: "в + кино",      back: "в кино" },
    { front: "на + пляж",     back: "на пляж" },
    { front: "в + банк",      back: "в банк" },
];

// ============================================================
// PANEL 10 — paid · Flashcard — в / на / к (5 repeat p7+p8+p9 + 5 new)
// ============================================================
const p10cards = [
    { front: "на + дискотека",   back: "на дискотеку" },
    { front: "к + врач",         back: "к врачу" },
    { front: "к + родители",     back: "к родителям" },
    { front: "к + друзья",       back: "к друзьям" },
    { front: "в + кино",         back: "в кино" },
    { front: "в + офис",         back: "в офис" },
    { front: "в + магазин",      back: "в магазин" },
    { front: "на + пляж",         back: "на пляж" },
    { front: "на + почта",       back: "на почту" },
    { front: "к + бабушка",      back: "к бабушке" },
];

// ============================================================
// PANEL 4 — public · Mixed (MC + Match + Write)
// ============================================================
function initPanel4Mal() {
    const panel = document.getElementById('panel-mal-open-4');
    if (!panel) return;

    const container = panel.querySelector('#mal-04-cards-container');
    const prevBtn   = panel.querySelector('#mal-04-deck-prev');
    const nextBtn   = panel.querySelector('#mal-04-deck-next');
    const counterEl = panel.querySelector('#mal-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Я иду ___ работу.",                        options: ["в", "на", "к"], answer: "на" },
        { question: "Ты идёшь ___ концерт.",                    options: ["в", "на", "к"], answer: "на" },
        { question: "Они по утрам ходят ___ пробежку.",         options: ["в", "на", "к"], answer: "на" },
        { question: "Он идёт ___ университет.",                 options: ["в", "на", "к"], answer: "в" },
        { question: "Андрей ходит ___ спортзал.",               options: ["в", "на", "к"], answer: "в" },
        { question: "Вы часто ходите ___ кино?",                options: ["в", "на", "к"], answer: "в" },
        { question: "Мы едем ___ вокзал.",                      options: ["в", "на", "к"], answer: "на" },
        { question: "Ты идёшь сегодня вечером ___ Кате.",       options: ["в", "на", "к"], answer: "к" },
        { question: "В воскресенье едем ___ родителям.",        options: ["в", "на", "к"], answer: "к" },
        { question: "Кот заболел, мы едем ___ ветеринару.",     options: ["в", "на", "к"], answer: "к" },
    ];

    const matchPairs = [
        { left: "Вы идёте утром на",               right: "пляж" },
        { left: "Она ходит на",                    right: "выставки" },
        { left: "В понедельник мы идём на",        right: "презентацию" },
        { left: "Два-три раза в неделю хожу на",   right: "тренировку" },
        { left: "Тебе купить что-нибудь? Я иду в", right: "магазин" },
        { left: "В субботу идём в",                right: "ресторан" },
        { left: "Весной они летят в",              right: "Египет" },
        { left: "Мы в пятницу идём в гости к",    right: "друзьям" },
        { left: "Когда ты идёшь к",               right: "врачу" },
        { left: "Коля едет к",                    right: "сестре" },
    ];

    const quizData = [
        { id: "mal-001", promptPrefix: "Он всегда ходит",            promptSuffix: "(лекция).",        answers: ["на лекции"] },
        { id: "mal-002", promptPrefix: "Вы идёте",                   promptSuffix: "(день рождения)?", answers: ["на день рождения"] },
        { id: "mal-003", promptPrefix: "Я всегда хожу с бабушкой",   promptSuffix: "(банк).",          answers: ["в банк"] },
        { id: "mal-004", promptPrefix: "Он ходит три раза в неделю", promptSuffix: "(бассейн).",       answers: ["в бассейн"] },
        { id: "mal-005", promptPrefix: "Дети идут",                  promptSuffix: "(школа).",         answers: ["в школу"] },
        { id: "mal-006", promptPrefix: "Мы идём",                    promptSuffix: "(театр).",         answers: ["в театр"] },
        { id: "mal-007", promptPrefix: "По пятницам они ходят",      promptSuffix: "(йога).",          answers: ["на йогу"] },
        { id: "mal-008", promptPrefix: "Ты идёшь",                   promptSuffix: "(рынок)?",         answers: ["на рынок"] },
        { id: "mal-009", promptPrefix: "Болельщики идут",            promptSuffix: "(стадион).",       answers: ["на стадион"] },
        { id: "mal-010", promptPrefix: "Она всегда ходит",           promptSuffix: "(дискотека).",     answers: ["на дискотеку"] },
    ];

    const MC_END    = multipleChoiceData.length;
    const MATCH_END = MC_END + matchPairs.length;
    const TOTAL     = MATCH_END + quizData.length;

    function normalizeInput(str) { return str.trim().replace(/\s+/g, ' '); }

    function ensureCardTitle(card, index) {
        const existing = Array.from(card.children).find(c => c.tagName === 'H1');
        if (existing) {
            if (index < MC_END) existing.classList.add('exercise-counter');
            if (card.firstElementChild !== existing) card.insertBefore(existing, card.firstElementChild);
            return;
        }
        const title = document.createElement('h1');
        title.textContent = `Esercizio ${index + 1} di ${TOTAL}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container mal-04-card';
            card.dataset.index = i;
            card.hidden = (i !== 0);
            if (i === 0) card.classList.add('visible');

            if (i < MC_END) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) =>
                    `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`
                ).join('');
                const questionText = item.question.replace('___',
                    `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`
                );
                card.innerHTML = `
                    <div class="instruction">Scegli la preposizione corretta</div>
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
                const others = matchPairs.filter((_, idx) => idx !== pairIdx)
                    .sort(() => Math.random() - 0.5).slice(0, 2);
                const allPairs = [pair, ...others].sort(() => Math.random() - 0.5);

                let fronts = allPairs.map((p, idx) => ({ text: p.left,  type: 'front', id: idx }));
                let backs  = allPairs.map((p, idx) => ({ text: p.right, type: 'back',  id: idx }));
                fronts.sort(() => Math.random() - 0.5);
                backs.sort(() => Math.random() - 0.5);

                let selCard = null;
                let processing = false;

                const matchContainer = document.createElement('div');
                matchContainer.className = 'fca01-match-container';
                const feedbackEl = document.createElement('p');
                feedbackEl.className = 'fca01-match-feedback';
                const matchGrid = document.createElement('div');
                matchGrid.className = 'fca01-match-grid';
                const colF = document.createElement('div'); colF.className = 'fca01-match-col';
                const colB = document.createElement('div'); colB.className = 'fca01-match-col';
                matchGrid.appendChild(colF);
                matchGrid.appendChild(colB);
                matchContainer.appendChild(feedbackEl);
                matchContainer.appendChild(matchGrid);
                card.appendChild(matchContainer);

                function handleMatch(clicked) {
                    if (processing || clicked.classList.contains('matched')) return;
                    if (clicked === selCard) return;
                    if (!selCard) { selCard = clicked; clicked.classList.add('selected'); return; }
                    if (selCard.dataset.type === clicked.dataset.type) {
                        selCard.classList.remove('selected');
                        selCard = clicked; clicked.classList.add('selected'); return;
                    }
                    const prev = selCard;
                    if (prev.dataset.id === clicked.dataset.id) {
                        prev.classList.add('matched'); clicked.classList.add('matched');
                        feedbackEl.textContent = '✨ Отлично!'; feedbackEl.className = 'fca01-match-feedback correct';
                        selCard = null;
                        setTimeout(() => { feedbackEl.textContent = ''; }, 1000);
                        if (matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length === 0)
                            feedbackEl.textContent = '🎉 ПОБЕДА! 🎉';
                    } else {
                        processing = true;
                        clicked.classList.add('wrong'); prev.classList.add('wrong');
                        feedbackEl.textContent = 'Неверно'; feedbackEl.className = 'fca01-match-feedback wrong';
                        setTimeout(() => {
                            clicked.classList.remove('selected', 'wrong');
                            prev.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = ''; processing = false;
                        }, 800);
                        selCard = null;
                    }
                }

                function makeMatchEl(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card';
                    div.textContent = item.text;
                    div.dataset.id   = item.id;
                    div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatch(div));
                    return div;
                }

                fronts.forEach(item => colF.appendChild(makeMatchEl(item)));
                backs.forEach(item  => colB.appendChild(makeMatchEl(item)));
                ensureCardTitle(card, i);
                const instrEl = document.createElement('div');
                instrEl.className = 'instruction';
                card.insertBefore(instrEl, card.firstElementChild);

            } else {
                const item = quizData[i - MATCH_END];
                card.innerHTML = `
                    <h3 class="quiz-title">Scrivi</h3>
                    <p class="quiz-instruction">Scrivi la forma corretta: preposizione + caso (es. в школу)</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix} <input type="text" class="quiz-input" data-index="${i - MATCH_END}"> ${item.promptSuffix}</div>
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">Проверить</button></div>
                        <div class="quiz-feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);
                const instrEl = document.createElement('div');
                instrEl.className = 'instruction';
                card.insertBefore(instrEl, card.firstElementChild);
            }

            container.appendChild(card);
        }

        attachHandlers();
    }

    function attachHandlers() {
        container.querySelectorAll('.mal-04-card').forEach(card => {
            const idx = parseInt(card.dataset.index, 10);
            if (idx >= MC_END) return;

            let checked = false;
            const gaps  = Array.from(card.querySelectorAll('.gap'));
            const words = Array.from(card.querySelectorAll('.word-option'));
            const verifyBtn = card.querySelector('.verify-btn');
            const nBtn      = card.querySelector('.next-btn');
            const feedback  = card.querySelector('.feedback');

            words.forEach(w => {
                w.addEventListener('click', function() {
                    if (this.classList.contains('used') || checked) return;
                    const gap = gaps.find(g => !g.classList.contains('filled'));
                    if (!gap) return;
                    gap.textContent = this.dataset.word;
                    gap.classList.add('filled');
                    gap.dataset.word      = this.dataset.word;
                    gap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });

            gaps.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const w = words.find(x => x.dataset.index === this.dataset.wordIndex);
                    this.textContent = ''; this.classList.remove('filled');
                    delete this.dataset.word; delete this.dataset.wordIndex;
                    if (w) w.classList.remove('used');
                });
            });

            if (nBtn) nBtn.addEventListener('click', () => showCard(currentCard + 1));

            verifyBtn.addEventListener('click', function() {
                checked = true;
                const correct = multipleChoiceData[idx].answer;
                let ok = 0;
                gaps.forEach(gap => {
                    if (gap.dataset.word === correct) { gap.classList.remove('filled'); gap.classList.add('correct'); ok = 1; }
                    else gap.classList.add('incorrect');
                });
                feedback.textContent = ok ? '✓ Правильно!' : `✗ Правильный предлог: ${correct}`;
                feedback.className = `feedback ${ok ? 'correct' : 'wrong'}`;
                verifyBtn.style.display = 'none';
                nBtn.style.display = 'inline-block';
            });
        });

        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card  = this.closest('.mal-04-card');
                const idx   = parseInt(card.dataset.index) - MATCH_END;
                const item  = quizData[idx];
                const input = card.querySelector('.quiz-input');
                const fb    = card.querySelector('.quiz-feedback');
                const ok    = item.answers.some(a => normalizeInput(input.value) === a);
                if (ok) {
                    input.classList.replace('incorrect', 'correct') || input.classList.add('correct');
                    input.disabled = true; this.disabled = true;
                    fb.textContent = 'Правильно!'; fb.className = 'quiz-feedback correct';
                } else {
                    input.classList.replace('correct', 'incorrect') || input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.'; fb.className = 'quiz-feedback incorrect';
                }
            });
        });

        container.querySelectorAll('.quiz-input').forEach(input => {
            input.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    const btn = input.closest('.quiz-item').querySelector('.quiz-check-btn');
                    if (btn && !btn.disabled) btn.click();
                }
            });
        });
    }

    function showCard(idx) {
        currentCard = idx;
        container.querySelectorAll('.mal-04-card').forEach((c, i) => {
            c.classList.toggle('visible', i === idx);
            c.hidden = (i !== idx);
        });
        counterEl.textContent = `${idx + 1} / ${TOTAL}`;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === TOTAL - 1);
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0)         showCard(currentCard - 1); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL - 1) showCard(currentCard + 1); });

    buildCards();
    showCard(0);
}

// ============================================================
// INIT
// ============================================================
initPanelManager({
    initializers: {
        'panel-mal-open-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mal-01',    exercises: p1exercises }),
        'panel-mal-open-5':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mal-05',    exercises: p5exercises }),
        'panel-mal-open-6':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mal-06',    exercises: p6exercises }),
        'panel-mal-open-2':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-02', cards: p2cards, quizByPrep: true }),
        'panel-mal-open-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-07', cards: p7cards, quizByPrep: true }),
        'panel-mal-open-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-08', cards: p8cards, quizByPrep: true }),
        'panel-mal-open-3':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-03', cards: p3cards, quizByPrep: true }),
        'panel-mal-open-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-09', cards: p9cards, quizByPrep: true }),
        'panel-mal-open-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-10', cards: p10cards, quizByPrep: true }),
        'panel-mal-open-4':  () => initPanel4Mal(),
    },
    enableAccessControl: true,
});
