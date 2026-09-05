import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';

export const metadata = {
  title: "Terms of Service - OsudSheba Healthcare",
  description: "Read the terms of service governing OsudSheba application usage, BDApps carrier billing, and medical disclaimers.",
};

export default function TermsPage() {
  return (
    <div className="py-14 sm:py-20 bg-slate-50 min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            <span>Legal & Service Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">
            Last updated: September 2026 • OsudSheba Healthcare Application
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8 text-sm text-slate-700 leading-relaxed">
          
          {/* Medical Disclaimer Banner */}
          <div className="p-4.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 space-y-1.5 text-xs leading-relaxed">
            <h3 className="font-bold text-amber-950 flex items-center gap-1.5 text-sm">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>CRITICAL MEDICAL DISCLAIMER</span>
            </h3>
            <p>
              OsudSheba is solely a personal medication scheduling, reminder, and adherence assistance software. <strong>OsudSheba does not practice medicine, provide diagnosis, or prescribe drug dosages.</strong> AI prescription extraction is an informational convenience tool and may produce inaccurate transcriptions. Always verify extracted medicine names and schedules against your official printed prescription or consult a licensed physician or pharmacist.
            </p>
          </div>

          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the OsudSheba website, activating a mobile subscription via OTP, or downloading and using the OsudSheba application, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              2. Carrier Billing & Subscription Fees
            </h2>
            <p>
              OsudSheba Premium operates on mobile carrier billing powered by BDApps / AppsPro:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li><strong>Daily Fee:</strong> ৳২.০০ (2.00 BDT) per calendar day plus applicable government VAT, Supplementary Duty (SD), and Surcharge (SC).</li>
              <li><strong>Eligible Carriers:</strong> Robi Axiata Limited and Airtel Bangladesh.</li>
              <li><strong>Billing Mechanism:</strong> Charges are automatically deducted from your prepaid balance or added to your postpaid mobile bill.</li>
            </ul>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              3. OTP Authentication & Authorization
            </h2>
            <p>
              Entering the SMS OTP code sent to your mobile device constitutes your explicit authorization to activate carrier billing. You are responsible for ensuring that you have authorized access to the mobile number used.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. Subscription Cancellation
            </h2>
            <p>
              You may terminate your subscription at any time without penalty. Cancellation can be completed via standard operator USSD/SMS codes or inside the OsudSheba mobile app settings. Following cancellation, access to premium alarms continues until the end of the current paid billing cycle.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted under Bangladesh law, OsudSheba and its developers shall not be liable for missed medications, device battery depletion, operating system background notification restrictions, network carrier delays, or medical emergencies.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
