"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { ServiceIconRenderer } from "@/components/brand/ServiceIcons";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  FileText, 
  Languages, 
  ArrowRight,
  ShieldAlert,
  Building2,
  CalendarCheck
} from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, isHindi } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home", labelHi: "होम" },
    { href: "/about", label: "About Us", labelHi: "हमारे बारे में" },
    { 
      href: "/services", 
      label: "Services", 
      labelHi: "सेवाएं", 
      hasDropdown: true 
    },
    { href: "/industries", label: "Industries", labelHi: "क्षेत्र / इंडस्ट्रीज" },
    { href: "/how-we-work", label: "How We Work", labelHi: "कार्य प्रणाली" },
    { href: "/careers", label: "Careers", labelHi: "कैरियर / भर्ती" },
    { href: "/contact", label: "Contact", labelHi: "संपर्क" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy-deep/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-brand-navy-border/60 py-3"
            : "bg-brand-navy border-b border-brand-navy-border/30 py-4"
        }`}
      >
        {/* Top Emergency / Direct Line Notice Strip (Desktop only) */}
        <div className="hidden lg:block border-b border-white/5 pb-2.5 mb-2.5 text-xs text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isHindi ? "भोपाल और मध्य प्रदेश में सक्रिय सेवाएं" : "Active Coverage Across Bhopal & Madhya Pradesh"}</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="text-slate-300">
                {isHindi ? "मुख्यालय:" : "HQ:"} {siteConfig.address.street}, {siteConfig.address.city}
              </span>
            </div>

            <div className="flex items-center gap-5 font-medium">
              <a
                href={siteConfig.contacts[0].telLink}
                className="hover:text-brand-orange transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>{siteConfig.contacts[0].name}: {siteConfig.contacts[0].phoneFormatted}</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={siteConfig.contacts[1].telLink}
                className="hover:text-brand-orange transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>{siteConfig.contacts[1].name}: {siteConfig.contacts[1].phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <Logo variant="header" theme="dark" />

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-brand-orange font-semibold"
                          : "text-slate-200 hover:text-brand-orange hover:bg-white/5"
                      }`}
                    >
                      <span>{isHindi ? link.labelHi : link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-brand-orange" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Mega-Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[420px] pt-2 z-50">
                        <div className="bg-brand-navy-card border border-brand-navy-border rounded-xl shadow-2xl p-3 grid gap-2">
                          {siteConfig.services.map((srv) => (
                            <Link
                              key={srv.slug}
                              href={`/services/${srv.slug}`}
                              className="group flex items-start gap-3.5 p-2.5 rounded-lg hover:bg-brand-navy-light/60 transition-colors"
                            >
                              <div className="w-9 h-9 rounded-lg bg-brand-navy/80 border border-brand-navy-border flex items-center justify-center shrink-0 text-brand-orange group-hover:scale-105 group-hover:border-brand-orange/40 transition-all">
                                <ServiceIconRenderer name={srv.iconName} className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">
                                  {isHindi ? srv.hindiTitle : srv.title}
                                </h4>
                                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                  {isHindi ? srv.hindiShortDesc : srv.shortDesc}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <div className="pt-2 mt-1 border-t border-brand-navy-border/60 flex items-center justify-between px-2 text-xs">
                            <Link
                              href="/services"
                              className="text-brand-orange hover:underline font-medium flex items-center gap-1"
                            >
                              <span>{isHindi ? "सभी सेवाएं देखें" : "View All 4 Services Matrix"}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <span className="text-slate-400">{isHindi ? "केवल अनआर्म्ड गार्ड्स" : "Unarmed Only"}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-orange font-semibold"
                      : "text-slate-200 hover:text-brand-orange hover:bg-white/5"
                  }`}
                >
                  {isHindi ? link.labelHi : link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster (Language Toggle + Quote CTA) */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-brand-navy-border bg-brand-navy-card hover:bg-brand-navy-light text-xs font-medium text-slate-200 transition-colors"
              title="Toggle English / Hindi"
            >
              <Languages className="w-3.5 h-3.5 text-brand-orange" />
              <span>{language === "en" ? "हिन्दी" : "English"}</span>
            </button>

            {/* Quote Primary CTA (Desktop) */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-orange-glow transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              <span>{isHindi ? "कोटेशन प्राप्त करें" : "Get a Free Quote"}</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-navy-deep border-b border-brand-navy-border mt-3 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-brand-navy-border/50">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                {isHindi ? "नेविगेशन मेनू" : "Menu Navigation"}
              </span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-xs text-brand-orange bg-brand-navy-card px-2.5 py-1 rounded border border-brand-navy-border"
              >
                <Languages className="w-3.5 h-3.5" />
                <span>{language === "en" ? "हिन्दी में पढ़ें" : "Read in English"}</span>
              </button>
            </div>

            <div className="grid gap-1 py-3">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-brand-orange hover:bg-white/5"
                  >
                    {isHindi ? link.labelHi : link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-brand-orange/40 ml-3 my-1">
                      {siteConfig.services.map((srv) => (
                        <Link
                          key={srv.slug}
                          href={`/services/${srv.slug}`}
                          className="flex items-center gap-2.5 py-1.5 text-sm text-slate-300 hover:text-brand-orange"
                        >
                          <ServiceIconRenderer name={srv.iconName} className="w-4 h-4 text-brand-orange shrink-0" />
                          <span>{isHindi ? srv.hindiTitle : srv.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/faqs"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-brand-orange hover:bg-white/5"
              >
                {isHindi ? "सामान्य प्रश्न (FAQs)" : "FAQs"}
              </Link>
            </div>

            {/* Direct Call & Address in Mobile Menu */}
            <div className="pt-4 border-t border-brand-navy-border/60 space-y-3">
              <div className="text-xs text-slate-400">
                <p className="font-semibold text-slate-200">
                  {siteConfig.address.street}, {siteConfig.address.city}
                </p>
                <p className="mt-0.5">{siteConfig.emails.primary}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={siteConfig.contacts[0].telLink}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-brand-navy-card border border-brand-navy-border text-xs font-medium text-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{siteConfig.contacts[0].name.split(" ")[0]}</span>
                </a>
                <a
                  href={siteConfig.contacts[1].telLink}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-brand-navy-card border border-brand-navy-border text-xs font-medium text-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{siteConfig.contacts[1].name.split(" ")[0]}</span>
                </a>
              </div>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-orange text-white text-sm font-semibold tracking-wide text-center"
              >
                <FileText className="w-4 h-4" />
                <span>{isHindi ? "कोटेशन के लिए फॉर्म भरें" : "Request Free Quote"}</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
