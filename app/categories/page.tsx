import type { Metadata } from "next";
import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Categories – Leonardo AI Tutorials by Topic",
  description:
    "Browse all LeonardoAI.VIP categories including getting started, prompt engineering, image generation, AI canvas, video & motion, advanced techniques, style guides, and tips & tricks.",
  path: "/categories",
  keywords: [
    "leonardo ai categories",
    "ai art tutorial topics",
    "prompt engineering guides",
    "image generation tutorials",
    "ai canvas tips",
    "leonardo ai advanced techniques",
    "ai style guides",
    "leonardo ai tips and tricks",
  ],
});

const categories = [
  {
    name: "Getting Started",
    slug: "getting-started",
    description:
      "Begin your Leonardo AI journey with beginner-friendly setup guides and basics",
    icon: "\uD83D\uDE80",
  },
  {
    name: "Prompt Engineering",
    slug: "prompt-engineering",
    description:
      "Master the art of crafting perfect prompts for stunning AI-generated images",
    icon: "\u270D\uFE0F",
  },
  {
    name: "Image Generation",
    slug: "image-generation",
    description:
      "Explore techniques for creating breathtaking AI artwork and illustrations",
    icon: "\uD83C\uDFA8",
  },
  {
    name: "AI Canvas",
    slug: "ai-canvas",
    description:
      "Learn to use Leonardo AI Canvas for editing, inpainting, and compositing",
    icon: "\uD83D\uDDBC\uFE0F",
  },
  {
    name: "Video & Motion",
    slug: "video-and-motion",
    description:
      "Create animated content and motion graphics with Leonardo AI tools",
    icon: "\uD83C\uDFAC",
  },
  {
    name: "Advanced Techniques",
    slug: "advanced-techniques",
    description:
      "Push boundaries with expert-level workflows, fine-tuning, and custom models",
    icon: "\u2699\uFE0F",
  },
  {
    name: "Style Guides",
    slug: "style-guides",
    description:
      "Achieve specific art styles from photorealism to anime to concept art",
    icon: "\uD83C\uDF1F",
  },
  {
    name: "Tips & Tricks",
    slug: "tips-and-tricks",
    description:
      "Quick hacks, hidden features, and productivity boosters for Leonardo AI",
    icon: "\uD83D\uDCA1",
  },
];

export default function CategoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "Categories", url: "https://leonardoai.vip/categories" },
        ])}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-100">
            Browse by Category
          </h1>
          <p className="mt-3 text-lg text-neutral-400">
            Find the right tutorials and guides for your Leonardo AI goals
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* Internal Links */}
        <div className="mt-16 rounded-xl border border-[#262626] bg-[#141414] p-8 text-center">
          <h2 className="text-xl font-semibold text-neutral-100">
            Looking for Something Specific?
          </h2>
          <p className="mt-2 text-neutral-400">
            Browse all our articles or reach out with questions
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/blog"
              className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
            >
              View All Articles
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
