import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — public · Drag & Drop
// ============================================================
const p1exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}.", words: ["на работу", "на работе", "в работу"], correctAnswers: { 1: "на работу" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы идёте утром {{1}}.", words: ["на пляж", "в пляж", "к пляжу"], correctAnswers: { 1: "на пляж" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь {{1}}.", words: ["на концерт", "на концерте", "в концерт"], correctAnswers: { 1: "на концерт" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь сегодня вечером {{1}}.", words: ["к Кате", "в Катю", "на Катю"], correctAnswers: { 1: "к Кате" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Андрей ходит {{1}}.", words: ["на спортзал", "в спортзал", "к спортзалу"], correctAnswers: { 1: "в спортзал" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}, тебе купить что-нибудь?", words: ["на магазин", "в магазин", "к магазину"], correctAnswers: { 1: "в магазин" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В воскресенье едем {{1}}.", words: ["к родителям", "на родителей", "в родителей"], correctAnswers: { 1: "к родителям" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я всегда хожу с бабушкой {{1}}.", words: ["в банк", "на банк", "к банку"], correctAnswers: { 1: "в банк" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В субботу идём с друзьями {{1}}.", words: ["в ресторан", "к ресторану", "на ресторан"], correctAnswers: { 1: "в ресторан" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы в пятницу идём {{1}}.", words: ["к друзьям в гости", "на друзей в гости", "в друзей в гости"], correctAnswers: { 1: "к друзьям в гости" } },
];

// ============================================================
// PANEL 5 — paid · Drag & Drop
// ============================================================
const p5exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы идём {{1}}.", words: ["на концерт", "в концерт", "к концерту"], correctAnswers: { 1: "на концерт" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Она ходит {{1}}.", words: ["к выставкам", "на выставки", "в выставки"], correctAnswers: { 1: "на выставки" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Завтра утром мы идём {{1}}.", words: ["в пляж", "к пляжу", "на пляж"], correctAnswers: { 1: "на пляж" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они всегда по утрам ходят {{1}}.", words: ["на пробежку", "в пробежку", "к пробежке"], correctAnswers: { 1: "на пробежку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В понедельник мы идём {{1}}.", words: ["к презентации", "в презентацию", "на презентацию"], correctAnswers: { 1: "на презентацию" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Он всегда ходит {{1}}.", words: ["на лекции", "в лекции", "к лекциям"], correctAnswers: { 1: "на лекции" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я хожу {{1}} два-три раза в неделю.", words: ["к тренировке", "на тренировку", "в тренировку"], correctAnswers: { 1: "на тренировку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы идёте {{1}}?", words: ["на день рождения", "к Кате в день рождения", "к дню рождения"], correctAnswers: { 1: "на день рождения" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они идут в субботу {{1}}.", words: ["в концерт", "на концерт", "к концерту"], correctAnswers: { 1: "на концерт" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы всегда ходите {{1}} по пятницам?", words: ["в йогу", "к йоге", "на йогу"], correctAnswers: { 1: "на йогу" } },
];

// ============================================================
// PANEL 6 — paid · Drag & Drop
// ============================================================
const p6exercises = [
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь сегодня вечером {{1}}.", words: ["в Катю", "к Кате", "на Катю"], correctAnswers: { 1: "к Кате" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Андрей ходит {{1}}.", words: ["в спортзал", "на спортзал", "к спортзалу"], correctAnswers: { 1: "в спортзал" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}.", words: ["к работе", "в работу", "на работу"], correctAnswers: { 1: "на работу" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы едем {{1}}, кот заболел.", words: ["на ветеринара", "к ветеринару", "в ветеринара"], correctAnswers: { 1: "к ветеринару" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я всегда хожу с бабушкой {{1}}.", words: ["к банку", "на банк", "в банк"], correctAnswers: { 1: "в банк" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Они всегда по утрам ходят {{1}}.", words: ["в пробежку", "на пробежку", "к пробежке"], correctAnswers: { 1: "на пробежку" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В воскресенье едем {{1}}.", words: ["на родителей", "в родителей", "к родителям"], correctAnswers: { 1: "к родителям" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Я иду {{1}}, тебе купить что-нибудь?", words: ["на магазин", "в магазин", "к магазину"], correctAnswers: { 1: "в магазин" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Ты идёшь {{1}}.", words: ["к концерту", "в концерт", "на концерт"], correctAnswers: { 1: "на концерт" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Мы в пятницу идём {{1}}.", words: ["в друзей в гости", "на друзей в гости", "к друзьям в гости"], correctAnswers: { 1: "к друзьям в гости" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "В субботу идём с друзьями {{1}}.", words: ["к ресторану", "в ресторан", "на ресторан"], correctAnswers: { 1: "в ресторан" } },
    { instruction: "Completa la frase scegliendo la forma corretta", text: "Вы всегда ходите {{1}} по пятницам?", words: ["к йоге", "в йогу", "на йогу"], correctAnswers: { 1: "на йогу" } },
];

// ============================================================
// PANEL 2 — public · Flashcard — misto (в / на / к)
// ============================================================
const p2cards = [
    { front: "Я иду на", back: "работу" },
    { front: "Вы идёте утром на", back: "пляж" },
    { front: "Ты идёшь на", back: "концерт" },
    { front: "Ты идёшь сегодня вечером к", back: "Кате" },
    { front: "Андрей ходит в", back: "спортзал" },
    { front: "Тебе купить что-нибудь? Я иду в", back: "магазин" },
    { front: "В воскресенье едем к", back: "родителям" },
    { front: "Я всегда хожу с бабушкой в", back: "банк" },
    { front: "В субботу идём с друзьями в", back: "ресторан" },
    { front: "Мы в пятницу идём в гости к", back: "друзьям" },
];

// ============================================================
// PANEL 7 — paid · Flashcard — solo на
// ============================================================
const p7cards = [
    { front: "Мы идём на", back: "концерт" },
    { front: "Она ходит на", back: "выставки" },
    { front: "Завтра утром мы идём на", back: "пляж" },
    { front: "Они всегда по утрам ходят на", back: "пробежку" },
    { front: "В понедельник мы идём на", back: "презентацию" },
    { front: "Он всегда ходит на", back: "лекции" },
    { front: "Да, два-три раза в неделю хожу на", back: "тренировку" },
    { front: "Вы идёте на", back: "день рождения" },
    { front: "Они идут в субботу на", back: "концерт" },
    { front: "Вы всегда по пятницам ходите на", back: "йогу" },
];

// ============================================================
// PANEL 8 — paid · Flashcard — misto (в / на / к)
// ============================================================
const p8cards = [
    { front: "Ты идёшь сегодня вечером к", back: "Кате" },
    { front: "Андрей ходит в", back: "спортзал" },
    { front: "Я иду на", back: "работу" },
    { front: "Кот заболел, мы едем к", back: "ветеринару" },
    { front: "Я всегда хожу с бабушкой в", back: "банк" },
    { front: "Они всегда по утрам ходят на", back: "пробежку" },
    { front: "В воскресенье едем к", back: "родителям" },
    { front: "Тебе купить что-нибудь? Я иду в", back: "магазин" },
    { front: "Ты идёшь на", back: "концерт" },
    { front: "Вы всегда по пятницам ходите на", back: "йогу" },
];

// ============================================================
// PANEL 3 — student · Flashcard
// ============================================================
const p3cards = [
    { front: "Она ходит на", back: "выставки" },
    { front: "Да, два-три раза в неделю хожу на", back: "тренировку" },
    { front: "В понедельник мы идём на", back: "презентацию" },
    { front: "В субботу идём с друзьями в", back: "ресторан" },
    { front: "Я всегда хожу с бабушкой в", back: "банк" },
    { front: "Кот заболел, мы едем к", back: "ветеринару" },
    { front: "Мы в пятницу идём в гости к", back: "друзьям" },
    { front: "Когда ты идёшь к", back: "врачу" },
    { front: "Весной они летят в", back: "Египет" },
    { front: "Куда вы едете на", back: "Пасху" },
];

// ============================================================
// PANEL 9 — student · Flashcard
// ============================================================
const p9cards = [
    { front: "Мы идём на", back: "концерт" },
    { front: "Они всегда по утрам ходят на", back: "пробежку" },
    { front: "Вы всегда по пятницам ходите на", back: "йогу" },
    { front: "Андрей ходит в", back: "спортзал" },
    { front: "Тебе купить что-нибудь? Я иду в", back: "магазин" },
    { front: "Ты идёшь сегодня вечером к", back: "Кате" },
    { front: "В воскресенье едем к", back: "родителям" },
    { front: "В выходные мы едем на", back: "дачу" },
    { front: "Когда ты идёшь к", back: "стоматологу" },
    { front: "По воскресеньям мы ездим в", back: "баню" },
];

// ============================================================
// PANEL 10 — student · Flashcard
// ============================================================
const p10cards = [
    { front: "Я иду на", back: "работу" },
    { front: "Вы идёте утром на", back: "пляж" },
    { front: "Ты идёшь на", back: "концерт" },
    { front: "Он всегда ходит на", back: "лекции" },
    { front: "Мы едем", back: "в гости к друзьям" },
    { front: "Он всегда ходит выпить кофе в", back: "этот бар" },
    { front: "Они идут в", back: "аптеку" },
    { front: "После лекций я иду к", back: "профессору" },
    { front: "Вы часто ходите в", back: "кино" },
    { front: "Ты идёшь вечером гулять в", back: "центр" },
];

// ============================================================
// PANEL 4 — public · Quiz (в / на / к)
// ============================================================
function initPanel4Mal() {
    const questions = [
        // на (10)
        { sentence: "Я иду ___ работу.", correct: "на" },
        { sentence: "Вы идёте утром ___ пляж.", correct: "на" },
        { sentence: "Ты идёшь ___ концерт.", correct: "на" },
        { sentence: "Она ходит ___ выставки.", correct: "на" },
        { sentence: "Они всегда по утрам ходят ___ пробежку.", correct: "на" },
        { sentence: "В понедельник мы идём ___ презентацию.", correct: "на" },
        { sentence: "Он всегда ходит ___ лекции.", correct: "на" },
        { sentence: "Два-три раза в неделю хожу ___ тренировку.", correct: "на" },
        { sentence: "Вы идёте ___ день рождения?", correct: "на" },
        { sentence: "В выходные мы едем ___ дачу.", correct: "на" },
        // в (10)
        { sentence: "Андрей ходит ___ спортзал.", correct: "в" },
        { sentence: "Тебе купить что-нибудь? Я иду ___ магазин.", correct: "в" },
        { sentence: "Я всегда хожу с бабушкой ___ банк.", correct: "в" },
        { sentence: "В субботу идём с друзьями ___ ресторан.", correct: "в" },
        { sentence: "Весной они летят ___ Египет.", correct: "в" },
        { sentence: "По воскресеньям мы ездим ___ баню.", correct: "в" },
        { sentence: "Он всегда ходит выпить кофе ___ этот бар.", correct: "в" },
        { sentence: "Они идут ___ аптеку.", correct: "в" },
        { sentence: "Вы часто ходите ___ кино?", correct: "в" },
        { sentence: "Ты идёшь вечером гулять ___ центр?", correct: "в" },
        // к (10)
        { sentence: "Ты идёшь сегодня вечером ___ Кате.", correct: "к" },
        { sentence: "В воскресенье едем ___ родителям.", correct: "к" },
        { sentence: "Мы в пятницу идём в гости ___ друзьям.", correct: "к" },
        { sentence: "Кот заболел, мы едем ___ ветеринару.", correct: "к" },
        { sentence: "Когда ты идёшь ___ врачу?", correct: "к" },
        { sentence: "Когда ты идёшь ___ стоматологу?", correct: "к" },
        { sentence: "Мы едем в гости ___ друзьям.", correct: "к" },
        { sentence: "После лекций я иду ___ профессору.", correct: "к" },
        { sentence: "Мы летим в Париж ___ родственникам.", correct: "к" },
        { sentence: "Ты уже едешь ___ нам?", correct: "к" },
    ];

    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    let current = 0;
    const OPTIONS = ['в', 'на', 'к'];

    const container = document.getElementById('mal-04-cards-container');
    const prevBtn   = document.getElementById('mal-04-deck-prev');
    const nextBtn   = document.getElementById('mal-04-deck-next');
    const counter   = document.getElementById('mal-04-deck-counter');
    counter.removeAttribute('style');

    function render(index) {
        const q = shuffled[index];
        container.innerHTML = `
            <div class="mal04-card">
                <p class="mal04-sentence">${q.sentence.replace('___', '<span class="mal04-blank">___</span>')}</p>
                <div class="mal04-options">
                    ${OPTIONS.map(opt => `<button class="mal04-opt" data-value="${opt}">${opt}</button>`).join('')}
                </div>
                <div class="mal04-feedback"></div>
            </div>
        `;
        container.querySelectorAll('.mal04-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                const sel = btn.getAttribute('data-value');
                const fb  = container.querySelector('.mal04-feedback');
                container.querySelectorAll('.mal04-opt').forEach(b => b.disabled = true);
                if (sel === q.correct) {
                    btn.classList.add('correct');
                    fb.textContent = '✓ Правильно!';
                    fb.className = 'mal04-feedback correct';
                } else {
                    btn.classList.add('wrong');
                    fb.textContent = `✗ Правильный предлог: ${q.correct}`;
                    fb.className = 'mal04-feedback wrong';
                    container.querySelectorAll('.mal04-opt').forEach(b => {
                        if (b.getAttribute('data-value') === q.correct) b.classList.add('correct');
                    });
                }
            });
        });
        counter.textContent = `${index + 1} / ${shuffled.length}`;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === shuffled.length - 1;
    }

    prevBtn.addEventListener('click', () => { if (current > 0)                   { current--; render(current); } });
    nextBtn.addEventListener('click', () => { if (current < shuffled.length - 1) { current++; render(current); } });

    render(0);
}

// ============================================================
// INIT
// ============================================================
initPanelManager({
    initializers: {
        'panel-mal-open-1':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mal-01',    exercises: p1exercises }),
        'panel-mal-open-5':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mal-05',    exercises: p5exercises }),
        'panel-mal-open-6':  () => new DragDropExercise({ rootId: 'ex-dragdrop-mal-06',    exercises: p6exercises }),
        'panel-mal-open-2':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-02', cards: p2cards }),
        'panel-mal-open-7':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-07', cards: p7cards }),
        'panel-mal-open-8':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-08', cards: p8cards }),
        'panel-mal-open-3':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-03', cards: p3cards }),
        'panel-mal-open-9':  () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-09', cards: p9cards }),
        'panel-mal-open-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-mal-10', cards: p10cards }),
        'panel-mal-open-4':  () => initPanel4Mal(),
    },
    enableAccessControl: true,
});
