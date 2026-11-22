import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, ServiceItem } from "@/config/siteConfig";
import { ServiceIconRenderer } from "@/components/brand/ServiceIcons";
import { NextChapter } from "@/components/common/NextChapter";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Building, 
  FileText, 
  Phone,
  HelpCircle,
  ClipboardList
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = siteConfig.services.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Covers365 Security Bhopal`,
    description: `${service.shortDesc} Reliable unarmed personnel in Bhopal and Madhya Pradesh.`,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} in Bhopal`,
      `${service.title.toLowerCase()} Madhya Pradesh`,
      "Covers365 security services",
      "unarmed security guard agency Bhopal",
    ],
  };
}

// Service-specific Mini FAQs
const serviceFaqs: Record<string, { q: string; a: string }[]> = {
  "security-guard-services": [
    {
      q: "What shift options are available for security guards?",
      a: "We offer 8-hour shifts (standard single, double, or triple 24/7 coverage) and 12-hour shifts (day and night rotation) depending on your gate timings and visitor volume.",
    },
    {
      q: "Are the guards armed or unarmed?",
      a: "All Covers365 security guards are disciplined, civilian unarmed personnel specialized in access control, visitor register management, and property vigilance.",
    },
    {
      q: "How do you ensure guards remain alert during night shifts?",
      a: "Every guard operates under written Duty Rules specifying clock-in verification, periodic perimeter check rounds, gate lock verification, and direct founder supervision.",
    },
  ],
  "manpower-supply": [
    {
      q: "What roles can Covers365 manpower staff fulfill?",
      a: "We supply non-technical commercial support staff including office boys, warehouse helpers, facility cleaners, material loaders, and general workplace attendants.",
    },
    {
      q: "How quickly can manpower be deployed in Bhopal?",
      a: "Following requirement assessment and candidate briefing, support staff are typically deployed within 3 to 5 working days depending on the required headcount.",
    },
    {
      q: "What are the payment and attendance terms?",
      a: "Attendance is recorded daily via verified physical or digital muster rolls, with monthly billing structured transparently according to agreed commercial terms.",
    },
  ],
  "industrial-security": [
    {
      q: "How do industrial guards handle raw material movement?",
      a: "Guards are trained to verify inward/outward gatepasses, record delivery challans, assist with weighbridge checks, and inspect commercial vehicle cargo seals.",
    },
    {
      q: "Do you cover industrial areas like Mandideep and Govindpura?",
      a: "Yes, our industrial security operations cover manufacturing plants, processing facilities, and warehouses throughout Bhopal, Mandideep, Govindpura, and adjacent MP hubs.",
    },
    {
      q: "Are guards trained in basic emergency alerting?",
      a: "Yes, industrial personnel receive site briefing on the location of fire safety equipment, main electrical breakers, and emergency contact phone trees.",
    },
  ],
  "event-security": [
    {
      q: "What scale of events does Covers365 support?",
      a: "We manage security and crowd control for corporate seminars, college exhibitions, community cultural functions, private ceremonies, and commercial gatherings.",
    },
    {
      q: "Do event staff manage ticket checking and parking?",
      a: "Yes, our personnel can be assigned to main entrance queue management, invitation/ticket validation, and parking lane guidance to prevent entry congestion.",
    },
    {
      q: "Do you supply bouncers or VIP bodyguards?",
      a: "No. Covers365 strictly provides disciplined, unarmed civilian event staff focused on orderly crowd management, polite entry verification, and peaceful gathering coordination.",
    },
  ],
};

