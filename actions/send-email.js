"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import EmailTemplate from "@/emails/template"; // ✅ React Email component
import React from "react";

export async function sendEmail({ to, subject }) {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  // ✅ Email data (replace with dynamic data if needed)
  const data = {
    month: "December",
    stats: {
      totalIncome: 5000,
      totalExpenses: 3500,
      byCategory: {
        housing: 1500,
        groceries: 600,
        transportation: 400,
        entertainment: 300,
        utilities: 700,
      },
    },
    insights: [
      "Your housing expenses are 43% of your total spending - consider reviewing your housing costs.",
      "Great job keeping entertainment expenses under control this month!",
      "Setting up automatic savings could help you save 20% more of your income.",
    ],
  };

  // ✅ Use @react-email/render to generate HTML
  const html = render(
    <EmailTemplate userName="Kshitij Kumre" type="monthly-report" data={data} />
  );

  try {
    const result = await resend.emails.send({
      from: "EduFinance <onboarding@resend.dev>",
      to,
      subject,
      html,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
