import { fireEvent, render, screen } from "@testing-library/react";
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
    render(
      <StartScreen
        onStartPractice={mockOnStartPractice}
        memoryManager={mockMemoryManager}
      />
    );

    expect(screen.getByText(/ぜんぶ：20もん/)).toBeInTheDocument();
    expect(screen.getByText(/まだといていない：10もん/)).toBeInTheDocument();
    expect(screen.getByText(/せいかいした：5もん/)).toBeInTheDocument();

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

    // すべての問題モード（デフォルト）
    const allButton = screen.getByRole("button", { name: /すべての もんだい/ });
    expect(allButton).toHaveTextContent("（12もん）");

    // まだといたことない問題モード
    const newButton = screen.getByRole("button", {
      name: /まだ といたことない もんだい/,
    });
    fireEvent.click(newButton);
    expect(newButton).toHaveTextContent("（10もん）");

    // まだ正解していない問題モード
    const unsolvedButton = screen.getByRole("button", {
      name: /まだ せいかい していない もんだい/,
    });
    fireEvent.click(unsolvedButton);
    expect(unsolvedButton).toHaveTextContent("（8もん）");

    // この一週間で間違えた問題モード
    const recentMistakesButton = screen.getByRole("button", {
      name: /この いっしゅうかんで まちがえた もんだい/,
    });
    fireEvent.click(recentMistakesButton);
    expect(recentMistakesButton).toHaveTextContent("（3もん）");

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
    const fiveQuestionsButton = screen.getByText("5もん");
    fireEvent.click(fiveQuestionsButton);

    // スタートボタンが有効になる
    expect(startButton).not.toBeDisabled();

    // モードを切り替えるとスタートボタンが再び無効になる
    const newButton = screen.getByRole("button", {
      name: /まだ といたことない もんだい/,
    });
    fireEvent.click(newButton);
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

    expect(
      screen.getByText("このモードで とける もんだいが ありません")
    ).toBeInTheDocument();
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
    fireEvent.click(
      screen.getByRole("button", { name: "がくしゅうりれきをリセット" })
    );

    // 確認ダイアログで「はい」をクリック
    fireEvent.click(screen.getByRole("button", { name: "はい" }));

    // clearHistoryが呼ばれたことを確認
    expect(mockMemoryManager.clearHistory).toHaveBeenCalled();
  });
});
