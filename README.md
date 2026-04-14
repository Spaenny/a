# CCNP ENAUTO Exam Simulator

A browser-based CCNP ENAUTO practice exam simulator built as a static web app (no backend required). The app delivers timed exam attempts using a curated 1000-question pool and supports multiple interaction formats, including drag-and-drop ordering and API-style scenario prompts.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [How the Exam Works](#how-the-exam-works)
- [Question Types](#question-types)
- [Scoring Model](#scoring-model)
- [Getting Started](#getting-started)
- [Running Quality Checks](#running-quality-checks)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Accessibility and UX Notes](#accessibility-and-ux-notes)
- [Troubleshooting](#troubleshooting)
- [Customization Guide](#customization-guide)
- [Known Limitations](#known-limitations)
- [License](#license)

---

## Overview

This project simulates a production-style certification exam session:

- fixed-length timed attempt (60 questions, 90 minutes)
- randomized question selection from a larger pool
- deferred grading (results after submit)
- review workflow with answered/unanswered/flagged indicators
- final report with per-question correctness details

The app is intentionally dependency-light and works from static assets, making it easy to run locally or host via GitHub Pages.

---

## Key Features

### Exam engine

- Randomly selects **60 unique question+prompt combinations** per attempt.
- Supports **next/previous navigation** and direct jumps during review.
- Prevents immediate content duplication by de-duplicating selected prompts.
- Includes **question flagging** for uncertain items.
- Automatically submits when the countdown timer reaches `00:00`.

### Scoring and result reporting

- Grades only on submission (manual or timer-driven).
- Supports `c` or `correct` answer fields in dataset objects.
- Provides:
  - correct count
  - raw score ratio
  - scaled score in the **300–1000** range
  - pass/fail against **825** threshold
- Displays per-question result details in a modal.

### UX and resilience

- Dark/light theme toggle persisted in `localStorage`.
- Full attempt state persistence in `localStorage` so refreshes can resume progress.
- Multiple interaction UIs:
  - radio (single choice)
  - checkbox (multiple choice)
  - text input (fill/lab)
  - drag & drop ordering board

---

## Tech Stack

- **HTML/CSS** for the shell and responsive UI layout.
- **Vanilla JavaScript** for state, rendering, timer, scoring, and interactions.
- **Node.js (built-in modules only)** for test scripts (`assert`, `fs`, `vm`).
- **GitHub Actions + GitHub Pages** for static deployment.

No framework, bundler, transpiler, or package manager is required for baseline usage.

---

## Repository Structure

```text
.
├── index.html              # Application shell, styles, and modal markup
├── pool.js                 # 1000-question dataset attached to window.pool
├── core.js                 # Shared grading/type inference helpers (window.ExamCore)
├── script.js               # Runtime app state + UI rendering + timer + navigation
├── tests/
│   ├── core.test.js        # Unit checks for ExamCore behavior
│   └── pool.test.js        # Dataset integrity and content quality checks
├── GITHUB_PAGES.md         # Deployment notes for GitHub Pages
└── README.md
```

---

## How the Exam Works

1. On startup, the app loads `window.pool` from `pool.js`.
2. It shuffles and selects 60 questions, avoiding duplicate `question + prompt` keys when possible.
3. Each question is normalized with inferred type metadata and prepared display options.
4. During the attempt:
   - timer counts down from 90:00
   - answers and flags are stored continuously
   - state is persisted in `localStorage`
5. Submission triggers centralized scoring in `ExamCore.scoreExam(...)`.
6. Final screen shows score summary and lets users inspect per-question outcomes.

---

## Question Types

The simulator supports five normalized types:

- `single`: one option selected
- `multiple`: multiple options selected
- `fill`: free-text answer (e.g., HTTP method)
- `lab`: short-answer interpretation of JSON/API output
- `dragdrop`: ordered sequence construction from provided steps

Type aliases are handled by inference logic (for example, `multiple-choice`, `checkbox`, `drag-and-drop`, and `api` map to internal runtime types).

---

## Scoring Model

Given:

- `correctCount`: number of correctly answered questions
- `questionCount`: total questions (60)
- `scoreMin`: 300
- `scoreMax`: 1000

The app calculates:

- `raw = correctCount / questionCount`
- `scaled = round(scoreMin + raw * (scoreMax - scoreMin))`

A score is considered passing when:

- `scaled >= 825`

---

## Getting Started

### Option 1: Open directly (quick check)

Open `index.html` using your browser (`file://...`).

### Option 2: Local static server (recommended)

```bash
python -m http.server 8080
```

Then browse to: `http://localhost:8080`

---

## Running Quality Checks

Run these from the repository root:

```bash
node --check core.js
node --check script.js
node --check pool.js
node tests/core.test.js
node tests/pool.test.js
```

What they validate:

- syntax correctness for primary runtime files
- scoring/type helper behavior in `core.js`
- pool integrity constraints (count, unique IDs, valid types, answer consistency)
- content-format assertions for fill/lab/dragdrop prompts

---

## GitHub Pages Deployment

A GitHub Actions workflow is expected for Pages deployment.

Typical process:

1. Push updates to the branch configured for deployment workflow execution.
2. In repository settings, set **Pages source** to **GitHub Actions**.
3. Confirm the workflow completes and publishes the site.

Additional environment-specific notes are documented in [`GITHUB_PAGES.md`](./GITHUB_PAGES.md).

---

## Accessibility and UX Notes

- Result details are presented in a modal dialog with `role="dialog"` and `aria-modal="true"`.
- The modal supports:
  - click outside to close
  - explicit close button
  - `Escape` key close behavior
- Focus is returned to the previously focused element after modal close.
- Mobile layout behavior is handled with responsive CSS breakpoints.

---

## Troubleshooting

### Timer or progress did not reset

- The app restores saved attempts from `localStorage`.
- Clear storage for this site or start a new session flow to reset.

### No questions appear

- Ensure `pool.js` is loaded and `window.pool` is defined.
- If the pool is missing/invalid at runtime, the app can fall back to generated placeholder content.

### Drag-and-drop feels inconsistent

- Ensure the browser supports modern drag events.
- Retry in latest Chrome/Edge/Firefox for best behavior.

---

## Customization Guide

### Update exam settings

Edit constants in `script.js`:

- `EXAM_QUESTION_COUNT`
- `EXAM_SECONDS`
- `SCORE_MIN`
- `SCORE_MAX`
- `PASS_SCORE`

### Extend answer/type inference

Edit `core.js`:

- `inferType(...)` aliases
- `isCorrect(...)` answer comparison rules

### Modify dataset quality rules

Edit `tests/pool.test.js` to enforce additional constraints on:

- wording conventions
- option patterns
- scenario formats
- valid answer vocabularies

---

## Known Limitations

- Entirely client-side; there is no secure backend, identity, or proctoring.
- `localStorage` behavior can vary across browsers/private modes.
- The simulator is for practice and may not reflect exact official exam weighting or blueprint coverage.

---

## License

No explicit license file is currently included in this repository.
