import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «Список дел студента: нужно было или обычно» — seconda pagina del blocco «Нужно или обычно» (piano approvato dalla PM 19.11.2026).
// Al passato: (кому) нужно было + infinito perfettivo (una cosa da fare) ↔ обычно / всегда / редко / часто + passato imperfettivo (abitudine).
// Nuova difficoltà: genere e numero al passato (он читал, она учила, мы писали, я — Лена — брала); «нужно было», mai «нужна была / нужен был».
// Fonti: PDF «список дел студента», «учиться прошедшее» (solo domande senza учиться / заниматься), testo su Тимур; frasi della pagina 1 portate al passato (permesso PM).
// Mai l'infinito imperfettivo come sbagliata dopo «нужно было» (rimprovero: «Нужно было готовиться заранее!» è corretto). Perfettivo al passato solo come sbagliata.
// Errore nell'originale: «Обычно я беру конспект…» nella lista al passato → брал / брала.
// Schema: 1 D&D lista (+ vecchio, con spiegazioni) · 2 D&D он / она / мы · 3 D&D quando / ogni quanto
//         4 FC нужно было o обычно (con spiegazioni) · 5 FC tre forme · 6 FC allora e adesso (misto) · 7 FC domande → risposte (con spiegazioni) · 8 FC Тимур (misto) · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL 1 — DragDrop · public
// Lessico al passato (PDF «список дел студента»): нужно было + quale verbo — 5 cose della lista + 2 frasi della pagina 1 portate al passato; 3 vecchie dalla pagina «В университете» (presente); con spiegazioni
// ============================================================
const p1exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно было {{1}} доклад к экзамену.",
        words: ["написать", "выполнить", "подготовиться"],
        correctAnswers: { 1: "написать" },
        explanation: "Scrivere una relazione: написать доклад. Al passato: нужно было (sempre «было»)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно было {{1}} новые слова к следующей лекции.",
        words: ["взять", "подготовиться", "выучить"],
        correctAnswers: { 1: "выучить" },
        explanation: "Imparare a memoria: выучить слова."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно было {{1}} к экзамену.",
        words: ["подготовить", "подготовиться", "сдать"],
        correctAnswers: { 1: "подготовиться" },
        explanation: "Prepararsi a qualcosa: подготовиться к + dativo. Senza oggetto ci vuole -ся."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Ему нужно было {{1}} статьи к экзамену.",
        words: ["выполнить", "прочитать", "подготовиться"],
        correctAnswers: { 1: "прочитать" },
        explanation: "Leggere fino alla fine: прочитать статьи. A lui serviva → ему нужно было."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мне нужно было {{1}} конспект лекций у Ольги.",
        words: ["взять", "выполнить", "подготовиться"],
        correctAnswers: { 1: "взять" },
        explanation: "Prendere in prestito gli appunti: взять конспект у кого-то."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нужно было {{1}} задание к семинару.",
        words: ["подготовиться", "выучить", "выполнить"],
        correctAnswers: { 1: "выполнить" },
        explanation: "Fare un compito: выполнить задание."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "В прошлую сессию нам нужно было {{1}} пять экзаменов.",
        words: ["выполнить", "прочитать", "сдать"],
        correctAnswers: { 1: "сдать" },
        explanation: "Dare (e superare) un esame: сдать экзамен. Пять → экзаменов (genitivo plurale)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы {{1}} десять–двадцать новых слов к каждому занятию.",
        words: ["учим", "выучить", "учить"],
        correctAnswers: { 1: "учим" },
        explanation: "Presente: обычно = abitudine → imperfettivo (учим)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно {{1}} спряжения глаголов к понедельнику.",
        words: ["учим", "выучить", "выучим"],
        correctAnswers: { 1: "выучить" },
        explanation: "Presente: нам нужно + infinito perfettivo (un risultato entro lunedì)."
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "К каждому семинару мы {{1}} доклад или читаем статьи.",
        words: ["пишем", "написать", "писать"],
        correctAnswers: { 1: "пишем" },
        explanation: "Presente: «к каждому семинару» = ogni volta → imperfettivo (пишем)."
    }
];

