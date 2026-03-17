import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      {/* Amber gold accent glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[#D4A853]/10 blur-[120px]" />
        <div className="hero-glow-1 absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#B8942E]/8 blur-[80px]" />
        <div className="hero-glow-2 absolute -right-20 top-1/3 h-[250px] w-[250px] rounded-full bg-[#D4A853]/8 blur-[80px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-particle absolute left-[15%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#D4A853]/40" />
        <div className="hero-particle-delay absolute left-[75%] top-[30%] h-1 w-1 rounded-full bg-[#F5E6C8]/50" />
        <div className="hero-particle absolute left-[40%] top-[70%] h-1 w-1 rounded-full bg-[#D4A853]/30" />
        <div className="hero-particle-delay absolute left-[85%] top-[60%] h-1.5 w-1.5 rounded-full bg-[#F5E6C8]/40" />
        <div className="hero-particle absolute left-[25%] top-[80%] h-1 w-1 rounded-full bg-[#B8942E]/30" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#D4A853] hero-pulse" />
          <span className="text-xs font-medium text-[#F5E6C8] tracking-wide uppercase">
            AI Image Generation Mastery
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg">
          Master Leonardo AI &{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-[#D4A853] via-[#F5E6C8] to-[#D4A853] bg-clip-text text-transparent">
              Create Stunning Images
            </span>
            <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-[#D4A853]/0 via-[#D4A853]/60 to-[#D4A853]/0" />
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-200/90 sm:text-xl drop-shadow">
          Discover expert tutorials on Leonardo AI, master prompt engineering,
          compare image generation models, and unlock the full potential of AI art
          creation. Your creative journey starts here.
        </p>

        {/* Stats row */}
        <div className="mx-auto mt-10 flex max-w-lg justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D4A853] sm:text-3xl drop-shadow">8+</div>
            <div className="mt-1 text-xs text-neutral-300/70 uppercase tracking-wider">Categories</div>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D4A853] sm:text-3xl drop-shadow">Free</div>
            <div className="mt-1 text-xs text-neutral-300/70 uppercase tracking-wider">All Content</div>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D4A853] sm:text-3xl drop-shadow">Daily</div>
            <div className="mt-1 text-xs text-neutral-300/70 uppercase tracking-wider">New Tutorials</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A853] to-[#F5E6C8] px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] shadow-lg shadow-[#D4A853]/25 transition-all hover:shadow-[#D4A853]/40 hover:brightness-110"
          >
            Browse Tutorials
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/categories"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-[#D4A853]/50 hover:bg-[#D4A853]/10 hover:text-[#F5E6C8]"
          >
            Explore Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
