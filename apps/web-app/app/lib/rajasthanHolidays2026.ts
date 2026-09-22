/**
 * Official Rajasthan Government Calendar 2026 Holiday Master
 * Extracted directly from: Government calendar 2026 rajasthan.pdf
 * Government of Rajasthan Official Notification
 */

export interface RajasthanHoliday {
  date: string; // YYYY-MM-DD
  nameEn: string;
  nameHi?: string;
  type: "Gazetted" | "Restricted";
  month: number; // 1-12
  dayOfWeek: string;
}

export const RAJASTHAN_HOLIDAYS_2026: RajasthanHoliday[] = [
  // January 2026
  { date: "2026-01-01", nameEn: "Christian New Year", type: "Restricted", month: 1, dayOfWeek: "Thursday" },
  { date: "2026-01-13", nameEn: "Lohri", type: "Restricted", month: 1, dayOfWeek: "Tuesday" },
  { date: "2026-01-25", nameEn: "Devnarayan Jayanti", type: "Gazetted", month: 1, dayOfWeek: "Sunday" },
  { date: "2026-01-26", nameEn: "Republic Day", type: "Gazetted", month: 1, dayOfWeek: "Monday" },
  { date: "2026-01-31", nameEn: "Vishwakarma Jayanti & Swami Ramcharan Jayanti", type: "Restricted", month: 1, dayOfWeek: "Saturday" },

  // February 2026
  { date: "2026-02-01", nameEn: "Guru Ravidas Jayanti", type: "Restricted", month: 2, dayOfWeek: "Sunday" },
  { date: "2026-02-03", nameEn: "Shab-e-Barat", type: "Restricted", month: 2, dayOfWeek: "Tuesday" },
  { date: "2026-02-12", nameEn: "Maharishi Dayanand Saraswati Jayanti", type: "Restricted", month: 2, dayOfWeek: "Thursday" },
  { date: "2026-02-15", nameEn: "Maha Shivratri", type: "Gazetted", month: 2, dayOfWeek: "Sunday" },
  { date: "2026-02-23", nameEn: "Gadge Maharaj Jayanti", type: "Restricted", month: 2, dayOfWeek: "Monday" },

  // March 2026
  { date: "2026-03-02", nameEn: "Holika Dahan", type: "Gazetted", month: 3, dayOfWeek: "Monday" },
  { date: "2026-03-03", nameEn: "Dhulandi (Festival of Colors)", type: "Gazetted", month: 3, dayOfWeek: "Tuesday" },
  { date: "2026-03-20", nameEn: "Cheti Chand", type: "Gazetted", month: 3, dayOfWeek: "Friday" },
  { date: "2026-03-20", nameEn: "Jumat-ul-Vida", type: "Restricted", month: 3, dayOfWeek: "Friday" },
  { date: "2026-03-21", nameEn: "Eid-ul-Fitr (Moon Dependent)", type: "Gazetted", month: 3, dayOfWeek: "Saturday" },
  { date: "2026-03-26", nameEn: "Ram Navami", type: "Gazetted", month: 3, dayOfWeek: "Thursday" },
  { date: "2026-03-31", nameEn: "Mahavir Jayanti", type: "Gazetted", month: 3, dayOfWeek: "Tuesday" },

  // April 2026
  { date: "2026-04-03", nameEn: "Good Friday", type: "Gazetted", month: 4, dayOfWeek: "Friday" },
  { date: "2026-04-11", nameEn: "Mahatma Jyotiba Phule Jayanti", type: "Gazetted", month: 4, dayOfWeek: "Saturday" },
  { date: "2026-04-14", nameEn: "Dr. B.R. Ambedkar Jayanti", type: "Gazetted", month: 4, dayOfWeek: "Tuesday" },
  { date: "2026-04-14", nameEn: "Baisakhi & Sen Jayanti", type: "Restricted", month: 4, dayOfWeek: "Tuesday" },
  { date: "2026-04-19", nameEn: "Parshuram Jayanti", type: "Gazetted", month: 4, dayOfWeek: "Sunday" },

  // May 2026
  { date: "2026-05-01", nameEn: "Buddha Purnima", type: "Restricted", month: 5, dayOfWeek: "Friday" },
  { date: "2026-05-28", nameEn: "Eid-ul-Zuha (Bakrid)", type: "Gazetted", month: 5, dayOfWeek: "Thursday" },

  // June 2026
  { date: "2026-06-17", nameEn: "Maharana Pratap Jayanti", type: "Gazetted", month: 6, dayOfWeek: "Wednesday" },
  { date: "2026-06-26", nameEn: "Muharram (Tazia)", type: "Gazetted", month: 6, dayOfWeek: "Friday" },

  // July 2026
  { date: "2026-07-29", nameEn: "Guru Purnima", type: "Restricted", month: 7, dayOfWeek: "Wednesday" },

  // August 2026
  { date: "2026-08-09", nameEn: "World Tribal Day", type: "Gazetted", month: 8, dayOfWeek: "Sunday" },
  { date: "2026-08-15", nameEn: "Independence Day", type: "Gazetted", month: 8, dayOfWeek: "Saturday" },
  { date: "2026-08-26", nameEn: "Barawafat (Eid-e-Milad)", type: "Gazetted", month: 8, dayOfWeek: "Wednesday" },
  { date: "2026-08-28", nameEn: "Raksha Bandhan", type: "Gazetted", month: 8, dayOfWeek: "Friday" },

  // September 2026
  { date: "2026-09-03", nameEn: "Thadri", type: "Restricted", month: 9, dayOfWeek: "Thursday" },
  { date: "2026-09-04", nameEn: "Shri Krishna Janmashtami", type: "Gazetted", month: 9, dayOfWeek: "Friday" },
  { date: "2026-09-14", nameEn: "Ganesh Chaturthi", type: "Restricted", month: 9, dayOfWeek: "Monday" },
  { date: "2026-09-16", nameEn: "Samvatsari", type: "Restricted", month: 9, dayOfWeek: "Wednesday" },
  { date: "2026-09-21", nameEn: "Ramdev Jayanti, Teja Dashami & Khejarli Shaheed Diwas", type: "Gazetted", month: 9, dayOfWeek: "Monday" },
  { date: "2026-09-25", nameEn: "Anant Chaturdashi", type: "Restricted", month: 9, dayOfWeek: "Friday" },

  // October 2026
  { date: "2026-10-02", nameEn: "Mahatma Gandhi Jayanti", type: "Gazetted", month: 10, dayOfWeek: "Friday" },
  { date: "2026-10-11", nameEn: "Navratri Sthapana & Maharaja Agrasen Jayanti", type: "Gazetted", month: 10, dayOfWeek: "Sunday" },
  { date: "2026-10-19", nameEn: "Durga Ashtami", type: "Gazetted", month: 10, dayOfWeek: "Monday" },
  { date: "2026-10-20", nameEn: "Vijaya Dashami (Dussehra)", type: "Gazetted", month: 10, dayOfWeek: "Tuesday" },
  { date: "2026-10-20", nameEn: "Mahanavami", type: "Restricted", month: 10, dayOfWeek: "Tuesday" },
  { date: "2026-10-29", nameEn: "Karva Chauth", type: "Restricted", month: 10, dayOfWeek: "Thursday" },

  // November 2026
  { date: "2026-11-08", nameEn: "Diwali (Deepawali)", type: "Gazetted", month: 11, dayOfWeek: "Sunday" },
  { date: "2026-11-09", nameEn: "Govardhan Puja", type: "Gazetted", month: 11, dayOfWeek: "Monday" },
  { date: "2026-11-11", nameEn: "Bhai Dooj", type: "Gazetted", month: 11, dayOfWeek: "Wednesday" },
  { date: "2026-11-24", nameEn: "Guru Nanak Jayanti", type: "Gazetted", month: 11, dayOfWeek: "Tuesday" },

  // December 2026
  { date: "2026-12-25", nameEn: "Christmas Day", type: "Gazetted", month: 12, dayOfWeek: "Friday" },
];

