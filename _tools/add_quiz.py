"""Add panel 9 (quiz: multiple choice + match + write-in) to a page's exercises.js.

Usage:  python _tools/add_quiz.py PAGE_DIR PREFIX SPEC.json [--source SOURCE_EXERCISES_JS]

PAGE_DIR  folder of the page (contains index.html + exercises.js, panels 1–8 already written)
PREFIX    panel prefix of the page (e.g. "an" → panel-an-9, #an-9-…, initPanelAn9)
SPEC.json {"mc": [[question, [opt1, opt2, opt3], answer], ...],
           "match": [[left, right], ...],
           "write": [[promptPrefix, promptSuffix, [accepted answers]], ...]}
--source  exercises.js of a page whose quiz code is copied (default: anni/anno-nascita).

The quiz engine does NOT shuffle multiple-choice options: put the right answer at random positions.
Typed answers are checked leniently (case, ё/е, final dot) — list every normative variant.
"""
import json, sys, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_SRC = os.path.join(ROOT, 'livello_elementare/luogo-e-tempo/complemento-di-tempo/complemento-di-tempo-determinato/anni/anno-nascita/exercises.js')
SRC_PREFIX = 'an'

args = [a for a in sys.argv[1:] if not a.startswith('--')]
page, P, spec = args[0], args[1], args[2]
src = sys.argv[sys.argv.index('--source') + 1] if '--source' in sys.argv else DEFAULT_SRC
if src != DEFAULT_SRC:
    m = re.search(r"'panel-([a-z]+)-9'", open(src, encoding='utf-8').read())
    SRC_PREFIX = m.group(1)
cap = lambda p: p[0].upper() + p[1:]
D = json.load(open(spec, encoding='utf-8'))
J = lambda s: json.dumps(s, ensure_ascii=False)

s = open(src, 'rb').read().decode('utf-8').replace('\r\n', '\n')
a = s.index('// ============================================================\n// PANEL 9')
b = s.index('// ============================================================\n// PANEL MANAGER')
blk = s[a:b]
mc = '    const multipleChoiceData = [\n' + ',\n'.join('        { question: %s, options: [%s], answer: %s }' % (J(q), ', '.join(J(o) for o in opts), J(an)) for q, opts, an in D['mc']) + '\n    ];\n'
mp = '    const matchPairs = [\n' + ',\n'.join('        { left: %s, right: %s }' % (J(l), J(r)) for l, r in D['match']) + '\n    ];\n'
qd = '    const quizData = [\n' + ',\n'.join('        { id: "%s9-w%d", promptPrefix: %s, promptSuffix: %s, answers: [%s] }' % (P, i + 1, J(p), J(x), ', '.join(J(v) for v in an)) for i, (p, x, an) in enumerate(D['write'])) + '\n    ];\n'
for name, new in (('multipleChoiceData', mc), ('matchPairs', mp), ('quizData', qd)):
    blk, n = re.subn(r'    const %s = \[\n.*?\n    \];\n' % name, lambda m: new, blk, flags=re.S)
    assert n == 1, name
S0 = SRC_PREFIX
for o, n in [('initPanel%s9' % cap(S0), 'initPanel%s9' % cap(P)), ('panel-%s-9' % S0, 'panel-%s-9' % P),
             ('#%s-9-' % S0, '#%s-9-' % P), ('%s-9-card' % S0, '%s-9-card' % P)]:
    blk = blk.replace(o, n)
left = re.findall(r'[\w#.-]*\b%s[-9][\w-]*' % S0, blk)
assert not left, left

dst = os.path.join(page, 'exercises.js')
raw = open(dst, 'rb').read(); crlf = b'\r\n' in raw
t = raw.decode('utf-8').replace('\r\n', '\n')
anchor = '// ============================================================\n// PANEL MANAGER'
assert ('initPanel%s9' % cap(P)) not in t, 'quiz already present'
t = t.replace(anchor, blk + anchor)
o = "    'panel-%s-8': () => new FlashcardExercise({ rootId: 'ex-flashcards-%s-08', cards: p8cards })" % (P, P)
assert o in t, 'panel 8 initializer not found'
t = t.replace(o, o + ",\n    'panel-%s-9': () => initPanel%s9()" % (P, cap(P)))
if crlf: t = t.replace('\n', '\r\n')
open(dst, 'wb').write(t.encode('utf-8'))
print('ok: quiz added', len(D['mc']), len(D['match']), len(D['write']))
