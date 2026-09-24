"use client";

import { useEffect, useRef } from "react";
import { db, isFirebaseConfigured } from "../../lib/firebase";
import {
  collection,
  onSnapshot,
  query,
  limit,
} from "firebase/firestore";
import {
  useEndoflowStore,
  EndoflowPatient,
  CtReviewRecord,
  BookedCaseRecord,
  BedRecord,
} from "../useEndoflowStore";

/**
 * UniversalDataSync
 * Establishes real-time, bi-directional multi-device subscriptions to Google Cloud Firestore.
 * When any mobile phone, tablet, or workstation creates or updates an OPD consultation,
 * booked case, admitted patient, or bed status, onSnapshot instantly propagates the latest
 * record to every active screen, mobile app, and laptop in real-time.
 */
export function UniversalDataSync() {
  const setPatients = useEndoflowStore((s) => s.setPatients);
  const setCtReviews = useEndoflowStore((s) => s.setCtReviews);
  const setBookedCases = useEndoflowStore((s) => s.setBookedCases);
  const setBeds = useEndoflowStore((s) => s.setBeds);

  // Guards against race conditions or repetitive initializations
  const isSubscribedRef = useRef(false);

  useEffect(() => {
    if (isSubscribedRef.current) return;
    isSubscribedRef.current = true;

    if (!isFirebaseConfigured() || !db) {
      console.warn("[UniversalDataSync] Firebase not fully configured for real-time live sync.");
      return;
    }

    const unsubs: Array<() => void> = [];

    try {
      // 1. Live OPD CT Reviews Collection
      const ctReviewsRef = collection(db, "ctReviews");
      const unSubCtReviews = onSnapshot(
        query(ctReviewsRef, limit(150)),
        (snapshot) => {
          if (!snapshot.empty) {
            const liveReviews: CtReviewRecord[] = [];
            snapshot.forEach((docSnap) => {
              const data = docSnap.data() as CtReviewRecord;
              if (data && docSnap.id) {
                liveReviews.push({ ...data, id: docSnap.id });
              }
            });
            // Update store so all devices show the new consult/review immediately
            if (liveReviews.length > 0) {
              setCtReviews(liveReviews);
            }
          }
        },
        (error) => {
          console.warn("[UniversalDataSync] ctReviews onSnapshot notice:", error.message);
        }
      );
      unsubs.push(unSubCtReviews);

      // 2. Live Booked Cases Collection (OT Scheduler & Residents Diary)
      const bookedCasesRef = collection(db, "bookedCases");
      const unSubBookedCases = onSnapshot(
        query(bookedCasesRef, limit(200)),
        (snapshot) => {
          if (!snapshot.empty) {
            const liveCases: BookedCaseRecord[] = [];
            snapshot.forEach((docSnap) => {
              const data = docSnap.data() as BookedCaseRecord;
              if (data && docSnap.id) {
                liveCases.push({ ...data, id: docSnap.id });
              }
            });
            if (liveCases.length > 0) {
              setBookedCases(liveCases);
            }
          }
        },
        (error) => {
          console.warn("[UniversalDataSync] bookedCases onSnapshot notice:", error.message);
        }
      );
      unsubs.push(unSubBookedCases);

      // 3. Live Inpatient Cohort (Active Admitted Patients)
      const patientsRef = collection(db, "patients");
      const unSubPatients = onSnapshot(
        query(patientsRef, limit(100)),
        (snapshot) => {
          if (!snapshot.empty) {
            const livePatients: EndoflowPatient[] = [];
            snapshot.forEach((docSnap) => {
              const data = docSnap.data() as EndoflowPatient;
              if (data && docSnap.id) {
                livePatients.push({ ...data, id: docSnap.id });
              }
            });
            if (livePatients.length > 0) {
              setPatients(livePatients);
            }
          }
        },
        (error) => {
          console.warn("[UniversalDataSync] patients onSnapshot notice:", error.message);
        }
      );
      unsubs.push(unSubPatients);

      // 4. Live Ward Bed Matrix (8-Bed Live Occupancy & Patient Placement)
      const bedsRef = collection(db, "beds");
      const unSubBeds = onSnapshot(
        query(bedsRef, limit(20)),
        (snapshot) => {
          if (!snapshot.empty) {
            const liveBeds: BedRecord[] = [];
            snapshot.forEach((docSnap) => {
              const data = docSnap.data() as BedRecord;
              if (data && docSnap.id) {
                liveBeds.push({ ...data, id: docSnap.id });
              }
            });
            if (liveBeds.length > 0) {
              setBeds(liveBeds);
            }
          }
        },
        (error) => {
          console.warn("[UniversalDataSync] beds onSnapshot notice:", error.message);
        }
      );
      unsubs.push(unSubBeds);
    } catch (err) {
      console.warn("[UniversalDataSync] Initialization error:", err);
    }

    return () => {
      unsubs.forEach((unsub) => {
        try {
          unsub();
        } catch {}
      });
      isSubscribedRef.current = false;
    };
  }, [setPatients, setCtReviews, setBookedCases, setBeds]);

  // Headless synchronization agent, renders null
  return null;
}
