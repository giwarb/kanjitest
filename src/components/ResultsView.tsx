import { FC } from "react";

interface ResultsViewProps {
    results: {
        total: number;
        correct: number;
        incorrectCount: number;
        percentage: number;
        incorrectDetails: {
            questionIndex: number;
            incorrectCount: number;
            sentence: string;
        }[];
    };
    onRestartReview: () => void;
}

export const ResultsView: FC<ResultsViewProps> = (
    { results, onRestartReview },
) => {
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
                        <button onClick={onRestartReview}>
                            まちがった もんだい を もういちど
                        </button>
                    </div>
                )
                : (
                    <>
                        <div>すべての もんだいを せいかいしました！</div>
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
                                    <div key={detail.questionIndex}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: detail.sentence,
                                            }}
                                        />
                                        <div>
                                            {detail.incorrectCount}かい
                                            まちがえました
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
};
