"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
              {isHindi ? "प्रारूप नियम व शर्तें (Draft Terms Template)" : "Draft Terms Template"}
            </p>
            <p className="mt-0.5 text-amber-300/90 leading-relaxed">
              {isHindi
                ? "यह ड्राफ्ट टेम्पलेट है जिसे औपचारिक व्यावसायिक लॉन्च से पहले एक योग्य वकील द्वारा समीक्षा और अंतिम रूप दिया जाना है।"
                : "This document is a draft template subject to formal review and finalization by a qualified legal professional before commercial launch."}
            </p>
          </div>
        </div>

        {/* Page Content Card */}
        <div className="bg-brand-navy-card border border-brand-navy-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <div className="border-b border-brand-navy-border/60 pb-6">
            <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
              Terms of Use
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
              1. ACCEPTANCE
            </h2>
            <p>
              By using this website, you agree to these terms. If you do not agree, please do not use the website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              2. INFORMATION ON THIS WEBSITE
            </h2>
            <p>
              The content is for general information about our services. We try to keep it accurate, but it may change without notice.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              3. QUOTES AND SERVICES
            </h2>
            <p>
              Submitting a quote request does not create a contract. Any security or manpower service is provided only under a separate written agreement between you and us, which will set out the scope, duration, charges and other terms.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              4. CAREERS
            </h2>
            <p>
              Submitting a job application does not guarantee an interview or employment. We may contact you if your profile matches a requirement.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              5. ACCEPTABLE USE
            </h2>
            <p>
              You agree not to: submit false or misleading information, misuse the forms (including spam), attempt to hack or disrupt the website, or copy our content for commercial use without permission.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              6. INTELLECTUAL PROPERTY
            </h2>
            <p>
              The COVERS365 name, logo, text, graphics and design are owned by us. You may not use them without our written permission.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              7. THIRD-PARTY LINKS
            </h2>
            <p>
              Links to other websites are for your convenience. We are not responsible for their content or practices.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              8. DISCLAIMER & LIABILITY
            </h2>
            <p>
              The website is provided "as is". To the extent permitted by law, we are not liable for any loss arising from your use of the website or from reliance on its content. This does not limit any liability that cannot be excluded by law.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              9. GOVERNING LAW
            </h2>
            <p>
              These terms are governed by the laws of India. Courts at Bhopal, Madhya Pradesh will have jurisdiction.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-2">
            <h2 className="text-base font-heading font-bold text-white">
              10. CHANGES
            </h2>
            <p>
              We may update these terms at any time. Continued use of the website means you accept the updated terms.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-2 pt-4 border-t border-brand-navy-border/60">
            <h2 className="text-base font-heading font-bold text-white">
              11. CONTACT
            </h2>
            <div className="p-4 rounded-xl bg-brand-navy border border-brand-navy-border text-xs text-slate-200 space-y-1">
              <p className="font-bold text-white">{siteConfig.name}</p>
              <p>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}</p>
              <p className="text-brand-orange font-medium">{siteConfig.emails.primary} | {siteConfig.contacts[0].phone}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
