import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Cookie Policy",
  description:
    "Learn about how LeonardoAI.VIP uses cookies on leonardoai.vip, including essential cookies, analytics cookies, and advertising cookies.",
  path: "/cookie-policy",
  keywords: ["cookie policy", "cookies", "LeonardoAI.VIP cookies", "tracking"],
});

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "Cookie Policy", url: "https://leonardoai.vip/cookie-policy" },
        ])}
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-neutral-100">Cookie Policy</h1>
        <p className="mt-3 text-sm text-[#555555]">
          Last updated: March 17, 2026
        </p>

        <div className="mt-10 space-y-8 text-neutral-300">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              1. What Are Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work efficiently, provide useful information to
              website owners, and enhance the user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              2. How We Use Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              LeonardoAI.VIP (
              <Link href="/" className="text-[#D4A853] hover:text-[#F5E6C8]">
                leonardoai.vip
              </Link>
              ) uses cookies for several purposes. Below is a breakdown of the
              types of cookies we use:
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              3. Essential Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              These cookies are necessary for the website to function properly.
              They enable basic features such as page navigation, security, and
              access to secure areas. The website cannot function properly
              without these cookies.
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-[#262626]">
              <table className="w-full text-sm">
                <thead className="bg-[#141414]">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-neutral-200">
                      Cookie
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-neutral-200">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-neutral-200">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]">
                  <tr>
                    <td className="px-4 py-3 text-neutral-400">__cf_bm</td>
                    <td className="px-4 py-3 text-neutral-400">
                      Cloudflare bot management
                    </td>
                    <td className="px-4 py-3 text-neutral-400">30 minutes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-400">cf_clearance</td>
                    <td className="px-4 py-3 text-neutral-400">
                      Cloudflare security clearance
                    </td>
                    <td className="px-4 py-3 text-neutral-400">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              4. Analytics Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              We use Google Analytics to understand how visitors interact with
              our website. These cookies collect information about your use of
              the Site, including which pages you visit most often, how long you
              spend on each page, and any error messages you encounter.
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-[#262626]">
              <table className="w-full text-sm">
                <thead className="bg-[#141414]">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-neutral-200">
                      Cookie
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-neutral-200">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-neutral-200">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]">
                  <tr>
                    <td className="px-4 py-3 text-neutral-400">_ga</td>
                    <td className="px-4 py-3 text-neutral-400">
                      Google Analytics - distinguishes unique users
                    </td>
                    <td className="px-4 py-3 text-neutral-400">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-400">_ga_*</td>
                    <td className="px-4 py-3 text-neutral-400">
                      Google Analytics 4 - maintains session state
                    </td>
                    <td className="px-4 py-3 text-neutral-400">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              5. Advertising Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              We use Google AdSense to display advertisements on our Site.
              Google AdSense may use cookies to serve ads based on your prior
              visits to our Site or other websites. These cookies allow Google
              and its partners to show you relevant advertisements.
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-[#262626]">
              <table className="w-full text-sm">
                <thead className="bg-[#141414]">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-neutral-200">
                      Cookie
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-neutral-200">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-neutral-200">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]">
                  <tr>
                    <td className="px-4 py-3 text-neutral-400">NID</td>
                    <td className="px-4 py-3 text-neutral-400">
                      Google advertising preferences
                    </td>
                    <td className="px-4 py-3 text-neutral-400">6 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-400">IDE</td>
                    <td className="px-4 py-3 text-neutral-400">
                      Google DoubleClick ad targeting
                    </td>
                    <td className="px-4 py-3 text-neutral-400">1 year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-400">
                      test_cookie
                    </td>
                    <td className="px-4 py-3 text-neutral-400">
                      Check if browser supports cookies
                    </td>
                    <td className="px-4 py-3 text-neutral-400">15 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 leading-relaxed">
              You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A853] hover:text-[#F5E6C8]"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              6. Managing Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              Most web browsers allow you to control cookies through their
              settings. You can set your browser to refuse cookies, delete
              existing cookies, or alert you when a cookie is being set.
              However, please note that disabling cookies may affect the
              functionality of our Site.
            </p>
            <p className="mt-3 leading-relaxed">
              For more information about managing cookies in your browser, visit
              your browser&apos;s help documentation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              7. Changes to This Policy
            </h2>
            <p className="mt-3 leading-relaxed">
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              8. Contact Us
            </h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about our use of cookies, please contact
              us at{" "}
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
