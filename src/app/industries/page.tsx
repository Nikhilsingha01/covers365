"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { NextChapter } from "@/components/common/NextChapter";
import { 
  Building2, 
  Factory, 
  Home, 
  Stethoscope, 
  GraduationCap, 
  ShoppingBag, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowRight,
  ShieldAlert,
  ShieldCheck
} from "lucide-react";

export default function IndustriesPage() {
  const { isHindi } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industryDetails = [
    {
      slug: "housing-societies",
      title: "Housing Societies & Townships",
      hindiTitle: "हाउसिंग सोसायटी और आवासीय टाउनशिप",
      icon: Home,
      challenges: [
        "Uncontrolled delivery boy and vendor movement through gates",
        "Nighttime vehicle parking disputes and boundary vigilance",
        "Visitor register negligence leading to security gaps",
        "Water tanker, domestic staff and contractor monitoring",
      ],
      hindiChallenges: [
        "गेट पर डिलीवरी बॉय और वेंडरों का अनियंत्रित आवागमन",
        "रात के समय पार्किंग विवाद और बाउंड्री की सुरक्षा",
        "विजिटर रजिस्टर में लापरवाही के कारण सुरक्षा में चूक",
        "पानी के टैंकर, घरेलू सहायक और ठेकेदारों की निगरानी",
      ],
      solutions: [
        "Polite, vigilant gatekeepers who log every single visitor and vehicle",
        "Designated vendor entry pass and delivery drop coordination",
        "Night perimeter patrolling with lock checks at back gates and clubhouses",
        "Clear bilingual Duty Rules on resident courtesy and conflict de-escalation",
      ],
      hindiSolutions: [
        "विनम्र और सतर्क गार्ड जो हर विजिटर और वाहन का विवरण दर्ज करते हैं",
        "वेंडर और डिलीवरी कर्मियों के लिए व्यवस्थित गेट व्यवस्था",
        "रात में परिसर की बाउंड्री, पिछले गेट और कॉमन एरिया की गश्त",
        "रहवासियों से सम्मानजनक व्यवहार और विवाद निवारण के स्पष्ट नियम",
      ],
      typicalShifts: "12-Hour Day & Night Rotation (24/7 Coverage)",
      recommendedTeam: "2 to 8 Guards depending on gate count and amenities",
    },
    {
      slug: "factories-manufacturing",
      title: "Factories & Industrial Plants",
      hindiTitle: "फैक्ट्री और औद्योगिक प्लांट्स",
      icon: Factory,
      challenges: [
        "Raw material and scrap pilferage at dispatch bays",
        "Worker and contractor unauthorized entry or shift crowding",
        "Commercial truck weighbridge coordination and gatepass fraud",
        "Expansive perimeter boundaries with blind spots",
      ],
      hindiChallenges: [
        "डिस्पैच बे पर कच्चे माल और स्क्रैप की चोरी का जोखिम",
        "श्रमिकों और ठेकेदारों का अनधिकृत प्रवेश या शिफ्ट में अव्यवस्था",
        "लोडिंग ट्रकों के गेटपास और वजन पर्ची में गड़बड़ी की संभावना",
        "फैक्ट्री की लंबी बाउंड्री और अंधेरे कोने",
      ],
      solutions: [
        "Rigorous verification of delivery challans, gatepasses and material invoices",
        "Driver and vehicle checking with inward/outward logbooks",
        "Perimeter boundary checks during silent hours to deter trespassing",
        "Basic emergency and fire-safety aware personnel",
      ],
      hindiSolutions: [
        "डिलीवरी चालान, गेटपास और माल बिलों की सख्त जांच",
        "चालक और वाहनों की सघन गेट जांच व रजिस्टर संधारण",
        "रात्रि में फैक्ट्री बाउंड्री की नियमित निगरानी ताकि कोई प्रवेश न कर सके",
        "प्राथमिक अग्निशामक और आपातकालीन सूचना तंत्र की समझ",
      ],
      typicalShifts: "8-Hour 3-Shift Continuous or 12-Hour Industrial Rotation",
      recommendedTeam: "4 to 20 Guards depending on plant acreage and gates",
    },
    {
      slug: "offices-commercial",
      title: "Corporate Offices & IT Hubs",
      hindiTitle: "कॉर्पोरेट ऑफिस और आईटी हब",
      icon: Building2,
      challenges: [
        "Visitor registration delays causing reception congestion",
        "Safeguarding expensive IT hardware and confidential assets after hours",
        "Housekeeping and support manpower absenteeism during business hours",
      ],
      hindiChallenges: [
        "रिसेप्शन पर विजिटर एंट्री में देरी से भीड़ लगना",
        "ऑफिस बंद होने के बाद कंप्यूटर और आवश्यक उपकरणों की सुरक्षा",
        "कार्य समय के दौरान सपोर्ट स्टाफ और हाउसकीपिंग की अनुपस्थिति",
      ],
      solutions: [
        "Smart, well-spoken reception security to guide visitors smoothly",
        "After-hours floor lockups, window checks and key register control",
        "Combined package of security guards + reliable office support manpower",
      ],
      hindiSolutions: [
        "स्मार्ट और शिष्ट रिसेप्शन सुरक्षा गार्ड जो आगंतुकों का सही मार्गदर्शन करें",
        "कार्यालय बंद होने के बाद चाबी रजिस्टर और कमरों के तालों की जांच",
        "सुरक्षा गार्ड्स के साथ-साथ भरोसेमंद ऑफिस बॉय और सपोर्ट स्टाफ का संयोजन",
      ],
      typicalShifts: "General Shift (8 to 10 Hours) or 24/7 Gate Protection",
      recommendedTeam: "2 to 6 Guards + Facility Support Staff",
    },
    {
      slug: "hospitals-healthcare",
      title: "Hospitals & Healthcare Facilities",
      hindiTitle: "अस्पताल और स्वास्थ्य केंद्र",
      icon: Stethoscope,
      challenges: [
        "Overcrowding of patient attendants at emergency entrance and ICUs",
        "Ambulance ramp blocking by unauthorized vehicle parking",
        "Need for sensitive, patient crowd handling during critical hours",
      ],
      hindiChallenges: [
        "इमरजेंसी गेट और आईसीयू के पास तीमारदारों की अनियंत्रित भीड़",
        "गलत पार्किंग के कारण एम्बुलेंस के रास्ते में बाधा",
        "संवेदनशील माहौल में धैर्यवान और विनम्र भीड़ नियंत्रण की आवश्यकता",
      ],
      solutions: [
        "Clear pass enforcement at ICU, maternity and ward entrances",
        "Dedicated ramp clearance guards ensuring ambulance routes remain open",
        "Calm, respectful communication to de-escalate stressed attendants",
      ],
      hindiSolutions: [
        "आईसीयू और वार्ड में अधिकृत अटेंडेंट पास नियमों का सख्त पालन",
        "एम्बुलेंस रैंप को हमेशा खाली रखने के लिए समर्पित गेट गार्ड",
        "मरीजों के परिजनों के साथ शांत, संवेदनशील और सम्मानजनक संवाद",
      ],
      typicalShifts: "12-Hour Day/Night Rotation or 8-Hour 3-Shift",
      recommendedTeam: "4 to 15 Guards based on bed capacity and OPD volume",
    },
    {
      slug: "educational-institutions",
      title: "Schools, Colleges & Hostels",
      hindiTitle: "स्कूल, कॉलेज और हॉस्टल परिसर",
      icon: GraduationCap,
      challenges: [
        "Strict student pickup and child handover security at school dismissal",
        "Preventing unauthorized outsiders from loitering near campus gates",
        "Night curfew and entry register compliance for student hostels",
      ],
      hindiChallenges: [
        "स्कूल छूटने के समय बच्चों की सुरक्षित रवानगी और पालक सत्यापन",
        "स्कूल/कॉलेज गेट के आसपास बाहरी असामाजिक तत्वों का जमावड़ा रोकना",
        "छात्र हॉस्टलों में रात्रि कर्फ्यू और रजिस्टर नियमों का पालन",
      ],
      solutions: [
        "Rigorous verification of parent/guardian pickup cards at primary gates",
        "Strict anti-loitering perimeter vigil around educational boundaries",
        "Hostel night in/out register enforcement under direct supervisory orders",
      ],
      hindiSolutions: [
        "प्राइमरी स्कूल में माता-पिता/अभिभावक कार्ड सत्यापन के बाद ही अनुमति",
        "कैंपस के बाहर अनावश्यक भीड़ और असामाजिक तत्वों पर सख्त नजर",
        "हॉस्टल में रात्रि प्रवेश व निकास के समय का कड़ाई से पालन",
      ],
      typicalShifts: "School Hours Day Shift (8-10 Hours) + 24/7 Hostel Coverage",
      recommendedTeam: "2 to 10 Guards depending on campus size",
    },
    {
      slug: "retail-malls",
      title: "Malls, Retail & Showrooms",
      hindiTitle: "मॉल, रिटेल और बड़े शोरूम",
      icon: ShoppingBag,
      challenges: [
        "Peak hour customer footfall management and queue maintenance",
        "Loading bay and delivery dock movement coordination",
        "Shoplifting deterrence through watchful unarmed presence",
      ],
      hindiChallenges: [
        "त्योहारों व सेल के दौरान ग्राहकों की भारी भीड़ और कतार प्रबंधन",
        "लोडिंग बे और बैकस्टेज डिलीवरी की व्यवस्था",
        "सतर्क उपस्थिति से माल की सुरक्षा सुनिश्चित करना",
      ],
      solutions: [
        "Alert greeter guards at main entry doors checking bags courteously",
        "Loading dock guard inspecting delivery boxes and delivery receipts",
        "Orderly parking guidance preventing traffic jams at retail fronts",
      ],
      hindiSolutions: [
        "मुख्य द्वार पर सतर्क और विनम्र गार्ड जो आने वालों का स्वागत व बैग जांच करें",
        "लोडिंग डॉक पर आने वाले माल और पर्चियों का रिकॉर्ड संधारण",
        "दुकान/मॉल के सामने वाहनों की व्यवस्थित पार्किंग ताकि जाम न लगे",
      ],
      typicalShifts: "Retail Hours (10 to 12 Hours) or Round-the-clock",
      recommendedTeam: "2 to 12 Guards based on retail floor square footage",
    },
  ];

  const current = industryDetails[selectedIndustry];

  return (
    <div className="bg-brand-navy min-h-screen text-slate-100 flex flex-col">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-20 border-b border-brand-navy-border/60 bg-brand-navy-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>{isHindi ? "कार्यक्षेत्र" : "Sectors We Protect"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isHindi
              ? "प्रत्येक परिसर की अपनी सुरक्षा चुनौती होती है"
              : "Every Property Has Its Own Security Dynamics"}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isHindi
              ? "एक हाउसिंग सोसायटी का गेट विनम्रता चाहता है, जबकि एक फैक्ट्री का गेट सख्त सामग्री जांच। जानें कि हम मध्य प्रदेश के प्रमुख क्षेत्रों में अपनी सेवाएं कैसे अनुकूलित करते हैं।"
              : "From residential townships to manufacturing plants in Mandideep, Govindpura, and Bhopal, our unarmed guard teams adapt to your exact environment."}
          </p>
        </div>
      </section>

      {/* 2. INDUSTRY SELECTOR & DETAILED VIEW */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
            {industryDetails.map((ind, idx) => {
              const Icon = ind.icon;
              const isSelected = selectedIndustry === idx;
              return (
                <button
                  key={ind.slug}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-brand-navy-card border-brand-orange ring-1 ring-brand-orange/50 shadow-lg"
                      : "bg-brand-navy-card/50 border-brand-navy-border hover:border-slate-600 hover:bg-brand-navy-card"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mb-3 ${
                      isSelected ? "text-brand-orange" : "text-slate-400"
                    }`}
                  />
                  <h3
                    className={`text-xs font-heading font-bold leading-snug ${
                      isSelected ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {isHindi ? ind.hindiTitle.split(" ")[0] : ind.title.split("&")[0]}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Industry Deep-Dive */}
          <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy-card border border-brand-navy-border shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-brand-navy-border/60">
              <div className="w-12 h-12 rounded-xl bg-brand-navy border border-brand-navy-border flex items-center justify-center text-brand-orange shrink-0">
                <current.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-brand-orange uppercase font-semibold">
                  Sector Specialization
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {isHindi ? current.hindiTitle : current.title}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Challenges vs Solutions (Col 1-8) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Specific Challenges */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-brand-orange" />
                    <span>{isHindi ? "इस क्षेत्र की मुख्य सुरक्षा चुनौतियां:" : "Key Security Challenges:"}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(isHindi ? current.hindiChallenges : current.challenges).map((c, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-brand-navy/60 border border-brand-navy-border text-xs text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-brand-orange font-bold mt-0.5">•</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Covers365 Operational Solutions */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-orange" />
                    <span>{isHindi ? "COVERS365 के समाधान एवं गार्ड कर्तव्य:" : "Covers365 Operational Solutions:"}</span>
                  </h3>
                  <div className="space-y-2.5">
                    {(isHindi ? current.hindiSolutions : current.solutions).map((s, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-lg bg-brand-navy-deep border border-brand-navy-border text-sm text-slate-200 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Deployment Parameters (Col 9-12) */}
              <div className="lg:col-span-4 bg-brand-navy/80 border border-brand-navy-border rounded-xl p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-5">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      {isHindi ? "अनुशंसित शिफ्ट प्रारूप" : "Typical Shift Coverage"}
                    </span>
                    <p className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-orange" />
                      <span>{current.typicalShifts}</span>
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      {isHindi ? "सामान्य टीम का आकार" : "Estimated Deployment Size"}
                    </span>
                    <p className="text-sm font-semibold text-slate-200">
                      {current.recommendedTeam}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-brand-orange/10 border border-brand-orange/20 text-xs text-slate-300">
                    <p className="font-semibold text-brand-orange mb-0.5">
                      {isHindi ? "लिखित कर्तव्य नियम" : "Written Duty Agreement"}
                    </p>
                    <p>
                      {isHindi
                        ? "गार्ड्स को परिसर के अनुसार लिखित नियम दिए जाते हैं ताकि गेट अनुशासन बना रहे।"
                        : "Guards sign site-specific orders in Hindi & English tailored to this exact sector."}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-navy-border/60">
                  <Link
                    href={`/contact?sector=${current.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-xs transition-all shadow-md text-center"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{isHindi ? "इस क्षेत्र हेतु कोटेशन लें" : "Request Sector Quote"}</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. NEXT CHAPTER */}
      <NextChapter
        heading="Understand how our team prepares for your post"
        hindiHeading="देखें कि हमारी टीम आपकी साइट की तैयारी कैसे करती है"
        subheading="Learn about our 5-step site survey, guard briefing, and written duty rules."
        hindiSubheading="जानें हमारे 5-चरणीय साइट मुआयने और लिखित कर्तव्य नियमों के बारे में।"
        primaryCard={{
          title: "The 5-Step Operational Process",
          hindiTitle: "कार्य प्रणाली: 5-चरणीय प्रक्रिया",
          hook: "How we review gates, assign personnel, and issue written Duty Rules in English & Hindi.",
          hindiHook: "जानें कि हम परिसर का मुआयना और लिखित कर्तव्य नियमों का आवंटन कैसे करते हैं।",
          href: "/how-we-work",
          badge: "Deployment Protocol",
          hindiBadge: "तैनाती प्रक्रिया",
        }}
        secondaryCard={{
          title: "Request a Site Assessment & Quote",
          hindiTitle: "साइट मुआयने व कोटेशन का अनुरोध करें",
          hook: "Tell us about your gate count and shift hours. We will prepare an honest proposal.",
          hindiHook: "अपने गेटों और शिफ्ट के समय की जानकारी दें। हम सटीक योजना प्रस्तुत करेंगे।",
          href: "/contact",
          badge: "Direct Contact",
          hindiBadge: "सीधा संपर्क",
        }}
      />
    </div>
  );
}
