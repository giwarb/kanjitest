interface QuestionHistory {
  id: number;
  correctDates: string[];
  incorrectDates: string[];
}

export class MemoryManager {
  private readonly storageKey = "question_history";

  saveResult(id: number, datetime: string, isCorrect: boolean): void {
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

  getQuestionHistory(id: number): QuestionHistory | undefined {
    return this.getHistory().find((h) => h.id === id);
  }

  clearHistory(): void {
    localStorage.removeItem(this.storageKey);
  }
}
