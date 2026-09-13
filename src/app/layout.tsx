import React from 'react';
import './globals.css';
import { CathLabAppShell } from '@/components/shell/CathLabAppShell';

export const metadata = {
  title: 'SMS IR-RIS | Sawai Man Singh Medical College, Jaipur',
  description: 'Interventional Radiology Information System & Clinical Governance Platform, Department of Radiodiagnosis & Interventional Radiology, SMS Hospital, Jaipur',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#0B0F17',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-cathlab text-cathlab-text font-sans antialiased min-h-screen selection:bg-crimson/30 selection:text-white">
        <div id="portal-root" />
        <CathLabAppShell>
          {children}
        </CathLabAppShell>
      </body>
    </html>
  );
}
