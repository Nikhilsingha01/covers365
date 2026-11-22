"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceIconRenderer } from "@/components/brand/ServiceIcons";
import { NextChapter } from "@/components/common/NextChapter";
import { 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  FileText, 
  Sparkles, 
  Users, 
  Building, 
  ChevronRight,
  ExternalLink,
  ClipboardList,
  AlertCircle
} from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/MobileStickyBar";

export default function HomePage() {
  const { isHindi } = useLanguage();
  const [activeServiceTab, setActiveServiceTab] = useState<number>(0);
  const [activeIndustryTab, setActiveIndustryTab] = useState<number>(0);

  const primaryContact = siteConfig.contacts[0];
  const secondaryContact = siteConfig.contacts[1];

  const deploymentSteps = [
    {
      step: "01",
      title: "Requirement Consultation",
      hindiTitle: "आवश्यकता परामर्श",
      desc: "We discuss your gate count, visitor flow, shift timings and site-specific risks directly with you.",
      hindiDesc: "गेटों की संख्या, विजिटर आवागमन, शिफ्ट का समय और परिसर के जोखिमों पर सीधे आपसे चर्चा।",
    },
    {
      step: "02",
      title: "Site Vulnerability Review",
      hindiTitle: "परिसर सुरक्षा समीक्षा",
      desc: "Our team assesses entry points, perimeter lighting, material movement areas and visitor choke points.",
      hindiDesc: "प्रवेश द्वार, बाउंड्री की स्थिति, माल आवागमन स्थल और सुरक्षा बिंदुओं का विस्तृत निरीक्षण।",
    },
    {
      step: "03",
      title: "Guard Selection & Briefing",
      hindiTitle: "गार्ड चयन एवं ब्रीफिंग",
      desc: "We select disciplined guards matched to your post and provide written Duty Rules in Hindi & English.",
      hindiDesc: "आपकी साइट के अनुकूल अनुशासित गार्ड्स का चयन और हिंदी व अंग्रेजी में लिखित कर्तव्य नियमों का आवंटन।",
    },
    {
      step: "04",
      title: "On-Site Deployment",
      hindiTitle: "साइट पर तैनाती",
      desc: "Guards are stationed in crisp uniform with established register protocols and visitor logging procedures.",
      hindiDesc: "स्वच्छ वर्दी में गार्ड्स की तैनाती, रजिस्टर संधारण और विजिटर जांच नियमों का क्रियान्वयन।",
    },
    {
      step: "05",
      title: "Supervision & Direct Handover",
      hindiTitle: "निगरानी एवं सीधा संपर्क",
      desc: "Direct communication with founders for any adjustments, shift rotations or immediate assistance.",
      hindiDesc: "किसी भी बदलाव, शिफ्ट रोटेशन या तुरंत सहायता के लिए सीधे संस्थापकों से संपर्क।",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-navy">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16 lg:py-24 border-b border-brand-navy-border/40">
        {/* Deep Atmospheric Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-deep via-brand-navy to-brand-navy pointer-events-none" />
        
        {/* Subtle Geometric Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FE8100_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Ambient Corner Orange Glow */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-brand-navy-light/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & Actions (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Region & Operational Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-card/90 border border-brand-orange/30 text-xs font-medium text-slate-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                <span className="text-brand-orange font-semibold">
                  {isHindi ? "भोपाल एवं मध्य प्रदेश" : "Bhopal & Madhya Pradesh"}
                </span>
                <span className="text-white/20">|</span>
                <span>{isHindi ? "अनआर्म्ड सुरक्षा एवं मैनपावर" : "Unarmed Security & Manpower"}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
                {isHindi ? (
                  <>
                    विश्वसनीय लोग। <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                      सुरक्षित स्थान।
                    </span>{" "}
                    हमेशा।
                  </>
                ) : (
                  <>
                    Reliable People. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                      Safer Spaces.
                    </span>{" "}
                    Always.
                  </>
                )}
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
                {isHindi
                  ? "COVERS365 भोपाल स्थित एक समर्पित सुरक्षा एवं मैनपावर एजेंसी है। हम हाउसिंग सोसायटी, फैक्ट्रियों, कॉर्पोरेट दफ्तरों और आयोजनों के लिए अनुशासित अनआर्म्ड गार्ड्स और सहायक स्टाफ उपलब्ध कराते हैं।"
                  : "COVERS365 provides disciplined unarmed security guards and dependable support staff for residential societies, manufacturing plants, corporate offices, and events across Madhya Pradesh."}
              </p>

              {/* Direct Value Points */}
              <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{isHindi ? "सीधा संस्थापकों से संपर्क" : "Direct Founder Access"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{isHindi ? "लिखित कर्तव्य नियम (Hindi/Eng)" : "Written Duty Rules"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{isHindi ? "साइट अनुसार गार्ड चयन" : "Site-Specific Placement"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{isHindi ? "अनुशासित अनआर्म्ड सुरक्षा" : "Unarmed Security Focus"}</span>
                </div>
              </div>

              {/* Hero Call-To-Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-orange-glow transition-all duration-200 active:scale-95"
                >
                  <FileText className="w-5 h-5" />
                  <span>{isHindi ? "कोटेशन का अनुरोध करें" : "Get a Free Quote"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={primaryContact.telLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-navy-card hover:bg-brand-navy-light text-slate-200 border border-brand-navy-border hover:border-brand-orange/40 text-base font-semibold transition-all duration-200 active:scale-95"
                >
                  <Phone className="w-5 h-5 text-brand-orange" />
                  <span>
                    {isHindi ? "कॉल करें:" : "Call Now:"} {primaryContact.phone}
                  </span>
                </a>
              </div>

              {/* Address Micro-Note */}
              <p className="text-xs text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 inline mr-1 text-brand-orange" />
                {siteConfig.address.street}, {siteConfig.address.city}
              </p>
            </div>

            {/* Right Column: Visual Shield Card & Brand Emblem (Col 8-12) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange/20 to-brand-navy-border blur-lg opacity-70" />

                {/* Main Card */}
                <div className="relative rounded-2xl bg-brand-navy-card border border-brand-navy-border p-6 sm:p-8 shadow-2xl overflow-hidden">
                  
                  {/* Decorative Banner Visual Frame */}
                  <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden mb-6 border border-brand-navy-border/80 group">
                    <Image
                      src="/brand/banner.jpg"
                      alt="Covers365 Security & Manpower Services Banner"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-brand-navy-deep/40 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded bg-brand-navy-deep/90 text-brand-orange font-semibold border border-brand-orange/30">
                        Bhopal Headquarters
                      </span>
                      <span className="text-slate-300 font-medium bg-black/60 px-2 py-0.5 rounded">
                        Narela Jod
                      </span>
                    </div>
                  </div>

                  {/* Operational Contacts Quick-Box */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-brand-navy-border/60">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        {isHindi ? "सीधे संपर्क व्यक्ति" : "Direct Operational Heads"}
                      </span>
                      <span className="text-[11px] text-brand-orange">
                        {isHindi ? "सीधी बातचीत" : "Direct Line"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <a
                        href={primaryContact.telLink}
                        className="p-3 rounded-lg bg-brand-navy/80 hover:bg-brand-navy-light/70 border border-brand-navy-border hover:border-brand-orange/40 transition-all flex items-center gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-brand-orange" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white truncate">{primaryContact.name}</p>
                          <p className="text-[11px] text-slate-400">{primaryContact.phone}</p>
                        </div>
                      </a>

                      <a
                        href={secondaryContact.telLink}
                        className="p-3 rounded-lg bg-brand-navy/80 hover:bg-brand-navy-light/70 border border-brand-navy-border hover:border-brand-orange/40 transition-all flex items-center gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-brand-orange" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white truncate">{secondaryContact.name}</p>
                          <p className="text-[11px] text-slate-400">{secondaryContact.phone}</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Visiting Card Reference Tag */}
                  <div className="mt-4 pt-3 border-t border-brand-navy-border/60 flex items-center justify-between text-xs text-slate-400">
                    <span>Email: {siteConfig.emails.primary}</span>
                    <Link href="/about" className="text-brand-orange hover:underline font-medium">
                      {isHindi ? "हमारी कहानी →" : "About Us →"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NEUTRAL OPERATIONAL TRUST STRIP (NO UNCONFIRMED NUMBERS / SLAS) */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3.5 p-3 rounded-xl bg-brand-navy-card/40 border border-brand-navy-border/40"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0 text-brand-orange mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-white">
                    {isHindi ? point.hindiTitle : point.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {isHindi ? point.hindiDesc : point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SERVICES SHOWCASE (SCROLL & TAB EXPERIENCE) */}
      <section className="py-20 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
              {isHindi ? "हमारी 4 मुख्य सेवाएं" : "Core Operational Capabilities"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              {isHindi ? "अनुशासित सुरक्षा एवं कार्यबल समाधान" : "Disciplined Security & Staffing Solutions"}
            </h2>
            <p className="mt-3 text-base text-slate-300">
              {isHindi
                ? "हम केवल अनआर्म्ड सुरक्षा गार्ड और भरोसेमंद सपोर्ट स्टाफ प्रदान करते हैं। प्रत्येक सेवा के लिए स्पष्ट कार्यक्षेत्र और लिखित कर्तव्य नियम तय हैं।"
                : "Every assignment is backed by written duty rules, clear shift structures, and active operational oversight across Bhopal and MP."}
            </p>
          </div>

          {/* Interactive Service Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {siteConfig.services.map((srv, idx) => {
              const isSelected = activeServiceTab === idx;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveServiceTab(idx)}
                  className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-brand-navy-card border-brand-orange shadow-lg shadow-black/40 ring-1 ring-brand-orange/40"
                      : "bg-brand-navy-card/60 border-brand-navy-border hover:border-slate-600 hover:bg-brand-navy-card"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isSelected
                          ? "bg-brand-orange text-white"
                          : "bg-brand-navy text-brand-orange border border-brand-navy-border"
                      }`}
                    >
                      <ServiceIconRenderer name={srv.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-heading font-bold ${
                        isSelected ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {isHindi ? srv.hindiTitle : srv.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card */}
          {(() => {
            const currentService = siteConfig.services[activeServiceTab];
            return (
              <div className="bg-brand-navy-card border border-brand-navy-border rounded-2xl p-6 sm:p-10 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Scope & Description (Col 1-7) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/10 border border-brand-orange/20 text-xs font-semibold text-brand-orange uppercase">
                      <ServiceIconRenderer name={currentService.iconName} className="w-4 h-4" />
                      <span>{isHindi ? "सेवा विवरण" : "Service Overview"}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      {isHindi ? currentService.hindiTitle : currentService.title}
                    </h3>

                    <p className="text-base text-slate-300 leading-relaxed">
                      {isHindi ? currentService.hindiLongDesc : currentService.longDesc}
                    </p>

                    {/* Scope of Work Checklist */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        {isHindi ? "मुख्य कार्यक्षेत्र / ज़िम्मेदारियां:" : "Key Duties & Scope of Work:"}
                      </h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {(isHindi ? currentService.hindiScope : currentService.scope).map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <Link
                        href={`/services/${currentService.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold transition-all shadow-md"
                      >
                        <span>{isHindi ? "पूर्ण विवरण देखें" : "View Full Service Specs"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-navy hover:bg-brand-navy-light border border-brand-navy-border text-slate-200 text-sm font-medium transition-all"
                      >
                        <FileText className="w-4 h-4 text-brand-orange" />
                        <span>{isHindi ? "इस सेवा हेतु कोटेशन लें" : "Request Custom Quote"}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Shift Options & Sector Fit (Col 8-12) */}
                  <div className="lg:col-span-5 space-y-6 bg-brand-navy/60 border border-brand-navy-border/80 rounded-xl p-6">
                    
                    {/* Shift Models */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-orange mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{isHindi ? "शिफ्ट विकल्प" : "Available Shift Models"}</span>
                      </div>
                      <div className="space-y-2">
                        {currentService.shifts.map((shift, i) => (
                          <div
                            key={i}
                            className="p-2.5 rounded-lg bg-brand-navy-card border border-brand-navy-border text-xs font-medium text-slate-200 flex items-center justify-between"
                          >
                            <span>{shift}</span>
                            <span className="text-[10px] text-slate-400">Standard</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best Suited For */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                        <Building className="w-4 h-4 text-brand-orange" />
                        <span>{isHindi ? "किन परिसरों के लिए उपयुक्त" : "Primary Environments"}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {currentService.bestFor.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-md bg-brand-navy-card border border-brand-navy-border text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Operational Note */}
                    <div className="p-3 rounded-lg bg-brand-orange/5 border border-brand-orange/20 text-xs text-slate-300">
                      <p className="font-semibold text-brand-orange mb-0.5">
                        {isHindi ? "लिखित कर्तव्य नियम" : "Written Duty Rules"}
                      </p>
                      <p>
                        {isHindi
                          ? "हर गार्ड को स्पष्ट लिखित दिशा-निर्देश दिए जाते हैं ताकि गेट अनुशासन और रिकॉर्ड-कीपिंग सही रहे।"
                          : "Every guard deployed receives a signed Duty Rules document in English and Hindi to guarantee punctuality and register compliance."}
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 4. INDUSTRIES WE PROTECT (INTERACTIVE SECTORS) */}
      <section className="py-20 bg-brand-navy-deep border-b border-brand-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
              {isHindi ? "कार्यक्षेत्र" : "Sectors We Protect"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              {isHindi ? "विशिष्ट परिसरों के अनुसार सुरक्षा व्यवस्था" : "Tailored Security For Every Site Profile"}
            </h2>
            <p className="mt-3 text-base text-slate-300">
              {isHindi
                ? "एक हाउसिंग सोसायटी के गेट की ज़रूरतें एक फैक्ट्री के गेट से बिल्कुल अलग होती हैं। हम आपके परिसर के अनुसार गार्ड चुनते हैं।"
                : "A residential society gate requires polite visitor management. A manufacturing plant requires strict material checking. We adapt to your exact environment."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.industries.map((ind, i) => (
              <div
                key={ind.slug}
                className="group p-6 rounded-2xl bg-brand-navy-card border border-brand-navy-border hover:border-brand-orange/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-navy border border-brand-navy-border flex items-center justify-center text-brand-orange mb-4 group-hover:scale-105 transition-transform">
                    <Building className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-brand-orange transition-colors">
                    {isHindi ? ind.hindiTitle : ind.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {ind.summary}
                  </p>

                  <div className="mt-4 pt-4 border-t border-brand-navy-border/60 space-y-1.5">
                    {ind.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href="/industries"
                    className="text-xs text-brand-orange font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>{isHindi ? "विस्तार से जानें" : "Learn more about this sector"}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy-card hover:bg-brand-navy-light border border-brand-navy-border text-slate-200 text-sm font-semibold transition-all"
            >
              <span>{isHindi ? "सभी सेक्टर समाधान देखें" : "Explore All Industry Solutions"}</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. THE 5-STEP DEPLOYMENT BLUEPRINT (HOW WE WORK) */}
      <section className="py-20 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
              {isHindi ? "पारदर्शी कार्य प्रक्रिया" : "Structured SOP"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              {isHindi ? "गार्ड तैनाती की 5-चरणीय प्रक्रिया" : "How We Deploy: The 5-Step Blueprint"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {isHindi
                ? "हम बिना योजना के सिर्फ गार्ड नहीं भेजते। हर तैनाती एक व्यवस्थित प्रक्रिया के तहत होती है।"
                : "No guesswork. No random personnel dispatched. Every post is preceded by consultation, site checks, and written duty rules."}
            </p>
          </div>

          {/* Timeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {deploymentSteps.map((s, index) => (
              <div
                key={s.step}
                className="relative p-6 rounded-xl bg-brand-navy-card border border-brand-navy-border flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-extrabold text-2xl text-brand-orange">
                      {s.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-orange/60" />
                  </div>

                  <h3 className="text-base font-heading font-bold text-white mb-2">
                    {isHindi ? s.hindiTitle : s.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isHindi ? s.hindiDesc : s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-navy-border/40 text-[11px] text-slate-400">
                  Step {index + 1} of 5
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
            >
              <span>{isHindi ? "पूरी कार्यप्रणाली और लिखित नियमों के बारे में पढ़ें →" : "Read the full deployment protocol & written rules →"}</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 6. FOUNDERS & DIRECT POINT OF CONTACT */}
      <section className="py-20 bg-brand-navy-deep border-b border-brand-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Founder Accountability Story (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block">
                {isHindi ? "सीधी जवाबदेही" : "Direct Operational Access"}
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                {isHindi ? "सीधे उन लोगों से बात करें जो कंपनी चलाते हैं" : "Security You Can Rely On. People You Can Reach."}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                {isHindi
                  ? "जब सुरक्षा का सवाल हो, तो आप किसी अज्ञात कॉल सेंटर से बात नहीं करना चाहते। COVERS365 में आप सीधे उन लोगों से संपर्क करते हैं जो निर्णय लेते हैं और ऑन-ग्राउंड व्यवस्था संभालते हैं।"
                  : "When security needs attention, you should not have to navigate an automated IVR or wait on hold. At Covers365, you deal directly with the founders who operate the business on the ground."}
              </p>

              {/* Founder Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Vishvapal Mittal */}
                <div className="p-5 rounded-xl bg-brand-navy-card border border-brand-navy-border hover:border-brand-orange/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-brand-orange font-semibold uppercase tracking-wider">
                      Operations
                    </span>
                    <a
                      href={primaryContact.telLink}
                      className="p-1.5 rounded bg-brand-orange/10 hover:bg-brand-orange text-brand-orange hover:text-white transition-colors"
                      title="Call directly"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {primaryContact.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">Operational Head</p>
                  <a
                    href={primaryContact.telLink}
                    className="text-sm font-semibold text-slate-200 hover:text-brand-orange flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{primaryContact.phoneFormatted}</span>
                  </a>
                </div>

                {/* Nikhil Singhal */}
                <div className="p-5 rounded-xl bg-brand-navy-card border border-brand-navy-border hover:border-brand-orange/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-brand-orange font-semibold uppercase tracking-wider">
                      Management
                    </span>
                    <a
                      href={secondaryContact.telLink}
                      className="p-1.5 rounded bg-brand-orange/10 hover:bg-brand-orange text-brand-orange hover:text-white transition-colors"
                      title="Call directly"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {secondaryContact.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">Management</p>
                  <a
                    href={secondaryContact.telLink}
                    className="text-sm font-semibold text-slate-200 hover:text-brand-orange flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{secondaryContact.phoneFormatted}</span>
                  </a>
                </div>

              </div>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
                >
                  <span>{isHindi ? "हमारे दृष्टिकोण और मूल्यों के बारे में पढ़ें →" : "Read our founding approach & values →"}</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Office Location & Visiting Card Spec (Col 8-12) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-brand-navy-card border border-brand-navy-border shadow-2xl space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {isHindi ? "मुख्यालय एवं संपर्क" : "Bhopal Office & Base"}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isHindi ? "मध्य प्रदेश के प्रमुख क्षेत्रों में सेवाएं" : "Serving Bhopal, Mandideep, Govindpura & MP"}
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">
                        {siteConfig.address.street}
                      </p>
                      <p className="text-xs text-slate-400">
                        {siteConfig.address.city}, {siteConfig.address.state}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-brand-orange shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400">Official Inquiries Email</p>
                      <p className="font-semibold text-white text-xs sm:text-sm">
                        {siteConfig.emails.primary}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={siteConfig.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light border border-brand-navy-border text-slate-200 text-xs font-semibold tracking-wide transition-all"
                  >
                    <MapPin className="w-4 h-4 text-brand-orange" />
                    <span>{isHindi ? "गूगल मैप्स पर दिशा-निर्देश देखें" : "Get Directions on Google Maps"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CLOSING ACTION BLOCK */}
      <section className="py-20 bg-gradient-to-b from-brand-navy to-brand-navy-deep relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-semibold text-brand-orange mb-6">
            <ClipboardList className="w-4 h-4" />
            <span>{isHindi ? "निःशुल्क सुरक्षा परामर्श" : "Free Site Assessment"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isHindi
              ? "अपनी साइट के बारे में बताएं, हम सही टीम सुझाएंगे।"
              : "Tell us about your site, and we will suggest the right team."}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            {isHindi
              ? "चाहे 1 गार्ड की आवश्यकता हो या 50 की, हम आपकी आवश्यकताओं के अनुरूप योजना बनाएंगे।"
              : "Whether you need a single static gatekeeper or full factory perimeter staffing, we provide transparent recommendations."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-base font-bold shadow-xl hover:shadow-orange-glow transition-all duration-200 active:scale-95"
            >
              <FileText className="w-5 h-5" />
              <span>{isHindi ? "कोटेशन का अनुरोध करें" : "Request a Free Quote"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                isHindi ? siteConfig.whatsapp.defaultMessageHi : siteConfig.whatsapp.defaultMessageEn
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-600/40 text-emerald-300 text-base font-semibold transition-all duration-200 active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. NEXT CHAPTER CURIOSITY ENGINE */}
      <NextChapter
        heading="Curious how we operate?"
        hindiHeading="आगे और जानें"
        subheading="Explore our founding mission and our structured deployment protocols."
        hindiSubheading="हमारे दृष्टिकोण और व्यवस्थित तैनाती प्रक्रिया के बारे में पढ़ें।"
        primaryCard={{
          title: "About Covers365: Our Core Philosophy",
          hindiTitle: "Covers365 के बारे में: हमारा दृष्टिकोण",
          hook: "A security guard is not just a uniform at a gate. Read our story and leadership principles.",
          hindiHook: "सुरक्षा गार्ड केवल गेट पर खड़ी वर्दी नहीं है। हमारी सोच और कार्यप्रणाली जानें।",
          href: "/about",
          badge: "Story & Leadership",
          hindiBadge: "कहानी और नेतृत्व",
        }}
        secondaryCard={{
          title: "The 5-Step Deployment Process",
          hindiTitle: "5-चरणों में तैनाती प्रक्रिया",
          hook: "See how we assess vulnerability, brief guards, and issue written Duty Rules in English & Hindi.",
          hindiHook: "जानें कि हम परिसर का मुआयना और लिखित कर्तव्य नियमों का आवंटन कैसे करते हैं।",
          href: "/how-we-work",
          badge: "Operational SOP",
          hindiBadge: "मानक कार्यप्रणाली",
        }}
      />
    </div>
  );
}
