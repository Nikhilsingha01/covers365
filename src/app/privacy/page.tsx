"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, AlertTriangle, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { isHindi } = useLanguage();

  return (
    <div className="bg-brand-navy min-h-screen text-slate-100 flex flex-col py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-brand-orange hover:underline mb-6 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isHindi ? "होम पेज पर वापस जाएं" : "Back to Home"}</span>
        </Link>

        {/* Legal Review Notice Banner (Per User Directive #9) */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 text-amber-300 text-xs flex items-start gap-3 mb-8">
          <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
          <div>
            <p className="font-bold text-amber-200 uppercase tracking-wide">
              {isHindi ? "प्रारूप टेम्पलेट (Draft Template)" : "Draft Legal Template"}
            </p>
            <p className="mt-0.5 text-amber-300/90 leading-relaxed">
              {isHindi
                ? "यह ड्राफ्ट टेम्पलेट है जिसे औपचारिक लॉन्च से पहले एक योग्य वकील द्वारा समीक्षा और अंतिम रूप दिया जाना है।"
                : "This document is a draft template subject to formal review and finalization by a qualified legal professional before commercial launch."}
            </p>
          </div>
        </div>

        {/* Page Content Card */}
        <div className="bg-brand-navy-card border border-brand-navy-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <div className="border-b border-brand-navy-border/60 pb-6">
            <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-brand-orange font-semibold mt-1">
              {siteConfig.name}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Last updated: November 2026 (Draft Template)
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              1. WHO WE ARE
            </h2>
            <p>
              This website is operated by COVERS365 Security & Manpower Services ("we", "us", "our"), {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}. You can reach us at {siteConfig.emails.primary}.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              2. INFORMATION WE COLLECT
            </h2>
            <p>
              <strong>Quote request form:</strong> your name, phone number, company or society name, service required, number of guards, location, shift type, preferred start date and any message you write.
            </p>
            <p>
              <strong>Careers form:</strong> your name, phone number, age, city, work experience and any message you write.
            </p>
            <p>
              <strong>Contact:</strong> details you share when you call us, email us or message us on WhatsApp.
            </p>
            <p>
              <strong>Automatically:</strong> basic technical data such as browser type, device type, pages visited and approximate location, collected through cookies and analytics tools to help us improve the website.
            </p>
            <div className="p-3 rounded-lg bg-brand-navy border border-brand-navy-border text-xs text-slate-200">
              <strong>Notice:</strong> We do not ask for Aadhaar numbers, ID documents, bank details or payment information through this website. Please do not send them through the forms.
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To reply to your enquiry and prepare a quote.</li>
              <li>To contact you about job applications you submitted.</li>
              <li>To improve our website and services.</li>
              <li>To keep records and meet legal obligations.</li>
            </ul>
            <p>We do not use your information for any other purpose without your consent.</p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              4. YOUR CONSENT
            </h2>
            <p>
              By submitting a form, you consent to us using your information for the purpose stated on that form, in line with the Digital Personal Data Protection Act, 2023 and other applicable Indian laws. You can withdraw consent at any time by writing to us.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              5. SHARING OF INFORMATION
            </h2>
            <p>We do not sell or rent your personal information. We may share it only with:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Service providers that help us run the website (hosting, email delivery, analytics), who may process it only on our instructions.</li>
              <li>Government or law enforcement authorities, when we are legally required to do so.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              6. HOW LONG WE KEEP IT
            </h2>
            <p>
              We keep enquiry details for as long as needed to respond to you and manage our business relationship. Job application details are kept for up to [12 months, CONFIRM], after which they are deleted unless you ask us to keep them.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              7. SECURITY
            </h2>
            <p>
              We take reasonable steps to protect your information, including secure hosting and restricted access. No online system is completely secure, so we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              8. YOUR RIGHTS
            </h2>
            <p>
              You may ask us to: tell you what personal data we hold about you, correct it, delete it, or stop using it. You may also withdraw your consent or make a complaint. Write to {siteConfig.emails.primary} and we will respond within a reasonable time.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              9. COOKIES
            </h2>
            <p>
              We use cookies and similar tools to make the website work and to understand how it is used. You can block or delete cookies in your browser settings, though some parts of the site may not work properly.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              10. THIRD-PARTY SERVICES
            </h2>
            <p>
              Our website links to or embeds services such as WhatsApp and Google Maps. These have their own privacy policies, and we are not responsible for their practices.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              11. CHILDREN
            </h2>
            <p>
              This website is not meant for anyone under 18. Job applications are accepted only from adults.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              12. CHANGES TO THIS POLICY
            </h2>
            <p>
              We may update this policy from time to time. The latest version will always be on this page with the updated date.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-2 pt-4 border-t border-brand-navy-border/60">
            <h2 className="text-base font-heading font-bold text-white">
              13. GRIEVANCE & CONTACT
            </h2>
            <p>For any question or complaint about your data, contact:</p>
            <div className="p-4 rounded-xl bg-brand-navy border border-brand-navy-border text-xs text-slate-200 space-y-1">
              <p className="font-bold text-white">Vishvapal Mittal / Nikhil Singhal</p>
              <p>{siteConfig.name}</p>
              <p>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}</p>
              <p className="text-brand-orange font-medium">{siteConfig.emails.primary} | {siteConfig.contacts[0].phone}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
