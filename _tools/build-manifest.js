#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '_rag', 'manifest.json');

function findAllMeta(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === '_tools') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      results.push(...findAllMeta(full));
    } else if (e.name === 'meta.json') {
      try {
        const data = JSON.parse(fs.readFileSync(full, 'utf8'));
        data._source = path.relative(ROOT, full);
        results.push(data);
      } catch (err) {
        console.error(`WARN: malformed ${path.relative(ROOT, full)}: ${err.message}`);
      }
    }
  }
  return results;
}

function main() {
  const all = findAllMeta(ROOT);

  all.sort((a, b) => a.id.localeCompare(b.id));

  const manifest = {
    generated: new Date().toISOString(),
    count: all.length,
    pages: all,
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2) + '\n');

  console.log(`Collected ${all.length} meta.json → ${path.relative(ROOT, OUT)}`);
}

main();
