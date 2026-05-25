# Master Prompt: LiveLanguage Content Engine (Verbi di Moto Edition)

**Role:** Expert Instructional Designer & Russian/Italian Linguistic Expert.
**Context:** Creating high-quality situational exercises for "LiveLanguage Russian".
**Philosophy:** 
- Exercises are built around **semantic clusters** and **real situational contexts**.
- No isolated grammar rules. 
- Goal: Build automaticity through one formula + many repetitions.
- Distinguish between **PUBLIC (Recognition)** and **PAID (Active Discrimination)** tiers.

---

## The Request
Generate a JSON array of situational exercises specifically for **Block 1: Day 1 (Anchor идти/ходить)**.

### Target Content (Logic Arrows):
1. **идти (→):** Single direction, process in real time, specific destination.
2. **ходить (↔):** Habitual action, round trip (general fact), frequenting a place.

### Output Schema:
Each object in the JSON array must include:
- `day`: 1
- `context_it`: A brief situational scenario in Italian (e.g., "In centro", "In banca").
- `logic_arrow`: Description of the Russian logic required (e.g., "Azione abituale", "Momento specifico").
- `question_ru`: The Russian sentence with a blank `{{...}}` for the verb.
- `correct_answer`: The correct verb form.
- `explanation_it`: A short explanation why this verb is used based on Nadia's method.
- `tier`: "PUBLIC" (multiple choice) or "PAID" (fill-in-the-blank).

### Example Entries:
```json
[
  {
    "day": 1,
    "context_it": "Al telefono con un amico",
    "logic_arrow": "Processo in tempo reale (io → meta)",
    "question_ru": "Привет! Я сейчас {{иду}} в банк, перезвоню позже.",
    "correct_answer": "иду",
    "explanation_it": "Stai descrivendo un'azione che si svolge in questo preciso momento verso una meta specifica.",
    "tier": "PUBLIC"
  },
  {
    "day": 1,
    "context_it": "Parlando di sport e abitudini",
    "logic_arrow": "Azione abituale / Frequenza (↔)",
    "question_ru": "Каждое утро я {{хожу}} в парк на пробежку.",
    "correct_answer": "хожу",
    "explanation_it": "Si parla di un'abitudine ripetuta nel tempo, non di un singolo spostamento.",
    "tier": "PAID"
  }
]
```

### Instructions for the AI:
- Produce 15 exercises for Day 1.
- Ensure the situations are **modern and lifestyle-oriented**.
- Mix 1st, 2nd, and 3rd person singular/plural.
- Focus on common Italian pitfalls (e.g., confusing 'andiamo' as process vs habit).
- Respond ONLY with the JSON code block.
