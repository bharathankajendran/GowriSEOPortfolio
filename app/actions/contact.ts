"use server";

import { prisma } from "@/lib/prisma";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactForm(
  data: ContactFormValues
): Promise<ContactActionResult> {
  try {
    // 1. Validate payload with Zod
    const validationResult = contactFormSchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Please resolve form validation errors.",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const { name, email, subject, service, message } = validationResult.data;

    // 2. Persist to Prisma Database
    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        service: service || "General Inquiry",
        message,
        status: "PENDING",
      },
    });

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("❌ Contact Form Server Action Error:", error);
    return {
      success: false,
      message: "An unexpected error occurred while submitting your message. Please try again or reach out directly via email.",
    };
  }
}
