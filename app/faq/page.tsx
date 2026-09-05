import React from 'react';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import { HelpCircle, Sparkles, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Frequently Asked Questions - OsudSheba",
  description: "Find answers to all questions regarding OsudSheba subscription, Robi & Airtel carrier billing, Bangla voice reminders, and Android app setup.",
};

export default function FAQPage() {
  return (
    <div className="py-14 sm:py-20 bg-slate-50 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help Center & FAQ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, transparent answers about how OsudSheba works, pricing, supported carriers, and app verification.
          </p>
        </div>

        {/* Full FAQ Accordion */}
        <FAQAccordion />

        {/* Still have questions CTA */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            Ready to Never Miss a Medicine?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Subscribe using your Robi or Airtel number for just ৳2/day and unlock the OsudSheba Android application today.
          </p>
          <div className="pt-2">
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 hover:scale-[1.02] transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Subscribe Now (৳2/day)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
