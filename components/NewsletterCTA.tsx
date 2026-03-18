import Link from "next/link";

export default function NewsletterCTA() {
  return (
    <div className="rounded-2xl border border-[#D4A853]/20 bg-gradient-to-br from-[#D4A853]/5 to-[#B8942E]/5 p-8 text-center">
      <h3 className="text-xl font-bold text-[#FAFAFA]">
        Get Leonardo AI Tips & Tutorials
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-[#888888]">
        Stay updated with the latest Leonardo AI tutorials, prompt engineering
        tips, and AI image generation techniques.
      </p>

      <div className="mx-auto mt-6 flex max-w-md justify-center gap-3">
        <Link
          href="/blog"
          className="rounded-lg bg-[#D4A853] px-6 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#F5E6C8]"
        >
          Browse Tutorials
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-[#D4A853]/40 px-6 py-2.5 text-sm font-semibold text-[#D4A853] transition-colors hover:bg-[#D4A853]/10"
        >
          Get in Touch
        </Link>
      </div>

      <p className="mt-4 text-xs text-[#555555]">
        New tutorials published daily. Bookmark this site!
      </p>
    </div>
  );
}
