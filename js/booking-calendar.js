/**
 * SMS Medical College & Hospitals, Jaipur - Dept of Radiodiagnosis & Interventional Radiology
 * Rajasthan Government 2026 Public Holiday Calendar & Interventional Radiology OT Booking Suite
 * Features:
 * 1. Interactive Month Calendar with direct click-to-book on date cells
 * 2. Visual procedure status lifecycle (Scheduled, Pre-Op Call Done, In OT, Completed, Postponed)
 * 3. Integrated OPD List & Case Viewer Dock side-by-side with calendar
 * 4. Unscheduled Waitlist Pool for patients added without dates awaiting workup
 * 5. D-1 Pre-Op Call reminder engine with 1-click WhatsApp fasting instructions
 * 6. Reschedule engine with real-time Rajasthan Gazetted Holiday & Sunday conflict checking
 * 7. 1-click auto-fill bridge to Discharge Summary & IHMS Payload
 */

// Official Government of Rajasthan Gazetted Holidays 2026 (सार्वजनिक अवकाश)
const RAJASTHAN_HOLIDAYS_2026 = [
  { date: "2026-01-25", nameEn: "Devnarayan Jayanti", nameHi: "देवनारायण जयन्ती", type: "Gazetted", day: "Sunday" },
  { date: "2026-01-26", nameEn: "Republic Day", nameHi: "गणतन्त्र दिवस", type: "Gazetted", day: "Monday" },
  { date: "2026-02-15", nameEn: "Maha Shivratri", nameHi: "महाशिवरात्रि", type: "Gazetted", day: "Sunday" },
  { date: "2026-03-02", nameEn: "Holika Dahan", nameHi: "होलिका दहन", type: "Gazetted", day: "Monday" },
  { date: "2026-03-03", nameEn: "Dhulandi (Holi)", nameHi: "धुलण्डी", type: "Gazetted", day: "Tuesday" },
  { date: "2026-03-20", nameEn: "Cheti Chand", nameHi: "चेटीचण्ड", type: "Gazetted", day: "Friday" },
  { date: "2026-03-21", nameEn: "Eid-ul-Fitr (subject to moon)", nameHi: "ईदुलफितर (चाँद से)", type: "Gazetted", day: "Saturday" },
  { date: "2026-03-26", nameEn: "Ram Navami", nameHi: "रामनवमी", type: "Gazetted", day: "Thursday" },
  { date: "2026-03-31", nameEn: "Mahavir Jayanti", nameHi: "महावीर जयन्ती", type: "Gazetted", day: "Tuesday" },
  { date: "2026-04-03", nameEn: "Good Friday", nameHi: "गुड फ्राइडे", type: "Gazetted", day: "Friday" },
  { date: "2026-04-11", nameEn: "Jyotiba Phule Jayanti", nameHi: "महात्मा ज्योतिबा फूले जयन्ती", type: "Gazetted", day: "Saturday" },
  { date: "2026-04-14", nameEn: "Dr. B.R. Ambedkar Jayanti", nameHi: "डॉ. अम्बेडकर जयन्ती", type: "Gazetted", day: "Tuesday" },
  { date: "2026-04-19", nameEn: "Parshuram Jayanti", nameHi: "परशुराम जयन्ती", type: "Gazetted", day: "Sunday" },
  { date: "2026-05-28", nameEn: "Eid-ul-Zuha (Bakrid)", nameHi: "ईदुलजुहा", type: "Gazetted", day: "Thursday" },
  { date: "2026-06-17", nameEn: "Maharana Pratap Jayanti", nameHi: "महाराणा प्रताप जयन्ती", type: "Gazetted", day: "Wednesday" },
  { date: "2026-06-26", nameEn: "Muharram (Tazia)", nameHi: "मोहर्रम (ताजिया)", type: "Gazetted", day: "Friday" },
  { date: "2026-08-09", nameEn: "World Tribal Day", nameHi: "विश्व आदिवासी दिवस", type: "Gazetted", day: "Sunday" },
  { date: "2026-08-15", nameEn: "Independence Day", nameHi: "स्वतंत्रता दिवस", type: "Gazetted", day: "Saturday" },
  { date: "2026-08-26", nameEn: "Barawafat (Milad-un-Nabi)", nameHi: "बारावफात (चाँद से)", type: "Gazetted", day: "Wednesday" },
  { date: "2026-08-28", nameEn: "Raksha Bandhan", nameHi: "रक्षाबंधन", type: "Gazetted", day: "Friday" },
  { date: "2026-09-04", nameEn: "Shri Krishna Janmashtami", nameHi: "श्रीकृष्ण जन्माष्टमी", type: "Gazetted", day: "Friday" },
  { date: "2026-09-21", nameEn: "Ramdev Jayanti / Teja Dashami", nameHi: "रामदेव जयन्ती, तेजा दशमी एवं खेजड़ली शहीद दिवस", type: "Gazetted", day: "Monday" },
  { date: "2026-10-02", nameEn: "Mahatma Gandhi Jayanti", nameHi: "महात्मा गाँधी जयन्ती", type: "Gazetted", day: "Friday" },
  { date: "2026-10-11", nameEn: "Navratri Sthapana & Agrasen Jayanti", nameHi: "नवरात्रा स्थापना एवं महाराजा अग्रसेन जयन्ती", type: "Gazetted", day: "Sunday" },
  { date: "2026-10-19", nameEn: "Durga Ashtami", nameHi: "दुर्गाष्टमी", type: "Gazetted", day: "Monday" },
  { date: "2026-10-20", nameEn: "Vijaya Dashami (Dussehra)", nameHi: "विजयादशमी", type: "Gazetted", day: "Tuesday" },
  { date: "2026-11-08", nameEn: "Deepawali (Diwali)", nameHi: "दीपावली", type: "Gazetted", day: "Sunday" },
  { date: "2026-11-09", nameEn: "Govardhan Puja", nameHi: "गोवर्धन पूजा", type: "Gazetted", day: "Monday" },
  { date: "2026-11-11", nameEn: "Bhai Dooj", nameHi: "भाई दूज", type: "Gazetted", day: "Wednesday" },
  { date: "2026-11-24", nameEn: "Guru Nanak Jayanti", nameHi: "गुरूनानक जयन्ती", type: "Gazetted", day: "Tuesday" },
  { date: "2026-12-25", nameEn: "Christmas Day", nameHi: "क्रिसमस डे", type: "Gazetted", day: "Friday" }
];

// Helper to get tomorrow's date string (YYYY-MM-DD)
function getTomorrowDateString() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

