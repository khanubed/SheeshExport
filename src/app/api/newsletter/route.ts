import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/newsletter";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    console.log("[Newsletter Subscription]:", validatedData.email);

    return NextResponse.json({
      success: true,
      message: "Subscribed to Sheesh Exports market & crop price bulletins.",
    });
  } catch (error: unknown) {
    const err = error as { errors?: unknown; message?: string };
    return NextResponse.json(
      {
        success: false,
        error: err.errors || err.message || "Invalid email address",
      },
      { status: 400 }
    );
  }
}
