import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { marked } from "marked";
import BlogCard from "@/components/BlogCard";
import ShareButtons from "@/components/ShareButtons";
import ReadingProgress from "@/components/ReadingProgress";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import NewsletterCTA from "@/components/NewsletterCTA";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { getDb } from "@/lib/db";
import { posts } from "@/lib/schema";
import { eq, desc, ne, and } from "drizzle-orm";

// ISR: cache page for 1 hour, revalidate in background after that
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const db = await getDb();

  const [post] = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const keywords = post.keywords
    ? post.keywords.split(",").map((k) => k.trim())
    : ["leonardo ai tutorial", "leonardo ai prompts", "ai image generation"];

  return generatePageMetadata({
    title: post.metaTitle || post.title,
    description:
      post.metaDescription || post.excerpt || `Read ${post.title} on LeonardoAI.VIP`,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    image: post.coverImage,
    keywords,
  });
}

function estimateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

// Custom renderer to add IDs to headings for TOC
function configureMarked() {
  const renderer = new marked.Renderer();
  renderer.heading = function ({ text, depth }: { text: string; depth: number }) {
    const id = text
      .toLowerCase()
      .replace(/<[^>]*>/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  };
  marked.setOptions({ renderer });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const db = await getDb();

  const [post] = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);

  if (!post || !post.isPublished) {
    notFound();
  }

  configureMarked();
  const htmlContent = await marked(post.content);
  const readingTime = estimateReadingTime(post.content);
  const articleUrl = `https://leonardoai.vip/blog/${post.slug}`;

  // Related posts: prefer same category, fallback to any
  let relatedPosts = post.category
    ? await db
        .select()
        .from(posts)
        .where(
          and(
            eq(posts.isPublished, 1),
            eq(posts.category, post.category),
            ne(posts.id, post.id)
          )
        )
        .orderBy(desc(posts.publishedAt))
        .limit(3)
    : [];

  if (relatedPosts.length < 3) {
    const existingIds = [post.id, ...relatedPosts.map((p) => p.id)];
    const fallbackPosts = await db
      .select()
      .from(posts)
      .where(eq(posts.isPublished, 1))
      .orderBy(desc(posts.publishedAt))
      .limit(10);

    const additional = fallbackPosts
      .filter((p) => !existingIds.includes(p.id))
      .slice(0, 3 - relatedPosts.length);

    relatedPosts = [...relatedPosts, ...additional];
  }

  const keywords = post.keywords
    ? post.keywords.split(",").map((k) => k.trim())
    : [];

  return (
    <>
      <ReadingProgress />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.excerpt || post.title,
          url: articleUrl,
          publishedAt: post.publishedAt || new Date().toISOString(),
          updatedAt: post.updatedAt,
          image: post.coverImage,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "Blog", url: "https://leonardoai.vip/blog" },
          { name: post.title, url: articleUrl },
        ])}
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="xl:flex xl:gap-10">
          {/* Main article content */}
          <article className="min-w-0 max-w-3xl flex-1">
            {/* Breadcrumb */}
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />

            {/* Cover Image */}
            {post.coverImage && (
              <div className="relative mb-8 aspect-[2/1] overflow-hidden rounded-2xl">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
              </div>
            )}

            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3">
                {post.category && (
                  <Link
                    href={`/blog?category=${post.category}`}
                    className="rounded-full bg-[#D4A853]/10 px-3 py-1 text-xs font-medium text-[#D4A853] transition-colors hover:bg-[#D4A853]/20"
                  >
                    {post.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                )}
                {post.publishedAt && (
                  <time
                    dateTime={post.publishedAt}
                    className="text-sm text-[#555555]"
                  >
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}
                <span className="text-sm text-[#555555]">
                  {readingTime} min read
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-bold text-neutral-100 sm:text-4xl">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="mt-4 text-lg text-neutral-400">{post.excerpt}</p>
              )}

              {/* Share buttons - top */}
              <div className="mt-6">
                <ShareButtons title={post.title} url={articleUrl} />
              </div>
            </header>

            {/* Mobile TOC */}
            <TableOfContents />

            {/* Content */}
            <div
              className="prose prose-invert max-w-none prose-headings:text-neutral-100 prose-a:text-[#D4A853] prose-a:no-underline hover:prose-a:text-[#F5E6C8] prose-strong:text-neutral-200 prose-code:text-[#D4A853] prose-pre:bg-[#141414] prose-pre:border prose-pre:border-[#262626]"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Share buttons - bottom */}
            <div className="mt-10 border-t border-[#262626] pt-6">
              <ShareButtons title={post.title} url={articleUrl} />
            </div>

            {/* Keywords / Tags */}
            {keywords.length > 0 && (
              <div className="mt-6 border-t border-[#262626] pt-6">
                <h3 className="text-sm font-medium text-neutral-400">
                  Related Topics
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-[#D4A853]/10 px-3 py-1 text-xs font-medium text-[#D4A853]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#262626] pt-6">
              <Link
                href="/blog"
                className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
              >
                &larr; Back to blog
              </Link>
              <span className="text-[#262626]">|</span>
              <Link
                href="/categories"
                className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
              >
                Browse categories
              </Link>
              <span className="text-[#262626]">|</span>
              <Link
                href="/contact"
                className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
              >
                Contact us
              </Link>
            </div>
          </article>

          {/* Desktop sidebar TOC */}
          <div className="hidden w-56 shrink-0 xl:block">
            <TableOfContents />
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-10">
        <NewsletterCTA />
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold text-neutral-100">
            Related Articles
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard
                key={related.id}
                title={related.title}
                slug={related.slug}
                excerpt={related.excerpt}
                category={related.category}
                publishedAt={related.publishedAt}
                coverImage={related.coverImage}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
