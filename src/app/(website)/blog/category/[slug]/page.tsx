import { redirect } from "next/navigation";

interface BlogCategoryRedirectProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogCategoryPage({ params }: BlogCategoryRedirectProps) {
  await params;
  redirect("/blog");
}
