# CCNP ENAUTO Exam Simulator

A production-style, browser-based CCNP ENAUTO practice simulator built as a static web app.

## Features

- **200-question pool** (`pool.js`) with mixed types:
  - single choice
  - multiple choice
  - fill-in (HTTP method scenarios)
  - lab (JSON/API output interpretation)
  - drag & drop ordering
- **Exam engine**:
  - random 60-question attempt selection
  - duplicate question+prompt prevention per attempt
  - option shuffling
  - 90-minute countdown timer
  - next/previous navigation
  - review before submit
  - optional question flagging
- **Scoring**:
  - deferred grading only at submit
  - normalized answer handling (`c` or `correct`)
  - raw score + scaled score (300–1000)
  - pass mark: 825
- **UX**:
  - dark/light mode
  - localStorage persistence
  - drag/drop pool-to-steps UI for ordering questions
  - modal result details (no `alert()` usage)

---

## Project Structure

```text
.
├── index.html                 # UI shell, styles, modal markup, script includes
├── core.js                    # Shared scoring/inference/normalization logic (ExamCore)
├── script.js                  # App state, rendering, timer, navigation, drag/drop, review
├── pool.js                    # 200-question dataset
├── tests/
│   ├── core.test.js           # unit checks for ExamCore
│   └── pool.test.js           # pool integrity and quality checks
├── .github/workflows/
│   └── deploy-pages.yml       # GitHub Pages deployment workflow
├── .nojekyll                  # Pages static behavior flag
├── GITHUB_PAGES.md            # Pages setup notes
└── README.md
```

---

## How to Run Locally

### Option 1: Open directly

You can open `index.html` directly in a browser (`file://...`) for quick testing.

### Option 2: Use a local static server (recommended)

```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```

---

## Exam Behavior

- On start, the app picks **60 unique question+prompt combinations** from `window.pool`.
- Progress is saved to `localStorage`.
- Timer auto-submits when it reaches `00:00`.
- Review screen shows answered / unanswered / flagged counts and jump navigation.
- Post-submit, result navigator lets you select a question and open details via **Show Results** modal.

---

## Question Content Quality Rules

The dataset is validated to ensure:

- exactly 200 questions
- valid supported types only
- unique IDs
- unique question+prompt content
- fill questions contain explicit API scenario context + valid HTTP method answers
- lab questions contain JSON/API output context
- single/multiple answers exist in options
- drag/drop options and ordered answers are structurally consistent

These checks live in `tests/pool.test.js`.

---

## Scoring Model

- Correct count: `correct / 60`
- Raw score: percentage of correct answers
- Scaled score: linear mapping to range **300–1000**
- Pass threshold: **825**

---

## Development / Validation

Run checks:

```bash
node --check core.js
node --check script.js
node --check pool.js
node tests/core.test.js
node tests/pool.test.js
```

---

## GitHub Pages Deployment

The repository includes a Pages workflow in `.github/workflows/deploy-pages.yml`.

Typical steps:

1. Push to your default branch configured by the workflow.
2. In GitHub repo settings, ensure Pages is enabled and permitted for GitHub Actions deployment.
3. Verify Actions runs successfully and publishes the site.

See `GITHUB_PAGES.md` for additional notes.

---

## Accessibility Notes

- Result details use an in-page modal dialog (`role="dialog"`, `aria-modal="true"`).
- Keyboard support includes ESC to close.
- Focus is returned to prior element after modal close.

---

## Known Limitations

- This project is fully client-side and has no server/backend.
- localStorage behavior is browser-dependent (private/incognito restrictions may apply).
- Question pool quality depends on static authoring and validation rules; always review content changes with tests.

---

## License

No explicit license file is currently included in this repository.
