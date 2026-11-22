"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/MobileStickyBar";

export const Footer: React.FC = () => {
  const { isHindi } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep border-t border-brand-navy-border text-slate-300 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-navy-border/60">
          {/* Brand Info & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="full" theme="dark" showTagline={false} />
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              {isHindi
                ? "भोपाल, मध्य प्रदेश में हाउसिंग सोसायटी, फैक्ट्रियों, कमर्शियल परिसरों और आयोजनों के लिए अनुशासित अनआर्म्ड सुरक्षा गार्ड और विश्वसनीय मैनपावर आपूर्ति।"
                : "Professional unarmed security guard services and dependable manpower supply for housing societies, industrial plants, corporate offices, and events across Bhopal & Madhya Pradesh."}
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200 block mb-1">
                {isHindi ? "हमारा आदर्श वाक्य:" : "Our Core Motto:"}
              </span>
              <p className="italic text-brand-orange">
                "{isHindi ? siteConfig.taglineHindi : siteConfig.tagline}"
              </p>
            </div>
          </div>

          {/* Core Services (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              {isHindi ? "हमारी सेवाएं" : "Our Services"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.services.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-400 hover:text-slate-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span>{isHindi ? srv.hindiTitle : srv.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-xs text-brand-orange hover:underline font-semibold flex items-center gap-1"
                >
                  <span>{isHindi ? "सभी 4 सेवाएं देखें →" : "View Full Services Overview →"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Nav & Transparency (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              {isHindi ? "त्वरित लिंक" : "Company"}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  {isHindi ? "हमारे बारे में" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-brand-orange transition-colors">
                  {isHindi ? "कार्य प्रणाली (SOP)" : "How We Work"}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-brand-orange transition-colors">
                  {isHindi ? "इंडस्ट्रीज" : "Industries"}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-orange transition-colors">
                  {isHindi ? "कैरियर / भर्ती" : "Careers"}
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-brand-orange transition-colors">
                  {isHindi ? "सामान्य प्रश्न (FAQs)" : "FAQs"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-orange transition-colors">
                  {isHindi ? "कोटेशन एवं संपर्क" : "Contact & Quote"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Operational Contacts & Address (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              {isHindi ? "सीधा संपर्क सूत्र" : "Direct Contacts"}
            </h4>
            
            <div className="space-y-2.5 text-sm">
              <a
                href={siteConfig.contacts[0].telLink}
                className="flex items-start gap-2.5 text-slate-300 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">{siteConfig.contacts[0].name}</span>
                  <span className="text-xs text-slate-400">{siteConfig.contacts[0].phoneFormatted}</span>
                </div>
              </a>

              <a
                href={siteConfig.contacts[1].telLink}
                className="flex items-start gap-2.5 text-slate-300 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">{siteConfig.contacts[1].name}</span>
                  <span className="text-xs text-slate-400">{siteConfig.contacts[1].phoneFormatted}</span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.emails.primary}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-brand-orange transition-colors pt-1 text-xs"
              >
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{siteConfig.emails.primary}</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Compliance Note (Clean, Transparent, No unverified claims) */}
        <div className="py-6 border-b border-brand-navy-border/40 text-xs text-slate-400">
          <p className="leading-relaxed">
            <strong className="text-slate-300">{siteConfig.name}:</strong>{" "}
            {siteConfig.compliance.disclaimer}
          </p>
          {siteConfig.compliance.psaraNumber && (
            <p className="mt-1 text-slate-300">
              Registration/License Details: {siteConfig.compliance.psaraNumber}
            </p>
          )}
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. Bhopal, Madhya Pradesh.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              {isHindi ? "गोपनीयता नीति (Draft)" : "Privacy Policy (Draft)"}
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              {isHindi ? "नियम व शर्तें (Draft)" : "Terms of Use (Draft)"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
