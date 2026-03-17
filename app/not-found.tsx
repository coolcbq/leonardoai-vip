import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#D4A853]">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-100">
          Page Not Found
        </h2>
        <p className="mt-2 text-neutral-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-[#D4A853] px-6 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#F5E6C8]"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-[#262626] px-6 py-2.5 text-sm font-semibold text-neutral-300 transition-colors hover:border-[#D4A853] hover:text-[#D4A853]"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
