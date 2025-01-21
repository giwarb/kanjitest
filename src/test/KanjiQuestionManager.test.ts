import { describe, it, expect, beforeEach } from 'vitest';
import { KanjiQuestionManager } from '../KanjiQuestionManager';

// localStorage のモック実装
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

describe('漢字問題管理クラス', () => {
  it('正しく初期化されること', () => {
    const manager = new KanjiQuestionManager(mockQuestions);
    expect(manager.getCurrentQuestion()).toEqual(mockQuestions[0]);
    expect(manager.isComplete()).toBe(false);
    expect(manager.isInReviewMode()).toBe(false);
  });

  it('次の問題に正しく移動できること', () => {
    const manager = new KanjiQuestionManager(mockQuestions);
    expect(manager.getCurrentQuestion()).toEqual(mockQuestions[0]);
    manager.recordResult(true);
    expect(manager.getCurrentQuestion()).toEqual(mockQuestions[1]);
  });

  describe('結果の記録', () => {
    it('真偽値のみで結果を正しく記録できること', () => {
      const manager = new KanjiQuestionManager(mockQuestions);

      // 正解として記録
      manager.recordResult(true);

      // 不正解として記録
      manager.recordResult(false);

      // 正解として記録
      manager.recordResult(true);

      const results = manager.getResultsScore();
      expect(results.total).toBe(3);
      expect(results.correct).toBe(2);
      expect(results.incorrectCount).toBe(1);
      expect(results.percentage).toBe((2 / 3) * 100);
    });

    it('個々の筆画の結果を正しく処理できること', () => {
      const manager = new KanjiQuestionManager(mockQuestions);

      // すべての筆画が閾値以上で正解
      const strokeResults1 = [
        { score: 0.7, sampleResampled: [], userResampled: [] },
        { score: 0.8, sampleResampled: [], userResampled: [] },
        { score: 0.9, sampleResampled: [], userResampled: [] },
      ];
      manager.recordResult(true, strokeResults1);

      // 1つの筆画が閾値未満のため不正解
      const strokeResults2 = [
        { score: 0.8, sampleResampled: [], userResampled: [] },
        { score: 0.4, sampleResampled: [], userResampled: [] },
        { score: 0.9, sampleResampled: [], userResampled: [] },
      ];
      manager.recordResult(false, strokeResults2);

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

  it('復習モードを正しく処理できること', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    // 第1問: 正解
    manager.recordResult(true);

    // 第2問: 不正解
    manager.recordResult(false);

    // 第3問: 不正解
    manager.recordResult(false);

    expect(manager.hasIncorrectQuestions()).toBe(true);
    manager.startReviewMode();
    expect(manager.isInReviewMode()).toBe(true);

    // 復習モードでは2問（不正解だった問題）がある
    expect(manager.getCurrentQuestion()).toEqual(mockQuestions[1]);
  });

  it('正しくリセットできること', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    manager.recordResult(true);
    manager.recordResult(false);

    manager.reset();
    expect(manager.getCurrentQuestion()).toEqual(mockQuestions[0]);
    expect(manager.isInReviewMode()).toBe(false);
    expect(manager.getResultsScore().total).toBe(0);
  });

  it('すべての問題が回答されたとき完了状態になること', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    manager.recordResult(true);
    manager.recordResult(true);
    manager.recordResult(true);

    expect(manager.isComplete()).toBe(true);
  });

  it('2問のみの場合、合計問題数を正しく計算できること', () => {
    // 2問だけのテストケース作成
    const shortQuestions = mockQuestions.slice(0, 2);
    const manager = new KanjiQuestionManager(shortQuestions);

    // 第1問: 不正解
    manager.recordResult(false);

    // 第2問: 正解
    manager.recordResult(true);

    const results = manager.getResultsScore();
    expect(results.total).toBe(2); // 全2問
    expect(results.correct).toBe(1); // 1問正解
    expect(results.incorrectCount).toBe(1); // 1問不正解
    expect(results.percentage).toBe(50); // 正答率50%
  });

  it('復習モードの結果を正しく処理できること', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    // 通常モード：全3問中1問正解
    manager.recordResult(true); // 第1問：正解
    manager.recordResult(false); // 第2問：不正解
    manager.recordResult(false); // 第3問：不正解

    let results = manager.getResultsScore();
    expect(results.total).toBe(3);
    expect(results.correct).toBe(1);
    expect(results.incorrectCount).toBe(2);

    // 復習モード開始
    manager.startReviewMode();
    expect(manager.isInReviewMode()).toBe(true);

    // 復習1回目：2問中1問正解
    manager.recordResult(true); // 正解
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

  describe('LocalStorage機能', () => {
    it('結果を記録した後にLocalStorageに状態が保存されること', () => {
      const manager = new KanjiQuestionManager(mockQuestions);
      manager.recordResult(true);
      const savedStateStr = mockLocalStorage.getItem('kanjiQuestionManagerState');
      expect(savedStateStr).not.toBeNull();
      const savedState = JSON.parse(savedStateStr || '');
      expect(savedState.results).toHaveLength(1);
      expect(savedState.results[0].isCorrect).toBe(true);
    });

    it('初期化時にLocalStorageから状態を復元しないこと', () => {
      // 最初のインスタンスで状態を保存する
      const manager1 = new KanjiQuestionManager(mockQuestions);
      manager1.recordResult(true);

      // 新しいインスタンスを作成。状態は復元されないことを確認
      const manager2 = new KanjiQuestionManager(mockQuestions);
      expect(manager2.getCurrentQuestion()).toEqual(mockQuestions[0]); // 1問目から開始
      expect(manager2.getResultsScore().total).toBe(0); // 回答なし
    });

    it('リセット時にLocalStorageがクリアされること', () => {
      const manager = new KanjiQuestionManager(mockQuestions);
      manager.recordResult(true);
      manager.reset();

      expect(mockLocalStorage.getItem('kanjiQuestionManagerState')).toBeNull();
    });

    it('次の問題に移動後に状態が保存されること', () => {
      const manager = new KanjiQuestionManager(mockQuestions);
      manager.recordResult(true);

      const savedStateStr = mockLocalStorage.getItem('kanjiQuestionManagerState');
      expect(savedStateStr).not.toBeNull();
      const savedState = JSON.parse(savedStateStr || '');
      expect(savedState.currentIndex).toBe(1);
    });

    it('復習モード開始時に状態が保存されること', () => {
      const manager = new KanjiQuestionManager(mockQuestions);
      manager.recordResult(false); // 不正解
      manager.startReviewMode();

      const savedStateStr = mockLocalStorage.getItem('kanjiQuestionManagerState');
      expect(savedStateStr).not.toBeNull();
      const savedState = JSON.parse(savedStateStr || '');
      expect(savedState.isReviewMode).toBe(true);
      expect(savedState.targetQuestionIdices).toHaveLength(1); // 不正解の問題1つ
    });

    it('restoreFromStorageを使用してインスタンス間で合計結果が維持されること', () => {
      // 最初のインスタンスで結果を記録する
      const manager1 = new KanjiQuestionManager(mockQuestions);
      manager1.recordResult(false); // 不正解

      // restoreFromStorageを使用して状態を復元
      const manager2 = KanjiQuestionManager.restoreFromStorage();
      expect(manager2).not.toBeNull();
      if (manager2) {
        const incorrectCounts = manager2.getIncorrectCounts();
        expect(incorrectCounts).toHaveLength(1);
        expect(incorrectCounts[0].incorrectCount).toBe(1);
      }
    });

    it('状態が存在する場合、静的メソッドでストレージから復元できること', () => {
      // 状態を保存する
      const manager1 = new KanjiQuestionManager(mockQuestions);
      manager1.recordResult(true);

      // static methodで復元
      const restoredManager = KanjiQuestionManager.restoreFromStorage();
      expect(restoredManager).not.toBeNull();
      expect(restoredManager?.getCurrentQuestion()).toEqual(mockQuestions[1]); // 2問目から開始
      expect(restoredManager?.getResultsScore().total).toBe(1); // 1問回答済み
    });

    it('状態が存在しない場合、静的復元メソッドがnullを返すこと', () => {
      // LocalStorageが空の状態で実行する
      const restoredManager = KanjiQuestionManager.restoreFromStorage();
      expect(restoredManager).toBeNull();
    });
  });

  it('不正解の試行回数を正しくカウントできること', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    // 第1問: 2回不正解
    manager.recordResult(false); // 1回目の不正解
    manager.recordResult(true); // 正解
    manager.recordResult(false); // 2回目の不正解

    manager.startReviewMode();

    // 復習モードで第1問をさらに1回不正解
    manager.recordResult(false); // 不正解
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

  it('不正解がない場合、空の配列を返すこと', () => {
    const manager = new KanjiQuestionManager(mockQuestions);

    // すべての問題で正解
    manager.recordResult(true);
    manager.recordResult(true);
    manager.recordResult(true);

    const incorrectCounts = manager.getIncorrectCounts();
    expect(incorrectCounts).toHaveLength(0);
  });
});
