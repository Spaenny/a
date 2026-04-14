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
const {
  normalizeText,
  getCorrectField,
  inferType,
  scoreExam: scoreExamCore
} = window.ExamCore;

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
  if (answer && typeof answer === 'object' && !Array.isArray(answer) && Array.isArray(answer.steps)) {
    return answer.steps.some(v => String(v ?? '').trim().length > 0);
  }
  if (Array.isArray(answer)) return answer.length > 0;
  return String(answer ?? '').trim().length > 0;
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
  themeBtn: document.getElementById('themeBtn'),
  resultModalBackdrop: document.getElementById('resultModalBackdrop'),
  resultModalTitle: document.getElementById('resultModalTitle'),
  resultModalBody: document.getElementById('resultModalBody'),
  resultModalCloseBtn: document.getElementById('resultModalCloseBtn')
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
  details: [],
  resultSelection: 0
};

let timerHandle = null;
let previousFocus = null;

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
  const picked = [];
  const seenQuestionKeys = new Set();
  const shuffledPool = shuffle(pool);

  for (const item of shuffledPool) {
    if (picked.length >= EXAM_QUESTION_COUNT) break;
    const key = normalizeText(`${item.question ?? item.q ?? ''}|${item.prompt ?? ''}`);
    if (seenQuestionKeys.has(key)) continue;
    seenQuestionKeys.add(key);
    picked.push(item);
  }

  if (picked.length < EXAM_QUESTION_COUNT) {
    for (const item of shuffledPool) {
      if (picked.length >= EXAM_QUESTION_COUNT) break;
      if (!picked.includes(item)) picked.push(item);
    }
  }

  const prepared = picked.map((q, idx) => {
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
    questions: prepared,
    currentIndex: 0,
    answers: Array(EXAM_QUESTION_COUNT).fill(null),
    flagged: Array(EXAM_QUESTION_COUNT).fill(false),
    secondsLeft: EXAM_SECONDS,
    startedAt: Date.now(),
    score: null,
    details: [],
    resultSelection: 0
  };

  saveState();
}

function closeResultModal() {
  ui.resultModalBackdrop.hidden = true;
  if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
}

function openResultModal(questionIndex) {
  const q = state.questions[questionIndex];
  const user = state.answers[questionIndex];
  const correct = getCorrectField(q);
  const ok = Boolean(state.details[questionIndex]?.ok);

  ui.resultModalTitle.textContent = `Result Details — Question ${questionIndex + 1}`;
  ui.resultModalBody.innerHTML = `
    <p><strong>Question:</strong> ${String(q.question ?? q.q ?? '')}</p>
    <p><strong>Your answer:</strong> <code>${JSON.stringify(user)}</code></p>
    <p><strong>Correct answer:</strong> <code>${JSON.stringify(correct)}</code></p>
    <p><strong>Result:</strong> <span style="color:${ok ? 'var(--success)' : 'var(--danger)'}">${ok ? 'Correct' : 'Incorrect'}</span></p>
  `;

  previousFocus = document.activeElement;
  ui.resultModalBackdrop.hidden = false;
  ui.resultModalCloseBtn.focus();
}

ui.resultModalCloseBtn.addEventListener('click', closeResultModal);
ui.resultModalBackdrop.addEventListener('click', (e) => {
  if (e.target === ui.resultModalBackdrop) closeResultModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !ui.resultModalBackdrop.hidden) closeResultModal();
});

