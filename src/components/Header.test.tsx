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

  it("クリックしたらメニューが開くこと", () => {
    render(<Header onReset={mockOnReset} onBackToStart={mockOnBackToStart} />);

    expect(screen.getByText("v1.0")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "メニュー" }));
    expect(
      screen.getByRole("button", { name: "最初から" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "スタート画面へ" })
    ).toBeInTheDocument();
  });
});
