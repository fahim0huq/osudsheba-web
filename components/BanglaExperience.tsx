import React from 'react';
import { Volume2, Mic, CheckCircle2 } from 'lucide-react';

export default function BanglaExperience() {
  return (
    <section id="bangla-voice" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Demo of Bangla Voice */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-950 text-white shadow-xl space-y-6 relative overflow-hidden">
              
              {/* Decorative soundwave styling */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700/60 flex items-center justify-center text-emerald-300">
                    <Volume2 className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-100">স্পোকেন বাংলা ভয়েস</h4>
                    <p className="text-xs text-emerald-400">Natural Spoken Bengali TTS</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-800/80 text-[11px] font-semibold text-emerald-200 border border-emerald-700">
                  Active
                </span>
              </div>

              {/* Spoken Samples */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-emerald-300">
                    <span className="font-semibold">সকালের অ্যালার্ম (Morning)</span>
                    <span className="text-[11px] text-emerald-400">০৮:০০ AM</span>
                  </div>
                  <p className="text-sm font-medium text-white italic">
                    &ldquo;এখন সেকলো ২০ মিলিগ্রাম, ১টি ক্যাপসুল, খাবারের আগে খাওয়ার সময় হয়েছে।&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-emerald-300">
                    <span className="font-semibold">দুপুরের অ্যালার্ম (Noon)</span>
                    <span className="text-[11px] text-emerald-400">০২:০০ PM</span>
                  </div>
                  <p className="text-sm font-medium text-white italic">
                    &ldquo;এখন নাপা এক্সট্রা, ১টি ট্যাবলেট, খাবারের পরে খাওয়ার সময় হয়েছে।&rdquo;
                  </p>
                </div>
              </div>

              {/* Spoken Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>বাংলা সংখ্যা (০-৯)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>খাবারের সঠিক নিয়ম</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ট্যাবলেট ও সিরাপের মাপ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>বয়োজ্যেষ্ঠদের সহায়ক</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Explanatory Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Mic className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tailored for Bangladesh</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Native Bengali Experience for Your Whole Family
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Many existing healthcare applications are built only in English with confusing medical terminology. OsudSheba is designed from the ground up for Bangladeshi households:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                  ১
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    বয়োজ্যেষ্ঠ বাবা-মায়ের জন্য সহজ
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Elderly parents who struggle to read small text on mobile screens can simply listen to the natural Bengali voice tell them exactly which medicine to take.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                  ২
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    খাবারের আগে না পরে — সঠিক নির্দেশনা
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Clear differentiation between Before Meal (&lsquo;খাবারের আগে&rsquo;), After Meal (&lsquo;খাবারের পরে&rsquo;), and With Meal ensures medications deliver optimal therapeutic benefit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                  ৩
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    লোকাল মোবাইল অপারেটর বিলিং
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    No international credit card required. Subscribes straight through your existing Robi or Airtel mobile balance at ৳2 per day via BDApps carrier billing.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
