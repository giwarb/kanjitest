import "./QuestionHeader.css";
import { Ruby } from "./Ruby";

interface QuestionHeaderProps {
  currentQuestionNumber: number;
  totalQuestions: number;
  question: string;
  isReviewMode: boolean;
}

export function QuestionHeader({
  currentQuestionNumber,
  totalQuestions,
  question,
  isReviewMode,
}: QuestionHeaderProps) {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        {currentQuestionNumber}
        <Ruby base="問目" reading="もんめ" /> / {totalQuestions}
        <Ruby base="問" reading="もん" />
      </div>
      {/* 問題文は漢字の表示のための静的なHTMLコンテンツです */}
      <div
        className="question"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: 問題文は漢字の表示のための静的なHTMLコンテンツです
        dangerouslySetInnerHTML={{ __html: question }}
      />
      {isReviewMode && (
        <div className="review-mode">
          <Ruby base="復習中" reading="ふくしゅうちゅう" />！
        </div>
      )}
    </>
  );
}
