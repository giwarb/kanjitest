import { useCallback, useEffect, useRef, useState } from "react";
import {
  compareStrokes,
  drawSampleStrokes,
  getSVGStrokes,
  showEvaluationOverlay,
  type StrokeResult,
} from "./functions";
import { KanjiQuestionManager } from "./KanjiQuestionManager";
import { useDrawingManager } from "./useDrawingManager";
import { data } from "./data";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const answerCanvasRef = useRef<HTMLCanvasElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const { userStrokes, clearStrokes } = useDrawingManager(canvasRef.current);
  const [manager] = useState(() => new KanjiQuestionManager(data));
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
    let score = 0;
    let displayPercent = "0";
    let strokeResults: StrokeResult[] = [];
    let normParamsUser: { centerX: number; centerY: number; scale: number } = {
      centerX: 0,
      centerY: 0,
      scale: 1,
    };

    if (strokesSvg.length !== userStrokes.length) {
      setResult(
        `かくすうがちがうよ！（おてほん: ${strokesSvg.length}、あなた: ${userStrokes.length}）`,
      );
      setShowSVG(true);
    } else {
      const result = compareStrokes(strokesSvg, userStrokes);
      score = result.avgScore;
      displayPercent = result.percent;
      strokeResults = result.strokeResults;
      normParamsUser = result.normParamsUser;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      showEvaluationOverlay(ctx, strokeResults, normParamsUser);
      drawSampleStrokes(answerCtx, strokeResults, normParamsUser);
      setShowAnswer(true);
      setResult(
        `スコア: ${displayPercent}%\n${
          score >= 0.7 ? "じょうず に かけました！" : "おてほん を よくみてね！"
        }`,
      );
    }

    manager.recordResult(score);

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

  const hasStrokes = userStrokes.length > 0;

  if (results) {
    return (
      <div className="app">
        <h2>けっか</h2>
        <div>
          ぜん{results.total}もんちゅう、{results.correct}もん せいかい！
        </div>
        <div>せいかいりつ: {results.percentage.toFixed(1)}%</div>
        {results.incorrectCount > 0
          ? (
            <div>
              <p style={{ textAlign: "center" }}>
                {results.incorrectCount}もん まちがいました。
              </p>
              <button onClick={handleRestartReview}>
                まちがった もんだい を もういちど
              </button>
            </div>
          )
          : (
            <>
              <div>
                すべての もんだいを せいかいしました！
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    color: "green",
                    marginBottom: "10px",
                  }}
                >
                  まちがえた もんだい
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {results.incorrectDetails.map((detail) => (
                    <div
                      key={detail.questionIndex}
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: detail.sentence }}
                      >
                      </div>
                      <div>{detail.incorrectCount}かい まちがえました</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
      </div>
    );
  }

  return (
    <div className="app">
      <div
        className="question"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      {manager.isInReviewMode() && (
        <div className="review-mode">
          ふくしゅうちゅう！
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap", // 画面幅が小さい場合に縦並びになるよう追加
        }}
      >
        <canvas
          ref={canvasRef}
          width="320"
          height="320"
          style={{ border: "1px solid #000" }}
        />
        <canvas
          ref={answerCanvasRef}
          width="320"
          height="320"
          style={{
            border: "1px solid #000",
            display: showAnswer ? "block" : "none",
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: svgContent.replace(
              /(width|height)="[^"]+"/g,
              '$1="320"',
            ),
          }}
          style={{
            border: "1px solid #000",
            display: showSVG ? "block" : "none",
            width: "320",
            height: "320",
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
          ひょうか
        </button>
        <button
          onClick={handleClear}
          disabled={!hasStrokes}
          style={{ display: showNext ? "none" : "block" }}
        >
          クリア
        </button>
        {showNext && (
          <button onClick={handleNextQuestion}>つぎの もんだいへ</button>
        )}
      </div>
    </div>
  );
}

export default App;
