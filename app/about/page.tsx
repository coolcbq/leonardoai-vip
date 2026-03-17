import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "About LeonardoAI.VIP – Your Guide to Mastering Leonardo AI",
  description:
    "LeonardoAI.VIP is a publication dedicated to helping creators and artists master Leonardo AI through expert tutorials, prompt engineering guides, and AI art techniques.",
  path: "/about",
  keywords: [
    "about LeonardoAI.VIP",
    "leonardo ai guide",
    "ai art tutorials",
    "leonardo ai resource",
  ],
});

const features = [
  {
    title: "Expert Tutorials",
    description:
      "Every tutorial we publish is crafted with care and tested thoroughly. No fluff, no outdated info \u2014 just clear, practical guidance that delivers real results.",
    icon: "\u2705",
  },
  {
    title: "Step-by-Step Guides",
    description:
      "Follow along with detailed walkthroughs that take you from concept to creation. Start generating stunning AI art quickly and confidently.",
    icon: "\uD83D\uDCD6",
  },
  {
    title: "Real-World Examples",
    description:
      "Learn from actual use cases, prompt breakdowns, and before-and-after comparisons that show you exactly what works and why.",
    icon: "\uD83C\uDF0D",
  },
  {
    title: "Up-to-Date Content",
    description:
      "Leonardo AI evolves rapidly with new features and models. We keep our content current so you always have the latest techniques at your fingertips.",
    icon: "\uD83D\uDD04",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "About", url: "https://leonardoai.vip/about" },
        ])}
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-100">About LeonardoAI.VIP</h1>
          <p className="mt-4 text-lg text-neutral-400">
            Your trusted resource for mastering Leonardo AI, creating stunning
            AI art, and unlocking the full potential of AI-powered creativity.
          </p>
        </div>

        {/* Mission */}
        <div className="mt-16 rounded-xl border border-[#262626] bg-[#141414] p-8">
          <h2 className="text-2xl font-bold text-neutral-100">Our Mission</h2>
          <p className="mt-4 leading-relaxed text-neutral-400">
            At LeonardoAI.VIP, we believe every creator deserves access to
            clear, practical guidance for AI-powered art creation. Our mission is
            to provide comprehensive tutorials, prompt engineering guides, and
            techniques that empower artists, designers, and enthusiasts to
            create breathtaking visuals with Leonardo AI.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-400">
            Whether you are just getting started with AI image generation, want
            to master advanced techniques like inpainting and outpainting, or
            dream of creating professional-quality AI art, we are here to help
            you achieve your creative vision with strategies that actually work.
          </p>
        </div>

        {/* What Readers Can Expect */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-neutral-100">
            What You Can Expect
          </h2>
          <p className="mt-3 text-center text-neutral-400">
            Every piece of content we publish is designed to help you create better AI art
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[#262626] bg-[#141414] p-6"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 border-t border-[#262626] pt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
          >
            Read Our Blog
          </Link>
          <span className="text-[#262626]">|</span>
          <Link
            href="/categories"
            className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
          >
            Browse Categories
          </Link>
          <span className="text-[#262626]">|</span>
          <Link
            href="/contact"
            className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
          >
            Contact Us
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-[#D4A853]/20 bg-gradient-to-br from-[#D4A853]/10 to-[#B8942E]/10 p-10 text-center">
          <h2 className="text-2xl font-bold text-neutral-100">
            Start Your AI Art Journey
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-400">
            Ready to create stunning visuals with Leonardo AI? Explore our
            tutorials and start mastering AI-powered creativity today.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
