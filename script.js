'use strict';

// ============================
// Config
// ============================
const EXAM_QUESTION_COUNT = 60;
const EXAM_SECONDS = 90 * 60;
const SCORE_MIN = 300;
const SCORE_MAX = 1000;
const PASS_SCORE = 825;
const STORAGE_KEY = 'enauto_exam_state_v2';
const THEME_KEY = 'enauto_theme_v1';

// ============================
// Utility
// ============================
function normalizeText(v) {
  return String(v ?? '').trim().toLowerCase();
}

function toArray(v) {
  if (Array.isArray(v)) return v;
  if (v == null) return [];
  return [v];
}

function deepClone(v) {
  return JSON.parse(JSON.stringify(v));
}

function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mmss(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const m = String(Math.floor(s / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${m}:${sec}`;
}

function nonEmpty(answer) {
  if (Array.isArray(answer)) return answer.length > 0;
  return String(answer ?? '').trim().length > 0;
}

function compareArraysInsensitiveSorted(a, b) {
  const na = toArray(a).map(normalizeText).sort();
  const nb = toArray(b).map(normalizeText).sort();
  if (na.length !== nb.length) return false;
  for (let i = 0; i < na.length; i++) {
    if (na[i] !== nb[i]) return false;
  }
  return true;
}

function getCorrectField(q) {
  // Handles banks with either c or correct
  return q && (q.c !== undefined ? q.c : q.correct);
}

function inferType(q) {
  const t = normalizeText(q.type);
  if (['single', 'single-choice', 'radio'].includes(t)) return 'single';
  if (['multiple', 'multi', 'multiple-choice', 'checkbox'].includes(t)) return 'multiple';
  if (['fill', 'fill-in', 'text', 'input'].includes(t)) return 'fill';
  if (['lab', 'short-answer', 'api'].includes(t)) return 'lab';
  if (['dragdrop', 'drag', 'drag-and-drop', 'order', 'ordering'].includes(t)) return 'dragdrop';

  const correct = getCorrectField(q);
  if (Array.isArray(correct) && Array.isArray(q.options)) return 'multiple';
  if (Array.isArray(q.options)) return 'single';
  return 'fill';
}

function fallbackPool() {
  const items = [];
  for (let i = 1; i <= 200; i++) {
    items.push({
      id: `fallback-${i}`,
      type: i % 5 === 0 ? 'dragdrop' : i % 4 === 0 ? 'lab' : i % 3 === 0 ? 'multiple' : i % 2 === 0 ? 'fill' : 'single',
      question: `Fallback question ${i}. Provide window.pool with real ENAUTO content.`,
      options: i % 5 === 0 ? ['First', 'Second', 'Third', 'Fourth'] : i % 3 === 0 || i % 2 === 1 ? ['A', 'B', 'C', 'D'] : undefined,
      c: i % 5 === 0 ? ['First', 'Second', 'Third', 'Fourth'] : i % 3 === 0 ? ['A', 'C'] : i % 2 === 1 ? 'A' : 'sample'
    });
  }
  return items;
}

// ============================
// State
// ============================
const ui = {
  app: document.getElementById('app'),
  timer: document.getElementById('timer'),
  progress: document.getElementById('progress'),
  themeBtn: document.getElementById('themeBtn')
};

let state = {
  phase: 'exam', // exam | review | result
  questions: [],
  currentIndex: 0,
  answers: [],
  flagged: [],
  secondsLeft: EXAM_SECONDS,
  startedAt: Date.now(),
  score: null,
  details: []
};

let timerHandle = null;

// ============================
// Persistence / Theme
// ============================
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const restored = JSON.parse(raw);
    if (!restored || !Array.isArray(restored.questions) || restored.questions.length !== EXAM_QUESTION_COUNT) return false;
    state = restored;
    return true;
  } catch (_) {
    return false;
  }
}

function clearSavedState() {
  localStorage.removeItem(STORAGE_KEY);
}

function applyThemeFromStorage() {
  const mode = localStorage.getItem(THEME_KEY);
  document.body.classList.toggle('dark', mode === 'dark');
  ui.themeBtn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
}

ui.themeBtn.addEventListener('click', () => {
  const next = !document.body.classList.contains('dark');
  document.body.classList.toggle('dark', next);
  localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
  applyThemeFromStorage();
});

// ============================
// Exam setup / navigation
// ============================
function initializeExam() {
  const pool = Array.isArray(window.pool) && window.pool.length ? deepClone(window.pool) : fallbackPool();
  const picked = shuffle(pool).slice(0, EXAM_QUESTION_COUNT).map((q, idx) => {
    const item = {
      ...q,
      _id: q.id ?? `q-${idx + 1}`,
      _type: inferType(q),
      _displayOptions: Array.isArray(q.options) ? shuffle(q.options.map(v => String(v))) : []
    };
    return item;
  });

  state = {
    phase: 'exam',
    questions: picked,
    currentIndex: 0,
    answers: Array(EXAM_QUESTION_COUNT).fill(null),
    flagged: Array(EXAM_QUESTION_COUNT).fill(false),
    secondsLeft: EXAM_SECONDS,
    startedAt: Date.now(),
    score: null,
    details: []
  };

  saveState();
}

function setAnswer(index, value) {
  state.answers[index] = value;
  saveState();
}

function goToQuestion(index) {
  state.currentIndex = Math.max(0, Math.min(EXAM_QUESTION_COUNT - 1, index));
  saveState();
  render();
}

function nextQuestion() { goToQuestion(state.currentIndex + 1); }
function previousQuestion() { goToQuestion(state.currentIndex - 1); }

function toggleFlagCurrentQuestion() {
  state.flagged[state.currentIndex] = !state.flagged[state.currentIndex];
  saveState();
  render();
}

// ============================
// Timer
// ============================
function startTimer() {
  if (timerHandle) clearInterval(timerHandle);
  timerHandle = setInterval(() => {
    if (state.phase !== 'exam') return;
    state.secondsLeft = Math.max(0, state.secondsLeft - 1);
    ui.timer.textContent = mmss(state.secondsLeft);
    saveState();

    if (state.secondsLeft === 0) {
      clearInterval(timerHandle);
      timerHandle = null;
      submitExam(true);
    }
  }, 1000);
}

// ============================
// Scoring
// ============================
function isCorrect(question, answer) {
  const correct = getCorrectField(question);
  const type = question._type;

  if (type === 'single') {
    return normalizeText(answer) === normalizeText(correct);
  }

  if (type === 'multiple') {
    return compareArraysInsensitiveSorted(answer, correct);
  }

  if (type === 'fill' || type === 'lab') {
    if (Array.isArray(correct)) {
      return correct.map(normalizeText).includes(normalizeText(answer));
    }
    return normalizeText(answer) === normalizeText(correct);
  }

  if (type === 'dragdrop') {
    const expected = toArray(correct).map(v => String(v));
    const actual = toArray(answer).map(v => String(v));
    if (expected.length !== actual.length) return false;
    for (let i = 0; i < expected.length; i++) {
      if (normalizeText(expected[i]) !== normalizeText(actual[i])) return false;
    }
    return true;
  }

  return false;
}

function scoreExam() {
  let correctCount = 0;
  const details = state.questions.map((q, i) => {
    const ok = isCorrect(q, state.answers[i]);
    if (ok) correctCount += 1;
    return { index: i, ok };
  });

  const raw = correctCount / EXAM_QUESTION_COUNT;
  const scaled = Math.round(SCORE_MIN + raw * (SCORE_MAX - SCORE_MIN));

  return {
    correctCount,
    raw,
    scaled,
    passed: scaled >= PASS_SCORE,
    details
  };
}

// ============================
// Drag and Drop
// ============================
function buildDragDrop(question, answer, index) {
  const wrap = document.createElement('div');

  const help = document.createElement('div');
  help.className = 'drag-help';
  help.textContent = 'Drag each item. Drop on a "Drop here" row. Numbers show your current order.';
  wrap.appendChild(help);

  const container = document.createElement('div');
  container.className = 'drag-zone';
  wrap.appendChild(container);

  const initial = Array.isArray(answer) && answer.length ? answer.slice() : question._displayOptions.slice();

  function renderOrderNumbers() {
    const items = Array.from(container.querySelectorAll('.drag-item'));
    items.forEach((item, idx) => {
      const badge = item.querySelector('.drag-order');
      if (badge) badge.textContent = String(idx + 1);
    });

    const slots = Array.from(container.querySelectorAll('.drop-slot'));
    slots.forEach((slot, idx) => {
      slot.textContent = `Drop here (position ${idx + 1})`;
    });
  }

  function commitOrder() {
    const order = Array.from(container.querySelectorAll('.drag-item')).map(el => el.dataset.value);
    renderOrderNumbers();
    setAnswer(index, order);
  }

  function makeDropSlot() {
    const slot = document.createElement('div');
    slot.className = 'drop-slot';

    slot.addEventListener('dragover', (e) => {
      e.preventDefault();
      slot.classList.add('active');
    });

    slot.addEventListener('dragleave', () => slot.classList.remove('active'));

    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      slot.classList.remove('active');
      const dragging = container.querySelector('.drag-item.dragging');
      if (!dragging) return;

      // Prevent invalid nesting errors by only reordering known siblings
      if (dragging === slot || dragging.contains(slot) || slot.contains(dragging)) return;

      container.insertBefore(dragging, slot.nextSibling);
      commitOrder();
    });

    return slot;
  }

  function makeItem(text) {
    const item = document.createElement('div');
    item.className = 'drag-item';
    item.draggable = true;
    item.dataset.value = text;
    item.innerHTML = `
      <span class="drag-order">1</span>
      <span class="drag-value">${text}</span>
    `;

    item.addEventListener('dragstart', () => item.classList.add('dragging'));
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      commitOrder();
    });

    return item;
  }

  initial.forEach((value) => {
    container.appendChild(makeDropSlot());
    container.appendChild(makeItem(String(value)));
  });
  container.appendChild(makeDropSlot());
  renderOrderNumbers();
  setAnswer(index, initial);

  container.addEventListener('dragover', e => e.preventDefault());

  return wrap;
}

// ============================
// Rendering
// ============================
function renderExam() {
  const i = state.currentIndex;
  const q = state.questions[i];
  const answer = state.answers[i];

  ui.progress.textContent = `Question ${i + 1} / ${EXAM_QUESTION_COUNT}`;
  ui.timer.textContent = mmss(state.secondsLeft);

  const root = document.createElement('div');
  root.innerHTML = `
    <div>
      <span class="pill">${q._type.toUpperCase()}</span>
      <span class="pill">${state.flagged[i] ? '🚩 Flagged' : 'Not Flagged'}</span>
    </div>
    <h3 class="question">${String(q.question ?? q.q ?? 'Untitled question')}</h3>
    ${q.prompt ? `<div class="muted">${String(q.prompt)}</div>` : ''}
  `;

  const body = document.createElement('div');
  body.className = 'options';

  if (q._type === 'single') {
    q._displayOptions.forEach((opt, idx) => {
      const id = `single-${i}-${idx}`;
      const label = document.createElement('label');
      label.className = `option${normalizeText(answer) === normalizeText(opt) ? ' selected' : ''}`;
      label.setAttribute('for', id);
      label.innerHTML = `<input id="${id}" type="radio" name="single-${i}" value="${opt}"><div>${opt}</div>`;
      label.querySelector('input').addEventListener('change', (e) => {
        setAnswer(i, e.target.value);
        render();
      });
      body.appendChild(label);
    });
  } else if (q._type === 'multiple') {
    const selected = Array.isArray(answer) ? answer.map(normalizeText) : [];
    q._displayOptions.forEach((opt, idx) => {
      const id = `multi-${i}-${idx}`;
      const checked = selected.includes(normalizeText(opt));
      const label = document.createElement('label');
      label.className = `option${checked ? ' selected' : ''}`;
      label.setAttribute('for', id);
      label.innerHTML = `<input id="${id}" type="checkbox" value="${opt}" ${checked ? 'checked' : ''}><div>${opt}</div>`;

      label.querySelector('input').addEventListener('change', () => {
        // Must use input.value (not text content)
        const picked = Array.from(body.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
        setAnswer(i, picked);
        render();
      });

      body.appendChild(label);
    });
  } else if (q._type === 'fill' || q._type === 'lab') {
    const input = document.createElement(q._type === 'lab' ? 'textarea' : 'input');
    if (q._type === 'fill') input.type = 'text';
    input.rows = 5;
    input.placeholder = q._type === 'lab' ? 'Enter your short lab answer...' : 'Type your answer...';
    input.value = String(answer ?? '');
    input.addEventListener('input', (e) => setAnswer(i, e.target.value));
    body.appendChild(input);
  } else if (q._type === 'dragdrop') {
    const helper = document.createElement('div');
    helper.className = 'muted';
    helper.textContent = 'Drag items into the correct order.';
    body.appendChild(helper);
    body.appendChild(buildDragDrop(q, answer, i));
  }

  root.appendChild(body);

  const controls = document.createElement('div');
  controls.className = 'controls';
  controls.innerHTML = `
    <div class="left">
      <button id="prevBtn" ${i === 0 ? 'disabled' : ''}>← Previous</button>
      <button id="nextBtn" ${i === EXAM_QUESTION_COUNT - 1 ? 'disabled' : ''}>Next →</button>
      <button id="flagBtn">${state.flagged[i] ? 'Unflag' : 'Flag'}</button>
    </div>
    <div class="right">
      <button id="reviewBtn" class="primary">Review & Submit</button>
    </div>
  `;

  root.appendChild(controls);

  ui.app.innerHTML = '';
  ui.app.appendChild(root);

  document.getElementById('prevBtn').addEventListener('click', previousQuestion);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('flagBtn').addEventListener('click', toggleFlagCurrentQuestion);
  document.getElementById('reviewBtn').addEventListener('click', () => {
    state.phase = 'review';
    saveState();
    render();
  });
}

function renderReview() {
  const answered = state.answers.filter(nonEmpty).length;
  const unanswered = EXAM_QUESTION_COUNT - answered;
  const flagged = state.flagged.filter(Boolean).length;

  ui.progress.textContent = 'Review';
  ui.timer.textContent = mmss(state.secondsLeft);

  const root = document.createElement('div');
  root.innerHTML = `
    <h3 style="margin-top:0;">Review Before Submission</h3>
    <div class="muted">Answered ${answered}, Unanswered ${unanswered}, Flagged ${flagged}</div>
  `;

  const nav = document.createElement('div');
  nav.className = 'navigator';

  for (let i = 0; i < EXAM_QUESTION_COUNT; i++) {
    const btn = document.createElement('button');
    btn.className = 'qbtn';
    btn.textContent = String(i + 1);
    if (nonEmpty(state.answers[i])) btn.classList.add('answered');
    if (state.flagged[i]) btn.classList.add('flagged');
    if (i === state.currentIndex) btn.classList.add('current');
    btn.addEventListener('click', () => {
      state.currentIndex = i;
      state.phase = 'exam';
      saveState();
      render();
    });
    nav.appendChild(btn);
  }

  root.appendChild(nav);

  const controls = document.createElement('div');
  controls.className = 'controls';
  controls.innerHTML = `
    <div class="left"><button id="backBtn">Back to Exam</button></div>
    <div class="right"><button id="submitBtn" class="warn">Submit Final Exam</button></div>
  `;
  root.appendChild(controls);

  ui.app.innerHTML = '';
  ui.app.appendChild(root);

  document.getElementById('backBtn').addEventListener('click', () => {
    state.phase = 'exam';
    saveState();
    render();
  });

  document.getElementById('submitBtn').addEventListener('click', () => {
    if (confirm('Submit exam now? You cannot modify answers after submission.')) {
      submitExam(false);
    }
  });
}

function renderResult(timeout) {
  const s = state.score;
  ui.progress.textContent = 'Completed';
  ui.timer.textContent = '00:00';

  const root = document.createElement('div');
  root.innerHTML = `
    <h2 style="margin-top:0;">Exam Results ${timeout ? '(Time Expired)' : ''}</h2>
    <p><strong>Correct:</strong> ${s.correctCount} / ${EXAM_QUESTION_COUNT}</p>
    <p><strong>Raw Score:</strong> ${(s.raw * 100).toFixed(2)}%</p>
    <p><strong>Scaled Score:</strong> ${s.scaled} (range ${SCORE_MIN}-${SCORE_MAX})</p>
    <p><strong>Status:</strong> <span style="color:${s.passed ? 'var(--success)' : 'var(--danger)'}">${s.passed ? 'PASS' : 'FAIL'}</span> (Pass mark: ${PASS_SCORE})</p>
    <h3>Post-exam review</h3>
  `;

  const nav = document.createElement('div');
  nav.className = 'navigator';
  state.questions.forEach((q, i) => {
    const ok = state.details[i]?.ok;
    const btn = document.createElement('button');
    btn.className = 'qbtn';
    btn.style.borderColor = ok ? 'var(--success)' : 'var(--danger)';
    btn.textContent = `${i + 1}${ok ? ' ✓' : ' ✗'}`;
    btn.addEventListener('click', () => {
      const user = state.answers[i];
      const correct = getCorrectField(q);
      alert(`Q${i + 1}\n\n${String(q.question ?? q.q ?? '')}\n\nYour answer: ${JSON.stringify(user)}\nCorrect answer: ${JSON.stringify(correct)}\nResult: ${ok ? 'Correct' : 'Incorrect'}`);
    });
    nav.appendChild(btn);
  });
  root.appendChild(nav);

  const controls = document.createElement('div');
  controls.className = 'controls';
  controls.innerHTML = '<div class="left"><button id="restartBtn" class="primary">Start New Attempt</button></div>';
  root.appendChild(controls);

  ui.app.innerHTML = '';
  ui.app.appendChild(root);

  document.getElementById('restartBtn').addEventListener('click', () => {
    clearSavedState();
    initializeExam();
    startTimer();
    render();
  });
}

function submitExam(timeout) {
  const outcome = scoreExam();
  state.phase = 'result';
  state.score = {
    correctCount: outcome.correctCount,
    raw: outcome.raw,
    scaled: outcome.scaled,
    passed: outcome.passed
  };
  state.details = outcome.details;

  if (timerHandle) {
    clearInterval(timerHandle);
    timerHandle = null;
  }

  saveState();
  render(timeout);
  clearSavedState();
}

function render(timeout = false) {
  if (!state.questions.length) return;
  if (state.phase === 'exam') return renderExam();
  if (state.phase === 'review') return renderReview();
  return renderResult(timeout);
}

// ============================
// Boot
// ============================
(function boot() {
  applyThemeFromStorage();

  const restored = loadState();
  if (!restored) initializeExam();

  if (!Array.isArray(state.questions) || state.questions.length !== EXAM_QUESTION_COUNT) {
    initializeExam();
  }

  if (state.phase === 'exam' || state.phase === 'review') {
    startTimer();
  } else {
    ui.timer.textContent = '00:00';
  }

  render();
})();
