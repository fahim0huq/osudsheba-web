import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "OsudSheba - Smart Medicine Reminder & Bangla Voice Alerts",
  description: "Never miss your medicine again. OsudSheba helps families in Bangladesh manage medication schedules with timely full-screen alarms, spoken Bangla voice reminders, and caregiver alerts.",
  keywords: [
    "OsudSheba",
    "ওষুধসেবা",
    "Medicine reminder Bangladesh",
    "Bangla voice medication reminder",
    "Prescription scanner Bangladesh",
    "Robi Airtel medication app",
    "Caregiver alerts Bangladesh"
  ],
  authors: [{ name: "OsudSheba Healthcare" }],
  creator: "OsudSheba",
  publisher: "OsudSheba",
  icons: {
    icon: "/favicon.png",
    apple: "/app_icon.png",
  },
  openGraph: {
    title: "OsudSheba - Never Miss Your Medicine Again",
    description: "Smart medication schedules, full-screen alarms, and spoken Bangla voice reminders for Robi and Airtel subscribers.",
    url: "https://www.osudsheba.com",
    siteName: "OsudSheba",
    locale: "bn_BD",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900 font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
