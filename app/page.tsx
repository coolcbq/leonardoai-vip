export const dynamic = "force-dynamic";
// ISR: cache homepage for 10 minutes after first request
export const revalidate = 600;

import Link from "next/link";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import {
  JsonLd,
  websiteJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/components/JsonLd";
import { getDb } from "@/lib/db";
import { posts, friendLinks } from "@/lib/schema";
import { eq, desc, asc } from "drizzle-orm";
import { categories } from "@/lib/categories";

const homepageFaq = [
  {
    question: "Is LeonardoAI.VIP the official Leonardo AI website?",
    answer:
      "No. LeonardoAI.VIP is an independent educational site that publishes tutorials, prompt guides, and workflow notes for Leonardo AI users.",
  },
  {
    question: "What should beginners learn first in Leonardo AI?",
    answer:
      "Start with model selection, prompt structure, negative prompts, aspect ratios, token usage, and basic Canvas edits before moving into advanced workflows.",
  },
  {
    question: "Can Leonardo AI be used for commercial visuals?",
    answer:
      "Commercial use depends on your Leonardo AI plan, the asset source, and the current platform terms. Always review the official terms before publishing client or paid work.",
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
      <JsonLd data={faqJsonLd(homepageFaq)} />

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

      {/* Core Keyword Guide */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-[#262626] bg-[#141414] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A853]">
              Leonardo AI Guide
            </p>
            <h2 className="mt-4 text-3xl font-bold text-neutral-100">
              What is Leonardo AI and who is it for?
            </h2>
            <div className="mt-5 space-y-4 text-neutral-400">
              <p>
                Leonardo AI is an AI image generation platform used by creators,
                marketers, game artists, and product teams to turn prompts,
                references, and editing workflows into polished visuals. This
                independent guide focuses on practical tutorials rather than
                hype, so you can understand settings, prompts, models, Canvas
                edits, and repeatable creative workflows.
              </p>
              <p>
                If you are searching for Leonardo AI prompts, beginner setup
                instructions, AI Canvas editing help, or workflow comparisons,
                LeonardoAI.VIP organizes those topics into step-by-step guides
                and category hubs that are easier to follow than scattered notes.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/categories/getting-started"
                className="rounded-full border border-[#D4A853]/30 px-4 py-2 text-sm font-medium text-[#D4A853] hover:bg-[#D4A853]/10"
              >
                Start with basics
              </Link>
              <Link
                href="/categories/prompt-engineering"
                className="rounded-full border border-[#D4A853]/30 px-4 py-2 text-sm font-medium text-[#D4A853] hover:bg-[#D4A853]/10"
              >
                Learn prompts
              </Link>
              <Link
                href="/categories/ai-canvas"
                className="rounded-full border border-[#D4A853]/30 px-4 py-2 text-sm font-medium text-[#D4A853] hover:bg-[#D4A853]/10"
              >
                Explore AI Canvas
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#D4A853]/20 bg-gradient-to-br from-[#D4A853]/10 to-transparent p-8">
            <h2 className="text-2xl font-bold text-neutral-100">
              Popular Leonardo AI workflows
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-neutral-300">
              <li>
                <strong className="text-[#F5E6C8]">Prompt to image:</strong>{" "}
                choose a model, write a structured prompt, set aspect ratio,
                generate variations, then upscale the best result.
              </li>
              <li>
                <strong className="text-[#F5E6C8]">Image refinement:</strong>{" "}
                use negative prompts, seeds, and Canvas edits to fix faces,
                hands, backgrounds, or composition issues.
              </li>
              <li>
                <strong className="text-[#F5E6C8]">Content production:</strong>{" "}
                create brand visuals, blog graphics, social posts, concept art,
                thumbnails, and product-style scenes with consistent prompts.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-100">
            Leonardo AI FAQ
          </h2>
          <p className="mt-3 text-neutral-400">
            Quick answers for users comparing tools and learning the platform.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          {homepageFaq.map((item) => (
            <details
              key={item.question}
              className="rounded-xl border border-[#262626] bg-[#141414] p-6"
            >
              <summary className="cursor-pointer text-lg font-semibold text-neutral-100">
                {item.question}
              </summary>
              <p className="mt-3 text-neutral-400">{item.answer}</p>
            </details>
          ))}
        </div>
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
