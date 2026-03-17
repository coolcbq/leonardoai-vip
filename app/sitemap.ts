export const dynamic = "force-dynamic";

import type { MetadataRoute } from "next";
import { getDb } from "@/lib/db";
import { posts } from "@/lib/schema";
import { eq } from "drizzle-orm";

const CATEGORIES = [
  "getting-started",
  "prompt-engineering",
  "image-generation",
  "ai-canvas",
  "video-and-motion",
  "advanced-techniques",
  "style-guides",
  "tips-and-tricks",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const db = await getDb();

  const allPosts = await db
    .select({ slug: posts.slug, updatedAt: posts.updatedAt })
    .from(posts)
    .where(eq(posts.isPublished, 1));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://leonardoai.vip",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://leonardoai.vip/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://leonardoai.vip/categories",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://leonardoai.vip/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://leonardoai.vip/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://leonardoai.vip/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://leonardoai.vip/terms-of-service",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://leonardoai.vip/cookie-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://leonardoai.vip/disclaimer",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://leonardoai.vip/accessibility",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `https://leonardoai.vip/blog?category=${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const postPages: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `https://leonardoai.vip/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...postPages];
}
