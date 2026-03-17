import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Accessibility Statement",
  description:
    "LeonardoAI.VIP is committed to ensuring digital accessibility for people with disabilities. Read our accessibility statement and WCAG 2.1 Level AA compliance commitment.",
  path: "/accessibility",
  keywords: [
    "accessibility",
    "WCAG 2.1",
    "digital accessibility",
    "LeonardoAI.VIP accessibility",
  ],
});

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "Accessibility", url: "https://leonardoai.vip/accessibility" },
        ])}
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-neutral-100">
          Accessibility Statement
        </h1>
        <p className="mt-3 text-sm text-[#555555]">
          Last updated: March 17, 2026
        </p>

        <div className="mt-10 space-y-8 text-neutral-300">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              Our Commitment
            </h2>
            <p className="mt-3 leading-relaxed">
              LeonardoAI.VIP is committed to ensuring digital accessibility for
              people with disabilities. We are continually improving the user
              experience for everyone and applying the relevant accessibility
              standards to ensure we provide equal access to all users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              Conformance Status
            </h2>
            <p className="mt-3 leading-relaxed">
              We strive to conform to the{" "}
              <strong className="text-neutral-100">
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </strong>
              . These guidelines explain how to make web content more accessible
              to people with a wide array of disabilities. Conforming to these
              guidelines helps ensure that the website is accessible to all
              people, including those who are blind, have low vision, are deaf,
              have limited motor abilities, or have cognitive disabilities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              Accessibility Features
            </h2>
            <p className="mt-3 leading-relaxed">
              LeonardoAI.VIP includes the following accessibility features:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>
                <strong className="text-neutral-200">
                  Keyboard Navigation
                </strong>{" "}
                &mdash; All functionality is available via keyboard navigation
              </li>
              <li>
                <strong className="text-neutral-200">Skip to Content</strong>{" "}
                &mdash; A skip navigation link is provided to bypass repetitive
                content
              </li>
              <li>
                <strong className="text-neutral-200">Semantic HTML</strong>{" "}
                &mdash; We use proper HTML elements and ARIA attributes to
                convey meaning and structure
              </li>
              <li>
                <strong className="text-neutral-200">Color Contrast</strong>{" "}
                &mdash; Text and interactive elements meet minimum contrast
                ratios as defined by WCAG 2.1
              </li>
              <li>
                <strong className="text-neutral-200">Responsive Design</strong>{" "}
                &mdash; The website adapts to different screen sizes and zoom
                levels
              </li>
              <li>
                <strong className="text-neutral-200">Alt Text</strong> &mdash;
                Images include descriptive alternative text
              </li>
              <li>
                <strong className="text-neutral-200">Form Labels</strong>{" "}
                &mdash; All form inputs have associated labels for screen reader
                users
              </li>
              <li>
                <strong className="text-neutral-200">Focus Indicators</strong>{" "}
                &mdash; Clear focus indicators are provided for interactive
                elements
              </li>
              <li>
                <strong className="text-neutral-200">Structured Content</strong>{" "}
                &mdash; Proper heading hierarchy and landmark regions are used
                throughout
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              Third-Party Content
            </h2>
            <p className="mt-3 leading-relaxed">
              Our website may include third-party content, such as
              advertisements served by Google AdSense, that may not be fully
              accessible. While we cannot control the accessibility of
              third-party content, we make every effort to choose accessible
              services and advocate for accessibility with our partners.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              Known Limitations
            </h2>
            <p className="mt-3 leading-relaxed">
              Despite our best efforts, some content may not yet be fully
              accessible. We are actively working to identify and resolve
              accessibility issues. Known limitations include:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>
                Some older blog content may have images without adequate
                alternative text
              </li>
              <li>
                Third-party advertising content may not meet all accessibility
                standards
              </li>
              <li>
                Some embedded third-party tools or widgets may have limited
                accessibility
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              Feedback and Contact
            </h2>
            <p className="mt-3 leading-relaxed">
              We welcome your feedback on the accessibility of LeonardoAI.VIP. If
              you encounter any accessibility barriers or have suggestions for
              improvement, please contact us:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@leonardoai.vip"
                  className="text-[#D4A853] hover:text-[#F5E6C8]"
                >
                  support@leonardoai.vip
                </a>
              </li>
              <li>
                Contact form:{" "}
                <Link
                  href="/contact"
                  className="text-[#D4A853] hover:text-[#F5E6C8]"
                >
                  leonardoai.vip/contact
                </Link>
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              We try to respond to accessibility feedback within 5 business
              days. We will work with you to find a solution and make the
              necessary changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              Assessment and Evaluation
            </h2>
            <p className="mt-3 leading-relaxed">
              LeonardoAI.VIP assesses the accessibility of our website through a
              combination of automated testing tools, manual testing, and user
              feedback. We regularly review our content and design to ensure
              ongoing compliance with accessibility standards.
            </p>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-[#262626] pt-8">
          <Link
            href="/"
            className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
          >
            Home
          </Link>
          <span className="text-[#262626]">|</span>
          <Link
            href="/contact"
            className="text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
