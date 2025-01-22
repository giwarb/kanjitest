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
    memoryManager.saveResult(1, testDate, true);

    const history = memoryManager.getQuestionHistory(1);
    expect(history).toBeDefined();
    expect(history?.correctDates).toContain(testDate);
    expect(history?.incorrectDates).toHaveLength(0);
  });

  test("誤答を保存できる", () => {
    const testDate = "2025-01-22T09:40:00";
    memoryManager.saveResult(1, testDate, false);

    const history = memoryManager.getQuestionHistory(1);
    expect(history).toBeDefined();
    expect(history?.incorrectDates).toContain(testDate);
    expect(history?.correctDates).toHaveLength(0);
  });

  test("同じ問題の履歴を複数回保存できる", () => {
    const dates = [
      "2025-01-22T09:40:00",
      "2025-01-22T09:45:00",
      "2025-01-22T09:50:00",
    ];

    memoryManager.saveResult(1, dates[0], false);
    memoryManager.saveResult(1, dates[1], true);
    memoryManager.saveResult(1, dates[2], true);

    const history = memoryManager.getQuestionHistory(1);
    expect(history).toBeDefined();
    expect(history?.incorrectDates).toHaveLength(1);
    expect(history?.incorrectDates[0]).toBe(dates[0]);
    expect(history?.correctDates).toHaveLength(2);
    expect(history?.correctDates).toContain(dates[1]);
    expect(history?.correctDates).toContain(dates[2]);
  });

  test("履歴を消去できる", () => {
    memoryManager.saveResult(1, "2025-01-22T09:40:00", true);
    expect(memoryManager.getHistory()).toHaveLength(1);

    memoryManager.clearHistory();
    expect(memoryManager.getHistory()).toHaveLength(0);
  });
});
