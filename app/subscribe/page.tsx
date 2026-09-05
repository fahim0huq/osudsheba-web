import React from 'react';
import SubscriptionFlow from '@/components/SubscriptionFlow';
import { ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Subscribe to OsudSheba - Carrier Billing for Robi & Airtel",
  description: "Activate your OsudSheba Premium subscription using your Robi or Airtel mobile number with SMS OTP. Daily ৳2.00 carrier billing.",
};

export default function SubscribePage() {
  return (
    <div className="py-12 sm:py-16 bg-gradient-to-b from-emerald-50/50 via-slate-50 to-white min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Guarantee */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Carrier Billing Portal</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Subscribe in Seconds with Your Mobile Number
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              No passwords, no bank cards, no complicated accounts. Your <strong>Robi</strong> or <strong>Airtel</strong> phone number is your key to OsudSheba.
            </p>

            {/* Value checklist */}
            <div className="space-y-3 max-w-md mx-auto lg:mx-0 text-left pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>৳২.০০ / দিন (2.00 BDT/day) deducted from mobile balance</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>SMS OTP verification protects your subscription</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Unlocks instant access to download the Android APK</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Cancel anytime without penalty via USSD or in-app</span>
              </div>
            </div>

            {/* Carrier Logos / Info */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs max-w-md mx-auto lg:mx-0 text-xs text-slate-500 space-y-2">
              <div className="flex items-center justify-between text-slate-800 font-bold">
                <span>Supported Mobile Networks</span>
                <span className="text-emerald-600 font-semibold">BDApps Carrier Billing</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Supports Robi numbers beginning with <strong>018</strong> and Airtel numbers beginning with <strong>016</strong>.
              </p>
            </div>

            <div className="pt-2">
              <Link href="/faq" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-700">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Need help with subscription? Read our FAQ</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Interactive Subscription Flow */}
          <div className="lg:col-span-5">
            <SubscriptionFlow />
          </div>

        </div>

      </div>
    </div>
  );
}
