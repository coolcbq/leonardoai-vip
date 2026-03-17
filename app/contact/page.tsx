import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us – Questions & Partnerships",
  description:
    "Get in touch with LeonardoAI.VIP for questions about Leonardo AI, advertising opportunities, partnership proposals, or general feedback.",
  path: "/contact",
  keywords: [
    "contact LeonardoAI.VIP",
    "leonardo ai questions",
    "advertising opportunities",
    "partnership proposals",
    "ai art help",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "Contact", url: "https://leonardoai.vip/contact" },
        ])}
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-100">Contact Us</h1>
          <p className="mt-4 text-lg text-neutral-400">
            Have a question about Leonardo AI, an advertising opportunity, or a
            partnership proposal? We would love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-6">
              <h2 className="text-lg font-semibold text-neutral-100">
                Alternative Contact
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                Prefer to reach us directly? Send an email to:
              </p>
              <a
                href="mailto:support@leonardoai.vip"
                className="mt-2 inline-block text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
              >
                support@leonardoai.vip
              </a>
            </div>

            <div className="rounded-xl border border-[#262626] bg-[#141414] p-6">
              <h2 className="text-lg font-semibold text-neutral-100">
                What We Respond To
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li>Leonardo AI questions &amp; tutorials requests</li>
                <li>Advertising &amp; sponsorship opportunities</li>
                <li>Partnership &amp; collaboration requests</li>
                <li>Guest post submissions</li>
                <li>General questions &amp; feedback</li>
              </ul>
            </div>
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
            href="/about"
            className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
          >
            About LeonardoAI.VIP
          </Link>
        </div>
      </section>
    </>
  );
}
