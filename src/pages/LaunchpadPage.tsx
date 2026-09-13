import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, UserPlus, Clock, ArrowRight } from 'lucide-react';
import { useClinicalStore } from '../stores/useClinicalStore';

export const LaunchpadPage: React.FC = () => {
  const navigate = useNavigate();
  const bookings = useClinicalStore((s) => s.bookings);

  // Take only the 3 most recent scheduled cases for subtle, clean quick reference
  const recentBookings = bookings.slice(0, 3);

  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col justify-center items-center px-4 py-12 select-none">
      {/* Central Google Drive Empty State Box */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
        className="max-w-xl w-full text-center flex flex-col items-center"
      >
        {/* Subtle Minimalist Geometry Monogram */}
        <div className="w-16 h-16 rounded-2xl bg-[#FFFFFF] border border-[#DADCE0] flex items-center justify-center mb-6 shadow-xs">
          <svg
            className="w-8 h-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="14.5" y="4" width="3" height="24" rx="1.5" fill="#1A73E8" />
            <rect x="4" y="14.5" width="24" height="3" rx="1.5" fill="#1A73E8" />
            <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" stroke="#DADCE0" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Unadorned, Clean Typography */}
        <h1 className="text-2xl sm:text-3xl font-heading font-medium text-[#202124] tracking-tight mb-2">
          Interventional Radiology
        </h1>
        <p className="text-sm text-[#5F6368] mb-8 max-w-md">
          Select an action to begin case scheduling or patient admission.
        </p>

        {/* Primary Action Buttons (Center of Screen) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-12">
          {/* Action 1: Book a Case */}
          <button
            onClick={() => navigate('/ot-booking')}
            className="w-full sm:w-auto h-12 px-6 rounded-full bg-[#1A73E8] hover:bg-[#1765CC] active:bg-[#1557B0] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Book a Case</span>
          </button>

          {/* Action 2: Admit a Case */}
          <button
            onClick={() => navigate('/discharge')}
            className="w-full sm:w-auto h-12 px-6 rounded-full bg-[#FFFFFF] hover:bg-[#F8F9FA] active:bg-[#F1F3F4] text-[#202124] border border-[#DADCE0] font-medium text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
          >
            <UserPlus className="w-4 h-4 text-[#5F6368]" />
            <span>Admit a Case</span>
          </button>
        </div>

        {/* Subtle, Minimalist Recent Cases (No heavy cards or dense metrics) */}
        {recentBookings.length > 0 && (
          <div className="w-full pt-8 border-t border-[#DADCE0]/60 text-left">
            <div className="text-xs font-medium text-[#5F6368] mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Recent Cases
              </span>
              <button
                onClick={() => navigate('/ot-booking')}
                className="text-xs text-[#1A73E8] hover:underline flex items-center gap-0.5"
              >
                View all schedule
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-1.5">
              {recentBookings.map((b) => (
                <div
                  key={b.id}
                  onClick={() => navigate('/ot-booking')}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#FFFFFF] border border-[#DADCE0]/70 hover:border-[#DADCE0] hover:bg-[#F8F9FA] cursor-pointer transition-all text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1A73E8]" />
                    <div>
                      <div className="font-medium text-[#202124]">{b.patientName}</div>
                      <div className="text-[#5F6368] text-[11px]">{b.procedureName}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[11px] text-[#5F6368]">{b.crNo}</div>
                    <div className="text-[11px] text-[#5F6368]">{b.targetDate || 'Awaiting slot'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LaunchpadPage;
