import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EndoFlow | Interventional Radiology Clinical System",
  description:
    "Clinical workflow system for interventional radiology suites.",
  applicationName: "EndoFlow",
  authors: [{ name: "EndoFlow Systems" }],
  keywords: [
    "EndoFlow",
    "Cath Lab",
    "Interventional Radiology",
    "Clinical Workflow",
  ],
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
