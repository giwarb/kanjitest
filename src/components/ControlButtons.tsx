import type { FC } from "react";

interface ControlButtonsProps {
  showNext: boolean;
  hasStrokes: boolean;
  onEvaluate: () => void;
  onClear: () => void;
  onDontKnow: () => void;
  onNextQuestion: () => void;
  onReset: () => void;
  onBackToStart: () => void;
}

export const ControlButtons: FC<ControlButtonsProps> = ({
  showNext,
  hasStrokes,
  onEvaluate,
  onClear,
  onDontKnow,
  onNextQuestion,
  onReset,
  onBackToStart,
}) => {
  return (
    <div className="button-container">
      {!showNext && (
        <>
          <button type="button" onClick={onEvaluate} disabled={!hasStrokes}>
            ひょうか
          </button>
          <button type="button" onClick={onClear} disabled={!hasStrokes}>
            クリア
          </button>
          <button type="button" onClick={onDontKnow}>わからない</button>
        </>
      )}
      {showNext && (
        <button type="button" onClick={onNextQuestion}>
          つぎの もんだいへ
        </button>
      )}
      <button type="button" onClick={onReset}>さいしょから</button>
      <button type="button" onClick={onBackToStart}>スタートがめんへ</button>
    </div>
  );
};
