"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, FileText } from "lucide-react";

// Precision WhatsApp line vector icon (No emoji)
export const WhatsAppIcon: React.FC<{ className?: string; strokeWidth?: number }> = ({
  className = "w-4 h-4",
  strokeWidth = 1.75,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M9.5 8.5c-.3 0-.6.1-.8.4-.3.4-1 1-1 2.3s1.1 2.6 1.2 2.8c.2.2 2.1 3.2 5.1 4.4 2.5 1 3 .7 3.6.6.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.4-.2-.8-.4s-2.4-1.2-2.8-1.3c-.4-.1-.7-.2-.9.2s-1 1.3-1.2 1.5c-.2.2-.4.3-.8.1s-1.7-.6-3.2-2c-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.2 0-.5-.1-.7s-.9-2.2-1.2-3c-.3-.8-.7-.7-.9-.7h-.1z" />
  </svg>
);

export const MobileStickyBar: React.FC = () => {
  const { isHindi } = useLanguage();
  const primaryContact = siteConfig.contacts[0];
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    isHindi ? siteConfig.whatsapp.defaultMessageHi : siteConfig.whatsapp.defaultMessageEn
  )}`;

  return (
    <>
      {/* Mobile Sticky Bottom Bar (Visible on mobile screens only, fixed at bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-navy-deep/95 backdrop-blur-md border-t border-brand-navy-border/80 px-3 py-2 shadow-2xl safe-area-bottom">
        <div className="grid grid-cols-3 gap-2 items-center">
          {/* Quick Call */}
          <a
            href={primaryContact.telLink}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-brand-navy-card border border-brand-navy-border text-slate-200 active:scale-95 transition-all"
            aria-label={`Call ${primaryContact.name}`}
          >
            <Phone className="w-4 h-4 text-brand-orange mb-0.5" />
            <span className="text-[11px] font-medium leading-tight">
              {isHindi ? "कॉल करें" : "Call Now"}
            </span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-950/40 border border-emerald-600/40 text-emerald-400 active:scale-95 transition-all"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span className="text-[11px] font-medium leading-tight">WhatsApp</span>
          </a>

          {/* Instant Quote */}
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-brand-orange text-white font-semibold active:scale-95 transition-all shadow-md"
            aria-label="Request a Quote"
          >
            <FileText className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] leading-tight">
              {isHindi ? "कोटेशन" : "Get Quote"}
            </span>
          </Link>
        </div>
      </div>

      {/* Floating Desktop WhatsApp Button */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          aria-label="Chat with Covers365 on WhatsApp"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <WhatsAppIcon className="w-4 h-4 text-white" />
          </div>
          <div className="text-left pr-1">
            <p className="text-[10px] text-emerald-100 uppercase tracking-wider font-semibold leading-none">
              {isHindi ? "सीधा संदेश भेजें" : "Quick Inquiry"}
            </p>
            <p className="text-xs font-bold leading-tight mt-0.5">WhatsApp Chat</p>
          </div>
        </a>
      </div>
    </>
  );
};
