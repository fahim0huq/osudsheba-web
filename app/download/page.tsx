import React from 'react';
import DownloadGated from '@/components/DownloadGated';
import { Download, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Download OsudSheba - Gated Android App Portal",
  description: "Download the OsudSheba Android application. Verified subscription required to access the installation package.",
};

export default function DownloadPage() {
  return (
    <div className="py-14 sm:py-20 bg-slate-50 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <Download className="w-3.5 h-3.5" />
            <span>Official Application Distribution</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Download OsudSheba
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Install the OsudSheba Android application on your smartphone to start receiving full-screen alarms and spoken Bangla voice reminders.
          </p>
        </div>

        {/* Gated Container Component */}
        <DownloadGated />

        {/* Bottom Help Note */}
        <div className="text-center pt-4">
          <Link href="/faq" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-700">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Have questions about installation or subscription? Read FAQ</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
