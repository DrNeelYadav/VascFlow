import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Layout } from './components/shell/Layout';

import { LoginPage } from './pages/LoginPage';
import { LaunchpadPage } from './pages/LaunchpadPage';
import { OtBookingPage } from './pages/OtBookingPage';
import { EncyclopediaPage } from './pages/EncyclopediaPage';
import { DischargeStudioPage } from './pages/DischargeStudioPage';
import { BiopsyRegistryPage } from './pages/BiopsyRegistryPage';
import { EducationPage } from './pages/EducationPage';
import { CaseSimulatorPage } from './pages/CaseSimulatorPage';
import { SchemeDirectoryPage } from './pages/SchemeDirectoryPage';
import { DrugProtocolsPage } from './pages/DrugProtocolsPage';
import { useClinicalStore } from './stores/useClinicalStore';

const AppLayout: React.FC = () => (
  <Layout>
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <Outlet />
    </div>
  </Layout>
);

export const App: React.FC = () => {
  const isDarkMode = useClinicalStore((s) => s.isCathLabDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <HashRouter>
      <Routes>
        {/* Standalone Authentication Route (Pure White, No Shell) */}
        <Route path="/login" element={<LoginPage />} />

        {/* Clinical Application Shell */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<LaunchpadPage />} />
          <Route path="/ot-booking" element={<OtBookingPage />} />
          <Route path="/roster" element={<Navigate to="/ot-booking" replace />} />
          <Route path="/encyclopedia" element={<EncyclopediaPage />} />
          <Route path="/discharge" element={<DischargeStudioPage />} />
          <Route path="/biopsies" element={<BiopsyRegistryPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/simulations" element={<CaseSimulatorPage />} />
          <Route path="/schemes" element={<SchemeDirectoryPage />} />
          <Route path="/calculators" element={<Navigate to="/protocols" replace />} />
          <Route path="/protocols" element={<DrugProtocolsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