// Initial digitized patient register with scheduled, completed, live D-1 call due, and unscheduled waitlist cases
const DEFAULT_BOOKED_PATIENTS = [
  {
    id: "book-100",
    name: "Kamla Devi",
    age: "54",
    gender: "F",
    phone: "9829123456",
    crNo: "CR-2026-9012",
    ipdNo: "IPD-89230",
    bedNo: "Bed 07 (IR Day Care)",
    diagnosis: "Refractory Lower GI Bleeding / Cecal Angiodysplasia, Hb 7.8 g/dL",
    procedureId: "bae",
    procedureName: "Mesenteric Angiography & Microcoil Embolization",
    scheme: "MAAY (Mukhya Mantri Ayushman Arogya Yojana)",
    schemeCode: "2849-IN048A",
    implantCodes: "2849-IN048A-IMP42 (Microcoils)",
    icd10: "K92.2 (Gastrointestinal Hemorrhage)",
    bookingDate: getTomorrowDateString(),
    slotTime: "09:00 AM (First Case)",
    status: "Scheduled",
    isCallDue: true,
    isUnscheduled: false,
    hardwareIndented: "5F Sheath, 5F Cobra C2, 2.7F Progreat, 0.018 Microcoils (2mm, 3mm)",
    vendorContact: "Cook Medical / Terumo India",
    ddcStore: "Central IR Store / DDC-14",
    notes: "Post-transfusion stable. Bleeding scan positive in RLQ. Pre-op fasting from midnight required."
  },
  {
    id: "book-101",
    name: "Rajesh",
    age: "52",
    gender: "M",
    phone: "8003733656",
    crNo: "CR-2026-7841",
    ipdNo: "IPD-88912",
    bedNo: "Bed 14 (Ward 3B)",
    diagnosis: "Cirrhosis with Portal Hypertension, Sarin IGV1 Gastric Varices, Gastrorenal Shunt (GRS)",
    procedureId: "parto_brto",
    procedureName: "PARTO (Plug-Assisted Retrograde Transvenous Obliteration)",
    scheme: "MAAY (Mukhya Mantri Ayushman Arogya Yojana)",
    schemeCode: "2849-IN064A",
    implantCodes: "2849-IN064A-IMP49 (AVP II Plug) + IMP50 (Coils) + IMP51 (Lipiodol)",
    icd10: "I85.0 (Gastric Varices with Bleeding) / K74.6",
    bookingDate: "2026-11-02",
    slotTime: "09:00 AM (First Case)",
    status: "Completed",
    completedAt: "2026-11-02 11:45 AM",
    isUnscheduled: false,
    hardwareIndented: "8F Cook Flexor Sheath (45cm), 12mm Amplatzer Vascular Plug II, 2.7F Progreat, Lipiodol 10ml, Gelfoam",
    vendorContact: "Amplatzer (Abbott / Medtronic) + Guerbet Lipiodol (Jaipur Surgical)",
    ddcStore: "Central IR Store / DDC-14",
    notes: "Platelets 68,000, INR 1.34, Albumin 3.1 g/dL, GRS diameter 10.2 mm. Plug sized to 14mm."
  },
  {
    id: "book-102",
    name: "Manish",
    age: "28",
    gender: "M",
    phone: "8921487812",
    crNo: "CR-2026-7890",
    ipdNo: "IPD-88934",
    bedNo: "Bed 08 (IR Day Care)",
    diagnosis: "High-Flow Arteriovenous Malformation (AVM) of Right Hand (Yakes Type II / Cho Type III)",
    procedureId: "avm",
    procedureName: "Hand AVM Embolization (Liquid Embolic / Onyx / NBCA)",
    scheme: "MAAY (Mukhya Mantri Ayushman Arogya Yojana)",
    schemeCode: "2849-IN049B / 2849-IN077B",
    implantCodes: "2849-IN077B-IMP54 (DMSO Microcatheter) + IMP57 (EVOH Onyx vials)",
    icd10: "Q27.31 (Arteriovenous Malformation of Upper Extremity)",
    bookingDate: "2026-11-03",
    slotTime: "11:30 AM",
    status: "Scheduled",
    isUnscheduled: false,
    hardwareIndented: "5F Radial Sheath, 5F Envoy Guiding Catheter, Marathon Microcatheter, Onyx 18 (2 vials), DMSO",
    vendorContact: "Medtronic India (Onyx 18) + Terumo",
    ddcStore: "Central IR Store / DDC-14",
    notes: "Pulsatile swelling right palmar aspect with ischemic finger pain. Direct nidal superselection planned."
  },
  {
    id: "book-103",
    name: "Hamid",
    age: "61",
    gender: "M",
    phone: "9252793162",
    crNo: "CR-2026-7915",
    ipdNo: "IPD-88970",
    bedNo: "Bed 22 (Gastro Ward)",
    diagnosis: "Multifocal Hepatocellular Carcinoma (HCC), BCLC Stage B, Child-Pugh A (Score 5), Segment 6/7 lesions",
    procedureId: "tace",
    procedureName: "Conventional TACE (cTACE - Lipiodol + Doxorubicin)",
    scheme: "MAAY (Mukhya Mantri Ayushman Arogya Yojana)",
    schemeCode: "2849-IN061A",
    implantCodes: "2849-IN061A-IMP38 (Lipiodol) + 2849-IN061A-IMP39 (Microcatheter)",
    icd10: "C22.0 (Hepatocellular Carcinoma)",
    bookingDate: "2026-11-04",
    slotTime: "09:00 AM (First Case)",
    status: "Scheduled",
    isUnscheduled: false,
    hardwareIndented: "5F Femoral Sheath, 5F Cobra C2, 2.7F Progreat, Lipiodol 10ml, Inj Doxorubicin 50mg, Gelfoam",
    vendorContact: "Lipiodol Guerbet (Jaipur Surgical Agency: +91 98290 12345) / Terumo",
    ddcStore: "Central IR Store / DDC-14",
    notes: "Triphasic CT Liver: 4.2cm hypervascular mass Segment 6 and 2.1cm lesion Segment 7. Bilirubin 1.1, Platelets 110k."
  },
  {
    id: "book-104",
    name: "Rahul",
    age: "26",
    gender: "M",
    phone: "9829144321",
    crNo: "CR-2026-7940",
    ipdNo: "IPD-88988",
    bedNo: "Bed 05 (Day Care)",
    diagnosis: "Primary Left Testicular Varicocele (Grade III) with Oligoasthenospermia & Dull Aching Pain",
    procedureId: "varicocele",
    procedureName: "Varicocele Embolization (Sandwich Coils + STS Foam Sclerotherapy)",
    scheme: "RGHS (Rajasthan Government Health Scheme)",
    schemeCode: "693 / 17",
    implantCodes: "Fibered Microcoils (0.035-inch & 0.018-inch) + Fibrovein 3% STS Sclerosant",
    icd10: "I86.1 (Scrotal Varices / Varicocele)",
    bookingDate: "2026-11-04",
    slotTime: "01:00 PM",
    status: "Scheduled",
    isUnscheduled: false,
    hardwareIndented: "5F Right CFA Sheath, 5F Cobra C2, 2.7F Progreat, 0.035 Nester Coils (6mm, 8mm, 10mm), STS 3%",
    vendorContact: "Cook Medical (Nester Coils) + SMS Pharmacy",
    ddcStore: "Central IR Store / DDC-2",
    notes: "Scrotal Doppler: Left pampiniform plexus 4.1 mm with sustained retrograde reflux on Valsalva."
  },
  {
    id: "book-105",
    name: "Vijay",
    age: "45",
    gender: "M",
    phone: "9829876543",
    crNo: "CR-2026-7988",
    ipdNo: "IPD-89012",
    bedNo: "Bed 11 (Neuro / Vascular)",
    diagnosis: "Bilateral Lower Extremity Varicose Veins (CEAP C4b) with Incompetent Great Saphenous Vein",
    procedureId: "evla",
    procedureName: "Endovenous Laser Ablation (EVLA 1470nm) + Foam Sclerotherapy",
    scheme: "RGHS (Rajasthan Government Health Scheme)",
    schemeCode: "492 (EVLA Varicose Veins)",
    implantCodes: "1470nm Radial Laser Fiber + Class II Compression Stockings",
    icd10: "I83.9 (Varicose veins of lower extremities)",
    bookingDate: "2026-11-05",
    slotTime: "10:00 AM",
    status: "Scheduled",
    isUnscheduled: false,
    hardwareIndented: "1470nm Radial 2ring Laser Fiber, 6F Introducer Sheath, Tumescent Solution (500ml), Polidocanol 3%",
    vendorContact: "Biolitec India (1470nm Fiber) / SMS IR Store",
    ddcStore: "Central IR Store / DDC-2",
    notes: "Doppler: Bilateral SFJ incompetence, Right GSV 7.8 mm with reflux time 2.4 sec. Class II stockings sized L."
  },
  {
    id: "book-106",
    name: "Ramgopal",
    age: "58",
    gender: "M",
    phone: "9416787510",
    crNo: "CR-2026-8022",
    ipdNo: "IPD-89045",
    bedNo: "Bed 18 (GI Surgery Ward)",
    diagnosis: "Right Lobe Intrahepatic Cholangiocarcinoma (ICC) Planned for Extended Right Hepatectomy; FLR < 22%",
    procedureId: "pve",
    procedureName: "Portal Vein Embolization (PVE - Right Portal Branches)",
    scheme: "MAAY (Mukhya Mantri Ayushman Arogya Yojana)",
    schemeCode: "2849-IN065A",
    implantCodes: "2849-IN065A-IMP46 (Lipiodol) + IMP47 (Microcatheter) + IMP48 (Coils)",
    icd10: "C22.1 (Intrahepatic Cholangiocarcinoma) / C22.0",
    bookingDate: "2026-11-06",
    slotTime: "09:30 AM",
    status: "Scheduled",
    isUnscheduled: false,
    hardwareIndented: "21G Chiba, 4F Micropuncture, 5F Omni Flush, 2.7F Progreat, PVA 300-500um, NBCA Histoacryl Glue, Lipiodol",
    vendorContact: "B. Braun Histoacryl Glue + Guerbet Lipiodol (Jaipur Surgical)",
    ddcStore: "Central IR Store / DDC-14",
    notes: "Volumetric CT: FLR (Segments 2, 3) = 21.8%. Target: Hypertrophy to >35% before surgical resection in 3-4 weeks."
  },
  {
    id: "book-107",
    name: "Kalyan",
    age: "64",
    gender: "M",
    phone: "9829332211",
    crNo: "CR-2026-8055",
    ipdNo: "IPD-89078",
    bedNo: "Bed 04 (Nephro Dialysis Ward)",
    diagnosis: "End-Stage Renal Disease (ESRD) on Maintenance HD; High-Grade Right Innominate & Subclavian Vein Stenosis",
    procedureId: "central_venoplasty",
    procedureName: "Central Venoplasty & Bare Metal / Covered Venous Stenting",
    scheme: "MAAY (Mukhya Mantri Ayushman Arogya Yojana)",
    schemeCode: "2849-IN026C (Bare Stent) / 2849-IN026E (Covered)",
    implantCodes: "2849-IN026C-IMP385 (High Pressure Balloon) + IMP387 (Metallic Venous Stent)",
    icd10: "I87.1 (Central Vein Stenosis) / T82.858A (Vascular Graft Stenosis) / N18.6",
    bookingDate: "2026-11-06",
    slotTime: "12:30 PM",
    status: "Scheduled",
    isUnscheduled: false,
    hardwareIndented: "8F Vascular Sheath, 5F Kumpe, 0.035 Amplatz Stiff, 12mm x 40mm Conquest High Pressure Balloon, 12x60mm Wallstent",
    vendorContact: "BD Bard (Conquest Balloon) + Boston Scientific (Wallstent)",
    ddcStore: "Central IR Store / DDC-14",
    notes: "Massive right arm edema, dynamic dialysis venous pressure 240 mmHg, prolonged post-dialysis oozing (45 min)."
  },
  {
    id: "book-108",
    name: "Sunita Devi",
    age: "48",
    gender: "F",
    phone: "9829554433",
    crNo: "CR-2026-8102",
    ipdNo: "IPD-89110",
    bedNo: "Bed 15 (Chest Ward)",
    diagnosis: "Recurrent Massive Hemoptysis, Post-Tubercular Bronchiectasis Right Middle/Lower Lobe",
    procedureId: "bae",
    procedureName: "Bronchial Artery Embolization (BAE)",
    scheme: "MAAY (Mukhya Mantri Ayushman Arogya Yojana)",
    schemeCode: "2849-MC018A",
    implantCodes: "2849-MC018A-IMP21 (PVA Particles 300-500um + Microcoils)",
    icd10: "R04.2 (Hemoptysis)",
    bookingDate: "",
    slotTime: "",
    status: "Scheduled",
    isUnscheduled: true,
    hardwareIndented: "5F Sheath, 5F Mikaelson / Cobra, 2.7F Progreat Microcatheter, PVA 355-500um, Pushable Microcoils",
    vendorContact: "Terumo India (Progreat) + Merit Medical (PVA)",
    ddcStore: "Central IR Store / DDC-14",
    notes: "CT Bronchial Angiogram completed. Bronchial artery tortuous 2.8mm from T5. Awaiting PAC clearance before setting OT date."
  },
  {
    id: "book-109",
    name: "Mohan Lal",
    age: "56",
    gender: "M",
    phone: "9414223344",
    crNo: "CR-2026-8145",
    ipdNo: "IPD-89150",
    bedNo: "Bed 03 (Surgical Gastro Ward)",
    diagnosis: "Malignant Biliary Obstruction (Klatskin Bismuth Type IIIa), Cholangitis Resolving",
    procedureId: "ptbd",
    procedureName: "Percutaneous Transhepatic Biliary Drainage (PTBD - Right Anterior & Posterior)",
    scheme: "RGHS (Rajasthan Government Health Scheme)",
    schemeCode: "582 (PTBD & Biliary Stenting)",
    implantCodes: "8.3F Ring Drainage Catheter + 0.035 Glidewire",
    icd10: "C24.0 (Klatskin Tumor) / K83.1 (Obstruction of Bile Duct)",
    bookingDate: "",
    slotTime: "",
    status: "Scheduled",
    isUnscheduled: true,
    hardwareIndented: "21G Chiba, 4F Accustick, 0.018 Platinum Wire, 0.035 Stiff Glidewire, 8.3F Cook Ring Drainage Catheter",
    vendorContact: "Cook Medical (Ring Drainage) + Terumo",
    ddcStore: "Central IR Store / DDC-2",
    notes: "Total Bilirubin 16.8, Direct 12.2. IV Cefoperazone-Sulbactam ongoing. Schedule once INR normalizes."
  }
];

class IRBookingCalendarSuite {
  constructor() {
    this.storageKey = "sms_ir_booked_patients_v3";
    this.patients = this.loadBookings();
    this.holidays = RAJASTHAN_HOLIDAYS_2026;
    this.currentMonth = 10; // November 2026 by default
    this.currentYear = 2026;
    this.activeSubTab = "queue"; // "queue", "calls", "waitlist"
    this.filterScheme = "all";
    this.filterProcedure = "all";
    this.searchQuery = "";
  }

  loadBookings() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map(p => ({
            ...p,
            status: p.status || "Scheduled",
            isUnscheduled: p.isUnscheduled === true || !p.bookingDate || p.bookingDate.trim() === ""
          }));
        }
      } catch (e) {
        console.error("Error loading booked patients v3:", e);
      }
    }

    const savedV2 = localStorage.getItem("sms_ir_booked_patients_v2");
    if (savedV2) {
      try {
        const parsedV2 = JSON.parse(savedV2);
        if (Array.isArray(parsedV2) && parsedV2.length > 0) {
          const waitlistToAdd = DEFAULT_BOOKED_PATIENTS.filter(dp => dp.isUnscheduled);
          const tmrwToAdd = DEFAULT_BOOKED_PATIENTS.filter(dp => dp.isCallDue);
          const merged = [...parsedV2, ...waitlistToAdd, ...tmrwToAdd].map(p => ({
            ...p,
            status: p.status || "Scheduled",
            isUnscheduled: p.isUnscheduled === true || !p.bookingDate || p.bookingDate.trim() === ""
          }));
          return merged;
        }
      } catch (e) {}
    }

    return [...DEFAULT_BOOKED_PATIENTS];
  }

  saveBookings() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.patients));
  }

  isDateHoliday(dateString) {
    if (!dateString) return null;
    const holiday = this.holidays.find(h => h.date === dateString);
    if (holiday) return holiday;

    const d = new Date(dateString + "T00:00:00");
    if (d.getDay() === 0) {
      return {
        date: dateString,
        nameEn: "Sunday (Weekend Non-Routine OT)",
        nameHi: "रविवार (साप्ताहिक अवकाश)",
        type: "Sunday",
        day: "Sunday"
      };
    }
    return null;
  }

  getCallsDueToday() {
    const tmrwStr = getTomorrowDateString();
    return this.patients.filter(p => {
      if (p.isUnscheduled || !p.bookingDate || p.status === "Completed" || p.status === "Postponed") return false;
      return p.bookingDate === tmrwStr || p.isCallDue === true;
    });
  }

  getUnscheduledPatients() {
    return this.patients.filter(p => p.isUnscheduled === true || !p.bookingDate || p.bookingDate.trim() === "");
  }

  getScheduledPatients() {
    return this.patients.filter(p => !p.isUnscheduled && p.bookingDate && p.bookingDate.trim() !== "");
  }

  getCompletedCount() {
    return this.patients.filter(p => p.status === "Completed").length;
  }

  getActiveScheduledCount() {
    return this.patients.filter(p => !p.isUnscheduled && p.status !== "Completed" && p.status !== "Postponed").length;
  }

  addBooking(bookingData) {
    const newBooking = {
      id: "book-" + Date.now(),
      status: bookingData.status || "Scheduled",
      isUnscheduled: bookingData.isUnscheduled || false,
      bookingDate: bookingData.isUnscheduled ? "" : (bookingData.bookingDate || ""),
      ...bookingData
    };
    this.patients.unshift(newBooking);
    this.saveBookings();
    this.refreshAllViews();
    this.updateStatsCards();
    return newBooking;
  }

  updateBooking(id, updatedFields) {
    const idx = this.patients.findIndex(p => p.id === id);
    if (idx !== -1) {
      this.patients[idx] = { ...this.patients[idx], ...updatedFields };
      this.saveBookings();
      this.refreshAllViews();
      this.updateStatsCards();
      return this.patients[idx];
    }
    return null;
  }

  deleteBooking(id) {
    this.patients = this.patients.filter(p => p.id !== id);
    this.saveBookings();
    this.refreshAllViews();
    this.updateStatsCards();
  }

  reschedulePatient(patientId, newDate, newSlot = "09:00 AM (First Case)") {
    const p = this.patients.find(pt => pt.id === patientId);
    if (!p) return null;

    const oldDate = p.bookingDate || "Unscheduled";
    p.bookingDate = newDate;
    p.slotTime = newSlot;
    p.isUnscheduled = false;
    p.isCallDue = (newDate === getTomorrowDateString());
    if (p.status === "Postponed") {
      p.status = "Scheduled";
    }

    this.saveBookings();
    this.refreshAllViews();
    this.updateStatsCards();

    const holidayAlert = this.isDateHoliday(newDate);
    if (typeof showToast === 'function') {
      showToast(`Rescheduled ${p.name} from ${oldDate} to ${newDate} (${newSlot})`, 'success');
    }

    return { patient: p, holidayAlert };
  }

  toggleCompletedStatus(patientId) {
    const p = this.patients.find(pt => pt.id === patientId);
    if (!p) return;

    if (p.status !== "Completed") {
      p.status = "Completed";
      p.completedAt = new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      if (typeof showToast === 'function') {
        showToast(`Procedure marked COMPLETED for ${p.name} (${p.procedureName})`, 'success');
      }
    } else {
      p.status = "Scheduled";
      delete p.completedAt;
      if (typeof showToast === 'function') {
        showToast(`Status reverted to Scheduled for ${p.name}`, 'info');
      }
    }

    this.saveBookings();
    this.refreshAllViews();
    this.updateStatsCards();
  }

  toggleCallStatus(patientId) {
    const p = this.patients.find(pt => pt.id === patientId);
    if (!p) return;

    if (p.status !== "Pre-Op Call Done") {
      p.status = "Pre-Op Call Done";
      p.callDoneAt = new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      if (typeof showToast === 'function') {
        showToast(`Pre-Op Call marked DONE for ${p.name}. Fasting & scheme verified.`, 'success');
      }
    } else {
      p.status = "Scheduled";
      delete p.callDoneAt;
      if (typeof showToast === 'function') {
        showToast(`Pre-Op Call status reset to Scheduled for ${p.name}`, 'info');
      }
    }

    this.saveBookings();
    this.refreshAllViews();
    this.updateStatsCards();
  }

  sendPreOpCallReminderWhatsApp(patientId) {
    const p = this.patients.find(pt => pt.id === patientId);
    if (!p) return;

    let cleanPhone = (p.phone || "").replace(/\D/g, "");
    if (cleanPhone.length === 10) cleanPhone = "91" + cleanPhone;
    if (!cleanPhone) {
      alert("No phone number recorded for patient " + p.name);
      return;
    }

    const scheduledDate = p.bookingDate || "Tomorrow";
    const slot = p.slotTime || "Morning Slot";

    const msg = 
`*SMS MEDICAL COLLEGE & HOSPITALS, JAIPUR*
*Department of Radiodiagnosis & Interventional Radiology*
--------------------------------------------------
*PATIENT PRE-PROCEDURE INSTRUCTION & CALL REMINDER*

Dear *${p.name}*,
Your Interventional Radiology procedure (*${p.procedureName}*) is scheduled on *${scheduledDate}* (${slot}) at the SMS IR Angio Suite.

*CRITICAL PRE-OPERATIVE INSTRUCTIONS:*
1. *Strict Fasting (NPO):* Do NOT eat or drink anything (including water/tea) after 12:00 midnight (minimum 6-8 hours fasting).
2. *Government Scheme Cards:* Please bring Original *${p.scheme}* Card and Patient Aadhaar Card for admission clearance.
3. *Diagnostic Films & Lab Reports:* Bring all prior CT / MRI / Ultrasound films and blood reports (CBC, PT/INR, LFT, RFT, Viral Markers).
4. *Attendants:* 1 to 2 adult blood relatives / attendants must accompany the patient.
5. *Reporting Location:* Report at 08:00 AM sharp at:
   *IR Day Care / Angio Suite, Ground Floor, Bangur Building, SMS Hospital, Jaipur.*

For any urgent query, contact the Interventional Radiology Resident on duty.
--------------------------------------------------`;

    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");

    setTimeout(() => {
      if (confirm(`WhatsApp instructions opened for ${p.name} (${p.phone}).\n\nWould you like to mark the Pre-Op Call as COMPLETED for this patient?`)) {
        this.toggleCallStatus(p.id);
      }
    }, 600);
  }

  getFilteredBookings() {
    return this.patients.filter(p => {
      const matchScheme = this.filterScheme === "all" || p.scheme.toLowerCase().includes(this.filterScheme.toLowerCase());
      const matchProc = this.filterProcedure === "all" || p.procedureId === this.filterProcedure;
      const matchSearch = !this.searchQuery || 
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.phone.includes(this.searchQuery) ||
        (p.crNo && p.crNo.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
        (p.procedureName && p.procedureName.toLowerCase().includes(this.searchQuery.toLowerCase()));
      return matchScheme && matchProc && matchSearch;
    });
  }

  updateStatsCards() {
    const totalEl = document.getElementById("stat-total-bookings");
    const completedEl = document.getElementById("stat-completed-count");
    const callsEl = document.getElementById("stat-calls-due");
    const waitlistEl = document.getElementById("stat-waitlist-count");
    const badgeCountEl = document.getElementById("badge-booking-count");

    const activeCount = this.getActiveScheduledCount();
    const completedCount = this.getCompletedCount();
    const callsCount = this.getCallsDueToday().length;
    const waitlistCount = this.getUnscheduledPatients().length;

    if (totalEl) totalEl.innerText = `${activeCount} Cases`;
    if (completedEl) completedEl.innerText = `${completedCount} Done`;
    if (callsEl) callsEl.innerText = `${callsCount} Calls`;
    if (waitlistEl) waitlistEl.innerText = `${waitlistCount} Pool`;
    if (badgeCountEl) badgeCountEl.innerText = `${activeCount + waitlistCount}`;

    const subUpcoming = document.getElementById("badge-opd-upcoming");
    const subCalls = document.getElementById("badge-opd-calls");
    const subWaitlist = document.getElementById("badge-opd-waitlist");

    if (subUpcoming) subUpcoming.innerText = `${this.getScheduledPatients().length}`;
    if (subCalls) subCalls.innerText = `${callsCount}`;
    if (subWaitlist) subWaitlist.innerText = `${waitlistCount}`;
  }

  refreshAllViews() {
    if (document.getElementById("calendar-pane-container")) {
      this.renderCalendarMatrix("calendar-pane-container");
    }
    if (document.getElementById("opd-roster-dock-container")) {
      this.renderOPDViewer("opd-roster-dock-container");
    }
    if (document.getElementById("booking-table-container")) {
      this.renderBookingTable("booking-table-container");
    }
    if (document.getElementById("calendar-month-container")) {
      this.renderCalendarMatrix("calendar-month-container");
    }
  }

  renderUnifiedCalendarSuite(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="opd-roster-layout">
        <!-- Left Pane: Interactive Calendar Matrix -->
        <div class="card" style="padding: 14px;" id="calendar-pane-container"></div>

        <!-- Right Pane: Integrated OPD List & Case Viewer Dock -->
        <div class="opd-roster-pane" id="opd-roster-dock-container"></div>
      </div>
    `;

    this.renderCalendarMatrix("calendar-pane-container");
    this.renderOPDViewer("opd-roster-dock-container");
    this.updateStatsCards();
  }

  renderCalendarMatrix(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const monthNames = [
      "January 2026", "February 2026", "March 2026", "April 2026",
      "May 2026", "June 2026", "July 2026", "August 2026",
      "September 2026", "October 2026", "November 2026", "December 2026"
    ];

    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    let html = `
      <div class="calendar-header-nav" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; gap: 6px; align-items: center;">
          <button class="btn btn-sm btn-outline" id="btn-cal-prev-month" title="Previous Month">
            <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
            Prev
          </button>
          <button class="btn btn-sm btn-outline" id="btn-cal-next-month" title="Next Month">
            Next
            <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <button class="btn btn-sm btn-outline" id="btn-cal-jump-nov" style="font-size: 11px;" title="Jump to Digitized OT Register">
            Nov 2026 (OT Register)
          </button>
        </div>

        <h3 style="margin: 0; font-size: 14.5px; color: var(--text-main); font-weight: 700; display: inline-flex; align-items: center; gap: 8px;">
          <svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${monthNames[this.currentMonth]}
        </h3>

        <div style="display: flex; gap: 6px;">
          <button class="btn btn-sm btn-primary" id="btn-cal-add-case" title="Book New Case on Selected Date">
            <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            + Add Case
          </button>
        </div>
      </div>

      <div style="display: flex; gap: 12px; font-size: 10.5px; color: var(--text-muted); margin-bottom: 8px; flex-wrap: wrap; padding: 4px 6px; background: var(--bg-surface-alt); border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
        <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="width: 8px; height: 8px; background: var(--danger-light); border: 1px solid var(--danger-border); border-radius: 2px;"></span> Rajasthan Holiday</span>
        <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="width: 8px; height: 8px; background: var(--primary-light); border: 1px solid var(--primary-border); border-radius: 2px;"></span> Scheduled</span>
        <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="width: 8px; height: 8px; background: rgba(13, 148, 136, 0.2); border: 1px solid rgba(13, 148, 136, 0.4); border-radius: 2px;"></span> Call Done</span>
        <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="width: 8px; height: 8px; background: var(--success-light); border: 1px solid var(--success-border); border-radius: 2px;"></span> Completed</span>
        <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="font-weight: 700; color: var(--primary);">+</span> Click date to book</span>
      </div>

      <div class="calendar-grid-month">
        <div class="cal-day-header sun">Sun (रवि)</div>
        <div class="cal-day-header">Mon (सोम)</div>
        <div class="cal-day-header">Tue (मंगल)</div>
        <div class="cal-day-header">Wed (बुध)</div>
        <div class="cal-day-header">Thu (गुरु)</div>
        <div class="cal-day-header">Fri (शुक्र)</div>
        <div class="cal-day-header sat">Sat (शनि)</div>
    `;

    for (let i = 0; i < firstDay; i++) {
      html += `<div class="cal-cell empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const monthStr = String(this.currentMonth + 1).padStart(2, '0');
      const dayStr = String(day).padStart(2, '0');
      const dateString = `${this.currentYear}-${monthStr}-${dayStr}`;

      const holiday = this.holidays.find(h => h.date === dateString);
      const isSunday = new Date(this.currentYear, this.currentMonth, day).getDay() === 0;

      const bookedCases = this.patients.filter(p => !p.isUnscheduled && p.bookingDate === dateString);

      let cellClass = "cal-cell";
      if (isSunday) cellClass += " is-sunday";
      if (holiday) cellClass += " is-holiday";
      if (bookedCases.length > 0) cellClass += " has-bookings";

      html += `
        <div class="${cellClass}" data-date="${dateString}" title="Click date to schedule a case">
          <div class="cal-cell-top">
            <span class="cal-date-num">${day}</span>
            <button class="cal-add-btn btn-cell-add" data-date="${dateString}" title="Book patient on ${dateString}">
              <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" stroke-width="3" fill="none"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
      `;

      if (holiday) {
        html += `<div class="cal-holiday-tag" title="${holiday.nameEn} / ${holiday.nameHi}"><span class="badge-dot danger"></span> ${holiday.nameEn}</div>`;
      }

      if (bookedCases.length > 0) {
        bookedCases.forEach(b => {
          let chipClass = "chip-scheduled";
          let statusIcon = "";

          if (b.status === "Completed") {
            chipClass = "chip-completed";
            statusIcon = `<svg viewBox="0 0 24 24" width="9" height="9" stroke="currentColor" stroke-width="3" fill="none"><polyline points="20 6 9 17 4 12"/></svg>`;
          } else if (b.status === "Pre-Op Call Done") {
            chipClass = "chip-calldone";
            statusIcon = `<svg viewBox="0 0 24 24" width="9" height="9" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
          } else if (b.status === "In OT") {
            chipClass = "chip-inot";
          } else if (b.status === "Postponed") {
            chipClass = "chip-postponed";
          }

          html += `
            <div class="cal-case-chip ${chipClass} btn-view-cal-chip" data-id="${b.id}" title="${b.name}: ${b.procedureName} [${b.status}] - Click to view/edit">
              <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${b.name} (${b.procedureId ? b.procedureId.toUpperCase() : 'IR'})</span>
              <span style="display: inline-flex; align-items: center; margin-left: 2px;">${statusIcon}</span>
            </div>
          `;
        });
      }

      html += `</div>`;
    }

    html += `</div>`;
    container.innerHTML = html;

    const prevBtn = document.getElementById("btn-cal-prev-month");
    const nextBtn = document.getElementById("btn-cal-next-month");
    const jumpNovBtn = document.getElementById("btn-cal-jump-nov");
    const addGlobalBtn = document.getElementById("btn-cal-add-case");

    if (prevBtn) {
      prevBtn.onclick = () => {
        this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
        if (this.currentMonth === 11) this.currentYear--;
        this.renderCalendarMatrix(containerId);
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        this.currentMonth = (this.currentMonth === 11) ? 0 : this.currentMonth + 1;
        if (this.currentMonth === 0) this.currentYear++;
        this.renderCalendarMatrix(containerId);
      };
    }

    if (jumpNovBtn) {
      jumpNovBtn.onclick = () => {
        this.currentMonth = 10;
        this.currentYear = 2026;
        this.renderCalendarMatrix(containerId);
      };
    }

    if (addGlobalBtn) {
      addGlobalBtn.onclick = () => this.showAddBookingModal();
    }

    container.querySelectorAll(".cal-cell:not(.empty)").forEach(cell => {
      cell.onclick = (e) => {
        if (e.target.closest(".cal-case-chip")) return;
        const dateStr = cell.dataset.date;
        this.showAddBookingModal(dateStr);
      };
    });

    container.querySelectorAll(".btn-cell-add").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const dateStr = btn.dataset.date;
        this.showAddBookingModal(dateStr);
      };
    });

    container.querySelectorAll(".btn-view-cal-chip").forEach(chip => {
      chip.onclick = (e) => {
        e.stopPropagation();
        const id = chip.dataset.id;
        this.showBookingDetailModal(id);
      };
    });
  }

  renderOPDViewer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const scheduled = this.getScheduledPatients();
    const callsDue = this.getCallsDueToday();
    const waitlist = this.getUnscheduledPatients();

    let displayList = [];
    if (this.activeSubTab === "calls") {
      displayList = callsDue;
    } else if (this.activeSubTab === "waitlist") {
      displayList = waitlist;
    } else {
      displayList = [...scheduled].sort((a, b) => (a.bookingDate || "").localeCompare(b.bookingDate || ""));
    }

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      displayList = displayList.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.phone.includes(q) ||
        (p.crNo && p.crNo.toLowerCase().includes(q)) ||
        (p.procedureName && p.procedureName.toLowerCase().includes(q))
      );
    }
    if (this.filterScheme !== "all") {
      displayList = displayList.filter(p => p.scheme.toLowerCase().includes(this.filterScheme.toLowerCase()));
    }

    let html = `
      <div class="opd-roster-header">
        <div>
          <div style="font-size: 13px; font-weight: 700; color: var(--text-main); display: flex; align-items: center; gap: 6px;">
            <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            SMS IR OPD & Patient Dock
          </div>
          <div style="font-size: 10.5px; color: var(--text-muted); margin-top: 1px;">
            Live case pipeline & 1-day prior pre-op caller
          </div>
        </div>

        <button class="btn btn-sm btn-primary" id="btn-dock-add-patient" style="font-size: 11px; padding: 4px 8px;">
          + New Patient
        </button>
      </div>

      <div class="opd-subtabs">
        <button class="opd-subtab-btn ${this.activeSubTab === 'queue' ? 'active' : ''}" data-subtab="queue">
          Scheduled Queue
          <span class="tab-badge" id="badge-opd-upcoming">${scheduled.length}</span>
        </button>
        <button class="opd-subtab-btn ${this.activeSubTab === 'calls' ? 'active' : ''}" data-subtab="calls">
          Pre-Op Calls (D-1)
          <span class="tab-badge" id="badge-opd-calls" style="${callsDue.length > 0 ? 'background: var(--warning); color: #fff;' : ''}">${callsDue.length}</span>
        </button>
        <button class="opd-subtab-btn ${this.activeSubTab === 'waitlist' ? 'active' : ''}" data-subtab="waitlist">
          Waitlist Pool
          <span class="tab-badge" id="badge-opd-waitlist">${waitlist.length}</span>
        </button>
      </div>

      <div style="padding: 8px 12px; background: var(--bg-surface-alt); border-bottom: 1px solid var(--border-light); display: flex; gap: 6px;">
        <input type="text" id="opd-search-input" class="form-control" placeholder="Search patient, phone, CR..." value="${this.searchQuery}" style="font-size: 11.5px; padding: 4px 8px; flex: 1;">
        <select id="opd-scheme-select" class="form-control" style="font-size: 11px; width: 100px; padding: 4px;">
          <option value="all" ${this.filterScheme === 'all' ? 'selected' : ''}>All Schemes</option>
          <option value="maay" ${this.filterScheme === 'maay' ? 'selected' : ''}>MAAY</option>
          <option value="rghs" ${this.filterScheme === 'rghs' ? 'selected' : ''}>RGHS</option>
        </select>
      </div>

      <div class="opd-queue-scroll">
    `;

    if (this.activeSubTab === "calls") {
      html += `
        <div class="reminder-ribbon">
          <div>
            <div class="reminder-ribbon-title">
              <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              1-Day Prior Pre-Op Call Engine (D-1)
            </div>
            <div class="reminder-ribbon-desc">
              Call scheduled patients 24 hours prior to reinforce NPO fasting (from 12 midnight), MAAY/RGHS smart card, prior CT/MRI films, and 08:00 AM reporting at Bangur Angio Suite.
            </div>
          </div>
        </div>
      `;
    } else if (this.activeSubTab === "waitlist") {
      html += `
        <div style="background: rgba(124, 58, 237, 0.08); border: 1px solid rgba(124, 58, 237, 0.25); border-left: 4px solid var(--purple); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 11px; color: var(--text-main);">
          <strong>Unscheduled OPD Waitlist Pool:</strong> Patients seen in OPD or ward pending CT/MRI, PAC, or biopsy confirmation. Click <strong>"Assign Date"</strong> to schedule directly to the OT Calendar.
        </div>
      `;
    }

    if (displayList.length === 0) {
      let emptyMsg = "No patients in this list.";
      if (this.activeSubTab === "calls") {
        emptyMsg = "No D-1 pre-op calls pending today. All upcoming patients contacted or scheduled dates are further out.";
      } else if (this.activeSubTab === "waitlist") {
        emptyMsg = "No unscheduled patients in the waitlist pool.";
      }
      html += `
        <div style="text-align: center; padding: 30px 16px; color: var(--text-muted); font-size: 11.5px;">
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="1.5" fill="none" style="margin-bottom: 6px; opacity: 0.5;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <div>${emptyMsg}</div>
        </div>
      `;
    } else {
      displayList.forEach(p => {
        const isCompleted = p.status === "Completed";
        const isCallDone = p.status === "Pre-Op Call Done";
        const isWaitlist = p.isUnscheduled;
        const holidayAlert = p.bookingDate ? this.isDateHoliday(p.bookingDate) : null;

        let cardClasses = "opd-patient-card";
        if (isCompleted) cardClasses += " is-completed";
        if (p.isCallDue && !isCallDone && !isCompleted) cardClasses += " due-call";

        const schemeBadgeClass = (p.scheme || "").toLowerCase().includes("maay") ? "scheme-badge-maay" : "scheme-badge-rghs";

        html += `
          <div class="${cardClasses}" data-id="${p.id}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 6px;">
              <div>
                <div style="font-weight: 700; font-size: 13px; color: var(--text-main); display: flex; align-items: center; gap: 6px;">
                  ${p.name}
                  <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(${p.age || '—'}/${p.gender || '—'})</span>
                </div>
                <div style="font-size: 10.5px; color: var(--text-muted); margin-top: 1px;">
                  CR: <span style="font-family: var(--font-mono);">${p.crNo || '—'}</span> • ${p.bedNo || 'Day Care'}
                </div>
              </div>

              <select class="form-control opd-status-select" data-id="${p.id}" style="font-size: 10.5px; padding: 2px 4px; font-weight: 600; width: auto;">
                <option value="Scheduled" ${p.status === 'Scheduled' ? 'selected' : ''}>Scheduled</option>
                <option value="Pre-Op Call Done" ${p.status === 'Pre-Op Call Done' ? 'selected' : ''}>Call Done</option>
                <option value="In OT" ${p.status === 'In OT' ? 'selected' : ''}>In OT</option>
                <option value="Completed" ${p.status === 'Completed' ? 'selected' : ''}>Completed</option>
                <option value="Postponed" ${p.status === 'Postponed' ? 'selected' : ''}>Postponed</option>
              </select>
            </div>

            <div>
              <div style="font-weight: 600; font-size: 12px; color: var(--primary);">
                ${p.procedureName}
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px; flex-wrap: wrap;">
                <span class="${schemeBadgeClass}">${(p.scheme || '').includes('MAAY') ? 'MAAY' : 'RGHS'}</span>
                <span style="font-family: var(--font-mono); font-size: 10.5px; color: var(--text-muted); font-weight: 600;">${p.schemeCode || ''}</span>
                <span style="font-size: 10px; color: var(--text-muted);">ICD: ${p.icd10 || '—'}</span>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; background: var(--bg-surface-alt); padding: 5px 8px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
              <div>
                ${isWaitlist ? `
                  <span style="color: var(--purple); font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
                    <svg viewBox="0 0 24 24" width="11" height="11" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                    Date TBD (Waitlist)
                  </span>
                ` : `
                  <span style="font-weight: 700; color: var(--text-main);">${p.bookingDate}</span>
                  <span style="color: var(--text-muted); font-size: 10px;">(${p.slotTime || 'Morning'})</span>
                `}
                ${holidayAlert ? `<div class="holiday-alert-badge" style="margin-top: 2px;"><span class="badge-dot warning"></span> ${holidayAlert.nameEn}</div>` : ''}
              </div>

              <div>
                <a href="tel:${p.phone}" class="btn btn-xs btn-outline" style="text-decoration: none; color: var(--text-main); font-size: 10.5px; padding: 2px 6px;" title="Call Patient">
                  <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  ${p.phone || 'No phone'}
                </a>
              </div>
            </div>

            ${p.notes ? `
              <div style="font-size: 10.5px; color: var(--text-muted); line-height: 1.35; max-height: 38px; overflow: hidden; text-overflow: ellipsis;">
                <strong>Notes:</strong> ${p.notes}
              </div>
            ` : ''}

            <div style="display: flex; gap: 4px; justify-content: space-between; align-items: center; margin-top: 4px; border-top: 1px solid var(--border-light); padding-top: 6px; flex-wrap: wrap;">
              <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                <button class="btn btn-xs btn-outline btn-opd-whatsapp" data-id="${p.id}" title="Send WhatsApp Pre-Op Instructions & Fasting Reminder">
                  <svg viewBox="0 0 24 24" width="11" height="11" stroke="currentColor" stroke-width="2" fill="none" style="color: #25D366;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  ${isCallDone ? 'Call Done' : 'Pre-Op Call'}
                </button>

                <button class="btn btn-xs btn-outline btn-opd-reschedule" data-id="${p.id}" title="Reschedule to another day with Holiday check">
                  <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                  ${isWaitlist ? 'Assign Date' : 'Reschedule'}
                </button>

                <button class="btn btn-xs ${isCompleted ? 'btn-success' : 'btn-outline'} btn-opd-complete" data-id="${p.id}" title="Toggle Procedure Complete">
                  <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  ${isCompleted ? 'Completed' : 'Mark Done'}
                </button>
              </div>

              <div style="display: flex; gap: 4px;">
                <button class="btn btn-xs btn-primary btn-opd-discharge" data-id="${p.id}" title="Autofill Discharge Summary & IHMS Payload">
                  Discharge
                </button>
                <button class="btn btn-xs btn-outline btn-opd-details" data-id="${p.id}" title="View Hardware & Protocol Details">
                  Details
                </button>
                <button class="btn btn-xs btn-outline btn-opd-delete" data-id="${p.id}" style="color: var(--danger);" title="Remove Patient">
                  <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </div>
            </div>
          </div>
        `;
      });
    }

    html += `</div>`;
    container.innerHTML = html;

    container.querySelectorAll(".opd-subtab-btn").forEach(btn => {
      btn.onclick = () => {
        this.activeSubTab = btn.dataset.subtab;
        this.renderOPDViewer(containerId);
      };
    });

    const searchInp = document.getElementById("opd-search-input");
    if (searchInp) {
      searchInp.oninput = (e) => {
        this.searchQuery = e.target.value;
        this.renderOPDViewer(containerId);
      };
    }

    const schemeSel = document.getElementById("opd-scheme-select");
    if (schemeSel) {
      schemeSel.onchange = (e) => {
        this.filterScheme = e.target.value;
        this.renderOPDViewer(containerId);
      };
    }

    const dockAddBtn = document.getElementById("btn-dock-add-patient");
    if (dockAddBtn) {
      dockAddBtn.onclick = () => this.showAddBookingModal();
    }

    container.querySelectorAll(".opd-status-select").forEach(sel => {
      sel.onchange = (e) => {
        const id = sel.dataset.id;
        const newStatus = e.target.value;
        if (newStatus === "Completed") {
          this.toggleCompletedStatus(id);
        } else if (newStatus === "Pre-Op Call Done") {
          this.toggleCallStatus(id);
        } else {
          this.updateBooking(id, { status: newStatus });
        }
      };
    });

    container.querySelectorAll(".btn-opd-whatsapp").forEach(btn => {
      btn.onclick = () => this.sendPreOpCallReminderWhatsApp(btn.dataset.id);
    });

    container.querySelectorAll(".btn-opd-reschedule").forEach(btn => {
      btn.onclick = () => this.showRescheduleModal(btn.dataset.id);
    });

    container.querySelectorAll(".btn-opd-complete").forEach(btn => {
      btn.onclick = () => this.toggleCompletedStatus(btn.dataset.id);
    });

    container.querySelectorAll(".btn-opd-discharge").forEach(btn => {
      btn.onclick = () => this.loadPatientIntoDischargeForm(btn.dataset.id);
    });

    container.querySelectorAll(".btn-opd-details").forEach(btn => {
      btn.onclick = () => this.showBookingDetailModal(btn.dataset.id);
    });

    container.querySelectorAll(".btn-opd-delete").forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        if (confirm("Remove this case from the schedule?")) {
          this.deleteBooking(id);
        }
      };
    });
  }

  showRescheduleModal(patientId) {
    const p = this.patients.find(pt => pt.id === patientId);
    if (!p) return;

    const initialDate = p.bookingDate || getTomorrowDateString();
    const holidayInit = this.isDateHoliday(initialDate);

    const modalHtml = `
      <div class="modal-backdrop" id="reschedule-modal">
        <div class="modal-card" style="max-width: 500px;">
          <div class="modal-header">
            <h3 style="margin: 0; font-size: 15px; color: var(--text-main); font-weight: 700;">
              Reschedule Case: ${p.name}
            </h3>
            <button class="btn-close-modal" onclick="document.getElementById('reschedule-modal').remove()" aria-label="Close modal">
              <svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="modal-body">
            <div style="background: var(--bg-surface-alt); padding: 10px 12px; border-radius: var(--radius-sm); margin-bottom: 12px; font-size: 11.5px; border: 1px solid var(--border-light);">
              <div><strong>Procedure:</strong> ${p.procedureName}</div>
              <div style="margin-top: 3px;"><strong>Current Scheduled Date:</strong> ${p.bookingDate ? `<span style="color: var(--primary); font-weight: 700;">${p.bookingDate} (${p.slotTime || 'Morning'})</span>` : '<span style="color: var(--purple); font-weight: 700;">Unscheduled Waitlist</span>'}</div>
              <div style="margin-top: 3px;"><strong>Patient Phone:</strong> <a href="tel:${p.phone}">${p.phone}</a></div>
            </div>

            <form id="form-reschedule">
              <div class="form-group" style="margin-bottom: 10px;">
                <label style="font-size: 12px; font-weight: 600;">Select New Procedure Date *</label>
                <input type="date" id="reschedule-new-date" class="form-control" value="${initialDate}" required style="font-size: 12px;">
              </div>

              <div id="reschedule-holiday-warning" style="${holidayInit ? 'display: block;' : 'display: none;'} margin-bottom: 10px;">
                <div class="holiday-alert-badge" style="padding: 8px 10px; border-radius: var(--radius-sm); font-size: 11px; line-height: 1.4;">
                  <span class="badge-dot danger"></span>
                  <strong id="reschedule-holiday-name">${holidayInit ? `${holidayInit.nameEn} (${holidayInit.nameHi})` : ''}</strong>
                  <div style="color: var(--text-main); margin-top: 2px;">Rajasthan Public Holiday / Sunday. Routine elective OT is closed. Emergency cases require HOD / Consultant clearance.</div>
                </div>
              </div>

              <div class="form-group" style="margin-bottom: 14px;">
                <label style="font-size: 12px; font-weight: 600;">Select OT Slot</label>
                <select id="reschedule-new-slot" class="form-control" style="font-size: 12px;">
                  <option value="09:00 AM (First Case)" ${p.slotTime && p.slotTime.includes('09:00') ? 'selected' : ''}>09:00 AM (First Case)</option>
                  <option value="11:30 AM (Second Case)" ${p.slotTime && p.slotTime.includes('11:30') ? 'selected' : ''}>11:30 AM (Second Case)</option>
                  <option value="02:00 PM (Afternoon Slot)" ${p.slotTime && p.slotTime.includes('02:00') ? 'selected' : ''}>02:00 PM (Afternoon Slot)</option>
                  <option value="Emergency OT (Urgent Clearance)" ${p.slotTime && p.slotTime.includes('Emergency') ? 'selected' : ''}>Emergency OT (Urgent Clearance)</option>
                </select>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 8px;">
                <button type="button" class="btn btn-outline" onclick="document.getElementById('reschedule-modal').remove()">Cancel</button>
                <button type="submit" class="btn btn-primary">Confirm & Update Date</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const dateInp = document.getElementById("reschedule-new-date");
    const warningEl = document.getElementById("reschedule-holiday-warning");
    const warningName = document.getElementById("reschedule-holiday-name");

    if (dateInp) {
      dateInp.onchange = (e) => {
        const val = e.target.value;
        const hol = this.isDateHoliday(val);
        if (hol) {
          warningName.innerText = `${hol.nameEn} (${hol.nameHi}) - ${hol.day}`;
          warningEl.style.display = "block";
        } else {
          warningEl.style.display = "none";
        }
      };
    }

    document.getElementById("form-reschedule").onsubmit = (e) => {
      e.preventDefault();
      const newDate = document.getElementById("reschedule-new-date").value;
      const newSlot = document.getElementById("reschedule-new-slot").value;

      this.reschedulePatient(p.id, newDate, newSlot);
      document.getElementById("reschedule-modal").remove();
    };
  }

  showAddBookingModal(presetDate = null) {
    const defaultDate = presetDate || getTomorrowDateString();
    const holidayInit = this.isDateHoliday(defaultDate);

    const modalHtml = `
      <div class="modal-backdrop" id="add-booking-modal">
        <div class="modal-card" style="max-width: 680px; max-height: 92vh; overflow-y: auto;">
          <div class="modal-header">
            <h3 style="margin: 0; font-size: 15px; color: var(--text-main); font-weight: 700;">
              ${presetDate ? `Schedule Case on ${presetDate}` : 'Book Interventional Radiology Case'}
            </h3>
            <button class="btn-close-modal" onclick="document.getElementById('add-booking-modal').remove()" aria-label="Close modal">
              <svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="modal-body">
            <form id="form-add-booking" style="font-size: 12px;">
              
              <div style="background: rgba(124, 58, 237, 0.08); border: 1px solid rgba(124, 58, 237, 0.25); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <strong style="color: var(--purple);">Waitlist Pool Option</strong>
                  <div style="font-size: 11px; color: var(--text-muted);">Add patient without fixed date (awaiting CT/MRI, PAC, or lab workup)</div>
                </div>
                <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; font-weight: 600; font-size: 11.5px;">
                  <input type="checkbox" id="new-book-unscheduled">
                  Add to Waitlist (No Date)
                </label>
              </div>

              <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div class="form-group">
                  <label>Patient Full Name *</label>
                  <input type="text" id="new-book-name" class="form-control" required placeholder="e.g. Ramesh Kumar">
                </div>
                <div class="form-group">
                  <label>Contact Phone Number * (for D-1 Reminders)</label>
                  <input type="tel" id="new-book-phone" class="form-control" required placeholder="10-digit mobile number">
                </div>
                <div class="form-group">
                  <label>Age & Gender</label>
                  <div style="display: flex; gap: 6px;">
                    <input type="number" id="new-book-age" class="form-control" placeholder="Age" style="width: 75px;">
                    <select id="new-book-gender" class="form-control">
                      <option value="M">Male (M)</option>
                      <option value="F">Female (F)</option>
                      <option value="O">Other</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label>CR / IPD Number</label>
                  <input type="text" id="new-book-cr" class="form-control" placeholder="CR-2026-XXXX / IPD-XXXX">
                </div>

                <div class="form-group" style="grid-column: span 2;">
                  <label>Procedure Type *</label>
                  <select id="new-book-proc" class="form-control" required>
                    <option value="tace">TACE (cTACE / DEB-TACE for HCC)</option>
                    <option value="bae">BAE (Bronchial Artery Embolization / Hemoptysis)</option>
                    <option value="parto_brto">PARTO / BRTO (Gastric Varices)</option>
                    <option value="pve">Portal Vein Embolization (PVE)</option>
                    <option value="avm">Hand / Extremity / Peripheral AVM Embolization</option>
                    <option value="varicocele">Varicocele Embolization</option>
                    <option value="central_venoplasty">Central Venoplasty & Stenting</option>
                    <option value="ptbd">PTBD & Biliary Stenting</option>
                    <option value="pcn">Percutaneous Nephrostomy (PCN)</option>
                    <option value="evla">EVLA / Varicose Veins</option>
                    <option value="custom">Other / Custom IR Procedure</option>
                  </select>
                </div>

                <div class="form-group" id="group-custom-proc" style="grid-column: span 2; display: none;">
                  <label>Custom Procedure Title</label>
                  <input type="text" id="new-book-custom-name" class="form-control" placeholder="e.g. Renal Angiomyolipoma Embolization">
                </div>

                <div class="form-group">
                  <label>Government Health Scheme</label>
                  <select id="new-book-scheme" class="form-control">
                    <option value="MAAY (Mukhya Mantri Ayushman Arogya Yojana)">MAAY (Chiranjeevi)</option>
                    <option value="RGHS (Rajasthan Government Health Scheme)">RGHS</option>
                    <option value="General / Paid / RMRS">General / RMRS</option>
                  </select>
                </div>

                <div class="form-group" id="group-date">
                  <label>Procedure Date *</label>
                  <input type="date" id="new-book-date" class="form-control" value="${defaultDate}" required>
                </div>

                <div class="form-group" id="modal-holiday-container" style="grid-column: span 2; ${holidayInit ? 'display: block;' : 'display: none;'}">
                  <div class="holiday-alert-badge" style="padding: 6px 10px; border-radius: var(--radius-sm); font-size: 11px;">
                    <span class="badge-dot danger"></span>
                    <span id="modal-holiday-text">${holidayInit ? `${holidayInit.nameEn} (${holidayInit.nameHi}) - ${holidayInit.day}. Routine OT is closed.` : ''}</span>
                  </div>
                </div>

                <div class="form-group" id="group-slot">
                  <label>OT Slot Time</label>
                  <select id="new-book-slot" class="form-control">
                    <option value="09:00 AM (First Case)">09:00 AM (First Case)</option>
                    <option value="11:30 AM (Second Case)">11:30 AM (Second Case)</option>
                    <option value="02:00 PM (Afternoon Slot)">02:00 PM (Afternoon Slot)</option>
                    <option value="Emergency OT (Urgent)">Emergency OT (Urgent)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Ward / Bed Number</label>
                  <input type="text" id="new-book-bed" class="form-control" placeholder="e.g. Bed 08 (IR Day Care)">
                </div>

                <div class="form-group" style="grid-column: span 2;">
                  <label>Clinical Diagnosis & Case History</label>
                  <textarea id="new-book-notes" class="form-control" rows="2" placeholder="Clinical presentation, imaging findings, lab workup, fasting requirements..."></textarea>
                </div>
              </div>

              <div style="margin-top: 16px; display: flex; justify-content: flex-end; gap: 8px;">
                <button type="button" class="btn btn-outline" onclick="document.getElementById('add-booking-modal').remove()">Cancel</button>
                <button type="submit" class="btn btn-primary" id="btn-submit-booking">Save & Schedule Case</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const unscheduledChk = document.getElementById("new-book-unscheduled");
    const dateInput = document.getElementById("new-book-date");
    const dateGroup = document.getElementById("group-date");
    const slotGroup = document.getElementById("group-slot");
    const holidayContainer = document.getElementById("modal-holiday-container");
    const holidayText = document.getElementById("modal-holiday-text");
    const submitBtn = document.getElementById("btn-submit-booking");

    if (unscheduledChk) {
      unscheduledChk.onchange = (e) => {
        if (e.target.checked) {
          dateInput.required = false;
          dateGroup.style.opacity = "0.4";
          slotGroup.style.opacity = "0.4";
          holidayContainer.style.display = "none";
          submitBtn.innerText = "Save to Unscheduled Waitlist";
        } else {
          dateInput.required = true;
          dateGroup.style.opacity = "1";
          slotGroup.style.opacity = "1";
          submitBtn.innerText = "Save & Schedule Case";
          checkDateHoliday(dateInput.value);
        }
      };
    }

    const checkDateHoliday = (dt) => {
      const hol = this.isDateHoliday(dt);
      if (hol && (!unscheduledChk || !unscheduledChk.checked)) {
        holidayText.innerText = `${hol.nameEn} (${hol.nameHi}) - ${hol.day}. Routine OT is closed; emergency clearance needed.`;
        holidayContainer.style.display = "block";
      } else {
        holidayContainer.style.display = "none";
      }
    };

    if (dateInput) {
      dateInput.onchange = (e) => checkDateHoliday(e.target.value);
    }

    const procSel = document.getElementById("new-book-proc");
    const customGroup = document.getElementById("group-custom-proc");
    if (procSel) {
      procSel.onchange = (e) => {
        if (e.target.value === "custom") {
          customGroup.style.display = "block";
        } else {
          customGroup.style.display = "none";
        }
      };
    }

    document.getElementById("form-add-booking").onsubmit = (e) => {
      e.preventDefault();
      const procId = document.getElementById("new-book-proc").value;
      const isCustom = procId === "custom";
      const customName = document.getElementById("new-book-custom-name").value;
      const isUnscheduled = unscheduledChk ? unscheduledChk.checked : false;

      const pDoc = (window.IR_PROCEDURE_ENCYCLOPEDIA && !isCustom) ? window.IR_PROCEDURE_ENCYCLOPEDIA[procId] : null;

      const newEntry = {
        name: document.getElementById("new-book-name").value,
        phone: document.getElementById("new-book-phone").value,
        age: document.getElementById("new-book-age").value || "—",
        gender: document.getElementById("new-book-gender").value,
        crNo: document.getElementById("new-book-cr").value || "CR-2026",
        ipdNo: "IPD-" + Math.floor(10000 + Math.random() * 90000),
        bedNo: document.getElementById("new-book-bed").value || "IR Day Care",
        diagnosis: document.getElementById("new-book-notes").value || (pDoc ? pDoc.shortName : (customName || "IR Case")),
        procedureId: isCustom ? "custom" : procId,
        procedureName: isCustom ? (customName || "Custom IR Procedure") : (pDoc ? pDoc.name : procId.toUpperCase()),
        scheme: document.getElementById("new-book-scheme").value,
        schemeCode: pDoc ? (pDoc.schemeDetails ? pDoc.schemeDetails.maayCode : "2849-IN") : "2849-IN",
        implantCodes: pDoc && pDoc.schemeDetails && pDoc.schemeDetails.maayImplants ? pDoc.schemeDetails.maayImplants.map(i => i.code).join(' + ') : "Standard Consumables",
        icd10: pDoc && pDoc.schemeDetails ? pDoc.schemeDetails.icd10Code : "R93",
        bookingDate: isUnscheduled ? "" : document.getElementById("new-book-date").value,
        slotTime: isUnscheduled ? "" : document.getElementById("new-book-slot").value,
        status: "Scheduled",
        isUnscheduled: isUnscheduled,
        hardwareIndented: pDoc ? pDoc.hardwareSpecs.map(h => h.item).slice(0, 4).join(', ') : "Standard IR Tray",
        vendorContact: pDoc && pDoc.distributorContacts ? pDoc.distributorContacts[0].name : "SMS Central IR Store",
        ddcStore: "Central IR Store / DDC-14",
        notes: document.getElementById("new-book-notes").value
      };

      this.addBooking(newEntry);
      document.getElementById("add-booking-modal").remove();

      if (typeof showToast === 'function') {
        showToast(`Saved ${newEntry.name} to ${isUnscheduled ? 'Unscheduled Waitlist' : newEntry.bookingDate}`, 'success');
      }

      if (!isUnscheduled) {
        const holiday = this.isDateHoliday(newEntry.bookingDate);
        if (holiday) {
          alert(`Warning: Case scheduled on ${holiday.nameEn} (${holiday.nameHi}) - ${holiday.day}. Please ensure emergency OT clearance.`);
        }
      }
    };
  }

  showBookingDetailModal(patientId) {
    const p = this.patients.find(pt => pt.id === patientId);
    if (!p) return;

    let pDoc = null;
    if (window.IR_PROCEDURE_ENCYCLOPEDIA && p.procedureId) {
      pDoc = window.IR_PROCEDURE_ENCYCLOPEDIA[p.procedureId];
    }

    const modalHtml = `
      <div class="modal-backdrop" id="booking-detail-modal">
        <div class="modal-card" style="max-width: 780px; max-height: 90vh; overflow-y: auto;">
          <div class="modal-header">
            <h3 style="margin: 0; font-size: 15px; color: var(--text-main); font-weight: 700;">
              IR Case & Hardware Protocol: ${p.name} (${p.procedureName})
            </h3>
            <button class="btn-close-modal" onclick="document.getElementById('booking-detail-modal').remove()" aria-label="Close modal">
              <svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="modal-body" style="font-size: 12px; line-height: 1.5;">
            <div style="background: var(--bg-surface-alt); padding: 12px; border-radius: var(--radius-md); margin-bottom: 12px; border: 1px solid var(--border-light);">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div><strong>Patient Name:</strong> ${p.name} (${p.age || '—'}/${p.gender || '—'})</div>
                <div><strong>Contact Phone:</strong> <a href="tel:${p.phone}">${p.phone}</a></div>
                <div><strong>CR / IPD No:</strong> ${p.crNo} / ${p.ipdNo}</div>
                <div><strong>Scheduled Date:</strong> <span style="color: var(--primary); font-weight: 700;">${p.bookingDate || 'Waitlist (Unscheduled)'} ${p.slotTime ? `(${p.slotTime})` : ''}</span></div>
                <div><strong>Scheme:</strong> <span class="scheme-badge-maay">${p.scheme}</span></div>
                <div><strong>Scheme Code:</strong> <code style="font-family: var(--font-mono);">${p.schemeCode || '—'}</code></div>
                <div><strong>ICD-10 Code:</strong> <code style="font-family: var(--font-mono);">${p.icd10 || '—'}</code></div>
                <div><strong>Status:</strong> <strong>${p.status}</strong> ${p.completedAt ? `(Done at ${p.completedAt})` : ''}</div>
              </div>
            </div>

            <div style="margin-bottom: 12px;">
              <h4 style="color: var(--text-main); margin: 0 0 6px 0; font-size: 13px; font-weight: 700;">In-Going Hardware & Implant Indents</h4>
              <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 10px 12px; border-radius: var(--radius-md);">
                <div><strong>Hardware Specifications:</strong> ${p.hardwareIndented || 'Standard Kit'}</div>
                <div style="margin-top: 4px;"><strong>Implants / Consumables:</strong> <code>${p.implantCodes || 'None'}</code></div>
                <div style="margin-top: 4px;"><strong>Authorized Vendor / Distributor:</strong> ${p.vendorContact || 'SMS Central Store'}</div>
                <div style="margin-top: 4px;"><strong>Hospital Pharmacy Store:</strong> ${p.ddcStore || 'DDC-14'}</div>
              </div>
            </div>

            ${pDoc ? `
              <div style="margin-bottom: 12px;">
                <h4 style="color: var(--text-main); margin: 0 0 6px 0; font-size: 13px; font-weight: 700;">Pre-Op Fasting & Clinical Checklist</h4>
                <ul style="margin: 0; padding-left: 20px;">
                  ${pDoc.preOpChecklist.map(c => `<li>${c}</li>`).join('')}
                </ul>
              </div>

              <div style="margin-bottom: 12px;">
                <h4 style="color: var(--text-main); margin: 0 0 6px 0; font-size: 13px; font-weight: 700;">RMSCL e-Aushadhi Post-Op Prescription Kit</h4>
                <table class="clinical-table" style="font-size: 11px;">
                  <thead><tr><th>Drug Name</th><th>Dose & Route</th><th>Frequency</th><th>Category</th></tr></thead>
                  <tbody>
                    ${pDoc.postOpDrugsEAushadhi.map(d => `<tr><td><strong>${d.name}</strong></td><td>${d.dose}</td><td>${d.freq}</td><td>${d.category}</td></tr>`).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}

            <div style="margin-top: 16px; display: flex; justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
              <button class="btn btn-primary" onclick="window.bookingSuite.loadPatientIntoDischargeForm('${p.id}'); document.getElementById('booking-detail-modal').remove();">
                Load Patient to Discharge Summary Form
              </button>
              <button class="btn btn-outline" onclick="window.bookingSuite.sendPreOpCallReminderWhatsApp('${p.id}');">
                Send WhatsApp Pre-Op Instructions
              </button>
              <button class="btn btn-outline" onclick="document.getElementById('booking-detail-modal').remove()">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  loadPatientIntoDischargeForm(patientId) {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    const dischargeTabBtn = document.querySelector('.nav-tab-btn[data-tab="tab-discharge"]');
    if (dischargeTabBtn) {
      dischargeTabBtn.click();
    }

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el && val !== undefined && val !== null) el.value = val;
    };

    setVal("patientName", patient.name);
    setVal("patientAge", patient.age);
    if (patient.gender) {
      const g = (patient.gender === 'M' || patient.gender.toLowerCase().startsWith('m')) ? 'Male' : ((patient.gender === 'F' || patient.gender.toLowerCase().startsWith('f')) ? 'Female' : 'Other');
      setVal("patientSex", g);
    }
    setVal("crNo", patient.crNo);
    setVal("ipdNo", patient.ipdNo);
    setVal("bedNo", patient.bedNo);
    
    if (patient.scheme) {
      if (patient.scheme.includes("MAAY") || patient.scheme.includes("Chiranjeevi") || patient.scheme.includes("Mukhya")) {
        setVal("scheme", "Mukhya Mantri Ayushman Arogya (Chiranjeevi)");
      } else if (patient.scheme.includes("RGHS")) {
        setVal("scheme", "RGHS");
      } else if (patient.scheme.includes("PMJAY")) {
        setVal("scheme", "PMJAY");
      } else {
        setVal("scheme", "General / Cash");
      }
    }
    setVal("schemeCode", patient.schemeCode);
    setVal("icd10", patient.icd10 ? patient.icd10.split(' ')[0] : "");
    setVal("diagnosis", patient.diagnosis);
    setVal("procedureName", patient.procedureName);
    setVal("procedureDate", patient.bookingDate || new Date().toISOString().slice(0, 10));

    if (window.IR_PROCEDURE_ENCYCLOPEDIA && patient.procedureId && window.IR_PROCEDURE_ENCYCLOPEDIA[patient.procedureId]) {
      const pDoc = window.IR_PROCEDURE_ENCYCLOPEDIA[patient.procedureId];
      setVal("operativeNotes", pDoc.operativeSteps);
      setVal("dischargeAdvice", pDoc.dischargeAdvice);
      setVal("schemeDocs", pDoc.schemeDetails ? pDoc.schemeDetails.ihmsPreAuthDocs : "");

      if (pDoc.hardwareSpecs) {
        const hwText = pDoc.hardwareSpecs.map(h => `${h.category}: ${h.item} (${h.size}) x${h.qty}`).join('\n');
        setVal("hardware", hwText);
      } else if (patient.hardwareIndented) {
        setVal("hardware", patient.hardwareIndented);
      }

      if (pDoc.postOpDrugsEAushadhi) {
        const drugText = pDoc.postOpDrugsEAushadhi.map((d, i) => `${i + 1}. ${d.name} (${d.dose}) - ${d.freq} [${d.category}]`).join('\n');
        setVal("medications", drugText);
      }
    } else {
      if (patient.hardwareIndented) setVal("hardware", patient.hardwareIndented);
    }

    setVal("pt-name", patient.name);
    setVal("pt-age", patient.age);
    setVal("pt-gender", patient.gender);
    setVal("pt-phone", patient.phone);
    setVal("pt-cr", patient.crNo);
    setVal("pt-ipd", patient.ipdNo);
    setVal("pt-bed", patient.bedNo);
    setVal("pt-diagnosis", patient.diagnosis);
    setVal("pt-scheme", patient.scheme);
    setVal("pt-scheme-code", patient.schemeCode);
    setVal("pt-icd-code", patient.icd10);
    setVal("pt-procedure-name", patient.procedureName);

    if (typeof showToast === 'function') {
      showToast(`Loaded ${patient.name} (${patient.procedureName}) into Discharge Summary & IHMS payload`, 'success');
    }
  }

  renderBookingTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const list = this.getFilteredBookings();

    let html = `
      <div class="calendar-action-bar" style="margin-bottom: 10px;">
        <div class="filters-row" style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <div class="filter-group">
            <label style="font-size: 11px;">Filter Scheme:</label>
            <select id="table-filter-scheme" class="form-control" style="font-size: 11.5px; padding: 4px 8px;">
              <option value="all" ${this.filterScheme === 'all' ? 'selected' : ''}>All Schemes</option>
              <option value="maay" ${this.filterScheme === 'maay' ? 'selected' : ''}>MAAY</option>
              <option value="rghs" ${this.filterScheme === 'rghs' ? 'selected' : ''}>RGHS</option>
            </select>
          </div>
          <div class="filter-group">
            <label style="font-size: 11px;">Filter Procedure:</label>
            <select id="table-filter-proc" class="form-control" style="font-size: 11.5px; padding: 4px 8px;">
              <option value="all" ${this.filterProcedure === 'all' ? 'selected' : ''}>All Procedures</option>
              <option value="tace" ${this.filterProcedure === 'tace' ? 'selected' : ''}>TACE</option>
              <option value="bae" ${this.filterProcedure === 'bae' ? 'selected' : ''}>BAE</option>
              <option value="parto_brto" ${this.filterProcedure === 'parto_brto' ? 'selected' : ''}>PARTO / BRTO</option>
              <option value="pve" ${this.filterProcedure === 'pve' ? 'selected' : ''}>PVE</option>
              <option value="avm" ${this.filterProcedure === 'avm' ? 'selected' : ''}>Hand / Peripheral AVM</option>
              <option value="varicocele" ${this.filterProcedure === 'varicocele' ? 'selected' : ''}>Varicocele</option>
              <option value="central_venoplasty" ${this.filterProcedure === 'central_venoplasty' ? 'selected' : ''}>Central Venoplasty</option>
              <option value="ptbd" ${this.filterProcedure === 'ptbd' ? 'selected' : ''}>PTBD</option>
              <option value="pcn" ${this.filterProcedure === 'pcn' ? 'selected' : ''}>PCN</option>
              <option value="evla" ${this.filterProcedure === 'evla' ? 'selected' : ''}>EVLA</option>
            </select>
          </div>
        </div>

        <div class="actions-right" style="display: flex; gap: 8px;">
          <button class="btn btn-sm btn-primary" id="btn-table-add-booking">
            <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Book New Case
          </button>
          <button class="btn btn-sm btn-outline" id="btn-table-export-csv">
            <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export CSV
          </button>
        </div>
      </div>

      <div class="table-responsive" style="max-height: 520px; overflow-y: auto;">
        <table class="clinical-table booking-table">
          <thead>
            <tr>
              <th>Date & Slot</th>
              <th>Patient & Contact</th>
              <th>Procedure & Scheme</th>
              <th>Hardware Indents</th>
              <th>Status</th>
              <th style="text-align: right;">1-Click Actions</th>
            </tr>
          </thead>
          <tbody>
    `;

    if (list.length === 0) {
      html += `<tr><td colspan="6" style="text-align: center; padding: 25px; color: var(--text-muted);">No cases matching filter criteria.</td></tr>`;
    } else {
      list.forEach(p => {
        const holidayAlert = p.bookingDate ? this.isDateHoliday(p.bookingDate) : null;
        const alertBadge = holidayAlert 
          ? `<div class="holiday-alert-badge" title="Rajasthan Govt Public Holiday: ${holidayAlert.nameEn}"><span class="badge-dot warning"></span> ${holidayAlert.nameEn}</div>` 
          : '';

        const schemeBadgeClass = (p.scheme || "").toLowerCase().includes("maay") ? "scheme-badge-maay" : "scheme-badge-rghs";

        html += `
          <tr data-patient-id="${p.id}">
            <td>
              ${p.isUnscheduled ? `
                <div style="font-weight: 700; color: var(--purple); font-size: 12px;">Waitlist (No Date)</div>
                <div style="font-size: 10.5px; color: var(--text-muted);">Workup Pending</div>
              ` : `
                <div style="font-weight: 700; color: var(--primary); font-size: 12.5px;">${p.bookingDate}</div>
                <div style="font-size: 11px; color: var(--text-muted);">${p.slotTime || 'Morning Slot'}</div>
                ${alertBadge}
              `}
            </td>
            <td>
              <div style="font-weight: 700; font-size: 13px; color: var(--text-main);">${p.name} (${p.age || '—'}/${p.gender || '—'})</div>
              <div style="font-size: 11px;"><a href="tel:${p.phone}" style="color: var(--primary); text-decoration: underline;">${p.phone || 'No phone'}</a></div>
              <div style="font-size: 10.5px; color: var(--text-muted);">CR: ${p.crNo || '—'} • ${p.bedNo || 'Day Care'}</div>
            </td>
            <td>
              <div style="font-weight: 600; color: var(--text-main); font-size: 12px;">${p.procedureName}</div>
              <div style="font-size: 11px; margin-top: 2px;">
                <span class="${schemeBadgeClass}">${(p.scheme || '').includes('MAAY') ? 'MAAY' : 'RGHS'}</span>
                <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); font-weight: 600;">${p.schemeCode || ''}</span>
              </div>
              <div style="font-size: 10.5px; color: var(--text-muted); font-family: var(--font-mono);">ICD-10: ${p.icd10 || '—'}</div>
            </td>
            <td>
              <div style="font-size: 11px; color: var(--text-main); max-width: 240px; line-height: 1.35;">
                <strong>Hardware:</strong> ${p.hardwareIndented || 'Standard Kit'}
              </div>
              <div style="font-size: 10.5px; color: var(--success); margin-top: 2px;">
                <strong>Store:</strong> ${p.ddcStore || 'Central Store'}
              </div>
            </td>
            <td>
              <select class="table-status-select form-control" data-id="${p.id}" style="font-size: 11px; padding: 2px 4px; font-weight: 600;">
                <option value="Scheduled" ${p.status === 'Scheduled' ? 'selected' : ''}>Scheduled</option>
                <option value="Pre-Op Call Done" ${p.status === 'Pre-Op Call Done' ? 'selected' : ''}>Call Done</option>
                <option value="In OT" ${p.status === 'In OT' ? 'selected' : ''}>In OT</option>
                <option value="Completed" ${p.status === 'Completed' ? 'selected' : ''}>Completed</option>
                <option value="Postponed" ${p.status === 'Postponed' ? 'selected' : ''}>Postponed</option>
              </select>
            </td>
            <td style="text-align: right; white-space: nowrap;">
              <button class="btn btn-xs btn-outline btn-table-reschedule" data-id="${p.id}" title="Reschedule Date">
                Reschedule
              </button>
              <button class="btn btn-xs btn-primary btn-table-discharge" data-id="${p.id}" style="margin-left: 4px;" title="Load to Discharge Form">
                Discharge
              </button>
              <button class="btn btn-xs btn-outline btn-table-details" data-id="${p.id}" style="margin-left: 4px;" title="View Details">
                Details
              </button>
              <button class="btn btn-xs btn-outline btn-table-delete" data-id="${p.id}" style="margin-left: 4px; color: var(--danger);" title="Delete">
                <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </td>
          </tr>
        `;
      });
    }

    html += `
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = html;

    const schemeSel = document.getElementById("table-filter-scheme");
    if (schemeSel) {
      schemeSel.onchange = (e) => {
        this.filterScheme = e.target.value;
        this.renderBookingTable(containerId);
      };
    }

    const procSel = document.getElementById("table-filter-proc");
    if (procSel) {
      procSel.onchange = (e) => {
        this.filterProcedure = e.target.value;
        this.renderBookingTable(containerId);
      };
    }

    const addBtn = document.getElementById("btn-table-add-booking");
    if (addBtn) addBtn.onclick = () => this.showAddBookingModal();

    const exportBtn = document.getElementById("btn-table-export-csv");
    if (exportBtn) exportBtn.onclick = () => this.exportBookingsToCSV();

    container.querySelectorAll(".table-status-select").forEach(sel => {
      sel.onchange = (e) => {
        const id = sel.dataset.id;
        const newStatus = e.target.value;
        if (newStatus === "Completed") {
          this.toggleCompletedStatus(id);
        } else if (newStatus === "Pre-Op Call Done") {
          this.toggleCallStatus(id);
        } else {
          this.updateBooking(id, { status: newStatus });
        }
      };
    });

    container.querySelectorAll(".btn-table-reschedule").forEach(btn => {
      btn.onclick = () => this.showRescheduleModal(btn.dataset.id);
    });

    container.querySelectorAll(".btn-table-discharge").forEach(btn => {
      btn.onclick = () => this.loadPatientIntoDischargeForm(btn.dataset.id);
    });

    container.querySelectorAll(".btn-table-details").forEach(btn => {
      btn.onclick = () => this.showBookingDetailModal(btn.dataset.id);
    });

    container.querySelectorAll(".btn-table-delete").forEach(btn => {
      btn.onclick = () => {
        if (confirm("Delete this case from schedule?")) {
          this.deleteBooking(btn.dataset.id);
        }
      };
    });
  }

  exportBookingsToCSV() {
    let csv = "ID,Date,Slot,Status,Patient Name,Age,Gender,Phone,CR No,IPD No,Procedure,Scheme,Scheme Code,ICD-10,Store,Hardware,Notes\n";
    this.patients.forEach(p => {
      const d = p.isUnscheduled ? "Unscheduled Waitlist" : (p.bookingDate || "");
      csv += `"${p.id}","${d}","${p.slotTime || ''}","${p.status}","${p.name}","${p.age || ''}","${p.gender || ''}","${p.phone || ''}","${p.crNo || ''}","${p.ipdNo || ''}","${p.procedureName}","${p.scheme}","${p.schemeCode || ''}","${p.icd10 || ''}","${p.ddcStore || ''}","${(p.hardwareIndented || '').replace(/"/g, '""')}","${(p.notes || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `SMS_Jaipur_IR_OT_Schedule_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Global instance initialization
window.bookingSuite = new IRBookingCalendarSuite();
