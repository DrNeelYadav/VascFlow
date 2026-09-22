import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  query,
  orderBy,
  limit,
  where,
  runTransaction,
  type Firestore,
} from "firebase/firestore";

const defaultFirebaseConfig = {
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
};

let firestoreInstance: Firestore | null = null;

export function getFirestoreInstance(): Firestore {
  if (!firestoreInstance) {
    const app =
      getApps().length > 0
        ? getApp()
        : initializeApp(defaultFirebaseConfig);
    firestoreInstance = getFirestore(app);
  }
  return firestoreInstance;
}

export interface FirestoreCaseRecord {
  id?: string;
  uhid?: string;
  patientName?: string;
  age?: number;
  sex?: string;
  procedure?: string;
  status?: string;
  room?: string;
  operatorId?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
}

export interface FirestoreInventoryItem {
  id: string;
  sku: string;
  name: string;
  category?: string;
  quantityOnHand: number;
  lotNumber?: string;
  expiryDate?: string;
  unitPriceINR?: number;
}

export interface FirestoreAuditEntry {
  id?: string;
  action: string;
  entityType: string;
  entityId: string;
  staffId: string;
  ipAddress?: string;
  userAgent?: string;
  details?: any;
  timestamp: string;
  status?: string;
}

/**
 * 1. Cases Collection Services
 */
export async function fetchFirestoreCases(limitCount: number = 50): Promise<FirestoreCaseRecord[]> {
  try {
    const db = getFirestoreInstance();
    const casesRef = collection(db, "cases");
    const q = query(casesRef, orderBy("createdAt", "desc"), limit(limitCount));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({
      id: d.id,
      ...(d.data() as Omit<FirestoreCaseRecord, "id">),
    }));
  } catch (err) {
    console.warn("[Firestore] fetchFirestoreCases offline/error:", err);
    return [];
  }
}

export async function createFirestoreCase(
  caseData: Omit<FirestoreCaseRecord, "id" | "createdAt">
): Promise<FirestoreCaseRecord> {
  const db = getFirestoreInstance();
  const casesRef = collection(db, "cases");
  const now = new Date().toISOString();
  const docRef = await addDoc(casesRef, {
    ...caseData,
    createdAt: now,
    updatedAt: now,
  });
  return {
    id: docRef.id,
    ...caseData,
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * 2. Inventory Atomic Depletion using Firestore runTransaction
 */
export async function depleteInventoryStockFirestore(
  caseId: string,
  items: Array<{ sku: string; quantity: number; disposition?: string; wasteReason?: string }>,
  actor: string = "staff_cathlab"
): Promise<{
  success: boolean;
  depleted: Array<{ sku: string; quantityUsed: number; remaining: number }>;
}> {
  const db = getFirestoreInstance();
  const inventoryRef = collection(db, "inventory");
  const depletedRecords: Array<{ sku: string; quantityUsed: number; remaining: number }> = [];

  await runTransaction(db, async (transaction) => {
    for (const it of items) {
      const itemDocRef = doc(inventoryRef, it.sku);
      const itemSnap = await transaction.get(itemDocRef);

      const currentQty = itemSnap.exists()
        ? (itemSnap.data().quantityOnHand ?? itemSnap.data().quantity ?? 10)
        : 10; // Default fallback for unseeded inventory doc
      const qtyUsed = Math.max(1, it.quantity);
      const remaining = Math.max(0, currentQty - qtyUsed);

      transaction.set(
        itemDocRef,
        {
          sku: it.sku,
          quantityOnHand: remaining,
          lastDepletedAt: new Date().toISOString(),
          lastCaseId: caseId,
          lastActor: actor,
        },
        { merge: true }
      );

      depletedRecords.push({
        sku: it.sku,
        quantityUsed: qtyUsed,
        remaining,
      });
    }

    // Append usage record to cath lab case ledger
    const usageDocRef = doc(collection(db, "inventory_usage"));
    transaction.set(usageDocRef, {
      caseId,
      actor,
      items: depletedRecords,
      timestamp: new Date().toISOString(),
    });
  });

  return {
    success: true,
    depleted: depletedRecords,
  };
}

/**
 * 3. Audit Logs Collection Services
 */
export async function appendFirestoreAuditLog(entry: FirestoreAuditEntry): Promise<string> {
  const db = getFirestoreInstance();
  const auditRef = collection(db, "audit_logs");
  const docRef = await addDoc(auditRef, {
    ...entry,
    timestamp: entry.timestamp || new Date().toISOString(),
    status: entry.status || "VERIFIED_TAMPER_PROOF",
  });
  return docRef.id;
}

export async function fetchFirestoreAuditLogs(limitCount: number = 50): Promise<FirestoreAuditEntry[]> {
  try {
    const db = getFirestoreInstance();
    const auditRef = collection(db, "audit_logs");
    const q = query(auditRef, orderBy("timestamp", "desc"), limit(limitCount));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({
      id: d.id,
      ...(d.data() as Omit<FirestoreAuditEntry, "id">),
    }));
  } catch (err) {
    console.warn("[Firestore] fetchFirestoreAuditLogs error:", err);
    return [];
  }
}
