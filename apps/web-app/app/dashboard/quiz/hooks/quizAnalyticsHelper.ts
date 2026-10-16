import type {
  FrcrModuleKey,
  MasteryLevelInfo,
  DailyProgressPoint,
  StoredQuizDataset,
} from "../types";

export const MASTERY_LEVELS: MasteryLevelInfo[] = [
  { level: 1, title: "Radiology Intern", badge: "BookOpen", minCompleted: 0, minAccuracy: 0 },
  { level: 2, title: "Junior Resident", badge: "Sparkles", minCompleted: 100, minAccuracy: 50 },
  { level: 3, title: "Senior Resident", badge: "ShieldCheck", minCompleted: 350, minAccuracy: 60 },
  { level: 4, title: "Registrar", badge: "Award", minCompleted: 750, minAccuracy: 70 },
  { level: 5, title: "FRCR 2A Exam-Ready", badge: "GraduationCap", minCompleted: 1200, minAccuracy: 75 },
];

export const MODULE_KEYS: FrcrModuleKey[] = ["PAEDS", "MSK", "CHEST", "GUT", "GIT", "CNS"];

export function deepMergeDatasets(local: StoredQuizDataset, cloud: StoredQuizDataset): StoredQuizDataset {
  const mergedAttempts = { ...local.attempts };
  const mergedBookmarks = { ...local.bookmarks };

  MODULE_KEYS.forEach((mod) => {
    const lAtts = local.attempts[mod] || {};
    const cAtts = cloud.attempts?.[mod] || {};
    mergedAttempts[mod] = { ...lAtts };
    Object.entries(cAtts).forEach(([qid, cRec]) => {
      const lRec = lAtts[qid];
      if (!lRec || cRec.lastAttemptedAt > lRec.lastAttemptedAt) {
        mergedAttempts[mod][qid] = cRec;
      }
    });

    const lBms = local.bookmarks?.[mod] || {};
    const cBms = cloud.bookmarks?.[mod] || {};
    mergedBookmarks[mod] = { ...lBms, ...cBms };
  });

  const lastActive =
    (cloud.lastActive?.updatedAt || 0) > (local.lastActive?.updatedAt || 0)
      ? cloud.lastActive
      : local.lastActive;

  return {
    attempts: mergedAttempts,
    bookmarks: mergedBookmarks,
    lastActive,
    history: cloud.history && cloud.history.length > local.history.length ? cloud.history : local.history,
    lastUpdated: Math.max(local.lastUpdated, cloud.lastUpdated || 0),
  };
}

export function computeQuizAnalytics(dataset: StoredQuizDataset) {
  let totalAttempted = 0;
  let totalCorrect = 0;
  const moduleStats: Record<FrcrModuleKey, { attempted: number; correct: number; mistakes: number }> = {
    PAEDS: { attempted: 0, correct: 0, mistakes: 0 },
    MSK: { attempted: 0, correct: 0, mistakes: 0 },
    CHEST: { attempted: 0, correct: 0, mistakes: 0 },
    GUT: { attempted: 0, correct: 0, mistakes: 0 },
    GIT: { attempted: 0, correct: 0, mistakes: 0 },
    CNS: { attempted: 0, correct: 0, mistakes: 0 },
  };

  MODULE_KEYS.forEach((mod) => {
    const atts = Object.values(dataset.attempts[mod] || {});
    const attCount = atts.length;
    const corCount = atts.filter((a) => a.isCorrect).length;
    const misCount = atts.filter((a) => a.isInMistakeQueue).length;

    moduleStats[mod] = { attempted: attCount, correct: corCount, mistakes: misCount };
    totalAttempted += attCount;
    totalCorrect += corCount;
  });

  const accuracyPercent = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  let currentLevel = MASTERY_LEVELS[0];
  for (let i = MASTERY_LEVELS.length - 1; i >= 0; i--) {
    const lvl = MASTERY_LEVELS[i];
    if (totalAttempted >= lvl.minCompleted && accuracyPercent >= lvl.minAccuracy) {
      currentLevel = lvl;
      break;
    }
  }

  const dailyPoints: DailyProgressPoint[] = dataset.history.slice(-14).map((h) => ({
    date: h.date,
    attempted: h.attempted,
    correct: h.correct,
    accuracy: h.attempted > 0 ? Math.round((h.correct / h.attempted) * 100) : 0,
  }));

  return {
    totalAttempted,
    totalCorrect,
    accuracyPercent,
    currentLevel,
    moduleStats,
    dailyPoints,
    lastActive: dataset.lastActive,
  };
}
