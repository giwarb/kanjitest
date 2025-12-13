import "./ConfirmDialog.css";

interface ConfirmDialogProps {
  isOpen: boolean;
  message: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  isOpen,
  message,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <p>{message}</p>
        <div className="dialog-buttons">
          <button type="button" onClick={onCancel}>
            いいえ
          </button>
          <button type="button" onClick={onConfirm}>
            はい
          </button>
        </div>
      </div>
    </div>
  );
}
