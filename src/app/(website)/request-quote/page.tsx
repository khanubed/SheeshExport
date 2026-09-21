import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Request a Commercial Price Quote (RFQ) | Wholesale Spices",
  description:
    "Submit your specifications, target volume, packaging preference, and destination port for an official CIF or FOB price quotation from Sheesh Exports.",
  pathname: "/request-quote",
});

export default function RequestQuotePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Commercial Procurement Desk
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Request for Quotation (RFQ)
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Receive firm CIF/FOB pricing, lab analysis certificates, and container dispatch schedules within 24 business hours.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <form className="space-y-6 text-sm">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
              <input type="text" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Business Name *</label>
              <input type="text" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="Global Foods Ltd." />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
              <input type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="procurement@company.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
              <input type="tel" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="+1 234 567 890" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Commodity / Product *</label>
              <input type="text" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="e.g. S4 Red Chilli Stemless" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Target Quantity *</label>
              <input type="number" required min="1" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="e.g. 14" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Unit *</label>
              <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none">
                <option value="MT">Metric Tons (MT)</option>
                <option value="Containers">20ft / 40ft FCL</option>
                <option value="KG">Kilograms (KG)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Destination Discharge Port *</label>
              <input type="text" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="e.g. Jebel Ali / Rotterdam" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Incoterm *</label>
              <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none">
                <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                <option value="FOB">FOB (Free on Board - Mundra/Nhava Sheva)</option>
                <option value="CFR">CFR (Cost & Freight)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Packaging & Grade Specifications</label>
            <textarea rows={3} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none" placeholder="Specify packaging type (25kg PP bags, vacuum, cartons), target ASTA color, moisture, or custom requirements..."></textarea>
          </div>

          <button
            type="button"
            className="w-full rounded-md bg-emerald-700 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-800 transition-colors"
          >
            Submit Commercial RFQ
          </button>
        </form>
      </div>
    </div>
  );
}
