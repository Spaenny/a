'use strict';

const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync('pool.js', 'utf8'), context);

const pool = context.window.pool;
assert.equal(Array.isArray(pool), true);
assert.equal(pool.length, 200);

for (const q of pool) {
  if (q.type === 'fill') {
    assert.match(String(q.question), /Fill in the HTTP verb\/keyword you should use\./);
    assert.match(String(q.prompt), /lowercase HTTP method/);
  }

  if (q.type === 'lab') {
    assert.match(String(q.prompt), /JSON\/API output:/);
    assert.match(String(q.prompt), /status/);
  }
}

console.log('pool.test.js passed');
