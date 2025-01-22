interface QuestionHistory {
  id: string;
  correctDates: string[];
  incorrectDates: string[];
}

export type PracticeMode = "all" | "new" | "unsolved" | "recent-mistakes";

export class MemoryManager {
  private readonly storageKey = "question_history";

  saveResult(id: string, datetime: string, isCorrect: boolean): void {
    const history = this.getHistory();
    const questionHistory = history.find((h) => h.id === id) || {
      id,
      correctDates: [],
      incorrectDates: [],
    };

    if (isCorrect) {
      questionHistory.correctDates.push(datetime);
    } else {
      questionHistory.incorrectDates.push(datetime);
    }

    const newHistory = history
      .filter((h) => h.id !== id)
      .concat(questionHistory);
    localStorage.setItem(this.storageKey, JSON.stringify(newHistory));
  }

  getHistory(): QuestionHistory[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  getQuestionHistory(id: string): QuestionHistory | undefined {
    return this.getHistory().find((h) => h.id === id);
  }

  clearHistory(): void {
    localStorage.removeItem(this.storageKey);
  }

  getUnattemptedIds(allQuestionIds: string[]): string[] {
    const history = this.getHistory();
    const attemptedIds = new Set(history.map((h) => h.id));
    return allQuestionIds.filter((id) => !attemptedIds.has(id));
  }

  getUnsolvedIds(allQuestionIds: string[]): string[] {
    const history = this.getHistory();
    return allQuestionIds.filter((id) => {
      const questionHistory = history.find((h) => h.id === id);
      return !questionHistory || questionHistory.correctDates.length === 0;
    });
  }

  getRecentMistakeIds(allQuestionIds: string[]): string[] {
    const history = this.getHistory();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return allQuestionIds.filter((id) => {
      const questionHistory = history.find((h) => h.id === id);
      if (!questionHistory) return false;

      const recentIncorrect = questionHistory.incorrectDates.some(
        (date) => new Date(date) >= oneWeekAgo
      );
      return recentIncorrect;
    });
  }

  getCorrectCount(): number {
    const history = this.getHistory();
    return history.filter((h) => h.correctDates.length > 0).length;
  }

  getStatistics(allQuestionIds: string[]): {
    total: number;
    unattempted: number;
    correct: number;
    unsolved: number;
    recentMistakes: number;
  } {
    const unattempted = this.getUnattemptedIds(allQuestionIds).length;
    const correct = this.getCorrectCount();
    const unsolved = this.getUnsolvedIds(allQuestionIds).length;
    const recentMistakes = this.getRecentMistakeIds(allQuestionIds).length;

    return {
      total: allQuestionIds.length,
      unattempted,
      correct,
      unsolved,
      recentMistakes,
    };
  }

  getQuestionsByMode(mode: PracticeMode, allQuestionIds: string[]): string[] {
    switch (mode) {
      case "all":
        return [...allQuestionIds];
      case "new":
        return this.getUnattemptedIds(allQuestionIds);
      case "unsolved":
        return this.getUnsolvedIds(allQuestionIds);
      case "recent-mistakes":
        return this.getRecentMistakeIds(allQuestionIds);
      default:
        return [];
    }
  }
}
