'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastType = 'default' | 'success' | 'destructive' | 'warning' | 'info';

export interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  toast: (options: Omit<Toast, 'id'>) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, type = 'default', duration = 4000 }: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: Toast = { id, title, description, type, duration };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          dismiss(id);
        }, duration);
      }
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      {/* Toast Render Viewport */}
      <div
        aria-live="polite"
        className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none p-2"
      >
        <AnimatePresence>
          {toasts.map((t) => {
            const iconMap = {
              default: <Info className="w-4 h-4 text-slate-300" />,
              info: <Info className="w-4 h-4 text-cyan-400" />,
              success: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
              destructive: <AlertCircle className="w-4 h-4 text-crimson-light" />,
              warning: <AlertTriangle className="w-4 h-4 text-amber-400" />,
            };

            const borderMap = {
              default: 'border-slate-700 bg-cathlab-card text-slate-100',
              info: 'border-cyan-800/80 bg-slate-900 text-slate-100',
              success: 'border-emerald-800/80 bg-emerald-950/80 text-emerald-100',
              destructive: 'border-red-800/80 bg-red-950/90 text-red-100',
              warning: 'border-amber-800/80 bg-amber-950/80 text-amber-100',
            };

            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={cn(
                  'pointer-events-auto flex items-start gap-3 p-3.5 rounded-lg border shadow-xl backdrop-blur-md text-xs',
                  borderMap[t.type || 'default']
                )}
              >
                <div className="flex-shrink-0 mt-0.5">{iconMap[t.type || 'default']}</div>
                <div className="flex-1 space-y-0.5">
                  <div className="font-semibold">{t.title}</div>
                  {t.description && (
                    <div className="text-[11px] opacity-80">{t.description}</div>
                  )}
                </div>
                <button
                  onClick={() => dismiss(t.id)}
                  className="flex-shrink-0 p-1 rounded hover:bg-white/10 opacity-70 hover:opacity-100 transition"
                  aria-label="Dismiss notification"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
