"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { NextChapter } from "@/components/common/NextChapter";
import { ServiceIconRenderer } from "@/components/brand/ServiceIcons";
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Users, 
  HeartHandshake, 
  Award,
  ChevronRight
} from "lucide-react";

export default function AboutPage() {
  const { isHindi } = useLanguage();
  const vishvapal = siteConfig.contacts[0];
  const nikhil = siteConfig.contacts[1];

  return (
    <div className="bg-brand-navy min-h-screen text-slate-100 flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 lg:py-24 border-b border-brand-navy-border/60 overflow-hidden bg-brand-navy-deep">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-deep via-brand-navy to-brand-navy pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-semibold text-brand-orange uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>{isHindi ? "हमारे बारे में" : "About COVERS365"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            {isHindi
              ? "सुरक्षा जिस पर आप भरोसा कर सकें। लोग जिनसे आप कभी भी संपर्क कर सकें।"
              : "Security You Can Rely On. People You Can Reach."}
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {isHindi
              ? "COVERS365 Security & Manpower Services भोपाल स्थित एक कंपनी है जो मध्य प्रदेश भर में हाउसिंग सोसायटी, फैक्ट्रियों, दफ्तरों, संस्थानों और आयोजनों को प्रशिक्षित सुरक्षा गार्ड और सहायक स्टाफ उपलब्ध कराती है।"
              : "COVERS365 Security & Manpower Services is a Bhopal-based company that provides trained security guards and support staff to housing societies, factories, offices, institutions and events across Madhya Pradesh."}
          </p>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY & INTRO */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block">
                {isHindi ? "हमारी मूल सोच" : "Our Starting Belief"}
              </span>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {isHindi
                  ? "सुरक्षा गार्ड केवल गेट पर खड़ी एक वर्दी नहीं है।"
                  : "A security guard is not just a uniform at a gate."}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                {isHindi
                  ? "वह पहला व्यक्ति होता है जिससे कोई आगंतुक मिलता है, और किसी भी संपत्ति की सुरक्षा की अंतिम ढाल होता है। इसलिए हमारा पूरा ध्यान सही पोस्ट के लिए सही व्यक्ति को चुनने और तैनाती के बाद भी पूरी तरह जवाबदेह रहने पर है।"
                  : "He is the first person a visitor meets and the last line of defence for a property. So we focus on getting the right person for the right post, and on staying accountable after the guard is deployed."}
              </p>

              {/* Optional Placeholder note as requested */}
              <div className="p-4 rounded-xl bg-brand-navy-card/60 border border-brand-navy-border text-xs text-slate-400">
                <span className="font-semibold text-slate-300 block mb-1">
                  {isHindi ? "संस्थापक नोट [स्थानीय उपस्थिति]:" : "Founder Note [Bhopal Operations]:"}
                </span>
                <p>
                  {isHindi
                    ? "अयोध्या बायपास, नरेला जोड़ भोपाल से संचालित, हम पूरे मध्य प्रदेश में अनुशासित अनआर्म्ड सुरक्षा व्यवस्था के नए मानक स्थापित कर रहे हैं।"
                    : "Operating from Narela Jod, Ayodhya Bypass, Bhopal, we are committed to professional unarmed guard coverage with direct founder oversight."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl bg-brand-navy-card border border-brand-navy-border p-6 shadow-2xl relative overflow-hidden">
                <div className="relative h-60 rounded-xl overflow-hidden mb-4 border border-brand-navy-border">
                  <Image
                    src="/brand/visiting-card.jpg"
                    alt="Covers365 Services & Contact Card"
                    fill
                    className="object-contain bg-white"
                  />
                </div>
                <p className="text-xs text-slate-400 text-center">
                  {isHindi
                    ? "आधिकारिक सेवा कार्ड – COVERS365 भोपाल"
                    : "Official Identity & Services – COVERS365 Bhopal"}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (4 SERVICES) */}
      <section className="py-16 bg-brand-navy-deep border-b border-brand-navy-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
              {isHindi ? "हम क्या करते हैं" : "What We Do"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {isHindi ? "हमारी सेवाएं" : "Core Service Offerings"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteConfig.services.map((srv) => (
              <div
                key={srv.slug}
                className="p-6 rounded-xl bg-brand-navy-card border border-brand-navy-border hover:border-brand-orange/40 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-navy border border-brand-navy-border flex items-center justify-center text-brand-orange shrink-0">
                  <ServiceIconRenderer name={srv.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {isHindi ? srv.hindiTitle : srv.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {isHindi ? srv.hindiShortDesc : srv.shortDesc}
                  </p>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-xs text-brand-orange font-semibold hover:underline inline-flex items-center gap-1 mt-3"
                  >
                    <span>{isHindi ? "विवरण देखें" : "Explore details"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (4 PILLARS) */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
              {isHindi ? "हमारी कार्यप्रणाली" : "Our Operational Standard"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {isHindi ? "हम कैसे काम करते हैं" : "How We Work"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. One Point of Contact */}
            <div className="p-6 rounded-xl bg-brand-navy-card border border-brand-navy-border space-y-2">
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>{isHindi ? "एकल संपर्क सूत्र (One Point of Contact)" : "One Point of Contact"}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isHindi
                  ? "आप सीधे उन लोगों से बात करते हैं जो कंपनी चलाते हैं, किसी कॉल सेंटर से नहीं। जब किसी चीज़ पर ध्यान देने की ज़रूरत होती है, तो आप हमें कॉल करते हैं और हम तुरंत जवाब देते हैं।"
                  : "You deal directly with the people who run the company, not a call centre. When something needs attention, you call us and we respond."}
              </p>
            </div>

            {/* 2. The Right Guard */}
            <div className="p-6 rounded-xl bg-brand-navy-card border border-brand-navy-border space-y-2">
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>{isHindi ? "आपकी पोस्ट के लिए सही गार्ड" : "The Right Guard For Your Post"}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isHindi
                  ? "हर साइट अलग होती है। टीम का सुझाव देने से पहले हम आपके गेट के समय, आगंतुकों के आवागमन और संभावित जोखिमों पर विस्तार से चर्चा करते हैं।"
                  : "Every site is different. We discuss your gate timings, visitor flow and risks before we suggest a team."}
              </p>
            </div>

            {/* 3. Written Duty Rules */}
            <div className="p-6 rounded-xl bg-brand-navy-card border border-brand-navy-border space-y-2">
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>{isHindi ? "लिखित कर्तव्य नियम (Written Duty Rules)" : "Written Duty Rules"}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isHindi
                  ? "प्रत्येक गार्ड को एक लिखित Duty Rules Agreement दिया जाता है (अंग्रेजी और हिंदी दोनों में उपलब्ध), ताकि उसे ड्यूटी पर क्या अपेक्षित है यह स्पष्ट रूप से पता हो: समय की पाबंदी, आचरण, वर्दी, रिकॉर्ड संधारण और रिपोर्टिंग।"
                  : "Every guard is given a written Duty Rules Agreement, available in both English and Hindi, so he knows exactly what is expected of him on duty: punctuality, conduct, uniform, record keeping and reporting."}
              </p>
            </div>

            {/* 4. Respect for Our People */}
            <div className="p-6 rounded-xl bg-brand-navy-card border border-brand-navy-border space-y-2">
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>{isHindi ? "हमारे लोगों के प्रति सम्मान" : "Respect For Our People"}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isHindi
                  ? "हमारे सुरक्षा गार्ड ही हमारी प्रतिष्ठा हैं। हम उनसे अनुशासन की अपेक्षा करते हैं, और हम उनके साथ सम्मानपूर्वक व निष्पक्ष व्यवहार करते हैं।"
                  : "Our guards are our reputation. We expect discipline from them, and we treat them fairly."}
              </p>
              <p className="text-xs text-slate-400 italic pt-1">
                [CONFIRM: add one line about wages/payment practice only if true.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VALUES & MISSION */}
      <section className="py-16 bg-brand-navy-deep border-b border-brand-navy-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* What We Stand For */}
            <div className="p-8 rounded-2xl bg-brand-navy-card border border-brand-navy-border space-y-4">
              <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block">
                {isHindi ? "हमारे मूल्य" : "Our Values"}
              </span>
              <h3 className="text-2xl font-heading font-bold text-white">
                {isHindi ? "हम किसके पक्षधर हैं" : "What We Stand For"}
              </h3>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-brand-navy border border-brand-navy-border text-center font-bold text-white">
                  {isHindi ? "समय की पाबंदी" : "Punctuality"}
                </div>
                <div className="p-3 rounded-lg bg-brand-navy border border-brand-navy-border text-center font-bold text-white">
                  {isHindi ? "अनुशासन" : "Discipline"}
                </div>
                <div className="p-3 rounded-lg bg-brand-navy border border-brand-navy-border text-center font-bold text-white">
                  {isHindi ? "ईमानदारी" : "Honesty"}
                </div>
                <div className="p-3 rounded-lg bg-brand-navy border border-brand-navy-border text-center font-bold text-white">
                  {isHindi ? "विनम्रता" : "Courtesy"}
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="p-8 rounded-2xl bg-brand-navy-card border border-brand-navy-border space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
                  {isHindi ? "हमारा लक्ष्य" : "Our Purpose"}
                </span>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  {isHindi ? "हमारा मिशन" : "Our Mission"}
                </h3>
                <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed">
                  "{isHindi
                    ? "मध्य प्रदेश में रोजमर्रा की सुरक्षा को अधिक पेशेवर, अधिक भरोसेमंद और अधिक सम्मानजनक बनाना—उन लोगों के लिए जिनकी हम रक्षा करते हैं और उन लोगों के लिए जो उनकी रक्षा करते हैं।"
                    : "To make everyday security in Madhya Pradesh more professional, more reliable and more respectful, for the people we protect and the people who protect them."}"
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. MEET THE TEAM */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
              {isHindi ? "नेतृत्व" : "Operational Heads"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {isHindi ? "टीम से मिलें" : "Meet The Team"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Vishvapal Mittal */}
            <div className="p-6 rounded-2xl bg-brand-navy-card border border-brand-navy-border space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {vishvapal.name}
                  </h3>
                  <p className="text-xs text-brand-orange font-medium mt-0.5">
                    [Designation / Operational Head]
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
              
              <div className="pt-2 border-t border-brand-navy-border/60">
                <a
                  href={vishvapal.telLink}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-brand-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call: {vishvapal.phone}</span>
                </a>
              </div>
            </div>

            {/* Nikhil Singhal */}
            <div className="p-6 rounded-2xl bg-brand-navy-card border border-brand-navy-border space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {nikhil.name}
                  </h3>
                  <p className="text-xs text-brand-orange font-medium mt-0.5">
                    [Designation / Management]
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Phone className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-2 border-t border-brand-navy-border/60">
                <a
                  href={nikhil.telLink}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-brand-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call: {nikhil.phone}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 text-xs text-slate-400">
            [OPTIONAL: Founding year / short founder story, 2-3 lines. Only add if true.]
          </div>
        </div>
      </section>

      {/* 7. FIND US & CLOSING CTA */}
      <section className="py-16 bg-gradient-to-b from-brand-navy-deep to-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider text-brand-orange font-bold">
              {isHindi ? "हमारा पता" : "Find Us"}
            </h3>
            <p className="text-lg font-semibold text-white">
              {siteConfig.address.street}, {siteConfig.address.city}
            </p>
            <p className="text-sm text-slate-300">
              {siteConfig.emails.primary}
            </p>
          </div>

          <div className="pt-6 border-t border-brand-navy-border/60 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              {isHindi
                ? "अपनी साइट के बारे में बताएं, हम सही टीम सुझाएंगे।"
                : "Tell us about your site, and we will suggest the right team."}
            </h2>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm shadow-lg hover:shadow-orange-glow transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>{isHindi ? "कोटेशन का अनुरोध करें" : "Request a Free Quote"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEXT CHAPTER */}
      <NextChapter
        heading="Curious how we put a team in place?"
        hindiHeading="देखें कि हम टीम कैसे तैनात करते हैं?"
        subheading="See how our 5-step site review and written duty rules guarantee disciplined gate coverage."
        hindiSubheading="जानें कि हमारी 5-चरणीय समीक्षा और लिखित नियम अनुशासित गेट सुरक्षा कैसे सुनिश्चित करते हैं।"
        primaryCard={{
          title: "How We Work: The 5-Step Process",
          hindiTitle: "कार्य प्रणाली: 5-चरणीय प्रक्रिया",
          hook: "From gate timing review to bilingual Duty Rules, explore how we prepare our personnel.",
          hindiHook: "गेट के समय की समीक्षा से लेकर द्विभाषी नियमों तक, जानें हमारी तैयारी।",
          href: "/how-we-work",
          badge: "Deployment Protocol",
          hindiBadge: "तैनाती प्रक्रिया",
        }}
        secondaryCard={{
          title: "Explore Our 4 Service Offerings",
          hindiTitle: "हमारी 4 सेवाएं देखें",
          hook: "Detailed scopes, shift options, and responsibilities for unarmed security and manpower.",
          hindiHook: "अनआर्म्ड सुरक्षा और मैनपावर के लिए विस्तृत कार्यक्षेत्र और शिफ्ट विकल्प।",
          href: "/services",
          badge: "Services Matrix",
          hindiBadge: "सेवा मैट्रिक्स",
        }}
      />
    </div>
  );
}
