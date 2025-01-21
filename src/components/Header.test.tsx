import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  const mockOnReset = vi.fn();
  const mockOnBackToStart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders question counter when numbers are provided", () => {
    render(
      <Header
        currentQuestionNumber={1}
        totalQuestions={10}
        onReset={mockOnReset}
        onBackToStart={mockOnBackToStart}
      />
    );

    expect(screen.getByText("1 / 10")).toBeInTheDocument();
  });

  it("shows review mode text when isReviewMode is true", () => {
    render(
      <Header
        isReviewMode={true}
        onReset={mockOnReset}
        onBackToStart={mockOnBackToStart}
      />
    );

    expect(screen.getByText("ふくしゅうモード")).toBeInTheDocument();
  });

  it("opens menu dialog when menu button is clicked", () => {
    render(<Header onReset={mockOnReset} onBackToStart={mockOnBackToStart} />);

    fireEvent.click(screen.getByRole("button", { name: "メニュー" }));
    expect(screen.getByText("さいしょから")).toBeInTheDocument();
    expect(screen.getByText("スタートがめんへ")).toBeInTheDocument();
  });
});
