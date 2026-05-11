import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ============================================================
// MOTO PER LUOGO — ПО + dativo · ВДОЛЬ + genitivo
// Panel prefix: mpl
// ============================================================

// ============================================================
// PANEL 1 — public · D&D · mix ПО / ВДОЛЬ
// ============================================================
const p1exercises = [
    { instruction: "Scegli la preposizione corretta.", text: "Каждое утро он ходит гулять {{1}} реки.",                                          words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento lungo il bordo di un elemento naturale. «Вдоль» + genitivo: река → реки." },
    { instruction: "Scegli la preposizione corretta.", text: "Ходим {{1}} магазинам, уже полдня ходим, мне надоело.",                           words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento all'interno di uno spazio o tra più luoghi. «По» + dativo plurale: магазины → магазинам." },
    { instruction: "Scegli la preposizione corretta.", text: "Друзья идут {{1}} дороги — машин нет, тихо.",                                      words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento parallelo al bordo di qualcosa. «Вдоль» + genitivo: дорога → дороги." },
    { instruction: "Scegli la preposizione corretta.", text: "Туристы идут {{1}} центру и ищут кафе.",                                           words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento all'interno di un'area. «По» + dativo: центр → центру." },
    { instruction: "Scegli la preposizione corretta.", text: "Мы ходим {{1}} рынку, ищем липовый мёд.",                                          words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento all'interno di uno spazio. «По» + dativo: рынок → рынку." },
    { instruction: "Scegli la preposizione corretta.", text: "Иди {{1}} синего здания до перекрёстка.",                                          words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento parallelo a un edificio. «Вдоль» + genitivo: синее здание → синего здания." },
    { instruction: "Scegli la preposizione corretta.", text: "Она ходит {{1}} пляжу и плачет, потому что они с Димой поругались.",               words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento su una superficie aperta. «По» + dativo: пляж → пляжу." },
    { instruction: "Scegli la preposizione corretta.", text: "Дима ходит {{1}} супермаркету и покупает продукты по списку.",                     words: ["через", "по", "вдоль"], correctAnswers: { 1: "по" },    explanation: "«По» indica movimento all'interno di uno spazio chiuso. «По» + dativo: супермаркет → супермаркету." },
    { instruction: "Scegli la preposizione corretta.", text: "Иди {{1}} улицы до светофора, там повернёшь.",                                     words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento lungo il bordo di una strada. «Вдоль» + genitivo: улица → улицы." },
    { instruction: "Scegli la preposizione corretta.", text: "Идёт {{1}} моря и любуется закатом.",                                              words: ["через", "по", "вдоль"], correctAnswers: { 1: "вдоль" }, explanation: "«Вдоль» indica movimento lungo il bordo del mare. «Вдоль» + genitivo: море → моря." },
];

// ============================================================
// PANEL 5 — paid · D&D · solo по
// ============================================================
const p5exercises = [
    { instruction: "Scegli la preposizione corretta.", text: "Ходим {{1}} магазинам, уже полдня ходим, мне надоело.",       words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Туристы ходят {{1}} центру.",                                  words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она ходит {{1}} пляжу и плачет, потому что они с Димой поругались.", words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Каждое утро он ходит гулять {{1}} реки.",                     words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Иди {{1}} дороги до светофора.",                              words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Они идут {{1}} тропинке к озеру.",                            words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Иди {{1}} двору до второго подъезда.",                        words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Мы идём {{1}} канала в сторону Петроградки.",                 words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Она идёт {{1}} берега и собирает ракушки.",                   words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Катя и Дима ходят гулять {{1}} набережной каждый вечер.",    words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
];

// ============================================================
// PANEL 6 — paid · D&D · solo вдоль
// ============================================================
const p6exercises = [
    { instruction: "Scegli la preposizione corretta.", text: "Мы ходим {{1}} рынку, ищем липовый мёд.",                          words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Дима ходит {{1}} супермаркету и покупает продукты по списку.",      words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Друзья идут {{1}} дороги — машин нет, тихо.",                      words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Иди {{1}} синего здания до перекрёстка.",                          words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Идёт {{1}} моря и любуется закатом.",                              words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Мы ходим {{1}} городку, ищем где пообедать.",                      words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Толпы туристов ходят {{1}} центру.",                               words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Коля идёт {{1}} дороге домой и заходит купить продукты.",          words: ["по", "вдоль"], correctAnswers: { 1: "по" } },
    { instruction: "Scegli la preposizione corretta.", text: "Я никогда не хожу {{1}} кладбища.",                                words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
    { instruction: "Scegli la preposizione corretta.", text: "Туристы ходят {{1}} виноградников и фотографируют пейзаж.",        words: ["по", "вдоль"], correctAnswers: { 1: "вдоль" } },
];

// ============================================================
// PANEL 2 — public · Flashcard · forma del caso
// ============================================================
const p2cards = [
    { front: "Они идут (аллея) старинного парка.",                    back: "Они идут по аллее старинного парка.",                    explanation: "«Аллея» = viale alberato. «По» + dativo, 1a decl.: аллея → аллее." },
    { front: "Он идёт (река) каждое утро.",                           back: "Он идёт вдоль реки каждое утро.",                        explanation: "«Река» = fiume. «Вдоль» + genitivo, 1a decl.: река → реки." },
    { front: "Катя ходит (дом), не может успокоиться.",               back: "Катя ходит по дому, не может успокоиться.",              explanation: "«Дом» = casa. «По» + dativo, 2a decl.: дом → дому." },
    { front: "Она идёт (магазины) и смотрит на витрины.",             back: "Она идёт вдоль магазинов и смотрит на витрины.",         explanation: "«Магазины» = negozi. «Вдоль» + genitivo plurale: магазины → магазинов." },
    { front: "Лена и Антон идут (тропинка) к озеру.",                 back: "Лена и Антон идут по тропинке к озеру.",                 explanation: "«Тропинка» = sentiero. «По» + dativo, 1a decl.: тропинка → тропинке." },
    { front: "Туристы идут (канал) в сторону центра.",                back: "Туристы идут вдоль канала в сторону центра.",            explanation: "«Канал» = canale. «Вдоль» + genitivo, 2a decl.: канал → канала." },
    { front: "Мы ходим (рынок), ищем липовый мёд.",                   back: "Мы ходим по рынку, ищем липовый мёд.",                   explanation: "«Рынок» = mercato. «По» + dativo, 2a decl.: рынок → рынку." },
    { front: "Катя и Дима ходят (набережная) каждый вечер.",          back: "Катя и Дима ходят вдоль набережной каждый вечер.",       explanation: "«Набережная» = lungofiume. «Вдоль» + genitivo, decl. aggettivale femm.: набережная → набережной." },
    { front: "Подруги ходят (магазины) каждые выходные.",             back: "Подруги ходят по магазинам каждые выходные.",            explanation: "«Магазины» = negozi. «По» + dativo plurale: магазины → магазинам." },
    { front: "Они идут (озеро) и смотрят на уток.",                   back: "Они идут вдоль озера и смотрят на уток.",                explanation: "«Озеро» = lago. «Вдоль» + genitivo, 2a decl. neutro: озеро → озера." },
];

// ============================================================
// PANEL 3 — public · Flashcard · con spiegazioni
// ============================================================
const p3cards = [
    { front: "Мы идём на рынок, нужно купить мёд.",  back: "Мы ходим по рынку, ищем мёд.",                                 explanation: "«На рынок»: НА + acc. — si entra nell'area del mercato. «По рынку»: по + dat. (рынок → рынку) — ci si muove all'interno." },
    { front: "Иди во двор — подожди меня там.",       back: "Иди по двору до второго подъезда.",                            explanation: "«Во двор»: В + acc. — si entra nel cortile. «По двору»: по + dat. (двор → двору) — ci si muove dentro." },
    { front: "Она идёт к набережной.",                back: "Она идёт вдоль набережной.",                                  explanation: "«К набережной»: «К» + dat. — ci si avvicina dall'esterno senza entrare. «Вдоль набережной»: вдоль + gen. (набережная → набережной) — si cammina lungo la banchina." },
    { front: "Туристы едут к каналу.",                back: "Туристы идут вдоль канала в сторону центра.",                 explanation: "«К каналу»: «К» + dat. (канал → каналу) — ci si avvicina al bordo del canale. «Вдоль канала»: вдоль + gen. (канал → канала) — si cammina lungo il canale." },
    { front: "Друзья идут к дороге.",                 back: "Друзья идут вдоль дороги — машин нет, тихо.",                 explanation: "«К дороге»: «К» + dat. (дорога → дороге) — ci si avvicina al margine della strada senza attraversarla. «Вдоль дороги»: вдоль + gen. (дорога → дороги) — si cammina lungo la strada." },
    { front: "Он идёт в музей.",                      back: "Он ходит по музею и рассматривает экспонаты.",                explanation: "«В музей»: В + acc. — si entra nel museo. «По музею»: по + dat. (музей → музею) — ci si muove all'interno." },
    { front: "Лена идёт в лес.",                      back: "Лена ходит по лесу и ищет грибы.",                            explanation: "«В лес»: В + acc. — si entra nel bosco. «По лесу»: по + dat. (лес → лесу) — ci si muove dentro." },
    { front: "Дети идут в парк.",                     back: "Дети бегают по парку и играют.",                              explanation: "«В парк»: В + acc. — si entra nel parco. «По парку»: по + dat. (парк → парку) — ci si muove dentro." },
    { front: "Он идёт к зданию.",                     back: "Он идёт вдоль здания до входа.",                              explanation: "«К зданию»: «К» + dat. (здание → зданию) — ci si avvicina all'edificio dall'esterno. «Вдоль здания»: вдоль + gen. (здание → здания) — si cammina lungo l'edificio." },
    { front: "Она идёт к забору.",                    back: "Она идёт вдоль забора и ищет вход.",                          explanation: "«К забору»: «К» + dat. (забор → забору) — ci si avvicina al recinto dall'esterno. «Вдоль забора»: вдоль + gen. (забор → забора) — si cammina lungo il recinto." },
];

// ============================================================
// PANEL 7 — paid · Flashcard · по/вдоль
// ============================================================
const p7cards = [
    { front: "Она идёт ___ (парк) и слушает музыку.",                    back: "Она идёт по парку и слушает музыку." },
    { front: "Дима ходит ___ (супермаркет) и покупает продукты.",        back: "Дима ходит по супермаркету и покупает продукты." },
    { front: "Группа туристов идёт ___ (площадь).",                      back: "Группа туристов идёт по площади." },
    { front: "Она идёт ___ (берег) и собирает ракушки.",                 back: "Она идёт вдоль берега и собирает ракушки." },
    { front: "Друзья идут ___ (дорога) — машин нет, тихо.",              back: "Друзья идут вдоль дороги — машин нет, тихо." },
    { front: "Они идут ___ (набережная).",                               back: "Они идут вдоль набережной." },
    { front: "Катя ходит ___ (квартира), не может успокоиться.",         back: "Катя ходит по квартире, не может успокоиться." },
    { front: "Он идёт ___ (коридор) в конец здания.",                   back: "Он идёт по коридору в конец здания." },
    { front: "Мы идём ___ (поезд) и ищем свой вагон.",                  back: "Мы идём вдоль поезда и ищем свой вагон." },
    { front: "Они идут ___ (аллея) старинного парка.",                   back: "Они идут вдоль аллеи старинного парка." },
];

// ============================================================
// PANEL 8 — paid · Flashcard · по/вдоль
// ============================================================
const p8cards = [
    { front: "Иди ___ (двор) до второго подъезда.",                          back: "Иди по двору до второго подъезда." },
    { front: "Лена и Миша идут ___ (тропинка) к озеру.",                     back: "Лена и Миша идут по тропинке к озеру." },
    { front: "Мы идём ___ (канал) в сторону Петроградки.",                   back: "Мы идём вдоль канала в сторону Петроградки." },
    { front: "Иди ___ (улица) до светофора, там повернёшь.",                 back: "Иди вдоль улицы до светофора, там повернёшь." },
    { front: "Я никогда не хожу ___ (кладбище).",                            back: "Я никогда не хожу вдоль кладбища." },
    { front: "Маша и Коля ходят ___ (ярмарка) и ищут подарки.",              back: "Маша и Коля ходят по ярмарке и ищут подарки." },
    { front: "Нужно подняться ___ (лестница) на третий этаж.",               back: "Нужно подняться по лестнице на третий этаж." },
    { front: "Школьники ходят ___ (музей) и слушают экскурсовода.",          back: "Школьники ходят по музею и слушают экскурсовода." },
    { front: "Антон идёт ___ (стена) к выходу.",                             back: "Антон идёт вдоль стены к выходу." },
    { front: "Она идёт ___ (забор) и ищет вход.",                            back: "Она идёт вдоль забора и ищет вход." },
];

// ============================================================
// PANEL 9 — paid · Flashcard · по/вдоль
// ============================================================
const p9cards = [
    { front: "Она идёт ___ (парк) и слушает музыку.",                                                  back: "Она идёт по парку и слушает музыку." },
    { front: "Нужно подняться ___ (лестница) на третий этаж.",                                         back: "Нужно подняться по лестнице на третий этаж." },
    { front: "Школьники ходят ___ (музей) и слушают экскурсовода.",                                    back: "Школьники ходят по музею и слушают экскурсовода." },
    { front: "Антон идёт ___ (стена) к выходу.",                                                       back: "Антон идёт вдоль стены к выходу." },
    { front: "Туристы ходят ___ (виноградники) и фотографируют окрестности (виноградники = vigneti).", back: "Туристы ходят вдоль виноградников и фотографируют окрестности." },
    { front: "Нина каждое утро ходит ___ (парк), выгуливает собаку (portare a spasso il cane).",       back: "Нина каждое утро ходит по парку, выгуливает собаку." },
    { front: "Они ходят уже час ___ (район), не могут найти дом Кати (район = quartiere).",            back: "Они ходят уже час по району, не могут найти дом Кати." },
    { front: "Алина идёт ___ (берег моря) и собирает ракушки.",                                        back: "Алина идёт вдоль берега моря и собирает ракушки." },
    { front: "Миша и Катя идут ___ (поле) и смотрят на подсолнухи.",                                   back: "Миша и Катя идут вдоль поля и смотрят на подсолнухи." },
    { front: "Кот ходит ___ (изгородь), хочет залезть в сад соседа (изгородь = siepe).",              back: "Кот ходит вдоль изгороди, хочет залезть в сад соседа." },
];

// ============================================================
// PANEL 10 — paid · Flashcard · по/вдоль
// ============================================================
const p10cards = [
    { front: "Группа туристов идёт ___ (площадь).",                                                                    back: "Группа туристов идёт по площади." },
    { front: "Гости ходят ___ (зал) и пытаются найти знакомых (зал = sala).",                                          back: "Гости ходят по залу и пытаются найти знакомых." },
    { front: "Она идёт ___ (забор) и ищет вход.",                                                                      back: "Она идёт вдоль забора и ищет вход." },
    { front: "Они идут ___ (аллея) старинного парка.",                                                                  back: "Они идут вдоль аллеи старинного парка." },
    { front: "Туристы ходят ___ (виноградники) и фотографируют окрестности (виноградники = vigneti).",                 back: "Туристы ходят вдоль виноградников и фотографируют окрестности." },
    { front: "Мы ходили ___ (музеи) целый день.",                                                                       back: "Мы ходили по музеям целый день." },
    { front: "Рыбаки ходят ___ (пристань) туда-сюда, переносят свежую рыбу к машинам (пристань = molo).",             back: "Рыбаки ходят по пристани туда-сюда, переносят свежую рыбу к машинам." },
    { front: "Старики ходят ___ (сквер) и играют в шахматы (сквер = giardino pubblico).",                              back: "Старики ходят по скверу и играют в шахматы." },
    { front: "Лена и Антон идут ___ (пристань), любуются яхтами (пристань = molo).",                                   back: "Лена и Антон идут вдоль пристани, любуются яхтами." },
    { front: "Она идёт ___ (полки) и выбирает книги.",                                                                  back: "Она идёт вдоль полок и выбирает книги." },
];

// ============================================================
// PANEL 4 — public · Quiz · MC + Match + Write
// ============================================================
function initPanel4Mpl() {
    const panel = document.getElementById('panel-mpl-04');
    if (!panel) return;

    const container = panel.querySelector('#mpl-04-cards-container');
    const prevBtn   = panel.querySelector('#mpl-04-deck-prev');
    const nextBtn   = panel.querySelector('#mpl-04-deck-next');
    const counterEl = panel.querySelector('#mpl-04-deck-counter');

    let currentCard = 0;

    const multipleChoiceData = [
        { question: "Нина ходит ___ парку и выгуливает собаку.",              options: ["по", "вдоль"], answer: "по" },
        { question: "Алина идёт ___ берега моря и собирает ракушки.",         options: ["по", "вдоль"], answer: "вдоль" },
        { question: "Школьники ходят ___ музею и слушают экскурсовода.",      options: ["по", "вдоль"], answer: "по" },
        { question: "Старик ходит ___ пруда и проверяет удочки.",             options: ["по", "вдоль"], answer: "вдоль" },
        { question: "Подруги ходят ___ магазинам каждые выходные.",           options: ["по", "вдоль"], answer: "по" },
        { question: "Мы идём ___ канала в сторону Петроградки.",              options: ["по", "вдоль"], answer: "вдоль" },
        { question: "Гости ходят ___ залу и пытаются найти знакомых.",        options: ["по", "вдоль"], answer: "по" },
        { question: "Туристы идут ___ виноградников и фотографируют пейзаж.", options: ["по", "вдоль"], answer: "вдоль" },
        { question: "Катя ходит ___ квартире, не может успокоиться.",         options: ["по", "вдоль"], answer: "по" },
        { question: "Рыбаки ходят ___ пристани и проверяют лодки.",           options: ["по", "вдоль"], answer: "вдоль" },
    ];

    const matchPairs = [
        { left: "Туристы ходят",          right: "по центру и ищут кафе" },
        { left: "Они идут",               right: "вдоль набережной" },
        { left: "Дима ходит",             right: "по супермаркету и покупает продукты" },
        { left: "Прохожие идут",          right: "вдоль аллеи старинного парка" },
        { left: "Группа туристов идёт",   right: "по площади" },
        { left: "Мы идём",                right: "вдоль поезда и ищем свой вагон" },
        { left: "Дети с родителями идут", right: "по набережной и едят мороженое" },
        { left: "Саша никогда не ходит",  right: "вдоль кладбища" },
        { left: "Лена ходит домой",       right: "по одному и тому же маршруту" },
        { left: "Кот ходит",              right: "вдоль изгороди" },
    ];

    const quizData = [
        { id: "mpl-021", promptPrefix: "Иди",                        promptSuffix: "(двор) до второго подъезда.",                  answers: ["по двору"] },
        { id: "mpl-022", promptPrefix: "Друзья идут",                promptSuffix: "(дорога) — машин нет, тихо.",                  answers: ["вдоль дороги"] },
        { id: "mpl-023", promptPrefix: "Маша и Коля ходят",          promptSuffix: "(рождественский базар).",                      answers: ["по рождественскому базару"] },
        { id: "mpl-024", promptPrefix: "Саша любит ходить летом",    promptSuffix: "(ручей).",                                     answers: ["вдоль ручья"] },
        { id: "mpl-025", promptPrefix: "Нужно подняться",            promptSuffix: "(лестница) на третий этаж.",                   answers: ["по лестнице"] },
        { id: "mpl-026", promptPrefix: "Студенты ходят",             promptSuffix: "(галерея) и делают наброски с картин.",        answers: ["по галерее"] },
        { id: "mpl-027", promptPrefix: "Лена и Антон идут",          promptSuffix: "(пристань), любуются яхтами.",                 answers: ["вдоль пристани"] },
        { id: "mpl-028", promptPrefix: "Посетители ходят",           promptSuffix: "(оранжерея) и любуются орхидеями.",            answers: ["по оранжерее"] },
        { id: "mpl-029", promptPrefix: "Она идёт",                   promptSuffix: "(забор) и ищет вход.",                        answers: ["вдоль забора"] },
        { id: "mpl-030", promptPrefix: "Они идут",                   promptSuffix: "(аллея) старинного парка.",                   answers: ["вдоль аллеи"] },
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
        title.textContent = `Exercise ${index + 1} of ${TOTAL}`;
        if (index < MC_END) title.classList.add('exercise-counter');
        card.insertBefore(title, card.firstElementChild);
    }

    function buildCards() {
        container.innerHTML = '';
        for (let i = 0; i < TOTAL; i++) {
            const card = document.createElement('div');
            card.className = 'fca01-card-container mpl-04-card';
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
                        selCard.classList.remove('selected'); selCard = clicked; clicked.classList.add('selected'); return;
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
                        setTimeout(() => { clicked.classList.remove('selected', 'wrong'); prev.classList.remove('selected', 'wrong'); feedbackEl.textContent = ''; processing = false; }, 800);
                        selCard = null;
                    }
                }
                function makeMatchEl(item) {
                    const div = document.createElement('div');
                    div.className = 'fca01-match-card'; div.textContent = item.text;
                    div.dataset.id = item.id; div.dataset.type = item.type;
                    div.addEventListener('click', () => handleMatch(div)); return div;
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
                    <p class="quiz-instruction">Scrivete la parola nella forma corretta</p>
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
        container.querySelectorAll('.mpl-04-card').forEach(card => {
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
                    gap.textContent = this.dataset.word; gap.classList.add('filled');
                    gap.dataset.word = this.dataset.word; gap.dataset.wordIndex = this.dataset.index;
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
                verifyBtn.style.display = 'none'; nBtn.style.display = 'inline-block';
            });
        });
        container.querySelectorAll('.quiz-check-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card  = this.closest('.mpl-04-card');
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
        container.querySelectorAll('.mpl-04-card').forEach((c, i) => {
            c.classList.toggle('visible', i === idx); c.hidden = (i !== idx);
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
        'panel-mpl-01': () => new DragDropExercise({ rootId: 'ex-dragdrop-mpl-01', exercises: p1exercises }),
        'panel-mpl-05': () => new DragDropExercise({ rootId: 'ex-dragdrop-mpl-05', exercises: p5exercises }),
        'panel-mpl-06': () => new DragDropExercise({ rootId: 'ex-dragdrop-mpl-06', exercises: p6exercises }),
        'panel-mpl-02': () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-02', cards: p2cards }),
        'panel-mpl-07': () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-07', cards: p7cards, quizByPrep: true }),
        'panel-mpl-08': () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-08', cards: p8cards, quizByPrep: true }),
        'panel-mpl-03': () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-03', cards: p3cards, quizByPrep: true }),
        'panel-mpl-09': () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-09', cards: p9cards, quizByPrep: true }),
        'panel-mpl-10': () => new FlashcardExercise({ rootId: 'ex-flashcards-mpl-10', cards: p10cards, quizByPrep: true }),
        'panel-mpl-04': () => initPanel4Mpl(),
    },
    enableAccessControl: true,
});
