import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Read the LeonardoAI.VIP privacy policy to understand how we collect, use, and protect your personal information when you visit leonardoai.vip.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "data protection", "LeonardoAI.VIP privacy"],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "Privacy Policy", url: "https://leonardoai.vip/privacy-policy" },
        ])}
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-neutral-100">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[#555555]">
          Last updated: March 17, 2026
        </p>

        <div className="mt-10 space-y-8 text-neutral-300">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              1. Introduction
            </h2>
            <p className="mt-3 leading-relaxed">
              Welcome to LeonardoAI.VIP (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website{" "}
              <Link href="/" className="text-[#D4A853] hover:text-[#F5E6C8]">
                leonardoai.vip
              </Link>{" "}
              (the &quot;Site&quot;). Please read this policy carefully. By using the
              Site, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              2. Information We Collect
            </h2>
            <h3 className="mt-4 text-lg font-medium text-neutral-200">
              2.1 Personal Information
            </h3>
            <p className="mt-2 leading-relaxed">
              We may collect personal information that you voluntarily provide
              when you use our contact form, including your name, email address,
              and any message content you submit.
            </p>
            <h3 className="mt-4 text-lg font-medium text-neutral-200">
              2.2 Automatically Collected Information
            </h3>
            <p className="mt-2 leading-relaxed">
              When you visit the Site, we may automatically collect certain
              information about your device, including your IP address, browser
              type, operating system, referring URLs, pages viewed, and the
              dates/times of your visits. This information is collected through
              cookies, log files, and similar technologies.
            </p>
            <h3 className="mt-4 text-lg font-medium text-neutral-200">
              2.3 Analytics Data
            </h3>
            <p className="mt-2 leading-relaxed">
              We use Google Analytics to collect anonymized usage data about how
              visitors interact with our Site. This includes page views, session
              duration, bounce rates, and demographic information. Google
              Analytics uses cookies to collect this data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              3. How We Use Your Information
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>To respond to your inquiries and contact form submissions</li>
              <li>To improve and optimize our website and content</li>
              <li>To analyze usage patterns and trends</li>
              <li>To serve relevant advertisements through Google AdSense</li>
              <li>To prevent fraudulent activity and ensure site security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              4. Third-Party Services
            </h2>
            <p className="mt-3 leading-relaxed">
              We use the following third-party services that may collect
              information about you:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>
                <strong>Google Analytics</strong> &mdash; for website analytics
                and usage tracking
              </li>
              <li>
                <strong>Google AdSense</strong> &mdash; for displaying
                advertisements, which may use cookies to serve ads based on your
                prior visits
              </li>
              <li>
                <strong>Cloudflare</strong> &mdash; for website hosting,
                security, and performance optimization
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Each of these services has its own privacy policy governing the
              use of your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              5. Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              We use cookies and similar tracking technologies to track activity
              on our Site. For detailed information about the cookies we use,
              please see our{" "}
              <Link
                href="/cookie-policy"
                className="text-[#D4A853] hover:text-[#F5E6C8]"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              6. Data Retention
            </h2>
            <p className="mt-3 leading-relaxed">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. Contact
              form submissions are retained for the purpose of responding to
              your inquiries and for our business records.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              7. Your Rights (GDPR)
            </h2>
            <p className="mt-3 leading-relaxed">
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights, including:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to request erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:support@leonardoai.vip"
                className="text-[#D4A853] hover:text-[#F5E6C8]"
              >
                support@leonardoai.vip
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              8. Your Rights (CCPA)
            </h2>
            <p className="mt-3 leading-relaxed">
              If you are a California resident, the California Consumer Privacy
              Act (CCPA) provides you with specific rights regarding your
              personal information, including:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>
                The right to know what personal information we collect, use,
                disclose, or sell
              </li>
              <li>The right to delete your personal information</li>
              <li>The right to opt-out of the sale of personal information</li>
              <li>
                The right to non-discrimination for exercising your privacy
                rights
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              We do not sell your personal information. To exercise your rights,
              contact us at{" "}
              <a
                href="mailto:support@leonardoai.vip"
                className="text-[#D4A853] hover:text-[#F5E6C8]"
              >
                support@leonardoai.vip
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              9. Children&apos;s Privacy
            </h2>
            <p className="mt-3 leading-relaxed">
              Our Site is not intended for children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you become aware that a child has provided us with personal
              information, please contact us so we can take steps to remove such
              information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              10. Security
            </h2>
            <p className="mt-3 leading-relaxed">
              We use commercially reasonable measures to protect your personal
              information. However, no method of transmission over the Internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              11. Changes to This Policy
            </h2>
            <p className="mt-3 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last updated&quot; date.
              Your continued use of the Site after any changes constitutes
              acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              12. Contact Us
            </h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
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
