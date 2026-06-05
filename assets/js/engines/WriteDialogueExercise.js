import { logAnswer, updatePanelStatus } from '../tracker.js';

export default class WriteDialogueExercise {
    constructor({ rootId, exercises }) {
        this.rootId       = rootId;
        this.exercises    = exercises;
        this.currentIndex = 0;
        this.checked      = false;

        this.root = document.getElementById(rootId);
        if (!this.root) return;

        this.panelId    = this.root.closest('.exercise-panel')?.id ?? rootId;
        this.container  = this.root.querySelector(`#${rootId}-container`);
        this.completion = this.root.querySelector(`#${rootId}-completion`);
        if (!this.container) return;

        this._buildTooltip();
        this.loadExercise(0);
    }

    // ── Tooltip per parole del glossario ──────────────────────────────────
    _buildTooltip() {
        this._tooltip = document.createElement('div');
        Object.assign(this._tooltip.style, {
            position:      'absolute',
            background:    '#1e293b',
            color:         '#f8fafc',
            padding:       '4px 10px',
            borderRadius:  '6px',
            fontSize:      '0.85rem',
            pointerEvents: 'none',
            display:       'none',
            zIndex:        '9999',
            whiteSpace:    'nowrap',
            boxShadow:     '0 2px 8px rgba(0,0,0,0.3)'
        });
        document.body.appendChild(this._tooltip);

        document.addEventListener('click', () => {
            this._tooltip.style.display = 'none';
        });
    }

    // ── Rendering testo: ___ → <input>, glossario → <span cliccabile> ────
    _renderText(rawText, glossary) {
        let i = 0;
        // Sostituisce ___ con segnaposto temporanei (non-HTML)
        let html = rawText.replace(/___/g, () => `\x00INPUT_${i++}\x00`);

        // Avvolge le parole del glossario in span cliccabili
        if (glossary) {
            Object.entries(glossary).forEach(([word, translation]) => {
                const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const escapedTr   = translation.replace(/"/g, '&quot;');
                html = html.replace(
                    new RegExp(escapedWord, 'g'),
                    `<span class="wde-term" data-translation="${escapedTr}" ` +
                    `style="cursor:pointer;border-bottom:1px dotted currentColor;">${word}</span>`
                );
            });
        }

        // Sostituisce i segnaposto con <input>
        html = html.replace(/\x00INPUT_(\d+)\x00/g, (_, n) =>
            `<input type="text" class="wde-input quiz-input" data-idx="${n}" ` +
            `autocomplete="off" autocorrect="off" spellcheck="false">`
        );

        return html;
    }

    // ── Carica esercizio ──────────────────────────────────────────────────
    loadExercise(index) {
        if (index >= this.exercises.length) {
            this._showCompletion();
            return;
        }

        this.checked = false;
        const ex = this.exercises[index];
        const id = this.rootId;

        this.container.innerHTML = `
            <div class="header">
                <div class="exercise-counter">Esercizio ${index + 1} di ${this.exercises.length}</div>
            </div>
            <div class="instruction">${ex.instruction}</div>
            <div class="exercise-text wde-text" id="${id}-text"></div>
            <div class="controls">
                <div class="feedback" id="${id}-feedback"></div>
                <div>
                    <button class="btn btn-primary" id="${id}-check">Verifica</button>
                    <button class="btn btn-secondary" id="${id}-next" style="display:none;">Prossimo</button>
                </div>
            </div>
        `;

        const textEl   = this.container.querySelector(`#${id}-text`);
        const checkBtn = this.container.querySelector(`#${id}-check`);
        const nextBtn  = this.container.querySelector(`#${id}-next`);
        const feedback = this.container.querySelector(`#${id}-feedback`);

        textEl.innerHTML = this._renderText(ex.text, ex.glossary);

        // Click su parola del glossario → mostra tooltip
        textEl.querySelectorAll('.wde-term').forEach(term => {
            term.addEventListener('click', e => {
                e.stopPropagation();
                const rect = term.getBoundingClientRect();
                this._tooltip.textContent    = term.dataset.translation;
                this._tooltip.style.display  = 'block';
                this._tooltip.style.left     = (window.scrollX + rect.left) + 'px';
                this._tooltip.style.top      = (window.scrollY + rect.bottom + 4) + 'px';
            });
        });

        // Enter su qualsiasi input → verifica
        textEl.querySelectorAll('.wde-input').forEach(input => {
            input.addEventListener('keydown', e => {
                if (e.key === 'Enter' && !this.checked) checkBtn.click();
            });
        });

        checkBtn.addEventListener('click', () =>
            this._checkAnswers(ex, feedback, checkBtn, nextBtn, index)
        );

        nextBtn.addEventListener('click', () => {
            this.currentIndex++;
            this.loadExercise(this.currentIndex);
        });
    }

    // ── Verifica risposte ─────────────────────────────────────────────────
    _checkAnswers(ex, feedback, checkBtn, nextBtn, exerciseIdx) {
        this.checked = true;
        const inputs = this.container.querySelectorAll('.wde-input');
        let correct = 0;
        let errors  = 0;

        inputs.forEach(input => {
            const userAnswer    = input.value.trim().replace(/\s+/g, ' ');
            const correctAnswer = ex.answers[parseInt(input.dataset.idx, 10)] ?? '';
            const isCorrect     = userAnswer === correctAnswer;

            input.classList.toggle('correct',   isCorrect);
            input.classList.toggle('incorrect', !isCorrect);
            input.disabled = true;

            if (isCorrect) correct++; else errors++;

            logAnswer({
                panelId:       this.panelId,
                questionId:    `ex${exerciseIdx}-input${input.dataset.idx}`,
                userAnswer,
                correctAnswer,
                isCorrect
            });
        });

        updatePanelStatus({
            panelId:      this.panelId,
            status:       'in_progress',
            correctDelta: correct,
            errorDelta:   errors
        });

        if (errors === 0) {
            feedback.textContent = '✓ Corretto!';
            feedback.style.color = '#15803d';
        } else {
            const wrongAnswers = Array.from(inputs)
                .filter(inp => inp.classList.contains('incorrect'))
                .map(inp => ex.answers[parseInt(inp.dataset.idx, 10)] ?? '')
                .join(', ');

            feedback.innerHTML = ex.explanation
                ? `✗ ${wrongAnswers}<br><span style="font-size:0.9em;">${ex.explanation}</span>`
                : `✗ Risposta corretta: ${wrongAnswers}`;
            feedback.style.color = '#b91c1c';
        }

        checkBtn.style.display = 'none';
        nextBtn.style.display  = 'inline-block';
    }

    // ── Schermata completamento ───────────────────────────────────────────
    _showCompletion() {
        updatePanelStatus({ panelId: this.panelId, status: 'completed' });
        this.container.style.display = 'none';
        if (this.completion) {
            this.completion.style.display = 'block';
            this.completion.innerHTML = `
                <h2 style="color:#3b82f6;margin-bottom:20px;">Complimenti!</h2>
                <p style="font-size:1.2rem;color:#4b5563;">
                    Hai completato tutti i ${this.exercises.length} esercizi.
                </p>
                <button class="btn btn-primary">Ricomincia</button>
            `;
            this.completion.querySelector('button').addEventListener('click', () => location.reload());
        }
    }
}
