import {
  WardRoundPatient,
  OfflineSyncQueueItem,
  OfflineSyncActionType,
} from "../types";

/**
 * Initial clinical dataset for morning ward rounds at SMS Hospital Angiosuite / Vascular Wards.
 */
export const INITIAL_WARD_PATIENTS: WardRoundPatient[] = [
  {
    id: "patient-ward-001",
    crNo: "SMS-2026-CR-8821",
    ipdNo: "IPD-88410",
    name: "Rajesh Sharma",
    age: 58,
    gender: "M",
    ward: "VASCULAR_SURGERY_3B",
    bedNo: "Bed 14",
    diagnosis: "Intermediate-stage Multifocal Hepatocellular Carcinoma (BCLC Stage B)",
    plannedProcedure: "Transarterial Chemoembolization (TACE) - Left Hepatic Artery",
    serumCreatinine: 1.1,
    weightKg: 68,
    contrastMlInjected: 35,
    cigarroaMacdLimit: 309, // 5 * 68 / 1.1 = 309 mL
    vitals: {
      abp: "128/78",
      map: 94,
      heartRate: 72,
      spo2: 98,
      temperatureC: 36.8,
      respiratoryRate: 15,
      lastUpdated: "08:15 AM",
    },
    signOffStatus: "PENDING",
    tenantId: "tenant_sms_jaipur",
  },
  {
    id: "patient-ward-002",
    crNo: "SMS-2026-CR-9014",
    ipdNo: "IPD-88419",
    name: "Sunita Devi",
    age: 46,
    gender: "F",
    ward: "EMERGENCY_TRIAGE",
    bedNo: "Trauma Bay 2",
    diagnosis: "Post-Tubercular Bronchiectasis with Massive Hemoptysis (>400 mL/24h)",
    plannedProcedure: "STAT Bronchial Artery Embolization (BAE)",
    serumCreatinine: 0.9,
    weightKg: 52,
    contrastMlInjected: 0,
    cigarroaMacdLimit: 288,
    vitals: {
      abp: "98/62",
      map: 74,
      heartRate: 112,
      spo2: 92,
      temperatureC: 37.4,
      respiratoryRate: 24,
      lastUpdated: "08:22 AM",
    },
    signOffStatus: "STAT_FLAGGED",
    tenantId: "tenant_sms_jaipur",
  },
  {
    id: "patient-ward-003",
    crNo: "SMS-2026-CR-7749",
    ipdNo: "IPD-87902",
    name: "Mohan Lal Meena",
    age: 64,
    gender: "M",
    ward: "CARDIOTHORACIC_ICU",
    bedNo: "ICU-04",
    diagnosis: "Infrarenal Abdominal Aortic Aneurysm (AAA, 5.8 cm diameter) with mural thrombus",
    plannedProcedure: "Endovascular Aortic Aneurysm Repair (EVAR)",
    serumCreatinine: 1.4,
    weightKg: 74,
    contrastMlInjected: 120,
    cigarroaMacdLimit: 264, // 5 * 74 / 1.4 = 264 mL
    vitals: {
      abp: "134/82",
      map: 99,
      heartRate: 68,
      spo2: 99,
      temperatureC: 36.9,
      respiratoryRate: 14,
      lastUpdated: "08:10 AM",
    },
    signOffStatus: "SIGNED_OFF",
    signOffNotes: "Stable post-op day 1. Bilateral pedal pulses palpable. Urine output 45 mL/hr.",
    signedOffBy: "Dr. Roy (Faculty IR)",
    signedOffAt: "08:05 AM",
    tenantId: "tenant_sms_jaipur",
  },
  {
    id: "patient-ward-004",
    crNo: "SMS-2026-CR-9150",
    ipdNo: "IPD-88500",
    name: "Anita Saxena",
    age: 52,
    gender: "F",
    ward: "NEPHROLOGY_HD",
    bedNo: "HD-Bay 6",
    diagnosis: "End-Stage Renal Disease (ESRD) on Hemodialysis with Left Brachiocephalic AVF Stenosis",
    plannedProcedure: "Fistuloplasty / Balloon Angioplasty (High-Pressure Conquest 6mm)",
    serumCreatinine: 5.6,
    weightKg: 58,
    contrastMlInjected: 12,
    cigarroaMacdLimit: 51, // Low MACD due to ESRD
    vitals: {
      abp: "148/88",
      map: 108,
      heartRate: 76,
      spo2: 97,
      temperatureC: 37.0,
      respiratoryRate: 16,
      lastUpdated: "08:28 AM",
    },
    signOffStatus: "PENDING",
    tenantId: "tenant_sms_jaipur",
  },
];

/**
 * In-memory / local storage offline queue manager.
 */
class OfflineSyncManager {
  private queue: OfflineSyncQueueItem[] = [];
  private patients: WardRoundPatient[] = [...INITIAL_WARD_PATIENTS];
  private isOnline = true;
  private listeners: Array<() => void> = [];

  constructor() {
    this.queue = [];
  }

  public getPatients(): WardRoundPatient[] {
    return [...this.patients];
  }

  public getQueue(): OfflineSyncQueueItem[] {
    return [...this.queue];
  }

  public getPendingQueueCount(): number {
    return this.queue.filter((q) => !q.synced).length;
  }

  public isNetworkConnected(): boolean {
    return this.isOnline;
  }

  public setNetworkStatus(online: boolean): void {
    this.isOnline = online;
    if (online) {
      this.syncPendingQueue();
    }
    this.notifyListeners();
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((l) => l());
  }

  /**
   * Records a physician sign-off at the bedside, immediately mutating local state
   * and queuing a synchronization task for remote persistence.
   */
  public recordPhysicianSignOff(
    patientId: string,
    signedOffBy: string,
    notes: string,
    tenantId = "tenant_sms_jaipur"
  ): WardRoundPatient | null {
    const idx = this.patients.findIndex((p) => p.id === patientId);
    if (idx === -1) return null;

    const updated: WardRoundPatient = {
      ...this.patients[idx],
      signOffStatus: "SIGNED_OFF",
      signOffNotes: notes,
      signedOffBy,
      signedOffAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    this.patients[idx] = updated;

    const queueItem: OfflineSyncQueueItem = {
      id: `sync_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      patientId,
      tenantId,
      actionType: "PHYSICIAN_SIGN_OFF",
      payload: {
        signOffStatus: "SIGNED_OFF",
        signedOffBy,
        signOffNotes: notes,
        timestamp: new Date().toISOString(),
      },
      timestamp: new Date().toISOString(),
      synced: this.isOnline,
      retryCount: 0,
    };

    this.queue.push(queueItem);
    this.notifyListeners();
    return updated;
  }

  /**
   * Synchronizes all pending local mutations to the remote BFF gateway.
   */
  public async syncPendingQueue(): Promise<number> {
    if (!this.isOnline) return 0;

    let syncedCount = 0;
    for (const item of this.queue) {
      if (!item.synced) {
        // Simulate HTTP POST /api/proxy/fhir/rounds-sync
        item.synced = true;
        syncedCount++;
      }
    }

    if (syncedCount > 0) {
      this.notifyListeners();
    }
    return syncedCount;
  }
}

export const offlineSyncService = new OfflineSyncManager();
