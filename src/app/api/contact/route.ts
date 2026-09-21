import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { sendContactEmail } from "@/lib/services/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const emailResult = await sendContactEmail(validatedData);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received. Our export team will contact you shortly.",
      id: emailResult.id,
    });
  } catch (error: unknown) {
    const err = error as { errors?: unknown; message?: string };
    return NextResponse.json(
      {
        success: false,
        error: err.errors || err.message || "Invalid contact form submission",
      },
      { status: 400 }
    );
  }
}
