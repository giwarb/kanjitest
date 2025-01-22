import { useState } from "react";
import { data } from "../data";
import type { MemoryManager, PracticeMode } from "../MemoryManager";
import "./StartScreen.css";

type StartScreenProps = {
  onStartPractice: (questions: typeof data) => void;
  memoryManager: MemoryManager;
};

export function StartScreen({
  onStartPractice,
  memoryManager,
}: StartScreenProps) {
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [selectedMode, setSelectedMode] = useState<PracticeMode>("all");
  const totalQuestions = data.length;
  const stats = memoryManager.getStatistics(data.map((q) => q.id));
  const availableQuestions = memoryManager.getQuestionsByMode(
    selectedMode,
    data.map((q) => q.id)
  );
  const questionCounts = [];

  // 5問刻みの選択肢を生成
  for (
    let i = 5;
    i <= Math.min(availableQuestions.length, totalQuestions);
    i += 5
  ) {
    questionCounts.push(i);
  }

  // 最後の選択肢が全問題数でない場合は、全問題数を追加
  if (
    availableQuestions.length > 0 &&
    (questionCounts.length === 0 ||
      questionCounts[questionCounts.length - 1] !== availableQuestions.length)
  ) {
    questionCounts.push(availableQuestions.length);
  }

  const handleStart = () => {
    if (!selectedCount) return;

    // 選択されたモードに応じて問題を抽出
    const modeQuestionIds = new Set(availableQuestions);
    const filteredQuestions = data.filter((q) => modeQuestionIds.has(q.id));

    // 問題数分のランダムな問題を選択
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(
      0,
      Math.min(selectedCount, filteredQuestions.length)
    );
    onStartPractice(selected);
  };

  const modes: { value: PracticeMode; label: string }[] = [
    { value: "all", label: "すべてのもんだい" },
    { value: "new", label: "まだといたことないもんだい" },
    { value: "unsolved", label: "まだせいかいしていないもんだい" },
    {
      value: "recent-mistakes",
      label: "このいっしゅうかんでまちがえたもんだい",
    },
  ];

  const getModeQuestionCount = (mode: PracticeMode): number => {
    return memoryManager.getQuestionsByMode(
      mode,
      data.map((q) => q.id)
    ).length;
  };

  return (
    <div className="start-screen-container">
      <div className="start-screen-content">
        <h1 className="start-screen-title">かんじれんしゅう</h1>
        <div className="statistics">
          <p>ぜんぶで {stats.total}もん</p>
          <p>まだといていない：{stats.unattempted}もん</p>
          <p>せいかいした：{stats.correct}もん</p>
        </div>
        <div className="mode-section">
          <p className="mode-text">モードをえらんでください：</p>
          <div className="mode-buttons">
            {modes.map((mode) => (
              <button
                type="button"
                key={mode.value}
                onClick={() => {
                  setSelectedMode(mode.value);
                  setSelectedCount(null); // モード変更時に選択をリセット
                }}
                className={`mode-button ${selectedMode === mode.value ? "selected" : ""}`}
              >
                {mode.label}（{getModeQuestionCount(mode.value)}もん）
              </button>
            ))}
          </div>
        </div>
        {questionCounts.length > 0 ? (
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
                  {count === availableQuestions.length ? "（ぜんぶ）" : ""}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="no-questions-message">
            このモードでときれるもんだいがありません
          </p>
        )}
        <div className="start-button-container">
          <button
            type="button"
            onClick={handleStart}
            className="start-button"
            disabled={!selectedCount || questionCounts.length === 0}
          >
            スタート
          </button>
        </div>
      </div>
    </div>
  );
}
