import { fireEvent, render, screen } from "@testing-library/react";
import { ConfirmDialog } from "./ConfirmDialog";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("ConfirmDialog", () => {
  const mockOnConfirm = vi.fn();
  const mockOnCancel = vi.fn();
  const testMessage = "テストメッセージ";

  beforeEach(() => {
    mockOnConfirm.mockClear();
    mockOnCancel.mockClear();
  });

  it("isOpen=trueの場合、ダイアログを表示する", () => {
    render(
      <ConfirmDialog
        isOpen={true}
        message={testMessage}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    );

    expect(screen.getByText(testMessage)).toBeInTheDocument();
    expect(screen.getByText("はい")).toBeInTheDocument();
    expect(screen.getByText("いいえ")).toBeInTheDocument();
  });

  it("isOpen=falseの場合、ダイアログを表示しない", () => {
    render(
      <ConfirmDialog
        isOpen={false}
        message={testMessage}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    );

    expect(screen.queryByText(testMessage)).not.toBeInTheDocument();
    expect(screen.queryByText("はい")).not.toBeInTheDocument();
    expect(screen.queryByText("いいえ")).not.toBeInTheDocument();
  });

  it("「はい」ボタンをクリックするとonConfirmが呼ばれる", () => {
    render(
      <ConfirmDialog
        isOpen={true}
        message={testMessage}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    );

    fireEvent.click(screen.getByText("はい"));
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
    expect(mockOnCancel).not.toHaveBeenCalled();
  });

  it("「いいえ」ボタンをクリックするとonCancelが呼ばれる", () => {
    render(
      <ConfirmDialog
        isOpen={true}
        message={testMessage}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    );

    fireEvent.click(screen.getByText("いいえ"));
    expect(mockOnCancel).toHaveBeenCalledTimes(1);
    expect(mockOnConfirm).not.toHaveBeenCalled();
  });
});
