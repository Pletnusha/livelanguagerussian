import { logAnswer, updatePanelStatus } from '../tracker.js';

export default class ImageLabelExercise {
    /**
     * @param {Object} opts
     * @param {string} opts.rootId
     * @param {Array}  opts.rooms  — [{ name, image, labels: [{ id, x, y, answers, hint? }] }]
     * @param {string} [opts.image]  — legacy single-room shorthand
     * @param {Array}  [opts.labels] — legacy single-room shorthand
     */
    constructor({ rootId, rooms, image, labels }) {
        this.rootId = rootId;
        this.rooms  = rooms ?? [{ name: '', image, labels }];

        this.root = document.getElementById(rootId);
        if (!this.root) return;

        this.panelId   = this.root.closest('.exercise-panel')?.id ?? rootId;
        this.container = this.root.querySelector(`#${rootId}-container`);
        if (!this.container) return;

        this.activeRoom = 0;
        this.roomStates = this.rooms.map(() => ({}));
        this.build();
    }

    build() {
        this.container.innerHTML = '';

        if (this.rooms.length > 1) {
            const tabs = document.createElement('div');
            tabs.className = 'fca01-mode-buttons img-label-tabs';
            this.rooms.forEach((room, i) => {
                const btn = document.createElement('button');
                btn.className = 'fca01-mode-btn' + (i === 0 ? ' active' : '');
                btn.textContent = room.name;
                btn.addEventListener('click', () => this.switchRoom(i));
                tabs.appendChild(btn);
            });
            this.container.appendChild(tabs);
        }

        this.stage = document.createElement('div');
        this.stage.className = 'img-label-stage';
        this.container.appendChild(this.stage);

        this.renderRoom(0);
    }

    switchRoom(idx) {
        if (idx === this.activeRoom) return;
        this.saveRoomState();
        this.activeRoom = idx;

        this.container.querySelectorAll('.img-label-tabs .fca01-mode-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === idx);
        });

        this.renderRoom(idx);
    }

    saveRoomState() {
        const inputs = this.stage.querySelectorAll('.img-label-input');
        const state = {};
        inputs.forEach(input => {
            const i = input.dataset.index;
            state[i] = {
                value: input.value,
                disabled: input.disabled,
                correct: input.classList.contains('correct'),
                incorrect: input.classList.contains('incorrect')
            };
        });
        this.roomStates[this.activeRoom] = state;
    }

    renderRoom(idx) {
        const room  = this.rooms[idx];
        const saved = this.roomStates[idx];
        this.stage.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.className = 'img-label-wrapper';

        const img = document.createElement('img');
        img.src       = room.image;
        img.className = 'img-label-photo';
        img.alt       = room.name || '';
        img.draggable = false;
        wrapper.appendChild(img);

        room.labels.forEach((label, i) => {
            const marker = document.createElement('div');
            marker.className = 'img-label-marker';
            marker.style.left = label.x + '%';
            marker.style.top  = label.y + '%';
            marker.dataset.index = i;

            const badge = document.createElement('span');
            badge.className = 'img-label-badge';
            badge.textContent = i + 1;
            marker.appendChild(badge);

            if (saved[i]?.correct) marker.classList.add('done');

            marker.addEventListener('click', () => {
                const input = this.stage.querySelector(`.img-label-input[data-index="${i}"]`);
                if (input) input.focus();
            });

            wrapper.appendChild(marker);
        });

        this.stage.appendChild(wrapper);

        const form = document.createElement('div');
        form.className = 'img-label-form';

        room.labels.forEach((label, i) => {
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

            if (saved[i]) {
                input.value    = saved[i].value;
                input.disabled = saved[i].disabled;
                if (saved[i].correct)   { input.classList.add('correct');   fb.textContent = '✓'; fb.className = 'img-label-fb correct'; }
                if (saved[i].incorrect) { input.classList.add('incorrect'); fb.textContent = '✗'; fb.className = 'img-label-fb incorrect'; }
            }

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

        this.stage.appendChild(form);
    }

    normalize(str) {
        return str.trim().toLowerCase().replace(/\s+/g, ' ').replace(/ё/g, 'е');
    }

    checkAll() {
        const room   = this.rooms[this.activeRoom];
        const inputs = this.stage.querySelectorAll('.img-label-input');
        let correctDelta = 0;
        let errorDelta   = 0;

        inputs.forEach((input, i) => {
            if (input.disabled) return;

            const label      = room.labels[i];
            const fb         = input.parentElement.querySelector('.img-label-fb');
            const userAnswer = this.normalize(input.value);

            if (!userAnswer) return;

            const isCorrect = label.answers.some(a => this.normalize(a) === userAnswer);
            const marker    = this.stage.querySelector(`.img-label-marker[data-index="${i}"]`);

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
                questionId:    label.id ?? `label-${this.activeRoom}-${i}`,
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

        this.saveRoomState();
    }
}
