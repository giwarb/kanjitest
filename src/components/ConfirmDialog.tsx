import "./ConfirmDialog.css";

interface ConfirmDialogProps {
    isOpen: boolean;
    message: string;
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
                    <button onClick={onCancel}>いいえ</button>
                    <button onClick={onConfirm}>はい</button>
                </div>
            </div>
        </div>
    );
}