// ============================================================
// PANEL 2 — DragDrop · student
// Nuovo: il passato secondo genere e numero (он читал, она учила, мы писали, сессия проходила, экзамены проходили, ему было) — 6 frasi originali al passato + 4 frasi della pagina 1 portate al passato; sbagliate = stesso verbo in altro genere / numero; senza spiegazioni
// ============================================================
const p2exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "Она всегда {{1}} новые слова к следующей лекции.",
        words: ["учил", "учили", "учила"],
        correctAnswers: { 1: "учила" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы {{1}} доклад к экзамену.",
        words: ["писали", "писал", "писала"],
        correctAnswers: { 1: "писали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Он всегда {{1}} статьи к экзамену.",
        words: ["читала", "читал", "читали"],
        correctAnswers: { 1: "читал" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы редко {{1}} к экзамену за месяц!",
        words: ["готовился", "готовились", "готовилась"],
        correctAnswers: { 1: "готовились" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Лекции по истории экологии Тимур практически не {{1}}.",
        words: ["посещал", "посещала", "посещали"],
        correctAnswers: { 1: "посещал" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Лена говорит: «Обычно я {{1}} конспект лекций у Ольги».",
        words: ["брал", "брали", "брала"],
        correctAnswers: { 1: "брала" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сессия {{1}} два раза в год.",
        words: ["проходил", "проходила", "проходили"],
        correctAnswers: { 1: "проходила" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Экзамены {{1}} в аудитории 23 на втором этаже.",
        words: ["проходила", "проходило", "проходили"],
        correctAnswers: { 1: "проходили" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно в зимнюю сессию мы {{1}} экзамены до середины февраля.",
        words: ["сдавали", "сдавал", "сдавала"],
        correctAnswers: { 1: "сдавали" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Тимуру {{1}} очень сложно писать доклады.",
        words: ["было", "был", "была"],
        correctAnswers: { 1: "было" }
    }
];

// ============================================================
// PANEL 3 — DragDrop · paid
// Quando? Ogni quanto? al passato: всегда / редко / часто / два раза в год / один раз в месяц ↔ на прошлой неделе / к понедельнику / … лет назад — 4 frasi originali al passato + 6 della pagina 1 portate al passato; «на прошлой неделе» sbagliato solo dove è davvero sbagliato (con обычно o in frasi impossibili); senza spiegazioni
// ============================================================
const p3exercises = [
    {
        instruction: "Trascina la forma giusta.",
        text: "— Я уже два сдала. — Когда? — {{1}}.",
        words: ["Два раза в год", "На прошлой неделе", "К каждому занятию"],
        correctAnswers: { 1: "На прошлой неделе" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сессия проходила {{1}}.",
        words: ["два раза в год", "к пятнице", "к каждому занятию"],
        correctAnswers: { 1: "два раза в год" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы готовили доклад {{1}}.",
        words: ["один раз в месяц", "на прошлой неделе", "один раз в месяце"],
        correctAnswers: { 1: "один раз в месяц" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Нам нужно было выучить спряжения глаголов {{1}}.",
        words: ["к понедельника", "на понедельнике", "к понедельнику"],
        correctAnswers: { 1: "к понедельнику" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Мы {{1}} готовились к экзамену за месяц!",
        words: ["на прошлой неделе", "редко", "редкий"],
        correctAnswers: { 1: "редко" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно в зимнюю сессию мы сдавали экзамены {{1}}.",
        words: ["к каждому семинару", "до середина февраля", "до середины февраля"],
        correctAnswers: { 1: "до середины февраля" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно я готовилась к сессии {{1}}.",
        words: ["около месяца", "около месяц", "к пятнице"],
        correctAnswers: { 1: "около месяца" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "— Ты {{1}} брал конспекты лекций?",
        words: ["частый", "часто", "к пятнице"],
        correctAnswers: { 1: "часто" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Обычно мы заканчивали сдавать сессию {{1}}.",
        words: ["к Новому году", "к Новый год", "на прошлой неделе"],
        correctAnswers: { 1: "к Новому году" }
    },
    {
        instruction: "Trascina la forma giusta.",
        text: "Сколько лет {{1}} ты закончил университет?",
        words: ["через", "после", "назад"],
        correctAnswers: { 1: "назад" }
    }
];

// ============================================================
// PANEL 4 — Flashcard · public
// Aspetto al passato, 5 coppie dalla lista originale: обычно / всегда / редко + passato imperfettivo (sbagliate: passato perfettivo, infinito perfettivo) ↔ нужно было + infinito perfettivo (sbagliate: passato imperfettivo, passato perfettivo — mai l'infinito imperfettivo); con spiegazioni
// ============================================================
const p4cards = [
    { front: "Обычно мы ___ доклад к экзамену.", back: "писали", distractors: ["написали", "написать"], explanation: "Обычно = abitudine al passato: imperfettivo (мы писали)." },
    { front: "Нам нужно было ___ доклад к экзамену.", back: "написать", distractors: ["писали", "написали"], explanation: "Нужно было + infinito perfettivo: una cosa da finire. Dopo «нужно было» mai il passato." },
    { front: "Она всегда ___ новые слова к следующей лекции.", back: "учила", distractors: ["выучила", "выучить"], explanation: "Всегда = ogni volta: imperfettivo al passato (она учила)." },
    { front: "Ей нужно было ___ новые слова к следующей лекции.", back: "выучить", distractors: ["учила", "выучила"], explanation: "A lei serviva un risultato: ей нужно было + infinito perfettivo (выучить)." },
    { front: "Мы редко ___ к экзамену за месяц!", back: "готовились", distractors: ["подготовились", "подготовиться"], explanation: "Редко = poche volte: anche così è un'abitudine → imperfettivo (мы готовились)." },
    { front: "Нам нужно было ___ к последнему экзамену.", back: "подготовиться", distractors: ["готовились", "подготовились"], explanation: "Un esame preciso, un risultato: нужно было + infinito perfettivo (подготовиться)." },
    { front: "Он всегда ___ статьи к экзамену.", back: "читал", distractors: ["прочитал", "прочитать"], explanation: "Всегда = abitudine: imperfettivo al passato (он читал)." },
    { front: "Ему нужно было ___ статьи к экзамену.", back: "прочитать", distractors: ["читал", "прочитал"], explanation: "A lui serviva leggerli tutti: ему нужно было + infinito perfettivo (прочитать)." },
    { front: "Лена: «Обычно я ___ конспект лекций у Ольги».", back: "брала", distractors: ["взяла", "взять"], explanation: "Обычно = abitudine: imperfettivo al passato. Parla Lena → я брала (femminile)." },
    { front: "Мне нужно было ___ конспект лекций у Ольги.", back: "взять", distractors: ["брала", "взяла"], explanation: "Una volta, un risultato: мне нужно было + infinito perfettivo (взять)." }
];

// ============================================================
// PANEL 5 — Flashcard · student
// Tre forme al passato: infinito perfettivo / passato imperfettivo / passato perfettivo (написать / писали / написали). 10 frasi originali della pagina 1 e del testo su Тимур portate al passato, diverse da quelle del pannello 4; senza spiegazioni
// ============================================================
const p5cards = [
    { front: "Обычно мы ___ десять–двадцать новых слов к каждому занятию.", back: "учили", distractors: ["выучить", "выучили"] },
    { front: "Нам нужно было ___ спряжения глаголов к понедельнику.", back: "выучить", distractors: ["учили", "выучили"] },
    { front: "Обычно в зимнюю сессию мы ___ экзамены до середины февраля.", back: "сдавали", distractors: ["сдать", "сдали"] },
    { front: "В прошлую сессию нам нужно было ___ пять экзаменов.", back: "сдать", distractors: ["сдавали", "сдали"] },
    { front: "Обычно мы ___ доклад один раз в месяц.", back: "готовили", distractors: ["подготовить", "подготовили"] },
    { front: "Доклад о социальных сетях нужно было ___ к пятнице.", back: "подготовить", distractors: ["готовили", "подготовили"] },
    { front: "К каждому семинару мы ___ доклад или читали статьи.", back: "писали", distractors: ["написать", "написали"] },
    { front: "Студентам нужно было ___ задание к следующему занятию.", back: "выполнить", distractors: ["выполняли", "выполнили"] },
    { front: "Студенты редко ___ задания к занятиям!", back: "выполняли", distractors: ["выполнить", "выполнили"] },
    { front: "Тимуру нужно было ___ два доклада к экзамену.", back: "написать", distractors: ["писал", "написал"] }
];

// ============================================================
// PANEL 6 — Flashcard · paid
// Misto: la stessa frase originale al presente (vecchio, pagina «В университете») e al passato (nuovo). Сейчас: «…» → Раньше: «… ___ …». Trappole: нужно было (non нужна была / нужно был), il verbo dopo нужно было resta all'infinito, genere e numero, perfettivo al passato sbagliato con обычно / редко; senza spiegazioni
// ============================================================
const p6cards = [
    { front: "Сейчас: «Обычно мы учим новые слова к каждому занятию». Раньше: «Обычно мы ___ новые слова к каждому занятию».", back: "учили", distractors: ["выучили", "учил"] },
    { front: "Сейчас: «Нам нужно выучить спряжения глаголов». Раньше: «Нам ___ выучить спряжения глаголов».", back: "нужно было", distractors: ["нужна была", "нужно был"] },
    { front: "Сейчас: «К каждому семинару мы пишем доклад». Раньше: «К каждому семинару мы ___ доклад».", back: "писали", distractors: ["написали", "писал"] },
    { front: "Сейчас: «Тебе нужно прочитать эту статью к семинару». Раньше: «Тебе нужно было ___ эту статью к семинару».", back: "прочитать", distractors: ["прочитал", "читал"] },
    { front: "Сейчас: «Сессия проходит два раза в год». Раньше: «Сессия ___ два раза в год».", back: "проходила", distractors: ["проходило", "прошла"] },
    { front: "Сейчас (Лена): «Обычно я беру конспект лекций у Ольги». Раньше: «Обычно я ___ конспект лекций у Ольги».", back: "брала", distractors: ["взяла", "брал"] },
    { front: "Сейчас: «Обычно в зимнюю сессию мы сдаём экзамены до середины февраля». Раньше: «Обычно мы ___ экзамены до середины февраля».", back: "сдавали", distractors: ["сдали", "сдавал"] },
    { front: "Сейчас: «Экзамены проходят в аудитории 23». Раньше: «Экзамены ___ в аудитории 23».", back: "проходили", distractors: ["проходила", "прошли"] },
    { front: "Сейчас: «Мы редко готовим доклады к экзамену». Раньше: «Мы редко ___ доклады к экзамену».", back: "готовили", distractors: ["подготовили", "готовил"] },
    { front: "Сейчас (Тимур): «Обычно я готовлюсь к сессии около месяца». Раньше: «Обычно я ___ к сессии около месяца».", back: "готовился", distractors: ["подготовился", "готовилась"] }
];

// ============================================================
// PANEL 7 — Flashcard · public
// Misto: domande originali di «учиться прошедшее» (e «Кто всегда сдаёт экзамены?») rivolte ai personaggi → risposte dal testo «Катя, Лена, Андрей, Тимур, Женя» e da «Тимур и университет», portate al passato (permesso PM). 8 nuove + 2 vecchie (нравилась + dativo; … лет назад dal blocco Годы); con spiegazioni
// ============================================================
const p7cards = [
    { front: "— Катя, ты часто прогуливала лекции?", back: "— Да, я редко ходила на лекции.", distractors: ["— Да, я редко сходила на лекции.", "— Да, я редко ходил на лекции."], explanation: "Редко = abitudine: imperfettivo (ходила). Parla Katja → femminile." },
    { front: "— Катя, ты часто брала конспекты лекций?", back: "— Да, обычно я брала конспекты у Тимура.", distractors: ["— Да, обычно я взяла конспекты у Тимура.", "— Да, обычно я брал конспекты у Тимура."], explanation: "Обычно = abitudine: imperfettivo al passato (брала), femminile." },
    { front: "— Тимур, ты часто прогуливал лекции?", back: "— Нет, я никогда не пропускал лекции.", distractors: ["— Нет, я никогда не пропущу лекции.", "— Нет, я никогда не пропускала лекции."], explanation: "Никогда не = mai, abitudine al passato: imperfettivo (не пропускал). Пропущу è futuro." },
    { front: "— Тимур, ты часто давал свои конспекты?", back: "— Да, Катя обычно брала конспекты у меня.", distractors: ["— Да, Катя обычно взяла конспекты у меня.", "— Да, Катя обычно брал конспекты у меня."], explanation: "Il soggetto è Катя: брала (femminile). Обычно → imperfettivo." },
    { front: "— Тимур, ты готовил много докладов?", back: "— Да, каждые две недели я готовил доклад или писал статью.", distractors: ["— Да, каждые две недели я подготовил доклад или написал статью.", "— Да, каждые две недели я готовила доклад или писала статью."], explanation: "Каждые две недели = ripetizione: imperfettivo (готовил, писал)." },
    { front: "— Лена, ты читала статьи, чтобы подготовиться к экзамену?", back: "— Да, я много читала и искала дополнительные материалы в интернете.", distractors: ["— Да, я много читал и искал дополнительные материалы в интернете.", "— Да, я много читаю и ищу дополнительные материалы в интернете."], explanation: "Domanda al passato → risposta al passato. Parla Lena → читала, искала." },
    { front: "— Женя, ты читал статьи, чтобы подготовиться к экзамену?", back: "— Нет, я не готовился заранее, а учил всё в последние три дня.", distractors: ["— Нет, я не готовилась заранее, а учила всё в последние три дня.", "— Нет, я не готовлюсь заранее, а учу всё в последние три дня."], explanation: "Al passato, maschile: готовился, учил. Abitudine → imperfettivo." },
    { front: "— Лена, ты всегда сдавала экзамены?", back: "— Нет, я очень боялась экзаменов и иногда их проваливала.", distractors: ["— Нет, я очень боялась экзаменов и иногда их провалила.", "— Нет, я очень боялся экзаменов и иногда их проваливал."], explanation: "Иногда = qualche volta, abitudine: imperfettivo (проваливала), non провалила." },
    { front: "— Какие предметы тебе нравились?", back: "— Мне нравилась история экономики.", distractors: ["— Мне нравился история экономики.", "— Я нравилась история экономики."], explanation: "Нравиться: ciò che piace è il soggetto (история, femminile → нравилась); a chi piace va al dativo (мне)." },
    { front: "(2016; сейчас 2026) — Сколько лет назад ты закончил университет?", back: "— Десять лет назад.", distractors: ["— Через десять лет.", "— Десять года назад."], explanation: "Passato: … назад. Con 10: лет." }
];

// ============================================================
// PANEL 8 — Flashcard · student
// Misto, chi fa che cosa all'università (al passato): il professore читал лекции, отвечал, принимал экзамен; lo studente слушал / посещал лекции, задавал вопросы, сдавал экзамены, брал конспект. Dal testo su Тимур e su Андрей + lista «ЛЕКЦИИ» (PDF «университет нужно можно обычно»). Sbagliate: verbo dell'altro ruolo (senso) + forma. 9 nuove + 1 vecchia (presente); senza spiegazioni
// ============================================================
const p8cards = [
    { front: "Большинство профессоров интересно ___ лекции, и Тимуру нравилось их слушать.", back: "читали", distractors: ["слушали", "читал"] },
    { front: "Андрей ___ много лекций, которые читали разные профессора на YouTube.", back: "слушал", distractors: ["читал", "слушала"] },
    { front: "Тимур часто ___ много вопросов профессорам после лекции.", back: "задавал", distractors: ["отвечал", "задавала"] },
    { front: "Профессора обычно ___ очень подробно.", back: "отвечали", distractors: ["задавали", "отвечал"] },
    { front: "Лекции по истории экологии Тимур практически не ___.", back: "посещал", distractors: ["принимал", "посещала"] },
    { front: "Лекций он не посещал, поэтому Тимуру ___ написать два доклада к экзамену.", back: "нужно было", distractors: ["нужен был", "нужно был"] },
    { front: "Ему было сложно писать доклады, но он смог ___ их в срок.", back: "сдать", distractors: ["принять", "сдал"] },
    { front: "Иногда профессор ___ экзамен до позднего вечера.", back: "принимал", distractors: ["сдавал", "принимала"] },
    { front: "Обычно в зимнюю сессию мы ___ экзамены до середины февраля.", back: "сдавали", distractors: ["принимали", "сдавал"] },
    { front: "Обычно я ___ конспект лекций у Ольги.", back: "беру", distractors: ["даю", "брать"] }
];

// ============================================================
// PANEL 9 — Quiz misto (multiple choice + match + write) · public — ripasso di tutto
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanelSds9() {
    const panel = document.getElementById('panel-sds-9');
    if (!panel) return;

    const container = panel.querySelector('#sds-9-cards-container');
    const prevBtn   = panel.querySelector('#sds-9-deck-prev');
    const nextBtn   = panel.querySelector('#sds-9-deck-next');
    const counterEl = panel.querySelector('#sds-9-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Нам нужно было ___ доклад к экзамену.", options: ["писали", "написать", "написали"], answer: "написать" },
        { question: "Обычно мы ___ доклад к экзамену.", options: ["писали", "написали", "написать"], answer: "писали" },
        { question: "Она всегда ___ новые слова к следующей лекции.", options: ["учил", "учили", "учила"], answer: "учила" },
        { question: "Нам ___ подготовиться к последнему экзамену.", options: ["нужна была", "нужно было", "нужно был"], answer: "нужно было" },
        { question: "Мы редко ___ к экзамену за месяц!", options: ["подготовились", "подготовиться", "готовились"], answer: "готовились" },
        { question: "Иногда профессор ___ экзамен до позднего вечера.", options: ["принимал", "сдавал", "принял"], answer: "принимал" },
        { question: "Андрей ___ много лекций, которые читали разные профессора на YouTube.", options: ["читал", "слушал", "слушала"], answer: "слушал" },
        { question: "— Я уже два сдала. — Когда? — ___.", options: ["На прошлой неделе", "Два раза в год", "К каждому занятию"], answer: "На прошлой неделе" },
        { question: "Тимуру ___ очень сложно писать доклады.", options: ["был", "было", "была"], answer: "было" },
        { question: "Мне нужно было ___ конспект лекций у Ольги.", options: ["брала", "взяла", "взять"], answer: "взять" }
    ];
    const matchPairs = [
        { left: "Иногда профессор принимал экзамен до…", right: "позднего вечера." },
        { left: "Тимур часто задавал…", right: "много вопросов профессорам." },
        { left: "Профессора обычно отвечали…", right: "очень подробно." },
        { left: "Лекции по истории экологии Тимур…", right: "практически не посещал." },
        { left: "Обычно я брала конспект лекций…", right: "у Ольги." },
        { left: "— Я уже два сдала. — Когда?", right: "— На прошлой неделе." },
        { left: "Ему было очень сложно…", right: "писать доклады." },
        { left: "Тимур смог сдать доклады в…", right: "срок." },
        { left: "Нам нужно было подготовиться к…", right: "последнему экзамену." },
        { left: "Студенты сдавали экзамены…", right: "до середины февраля." }
    ];
    const quizData = [
        { id: "sds9-w1", promptPrefix: "Обычно мы ", promptSuffix: " доклад к экзамену.", answers: ["писали", "готовили", "делали"] },
        { id: "sds9-w2", promptPrefix: "Нам нужно было ", promptSuffix: " доклад к экзамену.", answers: ["написать", "подготовить", "сделать"] },
        { id: "sds9-w3", promptPrefix: "Она всегда ", promptSuffix: " новые слова к следующей лекции.", answers: ["учила", "выучивала"] },
        { id: "sds9-w4", promptPrefix: "Ей нужно было ", promptSuffix: " новые слова к следующей лекции.", answers: ["выучить"] },
        { id: "sds9-w5", promptPrefix: "Мы редко ", promptSuffix: " к экзамену за месяц!", answers: ["готовились"] },
        { id: "sds9-w6", promptPrefix: "Лена: «Обычно я ", promptSuffix: " конспект лекций у Ольги».", answers: ["брала", "просила"] },
        { id: "sds9-w7", promptPrefix: "Иногда профессор ", promptSuffix: " экзамен до позднего вечера.", answers: ["принимал", "проводил"] },
        { id: "sds9-w8", promptPrefix: "Нам ", promptSuffix: " подготовиться к последнему экзамену.", answers: ["нужно было", "было нужно"] },
        { id: "sds9-w9", promptPrefix: "Сейчас: «Сессия проходит два раза в год». Раньше: «Сессия ", promptSuffix: " два раза в год».", answers: ["проходила", "была"] },
        { id: "sds9-w10", promptPrefix: "Я закончил университет десять лет ", promptSuffix: ".", answers: ["назад"] }
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
            card.className = 'fca01-card-container sds-9-card';
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
        container.querySelectorAll('.sds-9-card').forEach(card => {
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
                const card    = this.closest('.sds-9-card');
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
        container.querySelectorAll('.sds-9-card').forEach((c, i) => {
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
    'panel-sds-1': () => new DragDropExercise({ rootId: 'ex-dragdrop-sds-01', exercises: p1exercises }),
    'panel-sds-2': () => new DragDropExercise({ rootId: 'ex-dragdrop-sds-02', exercises: p2exercises }),
    'panel-sds-3': () => new DragDropExercise({ rootId: 'ex-dragdrop-sds-03', exercises: p3exercises }),
    'panel-sds-4': () => new FlashcardExercise({ rootId: 'ex-flashcards-sds-04', cards: p4cards }),
    'panel-sds-5': () => new FlashcardExercise({ rootId: 'ex-flashcards-sds-05', cards: p5cards }),
    'panel-sds-6': () => new FlashcardExercise({ rootId: 'ex-flashcards-sds-06', cards: p6cards }),
    'panel-sds-7': () => new FlashcardExercise({ rootId: 'ex-flashcards-sds-07', cards: p7cards }),
    'panel-sds-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-sds-08', cards: p8cards }),
    'panel-sds-9': () => initPanelSds9()
};

initPanelManager({ initializers, enableAccessControl: true });
