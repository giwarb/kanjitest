import { useCallback, useState } from "react";
import type { Question } from "../KanjiQuestionManager";
import { datasets, defaultGrade, type GradeKey } from "../datasets";
import type { MemoryManager, PracticeMode } from "../MemoryManager";
import { Header } from "./Header";
import { SelectionDialog } from "./SelectionDialog";
import { Ruby } from "./Ruby";
import "./StartScreen.css";

type StartScreenProps = {
  onStartPractice: (questions: Question[], grade: GradeKey) => void;
  memoryManager: MemoryManager;
};

type DialogType = "grade" | "mode" | "count" | null;

export function StartScreen({
  onStartPractice,
  memoryManager,
}: StartScreenProps) {
  const [_resetTrigger, setResetTrigger] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState<GradeKey>(defaultGrade);
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [selectedMode, setSelectedMode] = useState<PracticeMode>("all");
  const [openDialog, setOpenDialog] = useState<DialogType>(null);

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
    // ダイアログを閉じる
    setOpenDialog(null);
    setResetTrigger((prev) => prev + 1);
  }, [memoryManager]);

  const modes: { value: PracticeMode; label: React.ReactNode }[] = [
    {
      value: "all",
      label: (
        <>
          <Ruby base="全" reading="すべ" />
          ての
          <Ruby base="問題" reading="もんだい" />
        </>
      ),
    },
    {
      value: "new",
      label: (
        <>
          まだ
          <Ruby base="解" reading="と" />
          いたことがない
          <Ruby base="問題" reading="もんだい" />
        </>
      ),
    },
    {
      value: "unsolved",
      label: (
        <>
          まだ
          <Ruby base="正解" reading="せいかい" />
          していない
          <Ruby base="問題" reading="もんだい" />
        </>
      ),
    },
    {
      value: "recent-mistakes",
      label: (
        <>
          この1
          <Ruby base="週間" reading="しゅうかん" />で
          <Ruby base="間違" reading="まちが" />
          えた
          <Ruby base="問題" reading="もんだい" />
        </>
      ),
    },
  ];

  const getModeQuestionCount = (mode: PracticeMode): number => {
    return memoryManager.getQuestionsByMode(
      mode,
      questions.map((q) => q.id)
    ).length;
  };

  const getGradeLabel = (grade: GradeKey): string => {
    return datasets[grade].label;
  };

  return (
    <div className="app">
      <Header
        onBackToStart={undefined}
        onReset={handleResetHistory}
        resetLabel="学習履歴をリセット"
      />
      <div className="start-screen-container">
        <div className="start-screen-content">
          <div className="statistics">
            <p className="statistics-title">
              {label}（{stats.total}
              <Ruby base="問" reading="もん" />）
            </p>
            <div className="statistics-grid">
              <div className="stat-item">
                <div className="stat-label">
                  <Ruby base="全部" reading="ぜんぶ" />
                </div>
                <div className="stat-value">
                  {stats.total}
                  <Ruby base="問" reading="もん" />
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">
                  まだ
                  <Ruby base="解" reading="と" />
                  いていない
                </div>
                <div className="stat-value">
                  {stats.unattempted}
                  <Ruby base="問" reading="もん" />
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">
                  <Ruby base="正解" reading="せいかい" />
                  した
                </div>
                <div className="stat-value">
                  {stats.correct}
                  <Ruby base="問" reading="もん" />
                </div>
              </div>
            </div>
          </div>

          <div className="selection-buttons">
            <button
              type="button"
              className="selection-button"
              onClick={() => setOpenDialog("grade")}
            >
              <span className="selection-button-label">
                <Ruby base="学年" reading="がくねん" />
              </span>
              <span className="selection-button-value">
                {getGradeLabel(selectedGrade)}
              </span>
            </button>

            <button
              type="button"
              className="selection-button"
              onClick={() => setOpenDialog("mode")}
            >
              <span className="selection-button-label">モード</span>
              <span className="selection-button-value">
                {modes.find((m) => m.value === selectedMode)?.label}
              </span>
            </button>

            <button
              type="button"
              className="selection-button"
              onClick={() => setOpenDialog("count")}
            >
              <span className="selection-button-label">
                <Ruby base="問題数" reading="もんだいすう" />
              </span>
              <span className="selection-button-value">
                {selectedCount ? (
                  <>
                    {selectedCount}
                    <Ruby base="問" reading="もん" />
                  </>
                ) : (
                  <>
                    <Ruby base="選" reading="えら" />
                    んでください
                  </>
                )}
              </span>
            </button>
          </div>

          <button
            type="button"
            className="main-start-button"
            onClick={handleStart}
            disabled={!selectedCount || questionCounts.length === 0}
          >
            スタート
          </button>
        </div>
      </div>

      {/* 学年選択ダイアログ */}
      <SelectionDialog
        isOpen={openDialog === "grade"}
        onClose={() => setOpenDialog(null)}
        onStart={() => setOpenDialog(null)}
        title={
          <>
            <Ruby base="学年" reading="がくねん" />を
            <Ruby base="選" reading="えら" />
            んでください
          </>
        }
        canStart={true}
      >
        <div className="dialog-buttons">
          {Object.entries(datasets).map(([key, dataset]) => (
            <button
              type="button"
              key={key}
              onClick={() => {
                setSelectedGrade(key as GradeKey);
                setSelectedCount(null);
                setOpenDialog(null);
              }}
              className="dialog-button"
            >
              {dataset.label}（{dataset.questions.length}
              <Ruby base="問" reading="もん" />）
            </button>
          ))}
        </div>
      </SelectionDialog>

      {/* モード選択ダイアログ */}
      <SelectionDialog
        isOpen={openDialog === "mode"}
        onClose={() => setOpenDialog(null)}
        onStart={() => setOpenDialog(null)}
        title={
          <>
            モードを
            <Ruby base="選" reading="えら" />
            んでください
          </>
        }
        canStart={true}
      >
        <div className="dialog-buttons">
          {modes.map((mode) => (
            <button
              type="button"
              key={mode.value}
              onClick={() => {
                setSelectedMode(mode.value);
                setSelectedCount(null);
                setOpenDialog(null);
              }}
              className="dialog-button"
            >
              {mode.label}（{getModeQuestionCount(mode.value)}
              <Ruby base="問" reading="もん" />）
            </button>
          ))}
        </div>
      </SelectionDialog>

      {/* 問題数選択ダイアログ */}
      <SelectionDialog
        isOpen={openDialog === "count"}
        onClose={() => setOpenDialog(null)}
        onStart={() => setOpenDialog(null)}
        title={
          <>
            <Ruby base="問題数" reading="もんだいすう" />を
            <Ruby base="選" reading="えら" />
            んでください
          </>
        }
        canStart={true}
      >
        {questionCounts.length > 0 ? (
          <div className="dialog-count-buttons">
            {questionCounts.map((count) => (
              <button
                type="button"
                key={count}
                onClick={() => {
                  setSelectedCount(count);
                  setOpenDialog(null);
                }}
                className="dialog-count-button"
              >
                {count}
                <Ruby base="問" reading="もん" />
                {count === availableQuestions.length ? (
                  <>
                    （<Ruby base="全部" reading="ぜんぶ" />）
                  </>
                ) : (
                  ""
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="dialog-no-questions">
            このモードで
            <Ruby base="解" reading="と" />
            ける
            <Ruby base="問題" reading="もんだい" />
            がありません
          </div>
        )}
      </SelectionDialog>
    </div>
  );
}
