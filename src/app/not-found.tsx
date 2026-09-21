import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
        Error 404
      </span>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm text-slate-600">
        The commodity, specification sheet, or page you are requesting cannot be found or may have been relocated.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
        >
          Return Home
        </Link>
        <Link
          href="/products"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Browse Catalog
        </Link>
      </div>
    </div>
  );
}
