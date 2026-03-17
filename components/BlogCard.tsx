import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string | null;
  category: string | null;
  publishedAt: string | null;
  coverImage?: string | null;
}

const categoryGradients: Record<string, string> = {
  "Getting Started": "from-[#D4A853] to-[#B8942E]",
  "Prompt Engineering": "from-[#B8942E] to-[#D4A853]",
  "AI Models": "from-[#D4A853] to-[#8B7029]",
  "Image Generation": "from-[#B8942E] to-[#D4A853]",
  "AI Canvas": "from-[#8B7029] to-[#D4A853]",
  "Advanced Techniques": "from-[#D4A853] to-[#B8942E]",
  "Creative Workflows": "from-[#B8942E] to-[#8B7029]",
  "Tips & Tricks": "from-[#D4A853] to-[#B8942E]",
};

export default function BlogCard({
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  coverImage,
}: BlogCardProps) {
  const gradient = category
    ? categoryGradients[category] || "from-[#D4A853] to-[#B8942E]"
    : "from-[#D4A853] to-[#B8942E]";

  return (
    <article className="group overflow-hidden rounded-xl border border-[#262626] bg-[#141414] transition-colors hover:border-[#D4A853]/50">
      {/* Cover Image */}
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}
            >
              <svg
                className="h-12 w-12 text-white/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
          )}
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 to-transparent" />
          {/* Category badge on image */}
          {category && (
            <span className="absolute left-3 top-3 rounded-full bg-[#D4A853]/90 px-3 py-1 text-xs font-semibold text-[#0A0A0A] backdrop-blur-sm">
              {category}
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {publishedAt && (
          <time
            dateTime={publishedAt}
            className="text-xs text-[#555555]"
          >
            {new Date(publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
        <Link href={`/blog/${slug}`}>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-[#FAFAFA] transition-colors group-hover:text-[#D4A853]">
            {title}
          </h3>
        </Link>
        {excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-[#888888]">
            {excerpt}
          </p>
        )}
        <Link
          href={`/blog/${slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#D4A853] transition-colors hover:text-[#F5E6C8]"
        >
          Read more
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
