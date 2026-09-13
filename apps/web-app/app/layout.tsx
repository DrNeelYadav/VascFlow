import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vascule OS | The speed of thought in the Angio Suite",
  description:
    "Next-generation clinical vascular workflow operating system for high-acuity surgical and interventional radiology suites.",
  applicationName: "Vascule OS",
  authors: [{ name: "Vascule OS Systems Architecture" }],
  keywords: [
    "Vascule OS",
    "Angio Suite",
    "Cath Lab",
    "Interventional Radiology",
    "Biometric Telemetry",
    "Vascular Surgery",
  ],
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
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
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans antialiased selection:bg-[#2563EB] selection:text-[#FFFFFF] overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
