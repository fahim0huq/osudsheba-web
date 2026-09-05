import React from 'react';
import Link from 'next/link';
import { 
  BellRing, 
  Volume2, 
  CheckCircle2, 
  FileSearch, 
  Users, 
  Sparkles, 
  ArrowRight,
  Clock
} from 'lucide-react';

export const metadata = {
  title: "OsudSheba Features - Built for Accurate Medicine Management",
  description: "Explore the verified real features of OsudSheba: full-screen alarms, spoken Bangla voice guidance, AI prescription parsing, and caregiver notifications.",
};

export default function FeaturesPage() {
  return (
    <div className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <span>Comprehensive Feature Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Every Feature Backed by Real Code & Purpose
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We don&apos;t build generic healthcare templates. Here is a detailed breakdown of the exact functionality running in the OsudSheba medication management platform.
          </p>
        </div>

        {/* Deep Dive 1: Full-Screen Alarms & Lock Screen Overrides */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold">
                <BellRing className="w-4 h-4" />
                <span>Full-Screen Alarms</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Alarms That Wake Your Device When Locked
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Standard notifications are easily missed when you are busy or asleep. OsudSheba triggers an urgent, high-visibility full-screen alert that illuminates your phone screen and plays designated alert tones even when the screen is turned off or locked.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>High-contrast visual card with medicine name and dosage</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>One-tap &ldquo;Taken&rdquo; (খেয়েছি) marks the dose immediately</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>&ldquo;Remind Me Later&rdquo; automatically snoozes for 10 minutes</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Clock className="w-3.5 h-3.5" /> 08:00 AM Alarm
                </span>
                <span>Active Notification</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Morning Dose</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Seclo 20mg (সেকলো ২০)</h3>
                <p className="text-xs text-slate-300 mt-1">1 Capsule • Before Meal (খাবারের আগে)</p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="py-2.5 rounded-xl bg-emerald-600 text-center font-bold text-xs text-white">
                  ✓ Taken (খেয়েছি)
                </div>
                <div className="py-2.5 rounded-xl bg-slate-800 text-center font-semibold text-xs text-slate-300">
                  Snooze 10m
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive 2: Bangla Voice Guidance */}
        <div id="bangla-tts" className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 bg-gradient-to-br from-teal-900 to-emerald-950 rounded-2xl p-6 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold border-b border-emerald-800/80 pb-3">
                <Volume2 className="w-4 h-4" />
                <span>Text-to-Speech Engine Rules</span>
              </div>
              <div className="space-y-3 text-xs text-slate-200">
                <div className="p-3 rounded-xl bg-emerald-900/50 border border-emerald-700/50">
                  <p className="text-emerald-300 font-bold mb-1">Bengali Numeral Conversion:</p>
                  <p className="font-mono text-emerald-100">0..9 &rarr; ০, ১, ২, ৩, ৪, ৫, ৬, ৭, ৮, ৯</p>
                </div>
                <div className="p-3 rounded-xl bg-emerald-900/50 border border-emerald-700/50">
                  <p className="text-emerald-300 font-bold mb-1">Dosage Unit Articulation:</p>
                  <p className="text-emerald-100">&ldquo;১টি ট্যাবলেট&rdquo; / &ldquo;১টি ক্যাপসুল&rdquo; / &ldquo;৫ মিলি সিরাপ&rdquo;</p>
                </div>
                <div className="p-3 rounded-xl bg-emerald-900/50 border border-emerald-700/50">
                  <p className="text-emerald-300 font-bold mb-1">Food Relation Articulation:</p>
                  <p className="text-emerald-100">&ldquo;খাবারের আগে&rdquo; / &ldquo;খাবারের পরে&rdquo;</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-50 text-teal-700 text-xs font-bold">
                <Volume2 className="w-4 h-4" />
                <span>Bangla Voice Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Natural Spoken Bangla for Every Dose
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Many users, particularly elderly parents in Bangladesh, have difficulty deciphering small phone text or complex generic names. OsudSheba articulates spoken Bangla instructions clearly through your phone&apos;s audio speaker.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The voice service handles exact brand names, strength (e.g. &lsquo;৫০০ মিলিগ্রাম&rsquo;), and dosage forms so patients know precisely what bottle or strip to reach for.
              </p>
            </div>
          </div>
        </div>

        {/* Deep Dive 3: AI Prescription OCR Analysis */}
        <div id="prescription-ai" className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold">
                <FileSearch className="w-4 h-4" />
                <span>Vision AI Extraction</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Snap a Photo to Extract Schedules Instantly
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Typing dozens of medication names and confusing frequencies (e.g. 1+0+1) is tedious. OsudSheba allows users to upload or capture a photo of a doctor&apos;s prescription.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">Brand & Generic Matching</strong>
                  <span>Extracts commercial names and active chemical formulations.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">Frequency Mapping</strong>
                  <span>Translates 1+0+1 or 1+1+1 into exact 08:00 AM, 02:00 PM, 08:00 PM alarms.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">Safety Review Screen</strong>
                  <span>Always gives the user final review and manual confirmation before saving.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">Confidence Scoring</strong>
                  <span>Flags any ambiguous doctor handwriting for double verification.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 text-white shadow-xl space-y-3 font-mono text-xs">
              <div className="text-slate-400 border-b border-slate-800 pb-2 text-[11px] font-sans font-semibold">
                AI Prescription Extractor (Replicate Gemini)
              </div>
              <div className="text-emerald-400">&#123;</div>
              <div className="pl-4 text-slate-300">
                &quot;name&quot;: &quot;Seclo&quot;,<br />
                &quot;strength&quot;: &quot;20mg&quot;,<br />
                &quot;form&quot;: &quot;capsule&quot;,<br />
                &quot;times&quot;: [&quot;08:00 AM&quot;],<br />
                &quot;mealRelation&quot;: &quot;Before Meal&quot;,<br />
                &quot;confidence&quot;: 0.98
              </div>
              <div className="text-emerald-400">&#125;</div>
              <div className="pt-2 text-[11px] font-sans text-slate-400">
                Automatically verified against prescription review screen.
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive 4: Caregiver Sync */}
        <div id="caregiver-sync" className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 border-b border-slate-200 pb-2">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <Users className="w-4 h-4" /> Caregiver Dashboard
                </span>
                <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Connected</span>
              </div>
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-white border border-slate-200/70 text-xs">
                  <span className="text-slate-400 text-[10px]">Patient</span>
                  <p className="font-bold text-slate-900">Abdur Rahman (Father)</p>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-1">Today&apos;s Adherence: 100%</p>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900">
                  <strong>Notification Log:</strong>
                  <p className="text-[11px] text-emerald-700 mt-0.5">Morning dose taken at 08:02 AM.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold">
                <Users className="w-4 h-4" />
                <span>Caregiver & Family Network</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Stay Connected with Vulnerable Loved Ones
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                If you live away from your parents in Dhaka, Chattogram, or abroad, OsudSheba bridges the gap. Caregivers can monitor patient schedules, receive alerts if critical cardiac or diabetic doses are skipped, and confirm adherence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center bg-emerald-600 rounded-3xl p-10 text-white space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Experience OsudSheba?</h2>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Activate your Robi or Airtel carrier subscription for ৳2/day and unlock all of these features instantly.
          </p>
          <div className="pt-2">
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-emerald-950 bg-white hover:bg-emerald-50 shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Subscribe & Download APK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
