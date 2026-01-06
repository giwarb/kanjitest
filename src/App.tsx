import { useCallback, useEffect, useRef, useState } from "react";
import {
  normalizeStrokes,
  drawSampleStrokes,
  getSVGStrokes,
  drawStrokeResults,
  cleanSvgContent,
} from "./functions";
import { KanjiQuestionManager } from "./KanjiQuestionManager";
import { useDrawingManager } from "./hooks/useDrawingManager";
import type { Question } from "./KanjiQuestionManager";
import { ResultsView } from "./components/ResultsView";
import { PracticeCanvas } from "./components/PracticeCanvas";
import { ControlButtons } from "./components/ControlButtons";
import { StartScreen } from "./components/StartScreen";
import { Header } from "./components/Header";
import "./App.css";
import { QuestionHeader } from "./components/QuestionHeader";
import { MemoryManager } from "./MemoryManager";
import { Ruby } from "./components/Ruby";

type ScoreAndResults = {
  score: ReturnType<KanjiQuestionManager["getScore"]>;
  results: ReturnType<KanjiQuestionManager["getResults"]>;
};

type AppState = {
  manager: KanjiQuestionManager | null;
  question: string;
  svgContent: string;
  showNext: boolean;
  showAnswer: boolean;
  showSVG: boolean;
  result: React.ReactNode;
  scoreAndResults: ScoreAndResults | null;
};

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const answerCanvasRef = useRef<HTMLCanvasElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const lastEvaluateAtRef = useRef(0);
  const lastRestartReviewAtRef = useRef(0);
  const isEvaluatingRef = useRef(false);
  const isRestartingReviewRef = useRef(false);
  const { userStrokes, clearStrokes } = useDrawingManager(canvasRef.current);
  const memoryManagerRef = useRef<MemoryManager>(new MemoryManager());

  const [state, setState] = useState<AppState>({
    manager: null,
    question: "",
    svgContent: "",
    showNext: false,
    showAnswer: false,
    showSVG: false,
    result: "",
    scoreAndResults: null,
  });

  const manager = state.manager;
  const svgContent = state.svgContent;

  const loadQuestion = useCallback(() => {
    if (!manager) return;
    if (manager.isComplete()) {
      const score = manager.getScore();
      const results = manager.getResults();
      setState((prev) => ({
        ...prev,
        scoreAndResults: { score, results },
        // 結果画面では不要なのでリセットしておく（次の遷移の安定化）
        showNext: false,
        showAnswer: false,
        showSVG: false,
      }));
    } else {
      const currentQuestion = manager.getCurrentQuestion();
      if (!currentQuestion) {
        // 防御: 内部状態が壊れて currentQuestion が取れない場合にUIが固まらないようにする
        const score = manager.getScore();
        const results = manager.getResults();
        setState((prev) => ({
          ...prev,
          scoreAndResults: { score, results },
          showNext: false,
          showAnswer: false,
          showSVG: false,
        }));
        return;
      }
      const masked = currentQuestion.sentence.replace(
        new RegExp(currentQuestion.target, "g"),
        "＿＿"
      );
      setState((prev) => ({
        ...prev,
        question: masked,
        svgContent: cleanSvgContent(currentQuestion.svg),
        showNext: false,
        showAnswer: false,
        showSVG: false,
        result: "",
        scoreAndResults: null,
      }));
      clearStrokes();
    }
  }, [manager, clearStrokes]);

  useEffect(() => {
    const restored = KanjiQuestionManager.restoreFromStorage();
    if (restored) {
      setState((prev) => ({ ...prev, manager: restored }));
    }
  }, []);

  useEffect(() => {
    if (manager) {
      loadQuestion();
    }
  }, [loadQuestion, manager]);

  const handleStartPractice = (questions: Question[], _grade: string) => {
    setState((prev) => ({
      ...prev,
      manager: new KanjiQuestionManager(questions),
      scoreAndResults: null,
    }));
  };

  const handleClear = () => {
    clearStrokes();
    setState((prev) => ({ ...prev, result: "" }));
  };

  const handleEvaluate = () => {
    if (!manager) return;
    if (!canvasRef.current) return;
    if (state.showNext) return;
    if (isEvaluatingRef.current) return;

    // pointer(touch) と click の二重発火をガード
    const now = Date.now();
    if (now - lastEvaluateAtRef.current < 600) return;
    lastEvaluateAtRef.current = now;

    isEvaluatingRef.current = true;

    try {
      if (!svgContent) {
        setState((prev) => ({
          ...prev,
          result: "お手本を読み込み中です。もう一度押してね。 ",
        }));
        return;
      }

      // SVG 文字列はブラウザ描画(HTMLパーサ)では扱えるが、XMLとしては不正な場合があり
      // DOMParser(image/svg+xml) だと path が取れず画数=0 になることがある。
      // 表示と同じ解釈に合わせるため innerHTML で in-memory 解析する。
      const container = document.createElement("div");
      container.innerHTML = svgContent;
      const svg = container.querySelector("svg") as SVGSVGElement | null;
      if (!svg) {
        setState((prev) => ({
          ...prev,
          result: "お手本の読み込みに失敗しました。もう一度押してね。 ",
        }));
        return;
      }

      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;
      const answerCtx = answerCanvasRef.current?.getContext("2d");
      if (!answerCtx) return;
      const currentQuestion = manager.getCurrentQuestion();
      if (!currentQuestion) return;
      const strokesSvg = getSVGStrokes(svg);

      const safeRecordAndSave = (
        isCorrect: boolean,
        normalized?: Parameters<KanjiQuestionManager["recordResult"]>[1]
      ) => {
        try {
          manager.recordResult(isCorrect, normalized);
        } catch (err) {
          console.error("recordResult failed", err);
        }
        try {
          memoryManagerRef.current.saveResult(
            currentQuestion.id,
            new Date().toISOString(),
            isCorrect
          );
        } catch (err) {
          console.error("saveResult failed", err);
        }
      };

      if (strokesSvg.length !== userStrokes.length) {
        setState((prev) => ({
          ...prev,
          showSVG: true,
          showNext: true,
          result: (
            <>
              <Ruby base="画数" reading="かくすう" />が
              <Ruby base="違" reading="ちが" />
              うよ！（お
              <Ruby base="手本" reading="てほん" />: {strokesSvg.length}
              、あなた: {userStrokes.length}）
            </>
          ),
        }));
        safeRecordAndSave(false);
      } else {
        const normalized = normalizeStrokes(strokesSvg, userStrokes);
        const scores = normalized.strokeResults.map((result) => result.score);
        const isCorrect = manager.isCorrect(scores);
        const scoreText = manager.getScoreText(scores);
        const resultText = isCorrect ? (
          <>
            <Ruby base="正解" reading="せいかい" />
            ！よく
            <Ruby base="書" reading="か" />
            けました！
          </>
        ) : (
          <>
            <Ruby base="残念" reading="ざんねん" />
            ！お
            <Ruby base="手本" reading="てほん" />
            をよく
            <Ruby base="見" reading="み" />
            よう！
          </>
        );
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        drawStrokeResults(
          ctx,
          normalized,
          KanjiQuestionManager.SCORE_THRESHOLD
        );
        drawSampleStrokes(
          answerCtx,
          normalized,
          KanjiQuestionManager.SCORE_THRESHOLD
        );
        setState((prev) => ({
          ...prev,
          showAnswer: true,
          showNext: true,
          result: (
            <>
              {resultText}（{scoreText}）
            </>
          ),
        }));
        safeRecordAndSave(isCorrect, normalized);
      }
    } finally {
      isEvaluatingRef.current = false;
    }
  };

  const handleNextQuestion = () => {
    loadQuestion();
  };

  const handleRestartReview = () => {
    if (!manager) return;
    if (isRestartingReviewRef.current) return;

    // pointer(touch) と click の二重発火や連打をガード
    const now = Date.now();
    if (now - lastRestartReviewAtRef.current < 600) return;
    lastRestartReviewAtRef.current = now;

    isRestartingReviewRef.current = true;
    try {
      manager.startReviewMode();
      // 復習開始後の状態反映は共通ロジックに寄せてブレを無くす
      loadQuestion();
      lastEvaluateAtRef.current = 0;
    } finally {
      isRestartingReviewRef.current = false;
    }
  };

  const handleBackToStart = () => {
    manager?.unloadFromStorage();
    setState((prev) => ({
      ...prev,
      manager: null,
      scoreAndResults: null,
      question: "",
      svgContent: "",
      showNext: false,
      showAnswer: false,
      showSVG: false,
      result: "",
    }));
  };

  const handleReset = () => {
    if (!manager) return;
    manager.reset();
    loadQuestion();
    setState((prev) => ({ ...prev, scoreAndResults: null }));
  };

  const handleDontKnow = () => {
    if (!manager) return;
    const currentQuestion = manager.getCurrentQuestion();
    if (!currentQuestion) return;
    setState((prev) => ({
      ...prev,
      showSVG: true,
      showNext: true,
      result: (
        <>
          <Ruby base="難" reading="むずか" />
          しいですね。お
          <Ruby base="手本" reading="てほん" />を
          <Ruby base="見" reading="み" />
          てみましょう！
        </>
      ),
    }));
    try {
      manager.recordResult(false);
    } catch (err) {
      console.error("recordResult failed", err);
    }
    try {
      memoryManagerRef.current.saveResult(
        currentQuestion.id,
        new Date().toISOString(),
        false
      );
    } catch (err) {
      console.error("saveResult failed", err);
    }
  };

  const hasStrokes = userStrokes.length > 0;
  const canEvaluate =
    hasStrokes &&
    !!svgContent &&
    canvasRef.current !== null &&
    answerCanvasRef.current !== null;

  if (!manager) {
    return (
      <StartScreen
        onStartPractice={handleStartPractice}
        memoryManager={memoryManagerRef.current}
      />
    );
  }

  if (state.scoreAndResults) {
    return (
      <div className="app">
        <Header onReset={handleReset} onBackToStart={handleBackToStart} />
        <ResultsView
          scoreAndResults={state.scoreAndResults}
          onRestartReview={handleRestartReview}
          onBackToStart={handleBackToStart}
        />
      </div>
    );
  }

  const currentQuestionNumber = state.showNext
    ? manager.getCurrentQuestionNumber() - 1
    : manager.getCurrentQuestionNumber();

  return (
    <div className="app">
      <Header onReset={handleReset} onBackToStart={handleBackToStart} />
      <QuestionHeader
        currentQuestionNumber={currentQuestionNumber}
        totalQuestions={manager.getTotalQuestions()}
        question={state.question}
        isReviewMode={manager.isInReviewMode()}
      />
      <PracticeCanvas
        canvasRef={canvasRef}
        answerCanvasRef={answerCanvasRef}
        answerRef={answerRef}
        showAnswer={state.showAnswer}
        showSVG={state.showSVG}
        svgContent={state.svgContent}
        result={state.result}
      />
      <ControlButtons
        showNext={state.showNext}
        hasStrokes={hasStrokes}
        canEvaluate={canEvaluate}
        onEvaluate={handleEvaluate}
        onClear={handleClear}
        onDontKnow={handleDontKnow}
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
}

export default App;
