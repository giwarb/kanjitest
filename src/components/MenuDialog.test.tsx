import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { MenuDialog } from "./MenuDialog";

describe("MenuDialog", () => {
  const mockOnClose = vi.fn();
  const mockOnReset = vi.fn();
  const mockOnBackToStart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders nothing when not open", () => {
    const { container } = render(
      <MenuDialog
        isOpen={false}
        onClose={mockOnClose}
        onReset={mockOnReset}
        onBackToStart={mockOnBackToStart}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it("shows confirmation dialog when reset is clicked", () => {
    render(
      <MenuDialog
        isOpen={true}
        onClose={mockOnClose}
        onReset={mockOnReset}
        onBackToStart={mockOnBackToStart}
      />
    );

    fireEvent.click(screen.getByText("さいしょから"));
    expect(
      screen.getByText("さいしょからやりなおしますか？")
    ).toBeInTheDocument();
  });

  it("calls onClose when overlay is clicked", () => {
    render(
      <MenuDialog
        isOpen={true}
        onClose={mockOnClose}
        onReset={mockOnReset}
        onBackToStart={mockOnBackToStart}
      />
    );

    fireEvent.click(screen.getByText("とじる"));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
