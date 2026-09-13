import { GazettedHoliday } from '../types/clinical';

export const RAJASTHAN_HOLIDAYS_2026: GazettedHoliday[] = [
  { date: "2026-01-25", nameEn: "Devnarayan Jayanti", day: "Sunday", type: "Gazetted" },
  { date: "2026-01-26", nameEn: "Republic Day", day: "Monday", type: "Gazetted" },
  { date: "2026-02-15", nameEn: "Maharishi Dayanand Saraswati Jayanti", day: "Sunday", type: "Gazetted" },
  { date: "2026-02-16", nameEn: "Maha Shivratri", day: "Monday", type: "Gazetted" },
  { date: "2026-03-02", nameEn: "Holika Dahan", day: "Monday", type: "Gazetted" },
  { date: "2026-03-03", nameEn: "Dhulandi (Festival of Colors)", day: "Tuesday", type: "Gazetted" },
  { date: "2026-03-20", nameEn: "Cheti Chand", day: "Friday", type: "Gazetted" },
  { date: "2026-03-21", nameEn: "Eid-ul-Fitr (Moon Dependent)", day: "Saturday", type: "Gazetted" },
  { date: "2026-03-26", nameEn: "Ram Navami", day: "Thursday", type: "Gazetted" },
  { date: "2026-03-31", nameEn: "Mahavir Jayanti", day: "Tuesday", type: "Gazetted" },
  { date: "2026-04-03", nameEn: "Good Friday", day: "Friday", type: "Gazetted" },
  { date: "2026-04-11", nameEn: "Mahatma Jyotiba Phule Jayanti", day: "Saturday", type: "Gazetted" },
  { date: "2026-04-14", nameEn: "Dr. B.R. Ambedkar Jayanti", day: "Tuesday", type: "Gazetted" },
  { date: "2026-04-19", nameEn: "Parshuram Jayanti", day: "Sunday", type: "Gazetted" },
  { date: "2026-05-01", nameEn: "Buddha Purnima", day: "Friday", type: "Gazetted" },
  { date: "2026-05-28", nameEn: "Eid-ul-Zuha (Bakrid)", day: "Thursday", type: "Gazetted" },
  { date: "2026-06-17", nameEn: "Maharana Pratap Jayanti", day: "Wednesday", type: "Gazetted" },
  { date: "2026-06-26", nameEn: "Muharram (Tazia)", day: "Friday", type: "Gazetted" },
  { date: "2026-08-09", nameEn: "World Tribal Day", day: "Sunday", type: "Gazetted" },
  { date: "2026-08-15", nameEn: "Independence Day", day: "Saturday", type: "Gazetted" },
  { date: "2026-08-26", nameEn: "Barawafat (Eid-e-Milad)", day: "Wednesday", type: "Gazetted" },
  { date: "2026-08-28", nameEn: "Raksha Bandhan", day: "Friday", type: "Gazetted" },
  { date: "2026-09-04", nameEn: "Shri Krishna Janmashtami", day: "Friday", type: "Gazetted" },
  { date: "2026-09-21", nameEn: "Baba Ramdev Jayanti & Teja Dashami", day: "Monday", type: "Gazetted" },
  { date: "2026-10-02", nameEn: "Mahatma Gandhi Jayanti", day: "Friday", type: "Gazetted" },
  { date: "2026-10-11", nameEn: "Navratri Sthapana & Maharaja Agrasen Jayanti", day: "Sunday", type: "Gazetted" },
  { date: "2026-10-19", nameEn: "Durga Ashtami", day: "Monday", type: "Gazetted" },
  { date: "2026-10-20", nameEn: "Vijaya Dashami (Dussehra)", day: "Tuesday", type: "Gazetted" },
  { date: "2026-11-08", nameEn: "Diwali (Deepawali)", day: "Sunday", type: "Gazetted" },
  { date: "2026-11-09", nameEn: "Govardhan Puja", day: "Monday", type: "Gazetted" },
  { date: "2026-11-11", nameEn: "Bhai Dooj", day: "Wednesday", type: "Gazetted" },
  { date: "2026-11-24", nameEn: "Guru Nanak Jayanti", day: "Tuesday", type: "Gazetted" },
  { date: "2026-12-25", nameEn: "Christmas Day", day: "Friday", type: "Gazetted" }
];

export function isHolidayOrSunday(dateString: string): {
  isBlocked: boolean;
  reason: string | null;
  isSunday: boolean;
  holidayName: string | null;
} {
  if (!dateString) return { isBlocked: false, reason: null, isSunday: false, holidayName: null };
  const d = new Date(dateString);
  const isSunday = d.getDay() === 0;

  const holiday = RAJASTHAN_HOLIDAYS_2026.find(h => h.date === dateString);

  if (holiday) {
    return {
      isBlocked: true,
      reason: `Official Rajasthan Gazetted Holiday: ${holiday.nameEn}`,
      isSunday,
      holidayName: holiday.nameEn
    };
  }

  if (isSunday) {
    return {
      isBlocked: true,
      reason: 'Sunday (Weekly Hospital Holiday for Elective Procedures)',
      isSunday: true,
      holidayName: null
    };
  }

  return { isBlocked: false, reason: null, isSunday: false, holidayName: null };
}

export function getHolidayDetails(dateString: string): GazettedHoliday | undefined {
  return RAJASTHAN_HOLIDAYS_2026.find((h) => h.date === dateString);
}

