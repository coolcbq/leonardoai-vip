import type { Metadata } from "next";

const SITE_NAME = "LeonardoAI.VIP";
const SITE_URL = "https://leonardoai.vip";
const DEFAULT_DESCRIPTION =
  "LeonardoAI.VIP is an independent guide to mastering Leonardo AI. Discover tutorials, prompt engineering tips, image generation techniques, and AI art workflows.";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string | null;
  modifiedTime?: string | null;
  image?: string | null;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  image,
  keywords,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/opengraph-image`;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: type === "article" ? "article" : "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && publishedTime
        ? {
            publishedTime,
            ...(modifiedTime ? { modifiedTime } : {}),
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };
