import { useState } from "react";
import { ConfirmDialog } from "./ConfirmDialog";

interface MenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
  onBackToStart: () => void;
}

export function MenuDialog({
  isOpen,
  onClose,
  onReset,
  onBackToStart,
}: MenuDialogProps) {
  const [confirmType, setConfirmType] = useState<
    "reset" | "backToStart" | null
  >(null);

  const handleConfirm = () => {
    if (confirmType === "reset") {
      onReset();
    } else if (confirmType === "backToStart") {
      onBackToStart();
    }
    setConfirmType(null);
    onClose();
  };

  if (!isOpen) return null;

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
          <button type="button" onClick={() => setConfirmType("reset")}>
            さいしょから
          </button>
          <button type="button" onClick={() => setConfirmType("backToStart")}>
            スタートがめんへ
          </button>
          <button type="button" onClick={onClose}>
            とじる
          </button>
        </div>
      </div>
      {confirmType && (
        <ConfirmDialog
          isOpen={true}
          message={
            confirmType === "reset"
              ? "さいしょからやりなおしますか？"
              : "スタートがめんにもどりますか？"
          }
          onConfirm={handleConfirm}
          onCancel={() => setConfirmType(null)}
        />
      )}
    </>
  );
}
