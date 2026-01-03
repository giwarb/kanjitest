import { Ruby } from "./Ruby";

interface ControlButtonsProps {
  showNext: boolean;
  hasStrokes: boolean;
  canEvaluate: boolean;
  onEvaluate: () => void;
  onClear: () => void;
  onDontKnow: () => void;
  onNextQuestion: () => void;
}

export function ControlButtons({
  showNext,
  hasStrokes,
  canEvaluate,
  onEvaluate,
  onClear,
  onDontKnow,
  onNextQuestion,
}: ControlButtonsProps) {
  return (
    <div className="button-container">
      {!showNext && (
        <>
          <button
            type="button"
            onClick={onEvaluate}
            onPointerUp={(e) => {
              // タッチ環境では click がキャンセルされることがあるため、pointer をフォールバックにする
              if (e.pointerType !== "mouse") {
                e.preventDefault();
                onEvaluate();
              }
            }}
            disabled={!hasStrokes || !canEvaluate}
            aria-label="評価"
          >
            <Ruby base="評価" reading="ひょうか" />
          </button>
          <button
            type="button"
            onClick={onClear}
            disabled={!hasStrokes}
            aria-label="クリア"
          >
            クリア
          </button>
          <button type="button" onClick={onDontKnow} aria-label="分からない">
            <Ruby base="分" reading="わ" />
            からない
          </button>
        </>
      )}
      {showNext && (
        <button type="button" onClick={onNextQuestion} aria-label="次の問題へ">
          <Ruby base="次" reading="つぎ" />の
          <Ruby base="問題" reading="もんだい" />へ
        </button>
      )}
    </div>
  );
}
