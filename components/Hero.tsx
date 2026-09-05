import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Bell, Volume2, CheckCircle2, Clock, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-emerald-50/60 via-slate-50/50 to-white">
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Operator Carrier Billing Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Robi & Airtel Bangladesh • ৳২/দিন (2.00 BDT/day)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Never Miss Your <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Medicine Again.
              </span>
            </h1>

            {/* Product Summary */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              OsudSheba is your personalized medication companion for Bangladesh. Full-screen medication alarms, crystal-clear <strong>Bangla voice alerts</strong>, AI prescription scanning, and caregiver alerts ensure you or your elderly parents take the right pill at the right time.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/subscribe"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-5 h-5 text-emerald-200" />
                <span>Subscribe & Get the App</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all"
              >
                <span>Explore Real Features</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No bank card needed</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant SMS OTP</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Volume2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>বাংলা ভয়েস এলার্ট</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Application UI Representation */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Phone Frame Mockup representing actual OsudSheba Flutter UI */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] bg-slate-900 rounded-[38px] p-3.5 shadow-2xl shadow-slate-900/25 border-4 border-slate-800">
              
              {/* Phone Speaker & Dynamic Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-full flex items-center justify-center z-20">
                <div className="w-3 h-3 rounded-full bg-slate-950/80 mr-3" />
                <div className="w-8 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Screen Content Container */}
              <div className="bg-slate-50 rounded-[30px] overflow-hidden pt-8 pb-5 px-4 text-slate-800 space-y-3.5 select-none">
                
                {/* App Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Assalamu Alaikum
                    </span>
                    <h2 className="text-base font-bold text-slate-900 leading-tight">
                      OsudSheba • ওষুধসেবা
                    </h2>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                    <Bell className="w-4 h-4" />
                  </div>
                </div>

                {/* Progress Summary Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-emerald-100">আজকের ওষুধ গ্রহণ (Today)</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-semibold">১০০% সম্পন্ন</span>
                  </div>
                  <div className="w-full bg-emerald-950/30 rounded-full h-2 overflow-hidden">
                    <div className="bg-white h-full rounded-full w-full" />
                  </div>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                    <span>সকালের নির্ধারিত সকল ওষুধ সময়মতো নেওয়া হয়েছে</span>
                  </p>
                </div>

                {/* Live Full-Screen Alarm Sample */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                        <Clock className="w-3.5 h-3.5" />
                        <span>সকাল ০৮:০০ (Morning Dose)</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                        সেকলো ২০ মি.গ্রা. (Seclo 20)
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        ১টি ক্যাপসুল • খাবারের ৩০ মিনিট আগে
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[11px] font-bold border border-emerald-200">
                      খাবারের আগে
                    </span>
                  </div>

                  {/* Bangla Spoken Notification Audio Badge */}
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Volume2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11px] leading-tight text-slate-600">
                      <strong className="text-slate-800">বাংলা ভয়েস:</strong> &ldquo;এখন সেকলো ২০ খাবার আগে খাওয়ার সময় হয়েছে&rdquo;
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button className="py-2 text-xs font-bold text-white bg-emerald-600 rounded-xl flex items-center justify-center gap-1.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>খেয়েছি (Taken)</span>
                    </button>
                    <button className="py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
                      ১০ মি. পরে মনে করান
                    </button>
                  </div>
                </div>

                {/* Second Medicine Entry */}
                <div className="p-3 rounded-xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                      Rx
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">নাপা এক্সট্রা (Napa Extra)</p>
                      <p className="text-[11px] text-slate-500">১টি ট্যাবলেট • দুপুর ০২:০০ (খাবারের পরে)</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">Scheduled</span>
                </div>

              </div>

              {/* Device Home Indicator Bar */}
              <div className="w-32 h-1 bg-slate-600 rounded-full mx-auto mt-3" />
            </div>

            {/* Subtle Floating Feature Tag */}
            <div className="absolute -bottom-4 -right-2 sm:right-6 bg-white rounded-xl shadow-lg border border-slate-200/80 p-3 hidden sm:flex items-center gap-3 animate-fade-in">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Spoken Bangla TTS</p>
                <p className="text-[11px] text-slate-500">Elderly & Family Friendly</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
