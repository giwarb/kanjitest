import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  CanvasDrawingManager,
  compareStrokes,
  drawSampleStrokes,
  getSVGStrokes,
  showEvaluationOverlay,
} from "./functions";
import { data } from "./data";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const answerCanvasRef = useRef<HTMLCanvasElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const [manager, setManager] = useState<CanvasDrawingManager | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [svgContent, setSvgContent] = useState("");
  const [completed, setCompleted] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!manager) {
      if (canvasRef.current) {
        setManager(new CanvasDrawingManager(canvasRef.current));
      }
      return;
    }
    if (currentIndex >= data.length) {
      setCompleted(true);
      return;
    }
    const masked = data[currentIndex].sentence.replace(
      new RegExp(data[currentIndex].target, "g"),
      "＿＿",
    );
    setQuestion(masked);
    setSvgContent(data[currentIndex].svg);
    setShowNext(false);
    setShowAnswer(false);
    setResult("");
    manager.clearStrokes();
  }, [currentIndex, manager]);

  const handleClear = () => {
    manager?.clearStrokes();
    setResult("");
  };

  const handleEvaluate = () => {
    if (!manager) return;
    if (!answerRef.current) return;
    if (!canvasRef.current) return;
    const svg = answerRef.current.querySelector("svg");
    if (!svg) return;
    const strokesSvg = getSVGStrokes(svg);
    const userStrokes = manager.getStrokes();
    const { avgScore, percent, strokeResults, normParamsUser } = compareStrokes(
      strokesSvg,
      userStrokes,
    );
    manager.getCanvasContext().clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );
    showEvaluationOverlay(
      manager.getCanvasContext(),
      strokeResults,
      normParamsUser,
    );
    if (answerCanvasRef.current) {
      const answerCtx = answerCanvasRef.current?.getContext("2d");
      if (answerCtx) {
        drawSampleStrokes(answerCtx, strokeResults, normParamsUser);
      }
    }
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
    if (!completed) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div>
      <h1>文字描画評価ツール(React版)</h1>
      {completed
        ? <div>全問正解です！お疲れさまでした。</div>
        : <div dangerouslySetInnerHTML={{ __html: question }} />}
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
      </div>
      <div>
        <button onClick={handleEvaluate}>評価</button>
        <button onClick={handleClear}>クリア</button>
        {showNext && <button onClick={handleNextQuestion}>次の問題</button>}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: svgContent }}
        style={{
          border: "1px solid #ccc",
          display: showAnswer ? "block" : "none",
        }}
        ref={answerRef}
      />
      <div>{result}</div>
    </div>
  );
}

export default App;
