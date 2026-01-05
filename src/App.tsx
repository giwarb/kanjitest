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

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const answerCanvasRef = useRef<HTMLCanvasElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const lastEvaluateAtRef = useRef(0);
  const { userStrokes, clearStrokes } = useDrawingManager(canvasRef.current);
  const [manager, setManager] = useState<KanjiQuestionManager | null>(null);
  const memoryManagerRef = useRef<MemoryManager>(new MemoryManager());
  const [question, setQuestion] = useState("");
  const [svgContent, setSvgContent] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSVG, setShowSVG] = useState(false);
  const [result, setResult] = useState<React.ReactNode>("");
  const [scoreAndResults, setScoreAndResults] = useState<{
    score: ReturnType<KanjiQuestionManager["getScore"]>;
    results: ReturnType<KanjiQuestionManager["getResults"]>;
  } | null>(null);

  const loadQuestion = useCallback(() => {
    if (!manager) return;
    if (manager.isComplete()) {
      const score = manager.getScore();
      const results = manager.getResults();
      setScoreAndResults({ score, results });
    } else {
      const currentQuestion = manager.getCurrentQuestion();
      if (!currentQuestion) {
        return;
      }
      const masked = currentQuestion.sentence.replace(
        new RegExp(currentQuestion.target, "g"),
        "＿＿"
      );
      setQuestion(masked);
      setSvgContent(cleanSvgContent(currentQuestion.svg));
      setShowNext(false);
      setShowAnswer(false);
      setShowSVG(false);
      setResult("");
      clearStrokes();
    }
  }, [manager, clearStrokes]);

  useEffect(() => {
    const restored = KanjiQuestionManager.restoreFromStorage();
    if (restored) {
      setManager(restored);
    }
  }, []);

  useEffect(() => {
    if (manager) {
      loadQuestion();
    }
  }, [loadQuestion, manager]);

  const handleStartPractice = (questions: Question[], _grade: string) => {
    setManager(new KanjiQuestionManager(questions));
  };

  const handleClear = () => {
    clearStrokes();
    setResult("");
  };

  const handleEvaluate = () => {
    if (!manager) return;
    if (!canvasRef.current) return;

    // pointer(touch) と click の二重発火をガード
    const now = Date.now();
    if (now - lastEvaluateAtRef.current < 600) return;
    lastEvaluateAtRef.current = now;

    if (!svgContent) {
      setResult("お手本を読み込み中です。もう一度押してね。 ");
      return;
    }

    // SVG 文字列はブラウザ描画(HTMLパーサ)では扱えるが、XMLとしては不正な場合があり
    // DOMParser(image/svg+xml) だと path が取れず画数=0 になることがある。
    // 表示と同じ解釈に合わせるため innerHTML で in-memory 解析する。
    const container = document.createElement("div");
    container.innerHTML = svgContent;
    const svg = container.querySelector("svg") as SVGSVGElement | null;
    if (!svg) {
      setResult("お手本の読み込みに失敗しました。もう一度押してね。 ");
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
      setResult(
        <>
          <Ruby base="画数" reading="かくすう" />が
          <Ruby base="違" reading="ちが" />
          うよ！（お
          <Ruby base="手本" reading="てほん" />: {strokesSvg.length}、あなた:{" "}
          {userStrokes.length}）
        </>
      );
      setShowSVG(true);
      setShowNext(true);
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
      drawStrokeResults(ctx, normalized, KanjiQuestionManager.SCORE_THRESHOLD);
      drawSampleStrokes(
        answerCtx,
        normalized,
        KanjiQuestionManager.SCORE_THRESHOLD
      );
      setShowAnswer(true);
      setResult(
        <>
          {resultText}（{scoreText}）
        </>
      );
      setShowNext(true);
      safeRecordAndSave(isCorrect, normalized);
    }
  };

  const handleNextQuestion = () => {
    loadQuestion();
  };

  const handleRestartReview = () => {
    if (!manager) return;
    manager.startReviewMode();
    loadQuestion();
    setScoreAndResults(null);
  };

  const handleBackToStart = () => {
    manager?.unloadFromStorage();
    setManager(null);
    setScoreAndResults(null);
  };

  const handleReset = () => {
    if (!manager) return;
    manager.reset();
    loadQuestion();
    setScoreAndResults(null);
  };

  const handleDontKnow = () => {
    if (!manager) return;
    const currentQuestion = manager.getCurrentQuestion();
    if (!currentQuestion) return;
    setShowSVG(true);
    setResult(
      <>
        <Ruby base="難" reading="むずか" />
        しいですね。お
        <Ruby base="手本" reading="てほん" />を
        <Ruby base="見" reading="み" />
        てみましょう！
      </>
    );
    manager.recordResult(false);
    memoryManagerRef.current.saveResult(
      currentQuestion.id,
      new Date().toISOString(),
      false
    );
    setShowNext(true);
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

  if (scoreAndResults) {
    return (
      <div className="app">
        <Header onReset={handleReset} onBackToStart={handleBackToStart} />
        <ResultsView
          scoreAndResults={scoreAndResults}
          onRestartReview={handleRestartReview}
          onBackToStart={handleBackToStart}
        />
      </div>
    );
  }

  const currentQuestionNumber = showNext
    ? manager.getCurrentQuestionNumber() - 1
    : manager.getCurrentQuestionNumber();

  return (
    <div className="app">
      <Header onReset={handleReset} onBackToStart={handleBackToStart} />
      <QuestionHeader
        currentQuestionNumber={currentQuestionNumber}
        totalQuestions={manager.getTotalQuestions()}
        question={question}
        isReviewMode={manager.isInReviewMode()}
      />
      <PracticeCanvas
        canvasRef={canvasRef}
        answerCanvasRef={answerCanvasRef}
        answerRef={answerRef}
        showAnswer={showAnswer}
        showSVG={showSVG}
        svgContent={svgContent}
        result={result}
      />
      <ControlButtons
        showNext={showNext}
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
