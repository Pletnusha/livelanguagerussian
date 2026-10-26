#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ── Closed vocabularies ──────────────────────────────────────────────

const LIVELLI = {
  'principianti':        ['a1', 'a2'],
  'livello_elementare':  ['b1'],
  'livello_di_base':     ['b2'],
};

const CLUSTERS = ['descrizione', 'luogo-e-tempo', 'azione', 'lessico'];

const DOC_TYPES = ['hub', 'exercise', 'info', 'testo'];

// ── CLI parsing ──────────────────────────────────────────────────────

function usage() {
  console.log(`
Usage: node new-page.js <options>

Required:
  --livello   <principianti|livello_elementare|livello_di_base>
  --cluster   <${CLUSTERS.join('|')}>
  --slug      <short-slug>      e.g. zamok, piace-o-voglio
  --level     <a1|a2|b1|b2>     CEFR level for metadata
  --doc-type  <${DOC_TYPES.join('|')}>
  --title-ru  <"Заголовок">
  --title-it  <"Titolo">

Optional (exercise pages):
  --focus       <focus-slug>    e.g. aspetto-scelta, lessico
  --grammatica  <tag,tag,...>   e.g. aspetto/perfettivo-vs-imperfettivo
  --complementi <tag,tag,...>
  --lessico     <tag,tag,...>   e.g. vita-quotidiana
  --source-doc  <parent-hub-id> e.g. b1-azione-zamok

  --dry-run   Print what would be created without writing
`);
  process.exit(1);
}

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const key = argv[i];
    if (!key.startsWith('--')) { console.error(`Unknown arg: ${key}`); usage(); }
    const name = key.slice(2);
    if (name === 'dry-run') { args.dryRun = true; continue; }
    const val = argv[++i];
    if (!val || val.startsWith('--')) { console.error(`Missing value for ${key}`); usage(); }
    args[name] = val;
  }
  return args;
}

// ── Validation ───────────────────────────────────────────────────────

function validate(args) {
  const errors = [];

  if (!args.livello || !LIVELLI[args.livello]) {
    errors.push(`--livello must be one of: ${Object.keys(LIVELLI).join(', ')}`);
  }
  if (!args.cluster || !CLUSTERS.includes(args.cluster)) {
    errors.push(`--cluster must be one of: ${CLUSTERS.join(', ')}`);
  }
  if (!args.slug) errors.push('--slug is required');
  if (!args.level || !['a1','a2','b1','b2'].includes(args.level)) {
    errors.push('--level must be one of: a1, a2, b1, b2');
  }
  if (args.livello && args.level && LIVELLI[args.livello] && !LIVELLI[args.livello].includes(args.level)) {
    errors.push(`level "${args.level}" does not match livello "${args.livello}" (expected: ${LIVELLI[args.livello].join(', ')})`);
  }
  if (!args['doc-type'] || !DOC_TYPES.includes(args['doc-type'])) {
    errors.push(`--doc-type must be one of: ${DOC_TYPES.join(', ')}`);
  }
  if (!args['title-ru']) errors.push('--title-ru is required');
  if (!args['title-it']) errors.push('--title-it is required');

  const docType = args['doc-type'];
  if (docType === 'exercise') {
    if (!args.focus) errors.push('--focus is required for exercise pages');
    if (!args['source-doc']) errors.push('--source-doc is required for exercise pages');
  }
  if (docType === 'info' && !args['source-doc']) {
    errors.push('--source-doc is required for info pages');
  }

  if (errors.length) {
    errors.forEach(e => console.error(`ERROR: ${e}`));
    process.exit(1);
  }
}

// ── Collision check ──────────────────────────────────────────────────

function findAllMeta(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      results.push(...findAllMeta(full));
    } else if (e.name === 'meta.json') {
      try { results.push(JSON.parse(fs.readFileSync(full, 'utf8'))); }
      catch { /* skip malformed */ }
    }
  }
  return results;
}

function checkCollisions(id, url) {
  const all = findAllMeta(ROOT);
  const idHit = all.find(m => m.id === id);
  const urlHit = all.find(m => m.url === url);
  if (idHit) { console.error(`COLLISION: id "${id}" already exists`); process.exit(1); }
  if (urlHit) { console.error(`COLLISION: url "${url}" already exists`); process.exit(1); }
}

// ── Build meta.json ──────────────────────────────────────────────────

function csvToArray(s) {
  if (!s) return [];
  return s.split(',').map(x => x.trim()).filter(Boolean);
}

function buildMeta(args) {
  const docType = args['doc-type'];
  const focus = args.focus || null;

  const idParts = [args.level, args.cluster, args.slug];
  if (focus) idParts.push(focus);
  const id = idParts.join('-');

  const urlParts = ['', args.livello, args.cluster, args.slug];
  if (focus) urlParts.push(focus);
  const url = urlParts.join('/') + '/';

  const meta = {
    id,
    url,
    level: args.level,
    doc_type: docType,
    cluster: [args.cluster],
    grammatica: csvToArray(args.grammatica),
    complementi: csvToArray(args.complementi),
    lessico: csvToArray(args.lessico),
    title_ru: args['title-ru'],
    title_it: args['title-it'],
  };

  if (docType === 'exercise' || docType === 'info') {
    meta.source_doc = args['source-doc'];
  }
  if (docType === 'exercise') {
    meta.focus = focus;
  }

  return { id, url, meta };
}

