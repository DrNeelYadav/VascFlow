import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '../stores/useAuthStore';
import { STAFF_PERSONAS } from '../stores/useClinicalStore';
import { StaffRoleCode } from '../types/clinical';
import { CheckCircle2, ArrowRight, Shield } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const isAuthenticating = useAuthStore((s) => s.isAuthenticating);

  const [email, setEmail] = useState('fellow.sharma@smsradiology.ac.in');
  const [selectedRole, setSelectedRole] = useState<StaffRoleCode>('DM01');
  const [password, setPassword] = useState('••••••••••••');
  const [welcomeUser, setWelcomeUser] = useState<{ name: string; role: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await login(selectedRole, email);
    setWelcomeUser({ name: user.name, role: user.role });

    // Brief welcome state before redirecting to dashboard
    setTimeout(() => {
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#202124] flex flex-col justify-between items-center p-6 select-none font-sans">
      {/* Top spacing */}
      <div className="w-full flex justify-between items-center max-w-5xl">
        <div className="text-xs text-[#5F6368] font-medium tracking-wide">
          SMS MEDICAL COLLEGE & HOSPITALS
        </div>
        <div className="text-xs text-[#5F6368]">
          Department of Radiodiagnosis & Interventional Radiology
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[440px] my-auto">
        <AnimatePresence mode="wait">
          {welcomeUser ? (
            /* Brief Welcome State Transition */
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
              className="text-center py-12 px-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#E8F0FE] text-[#1A73E8] mx-auto flex items-center justify-center mb-6 shadow-xs">
                <CheckCircle2 className="w-8 h-8 text-[#1A73E8]" />
              </div>
              <h2 className="text-xl font-heading font-semibold text-[#202124] mb-2">
                Welcome back, {welcomeUser.name}
              </h2>
              <p className="text-sm text-[#5F6368] mb-4">
                {welcomeUser.role} • Cath Lab Suite
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-[#1A73E8] font-medium bg-[#E8F0FE] px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#1A73E8] animate-pulse" />
                <span>Redirecting to clinical dashboard...</span>
              </div>
            </motion.div>
          ) : (
            /* Minimalist Google-Style Login Form */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
              className="border border-[#DADCE0] rounded-2xl p-8 sm:p-10 shadow-xs bg-[#FFFFFF]"
            >
              {/* Minimalist Geometric 'IR' Monogram Logo */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] flex items-center justify-center mb-4 text-[#1A73E8] shadow-xs">
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Minimalist Interventional Cross & Beam */}
                    <rect x="12.5" y="4" width="3" height="20" rx="1.5" fill="#1A73E8" />
                    <rect x="4" y="12.5" width="20" height="3" rx="1.5" fill="#1A73E8" />
                    <circle cx="14" cy="14" r="2.5" fill="#FFFFFF" />
                  </svg>
                </div>
                <h1 className="text-2xl font-heading font-medium text-[#202124] tracking-tight">
                  Sign in
                </h1>
                <p className="text-sm text-[#5F6368] mt-1">
                  to continue to Interventional Radiology RIS
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Staff Persona / Role Selector */}
                <div>
                  <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
                    Clinical Role
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => {
                      const code = e.target.value as StaffRoleCode;
                      setSelectedRole(code);
                      const persona = STAFF_PERSONAS[code];
                      if (persona) {
                        setEmail(`${persona.name.toLowerCase().replace(/[^a-z]/g, '')}@smsradiology.ac.in`);
                      }
                    }}
                    className="w-full h-11 px-3.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-sm text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none transition"
                  >
                    {Object.values(STAFF_PERSONAS).map((p) => (
                      <option key={p.code} value={p.code}>
                        {p.name} — {p.role} ({p.tier})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Institutional Email Field */}
                <div>
                  <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
                    Institutional Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@smsradiology.ac.in"
                    className="w-full h-11 px-3.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-sm text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none transition"
                  />
                </div>

                {/* Password / Access Key Field */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-[#5F6368]">
                      Security Passcode
                    </label>
                    <span className="text-[11px] text-[#1A73E8] hover:underline cursor-pointer">
                      Forgot PIN?
                    </span>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-sm text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none transition"
                  />
                </div>

                {/* Actions: Sign In Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isAuthenticating}
                    className="w-full h-11 rounded-full bg-[#1A73E8] hover:bg-[#1765CC] active:bg-[#1557B0] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs transition-colors disabled:opacity-50"
                  >
                    {isAuthenticating ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Institutional Safety Notice */}
              <div className="mt-8 pt-4 border-t border-[#DADCE0] flex items-center justify-between text-[11px] text-[#5F6368]">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#1E8E3E]" />
                  Secure Hospital Network
                </span>
                <span>HIPAA / DISHA Compliant</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Footer */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 max-w-5xl text-xs text-[#5F6368]">
        <div>English (United States)</div>
        <div className="flex items-center gap-6">
          <span className="hover:text-[#202124] cursor-pointer">Help</span>
          <span className="hover:text-[#202124] cursor-pointer">Privacy</span>
          <span className="hover:text-[#202124] cursor-pointer">Terms</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
