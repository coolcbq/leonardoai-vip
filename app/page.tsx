export const dynamic = "force-dynamic";
// ISR: cache homepage for 10 minutes after first request
export const revalidate = 600;

import Link from "next/link";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import { JsonLd, websiteJsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { getDb } from "@/lib/db";
import { posts, friendLinks } from "@/lib/schema";
import { eq, desc, asc } from "drizzle-orm";

const categories = [
  {
    name: "Getting Started",
    slug: "getting-started",
    description: "Begin your Leonardo AI journey with beginner-friendly setup guides and basics",
    icon: "\uD83D\uDE80",
  },
  {
    name: "Prompt Engineering",
    slug: "prompt-engineering",
    description: "Master the art of crafting perfect prompts for stunning AI-generated images",
    icon: "\u270D\uFE0F",
  },
  {
    name: "Image Generation",
    slug: "image-generation",
    description: "Explore techniques for creating breathtaking AI artwork and illustrations",
    icon: "\uD83C\uDFA8",
  },
  {
    name: "AI Canvas",
    slug: "ai-canvas",
    description: "Learn to use Leonardo AI Canvas for editing, inpainting, and compositing",
    icon: "\uD83D\uDDBC\uFE0F",
  },
  {
    name: "Video & Motion",
    slug: "video-and-motion",
    description: "Create animated content and motion graphics with Leonardo AI tools",
    icon: "\uD83C\uDFAC",
  },
  {
    name: "Advanced Techniques",
    slug: "advanced-techniques",
    description: "Push boundaries with expert-level workflows, fine-tuning, and custom models",
    icon: "\u2699\uFE0F",
  },
  {
    name: "Style Guides",
    slug: "style-guides",
    description: "Achieve specific art styles from photorealism to anime to concept art",
    icon: "\uD83C\uDF1F",
  },
  {
    name: "Tips & Tricks",
    slug: "tips-and-tricks",
    description: "Quick hacks, hidden features, and productivity boosters for Leonardo AI",
    icon: "\uD83D\uDCA1",
  },
];

export default async function HomePage() {
  const db = await getDb();

  const latestPosts = await db
    .select()
    .from(posts)
    .where(eq(posts.isPublished, 1))
    .orderBy(desc(posts.publishedAt))
    .limit(6);

  const partnerLinks = await db
    .select()
    .from(friendLinks)
    .where(eq(friendLinks.isActive, 1))
    .orderBy(asc(friendLinks.sortOrder));

  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
        ])}
      />

      <Hero />

      {/* Featured Categories */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-100">
            Explore Topics
          </h2>
          <p className="mt-3 text-neutral-400">
            Find the right tutorials and guides for your AI art goals
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.slug}
              name={cat.name}
              slug={cat.slug}
              description={cat.description}
              icon={cat.icon}
            />
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      {latestPosts.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-neutral-100">
              Latest Articles
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
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
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-3xl px-6 py-8">
        <NewsletterCTA />
      </section>

      {/* Partner Links */}
      {partnerLinks.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold text-neutral-100">
            Partner Sites
          </h2>
          <p className="mt-3 text-center text-neutral-400">
            Trusted resources and communities we recommend
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[#262626] bg-[#141414] p-6 transition-colors hover:border-[#D4A853]/50"
              >
                <h3 className="text-lg font-semibold text-neutral-100 transition-colors group-hover:text-[#D4A853]">
                  {link.title}
                </h3>
                {link.description && (
                  <p className="mt-2 text-sm text-neutral-400">
                    {link.description}
                  </p>
                )}
                <span className="mt-4 inline-block text-sm font-medium text-[#D4A853]">
                  Visit site &rarr;
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-[#D4A853]/20 bg-gradient-to-br from-[#D4A853]/10 to-[#B8942E]/10 p-12 text-center">
          <h2 className="text-3xl font-bold text-neutral-100">
            Ready to Master Leonardo AI?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Whether you are just getting started with AI art or looking to
            refine your prompt engineering skills, we have the tutorials and
            guides to help you create stunning visuals.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-[#D4A853] px-8 py-3 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#F5E6C8]"
            >
              Browse Articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#262626] px-8 py-3 text-sm font-semibold text-neutral-300 transition-colors hover:border-[#D4A853] hover:text-[#D4A853]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
