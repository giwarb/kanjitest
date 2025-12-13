import { useState } from "react";
import { ConfirmDialog } from "./ConfirmDialog";
import { Ruby } from "./Ruby";

interface MenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
  onBackToStart?: () => void;
  resetLabel?: string;
}

export function MenuDialog({
  isOpen,
  onClose,
  onReset,
  onBackToStart,
  resetLabel = "最初から",
}: MenuDialogProps) {
  const [confirmType, setConfirmType] = useState<
    "reset" | "backToStart" | null
  >(null);

  const handleConfirm = () => {
    if (confirmType === "reset") {
      onReset();
    } else if (confirmType === "backToStart" && onBackToStart) {
      onBackToStart();
    }
    setConfirmType(null);
    onClose();
  };

  if (!isOpen) return null;

  const renderResetLabel = () => {
    if (resetLabel === "最初から") {
      return (
        <>
          <Ruby base="最初" reading="さいしょ" />
          から
        </>
      );
    }

    if (resetLabel === "学習履歴をリセット") {
      return (
        <>
          <Ruby base="学習履歴" reading="がくしゅうりれき" />
          をリセット
        </>
      );
    }

    return resetLabel;
  };

  const confirmMessage = () => {
    if (confirmType === "reset") {
      if (resetLabel === "最初から") {
        return (
          <>
            <Ruby base="最初" reading="さいしょ" />
            からやり
            <Ruby base="直" reading="なお" />
            しますか？
          </>
        );
      }

      return (
        <>
          <Ruby base="学習履歴" reading="がくしゅうりれき" />
          をリセットしますか？
        </>
      );
    }

    return (
      <>
        スタート
        <Ruby base="画面" reading="がめん" />に<Ruby base="戻" reading="もど" />
        りますか？
      </>
    );
  };

  return (
    <>
      <div
        className="menu-dialog-overlay"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="presentation"
      >
        <div
          className="menu-dialog"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.key === "Enter" && e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setConfirmType("reset")}
            aria-label={resetLabel}
          >
            {renderResetLabel()}
          </button>
          {onBackToStart && (
            <button
              type="button"
              onClick={() => setConfirmType("backToStart")}
              aria-label="スタート画面へ"
            >
              スタート
              <Ruby base="画面" reading="がめん" />へ
            </button>
          )}
          <button type="button" onClick={onClose} aria-label="閉じる">
            <Ruby base="閉" reading="と" />
            じる
          </button>
        </div>
      </div>
      {confirmType && (
        <ConfirmDialog
          isOpen={true}
          message={confirmMessage()}
          onConfirm={handleConfirm}
          onCancel={() => setConfirmType(null)}
        />
      )}
    </>
  );
}
