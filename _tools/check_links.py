"""Check every internal href/src in all .html files resolves to an existing file.
Usage: python _tools/check_links.py [ROOT]   (default: repo root). Compare the broken count with the previous run."""
import os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bad = []; n = 0
for dp, dn, fn in os.walk(ROOT):
    if any(x in dp for x in ('node_modules', '.git', 'graphify-out')): continue
    for f in fn:
        if not f.endswith('.html'): continue
        p = os.path.join(dp, f)
        t = open(p, encoding='utf-8', errors='replace').read()
        for m in re.finditer(r'(?:href|src)="(/[^"#?]*)"', t):
            u = m.group(1); n += 1
            fs = os.path.join(ROOT, u.lstrip('/'))
            if u.endswith('/'): fs = os.path.join(fs, 'index.html')
            if not os.path.exists(fs):
                bad.append((os.path.relpath(p, ROOT), u))
print('links checked:', n, '| broken:', len(bad))
for b in bad: print('  BROKEN', b[0], '->', b[1])
