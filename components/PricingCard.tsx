import React from 'react';
import Link from 'next/link';
import { Check, Sparkles, ShieldCheck, ArrowRight, Smartphone, RefreshCw } from 'lucide-react';

const PLAN_FEATURES = [
  "Unlimited medication routines & dose times",
  "Full-screen audible alarms that wake locked devices",
  "Natural spoken Bangla voice announcements",
  "Smart grouping for simultaneous medications",
  "AI-powered prescription OCR & schedule extraction",
  "Caregiver & family monitoring network",
  "Detailed adherence history & compliance analytics",
  "Strict patient data privacy — zero commercial ads",
];

export default function PricingCard() {
  return (
    <section id="pricing" className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <span>Simple Carrier Billing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One Transparent, Affordable Plan
          </h2>
          <p className="text-base text-slate-600">
            No expensive monthly lock-ins. Charged directly from your Robi or Airtel mobile balance.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mt-12 max-w-lg mx-auto">
          <div className="relative rounded-3xl bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-600/10 p-7 sm:p-9 overflow-hidden">
            
            {/* Top Accent Pill */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-teal-600 text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-5 rounded-bl-2xl">
              All Features Included
            </div>

            <div className="space-y-6">
              
              {/* Plan Title & Pricing */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Daily Carrier Plan
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  OsudSheba Premium
                </h3>
                
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-slate-900 tracking-tight">
                    ৳২
                  </span>
                  <div className="text-xs text-slate-500 font-medium">
                    <span>/ দিন (day)</span>
                    <p className="text-[11px] text-slate-400">+ VAT/SD applicable</p>
                  </div>
                </div>
              </div>

              {/* Supported Carriers */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span>Robi (018) & Airtel (016)</span>
                </div>
                <span className="text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-200/80 font-medium">
                  AppsPro / BDApps
                </span>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  What you get:
                </h4>
                <ul className="space-y-2.5">
                  {PLAN_FEATURES.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Link
                  href="/subscribe"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Subscribe Now (৳2/day)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Freedom Policy Footer */}
              <div className="pt-2 flex items-center justify-center gap-4 text-xs text-slate-400 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No commitments</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cancel anytime</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
