import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «В офисе: нужно или обычно» — terza pagina del blocco «Нужно или обычно» (piano approvato dalla PM 20.11.2026).
// Modello: scheda PDF «В офисе — нужно обычно — esercizi» (Desktop/LLR). Solo frasi originali: «нужно обычно в офисе» (Всё успеть),
// «в офисе — срочно нужно» (dialoghi), «чем ты занимаешься на работе», MICRO «в офисе»; vecchio materiale = pagina «В университете».
// Coppie nuove: начинать / начать, встречаться / встретиться (с + strumentale), назначать / назначить встречу (кому? dativo).
// Dopo «нужно» mai l'infinito imperfettivo come sbagliata («нужно начинать подготовку» è corretto): sbagliate = forme coniugate.
// Niente domande tra parentesi (regola 7.1). Niente «как обычно встретишься…» (futuro perfettivo ironico).
// Errore nell'originale: «Я обычно заканчивают» → заканчиваю.
// Schema: 1 D&D verbo + che cosa (+ vecchio, con spiegazioni) · 2 D&D parole · 3 D&D quando / ogni quanto
//         4 FC обычно o нужно (con spiegazioni) · 5 FC tre forme · 6 FC finisci la frase (misto) · 7 FC inizio e fine (con spiegazioni) · 8 FC chi fa che cosa (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Lessico (scheda, es. 1 «Verbo + che cosa?»): quale verbo con quale oggetto — 7 frasi originali di «нужно обычно в офисе» + «Мне нужно позвонить коллеге после обеда» («чем ты занимаешься на работе») + 2 vecchie dalla pagina «В университете»; con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} отчёт к понедельнику.",
        words: ["подготовить", "назначить", "встретиться"],
        correctAnswers: { 1: "подготовить" },
        explanation: "Preparare un rapporto: подготовить отчёт."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам сегодня нужно {{1}} договоры.",
        words: ["начать", "назначить", "составить"],
        correctAnswers: { 1: "составить" },
        explanation: "Redigere un contratto: составить договор, i contratti → договоры."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} эти документы.",
        words: ["назначить", "проверить", "встретиться"],
        correctAnswers: { 1: "проверить" },
        explanation: "Controllare: проверить документы."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Коллеге нужно {{1}} встречу заказчику.",
        words: ["составить", "закончить", "назначить"],
        correctAnswers: { 1: "назначить" },
        explanation: "Fissare un appuntamento: назначить встречу; a chi? dativo — заказчику."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно {{1}} отчёт до обеда.",
        words: ["закончить", "назначить", "встретиться"],
        correctAnswers: { 1: "закончить" },
        explanation: "Finire: закончить отчёт."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} подготовку к презентации.",
        words: ["начать", "назначить", "составить"],
        correctAnswers: { 1: "начать" },
        explanation: "Cominciare qualcosa: начать подготовку."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вам нужно {{1}} с заказчиком в понедельник.",
        words: ["назначить", "встретиться", "составить"],
        correctAnswers: { 1: "встретиться" },
        explanation: "Incontrarsi con qualcuno: встретиться с + strumentale (с заказчиком)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно {{1}} коллеге после обеда.",
        words: ["проверить", "назначить", "позвонить"],
        correctAnswers: { 1: "позвонить" },
        explanation: "Telefonare a qualcuno: позвонить + dativo (коллеге)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно {{1}} задание к завтрашнему семинару.",
        words: ["выучить", "выполнить", "подготовиться"],
        correctAnswers: { 1: "выполнить" },
        explanation: "Dalla pagina «В университете»: fare un compito — выполнить задание."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ты знаешь, что в эту сессию нам нужно {{1}} пять экзаменов?",
        words: ["сдать", "выполнить", "выучить"],
        correctAnswers: { 1: "сдать" },
        explanation: "Dalla pagina «В университете»: dare (e superare) un esame — сдать экзамен."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Lessico (scheda, es. 2 «Le parole dell'ufficio» + es. 8): il nome giusto nella forma giusta — 10 frasi originali; sbagliate = stessa parola in un altro caso + parola che non può stare lì (mai una che sia anche corretta); senza spiegazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно подготовить {{1}} к понедельнику.",
        words: ["отчёта", "отчёт", "отчётом"],
        correctAnswers: { 1: "отчёт" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы редко составляем {{1}}.",
        words: ["договоры", "договоров", "встречи"],
        correctAnswers: { 1: "договоры" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы всегда проверяем {{1}} заранее.",
        words: ["обеда", "документов", "документы"],
        correctAnswers: { 1: "документы" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно директор назначает {{1}} в первой половине дня.",
        words: ["встреч", "договоры", "встречи"],
        correctAnswers: { 1: "встречи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы редко начинаем {{1}} к презентации перед выходными.",
        words: ["подготовка", "подготовку", "заказчика"],
        correctAnswers: { 1: "подготовку" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вам нужно встретиться с {{1}} в понедельник.",
        words: ["заказчиком", "заказчик", "отчётом"],
        correctAnswers: { 1: "заказчиком" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Им нужно прочитать отчёт до {{1}}.",
        words: ["обеда", "обед", "обедом"],
        correctAnswers: { 1: "обеда" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Тебе нужно проверить эти договоры. — Я не успею, у меня три {{1}} сегодня.",
        words: ["встреча", "встреч", "встречи"],
        correctAnswers: { 1: "встречи" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Директор редко встречается с {{1}}.",
        words: ["клиенты", "клиентами", "договорами"],
        correctAnswers: { 1: "клиентами" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Коллеге нужно назначить встречу {{1}}.",
        words: ["заказчик", "отчёту", "заказчику"],
        correctAnswers: { 1: "заказчику" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Quando? Ogni quanto? Entro quando? (scheda, es. 3, senza domande tra parentesi — regola 7.1) + «чем ты занимаешься на работе»: 10 frasi originali; sbagliate solo se davvero sbagliate (на прошлой неделе con il presente, сегодня con обычно / всегда) o errori di forma; senza spiegazioni
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно подготовить отчёт {{1}}.",
        words: ["редко", "к понедельника", "к понедельнику"],
        correctAnswers: { 1: "к понедельнику" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы готовим отчёт {{1}}.",
        words: ["сегодня", "в мае", "в май"],
        correctAnswers: { 1: "в мае" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} составляем договоры.",
        words: ["редко", "редкий", "на прошлой неделе"],
        correctAnswers: { 1: "редко" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно директор назначает встречи {{1}}.",
        words: ["в первой половине дня", "на прошлой неделе", "в первой половине дню"],
        correctAnswers: { 1: "в первой половине дня" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно закончить отчёт {{1}}.",
        words: ["всегда", "до обед", "до обеда"],
        correctAnswers: { 1: "до обеда" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы редко начинаем подготовку к презентации {{1}}.",
        words: ["перед выходные", "перед выходными", "на прошлой неделе"],
        correctAnswers: { 1: "перед выходными" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы всегда проверяем документы {{1}}.",
        words: ["сегодня", "заранее", "на прошлой неделе"],
        correctAnswers: { 1: "заранее" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Вам нужно встретиться с заказчиком {{1}}.",
        words: ["в понедельнике", "в понедельника", "в понедельник"],
        correctAnswers: { 1: "в понедельник" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно позвонить коллеге {{1}}.",
        words: ["после обеда", "после обед", "после обедом"],
        correctAnswers: { 1: "после обеда" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Я звоню им обычно {{1}}.",
        words: ["по понедельник", "по понедельникам", "на прошлой неделе"],
        correctAnswers: { 1: "по понедельникам" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Aspetto (scheda, es. 4 «Di solito o bisogna?»): 5 coppie da «нужно обычно в офисе». Обычно / всегда / редко → imperfettivo al presente (sbagliate: infinito perfettivo, infinito imperfettivo). Нужно → infinito perfettivo (sbagliate: presente imperfettivo, futuro perfettivo; mai l'infinito imperfettivo); con spiegazioni
// ============================================================
const p4cards = [
    { front: "Обычно мы ___ отчёт в мае.", back: "готовим", distractors: ["подготовить", "готовить"], explanation: "Обычно = abitudine: imperfettivo al presente (мы готовим)." },
    { front: "Нужно ___ отчёт к понедельнику.", back: "подготовить", distractors: ["готовим", "подготовим"], explanation: "Un risultato entro lunedì: нужно + infinito perfettivo (подготовить)." },
    { front: "Мы редко ___ договоры.", back: "составляем", distractors: ["составить", "составлять"], explanation: "Редко = poche volte, abitudine: imperfettivo al presente (мы составляем)." },
    { front: "Нам сегодня нужно ___ договоры.", back: "составить", distractors: ["составляем", "составим"], explanation: "Oggi, una cosa da finire: нам нужно + infinito perfettivo (составить)." },
    { front: "Мы всегда ___ документы заранее.", back: "проверяем", distractors: ["проверить", "проверять"], explanation: "Всегда = ogni volta: imperfettivo al presente (мы проверяем)." },
    { front: "Нужно ___ эти документы.", back: "проверить", distractors: ["проверяем", "проверим"], explanation: "Questi documenti, un risultato: нужно + infinito perfettivo (проверить)." },
    { front: "Обычно директор ___ встречи в первой половине дня.", back: "назначает", distractors: ["назначить", "назначать"], explanation: "Обычно = abitudine. Il direttore (lui) → назначает." },
    { front: "Коллеге нужно ___ встречу заказчику.", back: "назначить", distractors: ["назначает", "назначит"], explanation: "Al collega serve un risultato: коллеге нужно + infinito perfettivo (назначить)." },
    { front: "Она всегда ___ отчёты в первой половине дня.", back: "читает", distractors: ["прочитать", "читать"], explanation: "Всегда = abitudine: imperfettivo al presente (она читает)." },
    { front: "Им нужно ___ отчёт до обеда.", back: "прочитать", distractors: ["читают", "прочитают"], explanation: "Leggerlo tutto prima di pranzo: им нужно + infinito perfettivo (прочитать)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Aspetto (scheda, es. 5 «Abitudine o risultato?»): le altre coppie — закончить / заканчивать, начать / начинать, встретиться / встречаться, написать, подготовить, звонить. 10 frasi originali (es. 5 + dialoghi «Срочно» + «чем ты занимаешься на работе»). Dopo нужно sbagliate = forme coniugate (mai l'infinito imperfettivo: «нужно начинать подготовку» è corretto); dopo обычно / редко = due infiniti; «я обычно заканчивают» dell'originale → заканчиваю; senza spiegazioni
// ============================================================
const p5cards = [
    { front: "Мне нужно ___ отчёт до обеда.", back: "закончить", distractors: ["заканчиваю", "закончу"] },
    { front: "Я обычно ___ отчёт к концу недели.", back: "заканчиваю", distractors: ["закончить", "заканчивать"] },
    { front: "Нужно ___ подготовку к презентации.", back: "начать", distractors: ["начинаем", "начнём"] },
    { front: "Мы редко ___ подготовку к презентации перед выходными.", back: "начинаем", distractors: ["начать", "начинать"] },
    { front: "Вам нужно ___ с заказчиком в понедельник.", back: "встретиться", distractors: ["встречаетесь", "встретитесь"] },
    { front: "Директор редко ___ с клиентами.", back: "встречается", distractors: ["встретиться", "встречаться"] },
    { front: "Вам нужно прочитать отчёт и ___ ваши замечания.", back: "написать", distractors: ["пишете", "напишете"] },
    { front: "Сегодня нужно ___ документы к переговорам.", back: "подготовить", distractors: ["готовим", "подготовим"] },
    { front: "Как обычно, мы ___ документы к переговорам.", back: "готовим", distractors: ["подготовить", "готовить"] },
    { front: "Я ___ им обычно по понедельникам.", back: "звоню", distractors: ["позвонить", "звонить"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto (scheda, es. 8 «Scegli la fine giusta»): inizio → fine. 6 nuove (обычно мы / я обычно / директор редко + imperfettivo; нам сегодня нужно + perfettivo; встречу заказчику; три встречи) + 4 vecchie (pagina «В университете»: пять экзаменов, много глаголов, десять–двадцать слов; «Обычно или хочу»: нравится читать). Inizi scelti in modo che in MATCH ogni fine stia solo con il suo inizio (persona, caso); senza spiegazioni
// ============================================================
const p6cards = [
    { front: "Обычно мы…", back: "готовим отчёт в мае.", distractors: ["нужно подготовить отчёт в мае.", "подготовить отчёт в мае."] },
    { front: "Я обычно…", back: "заканчиваю отчёт к концу недели.", distractors: ["нужно закончить отчёт к концу недели.", "закончить отчёт к концу недели."] },
    { front: "Директор редко…", back: "встречается с клиентами.", distractors: ["встретиться с клиентами.", "встречаются с клиентами."] },
    { front: "Нам сегодня…", back: "нужно составить договоры.", distractors: ["составляем договоры.", "составим договоры."] },
    { front: "Коллеге нужно назначить встречу…", back: "заказчику.", distractors: ["заказчик.", "заказчиком."] },
    { front: "— Тебе нужно проверить эти договоры. — Я не успею, у меня три…", back: "встречи сегодня.", distractors: ["встреч сегодня.", "встреча сегодня."] },
    { front: "Ты знаешь, что в эту сессию нам нужно сдать пять…", back: "экзаменов?", distractors: ["экзамены?", "экзамена?"] },
    { front: "— Сколько глаголов? — Много…", back: "глаголов.", distractors: ["глаголы.", "глагола."] },
    { front: "Обычно мы учим десять–двадцать новых…", back: "слов к каждому занятию.", distractors: ["слова к каждому занятию.", "слово к каждому занятию."] },
    { front: "Андрею нравится…", back: "читать Достоевского.", distractors: ["прочитать Достоевского.", "читает Достоевского."] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto (scheda, es. 7 «Abbina l'inizio alla fine»), reggenza dei verbi: встретиться с + strumentale, позвонить + dativo, пользоваться + strumentale, спросить + accusativo, к + dativo, в + prepositivo, составить + accusativo. 7 nuove (нужно обычно в офисе, чем ты занимаешься на работе) + 3 vecchie da «В университете» (сессия проходит, экзамены проходят, до + genitivo). Ogni fine ha un caso diverso → nel MATCH un solo abbinamento possibile; con spiegazioni
// ============================================================
const p7cards = [
    { front: "Вам нужно встретиться…", back: "с заказчиком в понедельник.", distractors: ["с заказчик в понедельник.", "заказчиком в понедельник."], explanation: "Встретиться с кем? с + strumentale: с заказчиком." },
    { front: "Мне нужно позвонить…", back: "коллеге после обеда.", distractors: ["коллегу после обеда.", "коллега после обеда."], explanation: "Позвонить кому? dativo: коллеге (in italiano «telefonare a»)." },
    { front: "Мы редко пользуемся…", back: "телефоном.", distractors: ["телефон.", "с телефоном."], explanation: "Пользоваться чем? strumentale senza preposizione: телефоном." },
    { front: "В понедельник нужно спросить…", back: "начальника.", distractors: ["начальнику.", "начальник."], explanation: "Спросить кого? accusativo: начальника (in italiano «chiedere a» — in russo senza dativo!)." },
    { front: "Мы редко начинаем подготовку к…", back: "презентации перед выходными.", distractors: ["презентация перед выходными.", "презентацию перед выходными."], explanation: "Подготовка к чему? к + dativo: к презентации." },
    { front: "Обычно директор назначает встречи в первой…", back: "половине дня.", distractors: ["половины дня.", "половиной дня."], explanation: "Когда? в + prepositivo: в первой половине дня." },
    { front: "Нам сегодня нужно составить…", back: "договоры.", distractors: ["договоров.", "договорами."], explanation: "Составить что? accusativo: договоры." },
    { front: "Экзамены…", back: "проходят в аудитории 23 на втором этаже.", distractors: ["проходит в аудитории 23 на втором этаже.", "проходят в аудиторию 23 на втором этаже."], explanation: "Dalla pagina «В университете»: экзамены (plurale) → проходят; где? в аудитории." },
    { front: "Сессия…", back: "проходит два раза в год.", distractors: ["проходят два раза в год.", "проходит два раза на год."], explanation: "Dalla pagina «В университете»: сессия (singolare) → проходит; два раза в год." },
    { front: "Обычно в зимнюю сессию мы сдаём экзамены до…", back: "середины февраля.", distractors: ["середина февраля.", "середину февраля."], explanation: "Dalla pagina «В университете»: до + genitivo — до середины февраля." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto, chi fa che cosa in ufficio: il direttore назначает встречи, встречается с клиентами, firma (подпись); l'assistente (Катя) составляет график встреч, отвечает на звонки, porta i documenti на подпись; i colleghi звонят партнёрам, получают ответ, приходят на собрание. Fonti: «нужно обычно в офисе», dialoghi «Срочно», MICRO «в офисе», «Катя в офисе» (doveri al presente). 8 nuove + 2 vecchie (профессор принимает / мы сдаём экзамены). Sbagliate = verbo dell'altro ruolo + forma; senza spiegazioni
// ============================================================
const p8cards = [
    { front: "Обычно директор ___ встречи в первой половине дня.", back: "назначает", distractors: ["составляет", "назначают"] },
    { front: "Директор редко ___ с клиентами.", back: "встречается", distractors: ["звонит", "встречаются"] },
    { front: "Нужно ___ документы директору на подпись.", back: "отнести", distractors: ["подписать", "относим"] },
    { front: "Катя ___ график встреч для директора.", back: "составляет", distractors: ["назначает", "составляют"] },
    { front: "Катя ___ на звонки.", back: "отвечает", distractors: ["звонит", "отвечаю"] },
    { front: "Сегодня нужно ___ партнёрам и назначить встречи.", back: "позвонить", distractors: ["подписать", "позвоним"] },
    { front: "Нужно отправить е-мейл и ___ ответ.", back: "получить", distractors: ["назначить", "получим"] },
    { front: "Сотрудникам нужно ___ на собрание.", back: "прийти", distractors: ["подписать", "придут"] },
    { front: "Иногда профессор ___ экзамен до позднего вечера.", back: "принимает", distractors: ["сдаёт", "принимают"] },
    { front: "Обычно в зимнюю сессию мы ___ экзамены до середины февраля.", back: "сдаём", distractors: ["принимаем", "сдаёт"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelVof9() {
    const panel = document.getElementById('panel-vof-9');
    if (!panel) return;

    const container = panel.querySelector('#vof-9-cards-container');
    const prevBtn   = panel.querySelector('#vof-9-deck-prev');
    const nextBtn   = panel.querySelector('#vof-9-deck-next');
    const counterEl = panel.querySelector('#vof-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Нужно ___ отчёт к понедельнику.", options: ["готовим", "подготовить", "подготовим"], answer: "подготовить" },
        { question: "Обычно мы ___ отчёт в мае.", options: ["готовим", "подготовить", "готовить"], answer: "готовим" },
        { question: "Мы редко ___ договоры.", options: ["составить", "составлять", "составляем"], answer: "составляем" },
        { question: "Мне нужно позвонить ___ после обеда.", options: ["коллеге", "коллегу", "коллега"], answer: "коллеге" },
        { question: "В понедельник нужно спросить ___.", options: ["начальнику", "начальника", "начальник"], answer: "начальника" },
        { question: "Вам нужно встретиться ___ в понедельник.", options: ["заказчиком", "с заказчиком", "с заказчик"], answer: "с заказчиком" },
        { question: "— Тебе нужно проверить эти договоры. — Я не успею, у меня три ___ сегодня.", options: ["встреч", "встреча", "встречи"], answer: "встречи" },
        { question: "Обычно директор ___ встречи в первой половине дня.", options: ["назначает", "составляет", "назначают"], answer: "назначает" },
        { question: "Коллеге нужно назначить встречу ___.", options: ["заказчик", "заказчиком", "заказчику"], answer: "заказчику" },
        { question: "Мы всегда ___ документы заранее.", options: ["проверить", "проверяем", "проверять"], answer: "проверяем" }
    ];
    const matchPairs = [
        { left: "Вам нужно встретиться…", right: "с заказчиком в понедельник." },
        { left: "Мне нужно позвонить…", right: "коллеге после обеда." },
        { left: "Мы редко пользуемся…", right: "телефоном." },
        { left: "В понедельник нужно спросить…", right: "начальника." },
        { left: "Нам сегодня нужно составить…", right: "договоры." },
        { left: "Директор редко…", right: "встречается с клиентами." },
        { left: "Катя отвечает…", right: "на звонки." },
        { left: "Нужно отнести документы директору…", right: "на подпись." },
        { left: "— Я не успею, у меня три…", right: "встречи сегодня." },
        { left: "Обычно директор назначает встречи в первой…", right: "половине дня." }
    ];
    const quizData = [
        { id: "vof9-w1", promptPrefix: "Обычно мы ", promptSuffix: " (готовить / подготовить) отчёт в мае.", answers: ["готовим"] },
        { id: "vof9-w2", promptPrefix: "Нужно ", promptSuffix: " (готовить / подготовить) отчёт к понедельнику.", answers: ["подготовить"] },
        { id: "vof9-w3", promptPrefix: "Мы всегда ", promptSuffix: " (проверять / проверить) документы заранее.", answers: ["проверяем"] },
        { id: "vof9-w4", promptPrefix: "Нам сегодня нужно ", promptSuffix: " (составлять / составить) договоры.", answers: ["составить"] },
        { id: "vof9-w5", promptPrefix: "Я обычно ", promptSuffix: " (заканчивать / закончить) отчёт к концу недели.", answers: ["заканчиваю"] },
        { id: "vof9-w6", promptPrefix: "Мы редко ", promptSuffix: " (начинать / начать) подготовку к презентации перед выходными.", answers: ["начинаем"] },
        { id: "vof9-w7", promptPrefix: "Директор редко ", promptSuffix: " (встречаться / встретиться) с клиентами.", answers: ["встречается"] },
        { id: "vof9-w8", promptPrefix: "Вам нужно прочитать отчёт и ", promptSuffix: " (писать / написать) ваши замечания.", answers: ["написать"] },
        { id: "vof9-w9", promptPrefix: "Обычно директор ", promptSuffix: " (назначать / назначить) встречи в первой половине дня.", answers: ["назначает"] },
        { id: "vof9-w10", promptPrefix: "Сегодня нужно составить и ", promptSuffix: " (проверять / проверить) договоры.", answers: ["проверить"] }
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

    // Typed answers: ignore case, ё/е, extra spaces and a final dot
    // (Italian keyboards usually have no ё).
    function normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ').replace(/[.!]+$/, '').toLowerCase().replace(/ё/g, 'е');
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

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container vof-9-card';
            card.dataset.index = i;
            if (i === 0) card.classList.add('visible');
            card.hidden = (i !== 0);

            if (i < MC_END) {
                const item = multipleChoiceData[i];
                const opts = item.options.map((o, idx) => `<div class="word-option" data-word="${o}" data-index="${idx}">${o}</div>`).join('');
                const questionText = item.question.replace('___', `<span class="gap" data-gap="1" data-correct="${item.answer}"></span>`);
                card.innerHTML = `
                    <div class="instruction">Completa la frase scegliendo la forma corretta</div>
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
                const otherPairs = matchPairs.filter((_, idx) => idx !== pairIdx);
                const shuffledOthers = otherPairs.sort(() => Math.random() - 0.5).slice(0, 2);
                const allPairs = [pair, ...shuffledOthers].sort(() => Math.random() - 0.5);

                let fronts = allPairs.map((p, idx) => ({ text: p.left,  type: 'front', id: idx }));
                let backs  = allPairs.map((p, idx) => ({ text: p.right, type: 'back',  id: idx }));
                fronts.sort(() => Math.random() - 0.5);
                backs.sort(() => Math.random() - 0.5);

                let selectedMatchCard = null;
                let isProcessingMatch = false;

                const matchContainer = document.createElement('div');
                matchContainer.className = 'fca01-match-container';
                const feedbackEl = document.createElement('p');
                feedbackEl.className = 'fca01-match-feedback';
                const matchGrid = document.createElement('div');
                matchGrid.className = 'fca01-match-grid';
                const colFronts = document.createElement('div');
                colFronts.className = 'fca01-match-col';
                const colBacks = document.createElement('div');
                colBacks.className = 'fca01-match-col';

                matchGrid.appendChild(colFronts);
                matchGrid.appendChild(colBacks);
                matchContainer.appendChild(feedbackEl);
                matchContainer.appendChild(matchGrid);
                card.appendChild(matchContainer);

                function handleMatchClick(clickedCard) {
                    if (isProcessingMatch || clickedCard.classList.contains('matched')) return;
                    if (clickedCard === selectedMatchCard) return;

                    if (!selectedMatchCard) {
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    if (selectedMatchCard.dataset.type === clickedCard.dataset.type) {
                        selectedMatchCard.classList.remove('selected');
                        selectedMatchCard = clickedCard;
                        clickedCard.classList.add('selected');
                        return;
                    }

                    const firstId    = selectedMatchCard.dataset.id;
                    const secondId   = clickedCard.dataset.id;
                    const previousCard = selectedMatchCard;

                    if (firstId === secondId) {
                        previousCard.classList.add('matched');
                        clickedCard.classList.add('matched');
                        feedbackEl.textContent = "✨ Отлично!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "🎉 ПОБЕДА! 🎉";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "Неверно";
                        feedbackEl.className = "fca01-match-feedback wrong";
                        setTimeout(() => {
                            clickedCard.classList.remove('selected', 'wrong');
                            previousCard.classList.remove('selected', 'wrong');
                            feedbackEl.textContent = "";
                            isProcessingMatch = false;
                        }, 800);
                        selectedMatchCard = null;
                    }
                }

                function createMatchElement(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card';
                    div.textContent = item.text;
                    div.dataset.id   = item.id;
                    div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatchClick(div));
                    return div;
                }

                fronts.forEach(item => colFronts.appendChild(createMatchElement(item)));
                backs.forEach(item  => colBacks.appendChild(createMatchElement(item)));
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);

            } else {
                const item = quizData[i - MATCH_END];
                card.innerHTML = `
                    <h3 class="quiz-title">Write</h3>
                    <p class="quiz-instruction">Scrivete la forma corretta</p>
                    <div class="quiz-item" data-id="${item.id}">
                        <div class="quiz-prompt">${item.promptPrefix}<input type="text" class="quiz-input" data-index="${i - MATCH_END}">${item.promptSuffix}</div>
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">Проверить</button></div>
                        <div class="quiz-feedback"></div>
                    </div>
                `;
                ensureCardTitle(card, i);

                const instructionEl = document.createElement('div');
                instructionEl.className = 'instruction';
                card.insertBefore(instructionEl, card.firstElementChild);
            }

            container.appendChild(card);
        }

        attachHandlers();
    }

    function attachHandlers() {
        container.querySelectorAll('.vof-9-card').forEach(card => {
            const cardIndex = parseInt(card.dataset.index, 10);
            if (cardIndex >= MC_END) return;

            let checked = false;
            const gapElements  = Array.from(card.querySelectorAll('.gap'));
            const wordElements = Array.from(card.querySelectorAll('.word-option'));
            const verifyBtn    = card.querySelector('.verify-btn');
            const nextBtn      = card.querySelector('.next-btn');
            const feedback     = card.querySelector('.feedback');

            wordElements.forEach(wordElement => {
                wordElement.addEventListener('click', function() {
                    if (this.classList.contains('used') || checked) return;
                    const emptyGap = gapElements.find(gap => !gap.classList.contains('filled'));
                    if (!emptyGap) return;
                    const word = this.dataset.word;
                    emptyGap.textContent = word;
                    emptyGap.classList.add('filled');
                    emptyGap.dataset.word      = word;
                    emptyGap.dataset.wordIndex = this.dataset.index;
                    this.classList.add('used');
                });
            });

            gapElements.forEach(gap => {
                gap.addEventListener('click', function() {
                    if (checked || !this.classList.contains('filled')) return;
                    const wordIndex   = this.dataset.wordIndex;
                    const wordElement = wordElements.find(w => w.dataset.index === wordIndex);
                    this.textContent = '';
                    this.classList.remove('filled');
                    delete this.dataset.word;
                    delete this.dataset.wordIndex;
                    if (wordElement) wordElement.classList.remove('used');
                });
            });

            if (nextBtn) nextBtn.addEventListener('click', () => showCard(currentCard + 1));

            verifyBtn.addEventListener('click', function() {
                checked = true;
                const correctAnswer = multipleChoiceData[cardIndex].answer;
                let correct = 0;
                gapElements.forEach(gap => {
                    if (gap.dataset.word === correctAnswer) {
                        gap.classList.remove('filled');
                        gap.classList.add('correct');
                        correct = 1;
                    } else {
                        gap.classList.add('incorrect');
                    }
                });
                feedback.textContent = `Corretto: ${correct} / 1`;
                verifyBtn.style.display = 'none';
                nextBtn.style.display   = 'inline-block';
            });
        });

        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card    = this.closest('.vof-9-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === normalizeInput(ans));
                if (isCorrect) {
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                    input.disabled = true;
                    this.disabled  = true;
                    fb.textContent = 'Правильно!';
                    fb.className   = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = 'Неправильно. Попробуйте ещё раз.';
                    fb.className   = 'quiz-feedback incorrect';
                }
            });
        });

        container.querySelectorAll('.quiz-input').forEach(input => {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    const btn = this.closest('.quiz-item').querySelector('.quiz-check-btn');
                    if (btn && !btn.disabled) btn.click();
                }
            });
        });
    }

    function showCard(idx) {
        currentCard = idx;
        container.querySelectorAll('.vof-9-card').forEach((c, i) => {
            c.classList.toggle('visible', i === idx);
            c.hidden = (i !== idx);
        });
        counterEl.textContent = (idx + 1) + ' / ' + TOTAL_CARDS;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === TOTAL_CARDS - 1);
    }

    prevBtn.addEventListener('click', () => { if (currentCard > 0)               showCard(currentCard - 1); });
    nextBtn.addEventListener('click', () => { if (currentCard < TOTAL_CARDS - 1) showCard(currentCard + 1); });

    buildCards();
    showCard(0);
}

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-vof-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-vof-01', exercises: p1exercises }),
    'panel-vof-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-vof-02', exercises: p2exercises }),
    'panel-vof-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-vof-03', exercises: p3exercises }),
    'panel-vof-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-vof-04', cards: p4cards }),
    'panel-vof-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-vof-05', cards: p5cards }),
    'panel-vof-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-vof-06', cards: p6cards }),
    'panel-vof-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-vof-07', cards: p7cards }),
    'panel-vof-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-vof-08', cards: p8cards }),
    'panel-vof-9': () => initPanelVof9()
};

initPanelManager({ initializers, enableAccessControl: true });
