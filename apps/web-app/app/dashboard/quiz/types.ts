/**
 * Types for FRCR 2A & EDiR Radiodiagnosis Examination Workstation & Progress OS.
 * Strictly Gated for Dr. Neel Yadav.
 */

export type FrcrModuleKey = "PAEDS" | "MSK" | "CHEST" | "GUT" | "GIT" | "CNS";

export interface ExplanationBlock {
  type: "text" | "image";
  content?: string;
  src?: string;
  caption?: string;
}

export interface FrcrQuestion {
  id: string;
  module: FrcrModuleKey;
  topic: string;
  stem: string;
  prompt: string;
  options: string[];
  explanation: string;
  explanationBlocks?: ExplanationBlock[];
  correctAnswer: number; // 0-indexed: 0=A, 1=B, 2=C, 3=D, 4=E
  correctAnswers?: number[]; // For EDiR Multiple Response Questions (MRQ)
  isMrq?: boolean; // True if EDiR Multiple Response Question
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
  selectedOption: number; // 0-4 (or primary selection)
  selectedOptions?: number[]; // For EDiR MRQs
  isCorrect: boolean;
  timestamp: number;
}

export interface QuestionAttemptRecord {
  selectedOption: number;
  selectedOptions?: number[];
  isCorrect: boolean;
  attemptCount: number;
  correctStreak: number; // Cleared from mistake queue when correctStreak >= 2
  isInMistakeQueue: boolean;
  lastAttemptedAt: number;
}

export interface LastActiveSession {
  moduleKey: FrcrModuleKey;
  questionId: string;
  index: number;
  topic: string;
  updatedAt: number;
}

export interface StoredQuizDataset {
  attempts: Record<FrcrModuleKey, Record<string, QuestionAttemptRecord>>;
  bookmarks: Record<FrcrModuleKey, Record<string, boolean>>;
  lastActive?: LastActiveSession;
  history: Array<{ date: string; attempted: number; correct: number }>;
  lastUpdated: number;
}

export interface DailyProgressPoint {
  date: string;
  attempted: number;
  correct: number;
  accuracy: number;
}

export interface MasteryLevelInfo {
  level: number;
  title: string;
  badge: string;
  minCompleted: number;
  minAccuracy: number;
}
