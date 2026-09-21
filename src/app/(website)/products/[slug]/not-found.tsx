import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
        Product Missing
      </span>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Commodity Specification Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm text-slate-600">
        The requested export commodity or grade specification does not exist or has been updated in our catalog.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/products"
          className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          View All Products
        </Link>
        <Link
          href="/request-quote"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Custom RFQ Inquiry
        </Link>
      </div>
    </div>
  );
}
