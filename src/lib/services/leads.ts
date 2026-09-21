import { QuoteFormValues } from "@/lib/validations/quote";
import { sendQuoteNotification } from "./email";

export async function processNewLead(quote: QuoteFormValues) {
  // 1. Persist lead to database / CRM / Webhook
  console.log("[Leads Service] Capturing B2B Lead:", quote);

  // 2. Dispatch email alerts
  const emailResult = await sendQuoteNotification(quote);

  // 3. Return acknowledgement
  return {
    leadId: `lead_${Date.now()}`,
    emailSent: emailResult.success,
    status: "received",
  };
}
