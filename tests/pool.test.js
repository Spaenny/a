'use strict';

const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync('pool.js', 'utf8'), context);

const pool = context.window.pool;
assert.equal(Array.isArray(pool), true);
assert.equal(pool.length, 1000);

const validTypes = new Set(['single', 'multiple', 'fill', 'lab', 'dragdrop']);
const seenIds = new Set();
const seenQuestionPrompt = new Set();

function normalize(v) {
  return String(v ?? '').trim().toLowerCase();
}

function getCorrect(q) {
  return q.c !== undefined ? q.c : q.correct;
}

for (const q of pool) {
  assert.equal(validTypes.has(q.type), true, `Unsupported type for ${q.id}`);
  assert.equal(Boolean(String(q.question || '').trim()), true, `Missing question text for ${q.id}`);
  assert.equal(Boolean(String(q.id || '').trim()), true, 'Missing question id');
  assert.equal(seenIds.has(q.id), false, `Duplicate question id: ${q.id}`);
  seenIds.add(q.id);

  const qpKey = `${normalize(q.question)}|${normalize(q.prompt)}`;
  assert.equal(seenQuestionPrompt.has(qpKey), false, `Duplicate question+prompt content: ${q.id}`);
  seenQuestionPrompt.add(qpKey);

  if (q.type === 'fill') {
    assert.match(String(q.question), /API scenario:/);
    assert.match(String(q.prompt), /lowercase HTTP method/);
    const answer = getCorrect(q);
    const normalizedAnswers = (Array.isArray(answer) ? answer : [answer]).map(normalize);
    for (const expected of normalizedAnswers) {
      assert.equal(['get', 'post', 'put', 'patch', 'delete'].includes(expected), true, `Invalid fill method in ${q.id}`);
    }
  }

  if (q.type === 'lab') {
    assert.match(String(q.prompt), /JSON\/API output:/);
    assert.match(String(q.prompt), /status/);
  }

  if (q.type === 'single') {
    assert.equal(Array.isArray(q.options), true, `Single question missing options: ${q.id}`);
    assert.equal(q.options.length >= 2, true, `Single question needs >=2 options: ${q.id}`);
    const answer = normalize(getCorrect(q));
    assert.equal(q.options.map(normalize).includes(answer), true, `Single answer not in options: ${q.id}`);
  }

  if (q.type === 'multiple') {
    assert.equal(Array.isArray(q.options), true, `Multiple question missing options: ${q.id}`);
    assert.equal(q.options.length >= 3, true, `Multiple question needs >=3 options: ${q.id}`);
    const answers = Array.isArray(getCorrect(q)) ? getCorrect(q).map(normalize) : [normalize(getCorrect(q))];
    assert.equal(answers.length >= 1, true, `Multiple question missing correct answers: ${q.id}`);
    for (const a of answers) {
      assert.equal(q.options.map(normalize).includes(a), true, `Multiple answer not in options (${q.id}): ${a}`);
    }
  }

  if (q.type === 'dragdrop') {
    assert.equal(Array.isArray(q.options), true, `Dragdrop missing options: ${q.id}`);
    const answer = Array.isArray(getCorrect(q)) ? getCorrect(q).map(normalize) : [normalize(getCorrect(q))];
    assert.equal(answer.length, q.options.length, `Dragdrop answer length mismatch: ${q.id}`);
    assert.match(String(q.prompt), /Order the listed steps from FIRST executed action to FINAL action/);

    const optionSet = new Set(q.options.map(normalize));
    assert.equal(optionSet.size, q.options.length, `Dragdrop options must be unique: ${q.id}`);
    for (const a of answer) {
      assert.equal(optionSet.has(a), true, `Dragdrop answer missing option (${q.id}): ${a}`);
    }
  }
}

console.log('pool.test.js passed');
