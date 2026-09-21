interface WindowWithGtag extends Window {
  gtag?: (command: string, eventName: string, eventParams?: Record<string, unknown>) => void;
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    const win = window as unknown as WindowWithGtag;
    if (typeof win.gtag === "function") {
      win.gtag("event", eventName, params);
    }
  }
}

export function trackLeadSubmission(type: "rfq" | "contact", details?: Record<string, unknown>) {
  trackEvent("generate_lead", {
    lead_type: type,
    ...details,
  });
}