export function getHolidayForDate(dateStr: string): {
  isHoliday: boolean;
  isSunday: boolean;
  name: string | null;
  type: "Gazetted" | "Restricted" | "Sunday" | null;
} {
  if (!dateStr) {
    return { isHoliday: false, isSunday: false, name: null, type: null };
  }

  const d = new Date(dateStr + "T00:00:00");
  const isSunday = d.getDay() === 0;

  const found = RAJASTHAN_HOLIDAYS_2026.find((h) => h.date === dateStr);
  if (found) {
    return {
      isHoliday: true,
      isSunday,
      name: found.nameEn,
      type: found.type,
    };
  }

  if (isSunday) {
    return {
      isHoliday: true,
      isSunday: true,
      name: "Sunday (Weekly Hospital Off)",
      type: "Sunday",
    };
  }

  return { isHoliday: false, isSunday: false, name: null, type: null };
}

export function isDateElectiveBlocked(dateStr: string): {
  blocked: boolean;
  reason: string | null;
} {
  const info = getHolidayForDate(dateStr);
  if (info.isSunday) {
    return {
      blocked: true,
      reason: "Sunday: Cath-Lab elective procedures closed (emergency coverage only)",
    };
  }
  if (info.isHoliday && info.type === "Gazetted") {
    return {
      blocked: true,
      reason: `Official Rajasthan Gazetted Holiday: ${info.name}`,
    };
  }
  return { blocked: false, reason: null };
}
