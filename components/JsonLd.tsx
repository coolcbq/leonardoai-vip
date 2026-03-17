interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LeonardoAI.VIP",
    url: "https://leonardoai.vip",
    email: "support@leonardoai.vip",
    description:
      "LeonardoAI.VIP provides comprehensive tutorials, prompt engineering guides, and tips for mastering Leonardo AI image generation.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LeonardoAI.VIP",
    url: "https://leonardoai.vip",
    description:
      "Your ultimate guide to Leonardo AI. Discover tutorials, prompt engineering techniques, model comparisons, and tips for creating stunning AI-generated images.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://leonardoai.vip/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string | null;
  image?: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    ...(article.image ? { image: article.image } : {}),
    author: {
      "@type": "Organization",
      name: "LeonardoAI.VIP",
      url: "https://leonardoai.vip",
    },
    publisher: {
      "@type": "Organization",
      name: "LeonardoAI.VIP",
      url: "https://leonardoai.vip",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
