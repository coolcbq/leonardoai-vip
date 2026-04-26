import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, organizationJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://leonardoai.vip"),
  alternates: {
    canonical: "/",
  },
  title: {
    default:
      "LeonardoAI.VIP - Leonardo AI Tutorials, Prompts & AI Art Guides",
    template: "%s | LeonardoAI.VIP",
  },
  description:
    "Independent Leonardo AI tutorials, prompt engineering guides, and AI art techniques. LeonardoAI.VIP helps creators learn Leonardo AI workflows for better image generation.",
  keywords: [
    "leonardo ai tutorial",
    "leonardo ai prompts",
    "ai image generation",
    "ai art guide",
    "leonardo ai tips",
    "ai canvas",
    "prompt engineering",
    "ai art techniques",
  ],
  authors: [{ name: "LeonardoAI.VIP", url: "https://leonardoai.vip" }],
  creator: "LeonardoAI.VIP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leonardoai.vip",
    siteName: "LeonardoAI.VIP",
    title: "LeonardoAI.VIP - Leonardo AI Tutorials, Prompts & AI Art Guides",
    description:
      "Independent Leonardo AI tutorials, prompt engineering guides, and AI art techniques for creators learning AI image generation workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeonardoAI.VIP - Leonardo AI Tutorials, Prompts & AI Art Guides",
    description:
      "Independent tutorials, prompt guides, and AI art techniques for Leonardo AI creators.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationJsonLd()} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJG4YHDZT5"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-CJG4YHDZT5');`,
          }}
        />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5066440472869180"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-[#0A0A0A] font-sans text-neutral-100 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#D4A853] focus:px-4 focus:py-2 focus:text-[#0A0A0A]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
