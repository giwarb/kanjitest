import type { FC } from "react";
import type { KanjiQuestionManager } from "../KanjiQuestionManager";

interface ResultsViewProps {
  scoreAndResults: {
    score: ReturnType<KanjiQuestionManager["getScore"]>;
    results: ReturnType<KanjiQuestionManager["getResults"]>;
  };
  onRestartReview: () => void;
}

export const ResultsView: FC<ResultsViewProps> = ({
  scoreAndResults,
  onRestartReview,
}) => {
  return (
    <>
      <h2>けっか</h2>
      <div>
        ぜん{scoreAndResults.score.total}もんちゅう、
        {scoreAndResults.score.correct}もん せいかい！
      </div>
      <div>せいかいりつ: {scoreAndResults.score.percentage.toFixed(1)}%</div>
      {scoreAndResults.score.incorrectCount > 0 ? (
        <>
          <p style={{ textAlign: "center" }}>
            {scoreAndResults.score.incorrectCount}もん まちがいました。
          </p>
          <div>
            <button type="button" onClick={onRestartReview}>
              まちがった もんだい を もういちど
            </button>
          </div>
        </>
      ) : (
        <>
          <div>すべての もんだいに せいかいしました！</div>
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
              {scoreAndResults.results
                .filter((result) => result.incorrectCount)
                .map((result) => (
                  <div key={result.question.id}>
                    <div
                      // biome-ignore lint/security/noDangerouslySetInnerHtml: 問題文は漢字の表示のための静的なHTMLコンテンツです
                      dangerouslySetInnerHTML={{
                        __html: result.question.sentence,
                      }}
                      style={{ fontSize: "1.6rem" }}
                    />
                    <div>{result.incorrectCount}かい まちがえました</div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
