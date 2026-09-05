'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  qBn: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What is OsudSheba?",
    qBn: "ওষুধসেবা কী?",
    a: "OsudSheba is an intelligent medication management and reminder application designed specifically for Bangladeshi families. It provides full-screen medication alarms, crystal-clear spoken Bangla voice guidance, smart grouping of simultaneous doses, AI prescription reading, and family caregiver notifications.",
  },
  {
    q: "How much does OsudSheba Premium cost?",
    qBn: "ওষুধসেবা প্রিমিয়ামের খরচ কত?",
    a: "OsudSheba Premium costs exactly ৳২.০০ (2.00 BDT) per day (plus government taxes/VAT/SD). There are no long-term contracts, hidden fees, or international card requirements.",
  },
  {
    q: "Which mobile operators are supported?",
    qBn: "কোন কোন মোবাইল অপারেটর সাপোর্ট করে?",
    a: "OsudSheba currently supports Robi (018) and Airtel (016) mobile numbers in Bangladesh through BDApps / AppsPro carrier billing. Charges are deducted directly from your regular prepaid or postpaid mobile balance.",
  },
  {
    q: "Why does the website not require a password or user account?",
    qBn: "ওয়েবসাইটে কেন পাসওয়ার্ড বা অ্যাকাউন্টের প্রয়োজন নেই?",
    a: "Your mobile phone number is your identity. When you subscribe on the website, carrier billing is confirmed via a one-time SMS OTP sent to your phone. When you install and open the downloaded Android app, the app verifies your subscribed phone number with the backend to grant access. No website passwords or email signups are required.",
  },
  {
    q: "How does the SMS OTP verification work?",
    qBn: "এসএমএস ওটিপি ভেরিফিকেশন কীভাবে কাজ করে?",
    a: "When you enter your Robi or Airtel number, our backend requests an OTP from AppsPro. An official 6-digit verification code is delivered to your mobile via SMS. Entering this code confirms your subscription and immediately unlocks the app download.",
  },
  {
    q: "How do I download and install the app after subscribing?",
    qBn: "সাবস্ক্রাইব করার পর অ্যাপ কীভাবে ডাউনলোড করব?",
    a: "After OTP verification, you are immediately provided an authorized download button for the official OsudSheba Android APK. Simply download the APK file to your Android phone, tap install, and open the app.",
  },
  {
    q: "What happens when I open the app on my phone?",
    qBn: "অ্যাপ ওপেন করার পর কী হবে?",
    a: "When you open OsudSheba, you simply verify or log in with your subscribed phone number. The app connects to the OsudSheba backend, confirms your active carrier subscription entitlement, and immediately grants you access to all features.",
  },
  {
    q: "Can someone who hasn't subscribed use the app?",
    qBn: "সাবস্ক্রাইব না করে কি অ্যাপ ব্যবহার করা যাবে?",
    a: "No. The OsudSheba application independently verifies every user's subscription entitlement with the backend. If an unverified or unsubscribed mobile number is used, the application prompts the user to activate their subscription.",
  },
  {
    q: "How can I cancel my subscription?",
    qBn: "সাবস্ক্রিপশন বাতিল বা আনসাবস্ক্রাইব করবেন কীভাবে?",
    a: "You can cancel your subscription at any time. Simply use the standard BDApps cancellation USSD/SMS codes from your mobile operator, or cancel directly from the settings screen inside the OsudSheba app. Carrier billing stops immediately.",
  },
];

export default function FAQAccordion({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayedFaqs = limit ? FAQS.slice(0, limit) : FAQS;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {displayedFaqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="space-y-0.5">
                <span className="text-sm sm:text-base font-bold text-slate-900 block">
                  {faq.q}
                </span>
                <span className="text-xs font-semibold text-emerald-600 block">
                  {faq.qBn}
                </span>
              </div>
              <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : ''}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
