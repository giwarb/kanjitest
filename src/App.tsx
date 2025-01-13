import { useCallback, useEffect, useRef, useState } from "react";
import {
  compareStrokes,
  drawSampleStrokes,
  getSVGStrokes,
  showEvaluationOverlay,
} from "./functions";
import { useDrawingManager } from "./useDrawingManager";
import { data } from "./data";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const answerCanvasRef = useRef<HTMLCanvasElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const { userStrokes, clearStrokes } = useDrawingManager(
    canvasRef.current,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [svgContent, setSvgContent] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSVG, setShowSVG] = useState(false);
  const [result, setResult] = useState("");

  const completed = currentIndex >= data.length;

  const loadQuestion = useCallback((idx: number) => {
    const masked = data[idx].sentence.replace(
      new RegExp(data[idx].target, "g"),
      "＿＿",
    );
    setQuestion(masked);
    setSvgContent(data[idx].svg);
    setShowNext(false);
    setShowAnswer(false);
    setShowSVG(false);
    setResult("");
    clearStrokes();
  }, [clearStrokes]);

  useEffect(() => {
    loadQuestion(0);
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
      setResult("描画されたストローク数が異なります。");
      setShowSVG(true);
      setShowNext(true);
      return;
    }
    const { avgScore, percent, strokeResults, normParamsUser } = compareStrokes(
      strokesSvg,
      userStrokes,
    );
    ctx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );
    showEvaluationOverlay(
      ctx,
      strokeResults,
      normParamsUser,
    );
    drawSampleStrokes(answerCtx, strokeResults, normParamsUser);
    setShowNext(true);
    setShowAnswer(true);
    setResult(
      `スコア: ${percent}%\n${
        avgScore >= 0.7
          ? "正しく描かれています。"
          : "お手本を参考にしてください"
      }`,
    );
  };

  const handleNextQuestion = () => {
    if (!completed) {
      setCurrentIndex((prev) => prev + 1);
      loadQuestion(currentIndex + 1);
    }
  };

  const hasStrokes = userStrokes.length > 0;

  return (
    <div className="app">
      {completed ? <div>全問正解です！お疲れさまでした。</div> : (
        <div
          className="question"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      )}
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <canvas
          ref={canvasRef}
          width="500"
          height="500"
          style={{ border: "1px solid #000" }}
        />
        <canvas
          ref={answerCanvasRef}
          width="500"
          height="500"
          style={{
            border: "1px solid #000",
            display: showAnswer ? "block" : "none",
          }}
        />
        <div
          dangerouslySetInnerHTML={{ __html: svgContent }}
          style={{
            border: "1px solid #000",
            display: showSVG ? "block" : "none",
          }}
          ref={answerRef}
        />
      </div>
      <div>{result}</div>
      <div className="button-container">
        <button
          onClick={handleEvaluate}
          disabled={!hasStrokes}
          style={{ display: showNext ? "none" : "block" }}
        >
          評価
        </button>
        <button
          onClick={handleClear}
          disabled={!hasStrokes}
          style={{ display: showNext ? "none" : "block" }}
        >
          クリア
        </button>
        {showNext && <button onClick={handleNextQuestion}>次の問題</button>}
      </div>
    </div>
  );
}

export default App;
