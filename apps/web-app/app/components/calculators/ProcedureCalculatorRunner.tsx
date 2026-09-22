"use client";

import React, { useState } from 'react';
import {
  PROCEDURE_CALCULATORS,
  ProcedureCalculatorMeta,
  calculateRotterdamBcs,
  calculateClichyScore,
  calculateCaudateRightLobeRatio,
  calculateFickShunt,
  calculateHvpg,
  calculatePtbdDecompression,
  calculateRutherford,
  calculateAbiTbi,
  calculateFontaine,
  calculateWellsDvt,
  calculateVillalta,
  calculateCeap,
  calculateRevisedGeneva,
  calculateSpesi,
  calculateFibroidVolume,
  calculateIpss,
  calculateProstateVolume,
  calculateNascetCarotid,
  calculateAspects,
  calculateNihssShort,
  calculateHuntHess,
  calculateModifiedFisher,
  calculateMarkwalder,
  calculateSchobinger,
  calculateRockall,
  calculateGlasgowBlatchford,
  calculateOakland,
  calculateSirBleedingRisk,
  calculateAblationMargin,
  calculateWomac,
  calculateFlrKgr,
  calculateY90Dosimetry,
  calculateSpetzlerMartin,
  calculateAorticSizeIndex,
  calculateRenalResistiveIndex,
  calculateCapriniVte,
  calculateHasBled,
  calculatePpiScore,
  calculateSvsWifi,
  calculateSinsScore,
  calculateBovaPe,
  calculateWhoIwgeHydatid,
  calculateTg18Cholecystitis,
  calculateThyroidVrr,
  calculateShockIndex,
  calculateChylothoraxLeak,
  calculateBuddChiariCompositeRisk,
  evaluateHepaticClassification,
  evaluateMmaAnatomy,
  evaluateScapularSubclavianCollaterals,
  evaluateMesentericCollateral,
  evaluateBismuthCorlette,
  evaluateAorticDissection,
  evaluatePaeClassification,
  evaluateSarinClassification,
  evaluateForrestClassification,
  evaluateVaricoceleClassification,
  evaluateCognardDavf,
  evaluateIshimaruZone,
  evaluateCrawfordTaaa,
  evaluateStrasbergBiliaryInjury,
  evaluateWsesOrganInjury,
  evaluatePvttVpStage,
  evaluateGravesRenalSegment,
  evaluateLasjauniasConnection,
  evaluateDoqiAvfStenosis,
  MICHELS_HIATT_VARIANTS,
  MMA_DANGEROUS_ANASTOMOSES,
  SCAPULAR_SUBCLAVIAN_PATHWAYS,
  MESENTERIC_COLLATERALS,
  BISMUTH_TYPES,
  DISSECTION_TYPES,
  DE_ASSIS_PAE_TYPES,
  SARIN_VARICES_TYPES,
  FORREST_TYPES,
  SARTESCHI_VARICOCELE_GRADES,
  COGNARD_DAVF_TYPES,
  ISHIMARU_AORTIC_ZONES,
  CRAWFORD_TAAA_EXTENTS,
  STRASBERG_BILIARY_TYPES,
  WSES_ORGAN_INJURY_GRADES,
  PVTT_VP_STAGES,
  GRAVES_RENAL_SEGMENTS,
  LASJAUNIAS_CONNECTIONS,
  DOQI_AVF_CRITERIA,
  GenericCalculatorResult
} from '../../lib/procedureCalculators';
import {
  calculateMacd,
  calculateMeld3,
  calculateChildPugh,
  calculateAlbi,
  calculateBclc
} from '../../lib/calculators';
import {
  Calculator,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  calculatorId: string;
  onClose?: () => void;
  showProtocolLink?: boolean;
}

