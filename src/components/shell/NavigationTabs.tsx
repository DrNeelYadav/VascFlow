import React from 'react';
import { NavLink } from 'react-router-dom';
import { useClinicalStore } from '../../stores/useClinicalStore';
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  FileSpreadsheet,
  Microscope,
  GraduationCap,
  CreditCard,
  Pill,
  Eye
} from 'lucide-react';

export const NavigationTabs: React.FC = () => {
  const bookings = useClinicalStore((s) => s.bookings);
  const biopsies = useClinicalStore((s) => s.biopsies);

  const activeBookingsCount = bookings.filter((b) => b.status === 'Scheduled').length;
  const pendingBiopsiesCount = biopsies.filter((b) => b.status === 'Pending').length;

  const tabs = [
    {
      to: '/',
      label: 'Department Launchpad',
      icon: LayoutDashboard,
      badge: null
    },
    {
      to: '/ot-booking',
      label: 'OT Booking & Calendar',
      icon: Calendar,
      badge: activeBookingsCount > 0 ? activeBookingsCount : null
    },
    {
      to: '/encyclopedia',
      label: 'Procedure Encyclopedia',
      icon: BookOpen,
      badge: null
    },
    {
      to: '/discharge',
      label: 'Discharge Summary & OCR',
      icon: FileSpreadsheet,
      badge: null
    },
    {
      to: '/biopsies',
      label: 'Biopsy Registry',
      icon: Microscope,
      badge: pendingBiopsiesCount > 0 ? pendingBiopsiesCount : null,
      badgeWarn: true
    },
    {
      to: '/education',
      label: 'Education & Guidelines',
      icon: Eye,
      badge: null
    },
    {
      to: '/simulations',
      label: 'Academic Rounds',
      icon: GraduationCap,
      badge: null
    },
    {
      to: '/schemes',
      label: 'Scheme Directory',
      icon: CreditCard,
      badge: null
    },
    {
      to: '/protocols',
      label: 'Drug Protocols & Rx',
      icon: Pill,
      badge: null
    }
  ];

  return (
    <nav className="w-full bg-white border-b border-[#DADCE0] px-4 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center gap-1 py-1.5 min-w-max">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1A73E8] text-white shadow-xs font-bold'
                    : 'bg-white text-[#3C4043] hover:text-[#202124] hover:bg-[#F1F3F4]'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge !== null && (
                <span
                  className={`ml-0.5 px-1.5 py-0.2 rounded-full font-mono text-[10px] font-bold ${
                    tab.badgeWarn
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-[#E8F0FE] text-[#1A73E8]'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
