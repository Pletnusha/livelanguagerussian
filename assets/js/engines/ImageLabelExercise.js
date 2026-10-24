import { logAnswer, updatePanelStatus } from '../tracker.js';

export default class ImageLabelExercise {
    constructor({ rootId, image, labels }) {
        this.rootId = rootId;
        this.image  = image;
        this.labels = labels;

        this.root = document.getElementById(rootId);
        if (!this.root) return;

        this.panelId   = this.root.closest('.exercise-panel')?.id ?? rootId;
        this.container = this.root.querySelector(`#${rootId}-container`);
        if (!this.container) return;

        this.render();
    }

    render() {
        this.container.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.className = 'img-label-wrapper';

        const img = document.createElement('img');
        img.src       = this.image;
        img.className = 'img-label-photo';
        img.alt       = '';
        img.draggable = false;
        wrapper.appendChild(img);

        this.labels.forEach((label, i) => {
            const marker = document.createElement('div');
            marker.className = 'img-label-marker';
            marker.style.left = label.x + '%';
            marker.style.top  = label.y + '%';
            marker.dataset.index = i;

            const badge = document.createElement('span');
            badge.className = 'img-label-badge';
            badge.textContent = i + 1;
            marker.appendChild(badge);

            marker.addEventListener('click', () => {
                const input = this.container.querySelector(`.img-label-input[data-index="${i}"]`);
                if (input) input.focus();
            });

            wrapper.appendChild(marker);
        });

        this.container.appendChild(wrapper);

        const form = document.createElement('div');
        form.className = 'img-label-form';

        this.labels.forEach((label, i) => {
            const row = document.createElement('div');
            row.className = 'img-label-row';

            const num = document.createElement('span');
            num.className = 'img-label-num';
            num.textContent = (i + 1);

            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'img-label-input';
            input.dataset.index = i;
            if (label.hint) input.placeholder = label.hint;

            const fb = document.createElement('span');
            fb.className = 'img-label-fb';

            input.addEventListener('focus', () => {
                wrapper.querySelectorAll('.img-label-marker').forEach(m => m.classList.remove('active'));
                const marker = wrapper.querySelector(`.img-label-marker[data-index="${i}"]`);
                if (marker) marker.classList.add('active');
            });

            input.addEventListener('blur', () => {
                wrapper.querySelectorAll('.img-label-marker').forEach(m => m.classList.remove('active'));
            });

            row.appendChild(num);
            row.appendChild(input);
            row.appendChild(fb);
            form.appendChild(row);
        });

        const checkBtn = document.createElement('button');
        checkBtn.className = 'btn btn-primary img-label-check';
        checkBtn.textContent = 'Проверить';
        checkBtn.addEventListener('click', () => this.checkAll());
        form.appendChild(checkBtn);

        this.container.appendChild(form);
    }

    normalize(str) {
        return str.trim().toLowerCase().replace(/\s+/g, ' ').replace(/ё/g, 'е');
    }

    checkAll() {
        const inputs = this.container.querySelectorAll('.img-label-input');
        let correctDelta = 0;
        let errorDelta   = 0;

        inputs.forEach((input, i) => {
            if (input.disabled) return;

            const label      = this.labels[i];
            const fb         = input.parentElement.querySelector('.img-label-fb');
            const userAnswer = this.normalize(input.value);

            if (!userAnswer) return;

            const isCorrect = label.answers.some(a => this.normalize(a) === userAnswer);
            const marker    = this.container.querySelector(`.img-label-marker[data-index="${i}"]`);

            if (isCorrect) {
                input.classList.remove('incorrect');
                input.classList.add('correct');
                input.disabled = true;
                fb.textContent = '✓';
                fb.className   = 'img-label-fb correct';
                if (marker) marker.classList.add('done');
                correctDelta++;
            } else {
                input.classList.remove('correct');
                input.classList.add('incorrect');
                fb.textContent = '✗';
                fb.className   = 'img-label-fb incorrect';
                errorDelta++;
            }

            logAnswer({
                panelId:       this.panelId,
                questionId:    label.id ?? `label-${i}`,
                userAnswer:    input.value.trim(),
                correctAnswer: label.answers[0],
                isCorrect
            });
        });

        updatePanelStatus({
            panelId:      this.panelId,
            status:       'in_progress',
            correctDelta,
            errorDelta
        });
    }
}
