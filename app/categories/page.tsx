import type { Metadata } from "next";
import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { categories } from "@/lib/categories";

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
