import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import HowItWorks from '@/components/HowItWorks';
import BanglaExperience from '@/components/BanglaExperience';
import PricingCard from '@/components/PricingCard';
import FAQAccordion from '@/components/FAQAccordion';
import { ArrowRight, Sparkles, Download, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section with Real UI Mockup */}
      <Hero />

      {/* 2. Real Features Grid */}
      <FeaturesGrid />

      {/* 3. Simple 5-Step Process */}
      <HowItWorks />

      {/* 4. Native Bangla Experience Showcase */}
      <BanglaExperience />

      {/* 5. Pricing & Carrier Billing Plan */}
      <PricingCard />

      {/* 6. FAQ Preview Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
              <span>Clear Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to know about OsudSheba subscription, OTP verification, and app installation.
            </p>
          </div>

          <FAQAccordion limit={5} />

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <span>View all frequently asked questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Bottom Action Banner: Ready to get started */}
      <section className="py-16 bg-gradient-to-br from-emerald-700 to-teal-800 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-emerald-100 text-xs font-semibold">
            Instant Carrier Activation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Start Managing Your Medication Routine Today
          </h2>
          <p className="text-base text-emerald-100 max-w-2xl mx-auto">
            Subscribe with your Robi or Airtel number for ৳2/day. Download the OsudSheba application and experience peace of mind with spoken Bangla reminders.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/subscribe"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-emerald-50 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Subscribe & Get App (৳2/day)</span>
            </Link>

            <Link
              href="/download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-600 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Portal</span>
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Secure Robi & Airtel Carrier Billing powered by AppsPro / BDApps</span>
          </div>
        </div>
      </section>

    </div>
  );
}
