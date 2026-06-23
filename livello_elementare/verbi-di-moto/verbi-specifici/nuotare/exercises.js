import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Misto (плавать/плыть + ехать/ездить + идти/ходить + бежать/бегать)
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Я не люблю {{1}} в бассейне.",
        words: ["плавать", "плыть", "ходить"],
        correctAnswers: { 1: "плавать" },
        wrongFeedback: {
            "плыть":   "Verbo: «не люблю» = atteggiamento generale verso l'azione → плавать (senza direzione). Forma: infinito dopo «не люблю» → плавать.",
            "ходить":  "Verbo: azione in acqua, non a piedi → плавать. Forma: infinito dopo «не люблю» → плавать."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Андрей {{1}} часами в бассейне — готовится к соревнованиям.",
        words: ["плывёт", "плавает", "бегает"],
        correctAnswers: { 1: "плавает" },
        wrongFeedback: {
            "плывёт":  "Verbo: «часами» = azione abituale senza percorso specifico → плавать. Forma: Андрей = lui → 3ª pers. sing. → плавает.",
            "бегает":  "Verbo: movimento in acqua → плавать. Forma: lui → плавает."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Тихо — учитель уже {{1}}!",
        words: ["идёт", "ходит", "едет"],
        correctAnswers: { 1: "идёт" },
        wrongFeedback: {
            "ходит":   "Verbo: «уже» = movimento percepibile adesso, diretto → идти. Forma: учитель = lui → идёт.",
            "едет":    "Verbo: si sposta a piedi, senza mezzo → идти. Forma: lui → идёт."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Мы {{1}} вокруг Сицилии на яхте.",
        words: ["плывём", "плаваем", "едем"],
        correctAnswers: { 1: "плывём" },
        wrongFeedback: {
            "плаваем": "Verbo: «вокруг Сицилии» + «на яхте» = percorso preciso + mezzo → плыть. Forma: мы → плывём.",
            "едем":    "Verbo: movimento sull'acqua → плыть. Forma: мы → плывём."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Ты же на машине {{1}} на работу — что ты здесь делаешь?",
        words: ["ездишь", "едешь", "ходишь"],
        correctAnswers: { 1: "ездишь" },
        wrongFeedback: {
            "едешь":   "Verbo: «же» = abitudine consolidata → ездить. Forma: ты → ездишь.",
            "ходишь":  "Verbo: «на машине» = mezzo di trasporto → ездить. Forma: ты → ездишь."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Я {{1}} на работу, опаздываю!",
        words: ["бегу", "бегаю", "еду"],
        correctAnswers: { 1: "бегу" },
        wrongFeedback: {
            "бегаю":   "Verbo: «опаздываю» = movimento urgente adesso → бежать. Forma: я → бегу.",
            "еду":     "Verbo: si muove a piedi di corsa, senza mezzo → бежать. Forma: я → бегу."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Вы {{1}} на пароме?",
        words: ["плывёте", "плаваете", "едете"],
        correctAnswers: { 1: "плывёте" },
        wrongFeedback: {
            "плаваете": "Verbo: «на пароме» = mezzo preciso + direzione implicita → плыть. Forma: вы → плывёте.",
            "едете":    "Verbo: movimento sull'acqua → плыть. Forma: вы → плывёте."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "По пятницам они вместе {{1}} в спортзал.",
        words: ["ходят", "идут", "ездят"],
        correctAnswers: { 1: "ходят" },
        wrongFeedback: {
            "идут":    "Verbo: «по пятницам» = abitudine settimanale → ходить. Forma: они → ходят.",
            "ездят":   "Verbo: si spostano a piedi, senza mezzo → ходить. Forma: они → ходят."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Мы взяли за привычку — теперь каждое утро {{1}} по пляжу.",
        words: ["бегаем", "бежим", "ходим"],
        correctAnswers: { 1: "бегаем" },
        wrongFeedback: {
            "бежим":   "Verbo: «взяли за привычку» + «каждое утро» = abitudine acquisita → бегать. Forma: мы → бегаем.",
            "ходим":   "Verbo: si corre, non si cammina → бегать. Forma: мы → бегаем."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Машина сломалась, вот я {{1}} на метро!",
        words: ["еду", "езжу", "иду"],
        correctAnswers: { 1: "еду" },
        wrongFeedback: {
            "езжу":    "Verbo: «машина сломалась» = viaggio singolo forzato, non abitudine → ехать. Forma: я → еду.",
            "иду":     "Verbo: «на метро» = mezzo di trasporto → ехать. Forma: я → еду."
        }
    },
];

// ============================================================
// PANEL 5 — DragDrop · student · Спряжение ПЛАВАТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "Я {{1}} на яхте вдоль Амальфитанского побережья.",
        words: ["плыву", "плывём", "плывут"],
        correctAnswers: { 1: "плыву" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "Ты {{1}} на лодке?!",
        words: ["плывёшь", "плыву", "плывёт"],
        correctAnswers: { 1: "плывёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "Всё {{1}} перед глазами.",
        words: ["плывёт", "плывёшь", "плывём"],
        correctAnswers: { 1: "плывёт" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "Мы {{1}} с Мальты на Сицилию.",
        words: ["плывём", "плывут", "плывёт"],
        correctAnswers: { 1: "плывём" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "Вы {{1}} на пароме?",
        words: ["плывёте", "плывём", "плывут"],
        correctAnswers: { 1: "плывёте" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "Они {{1}} на другой берег.",
        words: ["плывут", "плывёт", "плывёте"],
        correctAnswers: { 1: "плывут" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "Ты {{1}} на спине или на животе?",
        words: ["плывёшь", "плывём", "плывёт"],
        correctAnswers: { 1: "плывёшь" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "{{1}} картинка на мониторе.",
        words: ["Плывёт", "Плывут", "Плывём"],
        correctAnswers: { 1: "Плывёт" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "Она {{1}} быстрее всех в команде.",
        words: ["плывёт", "плывём", "плывут"],
        correctAnswers: { 1: "плывёт" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛЫТЬ.",
        text: "Куда вы {{1}} на яхте?",
        words: ["плывёте", "плывём", "плывут"],
        correctAnswers: { 1: "плывёте" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Спряжение ПЛАВАТЬ
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Я очень плохо {{1}}.",
        words: ["плаваю", "плаваешь", "плавают"],
        correctAnswers: { 1: "плаваю" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Ты хорошо {{1}}?",
        words: ["плаваешь", "плаваю", "плавает"],
        correctAnswers: { 1: "плаваешь" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Рыбка {{1}} в пруду.",
        words: ["плавает", "плаваем", "плавают"],
        correctAnswers: { 1: "плавает" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Андрей {{1}} часами в бассейне.",
        words: ["плавает", "плаваешь", "плаваете"],
        correctAnswers: { 1: "плавает" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Когда мы готовимся к соревнованиям, мы {{1}} несколько часов в день.",
        words: ["плаваем", "плавают", "плаваете"],
        correctAnswers: { 1: "плаваем" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Вы уже {{1}}?! Море ещё холодное!",
        words: ["плаваете", "плаваем", "плавают"],
        correctAnswers: { 1: "плаваете" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Утки {{1}} в озере.",
        words: ["плавают", "плавает", "плаваем"],
        correctAnswers: { 1: "плавают" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Он {{1}} в этой теме.",
        words: ["плавает", "плаваю", "плаваешь"],
        correctAnswers: { 1: "плавает" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Я никогда не {{1}} в море — боюсь.",
        words: ["плаваю", "плавает", "плаваешь"],
        correctAnswers: { 1: "плаваю" }
    },
    {
        instruction: "Выбери правильную форму глагола ПЛАВАТЬ.",
        text: "Выходи из воды! Ты уже час {{1}}!",
        words: ["плаваешь", "плаваю", "плавает"],
        correctAnswers: { 1: "плаваешь" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Мы плывём с Мальты на Сицилию.",                   back: "Мы обычно на яхте плаваем по Средиземному морю.",    explanation: "Percorso specifico da A a B → плыть. Abitudine senza direzione precisa → плавать." },
    { front: "Вы плывёте на пароме?",                             back: "Я боюсь плавать на пароме.",                          explanation: "Viaggio in corso su un traghetto specifico → плыть. Infinito dopo «боюсь» = atteggiamento generale → плавать." },
    { front: "Ты плывёшь на лодке?!",                             back: "И часто ты плаваешь на лодке?",                       explanation: "Movimento in corso su una barca adesso → плыть. «Часто» = abitudine → плавать." },
    { front: "Они плывут на другой берег.",                       back: "Они плавают туда-сюда уже час!",                      explanation: "Direzione precisa verso l'altra riva → плыть. «Туда-сюда» = multidirezionale senza meta → плавать." },
    { front: "Мы плывём в кругосветное путешествие!",             back: "Мы никогда не плаваем в круиз.",                      explanation: "Viaggio specifico in una direzione → плыть. Negazione di un'abitudine → плавать." },
    { front: "Я плыву на яхте вдоль Амальфитанского побережья.", back: "Я очень плохо плаваю.",                               explanation: "Navigazione lungo un percorso preciso → плыть. Capacità generale in acqua → плавать." },
    { front: "Утки плавают возле берега.", back: "Утка плывёт к берегу.", explanation: "«Возле берега» = senza direzione precisa → плавать. «К берегу» = direzione precisa adesso → плыть." },
    { front: "Я плохо плаваю.", back: "Я плыву к берегу.", explanation: "«Плохо плаваю» = capacità generale in acqua → плавать. «К берегу» = direzione precisa adesso → плыть." },
    { front: "Ты давно плаваешь, выходи из воды!", back: "Куда ты плывёшь?!", explanation: "«Давно плаваешь» = nuota da un po' senza meta → плавать. «Куда плывёшь» = sta andando da qualche parte adesso → плыть." },
    { front: "Она всегда плавает вдоль берега.", back: "Он плывёт к лодке.", explanation: "«Всегда вдоль берега» = abitudine senza meta fissa → плавать. «К лодке» = direzione precisa adesso → плыть." },
];

// ============================================================
// PANEL 7 — Flashcard · student
// ============================================================
const p7cards = [
    { front: "Мы плывём с Мальты на Сицилию.",                                              back: "Мы обычно на яхте плаваем по Средиземному морю." },
    { front: "Вы плывёте на пароме?",                                                        back: "Я боюсь плавать на пароме." },
    { front: "Ты плывёшь на лодке?!",                                                        back: "И часто ты плаваешь на лодке?" },
    { front: "Они плывут на другой берег.",                                                  back: "Они плавают туда-сюда уже час!" },
    { front: "Я плыву на яхте вдоль Амальфитанского побережья.",                            back: "Я очень плохо плаваю." },
    { front: "Этим летом мы плывём в круиз по Средиземному морю.",                          back: "Мы каждый год плаваем в круиз." },
    { front: "Всё плывёт перед глазами.",                                                    back: "Он плавает в этой теме." },
    { front: "Косяк сардин плывёт прямо на юг.",                                            back: "Рыбки плавают в аквариуме." },
    { front: "Рядом с нами плывут дельфины.",                                               back: "Дети плавают с дельфинами в аквапарке." },
    { front: "Утки плывут к берегу — какая-то женщина бросает им хлеб.",                   back: "Утки плавают возле берега, ждут, когда прохожие их покормят." },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Косяк сардин плывёт прямо на юг.",                                       back: "Рыбки плавают в аквариуме." },
    { front: "Утки плывут к берегу — какая-то женщина бросает им хлеб.",               back: "Утки плавают возле берега, ждут, когда прохожие их покормят." },
    { front: "Мы плывём в кругосветное путешествие!",                                   back: "Мы никогда не плаваем в круиз." },
    { front: "Они плывут на другой берег.",                                             back: "Они плавают туда-сюда уже час!" },
    { front: "Вы плывёте на пароме?",                                                   back: "Я боюсь плавать на пароме." },
    { front: "Я плыву на яхте вдоль Амальфитанского побережья.",                       back: "Мы плаваем на яхте вокруг Италии каждый год." },
    { front: "Мы плывём вокруг Сицилии на яхте.",                                      back: "Мы каждые выходные плаваем на яхте." },
    { front: "Андрей плавает часами в бассейне — готовится к соревнованиям.",          back: "Андрей плывёт на другой берег." },
    { front: "Плывёт картинка на мониторе.",                                            back: "Мысли плавали как рыбки в аквариуме." },
    { front: "Вы уже плаваете?! Море ещё холодное!",                                   back: "О, вы на лодке? Куда плывёте?" },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Ты куда?",                                    back: "На улице дождь идёт — иду домой.",                       explanation: "«Домой» = destinazione precisa adesso → идти. Nota: anche la pioggia «идёт» in russo — il verbo cattura ogni movimento diretto. Forma: иду = я." },
    { front: "В субботу идём в ресторан тайской кухни.",    back: "Они всегда в этот ресторан ходят.",                     explanation: "«В субботу» = uscita specifica una volta → идти. «Всегда» = ci vanno regolarmente, è la loro abitudine → ходить. Stesso ristorante, due verbi diversi." },
    { front: "На чём ты обычно на работу?",                 back: "Езжу на машине.",                                       explanation: "«Обычно» = come vai al lavoro ogni giorno → ездить. Non parla di questo viaggio ma della sua routine. Forma: езжу = я." },
    { front: "Машина сломалась!",                           back: "Еду на метро!",                                         explanation: "La macchina è rotta → viaggio di emergenza, solo oggi → ехать. Se funzionasse, direbbe «езжу на машине». Forma: еду = я." },
    { front: "Прости, опаздываю!",                          back: "Бегу на работу!",                                       explanation: "«Опаздываю» = corre verso il lavoro adesso, corsa urgente in una direzione → бежать. Non è la sua abitudine mattutina — è un'emergenza. Forma: бегу = я." },
    { front: "Есть утренние привычки?",                     back: "Каждое утро бегаем по пляжу.",                          explanation: "«Каждое утро» = corsa quotidiana sul lungomare, senza una meta fissa → бегать. Un'abitudine di gruppo, non una corsa verso qualcosa. Forma: бегаем = мы." },
    { front: "Ты куда с цветами?",                          back: "Несу цветы Кате.",                                      explanation: "I fiori stanno andando da Katja adesso, in questo momento → нести. «Кате» = destinatario preciso, il movimento ha uno scopo. Forma: несу = я." },
    { front: "Кто помогает с тяжестями?",                   back: "Андрей. Чемоданы всегда носит он.",                    explanation: "«Всегда» = Andrej porta le valigie per abitudine consolidata, non una volta sola → носить. È il suo ruolo fisso nel gruppo. Forma: носит = он." },
    { front: "Как доставляете грузы?",                      back: "Обычно возим через Эстонию.",                           explanation: "«Обычно» = è il loro percorso logistico abituale → возить. Non questo trasporto specifico, ma la loro prassi. Forma: возим = мы." },
    { front: "Что в грузовике?",                            back: "Везёт груз в Эстонию.",                                 explanation: "Questo camion, adesso, sta portando un carico preciso verso l'Estonia → везти. Viaggio specifico in corso con una destinazione. Forma: везёт = он." },
    { front: "Зачем ты за нос его водишь?",                 back: "К чему это ты ведёшь?",                                 explanation: "«Водить за нос» = girarlo in tondo, ingannarlo — azione ripetuta senza meta (водить). «К чему ведёшь?» = dove stai portando questo discorso — direzione precisa (вести). Stessa metafora, logica opposta." },
    { front: "Куда плывёте?",                               back: "Плывём с Мальты на Сицилию.",                          explanation: "«Куда?» + «с Мальты на Сицилию» = rotta precisa da A a B → плыть. La domanda stessa rivela che c'è una direzione. Forma: плывём = мы." },
    { front: "Умеешь плавать?",                             back: "Я очень плохо плаваю.",                                 explanation: "«Умеешь?» = capacità generale, non un percorso → плавать. «Очень плохо» descrive quanto bene nuota, non dove sta andando. Forma: плаваю = я." },
    { front: "Дочь ведёт дневник.",                         back: "Я каждое утро вожу собаку гулять.",                    explanation: "«Вести дневник» = mantenere un diario nel tempo, azione continua → вести (uso figurato). «Каждое утро» = portare il cane a passeggio per abitudine → водить. Forma: ведёт = она, вожу = я." },
];

// ============================================================
// PANEL 9 — Flashcard · student
// ============================================================
const p9cards = [
    { front: "Машина сломалась!",                           back: "Еду на метро!" },
    { front: "Ты куда с цветами?",                          back: "Несу цветы Кате." },
    { front: "В субботу идём в ресторан тайской кухни.",    back: "Они всегда в этот ресторан ходят." },
    { front: "Что в грузовике?",                            back: "Везёт груз в Эстонию." },
    { front: "Прости, опаздываю!",                          back: "Бегу на работу!" },
    { front: "Дочь ведёт дневник.",                         back: "Я каждое утро вожу собаку гулять." },
    { front: "Куда плывёте?",                               back: "Плывём с Мальты на Сицилию." },
    { front: "Кто помогает с тяжестями?",                   back: "Андрей. Чемоданы всегда носит он." },
    { front: "На чём ты обычно ездишь на работу?",          back: "Езжу на машине." },
    { front: "Зачем ты за нос его водишь?",                 back: "К чему это ты ведёшь?" },
    { front: "Есть утренние привычки?",                     back: "Каждое утро бегаем по пляжу." },
    { front: "Умеешь плавать?",                             back: "Я очень плохо плаваю." },
    { front: "Как доставляете грузы?",                      back: "Обычно возим через Эстонию." },
    { front: "Ты куда?",                                    back: "На улице дождь идёт — иду домой." },
];

// ============================================================
// PANEL 10 — Flashcard · paid
// ============================================================
const p10cards = [
    { front: "Аня, сделай фото! Рядом с лодкой дельфины —",                    back: "плывут!" },
    { front: "Машина сломалась, вот я сегодня",                                 back: "еду на метро." },
    { front: "Куда ты с котом?",                                                back: "Несу к ветеринару." },
    { front: "Снова в круиз по Средиземному морю —",                            back: "плывёте?" },
    { front: "Смотрите — гепард",                                               back: "бежит за газелью!" },
    { front: "По субботам я бабушку —",                                         back: "вожу на рынок." },
    { front: "Тихо — учитель уже",                                              back: "идёт!" },
    { front: "Честно говоря, я очень плохо —",                                  back: "плаваю." },
    { front: "Этот грузовик",                                                   back: "везёт груз в Эстонию." },
    { front: "Она всегда в Верону",                                             back: "ездит на поезде." },
    { front: "Андрей чемоданы всегда",                                          back: "носит сам." },
    { front: "Женя бегает",                                                      back: "вдоль берега по утрам." },
    { front: "Нашу программу",                                                   back: "ведёт известный журналист." },
    { front: "По воскресеньям бабушка",                                          back: "ходит в церковь." },
    { front: "Андрей всегда",                                                    back: "возит с собой копии документов." },
];

// ============================================================
// PANEL 4 — Mixed Quiz · public
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-nuot-04');
    if (!panel) return;

    const container = panel.querySelector('#nuot-04-cards-container');
    const prevBtn   = panel.querySelector('#nuot-04-deck-prev');
    const nextBtn   = panel.querySelector('#nuot-04-deck-next');
    const counterEl = panel.querySelector('#nuot-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Рыбки ___ в аквариуме.",                                                    options: ["плавают",  "плывут",   "плавает"],  answer: "плавают"  },
        { question: "Мы ___ с Мальты на Сицилию.",                                               options: ["плывём",   "плаваем",  "плывут"],   answer: "плывём"   },
        { question: "Вы ___ на пароме?",                                                          options: ["плывёте",  "плаваете", "плывут"],   answer: "плывёте"  },
        { question: "По пятницам они вместе ___ в спортзал.",                                    options: ["ходят",    "идут",     "ходит"],    answer: "ходят"    },
        { question: "Тихо — учитель уже ___!",                                                   options: ["идёт",     "ходит",    "идут"],     answer: "идёт"     },
        { question: "Андрей ___ часами в бассейне — готовится к соревнованиям.",                 options: ["плавает",  "плывёт",   "плавают"],  answer: "плавает"  },
        { question: "Она всегда в Верону ___ на поезде.",                                        options: ["ездит",    "едет",     "ездят"],    answer: "ездит"    },
        { question: "В субботу ___ в ресторан тайской кухни.",                                   options: ["идём",     "ходим",    "идут"],     answer: "идём"     },
        { question: "Косяк сардин ___ прямо на юг.",                                             options: ["плывёт",   "плавает",  "плывут"],   answer: "плывёт"   },
        { question: "Рядом с нами ___ дельфины!",                                                options: ["плывут",   "плавают",  "плывёт"],   answer: "плывут"   },
    ];
    const matchPairs = [
        { left: "Машина сломалась — ___ на работу на метро.", right: "еду"      },
        { left: "Зачем ты за нос его ___?",                   right: "водишь"   },
        { left: "Прости, опаздываю — ___ на работу!",         right: "бегу"     },
        { left: "Везёт тому, кто ___.",                        right: "везёт"    },
        { left: "Чемоданы всегда ___ он.",                     right: "носит"    },
        { left: "___ цветы Кате.",                             right: "Несу"     },
        { left: "Ты ___ на лодке?!",                           right: "плывёшь"  },
        { left: "Я очень плохо ___.",                          right: "плаваю"   },
        { left: "Смотрите — гепард ___ за газелью!",           right: "бежит"    },
        { left: "Этот грузовик ___ груз в Эстонию.",           right: "везёт"    },
    ];
    const quizData = [
        { id: "q01", promptPrefix: "К чему это ты ",                                            promptSuffix: "?",                                          answers: ["ведёшь"]  },
        { id: "q02", promptPrefix: "Я не ",                                                     promptSuffix: " шорты, ненавижу их.",                       answers: ["ношу"]    },
        { id: "q03", promptPrefix: "Мы взяли за привычку — теперь каждое утро ",               promptSuffix: " по пляжу.",                                 answers: ["бегаем"]  },
        { id: "q04", promptPrefix: "На чём ты обычно ",                                         promptSuffix: " на работу?",                                answers: ["ездишь"]  },
        { id: "q05", promptPrefix: "По субботам я бабушку ",                                    promptSuffix: " на рынок.",                                 answers: ["вожу"]    },
        { id: "q06", promptPrefix: "На улице дождь идёт — ",                                    promptSuffix: " домой.",                                    answers: ["иду"]     },
        { id: "q07", promptPrefix: "Я ",                                                        promptSuffix: " на яхте вдоль Амальфитанского побережья.", answers: ["плыву"]   },
        { id: "q08", promptPrefix: "Когда мы готовимся к соревнованиям, мы ",                  promptSuffix: " несколько часов в день.",                   answers: ["плаваем"] },
        { id: "q09", promptPrefix: "Обычно ",                                                   promptSuffix: " грузы через Эстонию.",                      answers: ["возим"]   },
        { id: "q10", promptPrefix: "Дочь ",                                                     promptSuffix: " дневник.",                                  answers: ["ведёт"]   },
    ];

    const MC_END      = multipleChoiceData.length;
    const MATCH_END   = MC_END + matchPairs.length;
    const TOTAL_CARDS = MATCH_END + quizData.length;

    if (TOTAL_CARDS === 0) return;

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

    function buildCards() {
        container.innerHTML = '';

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container nuot-04-card';
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
                        feedbackEl.textContent = "✨ Esatto!";
                        feedbackEl.className = "fca01-match-feedback correct";
                        selectedMatchCard = null;
                        setTimeout(() => { feedbackEl.textContent = ""; }, 1000);
                        const remaining = matchContainer.querySelectorAll('.fca01-match-card:not(.matched)').length;
                        if (remaining === 0) feedbackEl.textContent = "🎉 Tutto abbinato! 🎉";
                    } else {
                        isProcessingMatch = true;
                        clickedCard.classList.add('wrong');
                        previousCard.classList.add('wrong');
                        feedbackEl.textContent = "Sbagliato";
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
                        <div class="quiz-controls"><button class="btn btn-primary quiz-check-btn">VERIFICA</button></div>
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
        container.querySelectorAll('.nuot-04-card').forEach(card => {
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
                const card    = this.closest('.nuot-04-card');
                const idx     = parseInt(card.dataset.index) - MATCH_END;
                const item    = quizData[idx];
                const input   = card.querySelector('.quiz-input');
                const fb      = card.querySelector('.quiz-feedback');
                const userAnswer = normalizeInput(input.value);
                const isCorrect  = item.answers.some(ans => userAnswer === ans);
                if (isCorrect) {
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                    input.disabled = true;
                    this.disabled  = true;
                    fb.textContent = 'Corretto!';
                    fb.className   = 'quiz-feedback correct';
                } else {
                    input.classList.remove('correct');
                    input.classList.add('incorrect');
                    fb.textContent = 'Sbagliato. Riprova.';
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
        container.querySelectorAll('.nuot-04-card').forEach((c, i) => {
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
    'panel-nuot-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-nuot-01',    exercises: p1exercises }),
    'panel-nuot-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-nuot-05',    exercises: p5exercises }),
    'panel-nuot-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-nuot-06',    exercises: p6exercises }),
    'panel-nuot-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-nuot-02', cards: p2cards }),
    'panel-nuot-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-nuot-07', cards: p7cards }),
    'panel-nuot-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-nuot-08', cards: p8cards }),
    'panel-nuot-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-nuot-03', cards: p3cards }),
    'panel-nuot-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-nuot-09', cards: p9cards }),
    'panel-nuot-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-nuot-10', cards: p10cards }),
    'panel-nuot-04':  () => initPanel4()
};

initPanelManager({ initializers, enableAccessControl: true });
