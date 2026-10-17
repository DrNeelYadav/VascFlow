import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EndoFlow | SMS IR Angiosuite",
  description:
    "Institutional clinical workflow system for interventional radiology suites, SMS Hospital, Jaipur.",
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
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png?v=3", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png?v=3", sizes: "96x96", type: "image/png" },
      { url: "/icon-128.png?v=3", sizes: "128x128", type: "image/png" },
      { url: "/icon.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/icon-256.png?v=3", sizes: "256x256", type: "image/png" },
      { url: "/icon-512.png?v=3", sizes: "512x512", type: "image/png" },
      { url: "/endoflow_logo.svg?v=3", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=3",
  },
  manifest: "/manifest.json?v=3",
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
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-50 selection:text-blue-600 overflow-x-hidden print:overflow-visible print:h-auto print:min-h-0">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
