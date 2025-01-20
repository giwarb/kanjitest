import { FC } from 'react';

interface ControlButtonsProps {
  showNext: boolean;
  hasStrokes: boolean;
  onEvaluate: () => void;
  onClear: () => void;
  onDontKnow: () => void;
  onNextQuestion: () => void;
  onReset: () => void;
}

export const ControlButtons: FC<ControlButtonsProps> = ({
  showNext,
  hasStrokes,
  onEvaluate,
  onClear,
  onDontKnow,
  onNextQuestion,
  onReset,
}) => {
  return (
    <div className="button-container">
      {!showNext && (
        <>
          <button onClick={onEvaluate} disabled={!hasStrokes}>
            ひょうか
          </button>
          <button onClick={onClear} disabled={!hasStrokes}>
            クリア
          </button>
          <button onClick={onDontKnow}>わからない</button>
        </>
      )}
      {showNext && <button onClick={onNextQuestion}>つぎの もんだいへ</button>}
      <button onClick={onReset}>さいしょから</button>
    </div>
  );
};
