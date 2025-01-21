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

    fireEvent.click(screen.getByRole("button", { name: "メニュー" }));
    expect(screen.getByText("さいしょから")).toBeInTheDocument();
    expect(screen.getByText("スタートがめんへ")).toBeInTheDocument();
  });
});
