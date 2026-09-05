'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Download, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  CheckCircle2, 
  Smartphone, 
  RefreshCw
} from 'lucide-react';

export default function DownloadGated() {
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);
  const [maskedPhone, setMaskedPhone] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkStatus() {
      try {
        const res = await fetch('/api/subscription/status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({}),
        });
        const data = await res.json();
        if (data.valid && data.status === 'active') {
          setIsSubscribed(true);
          setMaskedPhone(data.phoneMasked || null);
        } else {
          setIsSubscribed(false);
        }
      } catch {
        setIsSubscribed(false);
      } finally {
        setIsLoading(false);
      }
    }

    checkStatus();
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto space-y-8">
      
      {/* Loading state */}
      {isLoading && (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <RefreshCw className="w-8 h-8 text-emerald-600 animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-700">Verifying subscription entitlement...</p>
          <p className="text-xs text-slate-400">Checking your carrier subscription session</p>
        </div>
      )}

      {/* STATE A: NOT SUBSCRIBED (GATED EXPERIENCE) */}
      {!isLoading && !isSubscribed && (
        <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-card p-6 sm:p-10 text-center space-y-6 animate-fade-in">
          
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200/80">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 text-amber-900 text-xs font-bold">
              <span>Subscription Required</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Subscribe to Download OsudSheba
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              OsudSheba Premium is exclusively available for active mobile subscribers on <strong>Robi</strong> and <strong>Airtel Bangladesh</strong>. Activate your daily ৳২ plan to unlock the application.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs space-y-2.5 max-w-md mx-auto">
            <h4 className="font-bold text-slate-800">What is included with your subscription:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Full-screen alarms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>বাংলা ভয়েস এলার্ট</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>AI prescription reader</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Caregiver alerts</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              href="/subscribe"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 hover:scale-[1.02] transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Subscribe Now (৳2/day)</span>
            </Link>
            
            <p className="text-xs text-slate-400">
              Already subscribed? Visit the subscription page to verify your number and unlock this device.
            </p>
          </div>

        </div>
      )}

      {/* STATE B: SUBSCRIBED (AUTHORIZED DOWNLOAD PORTAL) */}
      {!isLoading && isSubscribed && (
        <div className="bg-white rounded-3xl border-2 border-emerald-500 shadow-card p-6 sm:p-10 text-center space-y-6 animate-fade-in">
          
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
              <span>Subscription Active</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Your OsudSheba Download is Ready
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your mobile subscription is confirmed. Download the official Android APK below to get started.
            </p>
          </div>

          {maskedPhone && (
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 inline-block text-xs text-slate-700">
              Subscribed Number: <strong className="font-mono text-emerald-800 text-sm ml-1">{maskedPhone}</strong>
            </div>
          )}

          {/* Primary APK Download CTA */}
          <div className="space-y-3 pt-2">
            <a
              href="/api/subscription/download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download OsudSheba (Android APK)</span>
            </a>

            <div className="flex items-center justify-center gap-3 text-xs text-slate-500">
              <span>Version: 1.0.0</span>
              <span>•</span>
              <span>Android 8.0+</span>
              <span>•</span>
              <span>APK Package</span>
            </div>
          </div>

          {/* Step-by-Step Installation Guide */}
          <div className="pt-6 border-t border-slate-100 text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>How to Install on Your Android Phone:</span>
            </h4>

            <ol className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700 bg-emerald-50 w-5 h-5 rounded-full flex items-center justify-center shrink-0">1</span>
                <span>Click the <strong>Download OsudSheba</strong> button above to download the APK file.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700 bg-emerald-50 w-5 h-5 rounded-full flex items-center justify-center shrink-0">2</span>
                <span>If prompted with &ldquo;File might be harmful&rdquo;, tap <strong>Download anyway</strong> (standard for direct APKs outside Google Play).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700 bg-emerald-50 w-5 h-5 rounded-full flex items-center justify-center shrink-0">3</span>
                <span>Open the downloaded file and choose <strong>Install</strong>. Allow installation from your browser if asked.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700 bg-emerald-50 w-5 h-5 rounded-full flex items-center justify-center shrink-0">4</span>
                <span>Open OsudSheba. When prompted, log in with your subscribed phone number. The app verifies your active subscription and unlocks full access!</span>
              </li>
            </ol>
          </div>

          {/* Security & Independent Verification Notice */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-[11px] text-slate-500 text-left space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>App-Level Security & Verification</span>
            </div>
            <p>
              The OsudSheba application independently verifies your carrier subscription against the backend. If an unverified or unsubscribed mobile number is used inside the app, premium features remain securely gated until subscribed.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}
