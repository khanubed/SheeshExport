import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations/quote";
import { processNewLead } from "@/lib/services/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedQuote = quoteFormSchema.parse(body);

    const leadResult = await processNewLead(validatedQuote);

    return NextResponse.json({
      success: true,
      message: "RFQ successfully submitted. Our commercial desk is preparing your quote.",
      leadId: leadResult.leadId,
    });
  } catch (error: unknown) {
    const err = error as { errors?: unknown; message?: string };
    return NextResponse.json(
      {
        success: false,
        error: err.errors || err.message || "Invalid quotation request data",
      },
      { status: 400 }
    );
  }
}
