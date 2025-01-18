interface Question {
    sentence: string;
    target: string;
    svg: string;
}

interface QuestionResult {
    questionIndex: number;
    isCorrect: boolean;
    score: number;
}

export class KanjiQuestionManager {
    private questions: Question[];
    private targetQuestionIdices: number[];
    private currentIndex: number;
    private results: QuestionResult[];
    private totalResults: QuestionResult[];
    private isReviewMode: boolean;


    constructor(questions: Question[]) {
        this.questions = questions;
        this.targetQuestionIdices = [...Array(questions.length).keys()];
        this.currentIndex = 0;
        this.results = [];
        this.totalResults = [];
        this.isReviewMode = false;
    }

    getCurrentQuestion(): Question | undefined {
        return this.questions[this.targetQuestionIdices[this.currentIndex]];
    }

    recordResult(score: number): void {
        const questionIndex = this.targetQuestionIdices[this.currentIndex];

        const isCorrect = score >= 0.7;
        this.results.push({
            questionIndex,
            isCorrect,
            score
        });
        this.totalResults.push({
            questionIndex,
            isCorrect,
            score
        });
    }

    moveToNext(): boolean {
        this.currentIndex++;
        return this.currentIndex < this.targetQuestionIdices.length;
    }

    hasIncorrectQuestions(): boolean {
        return this.results.some(r => !r.isCorrect);
    }

    startReviewMode(): void {
        this.isReviewMode = true;
        this.currentIndex = 0;
        this.targetQuestionIdices = this.results.filter(r => !r.isCorrect).map(r => r.questionIndex);
        this.results = [];
    }

    getResultsScore(): {
        total: number;
        correct: number;
        incorrectCount: number;
        percentage: number;
    } {
        const total = this.results.length;
        const correct = this.results.filter(r => r.isCorrect).length;
        const incorrectCount = total - correct;
        const percentage = correct / total * 100;

        return {
            total,
            correct,
            incorrectCount,
            percentage
        };
    }

    getIncorrectCounts(): { questionIndex: number; incorrectCount: number; sentence: string }[] {
        const incorrectCounts = new Map<number, number>();

        this.totalResults.forEach(result => {
            if (!result.isCorrect) {
                const count = incorrectCounts.get(result.questionIndex) || 0;
                incorrectCounts.set(result.questionIndex, count + 1);
            }
        });

        return Array.from(incorrectCounts.entries())
            .map(([questionIndex, incorrectCount]) => ({
                questionIndex,
                incorrectCount,
                sentence: this.questions[questionIndex].sentence
            }))
            .filter(item => item.incorrectCount > 0)
            .sort((a, b) => b.incorrectCount - a.incorrectCount);
    }

    isInReviewMode(): boolean {
        return this.isReviewMode;
    }

    isComplete(): boolean {
        return this.results.length === this.targetQuestionIdices.length;
    }

    reset(): void {
        this.targetQuestionIdices = [...Array(this.questions.length).keys()];
        this.currentIndex = 0;
        this.results = [];
        this.totalResults = [];
        this.isReviewMode = false;
    }
}