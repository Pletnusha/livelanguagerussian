import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// PANEL 1 — DragDrop · public · Misto (летать/лететь)
// ============================================================
const p1exercises = [
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Машина сломалась, вот я сегодня {{1}} на метро.",
        words: ["еду", "езжу", "иду"],
        correctAnswers: { 1: "еду" },
        wrongFeedback: {
            "езжу": "Verbo: «машина сломалась» = viaggio singolo forzato oggi, non abitudine → ехать. Forma: я → еду.",
            "иду":  "Verbo: «на метро» = mezzo di trasporto → ехать. Forma: я → еду."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Каждую осень птицы {{1}} на юг.",
        words: ["летят", "летают", "летит"],
        correctAnswers: { 1: "летят" },
        wrongFeedback: {
            "летают": "Verbo: «на юг» = direzione precisa, migrazione stagionale → лететь. Forma: птицы = они → летят.",
            "летит":  "Verbo: direzione precisa → лететь. Forma: птицы = они (plurale) → летят."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Рыбки {{1}} в аквариуме.",
        words: ["плавают", "плывут", "плавает"],
        correctAnswers: { 1: "плавают" },
        wrongFeedback: {
            "плывут":  "Verbo: «в аквариуме» = movimento senza direzione, nessuna meta → плавать. Forma: рыбки = они → плавают.",
            "плавает": "Verbo: movimento senza direzione → плавать. Forma: рыбки = они (plurale) → плавают."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Прости, опаздываю — {{1}} на работу!",
        words: ["бегу", "бегаю", "еду"],
        correctAnswers: { 1: "бегу" },
        wrongFeedback: {
            "бегаю": "Verbo: «опаздываю» = corsa urgente adesso verso il lavoro → бежать. Forma: я → бегу.",
            "еду":   "Verbo: si muove a piedi di corsa, non con un mezzo → бежать. Forma: я → бегу."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Дочь {{1}} дневник.",
        words: ["ведёт", "водит", "несёт"],
        correctAnswers: { 1: "ведёт" },
        wrongFeedback: {
            "водит": "Verbo: «вести дневник» = tenere un diario nel tempo, azione continuativa → вести (figurato). Forma: дочь = она → ведёт.",
            "несёт": "Verbo: «вести дневник» = espressione fissa → вести. Forma: она → ведёт."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Они каждый год {{1}} на Мальдивы.",
        words: ["летают", "летят", "ездят"],
        correctAnswers: { 1: "летают" },
        wrongFeedback: {
            "летят":  "Verbo: «каждый год» = abitudine annuale, non questo volo specifico → летать. Forma: они → летают.",
            "ездят":  "Verbo: si va in aereo → летать. Forma: они → летают."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Чемоданы всегда {{1}} он.",
        words: ["носит", "несёт", "везёт"],
        correctAnswers: { 1: "носит" },
        wrongFeedback: {
            "несёт": "Verbo: «всегда» = abitudine consolidata, non questa volta sola → носить. Forma: он → носит.",
            "везёт": "Verbo: porta le valigie a piedi, non su un mezzo → носить. Forma: он → носит."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Мы {{1}} с Мальты на Сицилию.",
        words: ["плывём", "плаваем", "едем"],
        correctAnswers: { 1: "плывём" },
        wrongFeedback: {
            "плаваем": "Verbo: «с Мальты на Сицилию» = rotta precisa da A a B → плыть. Forma: мы → плывём.",
            "едем":    "Verbo: movimento sull'acqua → плыть. Forma: мы → плывём."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Эта муха {{1}} по комнате и жужжит.",
        words: ["летает", "летит", "бегает"],
        correctAnswers: { 1: "летает" },
        wrongFeedback: {
            "летит":  "Verbo: «по комнате» = volo caotico senza direzione → летать. Forma: муха = она → летает.",
            "бегает": "Verbo: la mosca vola, non corre → летать. Forma: она → летает."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "По пятницам они вместе {{1}} в спортзал.",
        words: ["ходят", "идут", "ездят"],
        correctAnswers: { 1: "ходят" },
        wrongFeedback: {
            "идут":   "Verbo: «по пятницам» = abitudine settimanale → ходить. Forma: они → ходят.",
            "ездят":  "Verbo: si spostano a piedi, senza mezzo → ходить. Forma: они → ходят."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Во вторник она {{1}} в командировку в Париж.",
        words: ["летит", "летает", "едет"],
        correctAnswers: { 1: "летит" },
        wrongFeedback: {
            "летает": "Verbo: «во вторник» + «в Париж» = volo specifico con destinazione precisa → лететь. Forma: она → летит.",
            "едет":   "Verbo: si va in aereo → лететь. Forma: она → летит."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "По субботам я бабушку {{1}} на рынок.",
        words: ["вожу", "везу", "несу"],
        correctAnswers: { 1: "вожу" },
        wrongFeedback: {
            "везу": "Verbo: accompagnare qualcuno (condurre insieme) → водить. Forma: я → вожу.",
            "несу": "Verbo: la nonna cammina — la accompagno, non la porto in braccio → водить. Forma: я → вожу."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Тихо — учитель уже {{1}}!",
        words: ["идёт", "ходит", "едет"],
        correctAnswers: { 1: "идёт" },
        wrongFeedback: {
            "ходит": "Verbo: «уже» = movimento percepibile adesso, diretto → идти. Forma: учитель = он → идёт.",
            "едет":  "Verbo: si sposta a piedi, senza mezzo → идти. Forma: он → идёт."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Этот грузовик {{1}} груз в Эстонию.",
        words: ["везёт", "возит", "несёт"],
        correctAnswers: { 1: "везёт" },
        wrongFeedback: {
            "возит": "Verbo: questo camion, adesso, sta portando un carico preciso → везти. Forma: грузовик = он → везёт.",
            "несёт": "Verbo: trasporto su mezzo → везти. Forma: он → везёт."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Мы взяли за привычку — теперь каждое утро {{1}} по пляжу.",
        words: ["бегаем", "бежим", "ходим"],
        correctAnswers: { 1: "бегаем" },
        wrongFeedback: {
            "бежим": "Verbo: «взяли за привычку» + «каждое утро» = abitudine acquisita → бегать. Forma: мы → бегаем.",
            "ходим": "Verbo: si corre, non si cammina → бегать. Forma: мы → бегаем."
        }
    },
    {
        instruction: "Выбери правильную форму глагола движения.",
        text: "Она всегда в Верону {{1}} на поезде.",
        words: ["ездит", "едет", "летит"],
        correctAnswers: { 1: "ездит" },
        wrongFeedback: {
            "едет":  "Verbo: «всегда» = abitudine consolidata → ездить. Forma: она → ездит.",
            "летит": "Verbo: «на поезде» = mezzo di trasporto su terra → ездить. Forma: она → ездит."
        }
    },
];

// ============================================================
// PANEL 5 — DragDrop · student · Спряжение ЛЕТАТЬ
// ============================================================
const p5exercises = [
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "Я {{1}} в отпуск, наконец-то!",
        words: ["лечу", "летишь", "летит"],
        correctAnswers: { 1: "лечу" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "Куда ты {{1}}?",
        words: ["летишь", "лечу", "летит"],
        correctAnswers: { 1: "летишь" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "Во вторник она {{1}} в командировку в Париж.",
        words: ["летит", "летим", "летят"],
        correctAnswers: { 1: "летит" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "Через неделю мы {{1}} в Милан.",
        words: ["летим", "летят", "летит"],
        correctAnswers: { 1: "летим" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "Куда вы {{1}} этим летом?",
        words: ["летите", "летим", "летят"],
        correctAnswers: { 1: "летите" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "Каждую осень птицы {{1}} на юг.",
        words: ["летят", "летит", "летите"],
        correctAnswers: { 1: "летят" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "{{1}} — очень хочу уже домой!",
        words: ["Лечу", "Летишь", "Летим"],
        correctAnswers: { 1: "Лечу" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "Смотри — воздушный шар {{1}} прямо над городом!",
        words: ["летит", "летят", "летим"],
        correctAnswers: { 1: "летит" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "Мы {{1}} с пересадкой в Стамбуле.",
        words: ["летим", "летят", "летите"],
        correctAnswers: { 1: "летим" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТЕТЬ.",
        text: "Вы {{1}} прямым рейсом или с пересадкой?",
        words: ["летите", "летим", "летят"],
        correctAnswers: { 1: "летите" }
    },
];

// ============================================================
// PANEL 6 — DragDrop · paid · Спряжение ЛЕТЕТЬ
// ============================================================
const p6exercises = [
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "Целый день {{1}} по городу.",
        words: ["летаю", "летаешь", "летает"],
        correctAnswers: { 1: "летаю" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "Ты часто по работе {{1}} в Германию?",
        words: ["летаешь", "летаю", "летает"],
        correctAnswers: { 1: "летаешь" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "Эта муха {{1}} по комнате и жужжит.",
        words: ["летает", "летают", "летаем"],
        correctAnswers: { 1: "летает" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "На распродажи мы {{1}} в Милан.",
        words: ["летаем", "летают", "летает"],
        correctAnswers: { 1: "летаем" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "Вы каждую зиму {{1}} в Таиланд?",
        words: ["летаете", "летаем", "летают"],
        correctAnswers: { 1: "летаете" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "Они каждый год {{1}} на Мальдивы.",
        words: ["летают", "летает", "летаете"],
        correctAnswers: { 1: "летают" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "После той новости я просто {{1}}!",
        words: ["летаю", "лечу", "летает"],
        correctAnswers: { 1: "летаю" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "Он {{1}} — влюбился, не иначе.",
        words: ["летает", "летит", "летают"],
        correctAnswers: { 1: "летает" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "Мы {{1}} только лоукостами — так дешевле.",
        words: ["летаем", "летают", "летаете"],
        correctAnswers: { 1: "летаем" }
    },
    {
        instruction: "Выбери правильную форму глагола ЛЕТАТЬ.",
        text: "Над морем {{1}} чайки.",
        words: ["летают", "летает", "летаем"],
        correctAnswers: { 1: "летают" }
    },
];

// ============================================================
// PANEL 2 — Flashcard · public
// ============================================================
const p2cards = [
    { front: "Во вторник она летит в командировку в Париж.",                          back: "Она каждый месяц летает в командировки.",                      explanation: "«Во вторник» + «в Париж» = volo specifico con data e destinazione → лететь. «Каждый месяц» = abitudine lavorativa ricorrente, senza data precisa → летать." },
    { front: "Через неделю мы летим в Милан.",                                         back: "На распродажи мы летаем в Милан.",                              explanation: "«Через неделю» = volo pianificato, data e città precisi → лететь. «На распродажи» = ci vanno ogni volta che ci sono i saldi — abitudine stagionale → летать." },
    { front: "Мы летим с пересадкой в Стамбуле.",                                     back: "Вы летаете в Европу с пересадкой в Стамбуле?",                  explanation: "Questo volo specifico passa per Istanbul — itinerario concreto in corso → лететь. «Летаете» = chiede se è la loro abitudine di viaggio in generale → летать." },
    { front: "Куда вы летите этим летом?",                                             back: "Вы каждое лето летаете на Мальдивы?",                           explanation: "«Этим летом» = questa estate, destinazione specifica → лететь. «Каждое лето» = tradizione annuale, nessuna data precisa → летать." },
    { front: "Каждую осень птицы летят на юг.",                                        back: "Перед дождём птицы летают низко.",                              explanation: "«На юг» = direzione precisa della migrazione stagionale → лететь. «Перед дождём» = comportamento generale senza meta — volano basse dappertutto → летать." },
    { front: "Когда ты летишь в Германию?",                                            back: "Ты часто по работе летаешь в Германию?",                       explanation: "«Когда» = chiede la data di questo volo specifico → лететь. «Часто по работе» = trasferte abituali, nessuna data → летать. Stessa Germania, due domande diverse." },
    { front: "Вы летите на распродажи в Милан?",                                       back: "На распродажи мы летаем в Милан.",                              explanation: "«Летите» = state partendo / questo viaggio specifico → лететь. «Летаем на распродажи» = lo facciamo sempre, è la nostra abitudine → летать. Stesso Milano, verbo diverso." },
    { front: "Мы берём только рюкзаки, поэтому летим в этот раз лоукостом.",          back: "Мы летаем только лоукостами — так дешевле.",                    explanation: "«В этот раз» = questa volta specifica, scelta occasionale → лететь. «Только лоукостами» = è la loro politica di viaggio abituale → летать." },
    { front: "Пчела летит на цветок.",                                                 back: "Пчёлы летают над цветами.",                                     explanation: "Una sola ape si dirige verso un fiore preciso, in questo momento → лететь. Lo sciame vola sui fiori in generale, in tutti i sensi → летать." },
    { front: "Я смотрю, как чайка летит над морем.",                                   back: "Над морем летают чайки.",                                       explanation: "Osservo questo gabbiano specifico in volo diretto → лететь. I gabbiani volano sul mare in generale — comportamento naturale senza meta → летать." },
];

// ============================================================
// PANEL 7 — Flashcard · student
// ============================================================
const p7cards = [
    { front: "Через неделю мы летим в Милан.",                                    back: "На распродажи мы летаем в Милан." },
    { front: "Каждую осень птицы летят на юг.",                                   back: "Перед дождём птицы летают низко." },
    { front: "Когда ты летишь в Германию?",                                       back: "Ты часто по работе летаешь в Германию?" },
    { front: "Пчела летит на цветок.",                                             back: "Пчёлы летают над цветами." },
    { front: "Я смотрю, как чайка летит над морем.",                              back: "Над морем летают чайки." },
    { front: "После трёх недель в командировке, лечу домой.",                     back: "Она летает в командировки каждый месяц." },
    { front: "Смотри — воздушный шар летит прямо над городом!",                  back: "Я боюсь летать на воздушном шаре." },
    { front: "Да, да, скоро буду! Уже лечу!",                                     back: "После той новости я просто летаю!" },
    { front: "Он летает — влюбился, не иначе.",                                   back: "Когда ты влюблён — всегда летаешь как на крыльях." },
    { front: "Анна боится летать.",                                                back: "Хотя Анна очень боится самолётов, она летит в Таиланд." },
];

// ============================================================
// PANEL 8 — Flashcard · paid
// ============================================================
const p8cards = [
    { front: "Во вторник она летит в командировку в Париж.",        back: "Она каждый месяц летает в командировки." },
    { front: "Куда вы летите этим летом?",                          back: "Вы каждое лето летаете на Мальдивы?" },
    { front: "Да, да, скоро буду! Уже лечу!",                       back: "После той новости я просто летаю!" },
    { front: "Он летает — влюбился, не иначе.",                     back: "Когда ты влюблён — всегда летаешь как на крыльях." },
    { front: "Анна боится летать.",                                  back: "Хотя Анна очень боится самолётов, она летит в Таиланд." },
    { front: "Они каждый год летают на Мальдивы.",                  back: "И в этом году они летят на Мальдивы, как им не надоесть?" },
    { front: "Куда ты летишь?",                                      back: "Лечу в Нью-Йорк." },
    { front: "Вы каждую зиму летаете в Таиланд?",                   back: "Мы на Новый год летим в Таиланд." },
    { front: "Она сегодня прямо летает!",                            back: "Она летит на свидание." },
    { front: "Я обожаю летать!",                                     back: "В Рим я лечу как обычно на самолёте." },
];

// ============================================================
// PANEL 3 — Flashcard · public
// ============================================================
const p3cards = [
    { front: "Когда она идёт гулять, она звонит подруге.",                   back: "идёт → идти",    explanation: "«Когда она идёт» = movimento in corso mentre accade qualcos'altro → идти, non ходить." },
    { front: "Она ходит гулять три раза в день.",                            back: "ходит → ходить", explanation: "«Три раза в день» = frequenza abituale → ходить, non идти." },
    { front: "Мы на выходные едем к родителям.",                             back: "едем → ехать",   explanation: "«На выходные» = viaggio specifico programmato → ехать, non ездить." },
    { front: "Ты же на машине ездишь на работу — что ты здесь делаешь?",    back: "ездишь → ездить", explanation: "«Же» = abitudine consolidata del soggetto → ездить, non ехать." },
    { front: "Вы летите прямым рейсом или с пересадкой?",                   back: "летите → лететь", explanation: "Domanda su questo volo specifico in corso → лететь, non летать." },
    { front: "Ты часто по работе летаешь в Германию?",                      back: "летаешь → летать", explanation: "«Часто» = trasferte abituali, nessuna data precisa → летать, non лететь." },
    { front: "Мы плывём вокруг Сицилии на яхте.",                           back: "плывём → плыть", explanation: "«Вокруг Сицилии» + «на яхте» = percorso preciso su mezzo → плыть, non плавать." },
    { front: "Андрей плавает часами в бассейне — готовится к соревнованиям.", back: "плавает → плавать", explanation: "«Часами» = nuoto prolungato senza direzione, allenamento ripetuto → плавать, non плыть." },
    { front: "Смотрите — гепард бежит за газелью!",                         back: "бежит → бежать", explanation: "Il ghepardo insegue la gazzella adesso, direzione precisa → бежать, non бегать." },
    { front: "Каждое утро бегаем по пляжу.",                                 back: "бегаем → бегать", explanation: "«Каждое утро» = corsa quotidiana abitudinaria, senza meta fissa → бегать, non бежать." },
    { front: "Профессор ведёт лекции по истории экономики.",                 back: "ведёт → вести",  explanation: "«Вести лекции» = tenere lezioni in corso, azione guidata continua → вести, non водить." },
    { front: "Она уже год не водит машину.",                                 back: "водит → водить", explanation: "«Уже год» = guidare come capacità/abitudine (interrotta) nel tempo → водить, non вести." },
    { front: "У меня компьютер сломался — несу его в ремонт.",               back: "несу → нести",   explanation: "«В ремонт» = destinazione precisa adesso → нести, non носить." },
    { front: "Женя носит только костюмы, и часов у него штук десять.",       back: "носит → носить", explanation: "Indossare per abitudine e preferenza personale consolidata → носить, non нести." },
    { front: "Не волнуйся — Андрей уже везёт вино и торт.",                  back: "везёт → везти",  explanation: "«Уже везёт» = sta portando adesso verso una destinazione precisa → везти, non возить." },
    { front: "Я вожу детей в школу каждый день.",                            back: "вожу → возить",  explanation: "«Каждый день» = trasporto abituale e ricorrente su mezzo → возить, non везти." },
];

// ============================================================
// PANEL 9 — Flashcard · student
// ============================================================
const p9cards = [
    { front: "Над морем летают чайки.",                                       back: "летают → летать" },
    { front: "Куда ты несёшь все эти книги?",                                back: "несёшь → нести" },
    { front: "Она едет в Верону на поезде — сейчас уже в поезде.",          back: "едет → ехать" },
    { front: "Я веду дневник с детства.",                                     back: "веду → вести" },
    { front: "Утки плавают в озере.",                                         back: "плавают → плавать" },
    { front: "Тимур, куда ты нас везёшь?",                                   back: "везёшь → везти" },
    { front: "Мне нравится ходить на работу пешком.",                        back: "ходить → ходить" },
    { front: "Смотри — воздушный шар летит прямо над городом!",             back: "летит → лететь" },
    { front: "Таксист нас час кругами по центру возит.",                     back: "возит → возить" },
    { front: "Я бегу на работу, опаздываю!",                                 back: "бегу → бежать" },
    { front: "По вечерам мы водим собаку в парк.",                           back: "водим → водить" },
    { front: "Она идёт по берегу моря и слушает звуки его волн.",           back: "идёт → идти" },
    { front: "Наш сын научился ездить на велосипеде.",                       back: "ездить → ездить" },
    { front: "Андрей, почему ты никогда не носишь очки?",                   back: "носишь → носить" },
    { front: "Каждое утро бегаем по пляжу.",                                 back: "бегаем → бегать" },
    { front: "Вы плывёте на пароме?",                                        back: "плывёте → плыть" },
];

// ============================================================
// PANEL 10 — Flashcard · paid
// ============================================================
const p10cards = [
    { front: "Ненавижу ходить на групповые экскурсии!",                   back: "ходить → ходить" },
    { front: "Компания несёт серьёзные потери из-за кризиса.",            back: "несёт → нести" },
    { front: "Через неделю мы летим в Милан.",                            back: "летим → лететь" },
    { front: "Он бегал в парке каждое утро.",                             back: "бегал → бегать" },
    { front: "В какую клинику ты кота возишь?",                          back: "возишь → возить" },
    { front: "Я иду в магазин, тебе купить что-нибудь?",                 back: "иду → идти" },
    { front: "Мы везём воду, салфетки и вино — уже едем!",               back: "везём → везти" },
    { front: "Они плывут на другой берег.",                               back: "плывут → плыть" },
    { front: "Расследование ведёт Шерлок Холмс.",                        back: "ведёт → вести" },
    { front: "Женя уже едет за мной.",                                    back: "едет → ехать" },
    { front: "Мы носим бельё стирать в прачечную.",                      back: "носим → носить" },
    { front: "Мы бежали по берегу моря на рассвете.",                    back: "бежали → бежать" },
    { front: "Я очень плохо плаваю.",                                     back: "плаваю → плавать" },
    { front: "Зачем ты за нос его водишь?",                              back: "водишь → водить" },
    { front: "Каждое утро он ездит на работу на велосипеде.",            back: "ездит → ездить" },
    { front: "Я обожаю летать!",                                          back: "летать → летать" },
];

// ============================================================
// PANEL 4 — Mixed Quiz · public
// 0-(MC_END-1):          multiple choice
// MC_END-(MATCH_END-1):  match game
// MATCH_END onwards:     text input
// ============================================================
function initPanel4() {
    const panel = document.getElementById('panel-vol-04');
    if (!panel) return;

    const container = panel.querySelector('#vol-04-cards-container');
    const prevBtn   = panel.querySelector('#vol-04-deck-prev');
    const nextBtn   = panel.querySelector('#vol-04-deck-next');
    const counterEl = panel.querySelector('#vol-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Лена ___ на собеседование — очень волнуется.",          options: ["идёт",   "ходит"],   answer: "идёт"   },
        { question: "В субботу они ___ к бабушке на электричке.",            options: ["едут",   "ездят"],   answer: "едут"   },
        { question: "Зачем ты ___ такие тяжести?!",                          options: ["носишь", "несёшь"],  answer: "носишь" },
        { question: "Мы ___ с пересадкой в Стамбуле.",                       options: ["летим",  "летаем"],  answer: "летим"  },
        { question: "Они ___ туда-сюда уже час!",                            options: ["плавают","плывут"],  answer: "плавают"},
        { question: "Смотрите — гепард ___ за газелью!",                     options: ["бежит",  "бегает"],  answer: "бежит"  },
        { question: "Три раза в неделю мы ___ занятия онлайн.",              options: ["ведём",  "водим"],   answer: "ведём"  },
        { question: "Тимур, куда ты нас ___?",                               options: ["везёшь", "возишь"],  answer: "везёшь" },
        { question: "Бабушка ___ к врачу каждую неделю.",                    options: ["ходит",  "идёт"],    answer: "ходит"  },
        { question: "Мы ___ воду, салфетки и вино — уже едем!",              options: ["везём",  "возим"],   answer: "везём"  },
    ];
    const matchPairs = [
        { left: "Каждое утро",                    right: "бегаем по пляжу." },
        { left: "Куда вы едете",                  right: "в отпуск в этом году?" },
        { left: "Я плыву",                        right: "на яхте вдоль Амальфитанского побережья." },
        { left: "Они ходят",                      right: "в одни и те же рестораны." },
        { left: "Лечу",                           right: "— очень хочу уже домой!" },
        { left: "Мы летаем",                      right: "только лоукостами — так дешевле." },
        { left: "К чему",                         right: "ты ведёшь?" },
        { left: "Он её носит",                    right: "на руках — делает всё, что она захочет." },
        { left: "В какую клинику",                right: "ты кота возишь?" },
        { left: "В субботу вечером они идут",     right: "на свадьбу к другу." },
    ];
    const quizData = [
        { id: "vol-04-001", promptPrefix: "Как часто ты ",                   promptSuffix: " в гости к бабушке?",                       answers: ["ездишь"] },
        { id: "vol-04-002", promptPrefix: "Я обычно в городе на машине не ", promptSuffix: " — постоянно пробки!",                       answers: ["езжу"]   },
        { id: "vol-04-003", promptPrefix: "Целый день ",                     promptSuffix: " по городу.",                                answers: ["летаю"]  },
        { id: "vol-04-004", promptPrefix: "Мы ",                             promptSuffix: " в кругосветное путешествие!",               answers: ["плывём"] },
        { id: "vol-04-005", promptPrefix: "Рыбка ",                          promptSuffix: " в пруду.",                                  answers: ["плавает"]},
        { id: "vol-04-006", promptPrefix: "Ты отлично ",                     promptSuffix: "!",                                          answers: ["водишь"] },
        { id: "vol-04-007", promptPrefix: "Вы уже давно ",                   promptSuffix: " туристов по этому маршруту?",               answers: ["водите"] },
        { id: "vol-04-008", promptPrefix: "Куда ты ",                        promptSuffix: " нашего кота? — К ветеринару.",              answers: ["несёшь"] },
        { id: "vol-04-009", promptPrefix: "Хватит ",                         promptSuffix: " чушь — говори по делу!",                    answers: ["нести"]  },
        { id: "vol-04-010", promptPrefix: "Я ",                              promptSuffix: " детей в школу каждый день.",                answers: ["вожу"]   },
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
            card.className = 'fca01-card-container vol-04-card';
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
        container.querySelectorAll('.vol-04-card').forEach(card => {
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
                const card    = this.closest('.vol-04-card');
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
        container.querySelectorAll('.vol-04-card').forEach((c, i) => {
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
    'panel-vol-01':  () => new DragDropExercise({ rootId: 'ex-dragdrop-vol-01',    exercises: p1exercises }),
    'panel-vol-05':  () => new DragDropExercise({ rootId: 'ex-dragdrop-vol-05',    exercises: p5exercises }),
    'panel-vol-06':  () => new DragDropExercise({ rootId: 'ex-dragdrop-vol-06',    exercises: p6exercises }),
    'panel-vol-02':  () => new FlashcardExercise({ rootId: 'ex-flashcards-vol-02', cards: p2cards }),
    'panel-vol-07':  () => new FlashcardExercise({ rootId: 'ex-flashcards-vol-07', cards: p7cards }),
    'panel-vol-08':  () => new FlashcardExercise({ rootId: 'ex-flashcards-vol-08', cards: p8cards }),
    'panel-vol-03':  () => new FlashcardExercise({ rootId: 'ex-flashcards-vol-03', cards: p3cards }),
    'panel-vol-09':  () => new FlashcardExercise({ rootId: 'ex-flashcards-vol-09', cards: p9cards }),
    'panel-vol-10':  () => new FlashcardExercise({ rootId: 'ex-flashcards-vol-10', cards: p10cards }),
    'panel-vol-04':  () => initPanel4()
};

initPanelManager({ initializers, enableAccessControl: true });
