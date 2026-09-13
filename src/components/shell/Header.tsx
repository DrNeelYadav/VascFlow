'use client';

import React, { useState } from 'react';
import { PersonaSwitcher } from './PersonaSwitcher';
import { useClinicalStore } from '../../stores/useClinicalStore';
import {
  Search,
  SlidersHorizontal,
  Settings,
  HelpCircle,
  Grid,
  Activity,
  BedDouble,
  X
} from 'lucide-react';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const openAdmin = useClinicalStore((s) => s.openAdmin);
  const activeRole = useClinicalStore((s) => s.activeRole);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Direct navigation to procedures, bookings or guidelines
      window.location.hash = `/encyclopedia`;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF] border-b border-[#DADCE0] px-4 py-2 select-none">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Google Workspace App Brand */}
        <div className="flex items-center gap-3 min-w-[240px]">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] border border-[#DADCE0]/50 font-bold text-base shadow-sm tracking-tight">
            IR
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-medium text-lg text-[#202124] tracking-tight">
                SMS IR-RIS
              </span>
            </div>
            <p className="text-[11px] text-[#5F6368] truncate hidden sm:block">
              SMS Medical College & Attached Hospitals
            </p>
          </div>
        </div>

        {/* Center: Massive Pill-Shaped Google Search Bar */}
        <div className="flex-1 max-w-2xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center w-full h-11 rounded-full bg-[#F1F3F4] hover:bg-[#E8EAED] focus-within:bg-[#FFFFFF] focus-within:shadow-md border border-transparent focus-within:border-[#DADCE0] transition-all px-4 group"
          >
            <Search className="w-5 h-5 text-[#5F6368] group-focus-within:text-[#202124] shrink-0 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search patients, CR numbers, procedures, guidelines, or staff..."
              className="w-full bg-transparent text-sm text-[#202124] placeholder-[#5F6368] focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 rounded-full hover:bg-[#DADCE0]/50 text-[#5F6368] mr-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              title="Search Filters"
              className="p-1.5 rounded-full hover:bg-[#DADCE0]/50 text-[#5F6368] hover:text-[#202124]"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right: Google Help, Settings, Apps Menu, Persona & Avatar */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Persona Switcher Component */}
          <div className="hidden md:block">
            <PersonaSwitcher />
          </div>

          {/* Google Help Icon */}
          <button
            title="Help & CIRSE Protocols"
            onClick={() => { window.location.hash = '/protocols'; }}
            className="p-2 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition"
          >
            <HelpCircle className="w-5 h-5" />
          </button>

          {/* Settings Gear */}
          <button
            onClick={openAdmin}
            title="System Settings & Database Vault"
            className="p-2 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* Google Apps 9-Dot Launcher */}
          <button
            onClick={() => { window.location.hash = '/schemes'; }}
            title="Hospital Apps & Tariffs"
            className="p-2 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition"
          >
            <Grid className="w-5 h-5" />
          </button>

          {/* User Profile Avatar */}
          <div className="ml-1 pl-1 border-l border-[#DADCE0]">
            <div
              onClick={openAdmin}
              className="w-8 h-8 rounded-full bg-[#1A73E8] text-white flex items-center justify-center font-medium text-xs shadow-sm cursor-pointer hover:ring-2 hover:ring-[#1A73E8]/30 transition"
              title={`Logged in as ${activeRole}`}
            >
              {activeRole.slice(0, 2)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
