import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCertificationBySlug, getCertifications } from "@/lib/cms/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

interface CertPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const certs = await getCertifications();
  return certs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CertPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cert = await getCertificationBySlug(slug);

  if (!cert) {
    return buildMetadata({
      title: "Certification Not Found",
      pathname: `/certifications/${slug}`,
    });
  }

  return buildMetadata({
    title: cert.seo.title || `${cert.name} Compliance | Sheesh Exports`,
    description: cert.seo.description || cert.description,
    pathname: `/certifications/${cert.slug}`,
  });
}

export default async function CertificationDetailPage({ params }: CertPageProps) {
  const { slug } = await params;
  const cert = await getCertificationBySlug(slug);

  if (!cert) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-800">Home</Link>
        <span>/</span>
        <Link href="/certifications" className="hover:text-slate-800">Certifications</Link>
        <span>/</span>
        <span className="font-semibold text-slate-900">{cert.name}</span>
      </nav>

      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Official Accreditation
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {cert.name}
        </h1>
        <p className="mt-2 text-sm text-slate-500 font-medium">Issuing Body: {cert.issuingBody}</p>

        <p className="mt-6 text-base leading-relaxed text-slate-600">
          {cert.description}
        </p>

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-bold text-slate-900">Compliance & Regulatory Standards</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{cert.complianceDetails}</p>
        </div>
      </div>
    </div>
  );
}
