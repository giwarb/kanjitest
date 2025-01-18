import { describe, it, expect } from 'vitest';
import { KanjiQuestionManager } from '../KanjiQuestionManager';

const mockQuestions = [
    {
        sentence: "問題1",
        target: "一",
        svg: "<svg>...</svg>"
    },
    {
        sentence: "問題2",
        target: "二",
        svg: "<svg>...</svg>"
    },
    {
        sentence: "問題3",
        target: "三",
        svg: "<svg>...</svg>"
    }
];

describe('KanjiQuestionManager', () => {
    it('should initialize correctly', () => {
        const manager = new KanjiQuestionManager(mockQuestions);
        expect(manager.getCurrentQuestion()).toEqual(mockQuestions[0]);
        expect(manager.isComplete()).toBe(false);
        expect(manager.isInReviewMode()).toBe(false);
    });

    it('should move to next question correctly', () => {
        const manager = new KanjiQuestionManager(mockQuestions);
        expect(manager.getCurrentQuestion()).toEqual(mockQuestions[0]);
        expect(manager.moveToNext()).toBe(true);
        expect(manager.getCurrentQuestion()).toEqual(mockQuestions[1]);
    });

    it('should record results correctly', () => {
        const manager = new KanjiQuestionManager(mockQuestions);

        // 正解として記録
        manager.recordResult(0.8);
        manager.moveToNext();

        // 不正解として記録
        manager.recordResult(0.5);
        manager.moveToNext();

        // 正解として記録
        manager.recordResult(0.9);

        const results = manager.getResultsScore();
        expect(results.total).toBe(3);
        expect(results.correct).toBe(2);
        expect(results.incorrectCount).toBe(1);
        expect(results.percentage).toBe(2 / 3 * 100);
    });

    it('should handle review mode correctly', () => {
        const manager = new KanjiQuestionManager(mockQuestions);

        // 1問目: 正解
        manager.recordResult(0.8);
        manager.moveToNext();

        // 2問目: 不正解
        manager.recordResult(0.5);
        manager.moveToNext();

        // 3問目: 不正解
        manager.recordResult(0.6);

        expect(manager.hasIncorrectQuestions()).toBe(true);
        manager.startReviewMode();
        expect(manager.isInReviewMode()).toBe(true);

        // 復習モードでは2問（不正解だった問題）がある
        expect(manager.getCurrentQuestion()).toEqual(mockQuestions[1]);
    });

    it('should reset correctly', () => {
        const manager = new KanjiQuestionManager(mockQuestions);

        manager.recordResult(0.8);
        manager.moveToNext();
        manager.recordResult(0.5);

        manager.reset();
        expect(manager.getCurrentQuestion()).toEqual(mockQuestions[0]);
        expect(manager.isInReviewMode()).toBe(false);
        expect(manager.getResultsScore().total).toBe(0);
    });

    it('should complete when all questions are answered', () => {
        const manager = new KanjiQuestionManager(mockQuestions);

        manager.recordResult(0.8);
        manager.moveToNext();
        manager.recordResult(0.9);
        manager.moveToNext();
        manager.recordResult(0.7);

        expect(manager.isComplete()).toBe(true);
    });

    it('should count total questions correctly with two questions', () => {
        // 2問のみのテストケース
        const shortQuestions = mockQuestions.slice(0, 2);
        const manager = new KanjiQuestionManager(shortQuestions);

        // 1問目: 不正解
        manager.recordResult(0.5);
        manager.moveToNext();

        // 2問目: 正解
        manager.recordResult(0.8);

        const results = manager.getResultsScore();
        expect(results.total).toBe(2); // 全2問
        expect(results.correct).toBe(1); // 1問正解
        expect(results.incorrectCount).toBe(1); // 1問不正解
        expect(results.percentage).toBe(50); // 正答率50%
    });

    it('should handle review mode results correctly', () => {
        const manager = new KanjiQuestionManager(mockQuestions);

        // 通常モード：3問中1問正解
        manager.recordResult(0.8); // 正解
        manager.moveToNext();
        manager.recordResult(0.5); // 不正解
        manager.moveToNext();
        manager.recordResult(0.5); // 不正解

        let results = manager.getResultsScore();
        expect(results.total).toBe(3);
        expect(results.correct).toBe(1);
        expect(results.incorrectCount).toBe(2);

        // 復習モード開始
        manager.startReviewMode();
        expect(manager.isInReviewMode()).toBe(true);

        // 復習1回目：2問中1問正解
        manager.recordResult(0.8); // 正解
        manager.moveToNext();
        manager.recordResult(0.5); // 不正解

        results = manager.getResultsScore();
        expect(results.total).toBe(2); // 復習モードでは2問
        expect(results.correct).toBe(1);
        expect(results.incorrectCount).toBe(1);

        // 2回目の復習モード
        manager.startReviewMode();
        manager.recordResult(0.8); // 最後の1問を正解

        results = manager.getResultsScore();
        expect(results.total).toBe(1); // 残り1問
        expect(results.correct).toBe(1);
        expect(results.incorrectCount).toBe(0);
    });

    it('should count incorrect attempts correctly', () => {
        const manager = new KanjiQuestionManager(mockQuestions);

        // 1問目: 2回間違える
        manager.recordResult(0.5); // 不正解
        manager.moveToNext();
        manager.recordResult(0.8); // 正解
        manager.moveToNext();
        manager.recordResult(0.5); // 不正解

        manager.startReviewMode();

        // 復習モードで1問目をもう一度間違える
        manager.recordResult(0.5); // 不正解
        manager.moveToNext();
        manager.recordResult(0.8); // 正解

        const incorrectCounts = manager.getIncorrectCounts();

        // 間違いの多い順にソートされていることを確認
        expect(incorrectCounts).toHaveLength(2);
        expect(incorrectCounts[0]).toEqual({
            questionIndex: 0,
            incorrectCount: 2,
            sentence: mockQuestions[0].sentence
        });
        expect(incorrectCounts[1]).toEqual({
            questionIndex: 2,
            incorrectCount: 1,
            sentence: mockQuestions[2].sentence
        });
    });

    it('should return empty array when no incorrect answers', () => {
        const manager = new KanjiQuestionManager(mockQuestions);

        // すべて正解
        manager.recordResult(0.8);
        manager.moveToNext();
        manager.recordResult(0.9);
        manager.moveToNext();
        manager.recordResult(0.8);

        const incorrectCounts = manager.getIncorrectCounts();
        expect(incorrectCounts).toHaveLength(0);
    });
});