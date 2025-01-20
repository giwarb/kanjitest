import { describe, it, expect, beforeEach } from 'vitest';
import { KanjiQuestionManager } from '../KanjiQuestionManager';

// localStorageのモック
const mockLocalStorage = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

// グローバルのlocalStorageをモックに置き換え
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });


beforeEach(() => {
  mockLocalStorage.clear();
});

const mockQuestions = [
  {
    sentence: '問題1',
    target: '一',
    svg: '<svg>...</svg>',
  },
  {
    sentence: '問題2',
    target: '二',
    svg: '<svg>...</svg>',
  },
  {
    sentence: '問題3',
    target: '三',
    svg: '<svg>...</svg>',
  },
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

  describe('result recording', () => {
    it('should record results correctly with boolean only', () => {
      const manager = new KanjiQuestionManager(mockQuestions);

      // 正解として記録
      manager.recordResult(true);
      manager.moveToNext();

      // 不正解として記録
      manager.recordResult(false);
      manager.moveToNext();

      // 正解として記録
      manager.recordResult(true);

      const results = manager.getResultsScore();
      expect(results.total).toBe(3);
      expect(results.correct).toBe(2);
      expect(results.incorrectCount).toBe(1);
      expect(results.percentage).toBe((2 / 3) * 100);
    });

    it('should handle individual stroke results correctly', () => {
      const manager = new KanjiQuestionManager(mockQuestions);

      // 全ストロークが閾値以上なので正解
      const strokeResults1 = [
        { score: 0.7, sampleResampled: [], userResampled: [] },
        { score: 0.8, sampleResampled: [], userResampled: [] },
        { score: 0.9, sampleResampled: [], userResampled: [] },
      ];
      manager.recordResult(true, strokeResults1);
      manager.moveToNext();

      // 1つのストロークが閾値未満なので不正解
      const strokeResults2 = [
        { score: 0.8, sampleResampled: [], userResampled: [] },
        { score: 0.4, sampleResampled: [], userResampled: [] },
        { score: 0.9, sampleResampled: [], userResampled: [] },
      ];
      manager.recordResult(false, strokeResults2);
      manager.moveToNext();

      // 全ストロークが閾値以上なので正解
      const strokeResults3 = [
        { score: 0.5, sampleResampled: [], userResampled: [] },
        { score: 0.5, sampleResampled: [], userResampled: [] },
        { score: 0.5, sampleResampled: [], userResampled: [] },
      ];
      manager.recordResult(true, strokeResults3);

      const results = manager.getResultsScore();
      expect(results.total).toBe(3);
      expect(results.correct).toBe(2);
      expect(results.incorrectCount).toBe(1);
      expect(results.percentage).toBe((2 / 3) * 100);
    });
  });

  it('should handle review mode correctly', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    // 1問目: 正解
    manager.recordResult(true);
    manager.moveToNext();

    // 2問目: 不正解
    manager.recordResult(false);
    manager.moveToNext();

    // 3問目: 不正解
    manager.recordResult(false);

    expect(manager.hasIncorrectQuestions()).toBe(true);
    manager.startReviewMode();
    expect(manager.isInReviewMode()).toBe(true);

    // 復習モードでは2問（不正解だった問題）がある
    expect(manager.getCurrentQuestion()).toEqual(mockQuestions[1]);
  });

  it('should reset correctly', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    manager.recordResult(true);
    manager.moveToNext();
    manager.recordResult(false);

    manager.reset();
    expect(manager.getCurrentQuestion()).toEqual(mockQuestions[0]);
    expect(manager.isInReviewMode()).toBe(false);
    expect(manager.getResultsScore().total).toBe(0);
  });

  it('should complete when all questions are answered', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    manager.recordResult(true);
    manager.moveToNext();
    manager.recordResult(true);
    manager.moveToNext();
    manager.recordResult(true);

    expect(manager.isComplete()).toBe(true);
  });

  it('should count total questions correctly with two questions', () => {
    // 2問のみのテストケース
    const shortQuestions = mockQuestions.slice(0, 2);
    const manager = new KanjiQuestionManager(shortQuestions);

    // 1問目: 不正解
    manager.recordResult(false);
    manager.moveToNext();

    // 2問目: 正解
    manager.recordResult(true);

    const results = manager.getResultsScore();
    expect(results.total).toBe(2); // 全2問
    expect(results.correct).toBe(1); // 1問正解
    expect(results.incorrectCount).toBe(1); // 1問不正解
    expect(results.percentage).toBe(50); // 正答率50%
  });

  it('should handle review mode results correctly', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    // 通常モード：3問中1問正解
    manager.recordResult(true); // 正解
    manager.moveToNext();
    manager.recordResult(false); // 不正解
    manager.moveToNext();
    manager.recordResult(false); // 不正解

    let results = manager.getResultsScore();
    expect(results.total).toBe(3);
    expect(results.correct).toBe(1);
    expect(results.incorrectCount).toBe(2);

    // 復習モード開始
    manager.startReviewMode();
    expect(manager.isInReviewMode()).toBe(true);

    // 復習1回目：2問中1問正解
    manager.recordResult(true); // 正解
    manager.moveToNext();
    manager.recordResult(false); // 不正解

    results = manager.getResultsScore();
    expect(results.total).toBe(2); // 復習モードでは2問
    expect(results.correct).toBe(1);
    expect(results.incorrectCount).toBe(1);

    // 2回目の復習モード
    manager.startReviewMode();
    manager.recordResult(true); // 最後の1問を正解

    results = manager.getResultsScore();
    expect(results.total).toBe(1); // 残り1問
    expect(results.correct).toBe(1);
    expect(results.incorrectCount).toBe(0);
  });

  describe('localStorage functionality', () => {
    it('should save state to localStorage after recording result', () => {
      const manager = new KanjiQuestionManager(mockQuestions);
      manager.recordResult(true);
      const savedStateStr = mockLocalStorage.getItem('kanjiQuestionManagerState');
      expect(savedStateStr).not.toBeNull();
      const savedState = JSON.parse(savedStateStr || '');
      expect(savedState.results).toHaveLength(1);
      expect(savedState.results[0].isCorrect).toBe(true);
    });

    it('should restore state from localStorage on initialization', () => {
      // 最初のインスタンスで状態を保存
      const manager1 = new KanjiQuestionManager(mockQuestions);
      manager1.recordResult(true);
      manager1.moveToNext();

      // 新しいインスタンスを作成して状態が復元されることを確認
      const manager2 = new KanjiQuestionManager(mockQuestions);
      expect(manager2.getCurrentQuestion()).toEqual(mockQuestions[1]); // 2問目から開始
      expect(manager2.getResultsScore().total).toBe(1); // 1問回答済み
    });

    it('should clear localStorage when reset is called', () => {
      const manager = new KanjiQuestionManager(mockQuestions);
      manager.recordResult(true);
      manager.reset();

      expect(mockLocalStorage.getItem('kanjiQuestionManagerState')).toBeNull();
    });

    it('should save state after moving to next question', () => {
      const manager = new KanjiQuestionManager(mockQuestions);
      manager.moveToNext();

      const savedStateStr = mockLocalStorage.getItem('kanjiQuestionManagerState');
      expect(savedStateStr).not.toBeNull();
      const savedState = JSON.parse(savedStateStr || '');
      expect(savedState.currentIndex).toBe(1);
    });

    it('should save state when entering review mode', () => {
      const manager = new KanjiQuestionManager(mockQuestions);
      manager.recordResult(false); // 不正解
      manager.startReviewMode();

      const savedStateStr = mockLocalStorage.getItem('kanjiQuestionManagerState');
      expect(savedStateStr).not.toBeNull();
      const savedState = JSON.parse(savedStateStr || '');
      expect(savedState.isReviewMode).toBe(true);
      expect(savedState.targetQuestionIdices).toHaveLength(1); // 不正解の問題1つ
    });

    it('should maintain total results across instances', () => {
      // 最初のインスタンスで結果を記録
      const manager1 = new KanjiQuestionManager(mockQuestions);
      manager1.recordResult(false); // 不正解

      // 新しいインスタンスを作成
      const manager2 = new KanjiQuestionManager(mockQuestions);
      const incorrectCounts = manager2.getIncorrectCounts();
      expect(incorrectCounts).toHaveLength(1);
      expect(incorrectCounts[0].incorrectCount).toBe(1);
    });
  });

  it('should count incorrect attempts correctly', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    // 1問目: 2回間違える
    manager.recordResult(false); // 不正解
    manager.moveToNext();
    manager.recordResult(true); // 正解
    manager.moveToNext();
    manager.recordResult(false); // 不正解

    manager.startReviewMode();

    // 復習モードで1問目をもう一度間違える
    manager.recordResult(false); // 不正解
    manager.moveToNext();
    manager.recordResult(true); // 正解

    const incorrectCounts = manager.getIncorrectCounts();

    // 間違いの多い順にソートされていることを確認
    expect(incorrectCounts).toHaveLength(2);
    expect(incorrectCounts[0]).toEqual({
      questionIndex: 0,
      incorrectCount: 2,
      sentence: mockQuestions[0].sentence,
    });
    expect(incorrectCounts[1]).toEqual({
      questionIndex: 2,
      incorrectCount: 1,
      sentence: mockQuestions[2].sentence,
    });
  });

  it('should return empty array when no incorrect answers', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    // すべて正解
    manager.recordResult(true);
    manager.moveToNext();
    manager.recordResult(true);
    manager.moveToNext();
    manager.recordResult(true);

    const incorrectCounts = manager.getIncorrectCounts();
    expect(incorrectCounts).toHaveLength(0);
  });
});
