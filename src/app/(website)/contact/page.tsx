import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Sheesh Exports | Export Headquarters & Trading Desk",
  description:
    "Get in touch with Sheesh Exports export directors and trade specialists. Direct phone, email, WhatsApp, and office address in Guntur, Andhra Pradesh.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Direct Trade Inquiries
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Connect with our Export Desk
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            For general inquiries, trade partnerships, agency agreements, or supplier meetings, reach out through our official communication channels.
          </p>

          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <strong className="block text-slate-900">Trade Headquarters:</strong>
              <p className="mt-1">{SITE_CONFIG.contact.address.street}</p>
              <p>{SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.state} - {SITE_CONFIG.contact.address.postalCode}, {SITE_CONFIG.contact.address.country}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <strong className="block text-slate-900">Official Communication:</strong>
              <p className="mt-1">Email: {SITE_CONFIG.contact.email}</p>
              <p>Sales & RFQ: {SITE_CONFIG.contact.salesEmail}</p>
              <p>Phone / WhatsApp: {SITE_CONFIG.contact.phone}</p>
            </div>
          </div>
        </div>

        {/* Form Placeholder */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Send an Inquiry</h2>
          <p className="mt-2 text-xs text-slate-500">
            For volume price requests and product grades, please use our dedicated{" "}
            <a href="/request-quote" className="text-emerald-700 underline font-medium">Request Quote Form</a>.
          </p>
          <form className="mt-6 space-y-4 text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <input type="text" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email</label>
              <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
              <textarea rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="How can we assist your business?"></textarea>
            </div>
            <button type="button" className="w-full rounded-md bg-emerald-700 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