export default function ServiceDetailPage({ params }: Props) {
  const service = siteConfig.services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const faqs = serviceFaqs[service.slug] || serviceFaqs["security-guard-services"];
  const otherServices = siteConfig.services.filter((s) => s.slug !== service.slug);
  const nextService = otherServices[0];
  const secondaryService = otherServices[1];

  return (
    <div className="bg-brand-navy min-h-screen text-slate-100 flex flex-col">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-brand-navy-border/60 bg-brand-navy-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <ServiceIconRenderer name={service.iconName} className="w-4 h-4" />
            <span>Covers365 Capability</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm shadow-lg hover:shadow-orange-glow transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Request Quote For This Service</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.contacts[0].telLink}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy-card hover:bg-brand-navy-light border border-brand-navy-border text-slate-200 font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call: {siteConfig.contacts[0].phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHAT'S INCLUDED & WHO IT'S FOR */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Scope / What's Included (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-1">
                  Scope of Work
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  What's Included in {service.title}
                </h2>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {service.longDesc}
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Detailed Operational Checklist:
                </h3>
                <ul className="space-y-3">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-brand-navy-card/80 border border-brand-navy-border text-sm text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who It's For & Shift Models (Col 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Who It's For */}
              <div className="p-6 rounded-2xl bg-brand-navy-card border border-brand-navy-border space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  <Building className="w-4 h-4 text-brand-orange" />
                  <span>Who This Service Is For</span>
                </div>
                <p className="text-xs text-slate-400">
                  Tailored specifically for the following commercial and institutional setups in Madhya Pradesh:
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.bestFor.map((b, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-lg bg-brand-navy border border-brand-navy-border text-slate-200 font-medium"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shift Options */}
              <div className="p-6 rounded-2xl bg-brand-navy-card border border-brand-navy-border space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  <Clock className="w-4 h-4" />
                  <span>Available Shift Structures</span>
                </div>
                <div className="space-y-2">
                  {service.shifts.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-brand-navy border border-brand-navy-border text-xs text-slate-200 font-medium"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Written Rules Notice */}
              <div className="p-5 rounded-2xl bg-brand-orange/5 border border-brand-orange/20 text-xs text-slate-300 space-y-1.5">
                <p className="font-semibold text-brand-orange">
                  Written Duty Rules Agreement
                </p>
                <p className="leading-relaxed">
                  Every staff member deployed under this service is provided with a signed Duty Rules Agreement in English & Hindi, specifying punctuality, neat uniform, register maintenance, and emergency contacts.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. HOW DEPLOYMENT WORKS */}
      <section className="py-16 bg-brand-navy-deep border-b border-brand-navy-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
              Deployment Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              How Deployment Works for {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-brand-navy-card border border-brand-navy-border space-y-2">
              <span className="text-xs font-mono text-brand-orange font-bold">Step 01</span>
              <h3 className="text-sm font-bold text-white">Site & Gate Review</h3>
              <p className="text-xs text-slate-400">
                We review gate count, visitor flow, shift timing, and specific site risks.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-navy-card border border-brand-navy-border space-y-2">
              <span className="text-xs font-mono text-brand-orange font-bold">Step 02</span>
              <h3 className="text-sm font-bold text-white">Selection & Briefing</h3>
              <p className="text-xs text-slate-400">
                Disciplined staff selected and briefed on your written Duty Rules.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-navy-card border border-brand-navy-border space-y-2">
              <span className="text-xs font-mono text-brand-orange font-bold">Step 03</span>
              <h3 className="text-sm font-bold text-white">Stationing & Registers</h3>
              <p className="text-xs text-slate-400">
                Guards positioned in clean uniform with established register protocols.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-navy-card border border-brand-navy-border space-y-2">
              <span className="text-xs font-mono text-brand-orange font-bold">Step 04</span>
              <h3 className="text-sm font-bold text-white">Founder Supervision</h3>
              <p className="text-xs text-slate-400">
                Direct founder phone contact for shift adjustments and immediate support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE-SPECIFIC MINI FAQS */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-2">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Frequently Asked About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-brand-navy-card border border-brand-navy-border space-y-2"
              >
                <h3 className="text-base font-heading font-bold text-white flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-300 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/faqs"
              className="text-xs font-semibold text-brand-orange hover:underline inline-flex items-center gap-1"
            >
              <span>View all company & operational FAQs →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-16 bg-gradient-to-b from-brand-navy-deep to-brand-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
            Need {service.title} for your site in Madhya Pradesh?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Tell us about your gate, shift, and guard headcount requirements. We will prepare a transparent quote.
          </p>
          <div>
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-xl hover:shadow-orange-glow transition-all"
            >
              <FileText className="w-5 h-5" />
              <span>Get a Customized Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. NEXT CHAPTER */}
      <NextChapter
        heading="Explore Other Solutions"
        subheading="Learn more about our adjacent staffing and security capabilities."
        primaryCard={{
          title: nextService.title,
          hindiTitle: nextService.hindiTitle,
          hook: nextService.shortDesc,
          hindiHook: nextService.hindiShortDesc,
          href: `/services/${nextService.slug}`,
          badge: "Alternative Service",
        }}
        secondaryCard={{
          title: secondaryService.title,
          hindiTitle: secondaryService.hindiTitle,
          hook: secondaryService.shortDesc,
          hindiHook: secondaryService.hindiShortDesc,
          href: `/services/${secondaryService.slug}`,
          badge: "Alternative Service",
        }}
      />
    </div>
  );
}
