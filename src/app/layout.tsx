import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";

export const metadata: Metadata = {
  title: {
    default: "COVERS365 Security & Manpower Services | Bhopal, Madhya Pradesh",
    template: "%s | COVERS365 Security Bhopal",
  },
  description:
    "Professional unarmed security guard services and dependable manpower supply in Bhopal, Madhya Pradesh. Serving housing societies, factories, offices, and events.",
  keywords: [
    "security guard services in Bhopal",
    "security agency Bhopal",
    "manpower supply Bhopal",
    "industrial security Madhya Pradesh",
    "security guards Narela Jod",
    "security company Ayodhya Bypass Bhopal",
    "unarmed security guards Bhopal",
    "facility staff Bhopal",
  ],
  authors: [{ name: "COVERS365 Security & Manpower Services" }],
  creator: "COVERS365",
  publisher: "COVERS365",
  metadataBase: new URL("https://covers365.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "COVERS365 Security & Manpower Services | Bhopal, MP",
    description: "Reliable People. Safer Spaces. Always. Professional unarmed security guards and manpower supply in Bhopal.",
    url: "https://covers365.in",
    siteName: "COVERS365 Security & Manpower Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/brand/banner.jpg",
        width: 1024,
        height: 584,
        alt: "COVERS365 Security & Manpower Services Bhopal",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured data for Bhopal SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": "https://covers365.in/brand/banner.jpg",
    "telephone": siteConfig.contacts[0].phoneFormatted,
    "email": siteConfig.emails.primary,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.2617,
      "longitude": 77.4646
    },
    "url": "https://covers365.in",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": []
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-navy text-slate-100 flex flex-col min-h-screen selection:bg-brand-orange selection:text-white">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
