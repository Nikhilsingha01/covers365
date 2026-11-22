"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface CuriosityCardProps {
  title: string;
  hindiTitle: string;
  hook: string;
  hindiHook: string;
  href: string;
  badge?: string;
  hindiBadge?: string;
}

interface NextChapterProps {
  heading?: string;
  hindiHeading?: string;
  subheading?: string;
  hindiSubheading?: string;
  primaryCard: CuriosityCardProps;
  secondaryCard: CuriosityCardProps;
}

export const NextChapter: React.FC<NextChapterProps> = ({
  heading = "Continue Exploring Covers365",
  hindiHeading = "Covers365 को और करीब से जानें",
  subheading = "Discover how our operational standards protect premises and personnel across Madhya Pradesh.",
  hindiSubheading = "जानें कि हमारी कार्य प्रणाली मध्य प्रदेश में परिसरों और लोगों की सुरक्षा कैसे सुनिश्चित करती है।",
  primaryCard,
  secondaryCard,
}) => {
  const { isHindi } = useLanguage();

  return (
    <section className="bg-brand-navy-deep py-16 border-t border-brand-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isHindi ? "अगला चरण / अन्वेषण" : "What To Read Next"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
            {isHindi ? hindiHeading : heading}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {isHindi ? hindiSubheading : subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Primary Exploration Card */}
          <Link
            href={primaryCard.href}
            className="group relative bg-brand-navy-card hover:bg-brand-navy-light/90 border border-brand-navy-border hover:border-brand-orange/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
            
            <div>
              {primaryCard.badge && (
                <span className="inline-block text-[11px] font-semibold tracking-wider text-brand-orange uppercase mb-3 px-2 py-0.5 rounded bg-brand-orange/10 border border-brand-orange/20">
                  {isHindi ? primaryCard.hindiBadge || primaryCard.badge : primaryCard.badge}
                </span>
              )}
              <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-orange transition-colors">
                {isHindi ? primaryCard.hindiTitle : primaryCard.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {isHindi ? primaryCard.hindiHook : primaryCard.hook}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-navy-border/60 flex items-center gap-2 text-sm font-semibold text-brand-orange group-hover:translate-x-1 transition-transform">
              <span>{isHindi ? "आगे पढ़ें" : "Explore Next"}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Secondary Exploration Card */}
          <Link
            href={secondaryCard.href}
            className="group relative bg-brand-navy-card hover:bg-brand-navy-light/90 border border-brand-navy-border hover:border-brand-orange/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

            <div>
              {secondaryCard.badge && (
                <span className="inline-block text-[11px] font-semibold tracking-wider text-brand-orange uppercase mb-3 px-2 py-0.5 rounded bg-brand-orange/10 border border-brand-orange/20">
                  {isHindi ? secondaryCard.hindiBadge || secondaryCard.badge : secondaryCard.badge}
                </span>
              )}
              <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-orange transition-colors">
                {isHindi ? secondaryCard.hindiTitle : secondaryCard.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {isHindi ? secondaryCard.hindiHook : secondaryCard.hook}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-navy-border/60 flex items-center gap-2 text-sm font-semibold text-brand-orange group-hover:translate-x-1 transition-transform">
              <span>{isHindi ? "आगे पढ़ें" : "Explore Next"}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
