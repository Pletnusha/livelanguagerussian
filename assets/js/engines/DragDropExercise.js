export default class DragDropExercise {
    constructor({ rootId, exercises }) {
        this.rootId = rootId;
        this.exercises = exercises;
        this.currentExerciseIndex = 0;
        this.checked = false;
        this.gapElements = [];
        this.wordElements = [];

        this.root = document.getElementById(rootId);
        if (!this.root) return;

        this.exerciseContainer = this.root.querySelector(`#${rootId}-container`);
        this.completionScreen = this.root.querySelector(`#${rootId}-completion`);

        if (!this.exerciseContainer) return;

        this.loadExercise(0);
    }

    loadExercise(index) {
        if (index >= this.exercises.length) {
            this.showCompletion();
            return;
        }

        this.checked = false;
        const exercise = this.exercises[index];
        const id = this.rootId;

        this.exerciseContainer.innerHTML = `
            <div class="header">
                <div class="exercise-counter">Esercizio ${index + 1} di ${this.exercises.length}</div>
            </div>
            <div class="instruction">${exercise.instruction}</div>
            <div class="exercise-text" id="${id}-text">${exercise.text}</div>
            <div class="word-options" id="${id}-options"></div>
            <div class="controls">
                <div class="feedback" id="${id}-feedback"></div>
                <div>
                    <button class="btn btn-primary" id="${id}-check">Verifica</button>
                    <button class="btn btn-secondary" id="${id}-next" style="display:none;">Prossimo</button>
                </div>
            </div>
        `;

        const exerciseText = this.exerciseContainer.querySelector(`#${id}-text`);
        const wordOptionsContainer = this.exerciseContainer.querySelector(`#${id}-options`);
        const checkBtn = this.exerciseContainer.querySelector(`#${id}-check`);
        const nextBtn = this.exerciseContainer.querySelector(`#${id}-next`);
        const feedback = this.exerciseContainer.querySelector(`#${id}-feedback`);

        const placeholderPattern = /\{\{(\d+)\}\}/g;
        let textContent = exercise.text;
        textContent = textContent.replace(placeholderPattern, (_, number) =>
            `<span class="gap" data-gap="${number}"></span>`
        );
        exerciseText.innerHTML = textContent;

        this.gapElements = Array.from(exerciseText.querySelectorAll('.gap'));
        this.wordElements = [];

        exercise.words.forEach((word, idx) => {
            const el = document.createElement('div');
            el.className = 'word-option';
            el.textContent = word;
            el.dataset.word = word;
            el.dataset.index = idx;
            el.addEventListener('click', () => this.handleWordClick(el));
            wordOptionsContainer.appendChild(el);
            this.wordElements.push(el);
        });

        this.gapElements.forEach(gap => {
            gap.addEventListener('click', () => this.handleGapClick(gap));
        });

        checkBtn.addEventListener('click', () =>
            this.checkAnswers(exercise, feedback, nextBtn, checkBtn)
        );

        nextBtn.addEventListener('click', () => {
            this.currentExerciseIndex++;
            this.loadExercise(this.currentExerciseIndex);
        });
    }

    handleWordClick(wordElement) {
        if (wordElement.classList.contains('used') || this.checked) return;

        const emptyGap = this.gapElements.find(g => !g.classList.contains('filled'));
        if (!emptyGap) return;

        emptyGap.textContent = wordElement.dataset.word;
        emptyGap.classList.add('filled');
        emptyGap.dataset.wordIndex = wordElement.dataset.index;
        emptyGap.dataset.word = wordElement.dataset.word;
        wordElement.classList.add('used');
    }

    handleGapClick(gap) {
        if (this.checked || !gap.classList.contains('filled')) return;

        const wordIndex = gap.dataset.wordIndex;
        const wordElement = this.wordElements.find(w => w.dataset.index === wordIndex);

        gap.textContent = '';
        gap.classList.remove('filled');
        delete gap.dataset.wordIndex;
        delete gap.dataset.word;

        if (wordElement) wordElement.classList.remove('used');
    }

    checkAnswers(exercise, feedback, nextBtn, checkBtn) {
        this.checked = true;
        let correct = 0;
        const total = Object.keys(exercise.correctAnswers).length;

        this.gapElements.forEach(gap => {
            const gapNum = parseInt(gap.dataset.gap, 10);
            const userAnswer = gap.dataset.word;
            const correctAnswer = exercise.correctAnswers[gapNum];

            if (userAnswer === correctAnswer) {
                gap.classList.remove('filled');
                gap.classList.add('correct');
                correct++;
            } else {
                gap.classList.add('incorrect');
            }
        });

        feedback.textContent = `Risultato: ${correct}/${total}`;
        feedback.style.color = correct === total ? '#15803d' : '#b91c1c';
        checkBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    }

    showCompletion() {
        this.exerciseContainer.style.display = 'none';
        if (this.completionScreen) {
            this.completionScreen.style.display = 'block';
            this.completionScreen.innerHTML = `
                <h2 style="color:#3b82f6;margin-bottom:20px;">Complimenti!</h2>
                <p style="font-size:1.2rem;color:#4b5563;">
                    Hai completato tutti i ${this.exercises.length} esercizi.
                </p>
                <button class="btn btn-primary">Ricomincia</button>
            `;
            const restartBtn = this.completionScreen.querySelector('button');
            restartBtn.addEventListener('click', () => location.reload());
        }
    }
}
