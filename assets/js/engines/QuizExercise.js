export default class QuizExercise {
    constructor({ panelId, listId, questions }) {
        this.questions = questions;

        const panel = document.getElementById(panelId);
        if (!panel) return;

        this.quizList = panel.querySelector(`#${listId}`);
        if (!this.quizList) return;

        if (!this.questions || this.questions.length === 0) return;

        this.renderQuiz();
    }

    normalizeInput(str) {
        return str.trim().replace(/\s+/g, ' ');
    }

    renderQuiz() {
        this.quizList.innerHTML = '';

        this.questions.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'quiz-item';
            li.dataset.id = item.id;

            const promptDiv = document.createElement('div');
            promptDiv.className = 'quiz-prompt';
            promptDiv.innerHTML = `${item.promptPrefix}<input type="text" class="quiz-input" data-index="${index}">${item.promptSuffix}`;

            const controlsDiv = document.createElement('div');
            controlsDiv.className = 'quiz-controls';

            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-primary quiz-check-btn';
            checkBtn.textContent = 'Проверить';
            checkBtn.dataset.index = index;

            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'quiz-feedback';
            feedbackDiv.dataset.index = index;

            controlsDiv.appendChild(checkBtn);

            li.appendChild(promptDiv);
            li.appendChild(controlsDiv);
            li.appendChild(feedbackDiv);

            this.quizList.appendChild(li);

            const input = li.querySelector('.quiz-input');

            checkBtn.addEventListener('click', () => {
                this.checkAnswer(input, checkBtn, feedbackDiv, item.answers);
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !checkBtn.disabled) {
                    this.checkAnswer(input, checkBtn, feedbackDiv, item.answers);
                }
            });
        });
    }

    checkAnswer(input, button, feedback, correctAnswers) {
        const userAnswer = this.normalizeInput(input.value);
        const isCorrect = correctAnswers.some(ans => userAnswer === ans);

        if (isCorrect) {
            input.classList.remove('incorrect');
            input.classList.add('correct');
            input.disabled = true;
            button.disabled = true;
            feedback.textContent = 'Правильно!';
            feedback.className = 'quiz-feedback correct';
        } else {
            input.classList.remove('correct');
            input.classList.add('incorrect');
            feedback.textContent = 'Неправильно. Попробуйте ещё раз.';
            feedback.className = 'quiz-feedback incorrect';
        }
    }
}
