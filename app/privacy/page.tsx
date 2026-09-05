import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileText } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy - OsudSheba Healthcare",
  description: "Read how OsudSheba protects patient medication data, prescription scans, and mobile phone privacy in Bangladesh.",
};

export default function PrivacyPage() {
  return (
    <div className="py-14 sm:py-20 bg-slate-50 min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Healthcare Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last updated: September 2026 • OsudSheba Healthcare Application
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8 text-sm text-slate-700 leading-relaxed">
          
          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>1. Zero Password / Zero Website Account Architecture</span>
            </h2>
            <p>
              The OsudSheba website does not require users to create accounts with email addresses, passwords, or social media logins. Your identity for the website subscription flow is strictly your mobile phone number (Robi or Airtel Bangladesh) authenticated through a one-time SMS OTP.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-emerald-600" />
              <span>2. How Your Phone Number is Used</span>
            </h2>
            <p>
              Your phone number is used exclusively for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Processing daily carrier billing (৳2/day) through AppsPro and BDApps.</li>
              <li>Delivering verification SMS OTP codes.</li>
              <li>Validating your subscription entitlement when you open the downloaded OsudSheba application.</li>
            </ul>
            <p>
              We never sell, rent, or share your phone number with telemarketers or third-party advertising platforms.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>3. Prescription Images & AI Extraction</span>
            </h2>
            <p>
              When you capture or upload a prescription image using OsudSheba&apos;s AI extraction feature:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>The image is sent over TLS/HTTPS encrypted connections to our secure backend processing engine.</li>
              <li>The text extraction identifies medicine names, strengths, and times strictly to auto-fill your reminder schedule.</li>
              <li>Uploaded images are processed ephemerally and are not used for public model training or commercial targeting.</li>
            </ul>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. Caregiver & Family Data Sharing
            </h2>
            <p>
              Caregiver features are entirely opt-in. A caregiver can only view compliance logs and receive missed dose alerts if explicitly linked by the patient or authorized by family members.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              5. Subscription Cancellation & Data Deletion
            </h2>
            <p>
              You can cancel your subscription at any time via USSD/SMS or directly within the application. If you wish to delete your schedule records, you can clear all data through the in-app settings or by contacting our support team.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
