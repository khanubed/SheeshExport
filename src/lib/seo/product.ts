import { Product } from "@/types/product";
import { SITE_CONFIG } from "@/config/site";

export function buildProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => img.url),
    description: product.shortDescription || product.description,
    sku: `SE-${product.slug.toUpperCase()}`,
    mpn: product.hsCode,
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
