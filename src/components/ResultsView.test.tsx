import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ResultsView } from "./ResultsView";

const mockQuestions = [
  {
    id: "1",
    sentence: "問題1",
    target: "一",
    svg: "<svg>...</svg>",
  },
  {
    id: "2",
    sentence: "問題2",
    target: "二",
    svg: "<svg>...</svg>",
  },
  {
    id: "3",
    sentence: "問題3",
    target: "三",
    svg: "<svg>...</svg>",
  },
];

describe("ResultsView", () => {
  const mockScoreAndResults = {
    score: {
      total: 10,
      correct: 8,
      percentage: 80,
      incorrectCount: 2,
    },
    results: [
      {
        question: mockQuestions[0],
        lastResult: {
          questionIndex: 0,
          isCorrect: true,
          strokeResults: undefined,
        },
        incorrectCount: 0,
      },
      {
        question: mockQuestions[1],
        lastResult: {
          questionIndex: 1,
          isCorrect: false,
          strokeResults: undefined,
        },
        incorrectCount: 1,
      },
      {
        question: mockQuestions[2],
        lastResult: {
          questionIndex: 2,
          isCorrect: false,
          strokeResults: undefined,
        },
        incorrectCount: 1,
      },
    ],
  };

  const mockOnRestartReview = vi.fn();

  it("間違いがある場合、正しく結果を表示する", () => {
    const { container } = render(
      <ResultsView
        scoreAndResults={mockScoreAndResults}
        onRestartReview={mockOnRestartReview}
        onBackToStart={vi.fn()}
      />
    );

    const summaryDiv = Array.from(container.querySelectorAll("div")).find(
      (element) =>
        element.textContent?.includes("もんちゅう") &&
        element.textContent.includes("10") &&
        element.textContent.includes("8") &&
        element.textContent.includes("！")
    );
    expect(summaryDiv).toBeTruthy();

    expect(screen.getByText(/80\.0/)).toBeDefined();

    const incorrectParagraph = Array.from(container.querySelectorAll("p")).find(
      (element) =>
        element.textContent?.includes("2") &&
        element.textContent.includes("まちが")
    );
    expect(incorrectParagraph).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: "間違った問題をもう一度",
      })
    ).toBeDefined();
  });

  it("すべて正解の場合、適切なメッセージを表示する", () => {
    const perfectResults = {
      ...mockScoreAndResults,
      score: {
        total: 3,
        correct: 3,
        percentage: 100,
        incorrectCount: 0,
      },
    };

    render(
      <ResultsView
        scoreAndResults={perfectResults}
        onRestartReview={mockOnRestartReview}
        onBackToStart={vi.fn()}
      />
    );

    expect(screen.getByText(/しました！/)).toBeDefined();
    expect(
      screen.queryByRole("button", { name: "間違った問題をもう一度" })
    ).toBeNull();
  });

  it("復習ボタンをクリックすると onRestartReview が呼ばれる", () => {
    render(
      <ResultsView
        scoreAndResults={mockScoreAndResults}
        onRestartReview={mockOnRestartReview}
        onBackToStart={vi.fn()}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "間違った問題をもう一度",
      })
    );
    expect(mockOnRestartReview).toHaveBeenCalledTimes(1);
  });
});
