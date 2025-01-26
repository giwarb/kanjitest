import { useEffect, useRef } from "react";
import { drawStrokeResults } from "../functions";
import type { StrokeResult } from "../functions";

interface LastAttemptDisplayProps {
  results: {
    question: { id: string; sentence: string };
    lastResult: {
      normalizedResult?: {
        strokeResults: StrokeResult[];
        normParamsUser: { centerX: number; centerY: number; scale: number };
        normParamsSample: { centerX: number; centerY: number; scale: number };
      };
    };
  }[];
}

export function LastAttemptDisplay({ results }: LastAttemptDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ color: "green", marginBottom: "10px", textAlign: "center" }}>
        れんしゅうした もじ
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          padding: "10px",
        }}
      >
        {results.map((result) => {
          if (!result.lastResult.normalizedResult) return null;

          return (
            <div key={result.question.id} style={{ textAlign: "center" }}>
              <div
                // biome-ignore lint/security/noDangerouslySetInnerHtml: 問題文は漢字の表示のための静的なHTMLコンテンツです
                dangerouslySetInnerHTML={{ __html: result.question.sentence }}
                style={{ fontSize: "1.6rem", marginBottom: "10px" }}
              />
              <Canvas result={result} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Canvas({ result }: { result: LastAttemptDisplayProps["results"][0] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context || !result.lastResult.normalizedResult) return;

    drawStrokeResults(context, result.lastResult.normalizedResult, 0.7);
  }, [result]);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      style={{
        border: "1px solid #ccc",
        backgroundColor: "#fff",
      }}
    />
  );
}
