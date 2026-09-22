import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    "AIzaSyBzg59_tVobEltU5A7ZIG4RLhLF1Nq27a8",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "endoflow-54b71.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
    "endoflow-54b71",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "endoflow-54b71.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
    "726336393001",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    "1:726336393001:web:7cb54d311f72c2b21ff138",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ||
    "G-TXWGZN2M5M",
};

/**
 * Initialize Firebase singleton instance for client-side and serverless route execution.
 */
export const app: FirebaseApp =
  getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

/**
 * Primary Google Cloud Firestore instance for VascFlow OS collections.
 */
export const db: Firestore = getFirestore(app);

/**
 * Checks whether Firebase credentials are properly configured.
 */
export function isFirebaseConfigured(): boolean {
  return Boolean(firebaseConfig.projectId && firebaseConfig.apiKey);
}
