import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EndoFlow | SMS IR Angiosuite Clinical System",
  description:
    "Institutional clinical workflow system for interventional radiology suites.",
  applicationName: "EndoFlow",
  authors: [{ name: "SMS IR Angiosuite" }],
  keywords: [
    "EndoFlow",
    "SMS Hospital",
    "Cath Lab",
    "Interventional Radiology",
    "Clinical Workflow",
    "Angiosuite",
  ],
  icons: {
    icon: [
      { url: "/endoflow_logo.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EndoFlow",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F9FA",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('endoflow_theme') || localStorage.getItem('theme');
                if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-50 selection:text-blue-600 overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
