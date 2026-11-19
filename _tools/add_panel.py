"""Add a panel (DragDrop or Flashcard) to a page. Run from the repo root.
Add a panel's data + initializer to an exercises.js. Usage: add_panel.py FILE SPEC.json
SPEC: {"prefix":"tra","n":1,"kind":"dd"|"fc","comment":"...","items":[...] , "expect_pos":[...]}
dd item: [text, words, answer, explanation|null]; fc item: [front, back, distractors, explanation|null]"""
import json, sys
sys.stdout.reconfigure(encoding='utf-8')
f, specp = sys.argv[1], sys.argv[2]
S = json.load(open(specp, encoding='utf-8'))
raw = open(f, 'rb').read(); crlf = b'\r\n' in raw
t = raw.decode('utf-8').replace('\r\n', '\n')
J = lambda s: json.dumps(s, ensure_ascii=False)
p, n, kind = S['prefix'], S['n'], S['kind']
title = {'dd': 'DragDrop', 'fc': 'Flashcard'}[kind]
if kind == 'dd':
    pos = [it[1].index(it[2]) + 1 for it in S['items']]
    if 'expect_pos' in S: assert pos == S['expect_pos'], pos
    for it in S['items']: assert len(set(it[1])) == 3
    var = 'p%dexercises' % n
    parts = []
    for x, ws, a, e in S['items']:
        s = '    {\n        instruction: "Trascina la forma giusta.",\n        text: %s,\n        words: [%s],\n        correctAnswers: { 1: %s }' % (J(x), ', '.join(J(w) for w in ws), J(a))
        if e: s += ',\n        explanation: %s' % J(e)
        parts.append(s + '\n    }')
    init = "    'panel-%s-%d': () => new DragDropExercise({ rootId: 'ex-dragdrop-%s-%02d', exercises: %s })" % (p, n, p, n, var)
else:
    pos = None
    var = 'p%dcards' % n
    parts = []
    for fr, b, ds, e in S['items']:
        assert b not in ds and len(ds) == 2
        s = '    { front: %s, back: %s, distractors: [%s]' % (J(fr), J(b), ', '.join(J(d) for d in ds))
        if e: s += ', explanation: %s' % J(e)
        parts.append(s + ' }')
    init = "    'panel-%s-%d': () => new FlashcardExercise({ rootId: 'ex-flashcards-%s-%02d', cards: %s })" % (p, n, p, n, var)
block = '// ============================================================\n// PANEL %d — %s · %s\n// %s\n// ============================================================\nconst %s = [\n%s\n];\n\n' % (n, title, S['access'], S['comment'], var, ',\n'.join(parts))
anchor = '// ============================================================\n// PANEL MANAGER'
assert anchor in t and ('const %s ' % var) not in t
t = t.replace(anchor, block + anchor)
a = t.index('const initializers = {'); b = t.index('\n};', a)
body = t[a + len('const initializers = {'):b].rstrip()
body = (body + ',' if body.strip() else '') + '\n' + init
t = t[:a] + 'const initializers = {' + body + t[b:]
if crlf: t = t.replace('\n', '\r\n')
open(f, 'wb').write(t.encode('utf-8'))
print('ok', var, pos)
