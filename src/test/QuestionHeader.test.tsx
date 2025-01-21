import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { QuestionHeader } from "../components/QuestionHeader";

describe("QuestionHeader", () => {
  const defaultProps = {
    currentQuestionNumber: 1,
    totalQuestions: 10,
    question: '漢字の<span class="target">問題</span>です',
    isReviewMode: false,
  };

  it("問題番号と総問題数が表示される", () => {
    render(<QuestionHeader {...defaultProps} />);
    expect(screen.getByText("1 もんめ / 10 もん")).toBeDefined();
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
    expect(screen.queryByText("ふくしゅうちゅう！")).toBeNull();

    rerender(<QuestionHeader {...defaultProps} isReviewMode={true} />);
    expect(screen.getByText("ふくしゅうちゅう！")).toBeDefined();
  });

  it("問題番号が変更されると表示が更新される", () => {
    const { rerender } = render(<QuestionHeader {...defaultProps} />);
    expect(screen.getByText("1 もんめ / 10 もん")).toBeDefined();

    rerender(<QuestionHeader {...defaultProps} currentQuestionNumber={2} />);
    expect(screen.getByText("2 もんめ / 10 もん")).toBeDefined();
  });
});
