import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

// data モジュールのモックを最初に定義
vi.mock("../data/grade1", () => {
  const mockQuestionData = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: `q${i + 1}`,
      sentence: `Test sentence ${i + 1}`,
      target: `target${i + 1}`,
      svg: `<svg>test${i + 1}</svg>`,
    }));
  return { grade1: mockQuestionData };
});

import { StartScreen } from "./StartScreen";
import type { MemoryManager, PracticeMode } from "../MemoryManager";
import { grade1 as data } from "../data/grade1";

describe("StartScreen", () => {
  const mockOnStartPractice = vi.fn();
  const mockMemoryManager: MemoryManager = {
    storageKey: "test_storage_key",
    saveResult: vi.fn(),
    getHistory: vi.fn(),
    getQuestionHistory: vi.fn(),
    clearHistory: vi.fn(),
    getUnattemptedIds: vi.fn().mockReturnValue([]),
    getUnsolvedIds: vi.fn().mockReturnValue([]),
    getRecentMistakeIds: vi.fn().mockReturnValue([]),
    getCorrectCount: vi.fn().mockReturnValue(5),
    getStatistics: vi.fn().mockReturnValue({
      total: 20,
      unattempted: 10,
      correct: 5,
      unsolved: 15,
      recentMistakes: 3,
    }),
    getQuestionsByMode: vi.fn().mockReturnValue([]),
  } as unknown as MemoryManager;

  beforeEach(() => {
    mockOnStartPractice.mockClear();
    vi.mocked(mockMemoryManager.getStatistics).mockClear();
    vi.mocked(mockMemoryManager.getQuestionsByMode).mockClear();
    vi.mocked(mockMemoryManager.clearHistory).mockClear();
  });

  it("はじめの状態が正しく表示される", () => {
    const { container } = render(
      <StartScreen
        onStartPractice={mockOnStartPractice}
        memoryManager={mockMemoryManager}
      />
    );

    const statItems = Array.from(
      container.querySelectorAll(".statistics-grid .stat-item")
    );
    expect(statItems).toHaveLength(3);

    const statValues = statItems.map(
      (item) => item.querySelector(".stat-value")?.textContent ?? ""
    );
    expect(statValues[0]).toContain("20");
    expect(statValues[1]).toContain("10");
    expect(statValues[2]).toContain("5");

    // スタートボタンが無効になっていることを確認
    expect(screen.getByRole("button", { name: "スタート" })).toBeDisabled();

    // どの問題数ボタンも選択されていないことを確認
    const countButtons = screen
      .getAllByRole("button")
      .filter((button) => button.className.includes("count-button"));
    for (const button of countButtons) {
      expect(button.className).not.toContain("selected");
    }
  });

  it("学習モードを選択できる", () => {
    const mockQuestionCounts: Record<PracticeMode, number> = {
      all: 12,
      new: 10,
      unsolved: 8,
      "recent-mistakes": 3,
    };

    vi.mocked(mockMemoryManager.getQuestionsByMode).mockImplementation((mode) =>
      Array(mockQuestionCounts[mode] || 0)
        .fill("")
        .map((_, i) => `q${i + 1}`)
    );

    render(
      <StartScreen
        onStartPractice={mockOnStartPractice}
        memoryManager={mockMemoryManager}
      />
    );

    // モード選択ダイアログを開く
    fireEvent.click(screen.getByRole("button", { name: /モード/ }));

    const selectModeByIndex = (index: number) => {
      const dialog = screen.getByRole("dialog");
      const modeButtons = within(dialog)
        .getAllByRole("button")
        .filter((button) => button.className.includes("dialog-button"));
      expect(modeButtons.length).toBeGreaterThan(index);
      fireEvent.click(modeButtons[index]);
    };

    // すべての問題（デフォルト）
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    {
      const dialog = screen.getByRole("dialog");
      const modeButtons = within(dialog)
        .getAllByRole("button")
        .filter((button) => button.className.includes("dialog-button"));
      expect(modeButtons[0]).toHaveTextContent(/12/);
    }
    selectModeByIndex(0);

    // まだ解いたことがない問題
    fireEvent.click(screen.getByRole("button", { name: /モード/ }));
    {
      const dialog = screen.getByRole("dialog");
      const modeButtons = within(dialog)
        .getAllByRole("button")
        .filter((button) => button.className.includes("dialog-button"));
      expect(modeButtons[1]).toHaveTextContent(/10/);
    }
    selectModeByIndex(1);

    // まだ正解していない問題
    fireEvent.click(screen.getByRole("button", { name: /モード/ }));
    {
      const dialog = screen.getByRole("dialog");
      const modeButtons = within(dialog)
        .getAllByRole("button")
        .filter((button) => button.className.includes("dialog-button"));
      expect(modeButtons[2]).toHaveTextContent(/8/);
    }
    selectModeByIndex(2);

    // この1週間で間違えた問題
    fireEvent.click(screen.getByRole("button", { name: /モード/ }));
    {
      const dialog = screen.getByRole("dialog");
      const modeButtons = within(dialog)
        .getAllByRole("button")
        .filter((button) => button.className.includes("dialog-button"));
      expect(modeButtons[3]).toHaveTextContent(/3/);
    }
    selectModeByIndex(3);

    // モード切り替え後はスタートボタンが無効になっていることを確認
    expect(screen.getByRole("button", { name: "スタート" })).toBeDisabled();
  });

  it("問題数選択後にスタートボタンが有効になる", () => {
    vi.mocked(mockMemoryManager.getQuestionsByMode).mockReturnValue(
      data.map((q) => q.id)
    );

    render(
      <StartScreen
        onStartPractice={mockOnStartPractice}
        memoryManager={mockMemoryManager}
      />
    );

    // 初期状態ではスタートボタンが無効
    const startButton = screen.getByRole("button", { name: "スタート" });
    expect(startButton).toBeDisabled();

    // 問題数を選択
    fireEvent.click(screen.getByRole("button", { name: /もんだいすう/ }));
    const dialog = screen.getByRole("dialog");
    const countButtons = within(dialog)
      .getAllByRole("button")
      .filter((button) => button.className.includes("dialog-count-button"));
    expect(countButtons.length).toBeGreaterThan(0);
    expect(countButtons[0]).toHaveTextContent(/^5/);
    fireEvent.click(countButtons[0]);

    // スタートボタンが有効になる
    expect(startButton).not.toBeDisabled();

    // モードを切り替えるとスタートボタンが再び無効になる
    fireEvent.click(screen.getByRole("button", { name: /モード/ }));
    {
      const dialog = screen.getByRole("dialog");
      const modeButtons = within(dialog)
        .getAllByRole("button")
        .filter((button) => button.className.includes("dialog-button"));
      fireEvent.click(modeButtons[1]);
    }
    expect(startButton).toBeDisabled();
  });

  it("問題が無い場合は適切なメッセージを表示する", () => {
    vi.mocked(mockMemoryManager.getQuestionsByMode).mockReturnValue([]);

    render(
      <StartScreen
        onStartPractice={mockOnStartPractice}
        memoryManager={mockMemoryManager}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /もんだいすう/ }));

    expect(screen.getByText(/このモードで/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "スタート" })).toBeDisabled();
  });

  it("学習履歴をリセットできる", () => {
    render(
      <StartScreen
        onStartPractice={mockOnStartPractice}
        memoryManager={mockMemoryManager}
      />
    );

    // メニューを開く
    fireEvent.click(screen.getByRole("button", { name: "メニュー" }));

    // 履歴リセットボタンをクリック
    fireEvent.click(screen.getByRole("button", { name: "学習履歴をリセット" }));

    // 確認ダイアログで「はい」をクリック
    fireEvent.click(screen.getByRole("button", { name: "はい" }));

    // clearHistoryが呼ばれたことを確認
    expect(mockMemoryManager.clearHistory).toHaveBeenCalled();
  });
});
