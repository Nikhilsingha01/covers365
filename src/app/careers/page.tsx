"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { NextChapter } from "@/components/common/NextChapter";
import { 
  Users, 
  CheckCircle2, 
  Send, 
  Phone, 
  Briefcase, 
  ShieldCheck, 
  Clock, 
  HeartHandshake,
  AlertCircle
} from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/MobileStickyBar";

export default function CareersPage() {
  const { isHindi } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Bhopal",
    age: "",
    experience: "No prior experience (Fresher)",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || (isHindi ? "आवेदन भेजने में त्रुटि हुई। कृपया सीधे कॉल करें।" : "Failed to submit. Please call directly."));
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(isHindi ? "नेटवर्क त्रुटि हुई। कृपया सीधे 8718830175 पर कॉल करें।" : "Network error. Please call directly at 8718830175.");
    }
  };

  const whatsappMessage = `${isHindi ? "नमस्ते Covers365, मैं नौकरी हेतु आवेदन करना चाहता हूँ:" : "Hello Covers365, I want to apply for a job:"}
- Name: ${formData.name || "[Name]"}
- Phone: ${formData.phone || "[Phone]"}
- City: ${formData.city}
- Age: ${formData.age || "N/A"}
- Experience: ${formData.experience}
- Details: ${formData.message || "N/A"}`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-brand-navy min-h-screen text-slate-100 flex flex-col">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-20 border-b border-brand-navy-border/60 bg-brand-navy-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>{isHindi ? "कैरियर एवं भर्ती" : "Join Our Guard Force"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isHindi
              ? "हमारी सुरक्षा टीम से जुड़ें"
              : "Build Your Career With Covers365"}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isHindi
              ? "हम अनुशासित, ईमानदार और समय के पाबंद सुरक्षा गार्ड और सुपरवाइजरों का स्वागत करते हैं। हमारे गार्ड ही हमारी प्रतिष्ठा हैं, और हम उनके साथ सम्मानपूर्वक व निष्पक्ष व्यवहार करते हैं।"
              : "Our guards are our reputation. We expect discipline, and we provide respectful work culture, written duty rules, and transparent operations across Bhopal and Madhya Pradesh."}
          </p>
        </div>
      </section>

      {/* 2. MAIN APPLICATION WORKSPACE */}
      <section className="py-16 bg-brand-navy border-b border-brand-navy-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Why Join Covers365 & Eligibility Placeholder (Col 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-1">
                  {isHindi ? "हमारे मूल्य" : "Work Culture"}
                </span>
                <h2 className="text-2xl font-heading font-bold text-white">
                  {isHindi ? "हम अपने लोगों के साथ कैसे खड़े रहते हैं" : "Respect For Our People"}
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-brand-navy-card border border-brand-navy-border flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isHindi ? "सम्मानजनक कार्य संस्कृति" : "Dignified Work Environment"}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {isHindi
                        ? "हम अपने सुरक्षा कर्मियों को सम्मान के साथ देखते हैं और उनके आचरण को सराहते हैं।"
                        : "We treat every guard with courtesy and ensure our clients uphold the same standard of dignity."}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-brand-navy-card border border-brand-navy-border flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isHindi ? "स्पष्ट लिखित कर्तव्य नियम" : "Clear Written Guidelines"}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {isHindi
                        ? "हर गार्ड को उसकी पोस्ट के नियम हिंदी में लिखित मिलते हैं, जिससे कोई भ्रम नहीं रहता।"
                        : "Written Duty Rules provided in Hindi & English so you know exactly what is expected on duty."}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-brand-navy-card border border-brand-navy-border flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isHindi ? "नियमित शिफ्ट एवं रोटेशन" : "Structured Shift Hours"}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {isHindi
                        ? "पारदर्शी 8 घंटे एवं 12 घंटे की शिफ्ट व्यवस्था।"
                        : "Transparent 8-hour and 12-hour shift arrangements with clear attendance records."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Confirmed Eligibility Criteria */}
              <div className="p-5 rounded-xl bg-brand-navy-card/80 border border-brand-orange/40 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-orange uppercase">
                  <Briefcase className="w-4 h-4" />
                  <span>{isHindi ? "पात्रता मानदंड (Eligibility Criteria)" : "Eligibility Criteria"}</span>
                </div>
                <div className="text-xs text-slate-200 space-y-2">
                  <div className="p-2.5 rounded-lg bg-brand-orange/10 border border-brand-orange/30 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    <span>{isHindi ? "आयु सीमा: 18 वर्ष या उससे अधिक (18+)" : "Age Requirement: Must be 18 years or older (18+)"}</span>
                  </div>
                  <div className="pt-1 text-slate-300">
                    <p className="font-semibold text-white mb-1">{isHindi ? "अनिवार्य बुनियादी शर्तें:" : "Basic Requirements:"}</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      <li>{isHindi ? "आयु 18+ वर्ष अनिवार्य" : "Must be above 18+ years of age"}</li>
                      <li>{isHindi ? "समय की पाबंदी और अनुशासन" : "Punctuality & workplace discipline"}</li>
                      <li>{isHindi ? "ड्यूटी पर शराब या नशीले पदार्थों से पूर्ण परहेज" : "Zero tolerance for intoxication on duty"}</li>
                      <li>{isHindi ? "आगंतुकों व रहवासियों से विनम्र बातचीत" : "Polite and respectful conduct"}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Direct recruitment phone line */}
              <div className="p-4 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-xs text-slate-200">
                <span className="font-semibold text-brand-orange block mb-1">
                  {isHindi ? "भर्ती संबंधी पूछताछ हेतु सीधा कॉल करें:" : "Direct Recruitment Helpline:"}
                </span>
                <p>
                  {isHindi ? "विश्वपाल मित्तल:" : "Vishvapal Mittal:"}{" "}
                  <a href="tel:+918718830175" className="font-bold text-white underline">
                    8718830175
                  </a>
                </p>
              </div>

            </div>

            {/* Right Column: Mobile-Friendly Application Form (Col 6-12) */}
            <div className="lg:col-span-7 bg-brand-navy-card border border-brand-navy-border rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                  {isHindi ? "नौकरी हेतु आवेदन पत्र" : "Application Form for Guards & Supervisors"}
                </h2>
                <p className="text-xs text-slate-400">
                  {isHindi
                    ? "कृपया नीचे दिए गए सरल फॉर्म को भरें। हम आपके विवरण की समीक्षा कर आपसे संपर्क करेंगे।"
                    : "Fill out the simple form below. Submissions are emailed to covers365services@gmail.com."}
                </p>
              </div>

              {status === "success" ? (
                <div className="mt-6 p-6 rounded-xl bg-emerald-950/40 border border-emerald-600/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {isHindi ? "आवेदन सफलता पूर्वक प्राप्त हुआ!" : "Application Received Successfully!"}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                      {isHindi
                        ? "धन्यवाद! आपका आवेदन हमारे कार्यालय covers365services@gmail.com पर भेज दिया गया है। जब आपकी प्रोफाइल के अनुकूल रिक्ति होगी, हमारी टीम आपको कॉल करेगी।"
                        : "Thank you! Your details have been sent to covers365services@gmail.com. We will call you if your profile matches an opening."}
                    </p>
                  </div>

                  {/* Immediate WhatsApp Connect Button */}
                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>{isHindi ? "व्हाट्सएप पर भी आवेदन का संदेश भेजें" : "Also send application summary on WhatsApp"}</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        phone: "",
                        city: "Bhopal",
                        age: "",
                        experience: "No prior experience (Fresher)",
                        message: "",
                        honeypot: "",
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline pt-2 block mx-auto"
                  >
                    {isHindi ? "दूसरा आवेदन भरें" : "Submit another application"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  
                  {/* Honeypot field (hidden from real users to prevent spam) */}
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
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-600/40 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      {isHindi ? "पूरा नाम *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={isHindi ? "उदा. रमेश कुमार" : "e.g. Ramesh Kumar"}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  {/* Phone & Age */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        {isHindi ? "मोबाइल नंबर *" : "Mobile Phone Number *"}
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

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        {isHindi ? "उम्र (Age)" : "Age (Years)"}
                      </label>
                      <input
                        type="number"
                        name="age"
                        placeholder="e.g. 26"
                        min="18"
                        max="65"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                      />
                    </div>
                  </div>

                  {/* City & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        {isHindi ? "शहर / क्षेत्र" : "City / Location in MP"}
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder={isHindi ? "उदा. भोपाल / मंडीदीप" : "Bhopal / Mandideep / etc."}
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        {isHindi ? "कार्य अनुभव" : "Security Work Experience"}
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                      >
                        <option value="No prior experience (Fresher)">
                          {isHindi ? "कोई पूर्व अनुभव नहीं (नया / फ्रेशर)" : "No prior experience (Fresher)"}
                        </option>
                        <option value="Less than 1 year">
                          {isHindi ? "1 वर्ष से कम" : "Less than 1 year"}
                        </option>
                        <option value="1 to 3 years">
                          {isHindi ? "1 से 3 वर्ष" : "1 to 3 years"}
                        </option>
                        <option value="More than 3 years">
                          {isHindi ? "3 वर्ष से अधिक" : "More than 3 years"}
                        </option>
                        <option value="Supervisor Experience">
                          {isHindi ? "सुपरवाइजर का अनुभव" : "Supervisor Experience"}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Previous Work */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      {isHindi ? "पिछला कार्य या कोई संदेश (वैकल्पिक)" : "Previous Work / Short Message (Optional)"}
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder={isHindi ? "उदा. पहले हाउसिंग सोसायटी में 1 साल काम किया है..." : "e.g. Worked at residential gate for 1 year..."}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-brand-navy border border-brand-navy-border text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3.5 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-md hover:shadow-orange-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <span>{isHindi ? "भेजा जा रहा है..." : "Submitting Application..."}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{isHindi ? "आवेदन जमा करें" : "Submit Application"}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    {isHindi
                      ? "हम इस वेबसाइट पर आधार या व्यक्तिगत दस्तावेज एकत्र नहीं करते हैं।"
                      : "We do not collect Aadhaar or ID documents through this website."}
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. NEXT CHAPTER */}
      <NextChapter
        heading="Explore our deployment standards"
        hindiHeading="हमारी मानक कार्यप्रणाली जानें"
        subheading="Learn how our team assesses gates and enforces written Duty Rules across Madhya Pradesh."
        primaryCard={{
          title: "How We Work: 5-Step Blueprint",
          hindiTitle: "कार्य प्रणाली: 5-चरणीय प्रक्रिया",
          hook: "How we review gates, assign personnel, and issue written Duty Rules in English & Hindi.",
          hindiHook: "जानें कि हम परिसर का मुआयना और लिखित कर्तव्य नियमों का आवंटन कैसे करते हैं।",
          href: "/how-we-work",
          badge: "Operational SOP",
        }}
        secondaryCard={{
          title: "About Covers365 & Leadership",
          hindiTitle: "Covers365 और नेतृत्व के बारे में",
          hook: "Meet our founders and learn about our commitment to respectful everyday security.",
          hindiHook: "हमारे संस्थापकों से मिलें और हमारी कार्यप्रणाली को समझें।",
          href: "/about",
          badge: "Leadership",
        }}
      />
    </div>
  );
}
