import { grade1 as grade1Data } from "./data/grade1";
import { grade2 as grade2Data } from "./data/grade2";
import { grade3 as grade3Data } from "./data/grade3";
import { grade4 as grade4Data } from "./data/grade4";
import { grade5 as grade5Data } from "./data/grade5";
import { grade6 as grade6Data } from "./data/grade6";
import type { Question } from "./KanjiQuestionManager";

export type GradeKey =
  | "grade1"
  | "grade2"
  | "grade3"
  | "grade4"
  | "grade5"
  | "grade6";

export const datasets: Record<
  GradeKey,
  { label: string; questions: Readonly<Question[]> }
> = {
  grade1: { label: "小学1年", questions: grade1Data },
  grade2: { label: "小学2年", questions: grade2Data },
  grade3: { label: "小学3年", questions: grade3Data },
  grade4: { label: "小学4年", questions: grade4Data },
  grade5: { label: "小学5年", questions: grade5Data },
  grade6: { label: "小学6年", questions: grade6Data },
};

export const defaultGrade: GradeKey = "grade1";
