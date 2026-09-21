import { redirect } from "next/navigation";

interface ProductCategoryRedirectProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductCategoryPage({ params }: ProductCategoryRedirectProps) {
  const { slug } = await params;
  redirect(`/categories/${slug}`);
}
