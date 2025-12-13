import type { KanjiQuestionManager } from "../KanjiQuestionManager";
import { LastAttemptDisplay } from "./LastAttemptDisplay";
import { Ruby } from "./Ruby";

interface ResultsViewProps {
  scoreAndResults: {
    score: ReturnType<KanjiQuestionManager["getScore"]>;
    results: ReturnType<KanjiQuestionManager["getResults"]>;
  };
  onRestartReview: () => void;
  onBackToStart: () => void;
}

export function ResultsView({
  scoreAndResults,
  onRestartReview,
  onBackToStart,
}: ResultsViewProps) {
  const incorrects = scoreAndResults.results.filter(
    (result) => result.incorrectCount
  );
  return (
    <>
      <h2>
        <Ruby base="結果" reading="けっか" />
      </h2>
      <div>
        <Ruby base="全" reading="ぜん" />
        {scoreAndResults.score.total}
        <Ruby base="問中" reading="もんちゅう" />、
        {scoreAndResults.score.correct}
        <Ruby base="問" reading="もん" />{" "}
        <Ruby base="正解" reading="せいかい" />！
      </div>
      <div>
        <Ruby base="正解率" reading="せいかいりつ" />:{" "}
        {scoreAndResults.score.percentage.toFixed(1)}%
      </div>
      {scoreAndResults.score.incorrectCount > 0 ? (
        <>
          <p style={{ textAlign: "center" }}>
            {scoreAndResults.score.incorrectCount}
            <Ruby base="問" reading="もん" />{" "}
            <Ruby base="間違" reading="まちが" />
            いました。
          </p>
          <div>
            <button
              type="button"
              onClick={onRestartReview}
              aria-label="間違った問題をもう一度"
            >
              <Ruby base="間違" reading="まちが" />
              った
              <Ruby base="問題" reading="もんだい" />
              をもう
              <Ruby base="一度" reading="いちど" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ marginBottom: "20px" }}>
            <Ruby base="全" reading="すべ" />
            ての
            <Ruby base="問題" reading="もんだい" />に
            <Ruby base="正解" reading="せいかい" />
            しました！
          </div>
          {scoreAndResults.results.length > 0 && (
            <LastAttemptDisplay results={scoreAndResults.results} />
          )}
          <div style={{ marginTop: "20px" }}>
            <button
              type="button"
              onClick={onBackToStart}
              aria-label="スタート画面へ"
            >
              スタート
              <Ruby base="画面" reading="がめん" />へ
            </button>
          </div>
          {incorrects.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  color: "green",
                  marginBottom: "10px",
                }}
              >
                <Ruby base="間違" reading="まちが" />
                えた
                <Ruby base="問題" reading="もんだい" />
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
                      <div>
                        {result.incorrectCount}
                        <Ruby base="回" reading="かい" />{" "}
                        <Ruby base="間違" reading="まちが" />
                        えました
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
