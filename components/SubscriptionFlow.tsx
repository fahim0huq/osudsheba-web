'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Smartphone, 
  KeyRound, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RefreshCw, 
  ShieldCheck, 
  Download, 
  Sparkles,
  Edit3
} from 'lucide-react';

type Step = 'ENTER_PHONE' | 'ENTER_OTP' | 'SUCCESS';

interface SubscriptionFlowProps {
  initialPhone?: string;
  onSuccessRedirect?: boolean;
}

export default function SubscriptionFlow({ initialPhone = '' }: SubscriptionFlowProps) {
  const [step, setStep] = useState<Step>('ENTER_PHONE');
  const [phone, setPhone] = useState(initialPhone);
  const [maskedPhone, setMaskedPhone] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [otp, setOtp] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 60-second Countdown Timer for OTP
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (step !== 'ENTER_OTP') return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [step]);

  // Determine carrier by prefix
  const cleanDigits = phone.replace(/\D/g, '');
  let detectedCarrier = '';
  if (cleanDigits.startsWith('018') || cleanDigits.startsWith('88018')) {
    detectedCarrier = 'Robi Bangladesh';
  } else if (cleanDigits.startsWith('016') || cleanDigits.startsWith('88016')) {
    detectedCarrier = 'Airtel Bangladesh';
  } else if (cleanDigits.length >= 3) {
    detectedCarrier = 'Unsupported Operator';
  }

  // Handle Request OTP
  const handleRequestOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);

    const raw = phone.trim();
    const digits = raw.replace(/\D/g, '');
    let norm = digits;
    if (norm.startsWith('880')) {
      norm = norm.substring(2);
    } else if (!norm.startsWith('0') && norm.length === 10) {
      norm = `0${norm}`;
    }

    if (norm.length !== 11 || !norm.startsWith('01')) {
      setErrorMessage('Please enter a valid 11-digit Bangladeshi mobile number (e.g. 018XXXXXXXX).');
      return;
    }

    if (!norm.startsWith('018') && !norm.startsWith('016')) {
      setErrorMessage('Carrier billing currently supports Robi (018) and Airtel (016) numbers only.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/subscription/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: norm }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to request OTP. Please try again.');
      }

      setMaskedPhone(data.phoneMasked || `${norm.slice(0, 3)}••••••${norm.slice(-2)}`);

      // If already registered and active
      if (data.alreadyRegistered || (data.valid && data.status === 'active')) {
        setStep('SUCCESS');
        setIsLoading(false);
        return;
      }

      setReferenceNo(data.reference_no || data.referenceNo || '');
      setCountdown(60);
      setCanResend(false);
      setStep('ENTER_OTP');
      setOtp('');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Connection error. Please try again.';
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Verify OTP
  const handleVerifyOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);

    const cleanCode = otp.trim();
    if (cleanCode.length < 4) {
      setErrorMessage('Please enter the 6-digit OTP code sent to your phone.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/subscription/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          referenceNo,
          otp: cleanCode,
          phone,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success || !data.valid) {
        throw new Error(data.message || 'OTP verification failed. Please check the code.');
      }

      if (data.phoneMasked) {
        setMaskedPhone(data.phoneMasked);
      }

      // Successful subscription!
      setStep('SUCCESS');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid OTP code. Please try again.';
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-8 transition-all">
      
      {/* Step Indicator Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
            {step === 'ENTER_PHONE' && '1'}
            {step === 'ENTER_OTP' && '2'}
            {step === 'SUCCESS' && '✓'}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {step === 'ENTER_PHONE' && 'Subscribe to OsudSheba'}
              {step === 'ENTER_OTP' && 'Verify Mobile OTP'}
              {step === 'SUCCESS' && 'Subscription Active'}
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              {step === 'ENTER_PHONE' && '৳২/দিন (2.00 BDT/day via Robi or Airtel)'}
              {step === 'ENTER_OTP' && 'Sent via SMS to your mobile'}
              {step === 'SUCCESS' && 'Entitlement granted on carrier network'}
            </p>
          </div>
        </div>

        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          AppsPro BDApps
        </span>
      </div>

      {/* Error Alert Banner */}
      {errorMessage && (
        <div className="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5 animate-fade-in">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="flex-1 leading-relaxed">{errorMessage}</div>
        </div>
      )}

      {/* STEP 1: PHONE NUMBER INPUT */}
      {step === 'ENTER_PHONE' && (
        <form onSubmit={handleRequestOtp} className="mt-6 space-y-5 animate-fade-in">
          <div className="space-y-1.5">
            <label htmlFor="mobile-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Enter Your Mobile Number
            </label>
            <p className="text-xs text-slate-500">
              Enter your Robi (018) or Airtel (016) SIM number
            </p>

            <div className="relative mt-2">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span className="ml-2 text-sm font-semibold text-slate-500 border-r border-slate-200 pr-2">
                  +88
                </span>
              </div>

              <input
                id="mobile-phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="01812345678"
                maxLength={14}
                required
                className="w-full pl-22 pr-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal transition-all"
              />
            </div>

            {/* Live Carrier Indicator */}
            {detectedCarrier && (
              <div className="pt-1 flex items-center justify-between text-xs">
                <span className={`font-semibold ${detectedCarrier.includes('Unsupported') ? 'text-amber-600' : 'text-emerald-700'}`}>
                  Operator: {detectedCarrier}
                </span>
                {!detectedCarrier.includes('Unsupported') && (
                  <span className="text-slate-400 text-[11px]">Daily ৳2.00 carrier billing</span>
                )}
              </div>
            )}
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>No Password or Account Required</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Your mobile phone number is your identity. You will receive an SMS OTP to confirm subscription. After activation, you can immediately download and access the app.
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading || cleanDigits.length < 10}
            className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Sending SMS OTP...</span>
              </>
            ) : (
              <>
                <span>Send Verification Code</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}

      {/* STEP 2: OTP VERIFICATION */}
      {step === 'ENTER_OTP' && (
        <form onSubmit={handleVerifyOtp} className="mt-6 space-y-5 animate-fade-in">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="otp-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Enter 6-Digit OTP Code
              </label>
              <button
                type="button"
                onClick={() => {
                  setStep('ENTER_PHONE');
                  setErrorMessage(null);
                }}
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                <span>Change Number</span>
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Enter the verification code sent to <strong className="text-slate-900">{maskedPhone || phone}</strong>
            </p>

            <div className="relative mt-2">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <KeyRound className="w-4 h-4 text-emerald-600" />
              </div>

              <input
                id="otp-input"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="one-time-code"
                autoFocus
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="••••••"
                maxLength={6}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-center tracking-[0.5em] text-lg font-mono font-bold text-slate-900 placeholder:tracking-normal placeholder:font-normal transition-all"
              />
            </div>

            {/* Sandbox Helper Hint */}
            <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-800 flex items-center justify-between">
              <span>Sandbox Test Code:</span>
              <button 
                type="button" 
                onClick={() => setOtp('000000')}
                className="font-mono font-bold underline text-amber-900 hover:text-amber-700"
              >
                Use 000000
              </button>
            </div>
          </div>

          {/* Countdown & Resend Option */}
          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-slate-500">
              {countdown > 0 ? (
                `Resend code in ${Math.floor(countdown / 60)}:${(countdown % 60).toString().padStart(2, '0')}`
              ) : (
                'Didn\'t receive code?'
              )}
            </span>

            <button
              type="button"
              disabled={!canResend || isLoading}
              onClick={() => handleRequestOtp()}
              className="font-bold text-emerald-600 hover:text-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Resend Code
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading || otp.length < 4}
            className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Verifying with Carrier...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Verify & Activate Subscription</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* STEP 3: SUBSCRIPTION SUCCESS & GATED DOWNLOAD UNLOCK */}
      {step === 'SUCCESS' && (
        <div className="mt-6 space-y-6 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner shadow-emerald-200">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl font-extrabold text-slate-900">
              Subscription Successful!
            </h3>
            <p className="text-xs text-slate-600">
              Your OsudSheba Premium subscription is active on your mobile operator.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-left text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Subscribed Number:</span>
              <strong className="text-slate-900 font-mono text-sm">{maskedPhone || phone}</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Carrier Fee:</span>
              <span className="text-emerald-800 font-semibold">৳2.00 / day (Robi/Airtel)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Status:</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-200/80 text-emerald-900 font-bold text-[10px]">
                ACTIVE & ENTITLED
              </span>
            </div>
          </div>

          {/* Download Action CTA */}
          <div className="space-y-2.5">
            <Link
              href="/download"
              className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Go to Download Portal</span>
            </Link>

            <a
              href="/api/subscription/download"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Direct Download APK (.apk)</span>
            </a>
          </div>

          {/* Next Steps Guidance */}
          <div className="text-left p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1.5">
            <p className="font-bold text-slate-800">What happens after you download?</p>
            <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-500">
              <li>Open OsudSheba on your Android phone.</li>
              <li>Log in with your subscribed phone number ({maskedPhone || phone}).</li>
              <li>The app independently verifies your active subscription and grants instant access!</li>
            </ol>
          </div>

        </div>
      )}

    </div>
  );
}
