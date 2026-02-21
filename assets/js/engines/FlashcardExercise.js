import { initSpeech, playAudio } from '../utils/speech.js';

export default class FlashcardExercise {
    constructor({ rootId, cards }) {
        this.rootId = rootId;
        this.cards = cards;
        this.currentMode = 'study';
        this.currentIndex = 0;
        this.selectedMatchCard = null;
        this.isProcessingMatch = false;

        this.root = document.getElementById(rootId);
        if (!this.root) {
            console.warn(`FlashcardExercise: Container #${rootId} NOT FOUND`);
            return;
        }

        if (!this.cards || this.cards.length === 0) {
            console.warn(`FlashcardExercise: No cards data for #${rootId}`);
            return;
        }

        initSpeech();
        this.bindControls();
        this.switchMode('study');
    }

    bindControls() {
        const id = this.rootId;

        this.root.querySelectorAll('.fca01-mode-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchMode(btn.dataset.mode));
        });

        const nextBtn = this.root.querySelector(`#${id}-next-btn`);
        const prevBtn = this.root.querySelector(`#${id}-prev-btn`);
        const quizBtn = this.root.querySelector(`#${id}-start-quiz-btn`);
        const resetBtn = this.root.querySelector(`#${id}-reset-match-btn`);

        if (nextBtn) nextBtn.addEventListener('click', () => this.nextCard());
        if (prevBtn) prevBtn.addEventListener('click', () => this.prevCard());
        if (quizBtn) quizBtn.addEventListener('click', () => this.renderQuiz());
        if (resetBtn) resetBtn.addEventListener('click', () => this.initMatchGame());
    }

    switchMode(mode) {
        this.currentMode = mode;
        const id = this.rootId;

        this.root.querySelectorAll('.fca01-mode-btn').forEach(btn => btn.classList.remove('active'));
        this.root.querySelectorAll('.fca01-section').forEach(sec => sec.classList.remove('visible'));

        const section = this.root.querySelector(`#${id}-section-${mode}`);
        if (section) section.classList.add('visible');

        const modeBtn = this.root.querySelector(`[data-mode="${mode}"]`);
        if (modeBtn) modeBtn.classList.add('active');

        if (mode === 'study') {
            this.currentIndex = 0;
            this.renderCard();
        } else if (mode === 'quiz') {
            this.renderQuiz();
            const startBtn = this.root.querySelector(`#${id}-start-quiz-btn`);
            if (startBtn) startBtn.classList.add('hidden');
        } else if (mode === 'match') {
            this.initMatchGame();
        }
    }

    renderCard() {
        const id = this.rootId;
        const area = this.root.querySelector(`#${id}-learning-area-study`);
        const counter = this.root.querySelector(`#${id}-counter`);
        const cardData = this.cards[this.currentIndex];

        if (counter) counter.textContent = `${this.currentIndex + 1} / ${this.cards.length}`;

        if (area) {
            area.innerHTML = `
                <div class="fca01-card-container">
                    <div class="fca01-card">
                        <div class="fca01-card-face fca01-card-front">
                            <button class="fca01-audio-btn" data-text="${cardData.front}">🔊</button>
                            ${cardData.front}
                        </div>
                        <div class="fca01-card-face fca01-card-back">
                            <button class="fca01-audio-btn" data-text="${cardData.back}">🔊</button>
                            ${cardData.back}
                        </div>
                    </div>
                </div>
            `;

            const card = area.querySelector('.fca01-card');
            if (card) {
                card.addEventListener('click', function () {
                    this.classList.toggle('is-flipped');
                });
            }

            area.querySelectorAll('.fca01-audio-btn').forEach(btn => {
                btn.addEventListener('click', (e) => playAudio(btn.dataset.text, e));
            });
        }
    }

    nextCard() {
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.renderCard();
    }

    prevCard() {
        this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.cards.length - 1;
        this.renderCard();
    }

    renderQuiz() {
        const id = this.rootId;
        const area = this.root.querySelector(`#${id}-learning-area-quiz`);
        const startBtn = this.root.querySelector(`#${id}-start-quiz-btn`);
        if (startBtn) startBtn.classList.add('hidden');

        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const correctCard = this.cards[randomIndex];

        let options = [correctCard];
        while (options.length < 3 && options.length < this.cards.length) {
            const randomWrong = this.cards[Math.floor(Math.random() * this.cards.length)];
            if (!options.some(opt => opt.back === randomWrong.back)) options.push(randomWrong);
        }
        options.sort(() => Math.random() - 0.5);

        const buttonsHTML = options.map(opt =>
            `<button class="fca01-quiz-option" data-answer="${opt.back}" data-correct="${correctCard.back}">
                ${opt.back}
            </button>`
        ).join('');

        if (area) {
            area.innerHTML = `
                <div class="fca01-quiz-area">
                    <h3 class="fca01-quiz-question">Найди вторую часть: <br><span class="highlight">"${correctCard.front}"</span></h3>
                    <div class="fca01-quiz-options">${buttonsHTML}</div>
                    <p class="fca01-quiz-feedback"></p>
                </div>
            `;

            area.querySelectorAll('.fca01-quiz-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.checkQuizAnswer(btn.dataset.answer, btn.dataset.correct, btn);
                });
            });
        }
    }

    checkQuizAnswer(selected, correct, btnElement) {
        const id = this.rootId;
        const feedback = this.root.querySelector('.fca01-quiz-feedback');
        const nextBtn = this.root.querySelector(`#${id}-start-quiz-btn`);

        this.root.querySelectorAll('.fca01-quiz-option').forEach(btn => {
            btn.style.pointerEvents = 'none';
            if (btn.dataset.answer === correct) btn.classList.add('correct');
        });

        if (selected === correct) {
            feedback.textContent = "✅ Правильно!";
            feedback.className = "fca01-quiz-feedback correct";
        } else {
            btnElement.classList.add('wrong');
            feedback.textContent = "❌ Ошибка!";
            feedback.className = "fca01-quiz-feedback wrong";
        }
        if (nextBtn) nextBtn.classList.remove('hidden');
    }

    initMatchGame() {
        const id = this.rootId;
        const area = this.root.querySelector(`#${id}-learning-area-match`);
        this.selectedMatchCard = null;
        this.isProcessingMatch = false;

        let fronts = this.cards.map((card, index) => ({ text: card.front, type: 'front', id: index }));
        let backs = this.cards.map((card, index) => ({ text: card.back, type: 'back', id: index }));

        fronts.sort(() => Math.random() - 0.5);
        backs.sort(() => Math.random() - 0.5);

        if (area) {
            area.innerHTML = `
                <div class="fca01-match-container">
                    <p class="fca01-match-feedback"></p>
                    <div class="fca01-match-grid">
                        <div class="fca01-match-col" id="${id}-match-col-fronts"></div>
                        <div class="fca01-match-col" id="${id}-match-col-backs"></div>
                    </div>
                </div>
            `;

            const colFronts = this.root.querySelector(`#${id}-match-col-fronts`);
            const colBacks = this.root.querySelector(`#${id}-match-col-backs`);

            fronts.forEach(item => colFronts.appendChild(this.createMatchElement(item)));
            backs.forEach(item => colBacks.appendChild(this.createMatchElement(item)));
        }
    }

    createMatchElement(item) {
        const div = document.createElement('div');
        div.className = 'fca01-match-card';
        div.textContent = item.text;
        div.dataset.id = item.id;
        div.dataset.type = item.type;
        div.addEventListener('click', () => this.handleMatchClick(div));
        return div;
    }

    handleMatchClick(clickedCard) {
        if (this.isProcessingMatch || clickedCard.classList.contains('matched')) return;
        if (clickedCard === this.selectedMatchCard) return;

        const feedbackEl = this.root.querySelector('.fca01-match-feedback');

        if (!this.selectedMatchCard) {
            this.selectedMatchCard = clickedCard;
            clickedCard.classList.add('selected');
            return;
        }

        if (this.selectedMatchCard.dataset.type === clickedCard.dataset.type) {
            this.selectedMatchCard.classList.remove('selected');
            this.selectedMatchCard = clickedCard;
            clickedCard.classList.add('selected');
            return;
        }

        const firstId = this.selectedMatchCard.dataset.id;
        const secondId = clickedCard.dataset.id;
        const previousCard = this.selectedMatchCard;

        if (firstId === secondId) {
            previousCard.classList.add('matched');
            clickedCard.classList.add('matched');
            feedbackEl.textContent = "✨ Отлично!";
            feedbackEl.className = "fca01-match-feedback correct";
            this.selectedMatchCard = null;
            setTimeout(() => { feedbackEl.textContent = ""; }, 1000);

            const remaining = this.root.querySelectorAll('.fca01-match-card:not(.matched)').length;
            if (remaining === 0) feedbackEl.textContent = "🎉 ПОБЕДА! 🎉";
        } else {
            this.isProcessingMatch = true;
            clickedCard.classList.add('wrong');
            previousCard.classList.add('wrong');
            feedbackEl.textContent = "Неверно";
            feedbackEl.className = "fca01-match-feedback wrong";

            setTimeout(() => {
                clickedCard.classList.remove('selected', 'wrong');
                previousCard.classList.remove('selected', 'wrong');
                feedbackEl.textContent = "";
                this.isProcessingMatch = false;
            }, 800);

            this.selectedMatchCard = null;
        }
    }
}
