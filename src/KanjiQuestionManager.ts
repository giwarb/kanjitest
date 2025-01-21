import type { StrokeResult } from "./functions";

interface Question {
  sentence: string;
  target: string;
  svg: string;
}

interface QuestionResult {
  questionIndex: number;
  isCorrect: boolean;
  strokeResults: StrokeResult[] | undefined;
}

interface KanjiQuestionManagerState {
  questions: Question[];
  targetQuestionIdices: number[];
  currentIndex: number;
  results: QuestionResult[];
  totalResults: QuestionResult[];
  isReviewMode: boolean;
}

export class KanjiQuestionManager {
  private questions: Question[];
  private targetQuestionIdices: number[];
  private currentIndex: number;
  private results: QuestionResult[];
  private totalResults: QuestionResult[];
  private isReviewMode: boolean;
  private static readonly STORAGE_KEY = "kanjiQuestionManagerState";
  public static readonly SCORE_THRESHOLD = 0.6;

  constructor(questions: Question[]) {
    this.questions = questions;
    this.targetQuestionIdices = [...Array(questions.length).keys()];
    this.currentIndex = 0;
    this.results = [];
    this.totalResults = [];
    this.isReviewMode = false;
  }

  private saveState(): void {
    const state = {
      questions: this.questions,
      targetQuestionIdices: this.targetQuestionIdices,
      currentIndex: this.currentIndex,
      results: this.results,
      totalResults: this.totalResults,
      isReviewMode: this.isReviewMode,
    };
    localStorage.setItem(
      KanjiQuestionManager.STORAGE_KEY,
      JSON.stringify(state)
    );
  }

  static restoreFromStorage(): KanjiQuestionManager | null {
    const savedState = localStorage.getItem(KanjiQuestionManager.STORAGE_KEY);
    if (!savedState) {
      return null;
    }
    const state = JSON.parse(savedState) as KanjiQuestionManagerState;
    const manager = new KanjiQuestionManager(state.questions);
    manager.targetQuestionIdices = state.targetQuestionIdices;
    manager.currentIndex = state.currentIndex;
    manager.results = state.results;
    manager.totalResults = state.totalResults;
    manager.isReviewMode = state.isReviewMode;
    return manager;
  }

  getCurrentQuestion(): Question | undefined {
    return this.questions[this.targetQuestionIdices[this.currentIndex]];
  }

  isCorrect(scores: number[]): boolean {
    return scores.every((s) => s >= KanjiQuestionManager.SCORE_THRESHOLD);
  }

  getScoreText(scores: number[]): string {
    const averageScore =
      scores.reduce((acc, score) => acc + score, 0) / scores.length;
    const minScore = Math.min(...scores);
    const averageScorePercentage = Math.round(averageScore * 100);
    const minScorePercentage = Math.round(minScore * 100);

    return `スコア: ${minScorePercentage}%、へいきん: ${averageScorePercentage}%`;
  }

  recordResult(isCorrect: boolean, strokeResults?: StrokeResult[]): void {
    if (this.isComplete()) {
      throw new Error("All questions have been answered");
    }

    const questionIndex = this.targetQuestionIdices[this.currentIndex];

    this.results.push({
      questionIndex,
      isCorrect,
      strokeResults,
    });

    this.totalResults.push({
      questionIndex,
      isCorrect,
      strokeResults,
    });

    this.currentIndex++;

    this.saveState();
  }

  hasIncorrectQuestions(): boolean {
    return this.results.some((r) => !r.isCorrect);
  }

  startReviewMode(): void {
    this.isReviewMode = true;
    this.currentIndex = 0;
    this.targetQuestionIdices = this.results
      .filter((r) => !r.isCorrect)
      .map((r) => r.questionIndex);
    this.results = [];
    this.saveState();
  }

  getResultsScore(): {
    total: number;
    correct: number;
    incorrectCount: number;
    percentage: number;
  } {
    const total = this.results.length;
    const correct = this.results.filter((r) => r.isCorrect).length;
    const incorrectCount = total - correct;
    const percentage = (correct / total) * 100;

    return {
      total,
      correct,
      incorrectCount,
      percentage,
    };
  }

  getIncorrectCounts(): {
    questionIndex: number;
    incorrectCount: number;
    sentence: string;
  }[] {
    const incorrectCounts = new Map<number, number>();

    for (const result of this.totalResults) {
      if (!result.isCorrect) {
        const count = incorrectCounts.get(result.questionIndex) || 0;
        incorrectCounts.set(result.questionIndex, count + 1);
      }
    }

    return Array.from(incorrectCounts.entries())
      .map(([questionIndex, incorrectCount]) => ({
        questionIndex,
        incorrectCount,
        sentence: this.questions[questionIndex].sentence,
      }))
      .filter((item) => item.incorrectCount > 0)
      .sort((a, b) => b.incorrectCount - a.incorrectCount);
  }

  isInReviewMode(): boolean {
    return this.isReviewMode;
  }

  isComplete(): boolean {
    return this.results.length === this.targetQuestionIdices.length;
  }

  getCurrentQuestionNumber(): number {
    return this.currentIndex + 1;
  }

  getTotalQuestions(): number {
    return this.targetQuestionIdices.length;
  }

  reset(): void {
    this.targetQuestionIdices = [...Array(this.questions.length).keys()];
    this.currentIndex = 0;
    this.results = [];
    this.totalResults = [];
    this.isReviewMode = false;
    this.saveState();
  }

  unloadFromStorage(): void {
    localStorage.removeItem(KanjiQuestionManager.STORAGE_KEY);
  }
}
