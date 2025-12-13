# Architecture Overview

## App flow

- Entry: `src/main.tsx` mounts `App` inside `React.StrictMode`.
- Startup: `App` checks `KanjiQuestionManager.restoreFromStorage()`; if none,
  renders `StartScreen` with `MemoryManager` instance and bundled questions from
  `src/data.ts`.
- Practice: After start, `App` renders `QuestionHeader`, `PracticeCanvas`, and
  `ControlButtons` driving the practice loop. Completion shows `ResultsView`
  with per-question stats and review restart.
- Persistence: `KanjiQuestionManager` saves progress and results to
  `localStorage` under `kanjiQuestionManagerState`; `MemoryManager` tracks
  per-question history under `question_history`.

## Data model

- Questions live in `src/data.ts` as a readonly array of
  `{ id, sentence, target, svg }` for 1st-grade kanji only.
- `KanjiQuestionManager` wraps question sequencing, correctness rules, scoring
  text, review mode (retry incorrect only), and `localStorage` snapshots.
- `MemoryManager` records correct/incorrect timestamps per question and exposes
  practice filters (`all | new | unsolved | recent-mistakes`) plus aggregate
  stats for the Start screen.

## Drawing + scoring pipeline

- `useDrawingManager` attaches mouse/touch listeners to the practice canvas,
  collects strokes (arrays of points), and offers `clearStrokes()`.
- `functions.ts` houses stroke processing: SVG path parsing, point
  normalization/resampling, DTW-based stroke matching, similarity scoring, and
  canvas helpers (`drawSampleStrokes`, `drawStrokeResults`, etc.).
- Evaluation (`App.handleEvaluate`):
  1. Extract sample strokes from the rendered SVG (`getSVGStrokes`).
  2. Compare stroke count to user input; fail fast if different.
  3. Normalize strokes, compute per-stroke scores, and judge correctness via
     `KanjiQuestionManager.SCORE_THRESHOLD`.
  4. Draw overlays, set result text, record via
     `KanjiQuestionManager.recordResult` and `MemoryManager.saveResult`.

## UI components (selected)

- `StartScreen`: lets the learner pick practice mode and number of questions
  (5-question steps) based on history; starts practice by passing a shuffled
  subset of `data`.
- `QuestionHeader`: shows current position and masked sentence (target kanji
  hidden).
- `PracticeCanvas`: wraps drawing canvas, answer canvas, and sample SVG display.
- `ControlButtons`: triggers evaluate/clear/don't-know/next actions.
- `ResultsView`: summary of scores and incorrect counts with restart/back
  controls.
- `Header`: global top bar for reset/back actions; reused on start and results
  screens.

## State & storage

- React state in `App` holds the active manager instance, current question
  text/SVG, UI flags (show answer/SVG/next), and results snapshot for final
  screen.
- `localStorage` keys:
  - `kanjiQuestionManagerState`: serialized manager state (questions array,
    indices, results, review flag).
  - `question_history`: per-question correct/incorrect timestamps for mode
    filters and stats.

## Current limitations

- Only 1st-grade kanji are bundled (`src/data.ts`); question set is monolithic
  and not grade-aware.
- `StartScreen` uses the single data source; grade selection or mixed-grade
  practice is unsupported.
- Tests exist for managers/components but assume the current single-grade data
  shape.
