import { useCallback, useEffect, useRef, useState } from "react";
import {
  normalizeStrokes,
  drawSampleStrokes,
  getSVGStrokes,
  drawStrokeResults,
} from "./functions";
import { KanjiQuestionManager } from "./KanjiQuestionManager";
import { useDrawingManager } from "./hooks/useDrawingManager";
import type { data } from "./data";
import { ResultsView } from "./components/ResultsView";
import { PracticeCanvas } from "./components/PracticeCanvas";
import { ControlButtons } from "./components/ControlButtons";
import { StartScreen } from "./components/StartScreen";
import { Header } from "./components/Header";
import "./App.css";
import { QuestionHeader } from "./components/QuestionHeader";
import { MemoryManager } from "./MemoryManager";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const answerCanvasRef = useRef<HTMLCanvasElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const { userStrokes, clearStrokes } = useDrawingManager(canvasRef.current);
  const [manager, setManager] = useState<KanjiQuestionManager | null>(null);
  const memoryManagerRef = useRef<MemoryManager>(new MemoryManager());
  const [question, setQuestion] = useState("");
  const [svgContent, setSvgContent] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSVG, setShowSVG] = useState(false);
  const [result, setResult] = useState("");
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
      setSvgContent(currentQuestion.svg);
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

  const handleStartPractice = (questions: typeof data) => {
    setManager(new KanjiQuestionManager(questions));
  };

  const handleClear = () => {
    clearStrokes();
    setResult("");
  };

  const handleEvaluate = () => {
    if (!manager) return;
    if (!answerRef.current) return;
    if (!canvasRef.current) return;
    const svg = answerRef.current.querySelector("svg");
    if (!svg) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const answerCtx = answerCanvasRef.current?.getContext("2d");
    if (!answerCtx) return;
    const currentQuestion = manager.getCurrentQuestion();
    if (!currentQuestion) return;
    const strokesSvg = getSVGStrokes(svg);
    if (strokesSvg.length !== userStrokes.length) {
      setResult(
        `かくすうがちがうよ！（おてほん: ${strokesSvg.length}、あなた: ${userStrokes.length}）`
      );
      setShowSVG(true);
      manager.recordResult(false);
      memoryManagerRef.current.saveResult(
        currentQuestion.id,
        new Date().toISOString(),
        false
      );
    } else {
      const { strokeResults, normParamsUser } = normalizeStrokes(
        strokesSvg,
        userStrokes
      );
      const scores = strokeResults.map((result) => result.score);
      const isCorrect = manager.isCorrect(scores);
      const scoreText = manager.getScoreText(scores);
      const resultText = isCorrect
        ? "せいかい！よくかけました！"
        : "ざんねん！おてほんをよくみよう！";
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      drawStrokeResults(
        ctx,
        strokeResults,
        normParamsUser,
        KanjiQuestionManager.SCORE_THRESHOLD
      );
      drawSampleStrokes(
        answerCtx,
        strokeResults,
        normParamsUser,
        KanjiQuestionManager.SCORE_THRESHOLD
      );
      setShowAnswer(true);
      setResult(`${resultText}（${scoreText}）`);
      manager.recordResult(isCorrect, strokeResults);
      memoryManagerRef.current.saveResult(
        currentQuestion.id,
        new Date().toISOString(),
        isCorrect
      );
    }
    setShowNext(true);
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
    setResult("むずかしいですね。おてほんを みてみましょう！");
    manager.recordResult(false);
    memoryManagerRef.current.saveResult(
      currentQuestion.id,
      new Date().toISOString(),
      false
    );
    setShowNext(true);
  };

  const hasStrokes = userStrokes.length > 0;

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
        onEvaluate={handleEvaluate}
        onClear={handleClear}
        onDontKnow={handleDontKnow}
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
}

export default App;
