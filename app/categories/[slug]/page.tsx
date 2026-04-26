export const dynamic = "force-dynamic";
export const revalidate = 600;

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import Breadcrumb from "@/components/Breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { getDb } from "@/lib/db";
import { generatePageMetadata } from "@/lib/seo";
import { posts } from "@/lib/schema";
import { desc, eq, and } from "drizzle-orm";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return generatePageMetadata({
    title: `${category.name} Leonardo AI Tutorials`,
    description: `${category.summary} Browse focused Leonardo AI tutorials, examples, and workflow guidance for ${category.name.toLowerCase()}.`,
    path: `/categories/${category.slug}`,
    keywords: [...category.keywords],
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const db = await getDb();
  const categoryPosts = await db
    .select()
    .from(posts)
    .where(and(eq(posts.isPublished, 1), eq(posts.category, category.name)))
    .orderBy(desc(posts.publishedAt))
    .limit(24);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "Categories", url: "https://leonardoai.vip/categories" },
          {
            name: category.name,
            url: `https://leonardoai.vip/categories/${category.slug}`,
          },
        ])}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: category.name },
          ]}
        />

        <div className="mt-8 rounded-2xl border border-[#262626] bg-[#141414] p-8">
          <div className="text-4xl">{category.icon}</div>
          <h1 className="mt-4 text-4xl font-bold text-neutral-100">
            {category.name} Leonardo AI Tutorials
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-400">
            {category.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-[#D4A853]/10 px-3 py-1 text-xs font-medium text-[#D4A853]"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {categoryPosts.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryPosts.map((post) => (
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
            <h2 className="text-xl font-semibold text-neutral-100">
              More guides are coming soon
            </h2>
            <p className="mt-3 text-neutral-400">
              We are expanding this Leonardo AI topic hub with practical,
              example-driven tutorials. Browse the full blog while this category
              grows.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex rounded-full bg-[#D4A853] px-6 py-3 text-sm font-semibold text-[#0A0A0A] hover:bg-[#F5E6C8]"
            >
              View all tutorials
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
