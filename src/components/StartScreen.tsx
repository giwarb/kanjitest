import { useCallback, useState } from "react";
import type { Question } from "../KanjiQuestionManager";
import { datasets, defaultGrade, type GradeKey } from "../datasets";
import type { MemoryManager, PracticeMode } from "../MemoryManager";
import { Header } from "./Header";
import "./StartScreen.css";

type StartScreenProps = {
  onStartPractice: (questions: Question[], grade: GradeKey) => void;
  memoryManager: MemoryManager;
};

export function StartScreen({
  onStartPractice,
  memoryManager,
}: StartScreenProps) {
  const [_resetTrigger, setResetTrigger] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState<GradeKey>(defaultGrade);
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [selectedMode, setSelectedMode] = useState<PracticeMode>("all");
  const { questions, label } = datasets[selectedGrade];
  const totalQuestions = questions.length;
  const stats = memoryManager.getStatistics(questions.map((q) => q.id));
  const availableQuestions = memoryManager.getQuestionsByMode(
    selectedMode,
    questions.map((q) => q.id)
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
    const filteredQuestions = questions.filter((q) =>
      modeQuestionIds.has(q.id)
    );

    // 問題数分のランダムな問題を選択
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(
      0,
      Math.min(selectedCount, filteredQuestions.length)
    );
    onStartPractice(selected, selectedGrade);
  };

  const handleResetHistory = useCallback(() => {
    memoryManager.clearHistory();
    // 履歴クリア後は問題数の選択をリセット
    setSelectedCount(null);
    // モードをすべての問題に戻す
    setSelectedMode("all");
    // 学年選択も初期値に戻す
    setSelectedGrade(defaultGrade);
    setResetTrigger((prev) => prev + 1);
  }, [memoryManager]);

  const modes: { value: PracticeMode; label: string }[] = [
    { value: "all", label: "すべての もんだい" },
    { value: "new", label: "まだ といたことない もんだい" },
    { value: "unsolved", label: "まだ せいかい していない もんだい" },
    {
      value: "recent-mistakes",
      label: "この いっしゅうかんで まちがえた もんだい",
    },
  ];

  const getModeQuestionCount = (mode: PracticeMode): number => {
    return memoryManager.getQuestionsByMode(
      mode,
      questions.map((q) => q.id)
    ).length;
  };

  return (
    <div className="app">
      <Header
        onBackToStart={undefined}
        onReset={handleResetHistory}
        resetLabel="がくしゅうりれきをリセット"
      />
      <div className="start-screen-container">
        <div className="start-screen-content">
          <div className="statistics">
            <p>
              がくねん：{label}（{stats.total}もん）
            </p>
            <p>ぜんぶ：{stats.total}もん</p>
            <p>まだといていない：{stats.unattempted}もん</p>
            <p>せいかいした：{stats.correct}もん</p>
          </div>
          <div className="mode-section">
            <p className="mode-text">がくねんをえらんでください：</p>
            <div className="mode-buttons">
              {Object.entries(datasets).map(([key, dataset]) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => {
                    setSelectedGrade(key as GradeKey);
                    setSelectedCount(null);
                  }}
                  className={`mode-button ${selectedGrade === key ? "selected" : ""}`}
                >
                  {dataset.label}（{dataset.questions.length}もん）
                </button>
              ))}
            </div>
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
              このモードで とける もんだいが ありません
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
    </div>
  );
}
