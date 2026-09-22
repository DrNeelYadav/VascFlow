const fs = require('fs');
const path = require('path');

// 1. Update useEndoflowStore.ts: remove duplicate PT09
const storePath = path.resolve('apps/web-app/app/dashboard/useEndoflowStore.ts');
let storeContent = fs.readFileSync(storePath, 'utf8');

if (storeContent.includes('id: "PT09"')) {
  console.log('Removing PT09 from useEndoflowStore.ts...');
  const pt09Start = storeContent.indexOf('  {\n    id: "PT09"');
  if (pt09Start !== -1) {
    const pt09End = storeContent.indexOf('  },\n];', pt09Start);
    if (pt09End !== -1) {
      storeContent = storeContent.slice(0, pt09Start) + storeContent.slice(pt09End + 4);
      console.log('PT09 successfully sliced out.');
    }
  }
}

// Ensure updateInRoomTelemetry and updatePostOpCheck initialize if missing
storeContent = storeContent.replace(
  'if (pt.id !== patientId || !pt.inRoom) return pt;',
  `if (pt.id !== patientId) return pt;
        const inRoomData = pt.inRoom || {
          activeSheathAccess: "6F Right Common Femoral Artery",
          elapsedFluoroSeconds: 0,
          contrastInjectedMl: 0,
          macdThresholdMl: 180,
          vitals: "120/80 mmHg, HR 72, SpO2 99%",
          targetArtery: pt.procedure,
          cathetersInUse: [],
          currentStepDescription: "Procedure Telemetry Initialized",
        };`
);

storeContent = storeContent.replace(
  `          inRoom: {
            ...pt.inRoom,
            ...telemetry,
          },`,
  `          inRoom: {
            ...inRoomData,
            ...telemetry,
          },`
);

storeContent = storeContent.replace(
  'if (pt.id !== patientId || !pt.postOp) return pt;',
  `if (pt.id !== patientId) return pt;
        const postOpData = pt.postOp || {
          recoveryBed: pt.ipd.bed || "Cath-Lab Holding Rec-01",
          punctureSiteSeal: "Hemostasis Intact",
          distalPulses: "Strong (+++)",
          instructions: "Post-procedure monitoring.",
          sheathRemoved: true,
          dischargeReady: false,
        };`
);

storeContent = storeContent.replace(
  `          postOp: {
            ...pt.postOp,
            ...updates,
          },`,
  `          postOp: {
            ...postOpData,
            ...updates,
          },`
);

fs.writeFileSync(storePath, storeContent, 'utf8');
console.log('useEndoflowStore.ts updated.');
