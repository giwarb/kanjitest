import { FC } from 'react';

interface QuestionHeaderProps {
  currentQuestionNumber: number;
  totalQuestions: number;
  question: string;
  isReviewMode: boolean;
}

export const QuestionHeader: FC<QuestionHeaderProps> = ({
  currentQuestionNumber,
  totalQuestions,
  question,
  isReviewMode,
}) => {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        {currentQuestionNumber} もんめ / {totalQuestions} もん
      </div>
      <div
        className="question"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      {isReviewMode && <div className="review-mode">ふくしゅうちゅう！</div>}
    </>
  );
};
