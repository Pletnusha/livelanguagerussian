let cachedRuVoice = null;

export function pickRuVoice() {
    const voices = window.speechSynthesis.getVoices();
    const ruVoice = voices.find(v => v.lang.includes('ru'));
    if (ruVoice) cachedRuVoice = ruVoice;
}

export function textToSpeech(text, lang = 'ru-RU') {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    if (cachedRuVoice) utterance.voice = cachedRuVoice;
    window.speechSynthesis.speak(utterance);
}

export function playAudio(text, event) {
    if (event) event.stopPropagation();
    textToSpeech(text);
}

export function initSpeech() {
    pickRuVoice();
    if (!cachedRuVoice && 'speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = () => {
            pickRuVoice();
            window.speechSynthesis.onvoiceschanged = null;
        };
    }
}
