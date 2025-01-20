import type { FC, RefObject } from "react";

interface PracticeCanvasProps {
  canvasRef: RefObject<HTMLCanvasElement>;
  answerCanvasRef: RefObject<HTMLCanvasElement>;
  answerRef: RefObject<HTMLDivElement>;
  showAnswer: boolean;
  showSVG: boolean;
  svgContent: string;
  result: string;
}

export const PracticeCanvas: FC<PracticeCanvasProps> = ({
  canvasRef,
  answerCanvasRef,
  answerRef,
  showAnswer,
  showSVG,
  svgContent,
  result,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
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
        {/* SVGコンテンツは漢字の書き順を表示するための信頼できるソースからのデータです */}
        <div
          data-testid="svg-container"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: SVGコンテンツは漢字の書き順を表示するための静的データです
          dangerouslySetInnerHTML={{
            __html: svgContent.replace(/(width|height)="[^"]+"/g, '$1="320"'),
          }}
          style={{
            border: "1px solid #000",
            display: showSVG ? "block" : "none",
            width: 320,
            height: 320,
          }}
          ref={answerRef}
        />
      </div>
      <div>{result}</div>
    </>
  );
};
