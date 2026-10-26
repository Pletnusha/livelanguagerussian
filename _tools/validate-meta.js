#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ── Closed vocabularies ──────────────────────────────────────────────

const LEVELS = ['a1', 'a2', 'b1', 'b2'];
const DOC_TYPES = ['hub', 'exercise', 'info', 'testo'];
const CLUSTERS = ['descrizione', 'luogo-e-tempo', 'azione', 'lessico'];

const LIVELLO_LEVELS = {
  'principianti':        ['a1', 'a2'],
  'livello_elementare':  ['b1'],
  'livello_di_base':     ['b2'],
};

// ── Collect all meta.json ────────────────────────────────────────────

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
        const relPath = path.relative(ROOT, full);
        results.push({ data, file: relPath });
      } catch (err) {
        results.push({ data: null, file: path.relative(ROOT, full), parseError: err.message });
      }
    }
  }
  return results;
}

// ── Validation ───────────────────────────────────────────────────────

function main() {
  const all = findAllMeta(ROOT);
  const errors = [];
  const warnings = [];

  if (all.length === 0) {
    console.log('No meta.json files found.');
    return;
  }

  // Check parse errors
  for (const entry of all) {
    if (entry.parseError) {
      errors.push(`${entry.file}: JSON parse error: ${entry.parseError}`);
    }
  }

  const valid = all.filter(e => e.data);
  const idMap = new Map();
  const urlMap = new Map();

  for (const { data: m, file } of valid) {
    const ctx = `${file} (id: ${m.id || '?'})`;

    // Required fields
    if (!m.id) errors.push(`${ctx}: missing "id"`);
    if (!m.url) errors.push(`${ctx}: missing "url"`);
    if (!m.level) errors.push(`${ctx}: missing "level"`);
    if (!m.doc_type) errors.push(`${ctx}: missing "doc_type"`);
    if (!m.title_ru) errors.push(`${ctx}: missing "title_ru"`);
    if (!m.title_it) errors.push(`${ctx}: missing "title_it"`);

    // Level
    if (m.level && !LEVELS.includes(m.level)) {
      errors.push(`${ctx}: level "${m.level}" not in ${JSON.stringify(LEVELS)}`);
    }

    // Doc type
    if (m.doc_type && !DOC_TYPES.includes(m.doc_type)) {
      errors.push(`${ctx}: doc_type "${m.doc_type}" not in ${JSON.stringify(DOC_TYPES)}`);
    }

    // Cluster
    if (!m.cluster || !Array.isArray(m.cluster) || m.cluster.length === 0) {
      errors.push(`${ctx}: "cluster" must be a non-empty array`);
    } else {
      for (const c of m.cluster) {
        if (!CLUSTERS.includes(c)) {
          errors.push(`${ctx}: cluster "${c}" not in ${JSON.stringify(CLUSTERS)}`);
        }
      }
    }

    // Level ↔ livello consistency
    if (m.url) {
      const urlLivello = m.url.split('/').filter(Boolean)[0];
      if (LIVELLO_LEVELS[urlLivello]) {
        if (m.level && !LIVELLO_LEVELS[urlLivello].includes(m.level)) {
          errors.push(`${ctx}: level "${m.level}" inconsistent with URL livello "${urlLivello}" (expected: ${LIVELLO_LEVELS[urlLivello].join(', ')})`);
        }
      }
    }

    // Exercise-specific
    if (m.doc_type === 'exercise') {
      if (!m.focus) errors.push(`${ctx}: exercise must have "focus"`);
      if (!m.source_doc) errors.push(`${ctx}: exercise must have "source_doc"`);
    }
    if (m.doc_type === 'info' && !m.source_doc) {
      errors.push(`${ctx}: info must have "source_doc"`);
    }

    // URL → filesystem
    if (m.url) {
      const fsPath = path.join(ROOT, m.url.slice(1), 'index.html');
      if (!fs.existsSync(fsPath)) {
        errors.push(`${ctx}: URL "${m.url}" → no index.html at ${path.relative(ROOT, fsPath)}`);
      }
    }

    // Uniqueness tracking
    if (m.id) {
      if (idMap.has(m.id)) {
        errors.push(`${ctx}: duplicate id "${m.id}" (first: ${idMap.get(m.id)})`);
      } else {
        idMap.set(m.id, file);
      }
    }
    if (m.url) {
      if (urlMap.has(m.url)) {
        errors.push(`${ctx}: duplicate url "${m.url}" (first: ${urlMap.get(m.url)})`);
      } else {
        urlMap.set(m.url, file);
      }
    }

    // Arrays that should be arrays
    for (const field of ['grammatica', 'complementi', 'lessico']) {
      if (m[field] !== undefined && !Array.isArray(m[field])) {
        errors.push(`${ctx}: "${field}" must be an array`);
      }
    }
  }

  // source_doc references
  for (const { data: m, file } of valid) {
    if (m.source_doc) {
      if (!idMap.has(m.source_doc)) {
        errors.push(`${file} (id: ${m.id}): source_doc "${m.source_doc}" does not match any existing id`);
      }
    }
  }

  // ── Report ───────────────────────────────────────────────────────

  console.log(`Validated ${all.length} meta.json files\n`);

  if (errors.length === 0) {
    console.log('OK — no errors.');
  } else {
    console.log(`ERRORS (${errors.length}):`);
    for (const e of errors) console.log(`  ✗ ${e}`);
  }

  if (warnings.length) {
    console.log(`\nWARNINGS (${warnings.length}):`);
    for (const w of warnings) console.log(`  ⚠ ${w}`);
  }

  console.log(`\nSummary: ${valid.length} valid files, ${idMap.size} unique ids, ${urlMap.size} unique urls`);

  if (errors.length) process.exit(1);
}

main();
