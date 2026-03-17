export const dynamic = "force-dynamic";
// ISR: cache for 10 minutes after first request
export const revalidate = 600;

import Link from "next/link";
import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { getDb } from "@/lib/db";
import { posts } from "@/lib/schema";
import { eq, desc, and, count } from "drizzle-orm";

export const metadata: Metadata = generatePageMetadata({
  title: "Leonardo AI Tutorials & Guides | AI Art Blog",
  description:
    "Browse our collection of in-depth Leonardo AI tutorials, prompt engineering guides, image generation techniques, and AI art tips to master AI-powered creativity.",
  path: "/blog",
  keywords: [
    "leonardo ai tutorials",
    "ai art blog",
    "leonardo ai prompts",
    "ai image generation guides",
    "prompt engineering tips",
    "ai canvas tutorials",
    "leonardo ai tips and tricks",
    "ai art techniques",
  ],
});

const POSTS_PER_PAGE = 10;

// Map URL slugs to database category names
const CATEGORY_SLUG_MAP: Record<string, string> = {
  "getting-started": "Getting Started",
  "prompt-engineering": "Prompt Engineering",
  "image-generation": "Image Generation",
  "ai-canvas": "AI Canvas",
  "video-and-motion": "Video & Motion",
  "advanced-techniques": "Advanced Techniques",
  "style-guides": "Style Guides",
  "tips-and-tricks": "Tips & Tricks",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const { page: pageParam, category: categorySlug } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10));
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  // Convert slug to database category name
  const categoryName = categorySlug ? CATEGORY_SLUG_MAP[categorySlug] || categorySlug : undefined;

  const db = await getDb();

  const whereConditions = categoryName
    ? and(eq(posts.isPublished, 1), eq(posts.category, categoryName))
    : eq(posts.isPublished, 1);

  const [allPosts, totalResult] = await Promise.all([
    db
      .select()
      .from(posts)
      .where(whereConditions)
      .orderBy(desc(posts.publishedAt))
      .limit(POSTS_PER_PAGE)
      .offset(offset),
    db
      .select({ total: count() })
      .from(posts)
      .where(whereConditions),
  ]);

  const totalPosts = totalResult[0]?.total || 0;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "Blog", url: "https://leonardoai.vip/blog" },
        ])}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-100">
            {categoryName
              ? `${categoryName} Articles`
              : "Leonardo AI Tutorials & Guides"}
          </h1>
          <p className="mt-3 text-lg text-neutral-400">
            {categoryName
              ? `Browse all articles about ${categoryName.toLowerCase()}`
              : "Expert tutorials, prompt guides, and AI art techniques to master Leonardo AI"}
          </p>
        </div>

        {allPosts.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                category={post.category}
                publishedAt={post.publishedAt}
                coverImage={post.coverImage}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-xl border border-[#262626] bg-[#141414] p-12 text-center">
            <p className="text-neutral-400">
              No articles found{categoryName ? ` in "${categoryName}"` : ""}. Check back
              soon for new content!
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}${categorySlug ? `&category=${categorySlug}` : ""}`}
                className="rounded-lg border border-[#262626] px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-[#D4A853] hover:text-[#D4A853]"
              >
                Previous
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/blog?page=${p}${categorySlug ? `&category=${categorySlug}` : ""}`}
                className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                  p === currentPage
                    ? "bg-[#D4A853] font-semibold text-[#0A0A0A]"
                    : "border border-[#262626] text-neutral-300 hover:border-[#D4A853] hover:text-[#D4A853]"
                }`}
              >
                {p}
              </Link>
            ))}
            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}${categorySlug ? `&category=${categorySlug}` : ""}`}
                className="rounded-lg border border-[#262626] px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-[#D4A853] hover:text-[#D4A853]"
              >
                Next
              </Link>
            )}
          </div>
        )}

        {/* Internal Links */}
        <div className="mt-16 rounded-xl border border-[#262626] bg-[#141414] p-8 text-center">
          <h2 className="text-xl font-semibold text-neutral-100">
            Explore More
          </h2>
          <p className="mt-2 text-neutral-400">
            Find the right content for your Leonardo AI journey
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/categories"
              className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
            >
              Browse Categories
            </Link>
            <span className="text-[#262626]">|</span>
            <Link
              href="/about"
              className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
            >
              About LeonardoAI.VIP
            </Link>
            <span className="text-[#262626]">|</span>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
