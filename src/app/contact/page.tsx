"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { NextChapter } from "@/components/common/NextChapter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  Building
} from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/MobileStickyBar";

function QuoteForm() {
  const { isHindi } = useLanguage();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    service: "Security Guard Services",
    guardCount: "1 - 2 Guards",
    location: "Bhopal",
    shiftType: "12-Hour Shift (Day & Night)",
    startDate: "Immediate",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Pre-fill service from URL param if available
  useEffect(() => {
    const srvParam = searchParams.get("service");
    if (srvParam) {
      const match = siteConfig.services.find((s) => s.slug === srvParam);
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.title }));
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus("error");
      setErrorMessage(isHindi ? "कृपया अपना नाम और मोबाइल नंबर दर्ज करें।" : "Please enter your name and phone number.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || (isHindi ? "अनुरोध भेजने में समस्या हुई। कृपया सीधे कॉल करें।" : "Failed to submit quote. Please call directly."));
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(isHindi ? "नेटवर्क त्रुटि हुई। कृपया सीधे कॉल करें।" : "Network error. Please call directly at 8718830175.");
    }
  };

  const whatsappMessage = `${isHindi ? "नमस्ते Covers365, मुझे सुरक्षा सेवा हेतु कोटेशन चाहिए:" : "Hello Covers365, I would like to request a quote:"}
- Name: ${formData.name || "[Name]"}
- Phone: ${formData.phone || "[Phone]"}
- Company / Site: ${formData.company || "N/A"}
- Service: ${formData.service}
- Required Guards: ${formData.guardCount}
- Location: ${formData.location}
- Shift: ${formData.shiftType}
- Start Date: ${formData.startDate}
- Details: ${formData.message || "N/A"}`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="lg:col-span-7 bg-brand-navy-card border border-brand-navy-border rounded-2xl p-6 sm:p-10 shadow-2xl">
      <div>
        <h2 className="text-2xl font-heading font-bold text-white mb-1">
          {isHindi ? "निःशुल्क कोटेशन अनुरोध फॉर्म" : "Request a Free Quotation"}
        </h2>
        <p className="text-xs text-slate-400">
          {isHindi
            ? "फॉर्म सबमिट होते ही यह covers365services@gmail.com पर प्राप्त हो जाएगा।"
            : "Submissions are instantly sent to covers365services@gmail.com."}
        </p>
      </div>

      {status === "success" ? (
        <div className="mt-8 p-8 rounded-xl bg-emerald-950/40 border border-emerald-600/40 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {isHindi ? "कोटेशन अनुरोध सफलता पूर्वक प्राप्त हुआ!" : "Quote Request Sent Successfully!"}
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
              {isHindi
                ? "धन्यवाद! आपका विवरण covers365services@gmail.com पर भेज दिया गया है। हमारी टीम शीघ्र ही आपसे संपर्क करेगी।"
                : "Thank you! Your quote request has been sent to covers365services@gmail.com. Our team will contact you shortly to discuss your post orders."}
            </p>
          </div>

          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{isHindi ? "व्हाट्सएप पर भी सारांश भेजें" : "Also send quote summary on WhatsApp"}</span>
            </a>
          </div>

          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                phone: "",
                company: "",
                service: "Security Guard Services",
                guardCount: "1 - 2 Guards",
                location: "Bhopal",
                shiftType: "12-Hour Shift (Day & Night)",
                startDate: "Immediate",
                message: "",
                honeypot: "",
              });
            }}
            className="text-xs text-slate-400 hover:text-white underline pt-4 block mx-auto"
          >
            {isHindi ? "नया अनुरोध भेजें" : "Submit another request"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {status === "error" && (
            <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-600/40 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                {isHindi ? "आपका नाम *" : "Your Name *"}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={isHindi ? "उदा. आनंद वर्मा" : "e.g. Anand Verma"}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                {isHindi ? "मोबाइल नंबर *" : "Phone Number *"}
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="10-digit number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                {isHindi ? "कंपनी / सोसायटी का नाम" : "Company / Society Name"}
              </label>
              <input
                type="text"
                name="company"
                placeholder={isHindi ? "उदा. ग्रीन पार्क रेजीडेंसी" : "e.g. Green Park Residency"}
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                {isHindi ? "स्थान / शहर (MP में)" : "Site Location / City in MP"}
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Ayodhya Bypass / Mandideep / Bhopal"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                {isHindi ? "आवश्यक सेवा" : "Service Needed"}
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
              >
                {siteConfig.services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {isHindi ? s.hindiTitle : s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                {isHindi ? "अपेक्षित गार्ड संख्या" : "Estimated Number of Guards"}
              </label>
              <select
                name="guardCount"
                value={formData.guardCount}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
              >
                <option value="1 - 2 Guards">1 - 2 Guards</option>
                <option value="3 - 5 Guards">3 - 5 Guards</option>
                <option value="6 - 10 Guards">6 - 10 Guards</option>
                <option value="11 - 20 Guards">11 - 20 Guards</option>
                <option value="More than 20 Guards">More than 20 Guards</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                {isHindi ? "शिफ्ट का प्रकार" : "Shift Type"}
              </label>
              <select
                name="shiftType"
                value={formData.shiftType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
              >
                <option value="12-Hour Shift (Day & Night)">12-Hour Shift (Day & Night)</option>
                <option value="8-Hour General Shift">8-Hour General Shift</option>
                <option value="8-Hour 3-Shift 24/7">8-Hour 3-Shift 24/7</option>
                <option value="Event Based (Temporary)">Event Based (Temporary)</option>
                <option value="Other / Customized">Other / Customized</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                {isHindi ? "प्रारंभ तिथि" : "Preferred Start Date"}
              </label>
              <select
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
              >
                <option value="Immediate (Within 1-3 Days)">{isHindi ? "तत्काल (1-3 दिनों में)" : "Immediate (Within 1-3 Days)"}</option>
                <option value="Within 1 Week">{isHindi ? "1 सप्ताह में" : "Within 1 Week"}</option>
                <option value="Within 1 Month">{isHindi ? "1 माह में" : "Within 1 Month"}</option>
                <option value="Exploring Options">{isHindi ? "अभी केवल जानकारी ले रहे हैं" : "Exploring Options"}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
              {isHindi ? "साइट विवरण या अतिरिक्त आवश्यकताएं" : "Site Details / Specific Requirements"}
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder={isHindi ? "उदा. 2 मुख्य गेट हैं, रात में विजिटर रजिस्टर संधारण अनिवार्य है..." : "e.g. 2 entry gates, need visitor logging, night boundary checks..."}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-md hover:shadow-orange-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === "submitting" ? (
                <span>{isHindi ? "कोटेशन अनुरोध भेजा जा रहा है..." : "Sending Quote Request..."}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{isHindi ? "निःशुल्क कोटेशन प्राप्त करें" : "Request Free Quote"}</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center">
            {isHindi
              ? "आपके विवरण का उपयोग केवल कोटेशन तैयार करने हेतु किया जाएगा। कोई स्पैम नहीं।"
              : "Your information is used solely to respond to your inquiry in accordance with our Privacy Policy."}
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const { isHindi } = useLanguage();

  return (
    <div className="bg-brand-navy min-h-screen text-slate-100 flex flex-col">
      <section className="relative py-16 lg:py-20 border-b border-brand-navy-border/60 bg-brand-navy-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>{isHindi ? "कोटेशन एवं संपर्क" : "Get a Quote & Reach Us"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isHindi
              ? "अपनी साइट के बारे में बताएं, हम सही टीम सुझाएंगे"
              : "Tell Us About Your Site. We Will Suggest The Right Team."}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isHindi
              ? "चाहे आपको 1 गार्ड की आवश्यकता हो या 50 की, हम भोपाल और मध्य प्रदेश में आपकी आवश्यकताओं के अनुसार पारदर्शी कोटेशन प्रस्तुत करेंगे।"
              : "Whether you need a single static gatekeeper or full factory perimeter staffing, we provide transparent recommendations with direct founder access."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <Suspense fallback={
              <div className="lg:col-span-7 bg-brand-navy-card border border-brand-navy-border rounded-2xl p-10 text-center text-slate-400">
                Loading Quote Form...
              </div>
            }>
              <QuoteForm />
            </Suspense>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-brand-navy-card border border-brand-navy-border space-y-4 shadow-xl">
                <div>
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block">
                    {isHindi ? "सीधा संस्थापक संपर्क" : "Direct Founder Lines"}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {isHindi ? "सीधे संचालकों से बात करें" : "Speak Directly With Leadership"}
                  </h3>
                </div>

                <div className="space-y-3">
                  <a
                    href={siteConfig.contacts[0].telLink}
                    className="p-3.5 rounded-xl bg-brand-navy/80 hover:bg-brand-navy-light/70 border border-brand-navy-border hover:border-brand-orange/40 transition-all flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-bold text-white">{siteConfig.contacts[0].name}</p>
                      <p className="text-xs text-brand-orange font-medium">Operational Head</p>
                      <p className="text-xs text-slate-400 mt-0.5">{siteConfig.contacts[0].phoneFormatted}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <Phone className="w-4 h-4" />
                    </div>
                  </a>

                  <a
                    href={siteConfig.contacts[1].telLink}
                    className="p-3.5 rounded-xl bg-brand-navy/80 hover:bg-brand-navy-light/70 border border-brand-navy-border hover:border-brand-orange/40 transition-all flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-bold text-white">{siteConfig.contacts[1].name}</p>
                      <p className="text-xs text-brand-orange font-medium">Management</p>
                      <p className="text-xs text-slate-400 mt-0.5">{siteConfig.contacts[1].phoneFormatted}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <Phone className="w-4 h-4" />
                    </div>
                  </a>
                </div>

                <div className="pt-2 border-t border-brand-navy-border/60">
                  <a
                    href={`mailto:${siteConfig.emails.primary}`}
                    className="text-xs text-slate-300 hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-brand-orange" />
                    <span>{siteConfig.emails.primary}</span>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-navy-card border border-brand-navy-border space-y-4 shadow-xl">
                <div>
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block">
                    {isHindi ? "मुख्यालय" : "Headquarters"}
                  </span>
                  <h3 className="text-base font-heading font-bold text-white">
                    {siteConfig.address.street}, {siteConfig.address.city}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Bhopal, Madhya Pradesh, India
                  </p>
                </div>

                <div className="relative h-48 w-full rounded-xl overflow-hidden border border-brand-navy-border/80">
                  <iframe
                    src={siteConfig.address.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Covers365 Bhopal Location Map"
                  />
                </div>

                <div>
                  <a
                    href={siteConfig.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-brand-navy hover:bg-brand-navy-light border border-brand-navy-border text-slate-200 text-xs font-semibold transition-all"
                  >
                    <MapPin className="w-4 h-4 text-brand-orange" />
                    <span>{isHindi ? "गूगल मैप्स पर दिशा-निर्देश प्राप्त करें" : "Get Directions on Google Maps"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <NextChapter
        heading="Explore more about Covers365"
        hindiHeading="Covers365 के बारे में और जानें"
        subheading="Learn how our team prepares for your post or review our operational answers."
        primaryCard={{
          title: "Frequently Asked Questions (FAQs)",
          hindiTitle: "सामान्य प्रश्न (FAQs)",
          hook: "Answers on unarmed guards, shift replacements, billing, and written duty rules.",
          hindiHook: "अनआर्म्ड गार्ड, शिफ्ट रिप्लेसमेंट, बिलिंग और लिखित नियमों पर स्पष्ट जवाब।",
          href: "/faqs",
          badge: "Help & Transparency",
        }}
        secondaryCard={{
          title: "About Our Story & Values",
          hindiTitle: "हमारी कहानी और मूल्य",
          hook: "A security guard is not just a uniform at a gate. Read our founding approach.",
          hindiHook: "सुरक्षा गार्ड केवल गेट पर खड़ी वर्दी नहीं है। हमारी सोच और कार्यप्रणाली जानें।",
          href: "/about",
          badge: "Founders",
        }}
      />
    </div>
  );
}