// ── HTML templates ───────────────────────────────────────────────────

const SUPABASE_URL = 'https://itjjgblqdpopzoxqeufd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ampnYmxxZHBvcHpveHFldWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MTY5OTUsImV4cCI6MjA4NjE5Mjk5NX0.hIcwr45dq4ApcAWH6dP_ZyE9UA7XXQ2jvuEAD1YR5Mc';

function authGuard(redirect) {
  return `    <script>
        document.documentElement.style.visibility = 'hidden';
        (async () => {
            const SUPABASE_URL = '${SUPABASE_URL}';
            const SUPABASE_ANON_KEY = '${SUPABASE_KEY}';
            await new Promise((res, rej) => {
                const s = document.createElement('script');
                s.src = 'https://unpkg.com/@supabase/supabase-js@2.46.1/dist/umd/supabase.js';
                s.onload = res; s.onerror = rej;
                document.head.appendChild(s);
            });
            const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            const { data: { session } } = await client.auth.getSession();
            if (!session) {
                window.location.href = '/login.html?redirect=${redirect}';
            } else {
                document.documentElement.style.visibility = '';
            }
        })();
    </script>`;
}

function hubHtml(args, url) {
  const redirect = url.slice(1, -1); // strip leading / and trailing /
  return `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${args['title-ru']} - LIVE LANGUAGE_RUSSIAN</title>
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <header class="level-header">
        <h1>${args['title-ru']}</h1>
        <p class="level-description">${args['title-it']}</p>
    </header>
    <main class="level-content">
        <section class="macro-area">
            <!-- exercise cards go here -->
        </section>
    </main>
    <footer class="level-footer">
        <a href="/${args.livello}/" class="back-link">&larr; Torna indietro</a>
    </footer>
</body>
</html>
`;
}

function exerciseHtml(args, url) {
  const redirect = url.slice(1, -1);
  return `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${args['title-ru']} - LIVE LANGUAGE_RUSSIAN</title>
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/access-control.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
${authGuard(redirect)}
</head>
<body>

    <section class="argomento-header">
        <h1 class="argomento-title">${args['title-ru']}</h1>
        <p class="argomento-focus">${args['title-it']}</p>
    </section>

    <main class="exercises-section">
        <!-- panels go here -->
    </main>

    <footer class="level-footer">
        <a href="/${args.livello}/${args.cluster}/${args.slug}/" class="back-link">&larr; Torna indietro</a>
    </footer>

    <script type="module" src="exercises.js"></script>
</body>
</html>
`;
}

function exerciseJs() {
  return `import { DragDropExercise } from '/assets/js/engines/DragDropExercise.js';
import { FlashcardExercise } from '/assets/js/engines/FlashcardExercise.js';
import { initPanelManager } from '/assets/js/panel-manager.js';

// ── Panel data ───────────────────────────────────────────────────────
// TODO: fill in exercise data

// ── Init ─────────────────────────────────────────────────────────────
initPanelManager({
    initializers: {
        // 'panel-id': () => new DragDropExercise({ ... }),
    },
    enableAccessControl: true
});
`;
}

// ── Main ─────────────────────────────────────────────────────────────

function main() {
  const args = parseArgs(process.argv);
  if (!args.livello) usage();
  validate(args);

  const { id, url, meta } = buildMeta(args);
  const fsDir = path.join(ROOT, url.slice(1)); // strip leading /

  if (!args.dryRun) {
    checkCollisions(id, url);
  }

  console.log(`id:   ${id}`);
  console.log(`url:  ${url}`);
  console.log(`dir:  ${fsDir}`);
  console.log(`type: ${meta.doc_type}`);
  console.log();

  if (args.dryRun) {
    console.log('DRY RUN — meta.json:');
    console.log(JSON.stringify(meta, null, 2));
    return;
  }

  // create dir
  fs.mkdirSync(fsDir, { recursive: true });

  // write meta.json
  fs.writeFileSync(path.join(fsDir, 'meta.json'), JSON.stringify(meta, null, 2) + '\n');
  console.log('  wrote meta.json');

  // write index.html
  const docType = meta.doc_type;
  let html;
  if (docType === 'hub' || docType === 'testo') {
    html = hubHtml(args, url);
  } else {
    html = exerciseHtml(args, url);
  }
  fs.writeFileSync(path.join(fsDir, 'index.html'), html);
  console.log('  wrote index.html');

  // write exercises.js stub for exercise pages
  if (docType === 'exercise') {
    fs.writeFileSync(path.join(fsDir, 'exercises.js'), exerciseJs());
    console.log('  wrote exercises.js (stub)');
  }

  console.log('\nDone.');
}

main();
