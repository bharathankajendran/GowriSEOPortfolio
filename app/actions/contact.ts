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
    const validationResult = contactFormSchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Please resolve form validation errors.",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("❌ Contact Form Error:", error);
    return {
      success: false,
      message: "An unexpected error occurred while submitting your message. Please reach out directly via email.",
    };
  }
}
