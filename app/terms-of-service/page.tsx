import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service",
  description:
    "Read the LeonardoAI.VIP terms of service governing your use of leonardoai.vip, including content usage, intellectual property, and disclaimers.",
  path: "/terms-of-service",
  keywords: ["terms of service", "terms and conditions", "LeonardoAI.VIP terms"],
});

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          {
            name: "Terms of Service",
            url: "https://leonardoai.vip/terms-of-service",
          },
        ])}
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-neutral-100">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-[#555555]">
          Last updated: March 17, 2026
        </p>

        <div className="mt-10 space-y-8 text-neutral-300">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 leading-relaxed">
              By accessing and using{" "}
              <Link href="/" className="text-[#D4A853] hover:text-[#F5E6C8]">
                leonardoai.vip
              </Link>{" "}
              (the &quot;Site&quot;), operated by LeonardoAI.VIP (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
              you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you
              do not agree to these Terms, please do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              2. Use of Content
            </h2>
            <p className="mt-3 leading-relaxed">
              The content on this Site, including tutorials, guides, and other
              materials, is provided for informational and educational purposes
              only. You may read, share, and reference our content for personal,
              non-commercial use. You may not:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>
                Reproduce, distribute, or republish our content without prior
                written permission
              </li>
              <li>
                Use our content to create derivative works for commercial
                purposes
              </li>
              <li>
                Scrape, crawl, or use automated means to extract content from
                the Site without permission
              </li>
              <li>
                Frame or embed our content on other websites without
                authorization
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              3. Intellectual Property
            </h2>
            <p className="mt-3 leading-relaxed">
              All content, trademarks, logos, and other intellectual property on
              this Site are owned by LeonardoAI.VIP or licensed to us. The LeonardoAI.VIP name,
              logo, and all related names, logos, product and service names,
              designs, and slogans are trademarks of LeonardoAI.VIP. You must not use
              such marks without our prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              4. User Submissions
            </h2>
            <p className="mt-3 leading-relaxed">
              When you submit information through our contact form or other
              communication channels, you grant us a non-exclusive, royalty-free
              right to use, store, and process that information for the purpose
              of responding to your inquiry. You represent that any information
              you submit is accurate and that you have the right to share it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              5. Third-Party Links
            </h2>
            <p className="mt-3 leading-relaxed">
              Our Site may contain links to third-party websites or services
              that are not owned or controlled by LeonardoAI.VIP. We have no control
              over, and assume no responsibility for, the content, privacy
              policies, or practices of any third-party websites. We encourage
              you to review the terms and privacy policies of any third-party
              sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              6. Disclaimers
            </h2>
            <p className="mt-3 leading-relaxed">
              The content on this Site is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without any warranties of any kind, either express
              or implied. LeonardoAI.VIP does not warrant that the Site will be
              uninterrupted, error-free, or free of viruses or other harmful
              components.
            </p>
            <p className="mt-3 leading-relaxed">
              The information provided on this Site, including AI art tutorials,
              prompt engineering guides, and technical information, is for
              educational purposes only and should not be construed as
              professional advice. Please see our{" "}
              <Link
                href="/disclaimer"
                className="text-[#D4A853] hover:text-[#F5E6C8]"
              >
                Disclaimer
              </Link>{" "}
              for more details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              7. Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed">
              In no event shall LeonardoAI.VIP, its owners, contributors, or affiliates
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from
              your access to or use of (or inability to access or use) the Site
              or any content on it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              8. Indemnification
            </h2>
            <p className="mt-3 leading-relaxed">
              You agree to defend, indemnify, and hold harmless LeonardoAI.VIP and its
              owners, employees, and agents from and against any claims,
              damages, obligations, losses, liabilities, costs, or expenses
              arising from your use of the Site or your violation of these
              Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              9. Modifications
            </h2>
            <p className="mt-3 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes
              will be posted on this page with an updated &quot;Last updated&quot; date.
              Your continued use of the Site following the posting of changes
              constitutes acceptance of those changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              10. Governing Law
            </h2>
            <p className="mt-3 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              applicable law, without regard to conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              11. Contact
            </h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:support@leonardoai.vip"
                className="text-[#D4A853] hover:text-[#F5E6C8]"
              >
                support@leonardoai.vip
              </a>{" "}
              or through our{" "}
              <Link
                href="/contact"
                className="text-[#D4A853] hover:text-[#F5E6C8]"
              >
                contact page
              </Link>
              .
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
