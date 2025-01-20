import { useState } from "react";
import { data } from "../data";

type StartScreenProps = {
    onStartPractice: (questions: typeof data) => void;
};

export function StartScreen({ onStartPractice }: StartScreenProps) {
    const [selectedCount, setSelectedCount] = useState<number>(10);
    const totalQuestions = data.length;
    const questionCounts = [];

    // 10問刻みの選択肢を生成
    for (let i = 10; i <= totalQuestions; i += 10) {
        questionCounts.push(i);
    }

    const handleStart = () => {
        // 問題数分のランダムな問題を選択
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, selectedCount);
        onStartPractice(selected);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-8">
                    漢字練習
                </h1>
                <div className="mb-8">
                    <p className="text-center mb-4">問題数を選んでください：</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {questionCounts.map((count) => (
                            <button
                                type="button"
                                key={count}
                                onClick={() => setSelectedCount(count)}
                                className={`px-4 py-2 rounded-full ${
                                    selectedCount === count
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {count}問
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="button"
                        onClick={handleStart}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        スタート
                    </button>
                </div>
            </div>
        </div>
    );
}