export const ProcedureCalculatorRunner: React.FC<Props> = ({
  calculatorId,
  showProtocolLink = true
}) => {
  const router = useRouter();
  const meta: ProcedureCalculatorMeta | undefined = PROCEDURE_CALCULATORS.find(
    (c) => c.id === calculatorId
  );

  // 1. Rotterdam BCS
  const [bcsEnceph, setBcsEnceph] = useState(false);
  const [bcsAscites, setBcsAscites] = useState(false);
  const [bcsBili, setBcsBili] = useState(1.8);
  const [bcsInr, setBcsInr] = useState(1.3);

  // 2. Clichy
  const [clichyAge, setClichyAge] = useState(48);
  const [clichyBili, setClichyBili] = useState(2.2);
  const [clichyCr, setClichyCr] = useState(1.1);
  const [clichyAscites, setClichyAscites] = useState<'none' | 'controlled' | 'refractory'>('controlled');

  // 3. C/RL
  const [crlCaudate, setCrlCaudate] = useState(42);
  const [crlRight, setCrlRight] = useState(62);

  // 4. Fick Shunt
  const [fickSaO2, setFickSaO2] = useState(88);
  const [fickSvO2, setFickSvO2] = useState(62);
  const [fickSpvO2, setFickSpvO2] = useState(100);

  // 5. HVPG
  const [hvpgWhvp, setHvpgWhvp] = useState(24);
  const [hvpgFhvp, setHvpgFhvp] = useState(9);

  // 6. PTBD
  const [ptbdOutput, setPtbdOutput] = useState(450);
  const [ptbdBaseBili, setPtbdBaseBili] = useState(15.5);
  const [ptbdCurrBili, setPtbdCurrBili] = useState(8.2);
  const [ptbdDays, setPtbdDays] = useState(4);

  // 7. Rutherford
  const [rutherfordCat, setRutherfordCat] = useState(3);

  // 8. ABI/TBI
  const [abiAnkle, setAbiAnkle] = useState(70);
  const [abiBrachial, setAbiBrachial] = useState(130);
  const [abiToe, setAbiToe] = useState(45);

  // 9. Fontaine
  const [fontaineStage, setFontaineStage] = useState<'I' | 'IIa' | 'IIb' | 'III' | 'IV'>('IIb');

  // 10. Wells DVT
  const [wellsCancer, setWellsCancer] = useState(false);
  const [wellsParalysis, setWellsParalysis] = useState(false);
  const [wellsBedridden, setWellsBedridden] = useState(true);
  const [wellsTenderness, setWellsTenderness] = useState(true);
  const [wellsEntireLeg, setWellsEntireLeg] = useState(true);
  const [wellsCalf, setWellsCalf] = useState(true);
  const [wellsPitting, setWellsPitting] = useState(false);
  const [wellsCollaterals, setWellsCollaterals] = useState(false);
  const [wellsPrevDvt, setWellsPrevDvt] = useState(false);
  const [wellsAltDiag, setWellsAltDiag] = useState(false);

  // 11. Villalta
  const [villaltaSymptoms, setVillaltaSymptoms] = useState(6);
  const [villaltaSigns, setVillaltaSigns] = useState(5);
  const [villaltaUlcer, setVillaltaUlcer] = useState(false);

  // 12. CEAP
  const [ceapClass, setCeapClass] = useState<'C0' | 'C1' | 'C2' | 'C3' | 'C4a' | 'C4b' | 'C5' | 'C6'>('C2');

  // 13. Geneva
  const [genAge65, setGenAge65] = useState(false);
  const [genPrevPe, setGenPrevPe] = useState(true);
  const [genSurgery, setGenSurgery] = useState(true);
  const [genMalignancy, setGenMalignancy] = useState(false);
  const [genUnilatPain, setGenUnilatPain] = useState(true);
  const [genHemoptysis, setGenHemoptysis] = useState(false);
  const [genHr, setGenHr] = useState(96);
  const [genDeepPain, setGenDeepPain] = useState(false);

  // 14. sPESI
  const [spAge80, setSpAge80] = useState(false);
  const [spCancer, setSpCancer] = useState(false);
  const [spCardio, setSpCardio] = useState(true);
  const [spHr110, setSpHr110] = useState(true);
  const [spSbp100, setSpSbp100] = useState(false);
  const [spO290, setSpO290] = useState(false);

  // 15. Fibroid
  const [fibL, setFibL] = useState(6.5);
  const [fibW, setFibW] = useState(5.5);
  const [fibD, setFibD] = useState(4.8);
  const [fibPrior, setFibPrior] = useState(140);

  // 16. IPSS
  const [ipssEmpty, setIpssEmpty] = useState(3);
  const [ipssFreq, setIpssFreq] = useState(4);
  const [ipssInter, setIpssInter] = useState(3);
  const [ipssUrg, setIpssUrg] = useState(4);
  const [ipssWeak, setIpssWeak] = useState(3);
  const [ipssStrain, setIpssStrain] = useState(3);
  const [ipssNoct, setIpssNoct] = useState(4);
  const [ipssQol, setIpssQol] = useState(4);

  // 17. Prostate Vol
  const [pvW, setPvW] = useState(5.2);
  const [pvH, setPvH] = useState(4.6);
  const [pvL, setPvL] = useState(4.8);
  const [pvPsa, setPvPsa] = useState(6.5);

  // 18. NASCET
  const [nascetLumen, setNascetLumen] = useState(1.4);
  const [nascetDistal, setNascetDistal] = useState(5.0);
  const [nascetBulb, setNascetBulb] = useState(8.0);

  // 19. ASPECTS
  const [aspCaud, setAspCaud] = useState(false);
  const [aspLent, setAspLent] = useState(true);
  const [aspCaps, setAspCaps] = useState(false);
  const [aspInsu, setAspInsu] = useState(true);
  const [aspM1, setAspM1] = useState(false);
  const [aspM2, setAspM2] = useState(false);
  const [aspM3, setAspM3] = useState(false);
  const [aspM4, setAspM4] = useState(false);
  const [aspM5, setAspM5] = useState(false);
  const [aspM6, setAspM6] = useState(false);

  // 20. NIHSS
  const [nihssScore, setNihssScore] = useState(15);

  // 21. Hunt & Hess
  const [hhGrade, setHhGrade] = useState(2);

  // 22. Modified Fisher
  const [mfGrade, setMfGrade] = useState(3);

  // 23. Markwalder
  const [mwGrade, setMwGrade] = useState(1);

  // 24. Schobinger
  const [schobStage, setSchobStage] = useState(2);

  // 25. Rockall
  const [rockAge, setRockAge] = useState<'<60' | '60-79' | '>=80'>('60-79');
  const [rockShock, setRockShock] = useState<'none' | 'tachycardia' | 'hypotension'>('tachycardia');
  const [rockComorb, setRockComorb] = useState<'none' | 'cad_chf_major' | 'renal_liver_malig'>('cad_chf_major');
  const [rockStigmata, setRockStigmata] = useState<'clean_base' | 'blood_clot' | 'active_spurting'>('blood_clot');

  // 26. GBS
  const [gbsBun, setGbsBun] = useState(26);
  const [gbsHb, setGbsHb] = useState(9.8);
  const [gbsSbp, setGbsSbp] = useState(105);
  const [gbsPulse, setGbsPulse] = useState(102);
  const [gbsFemale, setGbsFemale] = useState(false);
  const [gbsSyncope, setGbsSyncope] = useState(false);
  const [gbsMelena, setGbsMelena] = useState(true);
  const [gbsLiver, setGbsLiver] = useState(false);
  const [gbsHeart, setGbsHeart] = useState(false);

  // 27. Oakland
  const [oakAge, setOakAge] = useState(72);
  const [oakSex, setOakSex] = useState<'male' | 'female'>('male');
  const [oakPrior, setOakPrior] = useState(false);
  const [oakDre, setOakDre] = useState(true);
  const [oakHr, setOakHr] = useState(94);
  const [oakSbp, setOakSbp] = useState(115);
  const [oakHb, setOakHb] = useState(9.5);

  // 28. SIR Bleeding Risk
  const [sirCat, setSirCat] = useState<1 | 2 | 3>(2);
  const [sirPlt, setSirPlt] = useState(95000);
  const [sirInr, setSirInr] = useState(1.4);
  const [sirAptt, setSirAptt] = useState(36);

  // 29. Thermal Ablation Margin
  const [abTumorD, setAbTumorD] = useState(24);
  const [abZoneTrans, setAbZoneTrans] = useState(42);
  const [abZoneLong, setAbZoneLong] = useState(46);
  const [abMinMargin, setAbMinMargin] = useState(6.5);

  // 30. WOMAC
  const [womPain, setWomPain] = useState(13);
  const [womStiff, setWomStiff] = useState(4);
  const [womFunc, setWomFunc] = useState(38);

  // 31. Cigarroa MACD
  const [macdWeight, setMacdWeight] = useState(70);
  const [macdCr, setMacdCr] = useState(1.2);
  const [macdContrast, setMacdContrast] = useState(120);
  const [macdEgfr, setMacdEgfr] = useState(65);

  // 32. MELD 3.0
  const [meldBili, setMeldBili] = useState(2.4);
  const [meldCr, setMeldCr] = useState(1.3);
  const [meldInr, setMeldInr] = useState(1.5);
  const [meldNa, setMeldNa] = useState(135);
  const [meldAlb, setMeldAlb] = useState(3.0);
  const [meldFemale, setMeldFemale] = useState(false);

  // 33. Child-Pugh & ALBI
  const [cpBili, setCpBili] = useState(2.2);
  const [cpAlb, setCpAlb] = useState(3.1);
  const [cpInr, setCpInr] = useState(1.4);
  const [cpAscites, setCpAscites] = useState<1 | 2 | 3>(1);
  const [cpEnceph, setCpEnceph] = useState<1 | 2 | 3>(1);

  // 34. BCLC Staging
  const [bclcTumors, setBclcTumors] = useState(2);
  const [bclcSize, setBclcSize] = useState(3.5);
  const [bclcVasc, setBclcVasc] = useState(false);
  const [bclcExtra, setBclcExtra] = useState(false);
  const [bclcCpClass, setBclcCpClass] = useState<'A' | 'B' | 'C'>('A');
  const [bclcEcog, setBclcEcog] = useState(0);

  // 35. FLR & KGR (PVE)
  const [flrPreVol, setFlrPreVol] = useState(280);
  const [flrPostVol, setFlrPostVol] = useState(480);
  const [flrWeight, setFlrWeight] = useState(68);
  const [flrHeight, setFlrHeight] = useState(168);
  const [flrWeeks, setFlrWeeks] = useState(4);
  const [flrBackground, setFlrBackground] = useState<'normal' | 'steatosis_chemo' | 'cirrhosis'>('normal');

  // 36. Y90 Partition Dosimetry
  const [y90Gbq, setY90Gbq] = useState(2.2);
  const [y90Lsf, setY90Lsf] = useState(7.5);
  const [y90LiverMass, setY90LiverMass] = useState(1.4);
  const [y90TnRatio, setY90TnRatio] = useState(3.5);
  const [y90TumorMass, setY90TumorMass] = useState(0.25);

  // 37. Spetzler-Martin AVM
  const [smSize, setSmSize] = useState(2.8);
  const [smEloquent, setSmEloquent] = useState(false);
  const [smDeepDrain, setSmDeepDrain] = useState(false);

  // 38. Aortic Size Index (ASI)
  const [asiDiameter, setAsiDiameter] = useState(5.4);
  const [asiWeight, setAsiWeight] = useState(72);
  const [asiHeight, setAsiHeight] = useState(172);

  // 39. Renal Resistive Index
  const [rriPsv, setRriPsv] = useState(220);
  const [rriEdv, setRriEdv] = useState(65);
  const [rriAorta, setRriAorta] = useState(60);

  // 40. Caprini VTE
  const [capAge, setCapAge] = useState<'<41' | '41-60' | '61-74' | '>=75'>('61-74');
  const [capSurg, setCapSurg] = useState(true);
  const [capMalig, setCapMalig] = useState(false);
  const [capPriorVte, setCapPriorVte] = useState(false);
  const [capCvc, setCapCvc] = useState(true);
  const [capThrombophilia, setCapThrombophilia] = useState(false);
  const [capVaricose, setCapVaricose] = useState(false);
  const [capBedridden, setCapBedridden] = useState(false);

  // 41. HAS-BLED
  const [hbHt, setHbHt] = useState(true);
  const [hbRenalLiv, setHbRenalLiv] = useState(false);
  const [hbStroke, setHbStroke] = useState(false);
  const [hbBleed, setHbBleed] = useState(false);
  const [hbInr, setHbInr] = useState(false);
  const [hbAge65, setHbAge65] = useState(true);
  const [hbDrugs, setHbDrugs] = useState(false);

  // 42. Palliative Prognostic Index (PPI)
  const [ppiPps, setPpiPps] = useState(50);
  const [ppiIntake, setPpiIntake] = useState<'normal' | 'reduced' | 'severely_reduced'>('reduced');
  const [ppiEdema, setPpiEdema] = useState(true);
  const [ppiDyspnea, setPpiDyspnea] = useState(false);
  const [ppiDelirium, setPpiDelirium] = useState(false);

  // 43. SVS WIfI
  const [wifiWound, setWifiWound] = useState<0 | 1 | 2 | 3>(2);
  const [wifiIschemia, setWifiIschemia] = useState<0 | 1 | 2 | 3>(2);
  const [wifiInfection, setWifiInfection] = useState<0 | 1 | 2 | 3>(1);

  // 44. SINS Spine
  const [sinsLoc, setSinsLoc] = useState<'junctional' | 'mobile' | 'semi_rigid' | 'rigid'>('mobile');
  const [sinsPain, setSinsPain] = useState<'mechanical' | 'occasional' | 'painless'>('mechanical');
  const [sinsBone, setSinsBone] = useState<'lytic' | 'mixed' | 'blastic'>('lytic');
  const [sinsAlign, setSinsAlign] = useState<'subluxation' | 'deformity' | 'normal'>('normal');
  const [sinsColl, setSinsColl] = useState<'gt50' | 'lt50' | 'none_gt50_involvement' | 'none'>('lt50');
  const [sinsPost, setSinsPost] = useState<'bilateral' | 'unilateral' | 'none'>('unilateral');

  // 45. Bova PE
  const [bovaRv, setBovaRv] = useState(true);
  const [bovaTrop, setBovaTrop] = useState(true);
  const [bovaHr, setBovaHr] = useState(false);
  const [bovaBp, setBovaBp] = useState(false);

  // 46. WHO-IWGE Hydatid PAIR
  const [whoStage, setWhoStage] = useState<'CE1' | 'CE2' | 'CE3a' | 'CE3b' | 'CE4' | 'CE5'>('CE1');
  const [whoDiam, setWhoDiam] = useState(6.5);
  const [whoFistula, setWhoFistula] = useState(false);

  // 47. TG18 Cholecystitis
  const [tg18Organ, setTg18Organ] = useState(false);
  const [tg18Inflam, setTg18Inflam] = useState(true);
  const [tg18Wbc, setTg18Wbc] = useState(true);
  const [tg18Duration, setTg18Duration] = useState(false);
  const [tg18HighRisk, setTg18HighRisk] = useState(true);

  // 48. Thyroid VRR
  const [thInitL, setThInitL] = useState(4.2);
  const [thInitW, setThInitW] = useState(3.1);
  const [thInitD, setThInitD] = useState(2.8);
  const [thPostL, setThPostL] = useState(2.4);
  const [thPostW, setThPostW] = useState(1.8);
  const [thPostD, setThPostD] = useState(1.5);
  const [thMonths, setThMonths] = useState(6);

  // 49. Shock Index & SASI
  const [siHr, setSiHr] = useState(115);
  const [siSbp, setSiSbp] = useState(95);
  const [siAge, setSiAge] = useState(55);
  const [siGcs, setSiGcs] = useState(14);

  // 50. Chylothorax Output & Leak
  const [chyOutput, setChyOutput] = useState(1200);
  const [chyWeight, setChyWeight] = useState(65);
  const [chyTrig, setChyTrig] = useState(240);
  const [chyChylo, setChyChylo] = useState(true);
  const [chyDays, setChyDays] = useState(4);

  // 51. Budd-Chiari Composite
  const [bcsCompEnceph, setBcsCompEnceph] = useState(false);
  const [bcsCompAscites, setBcsCompAscites] = useState(true);
  const [bcsCompBili, setBcsCompBili] = useState(2.4);
  const [bcsCompInr, setBcsCompInr] = useState(1.6);
  const [bcsCompCrl, setBcsCompCrl] = useState(0.72);
  const [bcsCompWeb, setBcsCompWeb] = useState(false);

  // 52. Michels Hepatic Anatomy
  const [michelsVariantKey, setMichelsVariantKey] = useState<string>('type1');

  // 53. MMA Branching & Dangerous Anastomoses
  const [mmaBranch, setMmaBranch] = useState<'anterior' | 'posterior' | 'both' | 'proximal'>('both');
  const [mmaDisease, setMmaDisease] = useState<'csdh' | 'meningioma' | 'davf'>('csdh');

  // 54. Scapular & Subclavian Collaterals
  const [scapOcclusion, setScapOcclusion] = useState<'pre_vertebral' | 'post_vertebral' | 'axillary' | 'brachial'>('pre_vertebral');
  const [scapStealGrade, setScapStealGrade] = useState<'grade0' | 'grade1' | 'grade2' | 'grade3'>('grade2');

  // 55. Mesenteric & SMA Collaterals
  const [mesCollateralKey, setMesCollateralKey] = useState<string>('arc_of_riolan');

  // 56. Bismuth-Corlette Biliary
  const [bismuthTypeKey, setBismuthTypeKey] = useState<string>('type2');

  // 57. Aortic Dissection Stanford/DeBakey
  const [dissectionKey, setDissectionKey] = useState<string>('stanford_b_complicated');
  const [dissectionMalperfusion, setDissectionMalperfusion] = useState(true);
  const [dissectionRefractoryPain, setDissectionRefractoryPain] = useState(false);

  // 58. PAE De Assis Anatomy
  const [paeVariantKey, setPaeVariantKey] = useState<string>('type1');

  // 59. Sarin Gastric Varices
  const [sarinKey, setSarinKey] = useState<string>('igv1');

  // 60. Forrest Peptic Ulcer
  const [forrestKey, setForrestKey] = useState<string>('ia');

  // 61. Sarteschi Varicocele
  const [varicoceleKey, setVaricoceleKey] = useState<string>('grade3');

  // 62. Cognard & Borden dAVF
  const [cognardKey, setCognardKey] = useState<string>('type3');

  // 63. Ishimaru Aortic Arch Zones
  const [ishimaruKey, setIshimaruKey] = useState<string>('zone2');

  // 64. Crawford TAAA Extent
  const [crawfordKey, setCrawfordKey] = useState<string>('extent2');

  // 65. Strasberg Biliary Injury
  const [strasbergKey, setStrasbergKey] = useState<string>('typeE2');

  // 66. WSES Solid Organ Trauma
  const [wsesKey, setWsesKey] = useState<string>('liver_grade4');

  // 67. PVTT Cheng / Vp Stage
  const [pvttKey, setPvttKey] = useState<string>('vp3');

  // 68. Graves Renal Segmental Anatomy
  const [gravesKey, setGravesKey] = useState<string>('posterior');

  // 69. Lasjaunias Craniofacial Connections
  const [lasjauniasKey, setLasjauniasKey] = useState<string>('meningo_ophthalmic');

  // 70. KDOQI Dialysis AVF Maturation / Stenosis
  const [doqiKey, setDoqiKey] = useState<string>('juxta_anastomotic');

  if (!meta) {
    return (
      <div className="p-4 rounded-xl border border-rose-200 bg-rose-50 text-xs text-rose-800">
        Calculator metadata not found for ID: {calculatorId}
      </div>
    );
  }

  // Evaluate result based on active calculator ID
  let res: GenericCalculatorResult;

  switch (calculatorId) {
    case 'rotterdam_bcs':
      res = calculateRotterdamBcs(bcsEnceph, bcsAscites, bcsBili, bcsInr);
      break;
    case 'clichy_bcs':
      res = calculateClichyScore(clichyAge, clichyBili, clichyCr, clichyAscites);
      break;
    case 'caudate_right_lobe_ratio':
      res = calculateCaudateRightLobeRatio(crlCaudate, crlRight);
      break;
    case 'fick_shunt_pavm':
      res = calculateFickShunt(fickSaO2, fickSvO2, fickSpvO2);
      break;
    case 'hvpg_portal_htn':
      res = calculateHvpg(hvpgWhvp, hvpgFhvp);
      break;
    case 'ptbd_decompression':
      res = calculatePtbdDecompression(ptbdOutput, ptbdBaseBili, ptbdCurrBili, ptbdDays);
      break;
    case 'rutherford_pad':
      res = calculateRutherford(rutherfordCat);
      break;
    case 'abi_tbi_pad':
      res = calculateAbiTbi(abiAnkle, abiBrachial, abiToe);
      break;
    case 'fontaine_pad':
      res = calculateFontaine(fontaineStage);
      break;
    case 'wells_dvt':
      res = calculateWellsDvt({
        activeCancer: wellsCancer,
        paralysisOrPlaster: wellsParalysis,
        bedriddenOrMajorSurgery: wellsBedridden,
        localizedTenderness: wellsTenderness,
        entireLegSwollen: wellsEntireLeg,
        calfSwellingOver3cm: wellsCalf,
        pittingEdemaConfined: wellsPitting,
        collateralSuperficialVeins: wellsCollaterals,
        previousDocumentedDvt: wellsPrevDvt,
        alternativeDiagnosisLikely: wellsAltDiag
      });
      break;
    case 'villalta_pts':
      res = calculateVillalta(villaltaSymptoms, villaltaSigns, villaltaUlcer);
      break;
    case 'ceap_varicose':
      res = calculateCeap(ceapClass);
      break;
    case 'geneva_pe':
      res = calculateRevisedGeneva({
        ageOver65: genAge65,
        previousDvtPe: genPrevPe,
        surgeryOrFractureWithinMonth: genSurgery,
        activeMalignancy: genMalignancy,
        unilateralLowerLimbPain: genUnilatPain,
        hemoptysis: genHemoptysis,
        heartRate: genHr,
        painOnDeepPalpationAndUnilateralEdema: genDeepPain
      });
      break;
    case 'spesi_pe':
      res = calculateSpesi({
        ageOver80: spAge80,
        historyOfCancer: spCancer,
        chronicCardiopulmonaryDisease: spCardio,
        heartRateGte110: spHr110,
        systolicBpLt100: spSbp100,
        arterialO2SatLt90: spO290
      });
      break;
    case 'fibroid_volume_uae':
      res = calculateFibroidVolume(fibL, fibW, fibD, fibPrior);
      break;
    case 'ipss_pae':
      res = calculateIpss({
        incompleteEmptying: ipssEmpty,
        frequency: ipssFreq,
        intermittency: ipssInter,
        urgency: ipssUrg,
        weakStream: ipssWeak,
        straining: ipssStrain,
        nocturia: ipssNoct,
        qualityOfLife: ipssQol
      });
      break;
    case 'prostate_volume_pae':
      res = calculateProstateVolume(pvW, pvH, pvL, pvPsa);
      break;
    case 'nascet_carotid':
      res = calculateNascetCarotid(nascetLumen, nascetDistal, nascetBulb);
      break;
    case 'aspects_stroke':
      res = calculateAspects({
        caudate: aspCaud,
        lentiform: aspLent,
        internalCapsule: aspCaps,
        insularRibbon: aspInsu,
        m1: aspM1,
        m2: aspM2,
        m3: aspM3,
        m4: aspM4,
        m5: aspM5,
        m6: aspM6
      });
      break;
    case 'nihss_short':
      res = calculateNihssShort(nihssScore);
      break;
    case 'hunt_hess_sah':
      res = calculateHuntHess(hhGrade);
      break;
    case 'modified_fisher_sah':
      res = calculateModifiedFisher(mfGrade);
      break;
    case 'markwalder_csdh':
      res = calculateMarkwalder(mwGrade);
      break;
    case 'schobinger_avm':
      res = calculateSchobinger(schobStage);
      break;
    case 'rockall_bleeding':
      res = calculateRockall({
        ageGroup: rockAge,
        shock: rockShock,
        comorbidity: rockComorb,
        endoscopicStigmata: rockStigmata
      });
      break;
    case 'gbs_bleeding':
      res = calculateGlasgowBlatchford({
        bunMgDl: gbsBun,
        hemoglobinGDl: gbsHb,
        systolicBp: gbsSbp,
        pulseBpm: gbsPulse,
        isFemale: gbsFemale,
        syncopePresent: gbsSyncope,
        melenaPresent: gbsMelena,
        liverDiseaseHistory: gbsLiver,
        cardiacFailureHistory: gbsHeart
      });
      break;
    case 'oakland_lgib':
      res = calculateOakland({
        age: oakAge,
        sex: oakSex,
        priorLgibAdmission: oakPrior,
        dreBloodPresent: oakDre,
        heartRateBpm: oakHr,
        systolicBpMmHg: oakSbp,
        hemoglobinGDl: oakHb
      });
      break;
    case 'sir_coagulation_risk':
      res = calculateSirBleedingRisk(sirCat, sirPlt, sirInr, sirAptt);
      break;
    case 'ablation_margin_a0a1':
      res = calculateAblationMargin(abTumorD, abZoneTrans, abZoneLong, abMinMargin);
      break;
    case 'womac_gae':
      res = calculateWomac(womPain, womStiff, womFunc);
      break;
    case 'cigarroa_macd': {
      const macdRes = calculateMacd(macdWeight, macdCr, macdContrast, macdEgfr);
      res = {
        valid: macdRes.valid,
        score: `${macdRes.macdMl} mL`,
        classification: macdRes.isExceeded ? 'MACD Exceeded' : macdRes.highAkiRisk ? 'High CI-AKI Risk' : 'Within Safe Limit',
        riskLevel: macdRes.alertLevel,
        recommendation: macdRes.recommendation,
        details: {
          'Maximum Allowable Dose': `${macdRes.macdMl} mL`,
          'Contrast Given': `${macdRes.contrastGivenMl} mL`,
          'Contrast / eGFR Ratio': macdRes.contrastToEgfrRatio ?? 'N/A'
        }
      };
      break;
    }
    case 'meld3_score': {
      const m3 = calculateMeld3(meldBili, meldCr, meldInr, meldNa, meldAlb, meldFemale);
      res = {
        valid: true,
        score: m3.score,
        classification: `MELD 3.0: ${m3.score} (90-Day Mortality: ${m3.mortality90Day})`,
        riskLevel: m3.score > 24 ? 'critical' : m3.score >= 19 ? 'warning' : 'safe',
        recommendation: m3.tipsRecommendation,
        details: {
          'MELD 3.0 Score': m3.score,
          '90-Day Mortality': m3.mortality90Day,
          'Gender Adjustment': meldFemale ? 'Female (+1.33)' : 'Male'
        }
      };
      break;
    }
    case 'child_pugh_albi': {
      const cp = calculateChildPugh(cpBili, cpAlb, cpInr, cpAscites, cpEnceph);
      const albi = calculateAlbi(cpBili, cpAlb);
      res = {
        valid: true,
        score: `Class ${cp.classGrade} (${cp.score}) / ALBI ${albi.grade}`,
        classification: `Child-Pugh Class ${cp.classGrade} (Score ${cp.score}) • ALBI Grade ${albi.grade} (${albi.score})`,
        riskLevel: cp.classGrade === 'C' || albi.grade === 3 ? 'critical' : cp.classGrade === 'B' || albi.grade === 2 ? 'warning' : 'safe',
        recommendation: `${cp.recommendation} ALBI Prognosis: ${albi.recommendation}`,
        details: {
          'Child-Pugh Class': `Class ${cp.classGrade} (${cp.score} points)`,
          '1-Year Survival': cp.oneYearSurvival,
          '2-Year Survival': cp.twoYearSurvival,
          'ALBI Score': albi.score,
          'ALBI Grade': `Grade ${albi.grade} (Median Survival: ${albi.medianSurvivalMonths})`
        }
      };
      break;
    }
    case 'bclc_staging': {
      const bclc = calculateBclc(bclcTumors, bclcSize, bclcVasc, bclcExtra, bclcCpClass, bclcEcog);
      res = {
        valid: true,
        score: `Stage ${bclc.stage}`,
        classification: `BCLC Stage ${bclc.stage}: ${bclc.stageName}`,
        riskLevel: bclc.stage === 'D' ? 'critical' : bclc.stage === 'C' ? 'warning' : 'safe',
        recommendation: `${bclc.treatment} ${bclc.taceCandidate ? 'Eligible for TACE / Loco-regional therapy.' : 'Standard TACE not recommended.'}`,
        details: {
          'BCLC Stage': bclc.stage,
          'Stage Category': bclc.stageName,
          'TACE Candidate': bclc.taceCandidate ? 'Yes' : 'No',
          'Recommended Strategy': bclc.treatment
        }
      };
      break;
    }
    case 'flr_kgr_pve':
      res = calculateFlrKgr(flrPreVol, flrPostVol, flrWeight, flrHeight, flrWeeks, flrBackground);
      break;
    case 'y90_partition_dosimetry':
      res = calculateY90Dosimetry(y90Gbq, y90Lsf, y90LiverMass, y90TnRatio, y90TumorMass);
      break;
    case 'spetzler_martin_avm':
      res = calculateSpetzlerMartin(smSize, smEloquent, smDeepDrain);
      break;
    case 'aortic_size_index_asi':
      res = calculateAorticSizeIndex(asiDiameter, asiWeight, asiHeight);
      break;
    case 'renal_resistive_index':
      res = calculateRenalResistiveIndex(rriPsv, rriEdv, rriAorta);
      break;
    case 'caprini_vte_score':
      res = calculateCapriniVte(capAge, capSurg, capMalig, capPriorVte, capCvc, capThrombophilia, capVaricose, capBedridden);
      break;
    case 'has_bled_score':
      res = calculateHasBled(hbHt, hbRenalLiv, hbStroke, hbBleed, hbInr, hbAge65, hbDrugs);
      break;
    case 'palliative_prognostic_index':
      res = calculatePpiScore(ppiPps, ppiIntake, ppiEdema, ppiDyspnea, ppiDelirium);
      break;
    case 'svs_wifi_classification':
      res = calculateSvsWifi(wifiWound, wifiIschemia, wifiInfection);
      break;
    case 'sins_spine_instability':
      res = calculateSinsScore(sinsLoc, sinsPain, sinsBone, sinsAlign, sinsColl, sinsPost);
      break;
    case 'bova_pe_score':
      res = calculateBovaPe(bovaRv, bovaTrop, bovaHr, bovaBp);
      break;
    case 'who_iwge_hydatid':
      res = calculateWhoIwgeHydatid(whoStage, whoDiam, whoFistula);
      break;
    case 'tg18_cholecystitis':
      res = calculateTg18Cholecystitis(tg18Organ, tg18Inflam, tg18Wbc, tg18Duration, tg18HighRisk);
      break;
    case 'thyroid_vrr_volume':
      res = calculateThyroidVrr(thInitL, thInitW, thInitD, thPostL, thPostW, thPostD, thMonths);
      break;
    case 'shock_index_hemorrhage':
      res = calculateShockIndex(siHr, siSbp, siAge, siGcs);
      break;
    case 'chylothorax_lymphatic_leak':
      res = calculateChylothoraxLeak(chyOutput, chyWeight, chyTrig, chyChylo, chyDays);
      break;
    case 'budd_chiari_composite_risk':
      res = calculateBuddChiariCompositeRisk(bcsCompEnceph, bcsCompAscites, bcsCompBili, bcsCompInr, bcsCompCrl, bcsCompWeb);
      break;
    case 'michels_hepatic_anatomy': {
      const hRes = evaluateHepaticClassification(michelsVariantKey);
      res = {
        valid: true,
        score: `Michels ${hRes.variant.michels}`,
        classification: `${hRes.variant.name} (${hRes.variant.frequency})`,
        riskLevel: hRes.variant.michels === 'Type I' ? 'safe' : hRes.variant.michels === 'Type IX' || hRes.variant.michels === 'Type X' || hRes.variant.michels === 'Type II' ? 'critical' : 'warning',
        recommendation: `${hRes.variant.description} | Non-Target Hazard: ${hRes.variant.nonTargetRisk}`,
        details: {
          'Michels Class': hRes.variant.michels,
          'Hiatt Class': hRes.variant.hiatt,
          'Population Frequency': hRes.variant.frequency,
          'Recommended Hardware': hRes.variant.recommendedHardware,
          'Non-Target Warning': hRes.variant.nonTargetRisk
        }
      };
      break;
    }
    case 'mma_branching_csdh': {
      const mRes = evaluateMmaAnatomy(mmaBranch, mmaDisease);
      const hasCritical = mRes.identifiedRisks.some(r => r.severity === 'critical');
      res = {
        valid: true,
        score: `${mRes.identifiedRisks.length} Anastomoses`,
        classification: `${mRes.selectedBranch.toUpperCase()} Branch (${mRes.identifiedRisks.length} at-risk vessels)`,
        riskLevel: hasCritical ? 'critical' : 'warning',
        recommendation: mRes.recommendation,
        details: {
          'Target Branch': mRes.selectedBranch,
          'Primary Risk': mRes.identifiedRisks.map(r => r.name).join('; ') || 'None identified',
          'Hardware Strategy': mRes.recommendedHardware
        }
      };
      break;
    }
    case 'scapular_subclavian_collaterals': {
      const sRes = evaluateScapularSubclavianCollaterals(scapOcclusion, scapStealGrade);
      res = {
        valid: true,
        score: sRes.stealStage,
        classification: `Subclavian ${sRes.stealStage} (${sRes.selectedCondition})`,
        riskLevel: sRes.stealStage === 'Grade III (Permanent Retrograde)' ? 'critical' : sRes.stealStage !== 'None' ? 'warning' : 'safe',
        recommendation: sRes.recommendation,
        details: {
          'Occlusion Site': sRes.selectedCondition,
          'Steal Severity': sRes.stealStage,
          'Dominant Collaterals': sRes.dominantPathways.map(p => p.name).join(' | '),
          'Hardware Choice': sRes.recommendedHardware
        }
      };
      break;
    }
    case 'mesenteric_collaterals_sma': {
      const mesRes = evaluateMesentericCollateral(mesCollateralKey);
      res = {
        valid: true,
        score: mesRes.collateral.name.split('(')[0].trim(),
        classification: `${mesRes.collateral.name}`,
        riskLevel: mesRes.collateral.id === 'arc_of_riolan' || mesRes.collateral.id === 'arc_of_buhler' ? 'critical' : 'warning',
        recommendation: `${mesRes.clinicalStrategy} ⚠️ WARNING: ${mesRes.collateral.embolizationAlert}`,
        details: {
          'Connecting Arcade': mesRes.collateral.connectingVessels,
          'Flow Direction': mesRes.collateral.flowDirection,
          'Embolization Alert': mesRes.collateral.embolizationAlert,
          'Recommended Catheter/Wire': mesRes.recommendedHardware
        }
      };
      break;
    }
    case 'bismuth_corlette_biliary': {
      const bRes = evaluateBismuthCorlette(bismuthTypeKey);
      res = {
        valid: true,
        score: bRes.typeData.type,
        classification: `Bismuth ${bRes.typeData.type} - ${bRes.typeData.name}`,
        riskLevel: bRes.typeData.irComplexity === 'Very High' || bRes.typeData.irComplexity === 'High' ? 'critical' : 'warning',
        recommendation: bRes.recommendation,
        details: {
          'Stricture Level': bRes.typeData.anatomicLevel,
          'Drainage Strategy': bRes.typeData.drainageStrategy,
          'Stenting Technique': bRes.typeData.stentingTechnique,
          'Complexity Tier': bRes.typeData.irComplexity,
          'Access Route': bRes.typeData.approachAccess
        }
      };
      break;
    }
    case 'aortic_dissection_stanford_debakey': {
      const aRes = evaluateAorticDissection(dissectionKey, dissectionMalperfusion, dissectionRefractoryPain);
      res = {
        valid: true,
        score: `${aRes.dissection.stanford} / DeBakey ${aRes.dissection.debakey}`,
        classification: `${aRes.dissection.name}`,
        riskLevel: aRes.dissection.stanford === 'Type A' || aRes.isComplicated ? 'critical' : 'warning',
        recommendation: aRes.recommendation,
        details: {
          'Stanford Class': aRes.dissection.stanford,
          'DeBakey Class': aRes.dissection.debakey,
          'Entry Tear': aRes.dissection.entryTearLocation,
          'IR Eligibility': aRes.dissection.irEligibility,
          'Landing Zone': aRes.dissection.tevarLandingZone,
          'Recommended Hardware': aRes.recommendedHardware
        }
      };
      break;
    }
    case 'pae_de_assis_anatomy': {
      const pRes = evaluatePaeClassification(paeVariantKey);
      res = {
        valid: true,
        score: pRes.typeData.type,
        classification: `De Assis ${pRes.typeData.type} - ${pRes.typeData.name} (${pRes.typeData.frequency})`,
        riskLevel: pRes.typeData.type === 'Type IV' || pRes.typeData.type === 'Type V' ? 'critical' : 'warning',
        recommendation: `${pRes.typeData.description} ⚠️ ALERT: ${pRes.typeData.embolizationAlert}`,
        details: {
          'De Assis Type': pRes.typeData.type,
          'Arterial Origin': pRes.typeData.origin,
          'Population Frequency': pRes.typeData.frequency,
          'Safety Guardrail': pRes.typeData.embolizationAlert
        }
      };
      break;
    }
    case 'sarin_gastric_varices': {
      const sRes = evaluateSarinClassification(sarinKey);
      res = {
        valid: true,
        score: sRes.typeData.type,
        classification: `Sarin ${sRes.typeData.type} (${sRes.typeData.name})`,
        riskLevel: sRes.typeData.type === 'igv1' || sRes.typeData.type === 'gov2' ? 'critical' : 'warning',
        recommendation: `${sRes.typeData.location} | Bleeding Risk: ${sRes.typeData.bleedRisk} | Recommended IR Strategy: ${sRes.typeData.intervention}`,
        details: {
          'Sarin Class': sRes.typeData.type,
          'Anatomical Location': sRes.typeData.location,
          'Hemorrhage Hazard': sRes.typeData.bleedRisk,
          'Interventional Triage': sRes.typeData.intervention
        }
      };
      break;
    }
    case 'forrest_peptic_ulcer': {
      const fRes = evaluateForrestClassification(forrestKey);
      res = {
        valid: true,
        score: fRes.typeData.type,
        classification: `${fRes.typeData.name}`,
        riskLevel: fRes.typeData.type === 'ia' || fRes.typeData.type === 'ib' ? 'critical' : fRes.typeData.type === 'iia' || fRes.typeData.type === 'iib' ? 'warning' : 'safe',
        recommendation: `${fRes.typeData.description} | Rebleeding Risk: ${fRes.typeData.rebleedRisk} | IR Role: ${fRes.typeData.irIndication}`,
        details: {
          'Forrest Stage': fRes.typeData.type,
          'Endoscopic Stigmata': fRes.typeData.description,
          'Rebleeding Risk': fRes.typeData.rebleedRisk,
          'Transcatheter Embolization (TAE)': fRes.typeData.irIndication
        }
      };
      break;
    }
    case 'sarteschi_varicocele_grading': {
      const vRes = evaluateVaricoceleClassification(varicoceleKey);
      res = {
        valid: true,
        score: vRes.typeData.grade,
        classification: `Varicocele ${vRes.typeData.grade} (${vRes.typeData.name})`,
        riskLevel: vRes.typeData.embolizationCandidate ? 'warning' : 'safe',
        recommendation: `${vRes.typeData.clinicalExam} | Doppler: ${vRes.typeData.dopplerCriteria} | Embolization Candidate: ${vRes.typeData.embolizationCandidate ? 'YES (Proceed to Venous Coiling / Foam Sclerotherapy)' : 'NO (Conservative / Observation)'}`,
        details: {
          'Sarteschi Grade': vRes.typeData.grade,
          'Physical Exam': vRes.typeData.clinicalExam,
          'Duplex Reflux Criteria': vRes.typeData.dopplerCriteria,
          'Embolization Indicated': vRes.typeData.embolizationCandidate ? 'True' : 'False'
        }
      };
      break;
    }
    case 'cognard_borden_davf': {
      const cRes = evaluateCognardDavf(cognardKey);
      res = {
        valid: true,
        score: cRes.typeData.type,
        classification: `${cRes.typeData.type} (${cRes.typeData.name})`,
        riskLevel: cRes.corticalReflux ? 'critical' : 'safe',
        recommendation: `${cRes.typeData.venousDrainage} | Annual Hemorrhage Risk: ${cRes.hemorrhageRisk} | Management: ${cRes.treatmentStrategy}`,
        details: {
          'Classification': cRes.typeData.type,
          'Venous Drainage': cRes.typeData.venousDrainage,
          'Cortical Reflux': cRes.corticalReflux ? 'Present (Aggressive High-Risk)' : 'Absent (Benign)',
          'Hemorrhage Risk': cRes.hemorrhageRisk,
          'Endovascular Strategy': cRes.treatmentStrategy
        }
      };
      break;
    }
    case 'ishimaru_aortic_zones': {
      const iRes = evaluateIshimaruZone(ishimaruKey);
      res = {
        valid: true,
        score: iRes.typeData.zone,
        classification: `${iRes.typeData.zone}: ${iRes.typeData.name}`,
        riskLevel: iRes.typeData.zone === 'Zone 0' || iRes.typeData.zone === 'Zone 1' ? 'critical' : iRes.typeData.zone === 'Zone 2' ? 'warning' : 'safe',
        recommendation: `Boundaries: ${iRes.typeData.proximalBoundary} to ${iRes.typeData.distalBoundary} | Surgical Debranching: ${iRes.debranching} | TEVAR Feasibility: ${iRes.feasibility}`,
        details: {
          'Landing Zone': iRes.typeData.zone,
          'Zone Name': iRes.typeData.name,
          'Debranching Requirement': iRes.debranching,
          'TEVAR Feasibility': iRes.feasibility
        }
      };
      break;
    }
    case 'crawford_taaa_extent': {
      const crRes = evaluateCrawfordTaaa(crawfordKey);
      res = {
        valid: true,
        score: crRes.typeData.extent,
        classification: `${crRes.typeData.extent} (${crRes.typeData.name})`,
        riskLevel: crRes.typeData.extent === 'Crawford Extent II' || crRes.typeData.extent === 'Crawford Extent III' ? 'critical' : 'warning',
        recommendation: `Aneurysmal Span: ${crRes.typeData.proximalLimit} down to ${crRes.typeData.distalLimit} | Paraplegia / SCI Risk: ${crRes.paraplegiaRisk} | Endovascular Technique: ${crRes.technique}`,
        details: {
          'TAAA Extent': crRes.typeData.extent,
          'Proximal Limit': crRes.typeData.proximalLimit,
          'Distal Limit': crRes.typeData.distalLimit,
          'Spinal Cord Ischemia Risk': crRes.paraplegiaRisk,
          'Branching Technique': crRes.technique
        }
      };
      break;
    }
    case 'strasberg_biliary_injury': {
      const sRes = evaluateStrasbergBiliaryInjury(strasbergKey);
      res = {
        valid: true,
        score: sRes.typeData.type,
        classification: `${sRes.typeData.type} (${sRes.typeData.name})`,
        riskLevel: sRes.typeData.type.startsWith('Strasberg Type E') ? 'critical' : 'warning',
        recommendation: `Anatomic Lesion: ${sRes.typeData.anatomicLesion} | Clinical Presentation: ${sRes.presentation} | IR Management: ${sRes.irManagement}`,
        details: {
          'Strasberg/Bismuth Type': sRes.typeData.type,
          'Injury Morphology': sRes.typeData.anatomicLesion,
          'Clinical Picture': sRes.presentation,
          'IR Interventional Action': sRes.irManagement
        }
      };
      break;
    }
    case 'wses_solid_organ_trauma': {
      const wRes = evaluateWsesOrganInjury(wsesKey);
      res = {
        valid: true,
        score: `${wRes.organ} ${wRes.grade}`,
        classification: `${wRes.organ} Trauma - ${wRes.grade}`,
        riskLevel: wRes.grade === 'Grade IV' || wRes.grade === 'Grade V' ? 'critical' : wRes.grade === 'Grade III' ? 'warning' : 'safe',
        recommendation: `${wRes.summary} | Vascular Injury: ${wRes.vascularLesion} | WSES/AAST Guideline: ${wRes.guideline}`,
        details: {
          'Target Organ': wRes.organ,
          'Injury Grade': wRes.grade,
          'Vascular Blush/Disruption': wRes.vascularLesion,
          'Management Strategy': wRes.guideline
        }
      };
      break;
    }
    case 'pvtt_cheng_vp_stage': {
      const pRes = evaluatePvttVpStage(pvttKey);
      res = {
        valid: true,
        score: pRes.vpStage,
        classification: `PVTT ${pRes.vpStage}`,
        riskLevel: pRes.vpStage.startsWith('Vp3') || pRes.vpStage.startsWith('Vp4') ? 'critical' : 'warning',
        recommendation: `Anatomic Invasion: ${pRes.summary} | Untreated Survival: ${pRes.prognosis} | Interventional Oncology Options: ${pRes.treatment}`,
        details: {
          'PVTT Stage': pRes.vpStage,
          'Median Survival (Untreated)': pRes.prognosis,
          'IR Oncologic Therapy': pRes.treatment
        }
      };
      break;
    }
    case 'graves_renal_segmental': {
      const gRes = evaluateGravesRenalSegment(gravesKey);
      res = {
        valid: true,
        score: gRes.segment,
        classification: `Graves Renal Anatomy: ${gRes.segment}`,
        riskLevel: 'safe',
        recommendation: `Parenchymal Territory: ${gRes.summary} | Interventional Landmark: ${gRes.note}`,
        details: {
          'Segmental Branch': gRes.segment,
          'Parenchymal Distribution': gRes.summary,
          'Clinical / Embolization Note': gRes.note
        }
      };
      break;
    }
    case 'lasjaunias_dangerous_connections': {
      const lRes = evaluateLasjauniasConnection(lasjauniasKey);
      res = {
        valid: true,
        score: lRes.pathway,
        classification: `Lasjaunias dangerous connection: ${lRes.name}`,
        riskLevel: 'critical',
        recommendation: `Dangerous Connection: ${lRes.summary} | Stroke/Neurological Risk: ${lRes.risk} | Mandatory IR Safety Rule: ${lRes.safetyRule}`,
        details: {
          'Collateral Pathway': lRes.pathway,
          'Target Anastomosis': lRes.name,
          'Neurological Hazard': lRes.risk,
          'Angiographic Rule': lRes.safetyRule
        }
      };
      break;
    }
    case 'doqi_avf_stenosis_maturation': {
      const dRes = evaluateDoqiAvfStenosis(doqiKey);
      res = {
        valid: true,
        score: dRes.parameter,
        classification: `KDOQI AVF Parameter: ${dRes.parameter}`,
        riskLevel: 'warning',
        recommendation: `Criteria: ${dRes.summary} | Stenosis Threshold: ${dRes.stenosisThreshold} | Interventional Trigger: ${dRes.intervention}`,
        details: {
          'Parameter': dRes.parameter,
          'Benchmark': dRes.summary,
          'Stenosis Criterion': dRes.stenosisThreshold,
          'Actionable Protocol': dRes.intervention
        }
      };
      break;
    }
    default:
      res = {
        valid: false,
        score: 0,
        classification: 'Unrecognized calculator',
        riskLevel: 'safe',
        recommendation: 'Calculator is being initialized.'
      };
  }

  const badgeColor =
    res.riskLevel === 'critical'
      ? 'bg-rose-50 border-rose-300 text-rose-700'
      : res.riskLevel === 'warning'
      ? 'bg-amber-50 border-amber-300 text-amber-800'
      : 'bg-emerald-50 border-emerald-300 text-emerald-800';

  return (
    <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs space-y-4">
      {/* Title & Guidelines Header */}
      <div className="flex items-start justify-between flex-wrap gap-2 pb-3 border-b border-[#DADCE0]">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-1.5 rounded-lg bg-[#E8F0FE] text-[#1A73E8]">
              <Calculator className="w-4 h-4" />
            </span>
            <h3 className="text-sm font-bold text-[#202124]">{meta.name}</h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F1F3F4] text-[#5F6368] border border-[#DADCE0]">
              {meta.system}
            </span>
          </div>
          <p className="text-xs text-[#5F6368] mt-1 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#1A73E8]" />
            <span><b>Guideline:</b> {meta.guidelineAuthority}</span>
            <span className="text-[#DADCE0]">•</span>
            <span className="font-mono text-[11px] text-[#3C4043]">{meta.formulaDescription}</span>
          </p>
        </div>

        {showProtocolLink && (
          <button
            onClick={() => router.push('/dashboard/protocols')}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-[#DADCE0] bg-white hover:bg-[#F8F9FA] text-[11px] font-semibold text-[#1A73E8] transition shadow-xs"
            title={`View Protocol: ${meta.protocolName}`}
          >
            <span>Protocol: {meta.protocolName}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Dynamic Input Form */}
      <div className="space-y-3">
        {calculatorId === 'rotterdam_bcs' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={bcsBili}
                onChange={(e) => setBcsBili(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">PT / INR</label>
              <input
                type="number"
                step="0.1"
                value={bcsInr}
                onChange={(e) => setBcsInr(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="bcsEnceph"
                checked={bcsEnceph}
                onChange={(e) => setBcsEnceph(e.target.checked)}
                className="rounded border-[#DADCE0] text-[#1A73E8]"
              />
              <label htmlFor="bcsEnceph" className="text-xs text-[#202124] font-medium cursor-pointer">
                Encephalopathy
              </label>
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="bcsAscites"
                checked={bcsAscites}
                onChange={(e) => setBcsAscites(e.target.checked)}
                className="rounded border-[#DADCE0] text-[#1A73E8]"
              />
              <label htmlFor="bcsAscites" className="text-xs text-[#202124] font-medium cursor-pointer">
                Severe Ascites
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'clichy_bcs' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Age (Years)</label>
              <input
                type="number"
                value={clichyAge}
                onChange={(e) => setClichyAge(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={clichyBili}
                onChange={(e) => setClichyBili(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Creatinine (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={clichyCr}
                onChange={(e) => setClichyCr(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Ascites Grade</label>
              <select
                value={clichyAscites}
                onChange={(e) => setClichyAscites(e.target.value as any)}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs"
              >
                <option value="none">None (0)</option>
                <option value="controlled">Controlled (1)</option>
                <option value="refractory">Refractory (2)</option>
              </select>
            </div>
          </div>
        )}

        {calculatorId === 'caudate_right_lobe_ratio' && (
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Caudate Lobe Transverse Width (mm)</label>
              <input
                type="number"
                value={crlCaudate}
                onChange={(e) => setCrlCaudate(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Right Lobe Transverse Width (mm)</label>
              <input
                type="number"
                value={crlRight}
                onChange={(e) => setCrlRight(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        )}

        {calculatorId === 'fick_shunt_pavm' && (
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Arterial O2 Saturation SaO2 (%)</label>
              <input
                type="number"
                value={fickSaO2}
                onChange={(e) => setFickSaO2(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Mixed Venous Sat SvO2 (%)</label>
              <input
                type="number"
                value={fickSvO2}
                onChange={(e) => setFickSvO2(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Pulm Vein Sat SpvO2 (%)</label>
              <input
                type="number"
                value={fickSpvO2}
                onChange={(e) => setFickSpvO2(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        )}

        {calculatorId === 'hvpg_portal_htn' && (
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Wedged Hepatic Venous Pressure WHVP (mmHg)</label>
              <input
                type="number"
                value={hvpgWhvp}
                onChange={(e) => setHvpgWhvp(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Free Hepatic Venous Pressure FHVP / IVC (mmHg)</label>
              <input
                type="number"
                value={hvpgFhvp}
                onChange={(e) => setHvpgFhvp(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        )}

        {calculatorId === 'ptbd_decompression' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Daily Bile Output (mL/24h)</label>
              <input
                type="number"
                value={ptbdOutput}
                onChange={(e) => setPtbdOutput(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Baseline Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={ptbdBaseBili}
                onChange={(e) => setPtbdBaseBili(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Current Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={ptbdCurrBili}
                onChange={(e) => setPtbdCurrBili(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Days Post-PTBD</label>
              <input
                type="number"
                value={ptbdDays}
                onChange={(e) => setPtbdDays(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        )}

        {calculatorId === 'rutherford_pad' && (
          <div className="text-xs">
            <label className="text-[#5F6368] block mb-1 font-medium">Select Clinical Presentation Category (0-6)</label>
            <select
              value={rutherfordCat}
              onChange={(e) => setRutherfordCat(Number(e.target.value))}
              className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs"
            >
              <option value={0}>Category 0: Asymptomatic; no hemodynamically significant occlusive disease</option>
              <option value={1}>Category 1: Mild claudication; completes treadmill exercise</option>
              <option value={2}>Category 2: Moderate claudication; onset at intermediate distance</option>
              <option value={3}>Category 3: Severe claudication; cannot walk &gt; 100 meters</option>
              <option value={4}>Category 4: Ischemic rest pain; pain in forefoot aggravated by elevation</option>
              <option value={5}>Category 5: Minor tissue loss; ischemic ulceration / focal gangrene</option>
              <option value={6}>Category 6: Major tissue loss; extensive gangrene above transmetatarsal</option>
            </select>
          </div>
        )}

        {calculatorId === 'abi_tbi_pad' && (
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Ankle Systolic BP (mmHg)</label>
              <input
                type="number"
                value={abiAnkle}
                onChange={(e) => setAbiAnkle(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Brachial Systolic BP (mmHg)</label>
              <input
                type="number"
                value={abiBrachial}
                onChange={(e) => setAbiBrachial(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Great Toe BP (mmHg, Opt)</label>
              <input
                type="number"
                value={abiToe}
                onChange={(e) => setAbiToe(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        )}

        {calculatorId === 'fontaine_pad' && (
          <div className="text-xs">
            <label className="text-[#5F6368] block mb-1 font-medium">Fontaine Clinical Stage</label>
            <select
              value={fontaineStage}
              onChange={(e) => setFontaineStage(e.target.value as any)}
              className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs"
            >
              <option value="I">Stage I: Asymptomatic / subclinical stenosis</option>
              <option value="IIa">Stage IIa: Mild claudication (walking distance &gt; 200 meters)</option>
              <option value="IIb">Stage IIb: Severe claudication (walking distance &lt; 200 meters)</option>
              <option value="III">Stage III: Ischemic rest pain (forefoot pain at night)</option>
              <option value="IV">Stage IV: Trophic ulcers or gangrene</option>
            </select>
          </div>
        )}

        {calculatorId === 'wells_dvt' && (
          <div className="grid grid-cols-2 gap-2 text-xs">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={wellsCancer} onChange={(e) => setWellsCancer(e.target.checked)} />
              <span>Active cancer (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={wellsParalysis} onChange={(e) => setWellsParalysis(e.target.checked)} />
              <span>Paralysis / plaster cast (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={wellsBedridden} onChange={(e) => setWellsBedridden(e.target.checked)} />
              <span>Bedridden &gt;3d / Major surgery (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={wellsTenderness} onChange={(e) => setWellsTenderness(e.target.checked)} />
              <span>Deep vein tenderness (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={wellsEntireLeg} onChange={(e) => setWellsEntireLeg(e.target.checked)} />
              <span>Entire leg swollen (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={wellsCalf} onChange={(e) => setWellsCalf(e.target.checked)} />
              <span>Calf swelling &gt;3 cm (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={wellsPitting} onChange={(e) => setWellsPitting(e.target.checked)} />
              <span>Pitting edema confined (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={wellsCollaterals} onChange={(e) => setWellsCollaterals(e.target.checked)} />
              <span>Collateral veins (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={wellsPrevDvt} onChange={(e) => setWellsPrevDvt(e.target.checked)} />
              <span>Previous DVT (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer text-amber-700 font-semibold">
              <input type="checkbox" checked={wellsAltDiag} onChange={(e) => setWellsAltDiag(e.target.checked)} />
              <span>Alternative diagnosis as likely (-2)</span>
            </label>
          </div>
        )}

        {calculatorId === 'villalta_pts' && (
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Symptoms Subscore (0-15)</label>
              <input
                type="number"
                min="0"
                max="15"
                value={villaltaSymptoms}
                onChange={(e) => setVillaltaSymptoms(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Signs Subscore (0-18)</label>
              <input
                type="number"
                min="0"
                max="18"
                value={villaltaSigns}
                onChange={(e) => setVillaltaSigns(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="vUlcer"
                checked={villaltaUlcer}
                onChange={(e) => setVillaltaUlcer(e.target.checked)}
              />
              <label htmlFor="vUlcer" className="font-semibold text-rose-700 cursor-pointer">
                Active Venous Ulcer
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'ceap_varicose' && (
          <div className="text-xs">
            <label className="text-[#5F6368] block mb-1 font-medium">Select CEAP Clinical Class</label>
            <select
              value={ceapClass}
              onChange={(e) => setCeapClass(e.target.value as any)}
              className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs"
            >
              <option value="C0">C0: No visible or palpable signs of venous disease</option>
              <option value="C1">C1: Telangiectasias or reticular veins (&lt; 3 mm)</option>
              <option value="C2">C2: Varicose veins (≥ 3 mm)</option>
              <option value="C3">C3: Edema of venous origin</option>
              <option value="C4a">C4a: Pigmentation or eczema</option>
              <option value="C4b">C4b: Lipodermatosclerosis or atrophie blanche</option>
              <option value="C5">C5: Healed venous ulcer</option>
              <option value="C6">C6: Active venous ulcer</option>
            </select>
          </div>
        )}

        {calculatorId === 'geneva_pe' && (
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={genAge65} onChange={(e) => setGenAge65(e.target.checked)} />
                <span>Age &gt; 65 (+1)</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={genPrevPe} onChange={(e) => setGenPrevPe(e.target.checked)} />
                <span>Previous DVT or PE (+3)</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={genSurgery} onChange={(e) => setGenSurgery(e.target.checked)} />
                <span>Surgery/Fracture in 1 month (+2)</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={genMalignancy} onChange={(e) => setGenMalignancy(e.target.checked)} />
                <span>Active Malignancy (+2)</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={genUnilatPain} onChange={(e) => setGenUnilatPain(e.target.checked)} />
                <span>Unilateral limb pain (+3)</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={genHemoptysis} onChange={(e) => setGenHemoptysis(e.target.checked)} />
                <span>Hemoptysis (+2)</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={genDeepPain} onChange={(e) => setGenDeepPain(e.target.checked)} />
                <span>Deep vein palpation pain (+4)</span>
              </label>
            </div>
            <div className="w-48">
              <label className="text-[#5F6368] block mb-1 font-medium">Heart Rate (bpm)</label>
              <input
                type="number"
                value={genHr}
                onChange={(e) => setGenHr(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        )}

        {calculatorId === 'spesi_pe' && (
          <div className="grid grid-cols-2 gap-2 text-xs">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={spAge80} onChange={(e) => setSpAge80(e.target.checked)} />
              <span>Age &gt; 80 years (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={spCancer} onChange={(e) => setSpCancer(e.target.checked)} />
              <span>History of cancer (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={spCardio} onChange={(e) => setSpCardio(e.target.checked)} />
              <span>Chronic cardiopulmonary disease (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={spHr110} onChange={(e) => setSpHr110(e.target.checked)} />
              <span>Heart rate ≥ 110 bpm (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={spSbp100} onChange={(e) => setSpSbp100(e.target.checked)} />
              <span>Systolic BP &lt; 100 mmHg (+1)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={spO290} onChange={(e) => setSpO290(e.target.checked)} />
              <span>Arterial SaO2 &lt; 90% (+1)</span>
            </label>
          </div>
        )}

        {calculatorId === 'fibroid_volume_uae' && (
          <div className="grid grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Length (cm)</label>
              <input
                type="number"
                step="0.1"
                value={fibL}
                onChange={(e) => setFibL(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Width (cm)</label>
              <input
                type="number"
                step="0.1"
                value={fibW}
                onChange={(e) => setFibW(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Depth (cm)</label>
              <input
                type="number"
                step="0.1"
                value={fibD}
                onChange={(e) => setFibD(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Prior Vol (cm³, Opt)</label>
              <input
                type="number"
                value={fibPrior}
                onChange={(e) => setFibPrior(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        )}

        {calculatorId === 'ipss_pae' && (
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div>
                <label className="text-[#5F6368] block mb-1">Incomplete Empty (0-5)</label>
                <input type="number" min="0" max="5" value={ipssEmpty} onChange={(e) => setIpssEmpty(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Frequency (0-5)</label>
                <input type="number" min="0" max="5" value={ipssFreq} onChange={(e) => setIpssFreq(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Intermittency (0-5)</label>
                <input type="number" min="0" max="5" value={ipssInter} onChange={(e) => setIpssInter(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Urgency (0-5)</label>
                <input type="number" min="0" max="5" value={ipssUrg} onChange={(e) => setIpssUrg(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Weak Stream (0-5)</label>
                <input type="number" min="0" max="5" value={ipssWeak} onChange={(e) => setIpssWeak(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Straining (0-5)</label>
                <input type="number" min="0" max="5" value={ipssStrain} onChange={(e) => setIpssStrain(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Nocturia (0-5)</label>
                <input type="number" min="0" max="5" value={ipssNoct} onChange={(e) => setIpssNoct(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-semibold text-[#1A73E8]">QoL Index (0-6)</label>
                <input type="number" min="0" max="6" value={ipssQol} onChange={(e) => setIpssQol(Number(e.target.value))} className="w-full px-2 py-1 border border-[#1A73E8] rounded font-mono font-bold" />
              </div>
            </div>
          </div>
        )}

        {calculatorId === 'prostate_volume_pae' && (
          <div className="grid grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Width (cm)</label>
              <input type="number" step="0.1" value={pvW} onChange={(e) => setPvW(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Height (cm)</label>
              <input type="number" step="0.1" value={pvH} onChange={(e) => setPvH(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Length (cm)</label>
              <input type="number" step="0.1" value={pvL} onChange={(e) => setPvL(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Serum PSA (ng/mL)</label>
              <input type="number" step="0.1" value={pvPsa} onChange={(e) => setPvPsa(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
          </div>
        )}

        {calculatorId === 'nascet_carotid' && (
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Residual Lumen (mm)</label>
              <input type="number" step="0.1" value={nascetLumen} onChange={(e) => setNascetLumen(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Distal Normal ICA (mm)</label>
              <input type="number" step="0.1" value={nascetDistal} onChange={(e) => setNascetDistal(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Original Bulb (mm, Opt)</label>
              <input type="number" step="0.1" value={nascetBulb} onChange={(e) => setNascetBulb(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
          </div>
        )}

        {calculatorId === 'aspects_stroke' && (
          <div className="space-y-1 text-xs">
            <span className="text-[#5F6368] block font-medium">Select Hypodense MCA Regions (Deducts 1 pt each from 10):</span>
            <div className="grid grid-cols-5 gap-2 pt-1">
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspCaud} onChange={(e) => setAspCaud(e.target.checked)} /><span>Caudate</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspLent} onChange={(e) => setAspLent(e.target.checked)} /><span>Lentiform</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspCaps} onChange={(e) => setAspCaps(e.target.checked)} /><span>Int. Capsule</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspInsu} onChange={(e) => setAspInsu(e.target.checked)} /><span>Insular Ribbon</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspM1} onChange={(e) => setAspM1(e.target.checked)} /><span>M1 Cortex</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspM2} onChange={(e) => setAspM2(e.target.checked)} /><span>M2 Cortex</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspM3} onChange={(e) => setAspM3(e.target.checked)} /><span>M3 Cortex</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspM4} onChange={(e) => setAspM4(e.target.checked)} /><span>M4 Cortex</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspM5} onChange={(e) => setAspM5(e.target.checked)} /><span>M5 Cortex</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={aspM6} onChange={(e) => setAspM6(e.target.checked)} /><span>M6 Cortex</span></label>
            </div>
          </div>
        )}

        {calculatorId === 'nihss_short' && (
          <div className="text-xs">
            <label className="text-[#5F6368] block mb-1 font-medium">NIHSS Score (0 to 42 points)</label>
            <div className="flex items-center gap-3">
              <input type="range" min="0" max="42" value={nihssScore} onChange={(e) => setNihssScore(Number(e.target.value))} className="w-full" />
              <span className="font-mono font-bold text-base text-[#1A73E8] w-10 text-right">{nihssScore}</span>
            </div>
          </div>
        )}

        {calculatorId === 'hunt_hess_sah' && (
          <div className="text-xs">
            <label className="text-[#5F6368] block mb-1 font-medium">Select Clinical Severity Grade</label>
            <select value={hhGrade} onChange={(e) => setHhGrade(Number(e.target.value))} className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg">
              <option value={1}>Grade 1: Asymptomatic or mild headache, slight nuchal rigidity</option>
              <option value={2}>Grade 2: Moderate/severe headache, stiff neck, cranial nerve palsy</option>
              <option value={3}>Grade 3: Drowsiness, confusion, or mild focal deficit</option>
              <option value={4}>Grade 4: Stupor, moderate to severe hemiparesis</option>
              <option value={5}>Grade 5: Deep coma, decerebrate rigidity, moribund</option>
            </select>
          </div>
        )}

        {calculatorId === 'modified_fisher_sah' && (
          <div className="text-xs">
            <label className="text-[#5F6368] block mb-1 font-medium">Select Modified Fisher CT Grade</label>
            <select value={mfGrade} onChange={(e) => setMfGrade(Number(e.target.value))} className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg">
              <option value={1}>Grade 1: Focal or diffuse thin SAH (&lt; 1 mm), no IVH</option>
              <option value={2}>Grade 2: Focal or diffuse thin SAH (&lt; 1 mm), with bilateral IVH</option>
              <option value={3}>Grade 3: Thick cisternal SAH (≥ 1 mm), no IVH</option>
              <option value={4}>Grade 4: Thick cisternal SAH (≥ 1 mm), with bilateral IVH</option>
            </select>
          </div>
        )}

        {calculatorId === 'markwalder_csdh' && (
          <div className="text-xs">
            <label className="text-[#5F6368] block mb-1 font-medium">Select Markwalder Clinical Grade</label>
            <select value={mwGrade} onChange={(e) => setMwGrade(Number(e.target.value))} className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg">
              <option value={0}>Grade 0: Neurologically intact, asymptomatic</option>
              <option value={1}>Grade 1: Alert, oriented; mild symptoms (headache, unsteady gait)</option>
              <option value={2}>Grade 2: Drowsy or disoriented with focal signs</option>
              <option value={3}>Grade 3: Stuporous, responds to pain, severe focal signs</option>
              <option value={4}>Grade 4: Comatose, decerebrate posturing</option>
            </select>
          </div>
        )}

        {calculatorId === 'schobinger_avm' && (
          <div className="text-xs">
            <label className="text-[#5F6368] block mb-1 font-medium">Select Schobinger AVM Evolution Stage</label>
            <select value={schobStage} onChange={(e) => setSchobStage(Number(e.target.value))} className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg">
              <option value={1}>Stage I (Quiescence): Warm macule, AV shunt on Doppler; asymptomatic</option>
              <option value={2}>Stage II (Expansion): Pulsations, thrill, bruit, tortuous veins</option>
              <option value={3}>Stage III (Destruction): Ulceration, bleeding, persistent pain, necrosis</option>
              <option value={4}>Stage IV (Decompensation): High-output congestive heart failure</option>
            </select>
          </div>
        )}

        {calculatorId === 'rockall_bleeding' && (
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Age</label>
              <select value={rockAge} onChange={(e) => setRockAge(e.target.value as any)} className="w-full px-2 py-1.5 border border-[#DADCE0] rounded-lg">
                <option value="<60">&lt; 60 Years (0 pts)</option>
                <option value="60-79">60-79 Years (1 pt)</option>
                <option value=">=80">≥ 80 Years (2 pts)</option>
              </select>
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Hemodynamic Shock</label>
              <select value={rockShock} onChange={(e) => setRockShock(e.target.value as any)} className="w-full px-2 py-1.5 border border-[#DADCE0] rounded-lg">
                <option value="none">No shock (BP ≥ 100, HR &lt; 100) (0 pts)</option>
                <option value="tachycardia">Tachycardia (HR ≥ 100, BP ≥ 100) (1 pt)</option>
                <option value="hypotension">Hypotension (SBP &lt; 100 mmHg) (2 pts)</option>
              </select>
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Comorbidities</label>
              <select value={rockComorb} onChange={(e) => setRockComorb(e.target.value as any)} className="w-full px-2 py-1.5 border border-[#DADCE0] rounded-lg">
                <option value="none">None (0 pts)</option>
                <option value="cad_chf_major">CAD / CHF / Major morbidity (2 pts)</option>
                <option value="renal_liver_malig">Renal / Liver failure / Malignancy (3 pts)</option>
              </select>
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Endoscopic Stigmata</label>
              <select value={rockStigmata} onChange={(e) => setRockStigmata(e.target.value as any)} className="w-full px-2 py-1.5 border border-[#DADCE0] rounded-lg">
                <option value="clean_base">Clean base / flat spot (0 pts)</option>
                <option value="blood_clot">Blood in stomach / clot (1 pt)</option>
                <option value="active_spurting">Active arterial spurting (2 pts)</option>
              </select>
            </div>
          </div>
        )}

        {calculatorId === 'gbs_bleeding' && (
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-4 gap-2">
              <div>
                <label className="text-[#5F6368] block mb-1">BUN (mg/dL)</label>
                <input type="number" value={gbsBun} onChange={(e) => setGbsBun(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Hb (g/dL)</label>
                <input type="number" step="0.1" value={gbsHb} onChange={(e) => setGbsHb(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Systolic BP</label>
                <input type="number" value={gbsSbp} onChange={(e) => setGbsSbp(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Pulse (bpm)</label>
                <input type="number" value={gbsPulse} onChange={(e) => setGbsPulse(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-1">
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={gbsFemale} onChange={(e) => setGbsFemale(e.target.checked)} /><span>Female Sex</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={gbsSyncope} onChange={(e) => setGbsSyncope(e.target.checked)} /><span>Syncope (+2)</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={gbsMelena} onChange={(e) => setGbsMelena(e.target.checked)} /><span>Melena (+1)</span></label>
              <label className="flex items-center gap-1.5"><input type="checkbox" checked={gbsLiver} onChange={(e) => setGbsLiver(e.target.checked)} /><span>Liver Disease (+2)</span></label>
            </div>
          </div>
        )}

        {calculatorId === 'oakland_lgib' && (
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-4 gap-2">
              <div>
                <label className="text-[#5F6368] block mb-1">Age</label>
                <input type="number" value={oakAge} onChange={(e) => setOakAge(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Sex</label>
                <select value={oakSex} onChange={(e) => setOakSex(e.target.value as any)} className="w-full px-2 py-1 border border-[#DADCE0] rounded">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Heart Rate</label>
                <input type="number" value={oakHr} onChange={(e) => setOakHr(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1">Systolic BP</label>
                <input type="number" value={oakSbp} onChange={(e) => setOakSbp(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div>
                <label className="text-[#5F6368] block mb-1">Hemoglobin (g/dL)</label>
                <input type="number" step="0.1" value={oakHb} onChange={(e) => setOakHb(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded font-mono" />
              </div>
              <label className="flex items-center gap-1.5 pt-5"><input type="checkbox" checked={oakPrior} onChange={(e) => setOakPrior(e.target.checked)} /><span>Prior LGIB (+1)</span></label>
              <label className="flex items-center gap-1.5 pt-5"><input type="checkbox" checked={oakDre} onChange={(e) => setOakDre(e.target.checked)} /><span>DRE Blood (+1)</span></label>
            </div>
          </div>
        )}

        {calculatorId === 'sir_coagulation_risk' && (
          <div className="grid grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Procedure Risk Tier</label>
              <select value={sirCat} onChange={(e) => setSirCat(Number(e.target.value) as any)} className="w-full px-2 py-1.5 border border-[#DADCE0] rounded-lg">
                <option value={1}>Category 1 (Low Risk)</option>
                <option value={2}>Category 2 (Moderate)</option>
                <option value={3}>Category 3 (High Risk)</option>
              </select>
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Platelets (/µL)</label>
              <input type="number" step="5000" value={sirPlt} onChange={(e) => setSirPlt(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">PT / INR</label>
              <input type="number" step="0.1" value={sirInr} onChange={(e) => setSirInr(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">aPTT (Seconds)</label>
              <input type="number" value={sirAptt} onChange={(e) => setSirAptt(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
          </div>
        )}

        {calculatorId === 'ablation_margin_a0a1' && (
          <div className="grid grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Tumor Max Diam (mm)</label>
              <input type="number" value={abTumorD} onChange={(e) => setAbTumorD(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Ablation Transverse (mm)</label>
              <input type="number" value={abZoneTrans} onChange={(e) => setAbZoneTrans(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Ablation Long (mm)</label>
              <input type="number" value={abZoneLong} onChange={(e) => setAbZoneLong(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Measured Margin (mm)</label>
              <input type="number" step="0.5" value={abMinMargin} onChange={(e) => setAbMinMargin(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono font-bold" />
            </div>
          </div>
        )}

        {calculatorId === 'womac_gae' && (
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Pain Subscore (0-20)</label>
              <input type="number" min="0" max="20" value={womPain} onChange={(e) => setWomPain(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Stiffness (0-8)</label>
              <input type="number" min="0" max="8" value={womStiff} onChange={(e) => setWomStiff(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Physical Function (0-68)</label>
              <input type="number" min="0" max="68" value={womFunc} onChange={(e) => setWomFunc(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
          </div>
        )}

        {calculatorId === 'cigarroa_macd' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Patient Weight (kg)</label>
              <input
                type="number"
                value={macdWeight}
                onChange={(e) => setMacdWeight(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Serum Creatinine (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={macdCr}
                onChange={(e) => setMacdCr(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Contrast Administered (mL)</label>
              <input
                type="number"
                value={macdContrast}
                onChange={(e) => setMacdContrast(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono font-bold"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">eGFR (mL/min/1.73m²)</label>
              <input
                type="number"
                value={macdEgfr}
                onChange={(e) => setMacdEgfr(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        )}

        {calculatorId === 'meld3_score' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={meldBili}
                onChange={(e) => setMeldBili(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Creatinine (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={meldCr}
                onChange={(e) => setMeldCr(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">INR</label>
              <input
                type="number"
                step="0.1"
                value={meldInr}
                onChange={(e) => setMeldInr(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Serum Sodium (mEq/L)</label>
              <input
                type="number"
                value={meldNa}
                onChange={(e) => setMeldNa(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Albumin (g/dL)</label>
              <input
                type="number"
                step="0.1"
                value={meldAlb}
                onChange={(e) => setMeldAlb(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="meldFemale"
                checked={meldFemale}
                onChange={(e) => setMeldFemale(e.target.checked)}
                className="rounded border-[#DADCE0] text-[#1A73E8]"
              />
              <label htmlFor="meldFemale" className="text-xs text-[#202124] font-medium cursor-pointer">
                Female Sex (+1.33 adjustment)
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'child_pugh_albi' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Total Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={cpBili}
                onChange={(e) => setCpBili(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Serum Albumin (g/dL)</label>
              <input
                type="number"
                step="0.1"
                value={cpAlb}
                onChange={(e) => setCpAlb(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">INR</label>
              <input
                type="number"
                step="0.1"
                value={cpInr}
                onChange={(e) => setCpInr(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Ascites</label>
              <select
                value={cpAscites}
                onChange={(e) => setCpAscites(Number(e.target.value) as 1 | 2 | 3)}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs"
              >
                <option value={1}>None (1 pt)</option>
                <option value={2}>Mild / Controlled (2 pts)</option>
                <option value={3}>Moderate / Refractory (3 pts)</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-[#5F6368] block mb-1 font-medium">Hepatic Encephalopathy</label>
              <select
                value={cpEnceph}
                onChange={(e) => setCpEnceph(Number(e.target.value) as 1 | 2 | 3)}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs"
              >
                <option value={1}>None (1 pt)</option>
                <option value={2}>Grade 1-2 (Mild Confusion/Tremor) (2 pts)</option>
                <option value={3}>Grade 3-4 (Stupor/Coma) (3 pts)</option>
              </select>
            </div>
          </div>
        )}

        {calculatorId === 'bclc_staging' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Tumor Nodules Count</label>
              <input
                type="number"
                min="1"
                value={bclcTumors}
                onChange={(e) => setBclcTumors(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Max Tumor Diameter (cm)</label>
              <input
                type="number"
                step="0.5"
                value={bclcSize}
                onChange={(e) => setBclcSize(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Child-Pugh Class</label>
              <select
                value={bclcCpClass}
                onChange={(e) => setBclcCpClass(e.target.value as 'A' | 'B' | 'C')}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs"
              >
                <option value="A">Class A (Preserved Reserve)</option>
                <option value="B">Class B (Moderately Compromised)</option>
                <option value="C">Class C (Decompensated)</option>
              </select>
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">ECOG Performance Status</label>
              <select
                value={bclcEcog}
                onChange={(e) => setBclcEcog(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs"
              >
                <option value={0}>0 - Fully Active</option>
                <option value={1}>1 - Restricted Strenuous Activity</option>
                <option value={2}>2 - Ambulatory, Capable of Self-Care</option>
                <option value={3}>3 - Limited Self-Care (&gt;50% Bed/Chair)</option>
              </select>
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="bclcVasc"
                checked={bclcVasc}
                onChange={(e) => setBclcVasc(e.target.checked)}
                className="rounded border-[#DADCE0] text-[#1A73E8]"
              />
              <label htmlFor="bclcVasc" className="text-xs text-[#202124] font-medium cursor-pointer">
                Macrovascular Portal Invasion
              </label>
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="bclcExtra"
                checked={bclcExtra}
                onChange={(e) => setBclcExtra(e.target.checked)}
                className="rounded border-[#DADCE0] text-[#1A73E8]"
              />
              <label htmlFor="bclcExtra" className="text-xs text-[#202124] font-medium cursor-pointer">
                Extrahepatic Metastasis
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'flr_kgr_pve' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Pre-PVE FLR Volume (mL)</label>
              <input type="number" value={flrPreVol} onChange={(e) => setFlrPreVol(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Post-PVE FLR Volume (mL)</label>
              <input type="number" value={flrPostVol} onChange={(e) => setFlrPostVol(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono font-bold" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Elapsed Time (Weeks)</label>
              <input type="number" step="0.5" value={flrWeeks} onChange={(e) => setFlrWeeks(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Patient Weight (kg)</label>
              <input type="number" value={flrWeight} onChange={(e) => setFlrWeight(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Patient Height (cm)</label>
              <input type="number" value={flrHeight} onChange={(e) => setFlrHeight(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Liver Background Condition</label>
              <select value={flrBackground} onChange={(e) => setFlrBackground(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                <option value="normal">Normal Liver (Target ≥ 20%)</option>
                <option value="steatosis_chemo">Post-Chemo / Steatosis (Target ≥ 30%)</option>
                <option value="cirrhosis">Cirrhosis / Fibrosis (Target ≥ 40%)</option>
              </select>
            </div>
          </div>
        )}

        {calculatorId === 'y90_partition_dosimetry' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Administered Activity (GBq)</label>
              <input type="number" step="0.1" value={y90Gbq} onChange={(e) => setY90Gbq(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono font-bold" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Lung Shunt Fraction LSF (%)</label>
              <input type="number" step="0.5" value={y90Lsf} onChange={(e) => setY90Lsf(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Tumor-to-Normal Ratio (T/N)</label>
              <input type="number" step="0.1" value={y90TnRatio} onChange={(e) => setY90TnRatio(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Target Lobe/Liver Mass (kg)</label>
              <input type="number" step="0.1" value={y90LiverMass} onChange={(e) => setY90LiverMass(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Tumor Mass (kg)</label>
              <input type="number" step="0.05" value={y90TumorMass} onChange={(e) => setY90TumorMass(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
          </div>
        )}

        {calculatorId === 'spetzler_martin_avm' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">AVM Nidus Max Diameter (cm)</label>
              <input type="number" step="0.1" value={smSize} onChange={(e) => setSmSize(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono font-bold" />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input type="checkbox" id="smEloquent" checked={smEloquent} onChange={(e) => setSmEloquent(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
              <label htmlFor="smEloquent" className="text-xs text-[#202124] font-medium cursor-pointer">
                Eloquent Cortex / Deep Nuclei (1 pt)
              </label>
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input type="checkbox" id="smDeepDrain" checked={smDeepDrain} onChange={(e) => setSmDeepDrain(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
              <label htmlFor="smDeepDrain" className="text-xs text-[#202124] font-medium cursor-pointer">
                Deep Venous Drainage (1 pt)
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'aortic_size_index_asi' && (
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Max Aortic Diameter (cm)</label>
              <input type="number" step="0.1" value={asiDiameter} onChange={(e) => setAsiDiameter(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono font-bold" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Patient Weight (kg)</label>
              <input type="number" value={asiWeight} onChange={(e) => setAsiWeight(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Patient Height (cm)</label>
              <input type="number" value={asiHeight} onChange={(e) => setAsiHeight(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
          </div>
        )}

        {calculatorId === 'renal_resistive_index' && (
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Renal PSV (cm/s)</label>
              <input type="number" value={rriPsv} onChange={(e) => setRriPsv(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono font-bold" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Renal EDV (cm/s)</label>
              <input type="number" value={rriEdv} onChange={(e) => setRriEdv(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Suprarenal Aortic PSV (cm/s)</label>
              <input type="number" value={rriAorta} onChange={(e) => setRriAorta(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs font-mono" />
            </div>
          </div>
        )}

        {calculatorId === 'caprini_vte_score' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Age Group</label>
                <select value={capAge} onChange={(e) => setCapAge(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value="<41">&lt; 41 Years (0 pts)</option>
                  <option value="41-60">41 - 60 Years (1 pt)</option>
                  <option value="61-74">61 - 74 Years (2 pts)</option>
                  <option value=">=75">≥ 75 Years (3 pts)</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={capSurg} onChange={(e) => setCapSurg(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Major Surgery / Trauma (2 pts)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={capCvc} onChange={(e) => setCapCvc(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Central Venous Catheter (2 pts)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={capMalig} onChange={(e) => setCapMalig(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Active Malignancy (3 pts)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={capPriorVte} onChange={(e) => setCapPriorVte(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Prior DVT / PE History (3 pts)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={capThrombophilia} onChange={(e) => setCapThrombophilia(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Known Thrombophilia (3 pts)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={capBedridden} onChange={(e) => setCapBedridden(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Bedridden &gt; 72 Hours (3 pts)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={capVaricose} onChange={(e) => setCapVaricose(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Varicose Veins / Edema (1 pt)</span>
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'has_bled_score' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={hbHt} onChange={(e) => setHbHt(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
              <span>Hypertension (SBP &gt; 160)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={hbRenalLiv} onChange={(e) => setHbRenalLiv(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
              <span>Abnormal Renal / Liver Function</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={hbStroke} onChange={(e) => setHbStroke(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
              <span>Prior Stroke History</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={hbBleed} onChange={(e) => setHbBleed(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
              <span>Bleeding History / Anemia</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={hbInr} onChange={(e) => setHbInr(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
              <span>Labile INR / Anticoagulated</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={hbAge65} onChange={(e) => setHbAge65(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
              <span>Elderly (Age &gt; 65 Years)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={hbDrugs} onChange={(e) => setHbDrugs(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
              <span>Antiplatelets / NSAIDs / Alcohol</span>
            </label>
          </div>
        )}

        {calculatorId === 'palliative_prognostic_index' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Palliative Performance Scale (PPS %)</label>
                <select value={ppiPps} onChange={(e) => setPpiPps(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value={10}>10 - 20% (Bedbound, total assistance) (4.0 pts)</option>
                  <option value={40}>30 - 50% (Mainly bed/chair, moderate assist) (2.5 pts)</option>
                  <option value={70}>≥ 60% (Ambulatory, mainly independent) (0 pts)</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Oral Intake</label>
                <select value={ppiIntake} onChange={(e) => setPpiIntake(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value="normal">Normal (0 pts)</option>
                  <option value="reduced">Reduced (small sips/bites) (1.0 pt)</option>
                  <option value="severely_reduced">Severely Reduced / Minimal (2.5 pts)</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={ppiEdema} onChange={(e) => setPpiEdema(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Peripheral / Body Edema (1.0 pt)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={ppiDyspnea} onChange={(e) => setPpiDyspnea(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Dyspnea at Rest (2.5 pts)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={ppiDelirium} onChange={(e) => setPpiDelirium(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Delirium / Acute Confusion (4.0 pts)</span>
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'svs_wifi_classification' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">W - Wound Grade</label>
                <select value={wifiWound} onChange={(e) => setWifiWound(Number(e.target.value) as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value={0}>Grade 0: No ulcer / Ischemic rest pain only</option>
                  <option value={1}>Grade 1: Small shallow ulcer, distal leg/foot, no gangrene</option>
                  <option value={2}>Grade 2: Deep ulcer, exposed bone/tendon or toe gangrene</option>
                  <option value={3}>Grade 3: Extensive deep ulcer, heel ulcer or forefoot gangrene</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">I - Ischemia Grade (ABI / TP)</label>
                <select value={wifiIschemia} onChange={(e) => setWifiIschemia(Number(e.target.value) as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value={0}>Grade 0: ABI ≥ 0.80 / TP ≥ 60 mmHg (No ischemia)</option>
                  <option value={1}>Grade 1: ABI 0.60 - 0.79 / TP 40 - 59 mmHg (Mild)</option>
                  <option value={2}>Grade 2: ABI 0.40 - 0.59 / TP 30 - 39 mmHg (Moderate)</option>
                  <option value={3}>Grade 3: ABI &lt; 0.40 / TP &lt; 30 mmHg (Severe CLTI)</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">fI - Foot Infection Grade</label>
                <select value={wifiInfection} onChange={(e) => setWifiInfection(Number(e.target.value) as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value={0}>Grade 0: No infection / Uninfected</option>
                  <option value={1}>Grade 1: Mild: Local infection ≤ 2 cm cellulitis</option>
                  <option value={2}>Grade 2: Moderate: Cellulitis &gt; 2 cm / Osteomyelitis</option>
                  <option value={3}>Grade 3: Severe: Systemic SIRS / Septic shock</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {calculatorId === 'sins_spine_instability' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Anatomical Location</label>
                <select value={sinsLoc} onChange={(e) => setSinsLoc(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value="junctional">Junctional (C1-2, C7-T2, T11-L1, S1) (3 pts)</option>
                  <option value="mobile">Mobile Spine (C3-C6, L2-L4) (2 pts)</option>
                  <option value="semi_rigid">Semi-Rigid (T3-T10) (1 pt)</option>
                  <option value="rigid">Rigid Sacrum (S2-S5) (0 pts)</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Pain Characteristic</label>
                <select value={sinsPain} onChange={(e) => setSinsPain(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value="mechanical">Mechanical (relieved by recumbency) (3 pts)</option>
                  <option value="occasional">Occasional / Constant non-mechanical (1 pt)</option>
                  <option value="painless">Painless lesion (0 pts)</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Bone Lesion Type</label>
                <select value={sinsBone} onChange={(e) => setSinsBone(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value="lytic">Lytic (2 pts)</option>
                  <option value="mixed">Mixed (1 pt)</option>
                  <option value="blastic">Blastic / Sclerotic (0 pts)</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Spinal Alignment</label>
                <select value={sinsAlign} onChange={(e) => setSinsAlign(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value="subluxation">Subluxation / Translation (4 pts)</option>
                  <option value="deformity">De novo deformity (Kyphosis/Scoliosis) (2 pts)</option>
                  <option value="normal">Normal alignment (0 pts)</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Vertebral Body Collapse</label>
                <select value={sinsColl} onChange={(e) => setSinsColl(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value="gt50">&gt; 50% Body Collapse (3 pts)</option>
                  <option value="lt50">&lt; 50% Body Collapse (2 pts)</option>
                  <option value="none_gt50_involvement">No collapse but &gt;50% body involved (1 pt)</option>
                  <option value="none">No collapse / &lt;50% involvement (0 pts)</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Posterolateral Element Involvement</label>
                <select value={sinsPost} onChange={(e) => setSinsPost(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value="bilateral">Bilateral (Pedicles/Facet/Costovertebral) (3 pts)</option>
                  <option value="unilateral">Unilateral (1 pt)</option>
                  <option value="none">None (0 pts)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {calculatorId === 'bova_pe_score' && (
          <div className="space-y-3 text-xs">
            <p className="text-[#5F6368]">Select all clinical indicators present on admission:</p>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={bovaRv} onChange={(e) => setBovaRv(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>RV Dysfunction on Echo/CT (RV/LV ≥ 0.9) (+2 pts)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={bovaTrop} onChange={(e) => setBovaTrop(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Elevated Cardiac Troponin I or T (+2 pts)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={bovaHr} onChange={(e) => setBovaHr(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Heart Rate ≥ 110 bpm (+1 pt)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={bovaBp} onChange={(e) => setBovaBp(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Systolic BP 90 - 100 mmHg (+2 pts)</span>
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'who_iwge_hydatid' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">WHO Ultrasound Morphology Stage</label>
                <select value={whoStage} onChange={(e) => setWhoStage(e.target.value as any)} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs">
                  <option value="CE1">CE1: Active unilocular fluid cyst with hydatid sand (Ideal PAIR)</option>
                  <option value="CE2">CE2: Active multivesicular / honeycomb cyst (MoCAT / Catheter)</option>
                  <option value="CE3a">CE3a: Transitional detached endocyst (Water-lily sign) (PAIR)</option>
                  <option value="CE3b">CE3b: Transitional daughter cysts in solid matrix (Surgery/Catheter)</option>
                  <option value="CE4">CE4: Inactive solid heterogeneous mass (Watch &amp; Wait)</option>
                  <option value="CE5">CE5: Inactive thick calcified wall (Watch &amp; Wait)</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Cyst Maximum Diameter (cm)</label>
                <input type="number" step="0.5" value={whoDiam} onChange={(e) => setWhoDiam(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer pt-1 text-rose-700 font-semibold">
              <input type="checkbox" checked={whoFistula} onChange={(e) => setWhoFistula(e.target.checked)} className="rounded border-[#DADCE0] text-rose-600" />
              <span>Cystobiliary Fistula / Biliary Communication (Absolute Contraindication to Scolicides)</span>
            </label>
          </div>
        )}

        {calculatorId === 'tg18_cholecystitis' && (
          <div className="space-y-3 text-xs">
            <p className="text-[#5F6368]">Select clinical criteria to triage between PTGBD vs Lap Cholecystectomy:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label className="flex items-center gap-2 cursor-pointer font-medium text-rose-800">
                <input type="checkbox" checked={tg18Organ} onChange={(e) => setTg18Organ(e.target.checked)} className="rounded border-[#DADCE0] text-rose-600" />
                <span>Grade III: Organ Dysfunction (Inotropic support, Cr&gt;2, PaO2/FiO2&lt;300, INR&gt;1.5, Plt&lt;100k)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tg18Inflam} onChange={(e) => setTg18Inflam(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Marked Local Inflammation (Gangrene, Abscess, Emphysema)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tg18Wbc} onChange={(e) => setTg18Wbc(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>WBC &gt; 18,000 / µL or Palpable Tender RUQ Mass</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tg18Duration} onChange={(e) => setTg18Duration(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Symptom Duration &gt; 72 Hours</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer sm:col-span-2 text-amber-800 font-medium">
                <input type="checkbox" checked={tg18HighRisk} onChange={(e) => setTg18HighRisk(e.target.checked)} className="rounded border-[#DADCE0] text-amber-600" />
                <span>High Surgical Risk / CCI ≥ 4 / ASA ≥ 3 (Unfit for General Anesthesia)</span>
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'thyroid_vrr_volume' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2 p-2.5 rounded-lg border border-[#DADCE0] bg-gray-50/50">
                <div className="font-semibold text-[#202124]">Baseline Ultrasound (cm)</div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div>
                    <label className="text-[#5F6368] block text-[10px]">Length</label>
                    <input type="number" step="0.1" value={thInitL} onChange={(e) => setThInitL(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded text-xs" />
                  </div>
                  <div>
                    <label className="text-[#5F6368] block text-[10px]">Width</label>
                    <input type="number" step="0.1" value={thInitW} onChange={(e) => setThInitW(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded text-xs" />
                  </div>
                  <div>
                    <label className="text-[#5F6368] block text-[10px]">Depth</label>
                    <input type="number" step="0.1" value={thInitD} onChange={(e) => setThInitD(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded text-xs" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-2.5 rounded-lg border border-[#DADCE0] bg-gray-50/50">
                <div className="font-semibold text-[#202124]">Post-Ablation Follow-Up (cm)</div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div>
                    <label className="text-[#5F6368] block text-[10px]">Length</label>
                    <input type="number" step="0.1" value={thPostL} onChange={(e) => setThPostL(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded text-xs" />
                  </div>
                  <div>
                    <label className="text-[#5F6368] block text-[10px]">Width</label>
                    <input type="number" step="0.1" value={thPostW} onChange={(e) => setThPostW(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded text-xs" />
                  </div>
                  <div>
                    <label className="text-[#5F6368] block text-[10px]">Depth</label>
                    <input type="number" step="0.1" value={thPostD} onChange={(e) => setThPostD(Number(e.target.value))} className="w-full px-2 py-1 border border-[#DADCE0] rounded text-xs" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-48">
              <label className="text-[#5F6368] block mb-1 font-medium">Follow-Up Duration (Months)</label>
              <input type="number" value={thMonths} onChange={(e) => setThMonths(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
            </div>
          </div>
        )}

        {calculatorId === 'shock_index_hemorrhage' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Heart Rate (bpm)</label>
                <input type="number" value={siHr} onChange={(e) => setSiHr(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Systolic BP (mmHg)</label>
                <input type="number" value={siSbp} onChange={(e) => setSiSbp(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Patient Age (Years)</label>
                <input type="number" value={siAge} onChange={(e) => setSiAge(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Glasgow Coma Scale (3-15)</label>
                <input type="number" min="3" max="15" value={siGcs} onChange={(e) => setSiGcs(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
            </div>
          </div>
        )}

        {calculatorId === 'chylothorax_lymphatic_leak' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Daily Chyle Output (mL/24h)</label>
                <input type="number" step="50" value={chyOutput} onChange={(e) => setChyOutput(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Body Weight (kg)</label>
                <input type="number" step="1" value={chyWeight} onChange={(e) => setChyWeight(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Pleural Fluid Triglycerides (mg/dL)</label>
                <input type="number" step="10" value={chyTrig} onChange={(e) => setChyTrig(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Days Post-Surgical / Injury</label>
                <input type="number" value={chyDays} onChange={(e) => setChyDays(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
              <div className="flex items-end pb-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={chyChylo} onChange={(e) => setChyChylo(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                  <span>Chylomicrons Present on Lipoprotein Electrophoresis</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {calculatorId === 'budd_chiari_composite_risk' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Bilirubin (mg/dL)</label>
                <input type="number" step="0.1" value={bcsCompBili} onChange={(e) => setBcsCompBili(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">INR</label>
                <input type="number" step="0.1" value={bcsCompInr} onChange={(e) => setBcsCompInr(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Caudate / Right Lobe Ratio</label>
                <input type="number" step="0.01" value={bcsCompCrl} onChange={(e) => setBcsCompCrl(Number(e.target.value))} className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs" />
              </div>
              <div className="flex items-end pb-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={bcsCompWeb} onChange={(e) => setBcsCompWeb(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                  <span>IVC Membranous Web</span>
                </label>
              </div>
            </div>
            <div className="flex gap-4 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={bcsCompAscites} onChange={(e) => setBcsCompAscites(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Refractory / Tense Ascites</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={bcsCompEnceph} onChange={(e) => setBcsCompEnceph(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Hepatic Encephalopathy</span>
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'michels_hepatic_anatomy' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Select Hepatic Arterial Branching Pattern (Michels / Hiatt Variant)</label>
              <select
                value={michelsVariantKey}
                onChange={(e) => setMichelsVariantKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(MICHELS_HIATT_VARIANTS).map(([key, v]) => (
                  <option key={key} value={key}>
                    {v.michels} ({v.name}) — {v.frequency}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 leading-relaxed text-[11px]">
              <b>Anatomical Origin:</b> {MICHELS_HIATT_VARIANTS[michelsVariantKey]?.originDetails}
            </div>
          </div>
        )}

        {calculatorId === 'mma_branching_csdh' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Target MMA Convexity Branch</label>
                <select
                  value={mmaBranch}
                  onChange={(e) => setMmaBranch(e.target.value as any)}
                  className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium"
                >
                  <option value="both">Both Anterior (Frontal) & Posterior (Parietal) Branches</option>
                  <option value="anterior">Anterior (Frontal) Branch Only</option>
                  <option value="posterior">Posterior (Parietal) Branch Only</option>
                  <option value="proximal">Proximal Main Trunk (Near Foramen Spinosum)</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Clinical Indication</label>
                <select
                  value={mmaDisease}
                  onChange={(e) => setMmaDisease(e.target.value as any)}
                  className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium"
                >
                  <option value="csdh">Chronic Subdural Hematoma (CSDH)</option>
                  <option value="meningioma">Pre-operative Meningioma Embolization</option>
                  <option value="davf">Dural Arteriovenous Fistula (dAVF)</option>
                </select>
              </div>
            </div>
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-900 text-[11px] leading-relaxed">
              🚨 <b>Dangerous Anastomosis Checklist:</b> Check for <i>Meningo-Ophthalmic</i> (CRAO blindness risk) & <i>Petrosal Branch</i> (CN VII Facial Palsy risk) before particle delivery!
            </div>
          </div>
        )}

        {calculatorId === 'scapular_subclavian_collaterals' && (
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Subclavian / Axillary Occlusion Site</label>
                <select
                  value={scapOcclusion}
                  onChange={(e) => setScapOcclusion(e.target.value as any)}
                  className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium"
                >
                  <option value="pre_vertebral">Pre-Vertebral (1st Part Subclavian - Classic Steal)</option>
                  <option value="post_vertebral">Post-Vertebral (2nd/3rd Part Subclavian)</option>
                  <option value="axillary">Axillary Artery Obstruction / Trauma</option>
                  <option value="brachial">Brachial Artery Occlusion</option>
                </select>
              </div>
              <div>
                <label className="text-[#5F6368] block mb-1 font-medium">Vertebrobasilar Steal Severity (Doppler / Angio)</label>
                <select
                  value={scapStealGrade}
                  onChange={(e) => setScapStealGrade(e.target.value as any)}
                  className="w-full px-2.5 py-1.5 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium"
                >
                  <option value="grade0">None (Antegrade Vertebral Flow)</option>
                  <option value="grade1">Grade I (Latent - Mid-Systolic Deceleration / Bunny Rabbit)</option>
                  <option value="grade2">Grade II (Intermittent - Retrograde in Systole, Antegrade in Diastole)</option>
                  <option value="grade3">Grade III (Permanent - Constant Retrograde Vertebral Flow)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {calculatorId === 'mesenteric_collaterals_sma' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Select Mesenteric Collateral Arcade / Anatomical Conduit</label>
              <select
                value={mesCollateralKey}
                onChange={(e) => setMesCollateralKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(MESENTERIC_COLLATERALS).map(([key, c]) => (
                  <option key={key} value={key}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 text-[11px] leading-relaxed">
              <b>Vascular Connection:</b> {MESENTERIC_COLLATERALS[mesCollateralKey]?.connectingVessels}
            </div>
          </div>
        )}

        {calculatorId === 'bismuth_corlette_biliary' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Bismuth-Corlette Stricture Level (Cholangiography / MRCP)</label>
              <select
                value={bismuthTypeKey}
                onChange={(e) => setBismuthTypeKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(BISMUTH_TYPES).map(([key, b]) => (
                  <option key={key} value={key}>
                    {b.type}: {b.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-[11px] leading-relaxed">
              <b>Anatomical Boundary:</b> {BISMUTH_TYPES[bismuthTypeKey]?.anatomicLevel}
            </div>
          </div>
        )}

        {calculatorId === 'aortic_dissection_stanford_debakey' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Aortic Dissection Classification Tier</label>
              <select
                value={dissectionKey}
                onChange={(e) => setDissectionKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(DISSECTION_TYPES).map(([key, d]) => (
                  <option key={key} value={key}>
                    {d.stanford} / DeBakey {d.debakey} — {d.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-4 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={dissectionMalperfusion} onChange={(e) => setDissectionMalperfusion(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Malperfusion Syndrome (Visceral / Renal / Extremity Ischemia)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={dissectionRefractoryPain} onChange={(e) => setDissectionRefractoryPain(e.target.checked)} className="rounded border-[#DADCE0] text-[#1A73E8]" />
                <span>Refractory Pain / Resistant HTN</span>
              </label>
            </div>
          </div>
        )}

        {calculatorId === 'pae_de_assis_anatomy' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">De Assis Prostatic Artery Origin Pattern (Angiography / CBCT)</label>
              <select
                value={paeVariantKey}
                onChange={(e) => setPaeVariantKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(DE_ASSIS_PAE_TYPES).map(([key, p]) => (
                  <option key={key} value={key}>
                    {p.type} ({p.name}) — {p.frequency}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 text-[11px] leading-relaxed">
              <b>Vascular Origin:</b> {DE_ASSIS_PAE_TYPES[paeVariantKey]?.origin}
            </div>
          </div>
        )}

        {calculatorId === 'sarin_gastric_varices' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Sarin Gastric Varices Type (Endoscopy / Contrast CT)</label>
              <select
                value={sarinKey}
                onChange={(e) => setSarinKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(SARIN_VARICES_TYPES).map(([key, s]) => (
                  <option key={key} value={key}>
                    {s.type} ({s.name})
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-900 text-[11px] leading-relaxed">
              <b>Anatomical Distribution:</b> {SARIN_VARICES_TYPES[sarinKey]?.location}
            </div>
          </div>
        )}

        {calculatorId === 'forrest_peptic_ulcer' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Forrest Endoscopic Stigmata of Recent Hemorrhage</label>
              <select
                value={forrestKey}
                onChange={(e) => setForrestKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(FORREST_TYPES).map(([key, f]) => (
                  <option key={key} value={key}>
                    {f.type} ({f.name})
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-[11px] leading-relaxed">
              <b>Endoscopic Appearance:</b> {FORREST_TYPES[forrestKey]?.description}
            </div>
          </div>
        )}

        {calculatorId === 'sarteschi_varicocele_grading' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Sarteschi / Dubin-Amelar Varicocele Stage</label>
              <select
                value={varicoceleKey}
                onChange={(e) => setVaricoceleKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(SARTESCHI_VARICOCELE_GRADES).map(([key, v]) => (
                  <option key={key} value={key}>
                    {v.grade}: {v.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 text-[11px] leading-relaxed">
              <b>Duplex Ultrasound Criteria:</b> {SARTESCHI_VARICOCELE_GRADES[varicoceleKey]?.dopplerCriteria}
            </div>
          </div>
        )}

        {calculatorId === 'cognard_borden_davf' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Cognard / Borden dAVF Drainage Pattern</label>
              <select
                value={cognardKey}
                onChange={(e) => setCognardKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(COGNARD_DAVF_TYPES).map(([key, c]) => (
                  <option key={key} value={key}>
                    {c.type} ({c.name})
                  </option>
                ))}
              </select>
            </div>
            <div className={`p-2.5 rounded-lg border text-[11px] leading-relaxed ${COGNARD_DAVF_TYPES[cognardKey]?.corticalReflux ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900'}`}>
              <b>Cortical Reflux:</b> {COGNARD_DAVF_TYPES[cognardKey]?.corticalReflux ? 'PRESENT (High Hemorrhage Risk)' : 'ABSENT (Benign Course)'} | <b>Hemorrhage Rate:</b> {COGNARD_DAVF_TYPES[cognardKey]?.annualHemorrhageRisk}
            </div>
          </div>
        )}

        {calculatorId === 'ishimaru_aortic_zones' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Ishimaru Proximal Aortic Arch Landing Zone</label>
              <select
                value={ishimaruKey}
                onChange={(e) => setIshimaruKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(ISHIMARU_AORTIC_ZONES).map(([key, z]) => (
                  <option key={key} value={key}>
                    {z.zone} — {z.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 text-[11px] leading-relaxed">
              <b>Surgical Debranching Required:</b> {ISHIMARU_AORTIC_ZONES[ishimaruKey]?.debranchingRequired}
            </div>
          </div>
        )}

        {calculatorId === 'crawford_taaa_extent' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Crawford-Safi Thoracoabdominal Aneurysm (TAAA) Extent</label>
              <select
                value={crawfordKey}
                onChange={(e) => setCrawfordKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(CRAWFORD_TAAA_EXTENTS).map(([key, c]) => (
                  <option key={key} value={key}>
                    {c.extent} ({c.name})
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-[11px] leading-relaxed">
              <b>Paraplegia / Spinal Cord Ischemia Risk:</b> {CRAWFORD_TAAA_EXTENTS[crawfordKey]?.paraplegiaRisk} | <b>Branching:</b> {CRAWFORD_TAAA_EXTENTS[crawfordKey]?.endovascularTechnique}
            </div>
          </div>
        )}

        {calculatorId === 'strasberg_biliary_injury' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Strasberg / Bismuth Iatrogenic Bile Duct Injury Type</label>
              <select
                value={strasbergKey}
                onChange={(e) => setStrasbergKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(STRASBERG_BILIARY_TYPES).map(([key, s]) => (
                  <option key={key} value={key}>
                    {s.type} ({s.name})
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-900 text-[11px] leading-relaxed">
              <b>Lesion Anatomy:</b> {STRASBERG_BILIARY_TYPES[strasbergKey]?.anatomicLesion}
            </div>
          </div>
        )}

        {calculatorId === 'wses_solid_organ_trauma' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">WSES / AAST Solid Organ Trauma Grading (Liver, Spleen, Kidney)</label>
              <select
                value={wsesKey}
                onChange={(e) => setWsesKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(WSES_ORGAN_INJURY_GRADES).map(([key, w]) => (
                  <option key={key} value={key}>
                    {w.organ} — {w.grade}: {w.vascularLesion}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-red-900 text-[11px] leading-relaxed">
              <b>Parenchymal Damage:</b> {WSES_ORGAN_INJURY_GRADES[wsesKey]?.lacerationCriteria} | <b>Management:</b> {WSES_ORGAN_INJURY_GRADES[wsesKey]?.managementGuideline}
            </div>
          </div>
        )}

        {calculatorId === 'pvtt_cheng_vp_stage' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">PVTT Japanese / Cheng Portal Vein Tumor Thrombus Extent</label>
              <select
                value={pvttKey}
                onChange={(e) => setPvttKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(PVTT_VP_STAGES).map(([key, p]) => (
                  <option key={key} value={key}>
                    {p.vpStage} ({p.name})
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-purple-50 border border-purple-200 rounded-lg text-purple-900 text-[11px] leading-relaxed">
              <b>Invasion:</b> {PVTT_VP_STAGES[pvttKey]?.anatomicExtent} | <b>Survival without Rx:</b> {PVTT_VP_STAGES[pvttKey]?.medianSurvivalWithoutTx}
            </div>
          </div>
        )}

        {calculatorId === 'graves_renal_segmental' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Graves Renal Segmental Artery Target</label>
              <select
                value={gravesKey}
                onChange={(e) => setGravesKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(GRAVES_RENAL_SEGMENTS).map(([key, g]) => (
                  <option key={key} value={key}>
                    {g.segment} ({g.name})
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-[11px] leading-relaxed">
              <b>End-Artery Landmark:</b> {GRAVES_RENAL_SEGMENTS[gravesKey]?.endArteryNote}
            </div>
          </div>
        )}

        {calculatorId === 'lasjaunias_dangerous_connections' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Lasjaunias Dangerous Craniofacial Anastomosis Pathway</label>
              <select
                value={lasjauniasKey}
                onChange={(e) => setLasjauniasKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(LASJAUNIAS_CONNECTIONS).map(([key, l]) => (
                  <option key={key} value={key}>
                    {l.pathway} — {l.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-900 text-[11px] leading-relaxed">
              <b>Mandatory Safety Rule:</b> {LASJAUNIAS_CONNECTIONS[lasjauniasKey]?.irSafetyRule}
            </div>
          </div>
        )}

        {calculatorId === 'doqi_avf_stenosis_maturation' && (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">KDOQI Dialysis AVF Parameter & Stenosis Site</label>
              <select
                value={doqiKey}
                onChange={(e) => setDoqiKey(e.target.value)}
                className="w-full px-2.5 py-2 border border-[#DADCE0] rounded-lg text-xs bg-white font-medium text-[#202124]"
              >
                {Object.entries(DOQI_AVF_CRITERIA).map(([key, d]) => (
                  <option key={key} value={key}>
                    {d.parameter} ({d.name})
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2.5 bg-cyan-50 border border-cyan-200 rounded-lg text-cyan-900 text-[11px] leading-relaxed">
              <b>Intervention Trigger:</b> {DOQI_AVF_CRITERIA[doqiKey]?.interventionTrigger}
            </div>
          </div>
        )}
      </div>

      {/* Calculated Output Card */}
      <div className={`p-4 rounded-xl border ${badgeColor} transition-all space-y-2`}>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {res.riskLevel === 'critical' ? (
              <ShieldAlert className="w-5 h-5 text-rose-600" />
            ) : res.riskLevel === 'warning' ? (
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            )}
            <span className="font-bold text-sm">{res.classification}</span>
          </div>

          <div className="text-right font-mono font-bold text-base">
            Score: {res.score}
          </div>
        </div>

        <p className="text-xs leading-relaxed font-medium">
          {res.recommendation}
        </p>

        {res.details && (
          <div className="pt-2 border-t border-current/15 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono">
            {Object.entries(res.details).map(([key, val]) => (
              <div key={key} className="bg-white/60 px-2 py-1 rounded border border-current/10">
                <span className="text-[#5F6368] block text-[10px] uppercase">{key}:</span>
                <span className="font-bold">{String(val)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
