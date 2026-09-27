import { Product } from "@/lib/data/types";
import { SITE_CONFIG } from "@/config/site";

export function buildProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.variants?.[0]?.images?.map((img: any) => typeof img === "string" ? img : img.src) || [],
    description: product.description,
    sku: `SE-${product.slug.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    countryOfOrigin: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
    },
  };
}
