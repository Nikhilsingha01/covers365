"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceIconRenderer } from "@/components/brand/ServiceIcons";
import { NextChapter } from "@/components/common/NextChapter";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Building, 
  FileText,
  Phone
} from "lucide-react";

export default function ServicesHubPage() {
  const { isHindi } = useLanguage();

  return (
    <div className="bg-brand-navy min-h-screen text-slate-100 flex flex-col">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-20 border-b border-brand-navy-border/60 bg-brand-navy-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{isHindi ? "सेवाएं" : "Our Services"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isHindi
              ? "अनुशासित अनआर्म्ड सुरक्षा एवं भरोसेमंद मैनपावर"
              : "Disciplined Unarmed Security & Dependable Manpower"}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isHindi
              ? "हम भोपाल और पूरे मध्य प्रदेश में हाउसिंग सोसायटी, फैक्ट्रियों, दफ्तरों और आयोजनों के लिए चार मुख्य सेवाएं प्रदान करते हैं। प्रत्येक तैनाती स्पष्ट कार्यक्षेत्र और लिखित कर्तव्य नियमों के साथ होती है।"
              : "Four specialized capabilities designed for residential townships, industrial plants, corporate complexes, and commercial gatherings across Madhya Pradesh."}
          </p>
        </div>
      </section>

      {/* 2. FOUR DETAILED SERVICE BLOCKS */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {siteConfig.services.map((srv, index) => (
            <div
              key={srv.slug}
              id={srv.slug}
              className="p-8 sm:p-10 rounded-2xl bg-brand-navy-card border border-brand-navy-border shadow-xl hover:border-brand-orange/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Header & Scope (Col 1-7) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy border border-brand-navy-border flex items-center justify-center text-brand-orange shrink-0">
                      <ServiceIconRenderer name={srv.iconName} className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-brand-orange uppercase font-semibold">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                        {isHindi ? srv.hindiTitle : srv.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-slate-300 leading-relaxed">
                    {isHindi ? srv.hindiLongDesc : srv.longDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      {isHindi ? "शामिल कार्यक्षेत्र एवं ज़िम्मेदारियां:" : "Included Duties & Scope:"}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                      {(isHindi ? srv.hindiScope : srv.scope).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm transition-all shadow-md"
                    >
                      <span>{isHindi ? "पूर्ण सेवा विवरण देखें" : "View Full Service Specs"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href={`/contact?service=${srv.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-navy hover:bg-brand-navy-light border border-brand-navy-border text-slate-200 text-sm font-medium transition-all"
                    >
                      <FileText className="w-4 h-4 text-brand-orange" />
                      <span>{isHindi ? "कोटेशन का अनुरोध करें" : "Request Quote"}</span>
                    </Link>
                  </div>
                </div>

                {/* Right Shift Options & Sector Fit (Col 8-12) */}
                <div className="lg:col-span-5 bg-brand-navy/60 border border-brand-navy-border/80 rounded-xl p-6 space-y-5">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-orange flex items-center gap-1.5 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{isHindi ? "शिफ्ट संरचना" : "Shift Availability"}</span>
                    </h4>
                    <div className="space-y-1.5">
                      {srv.shifts.map((s, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded bg-brand-navy-card border border-brand-navy-border text-xs text-slate-300"
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-2">
                      <Building className="w-4 h-4 text-brand-orange" />
                      <span>{isHindi ? "प्रमुख लक्षित परिसर" : "Target Premises"}</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.bestFor.map((b, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded bg-brand-navy-card border border-brand-navy-border text-slate-300"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-brand-orange/5 border border-brand-orange/20 text-xs text-slate-300">
                    <p className="font-semibold text-brand-orange mb-0.5">
                      {isHindi ? "लिखित कर्तव्य नियम" : "Written Duty Rules"}
                    </p>
                    <p>
                      {isHindi
                        ? "हर गार्ड को उसकी पोस्ट के अनुसार लिखित नियम दिए जाते हैं ताकि गेट अनुशासन सुनिश्चित रहे।"
                        : "Post orders and conduct expectations are provided in writing (Hindi & English) before posting."}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. NEXT CHAPTER */}
      <NextChapter
        heading="Looking to protect a specific industry?"
        hindiHeading="किसी विशिष्ट क्षेत्र के लिए सुरक्षा समाधान खोज रहे हैं?"
        subheading="See how our unarmed personnel adapt to residential gates, factory perimeters, or office receptions."
        hindiSubheading="देखें कि हमारे गार्ड हाउसिंग गेट, फैक्ट्री बाउंड्री या ऑफिस रिसेप्शन के अनुसार कैसे कार्य करते हैं।"
        primaryCard={{
          title: "Industries We Protect in MP",
          hindiTitle: "मध्य प्रदेश में प्रमुख कार्यक्षेत्र",
          hook: "Detailed protocols for Housing Societies, Factories, IT Offices, Hospitals, and Malls.",
          hindiHook: "हाउसिंग सोसायटी, फैक्ट्रियों, आईटी दफ्तरों, अस्पतालों और मॉल के लिए विशिष्ट नियम।",
          href: "/industries",
          badge: "Sector Solutions",
          hindiBadge: "सेक्टर समाधान",
        }}
        secondaryCard={{
          title: "The 5-Step Deployment Protocol",
          hindiTitle: "5-चरणीय मानक कार्यप्रणाली",
          hook: "How we assess your site, select personnel, and issue written Duty Rules in English & Hindi.",
          hindiHook: "जानें कि हम परिसर का मुआयना और लिखित कर्तव्य नियमों का आवंटन कैसे करते हैं।",
          href: "/how-we-work",
          badge: "Operational SOP",
          hindiBadge: "मानक कार्यप्रणाली",
        }}
      />
    </div>
  );
}
