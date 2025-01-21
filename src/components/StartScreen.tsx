import { useState } from "react";
import { data } from "../data";
import "./StartScreen.css";

type StartScreenProps = {
    onStartPractice: (questions: typeof data) => void;
};

export function StartScreen({ onStartPractice }: StartScreenProps) {
    const [selectedCount, setSelectedCount] = useState<number>(5);
    const totalQuestions = data.length;
    const questionCounts = [];

    // 5問刻みの選択肢を生成
    for (let i = 5; i <= totalQuestions; i += 5) {
        questionCounts.push(i);
    }

    const handleStart = () => {
        // 問題数分のランダムな問題を選択
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, selectedCount);
        onStartPractice(selected);
    };

    return (
        <div className="start-screen-container">
            <div className="start-screen-content">
                <h1 className="start-screen-title">
                    かんじれんしゅう
                </h1>
                <div className="question-count-section">
                    <p className="question-count-text">
                        もんだいすうをえらんでください：
                    </p>
                    <div className="question-count-buttons">
                        {questionCounts.map((count) => (
                            <button
                                type="button"
                                key={count}
                                onClick={() => setSelectedCount(count)}
                                className={`count-button ${
                                    selectedCount === count ? "selected" : ""
                                }`}
                            >
                                {count}もん
                            </button>
                        ))}
                    </div>
                </div>
                <div className="start-button-container">
                    <button
                        type="button"
                        onClick={handleStart}
                        className="start-button"
                    >
                        スタート
                    </button>
                </div>
            </div>
        </div>
    );
}
