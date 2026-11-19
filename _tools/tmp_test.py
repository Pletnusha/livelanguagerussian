"""Local check of an exercise page without login.

Usage:  python _tools/tmp_test.py make  PAGE_DIR   → creates _tmp_test.html + _tmp_ex.js in PAGE_DIR
        python _tools/tmp_test.py clean PAGE_DIR   → deletes them (ALWAYS before commit)

_tmp_test.html = index.html without the Supabase auth guard, all panels visible;
_tmp_ex.js     = exercises.js that runs every initializer and records errors in window.__errs.
Open http://localhost:8765/<page>/_tmp_test.html (python -m http.server 8765 in the repo root) and check in the console:
  window.__done (number of panels), window.__errs (must be []), number of quiz cards, typed answers right and wrong.
"""
import re, sys, os

cmd, page = sys.argv[1], sys.argv[2]
th, tj = os.path.join(page, '_tmp_test.html'), os.path.join(page, '_tmp_ex.js')
if cmd == 'clean':
    for f in (th, tj):
        if os.path.exists(f): os.remove(f)
    print('cleaned')
    sys.exit()
h = open(os.path.join(page, 'index.html'), encoding='utf-8').read()
h = re.sub(r'    <script>\n.*?</script>\n', '', h.replace('\r\n', '\n'), count=1, flags=re.S)
h = h.replace('src="./exercises.js"', 'src="./_tmp_ex.js"').replace(' hidden>', '>')
open(th, 'w', encoding='utf-8').write(h)
j = open(os.path.join(page, 'exercises.js'), encoding='utf-8').read()
j = j.replace("initPanelManager({ initializers, enableAccessControl: true });",
              "window.__errs=[];for(const [k,f] of Object.entries(initializers)){try{f()}catch(e){window.__errs.push(k+': '+e.message)}}window.__done=Object.keys(initializers).length;")
open(tj, 'w', encoding='utf-8').write(j)
print('made', th)
