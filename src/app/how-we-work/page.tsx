"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { NextChapter } from "@/components/common/NextChapter";
import { 
  ClipboardCheck, 
  Search, 
  FileText, 
  Users, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  BookOpen
} from "lucide-react";

export default function HowWeWorkPage() {
  const { isHindi } = useLanguage();

  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Requirement Consultation & Gate Assessment",
      hindiTitle: "आवश्यकता परामर्श एवं गेट समीक्षा",
      summary:
        "Every property is unique. Before dispatching any personnel, we consult with you directly to understand gate timings, visitor flow, delivery frequencies, and site-specific risks.",
      hindiSummary:
        "हर संपत्ति विशिष्ट होती है। किसी भी गार्ड को तैनात करने से पहले, हम गेट के समय, आगंतुकों के आवागमन और संभावित जोखिमों को समझने के लिए सीधे आपसे चर्चा करते हैं।",
      details: [
        "Gate count and entry/exit dynamics review",
        "Day vs night shift staffing requirements",
        "Material inward/outward and vendor volume analysis",
        "Direct discussion with operational decision makers",
      ],
      hindiDetails: [
        "गेटों की संख्या और प्रवेश/निकास व्यवस्था की समीक्षा",
        "दिन और रात की शिफ्ट के लिए आवश्यक स्टाफ का निर्धारण",
        "सामान आवागमन और वेंडरों की दैनिक संख्या का विश्लेषण",
        "सीधे निर्णय लेने वाले संचालकों से परामर्श",
      ],
    },
    {
      step: "02",
      icon: ClipboardCheck,
      title: "Site Vulnerability Walkthrough",
      hindiTitle: "परिसर सुरक्षा मुआयना",
      summary:
        "We identify physical security choke points on-ground: dark boundary corners, parking congestion spots, reception counters, and delivery loading docks.",
      hindiSummary:
        "हम परिसर के संवेदनशील बिंदुओं का भौतिक निरीक्षण करते हैं: बाउंड्री के अंधेरे कोने, पार्किंग में जाम के बिंदु, रिसेप्शन काउंटर और सामान लोडिंग स्थल।",
      details: [
        "Boundary wall lighting and blind spot inspection",
        "Visitor registration area layout planning",
        "Vehicle movement lanes and parking guidance paths",
        "Emergency exit and fire equipment accessibility check",
      ],
      hindiDetails: [
        "बाउंड्री की रोशनी और अंधेरे कोनों का निरीक्षण",
        "विजिटर रजिस्टर टेबल व गेट सेटअप की योजना",
        "वाहनों के आने-जाने और पार्किंग का व्यवस्थित मार्ग",
        "आपातकालीन निकास और अग्निशमन यंत्रों की सुलभता की जांच",
      ],
    },
    {
      step: "03",
      icon: Users,
      title: "Guard Selection & Site-Specific Briefing",
      hindiTitle: "गार्ड चयन एवं साइट ब्रीफिंग",
      summary:
        "We choose disciplined unarmed personnel whose demeanor and physical stamina match your environment. Residential gates receive polite greeters; industrial gates receive firm loggers.",
      hindiSummary:
        "हम अनुशासित अनआर्म्ड गार्ड्स का चयन करते हैं जिनका स्वभाव और क्षमता आपकी साइट के अनुकूल हो। हाउसिंग गेट के लिए शिष्ट गार्ड और फैक्ट्री गेट के लिए सतर्क गार्ड।",
      details: [
        "Personnel matched to residential, office or industrial site profile",
        "Briefing on property-specific rules (gate closing times, delivery drop points)",
        "Review of emergency contact phone tree",
        "Zero alcohol and strict anti-distraction policy briefing",
      ],
      hindiDetails: [
        "साइट के अनुसार उपयुक्त गार्ड्स का चयन",
        "परिसर के विशिष्ट नियमों (गेट बंद होने का समय, डिलीवरी पॉइंट) की ब्रीफिंग",
        "आपातकालीन फोन नंबरों की जानकारी देना",
        "ड्यूटी के दौरान पूर्ण अनुशासन व सतर्कता के निर्देश",
      ],
    },
    {
      step: "04",
      icon: BookOpen,
      title: "The Written Duty Rules Agreement (Bilingual)",
      hindiTitle: "लिखित कर्तव्य नियम अनुबंध (द्विभाषी)",
      summary:
        "No verbal ambiguity. Every guard is issued a written Duty Rules Agreement in English and Hindi detailing exact conduct, uniform grooming, register upkeep, and reporting responsibilities.",
      hindiSummary:
        "कोई मौखिक अस्पष्टता नहीं। हर गार्ड को हिंदी और अंग्रेजी में लिखित कर्तव्य नियम (Duty Rules) दिए जाते हैं, जिसमें समय, वर्दी, रजिस्टर और आचरण स्पष्ट लिखा होता है।",
      details: [
        "Punctuality: Mandatory reporting 15 minutes before shift change",
        "Uniform Grooming: Clean, ironed uniform, clean cap, and ID badge",
        "Register Discipline: Complete logging of visitor name, phone, and vehicle number",
        "Immediate Reporting: Reporting any property anomaly directly to management",
      ],
      hindiDetails: [
        "समय की पाबंदी: शिफ्ट बदलने से 15 मिनट पूर्व उपस्थिति अनिवार्य",
        "स्वच्छ वर्दी: साफ-सुथरी वर्दी, कैप और पहचान पत्र",
        "रजिस्टर संधारण: आगंतुक का नाम, फोन और वाहन नंबर दर्ज करना",
        "तुरंत सूचना: किसी भी संदिग्ध गतिविधि की तत्काल जानकारी देना",
      ],
    },
    {
      step: "05",
      icon: PhoneCall,
      title: "Active Supervision & Direct Founder Oversight",
      hindiTitle: "सक्रिय निगरानी एवं सीधा संस्थापक संपर्क",
      summary:
        "Deployment is not the end of our responsibility. You have direct access to our founders to address shift changes, guard rotation, or special instructions without delay.",
      hindiSummary:
        "तैनाती हमारी ज़िम्मेदारी का अंत नहीं है। किसी भी बदलाव, शिफ्ट रोटेशन या विशेष निर्देश के लिए आपको सीधे संस्थापकों का फोन नंबर उपलब्ध रहता है।",
      details: [
        "Direct phone access to Vishvapal Mittal and Nikhil Singhal",
        "Fast operational response if adjustments or replacements are needed",
        "Transparent billing aligned strictly with verified muster rolls",
        "Continuous feedback loop to maintain post quality",
      ],
      hindiDetails: [
        "विश्वपाल मित्तल और निखिल सिंघल से सीधा फोन संपर्क",
        "आवश्यकता पड़ने पर त्वरित प्रतिक्रिया और समन्वय",
        "सत्यापित मस्टर रोल के अनुसार पारदर्शी बिलिंग",
        "सुरक्षा व्यवस्था को निरंतर मजबूत बनाए रखने हेतु फीडबैक",
      ],
    },
  ];

  return (
    <div className="bg-brand-navy min-h-screen text-slate-100 flex flex-col">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-20 border-b border-brand-navy-border/60 bg-brand-navy-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <ClipboardCheck className="w-4 h-4" />
            <span>{isHindi ? "मानक कार्यप्रणाली" : "Operational SOP"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isHindi
              ? "हम कैसे काम करते हैं: 5-चरणीय तैनाती प्रक्रिया"
              : "How We Work: The 5-Step Deployment Blueprint"}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {isHindi
              ? "सुरक्षा कोई संयोग नहीं है। हमारी पूरी कार्यप्रणाली लिखित नियमों, प्रत्यक्ष संस्थापक जवाबदेही और साइट के अनुरूप चयन पर आधारित है।"
              : "Disciplined security is built on clear procedures. We eliminate verbal ambiguity by evaluating site risks and issuing written Duty Rules in English and Hindi."}
          </p>
        </div>
      </section>

      {/* 2. THE 5 STEPS DEEP DIVE */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="p-8 sm:p-10 rounded-2xl bg-brand-navy-card border border-brand-navy-border shadow-xl hover:border-brand-orange/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-brand-navy-border/60">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy border border-brand-navy-border flex items-center justify-center text-brand-orange shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-brand-orange uppercase font-semibold">
                        Phase {s.step}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        {isHindi ? s.hindiTitle : s.title}
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded bg-brand-navy text-slate-300 border border-brand-navy-border">
                    Step {index + 1} of 5
                  </span>
                </div>

                <div className="pt-6 space-y-5">
                  <p className="text-base text-slate-300 leading-relaxed">
                    {isHindi ? s.hindiSummary : s.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      {isHindi ? "इस चरण के मुख्य बिंदु:" : "Operational Focus Areas:"}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
                      {(isHindi ? s.hindiDetails : s.details).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WRITTEN DUTY RULES SPOTLIGHT */}
      <section className="py-16 bg-brand-navy-deep border-b border-brand-navy-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy-card border border-brand-orange/40 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/10 border border-brand-orange/20 text-xs font-semibold text-brand-orange uppercase mb-4">
              <BookOpen className="w-4 h-4" />
              <span>{isHindi ? "दस्तावेजीकरण" : "Operational Transparency"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
              {isHindi
                ? "लिखित कर्तव्य नियम अनुबंध (Written Duty Rules Agreement)"
                : "The Covers365 Written Duty Rules Agreement"}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {isHindi
                ? "हम केवल मौखिक निर्देश नहीं देते। प्रत्येक गार्ड को उसकी ड्यूटी शुरू होने से पहले हिंदी और अंग्रेजी में एक हस्ताक्षरित दस्तावेज दिया जाता है जिसमें निम्नलिखित पांच स्पष्ट नियम होते हैं:"
                : "We do not rely on verbal instructions. Before a guard is deployed at your gate, he is briefed on a written agreement available in Hindi and English outlining five mandatory rules:"}
            </p>

            <div className="space-y-3 text-sm text-slate-200 bg-brand-navy/80 p-6 rounded-xl border border-brand-navy-border">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-white">{isHindi ? "समयनिष्ठा (Punctuality):" : "Punctuality:"}</strong>{" "}
                  {isHindi ? "शिफ्ट बदलने से 15 मिनट पूर्व पोस्ट पर पहुंचना अनिवार्य है ताकि रजिस्टर हैंडओवर विधिवत हो सके।" : "Guards must arrive 15 minutes before shift change for proper register and gate handover."}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-white">{isHindi ? "वर्दी एवं पहचान (Uniform & ID):" : "Uniform & Identification:"}</strong>{" "}
                  {isHindi ? "साफ वर्दी, जूते, कैप और पहचान पत्र के साथ ही ड्यूटी मान्य होगी।" : "Crisp uniform, clean cap, polished shoes, and visible company ID are strictly mandatory."}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-white">{isHindi ? "रजिस्टर संधारण (Register Maintenance):" : "Visitor Logging:"}</strong>{" "}
                  {isHindi ? "हर आगंतुक, डिलीवरी कर्मी और वाहन का सटीक समय व विवरण बिना किसी अपवाद के दर्ज करना।" : "Accurate recording of every visitor, delivery personnel, and vehicle without exception."}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-white">{isHindi ? "आचरण एवं विनम्रता (Courtesy & Conduct):" : "Courtesy & Restraint:"}</strong>{" "}
                  {isHindi ? "रहवासियों व आगंतुकों से सम्मानजनक व्यवहार। किसी भी विवाद में संयम बरतना और तुरंत उच्चाधिकारियों को सूचित करना।" : "Courteous greeting with visitors and residents. Strict conflict de-escalation and instant supervisor alerting."}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <strong className="text-white">{isHindi ? "सतर्कता (Vigilance):" : "Vigilance & Non-Distraction:"}</strong>{" "}
                  {isHindi ? "ड्यूटी के दौरान मोबाइल पर व्यक्तिगत गेम/वीडियो देखना और सोना सख्त वर्जित है।" : "Personal entertainment, mobile games, and sleeping on duty carry immediate strict penalties."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="py-16 bg-gradient-to-b from-brand-navy to-brand-navy-deep text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
            {isHindi ? "अपनी साइट के लिए सुरक्षा व्यवस्था शुरू करें" : "Ready For Disciplined Security at Your Site?"}
          </h2>
          <p className="text-base text-slate-300">
            {isHindi
              ? "अपने गेट और परिसर के बारे में बताएं। हम मुआयना कर सही टीम का सुझाव देंगे।"
              : "Tell us about your gate and shift timings. We will schedule a site consultation and prepare an honest quote."}
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-xl hover:shadow-orange-glow transition-all"
            >
              <FileText className="w-5 h-5" />
              <span>{isHindi ? "कोटेशन का अनुरोध करें" : "Request Free Quote"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER */}
      <NextChapter
        heading="Want to see the sectors we protect?"
        hindiHeading="देखें कि हम किन क्षेत्रों में सुरक्षा प्रदान करते हैं"
        subheading="Explore our operational protocols for Housing Societies, Factories, and Corporate Parks."
        hindiSubheading="हाउसिंग सोसायटी, फैक्ट्रियों और कॉर्पोरेट परिसरों के लिए हमारे नियम देखें।"
        primaryCard={{
          title: "Industries We Protect in Bhopal & MP",
          hindiTitle: "मध्य प्रदेश में प्रमुख कार्यक्षेत्र",
          hook: "Sector-specific challenges and how Covers365 security guards maintain perimeter order.",
          hindiHook: "विशिष्ट चुनौतियां और Covers365 गार्ड परिसर की सुरक्षा कैसे सुनिश्चित करते हैं।",
          href: "/industries",
          badge: "Sector Solutions",
          hindiBadge: "सेक्टर समाधान",
        }}
        secondaryCard={{
          title: "Join Our Team (Careers for Guards)",
          hindiTitle: "हमारी टीम से जुड़ें (कैरियर / भर्ती)",
          hook: "Disciplined guard and supervisor opportunities with respectful, timely treatment.",
          hindiHook: "अनुशासित सुरक्षा गार्ड और सुपरवाइजर के लिए सम्मानजनक अवसर।",
          href: "/careers",
          badge: "Recruitment",
          hindiBadge: "कैरियर",
        }}
      />
    </div>
  );
}
