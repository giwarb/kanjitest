import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import { LastAttemptDisplay } from "./LastAttemptDisplay";
import * as functions from "../functions";
// drawStrokeResultsをモック化
vi.mock("../functions", () => ({
  drawStrokeResults: vi.fn(),
}));

describe("LastAttemptDisplay", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // getContextのモックを適切な型で実装
    HTMLCanvasElement.prototype.getContext = vi.fn((contextId: string) => {
      if (contextId === "2d") {
        return {
          clearRect: vi.fn(),
          beginPath: vi.fn(),
          moveTo: vi.fn(),
          lineTo: vi.fn(),
          stroke: vi.fn(),
          fillText: vi.fn(),
          canvas: { width: 300, height: 300 },
          fillStyle: "",
          strokeStyle: "",
          lineWidth: 1,
          globalAlpha: 1,
        } as unknown as CanvasRenderingContext2D;
      }
      return null;
    }) as unknown as typeof HTMLCanvasElement.prototype.getContext;
  });

  const mockNormalizedResult = {
    strokeResults: [
      {
        score: 0.8,
        sampleResampled: [],
        userResampled: [],
      },
    ],
    normParamsUser: { centerX: 100, centerY: 100, scale: 1 },
    normParamsSample: { centerX: 100, centerY: 100, scale: 1 },
  };

  const mockResults = [
    {
      question: {
        id: "1",
        sentence: "問題1",
      },
      lastResult: {
        questionIndex: 0,
        isCorrect: true,
        normalizedResult: mockNormalizedResult,
      },
      incorrectCount: 0,
    },
    {
      question: {
        id: "2",
        sentence: "問題2",
      },
      lastResult: {
        questionIndex: 1,
        isCorrect: true,
        // normalizedResultなし
      },
      incorrectCount: 0,
    },
    {
      question: {
        id: "3",
        sentence: "問題3",
      },
      lastResult: {
        questionIndex: 2,
        isCorrect: true,
        normalizedResult: mockNormalizedResult,
      },
      incorrectCount: 0,
    },
  ];

  it("normalizedResultを持つ問題が表示される", async () => {
    await act(async () => {
      render(<LastAttemptDisplay results={mockResults} />);
    });

    // タイトルが表示される（rubyで分割されるため textContent で判定）
    expect(
      screen.getByText((_, element) =>
        Boolean(
          element?.tagName === "H3" &&
            element.textContent?.includes("れんしゅう") &&
            element.textContent.includes("もじ")
        )
      )
    ).toBeDefined();

    // normalizedResultを持つ問題が表示される
    expect(screen.getByText("問題1")).toBeDefined();
    expect(screen.getByText("問題3")).toBeDefined();

    // 描画が正しく呼ばれることを確認
    expect(functions.drawStrokeResults).toHaveBeenCalledTimes(2);
  });

  it("normalizedResultがない問題は表示されない", async () => {
    await act(async () => {
      render(<LastAttemptDisplay results={mockResults} />);
    });

    // normalizedResultがない問題は表示されない
    expect(screen.queryByText("問題2")).toBeNull();
  });

  it("canvas要素が正しく描画される", async () => {
    await act(async () => {
      render(<LastAttemptDisplay results={mockResults} />);
    });

    // normalizedResultを持つ問題の数だけdrawStrokeResultsが呼ばれる
    expect(functions.drawStrokeResults).toHaveBeenCalledTimes(2);

    // 最初の呼び出しを検証
    expect(functions.drawStrokeResults).toHaveBeenNthCalledWith(
      1,
      expect.any(Object),
      mockResults[0].lastResult.normalizedResult,
      0.7
    );

    // 2番目の呼び出しを検証
    expect(functions.drawStrokeResults).toHaveBeenNthCalledWith(
      2,
      expect.any(Object),
      mockResults[2].lastResult.normalizedResult,
      0.7
    );
  });

  it("問題がない場合はタイトルのみ表示される", () => {
    const { container } = render(<LastAttemptDisplay results={[]} />);

    expect(
      screen.getByText((_, element) =>
        Boolean(
          element?.tagName === "H3" &&
            element.textContent?.includes("れんしゅう") &&
            element.textContent.includes("もじ")
        )
      )
    ).toBeDefined();
    expect(container.querySelectorAll("canvas")).toHaveLength(0);
    expect(functions.drawStrokeResults).not.toHaveBeenCalled();
  });
});
