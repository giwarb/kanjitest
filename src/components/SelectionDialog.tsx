import { useEffect, useRef } from "react";
import "./SelectionDialog.css";

type SelectionDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onStart?: () => void;
  children: React.ReactNode;
  title: React.ReactNode;
  canStart?: boolean;
  showStartButton?: boolean;
};

export function SelectionDialog({
  isOpen,
  onClose,
  onStart,
  children,
  title,
  canStart = true,
  showStartButton = false,
}: SelectionDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // ダイアログが開いたらスクロールを上に戻す
      if (dialogRef.current) {
        dialogRef.current.scrollTop = 0;
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleContentKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="selection-dialog-overlay"
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
      role="presentation"
    >
      <div
        className="selection-dialog-content"
        onClick={handleContentClick}
        onKeyDown={handleContentKeyDown}
        ref={dialogRef}
        // biome-ignore lint/a11y/useSemanticElements: ダイアログコンポーネントとして実装
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <div className="selection-dialog-header">
          <h2 id="dialog-title">{title}</h2>
          <button
            type="button"
            className="selection-dialog-close"
            onClick={onClose}
            aria-label="閉じる"
          >
            ×
          </button>
        </div>
        <div className="selection-dialog-body">{children}</div>
        {showStartButton && (
          <div className="selection-dialog-footer">
            <button
              type="button"
              className="selection-dialog-start-button"
              onClick={onStart}
              disabled={!canStart}
            >
              スタート
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
