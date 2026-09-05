import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Heart, Phone, AlertCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner: Medical & Local Partner Disclosure */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Official carrier billing integration for <strong className="text-slate-200">Robi</strong> and <strong className="text-slate-200">Airtel Bangladesh</strong> powered by AppsPro & BDApps.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Daily Carrier Fee: ৳2.00 + VAT/SD</span>
            <span>•</span>
            <span>OTP Protected</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-900/30 overflow-hidden">
                <Image 
                  src="/app_icon.png" 
                  alt="OsudSheba" 
                  width={36} 
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">OsudSheba</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Never miss your medicine again. Smart medication reminders, full-screen audio alerts in spoken Bangla, AI prescription extraction, and family caregiver sync.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Designed with care for families in Bangladesh</span>
            </div>
          </div>

          {/* Col 2: Product & Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition-colors">
                  Medication Reminders
                </Link>
              </li>
              <li>
                <Link href="/features#bangla-tts" className="hover:text-emerald-400 transition-colors">
                  Bangla Voice Announcements
                </Link>
              </li>
              <li>
                <Link href="/features#prescription-ai" className="hover:text-emerald-400 transition-colors">
                  AI Prescription Reader
                </Link>
              </li>
              <li>
                <Link href="/features#caregiver-sync" className="hover:text-emerald-400 transition-colors">
                  Caregiver & Family Alerts
                </Link>
              </li>
              <li>
                <Link href="/features#adherence" className="hover:text-emerald-400 transition-colors">
                  Dose Compliance Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">Subscription & Download</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/subscribe" className="hover:text-emerald-400 transition-colors">
                  Subscribe with Mobile (৳2/day)
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-emerald-400 transition-colors">
                  Download Android APK
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/faq#cancellation" className="hover:text-emerald-400 transition-colors">
                  How to Cancel Subscription
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Important Healthcare Notice */}
          <div className="space-y-3 md:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              Medical Disclaimer
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              OsudSheba is an assistive reminder tool to help you organize medicine routines. It does not provide medical diagnosis, clinical evaluation, or prescribe treatment. Always verify dosages and times with registered physicians.
            </p>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-medium text-emerald-300 mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span>Medical Emergency</span>
              </div>
              <span>Dial 999 for National Emergency Service in Bangladesh.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} OsudSheba. All rights reserved. Carrier billing managed through AppsPro / BDApps.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">
              Help & FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
