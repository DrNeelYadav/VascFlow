import React, { useState, useRef, useEffect } from 'react';
import { useClinicalStore, STAFF_PERSONAS } from '../../stores/useClinicalStore';
import { StaffRoleCode } from '../../types/clinical';
import { ChevronDown, UserCheck, Shield } from 'lucide-react';

export const PersonaSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeRole = useClinicalStore((s) => s.activeRole);
  const setActiveRole = useClinicalStore((s) => s.setActiveRole);

  const current = STAFF_PERSONAS[activeRole];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tiers: { label: string; roles: StaffRoleCode[] }[] = [
    { label: 'Finalizing Faculty & Consultants', roles: ['FC01', 'FC02'] },
    { label: 'Fellows & Residents', roles: ['DM01', 'DM02', 'SR01'] },
    { label: 'Nursing Officers', roles: ['NO01', 'NO02'] },
    { label: 'Cath Lab Technicians', roles: ['TC01', 'TC02'] },
    { label: 'Government Scheme Desk', roles: ['CR01'] }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white hover:bg-[#F8F9FA] text-[#202124] transition text-xs shadow-xs font-medium"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] font-bold border ${current.badgeClass}`}>
          {current.code}
        </span>
        <span className="hidden sm:inline font-semibold">{current.name}</span>
        <span className="text-[#5F6368] text-[11px] hidden md:inline">({current.role})</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#5F6368]" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 max-h-[80vh] overflow-y-auto rounded-xl border border-[#DADCE0] bg-white shadow-lg p-2 z-50 divide-y divide-[#DADCE0]/80 font-sans">
          <div className="px-2 py-1.5 mb-1 flex items-center justify-between text-[11px] font-semibold text-[#5F6368] uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#1A73E8]" />
              Active Staff Persona
            </span>
            <span className="text-[10px] text-[#5F6368]">RajSSO</span>
          </div>

          {tiers.map((group) => (
            <div key={group.label} className="py-1.5">
              <div className="px-2 py-1 text-[10px] font-bold text-[#5F6368] uppercase tracking-wider">
                {group.label}
              </div>
              <div className="space-y-0.5">
                {group.roles.map((code) => {
                  const p = STAFF_PERSONAS[code];
                  const isSelected = activeRole === code;
                  return (
                    <button
                      key={code}
                      onClick={() => {
                        setActiveRole(code);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left text-xs transition ${
                        isSelected
                          ? 'bg-[#E8F0FE] border border-[#1A73E8]/30 text-[#1A73E8]'
                          : 'hover:bg-[#F8F9FA] text-[#3C4043]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] font-bold border ${p.badgeClass}`}>
                          {p.code}
                        </span>
                        <div>
                          <div className={`font-medium ${isSelected ? 'text-[#1A73E8]' : 'text-[#202124]'}`}>{p.name}</div>
                          <div className="text-[10px] text-[#5F6368]">{p.desc}</div>
                        </div>
                      </div>
                      {isSelected && <UserCheck className="w-4 h-4 text-[#1A73E8]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
