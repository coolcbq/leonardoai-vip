import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span className="text-xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-[#D4A853] to-[#F5E6C8] bg-clip-text text-transparent">
                  LeonardoAI
                </span>
                <span className="text-[#555555] font-medium">.VIP</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-neutral-400">
              Your ultimate guide to mastering Leonardo AI. Tutorials, prompt
              engineering tips, model comparisons, and more for AI image generation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Leonardo AI Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Get in Touch
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@leonardoai.vip"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  support@leonardoai.vip
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-neutral-400 transition-colors hover:text-[#D4A853]"
                >
                  Business Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#262626] pt-6">
          <h3 className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-[#555555]">
            Partner Links
          </h3>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <a href="https://raoedits.top" target="_blank" rel="noopener noreferrer" className="text-xs text-[#555555] transition-colors hover:text-[#D4A853]">Rao Edits</a>
            <a href="https://jobe23.com" target="_blank" rel="noopener noreferrer" className="text-xs text-[#555555] transition-colors hover:text-[#D4A853]">Jobe23</a>
            <a href="https://aidetector.ink" target="_blank" rel="noopener noreferrer" className="text-xs text-[#555555] transition-colors hover:text-[#D4A853]">AI Detector</a>
            <a href="https://cluely.cc" target="_blank" rel="noopener noreferrer" className="text-xs text-[#555555] transition-colors hover:text-[#D4A853]">Cluely</a>
            <a href="https://cluelyai.net" target="_blank" rel="noopener noreferrer" className="text-xs text-[#555555] transition-colors hover:text-[#D4A853]">Cluely AI</a>
          </div>
        </div>

        <div className="mt-6 border-t border-[#262626] pt-6 text-center text-sm text-[#555555]">
          <p>
            &copy; {new Date().getFullYear()} LeonardoAI.VIP. All rights reserved. |
            Leonardo AI Tutorials &amp; Guides
          </p>
        </div>
      </div>
    </footer>
  );
}
