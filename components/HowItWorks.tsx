import React from 'react';
import Link from 'next/link';
import { Smartphone, KeyRound, Download, CheckCircle, HeartHandshake, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: "01",
    icon: Smartphone,
    title: "Enter Mobile Number",
    titleBn: "মোবাইল নম্বর লিখুন",
    description: "Provide your Robi or Airtel Bangladesh mobile number on the subscription page.",
  },
  {
    step: "02",
    icon: KeyRound,
    title: "Verify with SMS OTP",
    titleBn: "ওটিপি দিয়ে নিশ্চিত করুন",
    description: "Enter the 6-digit verification code sent to your phone. Carrier billing is activated at ৳2/day.",
  },
  {
    step: "03",
    icon: Download,
    title: "Download OsudSheba",
    titleBn: "অ্যাপটি ডাউনলোড করুন",
    description: "Your subscription unlocks the official OsudSheba Android APK immediately.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Verify Inside the App",
    titleBn: "অ্যাপে নম্বর যাচাই করুন",
    description: "Open OsudSheba on your Android device. The app verifies your mobile number with the backend.",
  },
  {
    step: "05",
    icon: HeartHandshake,
    title: "Begin Medication Management",
    titleBn: "সুস্থ জীবনের সূচনা",
    description: "Enjoy full-screen alarms, Bangla voice reminders, and peace of mind for you and your family.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <span>Simple 5-Step Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How to Get Started with OsudSheba
          </h2>
          <p className="text-base text-slate-600">
            No complicated account setup or credit card required. Pure carrier-billing simplicity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {STEPS.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <div
                key={idx}
                className="relative bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Step Number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-200 group-hover:text-emerald-300 transition-colors">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5 mb-2">
                    {s.titleBn}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/subscribe"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 hover:scale-[1.02] transition-all"
          >
            <span>Start Step 1: Subscribe Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
