import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import { StartScreen } from "../components/StartScreen";

describe("StartScreen", () => {
    const mockOnStartPractice = vi.fn();

    beforeEach(() => {
        mockOnStartPractice.mockClear();
    });

    test("renders with correct initial state", () => {
        render(<StartScreen onStartPractice={mockOnStartPractice} />);

        // タイトルの確認
        expect(screen.getByText("漢字練習")).toBeInTheDocument();
        expect(screen.getByText("問題数を選んでください："))
            .toBeInTheDocument();

        // デフォルトで10問が選択されていることを確認
        const button10 = screen.getByText("10問");
        expect(button10.className).toContain("bg-blue-600");
    });

    test("allows selecting different question counts", () => {
        render(<StartScreen onStartPractice={mockOnStartPractice} />);

        // 20問を選択
        fireEvent.click(screen.getByText("20問"));
        const button20 = screen.getByText("20問");
        expect(button20.className).toContain("bg-blue-600");

        // 他のボタンは選択されていない
        const button10 = screen.getByText("10問");
        expect(button10.className).not.toContain("bg-blue-600");
    });

    test("starts practice with selected number of questions", () => {
        render(<StartScreen onStartPractice={mockOnStartPractice} />);

        // 30問を選択
        fireEvent.click(screen.getByText("30問"));

        // スタートボタンをクリック
        fireEvent.click(screen.getByText("スタート"));

        // コールバックが正しい問題数で呼ばれることを確認
        expect(mockOnStartPractice).toHaveBeenCalled();
        const selectedQuestions = mockOnStartPractice.mock.calls[0][0];
        expect(selectedQuestions).toHaveLength(30);
    });

    test("selects random questions without duplicates", () => {
        render(<StartScreen onStartPractice={mockOnStartPractice} />);

        // スタートボタンを複数回クリック
        fireEvent.click(screen.getByText("スタート"));
        fireEvent.click(screen.getByText("スタート"));

        // 2回のコールで異なる問題セットが選ばれることを確認
        const firstSet = mockOnStartPractice.mock.calls[0][0];
        const secondSet = mockOnStartPractice.mock.calls[1][0];

        // 同じ長さだが内容は異なることを確認
        expect(firstSet).toHaveLength(10);
        expect(secondSet).toHaveLength(10);
        expect(firstSet).not.toEqual(secondSet);
    });
});
