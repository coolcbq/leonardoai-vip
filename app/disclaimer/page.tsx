import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Disclaimer",
  description:
    "Read the LeonardoAI.VIP disclaimer covering content accuracy, third-party tools, and important disclosures for our Leonardo AI tutorial content.",
  path: "/disclaimer",
  keywords: [
    "disclaimer",
    "content disclaimer",
    "LeonardoAI.VIP disclaimer",
    "affiliate disclaimer",
  ],
});

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://leonardoai.vip" },
          { name: "Disclaimer", url: "https://leonardoai.vip/disclaimer" },
        ])}
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-neutral-100">Disclaimer</h1>
        <p className="mt-3 text-sm text-[#555555]">
          Last updated: March 17, 2026
        </p>

        <div className="mt-10 space-y-8 text-neutral-300">
          {/* Results Disclaimer */}
          <div className="rounded-xl border border-[#D4A853]/30 bg-[#D4A853]/5 p-6">
            <h2 className="text-2xl font-semibold text-[#D4A853]">
              Results Disclaimer
            </h2>
            <p className="mt-3 leading-relaxed">
              Any examples, images, or results shown or implied on{" "}
              <Link href="/" className="text-[#D4A853] hover:text-[#F5E6C8]">
                leonardoai.vip
              </Link>{" "}
              are for illustration purposes only. There is no guarantee that
              you will achieve the same or similar results using the techniques,
              prompts, or strategies presented on this website.
            </p>
            <p className="mt-3 leading-relaxed">
              <strong className="text-neutral-100">
                Results will vary based on a number of factors
              </strong>
              , including but not limited to the AI model version, your prompt
              crafting skills, parameter settings, Leonardo AI subscription tier,
              and the evolving nature of the platform itself.
            </p>
            <p className="mt-3 leading-relaxed">
              Any references to specific outputs or quality levels achieved by
              others should not be considered as &quot;typical&quot; or &quot;guaranteed&quot;
              results. AI image generation involves inherent randomness and
              LeonardoAI.VIP makes no promises about the specific outcomes of
              following our tutorials.
            </p>
            <p className="mt-3 leading-relaxed font-medium text-neutral-200">
              You accept that AI-generated results are non-deterministic and
              may differ from examples shown. LeonardoAI.VIP shall not be held
              liable for any dissatisfaction with outputs resulting from use of
              our content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              1. General Disclaimer
            </h2>
            <p className="mt-3 leading-relaxed">
              The information provided on LeonardoAI.VIP (
              <Link href="/" className="text-[#D4A853] hover:text-[#F5E6C8]">
                leonardoai.vip
              </Link>
              ) is for general informational and educational purposes only. All
              content on this Site is provided in good faith; however, we make
              no representation or warranty of any kind, express or implied,
              regarding the accuracy, adequacy, validity, reliability,
              availability, or completeness of any information on the Site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              2. Not Professional Advice
            </h2>
            <p className="mt-3 leading-relaxed">
              The content on this Site is not intended to be and does not
              constitute professional design, legal, or business advice. Our
              tutorials and guides are educational in nature and focused on
              helping you learn Leonardo AI tools and techniques.
            </p>
            <p className="mt-3 leading-relaxed">
              Before using AI-generated content for commercial purposes, we
              recommend reviewing Leonardo AI&apos;s terms of service and consulting
              with appropriate legal professionals regarding intellectual
              property and usage rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              3. No Guarantees
            </h2>
            <p className="mt-3 leading-relaxed">
              LeonardoAI.VIP does not guarantee any specific results from the use of
              our content. The techniques, prompts, and methods described on
              this Site may produce different results depending on your setup,
              and we do not warrant that following our guides will produce
              identical outputs.
            </p>
            <p className="mt-3 leading-relaxed">
              AI tools and platforms evolve rapidly. Features, interfaces, and
              capabilities described in our tutorials may change as Leonardo AI
              updates their platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              4. Affiliate and Advertising Disclosure
            </h2>
            <p className="mt-3 leading-relaxed">
              LeonardoAI.VIP may contain affiliate links and advertisements. This
              means we may earn a commission if you click on a link or make a
              purchase through one of our affiliate links, at no additional cost
              to you. We only recommend products and services that we believe
              provide value to our readers.
            </p>
            <p className="mt-3 leading-relaxed">
              Advertisements on this Site are served by third-party advertising
              networks, including Google AdSense. The presence of advertisements
              does not constitute an endorsement of the advertised products or
              services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              5. Third-Party Content
            </h2>
            <p className="mt-3 leading-relaxed">
              Our Site may contain links to external websites, tools, or
              resources that are not provided or maintained by LeonardoAI.VIP. We do
              not guarantee the accuracy, relevance, timeliness, or completeness
              of any information on these external websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              6. AI-Generated Content Notice
            </h2>
            <p className="mt-3 leading-relaxed">
              Images and artwork shown in our tutorials may be AI-generated
              using Leonardo AI or similar tools. These are used for
              educational and demonstration purposes. Any resemblance to
              existing copyrighted works is unintentional.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              7. Changes to Content
            </h2>
            <p className="mt-3 leading-relaxed">
              The AI art landscape is constantly evolving. Information that was
              accurate at the time of publication may become outdated. While we
              strive to keep our content current, we cannot guarantee that all
              information is up to date at all times.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              8. Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed">
              Under no circumstances shall LeonardoAI.VIP or its owners be liable
              for any direct, indirect, incidental, consequential, special, or
              exemplary damages arising out of or in connection with your use of
              the Site or reliance on any content provided herein.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">
              9. Contact Us
            </h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about this Disclaimer, please contact us
              at{" "}
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
