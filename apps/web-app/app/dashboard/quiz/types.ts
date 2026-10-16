/**
 * Types for FRCR 2A Radiodiagnosis Quizzing App.
 */

export type FrcrModuleKey = "PAEDS" | "MSK" | "CHEST" | "GUT" | "GIT" | "CNS";

export interface FrcrQuestion {
  id: string;
  module: FrcrModuleKey;
  topic: string;
  stem: string;
  prompt: string;
  options: string[];
  explanation: string;
  correctAnswer: number; // 0-indexed: 0=A, 1=B, 2=C, 3=D, 4=E
}

export interface FrcrModuleInfo {
  key: FrcrModuleKey;
  name: string;
  shortName: string;
  count: number;
  description: string;
  color: string;
  iconName: string;
}

export type QuizMode = "tutor" | "exam";

export interface UserAnswerRecord {
  selectedOption: number; // 0-4
  isCorrect: boolean;
  timestamp: number;
}

export interface ModuleProgress {
  answers: Record<string, UserAnswerRecord>;
  bookmarks: Record<string, boolean>;
  lastIndex: number;
}
