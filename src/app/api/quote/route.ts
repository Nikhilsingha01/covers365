import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Honeypot spam check
    if (data.website || data.honeypot) {
      return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
    }

    const {
      name,
      phone,
      company,
      service,
      guardCount,
      location,
      shiftType,
      startDate,
      message,
    } = data;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and Phone are required." },
        { status: 400 }
      );
    }

    const emailSubject = `New Quote Request from ${name} - ${company || "Individual"} (${service || "General"})`;
    const emailBody = `
New Quote Request on Covers365 Website:
----------------------------------------
Name: ${name}
Phone: ${phone}
Company / Society: ${company || "Not specified"}
Service Required: ${service || "Not specified"}
Number of Guards: ${guardCount || "Not specified"}
Location / City: ${location || "Bhopal / MP"}
Shift Type: ${shiftType || "Not specified"}
Preferred Start Date: ${startDate || "Immediate"}
Message / Site Details: ${message || "None"}
----------------------------------------
Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
Recipient: ${siteConfig.emails.primary}
    `.trim();

    // 1. If RESEND_API_KEY is configured in environment, dispatch via Resend API
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Covers365 Inquiries <onboarding@resend.dev>",
          to: [siteConfig.emails.primary],
          reply_to: siteConfig.emails.primary,
          subject: emailSubject,
          text: emailBody,
        }),
      });

      if (!resendRes.ok) {
        console.error("Resend API error:", await resendRes.text());
      }
    }

    // 2. If FORMSPREE endpoint configured, forward
    if (process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID) {
      await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }

    // Log locally for operational audit
    console.log("=== COVERS365 QUOTE INQUIRY RECEIVED ===");
    console.log(emailBody);
    console.log("========================================");

    return NextResponse.json({
      success: true,
      message: "Thank you! Your quote request has been sent to our team at covers365services@gmail.com. We will contact you shortly.",
    });
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process quote request. Please call us directly at 8718830175." },
      { status: 500 }
    );
  }
}
