import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EndoIR | SMS IR Angiosuite Clinical System",
  description:
    "Institutional clinical workflow system for interventional radiology suites.",
  applicationName: "EndoIR",
  authors: [{ name: "SMS IR Angiosuite" }],
  keywords: [
    "EndoIR",
    "SMS Hospital",
    "Cath Lab",
    "Interventional Radiology",
    "Clinical Workflow",
    "Angiosuite",
  ],
  icons: {
    icon: [
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
    title: "EndoIR",
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
    <html lang="en">
      <body className="min-h-screen bg-[#F8F9FA] text-[#202124] font-sans antialiased selection:bg-[#E8F0FE] selection:text-[#1A73E8] overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
