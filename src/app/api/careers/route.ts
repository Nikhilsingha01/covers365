import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Honeypot spam check
    if (data.website || data.honeypot) {
      return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
    }

    const { name, phone, city, age, experience, message } = data;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and Phone are required." },
        { status: 400 }
      );
    }

    const emailSubject = `Job Application: ${name} (${city || "Bhopal"}) - Covers365 Recruitment`;
    const emailBody = `
New Job Application on Covers365 Website:
----------------------------------------
Candidate Name: ${name}
Phone: ${phone}
City: ${city || "Not specified"}
Age: ${age || "Not specified"}
Experience: ${experience || "Not specified"}
Message / Previous Work: ${message || "None"}
----------------------------------------
Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
Recipient: ${siteConfig.emails.primary}
    `.trim();

    // 1. Resend API if configured
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Covers365 Careers <onboarding@resend.dev>",
          to: [siteConfig.emails.primary],
          reply_to: siteConfig.emails.primary,
          subject: emailSubject,
          text: emailBody,
        }),
      });
    }

    // 2. Formspree forward if configured
    if (process.env.NEXT_PUBLIC_FORMSPREE_CAREERS_ID) {
      await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CAREERS_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }

    console.log("=== COVERS365 JOB APPLICATION RECEIVED ===");
    console.log(emailBody);
    console.log("==========================================");

    return NextResponse.json({
      success: true,
      message: "Thank you for applying. We have received your details at covers365services@gmail.com and will call you if your profile matches an opening.",
    });
  } catch (error) {
    console.error("Error processing career application:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application. Please contact 8718830175." },
      { status: 500 }
    );
  }
}
