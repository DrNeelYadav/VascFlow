import "server-only";

import { applicationDefault, cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

/**
 * Server-only Firestore access. App Hosting should provide its runtime service
 * identity; local deployments may supply FIREBASE_SERVICE_ACCOUNT_JSON through
 * a secret manager. Never use the browser Firebase SDK for privileged reads.
 */
export function getAdminFirestore() {
  const existing = getApps()[0];
  if (existing) return getFirestore(existing);

  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  const app = initializeApp({
    projectId,
    credential: serviceAccountJson
      ? cert(JSON.parse(serviceAccountJson))
      : applicationDefault(),
  });

  return getFirestore(app);
}
