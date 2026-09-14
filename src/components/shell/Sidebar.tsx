'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  CalendarDays,
  BookOpen,
  FileCheck2,
  Microscope,
  GraduationCap,
  CreditCard,
  Pill,
  ChevronLeft,
  ChevronRight,
  Eye,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NavItem {
  id: string;
  name: string;
  path: string;
  icon: React.ElementType;
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'launchpad',
    name: 'Home',
    path: '/',
    icon: LayoutDashboard,
  },
  {
    id: 'ot-booking',
    name: 'Schedule',
    path: '/ot-booking',
    icon: CalendarDays,
  },
  {
    id: 'encyclopedia',
    name: 'Procedures',
    path: '/encyclopedia',
    icon: BookOpen,
  },
  {
    id: 'discharge',
    name: 'Discharge',
    path: '/discharge',
    icon: FileCheck2,
  },
  {
    id: 'biopsies',
    name: 'Biopsy',
    path: '/biopsies',
    icon: Microscope,
  },
  {
    id: 'education',
    name: 'Education',
    path: '/education',
    icon: Eye,
  },
  {
    id: 'simulations',
    name: 'Simulator',
    path: '/simulations',
    icon: GraduationCap,
  },
  {
    id: 'schemes',
    name: 'Tariffs',
    path: '/schemes',
    icon: CreditCard,
  },
  {
    id: 'protocols',
    name: 'Protocols',
    path: '/protocols',
    icon: Pill,
  },
];

export interface SidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
  onOpenCreate?: () => void;
  className?: string;
}

/**
 * Hyper-Minimalist Google Workspace Sidebar
 * Light canvas, one-word clean tabs, no badges, no noisy capacity meters.
 */
export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed = false,
  onToggleCollapse,
  currentPath,
  onNavigate,
  onOpenCreate,
  className = '',
}) => {
  const [activeRoute, setActiveRoute] = useState<string>(currentPath || '/');
  const [isHashMode, setIsHashMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHashMode(window.location.hash.length > 0 || window.location.pathname === '/');
      const handleHashChange = () => {
        const hashPath = window.location.hash.replace('#', '') || '/';
        setActiveRoute(hashPath);
      };
      handleHashChange();
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  useEffect(() => {
    if (currentPath) {
      setActiveRoute(currentPath);
    }
  }, [currentPath]);

  const handleItemClick = (path: string) => {
    setActiveRoute(path);
    if (onNavigate) {
      onNavigate(path);
    } else if (typeof window !== 'undefined') {
      if (isHashMode || window.location.hash) {
        window.location.hash = path;
      } else {
        window.location.pathname = path;
      }
    }
  };

  const isCurrentActive = (itemPath: string) => {
    if (itemPath === '/') {
      return activeRoute === '/' || activeRoute === '';
    }
    return activeRoute.startsWith(itemPath);
  };

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isCollapsed ? '72px' : '240px',
        transition: {
          duration: 0.2,
          ease: [0.2, 0, 0, 1], // Google MD3 Decelerate
        },
      }}
      className={cn(
        'relative flex flex-col h-screen bg-[#FFFFFF] text-[#202124] select-none z-30 transition-colors',
        'border-r border-[#DADCE0]',
        className
      )}
      aria-label="Google Workspace Navigation Sidebar"
    >
      {/* Top Google "Create" Action Button */}
      <div className="pt-4 pb-3 px-3">
        <button
          onClick={() => {
            if (onOpenCreate) {
              onOpenCreate();
            } else if (typeof window !== 'undefined') {
              window.location.hash = '/ot-booking';
            }
          }}
          className={cn(
            'flex items-center gap-3 transition-all duration-200',
            'bg-[#FFFFFF] hover:bg-[#F8F9FA] active:bg-[#F1F3F4]',
            'text-[#202124] font-medium text-sm',
            'border border-[#DADCE0] shadow-xs hover:shadow-sm',
            isCollapsed
              ? 'w-12 h-12 rounded-full justify-center p-0 mx-auto'
              : 'h-12 px-5 rounded-full w-full'
          )}
          title="New Case"
        >
          {/* Google 4-Color Cross */}
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 36 36">
            <path fill="#4285F4" d="M16 16v14h4V16h10v-4H20V2h-4v10H6v4h10z" />
            <path fill="#34A853" d="M30 16H20l-4-4h14v4z" />
            <path fill="#FBBC05" d="M6 16h10l4 4H6v-4z" />
            <path fill="#EA4335" d="M20 16V2h-4v14h4z" />
          </svg>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.15 }}
                className="font-medium text-sm tracking-tight text-[#202124]"
              >
                New Case
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Main Sanitized Navigation List (One-Word, No Badges) */}
      <nav className="flex-1 overflow-y-auto px-2 space-y-0.5 py-1" role="navigation">
        {NAV_ITEMS.map((item) => {
          const active = isCurrentActive(item.path);
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.path)}
              className={cn(
                'group relative flex items-center w-full transition-all duration-150',
                isCollapsed
                  ? 'h-10 w-10 mx-auto justify-center rounded-full my-1'
                  : 'h-10 px-3.5 rounded-r-full my-0.5',
                active
                  ? 'bg-[#E8F0FE] text-[#1A73E8] font-medium'
                  : 'text-[#3C4043] hover:bg-[#F1F3F4] hover:text-[#202124] font-normal'
              )}
              title={isCollapsed ? item.name : undefined}
            >
              <Icon
                className={cn(
                  'shrink-0 transition-colors',
                  isCollapsed ? 'w-5 h-5' : 'w-5 h-5 mr-3.5',
                  active ? 'text-[#1A73E8]' : 'text-[#5F6368] group-hover:text-[#202124]'
                )}
              />

              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    className="truncate text-[13px] tracking-tight text-left"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>

      {/* Footer Collapse Toggle */}
      <div className="p-2 border-t border-[#DADCE0] flex items-center justify-between">
        <button
          onClick={onToggleCollapse}
          className={cn(
            'flex items-center justify-center p-2 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition-colors',
            isCollapsed ? 'mx-auto' : 'ml-1'
          )}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>

        {!isCollapsed && (
          <span className="text-[11px] text-[#5F6368] mr-2">
            SMS IR-RIS
          </span>
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
