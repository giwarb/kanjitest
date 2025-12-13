import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { QuestionHeader } from "./QuestionHeader";

describe("QuestionHeader", () => {
  const defaultProps = {
    currentQuestionNumber: 1,
    totalQuestions: 10,
    question: '漢字の<span class="target">問題</span>です',
    isReviewMode: false,
  };

  it("問題番号と総問題数が表示される", () => {
    const { container } = render(<QuestionHeader {...defaultProps} />);
    const countElement = container.querySelector(
      'div[style*="text-align: center"]'
    );
    expect(countElement?.textContent).toContain("1");
    expect(countElement?.textContent).toContain("10");
    expect(countElement?.textContent).toContain("もんめ");
    expect(countElement?.textContent).toContain("もん");
  });

  it("問題文が正しく表示される", () => {
    const { container } = render(<QuestionHeader {...defaultProps} />);
    const questionElement = container.querySelector(".question");
    expect(questionElement?.innerHTML).toContain(
      '漢字の<span class="target">問題</span>です'
    );
  });

  it("復習モードの場合、復習中メッセージが表示される", () => {
    const { rerender } = render(<QuestionHeader {...defaultProps} />);
    expect(screen.queryByText(/ふくしゅうちゅう/)).toBeNull();

    rerender(<QuestionHeader {...defaultProps} isReviewMode={true} />);
    expect(screen.getByText(/ふくしゅうちゅう/)).toBeDefined();
  });

  it("問題番号が変更されると表示が更新される", () => {
    const { container, rerender } = render(
      <QuestionHeader {...defaultProps} />
    );
    const getCountText = () =>
      container.querySelector('div[style*="text-align: center"]')
        ?.textContent ?? "";

    expect(getCountText()).toContain("1");
    expect(getCountText()).toContain("10");
    expect(getCountText()).toContain("もんめ");

    rerender(<QuestionHeader {...defaultProps} currentQuestionNumber={2} />);
    expect(getCountText()).toContain("2");
    expect(getCountText()).toContain("10");
    expect(getCountText()).toContain("もんめ");
  });
});
