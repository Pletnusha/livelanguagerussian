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
// PANEL MANAGER
// ============================================================
const initializers = {
    'panel-vof-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-vof-01', exercises: p1exercises }),
    'panel-vof-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-vof-02', exercises: p2exercises }),
    'panel-vof-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-vof-03', exercises: p3exercises }),
    'panel-vof-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-vof-04', cards: p4cards }),
    'panel-vof-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-vof-05', cards: p5cards }),
    'panel-vof-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-vof-06', cards: p6cards })
};

initPanelManager({ initializers, enableAccessControl: true });
