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
    private isReviewMode: boolean;


    constructor(questions: Question[]) {
        this.questions = questions;
        this.targetQuestionIdices = [...Array(questions.length).keys()];
        this.currentIndex = 0;
        this.results = [];
        this.isReviewMode = false;
    }

    getCurrentQuestion(): Question {
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
    }

    moveToNext(): boolean {
        this.currentIndex++;
        return this.currentIndex < this.questions.length;
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

    getResults(): {
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
        this.isReviewMode = false;
    }
}