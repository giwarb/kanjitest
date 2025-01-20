import { useCallback, useEffect, useRef, useState } from "react";
import {
  compareStrokes,
  drawSampleStrokes,
  getSVGStrokes,
  showEvaluationOverlay,
} from "./functions";
import { KanjiQuestionManager } from "./KanjiQuestionManager";
import { useDrawingManager } from "./useDrawingManager";
import { data } from "./data";
import { ConfirmDialog } from "./components/ConfirmDialog";
import { ResultsView } from "./components/ResultsView";
import { PracticeCanvas } from "./components/PracticeCanvas";
import { QuestionHeader } from "./components/QuestionHeader";
import { ControlButtons } from "./components/ControlButtons";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const answerCanvasRef = useRef<HTMLCanvasElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const { userStrokes, clearStrokes } = useDrawingManager(canvasRef.current);
  const [manager] = useState(() => new KanjiQuestionManager(data.slice(0, 20)));
  const [question, setQuestion] = useState("");
  const [svgContent, setSvgContent] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSVG, setShowSVG] = useState(false);
  const [result, setResult] = useState("");
  const [results, setResults] = useState<
    {
      total: number;
      correct: number;
      incorrectCount: number;
      percentage: number;
      incorrectDetails: {
        questionIndex: number;
        incorrectCount: number;
        sentence: string;
      }[];
    } | null
  >(null);
  const [isConfirmResetOpen, setIsConfirmResetOpen] = useState(false);

  const loadQuestion = useCallback(() => {
    const currentQuestion = manager.getCurrentQuestion();
    if (currentQuestion) {
      const masked = currentQuestion.sentence.replace(
        new RegExp(currentQuestion.target, "g"),
        "＿＿",
      );
      setQuestion(masked);
      setSvgContent(currentQuestion.svg);
    }
    setShowNext(false);
    setShowAnswer(false);
    setShowSVG(false);
    setResult("");
    clearStrokes();
  }, [manager, clearStrokes]);

  useEffect(() => {
    loadQuestion();
  }, [loadQuestion]);

  const handleClear = () => {
    clearStrokes();
    setResult("");
  };

  const handleEvaluate = () => {
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
        `かくすうがちがうよ！（おてほん: ${strokesSvg.length}、あなた: ${userStrokes.length}）`,
      );
      setShowSVG(true);
      manager.recordResult(false);
    } else {
      const {
        strokeResults,
        normParamsUser,
      } = compareStrokes(strokesSvg, userStrokes);
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
        KanjiQuestionManager.SCORE_THRESHOLD,
      );
      drawSampleStrokes(
        answerCtx,
        strokeResults,
        normParamsUser,
        KanjiQuestionManager.SCORE_THRESHOLD,
      );
      setShowAnswer(true);
      setResult(`${resultText}（${scoreText}）`);
      manager.recordResult(isCorrect, strokeResults);
    }
    setShowNext(true);
  };

  const handleNextQuestion = () => {
    if (manager.moveToNext()) {
      loadQuestion();
    } else {
      const scores = manager.getResultsScore();
      const incorrectDetails = manager.getIncorrectCounts();
      setResults({
        ...scores,
        incorrectDetails,
      });
    }
  };

  const handleRestartReview = () => {
    manager.startReviewMode();
    loadQuestion();
    setResults(null);
  };

  const handleReset = () => {
    setIsConfirmResetOpen(true);
  };

  const handleConfirmReset = () => {
    manager.reset();
    loadQuestion();
    setResults(null);
    setIsConfirmResetOpen(false);
  };

  const handleDontKnow = () => {
    setShowSVG(true);
    setResult("むずかしいですね。おてほんを みてみましょう！");
    manager.recordResult(false);
    setShowNext(true);
  };

  const hasStrokes = userStrokes.length > 0;

  if (results) {
    return (
      <ResultsView
        results={results}
        onRestartReview={handleRestartReview}
      />
    );
  }

  return (
    <div className="app">
      <QuestionHeader
        currentQuestionNumber={manager.getCurrentQuestionNumber()}
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
        onReset={handleReset}
      />
      <ConfirmDialog
        isOpen={isConfirmResetOpen}
        message="さいしょからやりなおしますか？"
        onConfirm={handleConfirmReset}
        onCancel={() => setIsConfirmResetOpen(false)}
      />
    </div>
  );
}

export default App;
