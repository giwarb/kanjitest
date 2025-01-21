import { useCallback, useEffect, useRef, useState } from "react";
import {
  compareStrokes,
  drawSampleStrokes,
  getSVGStrokes,
  showEvaluationOverlay,
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

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const answerCanvasRef = useRef<HTMLCanvasElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const { userStrokes, clearStrokes } = useDrawingManager(canvasRef.current);
  const [manager, setManager] = useState<KanjiQuestionManager | null>(null);
  const [question, setQuestion] = useState("");
  const [svgContent, setSvgContent] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSVG, setShowSVG] = useState(false);
  const [result, setResult] = useState("");
  const [results, setResults] = useState<{
    total: number;
    correct: number;
    incorrectCount: number;
    percentage: number;
    incorrectDetails: {
      questionIndex: number;
      incorrectCount: number;
      sentence: string;
    }[];
  } | null>(null);

  const loadQuestion = useCallback(() => {
    if (!manager) return;
    if (manager.isComplete()) {
      const scores = manager.getResultsScore();
      const incorrectDetails = manager.getIncorrectCounts();
      setResults({
        ...scores,
        incorrectDetails,
      });
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
    const strokesSvg = getSVGStrokes(svg);
    if (strokesSvg.length !== userStrokes.length) {
      setResult(
        `かくすうがちがうよ！（おてほん: ${strokesSvg.length}、あなた: ${userStrokes.length}）`
      );
      setShowSVG(true);
      manager.recordResult(false);
    } else {
      const { strokeResults, normParamsUser } = compareStrokes(
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
      showEvaluationOverlay(
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
    setResults(null);
  };

  const handleBackToStart = () => {
    manager?.unloadFromStorage();
    setManager(null);
    setResults(null);
  };

  const handleReset = () => {
    if (!manager) return;
    manager.reset();
    loadQuestion();
    setResults(null);
  };

  const handleDontKnow = () => {
    if (!manager) return;
    setShowSVG(true);
    setResult("むずかしいですね。おてほんを みてみましょう！");
    manager.recordResult(false);
    setShowNext(true);
  };

  const hasStrokes = userStrokes.length > 0;

  if (!manager) {
    return <StartScreen onStartPractice={handleStartPractice} />;
  }

  if (results) {
    return (
      <div className="app">
        <Header onReset={handleReset} onBackToStart={handleBackToStart} />
        <ResultsView results={results} onRestartReview={handleRestartReview} />
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
