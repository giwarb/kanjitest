import type { NormalizedResult } from "./functions";

export interface Question {
  id: string;
  sentence: string;
  target: string;
  svg: string;
}

interface QuestionResult {
  questionIndex: number;
  isCorrect: boolean;
  normalizedResult?: NormalizedResult;
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
  private questions: Readonly<Question[]>;
  private targetQuestionIdices: number[];
  private currentIndex: number;
  private results: QuestionResult[];
  private totalResults: QuestionResult[];
  private isReviewMode: boolean;
  private shouldSaveState: boolean;
  private static readonly STORAGE_KEY = "kanjiQuestionManagerState";
  public static readonly SCORE_THRESHOLD = 0.6;

  constructor(questions: Readonly<Question[]>, opts?: { saveState?: boolean }) {
    this.questions = questions;
    this.targetQuestionIdices = [...Array(questions.length).keys()];
    this.currentIndex = 0;
    this.results = [];
    this.totalResults = [];
    this.isReviewMode = false;
    this.shouldSaveState = opts?.saveState ?? true;
    if (this.shouldSaveState) {
      this.saveState();
    }
  }

  private saveState(): void {
    if (!this.shouldSaveState) return;
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
    // restore 中に constructor がストレージを書き換えると状態が壊れるので抑止する
    const manager = new KanjiQuestionManager(state.questions, {
      saveState: false,
    });
    manager.targetQuestionIdices = state.targetQuestionIdices;
    manager.currentIndex = state.currentIndex;
    manager.results = state.results;
    manager.totalResults = state.totalResults;
    manager.isReviewMode = state.isReviewMode;
    // 復元した状態をストレージにも反映しておく
    manager.shouldSaveState = true;
    manager.saveState();
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

    return `スコア: ${minScorePercentage}%、平均: ${averageScorePercentage}%`;
  }

  recordResult(isCorrect: boolean, normalizedResult?: NormalizedResult): void {
    if (this.isComplete()) {
      throw new Error("All questions have been answered");
    }

    const questionIndex = this.targetQuestionIdices[this.currentIndex];

    this.results.push({
      questionIndex,
      isCorrect,
      normalizedResult,
    });

    this.totalResults.push({
      questionIndex,
      isCorrect,
      normalizedResult,
    });

    this.currentIndex++;

    this.saveState();
  }

  hasIncorrectQuestions(): boolean {
    return this.results.some((r) => !r.isCorrect);
  }

  startReviewMode(): void {
    // 二重クリック等で連続実行されると results が空になり復習対象が消えるため、空なら no-op
    if (this.results.length === 0) {
      return;
    }
    this.isReviewMode = true;
    this.currentIndex = 0;
    this.targetQuestionIdices = this.results
      .filter((r) => !r.isCorrect)
      .map((r) => r.questionIndex);
    this.results = [];
    this.saveState();
  }

  getScore(): {
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

  getResults(): {
    question: Question;
    lastResult: QuestionResult;
    incorrectCount: number;
  }[] {
    const lastResults = new Map<number, QuestionResult>();
    const incorrectCounts = new Map<number, number>();

    for (const result of this.totalResults) {
      lastResults.set(result.questionIndex, result);
      if (!result.isCorrect) {
        const count = incorrectCounts.get(result.questionIndex) || 0;
        incorrectCounts.set(result.questionIndex, count + 1);
      }
    }

    return this.questions.map((question, index) => {
      const lastResult = lastResults.get(index) ?? {
        questionIndex: index,
        isCorrect: false,
      };
      const incorrectCount = incorrectCounts.get(index) || 0;
      return {
        question,
        lastResult,
        incorrectCount,
      };
    });
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