function setAnswer(index, value) {
  if (JSON.stringify(state.answers[index]) === JSON.stringify(value)) return;
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
function scoreExam() {
  return scoreExamCore({
    questions: state.questions,
    answers: state.answers,
    questionCount: EXAM_QUESTION_COUNT,
    scoreMin: SCORE_MIN,
    scoreMax: SCORE_MAX,
    passScore: PASS_SCORE
  });
}

// ============================
// Drag and Drop
// ============================
function buildDragDrop(question, answer, index) {
  const wrap = document.createElement('div');

  const help = document.createElement('div');
  help.className = 'drag-help';
  help.textContent = 'Move items from the Pool into Steps. Each Step accepts one item only. Move an item back to Pool to replace it.';
  wrap.appendChild(help);

  const board = document.createElement('div');
  board.className = 'drag-board';
  wrap.appendChild(board);

  const options = question._displayOptions.map(v => String(v));
  let steps = new Array(options.length).fill(null);

  if (Array.isArray(answer) && answer.length === options.length) {
    const normalizedOptions = new Set(options.map(normalizeText));
    const used = new Set();
    let valid = true;
    answer.forEach((v, idx) => {
      const text = String(v ?? '').trim();
      if (!text) return;
      const key = normalizeText(text);
      if (!normalizedOptions.has(key) || used.has(key)) {
        valid = false;
        return;
      }
      used.add(key);
      steps[idx] = text;
    });
    if (!valid) {
      steps = new Array(options.length).fill(null);
    }
  }

  let draggingValue = null;
  let draggingFromStepIndex = null;

  function makeItem(text, orderNumber = null, sourceStepIndex = null) {
    const item = document.createElement('div');
    item.className = 'drag-item';
    item.draggable = true;
    item.dataset.value = text;
    item.dataset.sourceStep = sourceStepIndex == null ? '' : String(sourceStepIndex);
    if (orderNumber != null) {
      item.innerHTML = `
        <span class="drag-order">${orderNumber}</span>
        <span class="drag-value">${text}</span>
      `;
    } else {
      item.innerHTML = `<span class="drag-value">${text}</span>`;
    }

    item.addEventListener('dragstart', (e) => {
      item.classList.add('dragging');
      draggingValue = text;
      draggingFromStepIndex = sourceStepIndex;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', text);
      e.dataTransfer.setData('text/source-step', sourceStepIndex == null ? '' : String(sourceStepIndex));
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      draggingValue = null;
      draggingFromStepIndex = null;
    });

    return item;
  }

  const poolPanel = document.createElement('div');
  poolPanel.className = 'drag-panel';
  poolPanel.innerHTML = '<div class="drag-panel-title">Pool</div>';
  const poolZone = document.createElement('div');
  poolZone.className = 'pool-zone';
  poolPanel.appendChild(poolZone);

  const stepsPanel = document.createElement('div');
  stepsPanel.className = 'drag-panel';
  stepsPanel.innerHTML = '<div class="drag-panel-title">Steps</div>';
  const stepsZone = document.createElement('div');
  stepsZone.className = 'steps-zone';
  stepsPanel.appendChild(stepsZone);

  board.appendChild(poolPanel);
  board.appendChild(stepsPanel);

  function commitSteps() {
    setAnswer(index, steps.slice());
  }

  function onDragOverActive(target, e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    target.classList.add('active');
  }

  function onDragLeaveInactive(target) {
    target.classList.remove('active');
  }

  function buildPool() {
    poolZone.innerHTML = '';
    const assigned = new Set(steps.filter(Boolean).map(normalizeText));
    options.forEach((opt) => {
      if (!assigned.has(normalizeText(opt))) {
        poolZone.appendChild(makeItem(opt));
      }
    });
  }

  function buildSteps() {
    stepsZone.innerHTML = '';
    steps.forEach((value, idx) => {
      const slot = document.createElement('div');
      slot.className = `step-slot${value ? ' filled' : ''}`;
      slot.dataset.stepIndex = String(idx);
      slot.innerHTML = `
        <div class="step-label">Step ${idx + 1}</div>
        <div class="step-drop-hint">${value ? 'Filled' : 'Drop item here'}</div>
      `;

      if (value) {
        slot.appendChild(makeItem(value, idx + 1, idx));
      }

      slot.addEventListener('dragover', (e) => {
        if (value) return;
        onDragOverActive(slot, e);
      });
      slot.addEventListener('dragleave', () => onDragLeaveInactive(slot));
      slot.addEventListener('drop', (e) => {
        e.preventDefault();
        onDragLeaveInactive(slot);
        if (value) return; // Step is full; must move current item to Pool first

        const dropped = String(e.dataTransfer.getData('text/plain') || draggingValue || '').trim();
        const rawSourceStep = e.dataTransfer.getData('text/source-step');
        const sourceStep = rawSourceStep === '' ? draggingFromStepIndex : Number(rawSourceStep);
        if (!dropped) return;
        if (steps.some((v, stepIdx) => normalizeText(v) === normalizeText(dropped) && stepIdx !== sourceStep)) return;

        if (Number.isInteger(sourceStep) && sourceStep >= 0 && sourceStep < steps.length) {
          steps[sourceStep] = null;
        }

        steps[idx] = dropped;
        commitSteps();
        renderBoard();
      });

      stepsZone.appendChild(slot);
    });
  }

  poolZone.addEventListener('dragover', (e) => onDragOverActive(poolZone, e));
  poolZone.addEventListener('dragleave', () => onDragLeaveInactive(poolZone));
  poolZone.addEventListener('drop', (e) => {
    e.preventDefault();
    onDragLeaveInactive(poolZone);
    const dropped = String(e.dataTransfer.getData('text/plain') || draggingValue || '').trim();
    const rawSourceStep = e.dataTransfer.getData('text/source-step');
    const sourceStep = rawSourceStep === '' ? draggingFromStepIndex : Number(rawSourceStep);
    if (!dropped) return;

    const stepIndex = Number.isInteger(sourceStep)
      ? sourceStep
      : steps.findIndex(v => normalizeText(v) === normalizeText(dropped));
    if (stepIndex >= 0) {
      steps[stepIndex] = null;
      commitSteps();
      renderBoard();
    }
  });

  function renderBoard() {
    buildPool();
    buildSteps();
  }

  renderBoard();
  commitSteps();
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
    if (i === state.resultSelection) btn.classList.add('result-selected');
    btn.style.borderColor = ok ? 'var(--success)' : 'var(--danger)';
    btn.textContent = `${i + 1}${ok ? ' ✓' : ' ✗'}`;
    btn.addEventListener('click', () => {
      state.resultSelection = i;
      saveState();
      render();
    });
    nav.appendChild(btn);
  });
  root.appendChild(nav);

  const controls = document.createElement('div');
  controls.className = 'controls';
  controls.innerHTML = `
    <div class="left">
      <button id="showResultBtn" ${state.details.length ? '' : 'disabled'}>Show Results</button>
      <button id="restartBtn" class="primary">Start New Attempt</button>
    </div>
  `;
  root.appendChild(controls);

  ui.app.innerHTML = '';
  ui.app.appendChild(root);

  document.getElementById('showResultBtn').addEventListener('click', () => {
    openResultModal(state.resultSelection);
  });

  document.getElementById('restartBtn').addEventListener('click', () => {
    clearSavedState();
    initializeExam();
    startTimer();
    render();
  });
}

function submitExam(timeout) {
  const outcome = scoreExam();
  const firstIncorrect = outcome.details.findIndex(d => !d.ok);
  state.phase = 'result';
  state.score = {
    correctCount: outcome.correctCount,
    raw: outcome.raw,
    scaled: outcome.scaled,
    passed: outcome.passed
  };
  state.details = outcome.details;
  state.resultSelection = firstIncorrect >= 0 ? firstIncorrect : 0;

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
