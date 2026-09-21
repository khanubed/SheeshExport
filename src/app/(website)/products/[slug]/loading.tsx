export default function ProductLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 animate-pulse">
      <div className="h-4 w-48 bg-slate-200 rounded mb-6"></div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="aspect-square w-full rounded-xl bg-slate-200"></div>
        <div className="space-y-4">
          <div className="h-6 w-24 bg-slate-200 rounded"></div>
          <div className="h-10 w-3/4 bg-slate-200 rounded"></div>
          <div className="h-24 w-full bg-slate-200 rounded"></div>
          <div className="h-32 w-full bg-slate-200 rounded"></div>
          <div className="h-12 w-full bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
