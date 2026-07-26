import { logAnswer, updatePanelStatus } from '../tracker.js';

// ============================================================
// GapTextExercise — continuous narrative text with inline
// fill-in-the-blank verb gaps (production, no word bank).
// Supports two optional public-tier scaffolds:
//   - gap hint: infinitive shown next to the input
//   - glossary: click-to-reveal Italian translation of a phrase
// Markers in the source paragraphs:
//   {{n}}                    -> gap n (resolved against options.gaps[n])
//   [[phrase::translation]]  -> clickable glossary term
// ============================================================
export default class GapTextExercise {
    constructor({ rootId, instruction = '', paragraphs, gaps, showHints = false }) {
        this.rootId = rootId;
        this.instruction = instruction;
        this.paragraphs = paragraphs;
        this.gaps = gaps;
        this.showHints = showHints;

        this.root = document.getElementById(rootId);
        if (!this.root) return;

        this.panelId = this.root.closest('.exercise-panel')?.id ?? rootId;
        this.container = this.root.querySelector(`#${rootId}-container`);
        if (!this.container) return;

        this.render();
    }

    normalize(str) {
        return str.trim().toLowerCase().replace(/ё/g, 'е');
    }

    render() {
        const glossaryPattern = /\[\[(.+?)::(.+?)\]\]/g;
        const gapPattern = /\{\{(\d+)\}\}/g;

        const bodyHtml = this.paragraphs.map(paragraph => {
            let text = paragraph.replace(glossaryPattern, (_, phrase, translation) =>
                `<span class="glossary-term" data-translation="${translation.replace(/"/g, '&quot;')}">${phrase}</span>`
            );
            text = text.replace(gapPattern, (_, num) => {
                const gap = this.gaps[num];
                const hintHtml = (this.showHints && gap?.hint)
                    ? `<span class="gaptext-hint">(${gap.hint})</span>`
                    : '';
                const explanationHtml = gap?.explanation
                    ? `<span class="gaptext-explanation hidden" data-explanation-for="${num}">${gap.explanation}</span>`
                    : '';
                return `<span class="gaptext-gap-wrap"><input type="text" class="gaptext-input" data-gap="${num}" autocomplete="off" spellcheck="false">${hintHtml}${explanationHtml}</span>`;
            });
            return `<p>${text}</p>`;
        }).join('');

        const instructionHtml = this.instruction
            ? `<div class="instruction">${this.instruction}</div>`
            : '';

        this.container.innerHTML = `
            ${instructionHtml}
            <div class="gaptext-body">${bodyHtml}</div>
            <div class="controls">
                <div class="feedback" id="${this.rootId}-feedback"></div>
                <button class="btn btn-primary" id="${this.rootId}-check">Controllare</button>
            </div>
        `;

        this.attachGlossaryHandlers();
        this.container.querySelector(`#${this.rootId}-check`)
            .addEventListener('click', () => this.checkAnswers());
    }

    attachGlossaryHandlers() {
        this.container.querySelectorAll('.glossary-term').forEach(term => {
            term.addEventListener('click', () => {
                const wasOpen = term.classList.contains('open');

                this.container.querySelectorAll('.glossary-term.open').forEach(other => {
                    other.classList.remove('open');
                    other.querySelector('.glossary-popover')?.remove();
                });

                if (!wasOpen) {
                    term.classList.add('open');
                    const popover = document.createElement('span');
                    popover.className = 'glossary-popover';
                    popover.textContent = term.dataset.translation;
                    term.appendChild(popover);
                }
            });
        });
    }

    checkAnswers() {
        const inputs = Array.from(this.container.querySelectorAll('.gaptext-input'));
        const total = inputs.length;
        let correct = 0;
        let errors = 0;

        inputs.forEach(input => {
            const num = input.dataset.gap;
            const gapData = this.gaps[num];
            const userAnswer = input.value;
            const isCorrect = gapData.answers.some(answer => this.normalize(answer) === this.normalize(userAnswer));

            input.classList.remove('correct', 'incorrect');
            input.classList.add(isCorrect ? 'correct' : 'incorrect');
            input.disabled = isCorrect;

            const explanationEl = this.container.querySelector(`[data-explanation-for="${num}"]`);
            if (explanationEl) explanationEl.classList.toggle('hidden', isCorrect);

            if (isCorrect) correct++; else errors++;

            logAnswer({
                panelId: this.panelId,
                questionId: `gap-${num}`,
                userAnswer,
                correctAnswer: gapData.answers[0],
                isCorrect
            });
        });

        updatePanelStatus({
            panelId: this.panelId,
            status: correct === total ? 'completed' : 'in_progress',
            correctDelta: correct,
            errorDelta: errors
        });

        const feedback = this.container.querySelector(`#${this.rootId}-feedback`);
        feedback.textContent = `Corretto: ${correct} / ${total}`;
        feedback.style.color = correct === total ? '#15803d' : '#b91c1c';
    }
}
