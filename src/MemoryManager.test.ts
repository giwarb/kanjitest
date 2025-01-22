import { describe, expect, test, beforeEach } from "vitest";
import { MemoryManager } from "./MemoryManager";

describe("MemoryManager", () => {
  let memoryManager: MemoryManager;
  let localStorageMock: { [key: string]: string };

  beforeEach(() => {
    localStorageMock = {};

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: (key: string) => localStorageMock[key] || null,
        setItem: (key: string, value: string) => {
          localStorageMock[key] = value;
        },
        removeItem: (key: string) => {
          delete localStorageMock[key];
        },
      },
      writable: true,
    });

    memoryManager = new MemoryManager();
  });

  test("初期状態では空の履歴を返す", () => {
    expect(memoryManager.getHistory()).toEqual([]);
  });

  test("正答を保存できる", () => {
    const testDate = "2025-01-22T09:40:00";
    memoryManager.saveResult("kanji_1", testDate, true);

    const history = memoryManager.getQuestionHistory("kanji_1");
    expect(history).toBeDefined();
    expect(history?.correctDates).toContain(testDate);
    expect(history?.incorrectDates).toHaveLength(0);
  });

  test("誤答を保存できる", () => {
    const testDate = "2025-01-22T09:40:00";
    memoryManager.saveResult("kanji_1", testDate, false);

    const history = memoryManager.getQuestionHistory("kanji_1");
    expect(history).toBeDefined();
    expect(history?.incorrectDates).toContain(testDate);
    expect(history?.correctDates).toHaveLength(0);
  });

  test("未挑戦の問題IDを取得できる", () => {
    const allIds = ["kanji_1", "kanji_2", "kanji_3"];
    memoryManager.saveResult("kanji_1", "2025-01-22T09:40:00", true);

    const unattempted = memoryManager.getUnattemptedIds(allIds);
    expect(unattempted).toHaveLength(2);
    expect(unattempted).toContain("kanji_2");
    expect(unattempted).toContain("kanji_3");
  });

  test("未正解の問題IDを取得できる", () => {
    const allIds = ["kanji_1", "kanji_2", "kanji_3"];
    memoryManager.saveResult("kanji_1", "2025-01-22T09:40:00", true);
    memoryManager.saveResult("kanji_2", "2025-01-22T09:40:00", false);

    const unsolved = memoryManager.getUnsolvedIds(allIds);
    expect(unsolved).toHaveLength(2);
    expect(unsolved).toContain("kanji_2");
    expect(unsolved).toContain("kanji_3");
  });

  test("最近間違えた問題IDを取得できる", () => {
    const allIds = ["kanji_1", "kanji_2", "kanji_3"];
    const now = new Date("2025-01-22T09:40:00");
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const twoWeeksAgo = new Date(now);
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

    // 1週間以内の間違い
    memoryManager.saveResult("kanji_1", now.toISOString(), false);
    // 1週間以内の正解
    memoryManager.saveResult("kanji_2", now.toISOString(), true);
    // 2週間前の間違い
    memoryManager.saveResult("kanji_3", twoWeeksAgo.toISOString(), false);

    const recentMistakes = memoryManager.getRecentMistakeIds(allIds);
    expect(recentMistakes).toHaveLength(1);
    expect(recentMistakes).toContain("kanji_1");
  });

  test("モードに応じた問題IDを取得できる", () => {
    const allIds = ["kanji_1", "kanji_2", "kanji_3", "kanji_4"];
    const now = new Date("2025-01-22T09:40:00");

    memoryManager.saveResult("kanji_1", now.toISOString(), true);
    memoryManager.saveResult("kanji_2", now.toISOString(), false);

    // すべての問題モード
    const allQuestions = memoryManager.getQuestionsByMode("all", allIds);
    expect(allQuestions).toHaveLength(4);
    expect(allQuestions).toEqual(expect.arrayContaining(allIds));

    // 未挑戦の問題モード
    const newQuestions = memoryManager.getQuestionsByMode("new", allIds);
    expect(newQuestions).toHaveLength(2);
    expect(newQuestions).toEqual(
      expect.arrayContaining(["kanji_3", "kanji_4"])
    );

    // 未正解の問題モード
    const unsolvedQuestions = memoryManager.getQuestionsByMode(
      "unsolved",
      allIds
    );
    expect(unsolvedQuestions).toHaveLength(3);
    expect(unsolvedQuestions).toEqual(
      expect.arrayContaining(["kanji_2", "kanji_3", "kanji_4"])
    );

    // 最近の間違いモード
    const recentMistakes = memoryManager.getQuestionsByMode(
      "recent-mistakes",
      allIds
    );
    expect(recentMistakes).toHaveLength(1);
    expect(recentMistakes).toEqual(["kanji_2"]);
  });

  test("統計情報を取得できる", () => {
    const allIds = ["kanji_1", "kanji_2", "kanji_3", "kanji_4"];
    const now = new Date("2025-01-22T09:40:00");

    // kanji_1: 正解済み
    memoryManager.saveResult("kanji_1", now.toISOString(), true);
    // kanji_2: 未正解（間違いあり）
    memoryManager.saveResult("kanji_2", now.toISOString(), false);
    // kanji_3, kanji_4: 未挑戦

    const stats = memoryManager.getStatistics(allIds);
    expect(stats).toEqual({
      total: 4,
      unattempted: 2,
      correct: 1,
      unsolved: 3,
      recentMistakes: 1,
    });
  });

  test("履歴を消去できる", () => {
    memoryManager.saveResult("kanji_1", "2025-01-22T09:40:00", true);
    expect(memoryManager.getHistory()).toHaveLength(1);

    memoryManager.clearHistory();
    expect(memoryManager.getHistory()).toHaveLength(0);
  });
});
