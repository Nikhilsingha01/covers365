export type ServiceIconType = "shield-user" | "users" | "factory" | "calendar";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  hindiTitle: string;
  shortDesc: string;
  hindiShortDesc: string;
  longDesc: string;
  hindiLongDesc: string;
  iconName: ServiceIconType;
  scope: string[];
  hindiScope: string[];
  bestFor: string[];
  shifts: string[];
  curiosityHook: string;
}

export const siteConfig = {
  name: "COVERS365 Security & Manpower Services",
  shortName: "COVERS365",
  tagline: "Reliable People. Safer Spaces. Always.",
  taglineHindi: "विश्वसनीय लोग। सुरक्षित स्थान। हमेशा।",
  
  // Operational Headquarters
  address: {
    street: "Narela Jod, Ayodhya Bypass",
    city: "Bhopal",
    state: "Madhya Pradesh",
    country: "India",
    display: "Narela Jod, Ayodhya Bypass, Bhopal, MP",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14663.957582855146!2d77.4646199!3d23.2616999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c699961f36955%3A0xe5426189ef7db83e!2sNarela%20Jod%2C%20Ayodhya%20Bypass%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Narela+Jod,+Ayodhya+Bypass,+Bhopal,+Madhya+Pradesh",
  },

  // Direct Contact Points
  contacts: [
    {
      name: "Vishvapal Mittal",
      designation: "Operational Head", // Placeholder ready
      phone: "8718830175",
      phoneFormatted: "+91 87188 30175",
      telLink: "tel:+918718830175",
      isPrimaryWhatsApp: true,
    },
    {
      name: "Nikhil Singhal",
      designation: "Management", // Placeholder ready
      phone: "9301103485",
      phoneFormatted: "+91 93011 03485",
      telLink: "tel:+919301103485",
      isPrimaryWhatsApp: false,
    },
  ],

  // Form Dispatch & Inquiries
  emails: {
    primary: "covers365services@gmail.com",
    secondary: "covers365@gmail.com",
  },

  // WhatsApp Gateway
  whatsapp: {
    number: "918718830175",
    defaultMessageEn: "Hello Covers365, I am looking for security / manpower services for my property in Bhopal / MP. Please connect with me.",
    defaultMessageHi: "नमस्ते Covers365, मुझे भोपाल / मध्य प्रदेश में अपनी प्रॉपर्टी के लिए सुरक्षा गार्ड / मैनपावर की आवश्यकता है। कृपया संपर्क करें।",
  },

  // Formspree / Resend Endpoint settings
  // USER: Set your Formspree form ID or configure RESEND_API_KEY in environment variables
  forms: {
    quoteFormEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID 
      ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID}`
      : "/api/quote",
    careersFormEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_CAREERS_ID 
      ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CAREERS_ID}`
      : "/api/careers",
  },

  // Exact Brand Colors Sampled from Banner and Visiting Card
  colors: {
    navyDark: "#01172F",     // Sampled deep midnight background
    navyAccent: "#042544",   // Sampled card badge navy
    orangeBrand: "#FE8100",  // Sampled "365" and swoosh safety orange
    orangeHover: "#E07000",
    white: "#FFFFFF",
    surfaceLight: "#F4F6F9", // Sampled light grey-blue
  },

  // COMPLIANCE & LEGAL REGISTRATION
  // RULE: PSARA is pending. Leave null. NEVER show until confirmed by user.
  compliance: {
    psaraNumber: null, // [ADD REAL PSARA ONCE ISSUED]
    gstNumber: null,   // [ADD REAL GSTIN ONCE ISSUED]
    msmeNumber: null,  // [ADD REAL MSME ONCE ISSUED]
    isLicensedClaimAllowed: false,
    disclaimer: "COVERS365 provides unarmed civilian security guard and manpower supply services across Bhopal and Madhya Pradesh under applicable commercial regulations.",
  },

  // Neutral Trust & Process Points (Strictly No Unconfirmed SLAs / Numbers)
  trustPoints: [
    {
      title: "Direct Founder Accountability",
      hindiTitle: "सीधा संस्थापकों से संपर्क",
      desc: "Deal directly with decision makers who run operations, not an impersonal call center.",
      hindiDesc: "सीधे निर्णय लेने वाले संचालकों से बात करें, किसी कॉल सेंटर से नहीं।",
    },
    {
      title: "Site-Specific Guard Placement",
      hindiTitle: "साइट-विशिष्ट गार्ड चयन",
      desc: "Every site has unique gate dynamics, visitor volume and perimeter needs assessed before posting.",
      hindiDesc: "गेट की स्थिति, आने-जाने वालों की संख्या और परिसर की ज़रूरतों के अनुसार सही गार्ड।",
    },
    {
      title: "Written Duty Rules (Bilingual)",
      hindiTitle: "लिखित कर्तव्य नियम (द्विभाषी)",
      desc: "Every guard is deployed with written guidelines in Hindi and English outlining conduct and duties.",
      hindiDesc: "हर गार्ड को हिंदी और अंग्रेजी में लिखित नियम दिए जाते हैं ताकि आचरण और ज़िम्मेदारी स्पष्ट रहे।",
    },
    {
      title: "Focused Unarmed Security",
      hindiTitle: "अनुशासित अनआर्म्ड सुरक्षा",
      desc: "Dedicated to disciplined, alert unarmed static, gate, reception and patrolling coverage.",
      hindiDesc: "गेट, रिसेप्शन, पेट्रोलिंग और सुरक्षा के लिए अनुशासित और सतर्क अनआर्म्ड गार्ड्स।",
    },
  ],

  // Services Structure (Strictly unarmed, no bouncers, no armed guards, no VIP escorts)
  services: [
    {
      id: "security-guard-services",
      slug: "security-guard-services",
      title: "Security Guard Services",
      hindiTitle: "सुरक्षा गार्ड सेवाएं",
      shortDesc: "Alert, disciplined unarmed guards for gates, reception, visitor control, and routine property patrolling.",
      hindiShortDesc: "गेट, रिसेप्शन, आगंतुक नियंत्रण और नियमित गश्त के लिए अनुशासित और सतर्क अनआर्म्ड गार्ड्स।",
      longDesc: "Our security guard personnel provide a watchful, respectful presence at your premises. From logging entry and exit to enforcing visitor protocol and nighttime vigilance, we ensure your building remains organized and secure.",
      hindiLongDesc: "हमारे सुरक्षा गार्ड आपके परिसर में एक सतर्क और आदरपूर्ण उपस्थिति सुनिश्चित करते हैं। आने-जाने वालों के रजिस्टर प्रबंधन से लेकर रात की निगरानी तक, हम परिसर को व्यवस्थित और सुरक्षित रखते हैं।",
      iconName: "shield-user" as const,
      scope: [
        "Gate access control & visitor register maintenance",
        "Vehicle movement logging & parking order",
        "Day and night perimeter patrolling",
        "Night shift vigilance & lock verification",
        "Emergency phone tree activation & reporting",
      ],
      hindiScope: [
        "गेट एक्सेस कंट्रोल और विजिटर रजिस्टर संधारण",
        "वाहन आवागमन और पार्किंग व्यवस्था",
        "दिन और रात में परिसर की गश्त",
        "रात्रि शिफ्ट में सतर्कता और तालों की जांच",
        "आपातकालीन स्थिति में तुरंत सूचना देना",
      ],
      bestFor: ["Housing Societies & Townships", "Commercial Buildings", "Hospitals & Clinics", "Educational Campuses"],
      shifts: ["8-Hour Shift (Single / Double / Triple)", "12-Hour Shift (Day & Night)"],
      curiosityHook: "Wondering how guards are briefed for your specific gate? Read our deployment process →",
    },
    {
      id: "manpower-supply",
      slug: "manpower-supply",
      title: "Manpower Supply",
      hindiTitle: "मैनपावर सप्लाई",
      shortDesc: "Dependable non-technical support staff, helpers, office boys, and facility attendants for daily operations.",
      hindiShortDesc: "दैनिक संचालन के लिए भरोसेमंद सपोर्ट स्टाफ, हेल्पर, ऑफिस बॉय और फैसिलिटी कर्मी।",
      longDesc: "Keep your workplace running smoothly with reliable manpower. We provide screened, punctual support staff for commercial establishments, offices, warehouses, and institutions throughout Bhopal and Madhya Pradesh.",
      hindiLongDesc: "विश्वसनीय कर्मचारियों के साथ अपने कार्यस्थल को व्यवस्थित रखें। हम भोपाल और मध्य प्रदेश में कार्यालयों, गोदामों और संस्थानों के लिए समयनिष्ठ सपोर्ट स्टाफ उपलब्ध कराते हैं।",
      iconName: "users" as const,
      scope: [
        "Office assistants & pantry helpers",
        "Warehouse loading & dispatch helpers",
        "Facility housekeeping & upkeep attendants",
        "Material handling & internal logistics support",
      ],
      hindiScope: [
        "कार्यालय सहायक एवं पेंट्री स्टाफ",
        "वेयरहाउस लोडिंग और डिस्पैच हेल्पर",
        "परिसर की साफ-सफाई और रखरखाव कर्मी",
        "सामान की आवाजाही में सहयोग",
      ],
      bestFor: ["Corporate Offices", "Warehouses & Logistics Hubs", "Retail Stores & Showrooms", "Healthcare Centers"],
      shifts: ["Standard General Shift", "Staggered Operational Shifts"],
      curiosityHook: "Need reliable support staff on flexible terms? Request a custom manpower quote →",
    },
    {
      id: "industrial-security",
      slug: "industrial-security",
      title: "Industrial Security",
      hindiTitle: "औद्योगिक सुरक्षा",
      shortDesc: "Unarmed gatekeeping, raw material movement tracking, worker checking, and perimeter defense for factories.",
      hindiShortDesc: "फैक्ट्रियों और प्लांट्स के लिए अनआर्म्ड गेट सुरक्षा, माल आवागमन रिकॉर्ड, वर्कर चेकिंग और बाउंड्री निगरानी।",
      longDesc: "Industrial sites face complex operational risks including material pilferage, unauthorized personnel entry, and vehicle congestion. Our industrial guards adhere to strict gatepass verification and perimeter routines.",
      hindiLongDesc: "औद्योगिक इकाइयों में माल की सुरक्षा, अनधिकृत प्रवेश और वाहनों का नियंत्रण अत्यंत महत्वपूर्ण है। हमारे गार्ड्स गेटपास जांच और बाउंड्री निगरानी के सख्त नियमों का पालन करते हैं।",
      iconName: "factory" as const,
      scope: [
        "Material inward/outward gatepass verification",
        "Worker & contractor daily in-out recording",
        "Truck & commercial vehicle weighbridge check assistance",
        "Factory perimeter & raw material yard checks",
        "Basic fire safety equipment check & emergency alerting",
      ],
      hindiScope: [
        "सामान इनवर्ड/आउटवर्ड गेटपास की जांच",
        "श्रमिकों और ठेकेदारों का दैनिक रिकॉर्ड",
        "ट्रक और लोडिंग वाहनों की गेट जांच में सहयोग",
        "फैक्ट्री बाउंड्री और कच्चा माल यार्ड की निगरानी",
        "अग्निशमन उपकरणों की प्राथमिक जांच और अलर्ट",
      ],
      bestFor: ["Manufacturing Units", "Processing Plants", "Engineering Workshops", "Industrial Warehouses in Mandideep & Govindpura"],
      shifts: ["12-Hour Industrial Rotation", "8-Hour 3-Shift Continuous Coverage"],
      curiosityHook: "Protect raw materials and secure factory perimeters. See our industrial workflow →",
    },
    {
      id: "event-security",
      slug: "event-security",
      title: "Event Security & Crowd Management",
      hindiTitle: "इवेंट सुरक्षा एवं भीड़ नियंत्रण",
      shortDesc: "Organized unarmed entry management, queue discipline, ticket verification, and orderly crowd coordination for events.",
      hindiShortDesc: "इवेंट्स के लिए व्यवस्थित अनआर्म्ड प्रवेश प्रबंधन, कतार नियंत्रण, टिकट चेकिंग और शांतिपूर्ण भीड़ समन्वय।",
      longDesc: "Ensure your commercial, social, or institutional gathering proceeds without disruption. Our unarmed event personnel manage attendee queues, guide visitors, prevent gate rush, and maintain order throughout your program.",
      hindiLongDesc: "अपने सामाजिक, संस्थागत या व्यापारिक आयोजनों को सुचारू और शांतिपूर्ण बनाएं। हमारे अनआर्म्ड गार्ड्स प्रवेश कतारों को संभालते हैं और व्यवस्था बनाए रखते हैं।",
      iconName: "calendar" as const,
      scope: [
        "Main gate entry management & invitation/ticket checking",
        "Orderly queue management & preventing gate crowding",
        "Stage periphery & backstage perimeter safeguarding",
        "Parking guidance & traffic dispersal",
        "Orderly exit and emergency pathway clearance",
      ],
      hindiScope: [
        "मुख्य प्रवेश द्वार पर निमंत्रण/टिकट सत्यापन",
        "कतार नियंत्रण और गेट पर भीड़ का जमावड़ा रोकना",
        "मंच के आसपास शांति और व्यवस्था बनाए रखना",
        "पार्किंग स्थल पर वाहनों का सुगम मार्गदर्शन",
        "कार्यक्रम समाप्ति पर सुरक्षित निकास प्रबंधन",
      ],
      bestFor: ["Corporate Gatherings & Expos", "Educational Exhibitions & Annual Functions", "Community Festivals & Cultural Meets", "Private Ceremonies & Receptions"],
      shifts: ["Single Day Event Coverage", "Multi-Day Continuous Program Support"],
      curiosityHook: "Planning a gathering in Bhopal? Tell us attendee count and get an event security plan →",
    },
  ],

  // Industries We Protect
  industries: [
    {
      slug: "housing-societies",
      title: "Housing Societies & Apartments",
      hindiTitle: "हाउसिंग सोसायटी और अपार्टमेंट",
      summary: "Courteous gatekeepers who log every delivery, manage visitor entries, and keep resident families feeling safe 24 hours a day.",
      highlights: ["Visitor & Delivery Entry Logs", "Vehicle Tag Verification", "Night Vigilance Walks", "Water Tanker / Vendor Oversight"],
    },
    {
      slug: "factories-manufacturing",
      title: "Factories & Industrial Plants",
      hindiTitle: "फैक्ट्री और औद्योगिक प्लांट्स",
      summary: "Vigilant perimeter and gate protection to safeguard raw materials, log commercial vehicles, and enforce worker entry discipline.",
      highlights: ["Gatepass Verification", "Material Scrap Dispatch Logs", "Perimeter Fence Checks", "Contractor In-Out Tracking"],
    },
    {
      slug: "offices-commercial",
      title: "Corporate Offices & IT Hubs",
      hindiTitle: "कॉर्पोरेट ऑफिस और कमर्शियल हब",
      summary: "Smart, polite security staff who manage reception access, guide guests, and protect office equipment outside working hours.",
      highlights: ["Access Card / Badge Checks", "Guest Escorting Protocols", "After-Hours Floor Lockups", "Pantry & Support Manpower"],
    },
    {
      slug: "hospitals-healthcare",
      title: "Hospitals & Diagnostic Centers",
      hindiTitle: "अस्पताल और स्वास्थ्य केंद्र",
      summary: "Calm, patient security personnel trained to manage crowded OPDs, emergency ramps, and patient attendant flow with dignity.",
      highlights: ["Emergency Entrance Clearance", "Attendant Pass Enforcement", "Pharmacy & Ward Access Control", "Crowd De-escalation"],
    },
    {
      slug: "educational-institutions",
      title: "Schools, Colleges & Hostels",
      hindiTitle: "स्कूल, कॉलेज और हॉस्टल",
      summary: "Protective security focused on student safety, disciplined school bus boarding, and restricted unauthorized visitor entry.",
      highlights: ["Child Handover Protocols", "School Bus Gate Coordination", "Hostel Night Curfew Monitoring", "No-Loitering Zones"],
    },
    {
      slug: "retail-malls",
      title: "Malls, Retail & Showrooms",
      hindiTitle: "मॉल, रिटेल और शोरूम",
      summary: "Alert presence to deter theft, guide foot traffic, maintain queue order during peak sale hours, and monitor loading bays.",
      highlights: ["Customer Entrance Greeters", "Baggage Counter Assistance", "Loading Bay Security", "Emergency Exit Audits"],
    },
  ],
};
