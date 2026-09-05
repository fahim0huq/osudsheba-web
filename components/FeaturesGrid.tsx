import React from 'react';
import { 
  BellRing, 
  Volume2, 
  Layers, 
  CheckCircle2, 
  FileSearch, 
  Users, 
  LineChart, 
  ShieldCheck 
} from 'lucide-react';

const REAL_FEATURES = [
  {
    icon: BellRing,
    title: "Full-Screen Medication Alarms",
    titleBn: "ফুল-স্ক্রিন মেডিসিন অ্যালার্ম",
    description: "Alarms wake your device even when silent or locked. High-visibility full-screen cards ensure you never overlook a scheduled dose.",
    tag: "Core Alert",
  },
  {
    icon: Volume2,
    title: "Spoken Bangla Voice Guidance",
    titleBn: "বাংলা ভয়েস নির্দেশনা",
    description: "Naturally pronounces medicine brand, dose quantity, and meal instructions (e.g., '১টি ট্যাবলেট, খাবারের পরে') so elderly parents can listen without straining.",
    tag: "Bangla TTS",
  },
  {
    icon: Layers,
    title: "Smart Time Grouping",
    titleBn: "একসাথে একাধিক ওষুধ গ্রুপ অ্যালার্ট",
    description: "Taking 3 medicines at 8:00 AM? OsudSheba consolidates them into a single coherent audio alert rather than firing three conflicting alarms.",
    tag: "Intelligent UX",
  },
  {
    icon: CheckCircle2,
    title: "One-Tap Dose Tracking",
    titleBn: "খেয়েছি ও পরে মনে করানোর সুবিধা",
    description: "Quick actions for 'Taken' (খেয়েছি), 'Remind Me Later' (১০ মিনিট পর মনে করান), or 'Skip'. Keeps an immutable log of your daily medication history.",
    tag: "Adherence",
  },
  {
    icon: FileSearch,
    title: "AI Prescription Extraction",
    titleBn: "প্রেসক্রিপশন এআই স্ক্যানার",
    description: "Snap a photo of your prescription. Powered by advanced vision AI, OsudSheba extracts medicine names, dosages, and schedules directly into your routine.",
    tag: "Vision AI",
  },
  {
    icon: Users,
    title: "Caregiver & Family Network",
    titleBn: "পরিবারের সদস্যদের তদারকি",
    description: "Designate family members or caregivers to monitor compliance. Caregivers get notified if vital medicines are missed or snoozed.",
    tag: "Family Care",
  },
  {
    icon: LineChart,
    title: "Compliance Analytics",
    titleBn: "দৈনিক ও সাপ্তাহিক অগ্রগতি",
    description: "Track your adherence percentage with clean visual charts. Doctors and family can review your real-life medication compliance over time.",
    tag: "Health Records",
  },
  {
    icon: ShieldCheck,
    title: "100% Confidential & Secure",
    titleBn: "গোপনীয় ও নিরাপদ",
    description: "No advertisements, no data selling. Your medical schedule stays strictly between you, your authorized caregiver, and your device.",
    tag: "Privacy First",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <span>Verified Product Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for Accurate, Stress-Free Medication
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every feature in OsudSheba is designed to solve real daily challenges faced by patients and caregivers in Bangladesh. No generic gimmicks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-emerald-200 shadow-xs hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-200/60 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      {feature.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600 mt-0.5">
                      {feature.titleBn}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
