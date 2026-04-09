'use strict';

const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

function loadCore() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync('core.js', 'utf8'), context);
  return context.window.ExamCore;
}

const core = loadCore();

assert.equal(core.normalizeText('  GET  '), 'get');
assert.equal(core.getCorrectField({ c: 'x', correct: 'y' }), 'x');
assert.equal(core.inferType({ type: 'multiple-choice' }), 'multiple');

assert.equal(core.isCorrect({ _type: 'single', c: 'NETCONF' }, 'netconf'), true);
assert.equal(core.isCorrect({ _type: 'multiple', c: ['a', 'c'] }, ['C', 'a']), true);
assert.equal(core.isCorrect({ _type: 'dragdrop', c: ['a', 'b'] }, ['a', 'b']), true);
assert.equal(core.isCorrect({ _type: 'dragdrop', c: ['a', 'b'] }, ['a', null]), false);

const outcome = core.scoreExam({
  questions: [
    { _type: 'single', c: 'yes' },
    { _type: 'fill', c: 'up' }
  ],
  answers: ['yes', 'down'],
  questionCount: 2,
  scoreMin: 300,
  scoreMax: 1000,
  passScore: 825
});

assert.equal(outcome.correctCount, 1);
assert.equal(outcome.scaled, 650);
assert.equal(outcome.passed, false);

console.log('core.test.js passed');
