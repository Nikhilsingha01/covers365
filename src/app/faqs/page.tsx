"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { NextChapter } from "@/components/common/NextChapter";
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  Building2, 
  FileText, 
  ArrowRight,
  Phone
} from "lucide-react";

export default function FaqsPage() {
  const { isHindi } = useLanguage();
  const [openIndex, setOpenIndex] = useState<string | null>("general-0");

  const faqCategories = [
    {
      id: "general",
      title: "General & Standards",
      hindiTitle: "सामान्य एवं मानक",
      icon: ShieldCheck,
      items: [
        {
          q: "Are Covers365 security guards armed or unarmed?",
          qHi: "क्या Covers365 के गार्ड हथियारबंद (Armed) हैं या अनआर्म्ड?",
          a: "Covers365 strictly provides disciplined, unarmed civilian security guards. Our guards specialize in gate access control, visitor and vehicle register maintenance, daytime patrolling, and nighttime property vigilance.",
          aHi: "Covers365 केवल अनुशासित, अनआर्म्ड (निहत्थे) सिविलियन सुरक्षा गार्ड प्रदान करता है। हमारे गार्ड्स गेट एक्सेस कंट्रोल, विजिटर व वाहन रजिस्टर संधारण, दिन की गश्त और रात की निगरानी में प्रशिक्षित होते हैं।",
        },
        {
          q: "What geographic areas do you cover?",
          qHi: "आप किन-किन क्षेत्रों में सेवाएं प्रदान करते हैं?",
          a: "Our headquarters is located at Narela Jod, Ayodhya Bypass, Bhopal. We provide security guards and manpower supply across Bhopal, Mandideep, Govindpura, and broader Madhya Pradesh commercial hubs.",
          aHi: "हमारा मुख्य कार्यालय नरेला जोड़, अयोध्या बायपास, भोपाल में स्थित है। हम भोपाल, मंडीदीप, गोविंदपुरा और मध्य प्रदेश के अन्य प्रमुख क्षेत्रों में सेवाएं प्रदान करते हैं।",
        },
        {
          q: "What is the Written Duty Rules Agreement?",
          qHi: "लिखित कर्तव्य नियम अनुबंध (Written Duty Rules) क्या है?",
          a: "To eliminate verbal ambiguity, every guard deployed is issued a written Duty Rules Agreement available in both Hindi and English. It clearly defines reporting time (15 mins prior to shift), uniform neatness, visitor register discipline, courteous behavior, and emergency reporting.",
          aHi: "मौखिक अस्पष्टता को समाप्त करने के लिए, हर गार्ड को हिंदी और अंग्रेजी में लिखित कर्तव्य नियम दिए जाते हैं। इसमें समय की पाबंदी, साफ वर्दी, रजिस्टर संधारण, विनम्र आचरण और आपातकालीन सूचना के स्पष्ट नियम होते हैं।",
        },
      ],
    },
    {
      id: "shifts",
      title: "Shift Operations & Replacements",
      hindiTitle: "शिफ्ट व्यवस्था एवं रिप्लेसमेंट",
      icon: Clock,
      items: [
        {
          q: "What shift models are available for societies and offices?",
          qHi: "हाउसिंग सोसायटी और दफ्तरों के लिए कौन से शिफ्ट विकल्प उपलब्ध हैं?",
          a: "We offer 12-hour shifts (Day and Night rotation for 24/7 continuous gate protection) and 8-hour shifts (standard single, double, or triple rotation) according to your gate timings and operational budget.",
          aHi: "हम 12 घंटे की शिफ्ट (24/7 गेट सुरक्षा हेतु दिन व रात रोटेशन) और 8 घंटे की शिफ्ट (सिंगल, डबल या 3-शिफ्ट रोटेशन) आपकी आवश्यकता और बजट के अनुसार उपलब्ध कराते हैं।",
        },
        {
          q: "What happens if a guard falls sick or is absent?",
          qHi: "यदि कोई गार्ड बीमार पड़ जाए या अनुपस्थित रहे तो क्या होता है?",
          a: "We maintain reserve personnel for roster contingencies. When informed of an absence, our operational team arranges shift relief so that your gate remains attended without disruption.",
          aHi: "हम रोस्टर बैकअप के लिए अतिरिक्त स्टाफ रखते हैं। अनुपस्थिति की सूचना मिलते ही हमारी टीम तुरंत राहत गार्ड की व्यवस्था करती है ताकि आपका गेट खाली न रहे।",
        },
        {
          q: "Can a client request a guard replacement if not satisfied?",
          qHi: "यदि हम किसी गार्ड के कार्य से संतुष्ट न हों, तो क्या उसे बदला जा सकता है?",
          a: "Yes. You have direct phone access to our founders (Vishvapal Mittal & Nikhil Singhal). If any guard does not adhere to your post orders or written duty rules, we will review the matter and arrange a suitable replacement.",
          aHi: "हाँ। आपका सीधा संपर्क हमारे संस्थापकों (विश्वपाल मित्तल और निखिल सिंघल) से रहता है। यदि कोई गार्ड निर्धारित नियमों का पालन नहीं करता है, तो समीक्षा कर उपयुक्त रिप्लेसमेंट प्रदान किया जाता है।",
        },
      ],
    },
    {
      id: "industrial",
      title: "Industrial & Manpower Duties",
      hindiTitle: "औद्योगिक सुरक्षा एवं मैनपावर",
      icon: Building2,
      items: [
        {
          q: "How do industrial guards manage raw material gatepasses?",
          qHi: "फैक्ट्री में कच्चा माल और गेटपास कैसे प्रबंधित किए जाते हैं?",
          a: "Our industrial guards verify inward/outward delivery challans, examine gatepasses against authorized signatures, inspect vehicle cargo bays, and log driver details before raising the barrier.",
          aHi: "हमारे औद्योगिक गार्ड माल इनवर्ड/आउटवर्ड चालान की जांच करते हैं, अधिकृत हस्ताक्षरों से गेटपास का मिलान करते हैं और वाहन चालक का विवरण रजिस्टर में दर्ज करने के बाद ही अनुमति देते हैं।",
        },
        {
          q: "What support roles are covered under Manpower Supply?",
          qHi: "मैनपावर सप्लाई के अंतर्गत कौन-कौन से पद शामिल हैं?",
          a: "We supply non-technical dependable staff including office boys, warehouse loading/dispatch helpers, facility housekeeping attendants, and general helpers for commercial establishments.",
          aHi: "हम ऑफिस बॉय, वेयरहाउस हेल्पर, लोडिंग/अनलोडिंग सहायक, साफ-सफाई कर्मी और सामान्य सपोर्ट स्टाफ उपलब्ध कराते हैं।",
        },
      ],
    },
    {
      id: "billing",
      title: "Pricing, Quotes & Agreements",
      hindiTitle: "कोटेशन, शुल्क एवं अनुबंध",
      icon: FileText,
      items: [
        {
          q: "How is a security or manpower quote calculated?",
          qHi: "सुरक्षा या मैनपावर कोटेशन की गणना कैसे की जाती है?",
          a: "Pricing is transparently calculated based on the total number of guards required, shift duration (8 hours vs 12 hours), day/night rotation, and specific site duties. Submitting a quote request is completely free with no obligation.",
          aHi: "कोटेशन पारदर्शी रूप से आवश्यक गार्ड्स की संख्या, शिफ्ट की अवधि (8 घंटे या 12 घंटे) और परिसर की ज़िम्मेदारियों के आधार पर तय होता है। कोटेशन का अनुरोध पूर्णतः निःशुल्क है।",
        },
        {
          q: "How do we get started with Covers365?",
          qHi: "हम Covers365 के साथ शुरुआत कैसे कर सकते हैं?",
          a: "Simply call us at 8718830175 or fill out the Quote Request form. We will schedule a site consultation, discuss your gate dynamics, provide a clear proposal, and agree on written Duty Rules before posting personnel.",
          aHi: "सीधे 8718830175 पर कॉल करें या कोटेशन फॉर्म भरें। हम साइट का मुआयना करेंगे, आपकी आवश्यकताओं पर चर्चा करेंगे और लिखित नियमों के साथ टीम तैनात करेंगे।",
        },
      ],
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="bg-brand-navy min-h-screen text-slate-100 flex flex-col">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-20 border-b border-brand-navy-border/60 bg-brand-navy-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{isHindi ? "पारदर्शी जानकारी" : "Operational Transparency"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isHindi ? "अक्सर पूछे जाने वाले प्रश्न (FAQs)" : "Frequently Asked Questions"}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isHindi
              ? "सुरक्षा, शिफ्ट व्यवस्था, लिखित नियमों और कोटेशन प्रक्रिया के संबंध में आपके प्रश्नों के स्पष्ट और ईमानदार उत्तर।"
              : "Direct, realistic answers about our unarmed security personnel, shift coverage, written duty rules, and commercial terms."}
          </p>
        </div>
      </section>

      {/* 2. FAQS BY CATEGORY */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-brand-navy-border/60">
                  <Icon className="w-5 h-5 text-brand-orange" />
                  <h2 className="text-lg sm:text-xl font-heading font-bold text-white">
                    {isHindi ? cat.hindiTitle : cat.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {cat.items.map((item, idx) => {
                    const itemId = `${cat.id}-${idx}`;
                    const isOpen = openIndex === itemId;

                    return (
                      <div
                        key={idx}
                        className="rounded-xl bg-brand-navy-card border border-brand-navy-border overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => toggleAccordion(itemId)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                        >
                          <span className="text-sm sm:text-base font-heading font-semibold text-white">
                            {isHindi ? item.qHi : item.q}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-brand-orange shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-brand-navy-border/40">
                            {isHindi ? item.aHi : item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. STILL HAVE QUESTIONS? DIRECT CALL CTA */}
      <section className="py-16 bg-gradient-to-b from-brand-navy-deep to-brand-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            {isHindi ? "कोई और सवाल है? सीधे हमसे बात करें" : "Have a Specific Question About Your Property?"}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isHindi
              ? "हमारे संस्थापक विश्वपाल मित्तल और निखिल सिंघल सीधे उपलब्ध हैं।"
              : "Our founders are directly reachable to discuss your post orders, gate timings, and budget."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.contacts[0].telLink}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call Vishvapal Mittal: {siteConfig.contacts[0].phone}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light border border-brand-navy-border text-slate-200 text-sm font-semibold transition-all"
            >
              <FileText className="w-4 h-4 text-brand-orange" />
              <span>Request Quote Online</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. NEXT CHAPTER */}
      <NextChapter
        heading="Ready to explore our solutions?"
        hindiHeading="हमारे समाधानों के बारे में और जानें"
        subheading="Review our core services or read how our 5-step deployment works on-ground."
        primaryCard={{
          title: "Explore Our 4 Services",
          hindiTitle: "हमारी 4 मुख्य सेवाएं",
          hook: "Unarmed static guarding, manpower supply, industrial gate security, and events.",
          hindiHook: "अनआर्म्ड सुरक्षा गार्ड, मैनपावर सप्लाई, औद्योगिक गेट सुरक्षा और आयोजन।",
          href: "/services",
          badge: "Services Matrix",
        }}
        secondaryCard={{
          title: "How We Work (5-Step SOP)",
          hindiTitle: "कार्य प्रणाली: 5-चरणीय प्रक्रिया",
          hook: "From site check to written Duty Rules in English & Hindi, explore our methodology.",
          hindiHook: "साइट मुआयने से लेकर द्विभाषी लिखित नियमों तक, हमारी कार्यप्रणाली जानें।",
          href: "/how-we-work",
          badge: "Operational SOP",
        }}
      />
    </div>
  );
}
