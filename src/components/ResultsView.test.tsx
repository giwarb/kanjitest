import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ResultsView } from "./ResultsView";

describe("ResultsView", () => {
  const mockResults = {
    total: 10,
    correct: 8,
    incorrectCount: 2,
    percentage: 80,
    incorrectDetails: [
      {
        questionIndex: 1,
        incorrectCount: 1,
        sentence: '漢字の<span class="target">問題</span>です',
      },
    ],
  };

  const mockOnRestartReview = vi.fn();

  it("間違いがある場合、正しく結果を表示する", () => {
    render(
      <ResultsView
        results={mockResults}
        onRestartReview={mockOnRestartReview}
      />
    );

    expect(
      screen.getByText("ぜん10もんちゅう、8もん せいかい！")
    ).toBeDefined();
    expect(screen.getByText("せいかいりつ: 80.0%")).toBeDefined();
    expect(screen.getByText("2もん まちがいました。")).toBeDefined();
    expect(
      screen.getByRole("button", {
        name: "まちがった もんだい を もういちど",
      })
    ).toBeDefined();
  });

  it("すべて正解の場合、適切なメッセージを表示する", () => {
    const perfectResults = {
      ...mockResults,
      correct: 10,
      incorrectCount: 0,
      percentage: 100,
    };

    render(
      <ResultsView
        results={perfectResults}
        onRestartReview={mockOnRestartReview}
      />
    );

    expect(
      screen.getByText("すべての もんだいを せいかいしました！")
    ).toBeDefined();
    expect(screen.queryByText("まちがった もんだい を もういちど")).toBeNull();
  });

  it("復習ボタンをクリックすると onRestartReview が呼ばれる", () => {
    render(
      <ResultsView
        results={mockResults}
        onRestartReview={mockOnRestartReview}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "まちがった もんだい を もういちど",
      })
    );
    expect(mockOnRestartReview).toHaveBeenCalledTimes(1);
  });
});
