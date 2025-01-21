import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import { StartScreen } from "../components/StartScreen";

describe("StartScreen", () => {
  const mockOnStartPractice = vi.fn();

  beforeEach(() => {
    mockOnStartPractice.mockClear();
  });

  test("はじめの状態が正しく表示される", () => {
    render(<StartScreen onStartPractice={mockOnStartPractice} />);

    // タイトルの確認
    expect(screen.getByText("かんじれんしゅう")).toBeInTheDocument();
    expect(
      screen.getByText("もんだいすうをえらんでください：")
    ).toBeInTheDocument();

    // デフォルトで10問が選択されていることを確認
    const button5 = screen.getByText("5もん");
    expect(button5.className).toContain("selected");
  });

  test("問題数を選択できる", () => {
    render(<StartScreen onStartPractice={mockOnStartPractice} />);

    // 20問を選択
    fireEvent.click(screen.getByText("20もん"));
    const button20 = screen.getByText("20もん");
    expect(button20.className).toContain("selected");

    // 他のボタンは選択されていない
    const button10 = screen.getByText("10もん");
    expect(button10.className).not.toContain("selected");
  });
  test("選択した問題数で練習を開始できる", () => {
    render(<StartScreen onStartPractice={mockOnStartPractice} />);

    // 30問を選択
    fireEvent.click(screen.getByText("30もん"));

    // スタートボタンをクリック
    fireEvent.click(screen.getByText("スタート"));

    // コールバックが正しい問題数で呼ばれることを確認
    expect(mockOnStartPractice).toHaveBeenCalled();
    const selectedQuestions = mockOnStartPractice.mock.calls[0][0];
    expect(selectedQuestions).toHaveLength(30);
  });

  test("重複のないランダムな問題が選択される", () => {
    render(<StartScreen onStartPractice={mockOnStartPractice} />);

    // スタートボタンを2回クリック
    fireEvent.click(screen.getByText("スタート"));
    fireEvent.click(screen.getByText("スタート"));

    // それぞれの問題セットを取得
    const firstSet = mockOnStartPractice.mock.calls[0][0];
    const secondSet = mockOnStartPractice.mock.calls[1][0];

    // 問題数が同じで内容が異なることを確認
    expect(firstSet).toHaveLength(5);
    expect(secondSet).toHaveLength(5);
    expect(firstSet).not.toEqual(secondSet);
  });
});
