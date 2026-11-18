import DragDropExercise from '/assets/js/engines/DragDropExercise.js';
import FlashcardExercise from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// Pagina «До и после 2000 года» (blocco Годы) — prima ↔ dopo un anno: до / после + genitivo (двухтысячного года).
// La forma è nota (genitivo come «пятого марта девяностого года»): la difficoltà è il senso, dato dal contesto (лиры → евро, сначала … потом).
// Qui «до» = prima di (su «С 2010 по 2020 год» era fino a, in coppia con «с»). «Перед двухтысячным годом» non si usa con gli anni.
// Approssimato: около двухтысячного года / году в двухтысячном (inversione colloquiale, come «часа в три», «числа двадцатого») ↔ esatto в двухтысячном году.
// Solo nei pannelli misti: к две тысячи тридцатому году (к + dativo, entro); между … годами (strumentale) solo riconoscimento, mai da scrivere.
// Solo anni ed epoche (niente ore). Vecchio materiale: в … году, с … по … год, в девяностые годы, в начале / в конце века, data completa.
// Schema: 1 D&D misto (nuovo + vecchio, con spiegazioni) · 2–3 D&D nuovo · 4–5 FC nuovo · 6–8 FC misto · 9 Quiz
// I dati di ogni pannello si aggiungono dopo l'approvazione della PM.

// ============================================================
// PANEL MANAGER
// ============================================================
const initializers = {
};

initPanelManager({ initializers, enableAccessControl: true });
